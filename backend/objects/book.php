<?php

class Book {
  // database connection and table name
  private $conn;
  private $table_name = "boeken";

  // object properties
  public $id;
  public $titel;
  public $auteur;
  public $uitgever;
  public $jaar_uitgegeven;
  public $isbn;
  public $type;
  public $status;
  public $gebruiker_id;

  // constructor with $db as database connection
  public function __construct($db) {
    $this->conn = $db;
  }

  // read books
  function read() {
    $query = "SELECT * FROM " . $this->table_name;

    // prepare and execute query statement
    $stmt = $this->conn->prepare($query);
    $stmt->execute();

    return $stmt;
  }

  // read one book
  function read_single() {
    $query = "SELECT * 
              FROM " . $this->table_name . "
              WHERE id=:id";
    
    // prepare and execute query and bind params
    $stmt = $this->conn->prepare($query);
    $stmt->bindParam(":id", $this->id);
    $stmt->execute();

    // fetch book and set values
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    $this->titel = $row['titel'];
    $this->auteur = $row['auteur'];
    $this->uitgever = $row['uitgever'];
    $this->jaar_uitgegeven = $row['jaar_uitgegeven'];
    $this->isbn = $row['isbn'];
    $this->type = $row['type'];
    $this->status = $row['status'];
    $this->gebruiker_id = $row['gebruiker_id'];
  }
  
  // create book
  function create() {
    $query = "INSERT INTO
                " . $this->table_name . "
              SET
                titel=:titel, auteur=:auteur, uitgever=:uitgever, jaar_uitgegeven=:jaar_uitgegeven, isbn=:isbn, type=:type, gebruiker_id=:gebruiker_id";

    // prepare query
    $stmt = $this->conn->prepare($query);

    // bind values
    $stmt->bindParam(":titel", $this->titel);
    $stmt->bindParam(":auteur", $this->auteur);
    $stmt->bindParam(":uitgever", $this->uitgever);
    $stmt->bindParam(":jaar_uitgegeven", $this->jaar_uitgegeven);
    $stmt->bindParam(":isbn", $this->isbn);
    $stmt->bindParam(":type", $this->type);
    $stmt->bindParam(":gebruiker_id", $this->gebruiker_id);

    // execute query
    return ($stmt->execute()) ? true : false;
  }

  // update book
  function update() {
    $query = "UPDATE " . $this->table_name . "
              SET
                titel=:titel, auteur=:auteur, uitgever=:uitgever, jaar_uitgegeven=:jaar_uitgegeven, isbn=:isbn, type=:type, status=:status
              WHERE id=:id";

    // prepare query
    $stmt = $this->conn->prepare($query);

    // bind values
    $stmt->bindParam(":titel", $this->titel);
    $stmt->bindParam(":auteur", $this->auteur);
    $stmt->bindParam(":uitgever", $this->uitgever);
    $stmt->bindParam(":jaar_uitgegeven", $this->jaar_uitgegeven);
    $stmt->bindParam(":isbn", $this->isbn);
    $stmt->bindParam(":type", $this->type);
    $stmt->bindParam(":status", $this->status);
    $stmt->bindParam(":id", $this->id);

    // execute query
    return ($stmt->execute()) ? true : false;
  }

  // delete book
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