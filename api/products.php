<?php
require('config.php');

$page = intval($_GET['page']);

// Get Total

$stmt   = $DB->prepare("SELECT count(*) as total FROM `oc_product` WHERE status = 1");
$stmt->execute();
$data   = $stmt->fetch();
$total  = $data['total'];


$stmt   = $DB->prepare("SELECT p.*,d.name as name FROM `oc_product` as p 
						INNER JOIN oc_product_description as d d.product_id = p.product_id
						WHERE 1=1");
$stmt->execute();
$data   = $stmt->fetchAll();
$products = array();

foreach($data as $product){

	$product['id'] = $product['product_id'];
	$product['image'] = "http://localhost/opencart/image/".$product['image'];
	$product['canAddToCart'] = true;
	$products[] = $product;
}


$result = array(
			   	'products'=>$products,
			   	'records'=>array(
			   						'start'=>1,
			   						'end'=>5,
			   						'total'=>$total
			   					),
			   	'pagination'=>array(
			   						'pages'=>array(1,2,3),
			   						'current_page'=>$page	

			   						)

			   );

echo json_encode($result);