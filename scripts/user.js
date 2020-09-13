

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
  customElements.define("hb-account-verify", HbAccountVerify);

import {HbAccountUsername} from "https://library.siliconwat.com/components/hb-account.mjs"
  customElements.define("hb-account-username", HbAccountUsername);

import {HbAccountPassword} from "https://library.siliconwat.com/components/hb-account.mjs"
  customElements.define("hb-account-password", HbAccountPassword);

import {HbAccountEmail} from "https://library.siliconwat.com/components/hb-account.mjs"
  customElements.define("hb-account-email", HbAccountEmail);

// import {HbAccountDelete} from "https://library.siliconwat.com/components/hb-account.mjs"
//   customElements.define("hb-account-delete", HbAccountDelete)



const img = document.querySelector("img");
const spinner = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"

const accountVerify = document.querySelector("hb-account-verify")
    accountVerify.addEventListener("success", () => {
    console.log("verify email sent")
    img.src = spinner;
  })

const accountUsername = document.querySelector("hb-account-username");
  accountUsername.addEventListener("submit", () => {
    console.log("Username change success")
    img.src = spinner;
  })

const accountPassword = document.querySelector("hb-account-password");
    accountPassword.addEventListener("success", () => {
      console.log("Success")
      img.src = spinner;
    })

const accountEmail = document.querySelector("hb-account-email")
    accountEmail.addEventListener("success", () => {
    console.log("email has been updated")
    img.src = spinner;
    })

// const delete = document.querySelector("hb-delete");
// delete.addEventListener("success", () => {
//   console.log("success");
//   img.src = spinner;
// })




    
    
    firebase.auth().onAuthStateChanged(user => {
    if (user) {
      console.log(user.uid, user.email)
    } else {
      console.log("not logged in")
    }
  })
  