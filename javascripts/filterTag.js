$(function () {
	
	var check = function() {
		if(window.location.hash !== undefined && window.location.hash !== "") {
			var tag = window.location.hash.split("#")[1];
			if(tag !== undefined) {
				$('div#tagFilterSentence')[0].hidden = false;
				$('span#tagFilterSpan')[0].textContent = tag;
				$('a[tag]').each(function (element, index) {
					$(element)[0].parentElement.parentElement.hidden = true;
				});
				$('a[tag='+tag+']').each(function (element, index) {
					$(element)[0].parentElement.parentElement.hidden = false;
				});
			}
		} else {
			$('div#tagFilterSentence')[0].hidden = true;
		}
	}

	check();

 	window.onhashchange = function () {
  	check();
	}

});