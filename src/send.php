<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpMailer/Exception.php';
require 'phpMailer/PHPMailer.php';

//ini_set('error_reporting', E_ALL);
//ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);

/* Определение города */
$curl = curl_init();

$address = $_SERVER['REMOTE_ADDR'];

curl_setopt_array($curl, array(
    CURLOPT_URL            => "http://ip-api.com/json/$address?lang=ru",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING       => "",
    CURLOPT_MAXREDIRS      => 10,
    CURLOPT_TIMEOUT        => 30,
    CURLOPT_HTTP_VERSION   => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST  => "GET",
    CURLOPT_HTTPHEADER     => array(
        "accept: application/json",
        "content-type: application/json"
    ),
));

$response = curl_exec($curl);
$err      = curl_error($curl);

curl_close($curl);
$city = '';

if ($err) {
    echo "cURL Error #:" . $err;
} else {
    $data = json_decode($response);
    $city = $data->city;
}
/* --------------------------- */


if (isset($_POST)) {

    $form = $_POST['form'];

    /* Настройка заголовка для почты */
    switch ($form) {
        case 'request':
            $subject = "runxin.info | Отправить запрос [at169]";
            break;

        case 'recall':
            $subject = "runxin.info | Перезвонить [at170]";
            break;

        case 'sale':
            $subject = "runxin.info | Получить скидку до 14% [at171]";
            break;

        case 'buy':
            $subject = "runxin.info | Бесплатный образец комплекта [at172]";
            break;

        case 'dealer':
            $subject = "runxin.info | Стать дилером [at173]";
            break;

        case 'selection':
            $subject = "runxin.info | Подберем оборудование для вас [at174]";
            break;

        default:
            $subject = "runxin.info";
    }
    /* ------------ */

    /* Источник заявки */
    $source   = '';
    $medium   = '';
    $campaign = '';
    $term     = '';

    $name = $_POST['name'];
    $name = htmlspecialchars($name);
    $name = urldecode($name);
    $name = trim($name);

    $phone = $_POST['phone'];
    $phone = htmlspecialchars($phone);
    $phone = urldecode($phone);
    $phone = trim($phone);

    if (isset($_POST['comment'])) {
        $comment = $_POST['comment'];
        $comment = htmlspecialchars($comment);
        $comment = urldecode($comment);
        $comment = trim($comment);
    } else {
        $comment = "";
    }

    $link = '';

    if (isset($_POST['location'])) {
        $link = $_POST['location'];
        $link = htmlspecialchars($link);
        $link = urldecode($link);
        $link = trim($link);

        $shost = 'https://runxin.info/?';
        $host  = 'http://runxin.info/?';

        $link = str_replace($host, '', $link);
        $link = str_replace($shost, '', $link);

        if ($link) {
            $link_slices = explode('utm_', $link);
            foreach ($link_slices as $link_slice) {

                $utm       = str_replace('&', '', $link_slice);
                $utm_slice = explode('=', $utm);

                if ($utm_slice[0] == 'source') {
                    $source = str_replace('amp;', '', $utm_slice[1]);

                    switch ($source) {
                        case 'direct':
                            $source = 'Яндекс.Директ';
                            break;

                        case 'adwords':
                            $source = 'Google ADS';
                            break;

                        case 'ydsrch':
                            $source = 'Яндекс.Директ поиск';
                            break;

                        case 'ydyan':
                            $source = 'Яндекс.Директ РСЯ';
                            break;

                        case 'gglsrch':
                            $source = 'Google ADS поиск';
                            break;

                        case 'gglgdn':
                            $source = 'Google ADS КМС';
                            break;

                        case 'yandex':
                            $source = 'Яндекс';
                            break;

                        case 'google':
                            $source = 'Google';
                            break;

                        case 'fb':
                            $source = 'Facebook';
                            break;

                        case 'ig':
                            $source = 'Instagram';
                            break;

                        default:
                            $source = "Прямой переход";
                    }
                }
                if ($utm_slice[0] == 'medium') {
                    $medium = str_replace('amp;', '', $utm_slice[1]);
                }
                if ($utm_slice[0] == 'campaign') {
                    $campaign = str_replace('amp;', '', $utm_slice[1]);
                }
                if ($utm_slice[0] == 'term') {
                    $term = str_replace('amp;', '', $utm_slice[1]);
                    $term = str_replace('+', '', $term);
                }
            }

            if ( ! $campaign && ! $term) {
                $source .= ' (органическая выдача)';
            }
        }
    }

    $message = "
    Имя: " . $name . "
    Телефон: " . $phone . "
    Комментарий: " . $comment . "
    Город: " . $city . "

    Сайт: runxin.info
    Источник: " . $source . "
    Рекламная кампания: " . $campaign . "
    Ключевое слово: " . $term . "
  ";

    $mail = new PHPMailer(true);
    try {
        $mail->setFrom('request-wisewater@ekodar.ru', 'runxin.info');
        $mail->CharSet = PHPMailer::CHARSET_UTF8;
        $mail->addAddress('zakaz@runxin.info');
        $mail->addAddress('order@ekodar.ru');
        $mail->addAddress('web@ekodar.ru');
        $mail->addAddress('imc.ekodar@yandex.ru');
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $message;
        $mail->isMail();
        if ( ! empty($_FILES['files']['name']) && ! empty($_FILES['files']['tmp_name'])) {
            $mail->addAttachment($_FILES['files']['tmp_name'], $_FILES['files']['name']);
        }
        $mail->send();
        echo "сообщение успешно отправлено";
    } catch (Exception $e) {
        echo $e->errorMessage();
    }

    /* Отправка почты */
//  if (mail("zakaz@runxin.info, order@ekodar.ru, imc.ekodar@yandex.ru", $subject, $message, "From: no-reply@wisewater.ru <no-reply@wisewater.ru> \r\n"."Content-type:text/plain; Charset=utf-8\r\n")) {
//    echo "сообщение успешно отправлено";
//  } else {
//    echo "при отправке сообщения возникли ошибки";
//  }
    /* ------------------------------------------ */
}

?>
