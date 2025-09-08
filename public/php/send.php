<?PHP
require_once('phpmailer/class.phpmailer.php');

//Crear una instancia de PHPMailer
$mail = new PHPMailer();
//Definir que vamos a usar SMTP
$mail->IsSMTP();
//Esto es para activar el modo depuración. En entorno de pruebas lo mejor es 2, en producción siempre 0
// 0 = off (producción)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug  = 0;
//Ahora definimos gmail como servidor que aloja nuestro SMTP
$mail->Host       = 'smtp.gmail.com';
//El puerto será el 587 ya que usamos encriptación TLS
$mail->Port       = 587;
//Definmos la seguridad como TLS
$mail->SMTPSecure = 'tls';
//Tenemos que usar gmail autenticados, así que esto a TRUE
$mail->SMTPAuth   = true;
//Definimos la cuenta que vamos a usar. Dirección completa de la misma
$mail->Username   = "luchoid@gmail.com";
//Introducimos nuestra contraseña de gmail
$mail->Password   = "Q#werty#321";
//Definimos el remitente (dirección y, opcionalmente, nombre)
$mail->SetFrom('luchoid@gmail.com', 'Lucho Martin');
//Esta línea es por si queréis enviar copia a alguien (dirección y, opcionalmente, nombre)
$mail->AddReplyTo('luchoid@gmail.com','Lucho Martin');
//Y, ahora sí, definimos el destinatario (dirección y, opcionalmente, nombre)
$mail->AddAddress('luchoid@gmail.com', 'Lucho Martin');
//Definimos el tema del email
$mail->Subject = 'Esto es un correo de prueba';
//Para enviar un correo formateado en HTML lo cargamos con la siguiente función. Si no, puedes meterle directamente una cadena de texto.
//$mail->MsgHTML(file_get_contents('correomaquetado.html'), dirname(ruta_al_archivo));
$mail->MsgHTML("Hola!");
//Y por si nos bloquean el contenido HTML (algunos correos lo hacen por seguridad) una versión alternativa en texto plano (también será válida para lectores de pantalla)
$mail->AltBody = 'This is a plain-text message body';

//Enviamos el correo
if(!$mail->Send()) {
  echo "Error: " . $mail->ErrorInfo;
} else {
  echo "Enviado!";
}

/*
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
}*/

?>
