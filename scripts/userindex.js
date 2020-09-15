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

  import {HbAvatar} from "https://library.siliconwat.com/components/hb-avatar.mjs"
    customElements.define("hb-avatar", HbAvatar)

    const avatar = document.querySelector("hb-avatar")
    const loading = document.querySelector("img[name=loading]");
    const spinner = "https://4.bp.blogspot.com/-3S4gx1NKmqU/WkItV8b0E5I/AAAAAAAACT0/0Le6v6SRaZcQn2cttj6uiYVOb0_Jr7WfQCLcBGAs/s1600/loading.gif"

    avatar.addEventListener("success", event => {
        console.log(event.detail.type, event.detail.url, "success")
        loading.src = spinner;
    } )