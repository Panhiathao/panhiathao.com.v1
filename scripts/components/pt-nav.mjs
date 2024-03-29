const template = document.createElement("template");
template.innerHTML = `
    <style>
        nav {
            padding-right: 5vw;
        }
    </style>
    <nav >
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="journal.html">Journal Enteries</a>
        <a href="projects.html">Projects</a>
        <a href="donation.html">Donation</a>
        <a href="specialthanks.html">Special Thanks</a>
    </nav>
`
export class PtNav extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}