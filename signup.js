var cookieArr = document.cookie.split(";");

for(var i = 0; i < cookieArr.length; i++)
{
    var cookiePair = cookieArr[i].split("=");
    if("sign_errors" == cookiePair[0].trim())
    {
        var errors = cookiePair[1];
        if (errors != "")
        {
            if(errors[0]==1)
            {
                document.querySelector('#e1').innerHTML = 'Username has been registered before';
            }
            if(errors[1]==1)
            {
                document.querySelector('#e3').innerHTML = 'email has been registered before';
            }
        }
    }
}


var rpassword = document.getElementById('Rpassword');
rpassword.addEventListener('input', updateValue);


function updateValue()
{
    var x = document.forms["signup"]["Password"].value;
    var y = document.forms["signup"]["Rpassword"].value;
    if(x !=y)
    {
        document.querySelector('#e2').innerHTML = "Passwords don't match";
        document.getElementById("submit").disabled = true;
    }
    else
    {
        document.querySelector('#e2').innerHTML = "";
        document.getElementById("submit").disabled = false;
    }
}


var password = document.getElementById('Password');
password.addEventListener('input', changeValue);


function changeValue()
{
    var x = document.forms["signup"]["Password"].value;
    var y = document.forms["signup"]["Rpassword"].value;
    if(x.length<5)
    {
        document.querySelector('#e2').innerHTML = "Length should be atleast 5 characters";
    }
    else if(x !=y)
    {
        document.querySelector('#e2').innerHTML = "Passwords don't match";
        document.getElementById("submit").disabled = true;
    }
    if(x==y)
    {
        document.querySelector('#e2').innerHTML = "";
        document.getElementById("submit").disabled = false;
    }
}

var username = document.getElementById('Username');
username.addEventListener('input', validate);

function validate()
{

    var z = document.forms["signup"]["Username"].value;
    if(z.length<5)
    {
        document.querySelector('#e1').innerHTML = "Length should be atleast 5 characters";
        document.getElementById("submit").disabled = true;
    }
    else
    {
        document.querySelector('#e1').innerHTML = "";
        document.getElementById("submit").disabled = false;
    }
}
