
<!DOCTYPE html>
<html>
<head>
    <title>User Auth Laravel 8 </title>
</head>
<body>
  
<div class="container">

   <span> Welcome {{Auth::guard()->user()->Email}} </span>
   
</div>


<form  action = "{{route('user.logout')}} " method = "GET">
    @csrf

   <button type='submit'>Logout</button>

</form>





</body>


</html>

