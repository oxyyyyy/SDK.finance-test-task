import UIkit from 'uikit';

const handleError = (element, message) => {
  element.classList.add('uk-form-danger');
  UIkit.notification(`<span uk-icon="icon: ban"></span> ${message}`, { status: 'danger', pos: 'top-right' });
  setTimeout(() => {
    element.classList.remove('uk-form-danger');
  }, 2000);
};

const highlightFormError = () => {
  document.querySelector('#login-user').classList.add('uk-form-danger');
  document.querySelector('#login-password').classList.add('uk-form-danger');
  setTimeout(() => {
    document.querySelector('#login-user').classList.remove('uk-form-danger');
    document.querySelector('#login-password').classList.remove('uk-form-danger');
  }, 2000);
};

export { handleError, highlightFormError };
