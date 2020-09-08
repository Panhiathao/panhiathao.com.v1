import {HbLogout} from "https://library.siliconwat.com/components/hb-logout";
customElements.define("hb-logout", HbLogout);


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

  const signup = document.querySelector("hb-signup");
  signup.addEventListener("success", () => console.log("signed up"))

  const login = document.querySelector("hb-login")
  login.addEventListener("success", () => console.log("logged in"))

  const logout = document.querySelector("hb-logout")
  logout.addEventListener("success", () => console.log("logged out"))