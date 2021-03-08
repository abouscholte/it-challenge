<?php

// set required headers
include_once '../config/headers.php';
include_once '../config/config.php';

// get database and book object files
include '../config/database.php';
include '../objects/book.php';

$config = new Config();
$database = new Database();
$db = $database->getConnection();

$book = new Book($db);

// set up the jwt things
require '../vendor/autoload.php';
use \Firebase\JWT\JWT;

// get the posted data and make sure it's not empty
$data = json_decode(file_get_contents("php://input"));

// check if id and jwt token were given
if (!empty($data->id) && !empty($data->token)) {
  // get secret key and decode jwt token
  $key = $config->jwt_secret;
  $decoded = JWT::decode($data->token, $key, array('HS256'));

  $decoded_array = (array) $decoded;

  // check if the user is admin
  if ($decoded_array['adm'] == 1) {
    $book->id = $data->id;

    if ($book->delete()) {
      echo json_encode(array("success" => "Het boek is succesvol verwijderd, u wordt nu teruggestuurd!"));
    } else {
      echo json_encode(array("error" => "Er is iets misgegaan bij het verwijderen van het boek, probeer het later nog een keer!"));
    }
  }
}