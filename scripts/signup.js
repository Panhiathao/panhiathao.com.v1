
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


import {HbSignup} from "https://library.siliconwat.com/components/hb-signup.mjs";
customElements.define("hb-signup", HbSignup);

const img = document.querySelector("img")


const signup = document.querySelector("hb-signup");
signup.addEventListener("submit", () => {
  img.src = "http://3.bp.blogspot.com/-TaxA8nFoMZI/UcF3eBfZ76I/AAAAAAAAkDM/DfQHzi4WAvM/s1600/funny-cat-gifs-055-004.gif"
  console.log("spin in")
})

signup.addEventListener("success", () => {
  img.src = "http://3.bp.blogspot.com/-TaxA8nFoMZI/UcF3eBfZ76I/AAAAAAAAkDM/DfQHzi4WAvM/s1600/funny-cat-gifs-055-004.gif";
  console.log("spin success")
})
signup.addEventListener("done", () => {
  img.src = "";
  console.log("spin out")
})


  
  firebase.auth().onAuthStateChanged(user => {
	if (user) {
		console.log(user.uid, user.email)
	} else {
		console.log("not logged in")
	}
})
