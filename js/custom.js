var totals = {
tobedonated : 0,
charity0 : 0,
charity1 : 0,
charity2 : 0
}

var options = {
  useEasing : true, 
  useGrouping : true, 
  separator : ',', 
  decimal : '.' ,
  prefix : '$' 
}


function fadeInfadeOut(element, endpoint) {
	$.ajax({
		type: "GET",
		url: 'http://54.172.227.161:8000/'+endpoint,
		success: function(data) {
			if (data != totals[endpoint]) {
					var demo = new countUp(element, totals[endpoint], data, 2, 3.5, options);
					demo.start();
				}	
			totals[endpoint] = data;
		}
	});
}


function flipName(element, endpoint) {
	$.ajax({
		type: "GET",
		url: 'http://54.172.227.161:8000/name',
		success: function(data) {
			if (data != totals[endpoint]) {
					element.fadeOut('slow', function() {
					element.html(data);
					element.fadeIn('slow');
				});	
			}
			totals[endpoint] = data;
		}
	});
}


function updateAll() {
	fadeInfadeOut('total', 'tobedonated');
	fadeInfadeOut('charity0', 'charity0');
	fadeInfadeOut('charity1', 'charity1');
    fadeInfadeOut('charity2', 'charity2');
	flipName($('.donate_name'), 'name');
};


$(document).ready(function() {
	window.setInterval(updateAll, 1000);
});


