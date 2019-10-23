import axios from 'axios';
import UIkit from 'uikit';
import { highlightFormError } from '../modules/handleError';
import { parseDataInTable } from '../modules/parseDataInTable';

export const USER = {
  email: undefined,
  password: undefined,
};

export function postAuthorization() {
  document.querySelector('.preloader').classList.add('active');
  axios
    .post('/api/v1/authorization', {
      login: USER.email,
      password: USER.password,
    })
    .then((response) => {
      console.warn(response);
      localStorage.setItem('token', response.data.authorizationToken.token);
      window.location.href = '/dashboard.html';
    })
    .catch((error) => {
      highlightFormError();
      UIkit.notification(`<span uk-icon='icon: ban'></span> ${error}`, {
        status: 'danger',
        pos: 'top-right',
      });
      console.error(error);
    })
    .finally(() => {
      document.querySelector('.preloader').classList.remove('active');
    });
}

export function getUsers() {
  document.querySelector('.preloader').classList.add('active');
  const TOKEN = localStorage.getItem('token');
  console.log(TOKEN);
  axios.defaults.headers.common.Authorization = `TOKEN ${TOKEN}`;
  axios
    .post('/api/v1/users/view', {
      pageSize: 10,
      pageNumber: 0,
    })
    .then((response) => {
      console.warn(response);
      parseDataInTable(response.data.records);
    })
    .catch((error) => {
      UIkit.notification(`<span uk-icon='icon: ban'></span> ${error}`, {
        status: 'danger',
        pos: 'top-right',
      });
      console.error(error);
    })
    .finally(() => {
      document.querySelector('.preloader').classList.remove('active');
    });
}
