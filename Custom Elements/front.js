var controls = document.querySelectorAll('profile-box');
controls[0].addEventListener('click', (ev)=> {
  ev.target.setAttribute('class', 'master');
});
