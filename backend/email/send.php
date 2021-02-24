<style>
  input, textarea {
    display: block;
    width: 300px;
    margin-bottom: 20px;
  }
</style>

<form method="POST">
  <div>
    <label for="subject">Enter a subject</label>
    <input type="text" name="subject" id="subject" placeholder="Type here..." />
  </div>
  <div>
    <label for="content">Enter some email content</label>
    <textarea name="content" id="content" placeholder="Type here..."></textarea>
  </div>
  <div>
    <label for="button_text">Enter text for your button</label>
    <input type="text" name="button_text" id="button_text" placeholder="Type here..." />
  </div>
  <div>
    <label for="button_link">Enter url for your button</label>
    <input type="text" name="button_link" id="button_link" placeholder="Type here..." />
  </div>
  <input type="submit" value="Send email" />
</form>

<?php

if (
  $_SERVER['REQUEST_METHOD'] == 'POST' &&
  !empty($_POST['subject']) && 
  !empty($_POST['content'])
) {
  sendEmail($_POST['subject'], $_POST['content'], $_POST['button_text'], $_POST['button_link']);
}

function sendEmail($subject, $content, $button_text, $button_link) {
  if ($button_text != '' && $button_link != '') {
    $variables = array();
    $variables['subject'] = $subject;
    $variables['content'] = nl2br($content);
    $variables['button_text'] = $button_text;
    $variables['button_link'] = $button_link;

    $template = file_get_contents("template_button.html");

    foreach ($variables as $key => $value) {
      $template = str_replace('{{ ' . $key . ' }}', $value, $template);
    }
  } else {
    $variables = array();
    $variables['subject'] = $subject;
    $variables['content'] = nl2br($content);

    $template = file_get_contents("template.html");

    foreach ($variables as $key => $value) {
      $template = str_replace('{{ '.$key.' }}', $value, $template);
    }
  }

  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

  mail('abouscho@gmail.com', $subject . ' - Notenboom', $template, $headers);
}