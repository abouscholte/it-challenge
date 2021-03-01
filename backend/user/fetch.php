<?php

// required headers and import config
include_once '../config/headers.php';
include_once '../config/config.php';

// set up the JWT things
require '../vendor/autoload.php';
use \Firebase\JWT\JWT;

// include database and object files
include_once '../config/database.php';
include_once '../objects/user.php';

// initiate database and user objects
$config = new Config();
$database = new Database();
$db = $database->getConnection();

$user = new User($db);

$stmt = $user->read();
$num = $stmt->rowCount();

// get posted data and decode jwt key
$data = json_decode(file_get_contents("php://input"));

if (isset($data->token)) {
  $key = $config->jwt_secret;
  $decoded = JWT::decode($data->token, $key, array('HS256'));

  $decoded_array = (array) $decoded;

  // check if the user requesting the data is actually admin
  if ($decoded_array['adm'] == 1) {
    $users_arr = array();
    $users_arr['users'] = array();

    // retrieve table contents
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
      extract($row);

      $user = array(
        "id" => $id,
        "email" => $email,
        "username" => $gebruikersnaam,
        "name" => $naam,
        "password" => $wachtwoord,
        "admin" => $admin,
        "status" => $status
      );

      array_push($users_arr['users'], $user);
    }

    // set response code - 200 OK
    http_response_code(200);
    echo json_encode($users_arr);
  }
}