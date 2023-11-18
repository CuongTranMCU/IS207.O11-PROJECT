
<!DOCTYPE html>
<html>
<head>
    <title>Admin Auth Laravel 8 </title>
</head>
<body>
  
<div class="container">
    Welcome, please login or register,
</div>



<form action = " {{route('admin.login') }} " method = "POST">
    @csrf
   <p><input type = 'text' name = 'email'></p>
   <p><input type = 'password' name = 'password'></p>
   <button type = 'submit'>Login</button>

</form>



</body>


</html>

