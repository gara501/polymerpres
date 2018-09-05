// Create a class for the element
class DemoParagraph extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    let template = document.getElementById('super-p');
    let templateContent = template.content;
    
    
    // Create a shadow root
    const shadow = this.attachShadow({mode: 'open'})
    .appendChild(templateContent.cloneNode(true)); 
    
    let text = this.getAttribute('text');
    let p = this.shadowRoot.querySelector('p');
    if (text) {
      p.textContent = text;
    }
    
  }
}

// Define the new element
customElements.define('demo-paragraph', DemoParagraph);