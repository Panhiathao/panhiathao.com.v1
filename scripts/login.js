import {HbLogin} from "https://library.siliconwat.com/components/hb-login.mjs"
customElements.define("hb-login", HbLogin);


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

  const login = document.querySelector("hb-login")
  login.addEventListener("success", () => console.log("logged in"))

