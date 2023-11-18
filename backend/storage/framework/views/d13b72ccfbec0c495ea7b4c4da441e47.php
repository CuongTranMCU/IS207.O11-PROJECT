
<!DOCTYPE html>
<html>
<head>
    <title>User Auth Laravel 8 </title>
</head>
<body>
  
<div class="container">

   <span> Welcome <?php echo e(Auth::guard()->user()->Email); ?> </span>
   
</div>


<form  action = "<?php echo e(route('user.logout')); ?> " method = "GET">
    <?php echo csrf_field(); ?>

   <button type='submit'>Logout</button>

</form>





</body>


</html>

<?php /**PATH D:\Study\UIT\IS207\project\cayxinh\v1\resources\views/welcomeuser.blade.php ENDPATH**/ ?>