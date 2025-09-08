<?php
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];
//---------------------------------------------------------
$encoding = "utf-8";
$from_name = $nombre." ".$apellido;
$from_mail = $email;
$mail_to  = "recursos-humanos.frigor@ar.froneri.com";
$mail_subject = "Formulario de contacto";
$mail_message = "";
//---------------------------------------------------------
$filename = $_FILES["my_file"]["name"];
$filetype = $_FILES["my_file"]["type"];
$filetemp = $_FILES["my_file"]["tmp_name"];
//---------------------------------------------------------
/*$subject_preferences = array(
  "input-charset" => $encoding,
  "output-charset" => $encoding,
  "line-length" => 76,
  "line-break-chars" => "\r\n"
);
//---------------------------------------------------------
$header = "Content-type: text/html; charset=".$encoding." \r\n";
$header .= "From: ".$from_name." <".$from_mail."> \r\n";
$header .= "MIME-Version: 1.0 \r\n";
$header .= "Content-Transfer-Encoding: 8bit \r\n";
$header .= "Date: ".date("r (T)")." \r\n";
$header .= iconv_mime_encode("Subject", $mail_subject, $subject_preferences);
//---------------------------------------------------------
*/
$mail_message .= "<table style='font-family:arial;font-size:14px;color:#000;width:100%;'><tr><td>";
$mail_message .= "Nombre: ".$nombre."<br>";
$mail_message .= "Apellido: ".$apellido."<br>";
$mail_message .= "E-mail: ".$email."<br>";
$mail_message .= "Teléfono: ".$telefono."<br>";
$mail_message .= "Mensaje: ".$mensaje."<br>";
$mail_message .= "</td></tr></table>";
//---------------------------------------------------------
$myfile = fopen("contacto.html", "w") or die("Unable to open file!");
fwrite($myfile, $mail_message);
fclose($myfile);
//---------------------------------------------------------
/*if($_POST["validar"] == "si"){
  @mail($mail_to, $mail_subject, $mail_message, $header);
  echo 'ok';
} else {
  echo 'error';
}*/

function mail_file( $to, $subject, $messagehtml, $from, $fileatt, $replyto="") {
  // handles mime type for better receiving
  $ext = strrchr( $fileatt , '.');
  $ftype = "";
  if ($ext == ".doc") $ftype = "application/msword";
  if ($ext == ".jpg") $ftype = "image/jpeg";
  if ($ext == ".gif") $ftype = "image/gif";
  if ($ext == ".zip") $ftype = "application/zip";
  if ($ext == ".pdf") $ftype = "application/pdf";
  if ($ftype=="") $ftype = "application/octet-stream";

  // read file into $data var
  $file = fopen($fileatt, "rb");
  $data = fread($file,  filesize( $fileatt ) );
  fclose($file);

  // split the file into chunks for attaching
  $content = chunk_split(base64_encode($data));
  $uid = md5(uniqid(time()));

  // build the headers for attachment and html
  $h = "From: $from\r\n";
  if ($replyto) $h .= "Reply-To: ".$replyto."\r\n";
  $h .= "MIME-Version: 1.0\r\n";
  $h .= "Content-Type: multipart/mixed; boundary=\"".$uid."\"\r\n\r\n";
  $h .= "This is a multi-part message in MIME format.\r\n";
  $h .= "--".$uid."\r\n";
  $h .= "Content-type:text/html; charset=iso-8859-1\r\n";
  $h .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
  $h .= $messagehtml."\r\n\r\n";
  $h .= "--".$uid."\r\n";
  $h .= "Content-Type: ".$ftype."; name=\"".basename($fileatt)."\"\r\n";
  $h .= "Content-Transfer-Encoding: base64\r\n";
  $h .= "Content-Disposition: attachment; filename=\"".basename($fileatt)."\"\r\n\r\n";
  $h .= $content."\r\n\r\n";
  $h .= "--".$uid."--";

  // send mail
  return @mail($to, $subject, $messagehtml, str_replace("\r\n","\n",$h) ) ;
}

if($_POST["validar"] == "si"){
  mail_file($mail_to, $mail_subject, $mail_message, $from_mail, $filename, $email);
  echo "ok";
} else {
  echo "error";
}

?>
