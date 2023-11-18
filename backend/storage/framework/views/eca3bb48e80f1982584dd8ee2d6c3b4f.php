
<!DOCTYPE html>
<html>
<head>
    <title>User Auth Laravel 8 </title>
</head>
<body>
  
<div class="container">
    Welcome, please login or register,
</div>



<form action = " <?php echo e(route('user.login')); ?> " method = "POST">
    <?php echo csrf_field(); ?>
   <p><input type = 'text' name = 'email'></p>
   <p><input type = 'password' name = 'password'></p>
   <button type = 'submit'>Login</button>

</form>



</body>


</html>

<?php /**PATH D:\Study\UIT\IS207\project\cayxinh\host\IS207.O11-PROJECT\backend\resources\views/loginuser.blade.php ENDPATH**/ ?>