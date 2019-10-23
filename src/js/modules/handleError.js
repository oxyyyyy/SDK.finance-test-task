import UIkit from 'uikit';

export function handleError(element, message) {
  element.classList.add('uk-form-danger');
  UIkit.notification(`<span uk-icon="icon: ban"></span> ${message}`, { status: 'danger', pos: 'top-right' });
  setTimeout(() => {
    element.classList.remove('uk-form-danger');
  }, 2000);
}
