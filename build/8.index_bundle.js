(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{403:function(e,t,n){"use strict";n.d(t,"h",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"f",(function(){return s})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return p})),n.d(t,"i",(function(){return f})),n.d(t,"j",(function(){return y})),n.d(t,"e",(function(){return d})),n.d(t,"a",(function(){return m})),n.d(t,"g",(function(){return b}));n(1);var r=n(76),a=n(17),c=(n(113),n(407),n(111),n(411),n(404));function i(e,t,n,r,a,c,i){try{var o=e[c](i),u=o.value}catch(e){return void n(e)}o.done?t(u):Promise.resolve(u).then(r,a)}var o=function(e){return function(t){t({type:a.k,payload:e||!r.a.getState().players.formPlayersEditing})}},u=function(){return function(e){e({type:a.e,payload:{circle:++r.a.getState().players.gameSchema.circle}}),m()}},s=function(e){return function(t){t({type:a.h,payload:e})}},l=function(e){return function(t){var n=r.a.getState().players.gameSchema.players;n=n.map((function(t){return t.playerId===e?(t.bafs.forEach((function(e){switch(e.id){case 2:t.bafsObj.extraAtack+=2;break;case 3:t.bafsObj.extraPercent-=7;break;case 4:t.bafsObj.extraPercent+=5;break;case 6:t.bafsObj.extraAtack-=3;break;case 7:t.bafsObj.extraSpeed+=9;break;case 8:t.bafsObj.extraAtack-=3.5;break;case 9:t.bafsObj.extraPercent-=6;break;case 10:t.bafsObj.extraAtack+=2;break;case 11:t.bafsObj.extraPercent+=5;break;case 13:t.bafsObj.extraPercent-=13;break;case 14:t.bafsObj.extraAtack+=4;break;case 16:t.bafsObj.extraPercent+=10;break;case 18:t.bafsObj.extraAtack+=2.7;break;case 19:t.bafsObj.extraAtack+=3.2}})),t.bafs=[],t):t})),t({type:a.g,payload:e})}},p=function(e,t){return function(n){var c=r.a.getState().players.gameSchema.players;c=c.map((function(n){return n.playerId===e?(n.health-=t,n):n})),n({type:a.b,payload:c})}},f=function(e){return function(t){t({type:a.f,payload:e})}},y=function(e,t,n){return function(c){var i=r.a.getState().players.gameSchema.players;t.circle=n,i.map((function(n){return n.playerId===e?(n.gameHistory.unshift(t),n.bafsObj.extraAtack=0,n.bafsObj.extraPercent=0,n.bafsObj.extraSpeed=0,n):n})),c({type:a.l,payload:i}),c({type:a.d,payload:e})}},d=function(e,t){return function(n){var c=r.a.getState().players.gameSchema.players;c=c.map((function(n){return n.playerId===e?(n.bafs.unshift(t),n.bafs.forEach((function(e,t){switch(e.id){case 0:case 5:n.health+=1;break;case 12:n.health+=2;break;case 1:case 15:case 17:n.health-=1}})),n):n})),n({type:a.a,payload:c})}},m=function(){return function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var n,i,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.getState().players.gameSchema.players;case 2:return n=e.sent,e.next=5,r.a.getState().players.gameSchema.diedPlayers;case 5:return i=e.sent,e.next=8,n.map((function(e){e.health<=0&&!i.includes(e.playerId)&&t({type:a.c,payload:e.playerId})}));case 8:return e.next=10,n.length;case 10:e.t0=e.sent,e.t1=r.a.getState().players.gameSchema.diedPlayers.length,(o=e.t0-e.t1)<=1&&Object(c.b)(o);case 14:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var c=e.apply(t,n);function o(e){i(c,r,a,o,u,"next",e)}function u(e){i(c,r,a,o,u,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(t){t({type:a.i,payload:e})}}},404:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return l}));var r=n(405),a=n(76),c=n(403);function i(e,t,n,r,a,c,i){try{var o=e[c](i),u=o.value}catch(e){return void n(e)}o.done?t(u):Promise.resolve(u).then(r,a)}var o=[{id:0,kind:"health",name:"+ 1 HEALTH",icon:r.H},{id:1,kind:"health",name:"- 1 HEALTH",icon:r.I},{id:2,kind:"atack",name:"Тебя укусил паук, и ты стал человеком-пауком. Твоя получил +2 к силе!",icon:r.T},{id:3,kind:"percent",name:"Ты немного ослеп, и по этому сбился с пути, по этому путь который ты пройдешь увеличился на 7%.",icon:r.i},{id:4,kind:"percent",name:"Ух ты! Профессор с людей Х согласился тебе помочь и подбросил тебя ближе к выходу на 5%",icon:r.faAccessibleIcon},{id:5,kind:"health",name:"Мимо проезжала скорая, и подкинуло одно лишнее сердечко, теперь у тебя +1 сердце",icon:r.c},{id:6,kind:"atack",name:"Ты в баре выпил какую-то жижу и теперь тебе поплохело, твоя сила упала на 3",icon:r.b},{id:7,kind:"speed",name:"Следующий раз полоса дороги будет убывать так же медленно, как работает адроид, то-есть очень медленно",icon:r.Q},{id:8,kind:"atack",name:"Ты нарвался на злого деда, и он тебе надавал по коленям своим костылем, теперь ты медленно побежишь",icon:r.d},{id:9,kind:"percent",name:"На твоем пути появилась мамочка с коляской, тебе придется ее оббежать, это +6% к твоей дороге",icon:r.f},{id:10,kind:"atack",name:"Ты хорошо выспался и по этому сильнее, +2 к силе",icon:r.g},{id:11,kind:"percent",name:"Пока ты бежал, тебе догнал какой-то байкер и подбросил, -5% к дороге",icon:r.h},{id:12,kind:"health",name:"Ля какая вкусная и полезная морковочка, она добавила тебе +2 жизни",icon:r.k},{id:13,kind:"percent",name:"Черная кошка перебежала тебе дорогу, а ты суеверный, придется оббегать +10% к дороге",icon:r.l},{id:14,kind:"atack",name:"Вышло солнышко, зарядило тебя силой, +3к силе",icon:r.m},{id:15,kind:"health",name:"Тебя сбил истрибитель, упс... -1 жизнь",icon:r.u},{id:16,kind:"percent",name:"Ты встретил доброго Сергея, он подсказал тебе как сократить дорогу. -10% к дороге",icon:r.S},{id:17,kind:"health",name:"На тебя упал метеорит. -1 жизнь",icon:r.K},{id:18,kind:"atack",name:"Ммм.. пица! Скував ее ты стал сильнее!",icon:r.M},{id:19,kind:"atack",name:"Ты искупался в чернобыльской речке, и у тебя выросло еще 3 ноги, теперь ты быстрее бегаешь",icon:r.N}],u=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.a.getState().players.gameSchema.players,r=[],n.map((function(e,t){var n={};n.playerId=e.playerId,n.hp=e.health,n.icon=e.icon,n.name=e.name,n.gameHistory=e.gameHistory,n.gs=0,r.push(n)})),r=r.map((function(e){return e.gs+=1e3*e.hp,e.gameHistory.forEach((function(t){e.gs+=t.clicks>0?t.clicks/-10:-30})),e})),e.next=6,a.a.dispatch(Object(c.g)(r));case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var c=e.apply(t,n);function o(e){i(c,r,a,o,u,"next",e)}function u(e){i(c,r,a,o,u,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}(),s=function(e,t){return Math.round(Math.random()*(e+t))},l=[r.l,r.n,r.A,r.R,r.T,r.q,r.r,r.s,r.v,r.y,r.J,r.L,r.d,r.e,r.i,r.j,r.p,r.t,r.x,r.z,r.B,r.C,r.D,r.E,r.F,r.G]},408:function(e,t){},409:function(e,t){},410:function(e,t){},439:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(111),i=n(112),o=n(403),u=n(445);n(404);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=Object(r.lazy)((function(){return n.e(15).then(n.bind(null,442))})),g=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=d(t).call(this,e),n=!a||"object"!==s(a)&&"function"!=typeof a?m(r):a,h(m(n),"checkValidForm",(function(){var e=n.state.players,t=!0;e.length?e.map((function(e){(Object(c.isEmpty)(e.icon)||Object(c.isEmpty)(e.name))&&(t=!1)})):t=!1,n.setState(f({},n.state,{validForm:t}))})),h(m(n),"setPlayerField",(function(e,t,r){var a=[];(a=n.state.players.map((function(n){return n.playerId==e?(n[t]=r,n):n}))).map((function(e){(function(e){return null!=e.icon&&null!=e.name&&!Object(c.isEmpty)(e.name)})(e)})),n.setState(f({},n.state,{players:a}))})),h(m(n),"startGame",(function(){var e,t=n.state,r=t.hardLvl,a=t.hpSystem,c=t.startHpCount,i=t.players,o=t.circle,u=t.currentPlayer,s=t.activeGame,l=t.playedPlayers,p=t.diedPlayers,f=t.sortedTable,y=t.gameOver;e={players:i.map((function(e){return e.health=c,e.bafs=[],e.bafsObj={extraAtack:0,extraSpeed:0,extraPercent:0},e.atack=5,e.gameHistory=[],e})),hardLvl:r,hpSystem:a,circle:o,currentPlayer:u,activeGame:s,playedPlayers:l,diedPlayers:p,sortedTable:f,gameOver:y},n.props.startPlayersEditing(!1),n.props.setGameSchema(e)})),n.state={playersCount:[],players:[],hardLvl:1,hpSystem:0,startHpCount:3,circle:1,validForm:!1,currentPlayer:null,activeGame:!1,playedPlayers:[],diedPlayers:[],sortedTable:[],gameOver:!1},n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){var e=l(Array(parseInt(this.props.playersCount)).keys());e=e.map((function(e){return{playerId:e,icon:null,name:null,health:null}})),this.setState({playersCount:l(Array(parseInt(this.props.playersCount)).keys()),players:e})}},{key:"render",value:function(){var e=this,t=this.state,n=t.playersCount,r=t.players,c=t.validForm;return a.a.createElement("div",{className:"pick-hero-page"},a.a.createElement("h3",null,"pick your hero ",a.a.createElement("sup",null,"[ "+n.length," ~ Players "," ]")),a.a.createElement("h5",{className:"russian-text text-pulsing"},"Заполните пустые поля, и выберите иконки для каждого игрока!"),a.a.createElement("br",null),n.map((function(t,n){return a.a.createElement(k,{checkValidForm:e.checkValidForm,players:r,setPlayerField:e.setPlayerField,key:n,index:n})})),c&&a.a.createElement(u.a,{to:"/game"},a.a.createElement("button",{className:"btn _custom-width",onClick:function(){return e.startGame()}},a.a.createElement("label",{className:"btn-bg"}),a.a.createElement("span",null,"Start"))))}}])&&y(n.prototype,r),i&&y(n,i),t}(r.Component);t.default=Object(i.b)(null,{startPlayersEditing:o.h,setGameSchema:o.f})(g)}}]);
//# sourceMappingURL=8.index_bundle.js.map