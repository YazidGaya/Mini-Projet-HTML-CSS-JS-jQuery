$(function () {

    // Récupération de tous les éléments <li> du menu
    var $mainMenuItems = $("#main-menu ul").children("li");
    var totalMainMenuItems = $mainMenuItems.length;

    // Au début, Aucun artiste n’est ouvert
    var openedIndex = -1;

    // Fonction pour ouverire/fermer un item
    var animateItem = function($item, toOpen, speed)
    {
        var $colorImage = $item.find(".color"),
            itemParam, colorImageParam;

        // Si l'item est ouvert
        if (toOpen)
        {
            itemParam = { width: "420px" };
            colorImageParam = { left: "0px" }; // l'image couleur se déplace à gauche
        }
        // Si l'item est fermé
        else
        {
            itemParam = { width: "140px" };
            colorImageParam = { left: "140px" };// l'image couleur se déplace à droite
        }

        //Animation rajoutées
        $colorImage.animate(colorImageParam, speed);
        $item.animate(itemParam, speed);
    };

    // Initialisation des clics
    var init = function () {

        //Si on clique sur une image :
        $mainMenuItems.children(".images").click(function () {

            var newIndex = $(this).parent().index(),
            $item = $mainMenuItems.eq(newIndex);

            // Si on reclique sur l'item déja ouvert
            if (openedIndex === newIndex)
            {
                // Fermer l’item déjà ouvert
                animateItem($item, false, 250);
                openedIndex = -1;
            }
            else
            {
                // Si un autre item est ouvert on le ferme
                if (openedIndex !== -1)
                {
                    animateItem($mainMenuItems.eq(openedIndex), false, 250);
                }

                // Ouvrir le nouvel item
                animateItem($item, true, 250);
                openedIndex = newIndex;
            }
        });
    };
    //Activation au chargement
    init();
});
