import React from 'react';
import ReactDom from 'react-dom';

let hr = React.createElement('hr');
let div = React.createElement('div', {className: 'lol'}, [hr])
ReactDom.render(div, document.querySelector("#app"));