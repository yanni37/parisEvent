import app from './app.js';
import Home from '../controllers/Home.js';
import About from '../controllers/About.js';
import Login from '../controllers/Login.js';
import Search from '../controllers/Search.js';
import config from './config.js';



// --------------------------------------------------------------------------------------------------------------------
// INITIALISATION DE L'APPLICATION
// --------------------------------------------------------------------------------------------------------------------

function initializeRouter() {
    app.mvc.router = new Router({
        mode: 'hash',
        page404: function (path) {
            console.log('"/' + path + '" Page not found');
        }
    });

    app.mvc.router.add('/', () => app.mvc.dispatchRoute(new Home()));
    app.mvc.router.add('/About', () => app.mvc.dispatchRoute(new About()));
    app.mvc.router.add('/Login', () => app.mvc.dispatchRoute(new Login()));
    app.mvc.router.add('/Search', () => app.mvc.dispatchRoute(new Search()));


    app.mvc.router.addUriListener();
    app.mvc.router.navigateTo('/');
    app.mvc.router.check();

}

// --------------------------------------------------------------------------------------------------------------------
// CODE PRINCIPAL
// --------------------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    // Initialisation du routeur.
    initializeRouter();

    // Initialize Firebase
    if (!firebase.apps.length) {
        firebase.initializeApp(config.firebase);
    }

});