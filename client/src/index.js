import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import reducers from './reducers' 
import { BrowserRouter } from 'react-router-dom';

const store=createStore(reducers,compose(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Provider store={store}>  
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>  
    </React.StrictMode>
  </Provider>
);


