$(document).ready(function(){
	$(".ad-selector").hide();
	$(".search-form").removeAttr('target');
	$('a').removeAttr('target');
});
setTimeout(function() {
  $('a').removeAttr('target');
}, 1000);
