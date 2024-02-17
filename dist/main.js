(()=>{"use strict";var n={248:(n,e,t)=>{t.d(e,{c:()=>g});var r=t(648),o=t.n(r),a=t(312),i=t.n(a),A=t(536),s=t.n(A),c=new URL(t(318),t.b),l=new URL(t(0),t.b),d=new URL(t(920),t.b),u=new URL(t(672),t.b),p=i()(o()),f=s()(c),m=s()(l),C=s()(d),B=s()(u);p.push([n.id,`\n@font-face {\n    font-family: 'ProtestRiot';\n    src: url(${f}) format('opentype');\n}\n\n@font-face {\n    font-family: 'Lato';\n    src: url(${m}) format('opentype');\n    font-weight: normal;\n}\n@font-face {\n    font-family: 'Lato';\n    src: url(${C}) format('opentype');\n    font-weight: bold;\n}\n@font-face {\n    font-family: 'Lato';\n    src: url(${B}) format('opentype');\n    font-weight: lighter;\n}\n\n`,"",{version:3,sources:["webpack://./fonts/fonts.css"],names:[],mappings:";AACA;IACI,0BAA0B;IAC1B,+DAAwD;AAC5D;;AAEA;IACI,mBAAmB;IACnB,+DAAiD;IACjD,mBAAmB;AACvB;AACA;IACI,mBAAmB;IACnB,+DAA8C;IAC9C,iBAAiB;AACrB;AACA;IACI,mBAAmB;IACnB,+DAA+C;IAC/C,oBAAoB;AACxB",sourcesContent:["\n@font-face {\n    font-family: 'ProtestRiot';\n    src: url('./ProtestRiot-Regular.ttf') format('opentype');\n}\n\n@font-face {\n    font-family: 'Lato';\n    src: url('./Lato-Regular.ttf') format('opentype');\n    font-weight: normal;\n}\n@font-face {\n    font-family: 'Lato';\n    src: url('./Lato-Bold.ttf') format('opentype');\n    font-weight: bold;\n}\n@font-face {\n    font-family: 'Lato';\n    src: url('./Lato-Light.ttf') format('opentype');\n    font-weight: lighter;\n}\n\n"],sourceRoot:""}]);const g=p},392:(n,e,t)=>{t.d(e,{c:()=>A});var r=t(648),o=t.n(r),a=t(312),i=t.n(a)()(o());i.push([n.id,"\nheader {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    width: 80%;\n    justify-content: center;\n    justify-items: center;\n    align-items: center;\n}\n\nheader h1 {\n    font-family: 'ProtestRiot';\n    font-size: 40px;\n    color: var(--nametext-clr);\n}\n\nnav {\n    display: flex;\n    flex-direction: row;\n    gap: 40px;\n    padding: 20px;\n    align-items: center;\n    border: 1px solid var(--navborder-clr);\n    border-radius: 40px;\n}\n\nnav button {\n    color: var(--navtext-clr);\n    font-size: 16px;\n    text-transform: uppercase;\n}\n\nnav button:hover {\n    cursor: pointer;\n    text-decoration: underline;\n}\n\n.selected {\n    text-decoration: underline;\n}\n","",{version:3,sources:["webpack://./styles/header.css"],names:[],mappings:";AACA;IACI,aAAa;IACb,kCAAkC;IAClC,UAAU;IACV,uBAAuB;IACvB,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,0BAA0B;IAC1B,eAAe;IACf,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,aAAa;IACb,mBAAmB;IACnB,sCAAsC;IACtC,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,0BAA0B;AAC9B;;AAEA;IACI,0BAA0B;AAC9B",sourcesContent:["\nheader {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    width: 80%;\n    justify-content: center;\n    justify-items: center;\n    align-items: center;\n}\n\nheader h1 {\n    font-family: 'ProtestRiot';\n    font-size: 40px;\n    color: var(--nametext-clr);\n}\n\nnav {\n    display: flex;\n    flex-direction: row;\n    gap: 40px;\n    padding: 20px;\n    align-items: center;\n    border: 1px solid var(--navborder-clr);\n    border-radius: 40px;\n}\n\nnav button {\n    color: var(--navtext-clr);\n    font-size: 16px;\n    text-transform: uppercase;\n}\n\nnav button:hover {\n    cursor: pointer;\n    text-decoration: underline;\n}\n\n.selected {\n    text-decoration: underline;\n}\n"],sourceRoot:""}]);const A=i},352:(n,e,t)=>{t.d(e,{c:()=>A});var r=t(648),o=t.n(r),a=t(312),i=t.n(a)()(o());i.push([n.id,".homeContainer {\n    display: grid;\n    grid-template-columns: auto auto 1fr;\n    grid-template-rows: auto auto;\n    justify-items: left;\n    align-items: center;\n    gap: 10px;\n    padding: 20px;\n}\n\n.heroTitle {\n    font-size: max(2rem, 4vw);;\n    grid-column: 1/3; \n    text-transform: uppercase;\n    font-family: 'Lato';\n    font-weight: bold;\n    width: 20ch;\n    color: var(--nametext-clr)\n}\n\n.heroText {\n    font-size: max(1rem, 1vw);\n    font-family: 'Lato';\n    font-weight: bold;\n    width: 50vw;\n    grid-row: 2;\n    grid-column: 1/3;\n    line-height: 2.5ch;\n    align-self: flex-start;\n}\n\n.heroImage {\n    grid-row: 1/3;\n    grid-column: 3;\n    width: 33vw;\n}\n\n.orderBtn {\n    font-family: 'Lato';\n    grid-column: 1/3;\n    justify-self: center;\n    font-weight: bold;\n    background-color: var(--nametext-clr);\n    font-size: max(1rem, 1vw);\n    padding: 20px;\n    text-transform: uppercase;\n    color: var(--bgr-clr);\n    border: 1px solid var(--nametext-clr);\n    border-radius: 30px;\n    box-shadow: -3px 3px 4px rgba(0, 0, 0, 0.37);\n}\n\n.orderBtn:hover {\n    cursor: pointer;\n}\n\n.orderBtn:active {\n    box-shadow:  none;\n    position: relative;\n    right: 3px;\n    top: 3px;\n}","",{version:3,sources:["webpack://./styles/home.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,oCAAoC;IACpC,6BAA6B;IAC7B,mBAAmB;IACnB,mBAAmB;IACnB,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,yBAAyB;IACzB,gBAAgB;IAChB,yBAAyB;IACzB,mBAAmB;IACnB,iBAAiB;IACjB,WAAW;IACX;AACJ;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;IACnB,iBAAiB;IACjB,WAAW;IACX,WAAW;IACX,gBAAgB;IAChB,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,cAAc;IACd,WAAW;AACf;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,oBAAoB;IACpB,iBAAiB;IACjB,qCAAqC;IACrC,yBAAyB;IACzB,aAAa;IACb,yBAAyB;IACzB,qBAAqB;IACrB,qCAAqC;IACrC,mBAAmB;IACnB,4CAA4C;AAChD;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,UAAU;IACV,QAAQ;AACZ",sourcesContent:[".homeContainer {\n    display: grid;\n    grid-template-columns: auto auto 1fr;\n    grid-template-rows: auto auto;\n    justify-items: left;\n    align-items: center;\n    gap: 10px;\n    padding: 20px;\n}\n\n.heroTitle {\n    font-size: max(2rem, 4vw);;\n    grid-column: 1/3; \n    text-transform: uppercase;\n    font-family: 'Lato';\n    font-weight: bold;\n    width: 20ch;\n    color: var(--nametext-clr)\n}\n\n.heroText {\n    font-size: max(1rem, 1vw);\n    font-family: 'Lato';\n    font-weight: bold;\n    width: 50vw;\n    grid-row: 2;\n    grid-column: 1/3;\n    line-height: 2.5ch;\n    align-self: flex-start;\n}\n\n.heroImage {\n    grid-row: 1/3;\n    grid-column: 3;\n    width: 33vw;\n}\n\n.orderBtn {\n    font-family: 'Lato';\n    grid-column: 1/3;\n    justify-self: center;\n    font-weight: bold;\n    background-color: var(--nametext-clr);\n    font-size: max(1rem, 1vw);\n    padding: 20px;\n    text-transform: uppercase;\n    color: var(--bgr-clr);\n    border: 1px solid var(--nametext-clr);\n    border-radius: 30px;\n    box-shadow: -3px 3px 4px rgba(0, 0, 0, 0.37);\n}\n\n.orderBtn:hover {\n    cursor: pointer;\n}\n\n.orderBtn:active {\n    box-shadow:  none;\n    position: relative;\n    right: 3px;\n    top: 3px;\n}"],sourceRoot:""}]);const A=i},256:(n,e,t)=>{t.d(e,{c:()=>A});var r=t(648),o=t.n(r),a=t(312),i=t.n(a)()(o());i.push([n.id,".menu {\n    display: grid;\n    width: 50vw;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 30px;\n}\n\n.menuSection {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-column: 2 / 3;\n    row-gap: 20px;\n}\n\n\n.menuTitle {\n    font-size: max(24px, 2vw);\n    font-family: 'ProtestRiot';\n    grid-column: 1 / 4;\n    justify-self: center;\n}\n\n.dishName {\n    grid-column: 1 / 2;\n    justify-self: left;\n}\n\n.dishPrice {\n    grid-column: 2 / 3;\n    justify-self: right;\n}\n\n.dishName, .dishPrice {\n    font-size: max(16px, 1vw);\n    font-family: 'Lato';\n    font-weight: bold;\n}\n\n.menuImage {\n    align-self: center;\n    justify-self: left;\n    max-width: 7vw;\n    grid-column: 3 / 4;\n}","",{version:3,sources:["webpack://./styles/menu.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,WAAW;IACX,kCAAkC;IAClC,SAAS;AACb;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,kBAAkB;IAClB,aAAa;AACjB;;;AAGA;IACI,yBAAyB;IACzB,0BAA0B;IAC1B,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,cAAc;IACd,kBAAkB;AACtB",sourcesContent:[".menu {\n    display: grid;\n    width: 50vw;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 30px;\n}\n\n.menuSection {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-column: 2 / 3;\n    row-gap: 20px;\n}\n\n\n.menuTitle {\n    font-size: max(24px, 2vw);\n    font-family: 'ProtestRiot';\n    grid-column: 1 / 4;\n    justify-self: center;\n}\n\n.dishName {\n    grid-column: 1 / 2;\n    justify-self: left;\n}\n\n.dishPrice {\n    grid-column: 2 / 3;\n    justify-self: right;\n}\n\n.dishName, .dishPrice {\n    font-size: max(16px, 1vw);\n    font-family: 'Lato';\n    font-weight: bold;\n}\n\n.menuImage {\n    align-self: center;\n    justify-self: left;\n    max-width: 7vw;\n    grid-column: 3 / 4;\n}"],sourceRoot:""}]);const A=i},420:(n,e,t)=>{t.d(e,{c:()=>A});var r=t(648),o=t.n(r),a=t(312),i=t.n(a)()(o());i.push([n.id,"\n/*reset style*/\nbutton {\n    border: none;\n    outline: none;\n    background: none;\n}\n\n/*reset style*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}","",{version:3,sources:["webpack://./styles/reset.css"],names:[],mappings:";AACA,cAAc;AACd;IACI,YAAY;IACZ,aAAa;IACb,gBAAgB;AACpB;;AAEA,cAAc;AACd;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB",sourcesContent:["\n/*reset style*/\nbutton {\n    border: none;\n    outline: none;\n    background: none;\n}\n\n/*reset style*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}"],sourceRoot:""}]);const A=i},904:(n,e,t)=>{t.d(e,{c:()=>A});var r=t(648),o=t.n(r),a=t(312),i=t.n(a)()(o());i.push([n.id,"\n:root {\n    --navtext-clr: #DA4438;\n    --navborder-clr: #da43389a;\n    --nametext-clr: #DA4438;\n    --bgr-clr: #fffade;\n}\n\n\n*, *::before, *::after {\n    box-sizing: border-box;\n    \n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    gap: 50px;\n    align-items: center;\n    justify-content: center;\n    background-color: var(--bgr-clr);\n    padding: 20px;\n}\n\n#content {\n    display: flex;\n    justify-content: center;\n}\n\n\n","",{version:3,sources:["webpack://./styles/style.css"],names:[],mappings:";AACA;IACI,sBAAsB;IACtB,0BAA0B;IAC1B,uBAAuB;IACvB,kBAAkB;AACtB;;;AAGA;IACI,sBAAsB;;AAE1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;IACnB,uBAAuB;IACvB,gCAAgC;IAChC,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B",sourcesContent:["\n:root {\n    --navtext-clr: #DA4438;\n    --navborder-clr: #da43389a;\n    --nametext-clr: #DA4438;\n    --bgr-clr: #fffade;\n}\n\n\n*, *::before, *::after {\n    box-sizing: border-box;\n    \n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    gap: 50px;\n    align-items: center;\n    justify-content: center;\n    background-color: var(--bgr-clr);\n    padding: 20px;\n}\n\n#content {\n    display: flex;\n    justify-content: center;\n}\n\n\n"],sourceRoot:""}]);const A=i},312:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var A=0;A<this.length;A++){var s=this[A][0];null!=s&&(i[s]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},536:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},648:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},596:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],A=0;A<n.length;A++){var s=n[A],c=r.base?s[0]+r.base:s[0],l=a[c]||0,d="".concat(c," ").concat(l);a[c]=l+1;var u=t(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var f=o(p,r);r.byIndex=A,e.splice(A,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var A=t(a[i]);e[A].references--}for(var s=r(n,o),c=0;c<a.length;c++){var l=t(a[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},176:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},808:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},120:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},520:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},936:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},920:(n,e,t)=>{n.exports=t.p+"636be8de934918e38ed9.ttf"},672:(n,e,t)=>{n.exports=t.p+"c7400fcad9e48ca9043f.ttf"},0:(n,e,t)=>{n.exports=t.p+"9d883d540ee2b4de8024.ttf"},318:(n,e,t)=>{n.exports=t.p+"8de441de7974346171db.ttf"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(596),e=t.n(n),r=t(520),o=t.n(r),a=t(176),i=t.n(a),A=t(120),s=t.n(A),c=t(808),l=t.n(c),d=t(936),u=t.n(d),p=t(420),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),e()(p.c,f),p.c&&p.c.locals&&p.c.locals;var m=t(904),C={};C.styleTagTransform=u(),C.setAttributes=s(),C.insert=i().bind(null,"head"),C.domAPI=o(),C.insertStyleElement=l(),e()(m.c,C),m.c&&m.c.locals&&m.c.locals;var B=t(392),g={};g.styleTagTransform=u(),g.setAttributes=s(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),e()(B.c,g),B.c&&B.c.locals&&B.c.locals;var h=t(248),b={};b.styleTagTransform=u(),b.setAttributes=s(),b.insert=i().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=l(),e()(h.c,b),h.c&&h.c.locals&&h.c.locals;var y=t(352),I={};I.styleTagTransform=u(),I.setAttributes=s(),I.insert=i().bind(null,"head"),I.domAPI=o(),I.insertStyleElement=l(),e()(y.c,I),y.c&&y.c.locals&&y.c.locals;const v=t.p+"1db36269ecd1262fa64c.png",x=()=>{const n=document.createElement("div"),e=((n="Savor culinary excellence at our restaurant, where every dish is a masterpiece and every bite a journey of flavor. Experience the perfect blend of ambiance, taste, and hospitality in every visit.")=>{const e=document.createElement("p");return e.textContent=n,e.classList.add("heroText"),e})(),t=((n="Your favourite meal just a click away!")=>{const e=document.createElement("h2");return e.textContent=n,e.classList.add("heroTitle"),e})(),r=((n=v)=>{const e=new Image;return e.src=n,e.alt="A sushi plate.",e.classList.add("heroImage"),e})(),o=((n="Order now!")=>{const e=document.createElement("button");return e.textContent=n,e.classList.add("orderBtn"),e})();return n.classList.add("homeContainer"),n.appendChild(t),n.appendChild(r),n.appendChild(e),n.append(o),n};var w=t(256),k={};k.styleTagTransform=u(),k.setAttributes=s(),k.insert=i().bind(null,"head"),k.domAPI=o(),k.insertStyleElement=l(),e()(w.c,k),w.c&&w.c.locals&&w.c.locals;const E=t.p+"10bf9016e1df55b374cb.png",L=t.p+"7def28abbc0c93027bc2.png",j={Salmon:"€2/pz",Tuna:"€2/pz",Scallop:"2,5€/pz",Bass:"2,5€/pz","Red shrimp":"3€/pz","Blue shrimp":"3€/pz"},S={Salmon:"€2/pz",Tuna:"€2/pz",Scallop:"2€/pz",Bass:"2,5€/pz","Red shrimp":"2,5€/pz","Blue shrimp":"3€/pz"};function z(n,e){const t=document.createElement("div");t.classList.add("menuSection");const r=document.createElement("h3");r.classList.add("menuTitle"),r.textContent=n,t.appendChild(r);for(const[n,r]of Object.entries(e)){const e=document.createElement("p"),o=document.createElement("p");e.textContent=n,o.textContent=r,e.classList.add("dishName"),o.classList.add("dishPrice"),t.appendChild(e),t.appendChild(o)}return t}function T(n){const e=new Image;return e.src=n,e.classList.add("menuImage"),e}function q(){const n=document.querySelector("#content");if(this){if(!this.classList.contains("selected"))switch(function(){const n=document.querySelector("#content").firstChild;n&&n.parentNode.removeChild(n)}(),document.querySelector(".selected").classList.toggle("selected"),this.classList.toggle("selected"),this.id){case"homeBtn":n.appendChild(x());break;case"menuBtn":n.appendChild(function(){const n=document.createElement("div");n.classList.add("menu");const e=z("Nigiri",S),t=z("Sashihmi",j),r=T(E),o=T(L);return n.appendChild(e),n.appendChild(r),n.appendChild(t),n.appendChild(o),n}())}}else n.appendChild(x()),document.querySelector("#homeBtn").classList.add("selected")}document.querySelectorAll("nav button").forEach((n=>n.addEventListener("click",q))),q()})()})();
//# sourceMappingURL=main.js.map