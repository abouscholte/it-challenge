<?php

class Email {
  // private properties
  private $headers = "MIME-Version: 1.0\r\nContent-Type: text/html; charset=ISO-8859-1\r\n";
  
  // object properties
  public $subject;
  public $content;
  public $button_text;
  public $button_link;
  public $email_to;

  // send plain email
  function send() {
    $variables = array();
    $variables['subject'] = $this->subject;
    $variables['content'] = nl2br($this->content);

    $template = file_get_contents("../email/template.html");

    foreach($variables as $key => $value) {
      $template = str_replace('{{ ' . $key . ' }}', $value, $template);
    }

    mail($this->email_to, $this->subject . ' - Notenboom', $template, $this->headers);
  }

  // send email with button
  function send_button() {
    $variables = array();
    $variables['subject'] = $this->subject;
    $variables['content'] = nl2br($this->content);
    $variables['button_text'] = $this->button_text;
    $variables['button_link'] = $this->button_link;

    $template = file_get_contents("../email/template_button.html");

    foreach ($variables as $key => $value) {
      $template = str_replace('{{ ' . $key . ' }}', $value, $template);
    }

    mail($this->email_to, $this->subject . ' - Notenboom', $template, $this->headers);
  }
}