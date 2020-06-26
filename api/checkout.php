<?php
require('config.php');

$resp = array(
			'addresses'=>getAddresses(),
			'payment_methods'=>getPaymentMethods()
			);


function getPaymentMethods()
{
	return array(
				 array('code'=>'cod','name'=>'Cash ON Delivery')
				);
} 

function getAddresses()
{	
	global $DB;
	
	$sql = "SELECT a.*,z.name as zone,c.name as country FROM `oc_address` as a 
	        LEFT JOIN oc_zone AS z ON z.zone_id = a.zone_id	
	        LEFT JOIN oc_country AS c ON c.country_id = a.country_id	
			WHERE 1=1";
	$stmt   = $DB->prepare($sql);
	$stmt->execute();
	$result = $stmt->fetchAll();
	$addresses= array();

	foreach($result as $row)
	 {	
	 	$full_address =$row['firstname']." ".$row['lastname'].",";
	 	$full_address.=$row['address_1'].", ".$row['address_2'].",";
	 	$full_address.=$row['city']." ".$row['postcode'].",";
	 	$full_address.=$row['zone']." ".$row['country']."";

	 	$addresses[]=array(
	 					  'address_id'  =>$row['address_id'],
	 					  'full_address'=>$full_address	

	 					);
	 }	

	 return $addresses;
}

echo json_encode($resp);