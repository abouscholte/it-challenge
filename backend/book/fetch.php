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

$stmt = $book->read();
$num = $stmt->rowCount();

// get posted data and decode jwt key
$data = json_decode(file_get_contents("php://input"));

if (isset($data->token)) {
  $key = $config->jwt_secret;
  $decoded = JWT::decode($data->token, $key, array('HS256'));

  // check if token was sucessfully decoded, this means key is OK
  if ($decoded) {
    $books_arr = array();
    $books_arr['books'] = array();

    // retrieve table contents
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
      extract($row);

      $book = array(
        "id" => $id,
        "title" => $titel,
        "author" => $auteur,
        "publisher" => $uitgever,
        "year_published" => $jaar_uitgegeven,
        "isbn" => $isbn,
        "type" => $type,
        "status" => $status,
        "user_id" => $gebruiker_id
      );

      array_push($books_arr['books'], $book);
    }

    // set response code - 200 OK
    http_response_code(200);
    echo json_encode($books_arr);
  }
}