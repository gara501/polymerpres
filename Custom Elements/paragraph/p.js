// Create a class for the element
class DotsElement extends HTMLParagraphElement {
  constructor() {
    // Always call super first in constructor
    super();

    // count words in element's parent element
    let paragraph = this;
    let limit = this.getAttribute('limit');
    console.log(limit);

    function writeDots(node) {
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

    let paragraphData = writeDots(paragraph);
    var textData = paragraphData.text;

    // Create a shadow root
    var shadow = this.attachShadow({mode: 'open'});

    // Create text node and add word count to it
    var text = document.createElement('span');
    text.textContent = textData;

    this.addEventListener('click', function(e) {
      this.style.background = 'yellow';
    });

    // Append it to the shadow root
    shadow.appendChild(text);
  }
}

// Define the new element
customElements.define('dots-element', DotsElement, { extends: 'p' });