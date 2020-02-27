<?php
include_once('../include/config.php');
include_once('../objects/user.php');

$errors = array(); 

if(count($_POST)>0) {
    $db = new DataBase();
    $user = new User($db->getConnection());
    if($_POST['user_fname']) {
        $user->createNewUser($_POST);
    }
}
?> 