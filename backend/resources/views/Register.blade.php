
<!DOCTYPE html>
<html>
<head>
    <title>Register</title>
</head>
<body>
  
<div class="container">
    Register
</div>



<form action = " {{route('user.register') }} " method = "POST">
    @csrf
   <p><input type = 'text' name = 'email'></p>
   <p><input type = 'password' name = 'password'></p>
   <button type = 'submit'>Register</button>

</form>



</body>


</html>

