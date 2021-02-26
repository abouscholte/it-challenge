<?php

// set required headers
include_once '../config/headers.php';
include_once '../config/config.php';

// get the database and user object files
include_once '../config/database.php';
include_once '../objects/user.php';

$config = new Config();
$database = new Database();
$db = $database->getConnection();

$user = new User($db);

// set up the JWT things
require '../vendor/autoload.php';
use \Firebase\JWT\JWT;

// get the posted data and make sure the data is not empty
$data = json_decode(file_get_contents("php://input"));

// check if id and jwt token were given
if (!empty($data->id) && !empty($data->token)) {
  // get secret key and decode jwt token
  $key = $config->jwt_secret;
  $decoded = JWT::decode($data->token, $key, array('HS256'));

  $decoded_array = (array) $decoded;

  // check if the user is correct
  if ($decoded_array['uid'] == $data->id) {
    if (!empty($data->password)) {
      // fetch user
      $user->id = $data->id;
      $stmt = $user->read_single();

      // check if user was found
      if ($user->gebruikersnaam != null) {
        $dbPassword = $user->wachtwoord;
        if (password_verify($data->password, $dbPassword)) {
          echo json_encode(array("success" => "Het ingevoerde wachtwoord is correct!"));
          http_response_code(200);
        } else {
          echo json_encode(array("error" => "Het ingevoerde wachtwoord is niet correct. Probeer het opnieuw!"));
          http_response_code(404);
        }
      }
    }
  }
}