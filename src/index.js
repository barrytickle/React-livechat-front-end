import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SendMessageAlt from './SendMessage/SendMessageAlt';
import SendMessageSimple from './SendMessageSimple/SendMessageSimple';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/*<SendMessageAlt />*/}
    <SendMessageSimple type="sms"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
