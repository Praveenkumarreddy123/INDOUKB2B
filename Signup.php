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
        <div id="primary" class="FormPage signup_page">
            <a href="index.php" class="text-white">Back</a>
            <div class="main_block">
                <div class="brand text-center">
                    <img src="assets/images/Svg/site-logo.svg" />
                </div>
                <h5 class="text-white text-center mt-5">Memebership Regsitration</h5>
                <div class="FormContainer bg-white">
                    <form autocomplete="off" name="SignUpForm" action="" method="post" >
                        <div class="SignUpform step-1 ">
                            <div class="row">
                                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                                    <div class="form-group">
                                        <label for="user_fname">First Name</label>
                                        <input type="text" class="" name="user_fname" id="user_fname" aria-describedby="First Name" />
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                                    <div class="form-group">
                                        <label for="user_lname">Last Name</label>
                                        <input type="text" class="" name="user_lname" id="user_lname" aria-describedby="Last Name" />
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="user_Company_Name">Company Name</label>
                                <input type="text" class="" name="user_Company_Name" id="user_Company_Name" aria-describedby="Company_Name" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1" class="requiredFld">Select Industries</label>
                                <select class="custom-select" name="user_Industries" id="user_Industries">
                                    <option selected>--Select--</option>
                                    <option value="1">Computer/Information Technology</option>
                                    <option value="2">Accounting/Auditing and Taxation</option>
                                    <option value="3">Admin/Human Resources</option>
                                    <option value="4">Arts/Media and Communications</option>
                                    <option value="5">Events/Promotions</option>
                                    <option value="6">Garments</option>
                                    <option value="7">Electronics and Electricals</option>
                                    <option value="8">Industrial Suppliers</option>
                                    <option value="9">Hotels & Restaurants</option>
                                    <option value="10">Agri Products/Commodities other</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="user_email" class="requiredFld">Email</label>
                                <input type="text" class="" name="user_email" id="user_email" aria-describedby="Email" />
                            </div>
                            <div class="form-group">
                                <label for="user_PhoneNumber" class="requiredFld">Phone Number</label>
                                <input type="text" class="" name="user_PhoneNumber" id="user_PhoneNumber" aria-describedby="user_PhoneNumber" />
                            </div>
                            <div class="form-group">
                                <label for="user_Password" class="requiredFld">Password</label>
                                <input type="password" class="" name="user_Password" id="user_Password"/>
                            </div>
                            <div class="form-group">
                                <label for="user_ConfirmPassword" class="requiredFld"> Confirm Password</label>
                                <input type="password" class="" name="user_ConfirmPassword" id="user_ConfirmPassword" aria-describedby="user_ConfirmPassword" />
                            </div>
                            <div class="text-center newAccount">
                                <p class="m-0">Already have an account? <a href="login.php" class="pageLink  w-100 text-right"> Login</a></p>
                            </div>  
                            <div class="button-container pb-0 text-center">
                            <button type="button" class="btn btn-primary site-form-button width-auto inline-small-button step_1_Form">Submit</button>
                            </div>
                        </div>
                        <div class="SignUpform step-2 d-none">
                            <div class="row">
                                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                                    <div class="form-group">
                                        <label for="user_CIN_LLPIN_NO">CIN/LLPIN NO.</label>
                                        <input type="text" class="" id="user_CIN_LLPIN_NO" name="user_CIN_LLPIN_NO" aria-describedby="CIN_LLPIN_NO" />
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                                    <div class="form-group">
                                        <label for="user_GSTNO">GST NO.</label>
                                        <input type="text" class="" id="user_GSTNO" name="user_GSTNO" aria-describedby="GST NO." />
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="City">City</label>
                                <input type="text" class="" name="user_City" id="user_City" aria-describedby="City" />
                            </div>
                            <div class="form-group">
                                <label for="user_Address" class="requiredFld">Address</label>
                                <input type="text" class="" name="user_Address" id="user_Address" aria-describedby="Address" />
                            </div>
                            <div class="form-group">
                                <label for="user_Country" class="requiredFld">Country</label>
                                <select class="user_Country" name="user_Country" id="user_Country">
                                    <option selected>--Select Country--</option>
                                    <option value="1">Computer/Information Technology</option>
                                    <option value="2">Accounting/Auditing and Taxation</option>
                                    <option value="3">Admin/Human Resources</option>
                                    <option value="4">Arts/Media and Communications</option>
                                    <option value="5">Events/Promotions</option>
                                    <option value="6">Garments</option>
                                    <option value="7">Electronics and Electricals</option>
                                    <option value="8">Industrial Suppliers</option>
                                    <option value="9">Hotels & Restaurants</option>
                                    <option value="10">Agri Products/Commodities other</option>
                                </select>
                            </div> 
                            <div class="form-group">
                                <label for="user_State" class="requiredFld">State</label>
                                <input type="text" class="" name="user_State" id="user_State" aria-describedby="State" />
                            </div>
                            <div class="form-group">
                                <label for="user_Pincode" class="requiredFld">Pincode</label>
                                <input type="text" class="" name="user_Pincode" id="user_Pincode" aria-describedby="Pincode" />
                            </div>
                            <div class="custom-control custom-checkbox w-100 text-left">
                                <input type="checkbox" class="custom-control-input" id="customCheck1">
                                <label class="custom-control-label" for="customCheck1">I agree with the Privacy Policy</label>
                            </div>
                            <div class="row button-container pb-0">
                                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                                    <button type="button" class="btn btn-primary site-form-button outline-whitebg Goto_previous">PREVIOUS</button>
                                </div>
                                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                                    <button type="button" class="btn btn-primary site-form-button text-uppercase step_2_Form">Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="FormPage-footer">
                <p class="text-white text-center m-0"> &copy; 
						<script>  document.write(new Date().getFullYear()); </script>  
						IndoUkB2B.in  All rights reserved.</p>
                </div>
            </div>
        </div>
    </div>
</body>
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