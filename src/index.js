import './style/index.scss';
import { App } from './app/App';

window.onload = () => {
  try {
    const root = document.getElementById('root');

    if (!root) {
      throw Error('Root is not found');
    }

    const initApp = new App(root);

    return initApp;
  } catch (error) {
    // eslint-disable-next-line no-console
    return console.error(error);
  }
};
