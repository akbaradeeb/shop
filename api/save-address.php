<?php
require('config.php');
$data = json_decode(file_get_contents('php://input'),true);


$data = array(
			 	'customer_id'	=> '0',	
			 	'firstname'		=> $data['first_name'],	
			 	'lastname'		=> $data['last_name'],	
			 	'address_1'		=> $data['street_address'],	
			 	'address_2'		=> $data['unit_address'],	
			 	'city'			=> $data['city'],	
			 	'postcode'		=> $data['postcode'],		
			 	'country_id'	=> 99,
			 	'zone_id'		=> 1505,
			 );

$keys = array_keys($data);
$sql  = "INSERT INTO oc_address (".implode(", ",$keys).") ";
$sql .= " VALUES ( :".implode(", :",$keys).")";  

$stmt   = $DB->prepare($sql);
$stmt->execute($data);
$lid    = $DB->lastInsertId();

echo json_encode(array('address_id'=>$lid));