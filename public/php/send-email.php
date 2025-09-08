<?php
$to = 'hola@luchomartin.com';
///
$nombre = utf8_decode($_REQUEST["nombre"]);
$apellido = utf8_decode($_REQUEST["apellido"]);
$email = utf8_decode($_REQUEST["email"]);
$telefono = utf8_decode($_REQUEST["telefono"]);
$mensaje = utf8_decode($_REQUEST["mensaje"]);
$mensaje = str_replace("\n","<br>", $mensaje);

///
$headers = "From: <".$email.">\n";
$headers .= "Reply-To: <".$email.">\n";
$headers .= "MIME-Version: 1.0\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\n";
$headers .= "Content-Transfer-Encoding: 8bit;\n\n";
$headers .= "\n";
///
$subject = 'Consulta de '.$nombre.' '.$apellido;

$body = '
<table width="100%" align="center" cellpadding="0" cellspacing="0" border="0">
    <tr>
        <td>
            <table width="100%" cellpadding="5" cellspacing="1" border="0">
                <tr>
                    <td width="80" height="20" align="left" valign="middle" bgcolor="#d5d5d5">
                        <font color="#666666" size="-2" face="Verdana, Arial, Helvetica, sans-serif">Nombre:</font>
                    </td>
                    <td width="470" height="20" align="left" valign="middle" bgcolor="#e6e6e6">
                        <font face="Verdana, Arial, Helvetica, sans-serif" color="666666" size="-2"> '.$nombre.'</font>
                    </td>
                </tr>
                <tr>
                    <td width="80" height="20" align="left" valign="middle" bgcolor="#d5d5d5">
                        <font color="#666666" size="-2" face="Verdana, Arial, Helvetica, sans-serif">Apellido:</font>
                    </td>
                    <td width="470" height="20" align="left" valign="middle" bgcolor="#e6e6e6">
                        <font face="Verdana, Arial, Helvetica, sans-serif" color="666666" size="-2"> '.$apellido.'</font>
                    </td>
                </tr>
                <tr>
                    <td width="80" height="20" align="left" valign="middle" bgcolor="#d5d5d5">
                        <font face="Verdana, Arial, Helvetica, sans-serif" color="#666666" size="-2">E-mail:</font>
                    </td>
                    <td width="470" height="20" align="left" valign="middle" bgcolor="#e6e6e6">
                        <a href="mailto:'.$email.'"><font face="Verdana, Arial, Helvetica, sans-serif" color="#3c3c3b" size="-2">'.$email.'</font></a>
                    </td>
                </tr>
                <tr>
                    <td width="80" height="20" align="left" valign="middle" bgcolor="#d5d5d5">
                        <font color="#666666" size="-2" face="Verdana, Arial, Helvetica, sans-serif">Teléfono:</font>
                    </td>
                    <td width="470" height="20" align="left" valign="middle" bgcolor="#e6e6e6">
                        <font face="Verdana, Arial, Helvetica, sans-serif" color="666666" size="-2"> '.$telefono.'</font>
                    </td>
                </tr>
                <tr>
                    <td width="80" height="20" align="left" valign="middle" bgcolor="#d5d5d5">
                        <font color="#666666" size="-2" face="Verdana, Arial, Helvetica, sans-serif">Mensaje:</font>
                    </td>
                    <td width="470" height="20" align="left" valign="middle" bgcolor="#e6e6e6">
                        <font face="Verdana, Arial, Helvetica, sans-serif" color="666666" size="-2"> '.$mensaje.'</font>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
';

@mail($to, $subject, $body, $headers);

$to = 'luchoid@gmail.com';
@mail($to, $subject, $body, $headers);

///
echo 'success';
///

/*$fileName = 'send-email.html';
$filepnt  = fopen($fileName, 'w+');
fwrite($filepnt, $body);
fclose($filepnt);*/

?>
