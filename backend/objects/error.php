<?php

class ErrorRapport {
  // database connection and table name
  private $conn;
  private $table_name = "fouten";

  // object properties
  public $id;
  public $type;
  public $hoofdstuk;
  public $paragraaf;
  public $alinea;
  public $pagina;
  public $toelichting;
  public $status;
  public $boek_id;
  public $gebruiker_id;

  // constructor with $db as database connection
  public function __construct($db) {
    $this->conn = $db;
  }

  // read errors
  function read() {
    $query = "SELECT
                f.id, f.type, f.hoofdstuk, f.paragraaf,
                f.alinea, f.pagina, f.toelichting,
                f.boek_id, f.gebruiker_id, f.status, b.id, b.titel, b.auteur
              FROM " . $this->table_name . " f
              INNER JOIN boeken b
                ON f.boek_id = b.id";

    // prepare and execute query statement
    $stmt = $this->conn->prepare($query);
    $stmt->execute();
    
    return $stmt;
  }

  // read one error
  function read_single() {
    $query = "SELECT
                f.id, f.type, f.hoofdstuk, f.paragraaf,
                f.alinea, f.pagina, f.toelichting,
                f.boek_id, f.status, b.id, b.titel, b.auteur
              FROM " . $this->table_name . " f
              INNER JOIN boeken b
                ON f.boek_id = b.id
              WHERE
                f.id=:id";

    // prepare and execute query and bind param
    $stmt = $this->conn->prepare($query);
    $stmt->bindParam(":id", $this->id);
    $stmt->execute();

    // fetch error and set values
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    $this->type = $row['type'];
    $this->hoofdstuk = $row['hoofdstuk'];
    $this->paragraaf = $row['paragraaf'];
    $this->alinea = $row['alinea'];
    $this->pagina = $row['pagina'];
    $this->toelichting = $row['toelichting'];
    $this->status = $row['status'];
    $this->boek_id = $row['boek_id'];
    $this->gebruiker_id = $row['gebruiker_id'];
  }

  // create error
  function create() {
    $query = "INSERT INTO
                " . $this->table_name . "
              SET
                type=:type,
                hoofdstuk=:hoofdstuk,
                paragraaf=:paragraaf,
                alinea=:alinea, pagina=:pagina,
                toelichting=:toelichting, status=:status,
                boek_id=:boek_id, gebruiker_id=:gebruiker_id";

    // prepare query
    $stmt = $this->conn->prepare($query);

    // bind values
    $stmt->bindParam(":type", $this->type);
    $stmt->bindParam(":hoofdstuk", $this->hoofdstuk);
    $stmt->bindParam(":paragraaf", $this->paragraaf);
    $stmt->bindParam(":alinea", $this->alinea);
    $stmt->bindParam(":pagina", $this->pagina);
    $stmt->bindParam(":toelichting", $this->toelichting);
    $stmt->bindParam(":status", $this->status);
    $stmt->bindParam(":boek_id", $this->boek_id);
    $stmt->bindParam(":gebruiker_id", $this->gebruiker_id);

    // execute query
    return ($stmt->execute()) ? true : false;
  }

  // update error
  function update() {
    $query = "UPDATE
                " . $this->table_name . "
              SET
                (type=:type, hoofdstuk=:hoofdstuk, paragraaf=:paragraaf,
                 alinea=:alinea, pagina=:pagina, toelichting=:toelichting,
                 status=:status, boek_id=:boek_id, gebruiker_id)
              WHERE
                id=:id";

    // prepare query
    $stmt = $this->conn->prepare($query);

    // bind values
    $stmt->bindParam(":type", $this->type);
    $stmt->bindParam(":hoofdstuk", $this->hoofdstuk);
    $stmt->bindParam(":paragraaf", $this->paragraaf);
    $stmt->bindParam(":alinea", $this->alinea);
    $stmt->bindParam(":pagina", $this->pagina);
    $stmt->bindParam(":toelichting", $this->toelichting);
    $stmt->bindParam(":status", $this->status);
    $stmt->bindParam(":boek_id", $this->boek_id);
    $stmt->bindParam(":gebruiker_id", $this->gebruiker_id);
    $stmt->bindParam(":id", $this->id);

    // execute query
    return ($stmt->execute()) ? true : false;
  }

  // delete error
  function delete() {
    $query = "DELETE FROM
                " . $this->table_name . "
              WHERE
                id=:id";

    // prepare query and bind value
    $stmt = $this->conn->prepare($query);
    $stmt->bindParam(":id", $this->id);

    // execute query
    return ($stmt->execute()) ? true : false;
  }
}