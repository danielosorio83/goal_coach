import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import App from './components/App';

const store = createStore(reducer);

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App store={store} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
