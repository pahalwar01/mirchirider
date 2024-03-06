// this is single line comenter.
/* this is multi linecommenter
and look likes this....*/

//Login page coding start

function login()
{
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var admin = user =="admin" && pass =="admin"? "login sucess":"Failed";
    var first = user=="dharampal" && pass=="123"? "login sucess": "Failed";
    var second = user=="lalit" && pass=="123"? "login sucess": "Failed";
    var third = user=="karan" && pass=="123"? "login sucess": "Failed";
    if (admin=="login sucess") {
        window.location.href='adminmain.html';
    } 
    if (first=="login sucess") {
        window.location.href='dharampalmain.html';
    } 
    if (second=="login sucess") {
        window.location.href='lalitmain.html';
    } 
    if (third=="login sucess") {
        window.location.href='karanmain.html';
    }
    return false;
}





//Login page coding end




// add work preview page cooding start

function dpreview()
{
    document.getElementById("rider").innerHTML=document.getElementById("ridername").value;
    document.getElementById("sender").innerHTML=document.getElementById("sendername").value;
    document.getElementById("work").innerHTML=document.getElementById("worktype").value;
    document.getElementById("date").innerHTML=document.getElementById("workdate").value;
    document.getElementById("from").innerHTML=document.getElementById("workfrom").value;
    document.getElementById("to").innerHTML=document.getElementById("workto").value;
    document.getElementById("km").innerHTML=document.getElementById("totalkm").value;
    document.getElementById("addwork-fieldset").style.display="none";
    document.getElementById("preview").style.display="block";
}

//add work preview page cooding end

//Job submit data coding start
