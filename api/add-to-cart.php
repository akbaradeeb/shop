<?php
require('config.php');
$data = json_decode(file_get_contents('php://input'),true);
$product_id = $data['product_id'];
$qty		= (empty($data['qty']) ? 1 : $data['qty']);


$data = array(
			 	'api_id'=>'0',	
			 	'customer_id'=>'0',	
			 	'session_id'=>'DDDDDD',	
			 	'product_id'=>$product_id,	
			 	'recurring_id'=>'0',	
			 	'option'=>'[]',	
			 	'quantity'=>$qty,	
			 	'date_added'=>date("Y-m-d H:i:s"),	

			 );

$keys = array_keys($data);
$sql  = "INSERT INTO oc_cart (".implode(", ",$keys).") ";
$sql .= " VALUES ( :".implode(", :",$keys).")";  

$stmt   = $DB->prepare($sql);
$stmt->execute($data);


echo json_encode(array('status'=>'success'));