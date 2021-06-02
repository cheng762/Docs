(self.webpackChunk=self.webpackChunk||[]).push([[8799],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9755:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>l,metadata:()=>i,toc:()=>s,default:()=>u});var n=a(2122),o=a(9756),r=(a(7294),a(3905)),l={id:"lat_introduced",title:"Intro to LAT",sidebar_label:"Intro to LAT"},i={unversionedId:"lat_introduced",id:"lat_introduced",isDocsHomePage:!1,title:"Intro to LAT",description:"What is LAT ? How to get LAT?",source:"@site/../docs/LAT\u4ecb\u7ecd.md",sourceDirName:".",slug:"/lat_introduced",permalink:"/docs/en/lat_introduced",editUrl:"https://github.com/PlatONnetwork/docs/tree/v2/docs/LAT\u4ecb\u7ecd.md",version:"current",sidebar_label:"Intro to LAT",frontMatter:{id:"lat_introduced",title:"Intro to LAT",sidebar_label:"Intro to LAT"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/en/"},next:{title:"Staking&Delegation",permalink:"/docs/en/staking_and_delegation"}},s=[{value:"What is LAT ? How to get LAT?",id:"what-is-lat--how-to-get-lat",children:[]},{value:"What&#39;s unique about LAT?",id:"whats-unique-about-lat",children:[]},{value:"How to manage LAT?",id:"how-to-manage-lat",children:[]},{value:"Where to browse LAT transactions?",id:"where-to-browse-lat-transactions",children:[]}],p={toc:s};function u(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-lat--how-to-get-lat"},"What is LAT ? How to get LAT?"),(0,r.kt)("p",null,"LAT is the native token of PlatON Network. It is a digital currency. You can transfer it through the PlatON network or use applications built on PlatON with LATs."),(0,r.kt)("p",null,"Currently, you can obtain LAT by participating in the ",(0,r.kt)("a",{parentName:"p",href:"https://latticex.foundation/grants"},"Grants Program")," supported by the LatticeX Foundation, Or you can follow up other community development programs to obtain LAT."),(0,r.kt)("h2",{id:"whats-unique-about-lat"},"What's unique about LAT?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"LAT fuels and secures PlatON")),(0,r.kt)("p",null,"When you transfer LAT or use a PlatON application, you need to pay a small LAT as fee. The fee is used to incentivizes the node to process and verify your transaction."),(0,r.kt)("p",null,"In the PPOS mechanism, LAT is of great importance to the network. With LAT, one can delegate to validators or become a validator by staking themselves, which help maintain PlatON network security.  Both the validators and delegators can get LAT rewards. ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/PlatON_Validation_Introduce"},"More about PlatON validators"),"."),(0,r.kt)("p",null,"If you want to know more about the economic mechanism of LAT, ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/Economic_Model#platons-economic-solution"},"click for more inforamtion"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"LAT acts as medium of data trading market")),(0,r.kt)("p",null,"As a payment medium, LATs are used to settle trades in the PlatON market for data and computing power. Participants in the PlatON computation network earn LATs by providing data usage, computing power, and algorithms."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"LAT supports the development of PlatON DApp ecology")),(0,r.kt)("p",null,"PlatON will further support the development of DApps and DeFi and introduce economic coupling designs for DApps and DeFi. For example, DApps can issue their own tokens which must be backed by LAT reserves.\nPlatON will also support the development of stable coins collateralized by LAT."),(0,r.kt)("h2",{id:"how-to-manage-lat"},"How to manage LAT?"),(0,r.kt)("p",null,"PlatON Wallet is an application for users to manage LAT asstes and interact with PlatON DApps. Users can easily hold or transfer LAT through the wallet."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Get a PlatON wallet")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.platon.network/en/developer/#aton"},"ATON")," -  Mobile app wallet designed for iOS and Android platforms")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/AlayaNetwork/Samurai"},"Samurai")," -  Web browser plugin wallet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://cobo.com/"},"Cobo"),"  - Mobile app wallet supporting multiple public chains"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: The above information is only a summary of resources and it does not mean that we are responsible for the security of the wallet"),".\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"keeping your LAT safe")),(0,r.kt)("p",null,"PlatON and LAT aren't controlled by any organizatio - they are decentralized. Therefore,LAT is open to everyone to use, which also means that you need to take the security of your funds seriously."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Responsible for your own funds")),(0,r.kt)("p",null,"Centralized exchanges will link your wallet to a username and password that you can recover in a traditional way. You need to choose a trustworthy and safe exchange. If that exchange is attacked  or folds, down, your funds are at risk."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Backup mnemonic & private key")),(0,r.kt)("p",null,"Wallets will often give you a seed phrase  or private key that you must write down somewhere safe. This is the only way you\u2019ll be able to recover your wallet."),(0,r.kt)("p",null,"Examples of mnemonic words:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"enlist goriia raw juice disagree toy kite tube behave video unusual may")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Don\u2019t store it on a computer. Write it down and keep it safe.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check everything carefully")),(0,r.kt)("p",null,"Please keep in mind that once a transaction is done, it cannot be reversed. a lost wallet cannot be easily retrieved. You cannot be too cautious."),(0,r.kt)("p",null,"Want to learn more about wallet security?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://support.mycrypto.com/staying-safe/protecting-yourself-and-your-funds"},"Protecting Yourself and Your Funds")," ",(0,r.kt)("em",{parentName:"li"},"Updated often - MyCrypto")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.coinbase.com/the-keys-to-keeping-your-crypto-safe-96d497cce6cf"},"The keys to keeping your crypto safe")," ",(0,r.kt)("em",{parentName:"li"},"Jan 16, 2019 - Coinbase blog"))),(0,r.kt)("h2",{id:"where-to-browse-lat-transactions"},"Where to browse LAT transactions?"),(0,r.kt)("p",null,"With the growth of network utilization, there will be more and more valuable information in the data on the chain. The block explorer can provide you with real-time data of browsing blocks, transactions, accounts, nodes and other activities on the chain."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://scan.platon.network/"},"PlatScan")," - PlatON blockchain explorer and analysis platform, available in English and Chinese.")))}u.isMDXComponent=!0}}]);