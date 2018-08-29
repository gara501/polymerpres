// Create a class for the element
class WordCount extends HTMLParagraphElement {
  constructor() {
    // Always call super first in constructor
    super();

    // count words in element's parent element
    var wcParent = this;

    function countWords(node){
      var text = node.innerText || node.textContent
      return { total:text.split(/\s+/g).length, text: node.innerText}
    }

    var count = countWords(wcParent).total;
    var textData = countWords(wcParent).text;

    // Create a shadow root
    var shadow = this.attachShadow({mode: 'open'});

    // Create text node and add word count to it
    var text = document.createElement('span');
    text.textContent = textData + ' - Words: ' + count;

    this.addEventListener('click', function(e) {
      console.log('I have the powa!');
      this.style.background = 'yellow';
    });

    // Append it to the shadow root
    shadow.appendChild(text);
    
    

  }
}

// Define the new element
customElements.define('word-count', WordCount, { extends: 'p' });