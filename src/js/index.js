import '../sass/styles.scss';
import UIkit from 'uikit';
import axios from 'axios';

const TESTUSER = {
  name: 'administrator@sdkfinance.app',
  password: 'SfEFNbrdnusx8jXzgy8w',
};

const USER = {
  name: undefined,
  password: undefined,
};

document.querySelector('#login-form').addEventListener('submit', (e) => {
  e.preventDefault();

  USER.name = document.querySelector('#login-user').value;
  USER.password = document.querySelector('#login-password').value;
  console.log(USER);

  axios
    .post('/api/v1/authorization', {
      login: USER.name,
      password: USER.password,
    })
    .then((response) => {
      console.log(response);
      localStorage.setItem('token', response.data.authorizationToken.token);
    })
    .catch((error) => {
      document.querySelector('#login-user').classList.add('uk-form-danger');
      document.querySelector('#login-password').classList.add('uk-form-danger');
      UIkit.notification(`<span uk-icon='icon: ban'></span> ${error}`, { status: 'danger', pos: 'top-right' });
      console.log(error);
    });
});
