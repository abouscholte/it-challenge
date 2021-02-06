<?php

// set required headers and import config
include_once '../config/headers.php';
include_once '../config/config.php';

// set up the JWT things
require '../vendor/autoload.php';
use \Firebase\JWT\JWT;

// get the database and user objects and jwt file
include_once '../config/database.php';
include_once '../objects/user.php';

$config = new Config();
$database = new Database();
$db = $database->getConnection();

$user = new User($db);

// get posted data and make sure data is not empty
$data = json_decode(file_get_contents("php://input"));

if (!empty($data->useremail) && !empty($data->password)) {
  // set user property values and check if user exists
  $user->useremail = $data->useremail;
  $user->check_useremail();

  if ($user->username != null) {
    // validate password
    if (password_verify($data->password, $user->password)) {
      // do the thing with the jwt token here
      $key = $config->jwt_secret;
      $payload = array(
        "uid" => $user->id,
        "adm" => $user->admin,
        "sta" => $user->status 
      );

      $token = JWT::encode($payload, $key);

      // set http response code and send message
      http_response_code(200);
      echo json_encode(array(
        "success" => "U bent succesvol ingelogd!",
        "token" => $token
      ));
    } else {
      http_response_code(400);
      echo json_encode(array("error" => "Onjuist wachtwoord, probeer opnieuw!"));
    }
  } else {
    http_response_code(400);
    echo json_encode(array("error" => "Onjuiste gebruikersnaam of e-mailadres, probeer opnieuw!"));
  }
}