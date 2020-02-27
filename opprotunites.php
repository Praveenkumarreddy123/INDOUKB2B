
 <?php include_once("header.php"); ?> 
 <?php 
    if(!isset($_SESSION["session_userid"])) {
        header("Location:login.php");
    }
?>
<app-root></app-root> 
 <?php include_once("footer.php"); ?> 