Bienvenue! Si vous lisez ceci c'est que vous êtes sur le point de clôner mon application Groupomania, correspondant à mon projet 7 de formation DeveloppeuseWeb OpenClassrooms.


/!\ Avant de commencer, assurez-vous d'avoir nodejs et npm installés sur votre système.                                                                                                                            <!>
<!> Assurez-vous également d'avoir vos ports localhost:3000 et localhost:5000 non utilisés, sinon, modifiez les ports selon vos possibilités, dans les fichiers .env présents dans groupomania_front/.env et       /!\
/!\ Groupomania_back/config/.env                                                                                                                                                                                   <!>

1- Télécharger les fichiers.
    Au dessus des fichiers présents sur le repository Git, vous pouvez télécharger ou cloner le dossier, je vous recommande de télécharger
    le fichier ZIP tout simplement, et d'extraire son contenu à l'emplacement souhaité sur votre ordinateur, sur le bureau par exemple.

2- Installer l'application Backend.
    Pour installer l'application backend, ouvrez un terminal (Git Bash, par exemple) et rendez-vous à l'aide du terminal dans le dossier 
    (l'emplacementChoisi)/GroupomaniaReact-main/Groupomania_back
    Executez la commande:
    npm install
    L'installation des différentes dépendances devrait s'effectuer automatiquement.

3- Lancer l'application Backend.
    Une fois l'application installée, dans votre terminal, toujours dans le dossier GroupomaniaReact-main/Groupomania_back
    Executez la commande:
    npm run start
    L'application devrait se lancer, et si les précédentes étapes ont correctement fonctionné, le terminal devrait vous afficher les informations suivantes:
    [nodemon] starting `node server.js`
    Listening on port 5000
    Connected to MongoDB

    //Vous pouvez réduire ce terminal dans votre barre des tâches, ou bien le garder de côté, l'application backend est en fonctionnement.
    
4- Installer l'application Frontend.
    Pour installer l'application frontend, ouvrez un nouveau terminal, cette fois-ci rendez-vous dans le dossier
    (l'emplacementChoisi)/GroupomaniaReact-main/groupomania_front
    Executez la commande:
    npm install
    L'installation des différentes dépendances de l'application frontend s'opèrera.

5- Lancer l'application Frontend.
    Comme pour l'application backend, une fois les dépendances installées, dans le dossier GroupomaniaReact-main/groupomania_front
    Executez dans votre terminal la commande
    npm run start
    Si les précédentes étapes ont correctement fonctionné, le terminal affichera le message suivant:

    Compiled successfully!

    You can now view groupomania_front in the browser.

      Local:            http://localhost:3000
      On Your Network:  http://*ipLocaleDeVotreMachine*:3000

    Note that the development build is not optimized. 
    To create a production build, use npm run build.

    webpack compiled successfully

    Un onglet devrait s'ouvrir dans votre navigateur, et vous mener directement sur la page d'accueil du site. Si le message dans le terminal correspond, mais qu'aucun onglet ni fenêtre s'ouvre automatiquement,
    rendez-vous manuellement à l'adresse http://localhost:3000 dans votre navigateur.


6- Vous pouvez normalement profiter de l'application dans son ensemble.
    En cas de problèmes rencontrés lors de l'installation ou de la manipulation du site, je suis joignable par mail: dupont.lucie.contact@gmail.com