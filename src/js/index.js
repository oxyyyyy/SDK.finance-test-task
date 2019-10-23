import '../sass/styles.scss';
import UIkit from 'uikit';
import { postAuthorization, USER } from './services/service';
import { handleError } from './modules/handleError';


const TESTUSER = {
  email: 'administrator@sdkfinance.app',
  password: 'SfEFNbrdnusx8jXzgy8w',
};

const validateEmail = (email) => {
  const RE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return RE.test(String(email).toLowerCase());
};

const validateNotEmpty = (val) => (val.length);

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
