<?php
if (isset($_POST['submit'])) {
    $First_name = $_POST['Firstname'];
    $Last_name = $_POST['Lastname'];
    $Email = $_POST['emailid'];
    $Phone = $_POST['phone'];
    $message = $_POST['message'];

    $mailTo = "bibhashdash522@gmail.com";
    $headers = "From:" . $Email;
    $txt ="First Name = ". $First_name . "\r\n  Last Name = ". $Last_name ."\r\n  Email = " . $Email . "\r\n  Mobile Number = ". $Phone ."\r\n  Message =" . $message;


    mail($mailTo,   $subject,  $txt, $headers);
    header("Location:thankyou.html");
}
