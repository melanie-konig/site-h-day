---
layout: projet-detail
nom_unique: battletower
titre: Battle Tower
images: [images/projets/battletower/battle_tower.png, images/projets/battletower/BattleTowerInGame.png, images/projets/battletower/BattleTowerMap.png, images/projets/battletower/fond_plateau_1.png, images/projets/battletower/tour_mauve.png, images/projets/battletower/tour_verte.png]
description: "Un jeu au tour par tour à deux."
tags: [Scala, Playframework, Javascript, Crafty]
dates: [15/03/2013, 23/04/2013]
equipe: [MarcB, Marc, Romain, Laurent]
categories: [projets]
urlSources: "https://github.com/ITKWeb/BattleTower"
---
Le but est de battre l'adversaire en conservant son armée et en détruisant celle de l’autre joueur.<br /><br />

Dès le départ, les joueurs commencent avec un nombre de points identiques (par exemple 100). Avec ces points là, au premier tour, ils peuvent créer des tours de défense qui ont un certain coût (ex 40) ou des soldats (coût de 20 par exemple).<br /><br />

Le terrain de jeu, est une carte rectangulaire divisée en deux parties (droite/gauche) pour chacun des joueurs. Les joueurs ne peuvent placer des éléments que sur leur partie dans un temps limité.<br /><br />

Une fois le délai dépassé, la partie se joue. Les tours sont fixes et défendent un périmètre. Les soldats avancent horizontalement. Lorsque un soldat entre de le périmètre d'une tour, le soldat tire sur la tour et la tour sur le soldat. Le soldat retire par exemple 8 points à la tour (sur les 40 initiaux) et la tour 10 au soldat. Ces points sont alors ajoutés au crédit du joueurs possédant la tour ou le soldat qui a tiré.<br /><br />

Une fois que tous les soldats ont fini de se déplacer, les joueurs rejouent. Avec leur nouveau solde de crédits, ils peuvent soit rajouter des points (de vie) à leurs éléments existants, sans dépasser un maximum (70 pour la tour, 40 pour un soldat). Soit les rendre plus forts (périmètre plus grand pour les tours, tirs plus puissant pour les soldats). Ou encore, ajouter de nouveaux éléments.<br /><br />

La partie est terminée quand un joueur n'a plus de quoi se défendre ou attaquer ou plus de points.
Les règles seront ajustées en cours de développement, en jouant et en testant.