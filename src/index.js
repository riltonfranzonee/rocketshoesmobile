import 'react-native-gesture-handler';

import React from 'react';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';

import store from './store';
import NavHeader from './global/NavHeader';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <Provider store={store}>
      <NavHeader />
      <Home />
      <Cart />
    </Provider>
  );
}

export default App;
