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