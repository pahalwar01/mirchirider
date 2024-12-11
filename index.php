<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta lang="en-US">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <title>Homepage</title>
        <link rel="stylesheet" href="style.css">
        
    </head>

<body>
    <section style="height: 810px;">
        <div class="col-12">
                <center><img src="image/logo.png" alt="Mirchi_logo" class="login-logo"></center>
            <form class="login-form">
                <h1>Login</h1>
                <br>
                <label for="username" id="username-lable">Username:</label>
                <br>
                <input type="text" id="username" name="username" required>
                <br><br>
                <label for="password" id="password-lable">Password:</label>
                <br>
                <input type="password" id="password" name="password" required>
                <br><br>
                <input id="check" type="checkbox"> Show Password

                <script>
                    check.onclick = togglePassword;
                    function togglePassword()
                    {
                    if (check.checked) password.type = "text";
                    else password.type = "password";
                    }
                </script>
                <br><br>
                <input type="submit" value="Login" id="login-btn" onclick = "return login()">
            </form>
        </div>
    </section>
    <script src="script.js"></script>
</body>
</html>