
//分类文章

$.ajax({
  type:'post',
  url:'../model/category.php',
  data:{"type":$(".main-left .breadcrumb label").text()},
  dataType:'json',
  success:function(list){
    var s= "";
    for(var i=0;i<list.length;i++){
      s+="<li>"
      s+="<a class='pic' href='../article/"+list[i].aid+".html'><img src='../admin/img-list/"+list[i].aid+".jpg'></a>"
      s+="<p class='title'><a href='../article/"+list[i].aid+".html'>"+list[i].title+"</a></p>"
      s+="<div class='date'><i class='layui-icon'>&#xe60e;</i><span class='time'>"+list[i].time+"</span><label>分类:</label><a href='../articlelist/"+list[i].type_id+".html'>"+list[i].type+"</a>"
      s+="<div class='messages'><i class='layui-icon'>&#xe63a;</i><span id = 'sourceId::"+list[i].aid+"' class = 'cy_cmt_count' ></span></div>"
      s+="<div class='browse'><i class='layui-icon'>&#xe756;</i><span class=''>"+list[i].num+"℃</span></div></div>"
      s+="<div class='content'>"+list[i].sketch+"</div>"
      s+="</li>"
    }
    $(".article .articlelist").html(s);
    $(".article .articlelist").append("<script id='cy_cmt_num' src='http://changyan.sohu.com/upload/plugins/plugins.list.count.js?clientId=cytrygClo'></script>")
  }

})


