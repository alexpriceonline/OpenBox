!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("OpenBox",[],t):"object"==typeof exports?exports.OpenBox=t():e.OpenBox=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var u=n[o]={exports:{},id:o,loaded:!1};return e[o].call(u.exports,u,u.exports,t),u.loaded=!0,u.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fromNullable=t.Right=t.Left=t.Box=void 0;var o=n(1),u=n(4);t.Box=o.Box,t.Left=o.Left,t.Right=o.Right,t.fromNullable=u.fromNullable},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Right=t.Left=t.Box=void 0;var u=n(2),r=o(u),f=n(3);t.Box=r.default,t.Left=f.Left,t.Right=f.Right},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function e(t){return{map:function(n){return e(n(t))},fold:function(e){return e(t)},inspect:function(){return"Box("+t+")"}}};t.default=n,e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function e(t){return{map:function(n){return e(n(t))},fold:function(e,n){return n(t)},inspect:function(){return"Right("+t+")"}}},o=function e(t){return{map:function(n){return e(t)},fold:function(e,n){return e(t)},inspect:function(){return"Left("+t+")"}}};t.Left=o,t.Right=n},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.fromNullable=void 0;var u=n(5),r=o(u);t.fromNullable=r.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=function(e){return null!=e?(0,o.Right)(e):(0,o.Left)(null)};t.default=u,e.exports=t.default}])});