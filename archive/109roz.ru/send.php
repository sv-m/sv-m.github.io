<?php
//------------------------------------------------------------send mail from----------
$form = array(
    'name' 		=> $_POST['name'],
    'fam' 		=> $_POST['surname'],
    'phone' 	=> $_POST['phone'],
    'mail' 		=> $_POST['mail'],
    'sms'		=> $_POST['sms'],
    'time'		=> $_POST['time']
);
$alert = array(
    'name' 		=> 'Укажите имя',
    'phone' 	=> 'Укажите телефон',
    'phonex' 	=> 'Телефон в формате 123 123 45 67',
    'mail' 		=> 'Укажите e-mail',
    'mailx' 	=> 'Некорректный e-mail',
    'sms' 		=> 'Сообщение не написано',
    'page' 		=> '404',
    'ok' 		=> 'Сообщение отправлено, спасибо',
    'oksms' 	=> 'Мы свяжемся с вами в ближайшее время',
    'server' 	=> 'Почтовый сервер не работает'
);



//------------------------------------------------------------message sending info----------
    $to = 'orloff-igor@ya.ru';

    $headers .= "MIME-Version: 1.0"."\r\n".
        "Content-type: text/html; charset=utf-8"."\r\n".
        "From: \r\n".
        "Date: ".date("D, j M Y H:i:s")."\r\n";

    $subject = "=?utf-8?b?".base64_encode('Сообщение с вашего сайта')."?=";

    $text = "<br>Имя: ".$form['name'].
        "<br>Фамилия: ".$form['fam'].
        "<br>Телефон: ".$form['phone'].
        "<br>Время звонка: ".$form['time'].
        "<br>Email: ".$form['mail'].
        "<br>Сообщение: ".$form['sms'];

if ( isset($_POST['prod-name']) || isset($_POST['prod-color']) ) {
    $text .= $_POST['prod-name'] . ", " . $_POST['prod-color'] ;
}
//--------------------------------------------------------------form falidation & send --------


if ( isset($_POST['full']) || isset($_POST['call']) ) {

    $form['name'] = substr($form['name'],0,30);
    $form['phone'] = substr($form['phone'],0,20);
    $form['sms'] = substr($form['sms'],0,1000);

    if (empty($form['name']) ) {
        $res = $alert['name'];
    } else if (empty($form['phone']) ) {
        $res = $alert['phone'];
    } else if (!preg_match("/[(][0-9]{3}[)] [0-9]{3}[-][0-9]{2}[-][0-9]{2}|[0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}/", $form[phone]) ) {
        $res = $alert['phonex'];
    } else if ( isset($_POST['full'])) {
        if (empty($form['mail']) ) {
            $res = $alert['mail'];
        } else if (!preg_match('|([a-z0-9_\.\-]{1,20})@([a-z0-9\.\-]{1,20})\.([a-z]{2,4})|is', $form[mail]))  {
            $res = $alert['mailx'];
        } else if (empty($form['sms']) ) {
            $res = $alert['sms'];
        } else {
            mail($to, $subject, $text, $headers);
            $res = $alert['ok'];
        }
    } else if ( isset($_POST['call'])) {
        mail($to, $subject, $text, $headers);
        $res = $alert['oksms'];
    }
    else  {
        $res = $alert['page'];
    }
    echo $res;
};
//--------------------------------------------------------------the end thanks--------
?>