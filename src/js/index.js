import '../sass/styles.scss';
import { postAuthorization, getUsers, USER } from './services/service';
import { handleError } from './modules/handleError';
import { validateEmail, validateNotEmpty } from './modules/validation';

if (document.querySelector('#login-form')) {
  document.querySelector('#login-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const userInput = document.querySelector('#login-user');
    const passwordInput = document.querySelector('#login-password');
    USER.email = userInput.value;
    USER.password = passwordInput.value;
    console.log(USER);

    if (!validateEmail(USER.email)) {
      handleError(userInput, 'E-mail is not valid');
      return false;
    }

    if (!validateNotEmpty(USER.password)) {
      handleError(passwordInput, 'Field is empty');
      return false;
    }

    postAuthorization();
  });
}

if (document.querySelector('#users-table')) {
  if (localStorage.getItem('token')) {
    getUsers();
  } else {
    window.location.href = '/';
  }
}
