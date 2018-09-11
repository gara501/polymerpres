import { customElement } from '@polymer/decorators'
import { polymerElement, html } from '@polymer/polymer'

class CardLit extends PolymerElement {
  constructor() {
    super();
    this.name = "No Name";
  }

  static get properties() {
    return {
      name: String
    }
  }

  _render({name}){
    return html `
    <h1>Name is ${name}</h1>
    `;
  }

  static get is() {
    return 'card-lit'
  }
}

window.customElements.define(CardLit.is, CardLit);