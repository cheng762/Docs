(self.webpackChunk=self.webpackChunk||[]).push([[9534],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,h=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1702:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,metadata:()=>s,toc:()=>i,default:()=>u});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),l={id:"PRC20_contract",title:"PRC-20",sidebar_label:"PRC-20"},s={unversionedId:"PRC20_contract",id:"PRC20_contract",isDocsHomePage:!1,title:"PRC-20",description:"PRC-20 Contract",source:"@site/../docs/prc-20.md",sourceDirName:".",slug:"/PRC20_contract",permalink:"/docs/en/PRC20_contract",editUrl:"https://github.com/PlatONnetwork/docs/tree/v2/docs/prc-20.md",version:"current",sidebar_label:"PRC-20",frontMatter:{id:"PRC20_contract",title:"PRC-20",sidebar_label:"PRC-20"},sidebar:"docs",previous:{title:"Samurai API",permalink:"/docs/en/Samurai_API"},next:{title:"PRC-721",permalink:"/docs/en/PRC721_contract"}},i=[{value:"PRC-20 Contract",id:"prc-20-contract",children:[{value:"Standards",id:"standards",children:[]},{value:"Implementation",id:"implementation",children:[]},{value:"View",id:"view",children:[]},{value:"Deploy",id:"deploy",children:[]},{value:"Invoking functions",id:"invoking-functions",children:[]}]}],c={toc:i};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prc-20-contract"},"PRC-20 Contract"),(0,o.kt)("p",null,"PRC-20 is a set of standards for implementing token APIs on PlatON through smart contracts. It provides functions including interfaces for token transfers, querying token balances, and the total supply of tokens available on the network, and is fully compatible with ",(0,o.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-20"},"ERC-20"),"."),(0,o.kt)("h3",{id:"standards"},"Standards"),(0,o.kt)("p",null,"The PRC-20 introduces a standard for Fungible Tokens, in other words, they have a property that makes each Token be exactly the same (in type and value) of another Token. For example, an PRC-20 Token acts just like the ETH, meaning that 1 Token is and will always be equal to all the other Tokens.\nIf a Smart Contract implements the following methods and events it can be called an PRC-20 Token Contract and, once deployed, it will be responsible to keep track of the created tokens on PlatON."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"contract PRC20 {\n\n    //required\n    function totalSupply() constant returns (uint theTotalSupply);\n    function balanceOf(address _owner) constant returns (uint balance);\n    function transfer(address _to, uint _value) returns (bool success);\n    function transferFrom(address _from, address _to, uint _value) returns (bool success);\n    function approve(address _spender, uint _value) returns (bool success);\n    function allowance(address _owner, address _spender) constant returns (uint remaining);\n    \n    //optional\n    function name() public view returns (string);\n    function symbol() public view returns (string);\n    function decimals() public view returns (uint8);\n    \n    //events\n    event Transfer(address indexed _from, address indexed _to, uint _value);\n    event Approval(address indexed _owner, address indexed _spender, uint _value);\n}\n")),(0,o.kt)("h4",{id:"required-apis"},"Required APIs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"totalSupply")),(0,o.kt)("p",null,"Returns the total token supply."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"balanceOf")),(0,o.kt)("p",null,"Returns the account balance of another account with address _owner."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"transfer")),(0,o.kt)("p",null,"Transfers _value amount of tokens to address _to, and MUST fire the Transfer event. The function SHOULD throw if the message caller's account balance does not have enough tokens to spend."),(0,o.kt)("p",null,"Note Transfers of 0 values MUST be treated as normal transfers and fire the Transfer event."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"approve")),(0,o.kt)("p",null,"Allows _spender to withdraw from your account multiple times, up to the _value amount. If this function is called again it overwrites the current allowance with _value.."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"transferFrom")),(0,o.kt)("p",null,"Transfers _value amount of tokens from address _from to address _to, and MUST fire the Transfer event."),(0,o.kt)("p",null,"The transferFrom method is used for a withdraw workflow, allowing contracts to transfer tokens on your behalf. This can be used for example to allow a contract to transfer tokens on your behalf and/or to charge fees in sub-currencies. The function SHOULD throw unless the _from account has deliberately authorized the sender of the message via some mechanism."),(0,o.kt)("p",null,"Note Transfers of 0 values MUST be treated as normal transfers and fire the Transfer event."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"allowance")),(0,o.kt)("p",null,"Returns the amount which _spender is still allowed to withdraw from _owner."),(0,o.kt)("h4",{id:"optional-apis"},"Optional APIs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"name")),(0,o.kt)("p",null,'Returns the name of the token - e.g. "MyToken".'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"symbol")),(0,o.kt)("p",null,'Returns the symbol of the token. E.g. "HAHA".'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"decimals")),(0,o.kt)("p",null,"Returns the number of decimals the token uses - e.g. 8, means to divide the token amount by 100000000 to get its user representation."),(0,o.kt)("h4",{id:"events"},"Events"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Transfer")),(0,o.kt)("p",null,"MUST trigger when tokens are transferred, including zero value transfers."),(0,o.kt)("p",null,"A token contract which creates new tokens SHOULD trigger a Transfer event with the _from address set to 0x0 when tokens are created."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Approval")),(0,o.kt)("p",null,"MUST trigger on any successful call to approve(address _spender, uint256 _value)."),(0,o.kt)("h3",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"Refer ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenZeppelin/openzeppelin-contracts/tree/9b3710465583284b8c4c5d2245749246bb2e0094/contracts/token/ERC20"},"OpenZeppelin implementation"),"."),(0,o.kt)("h3",{id:"view"},"View"),(0,o.kt)("p",null,"It can be viewed via PlatON ",(0,o.kt)("a",{parentName:"p",href:"https://scan.platon.network/tokens/tokensTranfer/prc20"},"browser")," and also via ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/ATON-user-manual/"},"ATON")," to view the PRC-20 contract transactions."),(0,o.kt)("h3",{id:"deploy"},"Deploy"),(0,o.kt)("p",null,"please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/Solidity_Dev_Manual#introduction"},"Solidity Contracts Getting Started Manual")),(0,o.kt)("h3",{id:"invoking-functions"},"Invoking functions"),(0,o.kt)("p",null,"Using python as an example:"),(0,o.kt)("h4",{id:"installing-dependencies"},"Installing Dependencies"),(0,o.kt)("p",null,"Use the following command to install the PlatON python library,Python version 3.7.5+ is recommended:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"pip install client-sdk-python\n")),(0,o.kt)("p",null,"During the installation process, some dependency packages will require c++14 compilation, please download ",(0,o.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkId=691126"},"cppbuildtools")," after you see the relevant prompt, use the default value to install, and then re-execute the pip install command."),(0,o.kt)("h4",{id:"instantiation"},"Instantiation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from client_sdk_python import Web3, HTTPProvider\n\nrpc, chain_id, hrp = 'http://127.0.0.1:6789', 100, 'lat'\nw3 = Web3(HTTPProvider(rpc), chain_id=chain_id, hrp_type=hrp)\nabi = []            # ABI\nprc20 = w3.eth.contract(address='contract address', abi=abi)\n# View all functions and events of the contract\nprint([func for func in prc20.functions])\nprint([event for event in prc20.events])\n")),(0,o.kt)("h4",{id:"query-the-total-number-of-tokens-issued"},"Query the total number of tokens issued"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"prc20.functions.totalSupply().call()\n")),(0,o.kt)("h4",{id:"check-the-token-balance-of-your-account"},"Check the token balance of your account"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"prc20.functions.balanceOf('you address').call()\n")),(0,o.kt)("h4",{id:"transfer"},"Transfer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"tx = {\n    'chainId': w3.chain_id,\n    'nonce': w3.eth.getTransactionCount('your address'),\n    'gas': 4012388,\n    'value': 0,\n    'gasPrice': 1000000000,\n}\ntxn = prc20.functions.transfer(to='to address', value=1 * 10 ** 18).buildTransaction(tx)\nsigned_txn = w3.eth.account.signTransaction(txn, private_key='your private key')\ntx_hash = w3.eth.sendRawTransaction(signed_txn.rawTransaction).hex()\nreceipt = w3.eth.waitForTransactionReceipt(tx_hash)\n")),(0,o.kt)("h4",{id:"get-contract-events"},"Get contract events"),(0,o.kt)("p",null,"As an example of transfer transaction events, other events can be obtained in a similar way."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"events = prc20.events.Transfer().processReceipt(receipt)\n")))}u.isMDXComponent=!0}}]);