import { LitElement, html } from '@polymer/lit-element'

class CardLit extends LitElement {
  constructor() {
    super();
    this.name = "No Name";
    this.description = "No Description";
  }

  static get properties() {
    return {
      name: String,
      description: String,
    }
  }

  _render({name, description}){
    return html `
    <style>
    .card {
      border: 1px solid red;
      height: 100px;
      padding: 10px 20px;
      width: 200px;
    }
    </style>
    <div class="card">
      <h3>${name}</h3>
      <p>${description}</p>
    </div>
    `;
  }

  static get is() {
    return 'card-lit'
  }
}

window.customElements.define(CardLit.is, CardLit);