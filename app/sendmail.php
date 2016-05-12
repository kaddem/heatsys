<?php

  define("CONTACT_FORM", 'kademidov@gmail.com');

  // function ValidateEmail($value){
  //   $regex = '/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i';

  //   if($value == '') {
  //     return false;
  //   } else {
  //     $string = preg_replace($regex, '', $value);
  //   }

  //   return empty($string) ? true : false;
  // }
  $post = (!empty($_POST)) ? true : false;

  $title = $_POST['form_title'];
  $nameForm = $_POST['form_nameForm'];
  $name = $_POST['form_name'];
  $email = $_POST['form_email'];
  $phone = $_POST['form_phone'];
  $date = $_POST['form_date'];
  $text = $_POST['form_text'];
  // $quantity = $_POST['form_quantity'];
  // if (isset($area) && isset($quantity)){
  //   $comments = "Площадь: ".$area." м.кв; \nКол-во помещений: ".$quantity;
  // } else if (isset($date)) {
  //   $comments ="Заказ обратного звонка на: ".$date;
  // } else if(isset($gift)) {
  //   $comments ="Выбранный подарок: ".$gift;
  // } else if(isset($text)) {
  //   $comments ="Выбранный подарок: ".$text;
  // } else {
  //   $comments ="";
  // }


  // create email body and send it
  // $to = 'order@rosa-montazh.ru'; // put your email
  $to = 'kademidov@gmail.com'; // put your email
  $subject = "Заявка от $name | ".$title;
  $message = "Заполнена форма ".$title.". \n\n".
    "Данные отправителя:\n\nИмя: ".$name." \n".
    "Почта: ".$email." \n".
    "Телефон: ".$phone." \n".
    "перезвонить если указано: ".$date." \n".
    $comments;
  $headers = "From: ".$name." <".$email.">" . "\r\n" .
    "Reply-To: ".$name." <".$email.">" . "\r\n" ;
  mail($to, $subject, $message ,$headers);
  // return true;

  // Bitrix24
  // CRM server conect ion data
  define('CRM_HOST', 'karl.bitrix24.ru'); // your CRM domain name
  define('CRM_PORT', '443'); // CRM server port
  define('CRM_PATH', '/crm/configs/import/lead.php'); // CRM server REST service path

  // CRM server authorization data
  define('CRM_LOGIN', 'rosa.812@mail.ru'); // login of a CRM user able to manage leads
  define('CRM_PASSWORD', 'rosainstall308'); // password of a CRM user
  // OR you can send special authorization hash which is sent by server after first successful connection with login and password
  // define('CRM_AUTH', 'e54ec19f0c5f092ea11145b80f465e1a'); // authorization hash

  /********************************************************************************************/

  // POST processing
  if ($_SERVER['REQUEST_METHOD'] == 'POST')
  {
    $leadData = $_POST['DATA'];

    $title = $_POST['form_title'];
    $name = $_POST['form_name'];
    $email = $_POST['form_email'];
    $phone = $_POST['form_phone'];
    // $area = $_POST['form_area'];
    $date = $_POST['form_date'];
    // $gift = $_POST['form_gift'];
    $text = $_POST['form_text'];
    $quantity = $_POST['form_quantity'];
    if (isset($date)) {
      $comments = "Заказ обратного звонка на: ".$date;
    } else if (isset($text)) {
      $comments ="Комментарий клиента: ".$text;
    } else {
      $comments = "";
    }

    // get lead data from the form
    $postData = array(
      'TITLE' => $title,
      'NAME' => $name,
      'EMAIL_OTHER' => $email,
      'PHONE_WORK' => $phone,
      'COMMENTS' => $comments,
      'SOURCE_ID' => 'Сайт Системы отопления',
      'STATUS_DESCRIPTION' => $title,
      // 'ASSIGNED_BY_ID' => '',
    );

    // append authorization data
    if (defined('CRM_AUTH'))
    {
      $postData['AUTH'] = CRM_AUTH;
    }
    else
    {
      $postData['LOGIN'] = CRM_LOGIN;
      $postData['PASSWORD'] = CRM_PASSWORD;
    }

    // open socket to CRM
    $fp = fsockopen("ssl://".CRM_HOST, CRM_PORT, $errno, $errstr, 30);
    if ($fp)
    {
      // prepare POST data
      $strPostData = '';
      foreach ($postData as $key => $value)
        $strPostData .= ($strPostData == '' ? '' : '&').$key.'='.urlencode($value);

      // prepare POST headers
      $str = "POST ".CRM_PATH." HTTP/1.0\r\n";
      $str .= "Host: ".CRM_HOST."\r\n";
      $str .= "Content-Type: application/x-www-form-urlencoded\r\n";
      $str .= "Content-Length: ".strlen($strPostData)."\r\n";
      $str .= "Connection: close\r\n\r\n";

      $str .= $strPostData;

      // send POST to CRM
      fwrite($fp, $str);

      // get CRM headers
      $result = '';
      while (!feof($fp))
      {
        $result .= fgets($fp, 128);
      }
      fclose($fp);

      // cut response headers
      $response = explode("\r\n\r\n", $result);

      $output = '<pre>'.print_r($response[1], 1).'</pre>';
    }
    else
    {
      echo 'Connection Failed! '.$errstr.' ('.$errno.')';
    }
  }
  else
  {
    $output = '';
  }

// HTML form
?>