(self.webpackChunk=self.webpackChunk||[]).push([[8056],{546:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n=r(2122),a=r(9756),l=r(7294),o=r(6010),c=r(6742),s=r(6700),i=r(2263),u=r(4996);const m="footerLogoLink_qW4Z";var f=r(8465);function d(e){var t=e.to,r=e.href,o=e.label,s=e.prependBaseUrlToHref,i=(0,a.Z)(e,["to","href","label","prependBaseUrlToHref"]),m=(0,u.Z)(t),f=(0,u.Z)(r,{forcePrependBaseUrl:!0});return l.createElement(c.Z,(0,n.Z)({className:"footer__link-item"},r?{href:s?f:r}:{to:m},i),o)}var h=function(e){var t=e.sources,r=e.alt;return l.createElement(f.Z,{className:"footer__logo",alt:r,sources:t})},g=!1;function p(){return(0,l.useEffect)((function(){if(!g){var e=document.createElement("script");e.src="https://buttons.github.io/buttons.js",document.body.appendChild(e),g=!0}}),[]),l.createElement("div",{className:"gitstar"},l.createElement("a",{className:"github-button",href:"https://github.com/PlatONnetwork/PlatON-Go","data-color-scheme":"no-preference: light; light: light; dark: light;","data-icon":"octicon-star","data-size":"small","data-show-count":"true","aria-label":"Star PlatONnetwork/PlatON-Go on GitHub"},"Star"))}const b=function(){var e=(0,s.LU)().footer,t=e||{},r=t.copyright,n=t.links,a=void 0===n?[]:n,f=t.logo,g=void 0===f?{}:f,b=(0,i.default)().i18n,v={light:(0,u.Z)(g.src),dark:(0,u.Z)(g.srcDark||g.src)};return e?("en"!==b.currentLocale&&a.map((function(e){e.items.map((function(e){e.hrefzh&&(e.href=e.hrefzh)}))})),l.createElement("footer",{className:(0,o.Z)("footer",{"footer--dark":"dark"===e.style})},l.createElement("div",{className:"container"},a&&a.length>0&&l.createElement("div",{className:"row footer__links"},a.map((function(e,t){return l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):e.img?l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement("a",{href:e.href,target:"_blank",className:"footer-logo-home",rel:"noreferrer noopener"},l.createElement("img",{src:(0,u.Z)(e.img),width:"66",height:"58"}))):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(d,e))}))):null)})),l.createElement(p,null)),(g||r)&&l.createElement("div",{className:"footer__bottom text--center"},g&&(g.src||g.srcDark)&&l.createElement("div",{className:"margin-bottom--sm"},g.href?l.createElement(c.Z,{href:g.href,className:m},l.createElement(h,{alt:g.alt,sources:v})):l.createElement(h,{alt:g.alt,sources:v})),r?l.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:r}}):null)))):null}},532:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(2122),a=r(9756),l=r(7294),o=r(5525),c=(r(3264),r(2263)),s=r(5977);const i=function(){var e=(0,c.default)(),t=e.siteConfig,r=t.baseUrl,n=t.url,a=e.i18n,l=a.defaultLocale,o=a.currentLocale,i=(0,s.TH)().pathname,u=o===l?r:r.replace("/"+o+"/","/"+l+"/"),m=i.replace(r,"");return{createUrl:function(e){var t=e.locale;return""+(e.fullyQualified?n:"")+function(e){return e===l?""+u:""+u.replace("/"+l+"/","/"+e+"/")}(t)+m}}};function u(e){var t=e.mobile,r=e.dropdownItemsBefore,s=e.dropdownItemsAfter,u=(0,a.Z)(e,["mobile","dropdownItemsBefore","dropdownItemsAfter"]),m=(0,c.default)().i18n,f=m.currentLocale,d=m.locales,h=m.localeConfigs,g=i();function p(e){return h[e].label}var b=d.map((function(e){var t="pathname://"+g.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:p(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===f?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),v=[].concat(r,b,s),E=t?"Languages":p(f);return l.createElement(o.Z,(0,n.Z)({},u,{href:"#",mobile:t,label:l.createElement("span",null,E),items:v}))}},6979:(e,t,r)=>{"use strict";r.d(t,{Z:()=>k});var n=r(2122),a=r(9756),l=r(7294),o=r(3935),c=r(2263),s=r(5977),i=(r(4996),r(6742)),u=r(9105),m=r(6397),f=r(7052),d=r(6747),h=r(5613),g=r(4973),p=null;function b(e){var t=e.hit,r=e.children;return l.createElement(i.Z,{to:t.url,autoAddBaseUrl:!1,target:"_self"},r)}function v(e){var t=e.state,r=e.onClose,n=(0,m.Z)().generateSearchPageLink;return l.createElement(i.Z,{to:n(t.query),onClick:r},"See all ",t.context.nbHits," results")}function E(e){var t,i,m=e.contextualSearch,E=(0,a.Z)(e,["contextualSearch"]),k=(0,c.default)().siteMetadata,_=(0,h.Z)(),Z=null!=(t=null==(i=E.searchParameters)?void 0:i.facetFilters)?t:[],N=m?[].concat(_,Z):Z,C=Object.assign({},E.searchParameters,{facetFilters:N}),y=((0,s.k6)(),(0,l.useRef)(null)),w=(0,l.useRef)(null),S=(0,l.useState)(!1),P=S[0],L=S[1],A=(0,l.useState)(null),I=A[0],B=A[1],O=(0,l.useCallback)((function(){return p?Promise.resolve():Promise.all([r.e(3763).then(r.bind(r,3763)),Promise.all([r.e(532),r.e(6945)]).then(r.bind(r,6945)),Promise.all([r.e(532),r.e(9846)]).then(r.bind(r,9846))]).then((function(e){var t=e[0].DocSearchModal;p=t}))}),[]),U=(0,l.useCallback)((function(){O().then((function(){y.current=document.createElement("div"),document.body.insertBefore(y.current,document.body.firstChild),L(!0)}))}),[O,L]),T=(0,l.useCallback)((function(){L(!1),y.current.remove()}),[L]),H=(0,l.useCallback)((function(e){O().then((function(){L(!0),B(e.key)}))}),[O,L,B]),x=(0,l.useRef)({navigate:function(e){var t=e.itemUrl;window.location.assign(t)}}).current,M=(0,l.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:""+window.location.origin+t.pathname+t.hash})}))})).current,R=(0,l.useMemo)((function(){return function(e){return l.createElement(v,(0,n.Z)({},e,{onClose:T}))}}),[T]),F=(0,l.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",k.docusaurusVersion),e}),[k.docusaurusVersion]);(0,f.D)({isOpen:P,onOpen:U,onClose:T,onInput:H,searchButtonRef:w});var z=(0,g.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return l.createElement(l.Fragment,null,l.createElement(u.Z,null,l.createElement("link",{rel:"preconnect",href:"https://"+E.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),l.createElement(d.a,{onTouchStart:O,onFocus:O,onMouseOver:O,onClick:U,ref:w,translations:{buttonText:z,buttonAriaLabel:z}}),P&&(0,o.createPortal)(l.createElement(p,(0,n.Z)({onClose:T,initialScrollY:window.scrollY,initialQuery:I,navigator:x,transformItems:M,hitComponent:b,resultsFooterComponent:R,transformSearchClient:F},E,{searchParameters:C})),y.current))}const k=function(){var e=(0,c.default)().siteConfig;return l.createElement(E,e.themeConfig.algolia)}}}]);