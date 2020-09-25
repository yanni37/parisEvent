export default class Login{
    constructor(){
        this.view = `views/login.html`;
    }
    executeHttpRequest() {

        document.querySelector(`#googleLogin`).addEventListener(`click`,()=>{
            let provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithRedirect(provider).then((user) => {   
                // vous pouvez récupérer le nom comme ceci :             
                alert(user.additionalUserInfo.profile.name)
            }).catch(function(error) {
                console.log(error)
            }) 
    
        });
        document.querySelector(`#githubLogin`).addEventListener(`click`,()=>{
            let provider = new firebase.auth.GithubAuthProvider();
            firebase.auth().signInWithRedirect(provider).then((user) => {   
                // vous pouvez récupérer le nom comme ceci :             
                alert(user.additionalUserInfo.profile.name)
            }).catch(function(error) {
                console.log(error)
            }) 
    
        });
    }
}