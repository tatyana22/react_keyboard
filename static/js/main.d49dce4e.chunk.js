(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(3),s=n.n(a),r=n(4),c=n(5),o=n(7),i=n(6),u=n(1),p=n.n(u),y=n(0),d=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={key:""},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("keyup",(function(t){e.setState({key:t.key})}))}},{key:"componentWillUnmount",value:function(){var e=this;window.removeEventListener("keyup",(function(t){e.setState({key:t.key})}))}},{key:"render",value:function(){var e=this.state.key;return Object(y.jsx)("div",{className:"App",children:Object(y.jsxs)("p",{className:"App__message",children:[""===e?"Nothing was pressed yet":"The last pressed key is [".concat(e,"]")," "]})})}}]),n}(p.a.Component);n(13);s.a.render(Object(y.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d49dce4e.chunk.js.map