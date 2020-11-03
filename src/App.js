import React from 'react';
import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HookCakeContainer from './components/HooksCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HookCakeContainer/>
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
