!function(e){function t(t){for(var n,i,c=t[0],u=t[1],l=t[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(s&&s(t);p.length;)p.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,c=1;c<r.length;c++){var u=r[c];0!==o[u]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={1:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="dist/";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var s=u;a.push([55,0]),r()}({25:function(e,t,r){e.exports={active:"active_6cc4b3e"}},42:function(e,t,r){e.exports={input:"input_569093f"}},43:function(e,t,r){e.exports={col:"col_bb9b535"}},55:function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"all",(function(){return tt}));var o={};r.r(o),r.d(o,"load",(function(){return rt})),r.d(o,"add",(function(){return nt})),r.d(o,"remove",(function(){return ot})),r.d(o,"changeCnt",(function(){return at})),r.d(o,"clean",(function(){return it}));var a,i=r(0),c=r.n(i),u=r(19),l=r.n(u),s=r(16),f=r(9),p=r(25),y=r.n(p),d=(r(23),r(58)),m=r(59),h=r(57),b=r(11);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=P(e);if(t){var o=P(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return j(this,r)}}function j(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k=Object(b.b)("stores")(a=Object(b.c)(a=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(a,e);var t,r,n,o=w(a);function a(){var e;g(this,a);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return(e=o.call.apply(o,[this].concat(r))).state={showModal:!1},e.show=function(){e.setState({showModal:!0})},e.hide=function(){e.setState({showModal:!1})},e.confirm=function(){e.props.stores.order.send().then((function(){e.hide(),e.props.history.push(we.result)}))},e}return t=a,(r=[{key:"render",value:function(){var e=this.props.stores.order,t=[],r=function(r){var n=e.formData[r];t.push(c.a.createElement(d.a.Group,{key:r,controlId:"order-form-"+r},c.a.createElement(d.a.Label,null,n.label),c.a.createElement(d.a.Control,{type:"text",value:n.value,onChange:function(t){return e.change(r,t.target.value)}}),null===n.valid||n.valid?"":c.a.createElement(d.a.Text,{className:"text-muted"},n.errorText)))};for(var n in e.formData)r(n);return c.a.createElement("div",null,c.a.createElement("h2",null,"Order"),c.a.createElement("hr",null),c.a.createElement(d.a,null,t),c.a.createElement(f.b,{className:"btn btn-warning",to:we.home},"Back to Cart")," ",c.a.createElement(m.a,{variant:"primary",onClick:this.show,disabled:!e.formValid},"Applay Order"),c.a.createElement(h.a,{show:this.state.showModal,backdrop:"static",onHide:this.hide},c.a.createElement(h.a.Header,{closeButton:!0},c.a.createElement(h.a.Title,null,"Check information")),c.a.createElement(h.a.Body,null,"Content"),c.a.createElement(h.a.Footer,null,c.a.createElement(m.a,{variant:"secondary",onClick:this.hide},"Ooops"),c.a.createElement(m.a,{variant:"primary",onClick:this.confirm},"All right"))))}}])&&O(t.prototype,r),n&&O(t,n),a}(c.a.Component))||a)||a,C=r(4),S=r.n(C);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function D(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function R(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=N(e);if(t){var o=N(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return I(this,r)}}function I(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(a,e);var t,r,n,o=z(a);function a(){var e;D(this,a);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return(e=o.call.apply(o,[this].concat(r))).nativeInput=c.a.createRef(),e.setValue=function(t){e.nativeInput.current.value=t},e.checkChange=function(t){e.props.value.toString()!==t.target.value&&e.props.onChange(t)},e.checkEnterKey=function(t){13===t.keyCode&&e.checkChange(t)},e}return t=a,(r=[{key:"componentDidUpdate",value:function(e,t){var r=this.nativeInput.current;e.value===this.props.value&&this.props.value==r.value||(r.value=this.props.value)}},{key:"render",value:function(){return c.a.createElement("input",x({},this.props.netiveProps,{defaultValue:this.props.value,onBlur:this.checkChange,onKeyUp:this.checkEnterKey,ref:this.nativeInput}))}}])&&R(t.prototype,r),n&&R(t,n),a}(c.a.Component);M.defaultProps={onChange:function(e){},netiveProps:{}},M.propTypes={value:S.a.any.isRequired,onChange:S.a.func,netiveProps:S.a.object};var A=r(42),B=r.n(A);function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function U(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function F(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=K(e);if(t){var o=K(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return G(this,r)}}function G(e,t){return!t||"object"!==V(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var $=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(a,e);var t,r,n,o=F(a);function a(){var e;q(this,a);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return(e=o.call.apply(o,[this].concat(r))).lazyInput=c.a.createRef(),e.increase=function(){e.set(e.props.cnt+1)},e.decrease=function(){e.set(e.props.cnt-1)},e.onChange=function(t){var r=parseInt(t.target.value),n=e.set(isNaN(r)?e.props.min:r);n.toString()!==t.target.value&&e.lazyInput.current.setValue(n)},e}return t=a,(r=[{key:"set",value:function(e){var t=Math.min(Math.max(e,this.props.min),this.props.max);return this.props.onChange(t),t}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("button",{onClick:this.decrease,disabled:this.props.disabled||this.props.cnt<=this.props.min},"-"),c.a.createElement(M,{netiveProps:{type:"text",className:B.a.input,disabled:this.props.disabled},value:this.props.cnt,onChange:this.onChange,ref:this.lazyInput}),c.a.createElement("button",{onClick:this.increase,disabled:this.props.disabled||this.props.cnt>=this.props.max},"+"))}}])&&U(t.prototype,r),n&&U(t,n),a}(c.a.PureComponent);$.defaultProps={onChange:function(){}},$.propTypes={min:S.a.number.isRequired,max:S.a.number.isRequired,cnt:S.a.number.isRequired,onChange:S.a.func,disabled:S.a.bool};var J=function(e){return Object(b.b)("stores")(Object(b.c)(e))};function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var Y=Object(s.g)((function(e){var t=e.history,r=(e.location,e.match,e.staticContext,e.to),n=X(e,["history","location","match","staticContext","to"]);return c.a.createElement("button",L({},n,{onClick:function(e){return t.push(r)}}))}));function Z(e){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function W(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ee(e,t){return(ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function te(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=ne(e);if(t){var o=ne(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return re(this,r)}}function re(e,t){return!t||"object"!==Z(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ne(e){return(ne=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var oe=J(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ee(e,t)}(a,e);var t,r,n,o=te(a);function a(){return Q(this,a),o.apply(this,arguments)}return t=a,(r=[{key:"render",value:function(){var e=this.props.stores.cart,t=e.productsDetailed.map((function(t,r){return c.a.createElement("tr",{key:t.id},c.a.createElement("td",null,t.title),c.a.createElement("td",null,t.price),c.a.createElement("td",null,c.a.createElement($,{min:1,max:t.rest,cnt:t.cnt,onChange:function(r){return e.change(t.id,r)},disabled:t.id in e.processId})),c.a.createElement("td",null,t.price*t.cnt),c.a.createElement("td",null,c.a.createElement("button",{onClick:function(){return e.remove(t.id)}},"X")))}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"Cars"),c.a.createElement("table",{className:"table table-bordered"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",null,"Title"),c.a.createElement("td",null,"Price"),c.a.createElement("td",null,"Count"),c.a.createElement("td",null,"Total"),c.a.createElement("td",null,"Actions"))),c.a.createElement("tbody",null,t)),c.a.createElement("h3",null,"Total: ",e.total),c.a.createElement("hr",null),c.a.createElement(Y,{to:we.order,className:"btn btn-primary"},"Send"))}}])&&W(t.prototype,r),n&&W(t,n),a}(c.a.Component));function ae(e){return(ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ie(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ce(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ue(e,t){return(ue=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function le(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=fe(e);if(t){var o=fe(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return se(this,r)}}function se(e,t){return!t||"object"!==ae(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function fe(e){return(fe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var pe=J(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ue(e,t)}(a,e);var t,r,n,o=le(a);function a(){return ie(this,a),o.apply(this,arguments)}return t=a,(r=[{key:"render",value:function(){var e=this.props.stores.order.lastOrderCache;return this.props.stores.cart,c.a.createElement("div",null,c.a.createElement("h2",null,"Congratulations!"),c.a.createElement("p",null,"Hi, ",e.name,"!"),c.a.createElement("p",null,c.a.createElement("strong",null,"Total: ",e.total)),c.a.createElement("div",null))}}])&&ce(t.prototype,r),n&&ce(t,n),a}(c.a.Component)),ye=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"Error 404, page not found"),c.a.createElement("hr",null),c.a.createElement("div",{className:"alert alert-warning"},c.a.createElement("p",null,"Go to",c.a.createElement(f.b,{to:we.home},"home page"))))},de=r(60),me=r(43),he=r.n(me),be=Object(b.b)("stores")(Object(b.c)((function(e){var t=e.stores.products,r=e.stores.cart,n=t.items.map((function(e){var t;return t=r.inCart(e.id)?c.a.createElement(m.a,{variant:"danger",onClick:function(){return r.remove(e.id)},disabled:e.id in r.processId},"Remove from cart"):c.a.createElement(m.a,{variant:"success",disabled:e.id in r.processId,onClick:function(){return r.add(e.id)}},"Add to cart"),c.a.createElement("div",{className:"col col-4 "+he.a.col,key:e.id},c.a.createElement(de.a,null,c.a.createElement(de.a.Body,null,c.a.createElement(de.a.Title,null,e.title),c.a.createElement(de.a.Text,null,c.a.createElement("strong",null,"Price: ",e.price)),c.a.createElement(f.b,{to:Ee("product",{id:e.id})},"Get more..."),c.a.createElement("hr",null),t)))}));return c.a.createElement("div",null,c.a.createElement("h2",null,"Products page"),c.a.createElement("div",{className:"row"},n))}))),ve=function(e){var t;return t=e.inCart?c.a.createElement(m.a,{variant:"danger",onClick:e.onRemove},"Remove from cart"):c.a.createElement(m.a,{variant:"success",onClick:e.onAdd},"Add to cart"),c.a.createElement("div",null,c.a.createElement("h2",null,e.title),c.a.createElement("hr",null),c.a.createElement("div",null,c.a.createElement("strong",null,"Prica: ",e.price)),c.a.createElement(f.b,{to:e.backUrl},"back to list"),c.a.createElement("p",null,"Text about product"),t)},ge=[{name:"home",url:"/",component:be,exact:!0},{name:"product",url:"/product/:id",component:Object(b.b)("stores")(Object(b.c)((function(e){var t=Object(s.f)().id,r=e.stores.products.getById(t),n=e.stores.cart;return null===r?c.a.createElement(ye,null):c.a.createElement(ve,{title:r.title,price:r.price,backUrl:we.home,inCart:n.inCart(r.id),onAdd:function(){return n.add(r.id)},onRemove:function(){return n.remove(r.id)}})}))),exact:!0},{name:"cart",url:"/cart",component:oe,exact:!0},{name:"order",url:"/order",component:k,exact:!0},{name:"result",url:"/done",component:pe,exact:!0},{url:"**",component:function(){return c.a.createElement(ye,null)}}],Oe={};ge.forEach((function(e){e.hasOwnProperty("name")&&(Oe[e.name]=e.url)}));var Ee=function(e,t){if(!Oe.hasOwnProperty(e))return null;var r=Oe[e];for(var n in t)r=r.replace(":"+n,t[n]);return r},we=Oe;function je(e){return(je="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Pe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ke(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Ce(e,t){return(Ce=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Se(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=xe(e);if(t){var o=xe(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return _e(this,r)}}function _e(e,t){return!t||"object"!==je(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function xe(e){return(xe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var De,Re,Te,ze=J(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ce(e,t)}(a,e);var t,r,n,o=Se(a);function a(){return Pe(this,a),o.apply(this,arguments)}return t=a,(r=[{key:"render",value:function(){var e=this.props.stores.cart,t=ge.map((function(e){return c.a.createElement(s.a,{key:e.url,path:e.url,component:e.component,exact:e.exact})}));return c.a.createElement(f.a,null,c.a.createElement("header",null,c.a.createElement("div",{className:"container"},c.a.createElement("hr",null),c.a.createElement("div",{className:"row justify-content-between"},c.a.createElement("div",{className:"col col-4"},c.a.createElement("div",{className:"alert alert-success"},"Site name")),c.a.createElement("div",{className:"col col-3"},c.a.createElement("strong",null,"In Cart: ",e.cartCnt,c.a.createElement("br",null),"Total: ",e.total))),c.a.createElement("hr",null))),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col col-3"},c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},c.a.createElement(f.c,{to:we.home,exact:!0,activeClassName:y.a.active},"Home")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement(f.c,{to:we.cart,activeClassName:y.a.active},"Cart")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement(f.c,{to:we.order,activeClassName:y.a.active},"Order now")))),c.a.createElement("div",{className:"col col-9"},c.a.createElement(s.c,null,t)))))}}])&&ke(t.prototype,r),n&&ke(t,n),a}(c.a.Component)),Ie=r(3);function Ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Me(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ne(Object(r),!0).forEach((function(t){Ae(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ne(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Ae(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Be(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function Ve(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function qe(e,t,r,n,o){var a={};return Object.keys(n).forEach((function(e){a[e]=n[e]})),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),a),o&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(o):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(e,t,a),a=null),a}var Ue,He,Fe,Ge=(Re=qe((De=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Be(this,"products",Re,this),Be(this,"processId",Te,this),this.rootSote=t,this.api=this.rootSote.api.cart,this.storage=this.rootSote.storage,this.token=this.storage.getItem("cartToken")}var t,r,n;return t=e,(r=[{key:"load",value:function(){var e=this;this.api.load(this.token).then((function(t){e.products=t.cart,t.needUpdate&&(e.token=t.token,e.storage.setItem("cartToken",e.token))}))}},{key:"add",value:function(e){var t=this;this.inCart(e)&&e in this.processId||(this.processId[e]=!0,this.api.add(this.token,e).then((function(r){r&&(t.products.push({id:e,cnt:1}),delete t.processId[e])})))}},{key:"change",value:function(e,t){var r=this;if(!(e in this.processId)){var n=this.products.findIndex((function(t){return t.id===e}));-1!==n&&(this.processId[e]=!0,this.api.changeCnt(this.token,e,t).then((function(o){o&&(r.products[n].cnt=t,delete r.processId[e])})))}}},{key:"remove",value:function(e){var t=this;if(this.inCart(e)&&!(e in this.processId)){var r=this.products.findIndex((function(t){return t.id===e}));-1!==r&&(this.processId[e]=!0,this.api.remove(this.token,e).then((function(n){n&&(t.products.splice(r,1),delete t.processId[e])})))}}},{key:"clean",value:function(){var e=this;this.api.clean(this.token).then((function(t){return new Promise((function(r,n){t?(e.products=[],r()):n()}))}))}},{key:"productsDetailed",get:function(){var e=this;return this.products.map((function(t){return Me(Me({},e.rootSote.products.getById(t.id)),{},{cnt:t.cnt})}))}},{key:"inCart",get:function(){var e=this;return function(t){return e.products.some((function(e){return e.id===t}))}}},{key:"cartCnt",get:function(){return this.products.length}},{key:"total",get:function(){return this.productsDetailed.reduce((function(e,t){return e+t.price*t.cnt}),0)}}])&&Ve(t.prototype,r),n&&Ve(t,n),e}()).prototype,"products",[Ie.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Te=qe(De.prototype,"processId",[Ie.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),qe(De.prototype,"productsDetailed",[Ie.g],Object.getOwnPropertyDescriptor(De.prototype,"productsDetailed"),De.prototype),qe(De.prototype,"load",[Ie.f],Object.getOwnPropertyDescriptor(De.prototype,"load"),De.prototype),qe(De.prototype,"inCart",[Ie.g],Object.getOwnPropertyDescriptor(De.prototype,"inCart"),De.prototype),qe(De.prototype,"cartCnt",[Ie.g],Object.getOwnPropertyDescriptor(De.prototype,"cartCnt"),De.prototype),qe(De.prototype,"total",[Ie.g],Object.getOwnPropertyDescriptor(De.prototype,"total"),De.prototype),qe(De.prototype,"add",[Ie.f],Object.getOwnPropertyDescriptor(De.prototype,"add"),De.prototype),qe(De.prototype,"change",[Ie.f],Object.getOwnPropertyDescriptor(De.prototype,"change"),De.prototype),qe(De.prototype,"remove",[Ie.f],Object.getOwnPropertyDescriptor(De.prototype,"remove"),De.prototype),qe(De.prototype,"clean",[Ie.f],Object.getOwnPropertyDescriptor(De.prototype,"clean"),De.prototype),De);function Ke(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function $e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Je(e,t,r,n,o){var a={};return Object.keys(n).forEach((function(e){a[e]=n[e]})),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),a),o&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(o):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(e,t,a),a=null),a}var Le,Xe,Ye=(He=Je((Ue=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Ke(this,"formData",He,this),Ke(this,"lastOrderCache",Fe,this),this.rootStore=t}var t,r,n;return t=e,(r=[{key:"change",value:function(e,t){var r=this.formData[e];r.value=t,r.valid=r.validator(r.value)}},{key:"send",value:function(){var e=this;return new Promise((function(t,r){e.rootStore.cart.clean().then((function(){for(var r in e.lastOrderCache.total=e.rootStore.cart.total,e.formData)e.lastOrderCache[r]=e.formData[r].value;t()}))}))}},{key:"formValid",get:function(){return Object.values(this.formData).every((function(e){return e.valid}))}},{key:"data",get:function(){var e={};for(var t in this.formData)e[t]=this.formData[t].value;return e}}])&&$e(t.prototype,r),n&&$e(t,n),e}()).prototype,"formData",[Ie.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{name:{label:"Your Name",value:"",validator:function(e){return/^[aA-zZ]{2,}$/.test(e)},errorText:"Латинские символы, не менее двух",valid:null},phone:{label:"Phone",value:"",validator:function(e){return/^[0-9]{7,15}$/.test(e)},errorText:"От 7 до 15",valid:null},email:{label:"Email",value:"",validator:function(e){return/^.+@.+$/.test(e)},errorText:"Собака",valid:null}}}}),Fe=Je(Ue.prototype,"lastOrderCache",[Ie.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{name:"",email:"",phone:"",total:""}}}),Je(Ue.prototype,"formValid",[Ie.g],Object.getOwnPropertyDescriptor(Ue.prototype,"formValid"),Ue.prototype),Je(Ue.prototype,"data",[Ie.g],Object.getOwnPropertyDescriptor(Ue.prototype,"data"),Ue.prototype),Je(Ue.prototype,"change",[Ie.f],Object.getOwnPropertyDescriptor(Ue.prototype,"change"),Ue.prototype),Je(Ue.prototype,"send",[Ie.f],Object.getOwnPropertyDescriptor(Ue.prototype,"send"),Ue.prototype),Ue);function Ze(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Qe(e,t,r,n,o){var a={};return Object.keys(n).forEach((function(e){a[e]=n[e]})),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),a),o&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(o):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(e,t,a),a=null),a}var We=(Xe=Qe((Le=function(){function e(t){var r,n,o,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,n="items",a=this,(o=Xe)&&Object.defineProperty(r,n,{enumerable:o.enumerable,configurable:o.configurable,writable:o.writable,value:o.initializer?o.initializer.call(a):void 0}),this.rootSote=t,this.api=this.rootSote.api.products}var t,r,n;return t=e,(r=[{key:"load",value:function(){var e=this;return new Promise((function(t,r){e.api.all().then((function(r){e.items=r,t(!0)}))}))}},{key:"getById",value:function(e){var t=this.productsMap[e];return void 0===t?null:this.items[t]}},{key:"productsMap",get:function(){var e={};return this.items.forEach((function(t,r){e[t.id.toString()]=r})),e}}])&&Ze(t.prototype,r),n&&Ze(t,n),e}()).prototype,"items",[Ie.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Qe(Le.prototype,"productsMap",[Ie.g],Object.getOwnPropertyDescriptor(Le.prototype,"productsMap"),Le.prototype),Qe(Le.prototype,"load",[Ie.f],Object.getOwnPropertyDescriptor(Le.prototype,"load"),Le.prototype),Le);function et(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/api/";return fetch(r+e,t).then((function(e){return 200!==e.status?e.text().then((function(e){throw new Error(e)})):e.json()}))}function tt(){return et("products/all")}function rt(e){var t="cart/load";return null!==e&&(t+="?token=".concat(e)),et(t)}function nt(e,t){return et("cart/add?token=".concat(e,"&id=").concat(t))}function ot(e,t){return et("cart/remove?token=".concat(e,"&id=").concat(t))}function at(e,t,r){return et("cart/change?token=".concat(e,"&id=").concat(t,"&cnt=").concat(r))}function it(e){return et("cart/remove?token=".concat(e))}var ct=new function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api={products:n,cart:o},this.storage=localStorage,this.cart=new Ge(this),this.order=new Ye(this),this.products=new We(this)};ct.products.load().then((function(){l.a.render(c.a.createElement(b.a,{stores:ct},c.a.createElement(ze,null)),document.querySelector("#app"))})),ct.cart.load()}});