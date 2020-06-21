var cookieArr = document.cookie.split(";");
for(var i = 0; i < cookieArr.length; i++)
{
    var cookiePair = cookieArr[i].split("=");
    if("login_errors" == cookiePair[0].trim())
    {
        var errors = cookiePair[1];
        if (errors !=="")
        {
            if(errors==1)
            {
             document.getElementById("e").innerHTML = 'Wrong Username or Password';
            }
        }
    }
}
