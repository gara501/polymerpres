import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';

/**
 * `poly-elem`
 * test
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class PolyElem extends PolymerElement {
  
  
  static get properties() {
    return {
      firstname: {
        type: String,
        value: 'poly-elem',
      },
      items: {
        type: Array,
        value() {
          return [{color: 'red'}, {color: 'blue'}, {color: 'yellow'}];
        }
      },
      lastname: {
        type: String,
        value: 'poly-elem',
      },
      quote: {
        type: String,
        value: 'Give a shit',
        readOnly: true
      },
      year: {
        type: String,
        notify: true,
        reflectToAttribute: true
      },
      fullname: {
        type: String,
        computed: 'getFullName(firstname, lastname)'
      },
    };
  }

  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[fullname]]! - [[year]] - {{quote}}</h2>
      <span>Change Year: </span><input id="yeardata" type="text" name="yeardata" value$="[[year]]" />
      <slot></slot>
      <template is="dom-repeat" items="{{items}}">
        <div><br/># [[index]]</div><div>Color name: <span>[[item.color]]</span> - <button on-click="color">Set Color</button></div>
      </template>
      <slot name="namedslot"></slot>
    `;
  }

  constructor() {
    super();
    this._observedPropertyChanged = (newVal) => { console.log('year changed to ' + newVal); };
    this._createPropertyObserver('year', '_observedPropertyChanged', true);
  }

  ready() {
    super.ready();
    let yeard = this.shadowRoot.querySelector('#yeardata');
    yeard.addEventListener('keyup', (e) => {
      this.year = yeard.value
    });
  }

  getFullName(firstname, lastname) {
    return `${firstname} ${lastname}`;
  }

  color(e) {
    //e.model.set('item.ordered', e.model.item.ordered+1);
    e.path[1].style['background'] = e.path[1].querySelector('span').innerText;
  }
}

window.customElements.define('poly-elem', PolyElem);
