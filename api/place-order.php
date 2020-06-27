<?php
require('config.php');
$address = json_decode(file_get_contents('php://input'),true);

$sub_total 		 = getCartSubTotal();
$shipping_charge = 50;
$grand_total     = $sub_total+$shipping_charge;

$payment_method  = 'Cash On Delivery';
$payment_code    = 'COD';
$shipping_code   = 'flat';
$shipping_method = 'Flat Rate Shipping';

$address = getAddress(1);

$order = array(
			 	'invoice_no'     => 0,
				'invoice_prefix' => 'INV-'.date('Y').'-00', 
				'store_id'    => 0, 
				'store_name'  => 'React Api', 
				'store_url'   => 'http://localhost/opencart/', 
				'customer_id' => 0, 
				'customer_group_id' => '1', 
				'firstname' => $address['firstname'], 
				'lastname'  => $address['lastname'], 
				'email'     => $address['email'], 
				'telephone' => $address['phone'], 
				'fax' => '', 
				'custom_field'       =>'', 
				'payment_firstname'  => $address['firstname'], 
				'payment_lastname'   => $address['lastname'], 
				'payment_company'    => $address['company'], 
				'payment_address_1'  => $address['address_1'], 
				'payment_address_2'  => $address['address_2'], 
				'payment_city'       => $address['city'], 
				'payment_postcode'   => $address['postcode'], 
				'payment_country'    => $address['country'], 
				'payment_country_id' => $address['country_id'], 
				'payment_zone'       => $address['zone'],
				'payment_zone_id'    => $address['zone_id'], 
				'payment_address_format' =>'', 
				'payment_custom_field'   => '[]', 
				'payment_method'         => $payment_method, 
				'payment_code'           => $payment_code, 
				'shipping_firstname'  => $address['firstname'], 
				'shipping_lastname'   => $address['lastname'], 
				'shipping_company'    => $address['company'], 
				'shipping_address_1'  => $address['address_1'], 
				'shipping_address_2'  => $address['address_2'], 
				'shipping_city'       => $address['city'], 
				'shipping_postcode'   => $address['postcode'], 
				'shipping_country'    => $address['country'], 
				'shipping_country_id' => $address['country_id'], 
				'shipping_zone'       => $address['zone'], 
				'shipping_zone_id'    => $address['zone_id'], 
				'shipping_address_format' => '', 
				'shipping_custom_field'   => '[]', 
				'shipping_method' => $shipping_method, 
				'shipping_code'   => $shipping_code, 
				'comment' 		  => '0', 
				'total' 		  => $grand_total, 
				'order_status_id' => 1, 
				'affiliate_id'    => 0, 
				'commission'      => 0, 
				'marketing_id' 	  => 0, 
				'tracking' 		  => 0, 
				'language_id' 	  => 1, 
				'currency_id' 	  => 2, 
				'currency_code'   => 'USD', 
				'currency_value'  => 1, 
				'ip' 			  => $_SERVER['REMOTE_ADDR'], 
				'forwarded_ip' 	  => $_SERVER['REMOTE_ADDR'], 
				'user_agent'      => $_SERVER['HTTP_USER_AGENT'], 
				'accept_language' => 'en-US,en;q=0.9,hi;q=0.8,es;q=0.7', 
				'date_added'      => date("Y-m-d H:i:s"), 
				'date_modified'   => date("Y-m-d H:i:s"), 
			 );


$keys = array_keys($order);
$sql  = "INSERT INTO oc_order (".implode(", ",$keys).") ";
$sql .= " VALUES ( :".implode(", :",$keys).")";  

$stmt   = $DB->prepare($sql);
$stmt->execute($order);
$lid    = $DB->lastInsertId();

/* Save Items */
saveOrderItem($lid);
saveOrderTotals($lid,$sub_total,$shipping_charge,$grand_total);

echo json_encode(array('order_id'=>$lid));

function getAddress($address_id)
 {
 	global $DB;
 	$sql = "SELECT a.*,z.name as zone,c.name as country FROM `oc_address` as a 
	        LEFT JOIN oc_zone AS z ON z.zone_id = a.zone_id	
	        LEFT JOIN oc_country AS c ON c.country_id = a.country_id	
			WHERE a.address_id=:address_id";
	$stmt   = $DB->prepare($sql);
	$stmt->execute(['address_id'=>$address_id]);
	$result = $stmt->fetch();
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

function saveOrderItem($lid)
{	
	global $DB;
	$sql  = "SELECT c.*,d.name,p.model,p.price FROM `oc_cart` as c
			 LEFT JOIN oc_product as p ON c.product_id = p.product_id
			 LEFT JOIN oc_product_description as d ON d.product_id = c.product_id
			 WHERE 1=1";
	$stmt = $DB->prepare($sql);
	$stmt->execute();
	$data = $stmt->fetchAll();

	foreach($data as $row){

		$total   = $row['quantity'] * $row['price']; 
		$item    = array(
						  'order_id'   => $lid,
						  'product_id' => $row['product_id'],
						  'name'       => $row['name'],
						  'model'      => $row['model'],
						  'quantity'   => $row['quantity'],
						  'price'      => $row['price'],
						  'total'      => $total,
						  'tax'        => '0',
						  'reward'     => '0',	
						);

		$keys = array_keys($item);
		$sql  = "INSERT INTO oc_order_product (".implode(", ",$keys).") ";
	    $sql .= " VALUES ( :".implode(", :",$keys).")"; 

	    $stmt   = $DB->prepare($sql);
		$stmt->execute($item);
		$lid    = $DB->lastInsertId();
	}
}


function saveOrderTotals($lid,$sub_total,$shipping_charge,$grand_total)
 {
 	global $DB;
 	$sql  = "INSERT INTO oc_order_total (`order_id`, `code`, `title`, `value`, `sort_order`) ";
    $sql .= " VALUES (:order_id,:code,:title,:value,:sort_order)"; 

    $stmt   = $DB->prepare($sql);
	$stmt->execute(['order_id'=>$lid,'code'=>'sub_total','title'=>'Sub-Total','value'=>$sub_total,'sort_order'=>1]);
	$stmt->execute(['order_id'=>$lid,'code'=>'shipping','title'=>'shipping','value'=>$shipping_charge,'sort_order'=>2]);
	$stmt->execute(['order_id'=>$lid,'code'=>'total','title'=>'Total','value'=>$grand_total,'sort_order'=>3]);
 }