/*------------------------------------*\
    COUNT DOWN
\*------------------------------------*/


function Decompte()
{
    var date_actuelle = new Date(); // On déclare la date d'aujourd'hui.
    var annee = date_actuelle.getFullYear();

    var hday = new Date(annee, 01, 01, 9, 0, 0); // Prochain HDAY 01/01/2013 (attention les mois vont de 0 à 11) -> années / mois-1 / jour / h / min / s .
	
	// si le Hday est en cours ou dépassé
	if (hday.getTime() < date_actuelle.getTime()){
		if(hday.getTime() + 86400000 > date_actuelle.getTime()){
			var texte = "H-Day en cours !";
			return texte;
		}else{
			var texte = "Inconnu...";
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
	document.getElementById("countdown-header").innerHTML = texte;
	if(document.getElementById("countdown-section")) document.getElementById("countdown-section").innerHTML = texte;
}
setInterval(CompteARebours, 10); // Rappel de la fonction toutes les 1000 millisecondes (toutes les secondes quoi !).



/*------------------------------------*\
    SCROLL SPY
\*------------------------------------*/


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
