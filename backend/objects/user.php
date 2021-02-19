<?php

class User {
  // database connection and table name
  private $conn;
  private $table_name = "gebruikers";

  // object properties
  public $id;
  public $email;
  public $gebruikersnaam;
  public $naam;
  public $wachtwoord;
  public $code;
  public $code_aangemaakt;
  public $admin;
  public $status;

  // constructor with $db as database connection
  public function __construct($db) {
    $this->conn = $db;
  }

  // read users
  function read() {
    $query = "SELECT * FROM " . $this->table_name;

    // prepare and execute query statement
    $stmt = $this->conn->prepare($query);
    $stmt->execute();
    
    return $stmt;
  }

  // read single
  function read_single() {
    $query = "SELECT *
              FROM " . $this->table_name . "
              WHERE id=:id";

    // prepare and execute query and bind params
    $stmt = $this->conn->prepare($query);
    $stmt->bindParam(":id", $this->id);
    $stmt->execute();

    // fetch user and set values 
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    $this->email = $row['email'];
    $this->gebruikersnaam = $row['gebruikersnaam'];
    $this->naam = $row['naam'];
    $this->wachtwoord = $row['wachtwoord'];
    $this->code = $row['code'];
    $this->code_aangemaakt = $row['code_aangemaakt'];
    $this->admin = $row['admin'];
    $this->status = $row['status'];
  }

  // check if user exists by email
  // returns true if user exists
  function check_user_email() {
    $query = "SELECT id
              FROM " . $this->table_name . "
              WHERE email=:email";

    // prepare and execute query statement
    $stmt = $this->conn->prepare($query);

    $stmt->bindParam(":email", $this->email);
    $stmt->execute();

    // check if a user was found
    return ($stmt->rowCount() > 0) ? true : false;
  }


  // check if user exists by username
  // returns true if user exists
  function check_user_username() {
    $query = "SELECT id
              FROM " . $this->table_name . "
              WHERE gebruikersnaam=:gebruikersnaam";
    
    // prepare and execute query statement
    $stmt = $this->conn->prepare($query);

    $stmt->bindParam(":gebruikersnaam", $this->gebruikersnaam);
    $stmt->execute();

    // check if a user was found
    return ($stmt->rowCount() > 0) ? true : false;
  }


  // check if user exists by useremail data
  // returns user if exists
  // this function is used for login only
  function check_useremail() {
    $query = "SELECT *
              FROM " . $this->table_name . "
              WHERE gebruikersnaam=:useremail OR email=:useremail";

    // prepare and execute query and bind params
    $stmt = $this->conn->prepare($query);
    $stmt->bindParam(":useremail", $this->useremail);
    $stmt->execute();

    // fetch user and set values 
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    $this->id = $row['id'];
    $this->email = $row['email'];
    $this->username = $row['gebruikersnaam'];
    $this->name = $row['naam'];
    $this->password = $row['wachtwoord'];
    $this->code = $row['code'];
    $this->code_created = $row['code_aangemaakt'];
    $this->admin = $row['admin'];
    $this->status = $row['status'];
  }
  
  
  // create user
  function create() {
    $query = "INSERT INTO
                " . $this->table_name . "
              SET
                email=:email, gebruikersnaam=:gebruikersnaam, naam=:naam, wachtwoord=:wachtwoord, status=0, admin=0";
    
    // prepare query
    $stmt = $this->conn->prepare($query);

    // sanitize
    $this->email = htmlspecialchars(strip_tags($this->email));
    $this->gebruikersnaam = htmlspecialchars(strip_tags($this->gebruikersnaam));
    $this->naam = htmlspecialchars(strip_tags($this->naam));
    $this->wachtwoord = password_hash($this->wachtwoord, PASSWORD_BCRYPT);

    // bind values
    $stmt->bindParam(":email", $this->email);
    $stmt->bindParam(":gebruikersnaam", $this->gebruikersnaam);
    $stmt->bindParam(":naam", $this->naam);
    $stmt->bindParam(":wachtwoord", $this->wachtwoord);

    // execute query
    return ($stmt->execute()) ? true : false;
  }


  // update user
  function update() {
    $query = "UPDATE " . $this->table_name . "
              SET
                email=:email, gebruikersnaam=:gebruikersnaam, naam=:naam, admin=:admin, status=:status
              WHERE id=:id";

    // prepare query
    $stmt = $this->conn->prepare($query);

    // sanitize
    $this->email = htmlspecialchars(strip_tags(($this->email)));
    $this->gebruikersnaam = htmlspecialchars(strip_tags(($this->gebruikersnaam)));
    $this->naam = htmlspecialchars(strip_tags($this->naam));

    // bind values
    $stmt->bindParam(":email", $this->email);
    $stmt->bindParam(":gebruikersnaam", $this->gebruikersnaam);
    $stmt->bindParam(":naam", $this->naam);
    $stmt->bindParam(":admin", $this->admin);
    $stmt->bindParam(":status", $this->status);
    $stmt->bindParam(":id", $this->id);

    // execute query
    return ($stmt->execute()) ? true : false;
  }

  // delete user
  // returns true if deletion was succesfull
  function delete() {
    $query = "DELETE FROM " . $this->table_name . "
              WHERE id=:id";

    // prepare query and bind value
    $stmt = $this->conn->prepare($query);
    $stmt->bindParam(":id", $this->id);

    // execute query
    return ($stmt->execute()) ? true : false;
  }
}