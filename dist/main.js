!function(e){function t(t){for(var n,i,c=t[0],u=t[1],l=t[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(s&&s(t);p.length;)p.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,c=1;c<r.length;c++){var u=r[c];0!==o[u]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={1:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="dist/";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var s=u;a.push([56,0]),r()}({25:function(e,t,r){e.exports={active:"active_6cc4b3e"}},26:function(e,t,r){e.exports={box:"box_9f3543b",item:"item_4c42bd8"}},33:function(e,t,r){e.exports={col:"col_bb9b535",redd:"redd_0589377"}},44:function(e,t,r){e.exports={input:"input_569093f"}},56:function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"all",(function(){return mt}));var o={};r.r(o),r.d(o,"load",(function(){return ht})),r.d(o,"add",(function(){return vt})),r.d(o,"remove",(function(){return gt})),r.d(o,"changeCnt",(function(){return Ot})),r.d(o,"clean",(function(){return wt}));var a,i=r(0),c=r.n(i),u=r(19),l=r.n(u),s=r(16),f=r(9),p=r(25),y=r.n(p),d=(r(23),r(59)),b=r(60),m=r(58),h=r(11);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=P(e);if(t){var o=P(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return j(this,r)}}function j(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k=Object(h.b)("stores")(a=Object(h.c)(a=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(a,e);var t,r,n,o=E(a);function a(){var e;g(this,a);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return(e=o.call.apply(o,[this].concat(r))).state={showModal:!1},e.show=function(){e.setState({showModal:!0})},e.hide=function(){e.setState({showModal:!1})},e.confirm=function(){e.props.stores.order.send().then((function(){e.hide(),e.props.history.push(Ee.result)}))},e}return t=a,(r=[{key:"render",value:function(){var e=this.props.stores.order,t=[],r=function(r){var n=e.formData[r];t.push(c.a.createElement(d.a.Group,{key:r,controlId:"order-form-"+r},c.a.createElement(d.a.Label,null,n.label),c.a.createElement(d.a.Control,{type:"text",value:n.value,onChange:function(t){return e.change(r,t.target.value)}}),null===n.valid||n.valid?"":c.a.createElement(d.a.Text,{className:"text-muted"},n.errorText)))};for(var n in e.formData)r(n);return c.a.createElement("div",null,c.a.createElement("h2",null,"Order"),c.a.createElement("hr",null),c.a.createElement(d.a,null,t),c.a.createElement(f.b,{className:"btn btn-warning",to:Ee.home},"Back to Cart")," ",c.a.createElement(b.a,{variant:"primary",onClick:this.show,disabled:!e.formValid},"Applay Order"),c.a.createElement(m.a,{show:this.state.showModal,backdrop:"static",onHide:this.hide},c.a.createElement(m.a.Header,{closeButton:!0},c.a.createElement(m.a.Title,null,"Check information")),c.a.createElement(m.a.Body,null,"Content"),c.a.createElement(m.a.Footer,null,c.a.createElement(b.a,{variant:"secondary",onClick:this.hide},"Ooops"),c.a.createElement(b.a,{variant:"primary",onClick:this.confirm},"All right"))))}}])&&O(t.prototype,r),n&&O(t,n),a}(c.a.Component))||a)||a,C=r(4),S=r.n(C);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function D(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function R(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=N(e);if(t){var o=N(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return I(this,r)}}function I(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(a,e);var t,r,n,o=T(a);function a(){var e;D(this,a);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return(e=o.call.apply(o,[this].concat(r))).nativeInput=c.a.createRef(),e.setValue=function(t){e.nativeInput.current.value=t},e.checkChange=function(t){e.props.value.toString()!==t.target.value&&e.props.onChange(t)},e.checkEnterKey=function(t){13===t.keyCode&&e.checkChange(t)},e}return t=a,(r=[{key:"componentDidUpdate",value:function(e,t){var r=this.nativeInput.current;e.value===this.props.value&&this.props.value==r.value||(r.value=this.props.value)}},{key:"render",value:function(){return c.a.createElement("input",x({},this.props.netiveProps,{defaultValue:this.props.value,onBlur:this.checkChange,onKeyUp:this.checkEnterKey,ref:this.nativeInput}))}}])&&R(t.prototype,r),n&&R(t,n),a}(c.a.Component);M.defaultProps={onChange:function(e){},netiveProps:{}},M.propTypes={value:S.a.any.isRequired,onChange:S.a.func,netiveProps:S.a.object};var A=r(44),B=r.n(A);function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function U(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function F(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=K(e);if(t){var o=K(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return G(this,r)}}function G(e,t){return!t||"object"!==V(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var $=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(a,e);var t,r,n,o=F(a);function a(){var e;q(this,a);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return(e=o.call.apply(o,[this].concat(r))).lazyInput=c.a.createRef(),e.increase=function(){e.set(e.props.cnt+1)},e.decrease=function(){e.set(e.props.cnt-1)},e.onChange=function(t){var r=parseInt(t.target.value),n=e.set(isNaN(r)?e.props.min:r);n.toString()!==t.target.value&&e.lazyInput.current.setValue(n)},e}return t=a,(r=[{key:"set",value:function(e){var t=Math.min(Math.max(e,this.props.min),this.props.max);return this.props.onChange(t),t}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("button",{onClick:this.decrease,disabled:this.props.disabled||this.props.cnt<=this.props.min},"-"),c.a.createElement(M,{netiveProps:{type:"text",className:B.a.input,disabled:this.props.disabled},value:this.props.cnt,onChange:this.onChange,ref:this.lazyInput}),c.a.createElement("button",{onClick:this.increase,disabled:this.props.disabled||this.props.cnt>=this.props.max},"+"))}}])&&U(t.prototype,r),n&&U(t,n),a}(c.a.PureComponent);$.defaultProps={onChange:function(){}},$.propTypes={min:S.a.number.isRequired,max:S.a.number.isRequired,cnt:S.a.number.isRequired,onChange:S.a.func,disabled:S.a.bool};var J=function(e){return Object(h.b)("stores")(Object(h.c)(e))};function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var Y=Object(s.g)((function(e){var t=e.history,r=(e.location,e.match,e.staticContext,e.to),n=X(e,["history","location","match","staticContext","to"]);return c.a.createElement("button",L({},n,{onClick:function(e){return t.push(r)}}))}));function Z(e){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function W(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ee(e,t){return(ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function te(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=ne(e);if(t){var o=ne(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return re(this,r)}}function re(e,t){return!t||"object"!==Z(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ne(e){return(ne=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var oe=J(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ee(e,t)}(a,e);var t,r,n,o=te(a);function a(){return Q(this,a),o.apply(this,arguments)}return t=a,(r=[{key:"render",value:function(){var e=this.props.stores.cart,t=e.productsDetailed.map((function(t,r){return c.a.createElement("tr",{key:t.id},c.a.createElement("td",null,t.title),c.a.createElement("td",null,t.price),c.a.createElement("td",null,c.a.createElement($,{min:1,max:t.rest,cnt:t.cnt,onChange:function(r){return e.change(t.id,r)},disabled:t.id in e.processId})),c.a.createElement("td",null,t.price*t.cnt),c.a.createElement("td",null,c.a.createElement("button",{onClick:function(){return e.remove(t.id)}},"X")))}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"Cars"),c.a.createElement("table",{className:"table table-bordered"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",null,"Title"),c.a.createElement("td",null,"Price"),c.a.createElement("td",null,"Count"),c.a.createElement("td",null,"Total"),c.a.createElement("td",null,"Actions"))),c.a.createElement("tbody",null,t)),c.a.createElement("h3",null,"Total: ",e.total),c.a.createElement("hr",null),c.a.createElement(Y,{to:Ee.order,className:"btn btn-primary"},"Send"))}}])&&W(t.prototype,r),n&&W(t,n),a}(c.a.Component));function ae(e){return(ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ie(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ce(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ue(e,t){return(ue=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function le(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=fe(e);if(t){var o=fe(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return se(this,r)}}function se(e,t){return!t||"object"!==ae(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function fe(e){return(fe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var pe=J(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ue(e,t)}(a,e);var t,r,n,o=le(a);function a(){return ie(this,a),o.apply(this,arguments)}return t=a,(r=[{key:"render",value:function(){var e=this.props.stores.order.lastOrderCache;return this.props.stores.cart,c.a.createElement("div",null,c.a.createElement("h2",null,"Congratulations!"),c.a.createElement("p",null,"Hi, ",e.name,"!"),c.a.createElement("p",null,c.a.createElement("strong",null,"Total: ",e.total)),c.a.createElement("div",null))}}])&&ce(t.prototype,r),n&&ce(t,n),a}(c.a.Component)),ye=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"Error 404, page not found"),c.a.createElement("hr",null),c.a.createElement("div",{className:"alert alert-warning"},c.a.createElement("p",null,"Go to",c.a.createElement(f.b,{to:Ee.home},"home page"))))},de=r(61),be=r(33),me=r.n(be);console.log(me.a);var he=Object(h.b)("stores")(Object(h.c)((function(e){var t=e.stores.products,r=e.stores.cart,n=t.items.map((function(e){var t;return t=r.inCart(e.id)?c.a.createElement(b.a,{variant:"danger",onClick:function(){return r.remove(e.id)},disabled:e.id in r.processId},"Remove from cart"):c.a.createElement(b.a,{variant:"success",disabled:e.id in r.processId,onClick:function(){return r.add(e.id)}},"Add to cart"),c.a.createElement("div",{className:"col col-4 "+me.a.col,key:e.id},c.a.createElement(de.a,null,c.a.createElement(de.a.Body,null,c.a.createElement(de.a.Title,null,e.title),c.a.createElement(de.a.Text,null,c.a.createElement("strong",null,"Price: ",e.price)),c.a.createElement(f.b,{to:we("product",{id:e.id})},"Get more..."),c.a.createElement("hr",null),t)))}));return c.a.createElement("div",null,c.a.createElement("h2",null,"Products page"),c.a.createElement("div",{className:"row"},n))}))),ve=function(e){var t;return t=e.inCart?c.a.createElement(b.a,{variant:"danger",onClick:e.onRemove},"Remove from cart"):c.a.createElement(b.a,{variant:"success",onClick:e.onAdd},"Add to cart"),c.a.createElement("div",null,c.a.createElement("h2",null,e.title),c.a.createElement("hr",null),c.a.createElement("div",null,c.a.createElement("strong",null,"Prica: ",e.price)),c.a.createElement(f.b,{to:e.backUrl},"back to list"),c.a.createElement("p",null,"Text about product"),t)},ge=[{name:"home",url:"/",component:he,exact:!0},{name:"product",url:"/product/:id",component:Object(h.b)("stores")(Object(h.c)((function(e){var t=Object(s.f)().id,r=e.stores.products.getById(t),n=e.stores.cart;return null===r?c.a.createElement(ye,null):c.a.createElement(ve,{title:r.title,price:r.price,backUrl:Ee.home,inCart:n.inCart(r.id),onAdd:function(){return n.add(r.id)},onRemove:function(){return n.remove(r.id)}})}))),exact:!0},{name:"cart",url:"/cart",component:oe,exact:!0},{name:"order",url:"/order",component:k,exact:!0},{name:"result",url:"/done",component:pe,exact:!0},{url:"**",component:function(){return c.a.createElement(ye,null)}}],Oe={};ge.forEach((function(e){e.hasOwnProperty("name")&&(Oe[e.name]=e.url)}));var we=function(e,t){if(!Oe.hasOwnProperty(e))return null;var r=Oe[e];for(var n in t)r=r.replace(":"+n,t[n]);return r},Ee=Oe,je=r(26),Pe=r.n(je);function ke(e){return(ke="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ce(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Se(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _e(e,t){return(_e=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function xe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Re(e);if(t){var o=Re(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return De(this,r)}}function De(e,t){return!t||"object"!==ke(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Re(e){return(Re=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}console.log(Pe.a);var ze=J(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_e(e,t)}(a,e);var t,r,n,o=xe(a);function a(){return Ce(this,a),o.apply(this,arguments)}return t=a,(r=[{key:"render",value:function(){var e=this.props.stores.notifications,t=e.list.map((function(t){return c.a.createElement("div",{key:t.id,className:Pe.a.item,onDoubleClick:function(){e.remove(t.id)}},t.message)}));return c.a.createElement("div",{className:Pe.a.box},t)}}])&&Se(t.prototype,r),n&&Se(t,n),a}(c.a.Component));function Te(e){return(Te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ie(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ne(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Me(e,t){return(Me=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ae(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Ve(e);if(t){var o=Ve(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Be(this,r)}}function Be(e,t){return!t||"object"!==Te(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Ve(e){return(Ve=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var qe,Ue,He,Fe=J(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Me(e,t)}(a,e);var t,r,n,o=Ae(a);function a(){return Ie(this,a),o.apply(this,arguments)}return t=a,(r=[{key:"render",value:function(){var e=this.props.stores.cart,t=ge.map((function(e){return c.a.createElement(s.a,{key:e.url,path:e.url,component:e.component,exact:e.exact})}));return c.a.createElement(f.a,null,c.a.createElement(ze,null),c.a.createElement("header",null,c.a.createElement("div",{className:"container"},c.a.createElement("hr",null),c.a.createElement("div",{className:"row justify-content-between"},c.a.createElement("div",{className:"col col-4"},c.a.createElement("div",{className:"alert alert-success"},"Site name")),c.a.createElement("div",{className:"col col-3"},c.a.createElement("strong",null,"In Cart: ",e.cartCnt,c.a.createElement("br",null),"Total: ",e.total))),c.a.createElement("hr",null))),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col col-3"},c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},c.a.createElement(f.c,{to:Ee.home,exact:!0,activeClassName:y.a.active},"Home")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement(f.c,{to:Ee.cart,activeClassName:y.a.active},"Cart")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement(f.c,{to:Ee.order,activeClassName:y.a.active},"Order now")))),c.a.createElement("div",{className:"col col-9"},c.a.createElement(s.c,null,t)))))}}])&&Ne(t.prototype,r),n&&Ne(t,n),a}(c.a.Component)),Ge=r(2);function Ke(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $e(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ke(Object(r),!0).forEach((function(t){Je(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ke(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Je(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Le(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function Xe(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Ye(e,t,r,n,o){var a={};return Object.keys(n).forEach((function(e){a[e]=n[e]})),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),a),o&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(o):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(e,t,a),a=null),a}var Ze,Qe,We,et=(Ue=Ye((qe=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Le(this,"products",Ue,this),Le(this,"processId",He,this),this.rootStore=t,this.api=this.rootStore.api.cart,this.storage=this.rootStore.storage,this.token=this.storage.getItem("cartToken")}var t,r,n;return t=e,(r=[{key:"load",value:function(){var e=this;this.api.load(this.token).then((function(t){e.products=t.cart,t.needUpdate&&(e.token=t.token,e.storage.setItem("cartToken",e.token))})).catch((function(){}))}},{key:"add",value:function(e){var t=this;this.inCart(e)&&e in this.processId||(this.processId[e]=!0,this.api.add(this.token,e).then((function(r){r&&(t.products.push({id:e,cnt:1}),delete t.processId[e])})))}},{key:"change",value:function(e,t){var r=this;if(!(e in this.processId)){var n=this.products.findIndex((function(t){return t.id===e}));-1!==n&&(this.processId[e]=!0,this.api.changeCnt(this.token,e,t).then((function(o){o&&(r.products[n].cnt=t,delete r.processId[e])})))}}},{key:"remove",value:function(e){var t=this;if(this.inCart(e)&&!(e in this.processId)){var r=this.products.findIndex((function(t){return t.id===e}));-1!==r&&(this.processId[e]=!0,this.api.remove(this.token,e).then((function(n){n&&(t.products.splice(r,1),delete t.processId[e])})))}}},{key:"clean",value:function(){var e=this;this.api.clean(this.token).then((function(t){return new Promise((function(r,n){t?(e.products=[],r()):n()}))}))}},{key:"productsDetailed",get:function(){var e=this;return this.products.map((function(t){return $e($e({},e.rootStore.products.getById(t.id)),{},{cnt:t.cnt})}))}},{key:"inCart",get:function(){var e=this;return function(t){return e.products.some((function(e){return e.id===t}))}}},{key:"cartCnt",get:function(){return this.products.length}},{key:"total",get:function(){return this.productsDetailed.reduce((function(e,t){return e+t.price*t.cnt}),0)}}])&&Xe(t.prototype,r),n&&Xe(t,n),e}()).prototype,"products",[Ge.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),He=Ye(qe.prototype,"processId",[Ge.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),Ye(qe.prototype,"productsDetailed",[Ge.g],Object.getOwnPropertyDescriptor(qe.prototype,"productsDetailed"),qe.prototype),Ye(qe.prototype,"load",[Ge.f],Object.getOwnPropertyDescriptor(qe.prototype,"load"),qe.prototype),Ye(qe.prototype,"inCart",[Ge.g],Object.getOwnPropertyDescriptor(qe.prototype,"inCart"),qe.prototype),Ye(qe.prototype,"cartCnt",[Ge.g],Object.getOwnPropertyDescriptor(qe.prototype,"cartCnt"),qe.prototype),Ye(qe.prototype,"total",[Ge.g],Object.getOwnPropertyDescriptor(qe.prototype,"total"),qe.prototype),Ye(qe.prototype,"add",[Ge.f],Object.getOwnPropertyDescriptor(qe.prototype,"add"),qe.prototype),Ye(qe.prototype,"change",[Ge.f],Object.getOwnPropertyDescriptor(qe.prototype,"change"),qe.prototype),Ye(qe.prototype,"remove",[Ge.f],Object.getOwnPropertyDescriptor(qe.prototype,"remove"),qe.prototype),Ye(qe.prototype,"clean",[Ge.f],Object.getOwnPropertyDescriptor(qe.prototype,"clean"),qe.prototype),qe);function tt(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function rt(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function nt(e,t,r,n,o){var a={};return Object.keys(n).forEach((function(e){a[e]=n[e]})),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),a),o&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(o):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(e,t,a),a=null),a}var ot,at,it=(Qe=nt((Ze=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),tt(this,"formData",Qe,this),tt(this,"lastOrderCache",We,this),this.rootStore=t}var t,r,n;return t=e,(r=[{key:"change",value:function(e,t){var r=this.formData[e];r.value=t,r.valid=r.validator(r.value)}},{key:"send",value:function(){var e=this;return new Promise((function(t,r){e.rootStore.cart.clean().then((function(){for(var r in e.lastOrderCache.total=e.rootStore.cart.total,e.formData)e.lastOrderCache[r]=e.formData[r].value;t()}))}))}},{key:"formValid",get:function(){return Object.values(this.formData).every((function(e){return e.valid}))}},{key:"data",get:function(){var e={};for(var t in this.formData)e[t]=this.formData[t].value;return e}}])&&rt(t.prototype,r),n&&rt(t,n),e}()).prototype,"formData",[Ge.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{name:{label:"Your Name",value:"",validator:function(e){return/^[aA-zZ]{2,}$/.test(e)},errorText:"Латинские символы, не менее двух",valid:null},phone:{label:"Phone",value:"",validator:function(e){return/^[0-9]{7,15}$/.test(e)},errorText:"От 7 до 15",valid:null},email:{label:"Email",value:"",validator:function(e){return/^.+@.+$/.test(e)},errorText:"Собака",valid:null}}}}),We=nt(Ze.prototype,"lastOrderCache",[Ge.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{name:"",email:"",phone:"",total:""}}}),nt(Ze.prototype,"formValid",[Ge.g],Object.getOwnPropertyDescriptor(Ze.prototype,"formValid"),Ze.prototype),nt(Ze.prototype,"data",[Ge.g],Object.getOwnPropertyDescriptor(Ze.prototype,"data"),Ze.prototype),nt(Ze.prototype,"change",[Ge.f],Object.getOwnPropertyDescriptor(Ze.prototype,"change"),Ze.prototype),nt(Ze.prototype,"send",[Ge.f],Object.getOwnPropertyDescriptor(Ze.prototype,"send"),Ze.prototype),Ze);function ct(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ut(e,t,r,n,o){var a={};return Object.keys(n).forEach((function(e){a[e]=n[e]})),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),a),o&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(o):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(e,t,a),a=null),a}var lt,st,ft=(at=ut((ot=function(){function e(t){var r,n,o,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,n="items",a=this,(o=at)&&Object.defineProperty(r,n,{enumerable:o.enumerable,configurable:o.configurable,writable:o.writable,value:o.initializer?o.initializer.call(a):void 0}),this.rootSote=t,this.api=this.rootSote.api.products}var t,r,n;return t=e,(r=[{key:"load",value:function(){var e=this;return new Promise((function(t,r){e.api.all().then((function(r){e.items=r,t(!0)}))}))}},{key:"getById",value:function(e){var t=this.productsMap[e];return void 0===t?null:this.items[t]}},{key:"productsMap",get:function(){var e={};return this.items.forEach((function(t,r){e[t.id.toString()]=r})),e}}])&&ct(t.prototype,r),n&&ct(t,n),e}()).prototype,"items",[Ge.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),ut(ot.prototype,"productsMap",[Ge.g],Object.getOwnPropertyDescriptor(ot.prototype,"productsMap"),ot.prototype),ut(ot.prototype,"load",[Ge.f],Object.getOwnPropertyDescriptor(ot.prototype,"load"),ot.prototype),ot);function pt(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function yt(e,t,r,n,o){var a={};return Object.keys(n).forEach((function(e){a[e]=n[e]})),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),a),o&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(o):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(e,t,a),a=null),a}var dt=(st=yt((lt=function(){function e(t){var r,n,o,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,n="notifications",a=this,(o=st)&&Object.defineProperty(r,n,{enumerable:o.enumerable,configurable:o.configurable,writable:o.writable,value:o.initializer?o.initializer.call(a):void 0}),this._ai=0,this.rootStore=t}var t,r,n;return t=e,(r=[{key:"add",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"error",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3;if(this.notifications[++this._ai]={id:this._ai,message:e,type:r},null!==n){var o=this._ai;setTimeout((function(){t.remove(o)}),n)}}},{key:"remove",value:function(e){e in this.notifications&&delete this.notifications[e]}},{key:"list",get:function(){return Object.values(this.notifications)}}])&&pt(t.prototype,r),n&&pt(t,n),e}()).prototype,"notifications",[Ge.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),yt(lt.prototype,"list",[Ge.g],Object.getOwnPropertyDescriptor(lt.prototype,"list"),lt.prototype),yt(lt.prototype,"add",[Ge.f],Object.getOwnPropertyDescriptor(lt.prototype,"add"),lt.prototype),yt(lt.prototype,"remove",[Ge.f],Object.getOwnPropertyDescriptor(lt.prototype,"remove"),lt.prototype),lt);function bt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/api/";return fetch(r+e,t).then((function(e){return 200!==e.status?e.text().then((function(e){throw new Error(e)})):e.json()}))}function mt(){return bt("products/all")}function ht(e){var t="cart/load";return null!==e&&(t+="?token=".concat(e)),bt(t)}function vt(e,t){return bt("cart/add?token=".concat(e,"&id=").concat(t))}function gt(e,t){return bt("cart/remove?token=".concat(e,"&id=").concat(t))}function Ot(e,t,r){return bt("cart/change?token=".concat(e,"&id=").concat(t,"&cnt=").concat(r))}function wt(e){return bt("cart/remove?token=".concat(e))}var Et=new function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api={products:n,cart:o},this.storage=localStorage,this.cart=new et(this),this.order=new it(this),this.products=new ft(this),this.notifications=new dt(this)};Et.products.load().then((function(){l.a.render(c.a.createElement(h.a,{stores:Et},c.a.createElement(Fe,null)),document.querySelector("#app")),Et.notifications.add("Some test"),Et.notifications.add("Some test"),Et.notifications.add("Some test")})),Et.cart.load()}});