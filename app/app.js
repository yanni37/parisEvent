let app = {
    // ----------------------------------------------------------------------------------------------------------------
    // MANIPULATION DU DOM DE L'APPLICATION
    // ----------------------------------------------------------------------------------------------------------------
    dom: {
        render: (content) => {
            document.querySelector('main.container').innerHTML = content;
        }
    },



    // ----------------------------------------------------------------------------------------------------------------
    // ARCHITECTURE MVC DE L'APPLICATION
    // ----------------------------------------------------------------------------------------------------------------
    mvc: {
        router: null,
        dispatchRoute: (controller) => {

            // On veut au moins l'attribut view dans notre controller
            if (!controller.hasOwnProperty('view')) {
                return console.warn(`Le controller ${controller.constructor.name} 
                          est invalide.`);
            }

            fetch(controller.view)
                .then(response => response.text())
                .then(htmlContent => {
                    app.dom.render(htmlContent)
                    if (typeof controller.executeHttpRequest != 'undefined') {
                        controller.executeHttpRequest();
                    }
                });
        },
    }

}


//Cette méthode aura pour but:
//récupérer un Controller
//qui devra contenir l’attribut view (views/home.html)
//Pour vérifier si 
//une propriété existe dans un objet utilisé la méthode hasOwnProperty()


// L'application est exportée afin d'être accessible par d'autres modules.
export default app;