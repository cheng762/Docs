(self.webpackChunk=self.webpackChunk||[]).push([[3830],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5127:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>o,metadata:()=>l,toc:()=>s,default:()=>d});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o={id:"Wasm_Contract_Best_Practice",title:"Best practices",sidebar_label:"Best practices"},l={unversionedId:"Wasm_Contract_Best_Practice",id:"Wasm_Contract_Best_Practice",isDocsHomePage:!1,title:"Best practices",description:"Introduction",source:"@site/../docs/wasm\u5408\u7ea6\u5f00\u53d1\u6700\u4f73\u5b9e\u8df5.md",sourceDirName:".",slug:"/Wasm_Contract_Best_Practice",permalink:"/docs/Wasm_Contract_Best_Practice",editUrl:"https://github.com/PlatONnetwork/docs/tree/v2/docs/wasm\u5408\u7ea6\u5f00\u53d1\u6700\u4f73\u5b9e\u8df5.md",version:"current",sidebar_label:"Best practices",frontMatter:{id:"Wasm_Contract_Best_Practice",title:"Best practices",sidebar_label:"Best practices"},sidebar:"docs",previous:{title:"Development Costs",permalink:"/docs/Wasm_Contract_Dev_Costs"},next:{title:"Wasm API",permalink:"/docs/Wasm_Contract_API"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Reasonable Cost Setting",id:"reasonable-cost-setting",children:[]},{value:"Avoid Timeouts",id:"avoid-timeouts",children:[]},{value:"Punishment For Illegal Operations",id:"punishment-for-illegal-operations",children:[]},{value:"C/C++ Language Limit",id:"cc-language-limit",children:[]},{value:"Coding Standards",id:"coding-standards",children:[]}],c={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This guide introduces users to some key points that need to be paid attention to\nin the development of smart contracts, mainly in the practice of actual\ndevelopment. Users can use this guide to quickly understand how to set a\nreasonable fee for a transaction, how to avoid losing the fee due to transaction\nfailure, and how to encode a more standardized smart contract."),(0,i.kt)("h3",{id:"reasonable-cost-setting"},"Reasonable Cost Setting"),(0,i.kt)("p",null,"When you need to deploy a contract on the main network of PlatON, you need to set a reasonable fee limit. The fee limit refers to the upper limit of the energy consumption cost of smart contract deployment/execution in PlatON. This restriction is mainly accomplished through Gas. Gas is the fuel value of the PlatON network world, which determines the normal operation of the PlatON network ecosystem. Gas is usually used to measure how much \u201cwork\u201d is required to perform certain actions, and these workloads are the amount of fees that need to be paid to the PlatON network in order to perform the action. In a simple understanding, Gas is the commission for network miners, and is paid by LAT. Any transaction, contract execution, and data storage on the network need to use Gas."),(0,i.kt)("p",null,"PlatON is similar to Ethereum\u2019s blockchain system. It uses ",(0,i.kt)("inlineCode",{parentName:"p"},"LAT")," for payment and\nmaintenance networks. One ",(0,i.kt)("inlineCode",{parentName:"p"},"LAT")," is divided into: ",(0,i.kt)("inlineCode",{parentName:"p"},"mLAT/uLAT/gVON/mVON/kVON/VON"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"VON")," is the smallest unit."),(0,i.kt)("p",null,"Gas consists of two parts: GasLimit and GasPrice. GasLimit is the maximum Gas consumption (minimum 21,000) that a user is willing to pay to perform an operation or confirm a transaction. GasPrice is the unit price of each Gas."),(0,i.kt)("p",null,"When a user sends a transaction, GasLimit and GasPrice are set. GasLimit * GasPrice is the user\u2019s transaction cost, and the cost is rewarded to the miner as a commission."),(0,i.kt)("p",null,"The higher the GasPrice of the transaction, the higher the execution priority of the transaction and the greater the transaction cost. After each transaction is completed, the remaining unused Gas will be returned to the sender\u2019s address account. It is important to note that if the execution of the transaction fails because the GasLimit is set too low, the Gas will not be returned to the user\u2019s address at this time, and the user still needs to pay the energy cost for the failed transaction. Therefore, regardless of whether the transaction is executed successfully, the transaction sender needs to pay a certain calculation fee to the miner."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"LAT Unit Conversion")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Unit"),(0,i.kt)("th",{parentName:"tr",align:null},"VON Value"),(0,i.kt)("th",{parentName:"tr",align:null},"VON"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"VON"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"kVON"),(0,i.kt)("td",{parentName:"tr",align:null},"1e3 VON"),(0,i.kt)("td",{parentName:"tr",align:null},"1,000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"mVON"),(0,i.kt)("td",{parentName:"tr",align:null},"1e6 VON"),(0,i.kt)("td",{parentName:"tr",align:null},"1,000,000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"gVON"),(0,i.kt)("td",{parentName:"tr",align:null},"1e9 VON"),(0,i.kt)("td",{parentName:"tr",align:null},"1,000,000,000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"microLAT"),(0,i.kt)("td",{parentName:"tr",align:null},"1e12 VON"),(0,i.kt)("td",{parentName:"tr",align:null},"1,000,000,000,000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"milliLAT"),(0,i.kt)("td",{parentName:"tr",align:null},"1e15 VON"),(0,i.kt)("td",{parentName:"tr",align:null},"1,000,000,000,000,000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"LAT"),(0,i.kt)("td",{parentName:"tr",align:null},"1e18 VON"),(0,i.kt)("td",{parentName:"tr",align:null},"1,000,000,000,000,000,000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"kLAT"),(0,i.kt)("td",{parentName:"tr",align:null},"1e21 VON"),(0,i.kt)("td",{parentName:"tr",align:null},"1,000,000,000,000,000,000,000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"mLAT"),(0,i.kt)("td",{parentName:"tr",align:null},"1e24 VON"),(0,i.kt)("td",{parentName:"tr",align:null},"1,000,000,000,000,000,000,000,000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"gLAT"),(0,i.kt)("td",{parentName:"tr",align:null},"1e27 VON"),(0,i.kt)("td",{parentName:"tr",align:null},"1,000,000,000,000,000,000,000,000,000")))),(0,i.kt)("h3",{id:"avoid-timeouts"},"Avoid Timeouts"),(0,i.kt)("p",null,"Sending transactions on the PlatON network does not have the concept of timeout, but it will eventually stop according to the set gas limit value. If the limit value is lower than the consumption required for contract deployment, the transaction execution fails and the corresponding processing fee will be deducted. The fee setting cannot be infinite, because in the network, the block itself has a maximum GasLimit value. When the GasLimit of the transaction exceeds this value, the transaction will not be accepted."),(0,i.kt)("p",null,"If the call function of a published contract is called (a call is a stateless operation in the contract logic), there is a 5s timeout limit. If the contract logic is not executed within 5s, a timeout will occur and the virtual machine will forcely exit , causing the query to fail."),(0,i.kt)("p",null,"To avoid contract-related transaction failures, try breaking large contracts into smaller pieces and referencing each other as needed. To avoid infinite loops, be aware of common pitfalls and recursive calls."),(0,i.kt)("h3",{id:"punishment-for-illegal-operations"},"Punishment For Illegal Operations"),(0,i.kt)("p",null,"If the smart contract is not compiled by a standard valid compiler, or the instruction code is changed at will, the opcode will be invalid. This type of contract not only fails to be deployed and executed successfully, but also generates a full amount (GasLimit * GasPrice) penalty. The transaction fee for the current transaction will be deducted. This is a very strong penalty. If the operator does not pay attention to this point and keep retrying, then the cost will be higher and the cost will be heavier."),(0,i.kt)("p",null,"In general, invalid opcodes have the following conditions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Manually changed the instruction code for the normally compiled contract"),(0,i.kt)("li",{parentName:"ul"},"The contract compiler version is not consistent with the contract version\nsupported by the network lock"),(0,i.kt)("li",{parentName:"ul"},"Use float type to do operation")),(0,i.kt)("p",null,"When operating a contract in the PlatON network. First, you must confirm the smart contract version supported by the current network, and then select the compiler of the corresponding version pair."),(0,i.kt)("p",null,"The normal operation is to use the latest Truffle/PlatON-CDT officially provided by PlatON to compile/deploy/execute the contract. At the same time, before switching to the main network, it must be validated on the test network."),(0,i.kt)("h3",{id:"cc-language-limit"},"C/C++ Language Limit"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"C/C++ features not supported")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"float type(float/double)"),(0,i.kt)("li",{parentName:"ul"},"typeid/dynamic_cast(-fno-rtti)"),(0,i.kt)("li",{parentName:"ul"},"try-catch(-fno-exception)"),(0,i.kt)("li",{parentName:"ul"},"features after C++17")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"libc not supported header files")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"signal.h"),(0,i.kt)("li",{parentName:"ul"},"math.h"),(0,i.kt)("li",{parentName:"ul"},"locale.h"),(0,i.kt)("li",{parentName:"ul"},"errno.h"),(0,i.kt)("li",{parentName:"ul"},"uchar.h"),(0,i.kt)("li",{parentName:"ul"},"time.h")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"libc++ not suppported header files")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"rand"),(0,i.kt)("li",{parentName:"ul"},"atomics"),(0,i.kt)("li",{parentName:"ul"},"thread"),(0,i.kt)("li",{parentName:"ul"},"random")),(0,i.kt)("h3",{id:"coding-standards"},"Coding Standards"),(0,i.kt)("h4",{id:"naming-rules"},"Naming rules"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The style of a name immediately informs us what sort of thing the named entity\nis: a type, a variable, a function, a constant, a macro, etc.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use terminology within the blockchain industry.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use as few abbreviations as possible. If you must use them, it is recommended\nto use public abbreviations and custom abbreviations.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Filenames should be all lowercase and can include underscores (_) or dashes\n(-).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For smart contracts, the file name is consistent with the contract name.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Type names start with a capital letter and have a capital letter for each new\nword, with no underscores: ",(0,i.kt)("inlineCode",{parentName:"p"},"MyExcitingClass"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"MyExcitingEnum"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The names of variables (including function parameters) and data members are\nall lowercase, with underscores between words. Data members of classes (but\nnot structs) additionally have trailing underscores. For instance:\n",(0,i.kt)("inlineCode",{parentName:"p"},"a_local_variable"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"a_struct_data_member"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"a_class_data_member_"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Variables declared constexpr or const, and whose value is fixed for the\nduration of the program, are named with a leading "k" followed by mixed case.\nUnderscores can be used as separators in the rare cases where capitalization\ncannot be used for separation. For example:'),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"const int kDaysInAWeek = 7;\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Regular functions have mixed case; accessors and mutators may be named like\nvariables: ",(0,i.kt)("inlineCode",{parentName:"p"},"MyExcitingFunction()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"MyExcitingMethod()"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"my_exciting_member_variable()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"set_my_exciting_member_variable()"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Enumerators (for both scoped and unscoped enums) should be named either like\nconstants or like macros: either ",(0,i.kt)("inlineCode",{parentName:"p"},"kEnumName")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ENUM_NAME"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you are naming something that is analogous to an existing C or C++ entity\nthen you can follow the existing naming convention scheme."))),(0,i.kt)("h4",{id:"document-format-for-smart-contracts"},"Document Format For Smart Contracts"),(0,i.kt)("p",null,"File Layout Rules:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Generally more than 1000 lines of program code is difficult to read, try to\navoid the situation that the number of lines of code in a file is too long.\nEach contract document should contain only a single contract class or contract\ninterface.")),(0,i.kt)("p",null,"Order Of Files:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Notes on files: All contract source files have a note at the beginning, which\nlists the copyright statement, file name, function description, and creation\nand modification records of the file."),(0,i.kt)("li",{parentName:"ul"},"Remarks for class or interface: Comments should be made before class and\ninterface definitions, including descriptions of classes and interfaces,\nlatest modifiers, version numbers, reference links, etc."),(0,i.kt)("li",{parentName:"ul"},"The order of class member: first the public level, then the protection\nlevel, and finally the private level."),(0,i.kt)("li",{parentName:"ul"},"Member functions: Functions within a contract should be grouped by module, not by\nscope or access permissions.")),(0,i.kt)("h4",{id:"feature-uses-advice"},"Feature Uses Advice"),(0,i.kt)("h5",{id:"structs-vs-classes"},"Structs vs Classes"),(0,i.kt)("p",null,"Use a struct only for passive objects that carry data; everything else is a\nclass."),(0,i.kt)("p",null,"The struct and class keywords behave almost identically in C++. We add our own\nsemantic meanings to each keyword, so you should use the appropriate keyword for\nthe data-type you're defining."),(0,i.kt)("p",null,"Structs should be used for passive objects that carry data, and may have\nassociated constants, but lack any functionality other than access/setting the\ndata members. All fields must be public, and accessed directly rather than\nthrough getter/setter methods. The struct must not have invariants that imply\nrelationships between different fields, since direct user access to those fields\nmay break those invariants. Methods should not provide behavior but should only\nbe used to set up the data members, e.g., constructor, destructor, Initialize(),\nReset()."),(0,i.kt)("p",null,"If more functionality or invariants are required, a class is more appropriate.\nIf in doubt, make it a class."),(0,i.kt)("h5",{id:"inheritance"},"Inheritance"),(0,i.kt)("p",null,"Composition is often more appropriate than inheritance. When using inheritance,\nmake it ",(0,i.kt)("inlineCode",{parentName:"p"},"public"),"."),(0,i.kt)("p",null,"All inheritance should be public. If you want to do private inheritance, you\nshould be including an instance of the base class as a member instead."),(0,i.kt)("p",null,'Do not overuse implementation inheritance. Composition is often more\nappropriate. Try to restrict the use of inheritance to the "is-a" case: Bar\nsubclasses Foo if it can reasonably be said that Bar "is a kind of" Foo.'),(0,i.kt)("h5",{id:"multiple-inheritance"},"Multiple Inheritance"),(0,i.kt)("p",null,'Multiple inheritance is especially problematic, because it often imposes a\nhigher performance overhead (in fact, the performance drop from single\ninheritance to multiple inheritance can often be greater than the performance\ndrop from ordinary to virtual dispatch), and because it risks leading to\n"diamond" inheritance patterns, which are prone to ambiguity, confusion, and\noutright bugs.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Multiple implementation inheritance is strongly discouraged.")),(0,i.kt)("h5",{id:"move"},"move"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"std::move")," introduced in C++11 can effectively transfer resources to other\nobjects. In our practice, use ",(0,i.kt)("inlineCode",{parentName:"p"},"std :: move")," can effectively reduce the\nconsumption of ",(0,i.kt)("inlineCode",{parentName:"p"},"Gas"),", especially when using containers. When returning a value,\nit should return rvalue references and use ",(0,i.kt)("inlineCode",{parentName:"p"},"std::move")," to convert lvalue\nreferences to rvalue references to reduce Gas consumption. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"std::vector<std::string>&& get_vec() {\n    std::vector<std::string> v;\n    // ignore\n    return std::move(v); // very important\n}\n")),(0,i.kt)("h4",{id:"auto"},"auto"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"auto")," keyword can automatically deduced from its initializer. Used with\ncontainers and iterators can simplify code. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"std::map<std::string, std::string> my_map;\nfor (auto it = my_map.begin(); it != my_map.end(); it++) {\n    // ignore\n}\n")),(0,i.kt)("h5",{id:"reference-arguments"},"Reference Arguments"),(0,i.kt)("p",null,"Suggest using reference arguments as function parameters. Reference parameters\ncan reduce unnecessary replication and reduce unnecessary memory allocation. For us\nWASM virtual machines, memory allocation is an expensive operation."),(0,i.kt)("h5",{id:"containers"},"Containers"),(0,i.kt)("p",null,"The C ++ standard library provides some commonly used containers (map, vector, list, etc.), and you should carefully read the corresponding interface documentation when using it. It is important to note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"operator[]")," oper ator of map, according to the interface documentation, when the key does not exist, the insert action will be performed. For contract development, when using ",(0,i.kt)("inlineCode",{parentName:"p"},"StorageType")," to store the map, do not use",(0,i.kt)("inlineCode",{parentName:"p"},"operator []"),"to determine whether the key exists, but use",(0,i.kt)("inlineCode",{parentName:"p"},"find ()")," ."),(0,i.kt)("hr",null))}d.isMDXComponent=!0}}]);