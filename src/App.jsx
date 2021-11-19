import React from 'react';
import { Provider } from 'react-redux';
import Main from './components/Main.jsx';
import store from './store.js';

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
