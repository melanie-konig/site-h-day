/*------------------------------------*\
    COUNT DOWN
\*------------------------------------*/


function Decompte()
{
    var date_actuelle = new Date(); // On déclare la date d'aujourd'hui.
    var annee = date_actuelle.getFullYear();
    var mois = 06;
    var jour = 11;
    var heure = 09;
    var min = 00;
    var sec = 00;

    var hday = new Date(annee, mois-1, jour, heure, min, sec); // années / mois-1 / jour / h / min / s .
	
	// si le Hday est en cours ou dépassé
	if (hday.getTime() < date_actuelle.getTime()){
		if(hday.getTime() + 86400000 > date_actuelle.getTime()){
			var texte = "H-Day en cours !";
			return texte;
		}else{
			var texte = "Date inconnue...";
			return texte;
		}
	}

    var tps_restant = hday.getTime() - date_actuelle.getTime(); // Temps restant en millisecondes
 
	//============ CONVERSIONS
	var ms_restantes = tps_restant;
	var s_restantes = ms_restantes / 1000; // On convertit en secondes
	var i_restantes = s_restantes / 60;
	var H_restantes = i_restantes / 60;
	var d_restants = H_restantes / 24;
	 
		ms_restantes = Math.floor(ms_restantes % 1000); // Secondes restantes
		s_restantes = Math.floor(s_restantes % 60); // Secondes restantes
		i_restantes = Math.floor(i_restantes % 60); // Minutes restantes
		H_restantes = Math.floor(H_restantes % 24); // Heures restantes
		d_restants = Math.floor(d_restants); // Jours restants

	if(H_restantes<10)H_restantes="0"+H_restantes; //Mise sur 2 digit si < 10
	if(i_restantes<10)i_restantes="0"+i_restantes;
	if(s_restantes<10)s_restantes="0"+s_restantes;
	//==================

    var texte = d_restants+ ":" +H_restantes+ ":" +i_restantes+ ":" +s_restantes ;
	return texte;
}
function CompteARebours()
{
	var texte = Decompte();
	if(texte){
		if(document.getElementById("countdown")) document.getElementById("countdown").innerHTML = texte;
		if(document.getElementById("countdown-section")) document.getElementById("countdown-section").innerHTML = texte;
	}
}
setInterval(CompteARebours, 10); // Rappel de la fonction toutes les 1000 millisecondes (toutes les secondes quoi !).



/*------------------------------------*\
    Konami
\*------------------------------------*/


$(function() {
	var kkeys = [38,38,40,40,37,39,37,39,66,65];
	var nextKkey = 0;
	var maxKeyIndex = 0;
	var isthereaunicornhere = false;
	var howmanyunicorn = 0;

	var unicorns = new Array();
	unicorns[0] = document.createElement("img");
	unicorns[0].src = 'images/robotunicornattack.gif';
	unicorns[0].setAttribute("class", "RobotUnicornAttack");
	
	function KonamiCode(keyPressed) {
		maxKeyIndex = kkeys.length;
		if (keyPressed === kkeys[nextKkey])
			nextKkey++;
		else
			nextKkey = 0;
		if(nextKkey >= maxKeyIndex) {
			console.log("Konami Code");
			if(!isthereaunicornhere){
				$("#container")[0].appendChild(unicorns[0]);
				isthereaunicornhere = true;
			}else{
				howmanyunicorn += 1;
				unicorns[howmanyunicorn] = unicorns[0].cloneNode(true);
				$("#container")[0].appendChild(unicorns[howmanyunicorn]);
			}
			nextKkey = 0;
		}
	}

 	$(document).on('keydown', function(e){
		KonamiCode(e.which);
		//console.log(String.fromCharCode(e.which) + " = " + e.which);
	});




});


/*------------------------------------*\
    IMAGE POPUP
\*------------------------------------*/

$(function () {
    $('.imgThumbnail').on("click",function(){
    	$('#popup-masque')[0].style.display="block";
		var zoomedimg = document.createElement("img");
		zoomedimg.src = this.getAttribute("data-imagePath");
		$("#popup-masque")[0].appendChild(zoomedimg);
    	$("#popup-masque")[0].style.display="block";
    });
    $('#popup-masque').on("click",function(){
		while ($("#popup-masque")[0].firstChild) {
		    $("#popup-masque")[0].removeChild($("#popup-masque")[0].firstChild);
		}
    	$("#popup-masque")[0].style.display="none";
    });
});



/*------------------------------------*\
    SCROLL SPY
\*------------------------------------


$(function () {
	window.onscroll = function(){  
        posScroll = window.scrollY;  
        if(posScroll >=217){
			$('#header')[0].className = "header text-center header-fixed";
			$('#logosmall')[0].style.opacity = 1;
        }else{
			$('#header')[0].className = "header text-center";
			$('#logosmall')[0].style.opacity = 0;
		}
    }
    $('.images-projet div').on("click",function(){
    	$('body')[0].style.overflow="hidden";
    	$('.popup-masque')[0].style.display="block";
    	var imageNum = this.getAttribute("data-imageNum");
    	imageNum = '.popup-masque img[data-imageNum="' + imageNum + '"]';
    	console.log(imageNum);
    	$(imageNum)[0].style.display="block";
    });
    $('.popup-masque').on("click",function(){
    	$('body')[0].style.overflow="auto";
    	$('.popup-masque')[0].style.display="none";
    	$('.popup-masque img').each(function(elem){
    			elem.style.display="none";
    		});
    });
});
*/