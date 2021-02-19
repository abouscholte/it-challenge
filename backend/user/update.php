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

// check if id and jwt token were given
if (!empty($data->id) && !empty($data->token)) {
  // get secret key and decode jwt token
  $key = $config->jwt_secret;
  $decoded = JWT::decode($data->token, $key, array('HS256'));

  $decoded_array = (array) $decoded;

  // check if the user is correct or admin
  if ($decoded_array['adm'] == 1 || $decoded_array['uid'] == $data->id) {
    if (
      !empty($data->email) &&
      !empty($data->username) &&
      !empty($data->password)
    ) {
      // fetch id and query user
      $user->id = $data->id;
      $stmt = $user->read_single();

      unset($data->token);
      
      // check if email was updated and check if email already exists
      $error = 0;

      if ($data->email != $user->email) {
        $user->email = $data->email;
        if ($user->check_user_email()) {
          $error = 1;
          echo json_encode(array("error" => "Er bestaat al een gebruiker met dit e-mailadres, probeer een andere!"));
          return false;
        }
      }
      
      if ($data->username != $user->gebruikersnaam) {
        $user->gebruikersnaam = $data->username;
        if ($user->check_user_username()) {
          $error = 1;
          echo json_encode(array("error" => "Er bestaat al een gebruiker met deze gebruikersnaam, probeer een andere!"));
          return false;
        }
      }

      if ($error == 0) {
        // update user
        $user->email = $data->email;
        $user->gebruikersnaam = $data->username;
        $user->wachtwoord = $data->password;
        $user->admin = $data->admin;
        $user->status = $data->status;

        if ($user->update()) {
          echo json_encode(array("success" => ($decoded_array['uid'] == $data->id) ? 'Uw account is succesvol bijgewerkt!' : 'Het account is succesvol bijgewerkt!'));
        } else {
          echo json_encode(array("error" => "Er is iets misgegaan bij het bijwerken van het account!"));
        }
      }
    }
  }
}