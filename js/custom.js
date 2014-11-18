function getTotal() {
	jQuery.ajax({
	  type: "POST",
	  url: 'https://api.ripplecharts.com/api/total_network_value',
	  data:{
		exchange  : {
			currency  : "USD",         
			issuer    : "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B"
		}
	},
	  success: function(data) {
			jQuery('.total_num').html('$' + parseInt(data.total));
			console.log(data);
	  },
	  dataType: 'json'
	});
}

window.setInterval(function(){
  getTotal();
  jQuery('.total_num').fadeOut('slow');
  jQuery('.total_num').fadeIn('slow');
}, 5000);