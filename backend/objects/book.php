<?php

class Book {
  // database connection and table name
  private $conn;
  private $table_name = "boeken";

  // object properties
  public $id;
  public $titel;
  public $author;
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

  // create book
  function create() {
    $query = "INSERT INTO
                " . $this->table_name . "
              SET
                titel=:titel, auteur=:auteur, uitgever=:uitgever, jaar_uitgegeven=:jaar_uitgegeven, isbn=:isbn, type=:type, gebruiker_id=:gebruiker_id";

    // prepare query
    $stmt = $this->conn->prepare($query);

    // sanitize
    $this->titel = htmlspecialchars(strip_tags($this->titel));
    $this->auteur = htmlspecialchars(strip_tags($this->auteur));
    $this->uitgever = htmlspecialchars(strip_tags($this->uitgever));
    $this->jaar_uitgegeven = htmlspecialchars(strip_tags($this->jaar_uitgegeven));
    $this->isbn = htmlspecialchars(strip_tags($this->isbn));
    $this->type = htmlspecialchars(strip_tags($this->type));

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

  // create book
  function update() {
    $query = "UPDATE " . $this->table_name . "
              SET
                titel=:titel, auteur=:auteur, uitgever=:uitgever, jaar_uitgegeven=:jaar_uitgegeven, isbn=:isbn, type=:type
              WHERE id=:id";

    // prepare query
    $stmt = $this->conn->prepare($query);

    // sanitize
    $this->titel = htmlspecialchars(strip_tags($this->titel));
    $this->auteur = htmlspecialchars(strip_tags($this->auteur));
    $this->uitgever = htmlspecialchars(strip_tags($this->uitgever));
    $this->jaar_uitgegeven = htmlspecialchars(strip_tags($this->jaar_uitgegeven));
    $this->isbn = htmlspecialchars(strip_tags($this->isbn));
    $this->type = htmlspecialchars(strip_tags($this->type));

    // bind values
    $stmt->bindParam(":titel", $this->titel);
    $stmt->bindParam(":auteur", $this->auteur);
    $stmt->bindParam(":uitgever", $this->uitgever);
    $stmt->bindParam(":jaar_uitgegeven", $this->jaar_uitgegeven);
    $stmt->bindParam(":isbn", $this->isbn);
    $stmt->bindParam(":type", $this->type);
    $stmt->bindParam(":id", $this->id);

    // execute query
    return ($stmt->execute()) ? true : false;
  }
}