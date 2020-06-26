<?php
define('HOST','localhost');
define('DB','opencart2');
define('USER','root');
define('PASS','');
define('CHARSET','utf8mb4'); 

$dsn   = "mysql:host=".HOST.";dbname=".DB.";charset=".CHARSET;  
 
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
     $DB = new PDO($dsn, USER, PASS, $options);
} catch (\PDOException $e) { echo $e->getMessage();
     throw new \PDOException($e->getMessage(), (int)$e->getCode());
}