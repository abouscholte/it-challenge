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

  $decoded_array = (array) $decoded;

  // check if user is admin
  if ($decoded_array["adm"] == 1) {
    if (
      !empty($data->id) &&
      !empty($data->title) &&
      !empty($data->author) &&
      !empty($data->publisher) &&
      !empty($data->year_published) &&
      !empty($data->isbn) &&
      !empty($data->type)
    ) {
      // set book property values
      $book->id = $data->id;
      $book->titel = $data->title;
      $book->auteur = $data->author;
      $book->uitgever = $data->publisher;
      $book->jaar_uitgegeven = $data->year_published;
      $book->isbn = $data->isbn;
      $book->type = $data->type;
      $book->status = $data->status;

      // create book
      if ($book->update()) {
        // set http response code - 201 CREATED
        http_response_code(201);
        echo json_encode(array("success" => "Het boek is succesvol aangepast!"));
      } else {
        // set http response code - 503 SERVICE UNAVAILABLE
        http_response_code(503);
        echo json_encode(array("error" => "Er is iets foutgegaan bij het aanpassen van het boek, probeer het opnieuw!"));
      }
    } else {
      http_response_code(503);
      echo json_encode(arraY("error" => "Vul alle velden in!"));
    }
  }
}