import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import stores from '~s';
import {observer, Provider} from 'mobx-react';

ReactDom.render(
    <Provider stores={stores}>
        <App/>
    </Provider>
, document.querySelector("#app"));