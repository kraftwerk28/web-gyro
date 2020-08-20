!function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n){t.appendChild(n)}function s(t,n,e){t.insertBefore(n,e||null)}function u(t){t.parentNode.removeChild(t)}function a(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function l(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function h(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let p;function g(t){p=t}const m=[],$=[],b=[],y=[],v=Promise.resolve();let _=!1;function x(t){b.push(t)}let k=!1;const w=new Set;function E(){if(!k){k=!0;do{for(let t=0;t<m.length;t+=1){const n=m[t];g(n),M(n.$$)}for(m.length=0;$.length;)$.pop()();for(let t=0;t<b.length;t+=1){const n=b[t];w.has(n)||(w.add(n),n())}b.length=0}while(m.length);for(;y.length;)y.pop()();_=!1,k=!1,w.clear()}}function M(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(x)}}const L=new Set;function j(t,n){-1===t.$$.dirty[0]&&(m.push(t),_||(_=!0,v.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function q(c,i,s,a,l,f,d=[-1]){const h=p;g(c);const m=i.props||{},$=c.$$={fragment:null,ctx:null,props:f,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:e(),dirty:d,skip_bound:!1};let b=!1;if($.ctx=s?s(c,m,(t,n,...e)=>{const o=e.length?e[0]:n;return $.ctx&&l($.ctx[t],$.ctx[t]=o)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](o),b&&j(c,t)),n}):[],$.update(),b=!0,o($.before_update),$.fragment=!!a&&a($.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);$.fragment&&$.fragment.l(t),t.forEach(u)}else $.fragment&&$.fragment.c();i.intro&&((y=c.$$.fragment)&&y.i&&(L.delete(y),y.i(v))),function(t,e,c){const{fragment:i,on_mount:s,on_destroy:u,after_update:a}=t.$$;i&&i.m(e,c),x(()=>{const e=s.map(n).filter(r);u?u.push(...e):o(e),t.$$.on_mount=[]}),a.forEach(x)}(c,i.target,i.anchor),E()}var y,v;g(h)}let A=["Front","Back","Left","Right","Top","Bottom"];const O=[[-90,0,0],[90,0,180],[0,-90,90],[0,90,-90],[0,0,0],[0,180,0]],S=["translateZ(100px)"];function P(t){return`transform: ${n=O[t],`rotateX(${n[0]}deg) rotateY(${n[1]}deg) rotateZ(${n[2]}deg)`} ${S.join(" ")}`;var n}function B(t){return Math.round(100*t).toString()/100}const N=[];function T(t,n){return{subscribe:Z(t,n).subscribe}}function Z(n,e=t){let o;const r=[];function i(t){if(c(n,t)&&(n=t,o)){const t=!N.length;for(let t=0;t<r.length;t+=1){const e=r[t];e[1](),N.push(e,n)}if(t){for(let t=0;t<N.length;t+=2)N[t][0](N[t+1]);N.length=0}}}return{set:i,update:function(t){i(t(n))},subscribe:function(c,s=t){const u=[c,s];return r.push(u),1===r.length&&(o=e(i)||t),c(n),()=>{const t=r.indexOf(u);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}const C=["accelerometer","gyroscope","magnetometer"];const I=T([0,0,0],(function(t){function n({alpha:n,beta:e,gamma:o}){t([e,o,n])}return window.addEventListener("deviceorientation",n),()=>{window.removeEventListener("deviceorientation",n)}})),X=T([0,0,0],(function(t){let n;function e(){t(function(t){const[n,e,o,r]=t,c=2*(r*n+e*o),i=1-2*(n*n+e*e),s=Math.atan2(c,i),u=2*(r*e-o*n);let a;a=Math.abs(u)>=1?Math.copysign(M_PI/2,u):Math.asin(u);const l=2*(r*o+n*e),f=1-2*(e*e+o*o);return[s,a,Math.atan2(l,f)].map(t=>180*t/Math.PI)}(this.quaternion))}return async function(){const t=C.map(t=>navigator.permissions.query({name:t}));return(await Promise.all(t)).every(t=>"granted"===t.state)}().then(t=>{t&&(n=new AbsoluteOrientationSensor({frequency:60}),n.addEventListener("reading",e),n.start())}),()=>{n&&(n.stop(),n.removeEventListener("reading",e))}}));function Y(t,n,e){const o=t.slice();return o[6]=n[e].name,o[7]=n[e].style,o[8]=n[e].cl,o[10]=e,o}function F(t,n,e){const o=t.slice();return o[11]=n[e],o[10]=e,o}function R(t){let n,e,o,r,c=B(t[3][t[10]])+"";return{c(){n=l("span"),e=f(t[11]),o=f(": "),r=f(c)},m(t,c){s(t,n,c),i(n,e),i(n,o),i(n,r)},p(t,n){8&n&&c!==(c=B(t[3][t[10]])+"")&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(r,c)},d(t){t&&u(n)}}}function U(n){let e,o,r,c,a=n[6]+"";return{c(){e=l("div"),o=f(a),h(e,"style",r=n[7]),h(e,"class",c=n[8])},m(t,n){s(t,e,n),i(e,o)},p:t,d(t){t&&u(e)}}}function z(n){let e,o,r,c,p,g,m,$,b,y,v,_=["α","β","γ"],x=[];for(let t=0;t<3;t+=1)x[t]=R(F(n,_,t));let k=n[4],w=[];for(let t=0;t<k.length;t+=1)w[t]=U(Y(n,k,t));return{c(){e=l("div"),o=l("label"),r=f("Use absolute sensor:\n    "),c=l("input"),p=d();for(let t=0;t<3;t+=1)x[t].c();g=d(),m=l("div"),$=l("div"),b=l("div");for(let t=0;t<w.length;t+=1)w[t].c();h(c,"type","checkbox"),h(e,"class","info"),h(b,"style",n[2]),h(b,"class","cube"),h($,"class","cube-container"),h(m,"class","app-container")},m(t,u){s(t,e,u),i(e,o),i(o,r),i(o,c),c.checked=n[0],i(e,p);for(let t=0;t<3;t+=1)x[t].m(e,null);s(t,g,u),s(t,m,u),i(m,$),i($,b);for(let t=0;t<w.length;t+=1)w[t].m(b,null);var a,l,f,d;y||(a=c,l="change",f=n[5],a.addEventListener(l,f,d),v=()=>a.removeEventListener(l,f,d),y=!0)},p(t,[n]){if(1&n&&(c.checked=t[0]),8&n){let o;for(_=["α","β","γ"],o=0;o<3;o+=1){const r=F(t,_,o);x[o]?x[o].p(r,n):(x[o]=R(r),x[o].c(),x[o].m(e,null))}for(;o<3;o+=1)x[o].d(1)}if(16&n){let e;for(k=t[4],e=0;e<k.length;e+=1){const o=Y(t,k,e);w[e]?w[e].p(o,n):(w[e]=U(o),w[e].c(),w[e].m(b,null))}for(;e<w.length;e+=1)w[e].d(1);w.length=k.length}4&n&&h(b,"style",t[2])},i:t,o:t,d(t){t&&u(e),a(x,t),t&&u(g),t&&u(m),a(w,t),y=!1,v()}}}function D(n,e,o){let r,c=t,i=()=>(c(),c=function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(s,t=>o(3,r=t)),s);n.$$.on_destroy.push(()=>c());let s,u,a=!0,l=A.map((t,n)=>({name:t,cl:"cube-face-"+(n+1),style:P(n)}));return n.$$.update=()=>{var t;1&n.$$.dirty&&i(o(1,s=a?X:I)),8&n.$$.dirty&&o(2,u=["transform:",`rotateX(${(t=r)[0]}deg)`,`rotateY(${-t[1]}deg)`,`rotateZ(${t[2]}deg)`].join(" "))},[a,s,u,r,l,function(){a=this.checked,o(0,a)}]}new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),q(this,t,D,z,c,{})}}({target:document.querySelector("#root")})}();