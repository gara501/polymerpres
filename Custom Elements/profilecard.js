// Create a class for the element
class ProfileCard extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Create a shadow root
    let shadow = this.attachShadow({mode: 'open'});

    // Create spans
    let content = document.createElement('div');

    let profileName = this.getAttribute('profile-name');
    let profileInfo = this.getAttribute('profile-info');
    let profileClass = this.getAttribute('profile-class');
    let profileImage = this.getAttribute('profile-image') ? this.getAttribute('profile-image') : 'noimage.png';
    
    content.innerHTML = `
      <div class="profile">
        <div class="profile-pic">
          <img class="profile-image" src="${profileImage}" alt="magneto"/>
        </div>
        <div class="profile-info">
          <h2 class="profile-name">${profileName}</h2>
          <span class="profile-class">Class: ${profileClass}</span>
          <p class="profile-info">${profileInfo}</p>
        </div>
      </div>
    `;

    // Create some CSS to apply to the shadow dom
    let style = document.createElement('style');

    style.textContent = `
      :host {
        font-family: 'Marvel', sans-serif;
      }
      .profile {
        border: 1px solid #ccc;
        border-radius: 5px;
        display: flex;
        flex-flow: column wrap;
        min-height: 250px;
        text-align: center;
        width: 20%;
      }
      .profile-pic {
        border-radius: 5px;
        display: block;
        height: 130px;
        margin: -10px auto 0 auto;
        width: 90%;
      }

      .profile-pic img {
        border-radius: 5px;
        width: 100%;
      }

      .profile-info {
        display: flex;
        flex-flow: column wrap;
        padding: 0 10px;
      }
      
      .profile-name {
        color: red;
        text-transform: uppercase;
      }

      .profile-info {
        color: #333;
      }

      .profile-class {
        color: #ff4400;
        font-weight: bold;
      }
    `;

    // attach the created elements to the shadow dom
    shadow.appendChild(style);
    shadow.appendChild(content);

  }
}

// Define the new element
customElements.define('profile-card', ProfileCard);