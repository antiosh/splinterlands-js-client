import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import config, { loadConfig } from 'src/app/config';
import { App } from 'src/App';
import { store } from 'src/app/store';
import splinterlands from 'splinterlands-js';

const { API_URL, WS_URL, TX_BROADACST_URL } = config;

(async () => {
  await loadConfig();
  await splinterlands.init({
    api_url: API_URL,
    ws_url: WS_URL,
    tx_broadcast_url: TX_BROADACST_URL,
  });
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root'),
  );
})();
