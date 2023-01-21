import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import './normalize.css';
import  cartSlice  from './state';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const store =configureStore({
  reducer: {cart:cartSlice},
})
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ToastContainer
          theme="dark"
          position="top-right"
          autoClose={3000}
          closeOnClick
          pauseOnHover={false} 
        />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
    
);
