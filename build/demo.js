!function(e){function t(t){for(var r,a,u=t[0],i=t[1],c=t[2],p=0,s=[];p<u.length;p++)a=u[p],o[a]&&s.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(f&&f(t);s.length;)s.shift()();return l.push.apply(l,c||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(l.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={1:0,2:0},l=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var f=i;l.push([5,0]),n()}({10:function(e,t,n){},2:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),l=n(1),a=n.n(l);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,f(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o.a.Component),function(e,t,n){t&&i(e.prototype,t),n&&i(e,n)}(t,[{key:"render",value:function(){var e=null;return this.props.if&&(e=this.props.children),o.a.createElement(o.a.Fragment,null,e)}}]),t}();s.propTypes={children:a.a.node,if:a.a.any},s.defaultProps={children:null,if:!1},t.default=s},5:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),l=n(4),a=n.n(l),u=(n(10),n(2));function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,p(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,o.a.Component),function(e,t,n){t&&c(e.prototype,t),n&&c(e,n)}(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"example"},'Using a "truthy" condition will cause the <Render> tag to render the content.',o.a.createElement("br",null),o.a.createElement("br",null),"<Render if={truthy}>",o.a.createElement("br",null),"    <p>",o.a.createElement("br",null),"        A truthy condition will render this text.",o.a.createElement("br",null),"    </p>",o.a.createElement("br",null),"</Render>",o.a.createElement("br",null),o.a.createElement("br",null)),"Will render the line below:",o.a.createElement("br",null),o.a.createElement(u.default,{if:!0},o.a.createElement("p",{className:"text"},"A truthy condition will render this text.")),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("p",{className:"example"},'Using a "falsy" condition will cause the <Render> tag to NOT render the content.',o.a.createElement("br",null),o.a.createElement("br",null),"<Render if={falsy}>",o.a.createElement("br",null),"    <p>",o.a.createElement("br",null),"        A falsy condition will NOT render this text.",o.a.createElement("br",null),"    </p>",o.a.createElement("br",null),"</Render>",o.a.createElement("br",null),o.a.createElement("br",null)),"Will not render any text below (ie. this is the last line of the demo!):",o.a.createElement("br",null),o.a.createElement(u.default,{if:!1},o.a.createElement("p",{className:"text"},"A falsy condition will NOT render this text")))}}]),t}(),y=document.getElementById("root");a.a.render(o.a.createElement(b,null),y)}});