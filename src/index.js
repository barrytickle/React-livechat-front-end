import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SendMessageAlt from './SendMessage/SendMessageAlt';
import Button from '@material-ui/core/Button';
// import SendMessageSimple from './SendMessageSimple/SendMessageSimple';
import Dialer from './Dialer/Dialer';
import * as serviceWorker from './serviceWorker';

// export default class Test extends React.Component{
//     constructor() {
//         super();
//         this.toggleModal = this.toggleModal.bind(this);
//
//         this.state={
//             show: false
//         }
//
//     };
//     toggleModal(){
//       return this.setState({show: true});
//
//     };
//     render(){
//
//         // return <h1>Hello World</h1>;
//
//
//
//
//         if(this.state.show){
//             return <SendMessageSimple type="sms"/>;
//         }else{
//             return <Button onClick={this.toggleModal}>Open Modal</Button>;
//         }
//     }
// }


ReactDOM.render(
  <Dialer position="drawer"/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
