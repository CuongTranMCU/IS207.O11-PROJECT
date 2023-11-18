
<!DOCTYPE html>
<html>
<head>
    <title>Register</title>
</head>
<body>
  
<div class="container">
    Register
</div>



<form action = " <?php echo e(route('user.register')); ?> " method = "POST">
    <?php echo csrf_field(); ?>
   <p><input type = 'text' name = 'email'></p>
   <p><input type = 'password' name = 'password'></p>
   <button type = 'submit'>Register</button>

</form>



</body>


</html>

<?php /**PATH D:\Study\UIT\IS207\project\cayxinh\v1\resources\views/Register.blade.php ENDPATH**/ ?>