---
layout: default
titre: Créer une fiche pour un projet
categories: [tutos]
---
#Pré-requis

* Etre membre de l'organisation ITKWeb sur github
* [Avoir créer sa fiche personnelle]({% post_url 2013-10-04-creer-fiche-membre%})
* [Avoir créé un repositery git]({% post_url 2013-10-04-creer-un-projet%})

#Marche à suivre

* Rendez vous sur (https://github.com/ITKWeb/site-h-day/tree/gh-pages/_posts/projets)[https://github.com/ITKWeb/site-h-day/tree/gh-pages/_posts/projets]
* Cliquez sur le plus au dessus des fichiers

<img src="{{site.baseurl}}/images/tutos/creer_fiche_projet_1.png" />

* Remplir le champ "Name your file..." en respectant la nomanclature : aaaa-mm-jj-nomprojet.md (où aaaa-mm-jj correspond à la date de création du projet)
* Remplir le contenu en respectant les champs :
<quote>
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
Description avec de l'html !!<br />
</quote>

<img src="{{site.baseurl}}/images/tutos/creer_fiche_projet_2.png" />

* Remplir le "commit summary" avec le nom du projet
* valider en cliquant sur "Commit New File"
* Quelques minutes plus tard votre projet devrait être disponible sur <a href="{{site.baseurl}}/projets.html">la page des projets</a>
