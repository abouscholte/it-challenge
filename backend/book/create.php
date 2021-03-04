<?php

// set required headers
include_once '../config/headers.php';
include_once '../config/config.php';

// get the database and user object files
include_once '../config/database.php';
include_once '../objects/book.php';

$config = new Config();
$database = new Database();
$db = $database->getConnection();

$book = new Book($db);

// set up the JWT things
require '../vendor/autoload.php';
use \Firebase\JWT\JWT;

// get the posted data and make sure the data is not empty
$data = json_decode(file_get_contents("php://input"));

// check if jwt token were given
if (!empty($data->token)) {
  // get secret key and decode jwt token
  $key = $config->jwt_secret;
  $decoded = JWT::decode($data->token, $key, array('HS256'));

  // check if jwt key was decoded
  if ($decoded) {
    if (
      !empty($data->title) &&
      !empty($data->publisher) &&
      !empty($data->year_published) &&
      !empty($data->isbn) &&
      !empty($data->type)
    ) {
      // set book property values
      $book->titel = $data->title;
      $book->uitgever = $data->publisher;
      $book->jaar_uitgegeven = $data->year_published;
      $book->isbn = $data->isbn;
      $book->type = $data->type;

      // create book
      if ($book->create()) {
        // set http response code - 201 CREATED
        http_response_code(201);
        echo json_encode(array("success" => "Het boek is succesvol aangemaakt!"));
      } else {
        // set http response code - 503 SERVICE UNAVAILABLE
        http_response_code(503);
        echo json_encode(array("error" => "Er is iets foutgegaan bij het aanmaken van het boek, probeer het opnieuw!"));
      }
    }
  }
}