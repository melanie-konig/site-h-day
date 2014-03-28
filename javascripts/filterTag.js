$(function () {
	
	var check = function() {
		if(window.location.hash !== undefined && window.location.hash !== "") {
			var tag = window.location.hash.split("#")[1];
			if(tag !== undefined) {
				$('.tickets').each(function (element, index) {
					element.hidden = true;
				});
				$('a[tag='+tag+']').each(function (element, index) {
					element.parentElement.parentElement.hidden = false;
				});
				$('#filters a.active').each(function (element, index) {
					element.classList.remove("active");
				});
				$('#filters a[tag='+tag+']')[0].classList.add("active");
			}
		}
	}
	var filtersreset = function() {
		$('.tickets').each(function (element, index) {
			element.hidden = false;
		});
		$('#filters a.active').each(function (element, index) {
			element.classList.remove("active");
		});
	}

	check();

 	window.onhashchange = function () {
  		check();
	}


	var filterstoggle = function() {
		if (!$('#filters')[0].classList.contains('visible')) {
			$('#filters')[0].classList.toggle('visible');
			$('#show-filters')[0].innerHTML='NE PAS FILTRER';
		}else{
			$('#filters')[0].classList.toggle('visible');
			filtersreset();
			$('#show-filters')[0].innerHTML='FILTRER';
		}
	}

 	$('#show-filters').on('click', filterstoggle);




});