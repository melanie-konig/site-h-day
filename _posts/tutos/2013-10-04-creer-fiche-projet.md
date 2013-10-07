---
layout: default
categories: [tutos]
titre: Créer une fiche pour un projet
description: Apprenez à créer une page sur ce site pour votre projet.
---
<h1 class="titre-rose specialfont">Pré-requis</h1>

<div class="regles">
<span>1</span>Etre membre de l'organisation ITKWeb sur github<br />
<span>2</span><a href="https://github.com/login" target="_blank">Etre connecté à github</a><br />
<span>3</span><a href="{{site.baseurl}}{% post_url tutos/2013-10-04-creer-fiche-membre%}">Avoir créer sa fiche personnelle</a><br />
<span>4</span><a href="{{site.baseurl}}{% post_url tutos/2013-10-04-creer-un-projet%}">Avoir créé un repositery git</a>
</div>

<h1 class="titre-rose specialfont">Marche à suivre</h1>

<div class="regles">
	<span>1</span>Rendez vous sur [la page github](https://github.com/ITKWeb/site-h-day/tree/gh-pages/_posts/projets)<br />
	<span>2</span>Cliquez sur le plus au dessus des fichiers<br />

<div class="text-center">
	<img class="img-large" src="{{site.baseurl}}/images/tutos/creer_fiche_projet_1.png" />
</div>

	<span>3</span>Remplir le champ "Name your file..." en respectant la nomanclature : aaaa-mm-jj-nomprojet.md (où aaaa-mm-jj correspond à la date de création du projet)<br />
	<span>4</span>Remplir le contenu en respectant les champs :<br />

	<p class="tickets tutos-warning">Attention à ne pas toucher les variables layout et categories !</p>

<div class="tickets tutos-tickets">
	<div class="code">
		---<br />
		layout: projet-detail<br />
		nom_unique: nomprojet<br />
		titre: Nom du projet<br />
		images: [images/projets/battletower/default.png]<br />
		description: "Une courte description."<br />
		technos: [techno1, techno2]<br />
		dates: [date/du/hday]<br />
		equipe: [Prenom1, Prenom2]<br />
		categories: [projets]<br />
		urlSources: "https://github.com/ITKWeb/nomrepository"<br />
		---<br />
		Description en markdown ou en html !!<br />
	</div>
</div>

<div class="text-center">
	<img class="img-large" src="{{site.baseurl}}/images/tutos/creer_fiche_projet_2.png" />
</div>

	<span>5</span>Remplir le "commit summary" avec le nom du projet<br />
	<span>6</span>Valider en cliquant sur "Commit New File"<br />
	<span>7</span>Quelques minutes plus tard votre projet devrait être disponible sur <a href="{{site.baseurl}}/projets.html">la page des projets</a><br />

</div>
