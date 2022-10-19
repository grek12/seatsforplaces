import React from "react";
import ReactDOM from "react-dom";
import './styles/main.css';
import { store } from './redux/store'
import { BrowserRouter } from "react-router-dom";
import App  from "./components/App"
import { Provider } from 'react-redux'
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);