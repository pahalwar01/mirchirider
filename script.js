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
function add_job_preview()
{
    var a = document.getElementsById("ridername").value;
    var b = document.getElementsById("sendername").value;
    var c = document.getElementsById("worktype").value;
    var d = document.getElementsById("workdate").value;
    var e = document.getElementsById("workfrom").value;
    var f = document.getElementsById("workto").value;
    var g = document.getElementsById("totalkm").value;
    rider(a,b,c,d,e,f,g);
    sendername(a,b,c,d,e,f,g);
    worktype(a,b,c,d,e,f,g);
    workdate(a,b,c,d,e,f,g);
    workfrom(a,b,c,d,e,f,g);
    workto(a,b,c,d,e,f,g);
    totalkm(a,b,c,d,e,f,g);
    window.open("dharampalpreview.html");
    return false;    
}

function rider(a,b,c,d,e,f,g)
{
    var result = document.getElementById("one");
    result.innerHTML = a;
}
function sendername(a,b,c,d,e,f,g)
{
    var result = document.getElementById("two");
    result.innerHTML = b;
}
function worktype(a,b,c,d,e,f,g)
{
    var result = document.getElementById("three");
    result.innerHTML = c;
}
function workdate(a,b,c,d,e,f,g)
{
    var result = document.getElementById("four");
    result.innerHTML = d;
}
function workfrom(a,b,c,d,e,f,g)
{
    var result = document.getElementById("five");
    result.innerHTML = e;
}
function workto(a,b,c,d,e,f,g)
{
    var result = document.getElementById("six");
    result.innerHTML = f;
}
function totalkm(a,b,c,d,e,f,g)
{
    var result = document.getElementById("seven");
    result.innerHTML = g;
}
//add work preview page cooding end