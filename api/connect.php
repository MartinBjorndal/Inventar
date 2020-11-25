<?php

// db credentials
define('DB_HOST', 'home.torhelge.no');
define('DB_USER', 'inventar');
define('DB_PASS', '3q6uG^5DZQY?');
define('DB_NAME', 'inventar');

// Connect with the database.
function connect()
{
  $connect = mysqli_connect(DB_HOST ,DB_USER ,DB_PASS ,DB_NAME);

  if (mysqli_connect_errno($connect)) {
    die("Failed to connect:" . mysqli_connect_error());
  }

  mysqli_set_charset($connect, "utf8");

  return $connect;
}

$con = connect();