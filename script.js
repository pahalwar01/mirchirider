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
    var a = document.getElementsByClassName("ridername").value;
    var b = document.getElementsByClassName("sendername").value;
    var c = document.getElementsByClassName("worktype").value;
    var d = document.getElementsByClassName("workdate").value;
    var e = document.getElementsByClassName("workfrom").value;
    var f = document.getElementsByClassName("workto").value;
    var g = document.getElementsByClassName("totalkm").value;

    var h = document.getElementById("one");
        h.innerHTML = a;
        return false;
    
    var i = document.getElementById("two");
        i.innerHTML = b;
        return false;

    var j = document.getElementById("three");
        j.innerHTML = c;
        return false;

    var k = document.getElementById("four");
        k.innerHTML = d;
        return false;

    var l = document.getElementById("five");
        l.innerHTML = e;
        return false;

    var m = document.getElementById("six");
        m.innerHTML = f;
        return false;

    var n = document.getElementById("seven");
        n.innerHTML = g;
        return false;
}
//add work preview page cooding end