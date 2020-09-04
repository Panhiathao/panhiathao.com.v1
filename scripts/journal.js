import {PtFooter} from "./components/pt-footer.mjs";
customElements.define("pt-footer", PtFooter);

import {PtNav} from "./components/pt-nav.mjs";
customElements.define("pt-nav", PtNav);

import {SwTimer} from "https://library.siliconwat.com/elements/sw-timer.mjs";
customElements.define("sw-timer", SwTimer);

const timer = document.querySelector("sw-timer");
timer.addEventListener("done", () => {
    document.querySelector("img").src = "https://s1.uploadstars.com/api/files/photos/2019/12/09/157585941060e937_l.gif"
})