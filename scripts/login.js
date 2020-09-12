
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

import {HbLogin} from "https://library.siliconwat.com/components/hb-login.mjs"
customElements.define("hb-login", HbLogin)

const img = document.querySelector("img")
const login = document.querySelector("hb-login")

login.addEventListener("submit", () => {
  img.src = "https://lh3.googleusercontent.com/eqE94HW5lLt3_yBZHnEtLTMtbD3bfh6UAgSWEdQcNByfuEEXrrJgUrAUjfZ_9Du_31K4=s162"
  console.log("spin in")
})

login.addEventListener("done", () => {
  img.src = "";
  console.log("spin out")
})

 login.addEventListener("click", () => {
  img.src = "https://lh3.googleusercontent.com/eqE94HW5lLt3_yBZHnEtLTMtbD3bfh6UAgSWEdQcNByfuEEXrrJgUrAUjfZ_9Du_31K4=s162"
  console.log("spin inner")
 })





firebase.auth().onAuthStateChanged(user => {
if (user) {
  console.log(user.uid, user.email)
} else {
  console.log("not logged in")
}
})

