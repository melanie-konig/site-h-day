$(function () {
	if(window.location.hash !== undefined && window.location.hash !== "") {
		var tag = window.location.hash.split("#")[1];
		$('a[tag='+tag+']').each(function (element, index) {
			$(element)[0].parentElement.parentElement.hidden = false;
		});
	}
});