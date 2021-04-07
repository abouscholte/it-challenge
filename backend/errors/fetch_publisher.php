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
    // create array and fetch db results
    $pub_arr = array();
    $pub_arr['publishers'] = array();
    $res = $stmt->fetchAll();

    // check if results were found
    if ($num > 0) {
      // add all publishers to array
      foreach ($res as $row) {
        if (!in_array($row['uitgever'], $pub_arr)) {
          $pub_arr['publishers'][$row['uitgever']] = array();
        }
      }

      // add all error reports to the correct publisher
      foreach ($res as $row) {
        foreach($pub_arr['publishers'] as $key => $value) {
          if ($key == $row['uitgever'] && $row['status'] == 1) {
            $error = array(
              "id" => $row['id'],
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
            
            array_push($pub_arr['publishers'][$key], $error);
          }
        }
      }
    } else {
      // set response code - 404 NOT FOUND
      http_response_code(404);
      echo json_encode(array("error" => "Sorry, geen data gevonden!"));
    }

    // echo array
    echo json_encode($pub_arr);
  }
}