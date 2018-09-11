import {PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `poly3-element`
 * testing
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class Poly3Element extends PolymerElement {
  static get template() {
    return `
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'poly3-element',
      },
    };
  }
}

window.customElements.define('poly3-element', Poly3Element);
