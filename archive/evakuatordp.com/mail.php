<?php
header("Content-type: text/html; charset=utf8");
$name = $_POST['name'];
$email = $_POST['email'];
$telefone = $_POST['phone'];
$mess = $_POST['sms'];
$time = $_POST['time'];

$to = 'test@mail.mail'; // будут идти письма

//


if (isset ($name)) {
    $name = substr($name, 0, 20); //Не может быть более 20 символов
    if (empty($name)) {
        echo "Не указано имя!";
        exit;
    }
}

if (isset ($telefone)) {
    $telefone = substr($telefone, 0, 20); //Не может быть более 20 символов
    if (empty($telefone)) {
        echo "Не указан телефон !!!";
        exit;
    }
}

if (isset ($email)) {
    if (empty($email)) {
        echo "Не указан e-mail!";
        exit;
    } else if (!preg_match('|([a-z0-9_\.\-]{1,20})@([a-z0-9\.\-]{1,20})\.([a-z]{2,4})|is', $email)) {
        echo "Некорректный e-mail !!!";
        exit;
    }
}

if (isset ($mess)) {
    $mess = substr($mess, 0, 1000); //Не может быть более 1000 символов
    if (empty($mess)) {
        echo "Сообщение не написано!";
        exit;
    }
}

$subject = '=?utf-8?b?' . base64_encode('Сообщение с вашего сайта evakuatordp.com') . '?=';
$headers .= 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$headers .= "From: " . $email . "\r\n";
$headers .= "Date: " . date("D, j M Y H:i:s") . "\r\n";
$text = "
	Имя: " . $name . "<br>
	Телефон: " . $telefone . "<br>
	Время звонка: " . $time . "<br>
	Email: " . $email . "<br>
	Сообщение: " . $mess . "!";

mail($to, $subject, $text, $headers) or print "Не могу отправить письмо !";
echo "Отправлено!";

exit;
?>