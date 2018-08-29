customElements.define('fancy-tabs', class extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.

    // Attach a shadow root to <fancy-tabs>.
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
      <style>
      #tabs { 
        border: 1px solid #ccc;
        display: flex;
        flex-flow: row;
        padding: 10px;
        min-width: 100px;
       }
       #tabs button {
         
       }
       #panels {
        border: 1px solid #ccc;
        padding: 10px;
        width: auto;
      }
      #panels .active{
        display: block;
      }
       </style>
      
      <slot id="tabs" name="tabs"></slot>
      <slot id="panels" name="panels"></slot>
      
    `;
  }
});