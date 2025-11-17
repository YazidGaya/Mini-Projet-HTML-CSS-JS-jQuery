 # Top Five de Ma Musique

 # Mini-Projet Facultatif – Technologies du Web (HTML/CSS, JS/jQuery)

 Présentation : 

Ce mini-projet consiste à réaliser une petite application web affichant un Top 5 de mes artistes préférés, avec leurs meilleurs titres.
L’objectif principal est de pratiquer :

Le HTML5,le e CSS3, le jQuery (animations, gestion des clics, transitions)

L’application permet :
  -D’afficher 5 artistes côte à côte
  -De cliquer sur un artiste pour afficher l’image en couleur
  -De dérouler une description animée des titres
  -De refermer la zone si on reclique dessus


#📁 Structure du projet
/

├── index.html

├── style.css

├── script.js

└── images/

      ├── background.jpg
      
      ├── bw-image.jpg
      
      └── color-image.jpg

 # Technologies utilisées

HTML5, CSS3, background, padding, margin, images en noir & blanc / couleur
Google Fonts (Limelight & Lobster)
jQuery 2.1.4 (CDN Google), animate(), click(), gestion d’index (openedIndex)

# Fonctionnalités principales
      1) Affichage des artistes :

Les 5 artistes sont affichés côte à côte, avec une image : en noir et blanc (affichée par défaut), en couleur (glisse vers la gauche lorsqu’on clique)

      2) Animation jQuery :

Lors d'un clic :l’image couleur glisse vers la gauche (animate({left: "0px"})), la description s’ouvre en élargissant la div (animate({width: "420px"})) ,si un autre artiste est déjà ouvert, il se referme automatiquement

      3) Ouverture / Fermeture :

Si on reclique sur le même artiste : la description se referme, l’image couleur retourne à droite (left: 140px)


#🧑‍💻 Auteur

Yazid GAYA.

Module : Technologies du Web avancé.

Mini-Projet: HTML / CSS / jQuery/
