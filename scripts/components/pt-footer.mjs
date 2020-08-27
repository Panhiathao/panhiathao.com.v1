const template = document.createElements("template");
template.innerHTML = `
    <style></style>
    <footer>Silicon Wat &copy; 2020</footer>
`
export class PtFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}