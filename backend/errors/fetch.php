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
if (!empty($data->token)) {
  // get secret key and decode jwt token
  $key = $config->jwt_secret;
  $decoded = JWT::decode($data->token, $key, array('HS256'));

  $decoded_array = (array) $decoded;

  // check if the user requesting is admin
  if ($decoded_array['adm'] == 1) {
    $errors_arr = array();
    $errors_arr['errors'] = array();

    // retrieve table contents
    if ($num > 0) {
      while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $error = array(
          "id" => $row['fout_id'],
          "type" => $row['type'],
          "chapter" => $row['hoofdstuk'],
          "section" => $row['paragraaf'],
          "paragraph" => $row['alinea'],
          "page" => $row['pagina'],
          "explanation" => $row['toelichting'],
          "status" => $row['status'],
          "user_id" => $row['gebruiker_id'],
          "book_id" => $row['boek_id'],
          "book_title" => $row['titel'],
          "book_author" => $row['auteur'],
          "book_publisher" => $row['uitgever']
        );

        array_push($errors_arr['errors'], $error);
      }
      // set response code - 200 OK
      http_response_code(200);
      echo json_encode($errors_arr);
    } else {
      // set response code - 404 NOT FOUND
      http_response_code(404);
      echo json_encode(array("error" => "Sorry, geen data gevonden!"));
    }
  }
}