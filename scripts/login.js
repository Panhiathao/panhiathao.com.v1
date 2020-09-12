import {HbLogin} from "https://library.siliconwat.com/components/hb-login.mjs"
customElements.define("hb-login", HbLogin);

const login = document.querySelector("hb-login")
login.addEventListener("success", () => console.log("logged in and Hi"))
login.addEventListener("success", () => console.log("logged out"))
login.addEventListener("success", event => console.log("success:", event.detail.type))


var firebaseConfig = {
    apiKey: "AIzaSyBKejGRdXVpLJqwWI0aP4HYHfwsceFfARE",
    authDomain: "panhia-2040e.firebaseapp.com",
    databaseURL: "https://panhia-2040e.firebaseio.com",
    projectId: "panhia-2040e",
    storageBucket: "panhia-2040e.appspot.com",
    messagingSenderId: "1069882940906",
    appId: "1:1069882940906:web:a81e965ffada6e4a8c2693",
    measurementId: "G-VS2DWZ35TZ"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged(user => {
	if (user) {
		console.log(user.uid, user.email)
	} else {
		console.log("not logged in")
	}
})

///////

<<<<<<< HEAD
=======
  const login = document.querySelector("hb-login")
  login.addEventListener("submit", () => console.log("spin in"))
  login.addEventListener("login success", ()=> console.log("loadingimage"))
  login.addEventListener("click", () => console.log("loadingimage"))
  login.addEventListener("forgot pass success", () => console.log("spinout"))
>>>>>>> 97c9351137e5f63acb19a603fa1930638f5bddba
