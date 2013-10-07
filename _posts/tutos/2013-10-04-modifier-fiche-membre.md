---
layout: default
categories: [tutos]
titre: Modifier votre fiche personnelle
description: Apprenez à modifier votre fiche personnelle.
---
<h1 class="titre-rose specialfont">Pré-requis</h1>

<div class="regles">
<span>1</span>Etre membre de l'organisation ITKWeb sur github<br />
<span>2</span><a href="https://github.com/login" target="_blank">Etre connecté à github</a><br />
<span>3</span><a href="{{site.baseurl}}{% post_url tutos/2013-10-04-creer-fiche-membre%}">Avoir créer sa fiche personnelle</a>
</div>

<h1 class="titre-rose specialfont">Marche à suivre</h1>

<div class="regles">
	<span>1</span>Rendez vous sur [la page github](https://github.com/ITKWeb/site-h-day/tree/gh-pages/_posts/membres)<br />
	<span>2</span>Cliquez sur le fichier correspondant à votre profil<br />

<div class="text-center">
	<img class="img-large" src="{{site.baseurl}}/images/tutos/modifier_fiche_membre_1.png" />
</div>

	<span>3</span>Cliquez sur le bouton "edit" en haut à droite<br />

<div class="text-center">
	<img class="img-large" src="{{site.baseurl}}/images/tutos/modifier_fiche_membre_2.png" />
</div>

	<span>4</span>Remplir le contenu en respectant les champs :<br />

	<p class="tickets tutos-warning">Attention à ne pas toucher les variables layout et categories !</p>

<div class="tickets tutos-tickets">
	<div class="code">
		---<br />
		layout: equipe<br />
		nom: Votre nom<br />
		prenom: Votre prénom<br />
		bio: "Courte bio sur vous"<br />
		categories: [equipes]<br />
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
	<img class="img-large" src="{{site.baseurl}}/images/tutos/modifier_fiche_membre_3.png" />
</div>

	<span>5</span>Remplir le "commit summary" avec votre prénom<br />
	<span>6</span>Valider en cliquant sur "Commit New File"<br />
	<span>7</span>Quelques minutes plus tard votre fiche personnelle devrait être mise à jour sur <a href="{{site.baseurl}}/equipe.html">la page de l'équipe</a><br />

</div>