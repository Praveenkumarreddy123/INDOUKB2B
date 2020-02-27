<?php
    session_start();
    unset($_SESSION["session_userid"]);
    unset($_SESSION["session_username"]);
    unset($_SESSION["username"]);
    header("Location:../index.php");
?>