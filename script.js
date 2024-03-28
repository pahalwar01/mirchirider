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
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var admin = user =="admin" && pass=="admin@123"? "login sucess":"Failed";
    var dharampal = user=="dharampal" && pass=="dharampal@123"? "login sucess": "Failed";
    var lalit = user=="lalit" && pass=="lalit@123"? "login sucess": "Failed";
    var karan = user=="karan" && pass=="karan@123"? "login sucess": "Failed";
    if (admin=="login sucess")
    {
        window.location.href="adminmain.html";
    }
    if (admin=="Failed") 
    {
        if(user!="admin")
        {
            if(user!="admin")
            {
                window.alert("User not found");
            }
        }
        if(pass!="admin@123")
        {
            if(pass!="admin@123")
            {
                window.alert("Wrong Password");
            }
        }
    } 
    if (dharampal=="login sucess") 
    {
        window.location.href='dharampalmain.html';
    }
    if(dharampal=="Failed")
    {
        if(user!="dharampal")
        {
            if(user!="dharampal")
            {
                window.alert("User not found");
            }
        }
        if(pass!="dharampal@123")
        {
            if(pass!="dharampal@123")
            {
                window.alert("Wrong Password");
            }
        }
    }
    if (lalit=="login sucess") 
    {
        window.location.href='lalitmain.html';
    } 
    if (karan=="login sucess") 
    {
        window.location.href='karanmain.html';
    }
    return false;
}




//Login page coding end


//Job submit data coding start
