var $ = jQuery;

var k_objects_price_total=0;
var gb_storage_price_total=0;
var gb_outbound_price_total=0;
var k_api_requests_price_total=0;

$('input#per_1k_objects_val').keyup(function(){
	var k_objects = parseInt($(this).val(),10);
	var div_k_objects = k_objects/1000;
	//console.log(div_k_objects);
	var k_objects_price=parseFloat((calculatorVars.per_1k_objects_start-calculatorVars.per_1k_objects_tangent)*Math.pow(calculatorVars.per_1k_objects_base_number,calculatorVars.per_1k_objects_growth*(div_k_objects-1)))+parseFloat(calculatorVars.per_1k_objects_tangent);
	k_objects_price=k_objects_price.toFixed(2);
	k_objects_price_total=(k_objects_price*div_k_objects).toFixed(2);
	var k_objects_discount=calculateDiscountPercent(calculatorVars.per_1k_objects_start,k_objects_price);
	$('#per_1k_objects_price').html((k_objects_price*div_k_objects).toFixed(2));
	$('#per_1k_objects_discount').html(k_objects_discount+'%');
	updateTotalPrice();
});
$('input#per_1gb_storage_val').keyup(function(){
	var gb_storage = parseFloat($(this).val()).toFixed(4);
	var gb_storage_price=parseFloat((calculatorVars.per_1gb_storage_start-calculatorVars.per_1gb_storage_tangent)*Math.pow(calculatorVars.per_1gb_storage_base_number,calculatorVars.per_1gb_storage_growth*(gb_storage-1)))+parseFloat(calculatorVars.per_1gb_storage_tangent);
	gb_storage_price=gb_storage_price.toFixed(2);
	gb_storage_price_total=(gb_storage_price*gb_storage).toFixed(2);
	var gb_storage_discount=calculateDiscountPercent(calculatorVars.per_1gb_storage_start,gb_storage_price);
	$('#per_1gb_storage_price').html((gb_storage_price*gb_storage).toFixed(2));
	$('#per_1gb_storage_discount').html(gb_storage_discount+'%');
	updateTotalPrice();
});
$('input#per_1gb_outbound_val').keyup(function(){
	var gb_outbound = parseFloat($(this).val()).toFixed(4);
	var gb_outbound_price=parseFloat((calculatorVars.per_1gb_outbound_start-calculatorVars.per_1gb_outbound_tangent)*Math.pow(calculatorVars.per_1gb_outbound_base_number,calculatorVars.per_1gb_outbound_growth*(gb_outbound-1)))+parseFloat(calculatorVars.per_1gb_outbound_tangent);
	gb_outbound_price=gb_outbound_price.toFixed(2);
	var gb_outbound_discount=calculateDiscountPercent(calculatorVars.per_1gb_outbound_start,gb_outbound_price);
	gb_outbound_price_total=(gb_outbound_price*gb_outbound).toFixed(2);
	$('#per_1gb_outbound_price').html((gb_outbound_price*gb_outbound).toFixed(2));
	$('#per_1gb_outbound_discount').html(gb_outbound_discount+'%');
	updateTotalPrice();
});
$('input#per_1k_api_requests_val').keyup(function(){
	var k_api_requests = parseInt($(this).val(),10);
	var div_k_api_requests=k_api_requests/1000;
	//console.log(div_k_api_requests);
	//console.log(calculatorVars);
	var k_api_requests_price=parseFloat((calculatorVars.per_1k_api_requests_start-calculatorVars.per_1k_api_requests_tangent)*Math.pow(calculatorVars.per_1k_api_requests_base_number,calculatorVars.per_1k_api_requests_growth*(div_k_api_requests-1)))+parseFloat(calculatorVars.per_1k_api_requests_tangent);
	k_api_requests_price_total=(k_api_requests_price*div_k_api_requests).toFixed(2);
	k_api_requests_price=k_api_requests_price.toFixed(2);
	var k_api_requests_discount=calculateDiscountPercent(calculatorVars.per_1k_api_requests_start,k_api_requests_price);
	$('#per_1k_api_requests_price').html((k_api_requests_price*div_k_api_requests).toFixed(2));
	$('#per_1k_api_requests_discount').html(k_api_requests_discount+'%');
	updateTotalPrice();
});
function calculateDiscountPercent(oldPrice,newPrice)
{
	var discount_percentage=(100*(oldPrice-newPrice)/oldPrice).toFixed(2);
	return discount_percentage>0 ? discount_percentage : 0;
}
function updateTotalPrice()
{
	var price_total=0;
	/*console.log(k_objects_price_total);
	console.log(gb_storage_price_total);
	console.log(gb_outbound_price_total);
	console.log(k_api_requests_price_total);*/
	if(!isNaN(k_objects_price_total))
	{
		price_total+=parseFloat(k_objects_price_total);
	}
	if(!isNaN(gb_storage_price_total))
	{
		price_total+=parseFloat(gb_storage_price_total);
	}
	if(!isNaN(gb_outbound_price_total))
	{
		price_total+=parseFloat(gb_outbound_price_total);
	}
	if(!isNaN(k_api_requests_price_total))
	{
		price_total+=parseFloat(k_api_requests_price_total);
	}
	//console.log(price_total);
	$('span#total_price').text(price_total.toFixed(2));
	$('span#total_price_monthly').text(price_total.toFixed(2));
}

		var calculatorVars = array(
			'per_1k_objects_start'=>$this->pricing_settings['per_1k_objects_start'],
			'per_1k_objects_tangent'=>$this->pricing_settings['per_1k_objects_tangent'],
			'per_1k_objects_growth'=>$this->pricing_settings['per_1k_objects_growth'],
			'per_1k_objects_base_number'=>$this->pricing_settings['per_1k_objects_base_number'],
				
			'per_1gb_storage_start'=>$this->pricing_settings['per_1gb_storage_start'],
			'per_1gb_storage_tangent'=>$this->pricing_settings['per_1gb_storage_tangent'],
			'per_1gb_storage_growth'=>$this->pricing_settings['per_1gb_storage_growth'],
			'per_1gb_storage_base_number'=>$this->pricing_settings['per_1gb_storage_base_number'],

			'per_1gb_outbound_start'=>$this->pricing_settings['per_1gb_outbound_start'],
			'per_1gb_outbound_tangent'=>$this->pricing_settings['per_1gb_outbound_tangent'],
			'per_1gb_outbound_growth'=>$this->pricing_settings['per_1gb_outbound_growth'],
			'per_1gb_outbound_base_number'=>$this->pricing_settings['per_1gb_outbound_base_number'],
			
			'per_1k_api_requests_start'=>$this->pricing_settings['per_1k_api_requests_start'],
			'per_1k_api_requests_tangent'=>$this->pricing_settings['per_1k_api_requests_tangent'],
			'per_1k_api_requests_growth'=>$this->pricing_settings['per_1k_api_requests_growth'],
			'per_1k_api_requests_base_number'=>$this->pricing_settings['per_1k_api_requests_base_number'],				
		);