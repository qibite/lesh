<?php
$phone = $_POST['phone'];
$name = $_POST['name_r'];
$html = <<<EOT
	<h2 class="col-8 offset-2">Спасибо <strong>{$name}</strong>!</h2>
	<p class="col-10 offset-1" style="font-size:1.2em;">Ваша заявка, перезвонить на номер <strong>{$phone}</strong>,<br>будет обработана в течение 5-10 минут</p>
	<button id="closer" class="col-8" style="font-size:1em;margin-top:1em">Закрыть уведомление</button>	
EOT;

$respon = array('name' => $name, 'phone' => $phone, 'html' => $html);

mail("qibite@mail.ru", "Просьба перезвонить", "От $name\nНа номер $phone\n");
echo json_encode($respon);