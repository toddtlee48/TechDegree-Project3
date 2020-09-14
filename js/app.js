const $title = $("#title");
const $otherTitle = $("#other-title");
const $shirtDesign = $("#design");
const $shirtColor = $("#colors-js-puns");
const $payment = $("#payment");
const $ccard = $("#credit-card");
const $paypal = $(".paypal");
const $bitcoin = $(".bitcoin");
const zipField = document.getElementById("zip");

$("#name").focus();
 $(document).ready(function() {
 	$title.change(function () {
 		if ($title.val() === "other") {
 		$otherTitle.show();
 	}
 	else {
 		$otherTitle.hide();
 	}

 	});
  $otherTitle.hide();
});
 	
$shirtColor.hide();

$shirtDesign.change(function() {
	if($('#design option:selected').text() === 'Select Theme'){
		$shirtColor.hide();
	
} else if ($('#design option:selected').text() === 'Theme - JS Puns') {
	$shirtColor.show();
	$("#color").val("cornflowerblue").show();
  	$("#color option[value = cornflowerblue]").show();
  	$("#color option[value = darkslategrey]").show();
  	$("#color option[value = gold]").show();
  	$("#color option[value = tomato]").hide();
  	$("#color option[value = steelblue]").hide();
  	$("#color option[value = dimgrey]").hide();
} else if ($('#design option:selected').text() === 'Theme - I ♥ JS') {
	$shirtColor.show();
	$("#color").val("tomato").show();
  	$("#color option[value = cornflowerblue]").hide();
  	$("#color option[value = darkslategrey]").hide();
  	$("#color option[value = gold]").hide();
  	$("#color option[value = tomato]").show();
  	$("#color option[value = steelblue]").show();
  	$("#color option[value = dimgrey]").show();
}
});

// Variables for activity
	const mainConf = $("input[name='all']");
	const jsFrame = $("input[name='js-frameworks'");
	const jsLib = $("input[name='js-libs']");
	const express = $("input[name='express']");
	const node = $("input[name='node']");
	const buildTools = $("input[name='build-tools']");
	const npm = $("input[name='npm']");


  	// Add total cost of activities
	var totalCost = 0;
	$('.activities').append('<div id="total"></div>');
	//$('.activities').append('<p></p>');
	
	const updateCost = function (cost) {
	totalCost += cost;
	document.getElementById("total").innerHTML = "Your current total is: $" + totalCost;
	};

mainConf.change(function () {
	if ($(this).prop("checked")) {
		updateCost(200);
	} else {
		updateCost(-200);
	}
});


jsFrame.change(function () {
		if ($(this).prop("checked")) {
			express.prop("disabled", true);
			express.prop('disabled', true);
			express.parent().addClass("disabled");
			express.parent().append('<span class="unavailable">&nbsp;&nbsp;&nbsp;&nbsp;Unavailable</span>');
			updateCost(100);
		} else {
			express.prop("disabled", false);
			express.parent().removeClass("disabled");
			express.parent().find('.unavailable').remove();
			updateCost(-100);
		}
	});
jsLib.change(function () {
		if ($(this).prop("checked")) {
			node.prop("disabled", true);
			node.parent().addClass("disabled");
			node.parent().append('<span class="unavailable">&nbsp;&nbsp;&nbsp;&nbsp;Unavailable</span>');
			updateCost(100);
		} else {
			node.prop("disabled", false);
			node.parent().removeClass("disabled");
			node.parent().find('.unavailable').remove();
			updateCost(-100);
		}
	});

express.change(function () {
		if ($(this).prop("checked")) {
			jsFrame.prop("disabled", true);
			jsFrame.parent().addClass("disabled");
			jsFrame.parent().append('<span class="unavailable">&nbsp;&nbsp;&nbsp;&nbsp;Unavailable</span>');
			updateCost(100);
		} else {
			jsFrame.prop("disabled", false);
			jsFrame.parent().removeClass("disabled");
			jsFrame.parent().find('.unavailable').remove();
			updateCost(-100);
		}
	});

