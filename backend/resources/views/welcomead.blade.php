
<!DOCTYPE html>
<html>
<head>
    <title>Admin Auth Laravel 8 </title>
</head>
<body>
  
<div class="container">

   <span> Welcome {{Auth::guard('admin')->user()->Name}} </span>
   
</div>


<form  action = "{{route('admin.logout')}} " method = "GET">
    @csrf

   <button type='submit'>Logout</button>

</form>





</body>


</html>

