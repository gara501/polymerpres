const header = document.createElement('header');
const shadowRoot = header.attachShadow({mode: 'open'});// create a shadow DOM for an element
shadowRoot.innerHTML = '<h1>Hello Shadow DOM</h1>'; // Could also use appendChild().


// header.shadowRoot === shadowRoot
// shadowRoot.host === header