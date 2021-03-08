<?php

// required headers and import config
include_once '../config/headers.php';
include_once '../config/config.php';

// set up the jwt things
require '../vendor/autoload.php';
use \Firebase\JWT\JWT;

// include database and object files
include_once '../config/database.php';
include_once '../objects/book.php';

// initiate database and user objects
$config = new Config();
$database = new Database();
$db = $database->getConnection();

$book = new Book($db);

// get posted data and decode jwt key
$data = json_decode(file_get_contents("php://input"));

if (isset($data->token)) {
  $key = $config->jwt_secret;
  $decoded = JWT::decode($data->token, $key, array('HS256'));

  // check if token was sucessfully decoded, this means key is OK
  if ($decoded) {
    $book->id = $data->id;
    $stmt = $book->read_single();

    // check if book was found
    if ($book->titel != null) {
      $book_arr = array(
        "id" => $book->id,
        "title" => $book->titel,
        "author" => $book->auteur,
        "publisher" => $book->uitgever,
        "year_published" => $book->jaar_uitgegeven,
        "isbn" => $book->isbn,
        "type" => $book->type,
        "status" => $book->status,
        "user_id" => $book->gebruiker_id
      );

      // set response code and message
      http_response_code(200);
      echo json_encode($book_arr);
    } else {
      // set response code and message
      http_response_code(404);
      echo json_encode(array("error" => "Geen boek gevonden, probeer het opnieuw!"));
    }
  }
}