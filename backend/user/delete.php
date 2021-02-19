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

  // check if the user is correct or admin
  if ($decoded_array['adm'] == 1 || $decoded_array['uid'] == $data->id) {
    $user->id = $data->id;
    if ($user->delete()) {
      echo json_encode(array("success" => "De gebruiker is succesvol verwijderd, u wordt nu teruggestuurd!"));
    } else {
      echo json_encode(array("error" => "Er is iets misgegaan bij het verwijderen van de gebruiker, probeer het nog een keer!"));
    }
  }
}