import {PtFooter} from "./components/pt-footer.mjs";
customElements.define("pt-footer", PtFooter);

import {PtNav} from "./components/pt-nav.mjs";
customElements.define("pt-nav", PtNav);

import {SwCountDown} from "https://library.siliconwat.com/elements/sw-countdown.mjs";
customElements.define("sw-countdown", SwCountDown);

const countdown = document.querySelector("sw-countdown");
countdown.addEventListener("done", () => {
  document.querySelector("img").src = "https://s1.uploadstars.com/api/files/photos/2019/12/09/157585941060e937_l.gif"
});

import {HbLogout} from "https://library.siliconwat.com/components/hb-logout.mjs"
customElements.define("hb-logout", HbLogout);

import {HbLogin} from "https://library.siliconwat.com/components/hb-login.mjs"
customElements.define("hb-login", HbLogin);

import {HbSignup} from "https://Library.siliconwatcom/components/hb-signup.mjs"
customElements.define("hb-signup", HbSignup);


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
  //firebase.analytics();






  //////////////////////////////////////////////////////

  // function hello() {
//     alert("hi I am Pa Nhia")
// }

////////////////////////////////

