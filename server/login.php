<?php
include_once('../include/config.php');
include_once('../objects/user.php');


if(count($_POST)>0) {
    $db = new DataBase();
    $user = new User($db->getConnection());
    $user->loginuser($_POST['user_name'], $_POST['password']);
}
?>