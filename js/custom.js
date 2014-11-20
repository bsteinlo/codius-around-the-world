var totals = {}

function fadeInfadeOut(element, endpoint) {
	$.ajax({
		type: "GET",
		url: 'http://54.172.227.161:8000/'+endpoint,
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
	fadeInfadeOut($('.total_num'), 'tobedonated');
	fadeInfadeOut($('.charity0'), 'charity0');
	fadeInfadeOut($('.charity1'), 'charity1');
	fadeInfadeOut($('.charity2'), 'charity2');
	fadeInfadeOut($('.donate_name'), 'name');
	window.setTimeout(updateAll, 1000);
};


$(document).ready(function() {
	updateAll();
});