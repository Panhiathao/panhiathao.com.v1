const template = document.createElement("template");
template.innerHTML = `
    <style>
        footer {
            background-color: #ffa8b6;
            font-size: 1.5em;
            position: fixed;
            width: 80%;
            padding-left: 10%;
            text-align: right;
            display: flex;
            flex-direction: column;
            align-content: center;
            
            padding-left: 1vw;
            text-align: center;
        }
    </style>
    <footer>
        Silicon Wat &copy; 2020
    </footer>
`
export class PtFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}