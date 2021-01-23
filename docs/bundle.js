!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);function r(t){const e=document.getElementById(t);if(null===t)throw new Error(`DOM element '${t}' not found.`);return e}async function i(t){try{return await navigator.clipboard.writeText(t),!0}catch(t){return console.error(t.stack||t),!1}}function o(t,e=!1){t.value="",e&&t.focus()}function s(t,e){const n=function(t,e){let n=void 0;return{start:()=>{void 0!==n&&(clearTimeout(n),n=void 0),t()},end:()=>{void 0!==n&&clearTimeout(n),n=setTimeout(t,e)}}}(()=>{t.classList.remove("good-flash"),t.classList.remove("bad-flash")},1e3),r=async()=>{t.disabled=!0,n.start();try{const r=e();let i;i=r instanceof Promise?await r:r,void 0===i||!0===i?t.classList.add("good-flash"):t.classList.add("bad-flash")}catch(e){t.classList.add("bad-flash"),console.error(e.message||e)}finally{n.end(),t.disabled=!1}};return t.addEventListener("click",r),r}function a(t,e){return s(e,()=>i(t.value))}function l(t,e){e?t.style.removeProperty("display"):t.style.setProperty("display","none")}function u(t,e){for(const n of t)l(n,e)}class c{constructor(t){this.tabs=t,this._activeTabIndex=-1;for(let e=0;e<this.tabs.length;e+=1)t[e].getTabButton().addEventListener("click",()=>{this.setActiveTab(e)});this.setActiveTab(0)}get activeTabIndex(){return this._activeTabIndex}set activeTabIndex(t){if(t<0||t>=this.tabs.length)throw new Error(`Argument 'index' out of range. Must be in range [0;${this.tabs.length-1}].`);this.setActiveTab(t)}setActiveTab(t){if(t===this._activeTabIndex)return;let e;for(e of this.tabs){const t=e.getTabButton();t.style.removeProperty("font-weight"),t.style.setProperty("color","#C0C0C0"),e.getTabContent().style.setProperty("display","none")}const n=this.tabs[t].getTabButton();n.style.setProperty("font-weight","bold"),n.style.removeProperty("color"),this.tabs[t].getTabContent().style.removeProperty("display"),this._activeTabIndex=t,this.tabs[t].onTabSelected()}}const h="Stores the string in memory and removes it from the UI component. Prevents a physical intruder from copy/pasting the value.",d=r("txtPrivatePart"),p=r("txtPrivatePartConfirmation"),f=r("btnProtect"),m=r("spnProtectedConfirmation"),y=r("spnPrivatePartSize"),g=r("spnPrivatePartSizeConfirmation");let w;const b=[];function v(){return void 0!==w?w:d.value}function E(){0!==d.value.length&&(w=d.value,m.innerHTML="Protected",o(d),o(p),y.innerHTML="0",g.innerHTML="0",d.disabled=!0,p.disabled=!0,f.innerHTML="Clear and unlock",f.title="Removes the string form memory and re-enables the UI component.",L())}function T(){void 0===w?E():(w=void 0,m.innerHTML="",d.disabled=!1,p.disabled=!1,f.innerHTML="Protect and lock",f.title=h,f.disabled=!0)}function S(){T()}const C=new class{constructor(t,e){this.action=t,this.delay=e}reset(t){void 0!==this.timeout&&clearTimeout(this.timeout);const e=void 0!==t?t:this.delay;this.timeout=setTimeout(()=>{this.action(),this.timeout=void 0},e)}}(E,6e4);function A(){let t;for(t of(f.disabled=0===d.value.length,y.innerHTML=d.value.length.toString(),L(),b))t();C.reset()}function L(){p.value===d.value?p.style.setProperty("background","#D0FFD0"):p.style.setProperty("background","#FFD0D0")}function P(){g.innerHTML=p.value.length.toString(),C.reset(),L()}function O(t){const e=(t=function(t){if(t.byteLength>65535)throw new Error(`Buffer too large: ${t.byteLength} bytes`);let e=t.byteLength;const n=new Uint8Array(2+t.byteLength);for(let t=0;t<2;t+=1)n[t]=e%256,e/=256;return n.set(new Uint8Array(t),2),n.buffer}(t)).byteLength,n=new DataView(t,0);let r=0n,i=1n;for(let t=0;t<e;t+=1)r+=BigInt(n.getUint8(t))*i,i*=256n;return r}function _(t,e){const n=BigInt(e.length);let r="",i=function(t){const e=t.byteLength,n=new DataView(t,0);let r=0n,i=1n;for(let t=0;t<e;t+=1)r+=BigInt(n.getUint8(t))*i,i*=256n;return r}(t);for(;i>0n;){const t=i%n;i/=n,r+=e[BigInt.asUintN(8,t)]}return r}function R(t,e){const n=BigInt(e.length);let r=0n,i=1n;for(let o=0;o<t.length;o+=1){r+=BigInt(e.indexOf(t[o]))*i,i*=n}return function(t){const e=[];for(;t>0n;){const n=t%256n;t/=256n;const r=Number(BigInt.asUintN(8,n));e.push(r)}let n=e[0];e.length>1&&(n+=256*e[1]);const r=n-(e.length-2);for(let t=0;t<r;t+=1)e.push(0);return new Uint8Array(e.slice(2)).buffer}(r)}class k extends Error{constructor(t){super(t),this._name=k.ERROR_NAME,Object.setPrototypeOf(this,new.target.prototype)}get name(){return this._name}static isMatching(t){return t&&t.name===k.ERROR_NAME}}k.ERROR_NAME="TaskCancelledError";class V{constructor(){this._isCancelled=!1,this._token=new x(this)}get isCancelled(){return this._isCancelled}get token(){return this._token}cancel(){this._isCancelled=!0}}class x{constructor(t){this.source=t}static get none(){return x._none}get isCancelled(){return this.source.isCancelled}}function I(t){if(t.isCancelled)throw new k}x._none=new x(new V);const N="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";async function M(t,e,n){const r=await window.crypto.subtle.importKey("raw",t,"PBKDF2",!1,["deriveKey"]);I(n);const i={name:"PBKDF2",hash:"SHA-512",iterations:1e5,salt:e},o=await window.crypto.subtle.deriveKey(i,r,{name:"AES-CBC",length:256},!0,["encrypt"]);I(n);const s=await window.crypto.subtle.exportKey("raw",o);return I(n),s}function H(t=64,e=N){return _(function(t=64){const e=new Uint8Array(t);return crypto.getRandomValues(e).buffer}(t),e)}function U(t,e){return t.length<=e?t:t.substr(0,e)}function F(t){return(new TextEncoder).encode(t).buffer}function B(t){return null!=t&&!1===t.hasOwnProperty("constructor")&&"Object"===t.constructor.name}function G(t){const e={};for(const[n,r]of Object.entries(t).sort((t,e)=>t[0].localeCompare(e[0])))e[n]=B(r)?G(r):r;return e}const D={};function K(t){if(!t)throw new TypeError("Argument 'serviceName' is mandatory.");const e=D[t];if(void 0===e)throw new Error(`Service '${t}' is not registered.`);return e}function j(t,e){if(!t)throw new TypeError("Argument 'serviceName' is mandatory.");if(void 0===e)throw new TypeError("Argument 'instance' cannot be undefined.");if(void 0!==D[t])throw new Error(`Service '${t}' is already registered.`);D[t]=e}class ${constructor(t){this.secureLocalStorage=t,this.token=null,this.oneTimePassword=null,this.currentVaultContentHash=null,this.username=null,this.repositoryName=null,this.vaultFilename=null}getUsername(){return this.username}getRepositoryName(){return this.repositoryName}getVaultFilename(){return this.vaultFilename}clear(){this.secureLocalStorage.removeItem(Y.LOCAL_STORAGE_KEY_USERNAME),this.secureLocalStorage.removeItem(Y.LOCAL_STORAGE_KEY_REPO),this.secureLocalStorage.removeItem(Y.LOCAL_STORAGE_KEY_FILENAME),this.secureLocalStorage.removeItem($.AUTH_TOKEN_KEY_NAME)}constructTokenAuthString(){return"token "+this.token}constructFetchRequest(t,e,n){const r={Accept:"application/vnd.github.v3+json","Content-Type":"application/json",Authorization:e};return this.oneTimePassword&&(r["x-github-otp"]=this.oneTimePassword),{method:t,headers:r,body:n?JSON.stringify(n):void 0}}constructUrl(t){return`${$.BASE_URL}${t}`}async request(t,e,n,r,i){const o=this.constructUrl(n),s=this.constructFetchRequest(e,r,i);let a=await fetch(o,s);return 401===a.status&&t?(this.oneTimePassword=prompt("Input your 2FA code:"),this.oneTimePassword?await this.request(t,e,n,r,i):null):a}getSetVaultParameter(t,e,n){let r=window.localStorage.getItem(t);return r||(r=prompt(e,n),r?(window.localStorage.setItem(t,r),r):null)}ensureVaultParameters(){const t=new URL(window.location.toString());let e="",n="";if("github.com"===t.hostname){const r=t.pathname.split("/");r.length>=3&&(e=r[1],n=r[2]+"Vault")}const r=this.getSetVaultParameter($.LOCAL_STORAGE_KEY_USERNAME,"GitHub account username:",e);if(!r)return Promise.resolve(!1);this.username=r;const i=this.getSetVaultParameter($.LOCAL_STORAGE_KEY_REPO,"Vault GitHub repository name:",n);if(!i)return Promise.resolve(!1);this.repositoryName=i;const o=this.getSetVaultParameter($.LOCAL_STORAGE_KEY_FILENAME,"Vault filename:","vault.json");return o?(this.vaultFilename=o,Promise.resolve(!0)):Promise.resolve(!1)}async ensureToken(){let t=await this.secureLocalStorage.getItem($.AUTH_TOKEN_KEY_NAME);return null===t&&(t=await this.getToken()),!!t&&(await this.secureLocalStorage.setItem($.AUTH_TOKEN_KEY_NAME,t),this.token=t,!0)}constructVaultFileUrl(){return`/repos/${this.username}/${this.repositoryName}/contents/${this.vaultFilename}`}async getVaultContent(){if(!1===await this.ensureVaultParameters())return null;if(!1===await this.ensureToken())return null;const t=this.constructVaultFileUrl(),e=await this.request(!1,"GET",t,this.constructTokenAuthString());if(null===e)return console.warn("Fetching vault content aborted."),null;if(!1===e.ok)return 401===e.status?(this.secureLocalStorage.removeItem($.AUTH_TOKEN_KEY_NAME),this.token=null,this.oneTimePassword=null,await this.getVaultContent()):(console.error(`Failed to fetch vault file '${this.vaultFilename}'.`,e),null);const n=await e.json();return this.currentVaultContentHash=n.sha,atob(n.content)}async setVaultContent(t,e){if(!1===await this.ensureVaultParameters())return!1;if(!1===await this.ensureToken())return!1;const n={message:e,content:btoa(t),sha:this.currentVaultContentHash},r=this.constructVaultFileUrl(),i=await this.request(!1,"PUT",r,this.constructTokenAuthString(),n);if(null===i)return console.warn("Push new vault content aborted."),!1;const o=await i.json();return!1===i.ok?(console.error(`Failed to create/update vault file '${this.vaultFilename}'.`,i,o),!1):(this.currentVaultContentHash=o.content.sha,!0)}}$.BASE_URL="https://api.github.com",$.AUTH_TOKEN_KEY_NAME="GitHubVaultStorageBase.AuthToken",$.LOCAL_STORAGE_KEY_USERNAME="GitHubVaultStorageBase.Username",$.LOCAL_STORAGE_KEY_REPO="GitHubVaultStorageBase.Repository",$.LOCAL_STORAGE_KEY_FILENAME="GitHubVaultStorageBase.Filename";class z extends ${getToken(){const t=prompt("Personal access token:");return Promise.resolve(t)}}class Y extends ${constructor(t){super(t),this.basicAuthHeader=null,this.authorizationName=null}clear(){super.clear(),this.secureLocalStorage.removeItem(Y.LOCAL_STORAGE_KEY_PASSWORD_PUBLIC),this.secureLocalStorage.removeItem(Y.LOCAL_STORAGE_KEY_PASSWORD_LENGTH),this.secureLocalStorage.removeItem(Y.LOCAL_STORAGE_KEY_BROWSER_NAME)}constructBasicAuthString(t,e){return console.log("username:",t),console.log("password:",e),"Basic "+btoa(`${t}:${e}`)}async listAuthorizations(){if(!this.basicAuthHeader)return null;const t=await this.request(!0,"GET","/authorizations",this.basicAuthHeader);return null===t?(console.warn("List authorizations aborted."),null):!1===t.ok?(console.error("Failed to list authorizations.",t),null):await t.json()}async deleteAuthorization(t){if(!this.basicAuthHeader)return!1;const e=await this.request(!0,"DELETE","/authorizations/"+t.id,this.basicAuthHeader);return null===e?(console.warn("Delete authorization aborted."),!1):(!1===e.ok&&console.error(`Failed to delete authorization '${t.id}'.`,e),e.ok)}async createAuthorization(){if(!this.authorizationName)return null;if(!this.basicAuthHeader)return null;const t={scopes:["repo"],note:this.authorizationName},e=await this.request(!0,"POST","/authorizations",this.basicAuthHeader,t);return null===e?(console.warn("Create new authorization aborted."),null):!1===e.ok?(console.error("Failed to create new authorization.",e),null):(await e.json()).token}findAuthorization(t){if(!this.authorizationName)return null;for(const e of t)if(e.app&&e.app.name===this.authorizationName)return e;return null}async ensureVaultParameters(){if(!1===await super.ensureVaultParameters())return!1;const t=this.getUsername();if(!t)return!1;const e=this.getSetVaultParameter(Y.LOCAL_STORAGE_KEY_PASSWORD_PUBLIC,"GitHub account password public part:");if(!e)return!1;const n=this.getSetVaultParameter(Y.LOCAL_STORAGE_KEY_PASSWORD_LENGTH,"GitHub account password length:");if(!n)return!1;const r=parseInt(n,10);if(!1===Number.isSafeInteger(r)||r<=0)return!1;let i=await Ae(e,oe,x.none);if(!i)return!1;this.basicAuthHeader=this.constructBasicAuthString(t,i.substr(0,r));const o=this.getSetVaultParameter(Y.LOCAL_STORAGE_KEY_BROWSER_NAME,"Current device/browser name:");return!!o&&(this.authorizationName=`${Y.AUTHORIZATION_NAME} (${o})`,!0)}async getToken(){const t=await this.listAuthorizations();if(null===t)return null;const e=this.findAuthorization(t);return null!==e&&!1===await this.deleteAuthorization(e)?null:await this.createAuthorization()}}Y.AUTHORIZATION_NAME="github.com/TanukiSharp/ItchyPassword",Y.LOCAL_STORAGE_KEY_PASSWORD_PUBLIC="GitHubApiVaultStorage.PasswordPublicPart",Y.LOCAL_STORAGE_KEY_PASSWORD_LENGTH="GitHubApiVaultStorage.PasswordLength",Y.LOCAL_STORAGE_KEY_BROWSER_NAME="GitHubApiVaultStorage.BrowserName";class W{get version(){return 2}get description(){return"PBKDF2 + AES-GCM"}async encrypt(t,e,n){const r=new ArrayBuffer(44+t.byteLength),i=crypto.getRandomValues(new Uint8Array(r,0,12)),o=crypto.getRandomValues(new Uint8Array(r,12,16)),s={name:"AES-GCM",iv:i},a=await window.crypto.subtle.importKey("raw",await M(e,o,n),{name:"AES-GCM",length:256},!1,["encrypt"]);I(n);const l=await window.crypto.subtle.encrypt(s,a,t);return I(n),new Uint8Array(r).set(new Uint8Array(l),28),r}async decrypt(t,e,n){const r=new Uint8Array(t,0,12),i=new Uint8Array(t,12,16),o=new Uint8Array(t,28),s={name:"AES-GCM",iv:r},a=await M(e,i,n);I(n);const l=await window.crypto.subtle.importKey("raw",a,{name:"AES-GCM",length:256},!1,["decrypt"]);I(n);const u=await window.crypto.subtle.decrypt(s,l,o);return I(n),u}}const q=["version","value"],J=r("btnTabCiphers"),Z=r("divTabCiphers"),X=new W,Q=r("txtCipherName"),tt=r("txtCipherSource"),et=r("txtCipherTarget"),nt=r("btnEncrypt"),rt=r("btnDecrypt"),it=r("btnClearCipherSource"),ot=r("btnCopyCipherTarget"),st=r("btnClearCipherTarget");function at(){tt.style.removeProperty("background-color")}function lt(){tt.style.setProperty("background-color","#FFD0D0")}function ut(){at(),et.style.removeProperty("background-color")}function ct(t){et.value=t,ht()}function ht(){if(""===et.value||""===Q.value)return void kt();Vt({version:X.version,value:et.value},"ciphers/"+Q.value,q)}async function dt(t,e){const n=v();if(0===n.length)return console.warn("Private part is empty"),null;const r=F(t),i=F(n),o=await X.encrypt(r,i,e);return I(e),function(t,e){const n=BigInt(e.length);let r="",i=O(t);for(;i>0n;){const t=i%n;i/=n,r+=e[BigInt.asUintN(8,t)]}return r}(o,N)}async function pt(t,e){const n=v();if(0===n.length)return console.warn("Private part is empty"),null;try{const i=R(t,N),o=F(n),s=await X.decrypt(i,o,e);return I(e),r=s,(new TextDecoder).decode(r)}catch(t){return function(t){if(k.isMatching(t))throw t}(t),console.warn("Failed to decrypt"+(t.message?", error: "+t.message:", no error message")),null}var r}async function ft(){if(tt.focus(),ct(""),ut(),0===tt.value.length)return lt(),!1;const t=await dt(tt.value,x.none);return null!==t&&(ct(t),!0)}async function mt(){if(tt.focus(),ct(""),ut(),0===tt.value.length)return lt(),!1;const t=await pt(tt.value,x.none);return null===t?(et.style.setProperty("background-color","#FFD0D0"),!1):(ct(t),!0)}class yt{get length(){return window.localStorage.length}clear(){window.localStorage.clear()}key(t){return window.localStorage.key(t)}removeItem(t){window.localStorage.removeItem(t)}async getItem(t){const e=window.localStorage.getItem(t);return null===e?null:await pt(e,x.none)}async setItem(t,e){const n=await dt(e,x.none);null!==n?window.localStorage.setItem(t,n):console.error("Failed to encrypt value. (nothing stored)")}}const gt=r("divStorageOutput"),wt=r("txtPath"),bt=r("lblMatchingPath"),vt=r("txtParameters"),Et=r("btnPushToVault"),Tt=r("txtCustomKeys");let St,Ct,At,Lt=new z(new yt);function Pt(){!function(){const t=K("vault").computeUserPathMatchDepth(wt.value);if(t>0){const e=function(t,e){let n=0;for(let r=0;r<e;r+=1){if(n=t.indexOf("/",n),n<0){n=t.length+1;break}n+=1}return t.substr(0,n-1)}(wt.value,t);bt.innerText=e}else bt.innerText=""}(),_t()}function Ot(){_t()}function _t(){if(void 0===St||void 0===Ct||void 0===At)return;const t=function t(e,n){const r=e.indexOf("/"),i={},o=r>=0?e.substr(0,r):e,s=r>=0?e.substr(r+1):void 0;if(void 0===n){const t={};t[o]=i,n={head:t,tailParent:t,tail:i}}else n.tail[o]=i,n.tailParent=n.tail,n.tail=i;return s?t(s,n):n}(`${wt.value}/${Ct}`),e=t.tail;for(const[t,n]of Object.entries(St))e[t]=n;const n=function(){if(""===Tt.value)return{};try{const t=JSON.parse(Tt.value);return null===t||"Object"!==t.constructor.name?null:t}catch{return null}}();null!==n?Tt.style.removeProperty("background"):Tt.style.setProperty("background","#FFD0D0");const r=function(t,e,n){const r={};if(null!==t)for(const[e,i]of Object.entries(t))!1===n.includes(e)&&(r[e]=i);if(null!==e)for(const[t,n]of Object.entries(e))r[t]=n;return r}(n,e,At);0===Object.keys(r).length?t.tailParent[Object.keys(t.tailParent)[0]]=null:t.tailParent[Object.keys(t.tailParent)[0]]=r,vt.value=JSON.stringify(G(t.head),void 0,4)}async function Rt(){const t=await Lt.getVaultContent();if(null===t)return!1;const e=JSON.parse(vt.value);let n=JSON.parse(t);!function t(e,n){for(const r of Object.keys(e)){const i=n[r],o=e[r];null!=i&&"Object"===i.constructor.name&&"Object"===o.constructor.name?t(o,i):n[r]=o}}(e,n);const r=function(){const t=Cn.getActiveComponent();if(null===t)throw new Error("Could not determine active component.");let e=t.name.toLowerCase();const n=bt.innerText,r=wt.value;return n?n===r?`Updated ${e} for '${r}'`:`Updated ${e} for '${n}' adding '${function(t,...e){const n=function(t,e){for(let n=0;n<t.length;n+=1)if(!1===e.includes(t[n]))return n;return t.length}(t,e),r=function(t,e){for(let n=t.length-1;n>=0;n-=1)if(!1===e.includes(t[n]))return n+1;return t.length}(t,e);return t.substring(n,r)}(r.substr(n.length),"/")}'`:`Added ${e} for '${r}'`}(),i=JSON.stringify(n,void 0,4)+"\n";return await Lt.setVaultContent(i,"[ItchyPassword] "+r),!0}function kt(){St=void 0,Ct=void 0,At=void 0,o(vt)}function Vt(t,e,n){St=t,Ct=e,At=n,_t()}function xt(){gt.style.setProperty("display","initial")}function It(){gt.style.setProperty("display","none")}class Nt{async generateAndCopyPasswordToClipboard(t,e,n){e=void 0!==e?e:oe,n=void 0!==n?n:ie;const r=await Ae(t,e,x.none);if(null===r)return!1;const o=U(r,Math.max(4,n));return await i(o)}}const Mt=r("btnTabPasswords"),Ht=r("divTabPasswords"),Ut=new class{constructor(t){this.hkdfPurpose=F(t),this._description=`HKDF(PBKDF2, HMAC512) [purpose: ${t}]`}get version(){return 1}get description(){return this._description}async generatePassword(t,e,n){const r=await M(t,e,n);I(n);const i=await window.crypto.subtle.importKey("raw",r,{name:"HMAC",hash:{name:"SHA-512"}},!1,["sign"]);I(n);const o=await window.crypto.subtle.sign("HMAC",i,this.hkdfPurpose);return I(n),o}}("Password"),Ft=r("txtPublicPart"),Bt=r("spnPublicPartSize"),Gt=r("btnGeneratePublicPart"),Dt=r("btnClearPublicPart"),Kt=r("btnCopyPublicPart"),jt=r("btnShowHidePasswordOptionalFeatures"),$t=r("lblAlphabetLength"),zt=r("numOutputSizeRange"),Yt=r("numOutputSizeNum"),Wt=r("lblAlphabet"),qt=r("txtAlphabet"),Jt=r("spnAlphabetSize"),Zt=r("divPasswordAlphabetActions"),Xt=r("btnResetAlphabet"),Qt=r("txtResultPassword"),te=r("spnResultPasswordLength"),ee=r("btnViewResultPassword"),ne=r("btnCopyResultPassword"),re=r("lblGeneratingPassword"),ie=64,oe="!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~",se=["alphabet","length","public","datetime"];let ae,le;function ue(){return!(Ft.value.length>0&&"y"!==prompt("Are you sure you want to clear the public part ?\nType 'y' to accept",""))&&(o(Ft,!0),we(),he(),fe(),!0)}function ce(){if(Ft.value.length>0&&"y"!==prompt("Are you sure you want to generate a new public part ?\nType 'y' to accept",""))return!1;const t=H();return Ft.value=t,we(),he(),Pe(),!0}function he(){ae=Ft.value.length>0?(new Date).toISOString():void 0}function de(){te.innerHTML=Qt.value.length.toString()}function pe(t){const e=t.split("");e.sort();for(let t=1;t<e.length;t+=1)if(e[t-1]===e[t])return!1;return!0}function fe(){if(!1===Ce())return void Se();const t={public:Ft.value,datetime:ae},e=Qt.value.length;e!==ie&&(t.length=e);const n=qt.value;n!==oe&&(t.alphabet=n),Vt(t,"password",se)}function me(){Yt.value=zt.value}async function ye(){me(),await Pe()}async function ge(){(function(){const t=parseInt(zt.min,10),e=parseInt(Yt.value,10),n=parseInt(zt.max,10);return!1===isNaN(e)&&(zt.value=Math.max(t,Math.min(e,n)).toString(),!0)})()&&me(),await Pe()}function we(){Bt.innerHTML=Ft.value.length.toString()}function be(){Jt.innerHTML=qt.value.length.toString()}function ve(t){t?qt.style.removeProperty("background"):qt.style.setProperty("background","#FFD0D0")}async function Ee(){const t=pe(qt.value);ve(t),!1!==t&&(be(),await Pe())}async function Te(){return!1!==_e()&&(await Pe(),!0)}function Se(){o(Qt),kt(),de()}function Ce(t){const e=qt.value;return!1!==pe(e)&&(t=t||Ft.value,!(v().length<=0||t.length<8||e.length<2))}async function Ae(t,e,n){if(!1===Ce(t))return null;const r=F(v()),i=F(t);return _(await Ut.generatePassword(r,i,n),e)}const Le=new class{constructor(){this.currentTokenSource=null,this.currentTask=null,this.microThreadId=0}get isRunning(){return null!==this.currentTask}async cancelInternal(t){this.microThreadId===Number.MAX_SAFE_INTEGER?this.microThreadId=0:this.microThreadId=this.microThreadId+1;const e=this.microThreadId;if(null===this.currentTask)return!0;if(null!==this.currentTokenSource&&(this.currentTokenSource.cancel(),null!==this.currentTask))try{await this.currentTask}catch(e){if(!k.isMatching(e))throw e;if(t)throw e}return e===this.microThreadId}async cancel(t=!1){await this.cancelInternal(t)}async cancelAndExecute(t,e=!1){if(!1===await this.cancelInternal(e)){if(!1===e)return;throw new k}var n=new V;this.currentTokenSource=n;try{return this.currentTask=t(this.currentTokenSource.token),await this.currentTask}catch(t){if(k.isMatching(t)&&!1===e)return;throw t}finally{this.currentTask=null}}};async function Pe(){if(!1!==Ce()){l(re,!0);try{await Le.cancelAndExecute(Oe)}finally{l(re,!1)}}else Se()}async function Oe(t){const e=await Ae(Ft.value,qt.value,t);null!==e&&(Qt.value=U(e,Math.max(4,parseInt(zt.value,10))),de(),fe(),le())}function _e(){qt.value=oe,be();const t=pe(qt.value);return ve(t),t}async function Re(){we(),he(),await Pe()}const ke=new Uint8Array([242,207,239,142,19,64,70,73,146,42,222,92,188,136,56,168]).buffer;const Ve=[new class{get version(){return 1}get description(){return"PBKDF2 + AES-GCM"}async encrypt(t,e,n){const r=new ArrayBuffer(28+t.byteLength),i=new DataView(r,0,12);crypto.getRandomValues(new Uint8Array(r,0,12));const o={name:"AES-GCM",iv:i},s=await window.crypto.subtle.importKey("raw",await M(e,ke,n),{name:"AES-GCM",length:256},!1,["encrypt"]);I(n);const a=await window.crypto.subtle.encrypt(o,s,t);return I(n),new Uint8Array(r).set(new Uint8Array(a),12),r}async decrypt(t,e,n){const r=new DataView(t,0,12),i=new DataView(t,12),o={name:"AES-GCM",iv:r},s=await M(e,ke,n);I(n);const a=await window.crypto.subtle.importKey("raw",s,{name:"AES-GCM",length:256},!1,["decrypt"]);I(n);const l=await window.crypto.subtle.decrypt(o,a,i);return I(n),l}},new W],xe=r("btnTabReEncrypt"),Ie=r("divTabReEncrypt"),Ne=r("txtReEncryptSource"),Me=r("txtReEncryptTarget"),He=r("cboReEncryptFrom"),Ue=r("cboReEncryptTo"),Fe=r("btnReEncrypt"),Be=r("btnClearReEncryptSource"),Ge=r("btnCopyReEncryptTarget"),De=r("btnClearReEncryptTarget");function Ke(t,e){let n;for(n of Ve){const e=document.createElement("option");e.value=t.childNodes.length.toString(),e.text=`${n.description} (v${n.version})`,t.add(e)}t.value=e.toString()}function je(){Ne.style.removeProperty("background-color")}function $e(){je(),Me.style.removeProperty("background-color")}async function ze(){if(o(Me,!0),$e(),0===Ne.value.length)return Ne.style.setProperty("background-color","#FFD0D0"),!1;if(He.value===Ue.value)return Me.style.setProperty("background-color","#FFD0D0"),!1;const t=v();if(0===t.length)return console.warn("Private part is empty"),!1;const e=parseInt(He.value,10),n=parseInt(Ue.value,10),r=F(t),i=function(t){t.length%2!=0&&(t="0"+t);const e=new Uint8Array(t.length/2);for(let n=0;n<e.byteLength;n+=1)e[n]=parseInt(t.substr(2*n,2),16);return e.buffer}(Ne.value),s=await Ve[e].decrypt(i,r,x.none),a=await Ve[n].encrypt(s,r,x.none);var l;return Me.value=(l=a,Array.prototype.map.call(new Uint8Array(l),t=>("00"+t.toString(16)).slice(-2)).join("")),!0}class Ye{constructor(t,e,n,r,i){if(this.children=[],this.verticalLineElement=null,this.parent=t,this.path=e,this.key=n,this.value=r,this.treeNodeCreationController=i,this.rootElement=document.createElement("div"),this.setRootElementStyle(),this.titleElement=document.createElement("div"),this.setTitleElementStyle(),this.titleElement.appendChild(this.createTreeNodeContentElement()),this.rootElement.appendChild(this.titleElement),this.childrenContainerElement=document.createElement("div"),this.rootElement.appendChild(this.childrenContainerElement),this.setChildrenContainerElementStyle(),!1===i.isLeaf(e,n,r)&&B(r))for(const[t,n]of Object.entries(r)){const r=new Ye(this,`${e}/${t}`,t,n,i);this.addChild(r)}t&&this.setupLinesElements("#D0D0D0")}get element(){return this.rootElement}get isVisible(){return"none"!==this.rootElement.style.display}getVisibleChildCount(){let t=0;for(const e of this.children)e.isVisible&&(t+=1);return t}getVisibleLeafCount(){if(!1===this.isVisible)return 0;let t=1;for(const e of this.children)t+=e.getVisibleLeafCount();return t}addChild(t){this.childrenContainerElement.appendChild(t.rootElement),this.children.push(t)}createTreeNodeContentElement(){return this.treeNodeCreationController.createTreeNodeContentElement(this.path,this.key,this.value)}setRootElementStyle(){this.rootElement.classList.add("treenode-root"),this.rootElement.style.display="grid";let t=4,e=0;this.parent&&(t=24),this.parent&&this.parent.parent&&(e=12),this.rootElement.style.gridTemplateRows=t+"px 1fr",this.rootElement.style.gridTemplateColumns=e+"px 6px 1fr"}setupLinesElements(t){const e=document.createElement("div");if(e.classList.add("treenode-vertical-line"),e.style.gridColumn="2",e.style.gridRow="2",e.style.width="100%",e.style.borderRight="1px solid "+t,this.verticalLineElement=e,this.rootElement.appendChild(e),this.parent&&this.parent.parent){const e=document.createElement("div");e.classList.add("treenode-horizontal-line"),e.style.gridColumn="1",e.style.gridRow="1",e.style.width="100%",e.style.height="11px",e.style.borderBottom="1px solid "+t,this.rootElement.appendChild(e)}this.updateLines()}updateLines(){if(null===this.verticalLineElement)return;const t=this.getVisibleChildCount();if(0===t)return void(this.verticalLineElement.style.height="0px");let e=1;for(let n=0;n<t-1;n+=1)this.children[n].isVisible&&(e+=this.children[n].getVisibleLeafCount());const n=24*e-24+11+1;this.verticalLineElement.style.height=n+"px"}setTitleElementStyle(){this.titleElement&&(this.titleElement.classList.add("treenode-title"),this.titleElement.style.gridColumn="2 / span 2",this.titleElement.style.gridRow="1",this.titleElement.style.marginLeft="3px")}setChildrenContainerElementStyle(){this.childrenContainerElement.classList.add("treenode-children-container"),this.childrenContainerElement.style.gridColumn="3",this.childrenContainerElement.style.gridRow="2"}resetTitle(t){if(this.titleElement&&(this.titleElement.innerHTML="",this.titleElement.appendChild(this.createTreeNodeContentElement())),1===t&&this.parent&&this.parent.resetTitle(t),2===t)for(const e of this.children)e.resetTitle(t)}show(t){if(this.rootElement.style.display="grid",1===t&&this.parent&&this.parent.show(t),2===t)for(const e of this.children)e.show(t);this.updateLines()}hide(t){if(this.rootElement.style.display="none",1===t&&this.parent&&this.parent.hide(t),2===t)for(const e of this.children)e.hide(t);this.updateLines()}static createSpan(t,e){const n=document.createElement("span");return e&&(n.style.backgroundColor=e,n.style.borderRadius="2px"),n.innerText=t,n}static createColoredSpan(t,e){const n=document.createElement("span");let r=0;for(const i of e)i.pos!==r&&n.appendChild(Ye.createSpan(t.substr(r,i.pos-r))),n.appendChild(Ye.createSpan(t.substr(i.pos,i.len),"#80C0FF")),r=i.pos+i.len;return r<t.length&&n.appendChild(Ye.createSpan(t.substr(r,t.length-r))),n}filter(t,e){if(!t)return this.resetTitle(2),this.show(2),void this.updateLines();const n=[];if(e(this.key,t,n)){if(this.titleElement){this.titleElement.innerHTML="";const t=this.createTreeNodeContentElement();this.titleElement.appendChild(Ye.createColoredSpan(t.innerText,n))}this.show(1),this.show(2)}else this.resetTitle(2);for(const n of this.children)n.filter(t,e);this.updateLines()}}const We=r("btnTabVaultTabTreeView"),qe=r("divTabVaultTabTreeView"),Je=r("trvVaultTreeView"),Ze=r("txtVaultTreeViewSearch"),Xe=r("cboVaultTreeViewSearchType");let Qe;const tn=[{text:"Aggresive",function:function(t,e,n){return function t(e,n,r,i){if(!r)return!0;e=e.toLowerCase();for(let o=(r=r.toLowerCase()).length;o>=1;o-=1){const s=r.substr(0,o),a=e.indexOf(s,n);if(a>=0)return i.push({pos:a,len:s.length}),t(e,a+s.length,r.substr(o),i)}return!1}(t,0,e,n)}},{text:"Regular",function:function(t,e,n){const r=t.toLowerCase().indexOf(e.toLowerCase());return!(r<0)&&(n.push({pos:r,len:e.length}),!0)}}];function en(){if(!Qe)return;const t=Xe.selectedIndex,e=tn[t].function;Qe.hide(2),Qe.filter(Ze.value.toLocaleLowerCase(),e)}class nn{constructor(){this.passwordService=K("password")}async run(t){await this.passwordService.generateAndCopyPasswordToClipboard(t.public,t.alphabet,t.length)}static isPasswordObject(t,e){return"password"===t&&!(!e||!B(e)||"string"!=typeof e.public||e.public.length<4)}static isCipherObject(t){return!(!t||!B(t))&&(!("string"!=typeof t.value||t.value.length<=0)&&!("number"!=typeof t.version||t.version<0))}static isCiphersObject(t,e){if("ciphers"!==t)return!1;if(!e||!B(e))return!1;for(const t of Object.values(e))if(!nn.isCipherObject(t))return!1;return!0}static isHint(t,e){return!(nn.isCiphersObject(t,e)||nn.isCipherObject(e)||nn.isPasswordObject(t,e)||B(e))}isLeaf(t,e,n){return!(!nn.isCipherObject(n)&&!nn.isPasswordObject(e,n))||!1===B(n)}createTreeNodeContentElement(t,e,n){if(nn.isPasswordObject(e,n)){const t=document.createElement("button");return t.style.justifySelf="start",t.style.minWidth="80px",t.innerText="Password",s(t,async()=>await this.run(n)),t}if(nn.isHint(e,n)){const t=document.createElement("span");return t.style.justifySelf="start",t.innerText=`${e}: ${n}`,t}const r=document.createElement("div");return r.innerText=e,r}}const rn=r("btnTabVaultTabTextView"),on=r("divTabVaultTabTextView"),sn=r("txtVault");class an{constructor(t){this.vaultComponent=t}computeUserPathMatchDepth(t){return this.vaultComponent.computeUserPathMatchDepth(t)}}const ln=r("divTabVault"),un=r("btnTabVault"),cn=r("btnRefreshVault"),hn=r("btnClearVaultSettings"),dn=[new class{constructor(){this.name="VaultTreeView"}onVaultLoaded(t){Qe=new Ye(null,"<root>","",t,new nn),Je.innerHTML="",Je.appendChild(Qe.element),en()}getTabButton(){return We}getTabContent(){return qe}onTabSelected(){Ze.focus()}init(){!function(){Xe.innerHTML="";for(let t of tn){const e=document.createElement("option");e.text=t.text,Xe.appendChild(e)}}(),Ze.addEventListener("input",en),Xe.addEventListener("change",en)}},new class{constructor(){this.name="VaultTextView"}onVaultLoaded(t){sn.value=JSON.stringify(t,void 0,4)}getTabButton(){return rn}getTabContent(){return on}onTabSelected(){}init(){}}],pn=dn.filter(t=>void 0!==t.getTabButton),fn=dn.filter(t=>void 0!==t.init),mn=new c(pn);let yn=new z(new yt),gn=null;async function wn(){return v().length>0==!1?(alert("You must enter a master key first."),!1):await async function(){let t=await yn.getVaultContent();if(null===t)return!1;try{let e,n=JSON.parse(t);for(e of(n=G(n),gn=n,fn))e.onVaultLoaded(n);return!0}catch(t){return gn=null,console.error(t),!1}}()}function bn(){"y"===prompt("Are you sure you want to clear the vault settings ?\nType 'y' to accept","")&&yn.clear()}const vn=[{getTabButton:()=>r("btnTabNothing"),getTabContent:()=>r("divTabNothing"),onTabSelected(){It()}},new class{constructor(){this.name="PrivatePart"}init(){f.addEventListener("click",S),d.addEventListener("input",A),p.addEventListener("input",P),L(),f.title=h,d.focus()}},new class{constructor(){this.name="Password"}getTabButton(){return Mt}getTabContent(){return Ht}onTabSelected(){xt(),fe(),Ft.focus()}init(){var t,e,n;t=Pe,b.push(t),zt.max=ie.toString(),zt.value=ie.toString(),s(Dt,ue),s(Gt,ce),e=Qt,(n=ee).addEventListener("click",()=>{"password"===e.type?(e.type="input",n.innerHTML="Hide"):(e.type="password",n.innerHTML="View")}),a(Ft,Kt),le=a(Qt,ne),zt.addEventListener("input",ye),Yt.addEventListener("input",ge),qt.addEventListener("input",Ee),s(Xt,Te),Ft.addEventListener("input",Re),l(re,!1),function(t,e,n){let r=e;t.addEventListener("click",(function(){r=!r,u(n,r)})),u(n,r)}(jt,!1,[Wt,qt,Jt,Zt,$t,zt,Yt]),we(),me(),_e(),j("password",new Nt)}},new class{constructor(){this.name="Cipher"}getTabButton(){return J}getTabContent(){return Z}onTabSelected(){xt(),ht(),Q.focus()}init(){a(et,ot),s(nt,ft),s(rt,mt),Q.addEventListener("input",()=>{ht()}),tt.addEventListener("input",()=>{tt.value.length>0&&at()}),it.addEventListener("click",()=>{o(tt,!0)}),st.addEventListener("click",()=>{ct("")})}},new class{constructor(){this.name="ReEncrypt"}getTabButton(){return xe}getTabContent(){return Ie}onTabSelected(){It(),Ne.focus()}init(){a(Me,Ge),Ke(He,Ve.length-2),Ke(Ue,Ve.length-1),Ne.addEventListener("input",()=>{Ne.value.length>0&&je()}),Be.addEventListener("click",()=>{o(Ne,!0)}),De.addEventListener("click",()=>{o(Me,!0)}),s(Fe,ze)}},new class{constructor(){this.name="StorageOutput"}init(){Tt.addEventListener("input",Ot),s(Et,Rt),wt.addEventListener("input",Pt)}},new class{constructor(){this.name="Vault"}computeUserPathMatchDepth(t){return function(t){if(null===gn)return 0;let e=gn;const n=t.split("/");for(let t=0;t<n.length;t+=1){if(!e[n[t]])return t;e=e[n[t]]}return n.length}(t)}getTabButton(){return un}getTabContent(){return ln}onTabSelected(){It(),pn[mn.activeTabIndex].onTabSelected()}init(){s(cn,wn),hn.addEventListener("click",bn);const t=new an(this);let e;for(e of(j("vault",t),fn))e.init()}}],En=vn.filter(t=>void 0!==t.getTabButton),Tn=vn.filter(t=>void 0!==t.init),Sn=new c(En);const Cn=new class{constructor(){this.name="Root"}init(){let t;for(t of Tn)t.init()}getActiveComponent(){const t=En[Sn.activeTabIndex];return void 0!==t.init?t:null}},An="5cae8f47d19dafbf46b708b53488471ee5df4da7".substr(0,11);r("divInfo").innerHTML=An+'<br/><a href="https://github.com/TanukiSharp/ItchyPassword" target="_blank">github</a>',Cn.init()}]);
//# sourceMappingURL=bundle.js.map