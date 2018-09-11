import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

/**
 * `poly3-element`
 * test
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class Poly3Element extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[name]]!</h2>
      <p>[[roprop]]</p>
    `;
  }
  static get properties() {
    return {
      name: {
        type: String,
        value: 'DEVELOPER',
      },
      roprop: {
        type: String,
        value: 'YOU CAN\'T TOUCH ME',
        readOnly: true,
      }
    };
  }
}

window.customElements.define('poly3-element', Poly3Element);
