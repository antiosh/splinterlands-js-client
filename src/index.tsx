import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { loadConfig } from 'src/app/config';
import { App } from 'src/App';
import { store } from 'src/app/store';

const config = loadConfig();

(async () => {
  await config;
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root'),
  );
})();
