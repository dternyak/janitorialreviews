import { getQueryStringParam } from '../utils/url';

const module = {
  init: () => {
    const action = getQueryStringParam('action', window.location.href)
      || getQueryStringParam('stripe', window.location.href);
    if (action != null) {
      const alert = document.querySelector(`.alert-${action}`);
      if (alert != null) {
        alert.classList.remove('hidden');
        const close = alert.querySelector('.close');
        if (close != null) {
          close.addEventListener('click', () => {
            alert.classList.add('hidden');
          });
        }
      }
    }
  },
};

export default module;