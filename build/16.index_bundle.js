(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{443:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),c=n(405),i=n(406),a=n(412),u=(n(111),n(404));function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t,n,o,r,c,i){try{var a=e[c](i),u=a.value}catch(e){return void n(e)}a.done?t(u):Promise.resolve(u).then(o,r)}function p(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var c=e.apply(t,n);function i(e){l(c,o,r,i,a,"next",e)}function a(e){l(c,o,r,i,a,"throw",e)}i(void 0)}))}}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,r=d(t).call(this,e),n=!r||"object"!==s(r)&&"function"!=typeof r?y(o):r,v(y(n),"toggleState",(function(e,t){var o,r=[];switch(e){case"iconsModal":r=n.props.players.map((function(e){if(e.icon)return e.icon.iconName}))}n.setState(m({},n.state,(v(o={},e,t||!n.state[e]),v(o,"sellectedIcons",r),o)))})),v(y(n),"selectIcon",(function(e){n.props.setPlayerField(n.props.index,"icon",e),n.setState(m({},n.state,{pickedIcon:e,iconsModal:!1}),(function(){return n.props.checkValidForm()}))})),v(y(n),"pickRandomIcon",p(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.setIconToUsedFunc,e.next=3,t(n.props.index);case 3:n.setState(m({},n.state,{pickedIcon:t(n.props.index)}),(function(){return n.props.checkValidForm()}));case 4:case"end":return e.stop()}}),e)})))),v(y(n),"checkSameIcon",(function(e){var t="black";return n.state.sellectedIcons.map((function(n){n&&n==e.iconName&&(t="gray")})),t})),n.state={icons:u.d,iconsModal:!1,pickedIcon:null,sellectedIcons:[]},n}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){var e=this,t=this.state,n=t.iconsModal,o=t.icons,u=t.pickedIcon;return t.sellectedIcons,r.a.createElement("div",{className:"icon-picker"},r.a.createElement("div",{className:"random-hero-pick",onClick:function(){return e.pickRandomIcon()}},r.a.createElement(i.a,{icon:c.O}),"random"),r.a.createElement("div",{className:"icon-picker__icon"},u?r.a.createElement(i.a,{icon:u,size:"2x"}):r.a.createElement("p",{className:"text-center"},"'.__.'")),r.a.createElement("button",{onClick:function(){return e.toggleState("iconsModal")}},"pick"),r.a.createElement(a.a,{isOpen:n,toggle:function(){return e.toggleState("iconsModal")}},r.a.createElement(a.d,{toggle:function(){return e.toggleState("iconsModal")}},"Pick icon"),r.a.createElement(a.b,null,o.map((function(t,n){return r.a.createElement("button",{key:n,className:"btn-icon",color:e.checkSameIcon(t),onClick:function(){return e.selectIcon(t)},disabled:"gray"==e.checkSameIcon(t)},r.a.createElement(i.a,{icon:t,size:"3x"}))})))))}}])&&b(n.prototype,o),l&&b(n,l),t}(o.Component);t.default=O}}]);
//# sourceMappingURL=16.index_bundle.js.map