import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import AuthProvider from "react-auth-kit"


import createStore from 'react-auth-kit/createStore';
const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore({
  authName:'_auth',
  authType:'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: false
});
root.render(

  





  <React.StrictMode>
    <AuthProvider  store={store}>

    <App />

    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

