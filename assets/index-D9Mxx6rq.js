(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ya="168",Bc=0,po=1,Gc=2,Ol=1,zc=2,gn=3,Un=0,Ut=1,on=2,In=0,Mi=1,mo=2,go=3,vo=4,Vc=5,qn=100,kc=101,Hc=102,Wc=103,Xc=104,qc=200,Yc=201,Qc=202,Kc=203,aa=204,oa=205,jc=206,Zc=207,$c=208,Jc=209,eu=210,tu=211,nu=212,iu=213,ru=214,su=0,au=1,ou=2,as=3,lu=4,cu=5,uu=6,hu=7,Bl=0,du=1,fu=2,Fn=0,pu=1,mu=2,gu=3,vu=4,Au=5,_u=6,xu=7,Gl=300,Ri=301,Ci=302,la=303,ca=304,ps=306,ua=1e3,Qn=1001,ha=1002,Xt=1003,Su=1004,Tr=1005,Jt=1006,Ss=1007,Kn=1008,xn=1009,zl=1010,Vl=1011,ur=1012,Qa=1013,$n=1014,An=1015,mr=1016,Ka=1017,ja=1018,Pi=1020,kl=35902,Hl=1021,Wl=1022,en=1023,Xl=1024,ql=1025,Ei=1026,Li=1027,Yl=1028,Za=1029,Ql=1030,$a=1031,Ja=1033,Jr=33776,es=33777,ts=33778,ns=33779,da=35840,fa=35841,pa=35842,ma=35843,ga=36196,va=37492,Aa=37496,_a=37808,xa=37809,Sa=37810,ya=37811,Ma=37812,Ea=37813,wa=37814,ba=37815,Ta=37816,Ra=37817,Ca=37818,Pa=37819,La=37820,Da=37821,is=36492,Ia=36494,Fa=36495,Kl=36283,Ua=36284,Na=36285,Oa=36286,yu=3200,Mu=3201,Eu=0,wu=1,Dn="",sn="srgb",Nn="srgb-linear",eo="display-p3",ms="display-p3-linear",os="linear",ut="srgb",ls="rec709",cs="p3",ri=7680,Ao=519,bu=512,Tu=513,Ru=514,jl=515,Cu=516,Pu=517,Lu=518,Du=519,_o=35044,xo="300 es",_n=2e3,us=2001;class Ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ys=Math.PI/180,Ba=180/Math.PI;function gr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]).toLowerCase()}function Bt(n,e,t){return Math.max(e,Math.min(t,n))}function Iu(n,e){return(n%e+e)%e}function Ms(n,e,t){return(1-t)*n+t*e}function ji(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,i,r,s,a,o,u,h){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,u,h)}set(e,t,i,r,s,a,o,u,h){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=s,d[5]=u,d[6]=i,d[7]=a,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],u=i[6],h=i[1],d=i[4],m=i[7],v=i[2],A=i[5],S=i[8],x=r[0],f=r[3],p=r[6],T=r[1],M=r[4],R=r[7],G=r[2],D=r[5],I=r[8];return s[0]=a*x+o*T+u*G,s[3]=a*f+o*M+u*D,s[6]=a*p+o*R+u*I,s[1]=h*x+d*T+m*G,s[4]=h*f+d*M+m*D,s[7]=h*p+d*R+m*I,s[2]=v*x+A*T+S*G,s[5]=v*f+A*M+S*D,s[8]=v*p+A*R+S*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],u=e[6],h=e[7],d=e[8];return t*a*d-t*o*h-i*s*d+i*o*u+r*s*h-r*a*u}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],u=e[6],h=e[7],d=e[8],m=d*a-o*h,v=o*u-d*s,A=h*s-a*u,S=t*m+i*v+r*A;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/S;return e[0]=m*x,e[1]=(r*h-d*i)*x,e[2]=(o*i-r*a)*x,e[3]=v*x,e[4]=(d*t-r*u)*x,e[5]=(r*s-o*t)*x,e[6]=A*x,e[7]=(i*u-h*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const u=Math.cos(s),h=Math.sin(s);return this.set(i*u,i*h,-i*(u*a+h*o)+a+e,-r*h,r*u,-r*(-h*a+u*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Es.makeScale(e,t)),this}rotate(e){return this.premultiply(Es.makeRotation(-e)),this}translate(e,t){return this.premultiply(Es.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Es=new He;function Zl(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function hr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Fu(){const n=hr("canvas");return n.style.display="block",n}const So={};function or(n){n in So||(So[n]=!0,console.warn(n))}function Uu(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const yo=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Mo=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zi={[Nn]:{transfer:os,primaries:ls,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[sn]:{transfer:ut,primaries:ls,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ms]:{transfer:os,primaries:cs,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Mo),fromReference:n=>n.applyMatrix3(yo)},[eo]:{transfer:ut,primaries:cs,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Mo),fromReference:n=>n.applyMatrix3(yo).convertLinearToSRGB()}},Nu=new Set([Nn,ms]),tt={enabled:!0,_workingColorSpace:Nn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Nu.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Zi[e].toReference,r=Zi[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Zi[n].primaries},getTransfer:function(n){return n===Dn?os:Zi[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Zi[e].luminanceCoefficients)}};function wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ws(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let si;class Ou{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{si===void 0&&(si=hr("canvas")),si.width=e.width,si.height=e.height;const i=si.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=si}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=wi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(wi(t[i]/255)*255):t[i]=wi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bu=0;class $l{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=gr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(bs(r[a].image)):s.push(bs(r[a]))}else s=bs(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function bs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ou.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gu=0;class Nt extends Ui{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,i=Qn,r=Qn,s=Jt,a=Kn,o=en,u=xn,h=Nt.DEFAULT_ANISOTROPY,d=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=gr(),this.name="",this.source=new $l(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=u,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ua:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ua:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=Gl;Nt.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,i=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const u=e.elements,h=u[0],d=u[4],m=u[8],v=u[1],A=u[5],S=u[9],x=u[2],f=u[6],p=u[10];if(Math.abs(d-v)<.01&&Math.abs(m-x)<.01&&Math.abs(S-f)<.01){if(Math.abs(d+v)<.1&&Math.abs(m+x)<.1&&Math.abs(S+f)<.1&&Math.abs(h+A+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(h+1)/2,R=(A+1)/2,G=(p+1)/2,D=(d+v)/4,I=(m+x)/4,H=(S+f)/4;return M>R&&M>G?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=D/i,s=I/i):R>G?R<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(R),i=D/r,s=H/r):G<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(G),i=I/s,r=H/s),this.set(i,r,s,t),this}let T=Math.sqrt((f-S)*(f-S)+(m-x)*(m-x)+(v-d)*(v-d));return Math.abs(T)<.001&&(T=1),this.x=(f-S)/T,this.y=(m-x)/T,this.z=(v-d)/T,this.w=Math.acos((h+A+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zu extends Ui{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Nt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $l(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends zu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Jl extends Nt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vu extends Nt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let u=i[r+0],h=i[r+1],d=i[r+2],m=i[r+3];const v=s[a+0],A=s[a+1],S=s[a+2],x=s[a+3];if(o===0){e[t+0]=u,e[t+1]=h,e[t+2]=d,e[t+3]=m;return}if(o===1){e[t+0]=v,e[t+1]=A,e[t+2]=S,e[t+3]=x;return}if(m!==x||u!==v||h!==A||d!==S){let f=1-o;const p=u*v+h*A+d*S+m*x,T=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const G=Math.sqrt(M),D=Math.atan2(G,p*T);f=Math.sin(f*D)/G,o=Math.sin(o*D)/G}const R=o*T;if(u=u*f+v*R,h=h*f+A*R,d=d*f+S*R,m=m*f+x*R,f===1-o){const G=1/Math.sqrt(u*u+h*h+d*d+m*m);u*=G,h*=G,d*=G,m*=G}}e[t]=u,e[t+1]=h,e[t+2]=d,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],u=i[r+1],h=i[r+2],d=i[r+3],m=s[a],v=s[a+1],A=s[a+2],S=s[a+3];return e[t]=o*S+d*m+u*A-h*v,e[t+1]=u*S+d*v+h*m-o*A,e[t+2]=h*S+d*A+o*v-u*m,e[t+3]=d*S-o*m-u*v-h*A,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,u=Math.sin,h=o(i/2),d=o(r/2),m=o(s/2),v=u(i/2),A=u(r/2),S=u(s/2);switch(a){case"XYZ":this._x=v*d*m+h*A*S,this._y=h*A*m-v*d*S,this._z=h*d*S+v*A*m,this._w=h*d*m-v*A*S;break;case"YXZ":this._x=v*d*m+h*A*S,this._y=h*A*m-v*d*S,this._z=h*d*S-v*A*m,this._w=h*d*m+v*A*S;break;case"ZXY":this._x=v*d*m-h*A*S,this._y=h*A*m+v*d*S,this._z=h*d*S+v*A*m,this._w=h*d*m-v*A*S;break;case"ZYX":this._x=v*d*m-h*A*S,this._y=h*A*m+v*d*S,this._z=h*d*S-v*A*m,this._w=h*d*m+v*A*S;break;case"YZX":this._x=v*d*m+h*A*S,this._y=h*A*m+v*d*S,this._z=h*d*S-v*A*m,this._w=h*d*m-v*A*S;break;case"XZY":this._x=v*d*m-h*A*S,this._y=h*A*m-v*d*S,this._z=h*d*S+v*A*m,this._w=h*d*m+v*A*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],u=t[9],h=t[2],d=t[6],m=t[10],v=i+o+m;if(v>0){const A=.5/Math.sqrt(v+1);this._w=.25/A,this._x=(d-u)*A,this._y=(s-h)*A,this._z=(a-r)*A}else if(i>o&&i>m){const A=2*Math.sqrt(1+i-o-m);this._w=(d-u)/A,this._x=.25*A,this._y=(r+a)/A,this._z=(s+h)/A}else if(o>m){const A=2*Math.sqrt(1+o-i-m);this._w=(s-h)/A,this._x=(r+a)/A,this._y=.25*A,this._z=(u+d)/A}else{const A=2*Math.sqrt(1+m-i-o);this._w=(a-r)/A,this._x=(s+h)/A,this._y=(u+d)/A,this._z=.25*A}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,u=t._y,h=t._z,d=t._w;return this._x=i*d+a*o+r*h-s*u,this._y=r*d+a*u+s*o-i*h,this._z=s*d+a*h+i*u-r*o,this._w=a*d-i*o-r*u-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const u=1-o*o;if(u<=Number.EPSILON){const A=1-t;return this._w=A*a+t*this._w,this._x=A*i+t*this._x,this._y=A*r+t*this._y,this._z=A*s+t*this._z,this.normalize(),this}const h=Math.sqrt(u),d=Math.atan2(h,o),m=Math.sin((1-t)*d)/h,v=Math.sin(t*d)/h;return this._w=a*m+this._w*v,this._x=i*m+this._x*v,this._y=r*m+this._y*v,this._z=s*m+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Eo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Eo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,u=e.w,h=2*(a*r-o*i),d=2*(o*t-s*r),m=2*(s*i-a*t);return this.x=t+u*h+a*m-o*d,this.y=i+u*d+o*h-s*m,this.z=r+u*m+s*d-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,u=t.z;return this.x=r*u-s*o,this.y=s*a-i*u,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ts.copy(this).projectOnVector(e),this.sub(Ts)}reflect(e){return this.sub(Ts.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ts=new $,Eo=new vr;class Ar{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qt):Qt.fromBufferAttribute(s,a),Qt.applyMatrix4(e.matrixWorld),this.expandByPoint(Qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rr.copy(i.boundingBox)),Rr.applyMatrix4(e.matrixWorld),this.union(Rr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($i),Cr.subVectors(this.max,$i),ai.subVectors(e.a,$i),oi.subVectors(e.b,$i),li.subVectors(e.c,$i),Mn.subVectors(oi,ai),En.subVectors(li,oi),On.subVectors(ai,li);let t=[0,-Mn.z,Mn.y,0,-En.z,En.y,0,-On.z,On.y,Mn.z,0,-Mn.x,En.z,0,-En.x,On.z,0,-On.x,-Mn.y,Mn.x,0,-En.y,En.x,0,-On.y,On.x,0];return!Rs(t,ai,oi,li,Cr)||(t=[1,0,0,0,1,0,0,0,1],!Rs(t,ai,oi,li,Cr))?!1:(Pr.crossVectors(Mn,En),t=[Pr.x,Pr.y,Pr.z],Rs(t,ai,oi,li,Cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hn=[new $,new $,new $,new $,new $,new $,new $,new $],Qt=new $,Rr=new Ar,ai=new $,oi=new $,li=new $,Mn=new $,En=new $,On=new $,$i=new $,Cr=new $,Pr=new $,Bn=new $;function Rs(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Bn.fromArray(n,s);const o=r.x*Math.abs(Bn.x)+r.y*Math.abs(Bn.y)+r.z*Math.abs(Bn.z),u=e.dot(Bn),h=t.dot(Bn),d=i.dot(Bn);if(Math.max(-Math.max(u,h,d),Math.min(u,h,d))>o)return!1}return!0}const ku=new Ar,Ji=new $,Cs=new $;class to{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ku.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ji.subVectors(e,this.center);const t=Ji.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ji,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ji.copy(e.center).add(Cs)),this.expandByPoint(Ji.copy(e.center).sub(Cs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new $,Ps=new $,Lr=new $,wn=new $,Ls=new $,Dr=new $,Ds=new $;class Hu{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.origin).addScaledVector(this.direction,t),dn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ps.copy(e).add(t).multiplyScalar(.5),Lr.copy(t).sub(e).normalize(),wn.copy(this.origin).sub(Ps);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Lr),o=wn.dot(this.direction),u=-wn.dot(Lr),h=wn.lengthSq(),d=Math.abs(1-a*a);let m,v,A,S;if(d>0)if(m=a*u-o,v=a*o-u,S=s*d,m>=0)if(v>=-S)if(v<=S){const x=1/d;m*=x,v*=x,A=m*(m+a*v+2*o)+v*(a*m+v+2*u)+h}else v=s,m=Math.max(0,-(a*v+o)),A=-m*m+v*(v+2*u)+h;else v=-s,m=Math.max(0,-(a*v+o)),A=-m*m+v*(v+2*u)+h;else v<=-S?(m=Math.max(0,-(-a*s+o)),v=m>0?-s:Math.min(Math.max(-s,-u),s),A=-m*m+v*(v+2*u)+h):v<=S?(m=0,v=Math.min(Math.max(-s,-u),s),A=v*(v+2*u)+h):(m=Math.max(0,-(a*s+o)),v=m>0?s:Math.min(Math.max(-s,-u),s),A=-m*m+v*(v+2*u)+h);else v=a>0?-s:s,m=Math.max(0,-(a*v+o)),A=-m*m+v*(v+2*u)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(Ps).addScaledVector(Lr,v),A}intersectSphere(e,t){dn.subVectors(e.center,this.origin);const i=dn.dot(this.direction),r=dn.dot(dn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,u=i+a;return u<0?null:o<0?this.at(u,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,u;const h=1/this.direction.x,d=1/this.direction.y,m=1/this.direction.z,v=this.origin;return h>=0?(i=(e.min.x-v.x)*h,r=(e.max.x-v.x)*h):(i=(e.max.x-v.x)*h,r=(e.min.x-v.x)*h),d>=0?(s=(e.min.y-v.y)*d,a=(e.max.y-v.y)*d):(s=(e.max.y-v.y)*d,a=(e.min.y-v.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),m>=0?(o=(e.min.z-v.z)*m,u=(e.max.z-v.z)*m):(o=(e.max.z-v.z)*m,u=(e.min.z-v.z)*m),i>u||o>r)||((o>i||i!==i)&&(i=o),(u<r||r!==r)&&(r=u),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,i,r,s){Ls.subVectors(t,e),Dr.subVectors(i,e),Ds.crossVectors(Ls,Dr);let a=this.direction.dot(Ds),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wn.subVectors(this.origin,e);const u=o*this.direction.dot(Dr.crossVectors(wn,Dr));if(u<0)return null;const h=o*this.direction.dot(Ls.cross(wn));if(h<0||u+h>a)return null;const d=-o*wn.dot(Ds);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,i,r,s,a,o,u,h,d,m,v,A,S,x,f){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,u,h,d,m,v,A,S,x,f)}set(e,t,i,r,s,a,o,u,h,d,m,v,A,S,x,f){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=u,p[2]=h,p[6]=d,p[10]=m,p[14]=v,p[3]=A,p[7]=S,p[11]=x,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ci.setFromMatrixColumn(e,0).length(),s=1/ci.setFromMatrixColumn(e,1).length(),a=1/ci.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),u=Math.cos(r),h=Math.sin(r),d=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const v=a*d,A=a*m,S=o*d,x=o*m;t[0]=u*d,t[4]=-u*m,t[8]=h,t[1]=A+S*h,t[5]=v-x*h,t[9]=-o*u,t[2]=x-v*h,t[6]=S+A*h,t[10]=a*u}else if(e.order==="YXZ"){const v=u*d,A=u*m,S=h*d,x=h*m;t[0]=v+x*o,t[4]=S*o-A,t[8]=a*h,t[1]=a*m,t[5]=a*d,t[9]=-o,t[2]=A*o-S,t[6]=x+v*o,t[10]=a*u}else if(e.order==="ZXY"){const v=u*d,A=u*m,S=h*d,x=h*m;t[0]=v-x*o,t[4]=-a*m,t[8]=S+A*o,t[1]=A+S*o,t[5]=a*d,t[9]=x-v*o,t[2]=-a*h,t[6]=o,t[10]=a*u}else if(e.order==="ZYX"){const v=a*d,A=a*m,S=o*d,x=o*m;t[0]=u*d,t[4]=S*h-A,t[8]=v*h+x,t[1]=u*m,t[5]=x*h+v,t[9]=A*h-S,t[2]=-h,t[6]=o*u,t[10]=a*u}else if(e.order==="YZX"){const v=a*u,A=a*h,S=o*u,x=o*h;t[0]=u*d,t[4]=x-v*m,t[8]=S*m+A,t[1]=m,t[5]=a*d,t[9]=-o*d,t[2]=-h*d,t[6]=A*m+S,t[10]=v-x*m}else if(e.order==="XZY"){const v=a*u,A=a*h,S=o*u,x=o*h;t[0]=u*d,t[4]=-m,t[8]=h*d,t[1]=v*m+x,t[5]=a*d,t[9]=A*m-S,t[2]=S*m-A,t[6]=o*d,t[10]=x*m+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wu,e,Xu)}lookAt(e,t,i){const r=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),bn.crossVectors(i,zt),bn.lengthSq()===0&&(Math.abs(i.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),bn.crossVectors(i,zt)),bn.normalize(),Ir.crossVectors(zt,bn),r[0]=bn.x,r[4]=Ir.x,r[8]=zt.x,r[1]=bn.y,r[5]=Ir.y,r[9]=zt.y,r[2]=bn.z,r[6]=Ir.z,r[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],u=i[8],h=i[12],d=i[1],m=i[5],v=i[9],A=i[13],S=i[2],x=i[6],f=i[10],p=i[14],T=i[3],M=i[7],R=i[11],G=i[15],D=r[0],I=r[4],H=r[8],C=r[12],w=r[1],L=r[5],k=r[9],N=r[13],B=r[2],J=r[6],Q=r[10],ee=r[14],Z=r[3],pe=r[7],Ae=r[11],Se=r[15];return s[0]=a*D+o*w+u*B+h*Z,s[4]=a*I+o*L+u*J+h*pe,s[8]=a*H+o*k+u*Q+h*Ae,s[12]=a*C+o*N+u*ee+h*Se,s[1]=d*D+m*w+v*B+A*Z,s[5]=d*I+m*L+v*J+A*pe,s[9]=d*H+m*k+v*Q+A*Ae,s[13]=d*C+m*N+v*ee+A*Se,s[2]=S*D+x*w+f*B+p*Z,s[6]=S*I+x*L+f*J+p*pe,s[10]=S*H+x*k+f*Q+p*Ae,s[14]=S*C+x*N+f*ee+p*Se,s[3]=T*D+M*w+R*B+G*Z,s[7]=T*I+M*L+R*J+G*pe,s[11]=T*H+M*k+R*Q+G*Ae,s[15]=T*C+M*N+R*ee+G*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],u=e[9],h=e[13],d=e[2],m=e[6],v=e[10],A=e[14],S=e[3],x=e[7],f=e[11],p=e[15];return S*(+s*u*m-r*h*m-s*o*v+i*h*v+r*o*A-i*u*A)+x*(+t*u*A-t*h*v+s*a*v-r*a*A+r*h*d-s*u*d)+f*(+t*h*m-t*o*A-s*a*m+i*a*A+s*o*d-i*h*d)+p*(-r*o*d-t*u*m+t*o*v+r*a*m-i*a*v+i*u*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],u=e[6],h=e[7],d=e[8],m=e[9],v=e[10],A=e[11],S=e[12],x=e[13],f=e[14],p=e[15],T=m*f*h-x*v*h+x*u*A-o*f*A-m*u*p+o*v*p,M=S*v*h-d*f*h-S*u*A+a*f*A+d*u*p-a*v*p,R=d*x*h-S*m*h+S*o*A-a*x*A-d*o*p+a*m*p,G=S*m*u-d*x*u-S*o*v+a*x*v+d*o*f-a*m*f,D=t*T+i*M+r*R+s*G;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/D;return e[0]=T*I,e[1]=(x*v*s-m*f*s-x*r*A+i*f*A+m*r*p-i*v*p)*I,e[2]=(o*f*s-x*u*s+x*r*h-i*f*h-o*r*p+i*u*p)*I,e[3]=(m*u*s-o*v*s-m*r*h+i*v*h+o*r*A-i*u*A)*I,e[4]=M*I,e[5]=(d*f*s-S*v*s+S*r*A-t*f*A-d*r*p+t*v*p)*I,e[6]=(S*u*s-a*f*s-S*r*h+t*f*h+a*r*p-t*u*p)*I,e[7]=(a*v*s-d*u*s+d*r*h-t*v*h-a*r*A+t*u*A)*I,e[8]=R*I,e[9]=(S*m*s-d*x*s-S*i*A+t*x*A+d*i*p-t*m*p)*I,e[10]=(a*x*s-S*o*s+S*i*h-t*x*h-a*i*p+t*o*p)*I,e[11]=(d*o*s-a*m*s-d*i*h+t*m*h+a*i*A-t*o*A)*I,e[12]=G*I,e[13]=(d*x*r-S*m*r+S*i*v-t*x*v-d*i*f+t*m*f)*I,e[14]=(S*o*r-a*x*r-S*i*u+t*x*u+a*i*f-t*o*f)*I,e[15]=(a*m*r-d*o*r+d*i*u-t*m*u-a*i*v+t*o*v)*I,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,u=e.z,h=s*a,d=s*o;return this.set(h*a+i,h*o-r*u,h*u+r*o,0,h*o+r*u,d*o+i,d*u-r*a,0,h*u-r*o,d*u+r*a,s*u*u+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,u=t._w,h=s+s,d=a+a,m=o+o,v=s*h,A=s*d,S=s*m,x=a*d,f=a*m,p=o*m,T=u*h,M=u*d,R=u*m,G=i.x,D=i.y,I=i.z;return r[0]=(1-(x+p))*G,r[1]=(A+R)*G,r[2]=(S-M)*G,r[3]=0,r[4]=(A-R)*D,r[5]=(1-(v+p))*D,r[6]=(f+T)*D,r[7]=0,r[8]=(S+M)*I,r[9]=(f-T)*I,r[10]=(1-(v+x))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ci.set(r[0],r[1],r[2]).length();const a=ci.set(r[4],r[5],r[6]).length(),o=ci.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Kt.copy(this);const h=1/s,d=1/a,m=1/o;return Kt.elements[0]*=h,Kt.elements[1]*=h,Kt.elements[2]*=h,Kt.elements[4]*=d,Kt.elements[5]*=d,Kt.elements[6]*=d,Kt.elements[8]*=m,Kt.elements[9]*=m,Kt.elements[10]*=m,t.setFromRotationMatrix(Kt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=_n){const u=this.elements,h=2*s/(t-e),d=2*s/(i-r),m=(t+e)/(t-e),v=(i+r)/(i-r);let A,S;if(o===_n)A=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===us)A=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=m,u[12]=0,u[1]=0,u[5]=d,u[9]=v,u[13]=0,u[2]=0,u[6]=0,u[10]=A,u[14]=S,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=_n){const u=this.elements,h=1/(t-e),d=1/(i-r),m=1/(a-s),v=(t+e)*h,A=(i+r)*d;let S,x;if(o===_n)S=(a+s)*m,x=-2*m;else if(o===us)S=s*m,x=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=2*h,u[4]=0,u[8]=0,u[12]=-v,u[1]=0,u[5]=2*d,u[9]=0,u[13]=-A,u[2]=0,u[6]=0,u[10]=x,u[14]=-S,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ci=new $,Kt=new mt,Wu=new $(0,0,0),Xu=new $(1,1,1),bn=new $,Ir=new $,zt=new $,wo=new mt,bo=new vr;class Sn{constructor(e=0,t=0,i=0,r=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],u=r[1],h=r[5],d=r[9],m=r[2],v=r[6],A=r[10];switch(t){case"XYZ":this._y=Math.asin(Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,A),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,A),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-m,A),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-Bt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(v,A),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(o,A));break;case"XZY":this._z=Math.asin(-Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,A),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wo,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bo.setFromEuler(this),this.setFromQuaternion(bo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class ec{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qu=0;const To=new $,ui=new vr,fn=new mt,Fr=new $,er=new $,Yu=new $,Qu=new vr,Ro=new $(1,0,0),Co=new $(0,1,0),Po=new $(0,0,1),Lo={type:"added"},Ku={type:"removed"},hi={type:"childadded",child:null},Is={type:"childremoved",child:null};class Pt extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new $,t=new Sn,i=new vr,r=new $(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new He}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ec,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.multiply(ui),this}rotateOnWorldAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.premultiply(ui),this}rotateX(e){return this.rotateOnAxis(Ro,e)}rotateY(e){return this.rotateOnAxis(Co,e)}rotateZ(e){return this.rotateOnAxis(Po,e)}translateOnAxis(e,t){return To.copy(e).applyQuaternion(this.quaternion),this.position.add(To.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ro,e)}translateY(e){return this.translateOnAxis(Co,e)}translateZ(e){return this.translateOnAxis(Po,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fr.copy(e):Fr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(er,Fr,this.up):fn.lookAt(Fr,er,this.up),this.quaternion.setFromRotationMatrix(fn),r&&(fn.extractRotation(r.matrixWorld),ui.setFromRotationMatrix(fn),this.quaternion.premultiply(ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lo),hi.child=e,this.dispatchEvent(hi),hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ku),Is.child=e,this.dispatchEvent(Is),Is.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lo),hi.child=e,this.dispatchEvent(hi),hi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,e,Yu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,Qu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,u){return o[u.uuid]===void 0&&(o[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const u=o.shapes;if(Array.isArray(u))for(let h=0,d=u.length;h<d;h++){const m=u[h];s(e.shapes,m)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let u=0,h=this.material.length;u<h;u++)o.push(s(e.materials,this.material[u]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const u=this.animations[o];r.animations.push(s(e.animations,u))}}if(t){const o=a(e.geometries),u=a(e.materials),h=a(e.textures),d=a(e.images),m=a(e.shapes),v=a(e.skeletons),A=a(e.animations),S=a(e.nodes);o.length>0&&(i.geometries=o),u.length>0&&(i.materials=u),h.length>0&&(i.textures=h),d.length>0&&(i.images=d),m.length>0&&(i.shapes=m),v.length>0&&(i.skeletons=v),A.length>0&&(i.animations=A),S.length>0&&(i.nodes=S)}return i.object=r,i;function a(o){const u=[];for(const h in o){const d=o[h];delete d.metadata,u.push(d)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Pt.DEFAULT_UP=new $(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jt=new $,pn=new $,Fs=new $,mn=new $,di=new $,fi=new $,Do=new $,Us=new $,Ns=new $,Os=new $;class ln{constructor(e=new $,t=new $,i=new $){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),jt.subVectors(e,t),r.cross(jt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){jt.subVectors(r,t),pn.subVectors(i,t),Fs.subVectors(e,t);const a=jt.dot(jt),o=jt.dot(pn),u=jt.dot(Fs),h=pn.dot(pn),d=pn.dot(Fs),m=a*h-o*o;if(m===0)return s.set(0,0,0),null;const v=1/m,A=(h*u-o*d)*v,S=(a*d-o*u)*v;return s.set(1-A-S,S,A)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(e,t,i,r,s,a,o,u){return this.getBarycoord(e,t,i,r,mn)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,mn.x),u.addScaledVector(a,mn.y),u.addScaledVector(o,mn.z),u)}static isFrontFacing(e,t,i,r){return jt.subVectors(i,t),pn.subVectors(e,t),jt.cross(pn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),jt.cross(pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ln.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;di.subVectors(r,i),fi.subVectors(s,i),Us.subVectors(e,i);const u=di.dot(Us),h=fi.dot(Us);if(u<=0&&h<=0)return t.copy(i);Ns.subVectors(e,r);const d=di.dot(Ns),m=fi.dot(Ns);if(d>=0&&m<=d)return t.copy(r);const v=u*m-d*h;if(v<=0&&u>=0&&d<=0)return a=u/(u-d),t.copy(i).addScaledVector(di,a);Os.subVectors(e,s);const A=di.dot(Os),S=fi.dot(Os);if(S>=0&&A<=S)return t.copy(s);const x=A*h-u*S;if(x<=0&&h>=0&&S<=0)return o=h/(h-S),t.copy(i).addScaledVector(fi,o);const f=d*S-A*m;if(f<=0&&m-d>=0&&A-S>=0)return Do.subVectors(s,r),o=(m-d)/(m-d+(A-S)),t.copy(r).addScaledVector(Do,o);const p=1/(f+x+v);return a=x*p,o=v*p,t.copy(i).addScaledVector(di,a).addScaledVector(fi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function Bs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=tt.workingColorSpace){if(e=Iu(e,1),t=Bt(t,0,1),i=Bt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Bs(a,s,e+1/3),this.g=Bs(a,s,e),this.b=Bs(a,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,t=sn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){const i=tc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return tt.fromWorkingColorSpace(Tt.copy(this),e),Math.round(Bt(Tt.r*255,0,255))*65536+Math.round(Bt(Tt.g*255,0,255))*256+Math.round(Bt(Tt.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Tt.copy(this),t);const i=Tt.r,r=Tt.g,s=Tt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let u,h;const d=(o+a)/2;if(o===a)u=0,h=0;else{const m=a-o;switch(h=d<=.5?m/(a+o):m/(2-a-o),a){case i:u=(r-s)/m+(r<s?6:0);break;case r:u=(s-i)/m+2;break;case s:u=(i-r)/m+4;break}u/=6}return e.h=u,e.s=h,e.l=d,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=sn){tt.fromWorkingColorSpace(Tt.copy(this),e);const t=Tt.r,i=Tt.g,r=Tt.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Tn),this.setHSL(Tn.h+e,Tn.s+t,Tn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Tn),e.getHSL(Ur);const i=Ms(Tn.h,Ur.h,t),r=Ms(Tn.s,Ur.s,t),s=Ms(Tn.l,Ur.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new nt;nt.NAMES=tc;let ju=0;class gs extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=gr(),this.name="",this.type="Material",this.blending=Mi,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=aa,this.blendDst=oa,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ao,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ri,this.stencilZFail=ri,this.stencilZPass=ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(i.blending=this.blending),this.side!==Un&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==aa&&(i.blendSrc=this.blendSrc),this.blendDst!==oa&&(i.blendDst=this.blendDst),this.blendEquation!==qn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ao&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ri&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ri&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ri&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const u=s[o];delete u.metadata,a.push(u)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class no extends gs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new $,Nr=new $e;class cn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=_o,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return or("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Nr.fromBufferAttribute(this,t),Nr.applyMatrix3(e),this.setXY(t,Nr.x,Nr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ji(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_o&&(e.usage=this.usage),e}}class nc extends cn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ic extends cn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class jn extends cn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Zu=0;const Ht=new mt,Gs=new Pt,pi=new $,Vt=new Ar,tr=new Ar,Mt=new $;class ti extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=gr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zl(e)?ic:nc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,i){return Ht.makeTranslation(e,t,i),this.applyMatrix4(Ht),this}scale(e,t,i){return Ht.makeScale(e,t,i),this.applyMatrix4(Ht),this}lookAt(e){return Gs.lookAt(e),Gs.updateMatrix(),this.applyMatrix4(Gs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new jn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Vt.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new to);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];tr.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(Vt.min,tr.min),Vt.expandByPoint(Mt),Mt.addVectors(Vt.max,tr.max),Vt.expandByPoint(Mt)):(Vt.expandByPoint(tr.min),Vt.expandByPoint(tr.max))}Vt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Mt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],u=this.morphTargetsRelative;for(let h=0,d=o.count;h<d;h++)Mt.fromBufferAttribute(o,h),u&&(pi.fromBufferAttribute(e,h),Mt.add(pi)),r=Math.max(r,i.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],u=[];for(let H=0;H<i.count;H++)o[H]=new $,u[H]=new $;const h=new $,d=new $,m=new $,v=new $e,A=new $e,S=new $e,x=new $,f=new $;function p(H,C,w){h.fromBufferAttribute(i,H),d.fromBufferAttribute(i,C),m.fromBufferAttribute(i,w),v.fromBufferAttribute(s,H),A.fromBufferAttribute(s,C),S.fromBufferAttribute(s,w),d.sub(h),m.sub(h),A.sub(v),S.sub(v);const L=1/(A.x*S.y-S.x*A.y);isFinite(L)&&(x.copy(d).multiplyScalar(S.y).addScaledVector(m,-A.y).multiplyScalar(L),f.copy(m).multiplyScalar(A.x).addScaledVector(d,-S.x).multiplyScalar(L),o[H].add(x),o[C].add(x),o[w].add(x),u[H].add(f),u[C].add(f),u[w].add(f))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let H=0,C=T.length;H<C;++H){const w=T[H],L=w.start,k=w.count;for(let N=L,B=L+k;N<B;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const M=new $,R=new $,G=new $,D=new $;function I(H){G.fromBufferAttribute(r,H),D.copy(G);const C=o[H];M.copy(C),M.sub(G.multiplyScalar(G.dot(C))).normalize(),R.crossVectors(D,C);const L=R.dot(u[H])<0?-1:1;a.setXYZW(H,M.x,M.y,M.z,L)}for(let H=0,C=T.length;H<C;++H){const w=T[H],L=w.start,k=w.count;for(let N=L,B=L+k;N<B;N+=3)I(e.getX(N+0)),I(e.getX(N+1)),I(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let v=0,A=i.count;v<A;v++)i.setXYZ(v,0,0,0);const r=new $,s=new $,a=new $,o=new $,u=new $,h=new $,d=new $,m=new $;if(e)for(let v=0,A=e.count;v<A;v+=3){const S=e.getX(v+0),x=e.getX(v+1),f=e.getX(v+2);r.fromBufferAttribute(t,S),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,f),d.subVectors(a,s),m.subVectors(r,s),d.cross(m),o.fromBufferAttribute(i,S),u.fromBufferAttribute(i,x),h.fromBufferAttribute(i,f),o.add(d),u.add(d),h.add(d),i.setXYZ(S,o.x,o.y,o.z),i.setXYZ(x,u.x,u.y,u.z),i.setXYZ(f,h.x,h.y,h.z)}else for(let v=0,A=t.count;v<A;v+=3)r.fromBufferAttribute(t,v+0),s.fromBufferAttribute(t,v+1),a.fromBufferAttribute(t,v+2),d.subVectors(a,s),m.subVectors(r,s),d.cross(m),i.setXYZ(v+0,d.x,d.y,d.z),i.setXYZ(v+1,d.x,d.y,d.z),i.setXYZ(v+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,u){const h=o.array,d=o.itemSize,m=o.normalized,v=new h.constructor(u.length*d);let A=0,S=0;for(let x=0,f=u.length;x<f;x++){o.isInterleavedBufferAttribute?A=u[x]*o.data.stride+o.offset:A=u[x]*d;for(let p=0;p<d;p++)v[S++]=h[A++]}return new cn(v,d,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ti,i=this.index.array,r=this.attributes;for(const o in r){const u=r[o],h=e(u,i);t.setAttribute(o,h)}const s=this.morphAttributes;for(const o in s){const u=[],h=s[o];for(let d=0,m=h.length;d<m;d++){const v=h[d],A=e(v,i);u.push(A)}t.morphAttributes[o]=u}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,u=a.length;o<u;o++){const h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const u in i){const h=i[u];e.data.attributes[u]=h.toJSON(e.data)}const r={};let s=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],d=[];for(let m=0,v=h.length;m<v;m++){const A=h[m];d.push(A.toJSON(e.data))}d.length>0&&(r[u]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const h in r){const d=r[h];this.setAttribute(h,d.clone(t))}const s=e.morphAttributes;for(const h in s){const d=[],m=s[h];for(let v=0,A=m.length;v<A;v++)d.push(m[v].clone(t));this.morphAttributes[h]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,d=a.length;h<d;h++){const m=a[h];this.addGroup(m.start,m.count,m.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Io=new mt,Gn=new Hu,Or=new to,Fo=new $,mi=new $,gi=new $,vi=new $,zs=new $,Br=new $,Gr=new $e,zr=new $e,Vr=new $e,Uo=new $,No=new $,Oo=new $,kr=new $,Hr=new $;class tn extends Pt{constructor(e=new ti,t=new no){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Br.set(0,0,0);for(let u=0,h=s.length;u<h;u++){const d=o[u],m=s[u];d!==0&&(zs.fromBufferAttribute(m,e),a?Br.addScaledVector(zs,d):Br.addScaledVector(zs.sub(t),d))}t.add(Br)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Or.copy(i.boundingSphere),Or.applyMatrix4(s),Gn.copy(e.ray).recast(e.near),!(Or.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(Or,Fo)===null||Gn.origin.distanceToSquared(Fo)>(e.far-e.near)**2))&&(Io.copy(s).invert(),Gn.copy(e.ray).applyMatrix4(Io),!(i.boundingBox!==null&&Gn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Gn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,u=s.attributes.position,h=s.attributes.uv,d=s.attributes.uv1,m=s.attributes.normal,v=s.groups,A=s.drawRange;if(o!==null)if(Array.isArray(a))for(let S=0,x=v.length;S<x;S++){const f=v[S],p=a[f.materialIndex],T=Math.max(f.start,A.start),M=Math.min(o.count,Math.min(f.start+f.count,A.start+A.count));for(let R=T,G=M;R<G;R+=3){const D=o.getX(R),I=o.getX(R+1),H=o.getX(R+2);r=Wr(this,p,e,i,h,d,m,D,I,H),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const S=Math.max(0,A.start),x=Math.min(o.count,A.start+A.count);for(let f=S,p=x;f<p;f+=3){const T=o.getX(f),M=o.getX(f+1),R=o.getX(f+2);r=Wr(this,a,e,i,h,d,m,T,M,R),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}else if(u!==void 0)if(Array.isArray(a))for(let S=0,x=v.length;S<x;S++){const f=v[S],p=a[f.materialIndex],T=Math.max(f.start,A.start),M=Math.min(u.count,Math.min(f.start+f.count,A.start+A.count));for(let R=T,G=M;R<G;R+=3){const D=R,I=R+1,H=R+2;r=Wr(this,p,e,i,h,d,m,D,I,H),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const S=Math.max(0,A.start),x=Math.min(u.count,A.start+A.count);for(let f=S,p=x;f<p;f+=3){const T=f,M=f+1,R=f+2;r=Wr(this,a,e,i,h,d,m,T,M,R),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}}}function $u(n,e,t,i,r,s,a,o){let u;if(e.side===Ut?u=i.intersectTriangle(a,s,r,!0,o):u=i.intersectTriangle(r,s,a,e.side===Un,o),u===null)return null;Hr.copy(o),Hr.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(Hr);return h<t.near||h>t.far?null:{distance:h,point:Hr.clone(),object:n}}function Wr(n,e,t,i,r,s,a,o,u,h){n.getVertexPosition(o,mi),n.getVertexPosition(u,gi),n.getVertexPosition(h,vi);const d=$u(n,e,t,i,mi,gi,vi,kr);if(d){r&&(Gr.fromBufferAttribute(r,o),zr.fromBufferAttribute(r,u),Vr.fromBufferAttribute(r,h),d.uv=ln.getInterpolation(kr,mi,gi,vi,Gr,zr,Vr,new $e)),s&&(Gr.fromBufferAttribute(s,o),zr.fromBufferAttribute(s,u),Vr.fromBufferAttribute(s,h),d.uv1=ln.getInterpolation(kr,mi,gi,vi,Gr,zr,Vr,new $e)),a&&(Uo.fromBufferAttribute(a,o),No.fromBufferAttribute(a,u),Oo.fromBufferAttribute(a,h),d.normal=ln.getInterpolation(kr,mi,gi,vi,Uo,No,Oo,new $),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const m={a:o,b:u,c:h,normal:new $,materialIndex:0};ln.getNormal(mi,gi,vi,m.normal),d.face=m}return d}class Ni extends ti{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const u=[],h=[],d=[],m=[];let v=0,A=0;S("z","y","x",-1,-1,i,t,e,a,s,0),S("z","y","x",1,-1,i,t,-e,a,s,1),S("x","z","y",1,1,e,i,t,r,a,2),S("x","z","y",1,-1,e,i,-t,r,a,3),S("x","y","z",1,-1,e,t,i,r,s,4),S("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(u),this.setAttribute("position",new jn(h,3)),this.setAttribute("normal",new jn(d,3)),this.setAttribute("uv",new jn(m,2));function S(x,f,p,T,M,R,G,D,I,H,C){const w=R/I,L=G/H,k=R/2,N=G/2,B=D/2,J=I+1,Q=H+1;let ee=0,Z=0;const pe=new $;for(let Ae=0;Ae<Q;Ae++){const Se=Ae*L-N;for(let ze=0;ze<J;ze++){const Xe=ze*w-k;pe[x]=Xe*T,pe[f]=Se*M,pe[p]=B,h.push(pe.x,pe.y,pe.z),pe[x]=0,pe[f]=0,pe[p]=D>0?1:-1,d.push(pe.x,pe.y,pe.z),m.push(ze/I),m.push(1-Ae/H),ee+=1}}for(let Ae=0;Ae<H;Ae++)for(let Se=0;Se<I;Se++){const ze=v+Se+J*Ae,Xe=v+Se+J*(Ae+1),te=v+(Se+1)+J*(Ae+1),ue=v+(Se+1)+J*Ae;u.push(ze,Xe,ue),u.push(Xe,te,ue),Z+=6}o.addGroup(A,Z,C),A+=Z,v+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ni(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Di(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function It(n){const e={};for(let t=0;t<n.length;t++){const i=Di(n[t]);for(const r in i)e[r]=i[r]}return e}function Ju(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function rc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const eh={clone:Di,merge:It};var th=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends gs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=th,this.fragmentShader=nh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Di(e.uniforms),this.uniformsGroups=Ju(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class sc extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=_n}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rn=new $,Bo=new $e,Go=new $e;class Wt extends sc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ba*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ba*2*Math.atan(Math.tan(ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z)}getViewSize(e,t){return this.getViewBounds(e,Bo,Go),t.subVectors(Go,Bo)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ys*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const u=a.fullWidth,h=a.fullHeight;s+=a.offsetX*r/u,t-=a.offsetY*i/h,r*=a.width/u,i*=a.height/h}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ai=-90,_i=1;class ih extends Pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Wt(Ai,_i,e,t);r.layers=this.layers,this.add(r);const s=new Wt(Ai,_i,e,t);s.layers=this.layers,this.add(s);const a=new Wt(Ai,_i,e,t);a.layers=this.layers,this.add(a);const o=new Wt(Ai,_i,e,t);o.layers=this.layers,this.add(o);const u=new Wt(Ai,_i,e,t);u.layers=this.layers,this.add(u);const h=new Wt(Ai,_i,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,u]=t;for(const h of t)this.remove(h);if(e===_n)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===us)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,u,h,d]=this.children,m=e.getRenderTarget(),v=e.getActiveCubeFace(),A=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,u),e.setRenderTarget(i,4,r),e.render(t,h),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,d),e.setRenderTarget(m,v,A),e.xr.enabled=S,i.texture.needsPMREMUpdate=!0}}class ac extends Nt{constructor(e,t,i,r,s,a,o,u,h,d){e=e!==void 0?e:[],t=t!==void 0?t:Ri,super(e,t,i,r,s,a,o,u,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rh extends Jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ac(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ni(5,5,5),s=new yn({name:"CubemapFromEquirect",uniforms:Di(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ut,blending:In});s.uniforms.tEquirect.value=t;const a=new tn(r,s),o=t.minFilter;return t.minFilter===Kn&&(t.minFilter=Jt),new ih(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Vs=new $,sh=new $,ah=new He;class Hn{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Vs.subVectors(i,t).cross(sh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Vs),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ah.getNormalMatrix(e),r=this.coplanarPoint(Vs).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zn=new to,Xr=new $;class io{constructor(e=new Hn,t=new Hn,i=new Hn,r=new Hn,s=new Hn,a=new Hn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=_n){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],u=r[3],h=r[4],d=r[5],m=r[6],v=r[7],A=r[8],S=r[9],x=r[10],f=r[11],p=r[12],T=r[13],M=r[14],R=r[15];if(i[0].setComponents(u-s,v-h,f-A,R-p).normalize(),i[1].setComponents(u+s,v+h,f+A,R+p).normalize(),i[2].setComponents(u+a,v+d,f+S,R+T).normalize(),i[3].setComponents(u-a,v-d,f-S,R-T).normalize(),i[4].setComponents(u-o,v-m,f-x,R-M).normalize(),t===_n)i[5].setComponents(u+o,v+m,f+x,R+M).normalize();else if(t===us)i[5].setComponents(o,m,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zn)}intersectsSprite(e){return zn.center.set(0,0,0),zn.radius=.7071067811865476,zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Xr.x=r.normal.x>0?e.max.x:e.min.x,Xr.y=r.normal.y>0?e.max.y:e.min.y,Xr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function oc(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function oh(n){const e=new WeakMap;function t(o,u){const h=o.array,d=o.usage,m=h.byteLength,v=n.createBuffer();n.bindBuffer(u,v),n.bufferData(u,h,d),o.onUploadCallback();let A;if(h instanceof Float32Array)A=n.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?A=n.HALF_FLOAT:A=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)A=n.SHORT;else if(h instanceof Uint32Array)A=n.UNSIGNED_INT;else if(h instanceof Int32Array)A=n.INT;else if(h instanceof Int8Array)A=n.BYTE;else if(h instanceof Uint8Array)A=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)A=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:A,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:m}}function i(o,u,h){const d=u.array,m=u._updateRange,v=u.updateRanges;if(n.bindBuffer(h,o),m.count===-1&&v.length===0&&n.bufferSubData(h,0,d),v.length!==0){for(let A=0,S=v.length;A<S;A++){const x=v[A];n.bufferSubData(h,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}u.clearUpdateRanges()}m.count!==-1&&(n.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count),m.count=-1),u.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const u=e.get(o);u&&(n.deleteBuffer(u.buffer),e.delete(o))}function a(o,u){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=e.get(o);if(h===void 0)e.set(o,t(o,u));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,o,u),h.version=o.version}}return{get:r,remove:s,update:a}}class _r extends ti{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),u=Math.floor(r),h=o+1,d=u+1,m=e/o,v=t/u,A=[],S=[],x=[],f=[];for(let p=0;p<d;p++){const T=p*v-a;for(let M=0;M<h;M++){const R=M*m-s;S.push(R,-T,0),x.push(0,0,1),f.push(M/o),f.push(1-p/u)}}for(let p=0;p<u;p++)for(let T=0;T<o;T++){const M=T+h*p,R=T+h*(p+1),G=T+1+h*(p+1),D=T+1+h*p;A.push(M,R,D),A.push(R,G,D)}this.setIndex(A),this.setAttribute("position",new jn(S,3)),this.setAttribute("normal",new jn(x,3)),this.setAttribute("uv",new jn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.width,e.height,e.widthSegments,e.heightSegments)}}var lh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ch=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ph=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ah=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_h=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Eh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Th=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ch=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ph=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Lh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Dh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ih=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Oh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$h=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ed=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,td=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,id=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ad=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,od=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ld=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ud=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,md=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ad=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_d=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Md=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ed=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ld=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Id=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ud=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Od=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Wd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Kd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$d=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ef=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,of=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ff=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_f=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ef=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Df=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,If=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ff=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Of=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:lh,alphahash_pars_fragment:ch,alphamap_fragment:uh,alphamap_pars_fragment:hh,alphatest_fragment:dh,alphatest_pars_fragment:fh,aomap_fragment:ph,aomap_pars_fragment:mh,batching_pars_vertex:gh,batching_vertex:vh,begin_vertex:Ah,beginnormal_vertex:_h,bsdfs:xh,iridescence_fragment:Sh,bumpmap_pars_fragment:yh,clipping_planes_fragment:Mh,clipping_planes_pars_fragment:Eh,clipping_planes_pars_vertex:wh,clipping_planes_vertex:bh,color_fragment:Th,color_pars_fragment:Rh,color_pars_vertex:Ch,color_vertex:Ph,common:Lh,cube_uv_reflection_fragment:Dh,defaultnormal_vertex:Ih,displacementmap_pars_vertex:Fh,displacementmap_vertex:Uh,emissivemap_fragment:Nh,emissivemap_pars_fragment:Oh,colorspace_fragment:Bh,colorspace_pars_fragment:Gh,envmap_fragment:zh,envmap_common_pars_fragment:Vh,envmap_pars_fragment:kh,envmap_pars_vertex:Hh,envmap_physical_pars_fragment:ed,envmap_vertex:Wh,fog_vertex:Xh,fog_pars_vertex:qh,fog_fragment:Yh,fog_pars_fragment:Qh,gradientmap_pars_fragment:Kh,lightmap_pars_fragment:jh,lights_lambert_fragment:Zh,lights_lambert_pars_fragment:$h,lights_pars_begin:Jh,lights_toon_fragment:td,lights_toon_pars_fragment:nd,lights_phong_fragment:id,lights_phong_pars_fragment:rd,lights_physical_fragment:sd,lights_physical_pars_fragment:ad,lights_fragment_begin:od,lights_fragment_maps:ld,lights_fragment_end:cd,logdepthbuf_fragment:ud,logdepthbuf_pars_fragment:hd,logdepthbuf_pars_vertex:dd,logdepthbuf_vertex:fd,map_fragment:pd,map_pars_fragment:md,map_particle_fragment:gd,map_particle_pars_fragment:vd,metalnessmap_fragment:Ad,metalnessmap_pars_fragment:_d,morphinstance_vertex:xd,morphcolor_vertex:Sd,morphnormal_vertex:yd,morphtarget_pars_vertex:Md,morphtarget_vertex:Ed,normal_fragment_begin:wd,normal_fragment_maps:bd,normal_pars_fragment:Td,normal_pars_vertex:Rd,normal_vertex:Cd,normalmap_pars_fragment:Pd,clearcoat_normal_fragment_begin:Ld,clearcoat_normal_fragment_maps:Dd,clearcoat_pars_fragment:Id,iridescence_pars_fragment:Fd,opaque_fragment:Ud,packing:Nd,premultiplied_alpha_fragment:Od,project_vertex:Bd,dithering_fragment:Gd,dithering_pars_fragment:zd,roughnessmap_fragment:Vd,roughnessmap_pars_fragment:kd,shadowmap_pars_fragment:Hd,shadowmap_pars_vertex:Wd,shadowmap_vertex:Xd,shadowmask_pars_fragment:qd,skinbase_vertex:Yd,skinning_pars_vertex:Qd,skinning_vertex:Kd,skinnormal_vertex:jd,specularmap_fragment:Zd,specularmap_pars_fragment:$d,tonemapping_fragment:Jd,tonemapping_pars_fragment:ef,transmission_fragment:tf,transmission_pars_fragment:nf,uv_pars_fragment:rf,uv_pars_vertex:sf,uv_vertex:af,worldpos_vertex:of,background_vert:lf,background_frag:cf,backgroundCube_vert:uf,backgroundCube_frag:hf,cube_vert:df,cube_frag:ff,depth_vert:pf,depth_frag:mf,distanceRGBA_vert:gf,distanceRGBA_frag:vf,equirect_vert:Af,equirect_frag:_f,linedashed_vert:xf,linedashed_frag:Sf,meshbasic_vert:yf,meshbasic_frag:Mf,meshlambert_vert:Ef,meshlambert_frag:wf,meshmatcap_vert:bf,meshmatcap_frag:Tf,meshnormal_vert:Rf,meshnormal_frag:Cf,meshphong_vert:Pf,meshphong_frag:Lf,meshphysical_vert:Df,meshphysical_frag:If,meshtoon_vert:Ff,meshtoon_frag:Uf,points_vert:Nf,points_frag:Of,shadow_vert:Bf,shadow_frag:Gf,sprite_vert:zf,sprite_frag:Vf},ve={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},an={basic:{uniforms:It([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:It([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new nt(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:It([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:It([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:It([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new nt(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:It([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:It([ve.points,ve.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:It([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:It([ve.common,ve.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:It([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:It([ve.sprite,ve.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:It([ve.common,ve.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:It([ve.lights,ve.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};an.physical={uniforms:It([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const qr={r:0,b:0,g:0},Vn=new Sn,kf=new mt;function Hf(n,e,t,i,r,s,a){const o=new nt(0);let u=s===!0?0:1,h,d,m=null,v=0,A=null;function S(T){let M=T.isScene===!0?T.background:null;return M&&M.isTexture&&(M=(T.backgroundBlurriness>0?t:e).get(M)),M}function x(T){let M=!1;const R=S(T);R===null?p(o,u):R&&R.isColor&&(p(R,1),M=!0);const G=n.xr.getEnvironmentBlendMode();G==="additive"?i.buffers.color.setClear(0,0,0,1,a):G==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function f(T,M){const R=S(M);R&&(R.isCubeTexture||R.mapping===ps)?(d===void 0&&(d=new tn(new Ni(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Di(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(G,D,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Vn.copy(M.backgroundRotation),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),d.material.uniforms.envMap.value=R,d.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(kf.makeRotationFromEuler(Vn)),d.material.toneMapped=tt.getTransfer(R.colorSpace)!==ut,(m!==R||v!==R.version||A!==n.toneMapping)&&(d.material.needsUpdate=!0,m=R,v=R.version,A=n.toneMapping),d.layers.enableAll(),T.unshift(d,d.geometry,d.material,0,0,null)):R&&R.isTexture&&(h===void 0&&(h=new tn(new _r(2,2),new yn({name:"BackgroundMaterial",uniforms:Di(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=R,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.toneMapped=tt.getTransfer(R.colorSpace)!==ut,R.matrixAutoUpdate===!0&&R.updateMatrix(),h.material.uniforms.uvTransform.value.copy(R.matrix),(m!==R||v!==R.version||A!==n.toneMapping)&&(h.material.needsUpdate=!0,m=R,v=R.version,A=n.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null))}function p(T,M){T.getRGB(qr,rc(n)),i.buffers.color.setClear(qr.r,qr.g,qr.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(T,M=1){o.set(T),u=M,p(o,u)},getClearAlpha:function(){return u},setClearAlpha:function(T){u=T,p(o,u)},render:x,addToRenderList:f}}function Wf(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=v(null);let s=r,a=!1;function o(w,L,k,N,B){let J=!1;const Q=m(N,k,L);s!==Q&&(s=Q,h(s.object)),J=A(w,N,k,B),J&&S(w,N,k,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,R(w,L,k,N),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function u(){return n.createVertexArray()}function h(w){return n.bindVertexArray(w)}function d(w){return n.deleteVertexArray(w)}function m(w,L,k){const N=k.wireframe===!0;let B=i[w.id];B===void 0&&(B={},i[w.id]=B);let J=B[L.id];J===void 0&&(J={},B[L.id]=J);let Q=J[N];return Q===void 0&&(Q=v(u()),J[N]=Q),Q}function v(w){const L=[],k=[],N=[];for(let B=0;B<t;B++)L[B]=0,k[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:N,object:w,attributes:{},index:null}}function A(w,L,k,N){const B=s.attributes,J=L.attributes;let Q=0;const ee=k.getAttributes();for(const Z in ee)if(ee[Z].location>=0){const Ae=B[Z];let Se=J[Z];if(Se===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(Se=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(Se=w.instanceColor)),Ae===void 0||Ae.attribute!==Se||Se&&Ae.data!==Se.data)return!0;Q++}return s.attributesNum!==Q||s.index!==N}function S(w,L,k,N){const B={},J=L.attributes;let Q=0;const ee=k.getAttributes();for(const Z in ee)if(ee[Z].location>=0){let Ae=J[Z];Ae===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(Ae=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(Ae=w.instanceColor));const Se={};Se.attribute=Ae,Ae&&Ae.data&&(Se.data=Ae.data),B[Z]=Se,Q++}s.attributes=B,s.attributesNum=Q,s.index=N}function x(){const w=s.newAttributes;for(let L=0,k=w.length;L<k;L++)w[L]=0}function f(w){p(w,0)}function p(w,L){const k=s.newAttributes,N=s.enabledAttributes,B=s.attributeDivisors;k[w]=1,N[w]===0&&(n.enableVertexAttribArray(w),N[w]=1),B[w]!==L&&(n.vertexAttribDivisor(w,L),B[w]=L)}function T(){const w=s.newAttributes,L=s.enabledAttributes;for(let k=0,N=L.length;k<N;k++)L[k]!==w[k]&&(n.disableVertexAttribArray(k),L[k]=0)}function M(w,L,k,N,B,J,Q){Q===!0?n.vertexAttribIPointer(w,L,k,B,J):n.vertexAttribPointer(w,L,k,N,B,J)}function R(w,L,k,N){x();const B=N.attributes,J=k.getAttributes(),Q=L.defaultAttributeValues;for(const ee in J){const Z=J[ee];if(Z.location>=0){let pe=B[ee];if(pe===void 0&&(ee==="instanceMatrix"&&w.instanceMatrix&&(pe=w.instanceMatrix),ee==="instanceColor"&&w.instanceColor&&(pe=w.instanceColor)),pe!==void 0){const Ae=pe.normalized,Se=pe.itemSize,ze=e.get(pe);if(ze===void 0)continue;const Xe=ze.buffer,te=ze.type,ue=ze.bytesPerElement,be=te===n.INT||te===n.UNSIGNED_INT||pe.gpuType===Qa;if(pe.isInterleavedBufferAttribute){const ye=pe.data,De=ye.stride,Oe=pe.offset;if(ye.isInstancedInterleavedBuffer){for(let We=0;We<Z.locationSize;We++)p(Z.location+We,ye.meshPerAttribute);w.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let We=0;We<Z.locationSize;We++)f(Z.location+We);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let We=0;We<Z.locationSize;We++)M(Z.location+We,Se/Z.locationSize,te,Ae,De*ue,(Oe+Se/Z.locationSize*We)*ue,be)}else{if(pe.isInstancedBufferAttribute){for(let ye=0;ye<Z.locationSize;ye++)p(Z.location+ye,pe.meshPerAttribute);w.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ye=0;ye<Z.locationSize;ye++)f(Z.location+ye);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let ye=0;ye<Z.locationSize;ye++)M(Z.location+ye,Se/Z.locationSize,te,Ae,Se*ue,Se/Z.locationSize*ye*ue,be)}}else if(Q!==void 0){const Ae=Q[ee];if(Ae!==void 0)switch(Ae.length){case 2:n.vertexAttrib2fv(Z.location,Ae);break;case 3:n.vertexAttrib3fv(Z.location,Ae);break;case 4:n.vertexAttrib4fv(Z.location,Ae);break;default:n.vertexAttrib1fv(Z.location,Ae)}}}}T()}function G(){H();for(const w in i){const L=i[w];for(const k in L){const N=L[k];for(const B in N)d(N[B].object),delete N[B];delete L[k]}delete i[w]}}function D(w){if(i[w.id]===void 0)return;const L=i[w.id];for(const k in L){const N=L[k];for(const B in N)d(N[B].object),delete N[B];delete L[k]}delete i[w.id]}function I(w){for(const L in i){const k=i[L];if(k[w.id]===void 0)continue;const N=k[w.id];for(const B in N)d(N[B].object),delete N[B];delete k[w.id]}}function H(){C(),a=!0,s!==r&&(s=r,h(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:H,resetDefaultState:C,dispose:G,releaseStatesOfGeometry:D,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:f,disableUnusedAttributes:T}}function Xf(n,e,t){let i;function r(h){i=h}function s(h,d){n.drawArrays(i,h,d),t.update(d,i,1)}function a(h,d,m){m!==0&&(n.drawArraysInstanced(i,h,d,m),t.update(d,i,m))}function o(h,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,d,0,m);let A=0;for(let S=0;S<m;S++)A+=d[S];t.update(A,i,1)}function u(h,d,m,v){if(m===0)return;const A=e.get("WEBGL_multi_draw");if(A===null)for(let S=0;S<h.length;S++)a(h[S],d[S],v[S]);else{A.multiDrawArraysInstancedWEBGL(i,h,0,d,0,v,0,m);let S=0;for(let x=0;x<m;x++)S+=d[x];for(let x=0;x<v.length;x++)t.update(S,i,v[x])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=u}function qf(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(D){return!(D!==en&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const I=D===mr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==xn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==An&&!I)}function u(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const d=u(h);d!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);const m=t.logarithmicDepthBuffer===!0,v=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),A=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=A>0,G=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:m,maxTextures:v,maxVertexTextures:A,maxTextureSize:S,maxCubemapSize:x,maxAttributes:f,maxVertexUniforms:p,maxVaryings:T,maxFragmentUniforms:M,vertexTextures:R,maxSamples:G}}function Yf(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Hn,o=new He,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(m,v){const A=m.length!==0||v||i!==0||r;return r=v,i=m.length,A},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,v){t=d(m,v,0)},this.setState=function(m,v,A){const S=m.clippingPlanes,x=m.clipIntersection,f=m.clipShadows,p=n.get(m);if(!r||S===null||S.length===0||s&&!f)s?d(null):h();else{const T=s?0:i,M=T*4;let R=p.clippingState||null;u.value=R,R=d(S,v,M,A);for(let G=0;G!==M;++G)R[G]=t[G];p.clippingState=R,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(m,v,A,S){const x=m!==null?m.length:0;let f=null;if(x!==0){if(f=u.value,S!==!0||f===null){const p=A+x*4,T=v.matrixWorldInverse;o.getNormalMatrix(T),(f===null||f.length<p)&&(f=new Float32Array(p));for(let M=0,R=A;M!==x;++M,R+=4)a.copy(m[M]).applyMatrix4(T,o),a.normal.toArray(f,R),f[R+3]=a.constant}u.value=f,u.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,f}}function Qf(n){let e=new WeakMap;function t(a,o){return o===la?a.mapping=Ri:o===ca&&(a.mapping=Ci),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===la||o===ca)if(e.has(a)){const u=e.get(a).texture;return t(u,a.mapping)}else{const u=a.image;if(u&&u.height>0){const h=new rh(u.height);return h.fromEquirectangularTexture(n,a),e.set(a,h),a.addEventListener("dispose",r),t(h.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const u=e.get(o);u!==void 0&&(e.delete(o),u.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class lc extends sc{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,u=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,o-=d*this.view.offsetY,u=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const yi=4,zo=[.125,.215,.35,.446,.526,.582],Yn=20,ks=new lc,Vo=new nt;let Hs=null,Ws=0,Xs=0,qs=!1;const Wn=(1+Math.sqrt(5))/2,xi=1/Wn,ko=[new $(-Wn,xi,0),new $(Wn,xi,0),new $(-xi,0,Wn),new $(xi,0,Wn),new $(0,Wn,-xi),new $(0,Wn,xi),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class Ho{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Hs=this._renderer.getRenderTarget(),Ws=this._renderer.getActiveCubeFace(),Xs=this._renderer.getActiveMipmapLevel(),qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hs,Ws,Xs),this._renderer.xr.enabled=qs,e.scissorTest=!1,Yr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ri||e.mapping===Ci?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hs=this._renderer.getRenderTarget(),Ws=this._renderer.getActiveCubeFace(),Xs=this._renderer.getActiveMipmapLevel(),qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:mr,format:en,colorSpace:Nn,depthBuffer:!1},r=Wo(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wo(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kf(s)),this._blurMaterial=jf(s,e,t)}return r}_compileMaterial(e){const t=new tn(this._lodPlanes[0],e);this._renderer.compile(t,ks)}_sceneToCubeUV(e,t,i,r){const o=new Wt(90,1,t,i),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,m=d.autoClear,v=d.toneMapping;d.getClearColor(Vo),d.toneMapping=Fn,d.autoClear=!1;const A=new no({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),S=new tn(new Ni,A);let x=!1;const f=e.background;f?f.isColor&&(A.color.copy(f),e.background=null,x=!0):(A.color.copy(Vo),x=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(o.up.set(0,u[p],0),o.lookAt(h[p],0,0)):T===1?(o.up.set(0,0,u[p]),o.lookAt(0,h[p],0)):(o.up.set(0,u[p],0),o.lookAt(0,0,h[p]));const M=this._cubeSize;Yr(r,T*M,p>2?M:0,M,M),d.setRenderTarget(r),x&&d.render(S,o),d.render(e,o)}S.geometry.dispose(),S.material.dispose(),d.toneMapping=v,d.autoClear=m,e.background=f}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ri||e.mapping===Ci;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new tn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const u=this._cubeSize;Yr(t,0,0,3*u,2*u),i.setRenderTarget(t),i.render(a,ks)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ko[(r-s-1)%ko.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const u=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,m=new tn(this._lodPlanes[r],h),v=h.uniforms,A=this._sizeLods[i]-1,S=isFinite(s)?Math.PI/(2*A):2*Math.PI/(2*Yn-1),x=s/S,f=isFinite(s)?1+Math.floor(d*x):Yn;f>Yn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Yn}`);const p=[];let T=0;for(let I=0;I<Yn;++I){const H=I/x,C=Math.exp(-H*H/2);p.push(C),I===0?T+=C:I<f&&(T+=2*C)}for(let I=0;I<p.length;I++)p[I]=p[I]/T;v.envMap.value=e.texture,v.samples.value=f,v.weights.value=p,v.latitudinal.value=a==="latitudinal",o&&(v.poleAxis.value=o);const{_lodMax:M}=this;v.dTheta.value=S,v.mipInt.value=M-i;const R=this._sizeLods[r],G=3*R*(r>M-yi?r-M+yi:0),D=4*(this._cubeSize-R);Yr(t,G,D,3*R,2*R),u.setRenderTarget(t),u.render(m,ks)}}function Kf(n){const e=[],t=[],i=[];let r=n;const s=n-yi+1+zo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let u=1/o;a>n-yi?u=zo[a-n+yi-1]:a===0&&(u=0),i.push(u);const h=1/(o-2),d=-h,m=1+h,v=[d,d,m,d,m,m,d,d,m,m,d,m],A=6,S=6,x=3,f=2,p=1,T=new Float32Array(x*S*A),M=new Float32Array(f*S*A),R=new Float32Array(p*S*A);for(let D=0;D<A;D++){const I=D%3*2/3-1,H=D>2?0:-1,C=[I,H,0,I+2/3,H,0,I+2/3,H+1,0,I,H,0,I+2/3,H+1,0,I,H+1,0];T.set(C,x*S*D),M.set(v,f*S*D);const w=[D,D,D,D,D,D];R.set(w,p*S*D)}const G=new ti;G.setAttribute("position",new cn(T,x)),G.setAttribute("uv",new cn(M,f)),G.setAttribute("faceIndex",new cn(R,p)),e.push(G),r>yi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Wo(n,e,t){const i=new Jn(n,e,t);return i.texture.mapping=ps,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Yr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function jf(n,e,t){const i=new Float32Array(Yn),r=new $(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Xo(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function qo(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function ro(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Zf(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const u=o.mapping,h=u===la||u===ca,d=u===Ri||u===Ci;if(h||d){let m=e.get(o);const v=m!==void 0?m.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==v)return t===null&&(t=new Ho(n)),m=h?t.fromEquirectangular(o,m):t.fromCubemap(o,m),m.texture.pmremVersion=o.pmremVersion,e.set(o,m),m.texture;if(m!==void 0)return m.texture;{const A=o.image;return h&&A&&A.height>0||d&&A&&r(A)?(t===null&&(t=new Ho(n)),m=h?t.fromEquirectangular(o):t.fromCubemap(o),m.texture.pmremVersion=o.pmremVersion,e.set(o,m),o.addEventListener("dispose",s),m.texture):null}}}return o}function r(o){let u=0;const h=6;for(let d=0;d<h;d++)o[d]!==void 0&&u++;return u===h}function s(o){const u=o.target;u.removeEventListener("dispose",s);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function $f(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&or("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Jf(n,e,t,i){const r={},s=new WeakMap;function a(m){const v=m.target;v.index!==null&&e.remove(v.index);for(const S in v.attributes)e.remove(v.attributes[S]);for(const S in v.morphAttributes){const x=v.morphAttributes[S];for(let f=0,p=x.length;f<p;f++)e.remove(x[f])}v.removeEventListener("dispose",a),delete r[v.id];const A=s.get(v);A&&(e.remove(A),s.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function o(m,v){return r[v.id]===!0||(v.addEventListener("dispose",a),r[v.id]=!0,t.memory.geometries++),v}function u(m){const v=m.attributes;for(const S in v)e.update(v[S],n.ARRAY_BUFFER);const A=m.morphAttributes;for(const S in A){const x=A[S];for(let f=0,p=x.length;f<p;f++)e.update(x[f],n.ARRAY_BUFFER)}}function h(m){const v=[],A=m.index,S=m.attributes.position;let x=0;if(A!==null){const T=A.array;x=A.version;for(let M=0,R=T.length;M<R;M+=3){const G=T[M+0],D=T[M+1],I=T[M+2];v.push(G,D,D,I,I,G)}}else if(S!==void 0){const T=S.array;x=S.version;for(let M=0,R=T.length/3-1;M<R;M+=3){const G=M+0,D=M+1,I=M+2;v.push(G,D,D,I,I,G)}}else return;const f=new(Zl(v)?ic:nc)(v,1);f.version=x;const p=s.get(m);p&&e.remove(p),s.set(m,f)}function d(m){const v=s.get(m);if(v){const A=m.index;A!==null&&v.version<A.version&&h(m)}else h(m);return s.get(m)}return{get:o,update:u,getWireframeAttribute:d}}function ep(n,e,t){let i;function r(v){i=v}let s,a;function o(v){s=v.type,a=v.bytesPerElement}function u(v,A){n.drawElements(i,A,s,v*a),t.update(A,i,1)}function h(v,A,S){S!==0&&(n.drawElementsInstanced(i,A,s,v*a,S),t.update(A,i,S))}function d(v,A,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,A,0,s,v,0,S);let f=0;for(let p=0;p<S;p++)f+=A[p];t.update(f,i,1)}function m(v,A,S,x){if(S===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<v.length;p++)h(v[p]/a,A[p],x[p]);else{f.multiDrawElementsInstancedWEBGL(i,A,0,s,v,0,x,0,S);let p=0;for(let T=0;T<S;T++)p+=A[T];for(let T=0;T<x.length;T++)t.update(p,i,x[T])}}this.setMode=r,this.setIndex=o,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function tp(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function np(n,e,t){const i=new WeakMap,r=new xt;function s(a,o,u){const h=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=d!==void 0?d.length:0;let v=i.get(o);if(v===void 0||v.count!==m){let w=function(){H.dispose(),i.delete(o),o.removeEventListener("dispose",w)};var A=w;v!==void 0&&v.texture.dispose();const S=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let R=0;S===!0&&(R=1),x===!0&&(R=2),f===!0&&(R=3);let G=o.attributes.position.count*R,D=1;G>e.maxTextureSize&&(D=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const I=new Float32Array(G*D*4*m),H=new Jl(I,G,D,m);H.type=An,H.needsUpdate=!0;const C=R*4;for(let L=0;L<m;L++){const k=p[L],N=T[L],B=M[L],J=G*D*4*L;for(let Q=0;Q<k.count;Q++){const ee=Q*C;S===!0&&(r.fromBufferAttribute(k,Q),I[J+ee+0]=r.x,I[J+ee+1]=r.y,I[J+ee+2]=r.z,I[J+ee+3]=0),x===!0&&(r.fromBufferAttribute(N,Q),I[J+ee+4]=r.x,I[J+ee+5]=r.y,I[J+ee+6]=r.z,I[J+ee+7]=0),f===!0&&(r.fromBufferAttribute(B,Q),I[J+ee+8]=r.x,I[J+ee+9]=r.y,I[J+ee+10]=r.z,I[J+ee+11]=B.itemSize===4?r.w:1)}}v={count:m,texture:H,size:new $e(G,D)},i.set(o,v),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)u.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let S=0;for(let f=0;f<h.length;f++)S+=h[f];const x=o.morphTargetsRelative?1:1-S;u.getUniforms().setValue(n,"morphTargetBaseInfluence",x),u.getUniforms().setValue(n,"morphTargetInfluences",h)}u.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}return{update:s}}function ip(n,e,t,i){let r=new WeakMap;function s(u){const h=i.render.frame,d=u.geometry,m=e.get(u,d);if(r.get(m)!==h&&(e.update(m),r.set(m,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",o)===!1&&u.addEventListener("dispose",o),r.get(u)!==h&&(t.update(u.instanceMatrix,n.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,n.ARRAY_BUFFER),r.set(u,h))),u.isSkinnedMesh){const v=u.skeleton;r.get(v)!==h&&(v.update(),r.set(v,h))}return m}function a(){r=new WeakMap}function o(u){const h=u.target;h.removeEventListener("dispose",o),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:a}}class cc extends Nt{constructor(e,t,i,r,s,a,o,u,h,d=Ei){if(d!==Ei&&d!==Li)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Ei&&(i=$n),i===void 0&&d===Li&&(i=Pi),super(null,r,s,a,o,u,d,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Xt,this.minFilter=u!==void 0?u:Xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const uc=new Nt,Yo=new cc(1,1),hc=new Jl,dc=new Vu,fc=new ac,Qo=[],Ko=[],jo=new Float32Array(16),Zo=new Float32Array(9),$o=new Float32Array(4);function Oi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Qo[r];if(s===void 0&&(s=new Float32Array(r),Qo[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function vs(n,e){let t=Ko[e];t===void 0&&(t=new Int32Array(e),Ko[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function rp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function sp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),yt(t,e)}}function ap(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),yt(t,e)}}function op(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),yt(t,e)}}function lp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(St(t,i))return;$o.set(i),n.uniformMatrix2fv(this.addr,!1,$o),yt(t,i)}}function cp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(St(t,i))return;Zo.set(i),n.uniformMatrix3fv(this.addr,!1,Zo),yt(t,i)}}function up(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(St(t,i))return;jo.set(i),n.uniformMatrix4fv(this.addr,!1,jo),yt(t,i)}}function hp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function dp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),yt(t,e)}}function fp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),yt(t,e)}}function pp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),yt(t,e)}}function mp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function gp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),yt(t,e)}}function vp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),yt(t,e)}}function Ap(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),yt(t,e)}}function _p(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Yo.compareFunction=jl,s=Yo):s=uc,t.setTexture2D(e||s,r)}function xp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||dc,r)}function Sp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||fc,r)}function yp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||hc,r)}function Mp(n){switch(n){case 5126:return rp;case 35664:return sp;case 35665:return ap;case 35666:return op;case 35674:return lp;case 35675:return cp;case 35676:return up;case 5124:case 35670:return hp;case 35667:case 35671:return dp;case 35668:case 35672:return fp;case 35669:case 35673:return pp;case 5125:return mp;case 36294:return gp;case 36295:return vp;case 36296:return Ap;case 35678:case 36198:case 36298:case 36306:case 35682:return _p;case 35679:case 36299:case 36307:return xp;case 35680:case 36300:case 36308:case 36293:return Sp;case 36289:case 36303:case 36311:case 36292:return yp}}function Ep(n,e){n.uniform1fv(this.addr,e)}function wp(n,e){const t=Oi(e,this.size,2);n.uniform2fv(this.addr,t)}function bp(n,e){const t=Oi(e,this.size,3);n.uniform3fv(this.addr,t)}function Tp(n,e){const t=Oi(e,this.size,4);n.uniform4fv(this.addr,t)}function Rp(n,e){const t=Oi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Cp(n,e){const t=Oi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Pp(n,e){const t=Oi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Lp(n,e){n.uniform1iv(this.addr,e)}function Dp(n,e){n.uniform2iv(this.addr,e)}function Ip(n,e){n.uniform3iv(this.addr,e)}function Fp(n,e){n.uniform4iv(this.addr,e)}function Up(n,e){n.uniform1uiv(this.addr,e)}function Np(n,e){n.uniform2uiv(this.addr,e)}function Op(n,e){n.uniform3uiv(this.addr,e)}function Bp(n,e){n.uniform4uiv(this.addr,e)}function Gp(n,e,t){const i=this.cache,r=e.length,s=vs(t,r);St(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||uc,s[a])}function zp(n,e,t){const i=this.cache,r=e.length,s=vs(t,r);St(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||dc,s[a])}function Vp(n,e,t){const i=this.cache,r=e.length,s=vs(t,r);St(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||fc,s[a])}function kp(n,e,t){const i=this.cache,r=e.length,s=vs(t,r);St(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||hc,s[a])}function Hp(n){switch(n){case 5126:return Ep;case 35664:return wp;case 35665:return bp;case 35666:return Tp;case 35674:return Rp;case 35675:return Cp;case 35676:return Pp;case 5124:case 35670:return Lp;case 35667:case 35671:return Dp;case 35668:case 35672:return Ip;case 35669:case 35673:return Fp;case 5125:return Up;case 36294:return Np;case 36295:return Op;case 36296:return Bp;case 35678:case 36198:case 36298:case 36306:case 35682:return Gp;case 35679:case 36299:case 36307:return zp;case 35680:case 36300:case 36308:case 36293:return Vp;case 36289:case 36303:case 36311:case 36292:return kp}}class Wp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Mp(t.type)}}class Xp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hp(t.type)}}class qp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Ys=/(\w+)(\])?(\[|\.)?/g;function Jo(n,e){n.seq.push(e),n.map[e.id]=e}function Yp(n,e,t){const i=n.name,r=i.length;for(Ys.lastIndex=0;;){const s=Ys.exec(i),a=Ys.lastIndex;let o=s[1];const u=s[2]==="]",h=s[3];if(u&&(o=o|0),h===void 0||h==="["&&a+2===r){Jo(t,h===void 0?new Wp(o,n,e):new Xp(o,n,e));break}else{let m=t.map[o];m===void 0&&(m=new qp(o),Jo(t,m)),t=m}}}class rs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Yp(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],u=i[o.id];u.needsUpdate!==!1&&o.setValue(e,u.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function el(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Qp=37297;let Kp=0;function jp(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Zp(n){const e=tt.getPrimaries(tt.workingColorSpace),t=tt.getPrimaries(n);let i;switch(e===t?i="":e===cs&&t===ls?i="LinearDisplayP3ToLinearSRGB":e===ls&&t===cs&&(i="LinearSRGBToLinearDisplayP3"),n){case Nn:case ms:return[i,"LinearTransferOETF"];case sn:case eo:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function tl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+jp(n.getShaderSource(e),a)}else return r}function $p(n,e){const t=Zp(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Jp(n,e){let t;switch(e){case pu:t="Linear";break;case mu:t="Reinhard";break;case gu:t="Cineon";break;case vu:t="ACESFilmic";break;case _u:t="AgX";break;case xu:t="Neutral";break;case Au:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qr=new $;function em(){tt.getLuminanceCoefficients(Qr);const n=Qr.x.toFixed(4),e=Qr.y.toFixed(4),t=Qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ar).join(`
`)}function nm(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function im(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ar(n){return n!==""}function nl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function il(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ga(n){return n.replace(rm,am)}const sm=new Map;function am(n,e){let t=ke[e];if(t===void 0){const i=sm.get(e);if(i!==void 0)t=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ga(t)}const om=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rl(n){return n.replace(om,lm)}function lm(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function sl(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cm(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ol?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===zc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===gn&&(e="SHADOWMAP_TYPE_VSM"),e}function um(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ri:case Ci:e="ENVMAP_TYPE_CUBE";break;case ps:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hm(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ci:e="ENVMAP_MODE_REFRACTION";break}return e}function dm(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Bl:e="ENVMAP_BLENDING_MULTIPLY";break;case du:e="ENVMAP_BLENDING_MIX";break;case fu:e="ENVMAP_BLENDING_ADD";break}return e}function fm(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function pm(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const u=cm(t),h=um(t),d=hm(t),m=dm(t),v=fm(t),A=tm(t),S=nm(s),x=r.createProgram();let f,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(ar).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(ar).join(`
`),p.length>0&&(p+=`
`)):(f=[sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),p=[sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?ke.tonemapping_pars_fragment:"",t.toneMapping!==Fn?Jp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,$p("linearToOutputTexel",t.outputColorSpace),em(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ar).join(`
`)),a=Ga(a),a=nl(a,t),a=il(a,t),o=Ga(o),o=nl(o,t),o=il(o,t),a=rl(a),o=rl(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,f=[A,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",t.glslVersion===xo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=T+f+a,R=T+p+o,G=el(r,r.VERTEX_SHADER,M),D=el(r,r.FRAGMENT_SHADER,R);r.attachShader(x,G),r.attachShader(x,D),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function I(L){if(n.debug.checkShaderErrors){const k=r.getProgramInfoLog(x).trim(),N=r.getShaderInfoLog(G).trim(),B=r.getShaderInfoLog(D).trim();let J=!0,Q=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,G,D);else{const ee=tl(r,G,"vertex"),Z=tl(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+ee+`
`+Z)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(N===""||B==="")&&(Q=!1);Q&&(L.diagnostics={runnable:J,programLog:k,vertexShader:{log:N,prefix:f},fragmentShader:{log:B,prefix:p}})}r.deleteShader(G),r.deleteShader(D),H=new rs(r,x),C=im(r,x)}let H;this.getUniforms=function(){return H===void 0&&I(this),H};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(x,Qp)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kp++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=G,this.fragmentShader=D,this}let mm=0;class gm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new vm(e),t.set(e,i)),i}}class vm{constructor(e){this.id=mm++,this.code=e,this.usedTimes=0}}function Am(n,e,t,i,r,s,a){const o=new ec,u=new gm,h=new Set,d=[],m=r.logarithmicDepthBuffer,v=r.vertexTextures;let A=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(C){return h.add(C),C===0?"uv":`uv${C}`}function f(C,w,L,k,N){const B=k.fog,J=N.geometry,Q=C.isMeshStandardMaterial?k.environment:null,ee=(C.isMeshStandardMaterial?t:e).get(C.envMap||Q),Z=ee&&ee.mapping===ps?ee.image.height:null,pe=S[C.type];C.precision!==null&&(A=r.getMaxPrecision(C.precision),A!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",A,"instead."));const Ae=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Se=Ae!==void 0?Ae.length:0;let ze=0;J.morphAttributes.position!==void 0&&(ze=1),J.morphAttributes.normal!==void 0&&(ze=2),J.morphAttributes.color!==void 0&&(ze=3);let Xe,te,ue,be;if(pe){const je=an[pe];Xe=je.vertexShader,te=je.fragmentShader}else Xe=C.vertexShader,te=C.fragmentShader,u.update(C),ue=u.getVertexShaderID(C),be=u.getFragmentShaderID(C);const ye=n.getRenderTarget(),De=N.isInstancedMesh===!0,Oe=N.isBatchedMesh===!0,We=!!C.map,st=!!C.matcap,O=!!ee,ht=!!C.aoMap,Je=!!C.lightMap,qe=!!C.bumpMap,Te=!!C.normalMap,it=!!C.displacementMap,Fe=!!C.emissiveMap,Pe=!!C.metalnessMap,F=!!C.roughnessMap,y=C.anisotropy>0,X=C.clearcoat>0,se=C.dispersion>0,ce=C.iridescence>0,oe=C.sheen>0,Re=C.transmission>0,he=y&&!!C.anisotropyMap,Me=X&&!!C.clearcoatMap,Ve=X&&!!C.clearcoatNormalMap,de=X&&!!C.clearcoatRoughnessMap,Ee=ce&&!!C.iridescenceMap,Ye=ce&&!!C.iridescenceThicknessMap,Ie=oe&&!!C.sheenColorMap,we=oe&&!!C.sheenRoughnessMap,Ue=!!C.specularMap,Be=!!C.specularColorMap,at=!!C.specularIntensityMap,z=Re&&!!C.transmissionMap,fe=Re&&!!C.thicknessMap,ie=!!C.gradientMap,ae=!!C.alphaMap,me=C.alphaTest>0,Ne=!!C.alphaHash,Qe=!!C.extensions;let rt=Fn;C.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(rt=n.toneMapping);const vt={shaderID:pe,shaderType:C.type,shaderName:C.name,vertexShader:Xe,fragmentShader:te,defines:C.defines,customVertexShaderID:ue,customFragmentShaderID:be,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:A,batching:Oe,batchingColor:Oe&&N._colorsTexture!==null,instancing:De,instancingColor:De&&N.instanceColor!==null,instancingMorph:De&&N.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ye===null?n.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Nn,alphaToCoverage:!!C.alphaToCoverage,map:We,matcap:st,envMap:O,envMapMode:O&&ee.mapping,envMapCubeUVHeight:Z,aoMap:ht,lightMap:Je,bumpMap:qe,normalMap:Te,displacementMap:v&&it,emissiveMap:Fe,normalMapObjectSpace:Te&&C.normalMapType===wu,normalMapTangentSpace:Te&&C.normalMapType===Eu,metalnessMap:Pe,roughnessMap:F,anisotropy:y,anisotropyMap:he,clearcoat:X,clearcoatMap:Me,clearcoatNormalMap:Ve,clearcoatRoughnessMap:de,dispersion:se,iridescence:ce,iridescenceMap:Ee,iridescenceThicknessMap:Ye,sheen:oe,sheenColorMap:Ie,sheenRoughnessMap:we,specularMap:Ue,specularColorMap:Be,specularIntensityMap:at,transmission:Re,transmissionMap:z,thicknessMap:fe,gradientMap:ie,opaque:C.transparent===!1&&C.blending===Mi&&C.alphaToCoverage===!1,alphaMap:ae,alphaTest:me,alphaHash:Ne,combine:C.combine,mapUv:We&&x(C.map.channel),aoMapUv:ht&&x(C.aoMap.channel),lightMapUv:Je&&x(C.lightMap.channel),bumpMapUv:qe&&x(C.bumpMap.channel),normalMapUv:Te&&x(C.normalMap.channel),displacementMapUv:it&&x(C.displacementMap.channel),emissiveMapUv:Fe&&x(C.emissiveMap.channel),metalnessMapUv:Pe&&x(C.metalnessMap.channel),roughnessMapUv:F&&x(C.roughnessMap.channel),anisotropyMapUv:he&&x(C.anisotropyMap.channel),clearcoatMapUv:Me&&x(C.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&x(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&x(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&x(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&x(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&x(C.sheenColorMap.channel),sheenRoughnessMapUv:we&&x(C.sheenRoughnessMap.channel),specularMapUv:Ue&&x(C.specularMap.channel),specularColorMapUv:Be&&x(C.specularColorMap.channel),specularIntensityMapUv:at&&x(C.specularIntensityMap.channel),transmissionMapUv:z&&x(C.transmissionMap.channel),thicknessMapUv:fe&&x(C.thicknessMap.channel),alphaMapUv:ae&&x(C.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Te||y),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!J.attributes.uv&&(We||ae),fog:!!B,useFog:C.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:N.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:ze,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:C.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:rt,decodeVideoTexture:We&&C.map.isVideoTexture===!0&&tt.getTransfer(C.map.colorSpace)===ut,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===on,flipSided:C.side===Ut,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Qe&&C.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&C.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return vt.vertexUv1s=h.has(1),vt.vertexUv2s=h.has(2),vt.vertexUv3s=h.has(3),h.clear(),vt}function p(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const L in C.defines)w.push(L),w.push(C.defines[L]);return C.isRawShaderMaterial===!1&&(T(w,C),M(w,C),w.push(n.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function T(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function M(C,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),C.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.doubleSided&&o.enable(10),w.flipSided&&o.enable(11),w.useDepthPacking&&o.enable(12),w.dithering&&o.enable(13),w.transmission&&o.enable(14),w.sheen&&o.enable(15),w.opaque&&o.enable(16),w.pointsUvs&&o.enable(17),w.decodeVideoTexture&&o.enable(18),w.alphaToCoverage&&o.enable(19),C.push(o.mask)}function R(C){const w=S[C.type];let L;if(w){const k=an[w];L=eh.clone(k.uniforms)}else L=C.uniforms;return L}function G(C,w){let L;for(let k=0,N=d.length;k<N;k++){const B=d[k];if(B.cacheKey===w){L=B,++L.usedTimes;break}}return L===void 0&&(L=new pm(n,w,C,s),d.push(L)),L}function D(C){if(--C.usedTimes===0){const w=d.indexOf(C);d[w]=d[d.length-1],d.pop(),C.destroy()}}function I(C){u.remove(C)}function H(){u.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:R,acquireProgram:G,releaseProgram:D,releaseShaderCache:I,programs:d,dispose:H}}function _m(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,u){n.get(a)[o]=u}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function xm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function al(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ol(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(m,v,A,S,x,f){let p=n[e];return p===void 0?(p={id:m.id,object:m,geometry:v,material:A,groupOrder:S,renderOrder:m.renderOrder,z:x,group:f},n[e]=p):(p.id=m.id,p.object=m,p.geometry=v,p.material=A,p.groupOrder=S,p.renderOrder=m.renderOrder,p.z=x,p.group=f),e++,p}function o(m,v,A,S,x,f){const p=a(m,v,A,S,x,f);A.transmission>0?i.push(p):A.transparent===!0?r.push(p):t.push(p)}function u(m,v,A,S,x,f){const p=a(m,v,A,S,x,f);A.transmission>0?i.unshift(p):A.transparent===!0?r.unshift(p):t.unshift(p)}function h(m,v){t.length>1&&t.sort(m||xm),i.length>1&&i.sort(v||al),r.length>1&&r.sort(v||al)}function d(){for(let m=e,v=n.length;m<v;m++){const A=n[m];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:u,finish:d,sort:h}}function Sm(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new ol,n.set(i,[a])):r>=s.length?(a=new ol,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function ym(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new nt};break;case"SpotLight":t={position:new $,direction:new $,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new $,halfWidth:new $,halfHeight:new $};break}return n[e.id]=t,t}}}function Mm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Em=0;function wm(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function bm(n){const e=new ym,t=Mm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new $);const r=new $,s=new mt,a=new mt;function o(h){let d=0,m=0,v=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let A=0,S=0,x=0,f=0,p=0,T=0,M=0,R=0,G=0,D=0,I=0;h.sort(wm);for(let C=0,w=h.length;C<w;C++){const L=h[C],k=L.color,N=L.intensity,B=L.distance,J=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=k.r*N,m+=k.g*N,v+=k.b*N;else if(L.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(L.sh.coefficients[Q],N);I++}else if(L.isDirectionalLight){const Q=e.get(L);if(Q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ee=L.shadow,Z=t.get(L);Z.shadowIntensity=ee.intensity,Z.shadowBias=ee.bias,Z.shadowNormalBias=ee.normalBias,Z.shadowRadius=ee.radius,Z.shadowMapSize=ee.mapSize,i.directionalShadow[A]=Z,i.directionalShadowMap[A]=J,i.directionalShadowMatrix[A]=L.shadow.matrix,T++}i.directional[A]=Q,A++}else if(L.isSpotLight){const Q=e.get(L);Q.position.setFromMatrixPosition(L.matrixWorld),Q.color.copy(k).multiplyScalar(N),Q.distance=B,Q.coneCos=Math.cos(L.angle),Q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Q.decay=L.decay,i.spot[x]=Q;const ee=L.shadow;if(L.map&&(i.spotLightMap[G]=L.map,G++,ee.updateMatrices(L),L.castShadow&&D++),i.spotLightMatrix[x]=ee.matrix,L.castShadow){const Z=t.get(L);Z.shadowIntensity=ee.intensity,Z.shadowBias=ee.bias,Z.shadowNormalBias=ee.normalBias,Z.shadowRadius=ee.radius,Z.shadowMapSize=ee.mapSize,i.spotShadow[x]=Z,i.spotShadowMap[x]=J,R++}x++}else if(L.isRectAreaLight){const Q=e.get(L);Q.color.copy(k).multiplyScalar(N),Q.halfWidth.set(L.width*.5,0,0),Q.halfHeight.set(0,L.height*.5,0),i.rectArea[f]=Q,f++}else if(L.isPointLight){const Q=e.get(L);if(Q.color.copy(L.color).multiplyScalar(L.intensity),Q.distance=L.distance,Q.decay=L.decay,L.castShadow){const ee=L.shadow,Z=t.get(L);Z.shadowIntensity=ee.intensity,Z.shadowBias=ee.bias,Z.shadowNormalBias=ee.normalBias,Z.shadowRadius=ee.radius,Z.shadowMapSize=ee.mapSize,Z.shadowCameraNear=ee.camera.near,Z.shadowCameraFar=ee.camera.far,i.pointShadow[S]=Z,i.pointShadowMap[S]=J,i.pointShadowMatrix[S]=L.shadow.matrix,M++}i.point[S]=Q,S++}else if(L.isHemisphereLight){const Q=e.get(L);Q.skyColor.copy(L.color).multiplyScalar(N),Q.groundColor.copy(L.groundColor).multiplyScalar(N),i.hemi[p]=Q,p++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=v;const H=i.hash;(H.directionalLength!==A||H.pointLength!==S||H.spotLength!==x||H.rectAreaLength!==f||H.hemiLength!==p||H.numDirectionalShadows!==T||H.numPointShadows!==M||H.numSpotShadows!==R||H.numSpotMaps!==G||H.numLightProbes!==I)&&(i.directional.length=A,i.spot.length=x,i.rectArea.length=f,i.point.length=S,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=R+G-D,i.spotLightMap.length=G,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=I,H.directionalLength=A,H.pointLength=S,H.spotLength=x,H.rectAreaLength=f,H.hemiLength=p,H.numDirectionalShadows=T,H.numPointShadows=M,H.numSpotShadows=R,H.numSpotMaps=G,H.numLightProbes=I,i.version=Em++)}function u(h,d){let m=0,v=0,A=0,S=0,x=0;const f=d.matrixWorldInverse;for(let p=0,T=h.length;p<T;p++){const M=h[p];if(M.isDirectionalLight){const R=i.directional[m];R.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),m++}else if(M.isSpotLight){const R=i.spot[A];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),A++}else if(M.isRectAreaLight){const R=i.rectArea[S];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(f),a.identity(),s.copy(M.matrixWorld),s.premultiply(f),a.extractRotation(s),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),S++}else if(M.isPointLight){const R=i.point[v];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(f),v++}else if(M.isHemisphereLight){const R=i.hemi[x];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(f),x++}}}return{setup:o,setupView:u,state:i}}function ll(n){const e=new bm(n),t=[],i=[];function r(d){h.camera=d,t.length=0,i.length=0}function s(d){t.push(d)}function a(d){i.push(d)}function o(){e.setup(t)}function u(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:o,setupLightsView:u,pushLight:s,pushShadow:a}}function Tm(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new ll(n),e.set(r,[o])):s>=a.length?(o=new ll(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class Rm extends gs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cm extends gs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Pm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Dm(n,e,t){let i=new io;const r=new $e,s=new $e,a=new xt,o=new Rm({depthPacking:Mu}),u=new Cm,h={},d=t.maxTextureSize,m={[Un]:Ut,[Ut]:Un,[on]:on},v=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:Pm,fragmentShader:Lm}),A=v.clone();A.defines.HORIZONTAL_PASS=1;const S=new ti;S.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new tn(S,v),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ol;let p=this.type;this.render=function(D,I,H){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||D.length===0)return;const C=n.getRenderTarget(),w=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),k=n.state;k.setBlending(In),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const N=p!==gn&&this.type===gn,B=p===gn&&this.type!==gn;for(let J=0,Q=D.length;J<Q;J++){const ee=D[J],Z=ee.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);const pe=Z.getFrameExtents();if(r.multiply(pe),s.copy(Z.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/pe.x),r.x=s.x*pe.x,Z.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/pe.y),r.y=s.y*pe.y,Z.mapSize.y=s.y)),Z.map===null||N===!0||B===!0){const Se=this.type!==gn?{minFilter:Xt,magFilter:Xt}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Jn(r.x,r.y,Se),Z.map.texture.name=ee.name+".shadowMap",Z.camera.updateProjectionMatrix()}n.setRenderTarget(Z.map),n.clear();const Ae=Z.getViewportCount();for(let Se=0;Se<Ae;Se++){const ze=Z.getViewport(Se);a.set(s.x*ze.x,s.y*ze.y,s.x*ze.z,s.y*ze.w),k.viewport(a),Z.updateMatrices(ee,Se),i=Z.getFrustum(),R(I,H,Z.camera,ee,this.type)}Z.isPointLightShadow!==!0&&this.type===gn&&T(Z,H),Z.needsUpdate=!1}p=this.type,f.needsUpdate=!1,n.setRenderTarget(C,w,L)};function T(D,I){const H=e.update(x);v.defines.VSM_SAMPLES!==D.blurSamples&&(v.defines.VSM_SAMPLES=D.blurSamples,A.defines.VSM_SAMPLES=D.blurSamples,v.needsUpdate=!0,A.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Jn(r.x,r.y)),v.uniforms.shadow_pass.value=D.map.texture,v.uniforms.resolution.value=D.mapSize,v.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(I,null,H,v,x,null),A.uniforms.shadow_pass.value=D.mapPass.texture,A.uniforms.resolution.value=D.mapSize,A.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(I,null,H,A,x,null)}function M(D,I,H,C){let w=null;const L=H.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(L!==void 0)w=L;else if(w=H.isPointLight===!0?u:o,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const k=w.uuid,N=I.uuid;let B=h[k];B===void 0&&(B={},h[k]=B);let J=B[N];J===void 0&&(J=w.clone(),B[N]=J,I.addEventListener("dispose",G)),w=J}if(w.visible=I.visible,w.wireframe=I.wireframe,C===gn?w.side=I.shadowSide!==null?I.shadowSide:I.side:w.side=I.shadowSide!==null?I.shadowSide:m[I.side],w.alphaMap=I.alphaMap,w.alphaTest=I.alphaTest,w.map=I.map,w.clipShadows=I.clipShadows,w.clippingPlanes=I.clippingPlanes,w.clipIntersection=I.clipIntersection,w.displacementMap=I.displacementMap,w.displacementScale=I.displacementScale,w.displacementBias=I.displacementBias,w.wireframeLinewidth=I.wireframeLinewidth,w.linewidth=I.linewidth,H.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const k=n.properties.get(w);k.light=H}return w}function R(D,I,H,C,w){if(D.visible===!1)return;if(D.layers.test(I.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&w===gn)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,D.matrixWorld);const N=e.update(D),B=D.material;if(Array.isArray(B)){const J=N.groups;for(let Q=0,ee=J.length;Q<ee;Q++){const Z=J[Q],pe=B[Z.materialIndex];if(pe&&pe.visible){const Ae=M(D,pe,C,w);D.onBeforeShadow(n,D,I,H,N,Ae,Z),n.renderBufferDirect(H,null,N,Ae,D,Z),D.onAfterShadow(n,D,I,H,N,Ae,Z)}}}else if(B.visible){const J=M(D,B,C,w);D.onBeforeShadow(n,D,I,H,N,J,null),n.renderBufferDirect(H,null,N,J,D,null),D.onAfterShadow(n,D,I,H,N,J,null)}}const k=D.children;for(let N=0,B=k.length;N<B;N++)R(k[N],I,H,C,w)}function G(D){D.target.removeEventListener("dispose",G);for(const H in h){const C=h[H],w=D.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}function Im(n){function e(){let z=!1;const fe=new xt;let ie=null;const ae=new xt(0,0,0,0);return{setMask:function(me){ie!==me&&!z&&(n.colorMask(me,me,me,me),ie=me)},setLocked:function(me){z=me},setClear:function(me,Ne,Qe,rt,vt){vt===!0&&(me*=rt,Ne*=rt,Qe*=rt),fe.set(me,Ne,Qe,rt),ae.equals(fe)===!1&&(n.clearColor(me,Ne,Qe,rt),ae.copy(fe))},reset:function(){z=!1,ie=null,ae.set(-1,0,0,0)}}}function t(){let z=!1,fe=null,ie=null,ae=null;return{setTest:function(me){me?be(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function(me){fe!==me&&!z&&(n.depthMask(me),fe=me)},setFunc:function(me){if(ie!==me){switch(me){case su:n.depthFunc(n.NEVER);break;case au:n.depthFunc(n.ALWAYS);break;case ou:n.depthFunc(n.LESS);break;case as:n.depthFunc(n.LEQUAL);break;case lu:n.depthFunc(n.EQUAL);break;case cu:n.depthFunc(n.GEQUAL);break;case uu:n.depthFunc(n.GREATER);break;case hu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ie=me}},setLocked:function(me){z=me},setClear:function(me){ae!==me&&(n.clearDepth(me),ae=me)},reset:function(){z=!1,fe=null,ie=null,ae=null}}}function i(){let z=!1,fe=null,ie=null,ae=null,me=null,Ne=null,Qe=null,rt=null,vt=null;return{setTest:function(je){z||(je?be(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function(je){fe!==je&&!z&&(n.stencilMask(je),fe=je)},setFunc:function(je,qt,dt){(ie!==je||ae!==qt||me!==dt)&&(n.stencilFunc(je,qt,dt),ie=je,ae=qt,me=dt)},setOp:function(je,qt,dt){(Ne!==je||Qe!==qt||rt!==dt)&&(n.stencilOp(je,qt,dt),Ne=je,Qe=qt,rt=dt)},setLocked:function(je){z=je},setClear:function(je){vt!==je&&(n.clearStencil(je),vt=je)},reset:function(){z=!1,fe=null,ie=null,ae=null,me=null,Ne=null,Qe=null,rt=null,vt=null}}}const r=new e,s=new t,a=new i,o=new WeakMap,u=new WeakMap;let h={},d={},m=new WeakMap,v=[],A=null,S=!1,x=null,f=null,p=null,T=null,M=null,R=null,G=null,D=new nt(0,0,0),I=0,H=!1,C=null,w=null,L=null,k=null,N=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,Q=0;const ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(ee)[1]),J=Q>=1):ee.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),J=Q>=2);let Z=null,pe={};const Ae=n.getParameter(n.SCISSOR_BOX),Se=n.getParameter(n.VIEWPORT),ze=new xt().fromArray(Ae),Xe=new xt().fromArray(Se);function te(z,fe,ie,ae){const me=new Uint8Array(4),Ne=n.createTexture();n.bindTexture(z,Ne),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qe=0;Qe<ie;Qe++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(fe,0,n.RGBA,1,1,ae,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(fe+Qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return Ne}const ue={};ue[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),ue[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ue[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),be(n.DEPTH_TEST),s.setFunc(as),qe(!1),Te(po),be(n.CULL_FACE),ht(In);function be(z){h[z]!==!0&&(n.enable(z),h[z]=!0)}function ye(z){h[z]!==!1&&(n.disable(z),h[z]=!1)}function De(z,fe){return d[z]!==fe?(n.bindFramebuffer(z,fe),d[z]=fe,z===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=fe),z===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=fe),!0):!1}function Oe(z,fe){let ie=v,ae=!1;if(z){ie=m.get(fe),ie===void 0&&(ie=[],m.set(fe,ie));const me=z.textures;if(ie.length!==me.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let Ne=0,Qe=me.length;Ne<Qe;Ne++)ie[Ne]=n.COLOR_ATTACHMENT0+Ne;ie.length=me.length,ae=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,ae=!0);ae&&n.drawBuffers(ie)}function We(z){return A!==z?(n.useProgram(z),A=z,!0):!1}const st={[qn]:n.FUNC_ADD,[kc]:n.FUNC_SUBTRACT,[Hc]:n.FUNC_REVERSE_SUBTRACT};st[Wc]=n.MIN,st[Xc]=n.MAX;const O={[qc]:n.ZERO,[Yc]:n.ONE,[Qc]:n.SRC_COLOR,[aa]:n.SRC_ALPHA,[eu]:n.SRC_ALPHA_SATURATE,[$c]:n.DST_COLOR,[jc]:n.DST_ALPHA,[Kc]:n.ONE_MINUS_SRC_COLOR,[oa]:n.ONE_MINUS_SRC_ALPHA,[Jc]:n.ONE_MINUS_DST_COLOR,[Zc]:n.ONE_MINUS_DST_ALPHA,[tu]:n.CONSTANT_COLOR,[nu]:n.ONE_MINUS_CONSTANT_COLOR,[iu]:n.CONSTANT_ALPHA,[ru]:n.ONE_MINUS_CONSTANT_ALPHA};function ht(z,fe,ie,ae,me,Ne,Qe,rt,vt,je){if(z===In){S===!0&&(ye(n.BLEND),S=!1);return}if(S===!1&&(be(n.BLEND),S=!0),z!==Vc){if(z!==x||je!==H){if((f!==qn||M!==qn)&&(n.blendEquation(n.FUNC_ADD),f=qn,M=qn),je)switch(z){case Mi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mo:n.blendFunc(n.ONE,n.ONE);break;case go:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vo:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Mi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case go:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vo:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}p=null,T=null,R=null,G=null,D.set(0,0,0),I=0,x=z,H=je}return}me=me||fe,Ne=Ne||ie,Qe=Qe||ae,(fe!==f||me!==M)&&(n.blendEquationSeparate(st[fe],st[me]),f=fe,M=me),(ie!==p||ae!==T||Ne!==R||Qe!==G)&&(n.blendFuncSeparate(O[ie],O[ae],O[Ne],O[Qe]),p=ie,T=ae,R=Ne,G=Qe),(rt.equals(D)===!1||vt!==I)&&(n.blendColor(rt.r,rt.g,rt.b,vt),D.copy(rt),I=vt),x=z,H=!1}function Je(z,fe){z.side===on?ye(n.CULL_FACE):be(n.CULL_FACE);let ie=z.side===Ut;fe&&(ie=!ie),qe(ie),z.blending===Mi&&z.transparent===!1?ht(In):ht(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),s.setFunc(z.depthFunc),s.setTest(z.depthTest),s.setMask(z.depthWrite),r.setMask(z.colorWrite);const ae=z.stencilWrite;a.setTest(ae),ae&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Fe(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?be(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function qe(z){C!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),C=z)}function Te(z){z!==Bc?(be(n.CULL_FACE),z!==w&&(z===po?n.cullFace(n.BACK):z===Gc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),w=z}function it(z){z!==L&&(J&&n.lineWidth(z),L=z)}function Fe(z,fe,ie){z?(be(n.POLYGON_OFFSET_FILL),(k!==fe||N!==ie)&&(n.polygonOffset(fe,ie),k=fe,N=ie)):ye(n.POLYGON_OFFSET_FILL)}function Pe(z){z?be(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}function F(z){z===void 0&&(z=n.TEXTURE0+B-1),Z!==z&&(n.activeTexture(z),Z=z)}function y(z,fe,ie){ie===void 0&&(Z===null?ie=n.TEXTURE0+B-1:ie=Z);let ae=pe[ie];ae===void 0&&(ae={type:void 0,texture:void 0},pe[ie]=ae),(ae.type!==z||ae.texture!==fe)&&(Z!==ie&&(n.activeTexture(ie),Z=ie),n.bindTexture(z,fe||ue[z]),ae.type=z,ae.texture=fe)}function X(){const z=pe[Z];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function se(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ce(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function oe(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Re(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function he(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ve(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function de(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ee(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ye(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ie(z){ze.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),ze.copy(z))}function we(z){Xe.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),Xe.copy(z))}function Ue(z,fe){let ie=u.get(fe);ie===void 0&&(ie=new WeakMap,u.set(fe,ie));let ae=ie.get(z);ae===void 0&&(ae=n.getUniformBlockIndex(fe,z.name),ie.set(z,ae))}function Be(z,fe){const ae=u.get(fe).get(z);o.get(fe)!==ae&&(n.uniformBlockBinding(fe,ae,z.__bindingPointIndex),o.set(fe,ae))}function at(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},Z=null,pe={},d={},m=new WeakMap,v=[],A=null,S=!1,x=null,f=null,p=null,T=null,M=null,R=null,G=null,D=new nt(0,0,0),I=0,H=!1,C=null,w=null,L=null,k=null,N=null,ze.set(0,0,n.canvas.width,n.canvas.height),Xe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:be,disable:ye,bindFramebuffer:De,drawBuffers:Oe,useProgram:We,setBlending:ht,setMaterial:Je,setFlipSided:qe,setCullFace:Te,setLineWidth:it,setPolygonOffset:Fe,setScissorTest:Pe,activeTexture:F,bindTexture:y,unbindTexture:X,compressedTexImage2D:se,compressedTexImage3D:ce,texImage2D:Ee,texImage3D:Ye,updateUBOMapping:Ue,uniformBlockBinding:Be,texStorage2D:Ve,texStorage3D:de,texSubImage2D:oe,texSubImage3D:Re,compressedTexSubImage2D:he,compressedTexSubImage3D:Me,scissor:Ie,viewport:we,reset:at}}function cl(n,e,t,i){const r=Fm(i);switch(t){case Hl:return n*e;case Xl:return n*e;case ql:return n*e*2;case Yl:return n*e/r.components*r.byteLength;case Za:return n*e/r.components*r.byteLength;case Ql:return n*e*2/r.components*r.byteLength;case $a:return n*e*2/r.components*r.byteLength;case Wl:return n*e*3/r.components*r.byteLength;case en:return n*e*4/r.components*r.byteLength;case Ja:return n*e*4/r.components*r.byteLength;case Jr:case es:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ts:case ns:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fa:case ma:return Math.max(n,16)*Math.max(e,8)/4;case da:case pa:return Math.max(n,8)*Math.max(e,8)/2;case ga:case va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _a:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Sa:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ya:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ma:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ea:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case wa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ba:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ta:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ra:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ca:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Pa:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case La:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Da:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case is:case Ia:case Fa:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Kl:case Ua:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Na:case Oa:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Fm(n){switch(n){case xn:case zl:return{byteLength:1,components:1};case ur:case Vl:case mr:return{byteLength:2,components:1};case Ka:case ja:return{byteLength:2,components:4};case $n:case Qa:case An:return{byteLength:4,components:1};case kl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Um(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new $e,d=new WeakMap;let m;const v=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(F,y){return A?new OffscreenCanvas(F,y):hr("canvas")}function x(F,y,X){let se=1;const ce=Pe(F);if((ce.width>X||ce.height>X)&&(se=X/Math.max(ce.width,ce.height)),se<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const oe=Math.floor(se*ce.width),Re=Math.floor(se*ce.height);m===void 0&&(m=S(oe,Re));const he=y?S(oe,Re):m;return he.width=oe,he.height=Re,he.getContext("2d").drawImage(F,0,0,oe,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+oe+"x"+Re+")."),he}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),F;return F}function f(F){return F.generateMipmaps&&F.minFilter!==Xt&&F.minFilter!==Jt}function p(F){n.generateMipmap(F)}function T(F,y,X,se,ce=!1){if(F!==null){if(n[F]!==void 0)return n[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let oe=y;if(y===n.RED&&(X===n.FLOAT&&(oe=n.R32F),X===n.HALF_FLOAT&&(oe=n.R16F),X===n.UNSIGNED_BYTE&&(oe=n.R8)),y===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(oe=n.R8UI),X===n.UNSIGNED_SHORT&&(oe=n.R16UI),X===n.UNSIGNED_INT&&(oe=n.R32UI),X===n.BYTE&&(oe=n.R8I),X===n.SHORT&&(oe=n.R16I),X===n.INT&&(oe=n.R32I)),y===n.RG&&(X===n.FLOAT&&(oe=n.RG32F),X===n.HALF_FLOAT&&(oe=n.RG16F),X===n.UNSIGNED_BYTE&&(oe=n.RG8)),y===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(oe=n.RG8UI),X===n.UNSIGNED_SHORT&&(oe=n.RG16UI),X===n.UNSIGNED_INT&&(oe=n.RG32UI),X===n.BYTE&&(oe=n.RG8I),X===n.SHORT&&(oe=n.RG16I),X===n.INT&&(oe=n.RG32I)),y===n.RGB&&X===n.UNSIGNED_INT_5_9_9_9_REV&&(oe=n.RGB9_E5),y===n.RGBA){const Re=ce?os:tt.getTransfer(se);X===n.FLOAT&&(oe=n.RGBA32F),X===n.HALF_FLOAT&&(oe=n.RGBA16F),X===n.UNSIGNED_BYTE&&(oe=Re===ut?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(oe=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(oe=n.RGB5_A1)}return(oe===n.R16F||oe===n.R32F||oe===n.RG16F||oe===n.RG32F||oe===n.RGBA16F||oe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function M(F,y){let X;return F?y===null||y===$n||y===Pi?X=n.DEPTH24_STENCIL8:y===An?X=n.DEPTH32F_STENCIL8:y===ur&&(X=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===$n||y===Pi?X=n.DEPTH_COMPONENT24:y===An?X=n.DEPTH_COMPONENT32F:y===ur&&(X=n.DEPTH_COMPONENT16),X}function R(F,y){return f(F)===!0||F.isFramebufferTexture&&F.minFilter!==Xt&&F.minFilter!==Jt?Math.log2(Math.max(y.width,y.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?y.mipmaps.length:1}function G(F){const y=F.target;y.removeEventListener("dispose",G),I(y),y.isVideoTexture&&d.delete(y)}function D(F){const y=F.target;y.removeEventListener("dispose",D),C(y)}function I(F){const y=i.get(F);if(y.__webglInit===void 0)return;const X=F.source,se=v.get(X);if(se){const ce=se[y.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&H(F),Object.keys(se).length===0&&v.delete(X)}i.remove(F)}function H(F){const y=i.get(F);n.deleteTexture(y.__webglTexture);const X=F.source,se=v.get(X);delete se[y.__cacheKey],a.memory.textures--}function C(F){const y=i.get(F);if(F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(y.__webglFramebuffer[se]))for(let ce=0;ce<y.__webglFramebuffer[se].length;ce++)n.deleteFramebuffer(y.__webglFramebuffer[se][ce]);else n.deleteFramebuffer(y.__webglFramebuffer[se]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[se])}else{if(Array.isArray(y.__webglFramebuffer))for(let se=0;se<y.__webglFramebuffer.length;se++)n.deleteFramebuffer(y.__webglFramebuffer[se]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let se=0;se<y.__webglColorRenderbuffer.length;se++)y.__webglColorRenderbuffer[se]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[se]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const X=F.textures;for(let se=0,ce=X.length;se<ce;se++){const oe=i.get(X[se]);oe.__webglTexture&&(n.deleteTexture(oe.__webglTexture),a.memory.textures--),i.remove(X[se])}i.remove(F)}let w=0;function L(){w=0}function k(){const F=w;return F>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+r.maxTextures),w+=1,F}function N(F){const y=[];return y.push(F.wrapS),y.push(F.wrapT),y.push(F.wrapR||0),y.push(F.magFilter),y.push(F.minFilter),y.push(F.anisotropy),y.push(F.internalFormat),y.push(F.format),y.push(F.type),y.push(F.generateMipmaps),y.push(F.premultiplyAlpha),y.push(F.flipY),y.push(F.unpackAlignment),y.push(F.colorSpace),y.join()}function B(F,y){const X=i.get(F);if(F.isVideoTexture&&it(F),F.isRenderTargetTexture===!1&&F.version>0&&X.__version!==F.version){const se=F.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(X,F,y);return}}t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+y)}function J(F,y){const X=i.get(F);if(F.version>0&&X.__version!==F.version){Xe(X,F,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+y)}function Q(F,y){const X=i.get(F);if(F.version>0&&X.__version!==F.version){Xe(X,F,y);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+y)}function ee(F,y){const X=i.get(F);if(F.version>0&&X.__version!==F.version){te(X,F,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+y)}const Z={[ua]:n.REPEAT,[Qn]:n.CLAMP_TO_EDGE,[ha]:n.MIRRORED_REPEAT},pe={[Xt]:n.NEAREST,[Su]:n.NEAREST_MIPMAP_NEAREST,[Tr]:n.NEAREST_MIPMAP_LINEAR,[Jt]:n.LINEAR,[Ss]:n.LINEAR_MIPMAP_NEAREST,[Kn]:n.LINEAR_MIPMAP_LINEAR},Ae={[bu]:n.NEVER,[Du]:n.ALWAYS,[Tu]:n.LESS,[jl]:n.LEQUAL,[Ru]:n.EQUAL,[Lu]:n.GEQUAL,[Cu]:n.GREATER,[Pu]:n.NOTEQUAL};function Se(F,y){if(y.type===An&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Jt||y.magFilter===Ss||y.magFilter===Tr||y.magFilter===Kn||y.minFilter===Jt||y.minFilter===Ss||y.minFilter===Tr||y.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(F,n.TEXTURE_WRAP_S,Z[y.wrapS]),n.texParameteri(F,n.TEXTURE_WRAP_T,Z[y.wrapT]),(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)&&n.texParameteri(F,n.TEXTURE_WRAP_R,Z[y.wrapR]),n.texParameteri(F,n.TEXTURE_MAG_FILTER,pe[y.magFilter]),n.texParameteri(F,n.TEXTURE_MIN_FILTER,pe[y.minFilter]),y.compareFunction&&(n.texParameteri(F,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(F,n.TEXTURE_COMPARE_FUNC,Ae[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Xt||y.minFilter!==Tr&&y.minFilter!==Kn||y.type===An&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");n.texParameterf(F,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ze(F,y){let X=!1;F.__webglInit===void 0&&(F.__webglInit=!0,y.addEventListener("dispose",G));const se=y.source;let ce=v.get(se);ce===void 0&&(ce={},v.set(se,ce));const oe=N(y);if(oe!==F.__cacheKey){ce[oe]===void 0&&(ce[oe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ce[oe].usedTimes++;const Re=ce[F.__cacheKey];Re!==void 0&&(ce[F.__cacheKey].usedTimes--,Re.usedTimes===0&&H(y)),F.__cacheKey=oe,F.__webglTexture=ce[oe].texture}return X}function Xe(F,y,X){let se=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(se=n.TEXTURE_3D);const ce=ze(F,y),oe=y.source;t.bindTexture(se,F.__webglTexture,n.TEXTURE0+X);const Re=i.get(oe);if(oe.version!==Re.__version||ce===!0){t.activeTexture(n.TEXTURE0+X);const he=tt.getPrimaries(tt.workingColorSpace),Me=y.colorSpace===Dn?null:tt.getPrimaries(y.colorSpace),Ve=y.colorSpace===Dn||he===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let de=x(y.image,!1,r.maxTextureSize);de=Fe(y,de);const Ee=s.convert(y.format,y.colorSpace),Ye=s.convert(y.type);let Ie=T(y.internalFormat,Ee,Ye,y.colorSpace,y.isVideoTexture);Se(se,y);let we;const Ue=y.mipmaps,Be=y.isVideoTexture!==!0,at=Re.__version===void 0||ce===!0,z=oe.dataReady,fe=R(y,de);if(y.isDepthTexture)Ie=M(y.format===Li,y.type),at&&(Be?t.texStorage2D(n.TEXTURE_2D,1,Ie,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,Ie,de.width,de.height,0,Ee,Ye,null));else if(y.isDataTexture)if(Ue.length>0){Be&&at&&t.texStorage2D(n.TEXTURE_2D,fe,Ie,Ue[0].width,Ue[0].height);for(let ie=0,ae=Ue.length;ie<ae;ie++)we=Ue[ie],Be?z&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,we.width,we.height,Ee,Ye,we.data):t.texImage2D(n.TEXTURE_2D,ie,Ie,we.width,we.height,0,Ee,Ye,we.data);y.generateMipmaps=!1}else Be?(at&&t.texStorage2D(n.TEXTURE_2D,fe,Ie,de.width,de.height),z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de.width,de.height,Ee,Ye,de.data)):t.texImage2D(n.TEXTURE_2D,0,Ie,de.width,de.height,0,Ee,Ye,de.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Be&&at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,Ie,Ue[0].width,Ue[0].height,de.depth);for(let ie=0,ae=Ue.length;ie<ae;ie++)if(we=Ue[ie],y.format!==en)if(Ee!==null)if(Be){if(z)if(y.layerUpdates.size>0){const me=cl(we.width,we.height,y.format,y.type);for(const Ne of y.layerUpdates){const Qe=we.data.subarray(Ne*me/we.data.BYTES_PER_ELEMENT,(Ne+1)*me/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,Ne,we.width,we.height,1,Ee,Qe,0,0)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,we.width,we.height,de.depth,Ee,we.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,Ie,we.width,we.height,de.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?z&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,we.width,we.height,de.depth,Ee,Ye,we.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,Ie,we.width,we.height,de.depth,0,Ee,Ye,we.data)}else{Be&&at&&t.texStorage2D(n.TEXTURE_2D,fe,Ie,Ue[0].width,Ue[0].height);for(let ie=0,ae=Ue.length;ie<ae;ie++)we=Ue[ie],y.format!==en?Ee!==null?Be?z&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,we.width,we.height,Ee,we.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,Ie,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?z&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,we.width,we.height,Ee,Ye,we.data):t.texImage2D(n.TEXTURE_2D,ie,Ie,we.width,we.height,0,Ee,Ye,we.data)}else if(y.isDataArrayTexture)if(Be){if(at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,Ie,de.width,de.height,de.depth),z)if(y.layerUpdates.size>0){const ie=cl(de.width,de.height,y.format,y.type);for(const ae of y.layerUpdates){const me=de.data.subarray(ae*ie/de.data.BYTES_PER_ELEMENT,(ae+1)*ie/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ae,de.width,de.height,1,Ee,Ye,me)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Ee,Ye,de.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,de.width,de.height,de.depth,0,Ee,Ye,de.data);else if(y.isData3DTexture)Be?(at&&t.texStorage3D(n.TEXTURE_3D,fe,Ie,de.width,de.height,de.depth),z&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Ee,Ye,de.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,de.width,de.height,de.depth,0,Ee,Ye,de.data);else if(y.isFramebufferTexture){if(at)if(Be)t.texStorage2D(n.TEXTURE_2D,fe,Ie,de.width,de.height);else{let ie=de.width,ae=de.height;for(let me=0;me<fe;me++)t.texImage2D(n.TEXTURE_2D,me,Ie,ie,ae,0,Ee,Ye,null),ie>>=1,ae>>=1}}else if(Ue.length>0){if(Be&&at){const ie=Pe(Ue[0]);t.texStorage2D(n.TEXTURE_2D,fe,Ie,ie.width,ie.height)}for(let ie=0,ae=Ue.length;ie<ae;ie++)we=Ue[ie],Be?z&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,Ee,Ye,we):t.texImage2D(n.TEXTURE_2D,ie,Ie,Ee,Ye,we);y.generateMipmaps=!1}else if(Be){if(at){const ie=Pe(de);t.texStorage2D(n.TEXTURE_2D,fe,Ie,ie.width,ie.height)}z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,Ye,de)}else t.texImage2D(n.TEXTURE_2D,0,Ie,Ee,Ye,de);f(y)&&p(se),Re.__version=oe.version,y.onUpdate&&y.onUpdate(y)}F.__version=y.version}function te(F,y,X){if(y.image.length!==6)return;const se=ze(F,y),ce=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+X);const oe=i.get(ce);if(ce.version!==oe.__version||se===!0){t.activeTexture(n.TEXTURE0+X);const Re=tt.getPrimaries(tt.workingColorSpace),he=y.colorSpace===Dn?null:tt.getPrimaries(y.colorSpace),Me=y.colorSpace===Dn||Re===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ve=y.isCompressedTexture||y.image[0].isCompressedTexture,de=y.image[0]&&y.image[0].isDataTexture,Ee=[];for(let ae=0;ae<6;ae++)!Ve&&!de?Ee[ae]=x(y.image[ae],!0,r.maxCubemapSize):Ee[ae]=de?y.image[ae].image:y.image[ae],Ee[ae]=Fe(y,Ee[ae]);const Ye=Ee[0],Ie=s.convert(y.format,y.colorSpace),we=s.convert(y.type),Ue=T(y.internalFormat,Ie,we,y.colorSpace),Be=y.isVideoTexture!==!0,at=oe.__version===void 0||se===!0,z=ce.dataReady;let fe=R(y,Ye);Se(n.TEXTURE_CUBE_MAP,y);let ie;if(Ve){Be&&at&&t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,Ue,Ye.width,Ye.height);for(let ae=0;ae<6;ae++){ie=Ee[ae].mipmaps;for(let me=0;me<ie.length;me++){const Ne=ie[me];y.format!==en?Ie!==null?Be?z&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,me,0,0,Ne.width,Ne.height,Ie,Ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,me,Ue,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,me,0,0,Ne.width,Ne.height,Ie,we,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,me,Ue,Ne.width,Ne.height,0,Ie,we,Ne.data)}}}else{if(ie=y.mipmaps,Be&&at){ie.length>0&&fe++;const ae=Pe(Ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,Ue,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(de){Be?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ee[ae].width,Ee[ae].height,Ie,we,Ee[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ue,Ee[ae].width,Ee[ae].height,0,Ie,we,Ee[ae].data);for(let me=0;me<ie.length;me++){const Qe=ie[me].image[ae].image;Be?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,me+1,0,0,Qe.width,Qe.height,Ie,we,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,me+1,Ue,Qe.width,Qe.height,0,Ie,we,Qe.data)}}else{Be?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ie,we,Ee[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ue,Ie,we,Ee[ae]);for(let me=0;me<ie.length;me++){const Ne=ie[me];Be?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,me+1,0,0,Ie,we,Ne.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,me+1,Ue,Ie,we,Ne.image[ae])}}}f(y)&&p(n.TEXTURE_CUBE_MAP),oe.__version=ce.version,y.onUpdate&&y.onUpdate(y)}F.__version=y.version}function ue(F,y,X,se,ce,oe){const Re=s.convert(X.format,X.colorSpace),he=s.convert(X.type),Me=T(X.internalFormat,Re,he,X.colorSpace);if(!i.get(y).__hasExternalTextures){const de=Math.max(1,y.width>>oe),Ee=Math.max(1,y.height>>oe);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,oe,Me,de,Ee,y.depth,0,Re,he,null):t.texImage2D(ce,oe,Me,de,Ee,0,Re,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,F),Te(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,ce,i.get(X).__webglTexture,0,qe(y)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,ce,i.get(X).__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function be(F,y,X){if(n.bindRenderbuffer(n.RENDERBUFFER,F),y.depthBuffer){const se=y.depthTexture,ce=se&&se.isDepthTexture?se.type:null,oe=M(y.stencilBuffer,ce),Re=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=qe(y);Te(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,oe,y.width,y.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,oe,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,oe,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Re,n.RENDERBUFFER,F)}else{const se=y.textures;for(let ce=0;ce<se.length;ce++){const oe=se[ce],Re=s.convert(oe.format,oe.colorSpace),he=s.convert(oe.type),Me=T(oe.internalFormat,Re,he,oe.colorSpace),Ve=qe(y);X&&Te(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,Me,y.width,y.height):Te(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ve,Me,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Me,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ye(F,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,F),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),B(y.depthTexture,0);const se=i.get(y.depthTexture).__webglTexture,ce=qe(y);if(y.depthTexture.format===Ei)Te(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(y.depthTexture.format===Li)Te(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function De(F){const y=i.get(F),X=F.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==F.depthTexture){const se=F.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),se){const ce=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,se.removeEventListener("dispose",ce)};se.addEventListener("dispose",ce),y.__depthDisposeCallback=ce}y.__boundDepthTexture=se}if(F.depthTexture&&!y.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");ye(y.__webglFramebuffer,F)}else if(X){y.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[se]),y.__webglDepthbuffer[se]===void 0)y.__webglDepthbuffer[se]=n.createRenderbuffer(),be(y.__webglDepthbuffer[se],F,!1);else{const ce=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=y.__webglDepthbuffer[se];n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,oe)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),be(y.__webglDepthbuffer,F,!1);else{const se=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,ce)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(F,y,X){const se=i.get(F);y!==void 0&&ue(se.__webglFramebuffer,F,F.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&De(F)}function We(F){const y=F.texture,X=i.get(F),se=i.get(y);F.addEventListener("dispose",D);const ce=F.textures,oe=F.isWebGLCubeRenderTarget===!0,Re=ce.length>1;if(Re||(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=y.version,a.memory.textures++),oe){X.__webglFramebuffer=[];for(let he=0;he<6;he++)if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer[he]=[];for(let Me=0;Me<y.mipmaps.length;Me++)X.__webglFramebuffer[he][Me]=n.createFramebuffer()}else X.__webglFramebuffer[he]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer=[];for(let he=0;he<y.mipmaps.length;he++)X.__webglFramebuffer[he]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(Re)for(let he=0,Me=ce.length;he<Me;he++){const Ve=i.get(ce[he]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=n.createTexture(),a.memory.textures++)}if(F.samples>0&&Te(F)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let he=0;he<ce.length;he++){const Me=ce[he];X.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[he]);const Ve=s.convert(Me.format,Me.colorSpace),de=s.convert(Me.type),Ee=T(Me.internalFormat,Ve,de,Me.colorSpace,F.isXRRenderTarget===!0),Ye=qe(F);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,Ee,F.width,F.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,X.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),F.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),be(X.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),Se(n.TEXTURE_CUBE_MAP,y);for(let he=0;he<6;he++)if(y.mipmaps&&y.mipmaps.length>0)for(let Me=0;Me<y.mipmaps.length;Me++)ue(X.__webglFramebuffer[he][Me],F,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Me);else ue(X.__webglFramebuffer[he],F,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);f(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let he=0,Me=ce.length;he<Me;he++){const Ve=ce[he],de=i.get(Ve);t.bindTexture(n.TEXTURE_2D,de.__webglTexture),Se(n.TEXTURE_2D,Ve),ue(X.__webglFramebuffer,F,Ve,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,0),f(Ve)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(he=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,se.__webglTexture),Se(he,y),y.mipmaps&&y.mipmaps.length>0)for(let Me=0;Me<y.mipmaps.length;Me++)ue(X.__webglFramebuffer[Me],F,y,n.COLOR_ATTACHMENT0,he,Me);else ue(X.__webglFramebuffer,F,y,n.COLOR_ATTACHMENT0,he,0);f(y)&&p(he),t.unbindTexture()}F.depthBuffer&&De(F)}function st(F){const y=F.textures;for(let X=0,se=y.length;X<se;X++){const ce=y[X];if(f(ce)){const oe=F.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Re=i.get(ce).__webglTexture;t.bindTexture(oe,Re),p(oe),t.unbindTexture()}}}const O=[],ht=[];function Je(F){if(F.samples>0){if(Te(F)===!1){const y=F.textures,X=F.width,se=F.height;let ce=n.COLOR_BUFFER_BIT;const oe=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=i.get(F),he=y.length>1;if(he)for(let Me=0;Me<y.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Me=0;Me<y.length;Me++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Me]);const Ve=i.get(y[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ve,0)}n.blitFramebuffer(0,0,X,se,0,0,X,se,ce,n.NEAREST),u===!0&&(O.length=0,ht.length=0,O.push(n.COLOR_ATTACHMENT0+Me),F.depthBuffer&&F.resolveDepthBuffer===!1&&(O.push(oe),ht.push(oe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ht)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,O))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let Me=0;Me<y.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Me]);const Ve=i.get(y[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,Ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&u){const y=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function qe(F){return Math.min(r.maxSamples,F.samples)}function Te(F){const y=i.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function it(F){const y=a.render.frame;d.get(F)!==y&&(d.set(F,y),F.update())}function Fe(F,y){const X=F.colorSpace,se=F.format,ce=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||X!==Nn&&X!==Dn&&(tt.getTransfer(X)===ut?(se!==en||ce!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),y}function Pe(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(h.width=F.naturalWidth||F.width,h.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(h.width=F.displayWidth,h.height=F.displayHeight):(h.width=F.width,h.height=F.height),h}this.allocateTextureUnit=k,this.resetTextureUnits=L,this.setTexture2D=B,this.setTexture2DArray=J,this.setTexture3D=Q,this.setTextureCube=ee,this.rebindTextures=Oe,this.setupRenderTarget=We,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Te}function Nm(n,e){function t(i,r=Dn){let s;const a=tt.getTransfer(r);if(i===xn)return n.UNSIGNED_BYTE;if(i===Ka)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ja)return n.UNSIGNED_SHORT_5_5_5_1;if(i===kl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===zl)return n.BYTE;if(i===Vl)return n.SHORT;if(i===ur)return n.UNSIGNED_SHORT;if(i===Qa)return n.INT;if(i===$n)return n.UNSIGNED_INT;if(i===An)return n.FLOAT;if(i===mr)return n.HALF_FLOAT;if(i===Hl)return n.ALPHA;if(i===Wl)return n.RGB;if(i===en)return n.RGBA;if(i===Xl)return n.LUMINANCE;if(i===ql)return n.LUMINANCE_ALPHA;if(i===Ei)return n.DEPTH_COMPONENT;if(i===Li)return n.DEPTH_STENCIL;if(i===Yl)return n.RED;if(i===Za)return n.RED_INTEGER;if(i===Ql)return n.RG;if(i===$a)return n.RG_INTEGER;if(i===Ja)return n.RGBA_INTEGER;if(i===Jr||i===es||i===ts||i===ns)if(a===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Jr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ts)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ns)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Jr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===es)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ts)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ns)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===da||i===fa||i===pa||i===ma)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===da)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ma)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ga||i===va||i===Aa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ga||i===va)return a===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Aa)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===_a||i===xa||i===Sa||i===ya||i===Ma||i===Ea||i===wa||i===ba||i===Ta||i===Ra||i===Ca||i===Pa||i===La||i===Da)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===_a)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xa)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sa)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ya)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ma)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ea)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wa)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ba)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ta)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ra)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ca)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pa)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===La)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Da)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===is||i===Ia||i===Fa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===is)return a===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ia)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kl||i===Ua||i===Na||i===Oa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===is)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ua)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Na)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Oa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Pi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Om extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Kr extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bm={type:"move"};class Qs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const x of e.hand.values()){const f=t.getJointPose(x,i),p=this._getHandJoint(h,x);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const d=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],v=d.position.distanceTo(m.position),A=.02,S=.005;h.inputState.pinching&&v>A+S?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=A-S&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bm)))}return o!==null&&(o.visible=r!==null),u!==null&&(u.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Kr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Gm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Vm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Nt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new yn({vertexShader:Gm,fragmentShader:zm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tn(new _r(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class km extends Ui{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",u=1,h=null,d=null,m=null,v=null,A=null,S=null;const x=new Vm,f=t.getContextAttributes();let p=null,T=null;const M=[],R=[],G=new $e;let D=null;const I=new Wt;I.layers.enable(1),I.viewport=new xt;const H=new Wt;H.layers.enable(2),H.viewport=new xt;const C=[I,H],w=new Om;w.layers.enable(1),w.layers.enable(2);let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ue=M[te];return ue===void 0&&(ue=new Qs,M[te]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(te){let ue=M[te];return ue===void 0&&(ue=new Qs,M[te]=ue),ue.getGripSpace()},this.getHand=function(te){let ue=M[te];return ue===void 0&&(ue=new Qs,M[te]=ue),ue.getHandSpace()};function N(te){const ue=R.indexOf(te.inputSource);if(ue===-1)return;const be=M[ue];be!==void 0&&(be.update(te.inputSource,te.frame,h||a),be.dispatchEvent({type:te.type,data:te.inputSource}))}function B(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",J);for(let te=0;te<M.length;te++){const ue=R[te];ue!==null&&(R[te]=null,M[te].disconnect(ue))}L=null,k=null,x.reset(),e.setRenderTarget(p),A=null,v=null,m=null,r=null,T=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(G.width,G.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(te){h=te},this.getBaseLayer=function(){return v!==null?v:A},this.getBinding=function(){return m},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",B),r.addEventListener("inputsourceschange",J),f.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(G),r.renderState.layers===void 0){const ue={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};A=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:A}),e.setPixelRatio(1),e.setSize(A.framebufferWidth,A.framebufferHeight,!1),T=new Jn(A.framebufferWidth,A.framebufferHeight,{format:en,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let ue=null,be=null,ye=null;f.depth&&(ye=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=f.stencil?Li:Ei,be=f.stencil?Pi:$n);const De={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};m=new XRWebGLBinding(r,t),v=m.createProjectionLayer(De),r.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),T=new Jn(v.textureWidth,v.textureHeight,{format:en,type:xn,depthTexture:new cc(v.textureWidth,v.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(u),h=null,a=await r.requestReferenceSpace(o),Xe.setContext(r),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function J(te){for(let ue=0;ue<te.removed.length;ue++){const be=te.removed[ue],ye=R.indexOf(be);ye>=0&&(R[ye]=null,M[ye].disconnect(be))}for(let ue=0;ue<te.added.length;ue++){const be=te.added[ue];let ye=R.indexOf(be);if(ye===-1){for(let Oe=0;Oe<M.length;Oe++)if(Oe>=R.length){R.push(be),ye=Oe;break}else if(R[Oe]===null){R[Oe]=be,ye=Oe;break}if(ye===-1)break}const De=M[ye];De&&De.connect(be)}}const Q=new $,ee=new $;function Z(te,ue,be){Q.setFromMatrixPosition(ue.matrixWorld),ee.setFromMatrixPosition(be.matrixWorld);const ye=Q.distanceTo(ee),De=ue.projectionMatrix.elements,Oe=be.projectionMatrix.elements,We=De[14]/(De[10]-1),st=De[14]/(De[10]+1),O=(De[9]+1)/De[5],ht=(De[9]-1)/De[5],Je=(De[8]-1)/De[0],qe=(Oe[8]+1)/Oe[0],Te=We*Je,it=We*qe,Fe=ye/(-Je+qe),Pe=Fe*-Je;if(ue.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Pe),te.translateZ(Fe),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),De[10]===-1)te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const F=We+Fe,y=st+Fe,X=Te-Pe,se=it+(ye-Pe),ce=O*st/y*F,oe=ht*st/y*F;te.projectionMatrix.makePerspective(X,se,ce,oe,F,y),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function pe(te,ue){ue===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ue.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let ue=te.near,be=te.far;x.texture!==null&&(x.depthNear>0&&(ue=x.depthNear),x.depthFar>0&&(be=x.depthFar)),w.near=H.near=I.near=ue,w.far=H.far=I.far=be,(L!==w.near||k!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),L=w.near,k=w.far);const ye=te.parent,De=w.cameras;pe(w,ye);for(let Oe=0;Oe<De.length;Oe++)pe(De[Oe],ye);De.length===2?Z(w,I,H):w.projectionMatrix.copy(I.projectionMatrix),Ae(te,w,ye)};function Ae(te,ue,be){be===null?te.matrix.copy(ue.matrixWorld):(te.matrix.copy(be.matrixWorld),te.matrix.invert(),te.matrix.multiply(ue.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Ba*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(v===null&&A===null))return u},this.setFoveation=function(te){u=te,v!==null&&(v.fixedFoveation=te),A!==null&&A.fixedFoveation!==void 0&&(A.fixedFoveation=te)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(w)};let Se=null;function ze(te,ue){if(d=ue.getViewerPose(h||a),S=ue,d!==null){const be=d.views;A!==null&&(e.setRenderTargetFramebuffer(T,A.framebuffer),e.setRenderTarget(T));let ye=!1;be.length!==w.cameras.length&&(w.cameras.length=0,ye=!0);for(let Oe=0;Oe<be.length;Oe++){const We=be[Oe];let st=null;if(A!==null)st=A.getViewport(We);else{const ht=m.getViewSubImage(v,We);st=ht.viewport,Oe===0&&(e.setRenderTargetTextures(T,ht.colorTexture,v.ignoreDepthValues?void 0:ht.depthStencilTexture),e.setRenderTarget(T))}let O=C[Oe];O===void 0&&(O=new Wt,O.layers.enable(Oe),O.viewport=new xt,C[Oe]=O),O.matrix.fromArray(We.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(We.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(st.x,st.y,st.width,st.height),Oe===0&&(w.matrix.copy(O.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ye===!0&&w.cameras.push(O)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){const Oe=m.getDepthInformation(be[0]);Oe&&Oe.isValid&&Oe.texture&&x.init(e,Oe,r.renderState)}}for(let be=0;be<M.length;be++){const ye=R[be],De=M[be];ye!==null&&De!==void 0&&De.update(ye,ue,h||a)}Se&&Se(te,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),S=null}const Xe=new oc;Xe.setAnimationLoop(ze),this.setAnimationLoop=function(te){Se=te},this.dispose=function(){}}}const kn=new Sn,Hm=new mt;function Wm(n,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function i(f,p){p.color.getRGB(f.fogColor.value,rc(n)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function r(f,p,T,M,R){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(f,p):p.isMeshToonMaterial?(s(f,p),m(f,p)):p.isMeshPhongMaterial?(s(f,p),d(f,p)):p.isMeshStandardMaterial?(s(f,p),v(f,p),p.isMeshPhysicalMaterial&&A(f,p,R)):p.isMeshMatcapMaterial?(s(f,p),S(f,p)):p.isMeshDepthMaterial?s(f,p):p.isMeshDistanceMaterial?(s(f,p),x(f,p)):p.isMeshNormalMaterial?s(f,p):p.isLineBasicMaterial?(a(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?u(f,p,T,M):p.isSpriteMaterial?h(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Ut&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Ut&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const T=e.get(p),M=T.envMap,R=T.envMapRotation;M&&(f.envMap.value=M,kn.copy(R),kn.x*=-1,kn.y*=-1,kn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),f.envMapRotation.value.setFromMatrix4(Hm.makeRotationFromEuler(kn)),f.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function u(f,p,T,M){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*T,f.scale.value=M*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function d(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function m(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function v(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function A(f,p,T){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ut&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=T.texture,f.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function S(f,p){p.matcap&&(f.matcap.value=p.matcap)}function x(f,p){const T=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(T.matrixWorld),f.nearDistance.value=T.shadow.camera.near,f.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Xm(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function u(T,M){const R=M.program;i.uniformBlockBinding(T,R)}function h(T,M){let R=r[T.id];R===void 0&&(S(T),R=d(T),r[T.id]=R,T.addEventListener("dispose",f));const G=M.program;i.updateUBOMapping(T,G);const D=e.render.frame;s[T.id]!==D&&(v(T),s[T.id]=D)}function d(T){const M=m();T.__bindingPointIndex=M;const R=n.createBuffer(),G=T.__size,D=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,G,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,R),R}function m(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(T){const M=r[T.id],R=T.uniforms,G=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let D=0,I=R.length;D<I;D++){const H=Array.isArray(R[D])?R[D]:[R[D]];for(let C=0,w=H.length;C<w;C++){const L=H[C];if(A(L,D,C,G)===!0){const k=L.__offset,N=Array.isArray(L.value)?L.value:[L.value];let B=0;for(let J=0;J<N.length;J++){const Q=N[J],ee=x(Q);typeof Q=="number"||typeof Q=="boolean"?(L.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,k+B,L.__data)):Q.isMatrix3?(L.__data[0]=Q.elements[0],L.__data[1]=Q.elements[1],L.__data[2]=Q.elements[2],L.__data[3]=0,L.__data[4]=Q.elements[3],L.__data[5]=Q.elements[4],L.__data[6]=Q.elements[5],L.__data[7]=0,L.__data[8]=Q.elements[6],L.__data[9]=Q.elements[7],L.__data[10]=Q.elements[8],L.__data[11]=0):(Q.toArray(L.__data,B),B+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function A(T,M,R,G){const D=T.value,I=M+"_"+R;if(G[I]===void 0)return typeof D=="number"||typeof D=="boolean"?G[I]=D:G[I]=D.clone(),!0;{const H=G[I];if(typeof D=="number"||typeof D=="boolean"){if(H!==D)return G[I]=D,!0}else if(H.equals(D)===!1)return H.copy(D),!0}return!1}function S(T){const M=T.uniforms;let R=0;const G=16;for(let I=0,H=M.length;I<H;I++){const C=Array.isArray(M[I])?M[I]:[M[I]];for(let w=0,L=C.length;w<L;w++){const k=C[w],N=Array.isArray(k.value)?k.value:[k.value];for(let B=0,J=N.length;B<J;B++){const Q=N[B],ee=x(Q),Z=R%G,pe=Z%ee.boundary,Ae=Z+pe;R+=pe,Ae!==0&&G-Ae<ee.storage&&(R+=G-Ae),k.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=R,R+=ee.storage}}}const D=R%G;return D>0&&(R+=G-D),T.__size=R,T.__cache={},this}function x(T){const M={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),M}function f(T){const M=T.target;M.removeEventListener("dispose",f);const R=a.indexOf(M.__bindingPointIndex);a.splice(R,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(const T in r)n.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:u,update:h,dispose:p}}class qm{constructor(e={}){const{canvas:t=Fu(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:m=!1}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const A=new Uint32Array(4),S=new Int32Array(4);let x=null,f=null;const p=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sn,this.toneMapping=Fn,this.toneMappingExposure=1;const M=this;let R=!1,G=0,D=0,I=null,H=-1,C=null;const w=new xt,L=new xt;let k=null;const N=new nt(0);let B=0,J=t.width,Q=t.height,ee=1,Z=null,pe=null;const Ae=new xt(0,0,J,Q),Se=new xt(0,0,J,Q);let ze=!1;const Xe=new io;let te=!1,ue=!1;const be=new mt,ye=new $,De=new xt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function st(){return I===null?ee:1}let O=i;function ht(b,W){return t.getContext(b,W)}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ya}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",ae,!1),t.addEventListener("webglcontextcreationerror",me,!1),O===null){const W="webgl2";if(O=ht(W,b),O===null)throw ht(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Je,qe,Te,it,Fe,Pe,F,y,X,se,ce,oe,Re,he,Me,Ve,de,Ee,Ye,Ie,we,Ue,Be,at;function z(){Je=new $f(O),Je.init(),Ue=new Nm(O,Je),qe=new qf(O,Je,e,Ue),Te=new Im(O),it=new tp(O),Fe=new _m,Pe=new Um(O,Je,Te,Fe,qe,Ue,it),F=new Qf(M),y=new Zf(M),X=new oh(O),Be=new Wf(O,X),se=new Jf(O,X,it,Be),ce=new ip(O,se,X,it),Ye=new np(O,qe,Pe),Ve=new Yf(Fe),oe=new Am(M,F,y,Je,qe,Be,Ve),Re=new Wm(M,Fe),he=new Sm,Me=new Tm(Je),Ee=new Hf(M,F,y,Te,ce,v,u),de=new Dm(M,ce,qe),at=new Xm(O,it,qe,Te),Ie=new Xf(O,Je,it),we=new ep(O,Je,it),it.programs=oe.programs,M.capabilities=qe,M.extensions=Je,M.properties=Fe,M.renderLists=he,M.shadowMap=de,M.state=Te,M.info=it}z();const fe=new km(M,O);this.xr=fe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const b=Je.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Je.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(b){b!==void 0&&(ee=b,this.setSize(J,Q,!1))},this.getSize=function(b){return b.set(J,Q)},this.setSize=function(b,W,q=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=b,Q=W,t.width=Math.floor(b*ee),t.height=Math.floor(W*ee),q===!0&&(t.style.width=b+"px",t.style.height=W+"px"),this.setViewport(0,0,b,W)},this.getDrawingBufferSize=function(b){return b.set(J*ee,Q*ee).floor()},this.setDrawingBufferSize=function(b,W,q){J=b,Q=W,ee=q,t.width=Math.floor(b*q),t.height=Math.floor(W*q),this.setViewport(0,0,b,W)},this.getCurrentViewport=function(b){return b.copy(w)},this.getViewport=function(b){return b.copy(Ae)},this.setViewport=function(b,W,q,l){b.isVector4?Ae.set(b.x,b.y,b.z,b.w):Ae.set(b,W,q,l),Te.viewport(w.copy(Ae).multiplyScalar(ee).round())},this.getScissor=function(b){return b.copy(Se)},this.setScissor=function(b,W,q,l){b.isVector4?Se.set(b.x,b.y,b.z,b.w):Se.set(b,W,q,l),Te.scissor(L.copy(Se).multiplyScalar(ee).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(b){Te.setScissorTest(ze=b)},this.setOpaqueSort=function(b){Z=b},this.setTransparentSort=function(b){pe=b},this.getClearColor=function(b){return b.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(b=!0,W=!0,q=!0){let l=0;if(b){let c=!1;if(I!==null){const g=I.texture.format;c=g===Ja||g===$a||g===Za}if(c){const g=I.texture.type,_=g===xn||g===$n||g===ur||g===Pi||g===Ka||g===ja,E=Ee.getClearColor(),P=Ee.getClearAlpha(),U=E.r,j=E.g,Y=E.b;_?(A[0]=U,A[1]=j,A[2]=Y,A[3]=P,O.clearBufferuiv(O.COLOR,0,A)):(S[0]=U,S[1]=j,S[2]=Y,S[3]=P,O.clearBufferiv(O.COLOR,0,S))}else l|=O.COLOR_BUFFER_BIT}W&&(l|=O.DEPTH_BUFFER_BIT),q&&(l|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(l)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",ae,!1),t.removeEventListener("webglcontextcreationerror",me,!1),he.dispose(),Me.dispose(),Fe.dispose(),F.dispose(),y.dispose(),ce.dispose(),Be.dispose(),at.dispose(),oe.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",dt),fe.removeEventListener("sessionend",xr),un.stop()};function ie(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const b=it.autoReset,W=de.enabled,q=de.autoUpdate,l=de.needsUpdate,c=de.type;z(),it.autoReset=b,de.enabled=W,de.autoUpdate=q,de.needsUpdate=l,de.type=c}function me(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ne(b){const W=b.target;W.removeEventListener("dispose",Ne),Qe(W)}function Qe(b){rt(b),Fe.remove(b)}function rt(b){const W=Fe.get(b).programs;W!==void 0&&(W.forEach(function(q){oe.releaseProgram(q)}),b.isShaderMaterial&&oe.releaseShaderCache(b))}this.renderBufferDirect=function(b,W,q,l,c,g){W===null&&(W=Oe);const _=c.isMesh&&c.matrixWorld.determinant()<0,E=xs(b,W,q,l,c);Te.setMaterial(l,_);let P=q.index,U=1;if(l.wireframe===!0){if(P=se.getWireframeAttribute(q),P===void 0)return;U=2}const j=q.drawRange,Y=q.attributes.position;let V=j.start*U,K=(j.start+j.count)*U;g!==null&&(V=Math.max(V,g.start*U),K=Math.min(K,(g.start+g.count)*U)),P!==null?(V=Math.max(V,0),K=Math.min(K,P.count)):Y!=null&&(V=Math.max(V,0),K=Math.min(K,Y.count));const ne=K-V;if(ne<0||ne===1/0)return;Be.setup(c,l,E,q,P);let _e,ge=Ie;if(P!==null&&(_e=X.get(P),ge=we,ge.setIndex(_e)),c.isMesh)l.wireframe===!0?(Te.setLineWidth(l.wireframeLinewidth*st()),ge.setMode(O.LINES)):ge.setMode(O.TRIANGLES);else if(c.isLine){let le=l.linewidth;le===void 0&&(le=1),Te.setLineWidth(le*st()),c.isLineSegments?ge.setMode(O.LINES):c.isLineLoop?ge.setMode(O.LINE_LOOP):ge.setMode(O.LINE_STRIP)}else c.isPoints?ge.setMode(O.POINTS):c.isSprite&&ge.setMode(O.TRIANGLES);if(c.isBatchedMesh)if(c._multiDrawInstances!==null)ge.renderMultiDrawInstances(c._multiDrawStarts,c._multiDrawCounts,c._multiDrawCount,c._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))ge.renderMultiDraw(c._multiDrawStarts,c._multiDrawCounts,c._multiDrawCount);else{const le=c._multiDrawStarts,Le=c._multiDrawCounts,xe=c._multiDrawCount,Ce=P?X.get(P).bytesPerElement:1,Ze=Fe.get(l).currentProgram.getUniforms();for(let Ke=0;Ke<xe;Ke++)Ze.setValue(O,"_gl_DrawID",Ke),ge.render(le[Ke]/Ce,Le[Ke])}else if(c.isInstancedMesh)ge.renderInstances(V,ne,c.count);else if(q.isInstancedBufferGeometry){const le=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Le=Math.min(q.instanceCount,le);ge.renderInstances(V,ne,Le)}else ge.render(V,ne)};function vt(b,W,q){b.transparent===!0&&b.side===on&&b.forceSinglePass===!1?(b.side=Ut,b.needsUpdate=!0,ii(b,W,q),b.side=Un,b.needsUpdate=!0,ii(b,W,q),b.side=on):ii(b,W,q)}this.compile=function(b,W,q=null){q===null&&(q=b),f=Me.get(q),f.init(W),T.push(f),q.traverseVisible(function(c){c.isLight&&c.layers.test(W.layers)&&(f.pushLight(c),c.castShadow&&f.pushShadow(c))}),b!==q&&b.traverseVisible(function(c){c.isLight&&c.layers.test(W.layers)&&(f.pushLight(c),c.castShadow&&f.pushShadow(c))}),f.setupLights();const l=new Set;return b.traverse(function(c){const g=c.material;if(g)if(Array.isArray(g))for(let _=0;_<g.length;_++){const E=g[_];vt(E,q,c),l.add(E)}else vt(g,q,c),l.add(g)}),T.pop(),f=null,l},this.compileAsync=function(b,W,q=null){const l=this.compile(b,W,q);return new Promise(c=>{function g(){if(l.forEach(function(_){Fe.get(_).currentProgram.isReady()&&l.delete(_)}),l.size===0){c(b);return}setTimeout(g,10)}Je.get("KHR_parallel_shader_compile")!==null?g():setTimeout(g,10)})};let je=null;function qt(b){je&&je(b)}function dt(){un.stop()}function xr(){un.start()}const un=new oc;un.setAnimationLoop(qt),typeof self<"u"&&un.setContext(self),this.setAnimationLoop=function(b){je=b,fe.setAnimationLoop(b),b===null?un.stop():un.start()},fe.addEventListener("sessionstart",dt),fe.addEventListener("sessionend",xr),this.render=function(b,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(W),W=fe.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,W,I),f=Me.get(b,T.length),f.init(W),T.push(f),be.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Xe.setFromProjectionMatrix(be),ue=this.localClippingEnabled,te=Ve.init(this.clippingPlanes,ue),x=he.get(b,p.length),x.init(),p.push(x),fe.enabled===!0&&fe.isPresenting===!0){const g=M.xr.getDepthSensingMesh();g!==null&&Bi(g,W,-1/0,M.sortObjects)}Bi(b,W,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(Z,pe),We=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,We&&Ee.addToRenderList(x,b),this.info.render.frame++,te===!0&&Ve.beginShadows();const q=f.state.shadowsArray;de.render(q,b,W),te===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const l=x.opaque,c=x.transmissive;if(f.setupLights(),W.isArrayCamera){const g=W.cameras;if(c.length>0)for(let _=0,E=g.length;_<E;_++){const P=g[_];yr(l,c,b,P)}We&&Ee.render(b);for(let _=0,E=g.length;_<E;_++){const P=g[_];Sr(x,b,P,P.viewport)}}else c.length>0&&yr(l,c,b,W),We&&Ee.render(b),Sr(x,b,W);I!==null&&(Pe.updateMultisampleRenderTarget(I),Pe.updateRenderTargetMipmap(I)),b.isScene===!0&&b.onAfterRender(M,b,W),Be.resetDefaultState(),H=-1,C=null,T.pop(),T.length>0?(f=T[T.length-1],te===!0&&Ve.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Bi(b,W,q,l){if(b.visible===!1)return;if(b.layers.test(W.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(W);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Xe.intersectsSprite(b)){l&&De.setFromMatrixPosition(b.matrixWorld).applyMatrix4(be);const _=ce.update(b),E=b.material;E.visible&&x.push(b,_,E,q,De.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Xe.intersectsObject(b))){const _=ce.update(b),E=b.material;if(l&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),De.copy(b.boundingSphere.center)):(_.boundingSphere===null&&_.computeBoundingSphere(),De.copy(_.boundingSphere.center)),De.applyMatrix4(b.matrixWorld).applyMatrix4(be)),Array.isArray(E)){const P=_.groups;for(let U=0,j=P.length;U<j;U++){const Y=P[U],V=E[Y.materialIndex];V&&V.visible&&x.push(b,_,V,q,De.z,Y)}}else E.visible&&x.push(b,_,E,q,De.z,null)}}const g=b.children;for(let _=0,E=g.length;_<E;_++)Bi(g[_],W,q,l)}function Sr(b,W,q,l){const c=b.opaque,g=b.transmissive,_=b.transparent;f.setupLightsView(q),te===!0&&Ve.setGlobalState(M.clippingPlanes,q),l&&Te.viewport(w.copy(l)),c.length>0&&ni(c,W,q),g.length>0&&ni(g,W,q),_.length>0&&ni(_,W,q),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function yr(b,W,q,l){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[l.id]===void 0&&(f.state.transmissionRenderTarget[l.id]=new Jn(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?mr:xn,minFilter:Kn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const g=f.state.transmissionRenderTarget[l.id],_=l.viewport||w;g.setSize(_.z,_.w);const E=M.getRenderTarget();M.setRenderTarget(g),M.getClearColor(N),B=M.getClearAlpha(),B<1&&M.setClearColor(16777215,.5),M.clear(),We&&Ee.render(q);const P=M.toneMapping;M.toneMapping=Fn;const U=l.viewport;if(l.viewport!==void 0&&(l.viewport=void 0),f.setupLightsView(l),te===!0&&Ve.setGlobalState(M.clippingPlanes,l),ni(b,q,l),Pe.updateMultisampleRenderTarget(g),Pe.updateRenderTargetMipmap(g),Je.has("WEBGL_multisampled_render_to_texture")===!1){let j=!1;for(let Y=0,V=W.length;Y<V;Y++){const K=W[Y],ne=K.object,_e=K.geometry,ge=K.material,le=K.group;if(ge.side===on&&ne.layers.test(l.layers)){const Le=ge.side;ge.side=Ut,ge.needsUpdate=!0,Mr(ne,q,l,_e,ge,le),ge.side=Le,ge.needsUpdate=!0,j=!0}}j===!0&&(Pe.updateMultisampleRenderTarget(g),Pe.updateRenderTargetMipmap(g))}M.setRenderTarget(E),M.setClearColor(N,B),U!==void 0&&(l.viewport=U),M.toneMapping=P}function ni(b,W,q){const l=W.isScene===!0?W.overrideMaterial:null;for(let c=0,g=b.length;c<g;c++){const _=b[c],E=_.object,P=_.geometry,U=l===null?_.material:l,j=_.group;E.layers.test(q.layers)&&Mr(E,W,q,P,U,j)}}function Mr(b,W,q,l,c,g){b.onBeforeRender(M,W,q,l,c,g),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),c.onBeforeRender(M,W,q,l,b,g),c.transparent===!0&&c.side===on&&c.forceSinglePass===!1?(c.side=Ut,c.needsUpdate=!0,M.renderBufferDirect(q,W,l,c,b,g),c.side=Un,c.needsUpdate=!0,M.renderBufferDirect(q,W,l,c,b,g),c.side=on):M.renderBufferDirect(q,W,l,c,b,g),b.onAfterRender(M,W,q,l,c,g)}function ii(b,W,q){W.isScene!==!0&&(W=Oe);const l=Fe.get(b),c=f.state.lights,g=f.state.shadowsArray,_=c.state.version,E=oe.getParameters(b,c.state,g,W,q),P=oe.getProgramCacheKey(E);let U=l.programs;l.environment=b.isMeshStandardMaterial?W.environment:null,l.fog=W.fog,l.envMap=(b.isMeshStandardMaterial?y:F).get(b.envMap||l.environment),l.envMapRotation=l.environment!==null&&b.envMap===null?W.environmentRotation:b.envMapRotation,U===void 0&&(b.addEventListener("dispose",Ne),U=new Map,l.programs=U);let j=U.get(P);if(j!==void 0){if(l.currentProgram===j&&l.lightsStateVersion===_)return wr(b,E),j}else E.uniforms=oe.getUniforms(b),b.onBeforeCompile(E,M),j=oe.acquireProgram(E,P),U.set(P,j),l.uniforms=E.uniforms;const Y=l.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Y.clippingPlanes=Ve.uniform),wr(b,E),l.needsLights=ot(b),l.lightsStateVersion=_,l.needsLights&&(Y.ambientLightColor.value=c.state.ambient,Y.lightProbe.value=c.state.probe,Y.directionalLights.value=c.state.directional,Y.directionalLightShadows.value=c.state.directionalShadow,Y.spotLights.value=c.state.spot,Y.spotLightShadows.value=c.state.spotShadow,Y.rectAreaLights.value=c.state.rectArea,Y.ltc_1.value=c.state.rectAreaLTC1,Y.ltc_2.value=c.state.rectAreaLTC2,Y.pointLights.value=c.state.point,Y.pointLightShadows.value=c.state.pointShadow,Y.hemisphereLights.value=c.state.hemi,Y.directionalShadowMap.value=c.state.directionalShadowMap,Y.directionalShadowMatrix.value=c.state.directionalShadowMatrix,Y.spotShadowMap.value=c.state.spotShadowMap,Y.spotLightMatrix.value=c.state.spotLightMatrix,Y.spotLightMap.value=c.state.spotLightMap,Y.pointShadowMap.value=c.state.pointShadowMap,Y.pointShadowMatrix.value=c.state.pointShadowMatrix),l.currentProgram=j,l.uniformsList=null,j}function Er(b){if(b.uniformsList===null){const W=b.currentProgram.getUniforms();b.uniformsList=rs.seqWithValue(W.seq,b.uniforms)}return b.uniformsList}function wr(b,W){const q=Fe.get(b);q.outputColorSpace=W.outputColorSpace,q.batching=W.batching,q.batchingColor=W.batchingColor,q.instancing=W.instancing,q.instancingColor=W.instancingColor,q.instancingMorph=W.instancingMorph,q.skinning=W.skinning,q.morphTargets=W.morphTargets,q.morphNormals=W.morphNormals,q.morphColors=W.morphColors,q.morphTargetsCount=W.morphTargetsCount,q.numClippingPlanes=W.numClippingPlanes,q.numIntersection=W.numClipIntersection,q.vertexAlphas=W.vertexAlphas,q.vertexTangents=W.vertexTangents,q.toneMapping=W.toneMapping}function xs(b,W,q,l,c){W.isScene!==!0&&(W=Oe),Pe.resetTextureUnits();const g=W.fog,_=l.isMeshStandardMaterial?W.environment:null,E=I===null?M.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Nn,P=(l.isMeshStandardMaterial?y:F).get(l.envMap||_),U=l.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,j=!!q.attributes.tangent&&(!!l.normalMap||l.anisotropy>0),Y=!!q.morphAttributes.position,V=!!q.morphAttributes.normal,K=!!q.morphAttributes.color;let ne=Fn;l.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ne=M.toneMapping);const _e=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ge=_e!==void 0?_e.length:0,le=Fe.get(l),Le=f.state.lights;if(te===!0&&(ue===!0||b!==C)){const lt=b===C&&l.id===H;Ve.setState(l,b,lt)}let xe=!1;l.version===le.__version?(le.needsLights&&le.lightsStateVersion!==Le.state.version||le.outputColorSpace!==E||c.isBatchedMesh&&le.batching===!1||!c.isBatchedMesh&&le.batching===!0||c.isBatchedMesh&&le.batchingColor===!0&&c.colorTexture===null||c.isBatchedMesh&&le.batchingColor===!1&&c.colorTexture!==null||c.isInstancedMesh&&le.instancing===!1||!c.isInstancedMesh&&le.instancing===!0||c.isSkinnedMesh&&le.skinning===!1||!c.isSkinnedMesh&&le.skinning===!0||c.isInstancedMesh&&le.instancingColor===!0&&c.instanceColor===null||c.isInstancedMesh&&le.instancingColor===!1&&c.instanceColor!==null||c.isInstancedMesh&&le.instancingMorph===!0&&c.morphTexture===null||c.isInstancedMesh&&le.instancingMorph===!1&&c.morphTexture!==null||le.envMap!==P||l.fog===!0&&le.fog!==g||le.numClippingPlanes!==void 0&&(le.numClippingPlanes!==Ve.numPlanes||le.numIntersection!==Ve.numIntersection)||le.vertexAlphas!==U||le.vertexTangents!==j||le.morphTargets!==Y||le.morphNormals!==V||le.morphColors!==K||le.toneMapping!==ne||le.morphTargetsCount!==ge)&&(xe=!0):(xe=!0,le.__version=l.version);let Ce=le.currentProgram;xe===!0&&(Ce=ii(l,W,c));let Ze=!1,Ke=!1,ft=!1;const Ge=Ce.getUniforms(),ct=le.uniforms;if(Te.useProgram(Ce.program)&&(Ze=!0,Ke=!0,ft=!0),l.id!==H&&(H=l.id,Ke=!0),Ze||C!==b){Ge.setValue(O,"projectionMatrix",b.projectionMatrix),Ge.setValue(O,"viewMatrix",b.matrixWorldInverse);const lt=Ge.map.cameraPosition;lt!==void 0&&lt.setValue(O,ye.setFromMatrixPosition(b.matrixWorld)),qe.logarithmicDepthBuffer&&Ge.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(l.isMeshPhongMaterial||l.isMeshToonMaterial||l.isMeshLambertMaterial||l.isMeshBasicMaterial||l.isMeshStandardMaterial||l.isShaderMaterial)&&Ge.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),C!==b&&(C=b,Ke=!0,ft=!0)}if(c.isSkinnedMesh){Ge.setOptional(O,c,"bindMatrix"),Ge.setOptional(O,c,"bindMatrixInverse");const lt=c.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),Ge.setValue(O,"boneTexture",lt.boneTexture,Pe))}c.isBatchedMesh&&(Ge.setOptional(O,c,"batchingTexture"),Ge.setValue(O,"batchingTexture",c._matricesTexture,Pe),Ge.setOptional(O,c,"batchingIdTexture"),Ge.setValue(O,"batchingIdTexture",c._indirectTexture,Pe),Ge.setOptional(O,c,"batchingColorTexture"),c._colorsTexture!==null&&Ge.setValue(O,"batchingColorTexture",c._colorsTexture,Pe));const Et=q.morphAttributes;if((Et.position!==void 0||Et.normal!==void 0||Et.color!==void 0)&&Ye.update(c,q,Ce),(Ke||le.receiveShadow!==c.receiveShadow)&&(le.receiveShadow=c.receiveShadow,Ge.setValue(O,"receiveShadow",c.receiveShadow)),l.isMeshGouraudMaterial&&l.envMap!==null&&(ct.envMap.value=P,ct.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1),l.isMeshStandardMaterial&&l.envMap===null&&W.environment!==null&&(ct.envMapIntensity.value=W.environmentIntensity),Ke&&(Ge.setValue(O,"toneMappingExposure",M.toneMappingExposure),le.needsLights&&br(ct,ft),g&&l.fog===!0&&Re.refreshFogUniforms(ct,g),Re.refreshMaterialUniforms(ct,l,ee,Q,f.state.transmissionRenderTarget[b.id]),rs.upload(O,Er(le),ct,Pe)),l.isShaderMaterial&&l.uniformsNeedUpdate===!0&&(rs.upload(O,Er(le),ct,Pe),l.uniformsNeedUpdate=!1),l.isSpriteMaterial&&Ge.setValue(O,"center",c.center),Ge.setValue(O,"modelViewMatrix",c.modelViewMatrix),Ge.setValue(O,"normalMatrix",c.normalMatrix),Ge.setValue(O,"modelMatrix",c.matrixWorld),l.isShaderMaterial||l.isRawShaderMaterial){const lt=l.uniformsGroups;for(let wt=0,Lt=lt.length;wt<Lt;wt++){const Yt=lt[wt];at.update(Yt,Ce),at.bind(Yt,Ce)}}return Ce}function br(b,W){b.ambientLightColor.needsUpdate=W,b.lightProbe.needsUpdate=W,b.directionalLights.needsUpdate=W,b.directionalLightShadows.needsUpdate=W,b.pointLights.needsUpdate=W,b.pointLightShadows.needsUpdate=W,b.spotLights.needsUpdate=W,b.spotLightShadows.needsUpdate=W,b.rectAreaLights.needsUpdate=W,b.hemisphereLights.needsUpdate=W}function ot(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(b,W,q){Fe.get(b.texture).__webglTexture=W,Fe.get(b.depthTexture).__webglTexture=q;const l=Fe.get(b);l.__hasExternalTextures=!0,l.__autoAllocateDepthBuffer=q===void 0,l.__autoAllocateDepthBuffer||Je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),l.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,W){const q=Fe.get(b);q.__webglFramebuffer=W,q.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(b,W=0,q=0){I=b,G=W,D=q;let l=!0,c=null,g=!1,_=!1;if(b){const P=Fe.get(b);if(P.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(O.FRAMEBUFFER,null),l=!1;else if(P.__webglFramebuffer===void 0)Pe.setupRenderTarget(b);else if(P.__hasExternalTextures)Pe.rebindTextures(b,Fe.get(b.texture).__webglTexture,Fe.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Y=b.depthTexture;if(P.__boundDepthTexture!==Y){if(Y!==null&&Fe.has(Y)&&(b.width!==Y.image.width||b.height!==Y.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Pe.setupDepthRenderbuffer(b)}}const U=b.texture;(U.isData3DTexture||U.isDataArrayTexture||U.isCompressedArrayTexture)&&(_=!0);const j=Fe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(j[W])?c=j[W][q]:c=j[W],g=!0):b.samples>0&&Pe.useMultisampledRTT(b)===!1?c=Fe.get(b).__webglMultisampledFramebuffer:Array.isArray(j)?c=j[q]:c=j,w.copy(b.viewport),L.copy(b.scissor),k=b.scissorTest}else w.copy(Ae).multiplyScalar(ee).floor(),L.copy(Se).multiplyScalar(ee).floor(),k=ze;if(Te.bindFramebuffer(O.FRAMEBUFFER,c)&&l&&Te.drawBuffers(b,c),Te.viewport(w),Te.scissor(L),Te.setScissorTest(k),g){const P=Fe.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+W,P.__webglTexture,q)}else if(_){const P=Fe.get(b.texture),U=W||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,P.__webglTexture,q||0,U)}H=-1},this.readRenderTargetPixels=function(b,W,q,l,c,g,_){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let E=Fe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_!==void 0&&(E=E[_]),E){Te.bindFramebuffer(O.FRAMEBUFFER,E);try{const P=b.texture,U=P.format,j=P.type;if(!qe.textureFormatReadable(U)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(j)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=b.width-l&&q>=0&&q<=b.height-c&&O.readPixels(W,q,l,c,Ue.convert(U),Ue.convert(j),g)}finally{const P=I!==null?Fe.get(I).__webglFramebuffer:null;Te.bindFramebuffer(O.FRAMEBUFFER,P)}}},this.readRenderTargetPixelsAsync=async function(b,W,q,l,c,g,_){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let E=Fe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_!==void 0&&(E=E[_]),E){Te.bindFramebuffer(O.FRAMEBUFFER,E);try{const P=b.texture,U=P.format,j=P.type;if(!qe.textureFormatReadable(U))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(j))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=b.width-l&&q>=0&&q<=b.height-c){const Y=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Y),O.bufferData(O.PIXEL_PACK_BUFFER,g.byteLength,O.STREAM_READ),O.readPixels(W,q,l,c,Ue.convert(U),Ue.convert(j),0),O.flush();const V=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);await Uu(O,V,4);try{O.bindBuffer(O.PIXEL_PACK_BUFFER,Y),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,g)}finally{O.deleteBuffer(Y),O.deleteSync(V)}return g}}finally{const P=I!==null?Fe.get(I).__webglFramebuffer:null;Te.bindFramebuffer(O.FRAMEBUFFER,P)}}},this.copyFramebufferToTexture=function(b,W=null,q=0){b.isTexture!==!0&&(or("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,b=arguments[1]);const l=Math.pow(2,-q),c=Math.floor(b.image.width*l),g=Math.floor(b.image.height*l),_=W!==null?W.x:0,E=W!==null?W.y:0;Pe.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,_,E,c,g),Te.unbindTexture()},this.copyTextureToTexture=function(b,W,q=null,l=null,c=0){b.isTexture!==!0&&(or("WebGLRenderer: copyTextureToTexture function signature has changed."),l=arguments[0]||null,b=arguments[1],W=arguments[2],c=arguments[3]||0,q=null);let g,_,E,P,U,j;q!==null?(g=q.max.x-q.min.x,_=q.max.y-q.min.y,E=q.min.x,P=q.min.y):(g=b.image.width,_=b.image.height,E=0,P=0),l!==null?(U=l.x,j=l.y):(U=0,j=0);const Y=Ue.convert(W.format),V=Ue.convert(W.type);Pe.setTexture2D(W,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const K=O.getParameter(O.UNPACK_ROW_LENGTH),ne=O.getParameter(O.UNPACK_IMAGE_HEIGHT),_e=O.getParameter(O.UNPACK_SKIP_PIXELS),ge=O.getParameter(O.UNPACK_SKIP_ROWS),le=O.getParameter(O.UNPACK_SKIP_IMAGES),Le=b.isCompressedTexture?b.mipmaps[c]:b.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,Le.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Le.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,E),O.pixelStorei(O.UNPACK_SKIP_ROWS,P),b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,c,U,j,g,_,Y,V,Le.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,c,U,j,Le.width,Le.height,Y,Le.data):O.texSubImage2D(O.TEXTURE_2D,c,U,j,g,_,Y,V,Le),O.pixelStorei(O.UNPACK_ROW_LENGTH,K),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ne),O.pixelStorei(O.UNPACK_SKIP_PIXELS,_e),O.pixelStorei(O.UNPACK_SKIP_ROWS,ge),O.pixelStorei(O.UNPACK_SKIP_IMAGES,le),c===0&&W.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(b,W,q=null,l=null,c=0){b.isTexture!==!0&&(or("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,l=arguments[1]||null,b=arguments[2],W=arguments[3],c=arguments[4]||0);let g,_,E,P,U,j,Y,V,K;const ne=b.isCompressedTexture?b.mipmaps[c]:b.image;q!==null?(g=q.max.x-q.min.x,_=q.max.y-q.min.y,E=q.max.z-q.min.z,P=q.min.x,U=q.min.y,j=q.min.z):(g=ne.width,_=ne.height,E=ne.depth,P=0,U=0,j=0),l!==null?(Y=l.x,V=l.y,K=l.z):(Y=0,V=0,K=0);const _e=Ue.convert(W.format),ge=Ue.convert(W.type);let le;if(W.isData3DTexture)Pe.setTexture3D(W,0),le=O.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)Pe.setTexture2DArray(W,0),le=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const Le=O.getParameter(O.UNPACK_ROW_LENGTH),xe=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ce=O.getParameter(O.UNPACK_SKIP_PIXELS),Ze=O.getParameter(O.UNPACK_SKIP_ROWS),Ke=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,ne.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ne.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,P),O.pixelStorei(O.UNPACK_SKIP_ROWS,U),O.pixelStorei(O.UNPACK_SKIP_IMAGES,j),b.isDataTexture||b.isData3DTexture?O.texSubImage3D(le,c,Y,V,K,g,_,E,_e,ge,ne.data):W.isCompressedArrayTexture?O.compressedTexSubImage3D(le,c,Y,V,K,g,_,E,_e,ne.data):O.texSubImage3D(le,c,Y,V,K,g,_,E,_e,ge,ne),O.pixelStorei(O.UNPACK_ROW_LENGTH,Le),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,xe),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ce),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ze),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ke),c===0&&W.generateMipmaps&&O.generateMipmap(le),Te.unbindTexture()},this.initRenderTarget=function(b){Fe.get(b).__webglFramebuffer===void 0&&Pe.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Pe.setTextureCube(b,0):b.isData3DTexture?Pe.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Pe.setTexture2DArray(b,0):Pe.setTexture2D(b,0),Te.unbindTexture()},this.resetState=function(){G=0,D=0,I=null,Te.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===eo?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace===ms?"display-p3":"srgb"}}class Ym extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ul={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Qm{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,u;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(d){o++,s===!1&&r.onStart!==void 0&&r.onStart(d,a,o),s=!0},this.itemEnd=function(d){a++,r.onProgress!==void 0&&r.onProgress(d,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return u?u(d):d},this.setURLModifier=function(d){return u=d,this},this.addHandler=function(d,m){return h.push(d,m),this},this.removeHandler=function(d){const m=h.indexOf(d);return m!==-1&&h.splice(m,2),this},this.getHandler=function(d){for(let m=0,v=h.length;m<v;m+=2){const A=h[m],S=h[m+1];if(A.global&&(A.lastIndex=0),A.test(d))return S}return null}}}const Km=new Qm;class so{constructor(e){this.manager=e!==void 0?e:Km,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}so.DEFAULT_MATERIAL_NAME="__DEFAULT";class jm extends so{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ul.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=hr("img");function u(){d(),ul.add(e,this),t&&t(this),s.manager.itemEnd(e)}function h(m){d(),r&&r(m),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){o.removeEventListener("load",u,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",u,!1),o.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class za extends so{constructor(e){super(e)}load(e,t,i,r){const s=new Nt,a=new jm(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class pc extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ks=new mt,hl=new $,dl=new $;class Zm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new io,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;hl.setFromMatrixPosition(e.matrixWorld),t.position.copy(hl),dl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dl),t.updateMatrixWorld(),Ks.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ks),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ks)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $m extends Zm{constructor(){super(new lc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jm extends pc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new $m}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class e0 extends pc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ya}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ya);const nr=Symbol("@@webxr-polyfill/EventTarget");let ao=class{constructor(){this[nr]={listeners:new Map}}addEventListener(e,t){if(typeof e!="string")throw new Error("`type` must be a string");if(typeof t!="function")throw new Error("`listener` must be a function");const i=this[nr].listeners.get(e)||[];i.push(t),this[nr].listeners.set(e,i)}removeEventListener(e,t){if(typeof e!="string")throw new Error("`type` must be a string");if(typeof t!="function")throw new Error("`listener` must be a function");const i=this[nr].listeners.get(e)||[];for(let r=i.length;r>=0;r--)i[r]===t&&i.pop()}dispatchEvent(e,t){const i=this[nr].listeners.get(e)||[],r=[];for(let s=0;s<i.length;s++)r[s]=i[s];for(let s of r)s(t);typeof this[`on${e}`]=="function"&&this[`on${e}`](t)}};const t0=1e-6;let Gt=typeof Float32Array<"u"?Float32Array:Array;function ei(){let n=new Gt(16);return Gt!=Float32Array&&(n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0),n[0]=1,n[5]=1,n[10]=1,n[15]=1,n}function n0(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}function bi(n){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function hs(n,e){let t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],u=e[6],h=e[7],d=e[8],m=e[9],v=e[10],A=e[11],S=e[12],x=e[13],f=e[14],p=e[15],T=t*o-i*a,M=t*u-r*a,R=t*h-s*a,G=i*u-r*o,D=i*h-s*o,I=r*h-s*u,H=d*x-m*S,C=d*f-v*S,w=d*p-A*S,L=m*f-v*x,k=m*p-A*x,N=v*p-A*f,B=T*N-M*k+R*L+G*w-D*C+I*H;return B?(B=1/B,n[0]=(o*N-u*k+h*L)*B,n[1]=(r*k-i*N-s*L)*B,n[2]=(x*I-f*D+p*G)*B,n[3]=(v*D-m*I-A*G)*B,n[4]=(u*w-a*N-h*C)*B,n[5]=(t*N-r*w+s*C)*B,n[6]=(f*R-S*I-p*M)*B,n[7]=(d*I-v*R+A*M)*B,n[8]=(a*k-o*w+h*H)*B,n[9]=(i*w-t*k-s*H)*B,n[10]=(S*D-x*R+p*T)*B,n[11]=(m*R-d*D-A*T)*B,n[12]=(o*C-a*L-u*H)*B,n[13]=(t*L-i*C+r*H)*B,n[14]=(x*M-S*G-f*T)*B,n[15]=(d*G-m*M+v*T)*B,n):null}function Ti(n,e,t){let i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],u=e[5],h=e[6],d=e[7],m=e[8],v=e[9],A=e[10],S=e[11],x=e[12],f=e[13],p=e[14],T=e[15],M=t[0],R=t[1],G=t[2],D=t[3];return n[0]=M*i+R*o+G*m+D*x,n[1]=M*r+R*u+G*v+D*f,n[2]=M*s+R*h+G*A+D*p,n[3]=M*a+R*d+G*S+D*T,M=t[4],R=t[5],G=t[6],D=t[7],n[4]=M*i+R*o+G*m+D*x,n[5]=M*r+R*u+G*v+D*f,n[6]=M*s+R*h+G*A+D*p,n[7]=M*a+R*d+G*S+D*T,M=t[8],R=t[9],G=t[10],D=t[11],n[8]=M*i+R*o+G*m+D*x,n[9]=M*r+R*u+G*v+D*f,n[10]=M*s+R*h+G*A+D*p,n[11]=M*a+R*d+G*S+D*T,M=t[12],R=t[13],G=t[14],D=t[15],n[12]=M*i+R*o+G*m+D*x,n[13]=M*r+R*u+G*v+D*f,n[14]=M*s+R*h+G*A+D*p,n[15]=M*a+R*d+G*S+D*T,n}function dr(n,e,t){let i=e[0],r=e[1],s=e[2],a=e[3],o=i+i,u=r+r,h=s+s,d=i*o,m=i*u,v=i*h,A=r*u,S=r*h,x=s*h,f=a*o,p=a*u,T=a*h;return n[0]=1-(A+x),n[1]=m+T,n[2]=v-p,n[3]=0,n[4]=m-T,n[5]=1-(d+x),n[6]=S+f,n[7]=0,n[8]=v+p,n[9]=S-f,n[10]=1-(d+A),n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function mc(n,e){return n[0]=e[12],n[1]=e[13],n[2]=e[14],n}function gc(n,e){let t=e[0]+e[5]+e[10],i=0;return t>0?(i=Math.sqrt(t+1)*2,n[3]=.25*i,n[0]=(e[6]-e[9])/i,n[1]=(e[8]-e[2])/i,n[2]=(e[1]-e[4])/i):e[0]>e[5]&&e[0]>e[10]?(i=Math.sqrt(1+e[0]-e[5]-e[10])*2,n[3]=(e[6]-e[9])/i,n[0]=.25*i,n[1]=(e[1]+e[4])/i,n[2]=(e[8]+e[2])/i):e[5]>e[10]?(i=Math.sqrt(1+e[5]-e[0]-e[10])*2,n[3]=(e[8]-e[2])/i,n[0]=(e[1]+e[4])/i,n[1]=.25*i,n[2]=(e[6]+e[9])/i):(i=Math.sqrt(1+e[10]-e[0]-e[5])*2,n[3]=(e[1]-e[4])/i,n[0]=(e[8]+e[2])/i,n[1]=(e[6]+e[9])/i,n[2]=.25*i),n}function vc(n,e,t,i,r){let s=1/Math.tan(e/2),a;return n[0]=s/t,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=s,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=-1,n[12]=0,n[13]=0,n[15]=0,r!=null&&r!==1/0?(a=1/(i-r),n[10]=(r+i)*a,n[14]=2*r*i*a):(n[10]=-1,n[14]=-2*i),n}function vn(){let n=new Gt(3);return Gt!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0),n}function fl(n){var e=new Gt(3);return e[0]=n[0],e[1]=n[1],e[2]=n[2],e}function i0(n){let e=n[0],t=n[1],i=n[2];return Math.sqrt(e*e+t*t+i*i)}function nn(n,e,t){let i=new Gt(3);return i[0]=n,i[1]=e,i[2]=t,i}function pl(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n}function ir(n,e,t){return n[0]=e[0]+t[0],n[1]=e[1]+t[1],n[2]=e[2]+t[2],n}function ml(n,e,t){return n[0]=e[0]*t,n[1]=e[1]*t,n[2]=e[2]*t,n}function Va(n,e){let t=e[0],i=e[1],r=e[2],s=t*t+i*i+r*r;return s>0&&(s=1/Math.sqrt(s),n[0]=e[0]*s,n[1]=e[1]*s,n[2]=e[2]*s),n}function oo(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]}function js(n,e,t){let i=e[0],r=e[1],s=e[2],a=t[0],o=t[1],u=t[2];return n[0]=r*u-s*o,n[1]=s*a-i*u,n[2]=i*o-r*a,n}function Si(n,e,t){let i=t[0],r=t[1],s=t[2],a=t[3],o=e[0],u=e[1],h=e[2],d=r*h-s*u,m=s*o-i*h,v=i*u-r*o,A=r*v-s*m,S=s*d-i*v,x=i*m-r*d,f=a*2;return d*=f,m*=f,v*=f,A*=2,S*=2,x*=2,n[0]=o+d+A,n[1]=u+m+S,n[2]=h+v+x,n}function r0(n,e){let t=nn(n[0],n[1],n[2]),i=nn(e[0],e[1],e[2]);Va(t,t),Va(i,i);let r=oo(t,i);return r>1?0:r<-1?Math.PI:Math.acos(r)}const s0=i0;(function(){let n=vn();return function(e,t,i,r,s,a){let o,u;for(t||(t=3),i||(i=0),r?u=Math.min(r*t+i,e.length):u=e.length,o=i;o<u;o+=t)n[0]=e[o],n[1]=e[o+1],n[2]=e[o+2],s(n,n,a),e[o]=n[0],e[o+1]=n[1],e[o+2]=n[2];return e}})();function a0(){let n=new Gt(9);return Gt!=Float32Array&&(n[1]=0,n[2]=0,n[3]=0,n[5]=0,n[6]=0,n[7]=0),n[0]=1,n[4]=1,n[8]=1,n}function o0(){let n=new Gt(4);return Gt!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0,n[3]=0),n}function l0(n){let e=new Gt(4);return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e}function c0(n,e,t,i){let r=new Gt(4);return r[0]=n,r[1]=e,r[2]=t,r[3]=i,r}function u0(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n}function h0(n,e){let t=e[0],i=e[1],r=e[2],s=e[3],a=t*t+i*i+r*r+s*s;return a>0&&(a=1/Math.sqrt(a),n[0]=t*a,n[1]=i*a,n[2]=r*a,n[3]=s*a),n}(function(){let n=o0();return function(e,t,i,r,s,a){let o,u;for(t||(t=4),i||(i=0),r?u=Math.min(r*t+i,e.length):u=e.length,o=i;o<u;o+=t)n[0]=e[o],n[1]=e[o+1],n[2]=e[o+2],n[3]=e[o+3],s(n,n,a),e[o]=n[0],e[o+1]=n[1],e[o+2]=n[2],e[o+3]=n[3];return e}})();function Zt(){let n=new Gt(4);return Gt!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0),n[3]=1,n}function d0(n,e,t){t=t*.5;let i=Math.sin(t);return n[0]=i*e[0],n[1]=i*e[1],n[2]=i*e[2],n[3]=Math.cos(t),n}function gl(n,e,t){let i=e[0],r=e[1],s=e[2],a=e[3],o=t[0],u=t[1],h=t[2],d=t[3];return n[0]=i*d+a*o+r*h-s*u,n[1]=r*d+a*u+s*o-i*h,n[2]=s*d+a*h+i*u-r*o,n[3]=a*d-i*o-r*u-s*h,n}function lr(n,e,t,i){let r=e[0],s=e[1],a=e[2],o=e[3],u=t[0],h=t[1],d=t[2],m=t[3],v,A,S,x,f;return A=r*u+s*h+a*d+o*m,A<0&&(A=-A,u=-u,h=-h,d=-d,m=-m),1-A>t0?(v=Math.acos(A),S=Math.sin(v),x=Math.sin((1-i)*v)/S,f=Math.sin(i*v)/S):(x=1-i,f=i),n[0]=x*r+f*u,n[1]=x*s+f*h,n[2]=x*a+f*d,n[3]=x*o+f*m,n}function vl(n,e){let t=e[0],i=e[1],r=e[2],s=e[3],a=t*t+i*i+r*r+s*s,o=a?1/a:0;return n[0]=-t*o,n[1]=-i*o,n[2]=-r*o,n[3]=s*o,n}function f0(n,e){let t=e[0]+e[4]+e[8],i;if(t>0)i=Math.sqrt(t+1),n[3]=.5*i,i=.5/i,n[0]=(e[5]-e[7])*i,n[1]=(e[6]-e[2])*i,n[2]=(e[1]-e[3])*i;else{let r=0;e[4]>e[0]&&(r=1),e[8]>e[r*3+r]&&(r=2);let s=(r+1)%3,a=(r+2)%3;i=Math.sqrt(e[r*3+r]-e[s*3+s]-e[a*3+a]+1),n[r]=.5*i,i=.5/i,n[3]=(e[s*3+a]-e[a*3+s])*i,n[s]=(e[s*3+r]+e[r*3+s])*i,n[a]=(e[a*3+r]+e[r*3+a])*i}return n}function p0(n,e,t,i){let r=.5*Math.PI/180;e*=r,t*=r,i*=r;let s=Math.sin(e),a=Math.cos(e),o=Math.sin(t),u=Math.cos(t),h=Math.sin(i),d=Math.cos(i);return n[0]=s*u*d-a*o*h,n[1]=a*o*d+s*u*h,n[2]=a*u*h-s*o*d,n[3]=a*u*d+s*o*h,n}const Al=l0,m0=c0,Zs=u0,ds=h0;(function(){let n=vn(),e=nn(1,0,0),t=nn(0,1,0);return function(i,r,s){let a=oo(r,s);return a<-.999999?(js(n,e,r),s0(n)<1e-6&&js(n,t,r),Va(n,n),d0(i,n,Math.PI),i):a>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(js(n,r,s),i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=1+a,ds(i,i))}})();(function(){let n=Zt(),e=Zt();return function(t,i,r,s,a,o){return lr(n,i,a,o),lr(e,r,s,o),lr(t,n,e,2*o*(1-o)),t}})();(function(){let n=a0();return function(e,t,i,r){return n[0]=i[0],n[3]=i[1],n[6]=i[2],n[1]=r[0],n[4]=r[1],n[7]=r[2],n[2]=-t[0],n[5]=-t[1],n[8]=-t[2],ds(e,f0(e,n))}})();const et=Symbol("@@webxr-polyfill/XRRigidTransform");let Ac=class _c{constructor(){if(this[et]={matrix:null,position:null,orientation:null,inverse:null},arguments.length===0)this[et].matrix=bi(new Float32Array(16));else if(arguments.length===1)arguments[0]instanceof Float32Array?this[et].matrix=arguments[0]:(this[et].position=this._getPoint(arguments[0]),this[et].orientation=DOMPointReadOnly.fromPoint({x:0,y:0,z:0,w:1}));else if(arguments.length===2)this[et].position=this._getPoint(arguments[0]),this[et].orientation=this._getPoint(arguments[1]);else throw new Error("Too many arguments!");if(this[et].matrix){let e=vn();mc(e,this[et].matrix),this[et].position=DOMPointReadOnly.fromPoint({x:e[0],y:e[1],z:e[2]});let t=Zt();gc(t,this[et].matrix),this[et].orientation=DOMPointReadOnly.fromPoint({x:t[0],y:t[1],z:t[2],w:t[3]})}else this[et].matrix=bi(new Float32Array(16)),dr(this[et].matrix,m0(this[et].orientation.x,this[et].orientation.y,this[et].orientation.z,this[et].orientation.w),nn(this[et].position.x,this[et].position.y,this[et].position.z))}_getPoint(e){return e instanceof DOMPointReadOnly?e:DOMPointReadOnly.fromPoint(e)}get matrix(){return this[et].matrix}get position(){return this[et].position}get orientation(){return this[et].orientation}get inverse(){if(this[et].inverse===null){let e=bi(new Float32Array(16));hs(e,this[et].matrix),this[et].inverse=new _c(e),this[et].inverse[et].inverse=this}return this[et].inverse}};const pt=Symbol("@@webxr-polyfill/XRSpace");class Ii{constructor(e=null,t=null){this[pt]={specialType:e,inputSource:t,baseMatrix:null,inverseBaseMatrix:null,lastFrameId:-1}}get _specialType(){return this[pt].specialType}get _inputSource(){return this[pt].inputSource}_ensurePoseUpdated(e,t){t!=this[pt].lastFrameId&&(this[pt].lastFrameId=t,this._onPoseUpdate(e))}_onPoseUpdate(e){this[pt].specialType=="viewer"&&(this._baseMatrix=e.getBasePoseMatrix())}set _baseMatrix(e){this[pt].baseMatrix=e,this[pt].inverseBaseMatrix=null}get _baseMatrix(){return this[pt].baseMatrix||this[pt].inverseBaseMatrix&&(this[pt].baseMatrix=new Float32Array(16),hs(this[pt].baseMatrix,this[pt].inverseBaseMatrix)),this[pt].baseMatrix}set _inverseBaseMatrix(e){this[pt].inverseBaseMatrix=e,this[pt].baseMatrix=null}get _inverseBaseMatrix(){return this[pt].inverseBaseMatrix||this[pt].baseMatrix&&(this[pt].inverseBaseMatrix=new Float32Array(16),hs(this[pt].inverseBaseMatrix,this[pt].baseMatrix)),this[pt].inverseBaseMatrix}_getSpaceRelativeTransform(e){if(!this._inverseBaseMatrix||!e._baseMatrix)return null;let t=new Float32Array(16);return Ti(t,this._inverseBaseMatrix,e._baseMatrix),new Ac(t)}}const g0=1.6,Cn=Symbol("@@webxr-polyfill/XRReferenceSpace"),fs=["viewer","local","local-floor","bounded-floor","unbounded"];function v0(n){return n==="bounded-floor"||n==="local-floor"}class fr extends Ii{constructor(e,t=null){if(!fs.includes(e))throw new Error(`XRReferenceSpaceType must be one of ${fs}`);if(super(e),e==="bounded-floor"&&!t)throw new Error("XRReferenceSpace cannot use 'bounded-floor' type if the platform does not provide the floor level");v0(e)&&!t&&(t=bi(new Float32Array(16)),t[13]=g0),this._inverseBaseMatrix=t||bi(new Float32Array(16)),this[Cn]={type:e,transform:t,originOffset:bi(new Float32Array(16))}}_transformBasePoseMatrix(e,t){Ti(e,this._inverseBaseMatrix,t)}_originOffsetMatrix(){return this[Cn].originOffset}_adjustForOriginOffset(e){let t=new Float32Array(16);hs(t,this[Cn].originOffset),Ti(e,t,e)}_getSpaceRelativeTransform(e){let t=super._getSpaceRelativeTransform(e);return this._adjustForOriginOffset(t.matrix),new XRRigidTransform(t.matrix)}getOffsetReferenceSpace(e){let t=new fr(this[Cn].type,this[Cn].transform,this[Cn].bounds);return Ti(t[Cn].originOffset,this[Cn].originOffset,e.matrix),t}}const Dt=Symbol("@@webxr-polyfill/XR"),A0=["inline","immersive-vr","immersive-ar"],_0={inline:{requiredFeatures:["viewer"],optionalFeatures:[]},"immersive-vr":{requiredFeatures:["viewer","local"],optionalFeatures:[]},"immersive-ar":{requiredFeatures:["viewer","local"],optionalFeatures:[]}},x0=`Polyfill Error: Must call navigator.xr.isSessionSupported() with any XRSessionMode
or navigator.xr.requestSession('inline') prior to requesting an immersive
session. This is a limitation specific to the WebXR Polyfill and does not apply
to native implementations of the API.`;class xc extends ao{constructor(e){super(),this[Dt]={device:null,devicePromise:e,immersiveSession:null,inlineSessions:new Set},e.then(t=>{this[Dt].device=t})}async isSessionSupported(e){return this[Dt].device||await this[Dt].devicePromise,e!="inline"?Promise.resolve(this[Dt].device.isSessionSupported(e)):Promise.resolve(!0)}async requestSession(e,t){if(!this[Dt].device){if(e!="inline")throw new Error(x0);await this[Dt].devicePromise}if(!A0.includes(e))throw new TypeError(`The provided value '${e}' is not a valid enum value of type XRSessionMode`);const i=_0[e],r=i.requiredFeatures.concat(t&&t.requiredFeatures?t.requiredFeatures:[]),s=i.optionalFeatures.concat(t&&t.optionalFeatures?t.optionalFeatures:[]),a=new Set;let o=!1;for(let m of r)this[Dt].device.isFeatureSupported(m)?a.add(m):(console.error(`The required feature '${m}' is not supported`),o=!0);if(o)throw new DOMException("Session does not support some required features","NotSupportedError");for(let m of s)this[Dt].device.isFeatureSupported(m)?a.add(m):console.log(`The optional feature '${m}' is not supported`);const u=await this[Dt].device.requestSession(e,a),h=new XRSession(this[Dt].device,e,u);e=="inline"?this[Dt].inlineSessions.add(h):this[Dt].immersiveSession=h;const d=()=>{e=="inline"?this[Dt].inlineSessions.delete(h):this[Dt].immersiveSession=null,h.removeEventListener("end",d)};return h.addEventListener("end",d),h}}const Sc=typeof global<"u"?global:typeof self<"u"?self:typeof window<"u"?window:{};let ka;if("performance"in Sc)ka=()=>performance.now();else{let n=Date.now();ka=()=>Date.now()-n}const yc=ka,$s=Symbol("@@webxr-polyfill/XRPose");let Mc=class{constructor(e,t){this[$s]={transform:e,emulatedPosition:t}}get transform(){return this[$s].transform}get emulatedPosition(){return this[$s].emulatedPosition}};const _l=Symbol("@@webxr-polyfill/XRViewerPose");class Ec extends Mc{constructor(e,t,i=!1){super(e,i),this[_l]={views:t}}get views(){return this[_l].views}}const rr=Symbol("@@webxr-polyfill/XRViewport");class wc{constructor(e){this[rr]={target:e}}get x(){return this[rr].target.x}get y(){return this[rr].target.y}get width(){return this[rr].target.width}get height(){return this[rr].target.height}}const xl=["left","right","none"],rn=Symbol("@@webxr-polyfill/XRView");class bc{constructor(e,t,i,r,s){if(!xl.includes(i))throw new Error(`XREye must be one of: ${xl}`);const a=Object.create(null),o=new wc(a);this[rn]={device:e,eye:i,viewport:o,temp:a,sessionId:r,transform:t,viewIndex:s}}get eye(){return this[rn].eye}get projectionMatrix(){return this[rn].device.getProjectionMatrix(this.eye,this[rn].viewIndex)}get transform(){return this[rn].transform}_getViewport(e){if(this[rn].device.getViewport(this[rn].sessionId,this.eye,e,this[rn].temp,this[rn].viewIndex))return this[rn].viewport}}const _t=Symbol("@@webxr-polyfill/XRFrame"),Sl="XRFrame access outside the callback that produced it is invalid.",S0="getViewerPose can only be called on XRFrame objects passed to XRSession.requestAnimationFrame callbacks.";let y0=0;class Ha{constructor(e,t,i){this[_t]={id:++y0,active:!1,animationFrame:!1,device:e,session:t,sessionId:i}}get session(){return this[_t].session}getViewerPose(e){if(!this[_t].animationFrame)throw new DOMException(S0,"InvalidStateError");if(!this[_t].active)throw new DOMException(Sl,"InvalidStateError");const t=this[_t].device,i=this[_t].session;i[re].viewerSpace._ensurePoseUpdated(t,this[_t].id),e._ensurePoseUpdated(t,this[_t].id);let r=e._getSpaceRelativeTransform(i[re].viewerSpace);const s=[];for(const o of i[re].viewSpaces){o._ensurePoseUpdated(t,this[_t].id);let u=e._getSpaceRelativeTransform(o),h=new bc(t,u,o.eye,this[_t].sessionId,o.viewIndex);s.push(h)}return new Ec(r,s,!1)}getPose(e,t){if(!this[_t].active)throw new DOMException(Sl,"InvalidStateError");const i=this[_t].device;if(e._specialType==="target-ray"||e._specialType==="grip")return i.getInputPose(e._inputSource,t,e._specialType);{e._ensurePoseUpdated(i,this[_t].id),t._ensurePoseUpdated(i,this[_t].id);let r=t._getSpaceRelativeTransform(e);return r?new XRPose(r,!1):null}}}const sr=Symbol("@@webxr-polyfill/XRRenderState"),M0=Object.freeze({depthNear:.1,depthFar:1e3,inlineVerticalFieldOfView:null,baseLayer:null});class Wa{constructor(e={}){const t=Object.assign({},M0,e);this[sr]={config:t}}get depthNear(){return this[sr].config.depthNear}get depthFar(){return this[sr].config.depthFar}get inlineVerticalFieldOfView(){return this[sr].config.inlineVerticalFieldOfView}get baseLayer(){return this[sr].config.baseLayer}}const Js=Symbol("@@webxr-polyfill/XRInputSourceEvent");class As extends Event{constructor(e,t){super(e,t),this[Js]={frame:t.frame,inputSource:t.inputSource},Object.setPrototypeOf(this,As.prototype)}get frame(){return this[Js].frame}get inputSource(){return this[Js].inputSource}}const yl=Symbol("@@webxr-polyfill/XRSessionEvent");class pr extends Event{constructor(e,t){super(e,t),this[yl]={session:t.session},Object.setPrototypeOf(this,pr.prototype)}get session(){return this[yl].session}}const jr=Symbol("@@webxr-polyfill/XRInputSourcesChangeEvent");class _s extends Event{constructor(e,t){super(e,t),this[jr]={session:t.session,added:t.added,removed:t.removed},Object.setPrototypeOf(this,_s.prototype)}get session(){return this[jr].session}get added(){return this[jr].added}get removed(){return this[jr].removed}}const re=Symbol("@@webxr-polyfill/XRSession");class ea extends Ii{constructor(e){super(e)}get eye(){return this._specialType}_onPoseUpdate(e){this._inverseBaseMatrix=e.getBaseViewMatrix(this._specialType)}}let Tc=class extends ao{constructor(e,t,i){super();let r=t!="inline",s=new Wa({inlineVerticalFieldOfView:r?null:Math.PI*.5});const a=r?[new ea("left"),new ea("right")]:[new ea("none")];Object.freeze(a),this[re]={device:e,mode:t,immersive:r,ended:!1,suspended:!1,frameCallbacks:[],currentFrameCallbacks:null,frameHandle:0,deviceFrameHandle:null,id:i,activeRenderState:s,pendingRenderState:null,viewerSpace:new fr("viewer"),get viewSpaces(){return e.getViewSpaces(t)||a},currentInputSources:[]},this[re].onDeviceFrame=()=>{if(this[re].ended||this[re].suspended||(this[re].deviceFrameHandle=null,this[re].startDeviceFrameLoop(),this[re].pendingRenderState!==null&&(this[re].activeRenderState=new Wa(this[re].pendingRenderState),this[re].pendingRenderState=null,this[re].activeRenderState.baseLayer&&this[re].device.onBaseLayerSet(this[re].id,this[re].activeRenderState.baseLayer)),this[re].activeRenderState.baseLayer===null))return;const o=new Ha(e,this,this[re].id),u=this[re].currentFrameCallbacks=this[re].frameCallbacks;this[re].frameCallbacks=[],o[_t].active=!0,o[_t].animationFrame=!0,this[re].device.onFrameStart(this[re].id,this[re].activeRenderState),this._checkInputSourcesChange();const h=yc();for(let d=0;d<u.length;d++)try{!u[d].cancelled&&typeof u[d].callback=="function"&&u[d].callback(h,o)}catch(m){console.error(m)}this[re].currentFrameCallbacks=null,o[_t].active=!1,this[re].device.onFrameEnd(this[re].id)},this[re].startDeviceFrameLoop=()=>{this[re].deviceFrameHandle===null&&(this[re].deviceFrameHandle=this[re].device.requestAnimationFrame(this[re].onDeviceFrame))},this[re].stopDeviceFrameLoop=()=>{const o=this[re].deviceFrameHandle;o!==null&&(this[re].device.cancelAnimationFrame(o),this[re].deviceFrameHandle=null)},this[re].onPresentationEnd=o=>{if(o!==this[re].id){this[re].suspended=!1,this[re].startDeviceFrameLoop(),this.dispatchEvent("focus",{session:this});return}this[re].ended=!0,this[re].stopDeviceFrameLoop(),e.removeEventListener("@@webxr-polyfill/vr-present-end",this[re].onPresentationEnd),e.removeEventListener("@@webxr-polyfill/vr-present-start",this[re].onPresentationStart),e.removeEventListener("@@webxr-polyfill/input-select-start",this[re].onSelectStart),e.removeEventListener("@@webxr-polyfill/input-select-end",this[re].onSelectEnd),this.dispatchEvent("end",new pr("end",{session:this}))},e.addEventListener("@@webxr-polyfill/vr-present-end",this[re].onPresentationEnd),this[re].onPresentationStart=o=>{o!==this[re].id&&(this[re].suspended=!0,this[re].stopDeviceFrameLoop(),this.dispatchEvent("blur",{session:this}))},e.addEventListener("@@webxr-polyfill/vr-present-start",this[re].onPresentationStart),this[re].onSelectStart=o=>{o.sessionId===this[re].id&&this[re].dispatchInputSourceEvent("selectstart",o.inputSource)},e.addEventListener("@@webxr-polyfill/input-select-start",this[re].onSelectStart),this[re].onSelectEnd=o=>{o.sessionId===this[re].id&&(this[re].dispatchInputSourceEvent("selectend",o.inputSource),this[re].dispatchInputSourceEvent("select",o.inputSource))},e.addEventListener("@@webxr-polyfill/input-select-end",this[re].onSelectEnd),this[re].onSqueezeStart=o=>{o.sessionId===this[re].id&&this[re].dispatchInputSourceEvent("squeezestart",o.inputSource)},e.addEventListener("@@webxr-polyfill/input-squeeze-start",this[re].onSqueezeStart),this[re].onSqueezeEnd=o=>{o.sessionId===this[re].id&&(this[re].dispatchInputSourceEvent("squeezeend",o.inputSource),this[re].dispatchInputSourceEvent("squeeze",o.inputSource))},e.addEventListener("@@webxr-polyfill/input-squeeze-end",this[re].onSqueezeEnd),this[re].dispatchInputSourceEvent=(o,u)=>{const h=new Ha(e,this,this[re].id),d=new As(o,{frame:h,inputSource:u});h[_t].active=!0,this.dispatchEvent(o,d),h[_t].active=!1},this[re].startDeviceFrameLoop(),this.onblur=void 0,this.onfocus=void 0,this.onresetpose=void 0,this.onend=void 0,this.onselect=void 0,this.onselectstart=void 0,this.onselectend=void 0}get renderState(){return this[re].activeRenderState}get environmentBlendMode(){return this[re].device.environmentBlendMode||"opaque"}async requestReferenceSpace(e){if(this[re].ended)return;if(!fs.includes(e))throw new TypeError(`XRReferenceSpaceType must be one of ${fs}`);if(!this[re].device.doesSessionSupportReferenceSpace(this[re].id,e))throw new DOMException(`The ${e} reference space is not supported by this session.`,"NotSupportedError");if(e==="viewer")return this[re].viewerSpace;let t=await this[re].device.requestFrameOfReferenceTransform(e);if(e==="bounded-floor")throw t?this[re].device.requestStageBounds()?new DOMException(`The WebXR polyfill does not support the ${e} reference space yet.`,"NotSupportedError"):new DOMException(`${e} XRReferenceSpace not supported by this device.`,"NotSupportedError"):new DOMException(`${e} XRReferenceSpace not supported by this device.`,"NotSupportedError");return new fr(e,t)}requestAnimationFrame(e){if(this[re].ended)return;const t=++this[re].frameHandle;return this[re].frameCallbacks.push({handle:t,callback:e,cancelled:!1}),t}cancelAnimationFrame(e){let t=this[re].frameCallbacks,i=t.findIndex(r=>r&&r.handle===e);i>-1&&(t[i].cancelled=!0,t.splice(i,1)),t=this[re].currentFrameCallbacks,t&&(i=t.findIndex(r=>r&&r.handle===e),i>-1&&(t[i].cancelled=!0))}get inputSources(){return this[re].device.getInputSources()}async end(){if(!this[re].ended)return this[re].immersive&&(this[re].ended=!0,this[re].device.removeEventListener("@@webxr-polyfill/vr-present-start",this[re].onPresentationStart),this[re].device.removeEventListener("@@webxr-polyfill/vr-present-end",this[re].onPresentationEnd),this[re].device.removeEventListener("@@webxr-polyfill/input-select-start",this[re].onSelectStart),this[re].device.removeEventListener("@@webxr-polyfill/input-select-end",this[re].onSelectEnd),this.dispatchEvent("end",new pr("end",{session:this}))),this[re].stopDeviceFrameLoop(),this[re].device.endSession(this[re].id)}updateRenderState(e){if(this[re].ended){const i="Can't call updateRenderState on an XRSession that has already ended.";throw new Error(i)}if(e.baseLayer&&e.baseLayer._session!==this){const i="Called updateRenderState with a base layer that was created by a different session.";throw new Error(i)}if(e.inlineVerticalFieldOfView!==null&&e.inlineVerticalFieldOfView!==void 0)if(this[re].immersive){const i="inlineVerticalFieldOfView must not be set for an XRRenderState passed to updateRenderState for an immersive session.";throw new Error(i)}else e.inlineVerticalFieldOfView=Math.min(3.13,Math.max(.01,e.inlineVerticalFieldOfView));if(this[re].pendingRenderState===null){const i=this[re].activeRenderState;this[re].pendingRenderState={depthNear:i.depthNear,depthFar:i.depthFar,inlineVerticalFieldOfView:i.inlineVerticalFieldOfView,baseLayer:i.baseLayer}}Object.assign(this[re].pendingRenderState,e)}_checkInputSourcesChange(){const e=[],t=[],i=this.inputSources,r=this[re].currentInputSources;for(const s of i)r.includes(s)||e.push(s);for(const s of r)i.includes(s)||t.push(s);(e.length>0||t.length>0)&&this.dispatchEvent("inputsourceschange",new _s("inputsourceschange",{session:this,added:e,removed:t})),this[re].currentInputSources.length=0;for(const s of i)this[re].currentInputSources.push(s)}};const Pn=Symbol("@@webxr-polyfill/XRInputSource");class Rc{constructor(e){this[Pn]={impl:e,gripSpace:new Ii("grip",this),targetRaySpace:new Ii("target-ray",this)}}get handedness(){return this[Pn].impl.handedness}get targetRayMode(){return this[Pn].impl.targetRayMode}get gripSpace(){let e=this[Pn].impl.targetRayMode;return e==="gaze"||e==="screen"?null:this[Pn].gripSpace}get targetRaySpace(){return this[Pn].targetRaySpace}get profiles(){return this[Pn].impl.profiles}get gamepad(){return this[Pn].impl.gamepad}}const Cc=Symbol("@@webxr-polyfill/polyfilled-xr-compatible"),lo=Symbol("@@webxr-polyfill/xr-compatible"),Xn=Symbol("@@webxr-polyfill/XRWebGLLayer"),E0=Object.freeze({antialias:!0,depth:!0,stencil:!1,alpha:!0,multiview:!1,ignoreDepthValues:!1,framebufferScaleFactor:1});let Pc=class{constructor(e,t,i={}){const r=Object.assign({},E0,i);if(!(e instanceof Tc))throw new Error("session must be a XRSession");if(e.ended)throw new Error("InvalidStateError");if(t[Cc]&&t[lo]!==!0)throw new Error("InvalidStateError");this[Xn]={context:t,config:r,session:e}}get context(){return this[Xn].context}get antialias(){return this[Xn].config.antialias}get ignoreDepthValues(){return!0}get framebuffer(){return null}get framebufferWidth(){return this[Xn].context.drawingBufferWidth}get framebufferHeight(){return this[Xn].context.drawingBufferHeight}get _session(){return this[Xn].session}getViewport(e){return e._getViewport(this)}static getNativeFramebufferScaleFactor(e){if(!e)throw new TypeError("getNativeFramebufferScaleFactor must be passed a session.");return e[re].ended?0:1}};const ta=Symbol("@@webxr-polyfill/XRReferenceSpaceEvent");class co extends Event{constructor(e,t){super(e,t),this[ta]={referenceSpace:t.referenceSpace,transform:t.transform||null},Object.setPrototypeOf(this,co.prototype)}get referenceSpace(){return this[ta].referenceSpace}get transform(){return this[ta].transform}}const cr={XRSystem:xc,XRSession:Tc,XRSessionEvent:pr,XRFrame:Ha,XRView:bc,XRViewport:wc,XRViewerPose:Ec,XRWebGLLayer:Pc,XRSpace:Ii,XRReferenceSpace:fr,XRReferenceSpaceEvent:co,XRInputSource:Rc,XRInputSourceEvent:As,XRInputSourcesChangeEvent:_s,XRRenderState:Wa,XRRigidTransform:Ac,XRPose:Mc},Ml=n=>(n.prototype.makeXRCompatible,n.prototype.makeXRCompatible=function(){return this[lo]=!0,Promise.resolve()},!0),El=n=>{const e=n.prototype.getContext;n.prototype.getContext=function(t,i){const r=e.call(this,t,i);return r&&(r[Cc]=!0,i&&"xrCompatible"in i&&(r[lo]=i.xrCompatible)),r}},w0=n=>!!(n.ImageBitmapRenderingContext&&n.createImageBitmap),b0=n=>{var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(n.navigator.userAgent||n.navigator.vendor||n.opera),e},T0=n=>{n.style.display="block",n.style.position="absolute",n.style.width=n.style.height="1px",n.style.top=n.style.left="0px"};var na=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function R0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Lc={exports:{}};/**
 * @license
 * cardboard-vr-display
 * Copyright (c) 2015-2017 Google
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(n,e){/**
 * @license
 * gl-preserve-state
 * Copyright (c) 2016, Brandon Jones.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *//**
 * @license
 * webvr-polyfill-dpdb
 * Copyright (c) 2015-2017 Google
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * nosleep.js
 * Copyright (c) 2017, Rich Tibbett
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(function(t,i){n.exports=i()})(na,function(){var t=function(l,c){if(!(l instanceof c))throw new TypeError("Cannot call a class as a function")},i=function(){function l(c,g){for(var _=0;_<g.length;_++){var E=g[_];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(c,E.key,E)}}return function(c,g,_){return g&&l(c.prototype,g),_&&l(c,_),c}}(),r=function(){function l(c,g){var _=[],E=!0,P=!1,U=void 0;try{for(var j=c[Symbol.iterator](),Y;!(E=(Y=j.next()).done)&&(_.push(Y.value),!(g&&_.length===g));E=!0);}catch(V){P=!0,U=V}finally{try{!E&&j.return&&j.return()}finally{if(P)throw U}}return _}return function(c,g){if(Array.isArray(c))return c;if(Symbol.iterator in Object(c))return l(c,g);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=.001,a=1,o=function(c,g){return"data:"+c+","+encodeURIComponent(g)},u=function(c,g,_){return c+(g-c)*_},h=function(){var l=/iPad|iPhone|iPod/.test(navigator.platform);return function(){return l}}(),d=function(){var l=navigator.userAgent.indexOf("Version")!==-1&&navigator.userAgent.indexOf("Android")!==-1&&navigator.userAgent.indexOf("Chrome")!==-1;return function(){return l}}(),m=function(){var l=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);return function(){return l}}(),v=function(){var l=navigator.userAgent.indexOf("Firefox")!==-1&&navigator.userAgent.indexOf("Android")!==-1;return function(){return l}}(),A=function(){var l=navigator.userAgent.match(/.*Chrome\/([0-9]+)/),c=l?parseInt(l[1],10):null;return function(){return c}}(),S=function(){var l=!1;return l=h()&&m()&&navigator.userAgent.indexOf("13_4")!==-1,function(){return l}}(),x=function(){var l=!1;if(A()===65){var c=navigator.userAgent.match(/.*Chrome\/([0-9\.]*)/);if(c){var g=c[1].split("."),_=r(g,4);_[0],_[1];var E=_[2],P=_[3];l=parseInt(E,10)===3325&&parseInt(P,10)<148}}return function(){return l}}(),f=function(){var l=navigator.userAgent.indexOf("R7 Build")!==-1;return function(){return l}}(),p=function(){var c=window.orientation==90||window.orientation==-90;return f()?!c:c},T=function(c){return!(isNaN(c)||c<=s||c>a)},M=function(){return Math.max(window.screen.width,window.screen.height)*window.devicePixelRatio},R=function(){return Math.min(window.screen.width,window.screen.height)*window.devicePixelRatio},G=function(c){if(d())return!1;if(c.requestFullscreen)c.requestFullscreen();else if(c.webkitRequestFullscreen)c.webkitRequestFullscreen();else if(c.mozRequestFullScreen)c.mozRequestFullScreen();else if(c.msRequestFullscreen)c.msRequestFullscreen();else return!1;return!0},D=function(){if(document.exitFullscreen)document.exitFullscreen();else if(document.webkitExitFullscreen)document.webkitExitFullscreen();else if(document.mozCancelFullScreen)document.mozCancelFullScreen();else if(document.msExitFullscreen)document.msExitFullscreen();else return!1;return!0},I=function(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement},H=function(c,g,_,E){var P=c.createShader(c.VERTEX_SHADER);c.shaderSource(P,g),c.compileShader(P);var U=c.createShader(c.FRAGMENT_SHADER);c.shaderSource(U,_),c.compileShader(U);var j=c.createProgram();c.attachShader(j,P),c.attachShader(j,U);for(var Y in E)c.bindAttribLocation(j,E[Y],Y);return c.linkProgram(j),c.deleteShader(P),c.deleteShader(U),j},C=function(c,g){for(var _={},E=c.getProgramParameter(g,c.ACTIVE_UNIFORMS),P="",U=0;U<E;U++){var j=c.getActiveUniform(g,U);P=j.name.replace("[0]",""),_[P]=c.getUniformLocation(g,P)}return _},w=function(c,g,_,E,P,U,j){var Y=1/(g-_),V=1/(E-P),K=1/(U-j);return c[0]=-2*Y,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=-2*V,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=2*K,c[11]=0,c[12]=(g+_)*Y,c[13]=(P+E)*V,c[14]=(j+U)*K,c[15]=1,c},L=function(){var c=!1;return function(g){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(g)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(g.substr(0,4)))&&(c=!0)}(navigator.userAgent||navigator.vendor||window.opera),c},k=function(c,g){for(var _ in g)g.hasOwnProperty(_)&&(c[_]=g[_]);return c},N=function(c){if(h()){var g=c.style.width,_=c.style.height;c.style.width=parseInt(g)+1+"px",c.style.height=parseInt(_)+"px",setTimeout(function(){c.style.width=g,c.style.height=_},100)}window.canvas=c},B=function(){var l=Math.PI/180,c=Math.PI*.25;function g(V,K,ne,_e){var ge=Math.tan(K?K.upDegrees*l:c),le=Math.tan(K?K.downDegrees*l:c),Le=Math.tan(K?K.leftDegrees*l:c),xe=Math.tan(K?K.rightDegrees*l:c),Ce=2/(Le+xe),Ze=2/(ge+le);return V[0]=Ce,V[1]=0,V[2]=0,V[3]=0,V[4]=0,V[5]=Ze,V[6]=0,V[7]=0,V[8]=-((Le-xe)*Ce*.5),V[9]=(ge-le)*Ze*.5,V[10]=_e/(ne-_e),V[11]=-1,V[12]=0,V[13]=0,V[14]=_e*ne/(ne-_e),V[15]=0,V}function _(V,K,ne){var _e=K[0],ge=K[1],le=K[2],Le=K[3],xe=_e+_e,Ce=ge+ge,Ze=le+le,Ke=_e*xe,ft=_e*Ce,Ge=_e*Ze,ct=ge*Ce,Et=ge*Ze,lt=le*Ze,wt=Le*xe,Lt=Le*Ce,Yt=Le*Ze;return V[0]=1-(ct+lt),V[1]=ft+Yt,V[2]=Ge-Lt,V[3]=0,V[4]=ft-Yt,V[5]=1-(Ke+lt),V[6]=Et+wt,V[7]=0,V[8]=Ge+Lt,V[9]=Et-wt,V[10]=1-(Ke+ct),V[11]=0,V[12]=ne[0],V[13]=ne[1],V[14]=ne[2],V[15]=1,V}function E(V,K,ne){var _e=ne[0],ge=ne[1],le=ne[2],Le,xe,Ce,Ze,Ke,ft,Ge,ct,Et,lt,wt,Lt;return K===V?(V[12]=K[0]*_e+K[4]*ge+K[8]*le+K[12],V[13]=K[1]*_e+K[5]*ge+K[9]*le+K[13],V[14]=K[2]*_e+K[6]*ge+K[10]*le+K[14],V[15]=K[3]*_e+K[7]*ge+K[11]*le+K[15]):(Le=K[0],xe=K[1],Ce=K[2],Ze=K[3],Ke=K[4],ft=K[5],Ge=K[6],ct=K[7],Et=K[8],lt=K[9],wt=K[10],Lt=K[11],V[0]=Le,V[1]=xe,V[2]=Ce,V[3]=Ze,V[4]=Ke,V[5]=ft,V[6]=Ge,V[7]=ct,V[8]=Et,V[9]=lt,V[10]=wt,V[11]=Lt,V[12]=Le*_e+Ke*ge+Et*le+K[12],V[13]=xe*_e+ft*ge+lt*le+K[13],V[14]=Ce*_e+Ge*ge+wt*le+K[14],V[15]=Ze*_e+ct*ge+Lt*le+K[15]),V}function P(V,K){var ne=K[0],_e=K[1],ge=K[2],le=K[3],Le=K[4],xe=K[5],Ce=K[6],Ze=K[7],Ke=K[8],ft=K[9],Ge=K[10],ct=K[11],Et=K[12],lt=K[13],wt=K[14],Lt=K[15],Yt=ne*xe-_e*Le,Gi=ne*Ce-ge*Le,zi=ne*Ze-le*Le,Vi=_e*Ce-ge*xe,ki=_e*Ze-le*xe,Hi=ge*Ze-le*Ce,Wi=Ke*lt-ft*Et,Xi=Ke*wt-Ge*Et,qi=Ke*Lt-ct*Et,Yi=ft*wt-Ge*lt,Qi=ft*Lt-ct*lt,Ki=Ge*Lt-ct*wt,At=Yt*Ki-Gi*Qi+zi*Yi+Vi*qi-ki*Xi+Hi*Wi;return At?(At=1/At,V[0]=(xe*Ki-Ce*Qi+Ze*Yi)*At,V[1]=(ge*Qi-_e*Ki-le*Yi)*At,V[2]=(lt*Hi-wt*ki+Lt*Vi)*At,V[3]=(Ge*ki-ft*Hi-ct*Vi)*At,V[4]=(Ce*qi-Le*Ki-Ze*Xi)*At,V[5]=(ne*Ki-ge*qi+le*Xi)*At,V[6]=(wt*zi-Et*Hi-Lt*Gi)*At,V[7]=(Ke*Hi-Ge*zi+ct*Gi)*At,V[8]=(Le*Qi-xe*qi+Ze*Wi)*At,V[9]=(_e*qi-ne*Qi-le*Wi)*At,V[10]=(Et*ki-lt*zi+Lt*Yt)*At,V[11]=(ft*zi-Ke*ki-ct*Yt)*At,V[12]=(xe*Xi-Le*Yi-Ce*Wi)*At,V[13]=(ne*Yi-_e*Xi+ge*Wi)*At,V[14]=(lt*Gi-Et*Vi-wt*Yt)*At,V[15]=(Ke*Vi-ft*Gi+Ge*Yt)*At,V):null}var U=new Float32Array([0,0,0,1]),j=new Float32Array([0,0,0]);function Y(V,K,ne,_e,ge,le){g(V,_e||null,le.depthNear,le.depthFar);var Le=ne.orientation||U,xe=ne.position||j;_(K,Le,xe),ge&&E(K,K,ge),P(K,K)}return function(V,K,ne){return!V||!K?!1:(V.pose=K,V.timestamp=K.timestamp,Y(V.leftProjectionMatrix,V.leftViewMatrix,K,ne._getFieldOfView("left"),ne._getEyeOffset("left"),ne),Y(V.rightProjectionMatrix,V.rightViewMatrix,K,ne._getFieldOfView("right"),ne._getEyeOffset("right"),ne),!0)}}(),J=function(){var c=window.self!==window.top,g=Q(document.referrer),_=Q(window.location.href);return c&&g!==_},Q=function(c){var g,_=c.indexOf("://");_!==-1?g=_+3:g=0;var E=c.indexOf("/",g);return E===-1&&(E=c.length),c.substring(0,E)},ee=function(c){if(c.w>1)return console.warn("getQuaternionAngle: w > 1"),0;var g=2*Math.acos(c.w);return g},Z=function(){var l={};return function(c,g){l[c]===void 0&&(console.warn("webvr-polyfill: "+g),l[c]=!0)}}(),pe=function(c,g){var _=g?"Please use "+g+" instead.":"";Z(c,c+" has been deprecated. This may not work on native WebVR displays. "+_)};function Ae(l,c,g){if(!c){g(l);return}for(var _=[],E=null,P=0;P<c.length;++P){var U=c[P];switch(U){case l.TEXTURE_BINDING_2D:case l.TEXTURE_BINDING_CUBE_MAP:var j=c[++P];if(j<l.TEXTURE0||j>l.TEXTURE31){console.error("TEXTURE_BINDING_2D or TEXTURE_BINDING_CUBE_MAP must be followed by a valid texture unit"),_.push(null,null);break}E||(E=l.getParameter(l.ACTIVE_TEXTURE)),l.activeTexture(j),_.push(l.getParameter(U),null);break;case l.ACTIVE_TEXTURE:E=l.getParameter(l.ACTIVE_TEXTURE),_.push(null);break;default:_.push(l.getParameter(U));break}}g(l);for(var P=0;P<c.length;++P){var U=c[P],Y=_[P];switch(U){case l.ACTIVE_TEXTURE:break;case l.ARRAY_BUFFER_BINDING:l.bindBuffer(l.ARRAY_BUFFER,Y);break;case l.COLOR_CLEAR_VALUE:l.clearColor(Y[0],Y[1],Y[2],Y[3]);break;case l.COLOR_WRITEMASK:l.colorMask(Y[0],Y[1],Y[2],Y[3]);break;case l.CURRENT_PROGRAM:l.useProgram(Y);break;case l.ELEMENT_ARRAY_BUFFER_BINDING:l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,Y);break;case l.FRAMEBUFFER_BINDING:l.bindFramebuffer(l.FRAMEBUFFER,Y);break;case l.RENDERBUFFER_BINDING:l.bindRenderbuffer(l.RENDERBUFFER,Y);break;case l.TEXTURE_BINDING_2D:var j=c[++P];if(j<l.TEXTURE0||j>l.TEXTURE31)break;l.activeTexture(j),l.bindTexture(l.TEXTURE_2D,Y);break;case l.TEXTURE_BINDING_CUBE_MAP:var j=c[++P];if(j<l.TEXTURE0||j>l.TEXTURE31)break;l.activeTexture(j),l.bindTexture(l.TEXTURE_CUBE_MAP,Y);break;case l.VIEWPORT:l.viewport(Y[0],Y[1],Y[2],Y[3]);break;case l.BLEND:case l.CULL_FACE:case l.DEPTH_TEST:case l.SCISSOR_TEST:case l.STENCIL_TEST:Y?l.enable(U):l.disable(U);break;default:console.log("No GL restore behavior for 0x"+U.toString(16));break}E&&l.activeTexture(E)}}var Se=Ae,ze=["attribute vec2 position;","attribute vec3 texCoord;","varying vec2 vTexCoord;","uniform vec4 viewportOffsetScale[2];","void main() {","  vec4 viewport = viewportOffsetScale[int(texCoord.z)];","  vTexCoord = (texCoord.xy * viewport.zw) + viewport.xy;","  gl_Position = vec4( position, 1.0, 1.0 );","}"].join(`
`),Xe=["precision mediump float;","uniform sampler2D diffuse;","varying vec2 vTexCoord;","void main() {","  gl_FragColor = texture2D(diffuse, vTexCoord);","}"].join(`
`);function te(l,c,g,_){this.gl=l,this.cardboardUI=c,this.bufferScale=g,this.dirtySubmitFrameBindings=_,this.ctxAttribs=l.getContextAttributes(),this.instanceExt=l.getExtension("ANGLE_instanced_arrays"),this.meshWidth=20,this.meshHeight=20,this.bufferWidth=l.drawingBufferWidth,this.bufferHeight=l.drawingBufferHeight,this.realBindFramebuffer=l.bindFramebuffer,this.realEnable=l.enable,this.realDisable=l.disable,this.realColorMask=l.colorMask,this.realClearColor=l.clearColor,this.realViewport=l.viewport,h()||(this.realCanvasWidth=Object.getOwnPropertyDescriptor(l.canvas.__proto__,"width"),this.realCanvasHeight=Object.getOwnPropertyDescriptor(l.canvas.__proto__,"height")),this.isPatched=!1,this.lastBoundFramebuffer=null,this.cullFace=!1,this.depthTest=!1,this.blend=!1,this.scissorTest=!1,this.stencilTest=!1,this.viewport=[0,0,0,0],this.colorMask=[!0,!0,!0,!0],this.clearColor=[0,0,0,0],this.attribs={position:0,texCoord:1},this.program=H(l,ze,Xe,this.attribs),this.uniforms=C(l,this.program),this.viewportOffsetScale=new Float32Array(8),this.setTextureBounds(),this.vertexBuffer=l.createBuffer(),this.indexBuffer=l.createBuffer(),this.indexCount=0,this.renderTarget=l.createTexture(),this.framebuffer=l.createFramebuffer(),this.depthStencilBuffer=null,this.depthBuffer=null,this.stencilBuffer=null,this.ctxAttribs.depth&&this.ctxAttribs.stencil?this.depthStencilBuffer=l.createRenderbuffer():this.ctxAttribs.depth?this.depthBuffer=l.createRenderbuffer():this.ctxAttribs.stencil&&(this.stencilBuffer=l.createRenderbuffer()),this.patch(),this.onResize()}te.prototype.destroy=function(){var l=this.gl;this.unpatch(),l.deleteProgram(this.program),l.deleteBuffer(this.vertexBuffer),l.deleteBuffer(this.indexBuffer),l.deleteTexture(this.renderTarget),l.deleteFramebuffer(this.framebuffer),this.depthStencilBuffer&&l.deleteRenderbuffer(this.depthStencilBuffer),this.depthBuffer&&l.deleteRenderbuffer(this.depthBuffer),this.stencilBuffer&&l.deleteRenderbuffer(this.stencilBuffer),this.cardboardUI&&this.cardboardUI.destroy()},te.prototype.onResize=function(){var l=this.gl,c=this,g=[l.RENDERBUFFER_BINDING,l.TEXTURE_BINDING_2D,l.TEXTURE0];Se(l,g,function(_){c.realBindFramebuffer.call(_,_.FRAMEBUFFER,null),c.scissorTest&&c.realDisable.call(_,_.SCISSOR_TEST),c.realColorMask.call(_,!0,!0,!0,!0),c.realViewport.call(_,0,0,_.drawingBufferWidth,_.drawingBufferHeight),c.realClearColor.call(_,0,0,0,1),_.clear(_.COLOR_BUFFER_BIT),c.realBindFramebuffer.call(_,_.FRAMEBUFFER,c.framebuffer),_.bindTexture(_.TEXTURE_2D,c.renderTarget),_.texImage2D(_.TEXTURE_2D,0,c.ctxAttribs.alpha?_.RGBA:_.RGB,c.bufferWidth,c.bufferHeight,0,c.ctxAttribs.alpha?_.RGBA:_.RGB,_.UNSIGNED_BYTE,null),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_MAG_FILTER,_.LINEAR),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_MIN_FILTER,_.LINEAR),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_WRAP_S,_.CLAMP_TO_EDGE),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_WRAP_T,_.CLAMP_TO_EDGE),_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,c.renderTarget,0),c.ctxAttribs.depth&&c.ctxAttribs.stencil?(_.bindRenderbuffer(_.RENDERBUFFER,c.depthStencilBuffer),_.renderbufferStorage(_.RENDERBUFFER,_.DEPTH_STENCIL,c.bufferWidth,c.bufferHeight),_.framebufferRenderbuffer(_.FRAMEBUFFER,_.DEPTH_STENCIL_ATTACHMENT,_.RENDERBUFFER,c.depthStencilBuffer)):c.ctxAttribs.depth?(_.bindRenderbuffer(_.RENDERBUFFER,c.depthBuffer),_.renderbufferStorage(_.RENDERBUFFER,_.DEPTH_COMPONENT16,c.bufferWidth,c.bufferHeight),_.framebufferRenderbuffer(_.FRAMEBUFFER,_.DEPTH_ATTACHMENT,_.RENDERBUFFER,c.depthBuffer)):c.ctxAttribs.stencil&&(_.bindRenderbuffer(_.RENDERBUFFER,c.stencilBuffer),_.renderbufferStorage(_.RENDERBUFFER,_.STENCIL_INDEX8,c.bufferWidth,c.bufferHeight),_.framebufferRenderbuffer(_.FRAMEBUFFER,_.STENCIL_ATTACHMENT,_.RENDERBUFFER,c.stencilBuffer)),!_.checkFramebufferStatus(_.FRAMEBUFFER)===_.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer incomplete!"),c.realBindFramebuffer.call(_,_.FRAMEBUFFER,c.lastBoundFramebuffer),c.scissorTest&&c.realEnable.call(_,_.SCISSOR_TEST),c.realColorMask.apply(_,c.colorMask),c.realViewport.apply(_,c.viewport),c.realClearColor.apply(_,c.clearColor)}),this.cardboardUI&&this.cardboardUI.onResize()},te.prototype.patch=function(){if(!this.isPatched){var l=this,c=this.gl.canvas,g=this.gl;h()||(c.width=M()*this.bufferScale,c.height=R()*this.bufferScale,Object.defineProperty(c,"width",{configurable:!0,enumerable:!0,get:function(){return l.bufferWidth},set:function(E){l.bufferWidth=E,l.realCanvasWidth.set.call(c,E),l.onResize()}}),Object.defineProperty(c,"height",{configurable:!0,enumerable:!0,get:function(){return l.bufferHeight},set:function(E){l.bufferHeight=E,l.realCanvasHeight.set.call(c,E),l.onResize()}})),this.lastBoundFramebuffer=g.getParameter(g.FRAMEBUFFER_BINDING),this.lastBoundFramebuffer==null&&(this.lastBoundFramebuffer=this.framebuffer,this.gl.bindFramebuffer(g.FRAMEBUFFER,this.framebuffer)),this.gl.bindFramebuffer=function(_,E){l.lastBoundFramebuffer=E||l.framebuffer,l.realBindFramebuffer.call(g,_,l.lastBoundFramebuffer)},this.cullFace=g.getParameter(g.CULL_FACE),this.depthTest=g.getParameter(g.DEPTH_TEST),this.blend=g.getParameter(g.BLEND),this.scissorTest=g.getParameter(g.SCISSOR_TEST),this.stencilTest=g.getParameter(g.STENCIL_TEST),g.enable=function(_){switch(_){case g.CULL_FACE:l.cullFace=!0;break;case g.DEPTH_TEST:l.depthTest=!0;break;case g.BLEND:l.blend=!0;break;case g.SCISSOR_TEST:l.scissorTest=!0;break;case g.STENCIL_TEST:l.stencilTest=!0;break}l.realEnable.call(g,_)},g.disable=function(_){switch(_){case g.CULL_FACE:l.cullFace=!1;break;case g.DEPTH_TEST:l.depthTest=!1;break;case g.BLEND:l.blend=!1;break;case g.SCISSOR_TEST:l.scissorTest=!1;break;case g.STENCIL_TEST:l.stencilTest=!1;break}l.realDisable.call(g,_)},this.colorMask=g.getParameter(g.COLOR_WRITEMASK),g.colorMask=function(_,E,P,U){l.colorMask[0]=_,l.colorMask[1]=E,l.colorMask[2]=P,l.colorMask[3]=U,l.realColorMask.call(g,_,E,P,U)},this.clearColor=g.getParameter(g.COLOR_CLEAR_VALUE),g.clearColor=function(_,E,P,U){l.clearColor[0]=_,l.clearColor[1]=E,l.clearColor[2]=P,l.clearColor[3]=U,l.realClearColor.call(g,_,E,P,U)},this.viewport=g.getParameter(g.VIEWPORT),g.viewport=function(_,E,P,U){l.viewport[0]=_,l.viewport[1]=E,l.viewport[2]=P,l.viewport[3]=U,l.realViewport.call(g,_,E,P,U)},this.isPatched=!0,N(c)}},te.prototype.unpatch=function(){if(this.isPatched){var l=this.gl,c=this.gl.canvas;h()||(Object.defineProperty(c,"width",this.realCanvasWidth),Object.defineProperty(c,"height",this.realCanvasHeight)),c.width=this.bufferWidth,c.height=this.bufferHeight,l.bindFramebuffer=this.realBindFramebuffer,l.enable=this.realEnable,l.disable=this.realDisable,l.colorMask=this.realColorMask,l.clearColor=this.realClearColor,l.viewport=this.realViewport,this.lastBoundFramebuffer==this.framebuffer&&l.bindFramebuffer(l.FRAMEBUFFER,null),this.isPatched=!1,setTimeout(function(){N(c)},1)}},te.prototype.setTextureBounds=function(l,c){l||(l=[0,0,.5,1]),c||(c=[.5,0,.5,1]),this.viewportOffsetScale[0]=l[0],this.viewportOffsetScale[1]=l[1],this.viewportOffsetScale[2]=l[2],this.viewportOffsetScale[3]=l[3],this.viewportOffsetScale[4]=c[0],this.viewportOffsetScale[5]=c[1],this.viewportOffsetScale[6]=c[2],this.viewportOffsetScale[7]=c[3]},te.prototype.submitFrame=function(){var l=this.gl,c=this,g=[];if(this.dirtySubmitFrameBindings||g.push(l.CURRENT_PROGRAM,l.ARRAY_BUFFER_BINDING,l.ELEMENT_ARRAY_BUFFER_BINDING,l.TEXTURE_BINDING_2D,l.TEXTURE0),Se(l,g,function(E){c.realBindFramebuffer.call(E,E.FRAMEBUFFER,null);var P=0,U=0;c.instanceExt&&(P=E.getVertexAttrib(c.attribs.position,c.instanceExt.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE),U=E.getVertexAttrib(c.attribs.texCoord,c.instanceExt.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE)),c.cullFace&&c.realDisable.call(E,E.CULL_FACE),c.depthTest&&c.realDisable.call(E,E.DEPTH_TEST),c.blend&&c.realDisable.call(E,E.BLEND),c.scissorTest&&c.realDisable.call(E,E.SCISSOR_TEST),c.stencilTest&&c.realDisable.call(E,E.STENCIL_TEST),c.realColorMask.call(E,!0,!0,!0,!0),c.realViewport.call(E,0,0,E.drawingBufferWidth,E.drawingBufferHeight),(c.ctxAttribs.alpha||h())&&(c.realClearColor.call(E,0,0,0,1),E.clear(E.COLOR_BUFFER_BIT)),E.useProgram(c.program),E.bindBuffer(E.ELEMENT_ARRAY_BUFFER,c.indexBuffer),E.bindBuffer(E.ARRAY_BUFFER,c.vertexBuffer),E.enableVertexAttribArray(c.attribs.position),E.enableVertexAttribArray(c.attribs.texCoord),E.vertexAttribPointer(c.attribs.position,2,E.FLOAT,!1,20,0),E.vertexAttribPointer(c.attribs.texCoord,3,E.FLOAT,!1,20,8),c.instanceExt&&(P!=0&&c.instanceExt.vertexAttribDivisorANGLE(c.attribs.position,0),U!=0&&c.instanceExt.vertexAttribDivisorANGLE(c.attribs.texCoord,0)),E.activeTexture(E.TEXTURE0),E.uniform1i(c.uniforms.diffuse,0),E.bindTexture(E.TEXTURE_2D,c.renderTarget),E.uniform4fv(c.uniforms.viewportOffsetScale,c.viewportOffsetScale),E.drawElements(E.TRIANGLES,c.indexCount,E.UNSIGNED_SHORT,0),c.cardboardUI&&c.cardboardUI.renderNoState(),c.realBindFramebuffer.call(c.gl,E.FRAMEBUFFER,c.framebuffer),c.ctxAttribs.preserveDrawingBuffer||(c.realClearColor.call(E,0,0,0,0),E.clear(E.COLOR_BUFFER_BIT)),c.dirtySubmitFrameBindings||c.realBindFramebuffer.call(E,E.FRAMEBUFFER,c.lastBoundFramebuffer),c.cullFace&&c.realEnable.call(E,E.CULL_FACE),c.depthTest&&c.realEnable.call(E,E.DEPTH_TEST),c.blend&&c.realEnable.call(E,E.BLEND),c.scissorTest&&c.realEnable.call(E,E.SCISSOR_TEST),c.stencilTest&&c.realEnable.call(E,E.STENCIL_TEST),c.realColorMask.apply(E,c.colorMask),c.realViewport.apply(E,c.viewport),(c.ctxAttribs.alpha||!c.ctxAttribs.preserveDrawingBuffer)&&c.realClearColor.apply(E,c.clearColor),c.instanceExt&&(P!=0&&c.instanceExt.vertexAttribDivisorANGLE(c.attribs.position,P),U!=0&&c.instanceExt.vertexAttribDivisorANGLE(c.attribs.texCoord,U))}),h()){var _=l.canvas;(_.width!=c.bufferWidth||_.height!=c.bufferHeight)&&(c.bufferWidth=_.width,c.bufferHeight=_.height,c.onResize())}},te.prototype.updateDeviceInfo=function(l){var c=this.gl,g=this,_=[c.ARRAY_BUFFER_BINDING,c.ELEMENT_ARRAY_BUFFER_BINDING];Se(c,_,function(E){var P=g.computeMeshVertices_(g.meshWidth,g.meshHeight,l);if(E.bindBuffer(E.ARRAY_BUFFER,g.vertexBuffer),E.bufferData(E.ARRAY_BUFFER,P,E.STATIC_DRAW),!g.indexCount){var U=g.computeMeshIndices_(g.meshWidth,g.meshHeight);E.bindBuffer(E.ELEMENT_ARRAY_BUFFER,g.indexBuffer),E.bufferData(E.ELEMENT_ARRAY_BUFFER,U,E.STATIC_DRAW),g.indexCount=U.length}})},te.prototype.computeMeshVertices_=function(l,c,g){for(var _=new Float32Array(2*l*c*5),E=g.getLeftEyeVisibleTanAngles(),P=g.getLeftEyeNoLensTanAngles(),U=g.getLeftEyeVisibleScreenRect(P),j=0,Y=0;Y<2;Y++){for(var V=0;V<c;V++)for(var K=0;K<l;K++,j++){var ne=K/(l-1),_e=V/(c-1),ge=ne,le=_e,Le=u(E[0],E[2],ne),xe=u(E[3],E[1],_e),Ce=Math.sqrt(Le*Le+xe*xe),Ze=g.distortion.distortInverse(Ce),Ke=Le*Ze/Ce,ft=xe*Ze/Ce;ne=(Ke-P[0])/(P[2]-P[0]),_e=(ft-P[3])/(P[1]-P[3]),ne=(U.x+ne*U.width-.5)*2,_e=(U.y+_e*U.height-.5)*2,_[j*5+0]=ne,_[j*5+1]=_e,_[j*5+2]=ge,_[j*5+3]=le,_[j*5+4]=Y}var Ge=E[2]-E[0];E[0]=-(Ge+E[0]),E[2]=Ge-E[2],Ge=P[2]-P[0],P[0]=-(Ge+P[0]),P[2]=Ge-P[2],U.x=1-(U.x+U.width)}return _},te.prototype.computeMeshIndices_=function(l,c){for(var g=new Uint16Array(2*(l-1)*(c-1)*6),_=l/2,E=c/2,P=0,U=0,j=0;j<2;j++)for(var Y=0;Y<c;Y++)for(var V=0;V<l;V++,P++)V==0||Y==0||(V<=_==Y<=E?(g[U++]=P,g[U++]=P-l-1,g[U++]=P-l,g[U++]=P-l-1,g[U++]=P,g[U++]=P-1):(g[U++]=P-1,g[U++]=P-l,g[U++]=P,g[U++]=P-l,g[U++]=P-1,g[U++]=P-l-1));return g},te.prototype.getOwnPropertyDescriptor_=function(l,c){var g=Object.getOwnPropertyDescriptor(l,c);return(g.get===void 0||g.set===void 0)&&(g.configurable=!0,g.enumerable=!0,g.get=function(){return this.getAttribute(c)},g.set=function(_){this.setAttribute(c,_)}),g};var ue=["attribute vec2 position;","uniform mat4 projectionMat;","void main() {","  gl_Position = projectionMat * vec4( position, -1.0, 1.0 );","}"].join(`
`),be=["precision mediump float;","uniform vec4 color;","void main() {","  gl_FragColor = color;","}"].join(`
`),ye=Math.PI/180,De=60,Oe=12,We=20,st=1,O=.75,ht=.3125,Je=4,qe=28,Te=1.5;function it(l){this.gl=l,this.attribs={position:0},this.program=H(l,ue,be,this.attribs),this.uniforms=C(l,this.program),this.vertexBuffer=l.createBuffer(),this.gearOffset=0,this.gearVertexCount=0,this.arrowOffset=0,this.arrowVertexCount=0,this.projMat=new Float32Array(16),this.listener=null,this.onResize()}it.prototype.destroy=function(){var l=this.gl;this.listener&&l.canvas.removeEventListener("click",this.listener,!1),l.deleteProgram(this.program),l.deleteBuffer(this.vertexBuffer)},it.prototype.listen=function(l,c){var g=this.gl.canvas;this.listener=function(_){var E=g.clientWidth/2,P=qe*Te;_.clientX>E-P&&_.clientX<E+P&&_.clientY>g.clientHeight-P?l(_):_.clientX<P&&_.clientY<P&&c(_)},g.addEventListener("click",this.listener,!1)},it.prototype.onResize=function(){var l=this.gl,c=this,g=[l.ARRAY_BUFFER_BINDING];Se(l,g,function(_){var E=[],P=_.drawingBufferWidth/2,U=Math.max(screen.width,screen.height)*window.devicePixelRatio,j=_.drawingBufferWidth/U,Y=j*window.devicePixelRatio,V=Je*Y/2,K=qe*Te*Y,ne=qe*Y/2,_e=(qe*Te-qe)*Y;E.push(P-V,K),E.push(P-V,_.drawingBufferHeight),E.push(P+V,K),E.push(P+V,_.drawingBufferHeight),c.gearOffset=E.length/2;function ge(Ze,Ke){var ft=(90-Ze)*ye,Ge=Math.cos(ft),ct=Math.sin(ft);E.push(ht*Ge*ne+P,ht*ct*ne+ne),E.push(Ke*Ge*ne+P,Ke*ct*ne+ne)}for(var le=0;le<=6;le++){var Le=le*De;ge(Le,st),ge(Le+Oe,st),ge(Le+We,O),ge(Le+(De-We),O),ge(Le+(De-Oe),st)}c.gearVertexCount=E.length/2-c.gearOffset,c.arrowOffset=E.length/2;function xe(Ze,Ke){E.push(_e+Ze,_.drawingBufferHeight-_e-Ke)}var Ce=V/Math.sin(45*ye);xe(0,ne),xe(ne,0),xe(ne+Ce,Ce),xe(Ce,ne+Ce),xe(Ce,ne-Ce),xe(0,ne),xe(ne,ne*2),xe(ne+Ce,ne*2-Ce),xe(Ce,ne-Ce),xe(0,ne),xe(Ce,ne-V),xe(qe*Y,ne-V),xe(Ce,ne+V),xe(qe*Y,ne+V),c.arrowVertexCount=E.length/2-c.arrowOffset,_.bindBuffer(_.ARRAY_BUFFER,c.vertexBuffer),_.bufferData(_.ARRAY_BUFFER,new Float32Array(E),_.STATIC_DRAW)})},it.prototype.render=function(){var l=this.gl,c=this,g=[l.CULL_FACE,l.DEPTH_TEST,l.BLEND,l.SCISSOR_TEST,l.STENCIL_TEST,l.COLOR_WRITEMASK,l.VIEWPORT,l.CURRENT_PROGRAM,l.ARRAY_BUFFER_BINDING];Se(l,g,function(_){_.disable(_.CULL_FACE),_.disable(_.DEPTH_TEST),_.disable(_.BLEND),_.disable(_.SCISSOR_TEST),_.disable(_.STENCIL_TEST),_.colorMask(!0,!0,!0,!0),_.viewport(0,0,_.drawingBufferWidth,_.drawingBufferHeight),c.renderNoState()})},it.prototype.renderNoState=function(){var l=this.gl;l.useProgram(this.program),l.bindBuffer(l.ARRAY_BUFFER,this.vertexBuffer),l.enableVertexAttribArray(this.attribs.position),l.vertexAttribPointer(this.attribs.position,2,l.FLOAT,!1,8,0),l.uniform4f(this.uniforms.color,1,1,1,1),w(this.projMat,0,l.drawingBufferWidth,0,l.drawingBufferHeight,.1,1024),l.uniformMatrix4fv(this.uniforms.projectionMat,!1,this.projMat),l.drawArrays(l.TRIANGLE_STRIP,0,4),l.drawArrays(l.TRIANGLE_STRIP,this.gearOffset,this.gearVertexCount),l.drawArrays(l.TRIANGLE_STRIP,this.arrowOffset,this.arrowVertexCount)};function Fe(l){this.coefficients=l}Fe.prototype.distortInverse=function(l){for(var c=0,g=1,_=l-this.distort(c);Math.abs(g-c)>1e-4;){var E=l-this.distort(g),P=g-E*((g-c)/(E-_));c=g,g=P,_=E}return g},Fe.prototype.distort=function(l){for(var c=l*l,g=0,_=0;_<this.coefficients.length;_++)g=c*(g+this.coefficients[_]);return(g+1)*l};var Pe=Math.PI/180,F=180/Math.PI,y=function(c,g,_){this.x=c||0,this.y=g||0,this.z=_||0};y.prototype={constructor:y,set:function(c,g,_){return this.x=c,this.y=g,this.z=_,this},copy:function(c){return this.x=c.x,this.y=c.y,this.z=c.z,this},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},normalize:function(){var c=this.length();if(c!==0){var g=1/c;this.multiplyScalar(g)}else this.x=0,this.y=0,this.z=0;return this},multiplyScalar:function(c){this.x*=c,this.y*=c,this.z*=c},applyQuaternion:function(c){var g=this.x,_=this.y,E=this.z,P=c.x,U=c.y,j=c.z,Y=c.w,V=Y*g+U*E-j*_,K=Y*_+j*g-P*E,ne=Y*E+P*_-U*g,_e=-P*g-U*_-j*E;return this.x=V*Y+_e*-P+K*-j-ne*-U,this.y=K*Y+_e*-U+ne*-P-V*-j,this.z=ne*Y+_e*-j+V*-U-K*-P,this},dot:function(c){return this.x*c.x+this.y*c.y+this.z*c.z},crossVectors:function(c,g){var _=c.x,E=c.y,P=c.z,U=g.x,j=g.y,Y=g.z;return this.x=E*Y-P*j,this.y=P*U-_*Y,this.z=_*j-E*U,this}};var X=function(c,g,_,E){this.x=c||0,this.y=g||0,this.z=_||0,this.w=E!==void 0?E:1};X.prototype={constructor:X,set:function(c,g,_,E){return this.x=c,this.y=g,this.z=_,this.w=E,this},copy:function(c){return this.x=c.x,this.y=c.y,this.z=c.z,this.w=c.w,this},setFromEulerXYZ:function(c,g,_){var E=Math.cos(c/2),P=Math.cos(g/2),U=Math.cos(_/2),j=Math.sin(c/2),Y=Math.sin(g/2),V=Math.sin(_/2);return this.x=j*P*U+E*Y*V,this.y=E*Y*U-j*P*V,this.z=E*P*V+j*Y*U,this.w=E*P*U-j*Y*V,this},setFromEulerYXZ:function(c,g,_){var E=Math.cos(c/2),P=Math.cos(g/2),U=Math.cos(_/2),j=Math.sin(c/2),Y=Math.sin(g/2),V=Math.sin(_/2);return this.x=j*P*U+E*Y*V,this.y=E*Y*U-j*P*V,this.z=E*P*V-j*Y*U,this.w=E*P*U+j*Y*V,this},setFromAxisAngle:function(c,g){var _=g/2,E=Math.sin(_);return this.x=c.x*E,this.y=c.y*E,this.z=c.z*E,this.w=Math.cos(_),this},multiply:function(c){return this.multiplyQuaternions(this,c)},multiplyQuaternions:function(c,g){var _=c.x,E=c.y,P=c.z,U=c.w,j=g.x,Y=g.y,V=g.z,K=g.w;return this.x=_*K+U*j+E*V-P*Y,this.y=E*K+U*Y+P*j-_*V,this.z=P*K+U*V+_*Y-E*j,this.w=U*K-_*j-E*Y-P*V,this},inverse:function(){return this.x*=-1,this.y*=-1,this.z*=-1,this.normalize(),this},normalize:function(){var c=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return c===0?(this.x=0,this.y=0,this.z=0,this.w=1):(c=1/c,this.x=this.x*c,this.y=this.y*c,this.z=this.z*c,this.w=this.w*c),this},slerp:function(c,g){if(g===0)return this;if(g===1)return this.copy(c);var _=this.x,E=this.y,P=this.z,U=this.w,j=U*c.w+_*c.x+E*c.y+P*c.z;if(j<0?(this.w=-c.w,this.x=-c.x,this.y=-c.y,this.z=-c.z,j=-j):this.copy(c),j>=1)return this.w=U,this.x=_,this.y=E,this.z=P,this;var Y=Math.acos(j),V=Math.sqrt(1-j*j);if(Math.abs(V)<.001)return this.w=.5*(U+this.w),this.x=.5*(_+this.x),this.y=.5*(E+this.y),this.z=.5*(P+this.z),this;var K=Math.sin((1-g)*Y)/V,ne=Math.sin(g*Y)/V;return this.w=U*K+this.w*ne,this.x=_*K+this.x*ne,this.y=E*K+this.y*ne,this.z=P*K+this.z*ne,this},setFromUnitVectors:function(){var l,c,g=1e-6;return function(_,E){return l===void 0&&(l=new y),c=_.dot(E)+1,c<g?(c=0,Math.abs(_.x)>Math.abs(_.z)?l.set(-_.y,_.x,0):l.set(0,-_.z,_.y)):l.crossVectors(_,E),this.x=l.x,this.y=l.y,this.z=l.z,this.w=c,this.normalize(),this}}()};function se(l){this.width=l.width||M(),this.height=l.height||R(),this.widthMeters=l.widthMeters,this.heightMeters=l.heightMeters,this.bevelMeters=l.bevelMeters}var ce=new se({widthMeters:.11,heightMeters:.062,bevelMeters:.004}),oe=new se({widthMeters:.1038,heightMeters:.0584,bevelMeters:.004}),Re={CardboardV1:new Me({id:"CardboardV1",label:"Cardboard I/O 2014",fov:40,interLensDistance:.06,baselineLensDistance:.035,screenLensDistance:.042,distortionCoefficients:[.441,.156],inverseCoefficients:[-.4410035,.42756155,-.4804439,.5460139,-.58821183,.5733938,-.48303202,.33299083,-.17573841,.0651772,-.01488963,.001559834]}),CardboardV2:new Me({id:"CardboardV2",label:"Cardboard I/O 2015",fov:60,interLensDistance:.064,baselineLensDistance:.035,screenLensDistance:.039,distortionCoefficients:[.34,.55],inverseCoefficients:[-.33836704,-.18162185,.862655,-1.2462051,1.0560602,-.58208317,.21609078,-.05444823,.009177956,-.0009904169,6183535e-11,-16981803e-13]})};function he(l,c){this.viewer=Re.CardboardV2,this.updateDeviceParams(l),this.distortion=new Fe(this.viewer.distortionCoefficients);for(var g=0;g<c.length;g++){var _=c[g];Re[_.id]=new Me(_)}}he.prototype.updateDeviceParams=function(l){this.device=this.determineDevice_(l)||this.device},he.prototype.getDevice=function(){return this.device},he.prototype.setViewer=function(l){this.viewer=l,this.distortion=new Fe(this.viewer.distortionCoefficients)},he.prototype.determineDevice_=function(l){if(!l)return h()?(console.warn("Using fallback iOS device measurements."),oe):(console.warn("Using fallback Android device measurements."),ce);var c=.0254,g=c/l.xdpi,_=c/l.ydpi,E=M(),P=R();return new se({widthMeters:g*E,heightMeters:_*P,bevelMeters:l.bevelMm*.001})},he.prototype.getDistortedFieldOfViewLeftEye=function(){var l=this.viewer,c=this.device,g=this.distortion,_=l.screenLensDistance,E=(c.widthMeters-l.interLensDistance)/2,P=l.interLensDistance/2,U=l.baselineLensDistance-c.bevelMeters,j=c.heightMeters-U,Y=F*Math.atan(g.distort(E/_)),V=F*Math.atan(g.distort(P/_)),K=F*Math.atan(g.distort(U/_)),ne=F*Math.atan(g.distort(j/_));return{leftDegrees:Math.min(Y,l.fov),rightDegrees:Math.min(V,l.fov),downDegrees:Math.min(K,l.fov),upDegrees:Math.min(ne,l.fov)}},he.prototype.getLeftEyeVisibleTanAngles=function(){var l=this.viewer,c=this.device,g=this.distortion,_=Math.tan(-Pe*l.fov),E=Math.tan(Pe*l.fov),P=Math.tan(Pe*l.fov),U=Math.tan(-Pe*l.fov),j=c.widthMeters/4,Y=c.heightMeters/2,V=l.baselineLensDistance-c.bevelMeters-Y,K=l.interLensDistance/2-j,ne=-V,_e=l.screenLensDistance,ge=g.distort((K-j)/_e),le=g.distort((ne+Y)/_e),Le=g.distort((K+j)/_e),xe=g.distort((ne-Y)/_e),Ce=new Float32Array(4);return Ce[0]=Math.max(_,ge),Ce[1]=Math.min(E,le),Ce[2]=Math.min(P,Le),Ce[3]=Math.max(U,xe),Ce},he.prototype.getLeftEyeNoLensTanAngles=function(){var l=this.viewer,c=this.device,g=this.distortion,_=new Float32Array(4),E=g.distortInverse(Math.tan(-Pe*l.fov)),P=g.distortInverse(Math.tan(Pe*l.fov)),U=g.distortInverse(Math.tan(Pe*l.fov)),j=g.distortInverse(Math.tan(-Pe*l.fov)),Y=c.widthMeters/4,V=c.heightMeters/2,K=l.baselineLensDistance-c.bevelMeters-V,ne=l.interLensDistance/2-Y,_e=-K,ge=l.screenLensDistance,le=(ne-Y)/ge,Le=(_e+V)/ge,xe=(ne+Y)/ge,Ce=(_e-V)/ge;return _[0]=Math.max(E,le),_[1]=Math.min(P,Le),_[2]=Math.min(U,xe),_[3]=Math.max(j,Ce),_},he.prototype.getLeftEyeVisibleScreenRect=function(l){var c=this.viewer,g=this.device,_=c.screenLensDistance,E=(g.widthMeters-c.interLensDistance)/2,P=c.baselineLensDistance-g.bevelMeters,U=(l[0]*_+E)/g.widthMeters,j=(l[1]*_+P)/g.heightMeters,Y=(l[2]*_+E)/g.widthMeters,V=(l[3]*_+P)/g.heightMeters;return{x:U,y:V,width:Y-U,height:j-V}},he.prototype.getFieldOfViewLeftEye=function(l){return l?this.getUndistortedFieldOfViewLeftEye():this.getDistortedFieldOfViewLeftEye()},he.prototype.getFieldOfViewRightEye=function(l){var c=this.getFieldOfViewLeftEye(l);return{leftDegrees:c.rightDegrees,rightDegrees:c.leftDegrees,upDegrees:c.upDegrees,downDegrees:c.downDegrees}},he.prototype.getUndistortedFieldOfViewLeftEye=function(){var l=this.getUndistortedParams_();return{leftDegrees:F*Math.atan(l.outerDist),rightDegrees:F*Math.atan(l.innerDist),downDegrees:F*Math.atan(l.bottomDist),upDegrees:F*Math.atan(l.topDist)}},he.prototype.getUndistortedViewportLeftEye=function(){var l=this.getUndistortedParams_(),c=this.viewer,g=this.device,_=c.screenLensDistance,E=g.widthMeters/_,P=g.heightMeters/_,U=g.width/E,j=g.height/P,Y=Math.round((l.eyePosX-l.outerDist)*U),V=Math.round((l.eyePosY-l.bottomDist)*j);return{x:Y,y:V,width:Math.round((l.eyePosX+l.innerDist)*U)-Y,height:Math.round((l.eyePosY+l.topDist)*j)-V}},he.prototype.getUndistortedParams_=function(){var l=this.viewer,c=this.device,g=this.distortion,_=l.screenLensDistance,E=l.interLensDistance/2/_,P=c.widthMeters/_,U=c.heightMeters/_,j=P/2-E,Y=(l.baselineLensDistance-c.bevelMeters)/_,V=l.fov,K=g.distortInverse(Math.tan(Pe*V)),ne=Math.min(j,K),_e=Math.min(E,K),ge=Math.min(Y,K),le=Math.min(U-Y,K);return{outerDist:ne,innerDist:_e,topDist:le,bottomDist:ge,eyePosX:j,eyePosY:Y}};function Me(l){this.id=l.id,this.label=l.label,this.fov=l.fov,this.interLensDistance=l.interLensDistance,this.baselineLensDistance=l.baselineLensDistance,this.screenLensDistance=l.screenLensDistance,this.distortionCoefficients=l.distortionCoefficients,this.inverseCoefficients=l.inverseCoefficients}he.Viewers=Re;var Ve=1,de="2019-11-09T17:36:14Z",Ee=[{type:"android",rules:[{mdmh:"asus/*/Nexus 7/*"},{ua:"Nexus 7"}],dpi:[320.8,323],bw:3,ac:500},{type:"android",rules:[{mdmh:"asus/*/ASUS_X00PD/*"},{ua:"ASUS_X00PD"}],dpi:245,bw:3,ac:500},{type:"android",rules:[{mdmh:"asus/*/ASUS_X008D/*"},{ua:"ASUS_X008D"}],dpi:282,bw:3,ac:500},{type:"android",rules:[{mdmh:"asus/*/ASUS_Z00AD/*"},{ua:"ASUS_Z00AD"}],dpi:[403,404.6],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Google/*/Pixel 2 XL/*"},{ua:"Pixel 2 XL"}],dpi:537.9,bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Google/*/Pixel 3 XL/*"},{ua:"Pixel 3 XL"}],dpi:[558.5,553.8],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Google/*/Pixel XL/*"},{ua:"Pixel XL"}],dpi:[537.9,533],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Google/*/Pixel 3/*"},{ua:"Pixel 3"}],dpi:442.4,bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Google/*/Pixel 2/*"},{ua:"Pixel 2"}],dpi:441,bw:3,ac:500},{type:"android",rules:[{mdmh:"Google/*/Pixel/*"},{ua:"Pixel"}],dpi:[432.6,436.7],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"HTC/*/HTC6435LVW/*"},{ua:"HTC6435LVW"}],dpi:[449.7,443.3],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"HTC/*/HTC One XL/*"},{ua:"HTC One XL"}],dpi:[315.3,314.6],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"htc/*/Nexus 9/*"},{ua:"Nexus 9"}],dpi:289,bw:3,ac:500},{type:"android",rules:[{mdmh:"HTC/*/HTC One M9/*"},{ua:"HTC One M9"}],dpi:[442.5,443.3],bw:3,ac:500},{type:"android",rules:[{mdmh:"HTC/*/HTC One_M8/*"},{ua:"HTC One_M8"}],dpi:[449.7,447.4],bw:3,ac:500},{type:"android",rules:[{mdmh:"HTC/*/HTC One/*"},{ua:"HTC One"}],dpi:472.8,bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Huawei/*/Nexus 6P/*"},{ua:"Nexus 6P"}],dpi:[515.1,518],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Huawei/*/BLN-L24/*"},{ua:"HONORBLN-L24"}],dpi:480,bw:4,ac:500},{type:"android",rules:[{mdmh:"Huawei/*/BKL-L09/*"},{ua:"BKL-L09"}],dpi:403,bw:3.47,ac:500},{type:"android",rules:[{mdmh:"LENOVO/*/Lenovo PB2-690Y/*"},{ua:"Lenovo PB2-690Y"}],dpi:[457.2,454.713],bw:3,ac:500},{type:"android",rules:[{mdmh:"LGE/*/Nexus 5X/*"},{ua:"Nexus 5X"}],dpi:[422,419.9],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"LGE/*/LGMS345/*"},{ua:"LGMS345"}],dpi:[221.7,219.1],bw:3,ac:500},{type:"android",rules:[{mdmh:"LGE/*/LG-D800/*"},{ua:"LG-D800"}],dpi:[422,424.1],bw:3,ac:500},{type:"android",rules:[{mdmh:"LGE/*/LG-D850/*"},{ua:"LG-D850"}],dpi:[537.9,541.9],bw:3,ac:500},{type:"android",rules:[{mdmh:"LGE/*/VS985 4G/*"},{ua:"VS985 4G"}],dpi:[537.9,535.6],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"LGE/*/Nexus 5/*"},{ua:"Nexus 5 B"}],dpi:[442.4,444.8],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"LGE/*/Nexus 4/*"},{ua:"Nexus 4"}],dpi:[319.8,318.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"LGE/*/LG-P769/*"},{ua:"LG-P769"}],dpi:[240.6,247.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"LGE/*/LGMS323/*"},{ua:"LGMS323"}],dpi:[206.6,204.6],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"LGE/*/LGLS996/*"},{ua:"LGLS996"}],dpi:[403.4,401.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Micromax/*/4560MMX/*"},{ua:"4560MMX"}],dpi:[240,219.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Micromax/*/A250/*"},{ua:"Micromax A250"}],dpi:[480,446.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Micromax/*/Micromax AQ4501/*"},{ua:"Micromax AQ4501"}],dpi:240,bw:3,ac:500},{type:"android",rules:[{mdmh:"motorola/*/G5/*"},{ua:"Moto G (5) Plus"}],dpi:[403.4,403],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"motorola/*/DROID RAZR/*"},{ua:"DROID RAZR"}],dpi:[368.1,256.7],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"motorola/*/XT830C/*"},{ua:"XT830C"}],dpi:[254,255.9],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"motorola/*/XT1021/*"},{ua:"XT1021"}],dpi:[254,256.7],bw:3,ac:500},{type:"android",rules:[{mdmh:"motorola/*/XT1023/*"},{ua:"XT1023"}],dpi:[254,256.7],bw:3,ac:500},{type:"android",rules:[{mdmh:"motorola/*/XT1028/*"},{ua:"XT1028"}],dpi:[326.6,327.6],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"motorola/*/XT1034/*"},{ua:"XT1034"}],dpi:[326.6,328.4],bw:3,ac:500},{type:"android",rules:[{mdmh:"motorola/*/XT1053/*"},{ua:"XT1053"}],dpi:[315.3,316.1],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"motorola/*/XT1562/*"},{ua:"XT1562"}],dpi:[403.4,402.7],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"motorola/*/Nexus 6/*"},{ua:"Nexus 6 B"}],dpi:[494.3,489.7],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"motorola/*/XT1063/*"},{ua:"XT1063"}],dpi:[295,296.6],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"motorola/*/XT1064/*"},{ua:"XT1064"}],dpi:[295,295.6],bw:3,ac:500},{type:"android",rules:[{mdmh:"motorola/*/XT1092/*"},{ua:"XT1092"}],dpi:[422,424.1],bw:3,ac:500},{type:"android",rules:[{mdmh:"motorola/*/XT1095/*"},{ua:"XT1095"}],dpi:[422,423.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"motorola/*/G4/*"},{ua:"Moto G (4)"}],dpi:401,bw:4,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/A0001/*"},{ua:"A0001"}],dpi:[403.4,401],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/ONE E1001/*"},{ua:"ONE E1001"}],dpi:[442.4,441.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/ONE E1003/*"},{ua:"ONE E1003"}],dpi:[442.4,441.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/ONE E1005/*"},{ua:"ONE E1005"}],dpi:[442.4,441.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/ONE A2001/*"},{ua:"ONE A2001"}],dpi:[391.9,405.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/ONE A2003/*"},{ua:"ONE A2003"}],dpi:[391.9,405.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/ONE A2005/*"},{ua:"ONE A2005"}],dpi:[391.9,405.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/ONEPLUS A3000/*"},{ua:"ONEPLUS A3000"}],dpi:401,bw:3,ac:500},{type:"android",rules:[{mdmh:"OnePlus/*/ONEPLUS A3003/*"},{ua:"ONEPLUS A3003"}],dpi:401,bw:3,ac:500},{type:"android",rules:[{mdmh:"OnePlus/*/ONEPLUS A3010/*"},{ua:"ONEPLUS A3010"}],dpi:401,bw:3,ac:500},{type:"android",rules:[{mdmh:"OnePlus/*/ONEPLUS A5000/*"},{ua:"ONEPLUS A5000 "}],dpi:[403.411,399.737],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/ONE A5010/*"},{ua:"ONEPLUS A5010"}],dpi:[403,400],bw:2,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/ONEPLUS A6000/*"},{ua:"ONEPLUS A6000"}],dpi:401,bw:3,ac:500},{type:"android",rules:[{mdmh:"OnePlus/*/ONEPLUS A6003/*"},{ua:"ONEPLUS A6003"}],dpi:401,bw:3,ac:500},{type:"android",rules:[{mdmh:"OnePlus/*/ONEPLUS A6010/*"},{ua:"ONEPLUS A6010"}],dpi:401,bw:2,ac:500},{type:"android",rules:[{mdmh:"OnePlus/*/ONEPLUS A6013/*"},{ua:"ONEPLUS A6013"}],dpi:401,bw:2,ac:500},{type:"android",rules:[{mdmh:"OPPO/*/X909/*"},{ua:"X909"}],dpi:[442.4,444.1],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/GT-I9082/*"},{ua:"GT-I9082"}],dpi:[184.7,185.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G360P/*"},{ua:"SM-G360P"}],dpi:[196.7,205.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/Nexus S/*"},{ua:"Nexus S"}],dpi:[234.5,229.8],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/GT-I9300/*"},{ua:"GT-I9300"}],dpi:[304.8,303.9],bw:5,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-T230NU/*"},{ua:"SM-T230NU"}],dpi:216,bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SGH-T399/*"},{ua:"SGH-T399"}],dpi:[217.7,231.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SGH-M919/*"},{ua:"SGH-M919"}],dpi:[440.8,437.7],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-N9005/*"},{ua:"SM-N9005"}],dpi:[386.4,387],bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SAMSUNG-SM-N900A/*"},{ua:"SAMSUNG-SM-N900A"}],dpi:[386.4,387.7],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/GT-I9500/*"},{ua:"GT-I9500"}],dpi:[442.5,443.3],bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/GT-I9505/*"},{ua:"GT-I9505"}],dpi:439.4,bw:4,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G900F/*"},{ua:"SM-G900F"}],dpi:[415.6,431.6],bw:5,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G900M/*"},{ua:"SM-G900M"}],dpi:[415.6,431.6],bw:5,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G800F/*"},{ua:"SM-G800F"}],dpi:326.8,bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G906S/*"},{ua:"SM-G906S"}],dpi:[562.7,572.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/GT-I9300/*"},{ua:"GT-I9300"}],dpi:[306.7,304.8],bw:5,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-T535/*"},{ua:"SM-T535"}],dpi:[142.6,136.4],bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-N920C/*"},{ua:"SM-N920C"}],dpi:[515.1,518.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-N920P/*"},{ua:"SM-N920P"}],dpi:[386.3655,390.144],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-N920W8/*"},{ua:"SM-N920W8"}],dpi:[515.1,518.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/GT-I9300I/*"},{ua:"GT-I9300I"}],dpi:[304.8,305.8],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/GT-I9195/*"},{ua:"GT-I9195"}],dpi:[249.4,256.7],bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SPH-L520/*"},{ua:"SPH-L520"}],dpi:[249.4,255.9],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SAMSUNG-SGH-I717/*"},{ua:"SAMSUNG-SGH-I717"}],dpi:285.8,bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SPH-D710/*"},{ua:"SPH-D710"}],dpi:[217.7,204.2],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/GT-N7100/*"},{ua:"GT-N7100"}],dpi:265.1,bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SCH-I605/*"},{ua:"SCH-I605"}],dpi:265.1,bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/Galaxy Nexus/*"},{ua:"Galaxy Nexus"}],dpi:[315.3,314.2],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-N910H/*"},{ua:"SM-N910H"}],dpi:[515.1,518],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-N910C/*"},{ua:"SM-N910C"}],dpi:[515.2,520.2],bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G130M/*"},{ua:"SM-G130M"}],dpi:[165.9,164.8],bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G928I/*"},{ua:"SM-G928I"}],dpi:[515.1,518.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G920F/*"},{ua:"SM-G920F"}],dpi:580.6,bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G920P/*"},{ua:"SM-G920P"}],dpi:[522.5,577],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G925F/*"},{ua:"SM-G925F"}],dpi:580.6,bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G925V/*"},{ua:"SM-G925V"}],dpi:[522.5,576.6],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G930F/*"},{ua:"SM-G930F"}],dpi:576.6,bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G935F/*"},{ua:"SM-G935F"}],dpi:533,bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G950F/*"},{ua:"SM-G950F"}],dpi:[562.707,565.293],bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G955U/*"},{ua:"SM-G955U"}],dpi:[522.514,525.762],bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G955F/*"},{ua:"SM-G955F"}],dpi:[522.514,525.762],bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G960F/*"},{ua:"SM-G960F"}],dpi:[569.575,571.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G9600/*"},{ua:"SM-G9600"}],dpi:[569.575,571.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G960T/*"},{ua:"SM-G960T"}],dpi:[569.575,571.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G960N/*"},{ua:"SM-G960N"}],dpi:[569.575,571.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G960U/*"},{ua:"SM-G960U"}],dpi:[569.575,571.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G9608/*"},{ua:"SM-G9608"}],dpi:[569.575,571.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G960FD/*"},{ua:"SM-G960FD"}],dpi:[569.575,571.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G960W/*"},{ua:"SM-G960W"}],dpi:[569.575,571.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G965F/*"},{ua:"SM-G965F"}],dpi:529,bw:2,ac:1e3},{type:"android",rules:[{mdmh:"Sony/*/C6903/*"},{ua:"C6903"}],dpi:[442.5,443.3],bw:3,ac:500},{type:"android",rules:[{mdmh:"Sony/*/D6653/*"},{ua:"D6653"}],dpi:[428.6,427.6],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Sony/*/E6653/*"},{ua:"E6653"}],dpi:[428.6,425.7],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Sony/*/E6853/*"},{ua:"E6853"}],dpi:[403.4,401.9],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Sony/*/SGP321/*"},{ua:"SGP321"}],dpi:[224.7,224.1],bw:3,ac:500},{type:"android",rules:[{mdmh:"TCT/*/ALCATEL ONE TOUCH Fierce/*"},{ua:"ALCATEL ONE TOUCH Fierce"}],dpi:[240,247.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"THL/*/thl 5000/*"},{ua:"thl 5000"}],dpi:[480,443.3],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Fly/*/IQ4412/*"},{ua:"IQ4412"}],dpi:307.9,bw:3,ac:1e3},{type:"android",rules:[{mdmh:"ZTE/*/ZTE Blade L2/*"},{ua:"ZTE Blade L2"}],dpi:240,bw:3,ac:500},{type:"android",rules:[{mdmh:"BENEVE/*/VR518/*"},{ua:"VR518"}],dpi:480,bw:3,ac:500},{type:"ios",rules:[{res:[640,960]}],dpi:[325.1,328.4],bw:4,ac:1e3},{type:"ios",rules:[{res:[640,1136]}],dpi:[317.1,320.2],bw:3,ac:1e3},{type:"ios",rules:[{res:[750,1334]}],dpi:326.4,bw:4,ac:1e3},{type:"ios",rules:[{res:[1242,2208]}],dpi:[453.6,458.4],bw:4,ac:1e3},{type:"ios",rules:[{res:[1125,2001]}],dpi:[410.9,415.4],bw:4,ac:1e3},{type:"ios",rules:[{res:[1125,2436]}],dpi:458,bw:4,ac:1e3},{type:"android",rules:[{mdmh:"Huawei/*/EML-L29/*"},{ua:"EML-L29"}],dpi:428,bw:3.45,ac:500},{type:"android",rules:[{mdmh:"Nokia/*/Nokia 7.1/*"},{ua:"Nokia 7.1"}],dpi:[432,431.9],bw:3,ac:500},{type:"ios",rules:[{res:[1242,2688]}],dpi:458,bw:4,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G570M/*"},{ua:"SM-G570M"}],dpi:320,bw:3.684,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G970F/*"},{ua:"SM-G970F"}],dpi:438,bw:2.281,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G973F/*"},{ua:"SM-G973F"}],dpi:550,bw:2.002,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G975F/*"},{ua:"SM-G975F"}],dpi:522,bw:2.054,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G977F/*"},{ua:"SM-G977F"}],dpi:505,bw:2.334,ac:500},{type:"ios",rules:[{res:[828,1792]}],dpi:326,bw:5,ac:500}],Ye={format:Ve,last_updated:de,devices:Ee};function Ie(l,c){if(this.dpdb=Ye,this.recalculateDeviceParams_(),l){this.onDeviceParamsUpdated=c;var g=new XMLHttpRequest,_=this;g.open("GET",l,!0),g.addEventListener("load",function(){_.loading=!1,g.status>=200&&g.status<=299?(_.dpdb=JSON.parse(g.response),_.recalculateDeviceParams_()):console.error("Error loading online DPDB!")}),g.send()}}Ie.prototype.getDeviceParams=function(){return this.deviceParams},Ie.prototype.recalculateDeviceParams_=function(){var l=this.calcDeviceParams_();l?(this.deviceParams=l,this.onDeviceParamsUpdated&&this.onDeviceParamsUpdated(this.deviceParams)):console.error("Failed to recalculate device parameters.")},Ie.prototype.calcDeviceParams_=function(){var l=this.dpdb;if(!l)return console.error("DPDB not available."),null;if(l.format!=1)return console.error("DPDB has unexpected format version."),null;if(!l.devices||!l.devices.length)return console.error("DPDB does not have a devices section."),null;var c=navigator.userAgent||navigator.vendor||window.opera,g=M(),_=R();if(!l.devices)return console.error("DPDB has no devices section."),null;for(var E=0;E<l.devices.length;E++){var P=l.devices[E];if(!P.rules){console.warn("Device["+E+"] has no rules section.");continue}if(P.type!="ios"&&P.type!="android"){console.warn("Device["+E+"] has invalid type.");continue}if(h()==(P.type=="ios")){for(var U=!1,j=0;j<P.rules.length;j++){var Y=P.rules[j];if(this.ruleMatches_(Y,c,g,_)){U=!0;break}}if(U){var V=P.dpi[0]||P.dpi,K=P.dpi[1]||P.dpi;return new we({xdpi:V,ydpi:K,bevelMm:P.bw})}}}return console.warn("No DPDB device match."),null},Ie.prototype.ruleMatches_=function(l,c,g,_){if(!l.ua&&!l.res||(l.ua&&l.ua.substring(0,2)==="SM"&&(l.ua=l.ua.substring(0,7)),l.ua&&c.indexOf(l.ua)<0))return!1;if(l.res){if(!l.res[0]||!l.res[1])return!1;var E=l.res[0],P=l.res[1];if(Math.min(g,_)!=Math.min(E,P)||Math.max(g,_)!=Math.max(E,P))return!1}return!0};function we(l){this.xdpi=l.xdpi,this.ydpi=l.ydpi,this.bevelMm=l.bevelMm}function Ue(l,c){this.set(l,c)}Ue.prototype.set=function(l,c){this.sample=l,this.timestampS=c},Ue.prototype.copy=function(l){this.set(l.sample,l.timestampS)};function Be(l,c){this.kFilter=l,this.isDebug=c,this.currentAccelMeasurement=new Ue,this.currentGyroMeasurement=new Ue,this.previousGyroMeasurement=new Ue,h()?this.filterQ=new X(-1,0,0,1):this.filterQ=new X(1,0,0,1),this.previousFilterQ=new X,this.previousFilterQ.copy(this.filterQ),this.accelQ=new X,this.isOrientationInitialized=!1,this.estimatedGravity=new y,this.measuredGravity=new y,this.gyroIntegralQ=new X}Be.prototype.addAccelMeasurement=function(l,c){this.currentAccelMeasurement.set(l,c)},Be.prototype.addGyroMeasurement=function(l,c){this.currentGyroMeasurement.set(l,c);var g=c-this.previousGyroMeasurement.timestampS;T(g)&&this.run_(),this.previousGyroMeasurement.copy(this.currentGyroMeasurement)},Be.prototype.run_=function(){if(!this.isOrientationInitialized){this.accelQ=this.accelToQuaternion_(this.currentAccelMeasurement.sample),this.previousFilterQ.copy(this.accelQ),this.isOrientationInitialized=!0;return}var l=this.currentGyroMeasurement.timestampS-this.previousGyroMeasurement.timestampS,c=this.gyroToQuaternionDelta_(this.currentGyroMeasurement.sample,l);this.gyroIntegralQ.multiply(c),this.filterQ.copy(this.previousFilterQ),this.filterQ.multiply(c);var g=new X;g.copy(this.filterQ),g.inverse(),this.estimatedGravity.set(0,0,-1),this.estimatedGravity.applyQuaternion(g),this.estimatedGravity.normalize(),this.measuredGravity.copy(this.currentAccelMeasurement.sample),this.measuredGravity.normalize();var _=new X;_.setFromUnitVectors(this.estimatedGravity,this.measuredGravity),_.inverse(),this.isDebug&&console.log("Delta: %d deg, G_est: (%s, %s, %s), G_meas: (%s, %s, %s)",F*ee(_),this.estimatedGravity.x.toFixed(1),this.estimatedGravity.y.toFixed(1),this.estimatedGravity.z.toFixed(1),this.measuredGravity.x.toFixed(1),this.measuredGravity.y.toFixed(1),this.measuredGravity.z.toFixed(1));var E=new X;E.copy(this.filterQ),E.multiply(_),this.filterQ.slerp(E,1-this.kFilter),this.previousFilterQ.copy(this.filterQ)},Be.prototype.getOrientation=function(){return this.filterQ},Be.prototype.accelToQuaternion_=function(l){var c=new y;c.copy(l),c.normalize();var g=new X;return g.setFromUnitVectors(new y(0,0,-1),c),g.inverse(),g},Be.prototype.gyroToQuaternionDelta_=function(l,c){var g=new X,_=new y;return _.copy(l),_.normalize(),g.setFromAxisAngle(_,l.length()*c),g};function at(l,c){this.predictionTimeS=l,this.isDebug=c,this.previousQ=new X,this.previousTimestampS=null,this.deltaQ=new X,this.outQ=new X}at.prototype.getPrediction=function(l,c,g){if(!this.previousTimestampS)return this.previousQ.copy(l),this.previousTimestampS=g,l;var _=new y;_.copy(c),_.normalize();var E=c.length();if(E<Pe*20)return this.isDebug&&console.log("Moving slowly, at %s deg/s: no prediction",(F*E).toFixed(1)),this.outQ.copy(l),this.previousQ.copy(l),this.outQ;var P=E*this.predictionTimeS;return this.deltaQ.setFromAxisAngle(_,P),this.outQ.copy(this.previousQ),this.outQ.multiply(this.deltaQ),this.previousQ.copy(l),this.previousTimestampS=g,this.outQ};function z(l,c,g,_){this.yawOnly=g,this.accelerometer=new y,this.gyroscope=new y,this.filter=new Be(l,_),this.posePredictor=new at(c,_),this.isFirefoxAndroid=v(),this.isIOS=h();var E=A();this.isDeviceMotionInRadians=!this.isIOS&&E&&E<66,this.isWithoutDeviceMotion=x()||S(),this.filterToWorldQ=new X,h()?this.filterToWorldQ.setFromAxisAngle(new y(1,0,0),Math.PI/2):this.filterToWorldQ.setFromAxisAngle(new y(1,0,0),-Math.PI/2),this.inverseWorldToScreenQ=new X,this.worldToScreenQ=new X,this.originalPoseAdjustQ=new X,this.originalPoseAdjustQ.setFromAxisAngle(new y(0,0,1),-window.orientation*Math.PI/180),this.setScreenTransform_(),p()&&this.filterToWorldQ.multiply(this.inverseWorldToScreenQ),this.resetQ=new X,this.orientationOut_=new Float32Array(4),this.start()}z.prototype.getPosition=function(){return null},z.prototype.getOrientation=function(){var l=void 0;if(this.isWithoutDeviceMotion&&this._deviceOrientationQ){this.deviceOrientationFixQ=this.deviceOrientationFixQ||function(){var E=new X().setFromAxisAngle(new y(0,0,-1),0),P=new X;return window.orientation===-90?P.setFromAxisAngle(new y(0,1,0),Math.PI/-2):P.setFromAxisAngle(new y(0,1,0),Math.PI/2),E.multiply(P)}(),this.deviceOrientationFilterToWorldQ=this.deviceOrientationFilterToWorldQ||function(){var E=new X;return E.setFromAxisAngle(new y(1,0,0),-Math.PI/2),E}(),l=this._deviceOrientationQ;var g=new X;return g.copy(l),g.multiply(this.deviceOrientationFilterToWorldQ),g.multiply(this.resetQ),g.multiply(this.worldToScreenQ),g.multiplyQuaternions(this.deviceOrientationFixQ,g),this.yawOnly&&(g.x=0,g.z=0,g.normalize()),this.orientationOut_[0]=g.x,this.orientationOut_[1]=g.y,this.orientationOut_[2]=g.z,this.orientationOut_[3]=g.w,this.orientationOut_}else{var c=this.filter.getOrientation();l=this.posePredictor.getPrediction(c,this.gyroscope,this.previousTimestampS)}var g=new X;return g.copy(this.filterToWorldQ),g.multiply(this.resetQ),g.multiply(l),g.multiply(this.worldToScreenQ),this.yawOnly&&(g.x=0,g.z=0,g.normalize()),this.orientationOut_[0]=g.x,this.orientationOut_[1]=g.y,this.orientationOut_[2]=g.z,this.orientationOut_[3]=g.w,this.orientationOut_},z.prototype.resetPose=function(){this.resetQ.copy(this.filter.getOrientation()),this.resetQ.x=0,this.resetQ.y=0,this.resetQ.z*=-1,this.resetQ.normalize(),p()&&this.resetQ.multiply(this.inverseWorldToScreenQ),this.resetQ.multiply(this.originalPoseAdjustQ)},z.prototype.onDeviceOrientation_=function(l){this._deviceOrientationQ=this._deviceOrientationQ||new X;var c=l.alpha,g=l.beta,_=l.gamma;c=(c||0)*Math.PI/180,g=(g||0)*Math.PI/180,_=(_||0)*Math.PI/180,this._deviceOrientationQ.setFromEulerYXZ(g,c,-_)},z.prototype.onDeviceMotion_=function(l){this.updateDeviceMotion_(l)},z.prototype.updateDeviceMotion_=function(l){var c=l.accelerationIncludingGravity,g=l.rotationRate,_=l.timeStamp/1e3,E=_-this.previousTimestampS;if(E<0){Z("fusion-pose-sensor:invalid:non-monotonic","Invalid timestamps detected: non-monotonic timestamp from devicemotion"),this.previousTimestampS=_;return}else if(E<=s||E>a){Z("fusion-pose-sensor:invalid:outside-threshold","Invalid timestamps detected: Timestamp from devicemotion outside expected range."),this.previousTimestampS=_;return}this.accelerometer.set(-c.x,-c.y,-c.z),g&&(f()?this.gyroscope.set(-g.beta,g.alpha,g.gamma):this.gyroscope.set(g.alpha,g.beta,g.gamma),this.isDeviceMotionInRadians||this.gyroscope.multiplyScalar(Math.PI/180),this.filter.addGyroMeasurement(this.gyroscope,_)),this.filter.addAccelMeasurement(this.accelerometer,_),this.previousTimestampS=_},z.prototype.onOrientationChange_=function(l){this.setScreenTransform_()},z.prototype.onMessage_=function(l){var c=l.data;if(!(!c||!c.type)){var g=c.type.toLowerCase();g==="devicemotion"&&this.updateDeviceMotion_(c.deviceMotionEvent)}},z.prototype.setScreenTransform_=function(){switch(this.worldToScreenQ.set(0,0,0,1),window.orientation){case 0:break;case 90:this.worldToScreenQ.setFromAxisAngle(new y(0,0,1),-Math.PI/2);break;case-90:this.worldToScreenQ.setFromAxisAngle(new y(0,0,1),Math.PI/2);break}this.inverseWorldToScreenQ.copy(this.worldToScreenQ),this.inverseWorldToScreenQ.inverse()},z.prototype.start=function(){this.onDeviceMotionCallback_=this.onDeviceMotion_.bind(this),this.onOrientationChangeCallback_=this.onOrientationChange_.bind(this),this.onMessageCallback_=this.onMessage_.bind(this),this.onDeviceOrientationCallback_=this.onDeviceOrientation_.bind(this),h()&&J()&&window.addEventListener("message",this.onMessageCallback_),window.addEventListener("orientationchange",this.onOrientationChangeCallback_),this.isWithoutDeviceMotion?window.addEventListener("deviceorientation",this.onDeviceOrientationCallback_):window.addEventListener("devicemotion",this.onDeviceMotionCallback_)},z.prototype.stop=function(){window.removeEventListener("devicemotion",this.onDeviceMotionCallback_),window.removeEventListener("deviceorientation",this.onDeviceOrientationCallback_),window.removeEventListener("orientationchange",this.onOrientationChangeCallback_),window.removeEventListener("message",this.onMessageCallback_)};var fe=60,ie=new y(1,0,0),ae=new y(0,0,1),me=new X;me.setFromAxisAngle(ie,-Math.PI/2),me.multiply(new X().setFromAxisAngle(ae,Math.PI/2));var Ne=function(){function l(c){t(this,l),this.config=c,this.sensor=null,this.fusionSensor=null,this._out=new Float32Array(4),this.api=null,this.errors=[],this._sensorQ=new X,this._outQ=new X,this._onSensorRead=this._onSensorRead.bind(this),this._onSensorError=this._onSensorError.bind(this),this.init()}return i(l,[{key:"init",value:function(){var g=null;try{g=new RelativeOrientationSensor({frequency:fe,referenceFrame:"screen"}),g.addEventListener("error",this._onSensorError)}catch(_){this.errors.push(_),_.name==="SecurityError"?(console.error("Cannot construct sensors due to the Feature Policy"),console.warn('Attempting to fall back using "devicemotion"; however this will fail in the future without correct permissions.'),this.useDeviceMotion()):_.name==="ReferenceError"?this.useDeviceMotion():console.error(_)}g&&(this.api="sensor",this.sensor=g,this.sensor.addEventListener("reading",this._onSensorRead),this.sensor.start())}},{key:"useDeviceMotion",value:function(){this.api="devicemotion",this.fusionSensor=new z(this.config.K_FILTER,this.config.PREDICTION_TIME_S,this.config.YAW_ONLY,this.config.DEBUG),this.sensor&&(this.sensor.removeEventListener("reading",this._onSensorRead),this.sensor.removeEventListener("error",this._onSensorError),this.sensor=null)}},{key:"getOrientation",value:function(){if(this.fusionSensor)return this.fusionSensor.getOrientation();if(!this.sensor||!this.sensor.quaternion)return this._out[0]=this._out[1]=this._out[2]=0,this._out[3]=1,this._out;var g=this.sensor.quaternion;this._sensorQ.set(g[0],g[1],g[2],g[3]);var _=this._outQ;return _.copy(me),_.multiply(this._sensorQ),this.config.YAW_ONLY&&(_.x=_.z=0,_.normalize()),this._out[0]=_.x,this._out[1]=_.y,this._out[2]=_.z,this._out[3]=_.w,this._out}},{key:"_onSensorError",value:function(g){this.errors.push(g.error),g.error.name==="NotAllowedError"?console.error("Permission to access sensor was denied"):g.error.name==="NotReadableError"?console.error("Sensor could not be read"):console.error(g.error),this.useDeviceMotion()}},{key:"_onSensorRead",value:function(){}}]),l}(),Qe="<svg width='198' height='240' viewBox='0 0 198 240' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><path d='M149.625 109.527l6.737 3.891v.886c0 .177.013.36.038.549.01.081.02.162.027.242.14 1.415.974 2.998 2.105 3.999l5.72 5.062.081-.09s4.382-2.53 5.235-3.024l25.97 14.993v54.001c0 .771-.386 1.217-.948 1.217-.233 0-.495-.076-.772-.236l-23.967-13.838-.014.024-27.322 15.775-.85-1.323c-4.731-1.529-9.748-2.74-14.951-3.61a.27.27 0 0 0-.007.024l-5.067 16.961-7.891 4.556-.037-.063v27.59c0 .772-.386 1.217-.948 1.217-.232 0-.495-.076-.772-.236l-42.473-24.522c-.95-.549-1.72-1.877-1.72-2.967v-1.035l-.021.047a5.111 5.111 0 0 0-1.816-.399 5.682 5.682 0 0 0-.546.001 13.724 13.724 0 0 1-1.918-.041c-1.655-.153-3.2-.6-4.404-1.296l-46.576-26.89.005.012-10.278-18.75c-1.001-1.827-.241-4.216 1.698-5.336l56.011-32.345a4.194 4.194 0 0 1 2.099-.572c1.326 0 2.572.659 3.227 1.853l.005-.003.227.413-.006.004a9.63 9.63 0 0 0 1.477 2.018l.277.27c1.914 1.85 4.468 2.801 7.113 2.801 1.949 0 3.948-.517 5.775-1.572.013 0 7.319-4.219 7.319-4.219a4.194 4.194 0 0 1 2.099-.572c1.326 0 2.572.658 3.226 1.853l3.25 5.928.022-.018 6.785 3.917-.105-.182 46.881-26.965m0-1.635c-.282 0-.563.073-.815.218l-46.169 26.556-5.41-3.124-3.005-5.481c-.913-1.667-2.699-2.702-4.66-2.703-1.011 0-2.02.274-2.917.792a3825 3825 0 0 1-7.275 4.195l-.044.024a9.937 9.937 0 0 1-4.957 1.353c-2.292 0-4.414-.832-5.976-2.342l-.252-.245a7.992 7.992 0 0 1-1.139-1.534 1.379 1.379 0 0 0-.06-.122l-.227-.414a1.718 1.718 0 0 0-.095-.154c-.938-1.574-2.673-2.545-4.571-2.545-1.011 0-2.02.274-2.917.792L3.125 155.502c-2.699 1.559-3.738 4.94-2.314 7.538l10.278 18.75c.177.323.448.563.761.704l46.426 26.804c1.403.81 3.157 1.332 5.072 1.508a15.661 15.661 0 0 0 2.146.046 4.766 4.766 0 0 1 .396 0c.096.004.19.011.283.022.109 1.593 1.159 3.323 2.529 4.114l42.472 24.522c.524.302 1.058.455 1.59.455 1.497 0 2.583-1.2 2.583-2.852v-26.562l7.111-4.105a1.64 1.64 0 0 0 .749-.948l4.658-15.593c4.414.797 8.692 1.848 12.742 3.128l.533.829a1.634 1.634 0 0 0 2.193.531l26.532-15.317L193 192.433c.523.302 1.058.455 1.59.455 1.497 0 2.583-1.199 2.583-2.852v-54.001c0-.584-.312-1.124-.818-1.416l-25.97-14.993a1.633 1.633 0 0 0-1.636.001c-.606.351-2.993 1.73-4.325 2.498l-4.809-4.255c-.819-.725-1.461-1.933-1.561-2.936a7.776 7.776 0 0 0-.033-.294 2.487 2.487 0 0 1-.023-.336v-.886c0-.584-.312-1.123-.817-1.416l-6.739-3.891a1.633 1.633 0 0 0-.817-.219' fill='#455A64'/><path d='M96.027 132.636l46.576 26.891c1.204.695 1.979 1.587 2.242 2.541l-.01.007-81.374 46.982h-.001c-1.654-.152-3.199-.6-4.403-1.295l-46.576-26.891 83.546-48.235' fill='#FAFAFA'/><path d='M63.461 209.174c-.008 0-.015 0-.022-.002-1.693-.156-3.228-.609-4.441-1.309l-46.576-26.89a.118.118 0 0 1 0-.203l83.546-48.235a.117.117 0 0 1 .117 0l46.576 26.891c1.227.708 2.021 1.612 2.296 2.611a.116.116 0 0 1-.042.124l-.021.016-81.375 46.981a.11.11 0 0 1-.058.016zm-50.747-28.303l46.401 26.79c1.178.68 2.671 1.121 4.32 1.276l81.272-46.922c-.279-.907-1.025-1.73-2.163-2.387l-46.517-26.857-83.313 48.1z' fill='#607D8B'/><path d='M148.327 165.471a5.85 5.85 0 0 1-.546.001c-1.894-.083-3.302-1.038-3.145-2.132a2.693 2.693 0 0 0-.072-1.105l-81.103 46.822c.628.058 1.272.073 1.918.042.182-.009.364-.009.546-.001 1.894.083 3.302 1.038 3.145 2.132l79.257-45.759' fill='#FFF'/><path d='M69.07 211.347a.118.118 0 0 1-.115-.134c.045-.317-.057-.637-.297-.925-.505-.61-1.555-1.022-2.738-1.074a5.966 5.966 0 0 0-.535.001 14.03 14.03 0 0 1-1.935-.041.117.117 0 0 1-.103-.092.116.116 0 0 1 .055-.126l81.104-46.822a.117.117 0 0 1 .171.07c.104.381.129.768.074 1.153-.045.316.057.637.296.925.506.61 1.555 1.021 2.739 1.073.178.008.357.008.535-.001a.117.117 0 0 1 .064.218l-79.256 45.759a.114.114 0 0 1-.059.016zm-3.405-2.372c.089 0 .177.002.265.006 1.266.056 2.353.488 2.908 1.158.227.274.35.575.36.882l78.685-45.429c-.036 0-.072-.001-.107-.003-1.267-.056-2.354-.489-2.909-1.158-.282-.34-.402-.724-.347-1.107a2.604 2.604 0 0 0-.032-.91L63.846 208.97a13.91 13.91 0 0 0 1.528.012c.097-.005.194-.007.291-.007z' fill='#607D8B'/><path d='M2.208 162.134c-1.001-1.827-.241-4.217 1.698-5.337l56.011-32.344c1.939-1.12 4.324-.546 5.326 1.281l.232.41a9.344 9.344 0 0 0 1.47 2.021l.278.27c3.325 3.214 8.583 3.716 12.888 1.23l7.319-4.22c1.94-1.119 4.324-.546 5.325 1.282l3.25 5.928-83.519 48.229-10.278-18.75z' fill='#FAFAFA'/><path d='M12.486 181.001a.112.112 0 0 1-.031-.005.114.114 0 0 1-.071-.056L2.106 162.19c-1.031-1.88-.249-4.345 1.742-5.494l56.01-32.344a4.328 4.328 0 0 1 2.158-.588c1.415 0 2.65.702 3.311 1.882.01.008.018.017.024.028l.227.414a.122.122 0 0 1 .013.038 9.508 9.508 0 0 0 1.439 1.959l.275.266c1.846 1.786 4.344 2.769 7.031 2.769 1.977 0 3.954-.538 5.717-1.557a.148.148 0 0 1 .035-.013l7.284-4.206a4.321 4.321 0 0 1 2.157-.588c1.427 0 2.672.716 3.329 1.914l3.249 5.929a.116.116 0 0 1-.044.157l-83.518 48.229a.116.116 0 0 1-.059.016zm49.53-57.004c-.704 0-1.41.193-2.041.557l-56.01 32.345c-1.882 1.086-2.624 3.409-1.655 5.179l10.221 18.645 83.317-48.112-3.195-5.829c-.615-1.122-1.783-1.792-3.124-1.792a4.08 4.08 0 0 0-2.04.557l-7.317 4.225a.148.148 0 0 1-.035.013 11.7 11.7 0 0 1-5.801 1.569c-2.748 0-5.303-1.007-7.194-2.835l-.278-.27a9.716 9.716 0 0 1-1.497-2.046.096.096 0 0 1-.013-.037l-.191-.347a.11.11 0 0 1-.023-.029c-.615-1.123-1.783-1.793-3.124-1.793z' fill='#607D8B'/><path d='M42.434 155.808c-2.51-.001-4.697-1.258-5.852-3.365-1.811-3.304-.438-7.634 3.059-9.654l12.291-7.098a7.599 7.599 0 0 1 3.789-1.033c2.51 0 4.697 1.258 5.852 3.365 1.811 3.304.439 7.634-3.059 9.654l-12.291 7.098a7.606 7.606 0 0 1-3.789 1.033zm13.287-20.683a7.128 7.128 0 0 0-3.555.971l-12.291 7.098c-3.279 1.893-4.573 5.942-2.883 9.024 1.071 1.955 3.106 3.122 5.442 3.122a7.13 7.13 0 0 0 3.556-.97l12.291-7.098c3.279-1.893 4.572-5.942 2.883-9.024-1.072-1.955-3.106-3.123-5.443-3.123z' fill='#607D8B'/><path d='M149.588 109.407l6.737 3.89v.887c0 .176.013.36.037.549.011.081.02.161.028.242.14 1.415.973 2.998 2.105 3.999l7.396 6.545c.177.156.358.295.541.415 1.579 1.04 2.95.466 3.062-1.282.049-.784.057-1.595.023-2.429l-.003-.16v-1.151l25.987 15.003v54c0 1.09-.77 1.53-1.72.982l-42.473-24.523c-.95-.548-1.72-1.877-1.72-2.966v-34.033' fill='#FAFAFA'/><path d='M194.553 191.25c-.257 0-.54-.085-.831-.253l-42.472-24.521c-.981-.567-1.779-1.943-1.779-3.068v-34.033h.234v34.033c0 1.051.745 2.336 1.661 2.866l42.473 24.521c.424.245.816.288 1.103.122.285-.164.442-.52.442-1.002v-53.933l-25.753-14.868.003 1.106c.034.832.026 1.654-.024 2.439-.054.844-.396 1.464-.963 1.746-.619.309-1.45.173-2.28-.373a5.023 5.023 0 0 1-.553-.426l-7.397-6.544c-1.158-1.026-1.999-2.625-2.143-4.076a9.624 9.624 0 0 0-.027-.238 4.241 4.241 0 0 1-.038-.564v-.82l-6.68-3.856.117-.202 6.738 3.89.058.034v.954c0 .171.012.351.036.533.011.083.021.165.029.246.138 1.395.948 2.935 2.065 3.923l7.397 6.545c.173.153.35.289.527.406.758.499 1.504.63 2.047.359.49-.243.786-.795.834-1.551.05-.778.057-1.591.024-2.417l-.004-.163v-1.355l.175.1 25.987 15.004.059.033v54.068c0 .569-.198.996-.559 1.204a1.002 1.002 0 0 1-.506.131' fill='#607D8B'/><path d='M145.685 163.161l24.115 13.922-25.978 14.998-1.462-.307c-6.534-2.17-13.628-3.728-21.019-4.616-4.365-.524-8.663 1.096-9.598 3.62a2.746 2.746 0 0 0-.011 1.928c1.538 4.267 4.236 8.363 7.995 12.135l.532.845-25.977 14.997-24.115-13.922 75.518-43.6' fill='#FFF'/><path d='M94.282 220.818l-.059-.033-24.29-14.024.175-.101 75.577-43.634.058.033 24.29 14.024-26.191 15.122-.045-.01-1.461-.307c-6.549-2.174-13.613-3.725-21.009-4.614a13.744 13.744 0 0 0-1.638-.097c-3.758 0-7.054 1.531-7.837 3.642a2.62 2.62 0 0 0-.01 1.848c1.535 4.258 4.216 8.326 7.968 12.091l.016.021.526.835.006.01.064.102-.105.061-25.977 14.998-.058.033zm-23.881-14.057l23.881 13.788 24.802-14.32c.546-.315.846-.489 1.017-.575l-.466-.74c-3.771-3.787-6.467-7.881-8.013-12.168a2.851 2.851 0 0 1 .011-2.008c.815-2.199 4.203-3.795 8.056-3.795.557 0 1.117.033 1.666.099 7.412.891 14.491 2.445 21.041 4.621.836.175 1.215.254 1.39.304l25.78-14.884-23.881-13.788-75.284 43.466z' fill='#607D8B'/><path d='M167.23 125.979v50.871l-27.321 15.773-6.461-14.167c-.91-1.996-3.428-1.738-5.624.574a10.238 10.238 0 0 0-2.33 4.018l-6.46 21.628-27.322 15.774v-50.871l75.518-43.6' fill='#FFF'/><path d='M91.712 220.567a.127.127 0 0 1-.059-.016.118.118 0 0 1-.058-.101v-50.871c0-.042.023-.08.058-.101l75.519-43.6a.117.117 0 0 1 .175.101v50.871c0 .041-.023.08-.059.1l-27.321 15.775a.118.118 0 0 1-.094.01.12.12 0 0 1-.071-.063l-6.46-14.168c-.375-.822-1.062-1.275-1.934-1.275-1.089 0-2.364.686-3.5 1.881a10.206 10.206 0 0 0-2.302 3.972l-6.46 21.627a.118.118 0 0 1-.054.068L91.77 220.551a.12.12 0 0 1-.058.016zm.117-50.92v50.601l27.106-15.65 6.447-21.583a10.286 10.286 0 0 1 2.357-4.065c1.18-1.242 2.517-1.954 3.669-1.954.969 0 1.731.501 2.146 1.411l6.407 14.051 27.152-15.676v-50.601l-75.284 43.466z' fill='#607D8B'/><path d='M168.543 126.213v50.87l-27.322 15.774-6.46-14.168c-.91-1.995-3.428-1.738-5.624.574a10.248 10.248 0 0 0-2.33 4.019l-6.461 21.627-27.321 15.774v-50.87l75.518-43.6' fill='#FFF'/><path d='M93.025 220.8a.123.123 0 0 1-.059-.015.12.12 0 0 1-.058-.101v-50.871c0-.042.023-.08.058-.101l75.518-43.6a.112.112 0 0 1 .117 0c.036.02.059.059.059.1v50.871a.116.116 0 0 1-.059.101l-27.321 15.774a.111.111 0 0 1-.094.01.115.115 0 0 1-.071-.062l-6.46-14.168c-.375-.823-1.062-1.275-1.935-1.275-1.088 0-2.363.685-3.499 1.881a10.19 10.19 0 0 0-2.302 3.971l-6.461 21.628a.108.108 0 0 1-.053.067l-27.322 15.775a.12.12 0 0 1-.058.015zm.117-50.919v50.6l27.106-15.649 6.447-21.584a10.293 10.293 0 0 1 2.357-4.065c1.179-1.241 2.516-1.954 3.668-1.954.969 0 1.732.502 2.147 1.412l6.407 14.051 27.152-15.676v-50.601l-75.284 43.466z' fill='#607D8B'/><path d='M169.8 177.083l-27.322 15.774-6.46-14.168c-.91-1.995-3.428-1.738-5.625.574a10.246 10.246 0 0 0-2.329 4.019l-6.461 21.627-27.321 15.774v-50.87l75.518-43.6v50.87z' fill='#FAFAFA'/><path d='M94.282 220.917a.234.234 0 0 1-.234-.233v-50.871c0-.083.045-.161.117-.202l75.518-43.601a.234.234 0 1 1 .35.202v50.871a.233.233 0 0 1-.116.202l-27.322 15.775a.232.232 0 0 1-.329-.106l-6.461-14.168c-.36-.789-.992-1.206-1.828-1.206-1.056 0-2.301.672-3.415 1.844a10.099 10.099 0 0 0-2.275 3.924l-6.46 21.628a.235.235 0 0 1-.107.136l-27.322 15.774a.23.23 0 0 1-.116.031zm.233-50.969v50.331l26.891-15.525 6.434-21.539a10.41 10.41 0 0 1 2.384-4.112c1.201-1.265 2.569-1.991 3.753-1.991 1.018 0 1.818.526 2.253 1.48l6.354 13.934 26.982-15.578v-50.331l-75.051 43.331z' fill='#607D8B'/><path d='M109.894 199.943c-1.774 0-3.241-.725-4.244-2.12a.224.224 0 0 1 .023-.294.233.233 0 0 1 .301-.023c.78.547 1.705.827 2.75.827 1.323 0 2.754-.439 4.256-1.306 5.311-3.067 9.631-10.518 9.631-16.611 0-1.927-.442-3.56-1.278-4.724a.232.232 0 0 1 .323-.327c1.671 1.172 2.591 3.381 2.591 6.219 0 6.242-4.426 13.863-9.865 17.003-1.574.908-3.084 1.356-4.488 1.356zm-2.969-1.542c.813.651 1.82.877 2.968.877h.001c1.321 0 2.753-.327 4.254-1.194 5.311-3.067 9.632-10.463 9.632-16.556 0-1.979-.463-3.599-1.326-4.761.411 1.035.625 2.275.625 3.635 0 6.243-4.426 13.883-9.865 17.023-1.574.909-3.084 1.317-4.49 1.317-.641 0-1.243-.149-1.799-.341z' fill='#607D8B'/><path d='M113.097 197.23c5.384-3.108 9.748-10.636 9.748-16.814 0-2.051-.483-3.692-1.323-4.86-1.784-1.252-4.374-1.194-7.257.47-5.384 3.108-9.748 10.636-9.748 16.814 0 2.051.483 3.692 1.323 4.86 1.784 1.252 4.374 1.194 7.257-.47' fill='#FAFAFA'/><path d='M108.724 198.614c-1.142 0-2.158-.213-3.019-.817-.021-.014-.04.014-.055-.007-.894-1.244-1.367-2.948-1.367-4.973 0-6.242 4.426-13.864 9.865-17.005 1.574-.908 3.084-1.363 4.49-1.363 1.142 0 2.158.309 3.018.913a.23.23 0 0 1 .056.056c.894 1.244 1.367 2.972 1.367 4.997 0 6.243-4.426 13.783-9.865 16.923-1.574.909-3.084 1.276-4.49 1.276zm-2.718-1.109c.774.532 1.688.776 2.718.776 1.323 0 2.754-.413 4.256-1.28 5.311-3.066 9.631-10.505 9.631-16.598 0-1.909-.434-3.523-1.255-4.685-.774-.533-1.688-.799-2.718-.799-1.323 0-2.755.441-4.256 1.308-5.311 3.066-9.631 10.506-9.631 16.599 0 1.909.434 3.517 1.255 4.679z' fill='#607D8B'/><path d='M149.318 114.262l-9.984 8.878 15.893 11.031 5.589-6.112-11.498-13.797' fill='#FAFAFA'/><path d='M169.676 120.84l-9.748 5.627c-3.642 2.103-9.528 2.113-13.147.024-3.62-2.089-3.601-5.488.041-7.591l9.495-5.608-6.729-3.885-81.836 47.071 45.923 26.514 3.081-1.779c.631-.365.869-.898.618-1.39-2.357-4.632-2.593-9.546-.683-14.262 5.638-13.92 24.509-24.815 48.618-28.07 8.169-1.103 16.68-.967 24.704.394.852.145 1.776.008 2.407-.357l3.081-1.778-25.825-14.91' fill='#FAFAFA'/><path d='M113.675 183.459a.47.47 0 0 1-.233-.062l-45.924-26.515a.468.468 0 0 1 .001-.809l81.836-47.071a.467.467 0 0 1 .466 0l6.729 3.885a.467.467 0 0 1-.467.809l-6.496-3.75-80.9 46.533 44.988 25.973 2.848-1.644c.192-.111.62-.409.435-.773-2.416-4.748-2.658-9.814-.7-14.65 2.806-6.927 8.885-13.242 17.582-18.263 8.657-4.998 19.518-8.489 31.407-10.094 8.198-1.107 16.79-.97 24.844.397.739.125 1.561.007 2.095-.301l2.381-1.374-25.125-14.506a.467.467 0 0 1 .467-.809l25.825 14.91a.467.467 0 0 1 0 .809l-3.081 1.779c-.721.417-1.763.575-2.718.413-7.963-1.351-16.457-1.486-24.563-.392-11.77 1.589-22.512 5.039-31.065 9.977-8.514 4.916-14.456 11.073-17.183 17.805-1.854 4.578-1.623 9.376.666 13.875.37.725.055 1.513-.8 2.006l-3.081 1.78a.476.476 0 0 1-.234.062' fill='#455A64'/><path d='M153.316 128.279c-2.413 0-4.821-.528-6.652-1.586-1.818-1.049-2.82-2.461-2.82-3.975 0-1.527 1.016-2.955 2.861-4.02l9.493-5.607a.233.233 0 1 1 .238.402l-9.496 5.609c-1.696.979-2.628 2.263-2.628 3.616 0 1.34.918 2.608 2.585 3.571 3.549 2.049 9.343 2.038 12.914-.024l9.748-5.628a.234.234 0 0 1 .234.405l-9.748 5.628c-1.858 1.072-4.296 1.609-6.729 1.609' fill='#607D8B'/><path d='M113.675 182.992l-45.913-26.508M113.675 183.342a.346.346 0 0 1-.175-.047l-45.913-26.508a.35.35 0 1 1 .35-.607l45.913 26.508a.35.35 0 0 1-.175.654' fill='#455A64'/><path d='M67.762 156.484v54.001c0 1.09.77 2.418 1.72 2.967l42.473 24.521c.95.549 1.72.11 1.72-.98v-54.001' fill='#FAFAFA'/><path d='M112.727 238.561c-.297 0-.62-.095-.947-.285l-42.473-24.521c-1.063-.613-1.895-2.05-1.895-3.27v-54.001a.35.35 0 1 1 .701 0v54.001c0 .96.707 2.18 1.544 2.663l42.473 24.522c.344.198.661.243.87.122.206-.119.325-.411.325-.799v-54.001a.35.35 0 1 1 .7 0v54.001c0 .655-.239 1.154-.675 1.406a1.235 1.235 0 0 1-.623.162' fill='#455A64'/><path d='M112.86 147.512h-.001c-2.318 0-4.499-.522-6.142-1.471-1.705-.984-2.643-2.315-2.643-3.749 0-1.445.952-2.791 2.68-3.788l12.041-6.953c1.668-.962 3.874-1.493 6.212-1.493 2.318 0 4.499.523 6.143 1.472 1.704.984 2.643 2.315 2.643 3.748 0 1.446-.952 2.791-2.68 3.789l-12.042 6.952c-1.668.963-3.874 1.493-6.211 1.493zm12.147-16.753c-2.217 0-4.298.497-5.861 1.399l-12.042 6.952c-1.502.868-2.33 1.998-2.33 3.182 0 1.173.815 2.289 2.293 3.142 1.538.889 3.596 1.378 5.792 1.378h.001c2.216 0 4.298-.497 5.861-1.399l12.041-6.953c1.502-.867 2.33-1.997 2.33-3.182 0-1.172-.814-2.288-2.292-3.142-1.539-.888-3.596-1.377-5.793-1.377z' fill='#607D8B'/><path d='M165.63 123.219l-5.734 3.311c-3.167 1.828-8.286 1.837-11.433.02-3.147-1.817-3.131-4.772.036-6.601l5.734-3.31 11.397 6.58' fill='#FAFAFA'/><path d='M154.233 117.448l9.995 5.771-4.682 2.704c-1.434.827-3.352 1.283-5.399 1.283-2.029 0-3.923-.449-5.333-1.263-1.29-.744-2-1.694-2-2.674 0-.991.723-1.955 2.036-2.713l5.383-3.108m0-.809l-5.734 3.31c-3.167 1.829-3.183 4.784-.036 6.601 1.568.905 3.623 1.357 5.684 1.357 2.077 0 4.159-.46 5.749-1.377l5.734-3.311-11.397-6.58M145.445 179.667c-1.773 0-3.241-.85-4.243-2.245-.067-.092-.057-.275.023-.356.08-.081.207-.12.3-.055.781.548 1.706.812 2.751.811 1.322 0 2.754-.446 4.256-1.313 5.31-3.066 9.631-10.522 9.631-16.615 0-1.927-.442-3.562-1.279-4.726a.235.235 0 0 1 .024-.301.232.232 0 0 1 .3-.027c1.67 1.172 2.59 3.38 2.59 6.219 0 6.242-4.425 13.987-9.865 17.127-1.573.908-3.083 1.481-4.488 1.481zM142.476 178c.814.651 1.82 1.002 2.969 1.002 1.322 0 2.753-.452 4.255-1.32 5.31-3.065 9.631-10.523 9.631-16.617 0-1.98-.463-3.63-1.325-4.793.411 1.035.624 2.26.624 3.62 0 6.242-4.425 13.875-9.865 17.015-1.573.909-3.084 1.376-4.489 1.376a5.49 5.49 0 0 1-1.8-.283z' fill='#607D8B'/><path d='M148.648 176.704c5.384-3.108 9.748-10.636 9.748-16.813 0-2.052-.483-3.693-1.322-4.861-1.785-1.252-4.375-1.194-7.258.471-5.383 3.108-9.748 10.636-9.748 16.813 0 2.051.484 3.692 1.323 4.86 1.785 1.253 4.374 1.195 7.257-.47' fill='#FAFAFA'/><path d='M144.276 178.276c-1.143 0-2.158-.307-3.019-.911a.217.217 0 0 1-.055-.054c-.895-1.244-1.367-2.972-1.367-4.997 0-6.241 4.425-13.875 9.865-17.016 1.573-.908 3.084-1.369 4.489-1.369 1.143 0 2.158.307 3.019.91a.24.24 0 0 1 .055.055c.894 1.244 1.367 2.971 1.367 4.997 0 6.241-4.425 13.875-9.865 17.016-1.573.908-3.084 1.369-4.489 1.369zm-2.718-1.172c.773.533 1.687.901 2.718.901 1.322 0 2.754-.538 4.256-1.405 5.31-3.066 9.631-10.567 9.631-16.661 0-1.908-.434-3.554-1.256-4.716-.774-.532-1.688-.814-2.718-.814-1.322 0-2.754.433-4.256 1.3-5.31 3.066-9.631 10.564-9.631 16.657 0 1.91.434 3.576 1.256 4.738z' fill='#607D8B'/><path d='M150.72 172.361l-.363-.295a24.105 24.105 0 0 0 2.148-3.128 24.05 24.05 0 0 0 1.977-4.375l.443.149a24.54 24.54 0 0 1-2.015 4.46 24.61 24.61 0 0 1-2.19 3.189M115.917 191.514l-.363-.294a24.174 24.174 0 0 0 2.148-3.128 24.038 24.038 0 0 0 1.976-4.375l.443.148a24.48 24.48 0 0 1-2.015 4.461 24.662 24.662 0 0 1-2.189 3.188M114 237.476V182.584 237.476' fill='#607D8B'/><g><path d='M81.822 37.474c.017-.135-.075-.28-.267-.392-.327-.188-.826-.21-1.109-.045l-6.012 3.471c-.131.076-.194.178-.191.285.002.132.002.461.002.578v.043l-.007.128-6.591 3.779c-.001 0-2.077 1.046-2.787 5.192 0 0-.912 6.961-.898 19.745.015 12.57.606 17.07 1.167 21.351.22 1.684 3.001 2.125 3.001 2.125.331.04.698-.027 1.08-.248l75.273-43.551c1.808-1.069 2.667-3.719 3.056-6.284 1.213-7.99 1.675-32.978-.275-39.878-.196-.693-.51-1.083-.868-1.282l-2.086-.79c-.727.028-1.416.467-1.534.535L82.032 37.072l-.21.402' fill='#FFF'/><path d='M144.311 1.701l2.085.79c.358.199.672.589.868 1.282 1.949 6.9 1.487 31.887.275 39.878-.39 2.565-1.249 5.215-3.056 6.284L69.21 93.486a1.78 1.78 0 0 1-.896.258l-.183-.011c0 .001-2.782-.44-3.003-2.124-.56-4.282-1.151-8.781-1.165-21.351-.015-12.784.897-19.745.897-19.745.71-4.146 2.787-5.192 2.787-5.192l6.591-3.779.007-.128v-.043c0-.117 0-.446-.002-.578-.003-.107.059-.21.191-.285l6.012-3.472a.98.98 0 0 1 .481-.11c.218 0 .449.053.627.156.193.112.285.258.268.392l.211-.402 60.744-34.836c.117-.068.806-.507 1.534-.535m0-.997l-.039.001c-.618.023-1.283.244-1.974.656l-.021.012-60.519 34.706a2.358 2.358 0 0 0-.831-.15c-.365 0-.704.084-.98.244l-6.012 3.471c-.442.255-.699.69-.689 1.166l.001.15-6.08 3.487c-.373.199-2.542 1.531-3.29 5.898l-.006.039c-.009.07-.92 7.173-.906 19.875.014 12.62.603 17.116 1.172 21.465l.002.015c.308 2.355 3.475 2.923 3.836 2.98l.034.004c.101.013.204.019.305.019a2.77 2.77 0 0 0 1.396-.392l75.273-43.552c1.811-1.071 2.999-3.423 3.542-6.997 1.186-7.814 1.734-33.096-.301-40.299-.253-.893-.704-1.527-1.343-1.882l-.132-.062-2.085-.789a.973.973 0 0 0-.353-.065' fill='#455A64'/><path d='M128.267 11.565l1.495.434-56.339 32.326' fill='#FFF'/><path d='M74.202 90.545a.5.5 0 0 1-.25-.931l18.437-10.645a.499.499 0 1 1 .499.864L74.451 90.478l-.249.067M75.764 42.654l-.108-.062.046-.171 5.135-2.964.17.045-.045.171-5.135 2.964-.063.017M70.52 90.375V46.421l.063-.036L137.84 7.554v43.954l-.062.036L70.52 90.375zm.25-43.811v43.38l66.821-38.579V7.985L70.77 46.564z' fill='#607D8B'/><path d='M86.986 83.182c-.23.149-.612.384-.849.523l-11.505 6.701c-.237.139-.206.252.068.252h.565c.275 0 .693-.113.93-.252L87.7 83.705c.237-.139.428-.253.425-.256a11.29 11.29 0 0 1-.006-.503c0-.274-.188-.377-.418-.227l-.715.463' fill='#607D8B'/><path d='M75.266 90.782H74.7c-.2 0-.316-.056-.346-.166-.03-.11.043-.217.215-.317l11.505-6.702c.236-.138.615-.371.844-.519l.715-.464a.488.488 0 0 1 .266-.089c.172 0 .345.13.345.421 0 .214.001.363.003.437l.006.004-.004.069c-.003.075-.003.075-.486.356l-11.505 6.702a2.282 2.282 0 0 1-.992.268zm-.6-.25l.034.001h.566c.252 0 .649-.108.866-.234l11.505-6.702c.168-.098.294-.173.361-.214-.004-.084-.004-.218-.004-.437l-.095-.171-.131.049-.714.463c-.232.15-.616.386-.854.525l-11.505 6.702-.029.018z' fill='#607D8B'/><path d='M75.266 89.871H74.7c-.2 0-.316-.056-.346-.166-.03-.11.043-.217.215-.317l11.505-6.702c.258-.151.694-.268.993-.268h.565c.2 0 .316.056.346.166.03.11-.043.217-.215.317l-11.505 6.702a2.282 2.282 0 0 1-.992.268zm-.6-.25l.034.001h.566c.252 0 .649-.107.866-.234l11.505-6.702.03-.018-.035-.001h-.565c-.252 0-.649.108-.867.234l-11.505 6.702-.029.018zM74.37 90.801v-1.247 1.247' fill='#607D8B'/><path d='M68.13 93.901c-.751-.093-1.314-.737-1.439-1.376-.831-4.238-1.151-8.782-1.165-21.352-.015-12.784.897-19.745.897-19.745.711-4.146 2.787-5.192 2.787-5.192l74.859-43.219c.223-.129 2.487-1.584 3.195.923 1.95 6.9 1.488 31.887.275 39.878-.389 2.565-1.248 5.215-3.056 6.283L69.21 93.653c-.382.221-.749.288-1.08.248 0 0-2.781-.441-3.001-2.125-.561-4.281-1.152-8.781-1.167-21.351-.014-12.784.898-19.745.898-19.745.71-4.146 2.787-5.191 2.787-5.191l6.598-3.81.871-.119 6.599-3.83.046-.461L68.13 93.901' fill='#FAFAFA'/><path d='M68.317 94.161l-.215-.013h-.001l-.244-.047c-.719-.156-2.772-.736-2.976-2.292-.568-4.34-1.154-8.813-1.168-21.384-.014-12.654.891-19.707.9-19.777.725-4.231 2.832-5.338 2.922-5.382l6.628-3.827.87-.119 6.446-3.742.034-.334a.248.248 0 0 1 .273-.223.248.248 0 0 1 .223.272l-.059.589-6.752 3.919-.87.118-6.556 3.785c-.031.016-1.99 1.068-2.666 5.018-.007.06-.908 7.086-.894 19.702.014 12.539.597 16.996 1.161 21.305.091.691.689 1.154 1.309 1.452a1.95 1.95 0 0 1-.236-.609c-.781-3.984-1.155-8.202-1.17-21.399-.014-12.653.891-19.707.9-19.777.725-4.231 2.832-5.337 2.922-5.382-.004.001 74.444-42.98 74.846-43.212l.028-.017c.904-.538 1.72-.688 2.36-.433.555.221.949.733 1.172 1.52 2.014 7.128 1.46 32.219.281 39.983-.507 3.341-1.575 5.515-3.175 6.462L69.335 93.869a2.023 2.023 0 0 1-1.018.292zm-.147-.507c.293.036.604-.037.915-.217l75.273-43.551c1.823-1.078 2.602-3.915 2.934-6.106 1.174-7.731 1.731-32.695-.268-39.772-.178-.631-.473-1.032-.876-1.192-.484-.193-1.166-.052-1.921.397l-.034.021-74.858 43.218c-.031.017-1.989 1.069-2.666 5.019-.007.059-.908 7.085-.894 19.702.015 13.155.386 17.351 1.161 21.303.09.461.476.983 1.037 1.139.114.025.185.037.196.039h.001z' fill='#455A64'/><path d='M69.317 68.982c.489-.281.885-.056.885.505 0 .56-.396 1.243-.885 1.525-.488.282-.884.057-.884-.504 0-.56.396-1.243.884-1.526' fill='#FFF'/><path d='M68.92 71.133c-.289 0-.487-.228-.487-.625 0-.56.396-1.243.884-1.526a.812.812 0 0 1 .397-.121c.289 0 .488.229.488.626 0 .56-.396 1.243-.885 1.525a.812.812 0 0 1-.397.121m.794-2.459a.976.976 0 0 0-.49.147c-.548.317-.978 1.058-.978 1.687 0 .486.271.812.674.812a.985.985 0 0 0 .491-.146c.548-.317.978-1.057.978-1.687 0-.486-.272-.813-.675-.813' fill='#8097A2'/><path d='M68.92 70.947c-.271 0-.299-.307-.299-.439 0-.491.361-1.116.79-1.363a.632.632 0 0 1 .303-.096c.272 0 .301.306.301.438 0 .491-.363 1.116-.791 1.364a.629.629 0 0 1-.304.096m.794-2.086a.812.812 0 0 0-.397.121c-.488.283-.884.966-.884 1.526 0 .397.198.625.487.625a.812.812 0 0 0 .397-.121c.489-.282.885-.965.885-1.525 0-.397-.199-.626-.488-.626' fill='#8097A2'/><path d='M69.444 85.35c.264-.152.477-.031.477.272 0 .303-.213.67-.477.822-.263.153-.477.031-.477-.271 0-.302.214-.671.477-.823' fill='#FFF'/><path d='M69.23 86.51c-.156 0-.263-.123-.263-.337 0-.302.214-.671.477-.823a.431.431 0 0 1 .214-.066c.156 0 .263.124.263.338 0 .303-.213.67-.477.822a.431.431 0 0 1-.214.066m.428-1.412c-.1 0-.203.029-.307.09-.32.185-.57.618-.57.985 0 .309.185.524.449.524a.63.63 0 0 0 .308-.09c.32-.185.57-.618.57-.985 0-.309-.185-.524-.45-.524' fill='#8097A2'/><path d='M69.23 86.322l-.076-.149c0-.235.179-.544.384-.661l.12-.041.076.151c0 .234-.179.542-.383.66l-.121.04m.428-1.038a.431.431 0 0 0-.214.066c-.263.152-.477.521-.477.823 0 .214.107.337.263.337a.431.431 0 0 0 .214-.066c.264-.152.477-.519.477-.822 0-.214-.107-.338-.263-.338' fill='#8097A2'/><path d='M139.278 7.769v43.667L72.208 90.16V46.493l67.07-38.724' fill='#455A64'/><path d='M72.083 90.375V46.421l.063-.036 67.257-38.831v43.954l-.062.036-67.258 38.831zm.25-43.811v43.38l66.821-38.579V7.985L72.333 46.564z' fill='#607D8B'/></g><path d='M125.737 88.647l-7.639 3.334V84l-11.459 4.713v8.269L99 100.315l13.369 3.646 13.368-15.314' fill='#455A64'/></g></svg>";function rt(){this.loadIcon_();var l=document.createElement("div"),U=l.style;U.position="fixed",U.top=0,U.right=0,U.bottom=0,U.left=0,U.backgroundColor="gray",U.fontFamily="sans-serif",U.zIndex=1e6;var c=document.createElement("img");c.src=this.icon;var U=c.style;U.marginLeft="25%",U.marginTop="25%",U.width="50%",l.appendChild(c);var g=document.createElement("div"),U=g.style;U.textAlign="center",U.fontSize="16px",U.lineHeight="24px",U.margin="24px 25%",U.width="50%",g.innerHTML="Place your phone into your Cardboard viewer.",l.appendChild(g);var _=document.createElement("div"),U=_.style;U.backgroundColor="#CFD8DC",U.position="fixed",U.bottom=0,U.width="100%",U.height="48px",U.padding="14px 24px",U.boxSizing="border-box",U.color="#656A6B",l.appendChild(_);var E=document.createElement("div");E.style.float="left",E.innerHTML="No Cardboard viewer?";var P=document.createElement("a");P.href="https://www.google.com/get/cardboard/get-cardboard/",P.innerHTML="get one",P.target="_blank";var U=P.style;U.float="right",U.fontWeight=600,U.textTransform="uppercase",U.borderLeft="1px solid gray",U.paddingLeft="24px",U.textDecoration="none",U.color="#656A6B",_.appendChild(E),_.appendChild(P),this.overlay=l,this.text=g,this.hide()}rt.prototype.show=function(l){!l&&!this.overlay.parentElement?document.body.appendChild(this.overlay):l&&(this.overlay.parentElement&&this.overlay.parentElement!=l&&this.overlay.parentElement.removeChild(this.overlay),l.appendChild(this.overlay)),this.overlay.style.display="block";var c=this.overlay.querySelector("img"),g=c.style;p()?(g.width="20%",g.marginLeft="40%",g.marginTop="3%"):(g.width="50%",g.marginLeft="25%",g.marginTop="25%")},rt.prototype.hide=function(){this.overlay.style.display="none"},rt.prototype.showTemporarily=function(l,c){this.show(c),this.timer=setTimeout(this.hide.bind(this),l)},rt.prototype.disableShowTemporarily=function(){clearTimeout(this.timer)},rt.prototype.update=function(){this.disableShowTemporarily(),!p()&&L()?this.show():this.hide()},rt.prototype.loadIcon_=function(){this.icon=o("image/svg+xml",Qe)};var vt="CardboardV1",je="WEBVR_CARDBOARD_VIEWER",qt="webvr-polyfill-viewer-selector";function dt(l){try{this.selectedKey=localStorage.getItem(je)}catch(c){console.error("Failed to load viewer profile: %s",c)}this.selectedKey||(this.selectedKey=l||vt),this.dialog=this.createDialog_(he.Viewers),this.root=null,this.onChangeCallbacks_=[]}dt.prototype.show=function(l){this.root=l,l.appendChild(this.dialog);var c=this.dialog.querySelector("#"+this.selectedKey);c.checked=!0,this.dialog.style.display="block"},dt.prototype.hide=function(){this.root&&this.root.contains(this.dialog)&&this.root.removeChild(this.dialog),this.dialog.style.display="none"},dt.prototype.getCurrentViewer=function(){return he.Viewers[this.selectedKey]},dt.prototype.getSelectedKey_=function(){var l=this.dialog.querySelector("input[name=field]:checked");return l?l.id:null},dt.prototype.onChange=function(l){this.onChangeCallbacks_.push(l)},dt.prototype.fireOnChange_=function(l){for(var c=0;c<this.onChangeCallbacks_.length;c++)this.onChangeCallbacks_[c](l)},dt.prototype.onSave_=function(){if(this.selectedKey=this.getSelectedKey_(),!this.selectedKey||!he.Viewers[this.selectedKey]){console.error("ViewerSelector.onSave_: this should never happen!");return}this.fireOnChange_(he.Viewers[this.selectedKey]);try{localStorage.setItem(je,this.selectedKey)}catch(l){console.error("Failed to save viewer profile: %s",l)}this.hide()},dt.prototype.createDialog_=function(l){var c=document.createElement("div");c.classList.add(qt),c.style.display="none";var g=document.createElement("div"),P=g.style;P.position="fixed",P.left=0,P.top=0,P.width="100%",P.height="100%",P.background="rgba(0, 0, 0, 0.3)",g.addEventListener("click",this.hide.bind(this));var _=280,E=document.createElement("div"),P=E.style;P.boxSizing="border-box",P.position="fixed",P.top="24px",P.left="50%",P.marginLeft=-_/2+"px",P.width=_+"px",P.padding="24px",P.overflow="hidden",P.background="#fafafa",P.fontFamily="'Roboto', sans-serif",P.boxShadow="0px 5px 20px #666",E.appendChild(this.createH1_("Select your viewer"));for(var U in l)E.appendChild(this.createChoice_(U,l[U].label));return E.appendChild(this.createButton_("Save",this.onSave_.bind(this))),c.appendChild(g),c.appendChild(E),c},dt.prototype.createH1_=function(l){var c=document.createElement("h1"),g=c.style;return g.color="black",g.fontSize="20px",g.fontWeight="bold",g.marginTop=0,g.marginBottom="24px",c.innerHTML=l,c},dt.prototype.createChoice_=function(l,c){var g=document.createElement("div");g.style.marginTop="8px",g.style.color="black";var _=document.createElement("input");_.style.fontSize="30px",_.setAttribute("id",l),_.setAttribute("type","radio"),_.setAttribute("value",l),_.setAttribute("name","field");var E=document.createElement("label");return E.style.marginLeft="4px",E.setAttribute("for",l),E.innerHTML=c,g.appendChild(_),g.appendChild(E),g},dt.prototype.createButton_=function(l,c){var g=document.createElement("button");g.innerHTML=l;var _=g.style;return _.float="right",_.textTransform="uppercase",_.color="#1094f7",_.fontSize="14px",_.letterSpacing=0,_.border=0,_.background="none",_.marginTop="16px",g.addEventListener("click",c),g};var xr=typeof window<"u"?window:typeof na<"u"?na:typeof self<"u"?self:{};function un(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}function Bi(l,c){return c={exports:{}},l(c,c.exports),c.exports}var Sr=Bi(function(l,c){(function(_,E){l.exports=E()})(xr,function(){return function(g){var _={};function E(P){if(_[P])return _[P].exports;var U=_[P]={i:P,l:!1,exports:{}};return g[P].call(U.exports,U,U.exports,E),U.l=!0,U.exports}return E.m=g,E.c=_,E.d=function(P,U,j){E.o(P,U)||Object.defineProperty(P,U,{configurable:!1,enumerable:!0,get:j})},E.n=function(P){var U=P&&P.__esModule?function(){return P.default}:function(){return P};return E.d(U,"a",U),U},E.o=function(P,U){return Object.prototype.hasOwnProperty.call(P,U)},E.p="",E(E.s=0)}([function(g,_,E){var P=function(){function K(ne,_e){for(var ge=0;ge<_e.length;ge++){var le=_e[ge];le.enumerable=le.enumerable||!1,le.configurable=!0,"value"in le&&(le.writable=!0),Object.defineProperty(ne,le.key,le)}}return function(ne,_e,ge){return _e&&K(ne.prototype,_e),ge&&K(ne,ge),ne}}();function U(K,ne){if(!(K instanceof ne))throw new TypeError("Cannot call a class as a function")}var j=E(1),Y=typeof navigator<"u"&&parseFloat((""+(/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))<10&&!window.MSStream,V=function(){function K(){U(this,K),Y?this.noSleepTimer=null:(this.noSleepVideo=document.createElement("video"),this.noSleepVideo.setAttribute("playsinline",""),this.noSleepVideo.setAttribute("src",j),this.noSleepVideo.addEventListener("timeupdate",(function(ne){this.noSleepVideo.currentTime>.5&&(this.noSleepVideo.currentTime=Math.random())}).bind(this)))}return P(K,[{key:"enable",value:function(){Y?(this.disable(),this.noSleepTimer=window.setInterval(function(){window.location.href="/",window.setTimeout(window.stop,0)},15e3)):this.noSleepVideo.play()}},{key:"disable",value:function(){Y?this.noSleepTimer&&(window.clearInterval(this.noSleepTimer),this.noSleepTimer=null):this.noSleepVideo.pause()}}]),K}();g.exports=V},function(g,_,E){g.exports="data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAACKBtZGF0AAAC8wYF///v3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0MiByMjQ3OSBkZDc5YTYxIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNCAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTEgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MToweDExMSBtZT1oZXggc3VibWU9MiBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0wIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MCA4eDhkY3Q9MCBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0wIHRocmVhZHM9NiBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgY29uc3RyYWluZWRfaW50cmE9MCBiZnJhbWVzPTMgYl9weXJhbWlkPTIgYl9hZGFwdD0xIGJfYmlhcz0wIGRpcmVjdD0xIHdlaWdodGI9MSBvcGVuX2dvcD0wIHdlaWdodHA9MSBrZXlpbnQ9MzAwIGtleWludF9taW49MzAgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD0xMCByYz1jcmYgbWJ0cmVlPTEgY3JmPTIwLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IHZidl9tYXhyYXRlPTIwMDAwIHZidl9idWZzaXplPTI1MDAwIGNyZl9tYXg9MC4wIG5hbF9ocmQ9bm9uZSBmaWxsZXI9MCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAOWWIhAA3//p+C7v8tDDSTjf97w55i3SbRPO4ZY+hkjD5hbkAkL3zpJ6h/LR1CAABzgB1kqqzUorlhQAAAAxBmiQYhn/+qZYADLgAAAAJQZ5CQhX/AAj5IQADQGgcIQADQGgcAAAACQGeYUQn/wALKCEAA0BoHAAAAAkBnmNEJ/8ACykhAANAaBwhAANAaBwAAAANQZpoNExDP/6plgAMuSEAA0BoHAAAAAtBnoZFESwr/wAI+SEAA0BoHCEAA0BoHAAAAAkBnqVEJ/8ACykhAANAaBwAAAAJAZ6nRCf/AAsoIQADQGgcIQADQGgcAAAADUGarDRMQz/+qZYADLghAANAaBwAAAALQZ7KRRUsK/8ACPkhAANAaBwAAAAJAZ7pRCf/AAsoIQADQGgcIQADQGgcAAAACQGe60Qn/wALKCEAA0BoHAAAAA1BmvA0TEM//qmWAAy5IQADQGgcIQADQGgcAAAAC0GfDkUVLCv/AAj5IQADQGgcAAAACQGfLUQn/wALKSEAA0BoHCEAA0BoHAAAAAkBny9EJ/8ACyghAANAaBwAAAANQZs0NExDP/6plgAMuCEAA0BoHAAAAAtBn1JFFSwr/wAI+SEAA0BoHCEAA0BoHAAAAAkBn3FEJ/8ACyghAANAaBwAAAAJAZ9zRCf/AAsoIQADQGgcIQADQGgcAAAADUGbeDRMQz/+qZYADLkhAANAaBwAAAALQZ+WRRUsK/8ACPghAANAaBwhAANAaBwAAAAJAZ+1RCf/AAspIQADQGgcAAAACQGft0Qn/wALKSEAA0BoHCEAA0BoHAAAAA1Bm7w0TEM//qmWAAy4IQADQGgcAAAAC0Gf2kUVLCv/AAj5IQADQGgcAAAACQGf+UQn/wALKCEAA0BoHCEAA0BoHAAAAAkBn/tEJ/8ACykhAANAaBwAAAANQZvgNExDP/6plgAMuSEAA0BoHCEAA0BoHAAAAAtBnh5FFSwr/wAI+CEAA0BoHAAAAAkBnj1EJ/8ACyghAANAaBwhAANAaBwAAAAJAZ4/RCf/AAspIQADQGgcAAAADUGaJDRMQz/+qZYADLghAANAaBwAAAALQZ5CRRUsK/8ACPkhAANAaBwhAANAaBwAAAAJAZ5hRCf/AAsoIQADQGgcAAAACQGeY0Qn/wALKSEAA0BoHCEAA0BoHAAAAA1Bmmg0TEM//qmWAAy5IQADQGgcAAAAC0GehkUVLCv/AAj5IQADQGgcIQADQGgcAAAACQGepUQn/wALKSEAA0BoHAAAAAkBnqdEJ/8ACyghAANAaBwAAAANQZqsNExDP/6plgAMuCEAA0BoHCEAA0BoHAAAAAtBnspFFSwr/wAI+SEAA0BoHAAAAAkBnulEJ/8ACyghAANAaBwhAANAaBwAAAAJAZ7rRCf/AAsoIQADQGgcAAAADUGa8DRMQz/+qZYADLkhAANAaBwhAANAaBwAAAALQZ8ORRUsK/8ACPkhAANAaBwAAAAJAZ8tRCf/AAspIQADQGgcIQADQGgcAAAACQGfL0Qn/wALKCEAA0BoHAAAAA1BmzQ0TEM//qmWAAy4IQADQGgcAAAAC0GfUkUVLCv/AAj5IQADQGgcIQADQGgcAAAACQGfcUQn/wALKCEAA0BoHAAAAAkBn3NEJ/8ACyghAANAaBwhAANAaBwAAAANQZt4NExC//6plgAMuSEAA0BoHAAAAAtBn5ZFFSwr/wAI+CEAA0BoHCEAA0BoHAAAAAkBn7VEJ/8ACykhAANAaBwAAAAJAZ+3RCf/AAspIQADQGgcAAAADUGbuzRMQn/+nhAAYsAhAANAaBwhAANAaBwAAAAJQZ/aQhP/AAspIQADQGgcAAAACQGf+UQn/wALKCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHAAACiFtb292AAAAbG12aGQAAAAA1YCCX9WAgl8AAAPoAAAH/AABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAGGlvZHMAAAAAEICAgAcAT////v7/AAAF+XRyYWsAAABcdGtoZAAAAAPVgIJf1YCCXwAAAAEAAAAAAAAH0AAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAygAAAMoAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAB9AAABdwAAEAAAAABXFtZGlhAAAAIG1kaGQAAAAA1YCCX9WAgl8AAV+QAAK/IFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAUcbWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAE3HN0YmwAAACYc3RzZAAAAAAAAAABAAAAiGF2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAygDKAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAyYXZjQwFNQCj/4QAbZ01AKOyho3ySTUBAQFAAAAMAEAAr8gDxgxlgAQAEaO+G8gAAABhzdHRzAAAAAAAAAAEAAAA8AAALuAAAABRzdHNzAAAAAAAAAAEAAAABAAAB8GN0dHMAAAAAAAAAPAAAAAEAABdwAAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAAC7gAAAAAQAAF3AAAAABAAAAAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAEEc3RzegAAAAAAAAAAAAAAPAAAAzQAAAAQAAAADQAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAANAAAADQAAAQBzdGNvAAAAAAAAADwAAAAwAAADZAAAA3QAAAONAAADoAAAA7kAAAPQAAAD6wAAA/4AAAQXAAAELgAABEMAAARcAAAEbwAABIwAAAShAAAEugAABM0AAATkAAAE/wAABRIAAAUrAAAFQgAABV0AAAVwAAAFiQAABaAAAAW1AAAFzgAABeEAAAX+AAAGEwAABiwAAAY/AAAGVgAABnEAAAaEAAAGnQAABrQAAAbPAAAG4gAABvUAAAcSAAAHJwAAB0AAAAdTAAAHcAAAB4UAAAeeAAAHsQAAB8gAAAfjAAAH9gAACA8AAAgmAAAIQQAACFQAAAhnAAAIhAAACJcAAAMsdHJhawAAAFx0a2hkAAAAA9WAgl/VgIJfAAAAAgAAAAAAAAf8AAAAAAAAAAAAAAABAQAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAACsm1kaWEAAAAgbWRoZAAAAADVgIJf1YCCXwAArEQAAWAAVcQAAAAAACdoZGxyAAAAAAAAAABzb3VuAAAAAAAAAAAAAAAAU3RlcmVvAAAAAmNtaW5mAAAAEHNtaGQAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAidzdGJsAAAAZ3N0c2QAAAAAAAAAAQAAAFdtcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAArEQAAAAAADNlc2RzAAAAAAOAgIAiAAIABICAgBRAFQAAAAADDUAAAAAABYCAgAISEAaAgIABAgAAABhzdHRzAAAAAAAAAAEAAABYAAAEAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAAGAAAAWAAAAXBzdGNvAAAAAAAAAFgAAAOBAAADhwAAA5oAAAOtAAADswAAA8oAAAPfAAAD5QAAA/gAAAQLAAAEEQAABCgAAAQ9AAAEUAAABFYAAARpAAAEgAAABIYAAASbAAAErgAABLQAAATHAAAE3gAABPMAAAT5AAAFDAAABR8AAAUlAAAFPAAABVEAAAVXAAAFagAABX0AAAWDAAAFmgAABa8AAAXCAAAFyAAABdsAAAXyAAAF+AAABg0AAAYgAAAGJgAABjkAAAZQAAAGZQAABmsAAAZ+AAAGkQAABpcAAAauAAAGwwAABskAAAbcAAAG7wAABwYAAAcMAAAHIQAABzQAAAc6AAAHTQAAB2QAAAdqAAAHfwAAB5IAAAeYAAAHqwAAB8IAAAfXAAAH3QAAB/AAAAgDAAAICQAACCAAAAg1AAAIOwAACE4AAAhhAAAIeAAACH4AAAiRAAAIpAAACKoAAAiwAAAItgAACLwAAAjCAAAAFnVkdGEAAAAObmFtZVN0ZXJlbwAAAHB1ZHRhAAAAaG1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAAO2lsc3QAAAAzqXRvbwAAACtkYXRhAAAAAQAAAABIYW5kQnJha2UgMC4xMC4yIDIwMTUwNjExMDA="}])})}),yr=un(Sr),ni=1e3,Mr=[0,0,.5,1],ii=[.5,0,.5,1],Er=window.requestAnimationFrame,wr=window.cancelAnimationFrame;function xs(){this.leftProjectionMatrix=new Float32Array(16),this.leftViewMatrix=new Float32Array(16),this.rightProjectionMatrix=new Float32Array(16),this.rightViewMatrix=new Float32Array(16),this.pose=null}function br(l){Object.defineProperties(this,{hasPosition:{writable:!1,enumerable:!0,value:l.hasPosition},hasExternalDisplay:{writable:!1,enumerable:!0,value:l.hasExternalDisplay},canPresent:{writable:!1,enumerable:!0,value:l.canPresent},maxLayers:{writable:!1,enumerable:!0,value:l.maxLayers},hasOrientation:{enumerable:!0,get:function(){return pe("VRDisplayCapabilities.prototype.hasOrientation","VRDisplay.prototype.getFrameData"),l.hasOrientation}}})}function ot(l){l=l||{};var c="wakelock"in l?l.wakelock:!0;this.isPolyfilled=!0,this.displayId=ni++,this.displayName="",this.depthNear=.01,this.depthFar=1e4,this.isPresenting=!1,Object.defineProperty(this,"isConnected",{get:function(){return pe("VRDisplay.prototype.isConnected","VRDisplayCapabilities.prototype.hasExternalDisplay"),!1}}),this.capabilities=new br({hasPosition:!1,hasOrientation:!1,hasExternalDisplay:!1,canPresent:!1,maxLayers:1}),this.stageParameters=null,this.waitingForPresent_=!1,this.layer_=null,this.originalParent_=null,this.fullscreenElement_=null,this.fullscreenWrapper_=null,this.fullscreenElementCachedStyle_=null,this.fullscreenEventTarget_=null,this.fullscreenChangeHandler_=null,this.fullscreenErrorHandler_=null,c&&L()&&(this.wakelock_=new yr)}ot.prototype.getFrameData=function(l){return B(l,this._getPose(),this)},ot.prototype.getPose=function(){return pe("VRDisplay.prototype.getPose","VRDisplay.prototype.getFrameData"),this._getPose()},ot.prototype.resetPose=function(){return pe("VRDisplay.prototype.resetPose"),this._resetPose()},ot.prototype.getImmediatePose=function(){return pe("VRDisplay.prototype.getImmediatePose","VRDisplay.prototype.getFrameData"),this._getPose()},ot.prototype.requestAnimationFrame=function(l){return Er(l)},ot.prototype.cancelAnimationFrame=function(l){return wr(l)},ot.prototype.wrapForFullscreen=function(l){if(h())return l;if(!this.fullscreenWrapper_){this.fullscreenWrapper_=document.createElement("div");var c=["height: "+Math.min(screen.height,screen.width)+"px !important","top: 0 !important","left: 0 !important","right: 0 !important","border: 0","margin: 0","padding: 0","z-index: 999999 !important","position: fixed"];this.fullscreenWrapper_.setAttribute("style",c.join("; ")+";"),this.fullscreenWrapper_.classList.add("webvr-polyfill-fullscreen-wrapper")}if(this.fullscreenElement_==l)return this.fullscreenWrapper_;if(this.fullscreenElement_&&(this.originalParent_?this.originalParent_.appendChild(this.fullscreenElement_):this.fullscreenElement_.parentElement.removeChild(this.fullscreenElement_)),this.fullscreenElement_=l,this.originalParent_=l.parentElement,this.originalParent_||document.body.appendChild(l),!this.fullscreenWrapper_.parentElement){var g=this.fullscreenElement_.parentElement;g.insertBefore(this.fullscreenWrapper_,this.fullscreenElement_),g.removeChild(this.fullscreenElement_)}this.fullscreenWrapper_.insertBefore(this.fullscreenElement_,this.fullscreenWrapper_.firstChild),this.fullscreenElementCachedStyle_=this.fullscreenElement_.getAttribute("style");var _=this;function E(){if(_.fullscreenElement_){var P=["position: absolute","top: 0","left: 0","width: "+Math.max(screen.width,screen.height)+"px","height: "+Math.min(screen.height,screen.width)+"px","border: 0","margin: 0","padding: 0"];_.fullscreenElement_.setAttribute("style",P.join("; ")+";")}}return E(),this.fullscreenWrapper_},ot.prototype.removeFullscreenWrapper=function(){if(this.fullscreenElement_){var l=this.fullscreenElement_;this.fullscreenElementCachedStyle_?l.setAttribute("style",this.fullscreenElementCachedStyle_):l.removeAttribute("style"),this.fullscreenElement_=null,this.fullscreenElementCachedStyle_=null;var c=this.fullscreenWrapper_.parentElement;return this.fullscreenWrapper_.removeChild(l),this.originalParent_===c?c.insertBefore(l,this.fullscreenWrapper_):this.originalParent_&&this.originalParent_.appendChild(l),c.removeChild(this.fullscreenWrapper_),l}},ot.prototype.requestPresent=function(l){var c=this.isPresenting,g=this;return l instanceof Array||(pe("VRDisplay.prototype.requestPresent with non-array argument","an array of VRLayers as the first argument"),l=[l]),new Promise(function(_,E){if(!g.capabilities.canPresent){E(new Error("VRDisplay is not capable of presenting."));return}if(l.length==0||l.length>g.capabilities.maxLayers){E(new Error("Invalid number of layers."));return}var P=l[0];if(!P.source){_();return}var U=P.leftBounds||Mr,j=P.rightBounds||ii;if(c){var Y=g.layer_;Y.source!==P.source&&(Y.source=P.source);for(var V=0;V<4;V++)Y.leftBounds[V]=U[V],Y.rightBounds[V]=j[V];g.wrapForFullscreen(g.layer_.source),g.updatePresent_(),_();return}if(g.layer_={predistorted:P.predistorted,source:P.source,leftBounds:U.slice(0),rightBounds:j.slice(0)},g.waitingForPresent_=!1,g.layer_&&g.layer_.source){var K=g.wrapForFullscreen(g.layer_.source),ne=function(){var le=I();g.isPresenting=K===le,g.isPresenting?(screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape-primary").catch(function(Le){console.error("screen.orientation.lock() failed due to",Le.message)}),g.waitingForPresent_=!1,g.beginPresent_(),_()):(screen.orientation&&screen.orientation.unlock&&screen.orientation.unlock(),g.removeFullscreenWrapper(),g.disableWakeLock(),g.endPresent_(),g.removeFullscreenListeners_()),g.fireVRDisplayPresentChange_()},_e=function(){g.waitingForPresent_&&(g.removeFullscreenWrapper(),g.removeFullscreenListeners_(),g.disableWakeLock(),g.waitingForPresent_=!1,g.isPresenting=!1,E(new Error("Unable to present.")))};g.addFullscreenListeners_(K,ne,_e),G(K)?(g.enableWakeLock(),g.waitingForPresent_=!0):(h()||d())&&(g.enableWakeLock(),g.isPresenting=!0,g.beginPresent_(),g.fireVRDisplayPresentChange_(),_())}!g.waitingForPresent_&&!h()&&(D(),E(new Error("Unable to present.")))})},ot.prototype.exitPresent=function(){var l=this.isPresenting,c=this;return this.isPresenting=!1,this.layer_=null,this.disableWakeLock(),new Promise(function(g,_){l?(!D()&&h()&&(c.endPresent_(),c.fireVRDisplayPresentChange_()),d()&&(c.removeFullscreenWrapper(),c.removeFullscreenListeners_(),c.endPresent_(),c.fireVRDisplayPresentChange_()),g()):_(new Error("Was not presenting to VRDisplay."))})},ot.prototype.getLayers=function(){return this.layer_?[this.layer_]:[]},ot.prototype.fireVRDisplayPresentChange_=function(){var l=new CustomEvent("vrdisplaypresentchange",{detail:{display:this}});window.dispatchEvent(l)},ot.prototype.fireVRDisplayConnect_=function(){var l=new CustomEvent("vrdisplayconnect",{detail:{display:this}});window.dispatchEvent(l)},ot.prototype.addFullscreenListeners_=function(l,c,g){this.removeFullscreenListeners_(),this.fullscreenEventTarget_=l,this.fullscreenChangeHandler_=c,this.fullscreenErrorHandler_=g,c&&(document.fullscreenEnabled?l.addEventListener("fullscreenchange",c,!1):document.webkitFullscreenEnabled?l.addEventListener("webkitfullscreenchange",c,!1):document.mozFullScreenEnabled?document.addEventListener("mozfullscreenchange",c,!1):document.msFullscreenEnabled&&l.addEventListener("msfullscreenchange",c,!1)),g&&(document.fullscreenEnabled?l.addEventListener("fullscreenerror",g,!1):document.webkitFullscreenEnabled?l.addEventListener("webkitfullscreenerror",g,!1):document.mozFullScreenEnabled?document.addEventListener("mozfullscreenerror",g,!1):document.msFullscreenEnabled&&l.addEventListener("msfullscreenerror",g,!1))},ot.prototype.removeFullscreenListeners_=function(){if(this.fullscreenEventTarget_){var l=this.fullscreenEventTarget_;if(this.fullscreenChangeHandler_){var c=this.fullscreenChangeHandler_;l.removeEventListener("fullscreenchange",c,!1),l.removeEventListener("webkitfullscreenchange",c,!1),document.removeEventListener("mozfullscreenchange",c,!1),l.removeEventListener("msfullscreenchange",c,!1)}if(this.fullscreenErrorHandler_){var g=this.fullscreenErrorHandler_;l.removeEventListener("fullscreenerror",g,!1),l.removeEventListener("webkitfullscreenerror",g,!1),document.removeEventListener("mozfullscreenerror",g,!1),l.removeEventListener("msfullscreenerror",g,!1)}this.fullscreenEventTarget_=null,this.fullscreenChangeHandler_=null,this.fullscreenErrorHandler_=null}},ot.prototype.enableWakeLock=function(){this.wakelock_&&this.wakelock_.enable()},ot.prototype.disableWakeLock=function(){this.wakelock_&&this.wakelock_.disable()},ot.prototype.beginPresent_=function(){},ot.prototype.endPresent_=function(){},ot.prototype.submitFrame=function(l){},ot.prototype.getEyeParameters=function(l){return null};var b={ADDITIONAL_VIEWERS:[],DEFAULT_VIEWER:"",MOBILE_WAKE_LOCK:!0,DEBUG:!1,DPDB_URL:"https://dpdb.webvr.rocks/dpdb.json",K_FILTER:.98,PREDICTION_TIME_S:.04,CARDBOARD_UI_DISABLED:!1,ROTATE_INSTRUCTIONS_DISABLED:!1,YAW_ONLY:!1,BUFFER_SCALE:.5,DIRTY_SUBMIT_FRAME_BINDINGS:!1},W={LEFT:"left",RIGHT:"right"};function q(l){var c=k({},b);l=k(c,l||{}),ot.call(this,{wakelock:l.MOBILE_WAKE_LOCK}),this.config=l,this.displayName="Cardboard VRDisplay",this.capabilities=new br({hasPosition:!1,hasOrientation:!0,hasExternalDisplay:!1,canPresent:!0,maxLayers:1}),this.stageParameters=null,this.bufferScale_=this.config.BUFFER_SCALE,this.poseSensor_=new Ne(this.config),this.distorter_=null,this.cardboardUI_=null,this.dpdb_=new Ie(this.config.DPDB_URL,this.onDeviceParamsUpdated_.bind(this)),this.deviceInfo_=new he(this.dpdb_.getDeviceParams(),l.ADDITIONAL_VIEWERS),this.viewerSelector_=new dt(l.DEFAULT_VIEWER),this.viewerSelector_.onChange(this.onViewerChanged_.bind(this)),this.deviceInfo_.setViewer(this.viewerSelector_.getCurrentViewer()),this.config.ROTATE_INSTRUCTIONS_DISABLED||(this.rotateInstructions_=new rt),h()&&window.addEventListener("resize",this.onResize_.bind(this))}return q.prototype=Object.create(ot.prototype),q.prototype._getPose=function(){return{position:null,orientation:this.poseSensor_.getOrientation(),linearVelocity:null,linearAcceleration:null,angularVelocity:null,angularAcceleration:null}},q.prototype._resetPose=function(){this.poseSensor_.resetPose&&this.poseSensor_.resetPose()},q.prototype._getFieldOfView=function(l){var c;if(l==W.LEFT)c=this.deviceInfo_.getFieldOfViewLeftEye();else if(l==W.RIGHT)c=this.deviceInfo_.getFieldOfViewRightEye();else return console.error("Invalid eye provided: %s",l),null;return c},q.prototype._getEyeOffset=function(l){var c;if(l==W.LEFT)c=[-this.deviceInfo_.viewer.interLensDistance*.5,0,0];else if(l==W.RIGHT)c=[this.deviceInfo_.viewer.interLensDistance*.5,0,0];else return console.error("Invalid eye provided: %s",l),null;return c},q.prototype.getEyeParameters=function(l){var c=this._getEyeOffset(l),g=this._getFieldOfView(l),_={offset:c,renderWidth:this.deviceInfo_.device.width*.5*this.bufferScale_,renderHeight:this.deviceInfo_.device.height*this.bufferScale_};return Object.defineProperty(_,"fieldOfView",{enumerable:!0,get:function(){return pe("VRFieldOfView","VRFrameData's projection matrices"),g}}),_},q.prototype.onDeviceParamsUpdated_=function(l){this.config.DEBUG&&console.log("DPDB reported that device params were updated."),this.deviceInfo_.updateDeviceParams(l),this.distorter_&&this.distorter_.updateDeviceInfo(this.deviceInfo_)},q.prototype.updateBounds_=function(){this.layer_&&this.distorter_&&(this.layer_.leftBounds||this.layer_.rightBounds)&&this.distorter_.setTextureBounds(this.layer_.leftBounds,this.layer_.rightBounds)},q.prototype.beginPresent_=function(){var l=this.layer_.source.getContext("webgl");l||(l=this.layer_.source.getContext("experimental-webgl")),l||(l=this.layer_.source.getContext("webgl2")),l&&(this.layer_.predistorted?this.config.CARDBOARD_UI_DISABLED||(l.canvas.width=M()*this.bufferScale_,l.canvas.height=R()*this.bufferScale_,this.cardboardUI_=new it(l)):(this.config.CARDBOARD_UI_DISABLED||(this.cardboardUI_=new it(l)),this.distorter_=new te(l,this.cardboardUI_,this.config.BUFFER_SCALE,this.config.DIRTY_SUBMIT_FRAME_BINDINGS),this.distorter_.updateDeviceInfo(this.deviceInfo_)),this.cardboardUI_&&this.cardboardUI_.listen((function(c){this.viewerSelector_.show(this.layer_.source.parentElement),c.stopPropagation(),c.preventDefault()}).bind(this),(function(c){this.exitPresent(),c.stopPropagation(),c.preventDefault()}).bind(this)),this.rotateInstructions_&&(p()&&L()?this.rotateInstructions_.showTemporarily(3e3,this.layer_.source.parentElement):this.rotateInstructions_.update()),this.orientationHandler=this.onOrientationChange_.bind(this),window.addEventListener("orientationchange",this.orientationHandler),this.vrdisplaypresentchangeHandler=this.updateBounds_.bind(this),window.addEventListener("vrdisplaypresentchange",this.vrdisplaypresentchangeHandler),this.fireVRDisplayDeviceParamsChange_())},q.prototype.endPresent_=function(){this.distorter_&&(this.distorter_.destroy(),this.distorter_=null),this.cardboardUI_&&(this.cardboardUI_.destroy(),this.cardboardUI_=null),this.rotateInstructions_&&this.rotateInstructions_.hide(),this.viewerSelector_.hide(),window.removeEventListener("orientationchange",this.orientationHandler),window.removeEventListener("vrdisplaypresentchange",this.vrdisplaypresentchangeHandler)},q.prototype.updatePresent_=function(){this.endPresent_(),this.beginPresent_()},q.prototype.submitFrame=function(l){if(this.distorter_)this.updateBounds_(),this.distorter_.submitFrame();else if(this.cardboardUI_&&this.layer_){var c=this.layer_.source.getContext("webgl");c||(c=this.layer_.source.getContext("experimental-webgl")),c||(c=this.layer_.source.getContext("webgl2"));var g=c.canvas;(g.width!=this.lastWidth||g.height!=this.lastHeight)&&this.cardboardUI_.onResize(),this.lastWidth=g.width,this.lastHeight=g.height,this.cardboardUI_.render()}},q.prototype.onOrientationChange_=function(l){this.viewerSelector_.hide(),this.rotateInstructions_&&this.rotateInstructions_.update(),this.onResize_()},q.prototype.onResize_=function(l){if(this.layer_){var c=this.layer_.source.getContext("webgl");c||(c=this.layer_.source.getContext("experimental-webgl")),c||(c=this.layer_.source.getContext("webgl2"));var g=["position: absolute","top: 0","left: 0","width: 100vw","height: 100vh","border: 0","margin: 0","padding: 0px","box-sizing: content-box"];c.canvas.setAttribute("style",g.join("; ")+";"),N(c.canvas)}},q.prototype.onViewerChanged_=function(l){this.deviceInfo_.setViewer(l),this.distorter_&&this.distorter_.updateDeviceInfo(this.deviceInfo_),this.fireVRDisplayDeviceParamsChange_()},q.prototype.fireVRDisplayDeviceParamsChange_=function(){var l=new CustomEvent("vrdisplaydeviceparamschange",{detail:{vrdisplay:this,deviceInfo:this.deviceInfo_}});window.dispatchEvent(l)},q.VRFrameData=xs,q.VRDisplay=ot,q})})(Lc);var C0=Lc.exports;const P0=R0(C0);class uo extends ao{constructor(e){super(),this.global=e,this.onWindowResize=this.onWindowResize.bind(this),this.global.window.addEventListener("resize",this.onWindowResize),this.environmentBlendMode="opaque"}onBaseLayerSet(e,t){throw new Error("Not implemented")}isSessionSupported(e){throw new Error("Not implemented")}isFeatureSupported(e){throw new Error("Not implemented")}async requestSession(e,t){throw new Error("Not implemented")}requestAnimationFrame(e){throw new Error("Not implemented")}onFrameStart(e){throw new Error("Not implemented")}onFrameEnd(e){throw new Error("Not implemented")}doesSessionSupportReferenceSpace(e,t){throw new Error("Not implemented")}requestStageBounds(){throw new Error("Not implemented")}async requestFrameOfReferenceTransform(e,t){}cancelAnimationFrame(e){throw new Error("Not implemented")}endSession(e){throw new Error("Not implemented")}getViewSpaces(e){}getViewport(e,t,i,r,s){throw new Error("Not implemented")}getProjectionMatrix(e,t){throw new Error("Not implemented")}getBasePoseMatrix(){throw new Error("Not implemented")}getBaseViewMatrix(e){throw new Error("Not implemented")}getInputSources(){throw new Error("Not implemented")}getInputPose(e,t,i){throw new Error("Not implemented")}onWindowResize(){this.onWindowResize()}}let L0={mapping:"",profiles:["google-daydream","generic-trigger-touchpad"],buttons:{length:3,0:null,1:null,2:0}},D0={mapping:"xr-standard",profiles:["htc-vive-focus","generic-trigger-touchpad"],buttons:{length:3,0:1,1:null,2:0}},I0={mapping:"xr-standard",profiles:["oculus-go","generic-trigger-touchpad"],buttons:{length:3,0:1,1:null,2:0},gripTransform:{orientation:[Math.PI*.11,0,0,1]}},wl={mapping:"xr-standard",displayProfiles:{"Oculus Quest":["oculus-touch-v2","oculus-touch","generic-trigger-squeeze-thumbstick"]},profiles:["oculus-touch","generic-trigger-squeeze-thumbstick"],axes:{length:4,0:null,1:null,2:0,3:1},buttons:{length:7,0:1,1:2,2:null,3:0,4:3,5:4,6:null},gripTransform:{position:[0,-.02,.04,1],orientation:[Math.PI*.11,0,0,1]}},F0={mapping:"xr-standard",profiles:["htc-vive","generic-trigger-squeeze-touchpad"],displayProfiles:{"HTC Vive":["htc-vive","generic-trigger-squeeze-touchpad"],"HTC Vive DVT":["htc-vive","generic-trigger-squeeze-touchpad"],"Valve Index":["valve-index","generic-trigger-squeeze-touchpad-thumbstick"]},buttons:{length:3,0:1,1:2,2:0},gripTransform:{position:[0,0,.05,1]},targetRayTransform:{orientation:[Math.PI*-.08,0,0,1]},userAgentOverrides:{Firefox:{axes:{invert:[1,3]}}}},U0={mapping:"xr-standard",profiles:["samsung-gearvr","generic-trigger-touchpad"],buttons:{length:3,0:1,1:null,2:0},gripTransform:{orientation:[Math.PI*.11,0,0,1]}},N0={mapping:"xr-standard",profiles:["samsung-odyssey","microsoft-mixed-reality","generic-trigger-squeeze-touchpad-thumbstick"],buttons:{length:4,0:1,1:0,2:2,3:4},gripTransform:{position:[0,-.02,.04,1],orientation:[Math.PI*.11,0,0,1]}},ia={mapping:"xr-standard",profiles:["microsoft-mixed-reality","generic-trigger-squeeze-touchpad-thumbstick"],buttons:{length:4,0:1,1:0,2:2,3:4},gripTransform:{position:[0,-.02,.04,1],orientation:[Math.PI*.11,0,0,1]}},O0={"Daydream Controller":L0,"Gear VR Controller":U0,"HTC Vive Focus Controller":D0,"Oculus Go Controller":I0,"Oculus Touch (Right)":wl,"Oculus Touch (Left)":wl,"OpenVR Gamepad":F0,"Spatial Controller (Spatial Interaction Source) 045E-065A":ia,"Spatial Controller (Spatial Interaction Source) 045E-065D":N0,"Windows Mixed Reality (Right)":ia,"Windows Mixed Reality (Left)":ia};const bl=nn(.155,-.465,-.15),B0=nn(-.155,-.465,-.15),G0=nn(0,0,-.25),z0=nn(0,0,.05),Tl=nn(-.08,.14,.08),Rl=.4,V0=.4,k0=.61,H0=.175,W0=.12,X0=.87,Cl=180/Math.PI;function q0(n,e,t){function i(u,h,d){return u<h?h:u>d?d:u}var r=e[0]*e[0],s=e[1]*e[1],a=e[2]*e[2],o=e[3]*e[3];n[0]=Math.asin(i(2*(e[0]*e[3]-e[1]*e[2]),-1,1)),n[1]=Math.atan2(2*(e[0]*e[2]+e[1]*e[3]),o-r-s+a),n[2]=Math.atan2(2*(e[0]*e[1]+e[2]*e[3]),o-r+s-a)}class Y0{constructor(){this.hand="right",this.headElbowOffset=bl,this.controllerQ=Zt(),this.lastControllerQ=Zt(),this.headQ=Zt(),this.headPos=vn(),this.elbowPos=vn(),this.wristPos=vn(),this.time=null,this.lastTime=null,this.rootQ=Zt(),this.position=vn()}setHandedness(e){this.hand!=e&&(this.hand=e,this.hand=="left"?this.headElbowOffset=B0:this.headElbowOffset=bl)}update(e,t){this.time=yc(),e&&(Zs(this.lastControllerQ,this.controllerQ),Zs(this.controllerQ,e)),t&&(mc(this.headPos,t),gc(this.headQ,t));let i=this.getHeadYawOrientation_(),r=this.quatAngle_(this.lastControllerQ,this.controllerQ),s=(this.time-this.lastTime)/1e3;r/s>k0?lr(this.rootQ,this.rootQ,i,Math.min(r/H0,1)):Zs(this.rootQ,i);let o=nn(0,0,-1);Si(o,o,this.controllerQ);let u=oo(o,[0,1,0]),h=this.clamp_((u-W0)/X0,0,1),d=Al(this.rootQ);vl(d,d),gl(d,d,this.controllerQ);let m=this.elbowPos;pl(m,this.headPos),ir(m,m,this.headElbowOffset);let v=fl(Tl);ml(v,v,h),ir(m,m,v);let S=this.quatAngle_(d,Zt())*Cl,x=1-Math.pow(S/180,4);sssss;let f=Rl,p=1-Rl,T=x*(f+p*h*V0),M=Zt();lr(M,M,d,T);let R=vl(Zt(),M),G=Al(d);gl(G,G,R);let D=this.wristPos;pl(D,z0),Si(D,D,M),ir(D,D,G0),Si(D,D,G),ir(D,D,m);let I=fl(Tl);ml(I,I,h),ir(this.position,this.wristPos,I),Si(this.position,this.position,this.rootQ),this.lastTime=this.time}getPosition(){return this.position}getHeadYawOrientation_(){let e=vn();return q0(e,this.headQ),p0(Zt(),0,e[1]*Cl,0)}clamp_(e,t,i){return Math.min(Math.max(e,t),i)}quatAngle_(e,t){let i=[0,0,-1],r=[0,0,-1];return Si(i,i,e),Si(r,r,t),r0(i,r)}}const Ct=Symbol("@@webxr-polyfill/XRRemappedGamepad"),Dc={pressed:!1,touched:!1,value:0};Object.freeze(Dc);class Q0{constructor(e,t,i){if(i||(i={}),i.userAgentOverrides){for(let h in i.userAgentOverrides)if(navigator.userAgent.includes(h)){let d=i.userAgentOverrides[h];for(let m in d)m in i?Object.assign(i[m],d[m]):i[m]=d[m];break}}let r=new Array(i.axes&&i.axes.length?i.axes.length:e.axes.length),s=new Array(i.buttons&&i.buttons.length?i.buttons.length:e.buttons.length),a=null;if(i.gripTransform){let h=i.gripTransform.orientation||[0,0,0,1];a=ei(),dr(a,ds(h,h),i.gripTransform.position||[0,0,0])}let o=null;if(i.targetRayTransform){let h=i.targetRayTransform.orientation||[0,0,0,1];o=ei(),dr(o,ds(h,h),i.targetRayTransform.position||[0,0,0])}let u=i.profiles;i.displayProfiles&&t.displayName in i.displayProfiles&&(u=i.displayProfiles[t.displayName]),this[Ct]={gamepad:e,map:i,profiles:u||[e.id],mapping:i.mapping||e.mapping,axes:r,buttons:s,gripTransform:a,targetRayTransform:o},this._update()}_update(){let e=this[Ct].gamepad,t=this[Ct].map,i=this[Ct].axes;for(let s=0;s<i.length;++s)t.axes&&s in t.axes?t.axes[s]===null?i[s]=0:i[s]=e.axes[t.axes[s]]:i[s]=e.axes[s];if(t.axes&&t.axes.invert)for(let s of t.axes.invert)s<i.length&&(i[s]*=-1);let r=this[Ct].buttons;for(let s=0;s<r.length;++s)t.buttons&&s in t.buttons?t.buttons[s]===null?r[s]=Dc:r[s]=e.buttons[t.buttons[s]]:r[s]=e.buttons[s]}get id(){return""}get _profiles(){return this[Ct].profiles}get index(){return-1}get connected(){return this[Ct].gamepad.connected}get timestamp(){return this[Ct].gamepad.timestamp}get mapping(){return this[Ct].mapping}get axes(){return this[Ct].axes}get buttons(){return this[Ct].buttons}get hapticActuators(){return this[Ct].gamepad.hapticActuators}}class K0{constructor(e,t,i=0,r=-1){this.polyfill=e,this.display=t,this.nativeGamepad=null,this.gamepad=null,this.inputSource=new Rc(this),this.lastPosition=vn(),this.emulatedPosition=!1,this.basePoseMatrix=ei(),this.outputMatrix=ei(),this.primaryButtonIndex=i,this.primaryActionPressed=!1,this.primarySqueezeButtonIndex=r,this.primarySqueezeActionPressed=!1,this.handedness="",this.targetRayMode="gaze",this.armModel=null}get profiles(){return this.gamepad?this.gamepad._profiles:[]}updateFromGamepad(e){this.nativeGamepad!==e&&(this.nativeGamepad=e,e?this.gamepad=new Q0(e,this.display,O0[e.id]):this.gamepad=null),this.handedness=e.hand===""?"none":e.hand,this.gamepad&&this.gamepad._update(),e.pose?(this.targetRayMode="tracked-pointer",this.emulatedPosition=!e.pose.hasPosition):e.hand===""&&(this.targetRayMode="gaze",this.emulatedPosition=!1)}updateBasePoseMatrix(){if(this.nativeGamepad&&this.nativeGamepad.pose){let e=this.nativeGamepad.pose,t=e.position,i=e.orientation;if(!t&&!i)return;t?(this.lastPosition[0]=t[0],this.lastPosition[1]=t[1],this.lastPosition[2]=t[2]):e.hasPosition?t=this.lastPosition:(this.armModel||(this.armModel=new Y0),this.armModel.setHandedness(this.nativeGamepad.hand),this.armModel.update(i,this.polyfill.getBasePoseMatrix()),t=this.armModel.getPosition()),dr(this.basePoseMatrix,i,t)}else n0(this.basePoseMatrix,this.polyfill.getBasePoseMatrix());return this.basePoseMatrix}getXRPose(e,t){switch(this.updateBasePoseMatrix(),t){case"target-ray":e._transformBasePoseMatrix(this.outputMatrix,this.basePoseMatrix),this.gamepad&&this.gamepad[Ct].targetRayTransform&&Ti(this.outputMatrix,this.outputMatrix,this.gamepad[Ct].targetRayTransform);break;case"grip":if(!this.nativeGamepad||!this.nativeGamepad.pose)return null;e._transformBasePoseMatrix(this.outputMatrix,this.basePoseMatrix),this.gamepad&&this.gamepad[Ct].gripTransform&&Ti(this.outputMatrix,this.outputMatrix,this.gamepad[Ct].gripTransform);break;default:return null}return e._adjustForOriginOffset(this.outputMatrix),new XRPose(new XRRigidTransform(this.outputMatrix),this.emulatedPosition)}}const j0=!1,Pl={highRefreshRate:!0},Ll={oculus:1,openvr:1,"spatial controller (spatial interaction source)":1};let Z0=0,$0=class{constructor(e,t,i={}){if(this.mode=e,this.enabledFeatures=t,this.outputContext=null,this.immersive=e=="immersive-vr"||e=="immersive-ar",this.ended=null,this.baseLayer=null,this.id=++Z0,this.modifiedCanvasLayer=!1,this.outputContext&&!j0){const r=i.renderContextType||"2d";this.renderContext=this.outputContext.canvas.getContext(r)}}};class Ic extends uo{constructor(e,t){const{canPresent:i}=t.capabilities;super(e),this.display=t,this.frame=new e.VRFrameData,this.sessions=new Map,this.immersiveSession=null,this.canPresent=i,this.baseModelMatrix=ei(),this.gamepadInputSources={},this.tempVec3=new Float32Array(3),this.onVRDisplayPresentChange=this.onVRDisplayPresentChange.bind(this),e.window.addEventListener("vrdisplaypresentchange",this.onVRDisplayPresentChange),this.CAN_USE_GAMEPAD=e.navigator&&"getGamepads"in e.navigator,this.HAS_BITMAP_SUPPORT=w0(e)}get depthNear(){return this.display.depthNear}set depthNear(e){this.display.depthNear=e}get depthFar(){return this.display.depthFar}set depthFar(e){this.display.depthFar=e}onBaseLayerSet(e,t){const i=this.sessions.get(e),r=t.context.canvas;if(i.immersive){const s=this.display.getEyeParameters("left"),a=this.display.getEyeParameters("right");r.width=Math.max(s.renderWidth,a.renderWidth)*2,r.height=Math.max(s.renderHeight,a.renderHeight),this.display.requestPresent([{source:r,attributes:Pl}]).then(()=>{this.global.document.body.contains(r)||(i.modifiedCanvasLayer=!0,this.global.document.body.appendChild(r),T0(r)),i.baseLayer=t})}else i.baseLayer=t}isSessionSupported(e){return!(e=="immersive-ar"||e=="immersive-vr"&&this.canPresent===!1)}isFeatureSupported(e){switch(e){case"viewer":return!0;case"local":return!0;case"local-floor":return!0;case"bounded":return!1;case"unbounded":return!1;default:return!1}}async requestSession(e,t){if(!this.isSessionSupported(e))return Promise.reject();let i=e=="immersive-vr";if(i){const s=this.global.document.createElement("canvas");s.getContext("webgl"),await this.display.requestPresent([{source:s,attributes:Pl}])}const r=new $0(e,t,{renderContextType:this.HAS_BITMAP_SUPPORT?"bitmaprenderer":"2d"});return this.sessions.set(r.id,r),i&&(this.immersiveSession=r,this.dispatchEvent("@@webxr-polyfill/vr-present-start",r.id)),Promise.resolve(r.id)}requestAnimationFrame(e){return this.display.requestAnimationFrame(e)}getPrimaryButtonIndex(e){let t=0,i=e.id.toLowerCase();for(let r in Ll)if(i.includes(r)){t=Ll[r];break}return Math.min(t,e.buttons.length-1)}onFrameStart(e,t){this.display.depthNear=t.depthNear,this.display.depthFar=t.depthFar,this.display.getFrameData(this.frame);const i=this.sessions.get(e);if(i.immersive&&this.CAN_USE_GAMEPAD){let r=this.gamepadInputSources;this.gamepadInputSources={};let s=this.global.navigator.getGamepads();for(let a=0;a<s.length;++a){let o=s[a];if(o&&o.displayId>0){let u=r[a];if(u||(u=new K0(this,this.display,this.getPrimaryButtonIndex(o))),u.updateFromGamepad(o),this.gamepadInputSources[a]=u,u.primaryButtonIndex!=-1){let h=o.buttons[u.primaryButtonIndex].pressed;h&&!u.primaryActionPressed?this.dispatchEvent("@@webxr-polyfill/input-select-start",{sessionId:i.id,inputSource:u.inputSource}):!h&&u.primaryActionPressed&&this.dispatchEvent("@@webxr-polyfill/input-select-end",{sessionId:i.id,inputSource:u.inputSource}),u.primaryActionPressed=h}if(u.primarySqueezeButtonIndex!=-1){let h=o.buttons[u.primarySqueezeButtonIndex].pressed;h&&!u.primarySqueezeActionPressed?this.dispatchEvent("@@webxr-polyfill/input-squeeze-start",{sessionId:i.id,inputSource:u.inputSource}):!h&&u.primarySqueezeActionPressed&&this.dispatchEvent("@@webxr-polyfill/input-squeeze-end",{sessionId:i.id,inputSource:u.inputSource}),u.primarySqueezeActionPressed=h}}}}if(!i.immersive&&i.baseLayer){const r=i.baseLayer.context.canvas;vc(this.frame.leftProjectionMatrix,t.inlineVerticalFieldOfView,r.width/r.height,t.depthNear,t.depthFar)}}onFrameEnd(e){const t=this.sessions.get(e);if(!(t.ended||!t.baseLayer)){if(t.outputContext&&!(t.immersive&&!this.display.capabilities.hasExternalDisplay)){const i=t.immersive&&this.display.capabilities.hasExternalDisplay,r=t.baseLayer.context.canvas,s=i?r.width/2:r.width,a=r.height;{const o=t.outputContext.canvas,u=o.width,h=o.height,d=t.renderContext;this.HAS_BITMAP_SUPPORT?r.transferToImageBitmap?d.transferFromImageBitmap(r.transferToImageBitmap()):this.global.createImageBitmap(r,0,0,s,a,{resizeWidth:u,resizeHeight:h}).then(m=>d.transferFromImageBitmap(m)):d.drawImage(r,0,0,s,a,0,0,u,h)}}t.immersive&&t.baseLayer&&this.display.submitFrame()}}cancelAnimationFrame(e){this.display.cancelAnimationFrame(e)}async endSession(e){const t=this.sessions.get(e);if(!t.ended){if(t.immersive)return this.display.exitPresent();t.ended=!0}}doesSessionSupportReferenceSpace(e,t){const i=this.sessions.get(e);return i.ended?!1:i.enabledFeatures.has(t)}requestStageBounds(){if(this.display.stageParameters){const e=this.display.stageParameters.sizeX,t=this.display.stageParameters.sizeZ,i=[];return i.push(-e/2),i.push(-t/2),i.push(e/2),i.push(-t/2),i.push(e/2),i.push(t/2),i.push(-e/2),i.push(t/2),i}return null}async requestFrameOfReferenceTransform(e,t){return(e==="local-floor"||e==="bounded-floor")&&this.display.stageParameters&&this.display.stageParameters.sittingToStandingTransform?this.display.stageParameters.sittingToStandingTransform:null}getProjectionMatrix(e){if(e==="left")return this.frame.leftProjectionMatrix;if(e==="right")return this.frame.rightProjectionMatrix;if(e==="none")return this.frame.leftProjectionMatrix;throw new Error("eye must be of type 'left' or 'right'")}getViewport(e,t,i,r){const s=this.sessions.get(e),{width:a,height:o}=i.context.canvas;if(!s.immersive)return r.x=r.y=0,r.width=a,r.height=o,!0;if(t==="left"||t==="none")r.x=0;else if(t==="right")r.x=a/2;else return!1;return r.y=0,r.width=a/2,r.height=o,!0}getBasePoseMatrix(){let{position:e,orientation:t}=this.frame.pose;return!e&&!t?this.baseModelMatrix:(e||(e=this.tempVec3,e[0]=e[1]=e[2]=0),dr(this.baseModelMatrix,t,e),this.baseModelMatrix)}getBaseViewMatrix(e){if(e==="left"||e==="none")return this.frame.leftViewMatrix;if(e==="right")return this.frame.rightViewMatrix;throw new Error("eye must be of type 'left' or 'right'")}getInputSources(){let e=[];for(let t in this.gamepadInputSources)e.push(this.gamepadInputSources[t].inputSource);return e}getInputPose(e,t,i){if(!t)return null;for(let r in this.gamepadInputSources){let s=this.gamepadInputSources[r];if(s.inputSource===e)return s.getXRPose(t,i)}return null}onWindowResize(){}onVRDisplayPresentChange(e){this.display.isPresenting||this.sessions.forEach(t=>{if(t.immersive&&!t.ended){if(t.modifiedCanvasLayer){const i=t.baseLayer.context.canvas;document.body.removeChild(i),i.setAttribute("style","")}this.immersiveSession===t&&(this.immersiveSession=null),this.dispatchEvent("@@webxr-polyfill/vr-present-end",t.id)}})}}class J0 extends Ic{constructor(e,t){const i=new P0(t||{});super(e,i),this.display=i,this.frame={rightViewMatrix:new Float32Array(16),leftViewMatrix:new Float32Array(16),rightProjectionMatrix:new Float32Array(16),leftProjectionMatrix:new Float32Array(16),pose:null,timestamp:null}}}let eg=0;class tg{constructor(e,t){this.mode=e,this.enabledFeatures=t,this.ended=null,this.baseLayer=null,this.id=++eg}}class ng extends uo{constructor(e){super(e),this.sessions=new Map,this.projectionMatrix=ei(),this.identityMatrix=ei()}onBaseLayerSet(e,t){const i=this.sessions.get(e);i.baseLayer=t}isSessionSupported(e){return e=="inline"}isFeatureSupported(e){switch(e){case"viewer":return!0;default:return!1}}async requestSession(e,t){if(!this.isSessionSupported(e))return Promise.reject();const i=new tg(e,t);return this.sessions.set(i.id,i),Promise.resolve(i.id)}requestAnimationFrame(e){return window.requestAnimationFrame(e)}cancelAnimationFrame(e){window.cancelAnimationFrame(e)}onFrameStart(e,t){const i=this.sessions.get(e);if(i.baseLayer){const r=i.baseLayer.context.canvas;vc(this.projectionMatrix,t.inlineVerticalFieldOfView,r.width/r.height,t.depthNear,t.depthFar)}}onFrameEnd(e){}async endSession(e){const t=this.sessions.get(e);t.ended=!0}doesSessionSupportReferenceSpace(e,t){const i=this.sessions.get(e);return i.ended?!1:i.enabledFeatures.has(t)}requestStageBounds(){return null}async requestFrameOfReferenceTransform(e,t){return null}getProjectionMatrix(e){return this.projectionMatrix}getViewport(e,t,i,r){this.sessions.get(e);const{width:s,height:a}=i.context.canvas;return r.x=r.y=0,r.width=s,r.height=a,!0}getBasePoseMatrix(){return this.identityMatrix}getBaseViewMatrix(e){return this.identityMatrix}getInputSources(){return[]}getInputPose(e,t,i){return null}onWindowResize(){}}const ig=async function(n){let e=null;if("getVRDisplays"in n.navigator)try{const t=await n.navigator.getVRDisplays();t&&t.length&&(e=new Ic(n,t[0]))}catch{}return e},rg=async function(n,e){if(e.webvr){let i=await ig(n);if(i)return i}let t=b0(n);return t&&e.cardboard||!t&&e.allowCardboardOnDesktop?(n.VRFrameData||(n.VRFrameData=function(){this.rightViewMatrix=new Float32Array(16),this.leftViewMatrix=new Float32Array(16),this.rightProjectionMatrix=new Float32Array(16),this.leftProjectionMatrix=new Float32Array(16),this.pose=null}),new J0(n,e.cardboardConfig)):new ng(n)},sg={global:Sc,webvr:!0,cardboard:!0,cardboardConfig:null,allowCardboardOnDesktop:!1},Zr=["navigator","HTMLCanvasElement","WebGLRenderingContext"];class ag{constructor(e={}){this.config=Object.freeze(Object.assign({},sg,e)),this.global=this.config.global,this.nativeWebXR="xr"in this.global.navigator,this.injected=!1,this._injectPolyfill(this.global)}_injectPolyfill(e){if(!Zr.every(t=>!!e[t]))throw new Error(`Global must have the following attributes : ${Zr}`);for(const t of Object.keys(cr))e[t]!==void 0?console.warn(`${t} already defined on global.`):e[t]=cr[t];Ml(e.WebGLRenderingContext),El(e.HTMLCanvasElement),e.OffscreenCanvas&&El(e.OffscreenCanvas),e.WebGL2RenderingContext&&Ml(e.WebGL2RenderingContext),window.isSecureContext||console.warn(`WebXR Polyfill Warning:
This page is not running in a secure context (https:// or localhost)!
This means that although the page may be able to use the WebXR Polyfill it will
not be able to use native WebXR implementations, and as such will not be able to
access dedicated VR or AR hardware, and will not be able to take advantage of
any performance improvements a native WebXR implementation may offer. Please
host this content on a secure origin for the best user experience.
`),this.injected=!0,this._patchNavigatorXR()}_patchNavigatorXR(){let e=rg(this.global,this.config);this.xr=new cr.XRSystem(e),Object.defineProperty(this.global.navigator,"xr",{value:this.xr,configurable:!0})}_injectCompatibilityShims(e){if(!Zr.every(t=>!!e[t]))throw new Error(`Global must have the following attributes : ${Zr}`);if(e.navigator.xr&&"supportsSession"in e.navigator.xr&&!("isSessionSupported"in e.navigator.xr)){let t=e.navigator.xr.supportsSession;e.navigator.xr.isSessionSupported=function(i){return t.call(this,i).then(()=>!0).catch(()=>!1)},e.navigator.xr.supportsSession=function(i){return console.warn("navigator.xr.supportsSession() is deprecated. Please call navigator.xr.isSessionSupported() instead and check the boolean value returned when the promise resolves."),t.call(this,i)}}}}var og=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function lg(n,e){return e={exports:{}},n(e,e.exports),e.exports}var Fc=lg(function(n){(function(e,t){var i=Math.pow(2,-24),r=Math.pow(2,32),s=Math.pow(2,53);function a(h){var d=new ArrayBuffer(256),m=new DataView(d),v,A=0;function S(L){for(var k=d.byteLength,N=A+L;k<N;)k*=2;if(k!==d.byteLength){var B=m;d=new ArrayBuffer(k),m=new DataView(d);for(var J=A+3>>2,Q=0;Q<J;++Q)m.setUint32(Q*4,B.getUint32(Q*4))}return v=L,m}function x(){A+=v}function f(L){x(S(8).setFloat64(A,L))}function p(L){x(S(1).setUint8(A,L))}function T(L){for(var k=S(L.length),N=0;N<L.length;++N)k.setUint8(A+N,L[N]);x()}function M(L){x(S(2).setUint16(A,L))}function R(L){x(S(4).setUint32(A,L))}function G(L){var k=L%r,N=(L-k)/r,B=S(8);B.setUint32(A,N),B.setUint32(A+4,k),x()}function D(L,k){k<24?p(L<<5|k):k<256?(p(L<<5|24),p(k)):k<65536?(p(L<<5|25),M(k)):k<4294967296?(p(L<<5|26),R(k)):(p(L<<5|27),G(k))}function I(L){var k;if(L===!1)return p(244);if(L===!0)return p(245);if(L===null)return p(246);if(L===t)return p(247);switch(typeof L){case"number":if(Math.floor(L)===L){if(0<=L&&L<=s)return D(0,L);if(-s<=L&&L<0)return D(1,-(L+1))}return p(251),f(L);case"string":var N=[];for(k=0;k<L.length;++k){var B=L.charCodeAt(k);B<128?N.push(B):B<2048?(N.push(192|B>>6),N.push(128|B&63)):B<55296?(N.push(224|B>>12),N.push(128|B>>6&63),N.push(128|B&63)):(B=(B&1023)<<10,B|=L.charCodeAt(++k)&1023,B+=65536,N.push(240|B>>18),N.push(128|B>>12&63),N.push(128|B>>6&63),N.push(128|B&63))}return D(3,N.length),T(N);default:var J;if(Array.isArray(L))for(J=L.length,D(4,J),k=0;k<J;++k)I(L[k]);else if(L instanceof Uint8Array)D(2,L.length),T(L);else{var Q=Object.keys(L);for(J=Q.length,D(5,J),k=0;k<J;++k){var ee=Q[k];I(ee),I(L[ee])}}}}if(I(h),"slice"in d)return d.slice(0,A);for(var H=new ArrayBuffer(A),C=new DataView(H),w=0;w<A;++w)C.setUint8(w,m.getUint8(w));return H}function o(h,d,m){var v=new DataView(h),A=0;typeof d!="function"&&(d=function(N){return N}),typeof m!="function"&&(m=function(){return t});function S(N,B){return A+=B,N}function x(N){return S(new Uint8Array(h,A,N),N)}function f(){var N=new ArrayBuffer(4),B=new DataView(N),J=R(),Q=J&32768,ee=J&31744,Z=J&1023;if(ee===31744)ee=261120;else if(ee!==0)ee+=114688;else if(Z!==0)return Z*i;return B.setUint32(0,Q<<16|ee<<13|Z<<13),B.getFloat32(0)}function p(){return S(v.getFloat32(A),4)}function T(){return S(v.getFloat64(A),8)}function M(){return S(v.getUint8(A),1)}function R(){return S(v.getUint16(A),2)}function G(){return S(v.getUint32(A),4)}function D(){return G()*r+G()}function I(){return v.getUint8(A)!==255?!1:(A+=1,!0)}function H(N){if(N<24)return N;if(N===24)return M();if(N===25)return R();if(N===26)return G();if(N===27)return D();if(N===31)return-1;throw"Invalid length encoding"}function C(N){var B=M();if(B===255)return-1;var J=H(B&31);if(J<0||B>>5!==N)throw"Invalid indefinite length element";return J}function w(N,B){for(var J=0;J<B;++J){var Q=M();Q&128&&(Q<224?(Q=(Q&31)<<6|M()&63,B-=1):Q<240?(Q=(Q&15)<<12|(M()&63)<<6|M()&63,B-=2):(Q=(Q&15)<<18|(M()&63)<<12|(M()&63)<<6|M()&63,B-=3)),Q<65536?N.push(Q):(Q-=65536,N.push(55296|Q>>10),N.push(56320|Q&1023))}}function L(){var N=M(),B=N>>5,J=N&31,Q,ee;if(B===7)switch(J){case 25:return f();case 26:return p();case 27:return T()}if(ee=H(J),ee<0&&(B<2||6<B))throw"Invalid length";switch(B){case 0:return ee;case 1:return-1-ee;case 2:if(ee<0){for(var Z=[],pe=0;(ee=C(B))>=0;)pe+=ee,Z.push(x(ee));var Ae=new Uint8Array(pe),Se=0;for(Q=0;Q<Z.length;++Q)Ae.set(Z[Q],Se),Se+=Z[Q].length;return Ae}return x(ee);case 3:var ze=[];if(ee<0)for(;(ee=C(B))>=0;)w(ze,ee);else w(ze,ee);return String.fromCharCode.apply(null,ze);case 4:var Xe;if(ee<0)for(Xe=[];!I();)Xe.push(L());else for(Xe=new Array(ee),Q=0;Q<ee;++Q)Xe[Q]=L();return Xe;case 5:var te={};for(Q=0;Q<ee||ee<0&&!I();++Q){var ue=L();te[ue]=L()}return te;case 6:return d(L(),ee);case 7:switch(ee){case 20:return!1;case 21:return!0;case 22:return null;case 23:return t;default:return m(ee)}}}var k=L();if(A!==h.byteLength)throw"Remaining bytes";return k}var u={encode:a,decode:o};n.exports?n.exports=u:e.CBOR||(e.CBOR=u)})(og)});/**
 * This files defines the HoloPlayClient class and Message class.
 *
 * Copyright (c) [2024] [Looking Glass Factory]
 *
 * @link    https://lookingglassfactory.com/
 * @file    This files defines the HoloPlayClient class and Message class.
 * @author  Looking Glass Factory.
 * @version 0.0.11
 * @license SEE LICENSE IN LICENSE.txt
 */const cg=typeof window>"u"?require("ws"):window.WebSocket;class ug{constructor(e,t,i,r=!1,s,a,o){this.reqs=[],this.reps=[],this.requestId=this.getRequestId(),this.debug=r,this.isGreedy=a,this.errCallback=t,this.closeCallback=i,this.alwaysdebug=!1,this.isConnected=!1;let u=null;s||a||o?u=new hg(s,a,o,this.debug):(r&&(this.alwaysdebug=!0),typeof e=="function"&&(u=new dg)),this.openWebsocket(u,e)}sendMessage(e,t=60){this.alwaysdebug&&(e.cmd.debug=!0);let i=e.toCbor();return this.sendRequestObj(i,t)}disconnect(){this.ws.close()}openWebsocket(e=null,t=null){this.ws=new cg("ws://localhost:11222/driver",["rep.sp.nanomsg.org"]),this.ws.parent=this,this.ws.binaryType="arraybuffer",this.ws.onmessage=this.messageHandler,this.ws.onopen=()=>{this.isConnected=!0,this.debug&&console.log("socket open"),e!=null&&this.sendMessage(e).then(t)},this.ws.onerror=this.onSocketError,this.ws.onclose=this.onClose}sendRequestObj(e,t){return new Promise((i,r)=>{let s={id:this.requestId++,parent:this,payload:e,success:i,error:r,send:function(){this.debug&&console.log("attemtping to send request with ID "+this.id),this.timeout=setTimeout(s.send.bind(this),t*1e3);let a=new Uint8Array(e.byteLength+4);new DataView(a.buffer).setUint32(0,this.id),a.set(new Uint8Array(this.payload),4),this.parent.ws.send(a.buffer)}};this.reqs.push(s),s.send()})}messageHandler(e){let t=e.data;if(t.byteLength<4)return;let r=new DataView(t).getUint32(0);if(r<2147483648){this.parent.err("bad nng header");return}let s=this.parent.findReqIndex(r);if(s==-1){this.parent.err("got reply that doesn't match known request!");return}let a={id:r,payload:Fc.decode(t.slice(4))};a.payload.error==0?this.parent.reqs[s].success(a.payload):this.parent.reqs[s].error(a.payload),clearTimeout(this.parent.reqs[s].timeout),this.parent.reqs.splice(s,1),this.parent.reps.push(a),this.debug&&console.log(a.payload)}getRequestId(){return Math.floor(this.prng()*2147483647)+2147483648}onClose(e){this.parent.isConnected=!1,this.parent.debug&&console.log("socket closed"),typeof this.parent.closeCallback=="function"&&this.parent.closeCallback(e)}onSocketError(e){this.parent.debug&&console.log(e),typeof this.parent.errCallback=="function"&&this.parent.errCallback(e)}err(e){this.debug&&console.log("[DRIVER ERROR]"+e)}findReqIndex(e){let t=0;for(;t<this.reqs.length;t++)if(this.reqs[t].id==e)return t;return-1}prng(){return this.rng==null&&(this.rng=fg()),this.rng()}}class Uc{constructor(e,t){this.cmd=e,this.bin=t}toCbor(){return Fc.encode(this)}}class hg extends Uc{constructor(e="",t=!1,i="",r=!1){let s={init:{}};e!=""&&(s.init.appid=e),i!=""&&(s.init.onclose=i),t&&(s.init.greedy=!0),r&&(s.init.debug=!0),super(s,null)}}class dg extends Uc{constructor(){let e={info:{}};super(e,null)}}function fg(){function n(r){for(var s=0,a=1779033703^r.length;s<r.length;s++)a=Math.imul(a^r.charCodeAt(s),3432918353),a=a<<13|a>>>19;return function(){return a=Math.imul(a^a>>>16,2246822507),a=Math.imul(a^a>>>13,3266489909),(a^=a>>>16)>>>0}}function e(r,s,a,o){return()=>{var u=s<<9,h=r*5;return h=(h<<7|h>>>25)*9,a^=r,o^=s,s^=a,r^=o,a^=u,o=o<<11|o>>>21,(h>>>0)/4294967296}}var t=Date.now(),i=n(t.toString());return e(i(),i(),i(),i())}function Rt(n,...e){let t=n[0];for(let i=1;i<n.length;++i){const r=e[i-1];t+=typeof r=="number"?r.toPrecision(10):r,t+=n[i]}return t}function pg(n){const e=Rt`${n.pitch}`,t=Rt`${n.tilt}`,i=Rt`${n.calibration.center.value}`,r=Rt`${n.subp}`,s=Rt`${n.numViews}`,a=Rt`${n.quiltWidth}`,o=Rt`${n.quiltHeight}`,u=`${Math.round(n.calibration.subpixelCells.length)}`,h=`${Math.round(n.subpixelMode)}`,d=Rt`${n.framebufferWidth}`,m=Rt`${n.framebufferHeight}`,v=Rt`${n.tileHeight}`,A=Rt`${n.tileWidth}`,S=Rt`${n.quiltWidth}`,x=Rt`${n.quiltHeight}`,f=Rt`${n.calibration.screenW.value}`,p=Rt`${n.calibration.screenH.value}`,T=`${Math.round(n.filterMode)}`,M=Rt`${n.gaussianSigma}`;return`#version 300 es
    precision mediump float;

    uniform int u_viewType;
    uniform sampler2D u_texture;
    in vec2 v_texcoord;

    const int MAX_SUBPIXELS = 60;
    uniform float subpixelData[MAX_SUBPIXELS];

    const int subpixelCellCount = ${u};
    const int cellPatternType = ${h};
    const int filter_mode = ${T};
    const float gaussian_sigma = ${M};
    const float tileCount = ${s};
    const float focus = 0.0;

    const vec2 quiltViewPortion = vec2(
      ${S*A/d},
      ${x*v/m});

    int GetCellForPixel(vec2 screen_uv)
    {
        int xPos = int(screen_uv.x * ${f});
        int yPos = int(screen_uv.y * ${p});
        int cell;
    
        if(cellPatternType == 0)
        {
            cell = 0;
        }
        else if(cellPatternType == 1)
        {
            // Checkerboard pattern AB
            //                      BA
            if ((yPos % 2 == 0 && xPos % 2 == 0) || (yPos % 2 != 0 && xPos % 2 != 0)) {
                cell = 0;
            } else {
                cell = 1;
            }
        }
        else if(cellPatternType == 2)
        {
            cell = xPos % 2;
        }
        else if(cellPatternType == 3)
        {
            int offset = (xPos % 2) * 2;
            cell = ((yPos + offset) % 4);
        }
        else if(cellPatternType == 4)
        {
            cell = yPos % 2;
        }
    
        return cell % subpixelCellCount;
    }

    vec2 GetQuiltCoordinates(vec2 tile_uv, int viewIndex)
    {
        float totalTiles = tileCount;
        float floaty = float(viewIndex);
        float view = clamp(floaty, 0.0, totalTiles);
        // on some platforms this is required to fix some precision issue???
        float tx = ${a} - 0.00001; // just an incredibly dumb bugfix
        float tileXIndex = mod(view, tx);
        float tileYIndex = floor(view / tx);
    
        float quiltCoordU = ((tileXIndex + tile_uv.x) / tx) * quiltViewPortion.x;
        float quiltCoordV = ((tileYIndex + tile_uv.y) / ${o}) * quiltViewPortion.y;
    
        vec2 quilt_uv = vec2(quiltCoordU, quiltCoordV);
    
        return quilt_uv;
    }

    float GetPixelShift(float val, int subPixel, int axis, int cell)
    {
        int index = cell * 6 + subPixel * 2 + axis;
        float offset = subpixelData[index];

        return val + offset;
    }

    vec3 GetSubpixelViews(vec2 screen_uv) {
        vec3 views = vec3(0.0);

        // calculate x contribution for each cell
        if(subpixelCellCount <= 0)
        {
            views[0] = screen_uv.x + ${r} * 0.0;
            views[1] = screen_uv.x + ${r} * 1.0;
            views[2] = screen_uv.x + ${r} * 2.0;
                
    
            // calculate y contribution for each cell
            views[0] += screen_uv.y * ${t};
            views[1] += screen_uv.y * ${t};
            views[2] += screen_uv.y * ${t};
        } else {
            // get the cell type for this screen space pixel
            int cell = GetCellForPixel(screen_uv);
    
            // calculate x contribution for each cell
            views[0]  = GetPixelShift(screen_uv.x, 0, 0, cell);
            views[1]  = GetPixelShift(screen_uv.x, 1, 0, cell);
            views[2]  = GetPixelShift(screen_uv.x, 2, 0, cell);
    
            // calculate y contribution for each cell
            views[0] += GetPixelShift(screen_uv.y, 0, 1, cell) * ${t};
            views[1] += GetPixelShift(screen_uv.y, 1, 1, cell) * ${t};
            views[2] += GetPixelShift(screen_uv.y, 2, 1, cell) * ${t};
        }

        views *= vec3(${e});
        views -= vec3(${i});
        views = vec3(1.0) - fract(views);

        views = clamp(views, vec3(0.00001), vec3(0.999999));
    
        return views;
    }
    
    // this is the simplest sampling mode where we just cast the viewIndex to int and take the color from that tile.
    vec4 GetViewsColors(vec2 tile_uv, vec3 views)
    {
        vec4 color = vec4(0, 0, 0, 1);
    
        for(int channel = 0; channel < 3; channel++)
        {
            int viewIndex = int(views[channel] * tileCount);
    
            float viewDir = views[channel] * 2.0 - 1.0;
            vec2 focused_uv = tile_uv;
            focused_uv.x += viewDir * focus;
    
            vec2 quilt_uv = GetQuiltCoordinates(focused_uv, viewIndex);
            color[channel] = texture(u_texture, quilt_uv)[channel];
        }
    
        return color;
    }

    //view filtering

    vec4 OldViewFiltering(vec2 tile_uv, vec3 views)
    {
        vec3 viewIndicies = views * tileCount;
        float viewSpaceTileSize = 1.0 / tileCount;
    
        // the idea here is to sample the closest two views and lerp between them
        vec3 leftViews = views;
        vec3 rightViews = leftViews + viewSpaceTileSize;
    
        vec4 leftColor = GetViewsColors(tile_uv, leftViews);
        vec4 rightColor = GetViewsColors(tile_uv, rightViews);
    
        vec3 leftRightLerp = viewIndicies - floor(viewIndicies);
    
        return vec4(
            mix(leftColor.x, rightColor.x, leftRightLerp.x),
            mix(leftColor.y, rightColor.y, leftRightLerp.y),
            mix(leftColor.z, rightColor.z, leftRightLerp.z),
            1.0
        );
    }

    vec4 GaussianViewFiltering(vec2 tile_uv, vec3 views)
    {
        vec3 viewIndicies = views * tileCount;
        float viewSpaceTileSize = 1.0 / tileCount;
    
        // this is just sampling a center view and the left and right view
        vec3 centerViews = views;
        vec3 leftViews = centerViews - viewSpaceTileSize;
        vec3 rightViews = centerViews + viewSpaceTileSize;
    
        vec4 centerColor = GetViewsColors(tile_uv, centerViews);
        vec4 leftColor   = GetViewsColors(tile_uv, leftViews);
        vec4 rightColor  = GetViewsColors(tile_uv, rightViews);
    
        // Calculate the effective discrete view directions based on the tileCount
        vec3 centerSnappedViews = floor(centerViews * tileCount) / tileCount;
        vec3 leftSnappedViews = floor(leftViews * tileCount) / tileCount;
        vec3 rightSnappedViews = floor(rightViews * tileCount) / tileCount;
    
        // Gaussian weighting
        float sigma = gaussian_sigma;
        float multiplier = 2.0 * sigma * sigma;
    
        vec3 centerDiff = views - centerSnappedViews;
        vec3 leftDiff = views - leftSnappedViews;
        vec3 rightDiff = views - rightSnappedViews;
    
        vec3 centerWeight = exp(-centerDiff * centerDiff / multiplier);
        vec3 leftWeight = exp(-leftDiff * leftDiff / multiplier);
        vec3 rightWeight = exp(-rightDiff * rightDiff / multiplier);
    
        // Normalize the weights so they sum to 1 for each channel
        vec3 totalWeight = centerWeight + leftWeight + rightWeight;
        centerWeight /= totalWeight;
        leftWeight /= totalWeight;
        rightWeight /= totalWeight;
    
        // Weighted averaging based on Gaussian weighting for each channel
        vec4 outputColor = vec4(
            centerColor.r * centerWeight.x + leftColor.r * leftWeight.x + rightColor.r * rightWeight.x,
            centerColor.g * centerWeight.y + leftColor.g * leftWeight.y + rightColor.g * rightWeight.y,
            centerColor.b * centerWeight.z + leftColor.b * leftWeight.z + rightColor.b * rightWeight.z,
            1.0
        );
    
        return outputColor;
    }

    vec4 NGaussianViewFiltering(vec2 tile_uv, vec3 views, int n)
    {
        vec3 viewIndicies = views * tileCount;
        float viewSpaceTileSize = 1.0 / tileCount;
    
        float sigma = gaussian_sigma;  // Adjust as needed
        float multiplier = 2.0 * sigma * sigma;
    
        vec4 outputColor = vec4(0.0);
    
        for(int i = -n; i <= n; i++)
        {
            float offset = float(i) * viewSpaceTileSize;
            vec3 offsetViews = views + offset;
    
            vec4 sampleColor = GetViewsColors(tile_uv, offsetViews);
    
            // Calculate the effective discrete view directions based on the tileCount
            vec3 snappedViews = floor(offsetViews * tileCount) / tileCount;
    
            // Calculate Gaussian weights
            vec3 diff = views - snappedViews;
            vec3 weight = exp(-diff * diff / multiplier);
    
            // Accumulate color
            outputColor.rgb += sampleColor.rgb * weight;
        }
        // Normalize the color
        vec3 totalWeight = vec3(0.0);
        for(int i = -n; i <= n; i++)
        {
            float offset = float(i) * viewSpaceTileSize;
            vec3 offsetViews = views + offset;
    
            // Calculate the effective discrete view directions based on the tileCount
            vec3 snappedViews = floor(offsetViews * tileCount) / tileCount;
    
            // Calculate Gaussian weights
            vec3 diff = views - snappedViews;
            vec3 weight = exp(-diff * diff / multiplier);
    
            totalWeight += weight;
        }
    
        outputColor.rgb /= totalWeight;
        outputColor.a = 1.0;
    
        return outputColor;
    }

    float remap(float value, float from1, float to1, float from2, float to2) {
      return (value - from1) / (to1 - from1) * (to2 - from2) + from2;
    }

    out vec4 color;

    void main() {
      if (u_viewType == 2) { // "quilt" view
        color = texture(u_texture, v_texcoord);
        return;
      }
      if (u_viewType == 1) { // middle view
        color = texture(u_texture, GetQuiltCoordinates(v_texcoord.xy, ${Math.round(s/2)}));
        return;
      }

    vec3 views = GetSubpixelViews(v_texcoord);

    if(filter_mode == 0)
        {
            color = GetViewsColors(v_texcoord, views);
        }
        else if(filter_mode == 1)
        {
            color = OldViewFiltering(v_texcoord, views);
        }
        else if(filter_mode == 2)
        {
            color = GaussianViewFiltering(v_texcoord, views);
        }
        else if(filter_mode == 3)
        {
            color = NGaussianViewFiltering(v_texcoord, views, 10);
        }
    }
  `}var mg=1e-6,Dl=typeof Float32Array<"u"?Float32Array:Array;function Ln(){var n=new Dl(16);return Dl!=Float32Array&&(n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0),n[0]=1,n[5]=1,n[10]=1,n[15]=1,n}function gg(n,e,t,i,r,s,a,o,u,h,d,m,v,A,S,x,f){return n[0]=e,n[1]=t,n[2]=i,n[3]=r,n[4]=s,n[5]=a,n[6]=o,n[7]=u,n[8]=h,n[9]=d,n[10]=m,n[11]=v,n[12]=A,n[13]=S,n[14]=x,n[15]=f,n}function Il(n,e){var t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],u=e[6],h=e[7],d=e[8],m=e[9],v=e[10],A=e[11],S=e[12],x=e[13],f=e[14],p=e[15],T=t*o-i*a,M=t*u-r*a,R=t*h-s*a,G=i*u-r*o,D=i*h-s*o,I=r*h-s*u,H=d*x-m*S,C=d*f-v*S,w=d*p-A*S,L=m*f-v*x,k=m*p-A*x,N=v*p-A*f,B=T*N-M*k+R*L+G*w-D*C+I*H;return B?(B=1/B,n[0]=(o*N-u*k+h*L)*B,n[1]=(r*k-i*N-s*L)*B,n[2]=(x*I-f*D+p*G)*B,n[3]=(v*D-m*I-A*G)*B,n[4]=(u*w-a*N-h*C)*B,n[5]=(t*N-r*w+s*C)*B,n[6]=(f*R-S*I-p*M)*B,n[7]=(d*I-v*R+A*M)*B,n[8]=(a*k-o*w+h*H)*B,n[9]=(i*w-t*k-s*H)*B,n[10]=(S*D-x*R+p*T)*B,n[11]=(m*R-d*D-A*T)*B,n[12]=(o*C-a*L-u*H)*B,n[13]=(t*L-i*C+r*H)*B,n[14]=(x*M-S*G-f*T)*B,n[15]=(d*G-m*M+v*T)*B,n):null}function Fl(n,e,t){var i=t[0],r=t[1],s=t[2],a=void 0,o=void 0,u=void 0,h=void 0,d=void 0,m=void 0,v=void 0,A=void 0,S=void 0,x=void 0,f=void 0,p=void 0;return e===n?(n[12]=e[0]*i+e[4]*r+e[8]*s+e[12],n[13]=e[1]*i+e[5]*r+e[9]*s+e[13],n[14]=e[2]*i+e[6]*r+e[10]*s+e[14],n[15]=e[3]*i+e[7]*r+e[11]*s+e[15]):(a=e[0],o=e[1],u=e[2],h=e[3],d=e[4],m=e[5],v=e[6],A=e[7],S=e[8],x=e[9],f=e[10],p=e[11],n[0]=a,n[1]=o,n[2]=u,n[3]=h,n[4]=d,n[5]=m,n[6]=v,n[7]=A,n[8]=S,n[9]=x,n[10]=f,n[11]=p,n[12]=a*i+d*r+S*s+e[12],n[13]=o*i+m*r+x*s+e[13],n[14]=u*i+v*r+f*s+e[14],n[15]=h*i+A*r+p*s+e[15]),n}function Ul(n,e,t,i){var r=i[0],s=i[1],a=i[2],o=Math.sqrt(r*r+s*s+a*a),u=void 0,h=void 0,d=void 0,m=void 0,v=void 0,A=void 0,S=void 0,x=void 0,f=void 0,p=void 0,T=void 0,M=void 0,R=void 0,G=void 0,D=void 0,I=void 0,H=void 0,C=void 0,w=void 0,L=void 0,k=void 0,N=void 0,B=void 0,J=void 0;return o<mg?null:(o=1/o,r*=o,s*=o,a*=o,u=Math.sin(t),h=Math.cos(t),d=1-h,m=e[0],v=e[1],A=e[2],S=e[3],x=e[4],f=e[5],p=e[6],T=e[7],M=e[8],R=e[9],G=e[10],D=e[11],I=r*r*d+h,H=s*r*d+a*u,C=a*r*d-s*u,w=r*s*d-a*u,L=s*s*d+h,k=a*s*d+r*u,N=r*a*d+s*u,B=s*a*d-r*u,J=a*a*d+h,n[0]=m*I+x*H+M*C,n[1]=v*I+f*H+R*C,n[2]=A*I+p*H+G*C,n[3]=S*I+T*H+D*C,n[4]=m*w+x*L+M*k,n[5]=v*w+f*L+R*k,n[6]=A*w+p*L+G*k,n[7]=S*w+T*L+D*k,n[8]=m*N+x*B+M*J,n[9]=v*N+f*B+R*J,n[10]=A*N+p*B+G*J,n[11]=S*N+T*B+D*J,e!==n&&(n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n)}function ra(n,e){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=e[0],n[13]=e[1],n[14]=e[2],n[15]=1,n}function vg(n,e,t,i,r){var s=1/Math.tan(e/2),a=void 0;return n[0]=s/t,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=s,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=-1,n[12]=0,n[13]=0,n[15]=0,r!=null&&r!==1/0?(a=1/(i-r),n[10]=(r+i)*a,n[14]=2*r*i*a):(n[10]=-1,n[14]=-2*i),n}var Ag=Object.defineProperty,_g=(n,e,t)=>e in n?Ag(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Ft=(n,e,t)=>(_g(n,typeof e!="symbol"?e+"":e,t),t);const Xa=1.6;var qa;(function(n){n[n.Swizzled=0]="Swizzled",n[n.Center=1]="Center",n[n.Quilt=2]="Quilt"})(qa||(qa={}));class xg extends EventTarget{constructor(e){super(),Ft(this,"_calibration",{configVersion:"1.0",pitch:{value:45},slope:{value:-5},center:{value:-.5},viewCone:{value:40},invView:{value:1},verticalAngle:{value:0},DPI:{value:338},screenW:{value:3840},screenH:{value:2160},flipImageX:{value:0},flipImageY:{value:0},flipSubp:{value:0},serial:"",subpixelCells:[],CellPatternMode:{value:0}}),Ft(this,"_viewControls",{tileHeight:512,numViews:48,trackballX:0,trackballY:0,targetX:0,targetY:Xa,targetZ:-.5,targetDiam:2,fovy:14/180*Math.PI,depthiness:1.25,inlineView:qa.Center,capturing:!1,quiltResolution:null,columns:null,rows:null,popup:null,XRSession:null,lkgCanvas:null,appCanvas:null,subpixelMode:1,filterMode:1,gaussianSigma:.01}),Ft(this,"LookingGlassDetected"),this._viewControls={...this._viewControls,...e},this.syncCalibration()}syncCalibration(){new ug(e=>{if(e.devices.length<1){console.log("No Looking Glass devices found");return}e.devices.length>1&&console.log("More than one Looking Glass device found... using the first one"),this.calibration=e.devices[0].calibration})}addEventListener(e,t,i){super.addEventListener(e,t,i)}onConfigChange(){this.dispatchEvent(new Event("on-config-changed"))}get calibration(){return this._calibration}set calibration(e){this._calibration={...this._calibration,...e},this.onConfigChange()}updateViewControls(e){e!=null&&(this._viewControls={...this._viewControls,...e},this.onConfigChange())}get tileHeight(){return Math.round(this.framebufferHeight/this.quiltHeight)}get quiltResolution(){if(this._viewControls.quiltResolution!=null)return{width:this._viewControls.quiltResolution.width,height:this._viewControls.quiltResolution.height};{const e=this._calibration.serial;switch(!0){case e.startsWith("LKG-2K"):return{width:4096,height:4096};case e.startsWith("LKG-4K"):return{width:4096,height:4096};case e.startsWith("LKG-8K"):return{width:8192,height:8192};case e.startsWith("LKG-P"):return{width:3360,height:3360};case e.startsWith("LKG-A"):return{width:4096,height:4096};case e.startsWith("LKG-B"):return{width:8192,height:8192};case e.startsWith("LKG-D"):return{width:8192,height:8192};case e.startsWith("LKG-F"):return{width:3360,height:3360};case e.startsWith("LKG-E"):return{width:4092,height:4092};case e.startsWith("LKG-H"):return{width:5995,height:6e3};case e.startsWith("LKG-J"):return{width:5999,height:5999};case e.startsWith("LKG-K"):return{width:8184,height:8184};case e.startsWith("LKG-L"):return{width:8190,height:8190};default:return{width:4096,height:4096}}}}set quiltResolution(e){this.updateViewControls({quiltResolution:e})}get numViews(){return this.quiltWidth*this.quiltHeight}get targetX(){return this._viewControls.targetX}set targetX(e){this.updateViewControls({targetX:e})}get targetY(){return this._viewControls.targetY}set targetY(e){this.updateViewControls({targetY:e})}get targetZ(){return this._viewControls.targetZ}set targetZ(e){this.updateViewControls({targetZ:e})}get trackballX(){return this._viewControls.trackballX}set trackballX(e){this.updateViewControls({trackballX:e})}get trackballY(){return this._viewControls.trackballY}set trackballY(e){this.updateViewControls({trackballY:e})}get targetDiam(){return this._viewControls.targetDiam}set targetDiam(e){this.updateViewControls({targetDiam:e})}get fovy(){return this._viewControls.fovy}set fovy(e){this.updateViewControls({fovy:e})}get depthiness(){return this._viewControls.depthiness}set depthiness(e){this.updateViewControls({depthiness:e})}get inlineView(){return this._viewControls.inlineView}set inlineView(e){this.updateViewControls({inlineView:e})}get capturing(){return this._viewControls.capturing}set capturing(e){this.updateViewControls({capturing:e})}get subpixelMode(){return this._viewControls.subpixelMode}set subpixelMode(e){this.updateViewControls({subpixelMode:e})}get filterMode(){return this._viewControls.filterMode}set filterMode(e){this.updateViewControls({filterMode:e})}get gaussianSigma(){return this._viewControls.gaussianSigma}set gaussianSigma(e){this.updateViewControls({gaussianSigma:e})}get popup(){return this._viewControls.popup}set popup(e){this.updateViewControls({popup:e})}get XRSession(){return this._viewControls.XRSession}set XRSession(e){this.updateViewControls({XRSession:e})}get lkgCanvas(){return this._viewControls.lkgCanvas}set lkgCanvas(e){this.updateViewControls({lkgCanvas:e})}get appCanvas(){return this._viewControls.appCanvas}set appCanvas(e){this.updateViewControls({appCanvas:e})}get columns(){return this._viewControls.columns}set columns(e){this.updateViewControls({columns:e})}get rows(){return this._viewControls.rows}set rows(e){this.updateViewControls({rows:e})}get aspect(){return this._calibration.screenW.value/this._calibration.screenH.value}get tileWidth(){return Math.round(this.framebufferWidth/this.quiltWidth)}get framebufferWidth(){return this.quiltResolution.width}get quiltWidth(){if(this._viewControls.columns!=null)return this._viewControls.columns;const e=this._calibration.serial;switch(!0){case e.startsWith("LKG-2K"):return 5;case e.startsWith("LKG-4K"):return 5;case e.startsWith("LKG-8K"):return 5;case e.startsWith("LKG-P"):return 8;case e.startsWith("LKG-A"):return 5;case e.startsWith("LKG-B"):return 5;case e.startsWith("LKG-D"):return 8;case e.startsWith("LKG-F"):return 8;case e.startsWith("LKG-E"):return 11;case e.startsWith("LKG-H"):return 11;case e.startsWith("LKG-J"):return 7;case e.startsWith("LKG-K"):return 11;case e.startsWith("LKG-L"):return 7;default:return 1}}get quiltHeight(){if(this._viewControls.rows!=null)return this._viewControls.rows;const e=this._calibration.serial;switch(!0){case e.startsWith("LKG-2K"):return 9;case e.startsWith("LKG-4K"):return 9;case e.startsWith("LKG-8K"):return 9;case e.startsWith("LKG-P"):return 6;case e.startsWith("LKG-A"):return 9;case e.startsWith("LKG-B"):return 9;case e.startsWith("LKG-D"):return 9;case e.startsWith("LKG-F"):return 6;case e.startsWith("LKG-E"):return 6;case e.startsWith("LKG-H"):return 6;case e.startsWith("LKG-J"):return 7;case e.startsWith("LKG-K"):return 6;case e.startsWith("LKG-L"):return 7;default:return 1}}get framebufferHeight(){return this.quiltResolution.height}get viewCone(){return this._calibration.viewCone.value*this.depthiness/180*Math.PI}get tilt(){return this._calibration.screenH.value/(this._calibration.screenW.value*this._calibration.slope.value)*(this._calibration.flipImageX.value?-1:1)}get subp(){return 1/(this._calibration.screenW.value*3)*(this._calibration.flipImageX.value?-1:1)}get pitch(){return this._calibration.pitch.value*this._calibration.screenW.value/this._calibration.DPI.value*Math.cos(Math.atan(1/this._calibration.slope.value))}get subpixelCells(){const e=new Float32Array(6*this._calibration.subpixelCells.length);return this._calibration.subpixelCells.forEach((t,i)=>{t.ROffsetX/=this.calibration.screenW.value,t.ROffsetY/=this.calibration.screenH.value,t.GOffsetX/=this.calibration.screenW.value,t.GOffsetY/=this.calibration.screenH.value,t.BOffsetX/=this.calibration.screenW.value,t.BOffsetY/=this.calibration.screenH.value,e[i*6+0]=t.ROffsetX,e[i*6+1]=t.ROffsetY,e[i*6+2]=t.GOffsetX,e[i*6+3]=t.GOffsetY,e[i*6+4]=t.BOffsetX,e[i*6+5]=t.BOffsetY}),e}}let sa=null;function kt(){return sa==null&&(sa=new xg),sa}function Nl(n){const e=kt();n!=null&&e.updateViewControls(n)}async function Sg(){const n=kt();let e=2;async function t(){if(n.appCanvas!=null)try{n.capturing=!0,await new Promise(a=>{requestAnimationFrame(a)}),n.appCanvas.width=n.quiltResolution.width,n.appCanvas.height=n.quiltResolution.height;let r=n.appCanvas.toDataURL();const s=document.createElement("a");s.style.display="none",s.href=r,s.download=`hologram_qs${n.quiltWidth}x${n.quiltHeight}a${n.aspect}.png`,document.body.appendChild(s),s.click(),document.body.removeChild(s),window.URL.revokeObjectURL(r)}catch(r){console.error("Error while capturing canvas data:",r),n.capturing=!1}finally{n.inlineView=e,n.capturing=!1,n.appCanvas.width=n.calibration.screenW.value,n.appCanvas.height=n.calibration.screenH.value}}const i=document.getElementById("screenshotbutton");i&&i.addEventListener("click",()=>{e=n.inlineView;const r=ho.getInstance();if(!r){console.warn("LookingGlassXRDevice not initialized");return}n.inlineView=2,r.captureScreenshot=!0,setTimeout(()=>{r.screenshotCallback=t},100)})}function yg(){var n,e,t,i,r;const s=kt();if(s.lkgCanvas==null)console.warn("window placement called without a valid XR Session!");else{let a=function(){let f=x.d-x.a,p=x.w-x.s;f&&p&&(f*=Math.sqrt(.5),p*=Math.sqrt(.5));const T=s.trackballX,M=s.trackballY,R=Math.cos(T)*f-Math.sin(T)*Math.cos(M)*p,G=-Math.sin(M)*p,D=-Math.sin(T)*f-Math.cos(T)*Math.cos(M)*p;s.targetX=s.targetX+R*s.targetDiam*.03,s.targetY=s.targetY+G*s.targetDiam*.03,s.targetZ=s.targetZ+D*s.targetDiam*.03,requestAnimationFrame(a)};const o=document.createElement("style");document.head.appendChild(o),(n=o.sheet)==null||n.insertRule("#LookingGlassWebXRControls * { all: revert; font-family: sans-serif }");const u=document.createElement("div");u.id="LookingGlassWebXRControls",u.style.position="fixed",u.style.zIndex="1000",u.style.padding="15px",u.style.width="320px",u.style.maxWidth="calc(100vw - 18px)",u.style.maxHeight="calc(100vh - 18px)",u.style.whiteSpace="nowrap",u.style.background="rgba(0, 0, 0, 0.6)",u.style.color="white",u.style.borderRadius="10px",u.style.right="15px",u.style.bottom="15px",u.style.flex="row";const h=document.createElement("div");u.appendChild(h),h.style.width="100%",h.style.textAlign="center",h.style.fontWeight="bold",h.style.marginBottom="8px",h.innerText="Looking Glass Controls";const d=document.createElement("button");d.style.display="block",d.style.margin="auto",d.style.width="100%",d.style.height="35px",d.style.padding="4px",d.style.marginBottom="8px",d.style.borderRadius="8px",d.id="screenshotbutton",u.appendChild(d),d.innerText="Save Hologram",s.quiltResolution.height*s.quiltResolution.width>33177600?(d.style.backgroundColor="#ccc",d.style.color="#999",d.style.cursor="not-allowed",d.title="Button is disabled because the quilt resolution is too large."):(d.style.backgroundColor="",d.style.color="",d.style.cursor="",d.title="");const m=document.createElement("button");m.style.display="block",m.style.margin="auto",m.style.width="100%",m.style.height="35px",m.style.padding="4px",m.style.marginBottom="8px",m.style.borderRadius="8px",m.id="copybutton",u.appendChild(m),m.innerText="Copy Config",m.addEventListener("click",()=>{Mg(s)});const v=document.createElement("div");u.appendChild(v),v.style.width="290px",v.style.whiteSpace="normal",v.style.color="rgba(255,255,255,0.7)",v.style.fontSize="14px",v.style.margin="5px 0",v.innerHTML="Click the popup and use WASD, mouse left/right drag, and scroll.";const A=document.createElement("div");u.appendChild(A);const S=(f,p,T)=>{const M=T.stringify,R=document.createElement("div");R.style.marginBottom="8px",A.appendChild(R);const G=f,D=s[f],I=document.createElement("label");R.appendChild(I),I.innerText=T.label,I.setAttribute("for",G),I.style.width="100px",I.style.display="inline-block",I.style.textDecoration="dotted underline 1px",I.style.fontFamily='"Courier New"',I.style.fontSize="13px",I.style.fontWeight="bold",I.title=T.title;const H=document.createElement("input");R.appendChild(H),Object.assign(H,p),H.id=G,H.title=T.title,H.value=p.value!==void 0?p.value:D;const C=k=>{s[f]=k,L(k)};H.oninput=()=>{const k=p.type==="range"?parseFloat(H.value):p.type==="checkbox"?H.checked:H.value;C(k)};const w=k=>{let N=k(s[f]);T.fixRange&&(N=T.fixRange(N),H.max=Math.max(parseFloat(H.max),N).toString(),H.min=Math.min(parseFloat(H.min),N).toString()),H.value=N,C(N)};p.type==="range"&&(H.style.width="110px",H.style.height="8px",H.onwheel=k=>{w(N=>N+Math.sign(k.deltaX-k.deltaY)*p.step)});let L=k=>{};if(M){const k=document.createElement("span");k.style.fontFamily='"Courier New"',k.style.fontSize="13px",k.style.marginLeft="3px",R.appendChild(k),L=N=>{k.innerHTML=M(N)},L(D)}return w};S("fovy",{type:"range",min:1/180*Math.PI,max:120.1/180*Math.PI,step:1/180*Math.PI},{label:"fov",title:"perspective fov (degrades stereo effect)",fixRange:f=>Math.max(1/180*Math.PI,Math.min(f,120.1/180*Math.PI)),stringify:f=>{const p=f/Math.PI*180,T=Math.atan(Math.tan(f/2)*s.aspect)*2/Math.PI*180;return`${p.toFixed()}&deg;&times;${T.toFixed()}&deg;`}}),S("depthiness",{type:"range",min:0,max:2,step:.01},{label:"depthiness",title:"exaggerates depth by multiplying the width of the view cone (as reported by the firmware) - can somewhat compensate for depthiness lost using higher fov.",fixRange:f=>Math.max(0,f),stringify:f=>`${f.toFixed(2)}x`}),S("inlineView",{type:"range",min:0,max:2,step:1},{label:"inline view",title:"what to show inline on the original canvas (swizzled = no overwrite)",fixRange:f=>Math.max(0,Math.min(f,2)),stringify:f=>f===0?"swizzled":f===1?"center":f===2?"quilt":"?"}),S("filterMode",{type:"range",min:0,max:3,step:1},{label:"view filtering mode",title:"controls the method used for view blending",fixRange:f=>Math.max(0,Math.min(f,2)),stringify:f=>f===0?"old, studio style":f===1?"2 view":f===2?"gaussian":f===3?"10 view gaussian":"?"}),S("gaussianSigma",{type:"range",min:-1,max:1,step:.01},{label:"gaussian sigma",title:"control view blending",fixRange:f=>Math.max(-1,Math.min(f,1)),stringify:f=>f}),s.lkgCanvas.oncontextmenu=f=>{f.preventDefault()},s.lkgCanvas.addEventListener("wheel",f=>{const p=s.targetDiam,T=1.1,M=Math.log(p)/Math.log(T);return s.targetDiam=Math.pow(T,M+f.deltaY*.01)},{passive:!1}),s.lkgCanvas.addEventListener("mousemove",f=>{const p=f.movementX,T=-f.movementY;if(f.buttons&2||f.buttons&1&&(f.shiftKey||f.ctrlKey)){const M=s.trackballX,R=s.trackballY,G=-Math.cos(M)*p+Math.sin(M)*Math.sin(R)*T,D=-Math.cos(R)*T,I=Math.sin(M)*p+Math.cos(M)*Math.sin(R)*T;s.targetX=s.targetX+G*s.targetDiam*.001,s.targetY=s.targetY+D*s.targetDiam*.001,s.targetZ=s.targetZ+I*s.targetDiam*.001}else f.buttons&1&&(s.trackballX=s.trackballX-p*.01,s.trackballY=s.trackballY-T*.01)});const x={w:0,a:0,s:0,d:0};return s.lkgCanvas.addEventListener("keydown",f=>{switch(f.code){case"KeyW":x.w=1;break;case"KeyA":x.a=1;break;case"KeyS":x.s=1;break;case"KeyD":x.d=1;break}}),s.lkgCanvas.addEventListener("keyup",f=>{switch(f.code){case"KeyW":x.w=0;break;case"KeyA":x.a=0;break;case"KeyS":x.s=0;break;case"KeyD":x.d=0;break}}),(e=s.appCanvas)==null||e.addEventListener("wheel",f=>{const p=s.targetDiam,T=1.1,M=Math.log(p)/Math.log(T);return s.targetDiam=Math.pow(T,M+f.deltaY*.01)},{passive:!1}),(t=s.appCanvas)==null||t.addEventListener("mousemove",f=>{const p=f.movementX,T=-f.movementY;if(f.buttons&2||f.buttons&1&&(f.shiftKey||f.ctrlKey)){const M=s.trackballX,R=s.trackballY,G=-Math.cos(M)*p+Math.sin(M)*Math.sin(R)*T,D=-Math.cos(R)*T,I=Math.sin(M)*p+Math.cos(M)*Math.sin(R)*T;s.targetX=s.targetX+G*s.targetDiam*.001,s.targetY=s.targetY+D*s.targetDiam*.001,s.targetZ=s.targetZ+I*s.targetDiam*.001}else f.buttons&1&&(s.trackballX=s.trackballX-p*.01,s.trackballY=s.trackballY-T*.01)}),(i=s.appCanvas)==null||i.addEventListener("keydown",f=>{switch(f.code){case"KeyW":x.w=1;break;case"KeyA":x.a=1;break;case"KeyS":x.s=1;break;case"KeyD":x.d=1;break}}),(r=s.appCanvas)==null||r.addEventListener("keyup",f=>{switch(f.code){case"KeyW":x.w=0;break;case"KeyA":x.a=0;break;case"KeyS":x.s=0;break;case"KeyD":x.d=0;break}}),requestAnimationFrame(a),setTimeout(()=>{Sg()},1e3),u}}function Mg(n){const e={targetX:n.targetX,targetY:n.targetY,targetZ:n.targetZ,fovy:`${Math.round(n.fovy/Math.PI*180)} * Math.PI / 180`,targetDiam:n.targetDiam,trackballX:n.trackballX,trackballY:n.trackballY,depthiness:n.depthiness};let t=JSON.stringify(e,null,4).replace(/"/g,"").replace(/{/g,"").replace(/}/g,"");navigator.clipboard.writeText(t)}let $r;const Eg=(n,e)=>{const t=kt();if(t.lkgCanvas==null){console.warn("window placement called without a valid XR Session!");return}else n==!1?bg(t,$r):($r==null&&($r=yg()),t.lkgCanvas.style.position="fixed",t.lkgCanvas.style.bottom="0",t.lkgCanvas.style.left="0",t.lkgCanvas.width=t.calibration.screenW.value,t.lkgCanvas.height=t.calibration.screenH.value,document.body.appendChild($r),"getScreenDetails"in window?wg(t.lkgCanvas,t,e):Nc(t,t.lkgCanvas,e))};async function wg(n,e,t){const i=(await window.getScreenDetails()).screens.filter(r=>r.label.includes("LKG"))[0];if(i===void 0){console.log("no Looking Glass monitor detected - manually opening popup window"),Nc(e,n,t);return}else{const r=[`left=${i.left}`,`top=${i.top}`,`width=${i.width}`,`height=${i.height}`,"menubar=no","toolbar=no","location=no","status=no","resizable=yes","scrollbars=no","fullscreenEnabled=true"].join(",");e.popup=window.open("","new",r),e.popup&&(e.popup.document.body.style.background="black",e.popup.document.body.style.transform="1.0",Oc(e),e.popup.document.body.appendChild(n),console.assert(t),e.popup.onbeforeunload=t)}}function Nc(n,e,t){n.popup=window.open("",void 0,"width=640,height=360"),n.popup&&(n.popup.document.title="Looking Glass Window (fullscreen me on Looking Glass!)",n.popup.document.body.style.background="black",n.popup.document.body.style.transform="1.0",Oc(n),n.popup.document.body.appendChild(e),console.assert(t),n.popup.onbeforeunload=t)}function bg(n,e){var t;(t=e.parentElement)==null||t.removeChild(e),n.popup&&(n.popup.onbeforeunload=null,n.popup.close(),n.popup=null)}function Oc(n){n.popup&&n.popup.document.addEventListener("keydown",e=>{e.ctrlKey&&(e.key==="="||e.key==="-"||e.key==="+")&&e.preventDefault()})}const $t=Symbol("LookingGlassXRWebGLLayer");class Tg extends Pc{constructor(e,t,i){super(e,t,i);const r=kt();r.appCanvas=t.canvas,r.lkgCanvas=document.createElement("canvas"),r.lkgCanvas.tabIndex=0;const s=r.lkgCanvas.getContext("2d",{alpha:!1});r.lkgCanvas.addEventListener("dblclick",function(){this.requestFullscreen()});const a=this[Xn].config,o=t.createTexture();let u,h;const d=t.createFramebuffer(),m=t.enable.bind(t),v=t.disable.bind(t),A=t.getExtension("OES_vertex_array_object"),S=34229,x=A?A.bindVertexArrayOES.bind(A):t.bindVertexArray.bind(t),f=()=>{const Z=t.getParameter(t.TEXTURE_BINDING_2D);if(t.bindTexture(t.TEXTURE_2D,o),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,r.framebufferWidth,r.framebufferHeight,0,t.RGBA,t.UNSIGNED_BYTE,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_BASE_LEVEL,0),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAX_LEVEL,0),t.bindTexture(t.TEXTURE_2D,Z),u){const pe=t.getParameter(t.RENDERBUFFER_BINDING);t.bindRenderbuffer(t.RENDERBUFFER,u),t.renderbufferStorage(t.RENDERBUFFER,h.format,r.framebufferWidth,r.framebufferHeight),t.bindRenderbuffer(t.RENDERBUFFER,pe)}};(a.depth||a.stencil)&&(a.depth&&a.stencil?h={format:t.DEPTH_STENCIL,attachment:t.DEPTH_STENCIL_ATTACHMENT}:a.depth?h={format:t.DEPTH_COMPONENT16,attachment:t.DEPTH_ATTACHMENT}:a.stencil&&(h={format:t.STENCIL_INDEX8,attachment:t.STENCIL_ATTACHMENT}),u=t.createRenderbuffer()),f(),r.addEventListener("on-config-changed",f);const p=t.getParameter(t.FRAMEBUFFER_BINDING);t.bindFramebuffer(t.FRAMEBUFFER,d),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,o,0),(a.depth||a.stencil)&&t.framebufferRenderbuffer(t.FRAMEBUFFER,h.attachment,t.RENDERBUFFER,u),t.bindFramebuffer(t.FRAMEBUFFER,p);const T=t.createProgram();if(!T)return;const M=t.createShader(t.VERTEX_SHADER);if(!M)return;t.attachShader(T,M);const R=t.createShader(t.FRAGMENT_SHADER);if(!R)return;t.attachShader(T,R),t.shaderSource(M,`#version 300 es
			in vec2 a_position;
			out vec2 v_texcoord;
			void main() {
			  gl_Position = vec4(a_position * 2.0 - 1.0, 0.0, 1.0);
			  v_texcoord = a_position;
			}
		  `),t.compileShader(M),t.getShaderParameter(M,t.COMPILE_STATUS)||console.warn(t.getShaderInfoLog(M));let G,D,I;const H=()=>{const Z=pg(r);if(Z===G||(G=Z,!R))return;if(t.shaderSource(R,Z),t.compileShader(R),!t.getShaderParameter(R,t.COMPILE_STATUS)){console.warn(t.getShaderInfoLog(R));return}if(!T)return;if(t.linkProgram(T),!t.getProgramParameter(T,t.LINK_STATUS)){console.warn(t.getProgramInfoLog(T));return}D=t.getAttribLocation(T,"a_position"),I=t.getUniformLocation(T,"u_viewType");const pe=t.getUniformLocation(T,"u_texture"),Ae=t.getUniformLocation(T,"subpixelData"),Se=t.getParameter(t.CURRENT_PROGRAM);t.useProgram(T),t.uniform1i(pe,0),t.uniform1fv(Ae,r.subpixelCells),t.useProgram(Se)};r.addEventListener("on-config-changed",H);const C=A?A.createVertexArrayOES():t.createVertexArray(),w=t.createBuffer(),L=t.getParameter(t.ARRAY_BUFFER_BINDING),k=t.getParameter(S);x(C),t.bindBuffer(t.ARRAY_BUFFER,w),t.bufferData(t.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]),t.STATIC_DRAW),t.enableVertexAttribArray(D),t.vertexAttribPointer(D,2,t.FLOAT,!1,0,0),x(k),t.bindBuffer(t.ARRAY_BUFFER,L);const N=()=>{console.assert(this[$t].LookingGlassEnabled),t.bindFramebuffer(t.FRAMEBUFFER,d);const Z=t.getParameter(t.COLOR_CLEAR_VALUE),pe=t.getParameter(t.DEPTH_CLEAR_VALUE),Ae=t.getParameter(t.STENCIL_CLEAR_VALUE);t.clearColor(0,0,0,0),t.clearDepth(1),t.clearStencil(0),t.clear(t.DEPTH_BUFFER_BIT|t.COLOR_BUFFER_BIT|t.STENCIL_BUFFER_BIT),t.clearColor(Z[0],Z[1],Z[2],Z[3]),t.clearDepth(pe),t.clearStencil(Ae)},B=t.canvas;let J,Q;const ee=()=>{if(!this[$t].LookingGlassEnabled)return;(B.width!==r.calibration.screenW.value||B.height!==r.calibration.screenH.value)&&r.capturing===!1?(J=B.width,Q=B.height,B.width=r.calibration.screenW.value,B.height=r.calibration.screenH.value):r.capturing===!0&&(J=B.width,Q=B.height,B.width=r.framebufferWidth,B.height=r.framebufferHeight);const Z=t.getParameter(S),pe=t.getParameter(t.CULL_FACE),Ae=t.getParameter(t.BLEND),Se=t.getParameter(t.DEPTH_TEST),ze=t.getParameter(t.STENCIL_TEST),Xe=t.getParameter(t.SCISSOR_TEST),te=t.getParameter(t.VIEWPORT),ue=t.getParameter(t.FRAMEBUFFER_BINDING),be=t.getParameter(t.RENDERBUFFER_BINDING),ye=t.getParameter(t.CURRENT_PROGRAM),De=t.getParameter(t.ACTIVE_TEXTURE);{const Oe=t.getParameter(t.TEXTURE_BINDING_2D);t.bindFramebuffer(t.FRAMEBUFFER,null),t.useProgram(T),x(C),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,o),t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.STENCIL_TEST),t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),t.uniform1i(I,0),t.drawArrays(t.TRIANGLES,0,6),s==null||s.clearRect(0,0,r.calibration.screenW.value,r.calibration.screenH.value),s==null||s.drawImage(B,0,0),r.inlineView!==0&&(t.uniform1i(I,r.inlineView),t.drawArrays(t.TRIANGLES,0,6)),t.bindTexture(t.TEXTURE_2D,Oe)}t.activeTexture(De),t.useProgram(ye),t.bindRenderbuffer(t.RENDERBUFFER,be),t.bindFramebuffer(t.FRAMEBUFFER,ue),t.viewport(...te),(Xe?m:v)(t.SCISSOR_TEST),(ze?m:v)(t.STENCIL_TEST),(Se?m:v)(t.DEPTH_TEST),(Ae?m:v)(t.BLEND),(pe?m:v)(t.CULL_FACE),x(Z)};this[$t]={LookingGlassEnabled:!1,framebuffer:d,clearFramebuffer:N,blitTextureToDefaultFramebufferIfNeeded:ee,moveCanvasToWindow:Eg,restoreOriginalCanvasDimensions:()=>{J&&Q&&(B.width=J,B.height=Q,J=Q=void 0)}}}get framebuffer(){return this[$t].LookingGlassEnabled?this[$t].framebuffer:null}get framebufferWidth(){return kt().framebufferWidth}get framebufferHeight(){return kt().framebufferHeight}}const ss=class extends uo{constructor(n){super(n),this.sessions=new Map,this.viewSpaces=[],this.basePoseMatrix=Ln(),this.inlineProjectionMatrix=Ln(),this.inlineInverseViewMatrix=Ln(),this.LookingGlassProjectionMatrices=[],this.LookingGlassInverseViewMatrices=[],this.captureScreenshot=!1,this.screenshotCallback=null,ss.instance||(ss.instance=this)}static getInstance(){return ss.instance}onBaseLayerSet(n,e){const t=this.sessions.get(n);t.baseLayer=e;const i=kt(),r=e[$t];r.LookingGlassEnabled=t.immersive,t.immersive&&(i.XRSession=this.sessions.get(n),i.popup==null?r.moveCanvasToWindow(!0,()=>{this.endSession(n)}):console.warn("attempted to assign baselayer twice?"))}isSessionSupported(n){return n==="inline"||n==="immersive-vr"}isFeatureSupported(n){switch(n){case"viewer":return!0;case"local":return!0;case"local-floor":return!0;case"bounded-floor":return!1;case"unbounded":return!1;default:return console.warn("LookingGlassXRDevice.isFeatureSupported: feature not understood:",n),!1}}async requestSession(n,e){if(!this.isSessionSupported(n))return Promise.reject();const t=n!=="inline",i=new Cg(n,e),r=kt();return this.sessions.set(i.id,i),t&&(this.dispatchEvent("@@webxr-polyfill/vr-present-start",i.id),window.addEventListener("unload",()=>{r.popup&&r.popup.close(),r.popup=null})),Promise.resolve(i.id)}requestAnimationFrame(n){return this.global.requestAnimationFrame(n)}cancelAnimationFrame(n){this.global.cancelAnimationFrame(n)}onFrameStart(n,e){const t=this.sessions.get(n),i=kt();if(t.immersive){const r=Math.tan(.5*i.fovy),s=.5*i.targetDiam/r,a=s-i.targetDiam,o=this.basePoseMatrix;ra(o,[i.targetX,i.targetY,i.targetZ]),Ul(o,o,i.trackballX,[0,1,0]),Ul(o,o,-i.trackballY,[1,0,0]),Fl(o,o,[0,0,s]);for(let u=0;u<i.numViews;++u){const h=(u+.5)/i.numViews-.5,d=Math.tan(i.viewCone*h),m=s*d,v=this.LookingGlassInverseViewMatrices[u]=this.LookingGlassInverseViewMatrices[u]||Ln();Fl(v,o,[m,0,0]),Il(v,v);const A=Math.max(a+e.depthNear,.01),S=a+e.depthFar,x=A*r,f=x,p=-x,T=A*-d,M=i.aspect*x,R=T+M,G=T-M,D=this.LookingGlassProjectionMatrices[u]=this.LookingGlassProjectionMatrices[u]||Ln();gg(D,2*A/(R-G),0,0,0,0,2*A/(f-p),0,0,(R+G)/(R-G),(f+p)/(f-p),-(S+A)/(S-A),-1,0,0,-2*S*A/(S-A),0)}}else{const r=t.baseLayer.context,s=r.drawingBufferWidth/r.drawingBufferHeight;vg(this.inlineProjectionMatrix,e.inlineVerticalFieldOfView,s,e.depthNear,e.depthFar),ra(this.basePoseMatrix,[0,Xa,0]),Il(this.inlineInverseViewMatrix,this.basePoseMatrix),t.baseLayer[$t].clearFramebuffer()}}onFrameEnd(n){this.sessions.get(n).baseLayer[$t].blitTextureToDefaultFramebufferIfNeeded(),this.captureScreenshot&&this.screenshotCallback&&(this.screenshotCallback(),this.captureScreenshot=!1)}async requestFrameOfReferenceTransform(n,e){const t=Ln();switch(n){case"viewer":case"local":return ra(t,[0,-Xa,0]),t;case"local-floor":return t;default:throw new Error("XRReferenceSpaceType not understood")}}endSession(n){const e=this.sessions.get(n);e.immersive&&e.baseLayer&&(e.baseLayer[$t].moveCanvasToWindow(!1),e.baseLayer[$t].LookingGlassEnabled=!1,e.baseLayer[$t].restoreOriginalCanvasDimensions(),this.dispatchEvent("@@webxr-polyfill/vr-present-end",n)),e.ended=!0}doesSessionSupportReferenceSpace(n,e){const t=this.sessions.get(n);return t.ended?!1:t.enabledFeatures.has(e)}getViewSpaces(n){if(n==="immersive-vr"){const e=kt();for(let t=this.viewSpaces.length;t<e.numViews;++t)this.viewSpaces[t]=new Pg(t);return this.viewSpaces.length=e.numViews,this.viewSpaces}}getViewport(n,e,t,i,r){if(r===void 0){const s=this.sessions.get(n).baseLayer.context;i.x=0,i.y=0,i.width=s.drawingBufferWidth,i.height=s.drawingBufferHeight}else{const s=kt(),a=r%s.quiltWidth,o=Math.floor(r/s.quiltWidth);i.x=s.framebufferWidth/s.quiltWidth*a,i.y=s.framebufferHeight/s.quiltHeight*o,i.width=s.framebufferWidth/s.quiltWidth,i.height=s.framebufferHeight/s.quiltHeight}return!0}getProjectionMatrix(n,e){return e===void 0?this.inlineProjectionMatrix:this.LookingGlassProjectionMatrices[e]||Ln()}getBasePoseMatrix(){return this.basePoseMatrix}getBaseViewMatrix(){return this.inlineInverseViewMatrix}_getViewMatrixByIndex(n){return this.LookingGlassInverseViewMatrices[n]=this.LookingGlassInverseViewMatrices[n]||Ln()}getInputSources(){return[]}getInputPose(n,e,t){return null}onWindowResize(){}};let ho=ss;Ft(ho,"instance",null);let Rg=0;class Cg{constructor(e,t){Ft(this,"mode"),Ft(this,"immersive"),Ft(this,"id"),Ft(this,"baseLayer"),Ft(this,"inlineVerticalFieldOfView"),Ft(this,"ended"),Ft(this,"enabledFeatures"),this.mode=e,this.immersive=e==="immersive-vr"||e==="immersive-ar",this.id=++Rg,this.baseLayer=null,this.inlineVerticalFieldOfView=Math.PI*.5,this.ended=!1,this.enabledFeatures=t}}class Pg extends Ii{constructor(e){super(),Ft(this,"viewIndex"),this.viewIndex=e}get eye(){return"none"}_onPoseUpdate(e){this._inverseBaseMatrix=e._getViewMatrixByIndex(this.viewIndex)}}class fo extends ag{constructor(e){super(),Ft(this,"vrButton"),Ft(this,"device"),Ft(this,"isPresenting",!1),Nl(e),this.loadPolyfill()}static async init(e){new fo(e)}async loadPolyfill(){this.overrideDefaultVRButton(),console.warn('Looking Glass WebXR "polyfill" overriding native WebXR API.');for(const e in cr)this.global[e]=cr[e];this.global.XRWebGLLayer=Tg,this.injected=!0,this.device=new ho(this.global),this.xr=new xc(Promise.resolve(this.device)),Object.defineProperty(this.global.navigator,"xr",{value:this.xr,configurable:!0})}async overrideDefaultVRButton(){this.vrButton=await Lg("VRButton"),this.vrButton&&this.device?(this.device.addEventListener("@@webxr-polyfill/vr-present-start",()=>{this.isPresenting=!0,this.updateVRButtonUI()}),this.device.addEventListener("@@webxr-polyfill/vr-present-end",()=>{this.isPresenting=!1,this.updateVRButtonUI()}),this.vrButton.addEventListener("click",e=>{this.updateVRButtonUI()}),this.updateVRButtonUI()):console.warn("Unable to find VRButton")}async updateVRButtonUI(){if(this.vrButton){await Dg(100),this.isPresenting?this.vrButton.innerHTML="EXIT LOOKING GLASS":this.vrButton.innerHTML="ENTER LOOKING GLASS";const e=220;this.vrButton.style.width=`${e}px`,this.vrButton.style.left=`calc(50% - ${e/2}px)`}}update(e){Nl(e)}}async function Lg(n){return new Promise(e=>{const t=new MutationObserver(function(i){i.forEach(function(r){r.addedNodes.forEach(function(s){const a=s;a.id===n&&(e(a),t.disconnect())})})});t.observe(document.body,{subtree:!1,childList:!0}),setTimeout(()=>{t.disconnect(),e(null)},5e3)})}function Dg(n){return new Promise(e=>setTimeout(e,n))}const Ig=kt();class Fi{static createButton(e,t={}){const i=document.createElement("button");function r(){let h=null;async function d(A){A.addEventListener("end",m),await e.xr.setSession(A),i.textContent="EXIT VR",h=A}function m(){h.removeEventListener("end",m),i.textContent="ENTER VR",h=null}i.style.display="",i.style.cursor="pointer",i.style.left="calc(50% - 50px)",i.style.width="100px",i.textContent="ENTER VR";const v={...t,optionalFeatures:["local-floor","bounded-floor","layers",...t.optionalFeatures||[]]};i.onmouseenter=function(){i.style.opacity="1.0"},i.onmouseleave=function(){i.style.opacity="0.5"},i.onclick=function(){h===null?navigator.xr.requestSession("immersive-vr",v).then(d):(h.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",v).then(d).catch(A=>{console.warn(A)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",v).then(d).catch(A=>{console.warn(A)})}function s(){i.style.display="",i.style.cursor="auto",i.style.left="calc(50% - 75px)",i.style.width="150px",i.onmouseenter=null,i.onmouseleave=null,i.onclick=null}function a(){s(),i.textContent="VR NOT SUPPORTED"}function o(h){s(),console.warn("Exception when trying to call xr.isSessionSupported",h),i.textContent="VR NOT ALLOWED"}function u(h){h.style.position="absolute",h.style.bottom="20px",h.style.padding="12px 6px",h.style.border="1px solid #fff",h.style.borderRadius="4px",h.style.background="rgba(0,0,0,0.1)",h.style.color="#fff",h.style.font="normal 13px sans-serif",h.style.textAlign="center",h.style.opacity="0.5",h.style.outline="none",h.style.zIndex="999"}if("xr"in navigator)return i.id="VRButton",i.style.display="none",u(i),navigator.xr.isSessionSupported("immersive-vr").then(function(h){h?r():a(),h&&Fi.xrSessionIsGranted&&i.click()}).catch(o),i;{const h=document.createElement("a");return window.isSecureContext===!1?(h.href=document.location.href.replace(/^http:/,"https:"),h.innerHTML="WEBXR NEEDS HTTPS"):(h.href="https://immersiveweb.dev/",h.innerHTML="WEBXR NOT AVAILABLE"),h.style.left="calc(50% - 90px)",h.style.width="180px",h.style.textDecoration="none",u(h),h}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{Fi.xrSessionIsGranted=!0})}}}Fi.xrSessionIsGranted=!1;Fi.registerSessionGrantedListener();const Fg=`varying vec2 vUv;
varying vec3 vNormal;        // ワールド空間の法線
varying vec3 vWorldPosition; // ワールド座標

void main() {
  vUv = uv;
  // 法線をワールド空間に変換
  vNormal = normalize(normalMatrix * normal);
  // ワールド座標を計算
  vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
  // 最終的な頂点位置を計算
  gl_Position = projectionMatrix * viewMatrix * vec4(vWorldPosition, 1.0);
}
`,Ug=`uniform vec2 resolution;
varying vec2 vUv;
varying vec3 vNormal;        // 回転後の法線（ワールド空間）
varying vec3 vWorldPosition; // ワールド座標
uniform sampler2D colorMap;
uniform sampler2D monoMap;

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float noise(in vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);

  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));

  vec2 u = f*f*(3.0-2.0*f);

  return mix(a, b, u.x) +
    (c - a)* u.y * (1.0 - u.x) +
    (d - b) * u.x * u.y;
}

// HSVからRGBへの変換
vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

// RGBからHSVへの変換
vec3 rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

/**
 * カメラとポリゴンの角度を返す
 */
float viewAngle() {
  vec3 viewDir = normalize(cameraPosition - vWorldPosition); // カメラ方向
  return dot(viewDir, normalize(vNormal)); // ビュー方向と法線の角度 -1.0 ～ 1.0
}

/**
 * キラキラのrgbを返す
 * @param {vec3} colorNoise 七色のノイズ
 */
vec3 kira(vec3 colorNoiseRGB) {
  // ビュー方向を計算
  float kiraStrength = 20.0;
  float angle = viewAngle() * kiraStrength;
  float normalizedAngle = (angle + 1.0) / 2.0; // 0.0 ～ 1.0

  // 角度を色相 (Hue) に変換
  vec3 angleColorRGB = hsv2rgb(vec3(normalizedAngle, 1.0, 1.0)); // 彩度=1.0, 明度=1.0
  float colorDiff = distance(colorNoiseRGB, angleColorRGB);
  vec3 kiraNoiseHSV = rgb2hsv(colorNoiseRGB);
  kiraNoiseHSV.z = max(1.0 - colorDiff, 0.0);
  return hsv2rgb(kiraNoiseHSV);
}

void main() {
  vec2 st = vUv;
  vec4 monoTexture = texture2D(monoMap, vUv);
  vec4 colorTexture = texture2D(colorMap, vUv);

  // ノイズを作成
  vec2 pos = vec2(st * 6.0); // ノイズのスケール
  float n = noise(pos);      // ノイズ値
  vec3 colorNoiseHSV = vec3(n, 1.0, 1.0);

  // キラキラのノイズを作成
  vec3 kiraNoiseRGB = kira(hsv2rgb(colorNoiseHSV)) * monoTexture.rgb;

  // 背景画像にキラキラノイズを合成
  gl_FragColor = vec4(kiraNoiseRGB + colorTexture.rgb, 1.0);
}
`;class Ng extends yn{constructor(){const e=new za().load("pokeka.jpg"),t=new za().load("pokeka_mono.jpg");super({vertexShader:Fg,fragmentShader:Ug,side:on,transparent:!0,uniforms:{colorMap:{value:e},monoMap:{value:t}}})}}const Zn=Ig;Zn.targetY=0;Zn.targetZ=0;Zn.targetDiam=3;Zn.fovy=14*Math.PI/180;new fo;function Og(){const n=new Ym,e=new Ni(Zn.targetDiam,Zn.targetDiam,Zn.targetDiam),t=new no({color:16777215,side:Ut}),i=new tn(e,t);n.add(i),n.add(new e0(16777215));const r=new Jm(16777215);r.position.set(3,3,3),n.add(r);const s=new qm({antialias:!0});document.body.append(s.domElement),s.xr.enabled=!0;const a=new Wt;a.position.z=3;const o=new tn(new _r(3.94/2.5,5.5/2.5),new Ng);o.rotation.y=-Math.PI/15,n.add(o);const u=new $(0,0,3);s.setAnimationLoop(()=>{u.x=Math.sin(performance.now()/1e3),u.y=Math.cos(performance.now()/1e3),o.lookAt(u),s.render(n,a)}),document.body.append(Fi.createButton(s));function h(){s.setSize(innerWidth,innerHeight),a.aspect=innerWidth/innerHeight,a.updateProjectionMatrix()}h(),window.addEventListener("resize",h)}window.onload=function(){new za().load("pokeka_mono.jpg",()=>{Og()})};
