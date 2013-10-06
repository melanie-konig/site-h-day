---
layout: default
categories: [tutos]
titre: Créer votre fiche personnelle
description: Apprenez à créer votre fiche personnelle.
---
<h1 class="titre-rose specialfont">Pré-requis</h1>

<div class="regles">
	<span>1</span>Etre membre de l'organisation ITKWeb sur github
</div>

<h1 class="titre-rose specialfont">Marche à suivre</h1>

<div class="regles">
	<span>1</span>Rendez vous sur [la page github](https://github.com/ITKWeb/site-h-day/tree/gh-pages/_posts/membres)<br />
	<span>2</span>Cliquez sur le plus au dessus des fichiers<br />

<div class="text-center">
	<img class="img-large" src="{{site.baseurl}}/images/tutos/creer_fiche_membre_1.png" />
</div>

	<span>3</span>Remplir le champ "Name your file..." en respectant la nomanclature : aaaa-mm-jj-votreprenom.md (où aaaa-mm-jj correspond à la date d'entrée chez ITK)<br />
	<span>4</span>Remplir le contenu en respectant les champs :<br />

<div class="text-center">
	<div class="code">
		---<br />
		layout: equipe<br />
		categories: [equipes]<br />
		nom: Votre nom<br />
		prenom: Votre prénom<br />
		bio: "Courte bio sur vous"<br />
		photo: "url de votre photo"<br />
		github: "http://github.com/votrepseudo"<br />
		facebook: "url de votre facebook ou vide pour ne pas être pris en compte"<br />
		twitter: "url de votre twitter ou vide pour ne pas être pris en compte"<br />
		viadeo: "url de votre viadeo ou vide pour ne pas être pris en compte"<br />
		linkedin: "url de votre linkedin ou vide pour ne pas être pris en compte"<br />
		googleplus: "url de votre g+ ou vide pour ne pas être pris en compte"<br />
		blog: "url de votre blog ou vide pour ne pas être pris en compte"<br />
		---<br />
	</div>
</div>

<div class="text-center">
	<img class="img-large" src="{{site.baseurl}}/images/tutos/creer_fiche_membre_2.png" />
</div>

	<span>5</span>Remplir le "commit summary" avec votre prénom<br />
	<span>6</span>Valider en cliquant sur "Commit New File"<br />
	<span>7</span>Quelques minutes plus tard votre fiche personnelle devrait être disponible sur [la page de l'équipe]({{site.baseurl}}/equipe.html)<br />

</div>

<h1 class="titre-rose specialfont">Etape suivante</h1>

[Modifier votre fiche personnelle]({% post_url tutos/2013-10-04-modifier-fiche-membre %})