
<!DOCTYPE html>
<html>
<head>
    <title>Admin Auth Laravel 8 </title>
</head>
<body>
  
<div class="container">

   <span> Welcome <?php echo e(Auth::guard('admin')->user()->Name); ?> </span>
   
</div>


<form  action = "<?php echo e(route('admin.logout')); ?> " method = "GET">
    <?php echo csrf_field(); ?>

   <button type='submit'>Logout</button>

</form>





</body>


</html>

<?php /**PATH D:\Study\UIT\IS207\project\cayxinh\v1\resources\views/welcomead.blade.php ENDPATH**/ ?>