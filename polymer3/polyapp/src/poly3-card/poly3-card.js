import { LitElement, html } from '@polymer/lit-element';
import { PropertyAccessors } from '@polymer/polymer/lib/mixins/property-accessors';
import '@polymer/paper-button/paper-button.js';
 

class CardLit extends LitElement {
  
  // Decorators only works with Babel or Typescript
  // @property({type: String})
  // description = '';

  constructor() {
    super();
    this.name = "No Name";
    this.description = "No Description";
  }
  
  static get properties() {
    return {
      name: String,
      description: String
    }
  }

  _didRender() {
    console.log('Did Render');
  }

  _firstRendered() {
    console.log('First Render');
    addEventListener('float', () => {
      alert('IT WILL HUNT YOU!');
    });
  }

  activeEvent(e) {
    alert('HI HUGE! They All Float!');
    this.dispatchEvent(new CustomEvent('float', {bubbles: true, composed: true}));
  }

  _render({name, description}){
    return html `
    <style>
    .card {
      border: 1px solid red;
      padding: 10px 20px;
      width: 200px;
    }
    
    paper-button[disabled],
    paper-button[toggles][active] {
      background: red;
    }
    
    paper-button.fancy {
      background: green;
      color: yellow;
    }
    
    paper-button.fancy:hover {
      background: lime;
    }

    </style>
    <div class="card">
      <h3>${name}</h3>
      <p>${description}</p>
      <paper-button class="pink">link</paper-button>
      <paper-button raised class="indigo" on-click="${this.activeEvent}">raised</paper-button>
      <paper-button toggles raised class="fancy">toggles</paper-button>
      <paper-button disabled class="disabled">disabled</paper-button>
    </div>
    `;
  }

  static get is() {
    return 'card-lit'
  }
}

window.customElements.define(CardLit.is, CardLit);