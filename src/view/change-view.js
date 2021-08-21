import { components, metodosPublicos } from './components.js';

const changeView = (route) => {
  const loginSection = document.getElementById('login-section');
  const headerBarNav = document.getElementById('header-bar-nav');
  const mainPage = document.getElementById('main-page');
  const Profile = document.getElementById('main-profile');


  loginSection.innerHTML = '';
  headerBarNav.innerHTML = '';
  mainPage.innerHTML = '';
  Profile.innerHTML = '';



  switch (route) {
    case '#/login':
    { return loginSection.appendChild(components.login()); }
    case '#/signup':
    { return loginSection.appendChild(components.signup()); }
    case '#/mainPage':
      { metodosPublicos.mGetPublish();
         return headerBarNav.appendChild(components.header()) && mainPage.appendChild(components.mainPage()); }
    case '#/profile':
    { return headerBarNav.appendChild(components.header()) && Profile.appendChild(components.profile()); }
   

    default:
    break;
  }
  console.log(route);
};

export { changeView };
