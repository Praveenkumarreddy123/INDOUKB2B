$(document).ready(function () {
	var currurl = window.location.pathname;
	var index = currurl.lastIndexOf("/") + 1;
	var filename = currurl.substr(index);
	var windowWidth = $(window).width();
	FlowTypeInit();
});
$(window).on("load", function () {
	FlowTypeInit();
});


/** Flow Type Init */
function FlowTypeInit() {
	$('body').flowtype({
		minimum: 640,
		maximum: 5000,
		minFont: 18,
		maxFont: 1000,
		fontRatio: 50
	});
}
/** Flow Type Init */


$(window).on('scroll', function(){
	$(this).scrollTop()>100?$('header').addClass('sticky-Header'):$('header').removeClass('sticky-Header')
});


/*SignUp Validation*/ 
class SignUpFormObject {
	constructor() {
		this.user_fname = $("#user_fname").val();
		this.user_lname = $("#user_lname").val();
		this.user_Company_Name = $("#user_Company_Name").val();
		this.user_Industries = $("#user_Industries").val();
		this.user_email = $("#user_email").val();
		this.user_PhoneNumber = $("#user_PhoneNumber").val();
		this.user_Password = $("#user_Password").val();
		this.user_ConfirmPassword = $("#user_ConfirmPassword").val();
		this.user_CIN_LLPIN_NO = $("#user_CIN_LLPIN_NO").val();
		this.user_GSTNO = $("#user_GSTNO").val();
		this.user_City = $("#user_City").val();
		this.user_Address = $("#user_Address").val();
		this.user_Country = $("#user_Country").val();
		this.user_State = $("#user_State").val();
		this.user_Pincode = $("#user_Pincode").val();
		this.issetupOnePass;
		this.issetupTwoPass;
	}
	stepOneValidation() {
		return this.user_fname !="" && this.user_lname !="" && this.user_Company_Name !="" && this.user_Industries !="" && this.validateEmail(this.user_email) && this.validatePhoneNo(this.user_PhoneNumber) !="" && this.validateConfirmPassword(this.user_Password, this.user_ConfirmPassword)
	}
	setUpTwoValidation() {
		return this.user_CIN_LLPIN_NO !="" && this.user_GSTNO !="" && this.user_City !="" && this.user_Address !="" && this.user_Country && this.user_State !="" && this.validatePincode(this.user_Pincode);
	}
	validateEmail(email) {
		if(email=="") return false;
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}
	validatePhoneNo(phoneno) { 
		var rgx = /^\d{10}$/;
		return rgx.test(String(phoneno));
	}
	validatePincode(pincode) {
		if(pincode=="") return false;
		var pinrgx = /^[1-9][0-9]{5}$/;
		return pinrgx.test(String(pincode));
	}
	validateConfirmPassword(password, confirmpassword) {
		return password===confirmpassword ? true : false;
	}	
}



$(".step_1_Form").click(function(){
	var SignUpForm = new SignUpFormObject();
	SignUpForm.issetupOnePass = false;
	if(SignUpForm.stepOneValidation()) {
		$(".step-1").addClass('d-none');
		$(".step-2").removeClass('d-none');
		SignUpForm.issetupOnePass = true;
	}
});

$(".step_2_Form").click(function(){ 
	var SignUpForm = new SignUpFormObject();
	SignUpForm.issetupOnePass = true;
	SignUpForm.issetupTwoPass = false;
	if(SignUpForm.setUpTwoValidation()) { 
		SignUpForm.issetupTwoPass = true;
		SendSignUptoSever(SignUpForm);
	}
});

$(".Goto_previous").click(function(){
	$(".step-1").removeClass('d-none');
	$(".step-2").addClass('d-none');
});

function SendSignUptoSever(SignUpFormData) {
	$.ajax({
		url : "server/signup.php",
		type: "POST",
		data : SignUpFormData,
		success: function(data){
			window.location.href="index.php";
		},error: function (error){
	 
		}
	});
}


/*SignUp Validation*/ 


/** Login Validation */
class LoginFormObject { 
	constructor() { 
		this.user_name = $("#login_email").val();
		this.password = $("#login_password").val();
		this.error = new Object();
	}
	validateForm() {
		if(this.user_name =='') {
			this.error.login_email="required";
		} 
		if(this.password =='') {
			this.error.login_password="required";
		}
		return Object.keys(this.error).length == 0 ? true : false;
	}
}
$('.LoginFormSubmit').click(function(){
	$("input.error, select.error").removeClass('error');
	var LoginFormData = new LoginFormObject(); 
	if(LoginFormData.validateForm()) {
		SendLogindatatoSever(LoginFormData);
	} else if(!LoginFormData.validateForm()) { 
		Object.keys(LoginFormData.error).forEach(addclasserrorFld);
		$('#'+Object.keys(LoginFormData.error)[0]).focus();
	}
});

function addclasserrorFld(item, index, arr){
	$('#'+item).addClass('error');
}


function SendLogindatatoSever(LoginFormData) { 
	$.ajax({
		url : "server/login.php",
		type: "POST",
		data : LoginFormData,
		success: function(datas){
			if(datas) {
				console.log(datas);
				var data = JSON.parse(datas);
				if(!data.hasOwnProperty('error')) {
					$('#login_success').modal();
					setTimeout(function(){
						window.location.href = "index.php";
					},800);
					return;
				} else if(data.hasOwnProperty('error')) { 
					$('#invalid_crd').modal();
					return;
				}
				
			}
		},error: function (error){
			alert('data base ');
		}
	});
}
/** Login Validation */

