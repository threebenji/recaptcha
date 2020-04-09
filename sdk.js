(function(){'use strict';var B=Math.floor;function e(){throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs")}function t(e,t){return t={exports:{}},e(t,t.exports),t.exports}function i(e){let t="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let n=0;n<e;n++)t+=r.charAt(B(Math.random()*r.length));return t}function r(e){let t=!1;return e.map(e=>{t=L[e]?L[e]:t}),t}function n(e,t=1,i=10){const r=new Date;let n=s(e),c=n.value?n.value:0,o={value:c+t};return o.expiry=0===c?r.getTime()+1e3*i:n.expiry,a(e,N.encrypt(JSON.stringify(o)),i),o.value}function s(e){const t=c(e);if(!t)return{value:null,expiry:null};const i=JSON.parse(N.decrypt(t));if(!i)return{value:null,expiry:null};const r=new Date;return r.getTime()>i.expiry?(a(e,null,-1),{value:null,expiry:null}):i}function a(e,t,i){let r=new Date;r.setTime(r.getTime()+1e3*i);let n="expires="+r.toGMTString();document.cookie=e+"="+t+"; "+n}function c(e){let t=e+"=",r=document.cookie.split(";");for(let n,s=0;s<r.length;s++)if(n=r[s].trim(),0===n.indexOf(t))return n.substring(t.length,n.length);return null}function o(e,t,i=2592e3){const r=new Date,n={value:t,expiry:r.getTime()+1e3*i};return K.setItem(e,N.encrypt(JSON.stringify(n))),n.value}function d(e,t=1,i=10){const r=new Date;let n=p(e),s=n.value?n.value:0,a={value:s+t};return a.expiry=0===s?r.getTime()+1e3*i:n.expiry,K.setItem(e,N.encrypt(JSON.stringify(a))),a.value}function l(e,t=1,i=10){const r=new Date;let n=p(e),s=n?n.value:0,a={value:s-t};return a.expiry=0===s?r.getTime()+1e3*i:n.expiry,K.setItem(e,N.encrypt(JSON.stringify(a))),a.value}function p(e){const t=K.getItem(e);if(!t)return{value:null,expiry:null};const i=JSON.parse(N.decrypt(t));if(!i)return{value:null,expiry:null};const r=new Date;return r.getTime()>i.expiry?(K.removeItem(e),{value:null,expiry:null}):i}function y(e){return K.removeItem(e)}function g(e){const t=W[e];if(!t)return{value:null,expiry:null};const i=JSON.parse(N.decrypt(t));if(!i)return{value:null,expiry:null};const r=new Date;return r.getTime()>i.expiry?(W[e]=null,{value:null,expiry:null}):i}function f(e,t,i){return q.set(U+e,t,i)}function _(e){return q.get(U+e)}function u(e){return q.del(e)}function h(e,t,i){return q.incr(U+e,t,i)}function m(e,t,i){return q.decr(U+e,t,i)}function k(){return C.get("click").value>V}function x(e){return C.get("adClick").value>e}function v(){Q&&C.incr("adClick",1,86400)}window.console.log=function(){};var S={getJsonp:function(e,t,i){let r=[],n="";for(let n in t)r.push(n+"="+t[n]);n=e+(/\?/.test(e)?"&":"?")+r.join("&")+"&callback=jsonp";let a=document.createElement("script");a.src="https://track.recaptcha.xyz/api"+n;let c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(a,c),window.jsonp=function(e){a.parentNode.removeChild(a),i&&"function"==typeof i&&i(e)}}},E="undefined"==typeof globalThis?"undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?{}:self:global:window:globalThis,z={},b=t(function(t,i){(function(e,r){t.exports=i=r()})(E,function(){var t=t||function(t,i){var n,r=(0,eval)("this").Math.ceil;if("undefined"!=typeof window&&window.crypto&&(n=window.crypto),!n&&"undefined"!=typeof window&&window.msCrypto&&(n=window.msCrypto),!n&&"undefined"!=typeof E&&E.crypto&&(n=E.crypto),!n&&"function"==typeof e)try{n=z}catch(e){}var s=function(){if(n){if("function"==typeof n.getRandomValues)try{return n.getRandomValues(new Uint32Array(1))[0]}catch(e){}if("function"==typeof n.randomBytes)try{return n.randomBytes(4).readInt32LE()}catch(e){}}throw new Error("Native crypto module could not be used to get secure random number.")},a=Object.create||function(){function e(){}return function(t){var i;return e.prototype=t,i=new e,e.prototype=null,i}}(),c={},o=c.lib={},d=o.Base=function(){return{extend:function(e){var t=a(this);return e&&t.mixIn(e),t.hasOwnProperty("init")&&this.init!==t.init||(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),l=o.WordArray=d.extend({init:function(e,t){e=this.words=e||[],this.sigBytes=t==i?4*e.length:t},toString:function(e){return(e||y).stringify(this)},concat:function(e){var t=this.words,r=e.words,n=this.sigBytes,s=e.sigBytes;if(this.clamp(),n%4)for(var a,c=0;c<s;c++)a=255&r[c>>>2]>>>24-8*(c%4),t[n+c>>>2]|=a<<24-8*((n+c)%4);else for(var c=0;c<s;c+=4)t[n+c>>>2]=r[c>>>2];return this.sigBytes+=s,this},clamp:function(){var e=this.words,t=this.sigBytes;e[t>>>2]&=4294967295<<32-8*(t%4),e.length=r(t/4)},clone:function(){var e=d.clone.call(this);return e.words=this.words.slice(0),e},random:function(e){for(var t=[],r=0;r<e;r+=4)t.push(s());return new l.init(t,e)}}),p=c.enc={},y=p.Hex={stringify:function(e){for(var t,r=e.words,n=e.sigBytes,s=[],a=0;a<n;a++)t=255&r[a>>>2]>>>24-8*(a%4),s.push((t>>>4).toString(16)),s.push((15&t).toString(16));return s.join("")},parse:function(e){for(var t=e.length,r=[],n=0;n<t;n+=2)r[n>>>3]|=parseInt(e.substr(n,2),16)<<24-4*(n%8);return new l.init(r,t/2)}},g=p.Latin1={stringify:function(e){for(var t=(0,eval)("this").String.fromCharCode,r,n=e.words,s=e.sigBytes,a=[],c=0;c<s;c++)r=255&n[c>>>2]>>>24-8*(c%4),a.push(t(r));return a.join("")},parse:function(e){for(var t=e.length,r=[],n=0;n<t;n++)r[n>>>2]|=(255&e.charCodeAt(n))<<24-8*(n%4);return new l.init(r,t)}},f=p.Utf8={stringify:function(e){try{return decodeURIComponent(escape(g.stringify(e)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(e){return g.parse(unescape(encodeURIComponent(e)))}},_=o.BufferedBlockAlgorithm=d.extend({reset:function(){this._data=new l.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=f.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(e){var n,t=(0,eval)("this").Math.min,i=(0,eval)("this").Math.max,s=this._data,a=s.words,c=s.sigBytes,o=this.blockSize,d=c/(4*o);d=e?r(d):i((0|d)-this._minBufferSize,0);var p=d*o,y=t(4*p,c);if(p){for(var g=0;g<p;g+=o)this._doProcessBlock(a,g);n=a.splice(0,p),s.sigBytes-=y}return new l.init(n,y)},clone:function(){var e=d.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0}),u=o.Hasher=_.extend({cfg:d.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){_.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){e&&this._append(e);var t=this._doFinalize();return t},blockSize:16,_createHelper:function(e){return function(t,i){return new e.init(i).finalize(t)}},_createHmacHelper:function(e){return function(t,i){return new h.HMAC.init(e,i).finalize(t)}}}),h=c.algo={};return c}(Math);return t})}),w=t(function(e,t){(function(i,r){e.exports=t=r(b)})(E,function(e){return function(){function t(e,t,r){for(var s=[],a=0,c=0;c<t;c++)if(c%4){var o=r[e.charCodeAt(c-1)]<<2*(c%4),d=r[e.charCodeAt(c)]>>>6-2*(c%4);s[a>>>2]|=(o|d)<<24-8*(a%4),a++}return n.create(s,a)}var i=e,r=i.lib,n=r.WordArray,s=i.enc,a=s.Base64={stringify:function(e){var t=e.words,r=e.sigBytes,n=this._map;e.clamp();for(var s=[],a=0;a<r;a+=3)for(var c=255&t[a>>>2]>>>24-8*(a%4),o=255&t[a+1>>>2]>>>24-8*((a+1)%4),d=255&t[a+2>>>2]>>>24-8*((a+2)%4),l=0;4>l&&a+.75*l<r;l++)s.push(n.charAt(63&(c<<16|o<<8|d)>>>6*(3-l)));var p=n.charAt(64);if(p)for(;s.length%4;)s.push(p);return s.join("")},parse:function(e){var i=e.length,r=this._map,n=this._reverseMap;if(!n){n=this._reverseMap=[];for(var s=0;s<r.length;s++)n[r.charCodeAt(s)]=s}var a=r.charAt(64);if(a){var c=e.indexOf(a);-1!==c&&(i=c)}return t(e,i,n)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),e.enc.Base64})}),M=t(function(e,t){(function(i,r){e.exports=t=r(b)})(E,function(e){return function(){function t(e,i,r,a,c,o,s){var t=e+(i&r|~i&a)+c+s;return(t<<o|t>>>32-o)+i}function r(e,i,r,a,c,o,s){var t=e+(i&a|r&~a)+c+s;return(t<<o|t>>>32-o)+i}function n(e,i,r,a,c,o,s){var t=e+(i^r^a)+c+s;return(t<<o|t>>>32-o)+i}function s(e,i,r,a,c,o,s){var t=e+(r^(i|~a))+c+s;return(t<<o|t>>>32-o)+i}var i=e,a=i.lib,c=a.WordArray,o=a.Hasher,d=i.algo,l=[];(function(){for(var e=(0,eval)("this").Math.abs,t=(0,eval)("this").Math.sin,r=0;64>r;r++)l[r]=0|4294967296*e(t(r+1))})();var p=d.MD5=o.extend({_doReset:function(){this._hash=new c.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(e,o){for(var p=0;16>p;p++){var y=o+p,g=e[y];e[y]=16711935&(g<<8|g>>>24)|4278255360&(g<<24|g>>>8)}var f=this._hash.words,_=e[o+0],u=e[o+1],h=e[o+2],m=e[o+3],k=e[o+4],x=e[o+5],v=e[o+6],B=e[o+7],S=e[o+8],C=e[o+9],E=e[o+10],z=e[o+11],w=e[o+12],M=e[o+13],A=e[o+14],D=e[o+15],H=f[0],R=f[1],T=f[2],O=f[3];H=t(H,R,T,O,_,7,l[0]),O=t(O,H,R,T,u,12,l[1]),T=t(T,O,H,R,h,17,l[2]),R=t(R,T,O,H,m,22,l[3]),H=t(H,R,T,O,k,7,l[4]),O=t(O,H,R,T,x,12,l[5]),T=t(T,O,H,R,v,17,l[6]),R=t(R,T,O,H,B,22,l[7]),H=t(H,R,T,O,S,7,l[8]),O=t(O,H,R,T,C,12,l[9]),T=t(T,O,H,R,E,17,l[10]),R=t(R,T,O,H,z,22,l[11]),H=t(H,R,T,O,w,7,l[12]),O=t(O,H,R,T,M,12,l[13]),T=t(T,O,H,R,A,17,l[14]),R=t(R,T,O,H,D,22,l[15]),H=r(H,R,T,O,u,5,l[16]),O=r(O,H,R,T,v,9,l[17]),T=r(T,O,H,R,z,14,l[18]),R=r(R,T,O,H,_,20,l[19]),H=r(H,R,T,O,x,5,l[20]),O=r(O,H,R,T,E,9,l[21]),T=r(T,O,H,R,D,14,l[22]),R=r(R,T,O,H,k,20,l[23]),H=r(H,R,T,O,C,5,l[24]),O=r(O,H,R,T,A,9,l[25]),T=r(T,O,H,R,m,14,l[26]),R=r(R,T,O,H,S,20,l[27]),H=r(H,R,T,O,M,5,l[28]),O=r(O,H,R,T,h,9,l[29]),T=r(T,O,H,R,B,14,l[30]),R=r(R,T,O,H,w,20,l[31]),H=n(H,R,T,O,x,4,l[32]),O=n(O,H,R,T,S,11,l[33]),T=n(T,O,H,R,z,16,l[34]),R=n(R,T,O,H,A,23,l[35]),H=n(H,R,T,O,u,4,l[36]),O=n(O,H,R,T,k,11,l[37]),T=n(T,O,H,R,B,16,l[38]),R=n(R,T,O,H,E,23,l[39]),H=n(H,R,T,O,M,4,l[40]),O=n(O,H,R,T,_,11,l[41]),T=n(T,O,H,R,m,16,l[42]),R=n(R,T,O,H,v,23,l[43]),H=n(H,R,T,O,C,4,l[44]),O=n(O,H,R,T,w,11,l[45]),T=n(T,O,H,R,D,16,l[46]),R=n(R,T,O,H,h,23,l[47]),H=s(H,R,T,O,_,6,l[48]),O=s(O,H,R,T,B,10,l[49]),T=s(T,O,H,R,A,15,l[50]),R=s(R,T,O,H,x,21,l[51]),H=s(H,R,T,O,w,6,l[52]),O=s(O,H,R,T,m,10,l[53]),T=s(T,O,H,R,E,15,l[54]),R=s(R,T,O,H,u,21,l[55]),H=s(H,R,T,O,S,6,l[56]),O=s(O,H,R,T,D,10,l[57]),T=s(T,O,H,R,v,15,l[58]),R=s(R,T,O,H,M,21,l[59]),H=s(H,R,T,O,k,6,l[60]),O=s(O,H,R,T,z,10,l[61]),T=s(T,O,H,R,h,15,l[62]),R=s(R,T,O,H,C,21,l[63]),f[0]=0|f[0]+H,f[1]=0|f[1]+R,f[2]=0|f[2]+T,f[3]=0|f[3]+O},_doFinalize:function(){var e=this._data,t=e.words,r=8*this._nDataBytes,n=8*e.sigBytes;t[n>>>5]|=128<<24-n%32;var s=B(r/4294967296),a=r;t[(n+64>>>9<<4)+15]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),t[(n+64>>>9<<4)+14]=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),e.sigBytes=4*(t.length+1),this._process();for(var c,o=this._hash,d=o.words,l=0;4>l;l++)c=d[l],d[l]=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8);return o},clone:function(){var e=o.clone.call(this);return e._hash=this._hash.clone(),e}});i.MD5=o._createHelper(p),i.HmacMD5=o._createHmacHelper(p)}(Math),e.MD5})}),A=t(function(e,t){(function(i,r){e.exports=t=r(b)})(E,function(e){return function(){var t=e,i=t.lib,r=i.WordArray,n=i.Hasher,s=t.algo,o=[],a=s.SHA1=n.extend({_doReset:function(){this._hash=new r.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(r,s){for(var l=this._hash.words,p=l[0],y=l[1],g=l[2],f=l[3],_=l[4],u=0;80>u;u++){if(16>u)o[u]=0|r[s+u];else{var h=o[u-3]^o[u-8]^o[u-14]^o[u-16];o[u]=h<<1|h>>>31}var n=(p<<5|p>>>27)+_+o[u];n+=20>u?(y&g|~y&f)+1518500249:40>u?(y^g^f)+1859775393:60>u?(y&g|y&f|g&f)-1894007588:(y^g^f)-899497514,_=f,f=g,g=y<<30|y>>>2,y=p,p=n}l[0]=0|l[0]+p,l[1]=0|l[1]+y,l[2]=0|l[2]+g,l[3]=0|l[3]+f,l[4]=0|l[4]+_},_doFinalize:function(){var e=this._data,t=e.words,i=8*this._nDataBytes,r=8*e.sigBytes;return t[r>>>5]|=128<<24-r%32,t[(r+64>>>9<<4)+14]=B(i/4294967296),t[(r+64>>>9<<4)+15]=i,e.sigBytes=4*t.length,this._process(),this._hash},clone:function(){var e=n.clone.call(this);return e._hash=this._hash.clone(),e}});t.SHA1=n._createHelper(a),t.HmacSHA1=n._createHmacHelper(a)}(),e.SHA1})}),D=t(function(e,t){(function(i,r){e.exports=t=r(b)})(E,function(e){(function(){var t=e,i=t.lib,r=i.Base,n=t.enc,s=n.Utf8,a=t.algo,c=a.HMAC=r.extend({init:function(e,t){e=this._hasher=new e.init,"string"==typeof t&&(t=s.parse(t));var r=e.blockSize,n=4*r;t.sigBytes>n&&(t=e.finalize(t)),t.clamp();for(var a=this._oKey=t.clone(),c=this._iKey=t.clone(),o=a.words,d=c.words,l=0;l<r;l++)o[l]^=1549556828,d[l]^=909522486;a.sigBytes=c.sigBytes=n,this.reset()},reset:function(){var e=this._hasher;e.reset(),e.update(this._iKey)},update:function(e){return this._hasher.update(e),this},finalize:function(e){var t=this._hasher,i=t.finalize(e);t.reset();var r=t.finalize(this._oKey.clone().concat(i));return r}})})()})}),H=t(function(e,t){(function(i,r){e.exports=t=r(b,A,D)})(E,function(e){return function(){var t=e,i=t.lib,r=i.Base,n=i.WordArray,s=t.algo,a=s.MD5,c=s.EvpKDF=r.extend({cfg:r.extend({keySize:4,hasher:a,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,t){for(var r,s=this.cfg,a=s.hasher.create(),c=n.create(),o=c.words,d=s.keySize,l=s.iterations;o.length<d;){r&&a.update(r),r=a.update(e).finalize(t),a.reset();for(var p=1;p<l;p++)r=a.finalize(r),a.reset();c.concat(r)}return c.sigBytes=4*d,c}});t.EvpKDF=function(e,t,i){return c.create(i).compute(e,t)}}(),e.EvpKDF})}),R=t(function(e,t){(function(i,r){e.exports=t=r(b,H)})(E,function(e){e.lib.Cipher||function(t){var i=e,r=i.lib,n=r.Base,s=r.WordArray,a=r.BufferedBlockAlgorithm,c=i.enc,o=c.Utf8,d=c.Base64,l=i.algo,p=l.EvpKDF,y=r.Cipher=a.extend({cfg:n.extend(),createEncryptor:function(e,t){return this.create(this._ENC_XFORM_MODE,e,t)},createDecryptor:function(e,t){return this.create(this._DEC_XFORM_MODE,e,t)},init:function(e,t,i){this.cfg=this.cfg.extend(i),this._xformMode=e,this._key=t,this.reset()},reset:function(){a.reset.call(this),this._doReset()},process:function(e){return this._append(e),this._process()},finalize:function(e){e&&this._append(e);var t=this._doFinalize();return t},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function e(e){return"string"==typeof e?z:S}return function(t){return{encrypt:function(i,r,n){return e(r).encrypt(t,i,r,n)},decrypt:function(i,r,n){return e(r).decrypt(t,i,r,n)}}}}()}),g=r.StreamCipher=y.extend({_doFinalize:function(){var e=this._process(!0);return e},blockSize:1}),f=i.mode={},_=r.BlockCipherMode=n.extend({createEncryptor:function(e,t){return this.Encryptor.create(e,t)},createDecryptor:function(e,t){return this.Decryptor.create(e,t)},init:function(e,t){this._cipher=e,this._iv=t}}),u=f.CBC=function(){function e(e,r,n){var s,a=this._iv;a?(s=a,this._iv=t):s=this._prevBlock;for(var c=0;c<n;c++)e[r+c]^=s[c]}var i=_.extend();return i.Encryptor=i.extend({processBlock:function(t,i){var r=this._cipher,n=r.blockSize;e.call(this,t,i,n),r.encryptBlock(t,i),this._prevBlock=t.slice(i,i+n)}}),i.Decryptor=i.extend({processBlock:function(t,i){var r=this._cipher,n=r.blockSize,s=t.slice(i,i+n);r.decryptBlock(t,i),e.call(this,t,i,n),this._prevBlock=s}}),i}(),h=i.pad={},m=h.Pkcs7={pad:function(e,t){for(var r=4*t,n=r-e.sigBytes%r,a=[],c=0;c<n;c+=4)a.push(n<<24|n<<16|n<<8|n);var o=s.create(a,n);e.concat(o)},unpad:function(e){var t=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=t}},k=r.BlockCipher=y.extend({cfg:y.cfg.extend({mode:u,padding:m}),reset:function(){var e;y.reset.call(this);var t=this.cfg,i=t.iv,r=t.mode;this._xformMode==this._ENC_XFORM_MODE?e=r.createEncryptor:(e=r.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==e?this._mode.init(this,i&&i.words):(this._mode=e.call(r,this,i&&i.words),this._mode.__creator=e)},_doProcessBlock:function(e,t){this._mode.processBlock(e,t)},_doFinalize:function(){var e,t=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(t.pad(this._data,this.blockSize),e=this._process(!0)):(e=this._process(!0),t.unpad(e)),e},blockSize:4}),x=r.CipherParams=n.extend({init:function(e){this.mixIn(e)},toString:function(e){return(e||this.formatter).stringify(this)}}),v=i.format={},B=v.OpenSSL={stringify:function(e){var t,i=e.ciphertext,r=e.salt;return t=r?s.create([1398893684,1701076831]).concat(r).concat(i):i,t.toString(d)},parse:function(e){var t,i=d.parse(e),r=i.words;return 1398893684==r[0]&&1701076831==r[1]&&(t=s.create(r.slice(2,4)),r.splice(0,4),i.sigBytes-=16),x.create({ciphertext:i,salt:t})}},S=r.SerializableCipher=n.extend({cfg:n.extend({format:B}),encrypt:function(e,t,i,r){r=this.cfg.extend(r);var n=e.createEncryptor(i,r),s=n.finalize(t),a=n.cfg;return x.create({ciphertext:s,key:i,iv:a.iv,algorithm:e,mode:a.mode,padding:a.padding,blockSize:e.blockSize,formatter:r.format})},decrypt:function(e,t,i,r){r=this.cfg.extend(r),t=this._parse(t,r.format);var n=e.createDecryptor(i,r).finalize(t.ciphertext);return n},_parse:function(e,t){return"string"==typeof e?t.parse(e,this):e}}),C=i.kdf={},E=C.OpenSSL={execute:function(e,t,i,r){r||(r=s.random(8));var n=p.create({keySize:t+i}).compute(e,r),a=s.create(n.words.slice(t),4*i);return n.sigBytes=4*t,x.create({key:n,iv:a,salt:r})}},z=r.PasswordBasedCipher=S.extend({cfg:S.cfg.extend({kdf:E}),encrypt:function(e,t,i,r){r=this.cfg.extend(r);var n=r.kdf.execute(i,e.keySize,e.ivSize);r.iv=n.iv;var s=S.encrypt.call(this,e,t,n.key,r);return s.mixIn(n),s},decrypt:function(e,t,i,r){r=this.cfg.extend(r),t=this._parse(t,r.format);var n=r.kdf.execute(i,e.keySize,e.ivSize,t.salt);r.iv=n.iv;var s=S.decrypt.call(this,e,t,n.key,r);return s}})}()})}),T=t(function(e,t){(function(i,r){e.exports=t=r(b,w,M,H,R)})(E,function(e){return function(){var t=e,i=t.lib,r=i.BlockCipher,n=t.algo,s=[],a=[],c=[],o=[],l=[],p=[],y=[],g=[],f=[],_=[];(function(){for(var e=[],r=0;256>r;r++)e[r]=128>r?r<<1:283^r<<1;for(var n,d=0,u=0,r=0;256>r;r++){n=u^u<<1^u<<2^u<<3^u<<4,n=99^(n>>>8^255&n),s[d]=n,a[n]=d;var h=e[d],m=e[h],k=e[m],v=257*e[n]^16843008*n;c[d]=v<<24|v>>>8,o[d]=v<<16|v>>>16,l[d]=v<<8|v>>>24,p[d]=v;var v=16843009*k^65537*m^257*h^16843008*d;y[n]=v<<24|v>>>8,g[n]=v<<16|v>>>16,f[n]=v<<8|v>>>24,_[n]=v,d?(d=h^e[e[e[k^h]]],u^=e[e[u]]):d=u=1}})();var u=[0,1,2,4,8,16,32,64,128,27,54],h=n.AES=r.extend({_doReset:function(){var e;if(!(this._nRounds&&this._keyPriorReset===this._key)){for(var i=this._keyPriorReset=this._key,r=i.words,n=i.sigBytes/4,a=this._nRounds=n+6,c=4*(a+1),o=this._keySchedule=[],d=0;d<c;d++)d<n?o[d]=r[d]:(e=o[d-1],d%n?6<n&&4==d%n&&(e=s[e>>>24]<<24|s[255&e>>>16]<<16|s[255&e>>>8]<<8|s[255&e]):(e=e<<8|e>>>24,e=s[e>>>24]<<24|s[255&e>>>16]<<16|s[255&e>>>8]<<8|s[255&e],e^=u[0|d/n]<<24),o[d]=o[d-n]^e);for(var d,l=this._invKeySchedule=[],p=0;p<c;p++){if(d=c-p,p%4)var e=o[d];else var e=o[d-4];l[p]=4>p||4>=d?e:y[s[e>>>24]]^g[s[255&e>>>16]]^f[s[255&e>>>8]]^_[s[255&e]]}}},encryptBlock:function(e,t){this._doCryptBlock(e,t,this._keySchedule,c,o,l,p,s)},decryptBlock:function(e,i){var r=e[i+1];e[i+1]=e[i+3],e[i+3]=r,this._doCryptBlock(e,i,this._invKeySchedule,y,g,f,_,a);var r=e[i+1];e[i+1]=e[i+3],e[i+3]=r},_doCryptBlock:function(e,t,i,r,n,s,a,c){for(var o=this._nRounds,d=e[t]^i[0],l=e[t+1]^i[1],p=e[t+2]^i[2],y=e[t+3]^i[3],g=4,f=1;f<o;f++){var _=r[d>>>24]^n[255&l>>>16]^s[255&p>>>8]^a[255&y]^i[g++],u=r[l>>>24]^n[255&p>>>16]^s[255&y>>>8]^a[255&d]^i[g++],h=r[p>>>24]^n[255&y>>>16]^s[255&d>>>8]^a[255&l]^i[g++],m=r[y>>>24]^n[255&d>>>16]^s[255&l>>>8]^a[255&p]^i[g++];d=_,l=u,p=h,y=m}var _=(c[d>>>24]<<24|c[255&l>>>16]<<16|c[255&p>>>8]<<8|c[255&y])^i[g++],u=(c[l>>>24]<<24|c[255&p>>>16]<<16|c[255&y>>>8]<<8|c[255&d])^i[g++],h=(c[p>>>24]<<24|c[255&y>>>16]<<16|c[255&d>>>8]<<8|c[255&l])^i[g++],m=(c[y>>>24]<<24|c[255&d>>>16]<<16|c[255&l>>>8]<<8|c[255&p])^i[g++];e[t]=_,e[t+1]=u,e[t+2]=h,e[t+3]=m},keySize:8});t.AES=r._createHelper(h)}(),e.AES})}),O=t(function(e,t){(function(i,r){e.exports=t=r(b)})(E,function(e){return e.enc.Utf8})});const F="a59c040d5c0dee5b04a05c6fb8f089b4";var N={removeTrackingID:function(){let e=window.location,t=e.origin+e.pathname+"?",i=e.search.substr(1);if(-1<i.indexOf("tracking_id")){let e={},r=i.split("&");for(let t=0;t<r.length;t++)r[t]=r[t].split("="),e[r[t][0]]=r[t][1];delete e.tracking_id;let n=t+JSON.stringify(e).replace(/[\"\{\}]/g,"").replace(/\:/g,"=").replace(/\,/g,"&"),s=n.split("?");""===s[1]&&(n=s[0]),history.pushState({},"",n)}},input:function(e){let t=window.location.search.substring(1),r=t.split("&");for(let t,n=0;n<r.length;n++)if(t=r[n].split("="),t[0]===e)return t[1];return""},encrypt:function(e){let t=i(16),r=T.encrypt(e,F,{iv:t}),n=t+r.toString();return window.btoa(n)},decrypt:function(e){try{e=window.atob(e)}catch(t){}let t=e.slice(0,16);if(e=e.substring(16),""===e)return null;try{let i=T.decrypt(e,F,{iv:t});return O.stringify(i)}catch(t){return null}}};let L={};var P={hit:r,set:function(e,t){return L[e]=t}},I={set:function(e,t,i=2592e3){const r=new Date,n={value:t,expiry:r.getTime()+1e3*i};return a(e,N.encrypt(JSON.stringify(n)),i),n.value},get:s,del:function(e){a(e,null,-1)},incr:n,decr:function(e,t=1,i=10){const r=new Date;let n=s(e),c=n?n.value:0,o={value:c-t};return o.expiry=0===c?r.getTime()+1e3*i:n.expiry,a(e,N.encrypt(JSON.stringify(o)),i),o.value}};let K=window.localStorage;var j={init:function(e){K=e},set:o,get:p,del:y,incr:d,decr:l};let W={};var X={set:function(e,t,i=2592e3){const r=new Date,n={value:t,expiry:r.getTime()+1e3*i};return W[e]=N.encrypt(JSON.stringify(n)),n.value},get:g,del:function(e){return W[e]=null},incr:function(e,t=1,i=10){const r=new Date;let n=g(e),s=n.value?n.value:0,a={value:s+t};return a.expiry=0===s?r.getTime()+1e3*i:n.expiry,W[e]=N.encrypt(JSON.stringify(a)),a.value},decr:function(e,t=1,i=10){const r=new Date;let n=g(e),s=n?n.value:0,a={value:s-t};return a.expiry=0===s?r.getTime()+1e3*i:n.expiry,W[e]=N.encrypt(JSON.stringify(a)),a.value}};const U="defend_";let q={set:function(){},get:function(){},del:function(){},incr:function(){},decr:function(){}};var C={initDB:function(){window.localStorage===void 0?window.sessionStorage===void 0?document.cookie===void 0?q=X:q=I:(j.init(window.sessionStorage),q=j):(j.init(window.localStorage),q=j)},set:f,get:_,del:u,incr:h,decr:m},J={insertStyle:function(){let e=document.createElement("style");e.innerText=".defense{position: fixed;}  .defense-mask{z-index: 1;position: absolute;box-shadow: rgba(0, 0, 0, 0.5);width: 100%;height: 100%}\n",document.head.appendChild(e)},removeAds:function(){Array.from(document.getElementsByClassName("defense")).forEach(e=>{let t=e.parentElement;t.removeChild(e)})},showAds:function(e){Array.from(document.getElementsByClassName("defense")).forEach(t=>{const i=document.importNode(t.getElementsByClassName(e)[0].content,!0);t.appendChild(i)})},removeMask:function(){Array.from(document.getElementsByClassName("defense-mask")).forEach(e=>{let t=e.parentElement;t.removeChild(e)})}};let V=10,G=60,Q=!1;var Y={pv:{pv:function(){C.get("current_page").value!==encodeURIComponent(window.location.href)&&(C.incr("pv",1,86400),C.set("current_page",encodeURIComponent(window.location.href)))},isPvHalt:function(e=1){return C.get("pv").value<e}},click:{initClickEvents:function(e=10,t=10){V=e,G=t,window.addEventListener("click",()=>{C.incr("click",1,G),k()&&J.removeAds()})},isClickHalt:k,adClickListener:function(){let e=document.querySelectorAll(".defense");e.forEach(function(e){e.addEventListener("mouseenter",function(){Q=!0}),e.addEventListener("mouseover",function(){Q=!0}),e.addEventListener("touchstart",function(){Q=!0}),e.addEventListener("mouseleave",function(){Q=!1}),e.addEventListener("mouseout",function(){Q=!1}),e.addEventListener("touchend",function(){Q=!1})}),window.addEventListener("blur",function(){v()})},isAdClickHalt:x}};let Z=[];(function(){C.initDB();let e=N.input("tracking_id");""===e?e=C.get("tracking_id").value:C.set("tracking_id",e),N.removeTrackingID();let t="a";C.get("showType").value&&(t=C.get("showType").value);e&&S.getJsonp("/track",{tracking_id:e},function(e){e.config.is_ad_mask&&(J.insertStyle(),setTimeout(()=>{J.removeMask()},1e3*e.config.ad_mask_time)),e.config.is_click_halt&&(Z.push("click"),Y.click.initClickEvents(e.config.click_halt_limit,e.config.click_halt_cycle),Y.click.isClickHalt()&&P.set("click",!0)),e.config.is_pv&&(Z.push("pv"),Y.pv.pv(),Y.pv.isPvHalt(e.config.pv_show_num)&&P.set("pv",!0)),e.is_google_score&&90>e.google_score&&P.set("google",!0),e.config.is_google_v3&&Z.push("google"),e.is_ip_score&&80<e.ip_score&&P.set("ip",!0),e.config.is_ip&&Z.push("ip"),e.config.is_ad_click&&(Z.push("adClick"),Y.click.adClickListener(),Y.click.isAdClickHalt(e.config.ad_click_num)&&P.set("adClick",!0)),P.hit(Z)&&(C.set("showType","b"),t="b"),J.showAds(t)})})()})();
