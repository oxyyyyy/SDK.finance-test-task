import axios from 'axios';
import UIkit from 'uikit';

const highlightFormError = () => {
  document.querySelector('#login-user').classList.add('uk-form-danger');
  document.querySelector('#login-password').classList.add('uk-form-danger');
  setTimeout(() => {
    document.querySelector('#login-user').classList.remove('uk-form-danger');
    document.querySelector('#login-password').classList.remove('uk-form-danger');
  }, 2000);
};

export const USER = {
  email: undefined,
  password: undefined,
};

export function postAuthorization() {
  axios
    .post('/api/v1/authorization', {
      login: USER.email,
      password: USER.password,
    })
    .then((response) => {
      console.log(response);
      localStorage.setItem('token', response.data.authorizationToken.token);
      window.location.href = '/dashboard.html';
    })
    .catch((error) => {
      highlightFormError();
      UIkit.notification(`<span uk-icon='icon: ban'></span> ${error}`, { status: 'danger', pos: 'top-right' });
      console.log(error);
    });
}

export function getLol() {
  console.log('lol');
}
