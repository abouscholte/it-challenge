<?php

class Database {
  // specify database credentials
  private $host = "localhost";
  private $db_name = "notenboom_project_db";
  private $username = "notenboom_project";
  private $password = "BQ8MOPGr8n";
  public $conn;

  // get the database connection
  public function getConnection() {
    $this->conn = null;

    try {
      $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
      $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch(PDOException $e) {
      echo "Connection failed: " . $e->getMessage();
    }

    return $this->conn;
  }
}