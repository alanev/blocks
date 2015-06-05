<?php
	
	$message = "Имя: ".$_POST['name'];
	if($_POST['tel'])
	{
		$message .= "\r\nТелефон: ".$_POST['tel'];
	}
	if($_POST['email'])
	{
		$message .= "\r\nEmail: ".$_POST['email'];
	}
	if($_POST['comment'])
	{
		$message .= "\r\nКомментарий: ".$_POST['comment'];
	}

	$subject = '';
	$to = 'e.alanev@yandex.ru';
	$headers = "Content-type: text/plain; charset=utf-8\r\nFrom: <no-reply@no-reply.ru>";

	mail($to, $subject, $message, $headers);
?>

<!doctype html>
<html lang="ru" style="height:100%;">
<head>
	<meta charset="utf-8">
	<title>Domillion</title>
	<link rel="shortcut icon" href="img/favicon.png">
</head>
<body style="display:table; width: 100%; height:100%;">
	<div style="display:table-cell; vertical-align:middle; font:700 40px arial; text-align:center;">Сообщение успешно отправленно.<br><a href="/" style="font-size: 20px;">Вернуться на главную</a></div>
</body>
</html>