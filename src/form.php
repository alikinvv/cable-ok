 
<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Host = 'smtp.yandex.ru';  																							// Specify main and backup SMTP servers
$mail->Username = 'phpmails@yandex.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'sutkmqhhblnonrmk'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'tsl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 25; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('phpmails@yandex.ru'); // от кого будет уходить письмо?
$mail->addAddress('lecaw@yandex.ru'); // Кому будет уходить письмо
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);  

if ($_POST['hide'] === 'request') {
    $mail->Subject = 'Заявка на звонок';
    $mail->Body    = 'Телефон: ' . $_POST['phone'];
}

if ($_POST['hide'] === 'consultation') {
    $mail->Subject = 'Заявка на консультацию';
    $mail->Body    = 'Имя: ' . $_POST['name'] . ' Телефон: ' . $_POST['phone'] . ' Email: ' . $_POST['email'];
}

$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    echo 'success';
}
?>