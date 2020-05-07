import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import stores from '~s';
import {Provider} from 'mobx-react';

stores.products.load().then(() => {
    ReactDom.render(<Provider stores={stores}>
        <App/>
    </Provider>
    , document.querySelector("#app"));
});

stores.cart.load();
