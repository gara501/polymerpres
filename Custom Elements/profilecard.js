// Create a class for the element
class ProfileCard extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Create a shadow root
    let shadow = this.attachShadow({mode: 'open'});

    // Create spans
    let content = document.createElement('div');
    
    content.innerHTML = `
      <div class="profile">
        <div class="profile-pic">
          <img class="profile-image" src="magneto.jpg" alt="magneto"/>
        </div>
        <div class="profile-info">
          <h2 class="profile-name"></h2>
          <p class="profile-info">NEED NAME</p>
        </div>
      </div>
    `;

    // Create some CSS to apply to the shadow dom
    let style = document.createElement('style');

    style.textContent = `
      .profile {
        display: flex;
        flex-flow: row wrap;
        width: 500px;
      }
      .profile-pic img {
        width: 100px;
      }
      .profile-info {
        display: flex;
        flex-flow: column wrap;
      }
    `;

    // attach the created elements to the shadow dom
    shadow.appendChild(style);
    shadow.appendChild(content);

    // Update parameters
    let profileName = this.getAttribute('profile-name');
    let profileInfo = this.getAttribute('profile-info');
    let profileImage = this.getAttribute('profile-image');
    
    let profileNameCtrl = this.shadowRoot.querySelector('.profile-name');
    let profileInfoCtrl = this.shadowRoot.querySelector('.profile-info');
    let profileImageCtrl = this.shadowRoot.querySelector('.profile-image');

    profileNameCtrl.textContent = profileName;
    profileInfoCtrl.textContent = profileInfo;
    profileImageCtrl.src = (profileImage ? profileImage : profileImageCtrl.src);
  }
}

// Define the new element
customElements.define('profile-card', ProfileCard);