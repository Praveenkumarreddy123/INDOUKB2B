<?php 
    class User {
        public $conn;

        public $user_fname;
        public $user_lname;
        public $user_Company_Name;
        public $user_Industries;
        public $user_email;
        public $user_Password;
        public $user_PhoneNumber;
        public $user_CIN_LLPIN_NO;
        public $user_GSTNO;
        public $user_City;
        public $user_Address;
        public $user_Country;
        public $user_State;
        public $user_Pincode;

        public function __construct($db){
            $this->conn = $db;
        }


        // Create New User
        public function createNewUser($datas) {
            $data = $datas;
           
            $this->user_fname = $data["user_fname"];
            $this->user_lname = $data["user_lname"];
            $this->user_Company_Name = $data["user_Company_Name"];
            $this->user_Industries = $data["user_Industries"];
            $this->user_email = $data["user_email"];
            $this->user_Password = $data["user_Password"];
            $this->user_PhoneNumber = $data["user_PhoneNumber"];
            $this->user_CIN_LLPIN_NO = $data["user_CIN_LLPIN_NO"];
            $this->user_GSTNO = $data["user_GSTNO"];
            $this->user_City = $data["user_City"];
            $this->user_Address = $data["user_Address"];
            $this->user_Country = $data["user_Country"];
            $this->user_State = $data["user_State"];
            $this->user_Pincode = $data["user_Pincode"];

            $tablename = 'users';
            $timestamp = date('Y-m-d H:i:s');
            $query = "INSERT INTO  $tablename (user_fname, user_lname, user_Company_Name, user_Industries, user_email, user_Password,user_PhoneNumber,user_CIN_LLPIN_NO,user_GSTNO,user_City,user_Address,user_Country,user_State,user_Pincode, created_date) VALUES ('$this->user_fname', '$this->user_lname', '$this->user_Company_Name','$this->user_Industries','$this->user_email', ' $this->user_Password', '$this->user_PhoneNumber', '$this->user_CIN_LLPIN_NO', '$this->user_GSTNO', '$this->user_City', '$this->user_Address', '$this->user_Country', '$this->user_State', '$this->user_Pincode', '$timestamp')";
           
            $result = $this->conn->query($query);

            if($result) {
                echo '{';
                    echo '"message": "1"';
                echo '}';

               

                return;
            } else {
                print_r($result);
                return;
            }
        }

        // Login User

        public function loginuser ($login_email, $login_Password) {
            $tablename = 'users';
            $array = array();
            $query = "SELECT id, user_email, user_fname, user_lname FROM $tablename WHERE user_email = '$login_email' AND user_Password = '$login_Password' AND Is_Deleted = 0";
            $result = $this->conn->query($query);
           
            if ($result->num_rows > 0) { 
                $sessionId;
                while($row = $result->fetch_assoc()) { 
                    $array[] = $row;
                    session_start();
                    $_SESSION["session_userid"] =  $row["id"];
                    $_SESSION["session_username"] =  $row["user_email"];
                    $sessionId = $_SESSION["session_userid"];
                }
                print_r(json_encode($array)); 
                $query1 = "UPDATE  $tablename SET Last_login_date = NOW() WHERE id = $sessionId";
                $result1 = $this->conn->query($query1);
                return;
            } else {
                $array = array('error' => 'login fail');
                print_r(json_encode($array));
                return;
            }
            
        }
    }
 ?>

