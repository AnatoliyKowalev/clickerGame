(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{449:function(t,e,o){"use strict";o.r(e);var n=o(1),r=o.n(n);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var f=function(t){function e(t){var o,n,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,o=!(r=u(e).call(this,t))||"object"!==i(r)&&"function"!=typeof r?l(n):r,function(t,e,o){e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o}(l(o),"getCookie",(function(t){var e=("; "+document.cookie).split("; "+t+"=");if(2===e.length)return e.pop().split(";").shift()})),o.state={bool:!1},o}var o,n,f;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(e,t),o=e,(n=[{key:"render",value:function(){var t=this;return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return console.log(t.getCookie("bool"))}},"get Cookies"),r.a.createElement("input",{type:"checkbox",checked:this.state.bool,onChange:function(e){return t.setState({bool:e.target.checked},(function(){return console.log(t.state.bool)}))}}),r.a.createElement("button",{onClick:function(){t.props.cookies.set("bool",t.state.bool)}},"Set cookie "))}}])&&c(o.prototype,n),f&&c(o,f),e}(n.Component);e.default=f}}]);
//# sourceMappingURL=10.index_bundle.js.map