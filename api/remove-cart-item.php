<?php
require('config.php');
$data = json_decode(file_get_contents('php://input'),true);
$cart_id = $data['cart_id'];

$sql = "DELETE FROM oc_cart WHERE cart_id=:cart_id";
$stmt   = $DB->prepare($sql);
$stmt->execute(array('cart_id'=>$cart_id));

echo json_encode(array('status'=>'success'));