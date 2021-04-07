<?php

// set required headers
include_once '../config/headers.php';
include_once '../config/config.php';

// get the database and user object files
include_once '../config/database.php';
include_once '../objects/error.php';

$config = new Config();
$database = new Database();
$db = $database->getConnection();

$error = new ErrorRapport($db);

$stmt = $error->read();
$num = $stmt->rowCount();

// set up the JWT things
require '../vendor/autoload.php';
use \Firebase\JWT\JWT;

// get the posted data and make it's not empty
$data = json_decode(file_get_contents("php://input"));

// check if jwt token was given
if (!empty($data->token) && !empty($data->id)) {
  // get secret key and decode jwt token
  $key = $config->jwt_secret;
  $decoded = JWT::decode($data->token, $key, array('HS256'));

  $decoded_array = (array) $decoded;

  // check if the user requesting is admin
  if ($decoded_array['adm'] == 1) {
    $error->id = $data->id;

    if ($error->delete()) {
      // http response code - 200 OK
      http_response_code(200);
      echo json_encode(array("success" => "De foutrapportage is succesvol verwijderd van de server."));
    } else {
      // http response code - 503 UNAVAILABLE
      http_response_code(503);
      echo json_encode(array("error" => "Er is iets misgegaan bij het verwijderen van de foutrapportage, probeer het later opnieuw!"));
    }
  }
}