<?php
$phone = $_POST['phone'];
$name = $_POST['name_r'];
$html = <<<EOT
	<h2 class="col-8 offset-2">Спасибо <strong>{$name}</strong>!</h2>
	<p class="col-10 offset-1" style="font-size:1.2em;">Ваша заявка, перезвонить на номер <strong>{$phone}</strong>,<br>будет обработана в течение 5-10 минут</p>
	<button id="closer" class="col-8" style="font-size:1em;margin-top:1em">Закрыть уведомление</button>	
EOT;

$respon = array('name' => $name, 'phone' => $phone, 'html' => $html);

// пример использования
require_once "SendMailSmtpClass.php"; // подключаем класс
  
$mailSMTP = new SendMailSmtpClass('webmaster@iulesh.ru', 'FuCkOfF-1024', 'ssl://smtp.yandex.ru', 'Администрация сайта Татьяны Поповой', 465);
// $mailSMTP = new SendMailSmtpClass('логин', 'пароль', 'хост', 'имя отправителя');
  
// заголовок письма
$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
$headers .= "From: Перезвон!!!\r\n"; // от кого письмо
$result =  $mailSMTP->send("tanusha0520@yandex.ru", "Просьба перезвонить", "От $name, по номеру $phone\n", $headers); // отправляем письмо
// $result =  $mailSMTP->send('Кому письмо', 'Тема письма', 'Текст письма', 'Заголовки письма');
if($result === true){
    echo json_encode($respon);
}else{
    echo "Технические неполадки, заявка не оформлена =( Извините!";
}

//mail("qibite@mail.ru", "Просьба перезвонить", "От $name\nНа номер $phone\n");
