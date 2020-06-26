<?php
require('config.php');

$items    = getCartItems();
$subtotal = getCartSubTotal();
$shipping_charge = 50;
$grand_total     = $subtotal+$shipping_charge;

$resp = array(
			'wishlist'=>getWishlistTotal(),
			'user'=>array(),
			'cart'=>array(
						'total'=>count($items),
						'subtotal'=>$subtotal,
						'items'=>$items,
						'shipping_charge'=>$shipping_charge,
						'grand_total'=>$grand_total
						)		

			);

function getCartItems()
{
	global $DB;
	$sql = "SELECT c.*,p.model,p.price,p.sku,d.name,p.image FROM `oc_cart` as c
			LEFT JOIN oc_product as p ON c.product_id = p.product_id
			LEFT JOIN oc_product_description as d on d.product_id = p.product_id and d.language_id = 1
			WHERE 1=1";
	$stmt   = $DB->prepare($sql);
	$stmt->execute();
	$data   = $stmt->fetchAll();
	$result = array();

	foreach ($data as $row) {
		$row['image'] = "http://localhost/opencart/image/".$row['image'];
		$result[] = $row;
	}
	return $result;  		
}

function getCartSubTotal()
{	
	global $DB;
	
	$sql = "SELECT sum(p.price*c.quantity) as total FROM `oc_cart` as c
			LEFT JOIN oc_product as p ON c.product_id = p.product_id
			WHERE 1=1";
	$stmt   = $DB->prepare($sql);
	$stmt->execute();
	$data   = $stmt->fetch();
	
	return $data['total'];
}


function getWishlistTotal()
{	
	global $DB;
	
	$sql = "SELECT count(*) as total FROM `oc_customer_wishlist` WHERE 1";
	$stmt   = $DB->prepare($sql);
	$stmt->execute();
	$data   = $stmt->fetch();
	
	return $data['total'];
}

echo json_encode($resp);