node.change(function () {
		if ($(this).prop("checked")) {
			jsLib.prop("disabled", true);
			jsLib.parent().addClass("disabled");
			jsLib.parent().append('<span class="unavailable">&nbsp;&nbsp;&nbsp;&nbsp;Unavailable</span>');
			updateCost(100);
		} else {
			jsLib.prop("disabled", false);
			jsLib.parent().removeClass("disabled");
			jsLib.parent().find('.unavailable').remove();
			updateCost(-100);
		}
	});

buildTools.change(function () {
	if ($(this).prop("checked")) {
		updateCost(100);
	} else {
		updateCost(-100);
	}
});

npm.change(function () {
	if ($(this).prop("checked")) {
		updateCost(100);
	} else {
		updateCost(-100);
	}
});


$('.paypal, .bitcoin').hide();
$payment.show();

$payment.change(function() {
	if($('#payment option:selected').text() === 'Select Payment Method'){
		$ccard.show();
		$paypal.hide();
		$bitcoin.hide();
	
} else if ($('#payment option:selected').text() === 'Credit Card') {
	$ccard.show();
	$paypal.hide();
    $bitcoin.hide();
	
} else if ($('#payment option:selected').text() === 'PayPal') {
	$ccard.hide();
	$paypal.show();
    $bitcoin.hide();

} else if ($('#payment option:selected').text() === 'Bitcoin') {
	$ccard.hide();
	$paypal.hide();
    $bitcoin.show();
}
});

function validActivities () {
    // At least one checkbox under the 
    //"Register for Activities" should be checked
    if ($('.activities input:checked').length === 0 ){
        return false;
    }
}

function validCCNumber () {
    // Credit card number field should contain from 13 to 16 numbers
    const regExccNum = /^\d{13,16}$/;
    const validccNum = regExccNum.test($('#cc-num').val());
    if (!validccNum) {
        return false;
    }
}

function validZip () {
	//Zip code field should contain 5 numbers
	const regExzip = /^\d{5}$/;
	const validZip = regExzip.test($('#zip').val());
	if (!validZip) {
		return false;
	}
}

function validCvv () {
	//CVV should contain 3 numbers
	const regExCvv = /^\d{3}$/;
	const validCvv = regExCvv.test($('#cvv').val());
	if (!validCvv) {
		return false;
	}
}

$('form').submit(function (e){
	e.preventDefault();
	if ($('#name').val() === "" ) {
		event.preventDefault(); 
		console.log("Error!");
		$('.name-color').css("color", "black");
		$('#name').css("border", "3px solid red");
		$('.name').css("color", "red");
	} else {
		$('.name').css("color", "black");
		$('#name').css("border", "3px solid green");
	}


	if ($('#mail').val() === "" ) {
		console.log("Error!");
		$('.mail-color').css("color", "black");
		$('#mail').css("border", "3px solid red");
		$('.mail').css("color", "red");
		} else {
			$('.mail').css("color", "black");
			$('#mail').css("border", "3px solid green");
		}

	if (validActivities() === false){
		console.log("Error!");
		$('.register-color').css("color", "black");
		$('.register').css("color", "red");
		} else {
			$('.register').css("color", "black");
			
		}

	if (validCCNumber() === false || $('#cc-num').val() === ""){
		console.log("Error!");
		$('.cc-color').css("color", "black");
		$('#cc-num').css("border", "3px solid red");
		$('.cc-num').css("color", "red");
		} else {
			$('.cc-num').css("color", "black");
			$('#cc-num').css("border", "3px solid green");
		}

	if (validZip() === false || $('#zip').val() === "" ) {
		console.log("Error!");
		$('.zip-color').css("color", "black");
		$('#zip').css("border", "3px solid red");
		$('.zip').css("color", "red");
		} else {
			$('.zip').css("color", "black");
			$('#zip').css("border", "3px solid green");
		}

	if (validCvv() === false || $('#cvv').val() === "" ) {
		console.log("Error!");
		$('.cvv-color').css("color", "black");
		$('#cvv').css("border", "3px solid red");
		$('.cvv').css("color", "red");
		}else {	
			$('.cvv').css("color", "black");
			$('#cvv').css("border", "3px solid green");
			alert("Done");
		}
	$('form')[0].reset();
	$("html, body").animate({scrollTop: 0}, "slow");
	$("#name").focus();
});

	











