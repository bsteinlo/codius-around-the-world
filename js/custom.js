function doUpdate(element, endpoint) {
	$.ajax({
		type: "GET",
		url: 'https://codiuscheckin.localtunnel.me/'+endpoint,
		success: function(data) {
			element.html(data);
		}
	});
}

$(document).ready(function() {
	updateAll();
});

function updateAll() {
	doUpdate($('.total_num'), 'tobedonated');
	doUpdate($('.charity0'), 'charity0');
	doUpdate($('.charity1'), 'charity1');
	doUpdate($('.charity2'), 'charity2');
	doUpdate($('.donate_name'), 'name');
	doUpdate($('.phonenumber0'), 'phonenumber0');
	doUpdate($('.phonenumber1'), 'phonenumber1');
	doUpdate($('.phonenumber2'), 'phonenumber2');
	window.setTimeout(updateAll, 1000);
};
