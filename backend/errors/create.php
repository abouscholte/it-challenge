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

// set up the JWT things
require '../vendor/autoload.php';
use \Firebase\JWT\JWT;

// get the posted data and make it's not empty
$data = json_decode(file_get_contents("php://input"));

// check if jwt token was given
if (!empty($data->token)) {
  // get secret key and decode jwt token
  $key = $config->jwt_secret;
  $decoded = JWT::decode($data->token, $key, array('HS256'));

  // check if jwt token was decoded
  if ($decoded) {
    if (
      !empty($data->type) &&
      !empty($data->chapter) &&
      !empty($data->explanation) &&
      !empty($data->book_id) &&
      !empty($data->user_id)
    ) {
      // set error property values
      $error->type = $data->type;
      $error->hoofdstuk = $data->chapter;
      $error->paragraaf = $data->section != '' ? $data->section : NULL;
      $error->alinea = $data->paragraph != '' ? $data->paragraph : NULL;
      $error->pagina = isset($data->page) ? $data->page : NULL;
      $error->toelichting = $data->explanation;
      $error->status = 0;
      $error->boek_id = $data->book_id;
      $error->gebruiker_id = $data->user_id;

      // create error
      if ($error->create()) {
        // set http response code - 201 CREATED
        http_response_code(201);
        echo json_encode(array("success" => "De foutrapportage is succesvol toegevoegd. U wordt zo weer teruggestuurd."));
      } else {
        // set http response code - 503 SERVICE UNAVAILABLE
        http_response_code(503);
        echo json_encode(array("error" => "Er is iets foutgegaan bij het aanmaken van de foutrapportage, probeer het opnieuw!"));
      }
    }
  }
}