webpackJsonp([0xa6cd3c51205b],{37:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),l=o(u),c=function(e){function t(){var n,o,i;r(this,t);for(var u=arguments.length,c=Array(u),s=0;s<u;s++)c[s]=arguments[s];return n=o=a(this,e.call.apply(e,[this].concat(c))),o.state={opacity:0},o.getElementY=function(e){return window.pageYOffset+document.querySelector(e).getBoundingClientRect().top},o.doScrolling=function(e,t){var n=window.pageYOffset,r=o.getElementY(e),a=document.body.scrollHeight-r<window.innerHeight?document.body.scrollHeight-window.innerHeight:r,i=a-n,u=function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},l=void 0;i&&window.requestAnimationFrame(function e(o){l||(l=o);var r=o-l,a=Math.min(r/t,1);a=u(a),window.scrollTo(0,n+i*a),r<t&&window.requestAnimationFrame(e)})},o.setTimer=function(){setTimeout(function(){return o.setState({opacity:1})},1500)},o.componentDidMount=function(){o.setTimer()},o.render=function(){var e={position:"absolute",bottom:"2rem",left:"50%",transform:"translateX(-50%)",color:"yellow",zIndex:"99",opacity:o.state.opacity,transition:"0.5s ease-in"};return l.default.createElement("div",{style:e},o.props.children,l.default.createElement("div",{onClick:function(){o.doScrolling("#"+o.props.anchorId,o.props.scrollSpeed)},className:"mouse"},l.default.createElement("div",{className:"scrollbutton"})))},i=n,a(o,i)}return i(t,e),t}(l.default.Component);t.default=c,e.exports=t.default},224:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=n(1),l=o(u),c=n(15),s=o(c),f=n(49),p=o(f),d=n(52),m=o(d),y=n(37),h=o(y),w=n(10),g=o(w),b=n(71),E=o(b),v=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.pathContext.tag,t=this.props.data.allMarkdownRemark.edges;return l.default.createElement("div",{style:{height:"100%"}},l.default.createElement(s.default,{title:'Merket med "'+e+'" | '+g.default.siteTitle}),l.default.createElement(m.default,{height:"opus"===t[0].node.frontmatter.category?"1":"2"},l.default.createElement("h1",null,"opus"===t[0].node.frontmatter.category?"Opus med":"Instrumentgruppe"),l.default.createElement("h2",null,e)),"opus"===t[0].node.frontmatter.category?l.default.createElement(h.default,{anchorId:"opus"===t[0].node.frontmatter.category?"treeView":"artistView",scrollSpeed:1e3}):null,l.default.createElement(p.default,{postEdges:t,view:"opus"===t[0].node.frontmatter.category?"treeView":"artistView",tags:e,img:E.default,title:'Posts tagged as "'+e+'"'}))},t}(l.default.Component);t.default=v;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-tag-jsx-ff0cb7ab33fd5748e2f0.js.map