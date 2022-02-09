import './style/index.scss';
import { App } from './app/App';
import { NotFoundError } from './common/NotFoundError';

document.addEventListener('DOMContentLoaded', () => {
  try {
    const root = document.getElementById('root');

    const initApp = new App(root);

    return initApp;
  } catch (e) {
    const error = new NotFoundError('Root element is not found');
    error.showBodyError();
    throw error;
  }
});
