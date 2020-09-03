import{BaseComponent} from "./BaseComponent.js";
class Manga extends BaseComponent {
    constructor() {
        super()
        this.props = {
            "image": '',
            "name": '',
            "view": '',
            "likes":''
        };
    }

    static get observedAttributes() {
        return ['image', 'name', 'view', 'likes']
    }

    render() {
        this._shadowRoot.innerHTML = `
            <div class="manga">
                <img src="${this.props["image"]}"/>
                <div class="name">${this.props["name"]}</div>
                <div class="view">${this.props["view"]}</div>
                <div class="likes">${this.props["likes"]}</div>
            </div>
        `;
    }
}

window.customElements.define('manga-container', manga);
