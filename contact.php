<?php
   $to = "ashutosh2289@gmail.com";
   $subject = $_POST["contactName"];
   $subject .= " wants to connect via your portfolio";
   $message = $_POST["comments"];
   $message .= "\n\nYou can reach me at ";
   $message .= $_POST["email"];
   $header = "From:ashutosh@ashutoshmishra.grn.cc\r\n";
   $header .= "MIME-Version: 1.0\r\n";
   $header .= "Content-type: text/html\r\n";
   $retval = mail ($to,$subject,$message,$header);
?>