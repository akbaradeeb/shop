<?php
require('config.php');

$new_products = getNewProducts();

$resp = array(
			 	'new_products'=>$new_products

			 );

echo json_encode($resp);

function getNewProducts()
 {
 	global $DB;

 	$stmt   = $DB->prepare("SELECT p.*,d.name as name FROM `oc_product` as p 
						    INNER JOIN oc_product_description as d ON d.product_id = p.product_id
					 	    WHERE 1=1 order by product_id desc limit 6
					 	    ");
	$stmt->execute();
	$data   = $stmt->fetchAll();
	$products = array();

	foreach($data as $product){

		$product['id'] = $product['product_id'];
		$product['image'] = "http://localhost/opencart/image/".$product['image'];
		$product['canAddToCart'] = true;
		$products[] = $product;
	}

	return $products;

 }