import React from 'react';
import ReactDom from 'react-dom';
import App from './app';

ReactDom.render(
    <App age={30} name={'deny'} />
, document.querySelector("#app"));