// Create a class for the element
class ProfileBox extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Create a shadow root
    var shadow = this.attachShadow({mode: 'open'});

    // Create spans
    var wrapper = document.createElement('div');
    wrapper.setAttribute('class','wrapper');

    var infoWrapper = document.createElement('div');
    infoWrapper.setAttribute('class','infowrapper');
    
    var profile = document.createElement('img');
    profile.setAttribute('class','profile');

    var name = document.createElement('span');
    name.setAttribute('class','name');

    var info = document.createElement('p');
    info.setAttribute('class','info');

    // Take attribute content and put it inside the info span
    var nameValue = this.getAttribute('name');
    name.textContent = nameValue;

    var intoValue = this.getAttribute('habilities');
    info.textContent = intoValue;

    // Insert icon
    var imgUrl;
    if(this.hasAttribute('img')) {
      imgUrl = this.getAttribute('img');
    } else {
      imgUrl = 'hover.png';
    }

    if (this.hasAttribute('type')) {
      if (this.getAttribute('type') === 'hero') {
        wrapper.classList.add('hero');
      } else {
        wrapper.classList.add('villain');
      }
    }

    profile.src = imgUrl;
    

    // Create some CSS to apply to the shadow dom
    var style = document.createElement('style');

    style.textContent = `.wrapper {
                           background: #f7f7f7;
                           border: 1px solid blue;
                           display: flex;
                           flex-flow: row nowrap;
                           height: auto;
                           position: relative;
                           width: 30%;
                        }
                        .wrapper.hero {
                          border: 3px solid lightblue;
                        }
                        .wrapper.villain {
                          border: 3px solid red;
                        }
                        .infowrapper {
                          display: flex;
                          flex-flow: column nowrap;
                          padding: 10px;
                        }
                        .name {
                          font-weight: 800;
                          text-transform: uppercase;
                        }
                        .profile {
                          height: 100px;
                          width: auto;
                        }`;

    // attach the created elements to the shadow dom

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    infoWrapper.appendChild(name);
    infoWrapper.appendChild(info);
    wrapper.appendChild(profile);
    wrapper.appendChild(infoWrapper);
    
  }
}

// Define the new element
customElements.define('profile-box', ProfileBox);