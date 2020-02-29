<?php 
	session_start();
	
?>
<base href="<?php echo (dirname('').'/Projects/IndoUKB2B/') ?>">
<!DOCTYPE HTML>
<html>
<head>
	<title>Website | Home</title>
	<!-- Stylesheets -->
	<link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="assets/css/main.css">
	<!-- Stylesheets -->
	
</head>
<body>
	<div id="page-seperator">
		<header id="masthead" class="site-header main_header">
			<nav class="navbar navbar-expand-lg navbar-light main_block px-0">
				<a class="navbar-brand" href="index.php">
					<img src="assets/images/Svg/site-logo.svg" />
				</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav ml-auto"> 
						<li class="nav-item">
							<a class="nav-link" href="#">Industries</a>
						</li> 
						<li class="nav-item">
							<a class="nav-link" href="about.php">About Us</a>
						</li>
						<?php 
							if(isset($_SESSION["session_userid"])) { 
								 
						?>
						<li class="nav-item">
							<a class="nav-link" href="opprotunites">Opprotunites</a>
						</li> 
							<?php  } else { ?>
						<li class="nav-item">
							<a class="nav-link" href="login.php">Opprotunites</a>
						</li> 
							<?php } ?>
						<li class="nav-item">
							<a class="nav-link " href="#">Membership</a>
						</li> 
						<li class="nav-item">
							<a class="nav-link " href="media.php">Media</a>
						</li> 
						<li class="nav-item">
							<a class="nav-link" href="contact-us.php">Contact</a>
						</li> 
						<li class="nav-item">
							<a class="nav-link" href="#">FAQ</a>
						</li> 
						<?php 
							if(!isset($_SESSION["session_userid"])) {
								
							?>
								<li class="nav-item">
									<a href="Signup.php" class="btn nav-link siteBtn-primary-outline headerBtns">Signup</a>
								</li> 
								<li class="nav-item">
									<a href="login.php" class="btn nav-link siteBtn-primary mx-0 headerBtns">Login</a>
								</li> 

							<?php } else { ?>
								<li class="nav-item">
									<a href="server/logout.php" class="btn nav-link siteBtn-primary-outline headerBtns">Logout</a>
								</li> 
							<?php } ?>

					</ul> 
				</div>
			</nav>
		</header>
		<section id="main" class="site-main container-fluid px-0">