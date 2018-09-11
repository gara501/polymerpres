import {PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class Poly3Init extends PolymerElement {
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
        value: 'poly3-init'
      }
    };
  }
}

window.customElements.define('poly3-init', Poly3Init);
