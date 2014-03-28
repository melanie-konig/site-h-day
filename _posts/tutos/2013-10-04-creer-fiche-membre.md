---
layout: default
categories: [tutos]
titre: Créer votre fiche personnelle
description: Apprenez à créer votre fiche personnelle.
---

<div class="requirements text-center">
	<div class="requirements-title specialfont-bold">Pré-requis</div>
	<ul>
		<li>Etre membre de l'organisation <a class="link" href="https://github.com/ITKWeb" target="_blank">ITKWeb</a> sur Github</li>
		<li>Etre connecté à <a class="link" href="https://github.com/login" target="_blank">Github</a></li>
	</ul>
</div>
<h1 class="text-center">Créer votre fiche personnelle</h1>
<div class="max-width">
	<ul class="stepbystep">
		<li>Rendez vous sur <a class="link" href="https://github.com/ITKWeb/site-h-day/tree/gh-pages/_posts/membres">la page Github</a></li>
		<li>Cliquez sur le "+" au dessus des fichiers <img src="{{site.baseurl}}/images/tutos/creer_fiche_membre_1.png" /></li>
		<li>Remplir le champ "Name your file..." en respectant la nomanclature : aaaa-mm-jj-votreprenom.md (où aaaa-mm-jj correspond à la date d'entrée chez ITK)</li>
		<li>Remplir le contenu en respectant les champs.
			<div class="warning">Attention à ne pas toucher aux variables layout et categories !</div>
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
			<img src="{{site.baseurl}}/images/tutos/creer_fiche_membre_2.png" />
		</li>
		<li>Remplir le "commit summary" avec votre prénom</li>
		<li>Valider en cliquant sur "Commit New File"</li>
		<li>Quelques minutes plus tard votre fiche personnelle devrait être disponible sur <a class="link" href="{{site.baseurl}}/equipe.html">la page de l'équipe</a></li>
	</ul>
</div>
<div class="next text-center specialfont-bold">
	Prochaine étape : <a class="link" href="{{site.baseurl}}{% post_url tutos/2013-10-04-creer-un-projet %}">Creer un projet Github</a>
</div>