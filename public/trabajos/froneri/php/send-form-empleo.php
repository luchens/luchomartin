<?php
$nombre = $_POST['nombre'];
$fechanac = $_POST['fechanac']; if($fechanac){ $fechanac = explode("-", $fechanac); $fechanac = $fechanac[2]."/".$fechanac[1]."/".$fechanac[0]; }
$nacionalidad = $_POST['nacionalidad'];
$dni = $_POST['dni'];
$cuil = $_POST['cuil'];
$direccion = $_POST['direccion'];
$localidad = $_POST['localidad'];
$ciudad = $_POST['ciudad'];
//$telefono = $_POST['telefono'];
$celular = $_POST['celular'];
$email = $_POST['email'];
$discapacidad = $_POST['discapacidad'];
$tipo = $_POST['tipo'];
$observaciones = $_POST['observaciones'];
$objetivo = $_POST['objetivo'];
//---------------------------------------------------------
$empresa = $_POST['empresa'];
$cargo = $_POST['cargo'];
$tareas = $_POST['tareas'];
$empleos = "";
foreach($empresa as $key => $n) { $empleos .= $empresa[$key]." / ".$cargo[$key]." / ".$tareas[$key]."<br>"; }
//---------------------------------------------------------
$escuela = $_POST['escuela'];
$terciario = $_POST['terciario'];
$universitario = $_POST['universitario'];
$posgrado = $_POST['posgrado'];
$escuela_finaliza = $_POST['escuela_finaliza']; /*if($escuela_finaliza){ $escuela_finaliza = explode("-", $escuela_finaliza); $escuela_finaliza = $escuela_finaliza[2]."/".$escuela_finaliza[1]."/".$escuela_finaliza[0]; }*/
$terciario_finaliza = $_POST['terciario_finaliza']; /*if($terciario_finaliza){ $terciario_finaliza = explode("-", $terciario_finaliza); $terciario_finaliza = $terciario_finaliza[2]."/".$terciario_finaliza[1]."/".$terciario_finaliza[0]; }*/
$universitario_finaliza = $_POST['universitario_finaliza']; /*if($universitario_finaliza){ $universitario_finaliza = explode("-", $universitario_finaliza); $universitario_finaliza = $universitario_finaliza[2]."/".$universitario_finaliza[1]."/".$universitario_finaliza[0]; }*/
$posgrado_finaliza = $_POST['posgrado_finaliza']; /*if($posgrado_finaliza){ $posgrado_finaliza = explode("-", $posgrado_finaliza); $posgrado_finaliza = $posgrado_finaliza[2]."/".$posgrado_finaliza[1]."/".$posgrado_finaliza[0]; }*/
//---------------------------------------------------------
//$salario = $_POST['salario'];
//---------------------------------------------------------
$encoding = "utf-8";
$from_name = $nombre;
//$from_mail = "luchoid@gmail.com";
//$mail_to  = "luchoid@gmail.com
$from_mail = $email;
$mail_to  = "recursos-humanos.frigor@ar.froneri.com";
$mail_subject = "Formulario de empleo";
$mail_message = "";
//---------------------------------------------------------
$filename = $_FILES["my_file"]["name"];
$filetype = $_FILES["my_file"]["type"];
$filetemp = $_FILES["my_file"]["tmp_name"];
//---------------------------------------------------------
$subject_preferences = array(
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
$mail_message .= "<table style='font-family:arial;font-size:14px;color:#000;width:100%;'><tr><td>";
$mail_message .= "<b>DATOS PERSONALES</b><br>";
$mail_message .= "Nombre: ".$nombre."<br>";
$mail_message .= "Fecha de nacimiento: ".$fechanac."<br>";
$mail_message .= "Nacionalidad: ".$nacionalidad."<br>";
$mail_message .= "DNI: ".$dni."<br>";
$mail_message .= "Cuil/Cuit: ".$cuil."<br>";
$mail_message .= "Dirección: ".$direccion."<br>";
$mail_message .= "Localidad: ".$localidad."<br>";
$mail_message .= "Ciudad: ".$ciudad."<br>";
$mail_message .= "Teléfono: ".$telefono."<br>";
$mail_message .= "Celular: ".$celular."<br>";
$mail_message .= "E-mail: ".$email."<br>";
$mail_message .= "¿Persona con discapacidad?: ".$discapacidad."<br>";
$mail_message .= "Si sí, ¿de qué tipo?: ".$tipo."<br>";
$mail_message .= "Observaciones: ".$observaciones."<br>";
$mail_message .= "Objetivo profesional: ".$objetivo."<br><br>";

/*$mail_message .= "<b>EMPLEO ACTUAL/ANTERIORES:</b><br>";
foreach( $empresa as $key => $n ) { $mail_message .= "Empresa: ".$empresa[$key]." / Cargo: ".$cargo[$key]." / Tareas: ".$tareas[$key]."<br>"; }
$mail_message .= "<br>";*/

/*$mail_message .= "<b>FORMACIÓN ACADÉMICA</b><br>";
$mail_message .= "Escuela secundaria: ".$escuela." / Finaliza: ".$escuela_finaliza."<br>";
$mail_message .= "Terciario: ".$terciario." / Finaliza: ".$terciario_finaliza."<br>";
$mail_message .= "Universitario: ".$universitario." / Finaliza: ".$universitario_finaliza."<br>";
$mail_message .= "Posgrado/MBA: ".$posgrado." / Finaliza: ".$posgrado_finaliza."<br>";
$mail_message .= "<br>";
$mail_message .= "Salario: $".$salario.".-<br>";*/

$mail_message .= "</td></tr></table>";
//---------------------------------------------------------
$myfile = fopen("empleo.html", "w") or die("Unable to open file!");
fwrite($myfile, $mail_message);
fclose($myfile);
//---------------------------------------------------------
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
//---------------------------------------------------------
if($_POST["validar"] == "si"){
  mail_file($mail_to, $mail_subject, $mail_message, $from_mail, $filename, $email);
  echo "ok";
} else {
  echo "error";
}

?>
