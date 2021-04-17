import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Base from './routes'
import store from './reducers/store'

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Base />
    </BrowserRouter>
    </Provider>
  );
}

export default App;
