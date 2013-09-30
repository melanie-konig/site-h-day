




/*------------------------------------*\
    COUNT DOWN
\*------------------------------------*/


function Decompte()
{
    var date_actuelle = new Date(); // On déclare la date d'aujourd'hui.
    var annee = date_actuelle.getFullYear();
 
    var hday = new Date(annee, 7, 30, 9, 0, 0); // Prochain HDAY 30/08/2013 (attention les mois vont de 0 à 11) -> années / mois-1 / jour / h / min / s .
	
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
	//==================
	/*var mois_fr = new Array('Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre');
 
	var texte = "Nous sommes le <strong>" +date_actuelle.getDate()+ " " +mois_fr[date_actuelle.getMonth()]+ " " +date_actuelle.getFullYear()+ "</strong>," +
            " et il est <strong>" +date_actuelle.getHours()+ "h" +date_actuelle.getMinutes()+ "</strong>.<br />";
	*/
    var texte = d_restants+ " : " +H_restantes+ " : " +i_restantes+ " : " +s_restantes ;
	return texte;
}
function CompteARebours()
{
	var texte = Decompte();
	document.getElementById("countdown-header").innerHTML = texte;
	if(document.getElementById("countdown-section")) document.getElementById("countdown-section").innerHTML = texte;
	/*
	document.getElementById("onglet_decompte").innerHTML = "<strong>Next : unknow...</strong>";
	if(document.getElementById("decompte")) document.getElementById("decompte").innerHTML = "<strong>-</strong>";
	*/
}
setInterval(CompteARebours, 10); // Rappel de la fonction toutes les 1000 millisecondes (toutes les secondes quoi !).
