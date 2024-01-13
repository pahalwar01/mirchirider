// this is single line comenter.
/* this is multi linecommenter
and look likes this....*/

//Login page coding start

function login()
{
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var admin = user =="admin" && pass =="admin"? "login sucess":"Failed";
    var first = user=="dharampal" && pass=="1234"? "login sucess": "Failed";
    var second = user=="lalit" && pass=="1234"? "login sucess": "Failed";
    var third = user=="karan" && pass=="1234"? "login sucess": "Failed";
    if (admin=="login sucess") {
        window.location.href='#';
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
    rider(a);
    sendername(b);
    worktype(c);
    workdate(d);
    workfrom(e);
    workto(f);
    totalkm(g);
    return false;
}

function rider(a)
{
    var result = document.getElementById("one");
    result.innerHTML = a;
}
function sendername(b)
{
    var result = document.getElementById("two");
    result.innerHTML = b;
}
function worktype(c)
{
    var result = document.getElementById("three");
    result.innerHTML = c;
}
function workdate(d)
{
    var result = document.getElementById("four");
    result.innerHTML = d;
}
function workfrom(e)
{
    var result = document.getElementById("five");
    result.innerHTML = e;
}
function workto(f)
{
    var result = document.getElementById("six");
    result.innerHTML = f;
}
function totalkm(g)
{
    var result = document.getElementById("seven");
    result.innerHTML = g;
}
//add work preview page cooding end