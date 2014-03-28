---
layout: default
categories: [tutos]
titre: Créer une fiche pour un projet
description: Apprenez à créer une page sur ce site pour votre projet.
---

<div class="requirements text-center">
	<div class="requirements-title specialfont-bold">Pré-requis</div>
	<ul>
		<li>Etre membre de l'organisation <a class="link" href="https://github.com/ITKWeb" target="_blank">ITKWeb</a> sur Github</li>
		<li>Etre connecté à <a class="link" href="https://github.com/login" target="_blank">Github</a></li>
		<li>Avoir créé sa <a class="link" href="{{site.baseurl}}{% post_url tutos/2013-10-04-creer-fiche-membre%}">fiche personnelle</a></li>
		<li>Avoir créé un <a class="link" href="{{site.baseurl}}{% post_url tutos/2013-10-04-creer-un-projet%}">repositery Git</a></li>
	</ul>
</div>
<h1 class="text-center">Créer une fiche pour un projet</h1>
<div class="max-width">
	<ul class="stepbystep">
		<li>Rendez vous sur <a class="link" href="https://github.com/ITKWeb/site-h-day/tree/gh-pages/_posts/projets">la page Github</a></li>
		<li>Cliquez sur le "+" au dessus des fichiers <img src="{{site.baseurl}}/images/tutos/creer_fiche_projet_1.png" /></li>
		<li>Remplir le champ "Name your file..." en respectant la nomanclature : aaaa-mm-jj-nomprojet.md (où aaaa-mm-jj correspond à la date de création du projet)</li>
		<li>Remplir le contenu en respectant les champs.
			<div class="warning">Attention à ne pas toucher aux variables layout et categories !</div>
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
			<img src="{{site.baseurl}}/images/tutos/creer_fiche_projet_2.png" />
		</li>
		<li>Remplir le "commit summary" avec le nom du projet</li>
		<li>Valider en cliquant sur "Commit New File"</li>
		<li>Quelques minutes plus tard votre projet devrait être disponible sur <a class="link" href="{{site.baseurl}}/projets.html">la page des projets</a></li>
	</ul>
</div>

