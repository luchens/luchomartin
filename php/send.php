<?PHP
require_once('phpmailer/class.phpmailer.php');
$correo = new PHPMailer();
$correo->IsSMTP();
$correo->SMTPAuth = false;
$correo->Host = "mail.luchomartin.com";
$correo->Port = 587;
$correo->Username   = "hola@luchomartin.com";
$correo->Password   = "Qwerty#321";
$correo->SetFrom("hola@luchomartin.com", "Lucho Martin");
$correo->AddReplyTo("hola@luchomartin.com","Lucho Martin");
$correo->AddAddress("hola@luchomartin.com", "Lucho Martin");
$correo->Subject = "Mi primero correo con PHPMailer";
$correo->MsgHTML("Mi Mensaje en <strong>HTML</strong>");
//$correo->AddAttachment("images/phpmailer.gif");
if(!$correo->Send()) {
  echo "Hubo un error: " . $correo->ErrorInfo;
} else {
  echo "Mensaje enviado con exito.";
}

?>
