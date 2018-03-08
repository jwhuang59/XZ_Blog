layui.use(['layedit','layer'],function(){
  var layedit = layui.layedit;
  var layer = layui.layer;
  var text=layedit.build('text', {
            tool: ['face',  'left', 'center', 'right',]
            ,height: 200
          })
  var status1 = WB2.checkLogin();
  var status2 = QC.Login.check();
  var paras = {};  

  $.ajax({
    type:'post',
    url:'../model/msgData.php',
    dataType:'json',
    success:function(msg){
      function sort(a,b){  
      return b.mid - a.mid;  
      }
      msg.sort(sort);
      var s="";
      for(var i=0;i<msg.length-1;i++){
        s += "<li>"
        s += "<img src='"+msg[i].head_pic+"'>"
        s += "<span class='name'>"+msg[i].nickname+"</span><span class='content'>"+msg[i].content+"</span>"
        s += "<p class='record'>"
        s += "<i class='layui-icon'>&#xe60e;</i><span class='time'>"+msg[i].time+"</span>"
        s += "<i class='layui-icon'>&#xe611;</i><span class='reply'>回复</span>"
        s += "<i class='layui-icon pic_zan'>&#xe6c6;</i><span class='zan'>赞个(0)</span>"
        s += "</p>"
        s += "</li>"
      }
      $(".share .wrap .wrap_msg .comment").html(s);
      $(".share .wrap .wrap_msg h1").html("评论 ("+msg[msg.length-1]+")")
    }
  })

function p(s) {
    return s < 10 ? '0' + s : s;
}
  var myDate = new Date();
  var year=myDate.getFullYear();
  var month=myDate.getMonth()+1;
  var date=myDate.getDate(); 
  var h=myDate.getHours();
  var m=myDate.getMinutes();
  var s=myDate.getSeconds();  
  var now=year+'-'+p(month)+"-"+p(date)+" "+p(h)+':'+p(m)+":"+p(s);


function isLoginweibo(){
    WB2.anyWhere(function (W) {

      W.widget.connectButton({
          id: "wb_connect_btn",
          type: '3,2',
          callback: {
              login: function (o) { 

                  $.ajax({
                    type:'post',
                    url:'../model/msg.php',
                    data:{"head_pic":o.avatar_hd,"nickname":o.name,"content":layedit.getContent(text),},
                    dataType:'json',
                    success:function(msg){
                     
                    }

                  })
              window.location.reload();

              },
            }
      });
    });

}

function isLoginqq(){
    QC.Login({  
        btnId: "qqLoginBtn",   
        scope: "all",  
        size: "A_M"  
    });  

    QC.api("get_user_info", paras)  
        .success(function (s) {  

          $.ajax({
            type:'post',
            url:'../model/msg.php',
            data:{"head_pic":s.data.figureurl_1,"nickname":s.data.nickname,"content":layedit.getContent(text),},
            dataType:'json',
            success:function(msg){
             
            }

          })
          window.location.reload();

        })  
        .error(function (f) {   
            alert("获取用户信息失败！");  
        })

}


  $('.site-demo-layedit').on('click', function(){

    if(layedit.getContent(text) != ""){
        console.log(status);
        if(status1 == false && status2 == false){
          $(".share .wrap .wrap_msg .login").css({"z-index":"999"}).animate({"top":"50%","opacity":"1"},300)
          $(".share .wrap .wrap_msg .shade").fadeIn();
          $("body").css({"overflow-y":"hidden"})
          $(".share .wrap .wrap_msg .login .login_title span").click(function(){
            $(".share .wrap .wrap_msg .login").css({"z-index":"0"}).animate({"top":"40%","opacity":"0"},300)
            $(".share .wrap .wrap_msg .shade").fadeOut();
            $("body").css({"overflow-y":"auto"})
          })
          $(".share .wrap .wrap_msg .shade").click(function(){
            $(".share .wrap .wrap_msg .login").css({"z-index":"0"}).animate({"top":"40%","opacity":"0"},300)
            $(".share .wrap .wrap_msg .shade").fadeOut();
            $("body").css({"overflow-y":"auto"})
          })     
          isLoginweibo();
      
          isLoginqq();           

        }else{

          if(status1 == true){
              WB2.anyWhere(function (W) {

                  W.widget.connectButton({
                      id: "wb_connect_btn",
                      type: '3,2',
                      callback: {
                          login: function (o) { 
                          $.ajax({
                            type:'post',
                            url:'../model/msg.php',
                            data:{"head_pic":o.avatar_hd,"nickname":o.name,"content":layedit.getContent(text),},
                            beforeSend:function(){
                              layer.load(0, {time:500});     
                            },
                            success:function(msg){
                                
                                var count = $(".share .wrap .wrap_msg h1").text()
                                var num = count.replace(/[^0-9]/ig,"")  //截取字符串里面的数字部分
                                var str = "";
                                str += "<li>"
                                str += "<img src='"+o.avatar_hd+"'>"
                                str += "<span class='name'>"+o.name+"</span><span class='content'>"+layedit.getContent(text)+"</span>"
                                str += "<p class='record'>"
                                str += "<i class='layui-icon'>&#xe60e;</i><span class='time'>"+now+"</span>"
                                str += "<i class='layui-icon'>&#xe611;</i><span class='reply'>回复</span>"
                                str += "<i class='layui-icon pic_zan'>&#xe6c6;</i><span class='zan'>赞个(0)</span>"
                                str += "</p>"
                                str += "</li>"

                              $(".share .wrap .wrap_msg .comment").prepend(str);
                              $(".share .wrap .wrap_msg h1").html("评论 ("+(parseInt(num)+1)+")")

                            }
                          })
                              $(".share .wrap .wrap_msg .msg #text").text("")
                              $(".share .wrap .wrap_msg .msg #text").val("")
                           setTimeout("layer.msg('留言成功',{icon:1, time:2000,})",500);

                          },
                        }
                  });
              });

          }
          if(status2 == true){
              QC.api("get_user_info", paras)  
                  .success(function (s) {  

                    $.ajax({
                        type:'post',
                        url:'../model/msg.php',
                        data:{"head_pic":s.data.figureurl_1,"nickname":s.data.name,"content":layedit.getContent(text),},
                        beforeSend:function(){
                          layer.load(0, {time:500});     
                        },
                        success:function(msg){
                            
                            var count = $(".share .wrap .wrap_msg h1").text()
                            var num = count.replace(/[^0-9]/ig,"")  //截取字符串里面的数字部分
                            var str = "";
                            str += "<li>"
                            str += "<img src='"+s.data.figureurl_1+"'>"
                            str += "<span class='name'>"+s.data.nickname+"</span><span class='content'>"+layedit.getContent(text)+"</span>"
                            str += "<p class='record'>"
                            str += "<i class='layui-icon'>&#xe60e;</i><span class='time'>"+now+"</span>"
                            str += "<i class='layui-icon'>&#xe611;</i><span class='reply'>回复</span>"
                            str += "<i class='layui-icon pic_zan'>&#xe6c6;</i><span class='zan'>赞个(0)</span>"
                            str += "</p>"
                            str += "</li>"

                          $(".share .wrap .wrap_msg .comment").prepend(str);
                          $(".share .wrap .wrap_msg h1").html("评论 ("+(parseInt(num)+1)+")")

                        }
                      })
                        $(".share .wrap .wrap_msg .msg #text").text("")
                        $(".share .wrap .wrap_msg .msg #text").val("")
                       setTimeout("layer.msg('留言成功',{icon:1, time:2000,})",500);

                  })
            
          }
	           
        }

    }else{
        layer.msg('最少说一个字吧',{icon:5, time:2000,})

    }

});

WB2.anyWhere(function (W) {

    W.widget.connectButton({
        id: "wb_connect_btn",
        type: '3,2',
        callback: {
            login: function (o) { 

             $(".share .wrap .wrap_msg .user").css("display","inline-block");
             $(".share .wrap .wrap_msg .user .name").attr("href","//weibo.com/u/"+o.id);
             $(".share .wrap .wrap_msg .user .img").attr("href","//weibo.com/u/"+o.id);
             $(".share .wrap .wrap_msg .user .name").html(o.name); 
             $(".share .wrap .wrap_msg .user img").attr("src",o.avatar_hd); 
    
            },
            logout: function () { 

              thirdparty(null,null,o.avatar_hd, o.name ,3, o.id);
            }
          }
    });
}); 


QC.api("get_user_info", paras)  
    .success(function (s) {  

      $(".share .wrap .wrap_msg .user").css("display","inline-block");
      $(".share .wrap .wrap_msg .user .name").html(s.data.nickname); 
      $(".share .wrap .wrap_msg .user img").attr("src",s.data.figureurl_1);

})


$(".share .wrap .wrap_msg .user .loginout").click(function(){
    WB2.logout(function() {
              window.location.href='message.html';
      });
    QC.Login.signOut();
    window.location.reload();

})

});


