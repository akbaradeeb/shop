<?php
require('config.php');

$product_id = intval($_GET['product_id']);

$stmt   = $DB->prepare("SELECT p.*,d.name as name,d.description FROM `oc_product` as p 
						INNER JOIN oc_product_description as d ON d.product_id = p.product_id
						WHERE p.product_id=:product_id ");
$stmt->execute(['product_id'=>$product_id]);
$product  = $stmt->fetch();
$product['details']['description'] = $product['description'];

$stmt   = $DB->prepare("SELECT * FROM `oc_product_image`WHERE product_id=:product_id");
$stmt->execute(['product_id'=>$product_id]);
$data   = $stmt->fetchAll();
$images = array();

foreach($data as $image){
	$images[] = "http://localhost/opencart/image/".$image['image'];
}

$product['images'] = $images;

echo json_encode(array('product'=>$product));