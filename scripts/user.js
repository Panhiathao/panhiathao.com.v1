

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
import {HbAccountVerify} from "https://library.siliconwat.com/components/hb-account.mjs"
    customElements.define("hb-account-verify", HbAccountVerify)

import {HbAccountEmail} from "https://library.siliconwat.com/components/hb-account.mjs"
    customElements.define("hb-account-email", HbAccountEmail)

const img = document.querySelector("img");

const accountVerify = document.querySelector("hb-account-verify")
    accountVerify.addEventListener("success", () => {
    console.log("verify email sent")
    img.src = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
  })

const accountEmail = document.querySelector("hb-account-email")
    accountEmail.addEventListener("success", () => {
    console.log("email has been updated")
    img.src = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
    })


    
    
    firebase.auth().onAuthStateChanged(user => {
    if (user) {
      console.log(user.uid, user.email)
    } else {
      console.log("not logged in")
    }
  })
  