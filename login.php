<?php 
    session_start();
    if(isset($_SESSION["session_userid"])) {
        header("Location:index.php");
    }
?>
<!DOCTYPE HTML>
<html>
<head>
	<title>Website | Login</title>
	<!-- Stylesheets -->
	<link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="assets/css/main.css">
	<!-- Stylesheets -->
	
</head>
<body class="blueBg">
    <div id="page-seperator">
        <div id="primary" class="FormPage login_page">
            <a href="index.php" class="text-white">Back</a>
            <div class="main_block">
                <div class="brand text-center">
                    <img src="assets/images/Svg/site-logo.svg" />
                </div>
                <div class="FormContainer bg-white">
                    <h5 class="text-center font-weight-500">WELCOME TO IND-LON</h5>
                    <form name="LoginForm" action="" method="post"  autocomplete="off">
                        <div class="form-group">
                            <label for="user_email">Email</label>
                            <input type="text" class="" name="login_email" id="login_email" aria-describedby="Email" />
                            <span class="error">Email is required</span>
                            <span class="error">Invalid Email</span>
                        </div>
                        <div class="form-group">
                            <label for="login_password">Password</label>
                            <input type="password" class="" id="login_password" aria-describedby="password" />
                            <span class="error">Password is required</span>
                        </div>
                        <div class="d-md-flex">
                            <div class="custom-control custom-checkbox w-100 text-left">
                                <input type="checkbox" class="custom-control-input" id="customCheck1">
                                <label class="custom-control-label" for="customCheck1">Remember me</label>
                            </div>
                            <a href="" class="pageLink forgetpassoword  w-100 text-right"> Forgot password ?</a>
                        </div>
                        <div class="button-container">
                         <button type="button" class="btn btn-primary site-form-button LoginFormSubmit">Submit</button>
                        </div>
                    </form>
                    <div class="text-center newAccount">
                        <p class="m-0">Don't have an account ? <a href="Signup.php" class="pageLink  w-100 text-right"> Register here</a></p>
                    </div>
                </div>
                <div class="FormPage-footer">
                    <p class="text-white text-center m-0"> &copy; 
                        <script>  document.write(new Date().getFullYear()); </script>  
                            IndoUkB2B.in  All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    </div>
</body>
<!-- Modal -->
<div class="sitePopup modal fade" id="invalid_crd" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content"> 
      <div class="modal-body">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">X</span>
        </button>
        <div class="content text-center">
            <h2 class="text-danger">Error!</h2>
            <p>Invalid User Name/ Password</p>
        </div> 
        </div>
    </div>
  </div>
</div>


<div class="sitePopup modal fade" id="login_success" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content"> 
      <div class="modal-body">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">X</span>
        </button>
        <div class="content text-center">
            <h2 class="text-success">Login Success!</h2>
        </div> 
        </div>
    </div>
  </div>
</div>
<!-- Modal -->
<!-- Scripts -->
	<!--[if IE 8]>
		<script src="assets/js/IE8.js" type="text/javascript"></script>
	<![endif]-->
	<!--[if lt IE 9]>
		<script src="assets/js/respond.min.js"></script>
		<script src="assets/js/html5shiv.js"></script>
	<![endif]-->
	<script src="assets/js/html5.js" type="text/javascript"></script>
	<script src="assets/js/jquery-1.11.1.js" type="text/javascript"></script>
	<script src="assets/js/flowtype.js"></script>
	<script src="assets/js/bootstrap.min.js"></script>
	<script src="assets/js/function.js" type="text/javascript"></script>
	<!-- Scripts -->
</html>