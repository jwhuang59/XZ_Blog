

$(document).ready(function(){
    $(".bg .Forms .Forms_box .Forms_head a").click(function(){
        var index=$(this).index();
        $(this).addClass("active").siblings().removeClass("active")
        $(".bg .Forms .Forms_box div").eq(index+1).addClass("action").siblings().removeClass("action")
    })

})

var code;
var text=document.getElementById('text');
var checkCode =document.getElementById("code");  
var Form1=document.getElementById("Form1");
window.onload=Code();
function Code(){  
             code = "";     
             var codeLength = 4;       
             var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',    
             'S','T','U','V','W','X','Y','Z'); 
             for(var i = 0; i < codeLength; i++) {  
                var index = Math.floor(Math.random()*36);   
                code += random[index];
            }    
            checkCode.value = code; 
        }  

$(".bg .Forms .Forms_box .submit form .yz_text").blur(function(){
            if(text.value.toUpperCase().length <= 0 || text.value.toUpperCase() != code) {   
                $(".bg .Forms .Forms_box .submit form .yz_text").css("border","1px solid red");
            }else {   
                $(".bg .Forms .Forms_box .submit form .yz_text").css("border","1px solid #19bfe8")
            }  
        })

var flag=false;
var usernamereg = /^1(3|4|5|7|8)\d{9}$/;
var passwordreg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,15}$/;
var checkusername = document.getElementById("signup_username");
function signupusername(){
    if(!usernamereg.test($(".bg .Forms .Forms_box .submit .input1").val())){
        $(".bg .Forms .Forms_box .submit .text1").css("opacity","1")
    }else{
        $(".bg .Forms .Forms_box .submit .text1").css("opacity","0")
    }
if($(".bg .Forms .Forms_box .submit .input1").val().length>0){
    var xhr=new XMLHttpRequest();
    var data="name="+$(".bg .Forms .Forms_box .submit form .input1").val();
    xhr.onreadystatechange=function(){ 
    if (xhr.readyState==4 && xhr.status==200){ 

$(".bg .Forms .Forms_box .submit form .text2").html(xhr.responseText);	
	
    } 
}
xhr.open("POST","check.php",true);
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xhr.send(data);
}
}

function signuppassword(){
    if(!passwordreg.test($(".bg .Forms .Forms_box .submit .input2").val())){
        $(".bg .Forms .Forms_box .submit form .text").css("color","red")
    }else{
        $(".bg .Forms .Forms_box .submit .input2").css("border","1px solid #19bfe8")
        $(".bg .Forms .Forms_box .submit form .text").css("color","#fff")
    }
}


function check(){
console.log($(".bg .Forms .Forms_box .submit form .text2").text())
if(!usernamereg.test($(".bg .Forms .Forms_box .submit .input1").val()) || !passwordreg.test($(".bg .Forms .Forms_box .submit .input2").val())){
        return false;
    }else if(text.value.toUpperCase().length <= 0 || text.value.toUpperCase() != code){
        return false;
    }else if($(".bg .Forms .Forms_box .submit form .text2").text() !=" "){	
        return false;
   }else{
        return true;
}
}





