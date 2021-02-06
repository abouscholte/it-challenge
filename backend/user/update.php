<?php

// set required headers
include_once '../config/headers.php';
include_once '../config/config.php';

// get the database and user object files
include_once '../config/database.php';
include_once '../objects/user.php';

$config = new Config();
$database = new Database();
$db = $database->getConnection();

$user = new User($db);

// set up the JWT things
require '../vendor/autoload.php';
use \Firebase\JWT\JWT;

// get the posted data and make sure the data is not empty
$data = json_decode(file_get_contents("php://input"));

// validate json web token
if (!empty($data->token) && !empty($data->id)) {
  $key = $config->jwt_secret;
  $decoded = JWT::decode($data->token, $key, array('HS256'));
  $decoded_array = (array) $decoded;

  // check if user is admin or the correct user
  if ($decoded_array['uid'] === $data->id || $decoded_array['adm'] === 1) {
    if (
      !empty($data->email) &&
      !empty($data->username) &&
      !empty($data->name)
    ) {
      $user->id = $data->id;
      $user->email = $data->email;
      $user->username = $data->username;
      $user->name = $data->name;
        
      // check if user already exists
      if ($user->check_user()) {
        // user exists, update user
        if ($user->update()) {
          // set http response code and send message
          http_response_code(200);
          echo json_encode(array("success" => ($decoded_array['uid'] === $data->id) ? "Uw account is succesvol geüpdatet!" : "Het account is succesvol geüpdatet!"));
        } else {
          // no success in updating user
          http_response_code(400);
          echo json_encode(array("error" => "Er is iets foutgegaan bij het updaten van uw account!"));
        }
      } else {
        // no user was found, set http code and message
        http_response_code(400);
        echo json_encode(array("error" => "Er is geen gebruiker gevonden met deze gegevens!"));
      }
    }
  }
}