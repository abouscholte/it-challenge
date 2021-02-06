<?php

// set required headers
include_once '../config/headers.php';
include_once '../config/config.php';

// set up the JWT things
require '../vendor/autoload.php';
use \Firebase\JWT\JWT;

// include database and object files
include_once '../config/database.php';
include_once '../objects/user.php';

// initialize database and user objects
$config = new Config();
$database = new Database();
$db = $database->getConnection();

$user = new User($db);

// get posted data and decode jwt key
$data = json_decode(file_get_contents("php://input"));

if (!empty($data->token) || !empty($data->id)) {
  $key = $config->jwt_secret;
  $decoded = JWT::decode($data->token, $key, array('HS256'));

  $decoded_array = (array) $decoded;
  
  // check if the user is correct or admin
  if ($decoded_array['adm'] === 1 || $decoded_array['uid'] === $data->id) {
  
    // fetch id and query user
    $user->id = $data->id;
    $stmt = $user->read_single();

    // check if user was found
    if ($user->username != null) {
      $user_arr = array(
        "id" => $user->id,
        "email" => $user->email,
        "username" => $user->username,
        "name" => $user->name,
        "password" => $user->password,
        "code" => $user->code,
        "code_created" => $user->code_created,
        "admin" => $user->admin,
        "status" => $user->status
      );

      // set repsonse code and message
      http_response_code(200);
      echo json_encode($user_arr);
    } else {
      // set response code and message
      http_response_code(404);
      echo json_encode(array("error" => "Geen gebruiker gevonden, probeer opnieuw!"));  
    }
  }
}