webpackJsonp([0xa2a130d54a59],{218:function(t,e,r){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0,e.pageQuery=void 0;var o=r(1),s=a(o),u=r(15),c=a(u),f=r(50),p=a(f),d=r(10),h=(a(d),r(52)),g=a(h),y=r(49),m=a(y),E=r(11),b=(a(E),r(71)),v=a(b),k=r(1499),w=a(k),T=r(6),A=(a(T),function(t){function e(){var r,a,l;n(this,e);for(var o=arguments.length,s=Array(o),u=0;u<o;u++)s[u]=arguments[u];return r=a=i(this,t.call.apply(t,[this].concat(s))),a.state={artistType:"alle"},l=r,i(a,l)}return l(e,t),e.prototype.getTagsList=function(){var t=[];this.props.data.allMarkdownRemark.edges.forEach(function(e){t.push(e.node.frontmatter.tags)});var e=function(t){var e={};t.forEach(function(t){e[t]=0});var r=t.filter(function(t){return 1==++e[t]});return r.sort(function(t,r){return e[r]-e[t]})};return e(t)},e.prototype.handleArtistClick=function(t){this.state.artistType!==t.target.id&&this.setState({artistType:t.target.id})},e.prototype.render=function(){var t=this,e=this.props.data.allMarkdownRemark.edges,r=this.getTagsList(),a={background:"#a0a0a0"};return s.default.createElement("div",{className:" artist-container"},s.default.createElement(c.default,{title:"Artister | #NRKGRIEG"}),s.default.createElement(p.default,{postEdges:e,pageImg:w.default}),s.default.createElement(g.default,{height:"2"},s.default.createElement("h1",null,"#NRKGRIEG"),s.default.createElement("h2",null,"Artister")),s.default.createElement("div",{className:"flex center tag-container"},s.default.createElement("h4",{onClick:function(e){return t.handleArtistClick(e)},id:"alle",style:"alle"===this.state.artistType?a:null},"Alle"),r.map(function(e,r){return s.default.createElement("h4",{onClick:function(e){return t.handleArtistClick(e)},id:e,key:r,style:t.state.artistType===e?a:null},e)})),s.default.createElement(m.default,{postEdges:e,view:"artistView",title:"Artister",artistType:this.state.artistType,img:v.default}))},e}(s.default.Component));e.default=A;e.pageQuery="** extracted graphql fragment **"},1499:function(t,e,r){t.exports=r.p+"static/GriegPageImg.bc7e28ce.jpg"}});
//# sourceMappingURL=component---src-pages-artister-jsx-629d9c56683a55ea501d.js.map