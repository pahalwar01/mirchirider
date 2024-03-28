// this is single line comenter.
/* this is multi linecommenter
and look likes this....*/

//Login page coding start
/*
function login()
{
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var admin = user =="admin" && pass =="admin@123"? "login sucess":"Failed";
    var first = user=="dharampal" && pass=="dharampal@123"? "login sucess": "Failed";
    var second = user=="lalit" && pass=="lalit@123"? "login sucess": "Failed";
    var third = user=="karan" && pass=="karan@123"? "login sucess": "Failed";
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
*/

function login()
{
var form = document.getElementById("form");
var user = document.getElementById("username");
var pass = document.getElementById("password");
var show = document.getElementById("result");

form.onsubmit = function()
{
    if(user.value == "rohit") 
    {
        if(pass.value == "123")
        {
            window.alert("Login Success");
        }
        else
        {
            window.alert("Wrong {Password");
        }
    }
    else
    {
        window.alert("User not found");
    }
}
}




//Login page coding end


//Job submit data coding start
