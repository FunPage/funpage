<%-- 
    Document   : index
    Created on : Dec 4, 2013, 8:13:37 AM
    Author     : sathyanarrayananstark
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Fun Login</title>
        <link rel="stylesheet" type="text/css" href="login.css.css">
    </head>
    <body>
        <div id="space">
            <h3><a href ="#signup" id="signup">signup</a>
        </div>
            
        <div align="center">    
    <form id="contactform" class="rounded" method="post" action="">
 
    <div class="field">
    <label for="username">Name:</label>
    <input type="text" class="input" name="name" id="name" value="your email id" />
    <p class="hint">Enter your Email.</p>
    </div>
        <p>                </p>
    <div class="field">
    <label for="password">password:</label>
    <input type="password" class="input" name="email" id="email" value="password"/>
    <p class="hint">Enter your password.</p>
    </div>
        <p> </p>
        <h7><a href="#forget" class="rellink"><center>forgotten password ?</center></a></h7>
    <input type="submit" name="Submit"  class="button" value="Login" />
        </div>
    </form>
    </body>
</html>
