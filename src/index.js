import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import UserContext from "./context";


const user = {
  name: 'Kwame',
  login: false,
  favorites: [
    'avocado',
    'carrot'
  ]
}
// const [context, setContext] = useState("default context value");

ReactDOM.render(
  <React.StrictMode>
    <UserContext.Provider value={user}>
    <BrowserRouter basename={"/wordpress"}>
      <App />
    </BrowserRouter>
    </UserContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
