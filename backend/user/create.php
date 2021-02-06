<?php

// required headers
include_once '../config/headers.php';

// get the database and user objects
include_once '../config/database.php';
include_once '../objects/user.php';

$database = new Database();
$db = $database->getConnection();

$user = new User($db);

// get posted data
$data = json_decode(file_get_contents("php://input"));

// make sure data is not empty
if (
  !empty($data->email) &&
  !empty($data->username) &&
  !empty($data->name) &&
  !empty($data->password) &&
  !empty($data->passwordr)
) {
  // set user property values
  $user->email = $data->email;
  $user->username = $data->username;
  $user->name = $data->name;
  $user->password = $data->password;

  // check if user already exists
  if ($user->check_user()) {
    // user already exists, return message
    http_response_code(400);
    echo json_encode(array("error" => "Een gebruiker met deze gegevens bestaat al. Log in of probeer andere gegevens!"));
  } else {
    // create the user
    if ($user->create()) {
      // set http response code - 201 CREATED
      http_response_code(201);
      echo json_encode(array("success" => "Uw account is succesvol aangemaakt. U kunt nu inloggen met uw account."));
    } else {
      // set http response code - 503 SERVICE UNAVAILABLE
      http_response_code(503);
      echo json_encode(array("error" => "Er is iets foutgegaan bij het aanmaken van het account, probeer het opnieuw!"));
    }
  }
}