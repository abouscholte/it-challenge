<?php

class User {
  // database connection and table name
  private $conn;
  private $table_name = "users";

  // object properties
  public $id;
  public $email;
  public $username;
  public $name;
  public $password;
  public $code;
  public $code_created;
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
    $this->username = $row['username'];
    $this->name = $row['name'];
    $this->password = $row['password'];
    $this->code = $row['code'];
    $this->code_created = $row['code_created'];
    $this->admin = $row['admin'];
    $this->status = $row['status'];
  }

  // check if user exists by username and password
  // returns true if user exists
  function check_user() {
    $query = "SELECT id
              FROM " . $this->table_name . "
              WHERE username=:username OR email=:email";

    // prepare and execute query statement
    $stmt = $this->conn->prepare($query);

    $stmt->bindParam(":username", $this->username);
    $stmt->bindParam(":email", $this->email);
    $stmt->execute();

    // check if a user was found
    if ($stmt->rowCount() > 0) {
      return true;
    }

    return false;
  }


  // check if user exists by useremail data
  // returns user if exists
  function check_useremail() {
    $query = "SELECT *
              FROM " . $this->table_name . "
              WHERE username=:useremail OR email=:useremail";

    // prepare and execute query and bind params
    $stmt = $this->conn->prepare($query);
    $stmt->bindParam(":useremail", $this->useremail);
    $stmt->execute();

    // fetch user and set values 
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    $this->id = $row['id'];
    $this->email = $row['email'];
    $this->username = $row['username'];
    $this->name = $row['name'];
    $this->password = $row['password'];
    $this->code = $row['code'];
    $this->code_created = $row['code_created'];
    $this->admin = $row['admin'];
    $this->status = $row['status'];
  }
  
  
  // create user
  function create() {
    $query = "INSERT INTO
                " . $this->table_name . "
              SET
                email=:email, username=:username, name=:name, password=:password, status=0, admin=0";
    
    // prepare query
    $stmt = $this->conn->prepare($query);

    // sanitize
    $this->email = htmlspecialchars(strip_tags($this->email));
    $this->username = htmlspecialchars(strip_tags($this->username));
    $this->name = htmlspecialchars(strip_tags($this->name));
    $this->password = password_hash($this->password, PASSWORD_BCRYPT);

    // bind values
    $stmt->bindParam(":email", $this->email);
    $stmt->bindParam(":username", $this->username);
    $stmt->bindParam(":name", $this->name);
    $stmt->bindParam(":password", $this->password);

    // execute query
    if ($stmt->execute()) {
      return true;
    }

    return false;
  }


  // update user
  function update() {
    $query = "UPDATE " . $this->table_name . "
              SET
                email=:email, username=:username, name=:name
              WHERE id=:id";

    // prepare query
    $stmt = $this->conn->prepare($query);

    // sanitize
    $this->email = htmlspecialchars(strip_tags(($this->email)));
    $this->username = htmlspecialchars(strip_tags(($this->username)));
    $this->name = htmlspecialchars(strip_tags($this->name));

    // bind values
    $stmt->bindParam(":email", $this->email);
    $stmt->bindParam(":username", $this->username);
    $stmt->bindParam(":name", $this->name);
    $stmt->bindParam(":id", $this->id);

    // execute query
    if ($stmt->execute()) {
      return true;
    }

    return false;
  }
}