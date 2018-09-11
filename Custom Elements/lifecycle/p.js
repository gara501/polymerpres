// Create a class for the element
class DotsElement extends HTMLParagraphElement {
  
  // Observer
  static get observedAttributes() {return ['class', 'width', 'background', 'style']; }

  constructor() {
    
    // Always call super first in constructor
    super();

    // count words in element's parent element
    let paragraph = this;
    let limit = this.getAttribute('limit');
    let paragraphData = this.writeDots(paragraph, limit);
    let textData = paragraphData.text;

    // Create a shadow root
    let shadow = this.attachShadow({mode: 'open'});

    // Create text node and add word count to it
    let text = document.createElement('span');
    text.textContent = textData;
    

    let removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', (e) => {
      this.remove();
    });

    this.addEventListener('click', (e) => {
      this.style.background = 'yellow';
    });

    // Append it to the shadow root
    shadow.appendChild(text);
    shadow.appendChild(removeButton);

  }

  writeDots(node, limit) {
    let text = node.innerText || node.textContent
    let characters = text.split(/\s+/g).length;
    
    if (limit) {
      limit = parseInt(limit);
      if (characters > limit) {
        text = text.substring(0, limit) + '...';
      }
    }
    return { text: text}
  }

  connectedCallback() {
    console.log('Super Paragraph has been added to the page.');
  }
  
  disconnectedCallback() {
    console.log('Super Paragraph has been removed from page.');
  }
  
  adoptedCallback() {
    console.log('Super Paragraph has been moved to new page.');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('Custom square element attributes changed.');
    
  }
}

// Define the new element
customElements.define('dots-element', DotsElement, { extends: 'p' });