import React from "react";
import ReactDOM from "react-dom";
import './styles/main.css';
import Header from './components/Header'
import { store } from './redux/store' // import your store
import { Provider } from 'react-redux'
import LoginPage from "./components/LoginPage";
import 'bootstrap/dist/css/bootstrap.css';

const App = () => (
  <div>
    <Header/>
    <LoginPage/>
  </div>
  );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);