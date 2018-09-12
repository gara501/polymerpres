import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@webcomponents/shadycss/entrypoints/apply-shim.js';
import { updateStyles } from '@polymer/polymer/lib/mixins/element-mixin.js';

/**
 * @customElement
 * @polymer
 */
class Poly3Init extends PolymerElement {
 
  static get template() {
    return html`
      <style>
        :host { 
          --theme-dark-blue: #0d47a1;
          --theme-light-blue: #e3f2fd;
          --theme-wide-padding: 24px;
          --theme-font-family: Roboto, Noto, sans-serif;
        }
        :host([hidden]) {
          display: none;
        }
      
        .block {
          background: var(--theme-light-blue);
        }

      </style>
      <div class="block">
        <h2>Hello [[hi]]!</h2>
        <button on-click="changeTheme">Change theme</button>
        <button on-click="custom">I'm a custom Event</button>
      </div>
    `;
  }
  
  changeTheme() {
    this.updateStyles({
      '--theme-light-blue': 'red',
    });
  }

  custom(e) {
    this.dispatchEvent(new CustomEvent('explode', {detail: {exploded: 'BOOM!'}}));
  }

  static get properties() {
    return {
      hi: {
        type: String,
        value: 'Custom CSS Power!'
      }
    };
  }
}

window.customElements.define('poly3-init', Poly3Init);
