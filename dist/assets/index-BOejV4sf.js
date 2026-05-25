(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _i="184",ip=0,Du=1,sp=2,Ga=1,Vh=2,Pr=3,Rn=0,Ut=1,Yt=2,Rt=0,Ni=1,Cc=2,Pu=3,Iu=4,rp=5,ss=100,ap=101,op=102,cp=103,lp=104,up=200,fp=201,hp=202,dp=203,Rc=204,Dc=205,pp=206,mp=207,gp=208,vp=209,xp=210,_p=211,Ap=212,yp=213,Mp=214,Pc=0,Za=1,Ic=2,Ks=3,Lc=4,Fc=5,Bc=6,Uc=7,Wh=0,Sp=1,Tp=2,On=0,Xh=1,Yh=2,qh=3,Nl=4,Qh=5,Kh=6,jh=7,Zh=300,cs=301,js=302,Fr=303,Co=304,uo=306,zn=1e3,Jt=1001,Nc=1002,Ge=1003,bp=1004,Kr=1005,Je=1006,Ro=1007,as=1008,Ep=1008,Mt=1009,Ja=1010,Ol=1011,Zs=1012,Ys=1013,ln=1014,ht=1015,Gt=1016,zl=1017,Hl=1018,Js=1020,Jh=35902,$h=35899,ed=1021,td=1022,rt=1023,mi=1026,Fi=1027,$s=1028,fo=1029,gi=1030,kr=1031,er=1033,ka=33776,Va=33777,Wa=33778,Xa=33779,Oc=35840,zc=35841,Hc=35842,Gc=35843,kc=36196,Vc=37492,Wc=37496,Xc=37488,Yc=37489,$a=37490,qc=37491,Qc=37808,Kc=37809,jc=37810,Zc=37811,Jc=37812,$c=37813,el=37814,tl=37815,nl=37816,il=37817,sl=37818,rl=37819,al=37820,ol=37821,cl=36492,ll=36494,ul=36495,fl=36283,hl=36284,eo=36285,dl=36286,us=3200,pl=0,wp=1,jn="",ut="srgb",tr="srgb-linear",to="linear",it="srgb",ds=7680,Lu=519,Cp=512,Rp=513,Dp=514,Gl=515,Pp=516,Ip=517,kl=518,Lp=519,Fu=35044,Bu="300 es",Zn=2e3,Nr=2001;function Fp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function no(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Bp(){const n=no("canvas");return n.style.display="block",n}const Uu={};function Nu(...n){const e="THREE."+n.shift();console.log(e,...n)}function nd(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Le(...n){n=nd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function je(...n){n=nd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ml(...n){const e=n.join(" ");e in Uu||(Uu[e]=!0,Le(...n))}function Up(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Np={[Pc]:Za,[Ic]:Bc,[Lc]:Uc,[Ks]:Fc,[Za]:Pc,[Bc]:Ic,[Uc]:Lc,[Fc]:Ks};class ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Do=Math.PI/180,gl=180/Math.PI;function Vr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function Fe(n,e,t){return Math.max(e,Math.min(t,n))}function Op(n,e){return(n%e+e)%e}function Po(n,e,t){return(1-t)*n+t*e}function zp(n){return n*(.5-Math.random())}function lr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function hn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Hp={randFloatSpread:zp},vu=class vu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Fe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Fe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vu.prototype.isVector2=!0;let Se=vu;class wn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,c){let o=i[s+0],u=i[s+1],f=i[s+2],h=i[s+3],l=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(h!==x||o!==l||u!==p||f!==g){let d=o*l+u*p+f*g+h*x;d<0&&(l=-l,p=-p,g=-g,x=-x,d=-d);let m=1-c;if(d<.9995){const v=Math.acos(d),_=Math.sin(v);m=Math.sin(m*v)/_,c=Math.sin(c*v)/_,o=o*m+l*c,u=u*m+p*c,f=f*m+g*c,h=h*m+x*c}else{o=o*m+l*c,u=u*m+p*c,f=f*m+g*c,h=h*m+x*c;const v=1/Math.sqrt(o*o+u*u+f*f+h*h);o*=v,u*=v,f*=v,h*=v}}e[t]=o,e[t+1]=u,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){const c=i[s],o=i[s+1],u=i[s+2],f=i[s+3],h=r[a],l=r[a+1],p=r[a+2],g=r[a+3];return e[t]=c*g+f*h+o*p-u*l,e[t+1]=o*g+f*l+u*h-c*p,e[t+2]=u*g+f*p+c*l-o*h,e[t+3]=f*g-c*h-o*l-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,c=Math.cos,o=Math.sin,u=c(i/2),f=c(s/2),h=c(r/2),l=o(i/2),p=o(s/2),g=o(r/2);switch(a){case"XYZ":this._x=l*f*h+u*p*g,this._y=u*p*h-l*f*g,this._z=u*f*g+l*p*h,this._w=u*f*h-l*p*g;break;case"YXZ":this._x=l*f*h+u*p*g,this._y=u*p*h-l*f*g,this._z=u*f*g-l*p*h,this._w=u*f*h+l*p*g;break;case"ZXY":this._x=l*f*h-u*p*g,this._y=u*p*h+l*f*g,this._z=u*f*g+l*p*h,this._w=u*f*h-l*p*g;break;case"ZYX":this._x=l*f*h-u*p*g,this._y=u*p*h+l*f*g,this._z=u*f*g-l*p*h,this._w=u*f*h+l*p*g;break;case"YZX":this._x=l*f*h+u*p*g,this._y=u*p*h+l*f*g,this._z=u*f*g-l*p*h,this._w=u*f*h-l*p*g;break;case"XZY":this._x=l*f*h-u*p*g,this._y=u*p*h-l*f*g,this._z=u*f*g+l*p*h,this._w=u*f*h+l*p*g;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],c=t[5],o=t[9],u=t[2],f=t[6],h=t[10],l=i+c+h;if(l>0){const p=.5/Math.sqrt(l+1);this._w=.25/p,this._x=(f-o)*p,this._y=(r-u)*p,this._z=(a-s)*p}else if(i>c&&i>h){const p=2*Math.sqrt(1+i-c-h);this._w=(f-o)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+u)/p}else if(c>h){const p=2*Math.sqrt(1+c-i-h);this._w=(r-u)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(o+f)/p}else{const p=2*Math.sqrt(1+h-i-c);this._w=(a-s)/p,this._x=(r+u)/p,this._y=(o+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Fe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,c=t._x,o=t._y,u=t._z,f=t._w;return this._x=i*f+a*c+s*u-r*o,this._y=s*f+a*o+r*c-i*u,this._z=r*f+a*u+i*o-s*c,this._w=a*f-i*c-s*o-r*u,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,c=this.dot(e);c<0&&(i=-i,s=-s,r=-r,a=-a,c=-c);let o=1-t;if(c<.9995){const u=Math.acos(c),f=Math.sin(u);o=Math.sin(o*u)/f,t=Math.sin(t*u)/f,this._x=this._x*o+i*t,this._y=this._y*o+s*t,this._z=this._z*o+r*t,this._w=this._w*o+a*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+s*t,this._z=this._z*o+r*t,this._w=this._w*o+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const xu=class xu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ou.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ou.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,c=e.z,o=e.w,u=2*(a*s-c*i),f=2*(c*t-r*s),h=2*(r*i-a*t);return this.x=t+o*u+a*h-c*f,this.y=i+o*f+c*u-r*h,this.z=s+o*h+r*f-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this.z=Fe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this.z=Fe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Fe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,c=t.y,o=t.z;return this.x=s*o-r*c,this.y=r*a-i*o,this.z=i*c-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Io.copy(this).projectOnVector(e),this.sub(Io)}reflect(e){return this.sub(Io.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Fe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xu.prototype.isVector3=!0;let I=xu;const Io=new I,Ou=new wn,_u=class _u{constructor(e,t,i,s,r,a,c,o,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,c,o,u)}set(e,t,i,s,r,a,c,o,u){const f=this.elements;return f[0]=e,f[1]=s,f[2]=c,f[3]=t,f[4]=r,f[5]=o,f[6]=i,f[7]=a,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],c=i[3],o=i[6],u=i[1],f=i[4],h=i[7],l=i[2],p=i[5],g=i[8],x=s[0],d=s[3],m=s[6],v=s[1],_=s[4],A=s[7],M=s[2],S=s[5],b=s[8];return r[0]=a*x+c*v+o*M,r[3]=a*d+c*_+o*S,r[6]=a*m+c*A+o*b,r[1]=u*x+f*v+h*M,r[4]=u*d+f*_+h*S,r[7]=u*m+f*A+h*b,r[2]=l*x+p*v+g*M,r[5]=l*d+p*_+g*S,r[8]=l*m+p*A+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],c=e[5],o=e[6],u=e[7],f=e[8];return t*a*f-t*c*u-i*r*f+i*c*o+s*r*u-s*a*o}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],c=e[5],o=e[6],u=e[7],f=e[8],h=f*a-c*u,l=c*o-f*r,p=u*r-a*o,g=t*h+i*l+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(s*u-f*i)*x,e[2]=(c*i-s*a)*x,e[3]=l*x,e[4]=(f*t-s*o)*x,e[5]=(s*r-c*t)*x,e[6]=p*x,e[7]=(i*o-u*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,c){const o=Math.cos(r),u=Math.sin(r);return this.set(i*o,i*u,-i*(o*a+u*c)+a+e,-s*u,s*o,-s*(-u*a+o*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Lo.makeScale(e,t)),this}rotate(e){return this.premultiply(Lo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};_u.prototype.isMatrix3=!0;let Ue=_u;const Lo=new Ue,zu=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hu=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gp(){const n={enabled:!0,workingColorSpace:tr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===it&&(s.r=hi(s.r),s.g=hi(s.g),s.b=hi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(s.r=qs(s.r),s.g=qs(s.g),s.b=qs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===jn?to:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ml("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ml("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[tr]:{primaries:e,whitePoint:i,transfer:to,toXYZ:zu,fromXYZ:Hu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ut},outputColorSpaceConfig:{drawingBufferColorSpace:ut}},[ut]:{primaries:e,whitePoint:i,transfer:it,toXYZ:zu,fromXYZ:Hu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ut}}}),n}const Ke=Gp();function hi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ps;class kp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ps===void 0&&(ps=no("canvas")),ps.width=e.width,ps.height=e.height;const s=ps.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ps}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=no("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=hi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(hi(t[i]/255)*255):t[i]=hi(t[i]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vp=0;class ho{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=Vr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,c=s.length;a<c;a++)s[a].isDataTexture?r.push(Fo(s[a].image)):r.push(Fo(s[a]))}else r=Fo(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Fo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?kp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let Wp=0;const Bo=new I;class Ot extends ti{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,i=Jt,s=Jt,r=Je,a=as,c=rt,o=Mt,u=Ot.DEFAULT_ANISOTROPY,f=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=Vr(),this.name="",this.source=new ho(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=o,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Bo).x}get height(){return this.source.getSize(Bo).y}get depth(){return this.source.getSize(Bo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zn:e.x=e.x-Math.floor(e.x);break;case Jt:e.x=e.x<0?0:1;break;case Nc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zn:e.y=e.y-Math.floor(e.y);break;case Jt:e.y=e.y<0?0:1;break;case Nc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Zh;Ot.DEFAULT_ANISOTROPY=1;const Au=class Au{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const o=e.elements,u=o[0],f=o[4],h=o[8],l=o[1],p=o[5],g=o[9],x=o[2],d=o[6],m=o[10];if(Math.abs(f-l)<.01&&Math.abs(h-x)<.01&&Math.abs(g-d)<.01){if(Math.abs(f+l)<.1&&Math.abs(h+x)<.1&&Math.abs(g+d)<.1&&Math.abs(u+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(u+1)/2,A=(p+1)/2,M=(m+1)/2,S=(f+l)/4,b=(h+x)/4,y=(g+d)/4;return _>A&&_>M?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=S/i,r=b/i):A>M?A<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),i=S/s,r=y/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=b/r,s=y/r),this.set(i,s,r,t),this}let v=Math.sqrt((d-g)*(d-g)+(h-x)*(h-x)+(l-f)*(l-f));return Math.abs(v)<.001&&(v=1),this.x=(d-g)/v,this.y=(h-x)/v,this.z=(l-f)/v,this.w=Math.acos((u+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this.z=Fe(this.z,e.z,t.z),this.w=Fe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this.z=Fe(this.z,e,t),this.w=Fe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Fe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Au.prototype.isVector4=!0;let nt=Au;class Xp extends ti{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new Ot(s),a=i.count;for(let c=0;c<a;c++)this.textures[c]=r.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Je,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ho(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _t extends Xp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class po extends Ot{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yp extends _t{constructor(e=1,t=1,i=1,s={}){super(e,t,s),this.isWebGLArrayRenderTarget=!0,this.depth=i,this.texture=new po(null,e,t,i),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}}class qp extends Ot{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lo=class lo{constructor(e,t,i,s,r,a,c,o,u,f,h,l,p,g,x,d){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,c,o,u,f,h,l,p,g,x,d)}set(e,t,i,s,r,a,c,o,u,f,h,l,p,g,x,d){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=c,m[13]=o,m[2]=u,m[6]=f,m[10]=h,m[14]=l,m[3]=p,m[7]=g,m[11]=x,m[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lo().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/ms.setFromMatrixColumn(e,0).length(),r=1/ms.setFromMatrixColumn(e,1).length(),a=1/ms.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),c=Math.sin(i),o=Math.cos(s),u=Math.sin(s),f=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const l=a*f,p=a*h,g=c*f,x=c*h;t[0]=o*f,t[4]=-o*h,t[8]=u,t[1]=p+g*u,t[5]=l-x*u,t[9]=-c*o,t[2]=x-l*u,t[6]=g+p*u,t[10]=a*o}else if(e.order==="YXZ"){const l=o*f,p=o*h,g=u*f,x=u*h;t[0]=l+x*c,t[4]=g*c-p,t[8]=a*u,t[1]=a*h,t[5]=a*f,t[9]=-c,t[2]=p*c-g,t[6]=x+l*c,t[10]=a*o}else if(e.order==="ZXY"){const l=o*f,p=o*h,g=u*f,x=u*h;t[0]=l-x*c,t[4]=-a*h,t[8]=g+p*c,t[1]=p+g*c,t[5]=a*f,t[9]=x-l*c,t[2]=-a*u,t[6]=c,t[10]=a*o}else if(e.order==="ZYX"){const l=a*f,p=a*h,g=c*f,x=c*h;t[0]=o*f,t[4]=g*u-p,t[8]=l*u+x,t[1]=o*h,t[5]=x*u+l,t[9]=p*u-g,t[2]=-u,t[6]=c*o,t[10]=a*o}else if(e.order==="YZX"){const l=a*o,p=a*u,g=c*o,x=c*u;t[0]=o*f,t[4]=x-l*h,t[8]=g*h+p,t[1]=h,t[5]=a*f,t[9]=-c*f,t[2]=-u*f,t[6]=p*h+g,t[10]=l-x*h}else if(e.order==="XZY"){const l=a*o,p=a*u,g=c*o,x=c*u;t[0]=o*f,t[4]=-h,t[8]=u*f,t[1]=l*h+x,t[5]=a*f,t[9]=p*h-g,t[2]=g*h-p,t[6]=c*f,t[10]=x*h+l}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qp,e,Kp)}lookAt(e,t,i){const s=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Ti.crossVectors(i,xn),Ti.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Ti.crossVectors(i,xn)),Ti.normalize(),jr.crossVectors(xn,Ti),s[0]=Ti.x,s[4]=jr.x,s[8]=xn.x,s[1]=Ti.y,s[5]=jr.y,s[9]=xn.y,s[2]=Ti.z,s[6]=jr.z,s[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],c=i[4],o=i[8],u=i[12],f=i[1],h=i[5],l=i[9],p=i[13],g=i[2],x=i[6],d=i[10],m=i[14],v=i[3],_=i[7],A=i[11],M=i[15],S=s[0],b=s[4],y=s[8],w=s[12],R=s[1],C=s[5],P=s[9],B=s[13],U=s[2],F=s[6],k=s[10],L=s[14],W=s[3],O=s[7],z=s[11],j=s[15];return r[0]=a*S+c*R+o*U+u*W,r[4]=a*b+c*C+o*F+u*O,r[8]=a*y+c*P+o*k+u*z,r[12]=a*w+c*B+o*L+u*j,r[1]=f*S+h*R+l*U+p*W,r[5]=f*b+h*C+l*F+p*O,r[9]=f*y+h*P+l*k+p*z,r[13]=f*w+h*B+l*L+p*j,r[2]=g*S+x*R+d*U+m*W,r[6]=g*b+x*C+d*F+m*O,r[10]=g*y+x*P+d*k+m*z,r[14]=g*w+x*B+d*L+m*j,r[3]=v*S+_*R+A*U+M*W,r[7]=v*b+_*C+A*F+M*O,r[11]=v*y+_*P+A*k+M*z,r[15]=v*w+_*B+A*L+M*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],c=e[5],o=e[9],u=e[13],f=e[2],h=e[6],l=e[10],p=e[14],g=e[3],x=e[7],d=e[11],m=e[15],v=o*p-u*l,_=c*p-u*h,A=c*l-o*h,M=a*p-u*f,S=a*l-o*f,b=a*h-c*f;return t*(x*v-d*_+m*A)-i*(g*v-d*M+m*S)+s*(g*_-x*M+m*b)-r*(g*A-x*S+d*b)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],c=e[5],o=e[6],u=e[7],f=e[8],h=e[9],l=e[10],p=e[11],g=e[12],x=e[13],d=e[14],m=e[15],v=t*c-i*a,_=t*o-s*a,A=t*u-r*a,M=i*o-s*c,S=i*u-r*c,b=s*u-r*o,y=f*x-h*g,w=f*d-l*g,R=f*m-p*g,C=h*d-l*x,P=h*m-p*x,B=l*m-p*d,U=v*B-_*P+A*C+M*R-S*w+b*y;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/U;return e[0]=(c*B-o*P+u*C)*F,e[1]=(s*P-i*B-r*C)*F,e[2]=(x*b-d*S+m*M)*F,e[3]=(l*S-h*b-p*M)*F,e[4]=(o*R-a*B-u*w)*F,e[5]=(t*B-s*R+r*w)*F,e[6]=(d*A-g*b-m*_)*F,e[7]=(f*b-l*A+p*_)*F,e[8]=(a*P-c*R+u*y)*F,e[9]=(i*R-t*P-r*y)*F,e[10]=(g*S-x*A+m*v)*F,e[11]=(h*A-f*S-p*v)*F,e[12]=(c*w-a*C-o*y)*F,e[13]=(t*C-i*w+s*y)*F,e[14]=(x*_-g*M-d*v)*F,e[15]=(f*M-h*_+l*v)*F,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,c=e.y,o=e.z,u=r*a,f=r*c;return this.set(u*a+i,u*c-s*o,u*o+s*c,0,u*c+s*o,f*c+i,f*o-s*a,0,u*o-s*c,f*o+s*a,r*o*o+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,c=t._z,o=t._w,u=r+r,f=a+a,h=c+c,l=r*u,p=r*f,g=r*h,x=a*f,d=a*h,m=c*h,v=o*u,_=o*f,A=o*h,M=i.x,S=i.y,b=i.z;return s[0]=(1-(x+m))*M,s[1]=(p+A)*M,s[2]=(g-_)*M,s[3]=0,s[4]=(p-A)*S,s[5]=(1-(l+m))*S,s[6]=(d+v)*S,s[7]=0,s[8]=(g+_)*b,s[9]=(d-v)*b,s[10]=(1-(l+x))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let a=ms.set(s[0],s[1],s[2]).length();const c=ms.set(s[4],s[5],s[6]).length(),o=ms.set(s[8],s[9],s[10]).length();r<0&&(a=-a),In.copy(this);const u=1/a,f=1/c,h=1/o;return In.elements[0]*=u,In.elements[1]*=u,In.elements[2]*=u,In.elements[4]*=f,In.elements[5]*=f,In.elements[6]*=f,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,t.setFromRotationMatrix(In),i.x=a,i.y=c,i.z=o,this}makePerspective(e,t,i,s,r,a,c=Zn,o=!1){const u=this.elements,f=2*r/(t-e),h=2*r/(i-s),l=(t+e)/(t-e),p=(i+s)/(i-s);let g,x;if(o)g=r/(a-r),x=a*r/(a-r);else if(c===Zn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(c===Nr)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return u[0]=f,u[4]=0,u[8]=l,u[12]=0,u[1]=0,u[5]=h,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=x,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,s,r,a,c=Zn,o=!1){const u=this.elements,f=2/(t-e),h=2/(i-s),l=-(t+e)/(t-e),p=-(i+s)/(i-s);let g,x;if(o)g=1/(a-r),x=a/(a-r);else if(c===Zn)g=-2/(a-r),x=-(a+r)/(a-r);else if(c===Nr)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return u[0]=f,u[4]=0,u[8]=0,u[12]=l,u[1]=0,u[5]=h,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=g,u[14]=x,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};lo.prototype.isMatrix4=!0;let We=lo;const ms=new I,In=new We,Qp=new I(0,0,0),Kp=new I(1,1,1),Ti=new I,jr=new I,xn=new I,Gu=new We,ku=new wn;class zi{constructor(e=0,t=0,i=0,s=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],c=s[8],o=s[1],u=s[5],f=s[9],h=s[2],l=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Fe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(l,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(c,p),this._z=Math.atan2(o,u)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(l,p),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(c,p));break;case"XZY":this._z=Math.asin(-Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(l,u),this._y=Math.atan2(c,r)):(this._x=Math.atan2(-f,p),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Gu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ku.setFromEuler(this),this.setFromQuaternion(ku,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class Vl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jp=0;const Vu=new I,gs=new wn,ii=new We,Zr=new I,ur=new I,Zp=new I,Jp=new wn,Wu=new I(1,0,0),Xu=new I(0,1,0),Yu=new I(0,0,1),qu={type:"added"},$p={type:"removed"},vs={type:"childadded",child:null},Uo={type:"childremoved",child:null};class jt extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=Vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new I,t=new zi,i=new wn,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new We},normalMatrix:{value:new Ue}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(Wu,e)}rotateY(e){return this.rotateOnAxis(Xu,e)}rotateZ(e){return this.rotateOnAxis(Yu,e)}translateOnAxis(e,t){return Vu.copy(e).applyQuaternion(this.quaternion),this.position.add(Vu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wu,e)}translateY(e){return this.translateOnAxis(Xu,e)}translateZ(e){return this.translateOnAxis(Yu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zr.copy(e):Zr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(ur,Zr,this.up):ii.lookAt(Zr,ur,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),gs.setFromRotationMatrix(ii),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qu),vs.child=e,this.dispatchEvent(vs),vs.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($p),Uo.child=e,this.dispatchEvent(Uo),Uo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qu),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,e,Zp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,Jp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>({...c})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(c,o){return c[o.uuid]===void 0&&(c[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const o=c.shapes;if(Array.isArray(o))for(let u=0,f=o.length;u<f;u++){const h=o[u];r(e.shapes,h)}else r(e.shapes,o)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let o=0,u=this.material.length;o<u;o++)c.push(r(e.materials,this.material[o]));s.material=c}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const o=this.animations[c];s.animations.push(r(e.animations,o))}}if(t){const c=a(e.geometries),o=a(e.materials),u=a(e.textures),f=a(e.images),h=a(e.shapes),l=a(e.skeletons),p=a(e.animations),g=a(e.nodes);c.length>0&&(i.geometries=c),o.length>0&&(i.materials=o),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),l.length>0&&(i.skeletons=l),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(c){const o=[];for(const u in c){const f=c[u];delete f.metadata,o.push(f)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}jt.DEFAULT_UP=new I(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ws extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const em={type:"move"};class No{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ws,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ws,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ws,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const c=this._targetRay,o=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const x of e.hand.values()){const d=t.getJointPose(x,i),m=this._getHandJoint(u,x);d!==null&&(m.matrix.fromArray(d.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=d.radius),m.visible=d!==null}const f=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],l=f.position.distanceTo(h.position),p=.02,g=.005;u.inputState.pinching&&l>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&l<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));c!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(em)))}return c!==null&&(c.visible=s!==null),o!==null&&(o.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ws;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function Oo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Te{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ke.workingColorSpace){if(e=Op(e,1),t=Fe(t,0,1),i=Fe(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Oo(a,r,e+1/3),this.g=Oo(a,r,e),this.b=Oo(a,r,e-1/3)}return Ke.colorSpaceToWorking(this,s),this}setStyle(e,t=ut){function i(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],c=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ut){const i=id[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ut){return Ke.workingToColorSpace(sn.copy(this),e),Math.round(Fe(sn.r*255,0,255))*65536+Math.round(Fe(sn.g*255,0,255))*256+Math.round(Fe(sn.b*255,0,255))}getHexString(e=ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(sn.copy(this),t);const i=sn.r,s=sn.g,r=sn.b,a=Math.max(i,s,r),c=Math.min(i,s,r);let o,u;const f=(c+a)/2;if(c===a)o=0,u=0;else{const h=a-c;switch(u=f<=.5?h/(a+c):h/(2-a-c),a){case i:o=(s-r)/h+(s<r?6:0);break;case s:o=(r-i)/h+2;break;case r:o=(i-s)/h+4;break}o/=6}return e.h=o,e.s=u,e.l=f,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=ut){Ke.workingToColorSpace(sn.copy(this),e);const t=sn.r,i=sn.g,s=sn.b;return e!==ut?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(Jr);const i=Po(bi.h,Jr.h,t),s=Po(bi.s,Jr.s,t),r=Po(bi.l,Jr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new Te;Te.NAMES=id;class Wl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Te(e),this.density=t}clone(){return new Wl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Or extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ln=new I,si=new I,zo=new I,ri=new I,xs=new I,_s=new I,Qu=new I,Ho=new I,Go=new I,ko=new I,Vo=new nt,Wo=new nt,Xo=new nt;class Zt{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ln.subVectors(e,t),s.cross(Ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Ln.subVectors(s,t),si.subVectors(i,t),zo.subVectors(e,t);const a=Ln.dot(Ln),c=Ln.dot(si),o=Ln.dot(zo),u=si.dot(si),f=si.dot(zo),h=a*u-c*c;if(h===0)return r.set(0,0,0),null;const l=1/h,p=(u*o-c*f)*l,g=(a*f-c*o)*l;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,t,i,s,r,a,c,o){return this.getBarycoord(e,t,i,s,ri)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,ri.x),o.addScaledVector(a,ri.y),o.addScaledVector(c,ri.z),o)}static getInterpolatedAttribute(e,t,i,s,r,a){return Vo.setScalar(0),Wo.setScalar(0),Xo.setScalar(0),Vo.fromBufferAttribute(e,t),Wo.fromBufferAttribute(e,i),Xo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Vo,r.x),a.addScaledVector(Wo,r.y),a.addScaledVector(Xo,r.z),a}static isFrontFacing(e,t,i,s){return Ln.subVectors(i,t),si.subVectors(e,t),Ln.cross(si).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Ln.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Zt.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,c;xs.subVectors(s,i),_s.subVectors(r,i),Ho.subVectors(e,i);const o=xs.dot(Ho),u=_s.dot(Ho);if(o<=0&&u<=0)return t.copy(i);Go.subVectors(e,s);const f=xs.dot(Go),h=_s.dot(Go);if(f>=0&&h<=f)return t.copy(s);const l=o*h-f*u;if(l<=0&&o>=0&&f<=0)return a=o/(o-f),t.copy(i).addScaledVector(xs,a);ko.subVectors(e,r);const p=xs.dot(ko),g=_s.dot(ko);if(g>=0&&p<=g)return t.copy(r);const x=p*u-o*g;if(x<=0&&u>=0&&g<=0)return c=u/(u-g),t.copy(i).addScaledVector(_s,c);const d=f*g-p*h;if(d<=0&&h-f>=0&&p-g>=0)return Qu.subVectors(r,s),c=(h-f)/(h-f+(p-g)),t.copy(s).addScaledVector(Qu,c);const m=1/(d+x+l);return a=x*m,c=l*m,t.copy(i).addScaledVector(xs,a).addScaledVector(_s,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class un{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,c=r.count;a<c;a++)e.isMesh===!0?e.getVertexPosition(a,Fn):Fn.fromBufferAttribute(r,a),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$r.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$r.copy(i.boundingBox)),$r.applyMatrix4(e.matrixWorld),this.union($r)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fr),ea.subVectors(this.max,fr),As.subVectors(e.a,fr),ys.subVectors(e.b,fr),Ms.subVectors(e.c,fr),Ei.subVectors(ys,As),wi.subVectors(Ms,ys),qi.subVectors(As,Ms);let t=[0,-Ei.z,Ei.y,0,-wi.z,wi.y,0,-qi.z,qi.y,Ei.z,0,-Ei.x,wi.z,0,-wi.x,qi.z,0,-qi.x,-Ei.y,Ei.x,0,-wi.y,wi.x,0,-qi.y,qi.x,0];return!Yo(t,As,ys,Ms,ea)||(t=[1,0,0,0,1,0,0,0,1],!Yo(t,As,ys,Ms,ea))?!1:(ta.crossVectors(Ei,wi),t=[ta.x,ta.y,ta.z],Yo(t,As,ys,Ms,ea))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ai=[new I,new I,new I,new I,new I,new I,new I,new I],Fn=new I,$r=new un,As=new I,ys=new I,Ms=new I,Ei=new I,wi=new I,qi=new I,fr=new I,ea=new I,ta=new I,Qi=new I;function Yo(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Qi.fromArray(n,r);const c=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),o=e.dot(Qi),u=t.dot(Qi),f=i.dot(Qi);if(Math.max(-Math.max(o,u,f),Math.min(o,u,f))>c)return!1}return!0}const ui=tm();function tm(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),s=new Uint32Array(512);for(let o=0;o<256;++o){const u=o-127;u<-27?(i[o]=0,i[o|256]=32768,s[o]=24,s[o|256]=24):u<-14?(i[o]=1024>>-u-14,i[o|256]=1024>>-u-14|32768,s[o]=-u-1,s[o|256]=-u-1):u<=15?(i[o]=u+15<<10,i[o|256]=u+15<<10|32768,s[o]=13,s[o|256]=13):u<128?(i[o]=31744,i[o|256]=64512,s[o]=24,s[o|256]=24):(i[o]=31744,i[o|256]=64512,s[o]=13,s[o|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),c=new Uint32Array(64);for(let o=1;o<1024;++o){let u=o<<13,f=0;for(;!(u&8388608);)u<<=1,f-=8388608;u&=-8388609,f+=947912704,r[o]=u|f}for(let o=1024;o<2048;++o)r[o]=939524096+(o-1024<<13);for(let o=1;o<31;++o)a[o]=o<<23;a[31]=1199570944,a[32]=2147483648;for(let o=33;o<63;++o)a[o]=2147483648+(o-32<<23);a[63]=3347054592;for(let o=1;o<64;++o)o!==32&&(c[o]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:c}}function nm(n){Math.abs(n)>65504&&Le("DataUtils.toHalfFloat(): Value out of range."),n=Fe(n,-65504,65504),ui.floatView[0]=n;const e=ui.uint32View[0],t=e>>23&511;return ui.baseTable[t]+((e&8388607)>>ui.shiftTable[t])}function im(n){const e=n>>10;return ui.uint32View[0]=ui.mantissaTable[ui.offsetTable[e]+(n&1023)]+ui.exponentTable[e],ui.floatView[0]}class fi{static toHalfFloat(e){return nm(e)}static fromHalfFloat(e){return im(e)}}const Ft=new I,na=new Se;let sm=0;class $e extends ti{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Fu,this.updateRanges=[],this.gpuType=ht,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)na.fromBufferAttribute(this,t),na.applyMatrix3(e),this.setXY(t,na.x,na.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=lr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=hn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=lr(t,this.array)),t}setX(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=lr(t,this.array)),t}setY(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=lr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=lr(t,this.array)),t}setW(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array),s=hn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array),s=hn(s,this.array),r=hn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fu&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class sd extends $e{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class rd extends $e{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class mn extends $e{constructor(e,t,i){super(new Float32Array(e),t,i)}}const rm=new un,hr=new I,qo=new I;class mo{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):rm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hr.subVectors(e,this.center);const t=hr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(hr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hr.copy(e.center).add(qo)),this.expandByPoint(hr.copy(e.center).sub(qo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let am=0;const Sn=new We,Qo=new jt,Ss=new I,_n=new un,dr=new un,Xt=new I;class Lt extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=Vr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fp(e)?rd:sd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ue().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,i){return Sn.makeTranslation(e,t,i),this.applyMatrix4(Sn),this}scale(e,t,i){return Sn.makeScale(e,t,i),this.applyMatrix4(Sn),this}lookAt(e){return Qo.lookAt(e),Qo.updateMatrix(),this.applyMatrix4(Qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new mn(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const c=t[r];dr.setFromBufferAttribute(c),this.morphTargetsRelative?(Xt.addVectors(_n.min,dr.min),_n.expandByPoint(Xt),Xt.addVectors(_n.max,dr.max),_n.expandByPoint(Xt)):(_n.expandByPoint(dr.min),_n.expandByPoint(dr.max))}_n.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Xt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Xt));if(t)for(let r=0,a=t.length;r<a;r++){const c=t[r],o=this.morphTargetsRelative;for(let u=0,f=c.count;u<f;u++)Xt.fromBufferAttribute(c,u),o&&(Ss.fromBufferAttribute(e,u),Xt.add(Ss)),s=Math.max(s,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),c=[],o=[];for(let y=0;y<i.count;y++)c[y]=new I,o[y]=new I;const u=new I,f=new I,h=new I,l=new Se,p=new Se,g=new Se,x=new I,d=new I;function m(y,w,R){u.fromBufferAttribute(i,y),f.fromBufferAttribute(i,w),h.fromBufferAttribute(i,R),l.fromBufferAttribute(r,y),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,R),f.sub(u),h.sub(u),p.sub(l),g.sub(l);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(x.copy(f).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(C),d.copy(h).multiplyScalar(p.x).addScaledVector(f,-g.x).multiplyScalar(C),c[y].add(x),c[w].add(x),c[R].add(x),o[y].add(d),o[w].add(d),o[R].add(d))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let y=0,w=v.length;y<w;++y){const R=v[y],C=R.start,P=R.count;for(let B=C,U=C+P;B<U;B+=3)m(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const _=new I,A=new I,M=new I,S=new I;function b(y){M.fromBufferAttribute(s,y),S.copy(M);const w=c[y];_.copy(w),_.sub(M.multiplyScalar(M.dot(w))).normalize(),A.crossVectors(S,w);const C=A.dot(o[y])<0?-1:1;a.setXYZW(y,_.x,_.y,_.z,C)}for(let y=0,w=v.length;y<w;++y){const R=v[y],C=R.start,P=R.count;for(let B=C,U=C+P;B<U;B+=3)b(e.getX(B+0)),b(e.getX(B+1)),b(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $e(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let l=0,p=i.count;l<p;l++)i.setXYZ(l,0,0,0);const s=new I,r=new I,a=new I,c=new I,o=new I,u=new I,f=new I,h=new I;if(e)for(let l=0,p=e.count;l<p;l+=3){const g=e.getX(l+0),x=e.getX(l+1),d=e.getX(l+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,d),f.subVectors(a,r),h.subVectors(s,r),f.cross(h),c.fromBufferAttribute(i,g),o.fromBufferAttribute(i,x),u.fromBufferAttribute(i,d),c.add(f),o.add(f),u.add(f),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(d,u.x,u.y,u.z)}else for(let l=0,p=t.count;l<p;l+=3)s.fromBufferAttribute(t,l+0),r.fromBufferAttribute(t,l+1),a.fromBufferAttribute(t,l+2),f.subVectors(a,r),h.subVectors(s,r),f.cross(h),i.setXYZ(l+0,f.x,f.y,f.z),i.setXYZ(l+1,f.x,f.y,f.z),i.setXYZ(l+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(c,o){const u=c.array,f=c.itemSize,h=c.normalized,l=new u.constructor(o.length*f);let p=0,g=0;for(let x=0,d=o.length;x<d;x++){c.isInterleavedBufferAttribute?p=o[x]*c.data.stride+c.offset:p=o[x]*f;for(let m=0;m<f;m++)l[g++]=u[p++]}return new $e(l,f,h)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,i=this.index.array,s=this.attributes;for(const c in s){const o=s[c],u=e(o,i);t.setAttribute(c,u)}const r=this.morphAttributes;for(const c in r){const o=[],u=r[c];for(let f=0,h=u.length;f<h;f++){const l=u[f],p=e(l,i);o.push(p)}t.morphAttributes[c]=o}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let c=0,o=a.length;c<o;c++){const u=a[c];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const u in o)o[u]!==void 0&&(e[u]=o[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const o in i){const u=i[o];e.data.attributes[o]=u.toJSON(e.data)}const s={};let r=!1;for(const o in this.morphAttributes){const u=this.morphAttributes[o],f=[];for(let h=0,l=u.length;h<l;h++){const p=u[h];f.push(p.toJSON(e.data))}f.length>0&&(s[o]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const u in s){const f=s[u];this.setAttribute(u,f.clone(t))}const r=e.morphAttributes;for(const u in r){const f=[],h=r[u];for(let l=0,p=h.length;l<p;l++)f.push(h[l].clone(t));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,f=a.length;u<f;u++){const h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let om=0;class ki extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=Vr(),this.name="",this.type="Material",this.blending=Ni,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rc,this.blendDst=Dc,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(i.blending=this.blending),this.side!==Rn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rc&&(i.blendSrc=this.blendSrc),this.blendDst!==Dc&&(i.blendDst=this.blendDst),this.blendEquation!==ss&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const c in r){const o=r[c];delete o.metadata,a.push(o)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const oi=new I,Ko=new I,ia=new I,Ci=new I,jo=new I,sa=new I,Zo=new I;class go{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,t),oi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ko.copy(e).add(t).multiplyScalar(.5),ia.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub(Ko);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ia),c=Ci.dot(this.direction),o=-Ci.dot(ia),u=Ci.lengthSq(),f=Math.abs(1-a*a);let h,l,p,g;if(f>0)if(h=a*o-c,l=a*c-o,g=r*f,h>=0)if(l>=-g)if(l<=g){const x=1/f;h*=x,l*=x,p=h*(h+a*l+2*c)+l*(a*h+l+2*o)+u}else l=r,h=Math.max(0,-(a*l+c)),p=-h*h+l*(l+2*o)+u;else l=-r,h=Math.max(0,-(a*l+c)),p=-h*h+l*(l+2*o)+u;else l<=-g?(h=Math.max(0,-(-a*r+c)),l=h>0?-r:Math.min(Math.max(-r,-o),r),p=-h*h+l*(l+2*o)+u):l<=g?(h=0,l=Math.min(Math.max(-r,-o),r),p=l*(l+2*o)+u):(h=Math.max(0,-(a*r+c)),l=h>0?r:Math.min(Math.max(-r,-o),r),p=-h*h+l*(l+2*o)+u);else l=a>0?-r:r,h=Math.max(0,-(a*l+c)),p=-h*h+l*(l+2*o)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ko).addScaledVector(ia,l),p}intersectSphere(e,t){oi.subVectors(e.center,this.origin);const i=oi.dot(this.direction),s=oi.dot(oi)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),c=i-a,o=i+a;return o<0?null:c<0?this.at(o,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,c,o;const u=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,l=this.origin;return u>=0?(i=(e.min.x-l.x)*u,s=(e.max.x-l.x)*u):(i=(e.max.x-l.x)*u,s=(e.min.x-l.x)*u),f>=0?(r=(e.min.y-l.y)*f,a=(e.max.y-l.y)*f):(r=(e.max.y-l.y)*f,a=(e.min.y-l.y)*f),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(c=(e.min.z-l.z)*h,o=(e.max.z-l.z)*h):(c=(e.max.z-l.z)*h,o=(e.min.z-l.z)*h),i>o||c>s)||((c>i||i!==i)&&(i=c),(o<s||s!==s)&&(s=o),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,t,i,s,r){jo.subVectors(t,e),sa.subVectors(i,e),Zo.crossVectors(jo,sa);let a=this.direction.dot(Zo),c;if(a>0){if(s)return null;c=1}else if(a<0)c=-1,a=-a;else return null;Ci.subVectors(this.origin,e);const o=c*this.direction.dot(sa.crossVectors(Ci,sa));if(o<0)return null;const u=c*this.direction.dot(jo.cross(Ci));if(u<0||o+u>a)return null;const f=-c*Ci.dot(Zo);return f<0?null:this.at(f/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nr extends ki{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=Wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ku=new We,Ki=new go,ra=new mo,ju=new I,aa=new I,oa=new I,ca=new I,Jo=new I,la=new I,Zu=new I,ua=new I;class st extends jt{constructor(e=new Lt,t=new nr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const c=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const c=this.morphTargetInfluences;if(r&&c){la.set(0,0,0);for(let o=0,u=r.length;o<u;o++){const f=c[o],h=r[o];f!==0&&(Jo.fromBufferAttribute(h,e),a?la.addScaledVector(Jo,f):la.addScaledVector(Jo.sub(t),f))}t.add(la)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ra.copy(i.boundingSphere),ra.applyMatrix4(r),Ki.copy(e.ray).recast(e.near),!(ra.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(ra,ju)===null||Ki.origin.distanceToSquared(ju)>(e.far-e.near)**2))&&(Ku.copy(r).invert(),Ki.copy(e.ray).applyMatrix4(Ku),!(i.boundingBox!==null&&Ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ki)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,c=r.index,o=r.attributes.position,u=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,l=r.groups,p=r.drawRange;if(c!==null)if(Array.isArray(a))for(let g=0,x=l.length;g<x;g++){const d=l[g],m=a[d.materialIndex],v=Math.max(d.start,p.start),_=Math.min(c.count,Math.min(d.start+d.count,p.start+p.count));for(let A=v,M=_;A<M;A+=3){const S=c.getX(A),b=c.getX(A+1),y=c.getX(A+2);s=fa(this,m,e,i,u,f,h,S,b,y),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let d=g,m=x;d<m;d+=3){const v=c.getX(d),_=c.getX(d+1),A=c.getX(d+2);s=fa(this,a,e,i,u,f,h,v,_,A),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(o!==void 0)if(Array.isArray(a))for(let g=0,x=l.length;g<x;g++){const d=l[g],m=a[d.materialIndex],v=Math.max(d.start,p.start),_=Math.min(o.count,Math.min(d.start+d.count,p.start+p.count));for(let A=v,M=_;A<M;A+=3){const S=A,b=A+1,y=A+2;s=fa(this,m,e,i,u,f,h,S,b,y),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let d=g,m=x;d<m;d+=3){const v=d,_=d+1,A=d+2;s=fa(this,a,e,i,u,f,h,v,_,A),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}}function cm(n,e,t,i,s,r,a,c){let o;if(e.side===Ut?o=i.intersectTriangle(a,r,s,!0,c):o=i.intersectTriangle(s,r,a,e.side===Rn,c),o===null)return null;ua.copy(c),ua.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(ua);return u<t.near||u>t.far?null:{distance:u,point:ua.clone(),object:n}}function fa(n,e,t,i,s,r,a,c,o,u){n.getVertexPosition(c,aa),n.getVertexPosition(o,oa),n.getVertexPosition(u,ca);const f=cm(n,e,t,i,aa,oa,ca,Zu);if(f){const h=new I;Zt.getBarycoord(Zu,aa,oa,ca,h),s&&(f.uv=Zt.getInterpolatedAttribute(s,c,o,u,h,new Se)),r&&(f.uv1=Zt.getInterpolatedAttribute(r,c,o,u,h,new Se)),a&&(f.normal=Zt.getInterpolatedAttribute(a,c,o,u,h,new I),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const l={a:c,b:o,c:u,normal:new I,materialIndex:0};Zt.getNormal(aa,oa,ca,l.normal),f.face=l,f.barycoord=h}return f}class yn extends Ot{constructor(e=null,t=1,i=1,s,r,a,c,o,u=Ge,f=Ge,h,l){super(null,a,c,o,u,f,s,r,h,l),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $o=new I,lm=new I,um=new Ue;class Qn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=$o.subVectors(i,t).cross(lm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta($o),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||um.getNormalMatrix(e),s=this.coplanarPoint($o).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new mo,fm=new Se(.5,.5),ha=new I;class Xl{constructor(e=new Qn,t=new Qn,i=new Qn,s=new Qn,r=new Qn,a=new Qn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(s),c[4].copy(r),c[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Zn,i=!1){const s=this.planes,r=e.elements,a=r[0],c=r[1],o=r[2],u=r[3],f=r[4],h=r[5],l=r[6],p=r[7],g=r[8],x=r[9],d=r[10],m=r[11],v=r[12],_=r[13],A=r[14],M=r[15];if(s[0].setComponents(u-a,p-f,m-g,M-v).normalize(),s[1].setComponents(u+a,p+f,m+g,M+v).normalize(),s[2].setComponents(u+c,p+h,m+x,M+_).normalize(),s[3].setComponents(u-c,p-h,m-x,M-_).normalize(),i)s[4].setComponents(o,l,d,A).normalize(),s[5].setComponents(u-o,p-l,m-d,M-A).normalize();else if(s[4].setComponents(u-o,p-l,m-d,M-A).normalize(),t===Zn)s[5].setComponents(u+o,p+l,m+d,M+A).normalize();else if(t===Nr)s[5].setComponents(o,l,d,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){ji.center.set(0,0,0);const t=fm.distanceTo(e.center);return ji.radius=.7071067811865476+t,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ha.x=s.normal.x>0?e.max.x:e.min.x,ha.y=s.normal.y>0?e.max.y:e.min.y,ha.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ha)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ad extends ki{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ju=new We,vl=new go,da=new mo,pa=new I;class od extends jt{constructor(e=new Lt,t=new ad){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),da.copy(i.boundingSphere),da.applyMatrix4(s),da.radius+=r,e.ray.intersectsSphere(da)===!1)return;Ju.copy(s).invert(),vl.copy(e.ray).applyMatrix4(Ju);const c=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=c*c,u=i.index,h=i.attributes.position;if(u!==null){const l=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=l,x=p;g<x;g++){const d=u.getX(g);pa.fromBufferAttribute(h,d),$u(pa,d,o,s,e,t,this)}}else{const l=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=l,x=p;g<x;g++)pa.fromBufferAttribute(h,g),$u(pa,g,o,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const c=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}}function $u(n,e,t,i,s,r,a){const c=vl.distanceSqToPoint(n);if(c<t){const o=new I;vl.closestPointToPoint(n,o),o.applyMatrix4(i);const u=s.ray.origin.distanceTo(o);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(c),point:o,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class cd extends Ot{constructor(e=[],t=cs,i,s,r,a,c,o,u,f){super(e,t,i,s,r,a,c,o,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hm extends Ot{constructor(e,t,i,s,r,a,c,o,u){super(e,t,i,s,r,a,c,o,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ls extends Ot{constructor(e,t,i=ln,s,r,a,c=Ge,o=Ge,u,f=mi,h=1){if(f!==mi&&f!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const l={width:e,height:t,depth:h};super(l,s,r,a,c,o,f,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ho(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class dm extends ls{constructor(e,t=ln,i=cs,s,r,a=Ge,c=Ge,o,u=mi){const f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,t,i,s,r,a,c,o,u),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ld extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Vi extends Lt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const c=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const o=[],u=[],f=[],h=[];let l=0,p=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(o),this.setAttribute("position",new mn(u,3)),this.setAttribute("normal",new mn(f,3)),this.setAttribute("uv",new mn(h,2));function g(x,d,m,v,_,A,M,S,b,y,w){const R=A/b,C=M/y,P=A/2,B=M/2,U=S/2,F=b+1,k=y+1;let L=0,W=0;const O=new I;for(let z=0;z<k;z++){const j=z*C-B;for(let $=0;$<F;$++){const de=$*R-P;O[x]=de*v,O[d]=j*_,O[m]=U,u.push(O.x,O.y,O.z),O[x]=0,O[d]=0,O[m]=S>0?1:-1,f.push(O.x,O.y,O.z),h.push($/b),h.push(1-z/y),L+=1}}for(let z=0;z<y;z++)for(let j=0;j<b;j++){const $=l+j+F*z,de=l+j+F*(z+1),Ce=l+(j+1)+F*(z+1),ae=l+(j+1)+F*z;o.push($,de,ae),o.push(de,Ce,ae),W+=6}c.addGroup(p,W,w),p+=W,l+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class rr extends Lt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,c=Math.floor(i),o=Math.floor(s),u=c+1,f=o+1,h=e/c,l=t/o,p=[],g=[],x=[],d=[];for(let m=0;m<f;m++){const v=m*l-a;for(let _=0;_<u;_++){const A=_*h-r;g.push(A,-v,0),x.push(0,0,1),d.push(_/c),d.push(1-m/o)}}for(let m=0;m<o;m++)for(let v=0;v<c;v++){const _=v+u*m,A=v+u*(m+1),M=v+1+u*(m+1),S=v+1+u*m;p.push(_,A,S),p.push(A,M,S)}this.setIndex(p),this.setAttribute("position",new mn(g,3)),this.setAttribute("normal",new mn(x,3)),this.setAttribute("uv",new mn(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.width,e.height,e.widthSegments,e.heightSegments)}}class io extends Lt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:c},i=Math.floor(i),s=Math.floor(s);const o=[],u=[],f=[],h=[],l=new I,p=new I,g=new I;for(let x=0;x<=i;x++){const d=a+x/i*c;for(let m=0;m<=s;m++){const v=m/s*r;p.x=(e+t*Math.cos(d))*Math.cos(v),p.y=(e+t*Math.cos(d))*Math.sin(v),p.z=t*Math.sin(d),u.push(p.x,p.y,p.z),l.x=e*Math.cos(v),l.y=e*Math.sin(v),g.subVectors(p,l).normalize(),f.push(g.x,g.y,g.z),h.push(m/s),h.push(x/i)}}for(let x=1;x<=i;x++)for(let d=1;d<=s;d++){const m=(s+1)*x+d-1,v=(s+1)*(x-1)+d-1,_=(s+1)*(x-1)+d,A=(s+1)*x+d;o.push(m,v,A),o.push(v,_,A)}this.setIndex(o),this.setAttribute("position",new mn(u,3)),this.setAttribute("normal",new mn(f,3)),this.setAttribute("uv",new mn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function ir(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(ef(s))s.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(ef(s[0])){const r=[];for(let a=0,c=s.length;a<c;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function on(n){const e={};for(let t=0;t<n.length;t++){const i=ir(n[t]);for(const s in i)e[s]=i[s]}return e}function ef(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function pm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ud(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const mm={clone:ir,merge:on};var gm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class St extends ki{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gm,this.fragmentShader=vm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ir(e.uniforms),this.uniformsGroups=pm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class xm extends St{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ya extends ki{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pl,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wr extends Ya{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Fe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class _m extends ki{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=us,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Am extends ki{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ym{constructor(e,t,i){const s=this;let r=!1,a=0,c=0,o;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(f){c++,r===!1&&s.onStart!==void 0&&s.onStart(f,a,c),r=!0},this.itemEnd=function(f){a++,s.onProgress!==void 0&&s.onProgress(f,a,c),a===c&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return o?o(f):f},this.setURLModifier=function(f){return o=f,this},this.addHandler=function(f,h){return u.push(f,h),this},this.removeHandler=function(f){const h=u.indexOf(f);return h!==-1&&u.splice(h,2),this},this.getHandler=function(f){for(let h=0,l=u.length;h<l;h+=2){const p=u[h],g=u[h+1];if(p.global&&(p.lastIndex=0),p.test(f))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}class Yl extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Mm extends Yl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ec=new We,tf=new I,nf=new I;class Sm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.mapType=Mt,this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xl,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;tf.setFromMatrixPosition(e.matrixWorld),t.position.copy(tf),nf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nf),t.updateMatrixWorld(),ec.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ec,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Nr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ec)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ma=new I,ga=new wn,Yn=new I;class fd extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ma,ga,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ma,ga,Yn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(ma,ga,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ma,ga,Yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new I,sf=new Se,rf=new Se;class cn extends fd{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Do*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gl*2*Math.atan(Math.tan(Do*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,t){return this.getViewBounds(e,sf,rf),t.subVectors(rf,sf)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Do*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const o=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/o,t-=a.offsetY*i/u,s*=a.width/o,i*=a.height/u}const c=this.filmOffset;c!==0&&(r+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Xr extends fd{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,c=s+t,o=s-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,c-=f*this.view.offsetY,o=c-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,c,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Tm extends Sm{constructor(){super(new Xr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class af extends Yl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new Tm}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class bm extends Yl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ts=-90,bs=1;class Em extends jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new cn(Ts,bs,e,t);s.layers=this.layers,this.add(s);const r=new cn(Ts,bs,e,t);r.layers=this.layers,this.add(r);const a=new cn(Ts,bs,e,t);a.layers=this.layers,this.add(a);const c=new cn(Ts,bs,e,t);c.layers=this.layers,this.add(c);const o=new cn(Ts,bs,e,t);o.layers=this.layers,this.add(o);const u=new cn(Ts,bs,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,c,o]=t;for(const u of t)this.remove(u);if(e===Zn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Nr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,c,o,u,f]=this.children,h=e.getRenderTarget(),l=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let d=!1;e.isWebGLRenderer===!0?d=e.state.buffers.depth.getReversed():d=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,3,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(h,l,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class wm extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ne{constructor(e){this.value=e}clone(){return new Ne(this.value.clone===void 0?this.value:this.value.clone())}}const of=new We;class Cm{constructor(e,t,i=0,s=1/0){this.ray=new go(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Vl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return of.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(of),this}intersectObject(e,t=!0,i=[]){return xl(e,this,i,t),i.sort(cf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)xl(e[s],this,i,t);return i.sort(cf),i}}function cf(n,e){return n.distance-e.distance}function xl(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,c=r.length;a<c;a++)xl(r[a],e,t,!0)}}class hd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Le("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Rm{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Fe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Fe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const yu=class yu{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};yu.prototype.isMatrix2=!0;let lf=yu;const uf=new I,va=new I,Es=new I,ws=new I,tc=new I,Dm=new I,Pm=new I;class vi{constructor(e=new I,t=new I){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){uf.subVectors(e,this.start),va.subVectors(this.end,this.start);const i=va.dot(va);if(i===0)return 0;let r=va.dot(uf)/i;return t&&(r=Fe(r,0,1)),r}closestPointToPoint(e,t,i){const s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=Dm,i=Pm){const s=10000000000000001e-32;let r,a;const c=this.start,o=e.start,u=this.end,f=e.end;Es.subVectors(u,c),ws.subVectors(f,o),tc.subVectors(c,o);const h=Es.dot(Es),l=ws.dot(ws),p=ws.dot(tc);if(h<=s&&l<=s)return t.copy(c),i.copy(o),t.sub(i),t.dot(t);if(h<=s)r=0,a=p/l,a=Fe(a,0,1);else{const g=Es.dot(tc);if(l<=s)a=0,r=Fe(-g/h,0,1);else{const x=Es.dot(ws),d=h*l-x*x;d!==0?r=Fe((x*p-g*l)/d,0,1):r=0,a=(x*r+p)/l,a<0?(a=0,r=Fe(-g/h,0,1)):a>1&&(a=1,r=Fe((x-g)/h,0,1))}}return t.copy(c).addScaledVector(Es,r),i.copy(o).addScaledVector(ws,a),t.distanceToSquared(i)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function ff(n,e,t,i){const s=Im(i);switch(t){case ed:return n*e;case $s:return n*e/s.components*s.byteLength;case fo:return n*e/s.components*s.byteLength;case gi:return n*e*2/s.components*s.byteLength;case kr:return n*e*2/s.components*s.byteLength;case td:return n*e*3/s.components*s.byteLength;case rt:return n*e*4/s.components*s.byteLength;case er:return n*e*4/s.components*s.byteLength;case ka:case Va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wa:case Xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zc:case Gc:return Math.max(n,16)*Math.max(e,8)/4;case Oc:case Hc:return Math.max(n,8)*Math.max(e,8)/2;case kc:case Vc:case Xc:case Yc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wc:case $a:case qc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case jc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case $c:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case el:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case tl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case nl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case il:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case sl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case rl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case al:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ol:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case cl:case ll:case ul:return Math.ceil(n/4)*Math.ceil(e/4)*16;case fl:case hl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case eo:case dl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Im(n){switch(n){case Mt:case Ja:return{byteLength:1,components:1};case Zs:case Ol:case Gt:return{byteLength:2,components:1};case zl:case Hl:return{byteLength:2,components:4};case ln:case Ys:case ht:return{byteLength:4,components:1};case Jh:case $h:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_i}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_i);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dd(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Lm(n){const e=new WeakMap;function t(c,o){const u=c.array,f=c.usage,h=u.byteLength,l=n.createBuffer();n.bindBuffer(o,l),n.bufferData(o,u,f),c.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=n.HALF_FLOAT;else if(u instanceof Uint16Array)c.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:l,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:h}}function i(c,o,u){const f=o.array,h=o.updateRanges;if(n.bindBuffer(u,c),h.length===0)n.bufferSubData(u,0,f);else{h.sort((p,g)=>p.start-g.start);let l=0;for(let p=1;p<h.length;p++){const g=h[l],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++l,h[l]=x)}h.length=l+1;for(let p=0,g=h.length;p<g;p++){const x=h[p];n.bufferSubData(u,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}o.clearUpdateRanges()}o.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);const o=e.get(c);o&&(n.deleteBuffer(o.buffer),e.delete(c))}function a(c,o){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const f=e.get(c);(!f||f.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const u=e.get(c);if(u===void 0)e.set(c,t(c,o));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,c,o),u.version=c.version}}return{get:s,remove:r,update:a}}var Fm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bm=`#ifdef USE_ALPHAHASH
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
#endif`,Um=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Om=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hm=`#ifdef USE_AOMAP
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
#endif`,Gm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,km=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Vm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ym=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qm=`#ifdef USE_IRIDESCENCE
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
#endif`,Qm=`#ifdef USE_BUMPMAP
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
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,eg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,tg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ng=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ig=`#define PI 3.141592653589793
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
} // validated`,sg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rg=`vec3 transformedNormal = objectNormal;
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
#endif`,ag=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,og=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ug="gl_FragColor = linearToOutputTexel( gl_FragColor );",fg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hg=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,dg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,pg=`#ifdef USE_ENVMAP
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
#endif`,mg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gg=`#ifdef USE_ENVMAP
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
#endif`,vg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_g=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ag=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yg=`#ifdef USE_GRADIENTMAP
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
}`,Mg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bg=`uniform bool receiveShadow;
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
#endif
#include <lightprobes_pars_fragment>`,Eg=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,wg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Ig=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Lg=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,Bg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ug=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ng=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Og=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wg=`#if defined( USE_POINTS_UV )
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
#endif`,Xg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jg=`#ifdef USE_MORPHTARGETS
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
#endif`,Zg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$g=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,e0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,i0=`#ifdef USE_NORMALMAP
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
#endif`,s0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,a0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,o0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,c0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,u0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,f0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,h0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,v0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,_0=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,A0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,y0=`#ifdef USE_SKINNING
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
#endif`,M0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,S0=`#ifdef USE_SKINNING
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
#endif`,T0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,b0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,E0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,C0=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,R0=`#ifdef USE_TRANSMISSION
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
#endif`,D0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const F0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B0=`uniform sampler2D t2D;
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
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H0=`#include <common>
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
}`,G0=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,k0=`#define DISTANCE
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
}`,V0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y0=`uniform float scale;
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
}`,q0=`uniform vec3 diffuse;
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
}`,Q0=`#include <common>
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
}`,K0=`uniform vec3 diffuse;
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
}`,j0=`#define LAMBERT
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
}`,Z0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,J0=`#define MATCAP
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
}`,$0=`#define MATCAP
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
}`,ev=`#define NORMAL
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
}`,tv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nv=`#define PHONG
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
}`,iv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,sv=`#define STANDARD
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
}`,rv=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,av=`#define TOON
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
}`,ov=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,cv=`uniform float size;
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
}`,lv=`uniform vec3 diffuse;
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
}`,uv=`#include <common>
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
}`,fv=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,hv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,dv=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:Fm,alphahash_pars_fragment:Bm,alphamap_fragment:Um,alphamap_pars_fragment:Nm,alphatest_fragment:Om,alphatest_pars_fragment:zm,aomap_fragment:Hm,aomap_pars_fragment:Gm,batching_pars_vertex:km,batching_vertex:Vm,begin_vertex:Wm,beginnormal_vertex:Xm,bsdfs:Ym,iridescence_fragment:qm,bumpmap_pars_fragment:Qm,clipping_planes_fragment:Km,clipping_planes_pars_fragment:jm,clipping_planes_pars_vertex:Zm,clipping_planes_vertex:Jm,color_fragment:$m,color_pars_fragment:eg,color_pars_vertex:tg,color_vertex:ng,common:ig,cube_uv_reflection_fragment:sg,defaultnormal_vertex:rg,displacementmap_pars_vertex:ag,displacementmap_vertex:og,emissivemap_fragment:cg,emissivemap_pars_fragment:lg,colorspace_fragment:ug,colorspace_pars_fragment:fg,envmap_fragment:hg,envmap_common_pars_fragment:dg,envmap_pars_fragment:pg,envmap_pars_vertex:mg,envmap_physical_pars_fragment:Eg,envmap_vertex:gg,fog_vertex:vg,fog_pars_vertex:xg,fog_fragment:_g,fog_pars_fragment:Ag,gradientmap_pars_fragment:yg,lightmap_pars_fragment:Mg,lights_lambert_fragment:Sg,lights_lambert_pars_fragment:Tg,lights_pars_begin:bg,lights_toon_fragment:wg,lights_toon_pars_fragment:Cg,lights_phong_fragment:Rg,lights_phong_pars_fragment:Dg,lights_physical_fragment:Pg,lights_physical_pars_fragment:Ig,lights_fragment_begin:Lg,lights_fragment_maps:Fg,lights_fragment_end:Bg,lightprobes_pars_fragment:Ug,logdepthbuf_fragment:Ng,logdepthbuf_pars_fragment:Og,logdepthbuf_pars_vertex:zg,logdepthbuf_vertex:Hg,map_fragment:Gg,map_pars_fragment:kg,map_particle_fragment:Vg,map_particle_pars_fragment:Wg,metalnessmap_fragment:Xg,metalnessmap_pars_fragment:Yg,morphinstance_vertex:qg,morphcolor_vertex:Qg,morphnormal_vertex:Kg,morphtarget_pars_vertex:jg,morphtarget_vertex:Zg,normal_fragment_begin:Jg,normal_fragment_maps:$g,normal_pars_fragment:e0,normal_pars_vertex:t0,normal_vertex:n0,normalmap_pars_fragment:i0,clearcoat_normal_fragment_begin:s0,clearcoat_normal_fragment_maps:r0,clearcoat_pars_fragment:a0,iridescence_pars_fragment:o0,opaque_fragment:c0,packing:l0,premultiplied_alpha_fragment:u0,project_vertex:f0,dithering_fragment:h0,dithering_pars_fragment:d0,roughnessmap_fragment:p0,roughnessmap_pars_fragment:m0,shadowmap_pars_fragment:g0,shadowmap_pars_vertex:v0,shadowmap_vertex:x0,shadowmask_pars_fragment:_0,skinbase_vertex:A0,skinning_pars_vertex:y0,skinning_vertex:M0,skinnormal_vertex:S0,specularmap_fragment:T0,specularmap_pars_fragment:b0,tonemapping_fragment:E0,tonemapping_pars_fragment:w0,transmission_fragment:C0,transmission_pars_fragment:R0,uv_pars_fragment:D0,uv_pars_vertex:P0,uv_vertex:I0,worldpos_vertex:L0,background_vert:F0,background_frag:B0,backgroundCube_vert:U0,backgroundCube_frag:N0,cube_vert:O0,cube_frag:z0,depth_vert:H0,depth_frag:G0,distance_vert:k0,distance_frag:V0,equirect_vert:W0,equirect_frag:X0,linedashed_vert:Y0,linedashed_frag:q0,meshbasic_vert:Q0,meshbasic_frag:K0,meshlambert_vert:j0,meshlambert_frag:Z0,meshmatcap_vert:J0,meshmatcap_frag:$0,meshnormal_vert:ev,meshnormal_frag:tv,meshphong_vert:nv,meshphong_frag:iv,meshphysical_vert:sv,meshphysical_frag:rv,meshtoon_vert:av,meshtoon_frag:ov,points_vert:cv,points_frag:lv,shadow_vert:uv,shadow_frag:fv,sprite_vert:hv,sprite_frag:dv},me={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Kn={basic:{uniforms:on([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:on([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Te(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:on([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:on([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:on([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Te(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:on([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:on([me.points,me.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:on([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:on([me.common,me.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:on([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:on([me.sprite,me.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:on([me.common,me.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:on([me.lights,me.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Kn.physical={uniforms:on([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const xa={r:0,b:0,g:0},pv=new We,pd=new Ue;pd.set(-1,0,0,0,1,0,0,0,1);function mv(n,e,t,i,s,r){const a=new Te(0);let c=s===!0?0:1,o,u,f=null,h=0,l=null;function p(v){let _=v.isScene===!0?v.background:null;if(_&&_.isTexture){const A=v.backgroundBlurriness>0;_=e.get(_,A)}return _}function g(v){let _=!1;const A=p(v);A===null?d(a,c):A&&A.isColor&&(d(A,1),_=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||_)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(v,_){const A=p(_);A&&(A.isCubeTexture||A.mapping===uo)?(u===void 0&&(u=new st(new Vi(1,1,1),new St({name:"BackgroundCubeMaterial",uniforms:ir(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,S,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=A,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(pv.makeRotationFromEuler(_.backgroundRotation)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(pd),u.material.toneMapped=Ke.getTransfer(A.colorSpace)!==it,(f!==A||h!==A.version||l!==n.toneMapping)&&(u.material.needsUpdate=!0,f=A,h=A.version,l=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(o===void 0&&(o=new st(new rr(2,2),new St({name:"BackgroundMaterial",uniforms:ir(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=A,o.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,o.material.toneMapped=Ke.getTransfer(A.colorSpace)!==it,A.matrixAutoUpdate===!0&&A.updateMatrix(),o.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||h!==A.version||l!==n.toneMapping)&&(o.material.needsUpdate=!0,f=A,h=A.version,l=n.toneMapping),o.layers.enableAll(),v.unshift(o,o.geometry,o.material,0,0,null))}function d(v,_){v.getRGB(xa,ud(n)),t.buffers.color.setClear(xa.r,xa.g,xa.b,_,r)}function m(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),c=_,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,d(a,c)},render:g,addToRenderList:x,dispose:m}}function gv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=l(null);let r=s,a=!1;function c(C,P,B,U,F){let k=!1;const L=h(C,U,B,P);r!==L&&(r=L,u(r.object)),k=p(C,U,B,F),k&&g(C,U,B,F),F!==null&&e.update(F,n.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,A(C,P,B,U),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function o(){return n.createVertexArray()}function u(C){return n.bindVertexArray(C)}function f(C){return n.deleteVertexArray(C)}function h(C,P,B,U){const F=U.wireframe===!0;let k=i[P.id];k===void 0&&(k={},i[P.id]=k);const L=C.isInstancedMesh===!0?C.id:0;let W=k[L];W===void 0&&(W={},k[L]=W);let O=W[B.id];O===void 0&&(O={},W[B.id]=O);let z=O[F];return z===void 0&&(z=l(o()),O[F]=z),z}function l(C){const P=[],B=[],U=[];for(let F=0;F<t;F++)P[F]=0,B[F]=0,U[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:U,object:C,attributes:{},index:null}}function p(C,P,B,U){const F=r.attributes,k=P.attributes;let L=0;const W=B.getAttributes();for(const O in W)if(W[O].location>=0){const j=F[O];let $=k[O];if($===void 0&&(O==="instanceMatrix"&&C.instanceMatrix&&($=C.instanceMatrix),O==="instanceColor"&&C.instanceColor&&($=C.instanceColor)),j===void 0||j.attribute!==$||$&&j.data!==$.data)return!0;L++}return r.attributesNum!==L||r.index!==U}function g(C,P,B,U){const F={},k=P.attributes;let L=0;const W=B.getAttributes();for(const O in W)if(W[O].location>=0){let j=k[O];j===void 0&&(O==="instanceMatrix"&&C.instanceMatrix&&(j=C.instanceMatrix),O==="instanceColor"&&C.instanceColor&&(j=C.instanceColor));const $={};$.attribute=j,j&&j.data&&($.data=j.data),F[O]=$,L++}r.attributes=F,r.attributesNum=L,r.index=U}function x(){const C=r.newAttributes;for(let P=0,B=C.length;P<B;P++)C[P]=0}function d(C){m(C,0)}function m(C,P){const B=r.newAttributes,U=r.enabledAttributes,F=r.attributeDivisors;B[C]=1,U[C]===0&&(n.enableVertexAttribArray(C),U[C]=1),F[C]!==P&&(n.vertexAttribDivisor(C,P),F[C]=P)}function v(){const C=r.newAttributes,P=r.enabledAttributes;for(let B=0,U=P.length;B<U;B++)P[B]!==C[B]&&(n.disableVertexAttribArray(B),P[B]=0)}function _(C,P,B,U,F,k,L){L===!0?n.vertexAttribIPointer(C,P,B,F,k):n.vertexAttribPointer(C,P,B,U,F,k)}function A(C,P,B,U){x();const F=U.attributes,k=B.getAttributes(),L=P.defaultAttributeValues;for(const W in k){const O=k[W];if(O.location>=0){let z=F[W];if(z===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(z=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(z=C.instanceColor)),z!==void 0){const j=z.normalized,$=z.itemSize,de=e.get(z);if(de===void 0)continue;const Ce=de.buffer,ae=de.type,Q=de.bytesPerElement,ne=ae===n.INT||ae===n.UNSIGNED_INT||z.gpuType===Ys;if(z.isInterleavedBufferAttribute){const ie=z.data,Ee=ie.stride,Ie=z.offset;if(ie.isInstancedInterleavedBuffer){for(let Pe=0;Pe<O.locationSize;Pe++)m(O.location+Pe,ie.meshPerAttribute);C.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Pe=0;Pe<O.locationSize;Pe++)d(O.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let Pe=0;Pe<O.locationSize;Pe++)_(O.location+Pe,$/O.locationSize,ae,j,Ee*Q,(Ie+$/O.locationSize*Pe)*Q,ne)}else{if(z.isInstancedBufferAttribute){for(let ie=0;ie<O.locationSize;ie++)m(O.location+ie,z.meshPerAttribute);C.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let ie=0;ie<O.locationSize;ie++)d(O.location+ie);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let ie=0;ie<O.locationSize;ie++)_(O.location+ie,$/O.locationSize,ae,j,$*Q,$/O.locationSize*ie*Q,ne)}}else if(L!==void 0){const j=L[W];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(O.location,j);break;case 3:n.vertexAttrib3fv(O.location,j);break;case 4:n.vertexAttrib4fv(O.location,j);break;default:n.vertexAttrib1fv(O.location,j)}}}}v()}function M(){w();for(const C in i){const P=i[C];for(const B in P){const U=P[B];for(const F in U){const k=U[F];for(const L in k)f(k[L].object),delete k[L];delete U[F]}}delete i[C]}}function S(C){if(i[C.id]===void 0)return;const P=i[C.id];for(const B in P){const U=P[B];for(const F in U){const k=U[F];for(const L in k)f(k[L].object),delete k[L];delete U[F]}}delete i[C.id]}function b(C){for(const P in i){const B=i[P];for(const U in B){const F=B[U];if(F[C.id]===void 0)continue;const k=F[C.id];for(const L in k)f(k[L].object),delete k[L];delete F[C.id]}}}function y(C){for(const P in i){const B=i[P],U=C.isInstancedMesh===!0?C.id:0,F=B[U];if(F!==void 0){for(const k in F){const L=F[k];for(const W in L)f(L[W].object),delete L[W];delete F[k]}delete B[U],Object.keys(B).length===0&&delete i[P]}}}function w(){R(),a=!0,r!==s&&(r=s,u(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:w,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:y,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:d,disableUnusedAttributes:v}}function vv(n,e,t){let i;function s(o){i=o}function r(o,u){n.drawArrays(i,o,u),t.update(u,i,1)}function a(o,u,f){f!==0&&(n.drawArraysInstanced(i,o,u,f),t.update(u,i,f))}function c(o,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,o,0,u,0,f);let l=0;for(let p=0;p<f;p++)l+=u[p];t.update(l,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=c}function xv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(b){return!(b!==rt&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(b){const y=b===Gt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Mt&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==ht&&!y)}function o(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const f=o(u);f!==u&&(Le("WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const h=t.logarithmicDepthBuffer===!0,l=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&l===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:o,textureFormatReadable:a,textureTypeReadable:c,precision:u,logarithmicDepthBuffer:h,reversedDepthBuffer:l,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:d,maxAttributes:m,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:A,maxSamples:M,samples:S}}function _v(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Qn,c=new Ue,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(h,l){const p=h.length!==0||l||i!==0||s;return s=l,i=h.length,p},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,l){t=f(h,l,0)},this.setState=function(h,l,p){const g=h.clippingPlanes,x=h.clipIntersection,d=h.clipShadows,m=n.get(h);if(!s||g===null||g.length===0||r&&!d)r?f(null):u();else{const v=r?0:i,_=v*4;let A=m.clippingState||null;o.value=A,A=f(g,l,_,p);for(let M=0;M!==_;++M)A[M]=t[M];m.clippingState=A,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function u(){o.value!==t&&(o.value=t,o.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,l,p,g){const x=h!==null?h.length:0;let d=null;if(x!==0){if(d=o.value,g!==!0||d===null){const m=p+x*4,v=l.matrixWorldInverse;c.getNormalMatrix(v),(d===null||d.length<m)&&(d=new Float32Array(m));for(let _=0,A=p;_!==x;++_,A+=4)a.copy(h[_]).applyMatrix4(v,c),a.normal.toArray(d,A),d[A+3]=a.constant}o.value=d,o.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,d}}const Bi=4,hf=[.125,.215,.35,.446,.526,.582],rs=20,Av=256,pr=new Xr,df=new Te;let nc=null,ic=0,sc=0,rc=!1;const yv=new I;class _l{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:c=yv}=r;nc=this._renderer.getRenderTarget(),ic=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel(),rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,s,o,c),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(nc,ic,sc),this._renderer.xr.enabled=rc,e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cs||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nc=this._renderer.getRenderTarget(),ic=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel(),rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:Gt,format:rt,colorSpace:tr,depthBuffer:!1},s=pf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pf(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Mv(r)),this._blurMaterial=Tv(r,e,t),this._ggxMaterial=Sv(r,e,t)}return s}_compileMaterial(e){const t=new st(new Lt,e);this._renderer.compile(t,pr)}_sceneToCubeUV(e,t,i,s,r){const o=new cn(90,1,t,i),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,l=h.autoClear,p=h.toneMapping;h.getClearColor(df),h.toneMapping=On,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new st(new Vi,new nr({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,d=x.material;let m=!1;const v=e.background;v?v.isColor&&(d.color.copy(v),e.background=null,m=!0):(d.color.copy(df),m=!0);for(let _=0;_<6;_++){const A=_%3;A===0?(o.up.set(0,u[_],0),o.position.set(r.x,r.y,r.z),o.lookAt(r.x+f[_],r.y,r.z)):A===1?(o.up.set(0,0,u[_]),o.position.set(r.x,r.y,r.z),o.lookAt(r.x,r.y+f[_],r.z)):(o.up.set(0,u[_],0),o.position.set(r.x,r.y,r.z),o.lookAt(r.x,r.y,r.z+f[_]));const M=this._cubeSize;Cs(s,A*M,_>2?M:0,M,M),h.setRenderTarget(s),m&&h.render(x,o),h.render(e,o)}h.toneMapping=p,h.autoClear=l,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===cs||e.mapping===js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mf());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const c=r.uniforms;c.envMap.value=e;const o=this._cubeSize;Cs(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,pr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,c=this._lodMeshes[i];c.material=a;const o=a.uniforms,u=i/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),h=Math.sqrt(u*u-f*f),l=0+u*1.25,p=h*l,{_lodMax:g}=this,x=this._sizeLods[i],d=3*x*(i>g-Bi?i-g+Bi:0),m=4*(this._cubeSize-x);o.envMap.value=e.texture,o.roughness.value=p,o.mipInt.value=g-t,Cs(r,d,m,3*x,2*x),s.setRenderTarget(r),s.render(c,pr),o.envMap.value=r.texture,o.roughness.value=0,o.mipInt.value=g-i,Cs(e,d,m,3*x,2*x),s.setRenderTarget(e),s.render(c,pr)}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,c){const o=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&je("blur direction must be either latitudinal or longitudinal!");const f=3,h=this._lodMeshes[s];h.material=u;const l=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*rs-1),x=r/g,d=isFinite(r)?1+Math.floor(f*x):rs;d>rs&&Le(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${rs}`);const m=[];let v=0;for(let b=0;b<rs;++b){const y=b/x,w=Math.exp(-y*y/2);m.push(w),b===0?v+=w:b<d&&(v+=2*w)}for(let b=0;b<m.length;b++)m[b]=m[b]/v;l.envMap.value=e.texture,l.samples.value=d,l.weights.value=m,l.latitudinal.value=a==="latitudinal",c&&(l.poleAxis.value=c);const{_lodMax:_}=this;l.dTheta.value=g,l.mipInt.value=_-i;const A=this._sizeLods[s],M=3*A*(s>_-Bi?s-_+Bi:0),S=4*(this._cubeSize-A);Cs(t,M,S,3*A,2*A),o.setRenderTarget(t),o.render(h,pr)}}function Mv(n){const e=[],t=[],i=[];let s=n;const r=n-Bi+1+hf.length;for(let a=0;a<r;a++){const c=Math.pow(2,s);e.push(c);let o=1/c;a>n-Bi?o=hf[a-n+Bi-1]:a===0&&(o=0),t.push(o);const u=1/(c-2),f=-u,h=1+u,l=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,g=6,x=3,d=2,m=1,v=new Float32Array(x*g*p),_=new Float32Array(d*g*p),A=new Float32Array(m*g*p);for(let S=0;S<p;S++){const b=S%3*2/3-1,y=S>2?0:-1,w=[b,y,0,b+2/3,y,0,b+2/3,y+1,0,b,y,0,b+2/3,y+1,0,b,y+1,0];v.set(w,x*g*S),_.set(l,d*g*S);const R=[S,S,S,S,S,S];A.set(R,m*g*S)}const M=new Lt;M.setAttribute("position",new $e(v,x)),M.setAttribute("uv",new $e(_,d)),M.setAttribute("faceIndex",new $e(A,m)),i.push(new st(M,null)),s>Bi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function pf(n,e,t){const i=new _t(n,e,t);return i.texture.mapping=uo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Sv(n,e,t){return new St({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Av,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Rt,depthTest:!1,depthWrite:!1})}function Tv(n,e,t){const i=new Float32Array(rs),s=new I(0,1,0);return new St({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vo(),fragmentShader:`

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
		`,blending:Rt,depthTest:!1,depthWrite:!1})}function mf(){return new St({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vo(),fragmentShader:`

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
		`,blending:Rt,depthTest:!1,depthWrite:!1})}function gf(){return new St({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rt,depthTest:!1,depthWrite:!1})}function vo(){return`

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
	`}class md extends _t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new cd(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vi(5,5,5),r=new St({name:"CubemapFromEquirect",uniforms:ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ut,blending:Rt});r.uniforms.tEquirect.value=t;const a=new st(s,r),c=t.minFilter;return t.minFilter===as&&(t.minFilter=Je),new Em(1,10,this).update(e,a),t.minFilter=c,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}function bv(n){let e=new WeakMap,t=new WeakMap,i=null;function s(l,p=!1){return l==null?null:p?a(l):r(l)}function r(l){if(l&&l.isTexture){const p=l.mapping;if(p===Fr||p===Co)if(e.has(l)){const g=e.get(l).texture;return c(g,l.mapping)}else{const g=l.image;if(g&&g.height>0){const x=new md(g.height);return x.fromEquirectangularTexture(n,l),e.set(l,x),l.addEventListener("dispose",u),c(x.texture,l.mapping)}else return null}}return l}function a(l){if(l&&l.isTexture){const p=l.mapping,g=p===Fr||p===Co,x=p===cs||p===js;if(g||x){let d=t.get(l);const m=d!==void 0?d.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==m)return i===null&&(i=new _l(n)),d=g?i.fromEquirectangular(l,d):i.fromCubemap(l,d),d.texture.pmremVersion=l.pmremVersion,t.set(l,d),d.texture;if(d!==void 0)return d.texture;{const v=l.image;return g&&v&&v.height>0||x&&v&&o(v)?(i===null&&(i=new _l(n)),d=g?i.fromEquirectangular(l):i.fromCubemap(l),d.texture.pmremVersion=l.pmremVersion,t.set(l,d),l.addEventListener("dispose",f),d.texture):null}}}return l}function c(l,p){return p===Fr?l.mapping=cs:p===Co&&(l.mapping=js),l}function o(l){let p=0;const g=6;for(let x=0;x<g;x++)l[x]!==void 0&&p++;return p===g}function u(l){const p=l.target;p.removeEventListener("dispose",u);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function f(l){const p=l.target;p.removeEventListener("dispose",f);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function Ev(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ml("WebGLRenderer: "+i+" extension not supported."),s}}}function wv(n,e,t,i){const s={},r=new WeakMap;function a(h){const l=h.target;l.index!==null&&e.remove(l.index);for(const g in l.attributes)e.remove(l.attributes[g]);l.removeEventListener("dispose",a),delete s[l.id];const p=r.get(l);p&&(e.remove(p),r.delete(l)),i.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function c(h,l){return s[l.id]===!0||(l.addEventListener("dispose",a),s[l.id]=!0,t.memory.geometries++),l}function o(h){const l=h.attributes;for(const p in l)e.update(l[p],n.ARRAY_BUFFER)}function u(h){const l=[],p=h.index,g=h.attributes.position;let x=0;if(g===void 0)return;if(p!==null){const v=p.array;x=p.version;for(let _=0,A=v.length;_<A;_+=3){const M=v[_+0],S=v[_+1],b=v[_+2];l.push(M,S,S,b,b,M)}}else{const v=g.array;x=g.version;for(let _=0,A=v.length/3-1;_<A;_+=3){const M=_+0,S=_+1,b=_+2;l.push(M,S,S,b,b,M)}}const d=new(g.count>=65535?rd:sd)(l,1);d.version=x;const m=r.get(h);m&&e.remove(m),r.set(h,d)}function f(h){const l=r.get(h);if(l){const p=h.index;p!==null&&l.version<p.version&&u(h)}else u(h);return r.get(h)}return{get:c,update:o,getWireframeAttribute:f}}function Cv(n,e,t){let i;function s(h){i=h}let r,a;function c(h){r=h.type,a=h.bytesPerElement}function o(h,l){n.drawElements(i,l,r,h*a),t.update(l,i,1)}function u(h,l,p){p!==0&&(n.drawElementsInstanced(i,l,r,h*a,p),t.update(l,i,p))}function f(h,l,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,l,0,r,h,0,p);let x=0;for(let d=0;d<p;d++)x+=l[d];t.update(x,i,1)}this.setMode=s,this.setIndex=c,this.render=o,this.renderInstances=u,this.renderMultiDraw=f}function Rv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,c){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=c*(r/3);break;case n.LINES:t.lines+=c*(r/2);break;case n.LINE_STRIP:t.lines+=c*(r-1);break;case n.LINE_LOOP:t.lines+=c*r;break;case n.POINTS:t.points+=c*r;break;default:je("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Dv(n,e,t){const i=new WeakMap,s=new nt;function r(a,c,o){const u=a.morphTargetInfluences,f=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,h=f!==void 0?f.length:0;let l=i.get(c);if(l===void 0||l.count!==h){let R=function(){y.dispose(),i.delete(c),c.removeEventListener("dispose",R)};var p=R;l!==void 0&&l.texture.dispose();const g=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,d=c.morphAttributes.color!==void 0,m=c.morphAttributes.position||[],v=c.morphAttributes.normal||[],_=c.morphAttributes.color||[];let A=0;g===!0&&(A=1),x===!0&&(A=2),d===!0&&(A=3);let M=c.attributes.position.count*A,S=1;M>e.maxTextureSize&&(S=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const b=new Float32Array(M*S*4*h),y=new po(b,M,S,h);y.type=ht,y.needsUpdate=!0;const w=A*4;for(let C=0;C<h;C++){const P=m[C],B=v[C],U=_[C],F=M*S*4*C;for(let k=0;k<P.count;k++){const L=k*w;g===!0&&(s.fromBufferAttribute(P,k),b[F+L+0]=s.x,b[F+L+1]=s.y,b[F+L+2]=s.z,b[F+L+3]=0),x===!0&&(s.fromBufferAttribute(B,k),b[F+L+4]=s.x,b[F+L+5]=s.y,b[F+L+6]=s.z,b[F+L+7]=0),d===!0&&(s.fromBufferAttribute(U,k),b[F+L+8]=s.x,b[F+L+9]=s.y,b[F+L+10]=s.z,b[F+L+11]=U.itemSize===4?s.w:1)}}l={count:h,texture:y,size:new Se(M,S)},i.set(c,l),c.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)o.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let d=0;d<u.length;d++)g+=u[d];const x=c.morphTargetsRelative?1:1-g;o.getUniforms().setValue(n,"morphTargetBaseInfluence",x),o.getUniforms().setValue(n,"morphTargetInfluences",u)}o.getUniforms().setValue(n,"morphTargetsTexture",l.texture,t),o.getUniforms().setValue(n,"morphTargetsTextureSize",l.size)}return{update:r}}function Pv(n,e,t,i,s){let r=new WeakMap;function a(u){const f=s.render.frame,h=u.geometry,l=e.get(u,h);if(r.get(l)!==f&&(e.update(l),r.set(l,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",o)===!1&&u.addEventListener("dispose",o),r.get(u)!==f&&(t.update(u.instanceMatrix,n.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,n.ARRAY_BUFFER),r.set(u,f))),u.isSkinnedMesh){const p=u.skeleton;r.get(p)!==f&&(p.update(),r.set(p,f))}return l}function c(){r=new WeakMap}function o(u){const f=u.target;f.removeEventListener("dispose",o),i.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:c}}const Iv={[Xh]:"LINEAR_TONE_MAPPING",[Yh]:"REINHARD_TONE_MAPPING",[qh]:"CINEON_TONE_MAPPING",[Nl]:"ACES_FILMIC_TONE_MAPPING",[Kh]:"AGX_TONE_MAPPING",[jh]:"NEUTRAL_TONE_MAPPING",[Qh]:"CUSTOM_TONE_MAPPING"};function Lv(n,e,t,i,s){const r=new _t(e,t,{type:n,depthBuffer:i,stencilBuffer:s,depthTexture:i?new ls(e,t):void 0}),a=new _t(e,t,{type:Gt,depthBuffer:!1,stencilBuffer:!1}),c=new Lt;c.setAttribute("position",new mn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new mn([0,2,0,0,2,0],2));const o=new xm({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new st(c,o),f=new Xr(-1,1,1,-1,0,1);let h=null,l=null,p=!1,g,x=null,d=[],m=!1;this.setSize=function(v,_){r.setSize(v,_),a.setSize(v,_);for(let A=0;A<d.length;A++){const M=d[A];M.setSize&&M.setSize(v,_)}},this.setEffects=function(v){d=v,m=d.length>0&&d[0].isRenderPass===!0;const _=r.width,A=r.height;for(let M=0;M<d.length;M++){const S=d[M];S.setSize&&S.setSize(_,A)}},this.begin=function(v,_){if(p||v.toneMapping===On&&d.length===0)return!1;if(x=_,_!==null){const A=_.width,M=_.height;(r.width!==A||r.height!==M)&&this.setSize(A,M)}return m===!1&&v.setRenderTarget(r),g=v.toneMapping,v.toneMapping=On,!0},this.hasRenderPass=function(){return m},this.end=function(v,_){v.toneMapping=g,p=!0;let A=r,M=a;for(let S=0;S<d.length;S++){const b=d[S];if(b.enabled!==!1&&(b.render(v,M,A,_),b.needsSwap!==!1)){const y=A;A=M,M=y}}if(h!==v.outputColorSpace||l!==v.toneMapping){h=v.outputColorSpace,l=v.toneMapping,o.defines={},Ke.getTransfer(h)===it&&(o.defines.SRGB_TRANSFER="");const S=Iv[l];S&&(o.defines[S]=""),o.needsUpdate=!0}o.uniforms.tDiffuse.value=A.texture,v.setRenderTarget(x),v.render(u,f),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),a.dispose(),c.dispose(),o.dispose()}}const gd=new Ot,Al=new ls(1,1),vd=new po,xd=new qp,_d=new cd,vf=[],xf=[],_f=new Float32Array(16),Af=new Float32Array(9),yf=new Float32Array(4);function ar(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=vf[s];if(r===void 0&&(r=new Float32Array(s),vf[s]=r),e!==0){i.toArray(r,0);for(let a=1,c=0;a!==e;++a)c+=t,n[a].toArray(r,c)}return r}function Vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function xo(n,e){let t=xf[e];t===void 0&&(t=new Int32Array(e),xf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Fv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Bv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2fv(this.addr,e),Wt(t,e)}}function Uv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;n.uniform3fv(this.addr,e),Wt(t,e)}}function Nv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4fv(this.addr,e),Wt(t,e)}}function Ov(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,i))return;yf.set(i),n.uniformMatrix2fv(this.addr,!1,yf),Wt(t,i)}}function zv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,i))return;Af.set(i),n.uniformMatrix3fv(this.addr,!1,Af),Wt(t,i)}}function Hv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,i))return;_f.set(i),n.uniformMatrix4fv(this.addr,!1,_f),Wt(t,i)}}function Gv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function kv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2iv(this.addr,e),Wt(t,e)}}function Vv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3iv(this.addr,e),Wt(t,e)}}function Wv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4iv(this.addr,e),Wt(t,e)}}function Xv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Yv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2uiv(this.addr,e),Wt(t,e)}}function qv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3uiv(this.addr,e),Wt(t,e)}}function Qv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4uiv(this.addr,e),Wt(t,e)}}function Kv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Al.compareFunction=t.isReversedDepthBuffer()?kl:Gl,r=Al):r=gd,t.setTexture2D(e||r,s)}function jv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||xd,s)}function Zv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||_d,s)}function Jv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||vd,s)}function $v(n){switch(n){case 5126:return Fv;case 35664:return Bv;case 35665:return Uv;case 35666:return Nv;case 35674:return Ov;case 35675:return zv;case 35676:return Hv;case 5124:case 35670:return Gv;case 35667:case 35671:return kv;case 35668:case 35672:return Vv;case 35669:case 35673:return Wv;case 5125:return Xv;case 36294:return Yv;case 36295:return qv;case 36296:return Qv;case 35678:case 36198:case 36298:case 36306:case 35682:return Kv;case 35679:case 36299:case 36307:return jv;case 35680:case 36300:case 36308:case 36293:return Zv;case 36289:case 36303:case 36311:case 36292:return Jv}}function ex(n,e){n.uniform1fv(this.addr,e)}function tx(n,e){const t=ar(e,this.size,2);n.uniform2fv(this.addr,t)}function nx(n,e){const t=ar(e,this.size,3);n.uniform3fv(this.addr,t)}function ix(n,e){const t=ar(e,this.size,4);n.uniform4fv(this.addr,t)}function sx(n,e){const t=ar(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function rx(n,e){const t=ar(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ax(n,e){const t=ar(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ox(n,e){n.uniform1iv(this.addr,e)}function cx(n,e){n.uniform2iv(this.addr,e)}function lx(n,e){n.uniform3iv(this.addr,e)}function ux(n,e){n.uniform4iv(this.addr,e)}function fx(n,e){n.uniform1uiv(this.addr,e)}function hx(n,e){n.uniform2uiv(this.addr,e)}function dx(n,e){n.uniform3uiv(this.addr,e)}function px(n,e){n.uniform4uiv(this.addr,e)}function mx(n,e,t){const i=this.cache,s=e.length,r=xo(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Al:a=gd;for(let c=0;c!==s;++c)t.setTexture2D(e[c]||a,r[c])}function gx(n,e,t){const i=this.cache,s=e.length,r=xo(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||xd,r[a])}function vx(n,e,t){const i=this.cache,s=e.length,r=xo(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||_d,r[a])}function xx(n,e,t){const i=this.cache,s=e.length,r=xo(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||vd,r[a])}function _x(n){switch(n){case 5126:return ex;case 35664:return tx;case 35665:return nx;case 35666:return ix;case 35674:return sx;case 35675:return rx;case 35676:return ax;case 5124:case 35670:return ox;case 35667:case 35671:return cx;case 35668:case 35672:return lx;case 35669:case 35673:return ux;case 5125:return fx;case 36294:return hx;case 36295:return dx;case 36296:return px;case 35678:case 36198:case 36298:case 36306:case 35682:return mx;case 35679:case 36299:case 36307:return gx;case 35680:case 36300:case 36308:case 36293:return vx;case 36289:case 36303:case 36311:case 36292:return xx}}class Ax{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=$v(t.type)}}class yx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_x(t.type)}}class Mx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const c=s[r];c.setValue(e,t[c.id],i)}}}const ac=/(\w+)(\])?(\[|\.)?/g;function Mf(n,e){n.seq.push(e),n.map[e.id]=e}function Sx(n,e,t){const i=n.name,s=i.length;for(ac.lastIndex=0;;){const r=ac.exec(i),a=ac.lastIndex;let c=r[1];const o=r[2]==="]",u=r[3];if(o&&(c=c|0),u===void 0||u==="["&&a+2===s){Mf(t,u===void 0?new Ax(c,n,e):new yx(c,n,e));break}else{let h=t.map[c];h===void 0&&(h=new Mx(c),Mf(t,h)),t=h}}}class qa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const c=e.getActiveUniform(t,a),o=e.getUniformLocation(t,c.name);Sx(c,o,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const c=t[r],o=i[c.id];o.needsUpdate!==!1&&c.setValue(e,o.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Sf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Tx=37297;let bx=0;function Ex(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const c=a+1;i.push(`${c===e?">":" "} ${c}: ${t[a]}`)}return i.join(`
`)}const Tf=new Ue;function wx(n){Ke._getMatrix(Tf,Ke.workingColorSpace,n);const e=`mat3( ${Tf.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case to:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function bf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Ex(n.getShaderSource(e),c)}else return r}function Cx(n,e){const t=wx(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Rx={[Xh]:"Linear",[Yh]:"Reinhard",[qh]:"Cineon",[Nl]:"ACESFilmic",[Kh]:"AgX",[jh]:"Neutral",[Qh]:"Custom"};function Dx(n,e){const t=Rx[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _a=new I;function Px(){Ke.getLuminanceCoefficients(_a);const n=_a.x.toFixed(4),e=_a.y.toFixed(4),t=_a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ix(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function Lx(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Fx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let c=1;r.type===n.FLOAT_MAT2&&(c=2),r.type===n.FLOAT_MAT3&&(c=3),r.type===n.FLOAT_MAT4&&(c=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:c}}return t}function Ir(n){return n!==""}function Ef(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bx=/^[ \t]*#include +<([\w\d./]+)>/gm;function yl(n){return n.replace(Bx,Nx)}const Ux=new Map;function Nx(n,e){let t=ke[e];if(t===void 0){const i=Ux.get(e);if(i!==void 0)t=ke[i],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return yl(t)}const Ox=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cf(n){return n.replace(Ox,zx)}function zx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const Hx={[Ga]:"SHADOWMAP_TYPE_PCF",[Pr]:"SHADOWMAP_TYPE_VSM"};function Gx(n){return Hx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const kx={[cs]:"ENVMAP_TYPE_CUBE",[js]:"ENVMAP_TYPE_CUBE",[uo]:"ENVMAP_TYPE_CUBE_UV"};function Vx(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":kx[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Wx={[js]:"ENVMAP_MODE_REFRACTION"};function Xx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Wx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Yx={[Wh]:"ENVMAP_BLENDING_MULTIPLY",[Sp]:"ENVMAP_BLENDING_MIX",[Tp]:"ENVMAP_BLENDING_ADD"};function qx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Yx[n.combine]||"ENVMAP_BLENDING_NONE"}function Qx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Kx(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,c=t.fragmentShader;const o=Gx(t),u=Vx(t),f=Xx(t),h=qx(t),l=Qx(t),p=Ix(t),g=Lx(r),x=s.createProgram();let d,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ir).join(`
`),d.length>0&&(d+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ir).join(`
`),m.length>0&&(m+=`
`)):(d=[Rf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),m=[Rf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",l?"#define CUBEUV_TEXEL_WIDTH "+l.texelWidth:"",l?"#define CUBEUV_TEXEL_HEIGHT "+l.texelHeight:"",l?"#define CUBEUV_MAX_MIP "+l.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?ke.tonemapping_pars_fragment:"",t.toneMapping!==On?Dx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Cx("linearToOutputTexel",t.outputColorSpace),Px(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ir).join(`
`)),a=yl(a),a=Ef(a,t),a=wf(a,t),c=yl(c),c=Ef(c,t),c=wf(c,t),a=Cf(a),c=Cf(c),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,m=["#define varying in",t.glslVersion===Bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=v+d+a,A=v+m+c,M=Sf(s,s.VERTEX_SHADER,_),S=Sf(s,s.FRAGMENT_SHADER,A);s.attachShader(x,M),s.attachShader(x,S),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function b(C){if(n.debug.checkShaderErrors){const P=s.getProgramInfoLog(x)||"",B=s.getShaderInfoLog(M)||"",U=s.getShaderInfoLog(S)||"",F=P.trim(),k=B.trim(),L=U.trim();let W=!0,O=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,M,S);else{const z=bf(s,M,"vertex"),j=bf(s,S,"fragment");je("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+F+`
`+z+`
`+j)}else F!==""?Le("WebGLProgram: Program Info Log:",F):(k===""||L==="")&&(O=!1);O&&(C.diagnostics={runnable:W,programLog:F,vertexShader:{log:k,prefix:d},fragmentShader:{log:L,prefix:m}})}s.deleteShader(M),s.deleteShader(S),y=new qa(s,x),w=Fx(s,x)}let y;this.getUniforms=function(){return y===void 0&&b(this),y};let w;this.getAttributes=function(){return w===void 0&&b(this),w};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,Tx)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=S,this}let jx=0;class Zx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Jx(e),t.set(e,i)),i}}class Jx{constructor(e){this.id=jx++,this.code=e,this.usedTimes=0}}function $x(n){return n===gi||n===$a||n===eo}function e_(n,e,t,i,s,r){const a=new Vl,c=new Zx,o=new Set,u=[],f=new Map,h=i.logarithmicDepthBuffer;let l=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return o.add(y),y===0?"uv":`uv${y}`}function x(y,w,R,C,P,B){const U=C.fog,F=P.geometry,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?C.environment:null,L=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,W=e.get(y.envMap||k,L),O=W&&W.mapping===uo?W.image.height:null,z=p[y.type];y.precision!==null&&(l=i.getMaxPrecision(y.precision),l!==y.precision&&Le("WebGLProgram.getParameters:",y.precision,"not supported, using",l,"instead."));const j=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,$=j!==void 0?j.length:0;let de=0;F.morphAttributes.position!==void 0&&(de=1),F.morphAttributes.normal!==void 0&&(de=2),F.morphAttributes.color!==void 0&&(de=3);let Ce,ae,Q,ne;if(z){const Oe=Kn[z];Ce=Oe.vertexShader,ae=Oe.fragmentShader}else Ce=y.vertexShader,ae=y.fragmentShader,c.update(y),Q=c.getVertexShaderID(y),ne=c.getFragmentShaderID(y);const ie=n.getRenderTarget(),Ee=n.state.buffers.depth.getReversed(),Ie=P.isInstancedMesh===!0,Pe=P.isBatchedMesh===!0,at=!!y.map,Xe=!!y.matcap,ot=!!W,At=!!y.aoMap,Ye=!!y.lightMap,zt=!!y.bumpMap,Tt=!!y.normalMap,gn=!!y.displacementMap,H=!!y.emissiveMap,Ht=!!y.metalnessMap,Qe=!!y.roughnessMap,gt=y.anisotropy>0,pe=y.clearcoat>0,bt=y.dispersion>0,D=y.iridescence>0,T=y.sheen>0,V=y.transmission>0,J=gt&&!!y.anisotropyMap,re=pe&&!!y.clearcoatMap,oe=pe&&!!y.clearcoatNormalMap,he=pe&&!!y.clearcoatRoughnessMap,K=D&&!!y.iridescenceMap,ee=D&&!!y.iridescenceThicknessMap,xe=T&&!!y.sheenColorMap,ye=T&&!!y.sheenRoughnessMap,ue=!!y.specularMap,ce=!!y.specularColorMap,Be=!!y.specularIntensityMap,He=V&&!!y.transmissionMap,et=V&&!!y.thicknessMap,N=!!y.gradientMap,le=!!y.alphaMap,Z=y.alphaTest>0,_e=!!y.alphaHash,fe=!!y.extensions;let se=On;y.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(se=n.toneMapping);const we={shaderID:z,shaderType:y.type,shaderName:y.name,vertexShader:Ce,fragmentShader:ae,defines:y.defines,customVertexShaderID:Q,customFragmentShaderID:ne,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:l,batching:Pe,batchingColor:Pe&&P._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&P.instanceColor!==null,instancingMorph:Ie&&P.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:at,matcap:Xe,envMap:ot,envMapMode:ot&&W.mapping,envMapCubeUVHeight:O,aoMap:At,lightMap:Ye,bumpMap:zt,normalMap:Tt,displacementMap:gn,emissiveMap:H,normalMapObjectSpace:Tt&&y.normalMapType===wp,normalMapTangentSpace:Tt&&y.normalMapType===pl,packedNormalMap:Tt&&y.normalMapType===pl&&$x(y.normalMap.format),metalnessMap:Ht,roughnessMap:Qe,anisotropy:gt,anisotropyMap:J,clearcoat:pe,clearcoatMap:re,clearcoatNormalMap:oe,clearcoatRoughnessMap:he,dispersion:bt,iridescence:D,iridescenceMap:K,iridescenceThicknessMap:ee,sheen:T,sheenColorMap:xe,sheenRoughnessMap:ye,specularMap:ue,specularColorMap:ce,specularIntensityMap:Be,transmission:V,transmissionMap:He,thicknessMap:et,gradientMap:N,opaque:y.transparent===!1&&y.blending===Ni&&y.alphaToCoverage===!1,alphaMap:le,alphaTest:Z,alphaHash:_e,combine:y.combine,mapUv:at&&g(y.map.channel),aoMapUv:At&&g(y.aoMap.channel),lightMapUv:Ye&&g(y.lightMap.channel),bumpMapUv:zt&&g(y.bumpMap.channel),normalMapUv:Tt&&g(y.normalMap.channel),displacementMapUv:gn&&g(y.displacementMap.channel),emissiveMapUv:H&&g(y.emissiveMap.channel),metalnessMapUv:Ht&&g(y.metalnessMap.channel),roughnessMapUv:Qe&&g(y.roughnessMap.channel),anisotropyMapUv:J&&g(y.anisotropyMap.channel),clearcoatMapUv:re&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:ye&&g(y.sheenRoughnessMap.channel),specularMapUv:ue&&g(y.specularMap.channel),specularColorMapUv:ce&&g(y.specularColorMap.channel),specularIntensityMapUv:Be&&g(y.specularIntensityMap.channel),transmissionMapUv:He&&g(y.transmissionMap.channel),thicknessMapUv:et&&g(y.thicknessMap.channel),alphaMapUv:le&&g(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Tt||gt),vertexNormals:!!F.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!F.attributes.uv&&(at||le),fog:!!U,useFog:y.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||F.attributes.normal===void 0&&Tt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ee,skinning:P.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:de,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:se,decodeVideoTexture:at&&y.map.isVideoTexture===!0&&Ke.getTransfer(y.map.colorSpace)===it,decodeVideoTextureEmissive:H&&y.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(y.emissiveMap.colorSpace)===it,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Yt,flipSided:y.side===Ut,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:fe&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&y.extensions.multiDraw===!0||Pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return we.vertexUv1s=o.has(1),we.vertexUv2s=o.has(2),we.vertexUv3s=o.has(3),o.clear(),we}function d(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)w.push(R),w.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(m(w,y),v(w,y),w.push(n.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function m(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function v(y,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),y.push(a.mask)}function _(y){const w=p[y.type];let R;if(w){const C=Kn[w];R=mm.clone(C.uniforms)}else R=y.uniforms;return R}function A(y,w){let R=f.get(w);return R!==void 0?++R.usedTimes:(R=new Kx(n,w,y,s),u.push(R),f.set(w,R)),R}function M(y){if(--y.usedTimes===0){const w=u.indexOf(y);u[w]=u[u.length-1],u.pop(),f.delete(y.cacheKey),y.destroy()}}function S(y){c.remove(y)}function b(){c.dispose()}return{getParameters:x,getProgramCacheKey:d,getUniforms:_,acquireProgram:A,releaseProgram:M,releaseShaderCache:S,programs:u,dispose:b}}function t_(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let c=n.get(a);return c===void 0&&(c={},n.set(a,c)),c}function i(a){n.delete(a)}function s(a,c,o){n.get(a)[c]=o}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function n_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Df(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Pf(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(l){let p=0;return l.isInstancedMesh&&(p+=2),l.isSkinnedMesh&&(p+=1),p}function c(l,p,g,x,d,m){let v=n[e];return v===void 0?(v={id:l.id,object:l,geometry:p,material:g,materialVariant:a(l),groupOrder:x,renderOrder:l.renderOrder,z:d,group:m},n[e]=v):(v.id=l.id,v.object=l,v.geometry=p,v.material=g,v.materialVariant=a(l),v.groupOrder=x,v.renderOrder=l.renderOrder,v.z=d,v.group=m),e++,v}function o(l,p,g,x,d,m){const v=c(l,p,g,x,d,m);g.transmission>0?i.push(v):g.transparent===!0?s.push(v):t.push(v)}function u(l,p,g,x,d,m){const v=c(l,p,g,x,d,m);g.transmission>0?i.unshift(v):g.transparent===!0?s.unshift(v):t.unshift(v)}function f(l,p){t.length>1&&t.sort(l||n_),i.length>1&&i.sort(p||Df),s.length>1&&s.sort(p||Df)}function h(){for(let l=e,p=n.length;l<p;l++){const g=n[l];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:u,finish:h,sort:f}}function i_(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Pf,n.set(i,[a])):s>=r.length?(a=new Pf,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function s_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Te};break;case"SpotLight":t={position:new I,direction:new I,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function r_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let a_=0;function o_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function c_(n){const e=new s_,t=r_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new I);const s=new I,r=new We,a=new We;function c(u){let f=0,h=0,l=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,x=0,d=0,m=0,v=0,_=0,A=0,M=0,S=0,b=0;u.sort(o_);for(let w=0,R=u.length;w<R;w++){const C=u[w],P=C.color,B=C.intensity,U=C.distance;let F=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===gi?F=C.shadow.map.texture:F=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)f+=P.r*B,h+=P.g*B,l+=P.b*B;else if(C.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(C.sh.coefficients[k],B);b++}else if(C.isDirectionalLight){const k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const L=C.shadow,W=t.get(C);W.shadowIntensity=L.intensity,W.shadowBias=L.bias,W.shadowNormalBias=L.normalBias,W.shadowRadius=L.radius,W.shadowMapSize=L.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=F,i.directionalShadowMatrix[p]=C.shadow.matrix,v++}i.directional[p]=k,p++}else if(C.isSpotLight){const k=e.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy(P).multiplyScalar(B),k.distance=U,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,i.spot[x]=k;const L=C.shadow;if(C.map&&(i.spotLightMap[M]=C.map,M++,L.updateMatrices(C),C.castShadow&&S++),i.spotLightMatrix[x]=L.matrix,C.castShadow){const W=t.get(C);W.shadowIntensity=L.intensity,W.shadowBias=L.bias,W.shadowNormalBias=L.normalBias,W.shadowRadius=L.radius,W.shadowMapSize=L.mapSize,i.spotShadow[x]=W,i.spotShadowMap[x]=F,A++}x++}else if(C.isRectAreaLight){const k=e.get(C);k.color.copy(P).multiplyScalar(B),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),i.rectArea[d]=k,d++}else if(C.isPointLight){const k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),k.distance=C.distance,k.decay=C.decay,C.castShadow){const L=C.shadow,W=t.get(C);W.shadowIntensity=L.intensity,W.shadowBias=L.bias,W.shadowNormalBias=L.normalBias,W.shadowRadius=L.radius,W.shadowMapSize=L.mapSize,W.shadowCameraNear=L.camera.near,W.shadowCameraFar=L.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=F,i.pointShadowMatrix[g]=C.shadow.matrix,_++}i.point[g]=k,g++}else if(C.isHemisphereLight){const k=e.get(C);k.skyColor.copy(C.color).multiplyScalar(B),k.groundColor.copy(C.groundColor).multiplyScalar(B),i.hemi[m]=k,m++}}d>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=l;const y=i.hash;(y.directionalLength!==p||y.pointLength!==g||y.spotLength!==x||y.rectAreaLength!==d||y.hemiLength!==m||y.numDirectionalShadows!==v||y.numPointShadows!==_||y.numSpotShadows!==A||y.numSpotMaps!==M||y.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=d,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=A+M-S,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=b,y.directionalLength=p,y.pointLength=g,y.spotLength=x,y.rectAreaLength=d,y.hemiLength=m,y.numDirectionalShadows=v,y.numPointShadows=_,y.numSpotShadows=A,y.numSpotMaps=M,y.numLightProbes=b,i.version=a_++)}function o(u,f){let h=0,l=0,p=0,g=0,x=0;const d=f.matrixWorldInverse;for(let m=0,v=u.length;m<v;m++){const _=u[m];if(_.isDirectionalLight){const A=i.directional[h];A.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(d),h++}else if(_.isSpotLight){const A=i.spot[p];A.position.setFromMatrixPosition(_.matrixWorld),A.position.applyMatrix4(d),A.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(d),p++}else if(_.isRectAreaLight){const A=i.rectArea[g];A.position.setFromMatrixPosition(_.matrixWorld),A.position.applyMatrix4(d),a.identity(),r.copy(_.matrixWorld),r.premultiply(d),a.extractRotation(r),A.halfWidth.set(_.width*.5,0,0),A.halfHeight.set(0,_.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){const A=i.point[l];A.position.setFromMatrixPosition(_.matrixWorld),A.position.applyMatrix4(d),l++}else if(_.isHemisphereLight){const A=i.hemi[x];A.direction.setFromMatrixPosition(_.matrixWorld),A.direction.transformDirection(d),x++}}}return{setup:c,setupView:o,state:i}}function If(n){const e=new c_(n),t=[],i=[],s=[];function r(l){h.camera=l,t.length=0,i.length=0,s.length=0}function a(l){t.push(l)}function c(l){i.push(l)}function o(l){s.push(l)}function u(){e.setup(t)}function f(l){e.setupView(t,l)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:u,setupLightsView:f,pushLight:a,pushShadow:c,pushLightProbeGrid:o}}function l_(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let c;return a===void 0?(c=new If(n),e.set(s,[c])):r>=a.length?(c=new If(n),a.push(c)):c=a[r],c}function i(){e=new WeakMap}return{get:t,dispose:i}}const u_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,h_=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],d_=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Lf=new We,mr=new I,oc=new I;function p_(n,e,t){let i=new Xl;const s=new Se,r=new Se,a=new nt,c=new _m,o=new Am,u={},f=t.maxTextureSize,h={[Rn]:Ut,[Ut]:Rn,[Yt]:Yt},l=new St({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:u_,fragmentShader:f_}),p=l.clone();p.defines.HORIZONTAL_PASS=1;const g=new Lt;g.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new st(g,l),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ga;let m=this.type;this.render=function(S,b,y){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||S.length===0)return;this.type===Vh&&(Le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ga);const w=n.getRenderTarget(),R=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),P=n.state;P.setBlending(Rt),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const B=m!==this.type;B&&b.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(F=>F.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,F=S.length;U<F;U++){const k=S[U],L=k.shadow;if(L===void 0){Le("WebGLShadowMap:",k,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;s.copy(L.mapSize);const W=L.getFrameExtents();s.multiply(W),r.copy(L.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/W.x),s.x=r.x*W.x,L.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/W.y),s.y=r.y*W.y,L.mapSize.y=r.y));const O=n.state.buffers.depth.getReversed();if(L.camera._reversedDepth=O,L.map===null||B===!0){if(L.map!==null&&(L.map.depthTexture!==null&&(L.map.depthTexture.dispose(),L.map.depthTexture=null),L.map.dispose()),this.type===Pr){if(k.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}L.map=new _t(s.x,s.y,{format:gi,type:Gt,minFilter:Je,magFilter:Je,generateMipmaps:!1}),L.map.texture.name=k.name+".shadowMap",L.map.depthTexture=new ls(s.x,s.y,ht),L.map.depthTexture.name=k.name+".shadowMapDepth",L.map.depthTexture.format=mi,L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Ge,L.map.depthTexture.magFilter=Ge}else k.isPointLight?(L.map=new md(s.x),L.map.depthTexture=new dm(s.x,ln)):(L.map=new _t(s.x,s.y),L.map.depthTexture=new ls(s.x,s.y,ln)),L.map.depthTexture.name=k.name+".shadowMap",L.map.depthTexture.format=mi,this.type===Ga?(L.map.depthTexture.compareFunction=O?kl:Gl,L.map.depthTexture.minFilter=Je,L.map.depthTexture.magFilter=Je):(L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Ge,L.map.depthTexture.magFilter=Ge);L.camera.updateProjectionMatrix()}const z=L.map.isWebGLCubeRenderTarget?6:1;for(let j=0;j<z;j++){if(L.map.isWebGLCubeRenderTarget)n.setRenderTarget(L.map,j),n.clear();else{j===0&&(n.setRenderTarget(L.map),n.clear());const $=L.getViewport(j);a.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),P.viewport(a)}if(k.isPointLight){const $=L.camera,de=L.matrix,Ce=k.distance||$.far;Ce!==$.far&&($.far=Ce,$.updateProjectionMatrix()),mr.setFromMatrixPosition(k.matrixWorld),$.position.copy(mr),oc.copy($.position),oc.add(h_[j]),$.up.copy(d_[j]),$.lookAt(oc),$.updateMatrixWorld(),de.makeTranslation(-mr.x,-mr.y,-mr.z),Lf.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),L._frustum.setFromProjectionMatrix(Lf,$.coordinateSystem,$.reversedDepth)}else L.updateMatrices(k);i=L.getFrustum(),A(b,y,L.camera,k,this.type)}L.isPointLightShadow!==!0&&this.type===Pr&&v(L,y),L.needsUpdate=!1}m=this.type,d.needsUpdate=!1,n.setRenderTarget(w,R,C)};function v(S,b){const y=e.update(x);l.defines.VSM_SAMPLES!==S.blurSamples&&(l.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,l.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new _t(s.x,s.y,{format:gi,type:Gt})),l.uniforms.shadow_pass.value=S.map.depthTexture,l.uniforms.resolution.value=S.mapSize,l.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(b,null,y,l,x,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(b,null,y,p,x,null)}function _(S,b,y,w){let R=null;const C=y.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(C!==void 0)R=C;else if(R=y.isPointLight===!0?o:c,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const P=R.uuid,B=b.uuid;let U=u[P];U===void 0&&(U={},u[P]=U);let F=U[B];F===void 0&&(F=R.clone(),U[B]=F,b.addEventListener("dispose",M)),R=F}if(R.visible=b.visible,R.wireframe=b.wireframe,w===Pr?R.side=b.shadowSide!==null?b.shadowSide:b.side:R.side=b.shadowSide!==null?b.shadowSide:h[b.side],R.alphaMap=b.alphaMap,R.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,R.map=b.map,R.clipShadows=b.clipShadows,R.clippingPlanes=b.clippingPlanes,R.clipIntersection=b.clipIntersection,R.displacementMap=b.displacementMap,R.displacementScale=b.displacementScale,R.displacementBias=b.displacementBias,R.wireframeLinewidth=b.wireframeLinewidth,R.linewidth=b.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const P=n.properties.get(R);P.light=y}return R}function A(S,b,y,w,R){if(S.visible===!1)return;if(S.layers.test(b.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===Pr)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,S.matrixWorld);const B=e.update(S),U=S.material;if(Array.isArray(U)){const F=B.groups;for(let k=0,L=F.length;k<L;k++){const W=F[k],O=U[W.materialIndex];if(O&&O.visible){const z=_(S,O,w,R);S.onBeforeShadow(n,S,b,y,B,z,W),n.renderBufferDirect(y,null,B,z,S,W),S.onAfterShadow(n,S,b,y,B,z,W)}}}else if(U.visible){const F=_(S,U,w,R);S.onBeforeShadow(n,S,b,y,B,F,null),n.renderBufferDirect(y,null,B,F,S,null),S.onAfterShadow(n,S,b,y,B,F,null)}}const P=S.children;for(let B=0,U=P.length;B<U;B++)A(P[B],b,y,w,R)}function M(S){S.target.removeEventListener("dispose",M);for(const y in u){const w=u[y],R=S.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function m_(n,e){function t(){let N=!1;const le=new nt;let Z=null;const _e=new nt(0,0,0,0);return{setMask:function(fe){Z!==fe&&!N&&(n.colorMask(fe,fe,fe,fe),Z=fe)},setLocked:function(fe){N=fe},setClear:function(fe,se,we,Oe,Dt){Dt===!0&&(fe*=Oe,se*=Oe,we*=Oe),le.set(fe,se,we,Oe),_e.equals(le)===!1&&(n.clearColor(fe,se,we,Oe),_e.copy(le))},reset:function(){N=!1,Z=null,_e.set(-1,0,0,0)}}}function i(){let N=!1,le=!1,Z=null,_e=null,fe=null;return{setReversed:function(se){if(le!==se){const we=e.get("EXT_clip_control");se?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),le=se;const Oe=fe;fe=null,this.setClear(Oe)}},getReversed:function(){return le},setTest:function(se){se?ie(n.DEPTH_TEST):Ee(n.DEPTH_TEST)},setMask:function(se){Z!==se&&!N&&(n.depthMask(se),Z=se)},setFunc:function(se){if(le&&(se=Np[se]),_e!==se){switch(se){case Pc:n.depthFunc(n.NEVER);break;case Za:n.depthFunc(n.ALWAYS);break;case Ic:n.depthFunc(n.LESS);break;case Ks:n.depthFunc(n.LEQUAL);break;case Lc:n.depthFunc(n.EQUAL);break;case Fc:n.depthFunc(n.GEQUAL);break;case Bc:n.depthFunc(n.GREATER);break;case Uc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_e=se}},setLocked:function(se){N=se},setClear:function(se){fe!==se&&(fe=se,le&&(se=1-se),n.clearDepth(se))},reset:function(){N=!1,Z=null,_e=null,fe=null,le=!1}}}function s(){let N=!1,le=null,Z=null,_e=null,fe=null,se=null,we=null,Oe=null,Dt=null;return{setTest:function(ct){N||(ct?ie(n.STENCIL_TEST):Ee(n.STENCIL_TEST))},setMask:function(ct){le!==ct&&!N&&(n.stencilMask(ct),le=ct)},setFunc:function(ct,ni,Wn){(Z!==ct||_e!==ni||fe!==Wn)&&(n.stencilFunc(ct,ni,Wn),Z=ct,_e=ni,fe=Wn)},setOp:function(ct,ni,Wn){(se!==ct||we!==ni||Oe!==Wn)&&(n.stencilOp(ct,ni,Wn),se=ct,we=ni,Oe=Wn)},setLocked:function(ct){N=ct},setClear:function(ct){Dt!==ct&&(n.clearStencil(ct),Dt=ct)},reset:function(){N=!1,le=null,Z=null,_e=null,fe=null,se=null,we=null,Oe=null,Dt=null}}}const r=new t,a=new i,c=new s,o=new WeakMap,u=new WeakMap;let f={},h={},l={},p=new WeakMap,g=[],x=null,d=!1,m=null,v=null,_=null,A=null,M=null,S=null,b=null,y=new Te(0,0,0),w=0,R=!1,C=null,P=null,B=null,U=null,F=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,W=0;const O=n.getParameter(n.VERSION);O.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(O)[1]),L=W>=1):O.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),L=W>=2);let z=null,j={};const $=n.getParameter(n.SCISSOR_BOX),de=n.getParameter(n.VIEWPORT),Ce=new nt().fromArray($),ae=new nt().fromArray(de);function Q(N,le,Z,_e){const fe=new Uint8Array(4),se=n.createTexture();n.bindTexture(N,se),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let we=0;we<Z;we++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,_e,0,n.RGBA,n.UNSIGNED_BYTE,fe):n.texImage2D(le+we,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,fe);return se}const ne={};ne[n.TEXTURE_2D]=Q(n.TEXTURE_2D,n.TEXTURE_2D,1),ne[n.TEXTURE_CUBE_MAP]=Q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[n.TEXTURE_2D_ARRAY]=Q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ne[n.TEXTURE_3D]=Q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),c.setClear(0),ie(n.DEPTH_TEST),a.setFunc(Ks),zt(!1),Tt(Du),ie(n.CULL_FACE),At(Rt);function ie(N){f[N]!==!0&&(n.enable(N),f[N]=!0)}function Ee(N){f[N]!==!1&&(n.disable(N),f[N]=!1)}function Ie(N,le){return l[N]!==le?(n.bindFramebuffer(N,le),l[N]=le,N===n.DRAW_FRAMEBUFFER&&(l[n.FRAMEBUFFER]=le),N===n.FRAMEBUFFER&&(l[n.DRAW_FRAMEBUFFER]=le),!0):!1}function Pe(N,le){let Z=g,_e=!1;if(N){Z=p.get(le),Z===void 0&&(Z=[],p.set(le,Z));const fe=N.textures;if(Z.length!==fe.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let se=0,we=fe.length;se<we;se++)Z[se]=n.COLOR_ATTACHMENT0+se;Z.length=fe.length,_e=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,_e=!0);_e&&n.drawBuffers(Z)}function at(N){return x!==N?(n.useProgram(N),x=N,!0):!1}const Xe={[ss]:n.FUNC_ADD,[ap]:n.FUNC_SUBTRACT,[op]:n.FUNC_REVERSE_SUBTRACT};Xe[cp]=n.MIN,Xe[lp]=n.MAX;const ot={[up]:n.ZERO,[fp]:n.ONE,[hp]:n.SRC_COLOR,[Rc]:n.SRC_ALPHA,[xp]:n.SRC_ALPHA_SATURATE,[gp]:n.DST_COLOR,[pp]:n.DST_ALPHA,[dp]:n.ONE_MINUS_SRC_COLOR,[Dc]:n.ONE_MINUS_SRC_ALPHA,[vp]:n.ONE_MINUS_DST_COLOR,[mp]:n.ONE_MINUS_DST_ALPHA,[_p]:n.CONSTANT_COLOR,[Ap]:n.ONE_MINUS_CONSTANT_COLOR,[yp]:n.CONSTANT_ALPHA,[Mp]:n.ONE_MINUS_CONSTANT_ALPHA};function At(N,le,Z,_e,fe,se,we,Oe,Dt,ct){if(N===Rt){d===!0&&(Ee(n.BLEND),d=!1);return}if(d===!1&&(ie(n.BLEND),d=!0),N!==rp){if(N!==m||ct!==R){if((v!==ss||M!==ss)&&(n.blendEquation(n.FUNC_ADD),v=ss,M=ss),ct)switch(N){case Ni:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cc:n.blendFunc(n.ONE,n.ONE);break;case Pu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Iu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:je("WebGLState: Invalid blending: ",N);break}else switch(N){case Ni:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Pu:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Iu:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",N);break}_=null,A=null,S=null,b=null,y.set(0,0,0),w=0,m=N,R=ct}return}fe=fe||le,se=se||Z,we=we||_e,(le!==v||fe!==M)&&(n.blendEquationSeparate(Xe[le],Xe[fe]),v=le,M=fe),(Z!==_||_e!==A||se!==S||we!==b)&&(n.blendFuncSeparate(ot[Z],ot[_e],ot[se],ot[we]),_=Z,A=_e,S=se,b=we),(Oe.equals(y)===!1||Dt!==w)&&(n.blendColor(Oe.r,Oe.g,Oe.b,Dt),y.copy(Oe),w=Dt),m=N,R=!1}function Ye(N,le){N.side===Yt?Ee(n.CULL_FACE):ie(n.CULL_FACE);let Z=N.side===Ut;le&&(Z=!Z),zt(Z),N.blending===Ni&&N.transparent===!1?At(Rt):At(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const _e=N.stencilWrite;c.setTest(_e),_e&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),H(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):Ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function zt(N){C!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),C=N)}function Tt(N){N!==ip?(ie(n.CULL_FACE),N!==P&&(N===Du?n.cullFace(n.BACK):N===sp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ee(n.CULL_FACE),P=N}function gn(N){N!==B&&(L&&n.lineWidth(N),B=N)}function H(N,le,Z){N?(ie(n.POLYGON_OFFSET_FILL),(U!==le||F!==Z)&&(U=le,F=Z,a.getReversed()&&(le=-le),n.polygonOffset(le,Z))):Ee(n.POLYGON_OFFSET_FILL)}function Ht(N){N?ie(n.SCISSOR_TEST):Ee(n.SCISSOR_TEST)}function Qe(N){N===void 0&&(N=n.TEXTURE0+k-1),z!==N&&(n.activeTexture(N),z=N)}function gt(N,le,Z){Z===void 0&&(z===null?Z=n.TEXTURE0+k-1:Z=z);let _e=j[Z];_e===void 0&&(_e={type:void 0,texture:void 0},j[Z]=_e),(_e.type!==N||_e.texture!==le)&&(z!==Z&&(n.activeTexture(Z),z=Z),n.bindTexture(N,le||ne[N]),_e.type=N,_e.texture=le)}function pe(){const N=j[z];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function bt(){try{n.compressedTexImage2D(...arguments)}catch(N){je("WebGLState:",N)}}function D(){try{n.compressedTexImage3D(...arguments)}catch(N){je("WebGLState:",N)}}function T(){try{n.texSubImage2D(...arguments)}catch(N){je("WebGLState:",N)}}function V(){try{n.texSubImage3D(...arguments)}catch(N){je("WebGLState:",N)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(N){je("WebGLState:",N)}}function re(){try{n.compressedTexSubImage3D(...arguments)}catch(N){je("WebGLState:",N)}}function oe(){try{n.texStorage2D(...arguments)}catch(N){je("WebGLState:",N)}}function he(){try{n.texStorage3D(...arguments)}catch(N){je("WebGLState:",N)}}function K(){try{n.texImage2D(...arguments)}catch(N){je("WebGLState:",N)}}function ee(){try{n.texImage3D(...arguments)}catch(N){je("WebGLState:",N)}}function xe(N){return h[N]!==void 0?h[N]:n.getParameter(N)}function ye(N,le){h[N]!==le&&(n.pixelStorei(N,le),h[N]=le)}function ue(N){Ce.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Ce.copy(N))}function ce(N){ae.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),ae.copy(N))}function Be(N,le){let Z=u.get(le);Z===void 0&&(Z=new WeakMap,u.set(le,Z));let _e=Z.get(N);_e===void 0&&(_e=n.getUniformBlockIndex(le,N.name),Z.set(N,_e))}function He(N,le){const _e=u.get(le).get(N);o.get(le)!==_e&&(n.uniformBlockBinding(le,_e,N.__bindingPointIndex),o.set(le,_e))}function et(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),f={},h={},z=null,j={},l={},p=new WeakMap,g=[],x=null,d=!1,m=null,v=null,_=null,A=null,M=null,S=null,b=null,y=new Te(0,0,0),w=0,R=!1,C=null,P=null,B=null,U=null,F=null,Ce.set(0,0,n.canvas.width,n.canvas.height),ae.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),c.reset()}return{buffers:{color:r,depth:a,stencil:c},enable:ie,disable:Ee,bindFramebuffer:Ie,drawBuffers:Pe,useProgram:at,setBlending:At,setMaterial:Ye,setFlipSided:zt,setCullFace:Tt,setLineWidth:gn,setPolygonOffset:H,setScissorTest:Ht,activeTexture:Qe,bindTexture:gt,unbindTexture:pe,compressedTexImage2D:bt,compressedTexImage3D:D,texImage2D:K,texImage3D:ee,pixelStorei:ye,getParameter:xe,updateUBOMapping:Be,uniformBlockBinding:He,texStorage2D:oe,texStorage3D:he,texSubImage2D:T,texSubImage3D:V,compressedTexSubImage2D:J,compressedTexSubImage3D:re,scissor:ue,viewport:ce,reset:et}}function g_(n,e,t,i,s,r,a){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Se,f=new WeakMap,h=new Set;let l;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(D,T){return g?new OffscreenCanvas(D,T):no("canvas")}function d(D,T,V){let J=1;const re=bt(D);if((re.width>V||re.height>V)&&(J=V/Math.max(re.width,re.height)),J<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const oe=Math.floor(J*re.width),he=Math.floor(J*re.height);l===void 0&&(l=x(oe,he));const K=T?x(oe,he):l;return K.width=oe,K.height=he,K.getContext("2d").drawImage(D,0,0,oe,he),Le("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+oe+"x"+he+")."),K}else return"data"in D&&Le("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),D;return D}function m(D){return D.generateMipmaps}function v(D){n.generateMipmap(D)}function _(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(D,T,V,J,re,oe=!1){if(D!==null){if(n[D]!==void 0)return n[D];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let he;J&&(he=e.get("EXT_texture_norm16"),he||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=T;if(T===n.RED&&(V===n.FLOAT&&(K=n.R32F),V===n.HALF_FLOAT&&(K=n.R16F),V===n.UNSIGNED_BYTE&&(K=n.R8),V===n.UNSIGNED_SHORT&&he&&(K=he.R16_EXT),V===n.SHORT&&he&&(K=he.R16_SNORM_EXT)),T===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(K=n.R8UI),V===n.UNSIGNED_SHORT&&(K=n.R16UI),V===n.UNSIGNED_INT&&(K=n.R32UI),V===n.BYTE&&(K=n.R8I),V===n.SHORT&&(K=n.R16I),V===n.INT&&(K=n.R32I)),T===n.RG&&(V===n.FLOAT&&(K=n.RG32F),V===n.HALF_FLOAT&&(K=n.RG16F),V===n.UNSIGNED_BYTE&&(K=n.RG8),V===n.UNSIGNED_SHORT&&he&&(K=he.RG16_EXT),V===n.SHORT&&he&&(K=he.RG16_SNORM_EXT)),T===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(K=n.RG8UI),V===n.UNSIGNED_SHORT&&(K=n.RG16UI),V===n.UNSIGNED_INT&&(K=n.RG32UI),V===n.BYTE&&(K=n.RG8I),V===n.SHORT&&(K=n.RG16I),V===n.INT&&(K=n.RG32I)),T===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(K=n.RGB8UI),V===n.UNSIGNED_SHORT&&(K=n.RGB16UI),V===n.UNSIGNED_INT&&(K=n.RGB32UI),V===n.BYTE&&(K=n.RGB8I),V===n.SHORT&&(K=n.RGB16I),V===n.INT&&(K=n.RGB32I)),T===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),V===n.UNSIGNED_INT&&(K=n.RGBA32UI),V===n.BYTE&&(K=n.RGBA8I),V===n.SHORT&&(K=n.RGBA16I),V===n.INT&&(K=n.RGBA32I)),T===n.RGB&&(V===n.UNSIGNED_SHORT&&he&&(K=he.RGB16_EXT),V===n.SHORT&&he&&(K=he.RGB16_SNORM_EXT),V===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),T===n.RGBA){const ee=oe?to:Ke.getTransfer(re);V===n.FLOAT&&(K=n.RGBA32F),V===n.HALF_FLOAT&&(K=n.RGBA16F),V===n.UNSIGNED_BYTE&&(K=ee===it?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT&&he&&(K=he.RGBA16_EXT),V===n.SHORT&&he&&(K=he.RGBA16_SNORM_EXT),V===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function M(D,T){let V;return D?T===null||T===ln||T===Js?V=n.DEPTH24_STENCIL8:T===ht?V=n.DEPTH32F_STENCIL8:T===Zs&&(V=n.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ln||T===Js?V=n.DEPTH_COMPONENT24:T===ht?V=n.DEPTH_COMPONENT32F:T===Zs&&(V=n.DEPTH_COMPONENT16),V}function S(D,T){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==Ge&&D.minFilter!==Je?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function b(D){const T=D.target;T.removeEventListener("dispose",b),w(T),T.isVideoTexture&&f.delete(T),T.isHTMLTexture&&h.delete(T)}function y(D){const T=D.target;T.removeEventListener("dispose",y),C(T)}function w(D){const T=i.get(D);if(T.__webglInit===void 0)return;const V=D.source,J=p.get(V);if(J){const re=J[T.__cacheKey];re.usedTimes--,re.usedTimes===0&&R(D),Object.keys(J).length===0&&p.delete(V)}i.remove(D)}function R(D){const T=i.get(D);n.deleteTexture(T.__webglTexture);const V=D.source,J=p.get(V);delete J[T.__cacheKey],a.memory.textures--}function C(D){const T=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(T.__webglFramebuffer[J]))for(let re=0;re<T.__webglFramebuffer[J].length;re++)n.deleteFramebuffer(T.__webglFramebuffer[J][re]);else n.deleteFramebuffer(T.__webglFramebuffer[J]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[J])}else{if(Array.isArray(T.__webglFramebuffer))for(let J=0;J<T.__webglFramebuffer.length;J++)n.deleteFramebuffer(T.__webglFramebuffer[J]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let J=0;J<T.__webglColorRenderbuffer.length;J++)T.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[J]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const V=D.textures;for(let J=0,re=V.length;J<re;J++){const oe=i.get(V[J]);oe.__webglTexture&&(n.deleteTexture(oe.__webglTexture),a.memory.textures--),i.remove(V[J])}i.remove(D)}let P=0;function B(){P=0}function U(){return P}function F(D){P=D}function k(){const D=P;return D>=s.maxTextures&&Le("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),P+=1,D}function L(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function W(D,T){const V=i.get(D);if(D.isVideoTexture&&gt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&V.__version!==D.version){const J=D.image;if(J===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(V,D,T);return}}else D.isExternalTexture&&(V.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+T)}function O(D,T){const V=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&V.__version!==D.version){Ee(V,D,T);return}else D.isExternalTexture&&(V.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+T)}function z(D,T){const V=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&V.__version!==D.version){Ee(V,D,T);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+T)}function j(D,T){const V=i.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&V.__version!==D.version){Ie(V,D,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+T)}const $={[zn]:n.REPEAT,[Jt]:n.CLAMP_TO_EDGE,[Nc]:n.MIRRORED_REPEAT},de={[Ge]:n.NEAREST,[bp]:n.NEAREST_MIPMAP_NEAREST,[Kr]:n.NEAREST_MIPMAP_LINEAR,[Je]:n.LINEAR,[Ro]:n.LINEAR_MIPMAP_NEAREST,[as]:n.LINEAR_MIPMAP_LINEAR},Ce={[Cp]:n.NEVER,[Lp]:n.ALWAYS,[Rp]:n.LESS,[Gl]:n.LEQUAL,[Dp]:n.EQUAL,[kl]:n.GEQUAL,[Pp]:n.GREATER,[Ip]:n.NOTEQUAL};function ae(D,T){if(T.type===ht&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Je||T.magFilter===Ro||T.magFilter===Kr||T.magFilter===as||T.minFilter===Je||T.minFilter===Ro||T.minFilter===Kr||T.minFilter===as)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,$[T.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,$[T.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,$[T.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,de[T.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,de[T.minFilter]),T.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,Ce[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ge||T.minFilter!==Kr&&T.minFilter!==as||T.type===ht&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Q(D,T){let V=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",b));const J=T.source;let re=p.get(J);re===void 0&&(re={},p.set(J,re));const oe=L(T);if(oe!==D.__cacheKey){re[oe]===void 0&&(re[oe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),re[oe].usedTimes++;const he=re[D.__cacheKey];he!==void 0&&(re[D.__cacheKey].usedTimes--,he.usedTimes===0&&R(T)),D.__cacheKey=oe,D.__webglTexture=re[oe].texture}return V}function ne(D,T,V){return Math.floor(Math.floor(D/V)/T)}function ie(D,T,V,J){const oe=D.updateRanges;if(oe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,V,J,T.data);else{oe.sort((ye,ue)=>ye.start-ue.start);let he=0;for(let ye=1;ye<oe.length;ye++){const ue=oe[he],ce=oe[ye],Be=ue.start+ue.count,He=ne(ce.start,T.width,4),et=ne(ue.start,T.width,4);ce.start<=Be+1&&He===et&&ne(ce.start+ce.count-1,T.width,4)===He?ue.count=Math.max(ue.count,ce.start+ce.count-ue.start):(++he,oe[he]=ce)}oe.length=he+1;const K=t.getParameter(n.UNPACK_ROW_LENGTH),ee=t.getParameter(n.UNPACK_SKIP_PIXELS),xe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let ye=0,ue=oe.length;ye<ue;ye++){const ce=oe[ye],Be=Math.floor(ce.start/4),He=Math.ceil(ce.count/4),et=Be%T.width,N=Math.floor(Be/T.width),le=He,Z=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,et),t.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,et,N,le,Z,V,J,T.data)}D.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,K),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(n.UNPACK_SKIP_ROWS,xe)}}function Ee(D,T,V){let J=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(J=n.TEXTURE_3D);const re=Q(D,T),oe=T.source;t.bindTexture(J,D.__webglTexture,n.TEXTURE0+V);const he=i.get(oe);if(oe.version!==he.__version||re===!0){if(t.activeTexture(n.TEXTURE0+V),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const Z=Ke.getPrimaries(Ke.workingColorSpace),_e=T.colorSpace===jn?null:Ke.getPrimaries(T.colorSpace),fe=T.colorSpace===jn||Z===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe)}t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment);let ee=d(T.image,!1,s.maxTextureSize);ee=pe(T,ee);const xe=r.convert(T.format,T.colorSpace),ye=r.convert(T.type);let ue=A(T.internalFormat,xe,ye,T.normalized,T.colorSpace,T.isVideoTexture);ae(J,T);let ce;const Be=T.mipmaps,He=T.isVideoTexture!==!0,et=he.__version===void 0||re===!0,N=oe.dataReady,le=S(T,ee);if(T.isDepthTexture)ue=M(T.format===Fi,T.type),et&&(He?t.texStorage2D(n.TEXTURE_2D,1,ue,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,ue,ee.width,ee.height,0,xe,ye,null));else if(T.isDataTexture)if(Be.length>0){He&&et&&t.texStorage2D(n.TEXTURE_2D,le,ue,Be[0].width,Be[0].height);for(let Z=0,_e=Be.length;Z<_e;Z++)ce=Be[Z],He?N&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,ce.width,ce.height,xe,ye,ce.data):t.texImage2D(n.TEXTURE_2D,Z,ue,ce.width,ce.height,0,xe,ye,ce.data);T.generateMipmaps=!1}else He?(et&&t.texStorage2D(n.TEXTURE_2D,le,ue,ee.width,ee.height),N&&ie(T,ee,xe,ye)):t.texImage2D(n.TEXTURE_2D,0,ue,ee.width,ee.height,0,xe,ye,ee.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){He&&et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,ue,Be[0].width,Be[0].height,ee.depth);for(let Z=0,_e=Be.length;Z<_e;Z++)if(ce=Be[Z],T.format!==rt)if(xe!==null)if(He){if(N)if(T.layerUpdates.size>0){const fe=ff(ce.width,ce.height,T.format,T.type);for(const se of T.layerUpdates){const we=ce.data.subarray(se*fe/ce.data.BYTES_PER_ELEMENT,(se+1)*fe/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,se,ce.width,ce.height,1,xe,we)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,ce.width,ce.height,ee.depth,xe,ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,ue,ce.width,ce.height,ee.depth,0,ce.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,ce.width,ce.height,ee.depth,xe,ye,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Z,ue,ce.width,ce.height,ee.depth,0,xe,ye,ce.data)}else{He&&et&&t.texStorage2D(n.TEXTURE_2D,le,ue,Be[0].width,Be[0].height);for(let Z=0,_e=Be.length;Z<_e;Z++)ce=Be[Z],T.format!==rt?xe!==null?He?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,ce.width,ce.height,xe,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,Z,ue,ce.width,ce.height,0,ce.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?N&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,ce.width,ce.height,xe,ye,ce.data):t.texImage2D(n.TEXTURE_2D,Z,ue,ce.width,ce.height,0,xe,ye,ce.data)}else if(T.isDataArrayTexture)if(He){if(et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,ue,ee.width,ee.height,ee.depth),N)if(T.layerUpdates.size>0){const Z=ff(ee.width,ee.height,T.format,T.type);for(const _e of T.layerUpdates){const fe=ee.data.subarray(_e*Z/ee.data.BYTES_PER_ELEMENT,(_e+1)*Z/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,_e,ee.width,ee.height,1,xe,ye,fe)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,xe,ye,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ue,ee.width,ee.height,ee.depth,0,xe,ye,ee.data);else if(T.isData3DTexture)He?(et&&t.texStorage3D(n.TEXTURE_3D,le,ue,ee.width,ee.height,ee.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,xe,ye,ee.data)):t.texImage3D(n.TEXTURE_3D,0,ue,ee.width,ee.height,ee.depth,0,xe,ye,ee.data);else if(T.isFramebufferTexture){if(et)if(He)t.texStorage2D(n.TEXTURE_2D,le,ue,ee.width,ee.height);else{let Z=ee.width,_e=ee.height;for(let fe=0;fe<le;fe++)t.texImage2D(n.TEXTURE_2D,fe,ue,Z,_e,0,xe,ye,null),Z>>=1,_e>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in n){const Z=n.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),ee.parentNode!==Z){Z.appendChild(ee),h.add(T),Z.onpaint=Oe=>{const Dt=Oe.changedElements;for(const ct of h)Dt.includes(ct.image)&&(ct.needsUpdate=!0)},Z.requestPaint();return}const _e=0,fe=n.RGBA,se=n.RGBA,we=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,_e,fe,se,we,ee),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Be.length>0){if(He&&et){const Z=bt(Be[0]);t.texStorage2D(n.TEXTURE_2D,le,ue,Z.width,Z.height)}for(let Z=0,_e=Be.length;Z<_e;Z++)ce=Be[Z],He?N&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,xe,ye,ce):t.texImage2D(n.TEXTURE_2D,Z,ue,xe,ye,ce);T.generateMipmaps=!1}else if(He){if(et){const Z=bt(ee);t.texStorage2D(n.TEXTURE_2D,le,ue,Z.width,Z.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,ye,ee)}else t.texImage2D(n.TEXTURE_2D,0,ue,xe,ye,ee);m(T)&&v(J),he.__version=oe.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Ie(D,T,V){if(T.image.length!==6)return;const J=Q(D,T),re=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+V);const oe=i.get(re);if(re.version!==oe.__version||J===!0){t.activeTexture(n.TEXTURE0+V);const he=Ke.getPrimaries(Ke.workingColorSpace),K=T.colorSpace===jn?null:Ke.getPrimaries(T.colorSpace),ee=T.colorSpace===jn||he===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const xe=T.isCompressedTexture||T.image[0].isCompressedTexture,ye=T.image[0]&&T.image[0].isDataTexture,ue=[];for(let se=0;se<6;se++)!xe&&!ye?ue[se]=d(T.image[se],!0,s.maxCubemapSize):ue[se]=ye?T.image[se].image:T.image[se],ue[se]=pe(T,ue[se]);const ce=ue[0],Be=r.convert(T.format,T.colorSpace),He=r.convert(T.type),et=A(T.internalFormat,Be,He,T.normalized,T.colorSpace),N=T.isVideoTexture!==!0,le=oe.__version===void 0||J===!0,Z=re.dataReady;let _e=S(T,ce);ae(n.TEXTURE_CUBE_MAP,T);let fe;if(xe){N&&le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,et,ce.width,ce.height);for(let se=0;se<6;se++){fe=ue[se].mipmaps;for(let we=0;we<fe.length;we++){const Oe=fe[we];T.format!==rt?Be!==null?N?Z&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,we,0,0,Oe.width,Oe.height,Be,Oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,we,et,Oe.width,Oe.height,0,Oe.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,we,0,0,Oe.width,Oe.height,Be,He,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,we,et,Oe.width,Oe.height,0,Be,He,Oe.data)}}}else{if(fe=T.mipmaps,N&&le){fe.length>0&&_e++;const se=bt(ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,et,se.width,se.height)}for(let se=0;se<6;se++)if(ye){N?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ue[se].width,ue[se].height,Be,He,ue[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,et,ue[se].width,ue[se].height,0,Be,He,ue[se].data);for(let we=0;we<fe.length;we++){const Dt=fe[we].image[se].image;N?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,we+1,0,0,Dt.width,Dt.height,Be,He,Dt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,we+1,et,Dt.width,Dt.height,0,Be,He,Dt.data)}}else{N?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Be,He,ue[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,et,Be,He,ue[se]);for(let we=0;we<fe.length;we++){const Oe=fe[we];N?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,we+1,0,0,Be,He,Oe.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,we+1,et,Be,He,Oe.image[se])}}}m(T)&&v(n.TEXTURE_CUBE_MAP),oe.__version=re.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Pe(D,T,V,J,re,oe){const he=r.convert(V.format,V.colorSpace),K=r.convert(V.type),ee=A(V.internalFormat,he,K,V.normalized,V.colorSpace),xe=i.get(T),ye=i.get(V);if(ye.__renderTarget=T,!xe.__hasExternalTextures){const ue=Math.max(1,T.width>>oe),ce=Math.max(1,T.height>>oe);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,oe,ee,ue,ce,T.depth,0,he,K,null):t.texImage2D(re,oe,ee,ue,ce,0,he,K,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),Qe(T)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,re,ye.__webglTexture,0,Ht(T)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,re,ye.__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function at(D,T,V){if(n.bindRenderbuffer(n.RENDERBUFFER,D),T.depthBuffer){const J=T.depthTexture,re=J&&J.isDepthTexture?J.type:null,oe=M(T.stencilBuffer,re),he=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Qe(T)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ht(T),oe,T.width,T.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ht(T),oe,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,oe,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,D)}else{const J=T.textures;for(let re=0;re<J.length;re++){const oe=J[re],he=r.convert(oe.format,oe.colorSpace),K=r.convert(oe.type),ee=A(oe.internalFormat,he,K,oe.normalized,oe.colorSpace);Qe(T)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ht(T),ee,T.width,T.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ht(T),ee,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,ee,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Xe(D,T,V){const J=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const re=i.get(T.depthTexture);if(re.__renderTarget=T,(!re.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),J){if(re.__webglInit===void 0&&(re.__webglInit=!0,T.depthTexture.addEventListener("dispose",b)),re.__webglTexture===void 0){re.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),ae(n.TEXTURE_CUBE_MAP,T.depthTexture);const xe=r.convert(T.depthTexture.format),ye=r.convert(T.depthTexture.type);let ue;T.depthTexture.format===mi?ue=n.DEPTH_COMPONENT24:T.depthTexture.format===Fi&&(ue=n.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ue,T.width,T.height,0,xe,ye,null)}}else W(T.depthTexture,0);const oe=re.__webglTexture,he=Ht(T),K=J?n.TEXTURE_CUBE_MAP_POSITIVE_X+V:n.TEXTURE_2D,ee=T.depthTexture.format===Fi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===mi)Qe(T)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,K,oe,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,ee,K,oe,0);else if(T.depthTexture.format===Fi)Qe(T)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,K,oe,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,ee,K,oe,0);else throw new Error("Unknown depthTexture format")}function ot(D){const T=i.get(D),V=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const J=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),J){const re=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,J.removeEventListener("dispose",re)};J.addEventListener("dispose",re),T.__depthDisposeCallback=re}T.__boundDepthTexture=J}if(D.depthTexture&&!T.__autoAllocateDepthBuffer)if(V)for(let J=0;J<6;J++)Xe(T.__webglFramebuffer[J],D,J);else{const J=D.texture.mipmaps;J&&J.length>0?Xe(T.__webglFramebuffer[0],D,0):Xe(T.__webglFramebuffer,D,0)}else if(V){T.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[J]),T.__webglDepthbuffer[J]===void 0)T.__webglDepthbuffer[J]=n.createRenderbuffer(),at(T.__webglDepthbuffer[J],D,!1);else{const re=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=T.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,oe)}}else{const J=D.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),at(T.__webglDepthbuffer,D,!1);else{const re=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,oe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function At(D,T,V){const J=i.get(D);T!==void 0&&Pe(J.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&ot(D)}function Ye(D){const T=D.texture,V=i.get(D),J=i.get(T);D.addEventListener("dispose",y);const re=D.textures,oe=D.isWebGLCubeRenderTarget===!0,he=re.length>1;if(he||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=T.version,a.memory.textures++),oe){V.__webglFramebuffer=[];for(let K=0;K<6;K++)if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer[K]=[];for(let ee=0;ee<T.mipmaps.length;ee++)V.__webglFramebuffer[K][ee]=n.createFramebuffer()}else V.__webglFramebuffer[K]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer=[];for(let K=0;K<T.mipmaps.length;K++)V.__webglFramebuffer[K]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(he)for(let K=0,ee=re.length;K<ee;K++){const xe=i.get(re[K]);xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture(),a.memory.textures++)}if(D.samples>0&&Qe(D)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let K=0;K<re.length;K++){const ee=re[K];V.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[K]);const xe=r.convert(ee.format,ee.colorSpace),ye=r.convert(ee.type),ue=A(ee.internalFormat,xe,ye,ee.normalized,ee.colorSpace,D.isXRRenderTarget===!0),ce=Ht(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,ue,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,V.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),at(V.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),ae(n.TEXTURE_CUBE_MAP,T);for(let K=0;K<6;K++)if(T.mipmaps&&T.mipmaps.length>0)for(let ee=0;ee<T.mipmaps.length;ee++)Pe(V.__webglFramebuffer[K][ee],D,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ee);else Pe(V.__webglFramebuffer[K],D,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);m(T)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let K=0,ee=re.length;K<ee;K++){const xe=re[K],ye=i.get(xe);let ue=n.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ue=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,ye.__webglTexture),ae(ue,xe),Pe(V.__webglFramebuffer,D,xe,n.COLOR_ATTACHMENT0+K,ue,0),m(xe)&&v(ue)}t.unbindTexture()}else{let K=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(K=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(K,J.__webglTexture),ae(K,T),T.mipmaps&&T.mipmaps.length>0)for(let ee=0;ee<T.mipmaps.length;ee++)Pe(V.__webglFramebuffer[ee],D,T,n.COLOR_ATTACHMENT0,K,ee);else Pe(V.__webglFramebuffer,D,T,n.COLOR_ATTACHMENT0,K,0);m(T)&&v(K),t.unbindTexture()}D.depthBuffer&&ot(D)}function zt(D){const T=D.textures;for(let V=0,J=T.length;V<J;V++){const re=T[V];if(m(re)){const oe=_(D),he=i.get(re).__webglTexture;t.bindTexture(oe,he),v(oe),t.unbindTexture()}}}const Tt=[],gn=[];function H(D){if(D.samples>0){if(Qe(D)===!1){const T=D.textures,V=D.width,J=D.height;let re=n.COLOR_BUFFER_BIT;const oe=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(D),K=T.length>1;if(K)for(let xe=0;xe<T.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);const ee=D.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let xe=0;xe<T.length;xe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[xe]);const ye=i.get(T[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ye,0)}n.blitFramebuffer(0,0,V,J,0,0,V,J,re,n.NEAREST),o===!0&&(Tt.length=0,gn.length=0,Tt.push(n.COLOR_ATTACHMENT0+xe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Tt.push(oe),gn.push(oe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,gn)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Tt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let xe=0;xe<T.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,he.__webglColorRenderbuffer[xe]);const ye=i.get(T[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&o){const T=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function Ht(D){return Math.min(s.maxSamples,D.samples)}function Qe(D){const T=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function gt(D){const T=a.render.frame;f.get(D)!==T&&(f.set(D,T),D.update())}function pe(D,T){const V=D.colorSpace,J=D.format,re=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||V!==tr&&V!==jn&&(Ke.getTransfer(V)===it?(J!==rt||re!==Mt)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",V)),T}function bt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(u.width=D.naturalWidth||D.width,u.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(u.width=D.displayWidth,u.height=D.displayHeight):(u.width=D.width,u.height=D.height),u}this.allocateTextureUnit=k,this.resetTextureUnits=B,this.getTextureUnits=U,this.setTextureUnits=F,this.setTexture2D=W,this.setTexture2DArray=O,this.setTexture3D=z,this.setTextureCube=j,this.rebindTextures=At,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=Qe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function v_(n,e){function t(i,s=jn){let r;const a=Ke.getTransfer(s);if(i===Mt)return n.UNSIGNED_BYTE;if(i===zl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Hl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Jh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$h)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ja)return n.BYTE;if(i===Ol)return n.SHORT;if(i===Zs)return n.UNSIGNED_SHORT;if(i===Ys)return n.INT;if(i===ln)return n.UNSIGNED_INT;if(i===ht)return n.FLOAT;if(i===Gt)return n.HALF_FLOAT;if(i===ed)return n.ALPHA;if(i===td)return n.RGB;if(i===rt)return n.RGBA;if(i===mi)return n.DEPTH_COMPONENT;if(i===Fi)return n.DEPTH_STENCIL;if(i===$s)return n.RED;if(i===fo)return n.RED_INTEGER;if(i===gi)return n.RG;if(i===kr)return n.RG_INTEGER;if(i===er)return n.RGBA_INTEGER;if(i===ka||i===Va||i===Wa||i===Xa)if(a===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ka)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ka)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Oc||i===zc||i===Hc||i===Gc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Oc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Gc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===kc||i===Vc||i===Wc||i===Xc||i===Yc||i===$a||i===qc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===kc||i===Vc)return a===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Wc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Xc)return r.COMPRESSED_R11_EAC;if(i===Yc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===$a)return r.COMPRESSED_RG11_EAC;if(i===qc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Qc||i===Kc||i===jc||i===Zc||i===Jc||i===$c||i===el||i===tl||i===nl||i===il||i===sl||i===rl||i===al||i===ol)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Qc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$c)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===el)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===il)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===al)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ol)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===cl||i===ll||i===ul)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===cl)return a===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ll)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ul)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fl||i===hl||i===eo||i===dl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===fl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===hl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===eo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Js?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const x_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,__=`
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

}`;class A_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new ld(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new St({vertexShader:x_,fragmentShader:__,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new st(new rr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class y_ extends ti{constructor(e,t){super();const i=this;let s=null,r=1,a=null,c="local-floor",o=1,u=null,f=null,h=null,l=null,p=null,g=null;const x=typeof XRWebGLBinding<"u",d=new A_,m={},v=t.getContextAttributes();let _=null,A=null;const M=[],S=[],b=new Se;let y=null;const w=new cn;w.viewport=new nt;const R=new cn;R.viewport=new nt;const C=[w,R],P=new wm;let B=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ne=M[Q];return ne===void 0&&(ne=new No,M[Q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Q){let ne=M[Q];return ne===void 0&&(ne=new No,M[Q]=ne),ne.getGripSpace()},this.getHand=function(Q){let ne=M[Q];return ne===void 0&&(ne=new No,M[Q]=ne),ne.getHandSpace()};function F(Q){const ne=S.indexOf(Q.inputSource);if(ne===-1)return;const ie=M[ne];ie!==void 0&&(ie.update(Q.inputSource,Q.frame,u||a),ie.dispatchEvent({type:Q.type,data:Q.inputSource}))}function k(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",L);for(let Q=0;Q<M.length;Q++){const ne=S[Q];ne!==null&&(S[Q]=null,M[Q].disconnect(ne))}B=null,U=null,d.reset();for(const Q in m)delete m[Q];e.setRenderTarget(_),p=null,l=null,h=null,s=null,A=null,ae.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){c=Q,i.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(Q){u=Q},this.getBaseLayer=function(){return l!==null?l:p},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",k),s.addEventListener("inputsourceschange",L),v.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(b),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,Ee=null,Ie=null;v.depth&&(Ie=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=v.stencil?Fi:mi,Ee=v.stencil?Js:ln);const Pe={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:r};h=this.getBinding(),l=h.createProjectionLayer(Pe),s.updateRenderState({layers:[l]}),e.setPixelRatio(1),e.setSize(l.textureWidth,l.textureHeight,!1),A=new _t(l.textureWidth,l.textureHeight,{format:rt,type:Mt,depthTexture:new ls(l.textureWidth,l.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:l.ignoreDepthValues===!1,resolveStencilBuffer:l.ignoreDepthValues===!1})}else{const ie={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new _t(p.framebufferWidth,p.framebufferHeight,{format:rt,type:Mt,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(o),u=null,a=await s.requestReferenceSpace(c),ae.setContext(s),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function L(Q){for(let ne=0;ne<Q.removed.length;ne++){const ie=Q.removed[ne],Ee=S.indexOf(ie);Ee>=0&&(S[Ee]=null,M[Ee].disconnect(ie))}for(let ne=0;ne<Q.added.length;ne++){const ie=Q.added[ne];let Ee=S.indexOf(ie);if(Ee===-1){for(let Pe=0;Pe<M.length;Pe++)if(Pe>=S.length){S.push(ie),Ee=Pe;break}else if(S[Pe]===null){S[Pe]=ie,Ee=Pe;break}if(Ee===-1)break}const Ie=M[Ee];Ie&&Ie.connect(ie)}}const W=new I,O=new I;function z(Q,ne,ie){W.setFromMatrixPosition(ne.matrixWorld),O.setFromMatrixPosition(ie.matrixWorld);const Ee=W.distanceTo(O),Ie=ne.projectionMatrix.elements,Pe=ie.projectionMatrix.elements,at=Ie[14]/(Ie[10]-1),Xe=Ie[14]/(Ie[10]+1),ot=(Ie[9]+1)/Ie[5],At=(Ie[9]-1)/Ie[5],Ye=(Ie[8]-1)/Ie[0],zt=(Pe[8]+1)/Pe[0],Tt=at*Ye,gn=at*zt,H=Ee/(-Ye+zt),Ht=H*-Ye;if(ne.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ht),Q.translateZ(H),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ie[10]===-1)Q.projectionMatrix.copy(ne.projectionMatrix),Q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Qe=at+H,gt=Xe+H,pe=Tt-Ht,bt=gn+(Ee-Ht),D=ot*Xe/gt*Qe,T=At*Xe/gt*Qe;Q.projectionMatrix.makePerspective(pe,bt,D,T,Qe,gt),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function j(Q,ne){ne===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ne.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ne=Q.near,ie=Q.far;d.texture!==null&&(d.depthNear>0&&(ne=d.depthNear),d.depthFar>0&&(ie=d.depthFar)),P.near=R.near=w.near=ne,P.far=R.far=w.far=ie,(B!==P.near||U!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),B=P.near,U=P.far),P.layers.mask=Q.layers.mask|6,w.layers.mask=P.layers.mask&-5,R.layers.mask=P.layers.mask&-3;const Ee=Q.parent,Ie=P.cameras;j(P,Ee);for(let Pe=0;Pe<Ie.length;Pe++)j(Ie[Pe],Ee);Ie.length===2?z(P,w,R):P.projectionMatrix.copy(w.projectionMatrix),$(Q,P,Ee)};function $(Q,ne,ie){ie===null?Q.matrix.copy(ne.matrixWorld):(Q.matrix.copy(ie.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ne.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ne.projectionMatrix),Q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=gl*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(l===null&&p===null))return o},this.setFoveation=function(Q){o=Q,l!==null&&(l.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(P)},this.getCameraTexture=function(Q){return m[Q]};let de=null;function Ce(Q,ne){if(f=ne.getViewerPose(u||a),g=ne,f!==null){const ie=f.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let Ee=!1;ie.length!==P.cameras.length&&(P.cameras.length=0,Ee=!0);for(let Xe=0;Xe<ie.length;Xe++){const ot=ie[Xe];let At=null;if(p!==null)At=p.getViewport(ot);else{const zt=h.getViewSubImage(l,ot);At=zt.viewport,Xe===0&&(e.setRenderTargetTextures(A,zt.colorTexture,zt.depthStencilTexture),e.setRenderTarget(A))}let Ye=C[Xe];Ye===void 0&&(Ye=new cn,Ye.layers.enable(Xe),Ye.viewport=new nt,C[Xe]=Ye),Ye.matrix.fromArray(ot.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(ot.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(At.x,At.y,At.width,At.height),Xe===0&&(P.matrix.copy(Ye.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Ee===!0&&P.cameras.push(Ye)}const Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=i.getBinding();const Xe=h.getDepthInformation(ie[0]);Xe&&Xe.isValid&&Xe.texture&&d.init(Xe,s.renderState)}if(Ie&&Ie.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let Xe=0;Xe<ie.length;Xe++){const ot=ie[Xe].camera;if(ot){let At=m[ot];At||(At=new ld,m[ot]=At);const Ye=h.getCameraImage(ot);At.sourceTexture=Ye}}}}for(let ie=0;ie<M.length;ie++){const Ee=S[ie],Ie=M[ie];Ee!==null&&Ie!==void 0&&Ie.update(Ee,ne,u||a)}de&&de(Q,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const ae=new dd;ae.setAnimationLoop(Ce),this.setAnimationLoop=function(Q){de=Q},this.dispose=function(){}}}const M_=new We,Ad=new Ue;Ad.set(-1,0,0,0,1,0,0,0,1);function S_(n,e){function t(d,m){d.matrixAutoUpdate===!0&&d.updateMatrix(),m.value.copy(d.matrix)}function i(d,m){m.color.getRGB(d.fogColor.value,ud(n)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function s(d,m,v,_,A){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(d,m):m.isMeshLambertMaterial?(r(d,m),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(d,m),h(d,m)):m.isMeshPhongMaterial?(r(d,m),f(d,m),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(d,m),l(d,m),m.isMeshPhysicalMaterial&&p(d,m,A)):m.isMeshMatcapMaterial?(r(d,m),g(d,m)):m.isMeshDepthMaterial?r(d,m):m.isMeshDistanceMaterial?(r(d,m),x(d,m)):m.isMeshNormalMaterial?r(d,m):m.isLineBasicMaterial?(a(d,m),m.isLineDashedMaterial&&c(d,m)):m.isPointsMaterial?o(d,m,v,_):m.isSpriteMaterial?u(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map,t(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.bumpMap&&(d.bumpMap.value=m.bumpMap,t(m.bumpMap,d.bumpMapTransform),d.bumpScale.value=m.bumpScale,m.side===Ut&&(d.bumpScale.value*=-1)),m.normalMap&&(d.normalMap.value=m.normalMap,t(m.normalMap,d.normalMapTransform),d.normalScale.value.copy(m.normalScale),m.side===Ut&&d.normalScale.value.negate()),m.displacementMap&&(d.displacementMap.value=m.displacementMap,t(m.displacementMap,d.displacementMapTransform),d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,d.emissiveMapTransform)),m.specularMap&&(d.specularMap.value=m.specularMap,t(m.specularMap,d.specularMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const v=e.get(m),_=v.envMap,A=v.envMapRotation;_&&(d.envMap.value=_,d.envMapRotation.value.setFromMatrix4(M_.makeRotationFromEuler(A)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply(Ad),d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap&&(d.lightMap.value=m.lightMap,d.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,d.lightMapTransform)),m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,d.aoMapTransform))}function a(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,m.map&&(d.map.value=m.map,t(m.map,d.mapTransform))}function c(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function o(d,m,v,_){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*v,d.scale.value=_*.5,m.map&&(d.map.value=m.map,t(m.map,d.uvTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function u(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map,t(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function f(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function h(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function l(d,m){d.metalness.value=m.metalness,m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,d.metalnessMapTransform)),d.roughness.value=m.roughness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,d.roughnessMapTransform)),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function p(d,m,v){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,d.sheenColorMapTransform)),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,d.sheenRoughnessMapTransform))),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,d.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(d.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ut&&d.clearcoatNormalScale.value.negate())),m.dispersion>0&&(d.dispersion.value=m.dispersion),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,d.iridescenceMapTransform)),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=v.texture,d.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,d.transmissionMapTransform)),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(d.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(d.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,d.specularColorMapTransform)),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,m){m.matcap&&(d.matcap.value=m.matcap)}function x(d,m){const v=e.get(m).light;d.referencePosition.value.setFromMatrixPosition(v.matrixWorld),d.nearDistance.value=v.shadow.camera.near,d.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function T_(n,e,t,i){let s={},r={},a=[];const c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function o(v,_){const A=_.program;i.uniformBlockBinding(v,A)}function u(v,_){let A=s[v.id];A===void 0&&(g(v),A=f(v),s[v.id]=A,v.addEventListener("dispose",d));const M=_.program;i.updateUBOMapping(v,M);const S=e.render.frame;r[v.id]!==S&&(l(v),r[v.id]=S)}function f(v){const _=h();v.__bindingPointIndex=_;const A=n.createBuffer(),M=v.__size,S=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,M,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,A),A}function h(){for(let v=0;v<c;v++)if(a.indexOf(v)===-1)return a.push(v),v;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function l(v){const _=s[v.id],A=v.uniforms,M=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let S=0,b=A.length;S<b;S++){const y=Array.isArray(A[S])?A[S]:[A[S]];for(let w=0,R=y.length;w<R;w++){const C=y[w];if(p(C,S,w,M)===!0){const P=C.__offset,B=Array.isArray(C.value)?C.value:[C.value];let U=0;for(let F=0;F<B.length;F++){const k=B[F],L=x(k);typeof k=="number"||typeof k=="boolean"?(C.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,P+U,C.__data)):k.isMatrix3?(C.__data[0]=k.elements[0],C.__data[1]=k.elements[1],C.__data[2]=k.elements[2],C.__data[3]=0,C.__data[4]=k.elements[3],C.__data[5]=k.elements[4],C.__data[6]=k.elements[5],C.__data[7]=0,C.__data[8]=k.elements[6],C.__data[9]=k.elements[7],C.__data[10]=k.elements[8],C.__data[11]=0):ArrayBuffer.isView(k)?C.__data.set(new k.constructor(k.buffer,k.byteOffset,C.__data.length)):(k.toArray(C.__data,U),U+=L.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,P,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,_,A,M){const S=v.value,b=_+"_"+A;if(M[b]===void 0)return typeof S=="number"||typeof S=="boolean"?M[b]=S:ArrayBuffer.isView(S)?M[b]=S.slice():M[b]=S.clone(),!0;{const y=M[b];if(typeof S=="number"||typeof S=="boolean"){if(y!==S)return M[b]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(y.equals(S)===!1)return y.copy(S),!0}}return!1}function g(v){const _=v.uniforms;let A=0;const M=16;for(let b=0,y=_.length;b<y;b++){const w=Array.isArray(_[b])?_[b]:[_[b]];for(let R=0,C=w.length;R<C;R++){const P=w[R],B=Array.isArray(P.value)?P.value:[P.value];for(let U=0,F=B.length;U<F;U++){const k=B[U],L=x(k),W=A%M,O=W%L.boundary,z=W+O;A+=O,z!==0&&M-z<L.storage&&(A+=M-z),P.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=A,A+=L.storage}}}const S=A%M;return S>0&&(A+=M-S),v.__size=A,v.__cache={},this}function x(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(_.boundary=16,_.storage=v.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",v),_}function d(v){const _=v.target;_.removeEventListener("dispose",d);const A=a.indexOf(_.__bindingPointIndex);a.splice(A,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(const v in s)n.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:o,update:u,dispose:m}}const b_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let qn=null;function E_(){return qn===null&&(qn=new yn(b_,16,16,gi,Gt),qn.name="DFG_LUT",qn.minFilter=Je,qn.magFilter=Je,qn.wrapS=Jt,qn.wrapT=Jt,qn.generateMipmaps=!1,qn.needsUpdate=!0),qn}class w_{constructor(e={}){const{canvas:t=Bp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:c=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:l=!1,outputBufferType:p=Mt}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const x=p,d=new Set([er,kr,fo]),m=new Set([Mt,ln,Zs,Js,zl,Hl]),v=new Uint32Array(4),_=new Int32Array(4),A=new I;let M=null,S=null;const b=[],y=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let C=!1,P=null;this._outputColorSpace=ut;let B=0,U=0,F=null,k=-1,L=null;const W=new nt,O=new nt;let z=null;const j=new Te(0);let $=0,de=t.width,Ce=t.height,ae=1,Q=null,ne=null;const ie=new nt(0,0,de,Ce),Ee=new nt(0,0,de,Ce);let Ie=!1;const Pe=new Xl;let at=!1,Xe=!1;const ot=new We,At=new I,Ye=new nt,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Tt=!1;function gn(){return F===null?ae:1}let H=i;function Ht(E,G){return t.getContext(E,G)}try{const E={alpha:!0,depth:s,stencil:r,antialias:c,premultipliedAlpha:o,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_i}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),H===null){const G="webgl2";if(H=Ht(G,E),H===null)throw Ht(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw je("WebGLRenderer: "+E.message),E}let Qe,gt,pe,bt,D,T,V,J,re,oe,he,K,ee,xe,ye,ue,ce,Be,He,et,N,le,Z;function _e(){Qe=new Ev(H),Qe.init(),N=new v_(H,Qe),gt=new xv(H,Qe,e,N),pe=new m_(H,Qe),gt.reversedDepthBuffer&&l&&pe.buffers.depth.setReversed(!0),bt=new Rv(H),D=new t_,T=new g_(H,Qe,pe,D,gt,N,bt),V=new bv(R),J=new Lm(H),le=new gv(H,J),re=new wv(H,J,bt,le),oe=new Pv(H,re,J,le,bt),Be=new Dv(H,gt,T),ye=new _v(D),he=new e_(R,V,Qe,gt,le,ye),K=new S_(R,D),ee=new i_,xe=new l_(Qe),ce=new mv(R,V,pe,oe,g,o),ue=new p_(R,oe,gt),Z=new T_(H,bt,gt,pe),He=new vv(H,Qe,bt),et=new Cv(H,Qe,bt),bt.programs=he.programs,R.capabilities=gt,R.extensions=Qe,R.properties=D,R.renderLists=ee,R.shadowMap=ue,R.state=pe,R.info=bt}_e(),x!==Mt&&(w=new Lv(x,t.width,t.height,s,r));const fe=new y_(R,H);this.xr=fe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const E=Qe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Qe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(E){E!==void 0&&(ae=E,this.setSize(de,Ce,!1))},this.getSize=function(E){return E.set(de,Ce)},this.setSize=function(E,G,q=!0){if(fe.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}de=E,Ce=G,t.width=Math.floor(E*ae),t.height=Math.floor(G*ae),q===!0&&(t.style.width=E+"px",t.style.height=G+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,E,G)},this.getDrawingBufferSize=function(E){return E.set(de*ae,Ce*ae).floor()},this.setDrawingBufferSize=function(E,G,q){de=E,Ce=G,ae=q,t.width=Math.floor(E*q),t.height=Math.floor(G*q),this.setViewport(0,0,E,G)},this.setEffects=function(E){if(x===Mt){je("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let G=0;G<E.length;G++)if(E[G].isOutputPass===!0){Le("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(W)},this.getViewport=function(E){return E.copy(ie)},this.setViewport=function(E,G,q,X){E.isVector4?ie.set(E.x,E.y,E.z,E.w):ie.set(E,G,q,X),pe.viewport(W.copy(ie).multiplyScalar(ae).round())},this.getScissor=function(E){return E.copy(Ee)},this.setScissor=function(E,G,q,X){E.isVector4?Ee.set(E.x,E.y,E.z,E.w):Ee.set(E,G,q,X),pe.scissor(O.copy(Ee).multiplyScalar(ae).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(E){pe.setScissorTest(Ie=E)},this.setOpaqueSort=function(E){Q=E},this.setTransparentSort=function(E){ne=E},this.getClearColor=function(E){return E.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(E=!0,G=!0,q=!0){let X=0;if(E){let Y=!1;if(F!==null){const ve=F.texture.format;Y=d.has(ve)}if(Y){const ve=F.texture.type,Me=m.has(ve),ge=ce.getClearColor(),be=ce.getClearAlpha(),Re=ge.r,ze=ge.g,Ve=ge.b;Me?(v[0]=Re,v[1]=ze,v[2]=Ve,v[3]=be,H.clearBufferuiv(H.COLOR,0,v)):(_[0]=Re,_[1]=ze,_[2]=Ve,_[3]=be,H.clearBufferiv(H.COLOR,0,_))}else X|=H.COLOR_BUFFER_BIT}G&&(X|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(X|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&H.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),P=E},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),ce.dispose(),ee.dispose(),xe.dispose(),D.dispose(),V.dispose(),oe.dispose(),le.dispose(),Z.dispose(),he.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Mu),fe.removeEventListener("sessionend",Su),Yi.stop()};function se(E){E.preventDefault(),Nu("WebGLRenderer: Context Lost."),C=!0}function we(){Nu("WebGLRenderer: Context Restored."),C=!1;const E=bt.autoReset,G=ue.enabled,q=ue.autoUpdate,X=ue.needsUpdate,Y=ue.type;_e(),bt.autoReset=E,ue.enabled=G,ue.autoUpdate=q,ue.needsUpdate=X,ue.type=Y}function Oe(E){je("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Dt(E){const G=E.target;G.removeEventListener("dispose",Dt),ct(G)}function ct(E){ni(E),D.remove(E)}function ni(E){const G=D.get(E).programs;G!==void 0&&(G.forEach(function(q){he.releaseProgram(q)}),E.isShaderMaterial&&he.releaseShaderCache(E))}this.renderBufferDirect=function(E,G,q,X,Y,ve){G===null&&(G=zt);const Me=Y.isMesh&&Y.matrixWorld.determinant()<0,ge=Zd(E,G,q,X,Y);pe.setMaterial(X,Me);let be=q.index,Re=1;if(X.wireframe===!0){if(be=re.getWireframeAttribute(q),be===void 0)return;Re=2}const ze=q.drawRange,Ve=q.attributes.position;let De=ze.start*Re,lt=(ze.start+ze.count)*Re;ve!==null&&(De=Math.max(De,ve.start*Re),lt=Math.min(lt,(ve.start+ve.count)*Re)),be!==null?(De=Math.max(De,0),lt=Math.min(lt,be.count)):Ve!=null&&(De=Math.max(De,0),lt=Math.min(lt,Ve.count));const Pt=lt-De;if(Pt<0||Pt===1/0)return;le.setup(Y,X,ge,q,be);let Et,dt=He;if(be!==null&&(Et=J.get(be),dt=et,dt.setIndex(Et)),Y.isMesh)X.wireframe===!0?(pe.setLineWidth(X.wireframeLinewidth*gn()),dt.setMode(H.LINES)):dt.setMode(H.TRIANGLES);else if(Y.isLine){let tn=X.linewidth;tn===void 0&&(tn=1),pe.setLineWidth(tn*gn()),Y.isLineSegments?dt.setMode(H.LINES):Y.isLineLoop?dt.setMode(H.LINE_LOOP):dt.setMode(H.LINE_STRIP)}else Y.isPoints?dt.setMode(H.POINTS):Y.isSprite&&dt.setMode(H.TRIANGLES);if(Y.isBatchedMesh)if(Qe.get("WEBGL_multi_draw"))dt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const tn=Y._multiDrawStarts,Ae=Y._multiDrawCounts,vn=Y._multiDrawCount,Ze=be?J.get(be).bytesPerElement:1,Mn=D.get(X).currentProgram.getUniforms();for(let Xn=0;Xn<vn;Xn++)Mn.setValue(H,"_gl_DrawID",Xn),dt.render(tn[Xn]/Ze,Ae[Xn])}else if(Y.isInstancedMesh)dt.renderInstances(De,Pt,Y.count);else if(q.isInstancedBufferGeometry){const tn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ae=Math.min(q.instanceCount,tn);dt.renderInstances(De,Pt,Ae)}else dt.render(De,Pt)};function Wn(E,G,q){E.transparent===!0&&E.side===Yt&&E.forceSinglePass===!1?(E.side=Ut,E.needsUpdate=!0,Qr(E,G,q),E.side=Rn,E.needsUpdate=!0,Qr(E,G,q),E.side=Yt):Qr(E,G,q)}this.compile=function(E,G,q=null){q===null&&(q=E),S=xe.get(q),S.init(G),y.push(S),q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(S.pushLight(Y),Y.castShadow&&S.pushShadow(Y))}),E!==q&&E.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(S.pushLight(Y),Y.castShadow&&S.pushShadow(Y))}),S.setupLights();const X=new Set;return E.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const ve=Y.material;if(ve)if(Array.isArray(ve))for(let Me=0;Me<ve.length;Me++){const ge=ve[Me];Wn(ge,q,Y),X.add(ge)}else Wn(ve,q,Y),X.add(ve)}),S=y.pop(),X},this.compileAsync=function(E,G,q=null){const X=this.compile(E,G,q);return new Promise(Y=>{function ve(){if(X.forEach(function(Me){D.get(Me).currentProgram.isReady()&&X.delete(Me)}),X.size===0){Y(E);return}setTimeout(ve,10)}Qe.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Eo=null;function Kd(E){Eo&&Eo(E)}function Mu(){Yi.stop()}function Su(){Yi.start()}const Yi=new dd;Yi.setAnimationLoop(Kd),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(E){Eo=E,fe.setAnimationLoop(E),E===null?Yi.stop():Yi.start()},fe.addEventListener("sessionstart",Mu),fe.addEventListener("sessionend",Su),this.render=function(E,G){if(G!==void 0&&G.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;P!==null&&P.renderStart(E,G);const q=fe.enabled===!0&&fe.isPresenting===!0,X=w!==null&&(F===null||q)&&w.begin(R,F);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(G),G=fe.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,G,F),S=xe.get(E,y.length),S.init(G),S.state.textureUnits=T.getTextureUnits(),y.push(S),ot.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Pe.setFromProjectionMatrix(ot,Zn,G.reversedDepth),Xe=this.localClippingEnabled,at=ye.init(this.clippingPlanes,Xe),M=ee.get(E,b.length),M.init(),b.push(M),fe.enabled===!0&&fe.isPresenting===!0){const Me=R.xr.getDepthSensingMesh();Me!==null&&wo(Me,G,-1/0,R.sortObjects)}wo(E,G,0,R.sortObjects),M.finish(),R.sortObjects===!0&&M.sort(Q,ne),Tt=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,Tt&&ce.addToRenderList(M,E),this.info.render.frame++,at===!0&&ye.beginShadows();const Y=S.state.shadowsArray;if(ue.render(Y,E,G),at===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&w.hasRenderPass())===!1){const Me=M.opaque,ge=M.transmissive;if(S.setupLights(),G.isArrayCamera){const be=G.cameras;if(ge.length>0)for(let Re=0,ze=be.length;Re<ze;Re++){const Ve=be[Re];bu(Me,ge,E,Ve)}Tt&&ce.render(E);for(let Re=0,ze=be.length;Re<ze;Re++){const Ve=be[Re];Tu(M,E,Ve,Ve.viewport)}}else ge.length>0&&bu(Me,ge,E,G),Tt&&ce.render(E),Tu(M,E,G)}F!==null&&U===0&&(T.updateMultisampleRenderTarget(F),T.updateRenderTargetMipmap(F)),X&&w.end(R),E.isScene===!0&&E.onAfterRender(R,E,G),le.resetDefaultState(),k=-1,L=null,y.pop(),y.length>0?(S=y[y.length-1],T.setTextureUnits(S.state.textureUnits),at===!0&&ye.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,b.pop(),b.length>0?M=b[b.length-1]:M=null,P!==null&&P.renderEnd()};function wo(E,G,q,X){if(E.visible===!1)return;if(E.layers.test(G.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(G);else if(E.isLightProbeGrid)S.pushLightProbeGrid(E);else if(E.isLight)S.pushLight(E),E.castShadow&&S.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Pe.intersectsSprite(E)){X&&Ye.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ot);const Me=oe.update(E),ge=E.material;ge.visible&&M.push(E,Me,ge,q,Ye.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Pe.intersectsObject(E))){const Me=oe.update(E),ge=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ye.copy(E.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ye.copy(Me.boundingSphere.center)),Ye.applyMatrix4(E.matrixWorld).applyMatrix4(ot)),Array.isArray(ge)){const be=Me.groups;for(let Re=0,ze=be.length;Re<ze;Re++){const Ve=be[Re],De=ge[Ve.materialIndex];De&&De.visible&&M.push(E,Me,De,q,Ye.z,Ve)}}else ge.visible&&M.push(E,Me,ge,q,Ye.z,null)}}const ve=E.children;for(let Me=0,ge=ve.length;Me<ge;Me++)wo(ve[Me],G,q,X)}function Tu(E,G,q,X){const{opaque:Y,transmissive:ve,transparent:Me}=E;S.setupLightsView(q),at===!0&&ye.setGlobalState(R.clippingPlanes,q),X&&pe.viewport(W.copy(X)),Y.length>0&&qr(Y,G,q),ve.length>0&&qr(ve,G,q),Me.length>0&&qr(Me,G,q),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function bu(E,G,q,X){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[X.id]===void 0){const De=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[X.id]=new _t(1,1,{generateMipmaps:!0,type:De?Gt:Mt,minFilter:as,samples:Math.max(4,gt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}const ve=S.state.transmissionRenderTarget[X.id],Me=X.viewport||W;ve.setSize(Me.z*R.transmissionResolutionScale,Me.w*R.transmissionResolutionScale);const ge=R.getRenderTarget(),be=R.getActiveCubeFace(),Re=R.getActiveMipmapLevel();R.setRenderTarget(ve),R.getClearColor(j),$=R.getClearAlpha(),$<1&&R.setClearColor(16777215,.5),R.clear(),Tt&&ce.render(q);const ze=R.toneMapping;R.toneMapping=On;const Ve=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),S.setupLightsView(X),at===!0&&ye.setGlobalState(R.clippingPlanes,X),qr(E,q,X),T.updateMultisampleRenderTarget(ve),T.updateRenderTargetMipmap(ve),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let lt=0,Pt=G.length;lt<Pt;lt++){const Et=G[lt],{object:dt,geometry:tn,material:Ae,group:vn}=Et;if(Ae.side===Yt&&dt.layers.test(X.layers)){const Ze=Ae.side;Ae.side=Ut,Ae.needsUpdate=!0,Eu(dt,q,X,tn,Ae,vn),Ae.side=Ze,Ae.needsUpdate=!0,De=!0}}De===!0&&(T.updateMultisampleRenderTarget(ve),T.updateRenderTargetMipmap(ve))}R.setRenderTarget(ge,be,Re),R.setClearColor(j,$),Ve!==void 0&&(X.viewport=Ve),R.toneMapping=ze}function qr(E,G,q){const X=G.isScene===!0?G.overrideMaterial:null;for(let Y=0,ve=E.length;Y<ve;Y++){const Me=E[Y],{object:ge,geometry:be,group:Re}=Me;let ze=Me.material;ze.allowOverride===!0&&X!==null&&(ze=X),ge.layers.test(q.layers)&&Eu(ge,G,q,be,ze,Re)}}function Eu(E,G,q,X,Y,ve){E.onBeforeRender(R,G,q,X,Y,ve),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Y.onBeforeRender(R,G,q,X,E,ve),Y.transparent===!0&&Y.side===Yt&&Y.forceSinglePass===!1?(Y.side=Ut,Y.needsUpdate=!0,R.renderBufferDirect(q,G,X,Y,E,ve),Y.side=Rn,Y.needsUpdate=!0,R.renderBufferDirect(q,G,X,Y,E,ve),Y.side=Yt):R.renderBufferDirect(q,G,X,Y,E,ve),E.onAfterRender(R,G,q,X,Y,ve)}function Qr(E,G,q){G.isScene!==!0&&(G=zt);const X=D.get(E),Y=S.state.lights,ve=S.state.shadowsArray,Me=Y.state.version,ge=he.getParameters(E,Y.state,ve,G,q,S.state.lightProbeGridArray),be=he.getProgramCacheKey(ge);let Re=X.programs;X.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?G.environment:null,X.fog=G.fog;const ze=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;X.envMap=V.get(E.envMap||X.environment,ze),X.envMapRotation=X.environment!==null&&E.envMap===null?G.environmentRotation:E.envMapRotation,Re===void 0&&(E.addEventListener("dispose",Dt),Re=new Map,X.programs=Re);let Ve=Re.get(be);if(Ve!==void 0){if(X.currentProgram===Ve&&X.lightsStateVersion===Me)return Cu(E,ge),Ve}else ge.uniforms=he.getUniforms(E),P!==null&&E.isNodeMaterial&&P.build(E,q,ge),E.onBeforeCompile(ge,R),Ve=he.acquireProgram(ge,be),Re.set(be,Ve),X.uniforms=ge.uniforms;const De=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(De.clippingPlanes=ye.uniform),Cu(E,ge),X.needsLights=$d(E),X.lightsStateVersion=Me,X.needsLights&&(De.ambientLightColor.value=Y.state.ambient,De.lightProbe.value=Y.state.probe,De.directionalLights.value=Y.state.directional,De.directionalLightShadows.value=Y.state.directionalShadow,De.spotLights.value=Y.state.spot,De.spotLightShadows.value=Y.state.spotShadow,De.rectAreaLights.value=Y.state.rectArea,De.ltc_1.value=Y.state.rectAreaLTC1,De.ltc_2.value=Y.state.rectAreaLTC2,De.pointLights.value=Y.state.point,De.pointLightShadows.value=Y.state.pointShadow,De.hemisphereLights.value=Y.state.hemi,De.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,De.spotLightMatrix.value=Y.state.spotLightMatrix,De.spotLightMap.value=Y.state.spotLightMap,De.pointShadowMatrix.value=Y.state.pointShadowMatrix),X.lightProbeGrid=S.state.lightProbeGridArray.length>0,X.currentProgram=Ve,X.uniformsList=null,Ve}function wu(E){if(E.uniformsList===null){const G=E.currentProgram.getUniforms();E.uniformsList=qa.seqWithValue(G.seq,E.uniforms)}return E.uniformsList}function Cu(E,G){const q=D.get(E);q.outputColorSpace=G.outputColorSpace,q.batching=G.batching,q.batchingColor=G.batchingColor,q.instancing=G.instancing,q.instancingColor=G.instancingColor,q.instancingMorph=G.instancingMorph,q.skinning=G.skinning,q.morphTargets=G.morphTargets,q.morphNormals=G.morphNormals,q.morphColors=G.morphColors,q.morphTargetsCount=G.morphTargetsCount,q.numClippingPlanes=G.numClippingPlanes,q.numIntersection=G.numClipIntersection,q.vertexAlphas=G.vertexAlphas,q.vertexTangents=G.vertexTangents,q.toneMapping=G.toneMapping}function jd(E,G){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;A.setFromMatrixPosition(G.matrixWorld);for(let q=0,X=E.length;q<X;q++){const Y=E[q];if(Y.texture!==null&&Y.boundingBox.containsPoint(A))return Y}return null}function Zd(E,G,q,X,Y){G.isScene!==!0&&(G=zt),T.resetTextureUnits();const ve=G.fog,Me=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?G.environment:null,ge=F===null?R.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Ke.workingColorSpace,be=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Re=V.get(X.envMap||Me,be),ze=X.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ve=!!q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),De=!!q.morphAttributes.position,lt=!!q.morphAttributes.normal,Pt=!!q.morphAttributes.color;let Et=On;X.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Et=R.toneMapping);const dt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,tn=dt!==void 0?dt.length:0,Ae=D.get(X),vn=S.state.lights;if(at===!0&&(Xe===!0||E!==L)){const vt=E===L&&X.id===k;ye.setState(X,E,vt)}let Ze=!1;X.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==vn.state.version||Ae.outputColorSpace!==ge||Y.isBatchedMesh&&Ae.batching===!1||!Y.isBatchedMesh&&Ae.batching===!0||Y.isBatchedMesh&&Ae.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ae.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ae.instancing===!1||!Y.isInstancedMesh&&Ae.instancing===!0||Y.isSkinnedMesh&&Ae.skinning===!1||!Y.isSkinnedMesh&&Ae.skinning===!0||Y.isInstancedMesh&&Ae.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ae.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ae.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ae.instancingMorph===!1&&Y.morphTexture!==null||Ae.envMap!==Re||X.fog===!0&&Ae.fog!==ve||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ye.numPlanes||Ae.numIntersection!==ye.numIntersection)||Ae.vertexAlphas!==ze||Ae.vertexTangents!==Ve||Ae.morphTargets!==De||Ae.morphNormals!==lt||Ae.morphColors!==Pt||Ae.toneMapping!==Et||Ae.morphTargetsCount!==tn||!!Ae.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Ze=!0):(Ze=!0,Ae.__version=X.version);let Mn=Ae.currentProgram;Ze===!0&&(Mn=Qr(X,G,Y),P&&X.isNodeMaterial&&P.onUpdateProgram(X,Mn,Ae));let Xn=!1,yi=!1,fs=!1;const pt=Mn.getUniforms(),It=Ae.uniforms;if(pe.useProgram(Mn.program)&&(Xn=!0,yi=!0,fs=!0),X.id!==k&&(k=X.id,yi=!0),Ae.needsLights){const vt=jd(S.state.lightProbeGridArray,Y);Ae.lightProbeGrid!==vt&&(Ae.lightProbeGrid=vt,yi=!0)}if(Xn||L!==E){pe.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),pt.setValue(H,"projectionMatrix",E.projectionMatrix),pt.setValue(H,"viewMatrix",E.matrixWorldInverse);const Si=pt.map.cameraPosition;Si!==void 0&&Si.setValue(H,At.setFromMatrixPosition(E.matrixWorld)),gt.logarithmicDepthBuffer&&pt.setValue(H,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&pt.setValue(H,"isOrthographic",E.isOrthographicCamera===!0),L!==E&&(L=E,yi=!0,fs=!0)}if(Ae.needsLights&&(vn.state.directionalShadowMap.length>0&&pt.setValue(H,"directionalShadowMap",vn.state.directionalShadowMap,T),vn.state.spotShadowMap.length>0&&pt.setValue(H,"spotShadowMap",vn.state.spotShadowMap,T),vn.state.pointShadowMap.length>0&&pt.setValue(H,"pointShadowMap",vn.state.pointShadowMap,T)),Y.isSkinnedMesh){pt.setOptional(H,Y,"bindMatrix"),pt.setOptional(H,Y,"bindMatrixInverse");const vt=Y.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),pt.setValue(H,"boneTexture",vt.boneTexture,T))}Y.isBatchedMesh&&(pt.setOptional(H,Y,"batchingTexture"),pt.setValue(H,"batchingTexture",Y._matricesTexture,T),pt.setOptional(H,Y,"batchingIdTexture"),pt.setValue(H,"batchingIdTexture",Y._indirectTexture,T),pt.setOptional(H,Y,"batchingColorTexture"),Y._colorsTexture!==null&&pt.setValue(H,"batchingColorTexture",Y._colorsTexture,T));const Mi=q.morphAttributes;if((Mi.position!==void 0||Mi.normal!==void 0||Mi.color!==void 0)&&Be.update(Y,q,Mn),(yi||Ae.receiveShadow!==Y.receiveShadow)&&(Ae.receiveShadow=Y.receiveShadow,pt.setValue(H,"receiveShadow",Y.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&G.environment!==null&&(It.envMapIntensity.value=G.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=E_()),yi){if(pt.setValue(H,"toneMappingExposure",R.toneMappingExposure),Ae.needsLights&&Jd(It,fs),ve&&X.fog===!0&&K.refreshFogUniforms(It,ve),K.refreshMaterialUniforms(It,X,ae,Ce,S.state.transmissionRenderTarget[E.id]),Ae.needsLights&&Ae.lightProbeGrid){const vt=Ae.lightProbeGrid;It.probesSH.value=vt.texture,It.probesMin.value.copy(vt.boundingBox.min),It.probesMax.value.copy(vt.boundingBox.max),It.probesResolution.value.copy(vt.resolution)}qa.upload(H,wu(Ae),It,T)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(qa.upload(H,wu(Ae),It,T),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&pt.setValue(H,"center",Y.center),pt.setValue(H,"modelViewMatrix",Y.modelViewMatrix),pt.setValue(H,"normalMatrix",Y.normalMatrix),pt.setValue(H,"modelMatrix",Y.matrixWorld),X.uniformsGroups!==void 0){const vt=X.uniformsGroups;for(let Si=0,hs=vt.length;Si<hs;Si++){const Ru=vt[Si];Z.update(Ru,Mn),Z.bind(Ru,Mn)}}return Mn}function Jd(E,G){E.ambientLightColor.needsUpdate=G,E.lightProbe.needsUpdate=G,E.directionalLights.needsUpdate=G,E.directionalLightShadows.needsUpdate=G,E.pointLights.needsUpdate=G,E.pointLightShadows.needsUpdate=G,E.spotLights.needsUpdate=G,E.spotLightShadows.needsUpdate=G,E.rectAreaLights.needsUpdate=G,E.hemisphereLights.needsUpdate=G}function $d(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(E,G,q){const X=D.get(E);X.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),D.get(E.texture).__webglTexture=G,D.get(E.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:q,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,G){const q=D.get(E);q.__webglFramebuffer=G,q.__useDefaultFramebuffer=G===void 0};const ep=H.createFramebuffer();this.setRenderTarget=function(E,G=0,q=0){F=E,B=G,U=q;let X=null,Y=!1,ve=!1;if(E){const ge=D.get(E);if(ge.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(H.FRAMEBUFFER,ge.__webglFramebuffer),W.copy(E.viewport),O.copy(E.scissor),z=E.scissorTest,pe.viewport(W),pe.scissor(O),pe.setScissorTest(z),k=-1;return}else if(ge.__webglFramebuffer===void 0)T.setupRenderTarget(E);else if(ge.__hasExternalTextures)T.rebindTextures(E,D.get(E.texture).__webglTexture,D.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ze=E.depthTexture;if(ge.__boundDepthTexture!==ze){if(ze!==null&&D.has(ze)&&(E.width!==ze.image.width||E.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(E)}}const be=E.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(ve=!0);const Re=D.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Re[G])?X=Re[G][q]:X=Re[G],Y=!0):E.samples>0&&T.useMultisampledRTT(E)===!1?X=D.get(E).__webglMultisampledFramebuffer:Array.isArray(Re)?X=Re[q]:X=Re,W.copy(E.viewport),O.copy(E.scissor),z=E.scissorTest}else W.copy(ie).multiplyScalar(ae).floor(),O.copy(Ee).multiplyScalar(ae).floor(),z=Ie;if(q!==0&&(X=ep),pe.bindFramebuffer(H.FRAMEBUFFER,X)&&pe.drawBuffers(E,X),pe.viewport(W),pe.scissor(O),pe.setScissorTest(z),Y){const ge=D.get(E.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+G,ge.__webglTexture,q)}else if(ve){const ge=G;for(let be=0;be<E.textures.length;be++){const Re=D.get(E.textures[be]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+be,Re.__webglTexture,q,ge)}}else if(E!==null&&q!==0){const ge=D.get(E.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ge.__webglTexture,q)}k=-1},this.readRenderTargetPixels=function(E,G,q,X,Y,ve,Me,ge=0){if(!(E&&E.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=D.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(be=be[Me]),be){pe.bindFramebuffer(H.FRAMEBUFFER,be);try{const Re=E.textures[ge],ze=Re.format,Ve=Re.type;if(E.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+ge),!gt.textureFormatReadable(ze)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(Ve)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=E.width-X&&q>=0&&q<=E.height-Y&&H.readPixels(G,q,X,Y,N.convert(ze),N.convert(Ve),ve)}finally{const Re=F!==null?D.get(F).__webglFramebuffer:null;pe.bindFramebuffer(H.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(E,G,q,X,Y,ve,Me,ge=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=D.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(be=be[Me]),be)if(G>=0&&G<=E.width-X&&q>=0&&q<=E.height-Y){pe.bindFramebuffer(H.FRAMEBUFFER,be);const Re=E.textures[ge],ze=Re.format,Ve=Re.type;if(E.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+ge),!gt.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!gt.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const De=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,De),H.bufferData(H.PIXEL_PACK_BUFFER,ve.byteLength,H.STREAM_READ),H.readPixels(G,q,X,Y,N.convert(ze),N.convert(Ve),0);const lt=F!==null?D.get(F).__webglFramebuffer:null;pe.bindFramebuffer(H.FRAMEBUFFER,lt);const Pt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Up(H,Pt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,De),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,ve),H.deleteBuffer(De),H.deleteSync(Pt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,G=null,q=0){const X=Math.pow(2,-q),Y=Math.floor(E.image.width*X),ve=Math.floor(E.image.height*X),Me=G!==null?G.x:0,ge=G!==null?G.y:0;T.setTexture2D(E,0),H.copyTexSubImage2D(H.TEXTURE_2D,q,0,0,Me,ge,Y,ve),pe.unbindTexture()};const tp=H.createFramebuffer(),np=H.createFramebuffer();this.copyTextureToTexture=function(E,G,q=null,X=null,Y=0,ve=0){let Me,ge,be,Re,ze,Ve,De,lt,Pt;const Et=E.isCompressedTexture?E.mipmaps[ve]:E.image;if(q!==null)Me=q.max.x-q.min.x,ge=q.max.y-q.min.y,be=q.isBox3?q.max.z-q.min.z:1,Re=q.min.x,ze=q.min.y,Ve=q.isBox3?q.min.z:0;else{const It=Math.pow(2,-Y);Me=Math.floor(Et.width*It),ge=Math.floor(Et.height*It),E.isDataArrayTexture?be=Et.depth:E.isData3DTexture?be=Math.floor(Et.depth*It):be=1,Re=0,ze=0,Ve=0}X!==null?(De=X.x,lt=X.y,Pt=X.z):(De=0,lt=0,Pt=0);const dt=N.convert(G.format),tn=N.convert(G.type);let Ae;G.isData3DTexture?(T.setTexture3D(G,0),Ae=H.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(T.setTexture2DArray(G,0),Ae=H.TEXTURE_2D_ARRAY):(T.setTexture2D(G,0),Ae=H.TEXTURE_2D),pe.activeTexture(H.TEXTURE0),pe.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,G.flipY),pe.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),pe.pixelStorei(H.UNPACK_ALIGNMENT,G.unpackAlignment);const vn=pe.getParameter(H.UNPACK_ROW_LENGTH),Ze=pe.getParameter(H.UNPACK_IMAGE_HEIGHT),Mn=pe.getParameter(H.UNPACK_SKIP_PIXELS),Xn=pe.getParameter(H.UNPACK_SKIP_ROWS),yi=pe.getParameter(H.UNPACK_SKIP_IMAGES);pe.pixelStorei(H.UNPACK_ROW_LENGTH,Et.width),pe.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Et.height),pe.pixelStorei(H.UNPACK_SKIP_PIXELS,Re),pe.pixelStorei(H.UNPACK_SKIP_ROWS,ze),pe.pixelStorei(H.UNPACK_SKIP_IMAGES,Ve);const fs=E.isDataArrayTexture||E.isData3DTexture,pt=G.isDataArrayTexture||G.isData3DTexture;if(E.isDepthTexture){const It=D.get(E),Mi=D.get(G),vt=D.get(It.__renderTarget),Si=D.get(Mi.__renderTarget);pe.bindFramebuffer(H.READ_FRAMEBUFFER,vt.__webglFramebuffer),pe.bindFramebuffer(H.DRAW_FRAMEBUFFER,Si.__webglFramebuffer);for(let hs=0;hs<be;hs++)fs&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,D.get(E).__webglTexture,Y,Ve+hs),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,D.get(G).__webglTexture,ve,Pt+hs)),H.blitFramebuffer(Re,ze,Me,ge,De,lt,Me,ge,H.DEPTH_BUFFER_BIT,H.NEAREST);pe.bindFramebuffer(H.READ_FRAMEBUFFER,null),pe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Y!==0||E.isRenderTargetTexture||D.has(E)){const It=D.get(E),Mi=D.get(G);pe.bindFramebuffer(H.READ_FRAMEBUFFER,tp),pe.bindFramebuffer(H.DRAW_FRAMEBUFFER,np);for(let vt=0;vt<be;vt++)fs?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,It.__webglTexture,Y,Ve+vt):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,It.__webglTexture,Y),pt?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Mi.__webglTexture,ve,Pt+vt):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Mi.__webglTexture,ve),Y!==0?H.blitFramebuffer(Re,ze,Me,ge,De,lt,Me,ge,H.COLOR_BUFFER_BIT,H.NEAREST):pt?H.copyTexSubImage3D(Ae,ve,De,lt,Pt+vt,Re,ze,Me,ge):H.copyTexSubImage2D(Ae,ve,De,lt,Re,ze,Me,ge);pe.bindFramebuffer(H.READ_FRAMEBUFFER,null),pe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else pt?E.isDataTexture||E.isData3DTexture?H.texSubImage3D(Ae,ve,De,lt,Pt,Me,ge,be,dt,tn,Et.data):G.isCompressedArrayTexture?H.compressedTexSubImage3D(Ae,ve,De,lt,Pt,Me,ge,be,dt,Et.data):H.texSubImage3D(Ae,ve,De,lt,Pt,Me,ge,be,dt,tn,Et):E.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,ve,De,lt,Me,ge,dt,tn,Et.data):E.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,ve,De,lt,Et.width,Et.height,dt,Et.data):H.texSubImage2D(H.TEXTURE_2D,ve,De,lt,Me,ge,dt,tn,Et);pe.pixelStorei(H.UNPACK_ROW_LENGTH,vn),pe.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ze),pe.pixelStorei(H.UNPACK_SKIP_PIXELS,Mn),pe.pixelStorei(H.UNPACK_SKIP_ROWS,Xn),pe.pixelStorei(H.UNPACK_SKIP_IMAGES,yi),ve===0&&G.generateMipmaps&&H.generateMipmap(Ae),pe.unbindTexture()},this.initRenderTarget=function(E){D.get(E).__webglFramebuffer===void 0&&T.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),pe.unbindTexture()},this.resetState=function(){B=0,U=0,F=null,pe.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}let gr,yd,Ml;function Bn(n,e,t,i,s,r){[{x:0,y:0,rx:i*.42,ry:s*.55},{x:-i*.3,y:s*.03,rx:i*.32,ry:s*.45},{x:i*.32,y:-s*.02,rx:i*.35,ry:s*.48},{x:-i*.12,y:-s*.25,rx:i*.28,ry:s*.35},{x:i*.15,y:-s*.22,rx:i*.25,ry:s*.32},{x:-i*.48,y:s*.08,rx:i*.2,ry:s*.3},{x:i*.48,y:s*.06,rx:i*.22,ry:s*.32}].forEach(c=>{const o=n.createRadialGradient(e+c.x,t+c.y,0,e+c.x,t+c.y,Math.max(c.rx,c.ry));o.addColorStop(0,`rgba(255,255,255,${r*.9})`),o.addColorStop(.4,`rgba(255,255,255,${r*.7})`),o.addColorStop(.7,`rgba(255,255,255,${r*.3})`),o.addColorStop(1,"rgba(255,255,255,0)"),n.save(),n.scale(1,c.ry/c.rx);const u=(t+c.y)*(c.rx/c.ry);n.beginPath(),n.arc(e+c.x,u,c.rx,0,Math.PI*2),n.fillStyle=o,n.fill(),n.restore()})}function Yr(n){const e=yd,t=e.createLinearGradient(0,0,0,1024);t.addColorStop(0,n[0]),t.addColorStop(.35,n[1]),t.addColorStop(.7,n[2]),t.addColorStop(1,n[3]),e.fillStyle=t,e.fillRect(0,0,1024,1024);const i=new Te(n[3]),r=(i.r+i.g+i.b)/3>.7?.35:.65;Bn(e,140,200,150,50,r),Bn(e,450,140,180,55,r*1.05),Bn(e,760,210,140,48,r*.9),Bn(e,950,160,110,38,r*.85),Bn(e,300,300,100,35,r*.7),Bn(e,600,270,120,40,r*.8),Bn(e,50,310,80,28,r*.65),Bn(e,850,330,90,32,r*.6),Bn(e,200,100,70,22,r*.55),Bn(e,550,80,65,20,r*.5),Bn(e,380,350,75,25,r*.5),Ml.needsUpdate=!0}function C_(n,e){const t=new Or;gr=document.createElement("canvas"),gr.width=1024,gr.height=1024,yd=gr.getContext("2d"),Ml=new hm(gr),t.background=Ml,Yr(e||["#A8C4E0","#C8D0E8","#E0B8D0","#D890A0"]),t.fog=new Wl(13682912,.004);const i=new w_({antialias:!0});i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.shadowMap.enabled=!0,i.shadowMap.type=Vh,i.toneMapping=Nl,i.toneMappingExposure=1,n.appendChild(i.domElement);const s=new _l(i),r=new Or;r.background=new Te(12110048);const a=new rr(14,14),c=new st(a,new nr({color:11060448,side:Yt}));c.position.set(0,12,0),c.rotation.x=Math.PI/2,r.add(c);const o=new st(a,new nr({color:14725320,side:Yt}));return o.position.set(0,-5,0),o.rotation.x=Math.PI/2,r.add(o),t.environment=s.fromScene(r,0,.1,100).texture,s.dispose(),window.addEventListener("resize",()=>{i.setSize(window.innerWidth,window.innerHeight)}),{scene:t,renderer:i}}function R_(){const e=window.innerWidth/window.innerHeight,t=.1,i=1e3,s=new cn(45,e,t,i);s.up.set(0,1,0);const r=new I(-7,11,7);window.addEventListener("resize",()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix()});let a="tpp",c=!1,o=0,u=-.5;const f=new I;function h(g){if(a!=="fpp")return;o-=g.movementX*.002,u-=g.movementY*.002;const x=Math.PI/2.15;u=Math.max(-x,Math.min(x,u))}function l(){o=0,u=-.5,f.set(0,0,0)}function p(g,x=.05,d="standing",m=!1){let v,_;if(a==="tpp")v=g.clone().add(r),_=g.clone();else{const y=(m?.41:d==="standing"?1:.5)+(m?.49:d==="standing"?1.1:.6),w=new I(Math.sin(o)*Math.cos(u),Math.sin(u),-Math.cos(o)*Math.cos(u)).normalize(),R=new I(Math.sin(o),0,-Math.cos(o)).normalize();v=new I(g.x,y,g.z).add(R.multiplyScalar(.4)),_=v.clone().add(w)}s.position.lerp(v,x),f.lengthSq()===0?f.copy(_):f.lerp(_,x),s.lookAt(f);const A=s.position.distanceTo(v),M=f.distanceTo(_);A<.002&&M<.002?(s.position.copy(v),f.copy(_),c=!0):c=!1}return{camera:s,update:p,offset:r,resetHeading:l,handleMouseMove:h,get mode(){return a},set mode(g){a=g},get yaw(){return o},set yaw(g){o=g},get pitch(){return u},set pitch(g){u=g},get isStable(){return c},get closestHeading(){const g=new I(Math.sin(o),0,-Math.cos(o)).normalize(),x=[{dx:0,dz:-1},{dx:1,dz:0},{dx:0,dz:1},{dx:-1,dz:0}];let d=-1/0,m=x[0];for(const v of x){const _=g.x*v.dx+g.z*v.dz;_>d&&(d=_,m=v)}return m}}}const Qa=new I(5,10,4);let rn,cc;function D_(n){const e=new bm(16777215,.6);n.add(e);const t=new Mm(12110056,15253712,.4);n.add(t),rn=new af(16775408,1.6),rn.position.copy(Qa),rn.castShadow=!0,rn.shadow.mapSize.width=2048,rn.shadow.mapSize.height=2048,rn.shadow.camera.left=-15,rn.shadow.camera.right=15,rn.shadow.camera.top=15,rn.shadow.camera.bottom=-15,rn.shadow.bias=-2e-4,rn.shadow.normalBias=.02,n.add(rn),n.add(rn.target),cc=new af(12634336,.25),cc.position.set(-5,4,-4),n.add(cc)}function Ff(n){rn&&(rn.target.position.set(n.x,0,n.z),rn.position.set(n.x+Qa.x,Qa.y,n.z+Qa.z))}const vr=new I;function Tn(n,e,t,i,s,r){const a=2*Math.PI*s/4,c=Math.max(r-2*s,0),o=Math.PI/4;vr.copy(e),vr[i]=0,vr.normalize();const u=.5*a/(a+c),f=1-vr.angleTo(n)/o;return Math.sign(vr[t])===1?f*u:c/(a+c)+u+u*(1-f)}class or extends Vi{constructor(e=1,t=1,i=1,s=2,r=.1){const a=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},a===1)return;const c=this.toNonIndexed();this.index=null,this.attributes.position=c.attributes.position,this.attributes.normal=c.attributes.normal,this.attributes.uv=c.attributes.uv;const o=new I,u=new I,f=new I(e,t,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,l=this.attributes.normal.array,p=this.attributes.uv.array,g=h.length/6,x=new I,d=.5/a;for(let m=0,v=0;m<h.length;m+=3,v+=2)switch(o.fromArray(h,m),u.copy(o),u.x-=Math.sign(u.x)*d,u.y-=Math.sign(u.y)*d,u.z-=Math.sign(u.z)*d,u.normalize(),h[m+0]=f.x*Math.sign(o.x)+u.x*r,h[m+1]=f.y*Math.sign(o.y)+u.y*r,h[m+2]=f.z*Math.sign(o.z)+u.z*r,l[m+0]=u.x,l[m+1]=u.y,l[m+2]=u.z,Math.floor(m/g)){case 0:x.set(1,0,0),p[v+0]=Tn(x,u,"z","y",r,i),p[v+1]=1-Tn(x,u,"y","z",r,t);break;case 1:x.set(-1,0,0),p[v+0]=1-Tn(x,u,"z","y",r,i),p[v+1]=1-Tn(x,u,"y","z",r,t);break;case 2:x.set(0,1,0),p[v+0]=1-Tn(x,u,"x","z",r,e),p[v+1]=Tn(x,u,"z","x",r,i);break;case 3:x.set(0,-1,0),p[v+0]=1-Tn(x,u,"x","z",r,e),p[v+1]=1-Tn(x,u,"z","x",r,i);break;case 4:x.set(0,0,1),p[v+0]=1-Tn(x,u,"x","y",r,e),p[v+1]=1-Tn(x,u,"y","x",r,t);break;case 5:x.set(0,0,-1),p[v+0]=Tn(x,u,"x","y",r,e),p[v+1]=1-Tn(x,u,"y","x",r,t);break}}static fromJSON(e){return new or(e.width,e.height,e.depth,e.segments,e.radius)}}const Bf={normal:{color:15790320,metalness:.02,roughness:.35,clearcoat:.6,clearcoatRoughness:.08,envMapIntensity:.3},fragile:{color:15784048,metalness:0,roughness:.5,clearcoat:.3,clearcoatRoughness:.2,envMapIntensity:.2,transparent:!0,opacity:1},goal:{color:4251856,metalness:0,roughness:.4,clearcoat:.5,clearcoatRoughness:.1,emissive:4251856,emissiveIntensity:.3,envMapIntensity:.25},soft_switch:{color:4491502,metalness:0,roughness:.5,clearcoat:.4,clearcoatRoughness:.15,envMapIntensity:.2},heavy_switch:{color:9461968,metalness:0,roughness:.5,clearcoat:.4,clearcoatRoughness:.15,envMapIntensity:.2},teleport_switch:{color:2148536,metalness:0,roughness:.45,clearcoat:.5,clearcoatRoughness:.1,envMapIntensity:.25},bridge:{color:15263976,metalness:0,roughness:.6,clearcoat:.3,clearcoatRoughness:.25,envMapIntensity:.2}};function P_(n){switch(n){case 2:return"goal";case 3:return"fragile";case 4:return"soft_switch";case 5:return"heavy_switch";case 6:return"teleport_switch";default:return"normal"}}function Uf(n,e=null){const t=P_(n),i={...Bf[t]||Bf.normal};e&&((t==="normal"||t==="bridge")&&(i.color=e.tiles),t==="goal"&&(i.color=e.goal,i.emissive=e.goal));const s=new Wr(i),r={};return s.color.getHSL(r),r.l=Math.max(.05,Math.min(.95,r.l+(Math.random()-.5)*.03)),r.h+=(Math.random()-.5)*.01,s.color.setHSL(r.h,r.s,r.l),s}function ql(n,e,t=!0,i=null){const s=e.layout.map(L=>[...L]),r=e.startRow,a=e.startCol,c=e.switches||{},o=e.bridges||{},u={};for(const L in o)u[L]=o[L];const f=1,h=.92,l=.4,p=new or(h,l,h,2,.04),g={soft:new io(.22,.045,8,20),heavy:new Vi(.38,.07,.07),teleport:new io(.18,.035,8,20)},x=new Ws,d={};let m=null;function v(L,W,O,z=!1){const j=Uf(O,i),$=new st(p,j);$.receiveShadow=!0,$.castShadow=!0;const de=-l/2;if($.position.set(W*f,z?de-4:de,L*f),O===4){const ae=new st(g.soft,new Ya({color:6333946,emissive:3900150,emissiveIntensity:1,metalness:.7,roughness:.15}));ae.rotation.x=-Math.PI/2,ae.position.y=l/2+.03,$.add(ae)}else if(O===5){const ae=new Ya({color:10980346,emissive:9133302,emissiveIntensity:1,metalness:.7,roughness:.15}),Q=new st(g.heavy,ae);Q.position.y=l/2+.03,Q.rotation.y=Math.PI/4;const ne=new st(g.heavy,ae);ne.position.y=l/2+.03,ne.rotation.y=-Math.PI/4,$.add(Q,ne)}else if(O===6){const ae=new st(g.teleport,new Ya({color:2282478,emissive:440020,emissiveIntensity:1.2,metalness:.8,roughness:.1}));ae.rotation.x=-Math.PI/2,ae.position.y=l/2+.03,$.add(ae);const Q=ae.clone();Q.scale.setScalar(.65),Q.position.y=l/2+.04,$.add(Q)}if(x.add($),d[`${L},${W}`]=$,O===2&&(m=$),z&&t){let ie=function(){const Ee=performance.now();if(Ee<Q){requestAnimationFrame(ie);return}$.visible=!0;const Ie=Math.min((Ee-Q)/ne,1),Pe=1.70158,Xe=1+(Pe+1)*Math.pow(Ie-1,3)+Pe*Math.pow(Ie-1,2);$.position.y=de-4+Xe*4,Ie<1?requestAnimationFrame(ie):$.position.y=de};var Ce=ie;const ae=(Math.abs(L-r)+Math.abs(W-a))*50,Q=performance.now()+ae,ne=600;$.visible=!1,requestAnimationFrame(ie)}return $}for(let L=0;L<s.length;L++)for(let W=0;W<s[L].length;W++){const O=s[L][W];if(O===0)continue;const z=`${L},${W}`;if(z in o){o[z]?_(L,W,t):s[L][W]=0;continue}v(L,W,O,t)}n.add(x);function _(L,W,O=!1){const z=`${L},${W}`;if(d[z])return;const j=Uf(1,i),$=new st(p,j);$.receiveShadow=!0,$.castShadow=!0;const de=-l/2;if($.position.set(W*f,O?de-3:de,L*f),x.add($),d[z]=$,s[L][W]=1,u[z]=!0,O){let Q=function(){const ne=Math.min((performance.now()-ae)/400,1),ie=1-(1-ne)*(1-ne);$.position.y=de-3+ie*3,ne<1?requestAnimationFrame(Q):$.position.y=de};var Ce=Q;const ae=performance.now();requestAnimationFrame(Q)}}function A(L,W){return L<0||L>=s.length||W<0||W>=s[L].length?0:s[L][W]}function M(L,W){const O=`${L},${W}`,z=d[O];if(!z)return;s[L][W]=0,delete d[O];const j=z.position.y,$=performance.now();function de(){const Ce=Math.min((performance.now()-$)/350,1);z.position.y=j-Ce*Ce*6,z.material.transparent=!0,z.material.opacity=1-Ce*Ce,Ce>=1?x.remove(z):requestAnimationFrame(de)}requestAnimationFrame(de)}function S(L,W){_(L,W,!0)}function b(L,W){const O=`${L},${W}`;u[O]=!1,M(L,W)}function y(L){for(const W of L){const[O,z]=W.split(",").map(Number);u[W]?b(O,z):S(O,z)}}function w(L,W){return c[`${L},${W}`]||null}function R(L){if(m){const W=Math.sin(L*3)*.5+.5;m.material.emissiveIntensity=.35+W*.25}}function C(L,W){for(const O in d){const[z,j]=O.split(",").map(Number);L[z][j]===0&&(x.remove(d[O]),delete d[O])}for(let O=0;O<L.length;O++)for(let z=0;z<L[O].length;z++){const j=`${O},${z}`;L[O][z]!==0&&!d[j]&&(j in o?_(O,z,!1):v(O,z,e.layout[O][z],!1))}for(let O=0;O<L.length;O++)for(let z=0;z<L[O].length;z++)s[O][z]=L[O][z];for(const O in W)u[O]=W[O]}function P(){const L=m?m.position.x:0,W=m?m.position.z:0;Object.entries(d).forEach(([O,z])=>{const $=(Math.abs(z.position.x-L)+Math.abs(z.position.z-W))*40+Math.random()*30,de=performance.now()+$,Ce=z.position.y,ae=(z.position.x-L)*.4,Q=(z.position.z-W)*.4;function ne(){const ie=performance.now();if(ie<de){requestAnimationFrame(ne);return}const Ee=Math.min((ie-de)/800,1),Ie=Ee*Ee;z.position.x+=ae*.008,z.position.z+=Q*.008,z.position.y=Ce+Ie*2,z.material.transparent=!0,z.material.opacity=1-Ie,Ee<1?requestAnimationFrame(ne):x.remove(z)}requestAnimationFrame(ne)})}let B=null,U=null;function F(L,W){k();const O=`${L},${W}`,z=d[O];z&&(B=z,U=z.material.emissive.clone(),z.material.emissive.set(65416),z.material.emissiveIntensity=.6)}function k(){B&&U&&(B.material.emissive.copy(U),B.material.emissiveIntensity=0,B=null,U=null)}return{gridGroup:x,levelLayout:s,tiles:d,goalTile:m,bridgeStates:u,getTileType:A,removeTile:M,addBridgeTile:S,removeBridgeTile:b,toggleBridges:y,getSwitchData:w,restoreLayout:C,updateTime:R,fallAway:P,startRow:r,startCol:a,highlightTile:F,clearHighlight:k}}function Ql(n,e=0,t=0,i=15220832){const s=new or(.95,1.95,.95,2,.06),r=new Wr({color:i,metalness:.02,roughness:.3,clearcoat:.7,clearcoatRoughness:.06,envMapIntensity:.35}),a=new st(s,r);return a.castShadow=!0,a.position.set(e,1,t),n.add(a),{mesh:a,state:{orientation:"standing",isAnimating:!1,isFalling:!1},update(o){const u=1+.005*Math.sin(o*2.5);a.scale.setScalar(u)}}}function Nf(n,e,t,i=16347926){const s=new or(.82,.82,.82,2,.06),r=new Wr({color:i,metalness:0,roughness:.5,clearcoat:.35,clearcoatRoughness:.2,envMapIntensity:.2}),a=new st(s,r);return a.castShadow=!0,a.position.set(e,.41,t),n.add(a),{mesh:a,material:r,update(c,o){const u=o?1+.008*Math.sin(c*4):1;a.scale.setScalar(u)}}}function I_(n){const e=new wn;return n==="lying_x"?e.setFromAxisAngle(new I(0,0,1),Math.PI/2):n==="lying_z"&&e.setFromAxisAngle(new I(1,0,0),Math.PI/2),e}function L_(n){return n==="standing"?1:.5}let xr=null;function Kl(){return xr||(xr=new(window.AudioContext||window.webkitAudioContext)),xr.state==="suspended"&&xr.resume(),xr}function wt(n,e,t="sine",i=.08){const s=Kl(),r=s.createOscillator(),a=s.createGain();r.connect(a),a.connect(s.destination),r.type=t,r.frequency.value=n,a.gain.setValueAtTime(i,s.currentTime),a.gain.exponentialRampToValueAtTime(.001,s.currentTime+e),r.start(),r.stop(s.currentTime+e)}function lc(n,e=.06){const t=Kl(),i=t.sampleRate*n,s=t.createBuffer(1,i,t.sampleRate),r=s.getChannelData(0);for(let u=0;u<i;u++)r[u]=Math.random()*2-1;const a=t.createBufferSource();a.buffer=s;const c=t.createGain(),o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=800,a.connect(o),o.connect(c),c.connect(t.destination),c.gain.setValueAtTime(e,t.currentTime),c.gain.exponentialRampToValueAtTime(.001,t.currentTime+n),a.start()}const An={move(){wt(180,.07,"square",.04),lc(.04,.03)},fall(){const n=Kl(),e=n.createOscillator(),t=n.createGain();e.connect(t),t.connect(n.destination),e.type="sine",e.frequency.setValueAtTime(400,n.currentTime),e.frequency.exponentialRampToValueAtTime(80,n.currentTime+.5),t.gain.setValueAtTime(.1,n.currentTime),t.gain.exponentialRampToValueAtTime(.001,n.currentTime+.5),e.start(),e.stop(n.currentTime+.5),lc(.3,.05)},win(){wt(523,.15,"sine",.08),setTimeout(()=>wt(659,.15,"sine",.08),100),setTimeout(()=>wt(784,.15,"sine",.08),200),setTimeout(()=>wt(1047,.3,"sine",.1),300)},switchActivate(){wt(600,.08,"sine",.06),setTimeout(()=>wt(800,.1,"sine",.06),60)},bridgeAppear(){wt(300,.2,"triangle",.05),setTimeout(()=>wt(450,.15,"triangle",.05),80)},bridgeDisappear(){wt(400,.15,"triangle",.05),setTimeout(()=>wt(250,.2,"triangle",.05),80)},tileBreak(){lc(.2,.08),wt(150,.15,"sawtooth",.04)},undo(){wt(400,.06,"sine",.04),setTimeout(()=>wt(300,.06,"sine",.03),40)},split(){wt(800,.1,"sine",.06),setTimeout(()=>{wt(600,.12,"sine",.05),wt(1e3,.12,"sine",.05)},80)},merge(){wt(500,.1,"sine",.05),wt(700,.1,"sine",.05),setTimeout(()=>wt(600,.2,"sine",.07),80)},levelStart(){wt(330,.1,"sine",.04),setTimeout(()=>wt(440,.15,"sine",.05),100)}};function F_(n,e,t){function i(o,u){if(!n.isWon&&!(o===0&&u===0)){if(t&&t.mode==="fpp"){const f=t.closestHeading,h=f.dx,l=f.dz,p=o,g=u;g===-1?(o=h,u=l):g===1?(o=-h,u=-l):p===-1?(o=l,u=-h):p===1&&(o=-l,u=h)}if(n.isSplit){const f=n.cubes[n.activeCubeIndex];if(f._isAnimating)return;G_(n,f,o,u,e)}else{const f=n.blockApi;if(!f||f.state.isAnimating||f.state.isFalling)return;B_(n),O_(n,o,u,e)}}}window.addEventListener("keydown",o=>{var h,l,p;if(o.key.toLowerCase()==="r"){e.onReset();return}if(o.key==="Escape"){e.onEscape();return}if(o.key.toLowerCase()==="z"){U_(n,e);return}if(o.key.toLowerCase()==="h"){(h=e.onHint)==null||h.call(e);return}if(o.key.toLowerCase()==="c"){(l=e.onCameraToggle)==null||l.call(e);return}if(o.key===" "&&n.isSplit){o.preventDefault(),n.activeCubeIndex=n.activeCubeIndex===0?1:0,(p=e.onCubeSwitch)==null||p.call(e);return}let u=0,f=0;switch(o.key.toLowerCase()){case"w":case"arrowup":f=-1;break;case"s":case"arrowdown":f=1;break;case"a":case"arrowleft":u=-1;break;case"d":case"arrowright":u=1;break;default:return}o.preventDefault(),i(u,f)});let s=0,r=0,a=!1;const c=30;window.addEventListener("touchstart",o=>{o.touches.length===1&&(s=o.touches[0].clientX,r=o.touches[0].clientY,a=!0)},{passive:!0}),window.addEventListener("touchmove",o=>{a&&o.preventDefault()},{passive:!1}),window.addEventListener("touchend",o=>{if(!a)return;a=!1;const u=o.changedTouches[0],f=u.clientX-s,h=u.clientY-r,l=Math.abs(f),p=Math.abs(h);if(Math.max(l,p)<c)return;let g=0,x=0;l>p?g=f>0?1:-1:x=h>0?1:-1,i(g,x)})}function B_(n){const e=n.blockApi;e&&n.moveHistory.push({blockPos:e.mesh.position.clone(),blockQuat:e.mesh.quaternion.clone(),orientation:e.state.orientation,levelLayout:n.gridApi.levelLayout.map(t=>[...t]),bridgeStates:{...n.gridApi.bridgeStates},moves:n.moves})}function U_(n,e){if(n.isSplit||n.moveHistory.length===0)return;const t=n.blockApi;if(!t||t.state.isAnimating||t.state.isFalling)return;const i=n.moveHistory.pop();t.mesh.position.copy(i.blockPos),t.mesh.quaternion.copy(i.blockQuat),t.state.orientation=i.orientation,t.mesh.scale.set(1,1,1),n.gridApi.restoreLayout(i.levelLayout,i.bridgeStates),n.moves=i.moves,e.onMoveCountChange(n.moves),An.undo()}function Md(n){const e=performance.now(),t=180,i={x:n.scale.x,y:n.scale.y,z:n.scale.z};function s(){const r=Math.min((performance.now()-e)/t,1),a=r===1?1:-Math.pow(2,-10*r)*Math.sin((r*10-.75)*(2*Math.PI/3))+1,c=i.x*(1+.04*(1-a)),o=i.y*(1-.06*(1-a)),u=i.z*(1+.04*(1-a));n.scale.set(c,o,u),r<1?requestAnimationFrame(s):n.scale.set(i.x,i.y,i.z)}requestAnimationFrame(s)}function N_(n){const e=n.mesh.position,t=e.x,i=e.z;return n.state.orientation==="standing"?[{row:Math.round(i),col:Math.round(t)}]:n.state.orientation==="lying_x"?[{row:Math.round(i),col:Math.round(t-.5)},{row:Math.round(i),col:Math.round(t+.5)}]:[{row:Math.round(i-.5),col:Math.round(t)},{row:Math.round(i+.5),col:Math.round(t)}]}function O_(n,e,t,i){const s=n.blockApi;s.state.isAnimating=!0;const r=s.mesh,a=r.position.clone(),c=r.quaternion.clone(),o=a.clone();s.state.orientation==="standing"?(o.x+=e*1.5,o.z+=t*1.5,o.y-=.5,s.state.orientation=e!==0?"lying_x":"lying_z"):s.state.orientation==="lying_x"?e!==0?(o.x+=e*1.5,o.y+=.5,s.state.orientation="standing"):o.z+=t*1:s.state.orientation==="lying_z"&&(t!==0?(o.z+=t*1.5,o.y+=.5,s.state.orientation="standing"):o.x+=e*1);const u=new I(t,0,-e).normalize(),f=new wn().setFromAxisAngle(u,Math.PI/2),h=c.clone().premultiply(f),l=200,p=performance.now();function g(){var d;const x=Math.min((performance.now()-p)/l,1);r.quaternion.slerpQuaternions(c,h,x),r.position.lerpVectors(a,o,x),r.position.y+=Math.sin(x*Math.PI)*.3,x>=1?(r.position.copy(o),r.quaternion.copy(h),s.state.isAnimating=!1,Md(r),(d=i.onLanding)==null||d.call(i,r.position.clone()),n.moves++,i.onMoveCountChange(n.moves),An.move(),z_(n,s,i)):requestAnimationFrame(g)}requestAnimationFrame(g)}function z_(n,e,t){var c;const i=n.gridApi,s=N_(e);if(!s.every(o=>i.getTileType(o.row,o.col)!==0)){An.fall(),t.onFall();const o=s.filter(f=>i.getTileType(f.row,f.col)!==0),u=s.filter(f=>i.getTileType(f.row,f.col)===0);Of(e,()=>{setTimeout(()=>{n.blockApi===e&&t.onReset()},400)},!1,o,u);return}for(const o of s){const u=i.getSwitchData(o.row,o.col);u&&u.type==="soft"&&Sl(n,u)}if(e.state.orientation==="standing"){const o=s[0],u=i.getTileType(o.row,o.col),f=i.getSwitchData(o.row,o.col);if(u===3){let p=function(){const g=Math.min((performance.now()-l)/200,1);if(h.position.y-=g*.015,g<1){requestAnimationFrame(p);return}n.blockApi===e&&(An.fall(),t.onFall(),Of(e,()=>{setTimeout(()=>{n.blockApi===e&&t.onReset()},400)},!0))};var a=p;An.tileBreak(),(c=t.onFragileBreak)==null||c.call(t,e.mesh.position.clone()),i.removeTile(o.row,o.col),e.state.isAnimating=!0;const h=e.mesh,l=performance.now();requestAnimationFrame(p);return}if(f&&f.type==="heavy"&&Sl(n,f),f&&f.type==="teleport"){H_(n,f,t);return}if(u===2){An.win(),V_(e,()=>t.onWin(),t);return}}}function Sl(n,e,t){e._activated&&e.effect==="permanent"||(e._activated=!0,An.switchActivate(),e.targets&&(n.gridApi.toggleBridges(e.targets),setTimeout(()=>An.bridgeAppear(),100)))}function H_(n,e,t){if(!e.teleportTo||e.teleportTo.length<2)return;const i=n.blockApi;i.state.isAnimating=!0,An.split();const s=i.mesh,r=performance.now(),a=400;function c(){const o=Math.min((performance.now()-r)/a,1),u=1-o*.8;s.scale.set(u,u,u),s.position.y+=.003,o>=1?(s.visible=!1,s.scale.set(1,1,1),t.onSplit(e.teleportTo)):requestAnimationFrame(c)}requestAnimationFrame(c)}function G_(n,e,t,i,s){e._isAnimating=!0;const r=e.mesh,a=r.position.clone(),c=a.clone();c.x+=t,c.z+=i;const o=Math.round(c.z),u=Math.round(c.x);if(n.gridApi.getTileType(o,u)===0){e._isAnimating=!1;return}const f=n.activeCubeIndex===0?1:0,h=n.cubes[f],l=Math.round(h.mesh.position.z),p=Math.round(h.mesh.position.x);if(o===l&&u===p){e._isAnimating=!1;return}const g=150,x=performance.now();function d(){const m=Math.min((performance.now()-x)/g,1);if(r.position.lerpVectors(a,c,m),r.position.y=.425+Math.sin(m*Math.PI)*.1,m>=1){r.position.copy(c),r.position.y=.425,e._isAnimating=!1,Md(r),n.moves++,s.onMoveCountChange(n.moves),An.move();const v=n.gridApi.getSwitchData(o,u);v&&v.type==="soft"&&Sl(n,v),k_(n,s)}else requestAnimationFrame(d)}requestAnimationFrame(d)}function k_(n,e){const t=n.cubes[0],i=n.cubes[1],s=Math.round(t.mesh.position.z),r=Math.round(t.mesh.position.x),a=Math.round(i.mesh.position.z),c=Math.round(i.mesh.position.x),o=Math.abs(s-a),u=Math.abs(r-c);(o===1&&u===0||o===0&&u===1)&&(An.merge(),e.onMerge(s,r,a,c))}function Of(n,e,t=!1,i=[],s=[]){n.state.isFalling=!0;const r=n.mesh,a=r.position.clone(),c=r.quaternion.clone(),o=performance.now(),u=n.state.orientation;if(!t&&u!=="standing"&&i.length>0&&s.length>0){let y=function(){const w=performance.now()-o,R=Math.min(w/S,1);if(w<A){const C=w/A,B=C*C*b;r.position.copy(a),r.quaternion.copy(c),r.position.sub(new I(d,v,m));const U=new wn().setFromAxisAngle(_,B);r.position.applyQuaternion(U),r.position.add(new I(d,v,m)),r.quaternion.premultiply(U)}else{const C=(w-A)/M,P=C*C;r.position.copy(a),r.quaternion.copy(c),r.position.sub(new I(d,v,m));const B=new wn().setFromAxisAngle(_,b+C*Math.PI);if(r.position.applyQuaternion(B),r.position.add(new I(d,v,m)),r.quaternion.premultiply(B),r.position.y-=P*14,C>.3){const U=1-(C-.3)/.7*.7;r.scale.set(U,U,U)}C>.4&&(r.material.transparent=!0,r.material.opacity=1-(C-.4)/.6)}R>=1?(r.scale.set(1,1,1),r.material.transparent=!1,r.material.opacity=1,r.quaternion.identity(),n.state.isFalling=!1,e()):requestAnimationFrame(y)};var h=y;const l=i[0],p=s[0],g=p.col-l.col,x=p.row-l.row,d=l.col+g*.5,m=l.row+x*.5,v=0,_=new I(x,0,-g).normalize(),A=500,M=600,S=A+M,b=Math.PI/2;requestAnimationFrame(y)}else{let g=function(){const d=Math.min((performance.now()-o)/l,1),m=d*d;if(r.position.y=a.y-m*18,!t&&d>.15){const v=(d-.15)/.85,_=v*v*Math.PI*2,A=new wn().setFromAxisAngle(p,_);r.quaternion.copy(c).premultiply(A)}if(d>.5){const v=1-(d-.5)/.5*.7;r.scale.set(v,v,v)}d>.7&&(r.material.transparent=!0,r.material.opacity=1-(d-.7)/.3),d>=1?(r.scale.set(1,1,1),r.material.transparent=!1,r.material.opacity=1,r.quaternion.identity(),n.state.isFalling=!1,e()):requestAnimationFrame(g)};var h=g;const l=t?800:1e3,p=new I(Math.random()-.5,.2,Math.random()-.5).normalize();requestAnimationFrame(g)}}function V_(n,e,t){var u;n.state.isAnimating=!0,(u=t==null?void 0:t.onWinEffect)==null||u.call(t,n.mesh.position.clone());const i=n.mesh,s=i.position.clone(),r=performance.now(),a=1e3,c=i.material.emissive?i.material.emissive.clone():new Te(0);function o(){var l;const f=performance.now()-r,h=Math.min(f/a,1);if(f<300){const p=f/300,g=1-Math.pow(1-p,3);i.position.y=s.y+g*1.8;const x=1+g*.15,d=1-g*.05;i.scale.set(d,x,d),i.rotation.y=p*Math.PI*.5}else if(f<500){const p=(f-300)/200,g=Math.sin(p*Math.PI)*.1;i.position.y=s.y+1.8+g,i.scale.set(1,1,1),i.rotation.y=Math.PI*.5+p*Math.PI*.1,i.material.emissive&&(i.material.emissive.setHex(15220832),i.material.emissiveIntensity=.3*Math.sin(p*Math.PI))}else{const p=(f-500)/500,g=p*p*p;i.position.y=s.y+1.8-g*5,i.rotation.y=Math.PI*.6+p*Math.PI*.4;const x=1-g*.4;i.scale.set(x,1,x),i.material.emissive&&(i.material.emissiveIntensity=.3*(1-p))}h>=1?(i.scale.set(1,1,1),(l=i.material.emissive)==null||l.copy(c),i.material.emissiveIntensity=0,e()):requestAnimationFrame(o)}requestAnimationFrame(o)}const Hn=[{id:1,name:"First Steps",par:7,startRow:0,startCol:0,layout:[[1,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,2]],switches:{},bridges:{}},{id:2,name:"Over the Edge",par:7,startRow:0,startCol:0,layout:[[1,1,1,0,0,0],[1,1,1,0,0,0],[1,1,1,1,1,1],[0,0,1,1,1,1],[0,0,0,1,1,2]],switches:{},bridges:{}},{id:3,name:"Fragile Ground",par:6,startRow:0,startCol:2,layout:[[1,1,1,1,1,1],[1,1,1,1,1,1],[0,0,3,3,0,0],[0,0,1,1,0,0],[0,0,1,2,0,0]],switches:{},bridges:{}},{id:4,name:"Open Sesame",par:6,startRow:0,startCol:0,layout:[[1,1,4,1,1],[1,1,1,1,1],[0,0,0,0,0],[0,0,1,1,0],[0,0,1,1,0],[0,0,1,2,0]],switches:{"0,2":{type:"soft",effect:"toggle",targets:["2,1","2,2","2,3"]}},bridges:{"2,1":!1,"2,2":!1,"2,3":!1}},{id:5,name:"Heavy Duty",par:13,startRow:0,startCol:0,layout:[[1,1,1,1,1,0,0,0],[1,1,1,1,1,0,0,0],[1,1,1,5,1,0,0,0],[1,1,1,1,1,0,0,0],[0,0,0,0,0,0,0,0],[0,0,1,1,1,1,1,0],[0,0,1,1,1,2,1,0],[0,0,1,1,1,1,1,0]],switches:{"2,3":{type:"heavy",effect:"toggle",targets:["4,3","4,4"]}},bridges:{"4,3":!1,"4,4":!1}},{id:6,name:"Split Decision",par:9,startRow:0,startCol:0,layout:[[1,1,1,6,1,1],[1,1,1,1,1,1],[0,0,0,0,0,0],[1,4,1,1,1,1],[0,0,0,0,0,0],[1,1,1,1,1,1],[1,1,1,2,1,1],[1,1,1,1,1,1]],switches:{"0,3":{type:"teleport",teleportTo:[[3,0],[3,4]]},"3,1":{type:"soft",effect:"toggle",targets:["4,2","4,3","4,4"]}},bridges:{"4,2":!1,"4,3":!1,"4,4":!1}},{id:7,name:"Twin Bridges",par:15,startRow:0,startCol:2,layout:[[0,1,1,1,1,0],[0,1,4,1,1,0],[0,1,1,1,1,0],[0,0,0,0,0,0],[1,1,1,1,1,1],[1,1,1,5,1,1],[1,1,1,1,1,1],[0,0,0,0,0,0],[0,0,1,1,1,1],[0,0,1,2,1,1],[0,0,1,1,1,1]],switches:{"1,2":{type:"soft",effect:"toggle",targets:["3,2","3,3"]},"5,3":{type:"heavy",effect:"toggle",targets:["7,3","7,4"]}},bridges:{"3,2":!1,"3,3":!1,"7,3":!1,"7,4":!1}},{id:8,name:"The Gauntlet",par:18,startRow:0,startCol:1,layout:[[0,1,1,1,1,0,0],[0,1,1,3,1,0,0],[0,1,1,1,4,0,0],[0,1,1,1,1,0,0],[0,0,0,0,0,0,0],[0,0,1,1,1,3,0],[0,0,1,5,1,3,0],[0,0,1,1,1,1,0],[0,0,0,0,0,0,0],[0,0,0,1,1,1,1],[0,0,0,1,1,2,1],[0,0,0,1,1,1,1]],switches:{"2,4":{type:"soft",effect:"toggle",targets:["4,2","4,3"]},"6,3":{type:"heavy",effect:"toggle",targets:["8,4","8,5"]}},bridges:{"4,2":!1,"4,3":!1,"8,4":!1,"8,5":!1}}],$t=[{sky:["#A8C4E0","#C8D0E8","#E0B8D0","#D890A0"],fog:13682912,tiles:15790320,goal:4251856,block:15220832,sparkle:"#ffe8b0"},{sky:["#182840","#2B5478","#4890B8","#80C8D8"],fog:2771048,tiles:13689072,goal:2156768,block:15755336,sparkle:"#80C0F0"},{sky:["#B87030","#D09848","#E0B868","#F0D890"],fog:13150304,tiles:15259840,goal:4774008,block:13658152,sparkle:"#FFD870"},{sky:["#183828","#285840","#48A070","#88D098"],fog:3694664,tiles:13691088,goal:15257672,block:13121648,sparkle:"#90F0A0"},{sky:["#181030","#382068","#6848A0","#A878C0"],fog:3153992,tiles:14209256,goal:15769648,block:3696864,sparkle:"#C0A0F0"},{sky:["#E89070","#D87858","#C86848","#B85840"],fog:13142120,tiles:15788256,goal:5826664,block:15222912,sparkle:"#FFB898"},{sky:["#D0E8F8","#A8D0E8","#78A8C8","#5888A8"],fog:10010840,tiles:15266040,goal:15247400,block:15226920,sparkle:"#C8E0F8"},{sky:["#180810","#481820","#882838","#A04048"],fog:2625560,tiles:11577504,goal:15781960,block:15788256,sparkle:"#F08080"}],Di=150,W_=-9.8;function X_(n){const e=new Array(Di);for(let x=0;x<Di;x++)e[x]={alive:!1,age:0,lifetime:0,x:0,y:0,z:0,vx:0,vy:0,vz:0,r:1,g:1,b:1,size:.06,opacity:1};const t=new Float32Array(Di*3),i=new Float32Array(Di*4),s=new Float32Array(Di),r=new Lt;r.setAttribute("position",new $e(t,3)),r.setAttribute("color",new $e(i,4)),r.setAttribute("size",new $e(s,1));const a=new ad({size:.06,sizeAttenuation:!0,transparent:!0,depthWrite:!1,vertexColors:!0,opacity:1}),c=new od(r,a);c.frustumCulled=!1,n.add(c);function o(){for(let x=0;x<Di;x++)if(!e[x].alive)return e[x];return null}function u(x,d,m,v,_,A,M,S,b,y,w,R){x.alive=!0,x.age=0,x.lifetime=R,x.x=d,x.y=m,x.z=v,x.vx=_,x.vy=A,x.vz=M,x.r=S,x.g=b,x.b=y,x.size=w,x.opacity=1}function f(x,d){return x+Math.random()*(d-x)}function h(x){for(let v=0;v<20;v++){const _=o();if(!_)break;const A=v/20*Math.PI*2+f(-.15,.15),M=f(1.2,2.5),S=f(.85,1);u(_,x.x,x.y,x.z,Math.cos(A)*M,f(.3,.8),Math.sin(A)*M,S,S*.95,S*.85,.06,.4)}}function l(x,d){const _=new Te(d);for(let A=0;A<25;A++){const M=o();if(!M)break;const S=f(0,Math.PI*2),b=f(1.5,4),y=f(-1,1.5);u(M,x.x+f(-.2,.2),x.y+f(-.1,.3),x.z+f(-.2,.2),Math.cos(S)*b,y,Math.sin(S)*b,_.r,_.g,_.b,.08,.6)}}function p(x){const v=[{r:1,g:.84,b:0},{r:1,g:1,b:1},{r:1,g:.41,b:.71},{r:0,g:.9,b:.9}];for(let _=0;_<50;_++){const A=o();if(!A)break;const M=f(0,Math.PI*2),S=f(.5,3),b=f(4,8),y=v[_%v.length];u(A,x.x+f(-.15,.15),x.y,x.z+f(-.15,.15),Math.cos(M)*S,b,Math.sin(M)*S,y.r,y.g,y.b,.1,1.2)}}function g(x){const d=r.getAttribute("position"),m=r.getAttribute("color"),v=r.getAttribute("size");for(let _=0;_<Di;_++){const A=e[_];if(!A.alive){d.array[_*3]=0,d.array[_*3+1]=-100,d.array[_*3+2]=0,m.array[_*4+3]=0,v.array[_]=0;continue}A.vy+=W_*x,A.x+=A.vx*x,A.y+=A.vy*x,A.z+=A.vz*x,A.age+=x;const M=Math.min(A.age/A.lifetime,1);A.opacity=1-M,A.age>=A.lifetime&&(A.alive=!1,A.opacity=0),d.array[_*3]=A.x,d.array[_*3+1]=A.y,d.array[_*3+2]=A.z,m.array[_*4]=A.r,m.array[_*4+1]=A.g,m.array[_*4+2]=A.b,m.array[_*4+3]=A.opacity,v.array[_]=A.size*(1-M*.3)}d.needsUpdate=!0,m.needsUpdate=!0,v.needsUpdate=!0}return{emitDust:h,emitShatter:l,emitCelebration:p,update:g,get isActive(){for(let x=0;x<Di;x++)if(e[x].alive)return!0;return!1}}}function Y_(){let n=0,e=0,t=0,i=!1,s=0;const r=new I;function a(u=.15,f=250){n=u,e=f,t=0,i=!0,s=performance.now()}function c(){if(!i)return;const u=performance.now(),f=u-s;if(s=u,t+=f,t>=e){i=!1,r.set(0,0,0);return}const h=t/e,l=Math.exp(-4*h),p=t*.013;r.set(Math.sin(p*17)*Math.cos(p*31)*n*l,Math.sin(p*23)*Math.cos(p*37)*n*l,Math.sin(p*29)*Math.cos(p*41)*n*l*.5)}function o(){return r}return{trigger:a,update:c,getOffset:o,get isShaking(){return i}}}const q_=[{dx:1,dz:0},{dx:-1,dz:0},{dx:0,dz:1},{dx:0,dz:-1}];function zf(n,e,t,i,s){for(const M in i)if(i[M].type==="teleport")return null;const r=Object.keys(s).sort(),a={};for(let M=0;M<r.length;M++)a[r[M]]=M;let c=0;for(let M=0;M<r.length;M++)s[r[M]]&&(c|=1<<M);function o(M){return Math.round(M*10)}function u(M,S,b,y){return M+"|"+S+"|"+b+"|"+y}function f(M,S,b){if(M<0||M>=n.length||S<0||S>=n[M].length)return 0;const y=M+","+S;return y in a?b&1<<a[y]?1:0:n[M][S]}function h(M,S,b){return b==="standing"?[{row:Math.round(S),col:Math.round(M)}]:b==="lying_x"?[{row:Math.round(S),col:Math.round(M-.5)},{row:Math.round(S),col:Math.round(M+.5)}]:[{row:Math.round(S-.5),col:Math.round(M)},{row:Math.round(S+.5),col:Math.round(M)}]}function l(M,S,b,y,w,R){let C=M,P=S,B=b;b==="standing"?(C+=y*1.5,P+=w*1.5,B=y!==0?"lying_x":"lying_z"):b==="lying_x"?y!==0?(C+=y*1.5,B="standing"):P+=w*1:w!==0?(P+=w*1.5,B="standing"):C+=y*1;const U=h(C,P,B);for(const L of U)if(f(L.row,L.col,R)===0)return null;if(B==="standing"){const L=U[0];if(f(L.row,L.col,R)===3)return null}let F=R;for(const L of U){const W=i[L.row+","+L.col];W&&W.type==="soft"&&W.targets&&(F=p(F,W.targets))}if(B==="standing"){const L=U[0],W=i[L.row+","+L.col];W&&W.type==="heavy"&&W.targets&&(F=p(F,W.targets))}let k=!1;if(B==="standing"){const L=U[0];f(L.row,L.col,F)===2&&(k=!0)}return{x:C,z:P,orient:B,bridgeMask:F,won:k}}function p(M,S){for(const b of S){const y=a[b];y!==void 0&&(M^=1<<y)}return M}const g=t,x=e,d="standing",m=u(o(g),o(x),d,c),v=new Set;v.add(m);const _=[{x:g,z:x,orient:d,bMask:c,parentIdx:-1,move:null}];let A=0;for(;A<_.length;){const M=_[A],S=A;A++;for(const b of q_){const y=l(M.x,M.z,M.orient,b.dx,b.dz,M.bMask);if(!y)continue;const w=u(o(y.x),o(y.z),y.orient,y.bridgeMask);if(y.won)return Q_(_,S,b);v.has(w)||(v.add(w),_.push({x:y.x,z:y.z,orient:y.orient,bMask:y.bridgeMask,parentIdx:S,move:b}))}}return null}function Q_(n,e,t){const i=[t];let s=e;for(;s>0;)i.push(n[s].move),s=n[s].parentIdx;return i.reverse(),i}const Rs=14,Ds=10,Hf=.92,jl=.4,_r=-jl/2,K_={normal:1,goal:2,fragile:3,soft_switch:4,heavy_switch:5,bridge:1},Gf={normal:15790320,fragile:15784048,goal:4251856,soft_switch:4491502,heavy_switch:9461968,bridge:12112096},j_=new I(5,14,12),Z_=new I(5,0,5),Ar=new or(Hf,jl,Hf,2,.04),J_=new rr(.95,.95),$_=new Vi(.3,.6,.3);function yr(n){const t={color:Gf[n]||Gf.normal,metalness:.02,roughness:.35,clearcoat:.6,clearcoatRoughness:.08,envMapIntensity:.3};return n==="goal"&&(t.emissive=4251856,t.emissiveIntensity=.3),n==="fragile"&&(t.clearcoat=.3,t.clearcoatRoughness=.2),n==="soft_switch"&&(t.emissive=3900150,t.emissiveIntensity=.4),n==="heavy_switch"&&(t.emissive=9133302,t.emissiveIntensity=.4),n==="bridge"&&(t.transparent=!0,t.opacity=.5),new Wr(t)}function eA(){return new nr({color:16777215,transparent:!0,opacity:.15,side:Yt})}function tA(n,e,t){let i=!1,s="normal",r=[],a=null,c=null;const o={},u=new Set;let f=null,h=null,l=null,p=!1;const g=new Cm,x=new Se,d=new Qn(new I(0,1,0),0),m=new I;function v(){r=[];for(let O=0;O<Rs;O++)r.push(new Array(Ds).fill(0))}function _(){const O=eA();for(let z=0;z<Rs;z++)for(let j=0;j<Ds;j++){const $=new st(J_,O);$.rotation.x=-Math.PI/2,$.position.set(j,.01,z),f.add($)}}function A(O,z){if(O<0||O>=Rs||z<0||z>=Ds)return;const j=`${O},${z}`;if(s==="eraser"){S(O,z);return}if(s==="start"){M(O,z);return}if(s==="goal"&&c){if(c.row===O&&c.col===z)return;const ae=`${c.row},${c.col}`;b(ae),r[c.row][c.col]=1;const Q=yr("normal"),ne=new st(Ar,Q);ne.position.set(c.col,_r,c.row),ne.receiveShadow=!0,ne.castShadow=!0,f.add(ne),o[ae]=ne,c=null}o[j]&&(b(j),u.delete(j));const $=K_[s]||1;r[O][z]=$,s==="goal"&&(c={row:O,col:z}),s==="bridge"&&u.add(j);const de=yr(s),Ce=new st(Ar,de);Ce.position.set(z,_r,O),Ce.receiveShadow=!0,Ce.castShadow=!0,f.add(Ce),o[j]=Ce}function M(O,z){if(O<0||O>=Rs||z<0||z>=Ds)return;const j=`${O},${z}`;if(a){const Q=`${a.row},${a.col}`;if(b(Q),r[a.row][a.col]===1){const ne=yr("normal"),ie=new st(Ar,ne);ie.position.set(a.col,_r,a.row),ie.receiveShadow=!0,ie.castShadow=!0,f.add(ie),o[Q]=ie}}r[O][z]===0&&(r[O][z]=1),o[j]&&b(j);const $=yr("normal"),de=new st(Ar,$);de.position.set(z,_r,O),de.receiveShadow=!0,de.castShadow=!0;const Ce=new Wr({color:14692400,metalness:.1,roughness:.3,clearcoat:.5}),ae=new st($_,Ce);ae.position.y=jl/2+.3,ae.castShadow=!0,de.add(ae),f.add(de),o[j]=de,a={row:O,col:z}}function S(O,z){const j=`${O},${z}`;b(j),r[O][z]=0,u.delete(j),a&&a.row===O&&a.col===z&&(a=null),c&&c.row===O&&c.col===z&&(c=null)}function b(O){const z=o[O];z&&(f.remove(z),delete o[O])}function y(O){const z=t.domElement.getBoundingClientRect();if(x.x=(O.clientX-z.left)/z.width*2-1,x.y=-((O.clientY-z.top)/z.height)*2+1,g.setFromCamera(x,e),g.ray.intersectPlane(d,m),!m)return null;const j=Math.round(m.x),$=Math.round(m.z);return $<0||$>=Rs||j<0||j>=Ds?null:{row:$,col:j}}function w(O){if(O.button!==0)return;p=!0;const z=y(O);z&&A(z.row,z.col)}function R(O){if(!p)return;const z=y(O);z&&A(z.row,z.col)}function C(){p=!1}function P(O=!1){if(i)return;if(i=!0,h=e.position.clone(),l=e.quaternion.clone(),e.clearViewOffset(),e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),e.position.copy(j_),e.lookAt(Z_),f=new Ws,n.add(f),_(),!O||r.length===0){v(),a=null,c=null,u.clear();for(const j in o)delete o[j]}else{for(const j in o)delete o[j];for(let j=0;j<r.length;j++)for(let $=0;$<r[j].length;$++){const de=r[j][$];if(de===0)continue;const Ce=`${j},${$}`;let ae="normal";if(de===2?ae="goal":de===3?ae="fragile":de===4?ae="soft_switch":de===5&&(ae="heavy_switch"),u.has(Ce)&&(ae="bridge"),a&&a.row===j&&a.col===$)M(j,$);else{const Q=yr(ae),ne=new st(Ar,Q);ne.position.set($,_r,j),ne.receiveShadow=!0,ne.castShadow=!0,f.add(ne),o[Ce]=ne}}}const z=t.domElement;z.addEventListener("mousedown",w),z.addEventListener("mousemove",R),window.addEventListener("mouseup",C)}function B(){if(!i)return;i=!1,p=!1,f&&(n.remove(f),f=null);for(const z in o)delete o[z];const O=t.domElement;O.removeEventListener("mousedown",w),O.removeEventListener("mousemove",R),window.removeEventListener("mouseup",C),h&&e.position.copy(h),l&&e.quaternion.copy(l)}function U(O){if(i&&c){const z=`${c.row},${c.col}`,j=o[z];if(j&&j.material.emissiveIntensity!==void 0){const $=Math.sin(O*3)*.5+.5;j.material.emissiveIntensity=.35+$*.25}}}function F(){if(!a||!c)return null;const O=[...u],z={};for(const de of O)z[de]=!1;const j={};for(let de=0;de<Rs;de++)for(let Ce=0;Ce<Ds;Ce++){const ae=r[de][Ce];if(ae===4||ae===5){const Q=`${de},${Ce}`;j[Q]={type:ae===4?"soft":"heavy",effect:"toggle",targets:O}}}const $=r.map(de=>[...de]);for(const de of O){const[Ce,ae]=de.split(",").map(Number);$[Ce][ae]=0}return{id:"C",name:"Custom Level",par:99,layout:$,startRow:a.row,startCol:a.col,switches:j,bridges:z}}function k(O){s=O}function L(){for(const O in o)b(O);v(),a=null,c=null,u.clear()}function W(){return i}return{enter:P,exit:B,update:U,getLevel:F,isActive:W,setTool:k,clear:L,hasStart(){return!!a},hasGoal(){return!!c}}}const nA=new Xr(-1,1,1,-1,0,1);class iA extends Lt{constructor(){super(),this.setAttribute("position",new mn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new mn([0,2,0,0,2,0],2))}}const sA=new iA;class sr{constructor(e){this._mesh=new st(sA,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,nA)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const rA=()=>parseInt(_i.replace(/\D+/g,"")),aA=rA();class oA extends St{constructor(){super({uniforms:{time:{value:0},pixelRatio:{value:1}},vertexShader:`
        uniform float pixelRatio;
        uniform float time;
        attribute float size;  
        attribute float speed;  
        attribute float opacity;
        attribute vec3 noise;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vOpacity;

        void main() {
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          modelPosition.y += sin(time * speed + modelPosition.x * noise.x * 100.0) * 0.2;
          modelPosition.z += cos(time * speed + modelPosition.x * noise.y * 100.0) * 0.2;
          modelPosition.x += cos(time * speed + modelPosition.x * noise.z * 100.0) * 0.2;
          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectionPostion = projectionMatrix * viewPosition;
          gl_Position = projectionPostion;
          gl_PointSize = size * 25. * pixelRatio;
          gl_PointSize *= (1.0 / - viewPosition.z);
          vColor = color;
          vOpacity = opacity;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        varying float vOpacity;
        void main() {
          float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
          float strength = 0.05 / distanceToCenter - 0.1;
          gl_FragColor = vec4(vColor, strength * vOpacity);
          #include <tonemapping_fragment>
          #include <${aA>=154?"colorspace_fragment":"encodings_fragment"}>
        }
      `})}get time(){return this.uniforms.time.value}set time(e){this.uniforms.time.value=e}get pixelRatio(){return this.uniforms.pixelRatio.value}set pixelRatio(e){this.uniforms.pixelRatio.value=e}}const Sd=n=>n&&n.constructor===Float32Array,cA=n=>[n.r,n.g,n.b],Td=n=>n instanceof Se||n instanceof I||n instanceof nt,bd=n=>Array.isArray(n)?n:Td(n)?n.toArray():[n,n,n];function Mr(n,e,t){if(e!==void 0){if(Sd(e))return e;if(e instanceof Te){const i=Array.from({length:n*3},()=>cA(e)).flat();return Float32Array.from(i)}else if(Td(e)||Array.isArray(e)){const i=Array.from({length:n*3},()=>bd(e)).flat();return Float32Array.from(i)}return Float32Array.from({length:n},()=>e)}return Float32Array.from({length:n},t)}class lA extends od{constructor({noise:e=1,count:t=100,speed:i=1,opacity:s=1,scale:r=1,size:a,color:c}={}){super(new Lt,new oA);const o=this.material;o.transparent=!0,o.depthWrite=!1,this.rebuildAttributes({count:t,size:a,opacity:s,speed:i,scale:r,noise:e,color:c})}setPixelRatio(e){const t=this.material;t.pixelRatio=e}rebuildAttributes({noise:e=1,count:t=100,speed:i=1,opacity:s=1,scale:r=1,size:a,color:c}={}){const o=bd(r),u=Float32Array.from(Array.from({length:t},()=>o.map(Hp.randFloatSpread)).flat()),f=Mr(t,a,Math.random),h=Mr(t,s),l=Mr(t,i),p=Mr(t*3,e),g=Mr(c===void 0?t*3:t,Sd(c)?c:new Te(c),()=>1);this.geometry.setAttribute("position",new $e(u,3)),this.geometry.setAttribute("size",new $e(f,1)),this.geometry.setAttribute("opacity",new $e(h,1)),this.geometry.setAttribute("speed",new $e(l,1)),this.geometry.setAttribute("color",new $e(g,3)),this.geometry.setAttribute("noise",new $e(p,3))}update(e){this.material.time=e}}const Ed=0,uA=1,wd=2,kf=2,uc=1.25,Vf=1,qt=6*4+4+4,kt=qt/4,Zl=65535,fA=Zl<<16,Ka=Math.pow(2,-24),Jl=Symbol("SKIP_GENERATION"),Cd={strategy:Ed,maxDepth:40,maxLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[Jl]:!1};function Ct(n,e,t){return t.min.x=e[n],t.min.y=e[n+1],t.min.z=e[n+2],t.max.x=e[n+3],t.max.y=e[n+4],t.max.z=e[n+5],t}function Wf(n){let e=-1,t=-1/0;for(let i=0;i<3;i++){const s=n[i+3]-n[i];s>t&&(t=s,e=i)}return e}function Xf(n,e){e.set(n)}function Yf(n,e,t){let i,s;for(let r=0;r<3;r++){const a=r+3;i=n[r],s=e[r],t[r]=i<s?i:s,i=n[a],s=e[a],t[a]=i>s?i:s}}function Aa(n,e,t){for(let i=0;i<3;i++){const s=e[n+2*i],r=e[n+2*i+1],a=s-r,c=s+r;a<t[i]&&(t[i]=a),c>t[i+3]&&(t[i+3]=c)}}function Sr(n){const e=n[3]-n[0],t=n[4]-n[1],i=n[5]-n[2];return 2*(e*t+t*i+i*e)}function Bt(n,e){return e[n+15]===Zl}function en(n,e){return e[n+6]}function an(n,e){return e[n+14]}function Qt(n){return n+kt}function Kt(n,e){const t=e[n+6];return n+t*kt}function _o(n,e){return e[n+7]}function fc(n,e,t,i,s){let r=1/0,a=1/0,c=1/0,o=-1/0,u=-1/0,f=-1/0,h=1/0,l=1/0,p=1/0,g=-1/0,x=-1/0,d=-1/0;const m=n.offset||0;for(let v=(e-m)*6,_=(e+t-m)*6;v<_;v+=6){const A=n[v+0],M=n[v+1],S=A-M,b=A+M;S<r&&(r=S),b>o&&(o=b),A<h&&(h=A),A>g&&(g=A);const y=n[v+2],w=n[v+3],R=y-w,C=y+w;R<a&&(a=R),C>u&&(u=C),y<l&&(l=y),y>x&&(x=y);const P=n[v+4],B=n[v+5],U=P-B,F=P+B;U<c&&(c=U),F>f&&(f=F),P<p&&(p=P),P>d&&(d=P)}i[0]=r,i[1]=a,i[2]=c,i[3]=o,i[4]=u,i[5]=f,s[0]=h,s[1]=l,s[2]=p,s[3]=g,s[4]=x,s[5]=d}const ci=32,hA=(n,e)=>n.candidate-e.candidate,Pi=new Array(ci).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),ya=new Float32Array(6);function dA(n,e,t,i,s,r){let a=-1,c=0;if(r===Ed)a=Wf(e),a!==-1&&(c=(e[a]+e[a+3])/2);else if(r===uA)a=Wf(n),a!==-1&&(c=pA(t,i,s,a));else if(r===wd){const o=Sr(n);let u=uc*s;const f=t.offset||0,h=(i-f)*6,l=(i+s-f)*6;for(let p=0;p<3;p++){const g=e[p],m=(e[p+3]-g)/ci;if(s<ci/4){const v=[...Pi];v.length=s;let _=0;for(let M=h;M<l;M+=6,_++){const S=v[_];S.candidate=t[M+2*p],S.count=0;const{bounds:b,leftCacheBounds:y,rightCacheBounds:w}=S;for(let R=0;R<3;R++)w[R]=1/0,w[R+3]=-1/0,y[R]=1/0,y[R+3]=-1/0,b[R]=1/0,b[R+3]=-1/0;Aa(M,t,b)}v.sort(hA);let A=s;for(let M=0;M<A;M++){const S=v[M];for(;M+1<A&&v[M+1].candidate===S.candidate;)v.splice(M+1,1),A--}for(let M=h;M<l;M+=6){const S=t[M+2*p];for(let b=0;b<A;b++){const y=v[b];S>=y.candidate?Aa(M,t,y.rightCacheBounds):(Aa(M,t,y.leftCacheBounds),y.count++)}}for(let M=0;M<A;M++){const S=v[M],b=S.count,y=s-S.count,w=S.leftCacheBounds,R=S.rightCacheBounds;let C=0;b!==0&&(C=Sr(w)/o);let P=0;y!==0&&(P=Sr(R)/o);const B=Vf+uc*(C*b+P*y);B<u&&(a=p,u=B,c=S.candidate)}}else{for(let A=0;A<ci;A++){const M=Pi[A];M.count=0,M.candidate=g+m+A*m;const S=M.bounds;for(let b=0;b<3;b++)S[b]=1/0,S[b+3]=-1/0}for(let A=h;A<l;A+=6){let b=~~((t[A+2*p]-g)/m);b>=ci&&(b=ci-1);const y=Pi[b];y.count++,Aa(A,t,y.bounds)}const v=Pi[ci-1];Xf(v.bounds,v.rightCacheBounds);for(let A=ci-2;A>=0;A--){const M=Pi[A],S=Pi[A+1];Yf(M.bounds,S.rightCacheBounds,M.rightCacheBounds)}let _=0;for(let A=0;A<ci-1;A++){const M=Pi[A],S=M.count,b=M.bounds,w=Pi[A+1].rightCacheBounds;S!==0&&(_===0?Xf(b,ya):Yf(b,ya,ya)),_+=S;let R=0,C=0;_!==0&&(R=Sr(ya)/o);const P=s-_;P!==0&&(C=Sr(w)/o);const B=Vf+uc*(R*_+C*P);B<u&&(a=p,u=B,c=M.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${r} used.`);return{axis:a,pos:c}}function pA(n,e,t,i){let s=0;const r=n.offset;for(let a=e,c=e+t;a<c;a++)s+=n[(a-r)*6+i*2];return s/t}class hc{constructor(){this.boundingData=new Float32Array(6)}}function mA(n,e,t,i,s,r){let a=i,c=i+s-1;const o=r.pos,u=r.axis*2,f=t.offset||0;for(;;){for(;a<=c&&t[(a-f)*6+u]<o;)a++;for(;a<=c&&t[(c-f)*6+u]>=o;)c--;if(a<c){for(let h=0;h<e;h++){let l=n[a*e+h];n[a*e+h]=n[c*e+h],n[c*e+h]=l}for(let h=0;h<6;h++){const l=a-f,p=c-f,g=t[l*6+h];t[l*6+h]=t[p*6+h],t[p*6+h]=g}a++,c--}else return a}}let Rd,ja,Tl,Dd;const gA=Math.pow(2,32);function bl(n){return"count"in n?1:1+bl(n.left)+bl(n.right)}function vA(n,e,t){return Rd=new Float32Array(t),ja=new Uint32Array(t),Tl=new Uint16Array(t),Dd=new Uint8Array(t),El(n,e)}function El(n,e){const t=n/4,i=n/2,s="count"in e,r=e.boundingData;for(let a=0;a<6;a++)Rd[t+a]=r[a];if(s)return e.buffer?(Dd.set(new Uint8Array(e.buffer),n),n+e.buffer.byteLength):(ja[t+6]=e.offset,Tl[i+14]=e.count,Tl[i+15]=Zl,n+qt);{const{left:a,right:c,splitAxis:o}=e,u=n+qt;let f=El(u,a);const h=n/qt,p=f/qt-h;if(p>gA)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");return ja[t+6]=p,ja[t+7]=o,El(f,c)}}function xA(n,e,t,i,s,r){const{maxDepth:a,verbose:c,maxLeafSize:o,strategy:u,onProgress:f}=s,h=n.primitiveBuffer,l=n.primitiveBufferStride,p=new Float32Array(6);let g=!1;const x=new hc;return fc(e,t,i,x.boundingData,p),m(x,t,i,p),x;function d(v){f&&f((v-r.offset)/r.count)}function m(v,_,A,M=null,S=0){if(!g&&S>=a&&(g=!0,c&&console.warn(`BVH: Max depth of ${a} reached when generating BVH. Consider increasing maxDepth.`)),A<=o||S>=a)return d(_+A),v.offset=_,v.count=A,v;const b=dA(v.boundingData,M,e,_,A,u);if(b.axis===-1)return d(_+A),v.offset=_,v.count=A,v;const y=mA(h,l,e,_,A,b);if(y===_||y===_+A)d(_+A),v.offset=_,v.count=A;else{v.splitAxis=b.axis;const w=new hc,R=_,C=y-_;v.left=w,fc(e,R,C,w.boundingData,p),m(w,R,C,p,S+1);const P=new hc,B=y,U=A-C;v.right=P,fc(e,B,U,P.boundingData,p),m(P,B,U,p,S+1)}return v}}function _A(n,e){const t=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=n.getRootRanges(e.range),s=i[0],r=i[i.length-1],a={offset:s.offset,count:r.offset+r.count-s.offset},c=new Float32Array(6*a.count);c.offset=a.offset,n.computePrimitiveBounds(a.offset,a.count,c),n._roots=i.map(o=>{const u=xA(n,c,o.offset,o.count,e,a),f=bl(u),h=new t(qt*f);return vA(0,u,h),h})}class $l{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class AA{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=i=>{t&&e.push(t),t=i,this.float32Array=new Float32Array(i),this.uint16Array=new Uint16Array(i),this.uint32Array=new Uint32Array(i)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const yt=new AA;let Ui,Xs;const Ps=[],Ma=new $l(()=>new un);function yA(n,e,t,i,s,r){Ui=Ma.getPrimitive(),Xs=Ma.getPrimitive(),Ps.push(Ui,Xs),yt.setBuffer(n._roots[e]);const a=wl(0,n.geometry,t,i,s,r);yt.clearBuffer(),Ma.releasePrimitive(Ui),Ma.releasePrimitive(Xs),Ps.pop(),Ps.pop();const c=Ps.length;return c>0&&(Xs=Ps[c-1],Ui=Ps[c-2]),a}function wl(n,e,t,i,s=null,r=0,a=0){const{float32Array:c,uint16Array:o,uint32Array:u}=yt;let f=n*2;if(Bt(f,o)){const g=en(n,u),x=an(f,o);return Ct(n,c,Ui),i(g,x,!1,a,r+n/kt,Ui)}else{let P=function(U){const{uint16Array:F,uint32Array:k}=yt;let L=U*2;for(;!Bt(L,F);)U=Qt(U),L=U*2;return en(U,k)},B=function(U){const{uint16Array:F,uint32Array:k}=yt;let L=U*2;for(;!Bt(L,F);)U=Kt(U,k),L=U*2;return en(U,k)+an(L,F)};var l=P,p=B;const g=Qt(n),x=Kt(n,u);let d=g,m=x,v,_,A,M;if(s&&(A=Ui,M=Xs,Ct(d,c,A),Ct(m,c,M),v=s(A),_=s(M),_<v)){d=x,m=g;const U=v;v=_,_=U,A=M}A||(A=Ui,Ct(d,c,A));const S=Bt(d*2,o),b=t(A,S,v,a+1,r+d/kt);let y;if(b===kf){const U=P(d),k=B(d)-U;y=i(U,k,!0,a+1,r+d/kt,A)}else y=b&&wl(d,e,t,i,s,r,a+1);if(y)return!0;M=Xs,Ct(m,c,M);const w=Bt(m*2,o),R=t(M,w,_,a+1,r+m/kt);let C;if(R===kf){const U=P(m),k=B(m)-U;C=i(U,k,!0,a+1,r+m/kt,M)}else C=R&&wl(m,e,t,i,s,r,a+1);return!!C}}const Br=new yt.constructor,so=new yt.constructor,Li=new $l(()=>new un),Is=new un,Ls=new un,dc=new un,pc=new un;let mc=!1;function MA(n,e,t,i){if(mc)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");mc=!0;const s=n._roots,r=e._roots;let a,c=0,o=0;const u=new We().copy(t).invert();for(let f=0,h=s.length;f<h;f++){Br.setBuffer(s[f]),o=0;const l=Li.getPrimitive();Ct(0,Br.float32Array,l),l.applyMatrix4(u);for(let p=0,g=r.length;p<g&&(so.setBuffer(r[p]),a=Nn(0,0,t,u,i,c,o,0,0,l),so.clearBuffer(),o+=r[p].byteLength/qt,!a);p++);if(Li.releasePrimitive(l),Br.clearBuffer(),c+=s[f].byteLength/qt,a)break}return mc=!1,a}function Nn(n,e,t,i,s,r=0,a=0,c=0,o=0,u=null,f=!1){let h,l;f?(h=so,l=Br):(h=Br,l=so);const p=h.float32Array,g=h.uint32Array,x=h.uint16Array,d=l.float32Array,m=l.uint32Array,v=l.uint16Array,_=n*2,A=e*2,M=Bt(_,x),S=Bt(A,v);let b=!1;if(S&&M)f?b=s(en(e,m),an(e*2,v),en(n,g),an(n*2,x),o,a+e/kt,c,r+n/kt):b=s(en(n,g),an(n*2,x),en(e,m),an(e*2,v),c,r+n/kt,o,a+e/kt);else if(S){const y=Li.getPrimitive();Ct(e,d,y),y.applyMatrix4(t);const w=Qt(n),R=Kt(n,g);Ct(w,p,Is),Ct(R,p,Ls);const C=y.intersectsBox(Is),P=y.intersectsBox(Ls);b=C&&Nn(e,w,i,t,s,a,r,o,c+1,y,!f)||P&&Nn(e,R,i,t,s,a,r,o,c+1,y,!f),Li.releasePrimitive(y)}else{const y=Qt(e),w=Kt(e,m);Ct(y,d,dc),Ct(w,d,pc);const R=u.intersectsBox(dc),C=u.intersectsBox(pc);if(R&&C)b=Nn(n,y,t,i,s,r,a,c,o+1,u,f)||Nn(n,w,t,i,s,r,a,c,o+1,u,f);else if(R)if(M)b=Nn(n,y,t,i,s,r,a,c,o+1,u,f);else{const P=Li.getPrimitive();P.copy(dc).applyMatrix4(t);const B=Qt(n),U=Kt(n,g);Ct(B,p,Is),Ct(U,p,Ls);const F=P.intersectsBox(Is),k=P.intersectsBox(Ls);b=F&&Nn(y,B,i,t,s,a,r,o,c+1,P,!f)||k&&Nn(y,U,i,t,s,a,r,o,c+1,P,!f),Li.releasePrimitive(P)}else if(C)if(M)b=Nn(n,w,t,i,s,r,a,c,o+1,u,f);else{const P=Li.getPrimitive();P.copy(pc).applyMatrix4(t);const B=Qt(n),U=Kt(n,g);Ct(B,p,Is),Ct(U,p,Ls);const F=P.intersectsBox(Is),k=P.intersectsBox(Ls);b=F&&Nn(w,B,i,t,s,a,r,o,c+1,P,!f)||k&&Nn(w,U,i,t,s,a,r,o,c+1,P,!f),Li.releasePrimitive(P)}}return b}const qf=new un,Fs=new Float32Array(6);class SA{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(e){e={...Cd,...e},_A(this,e)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(e,t,i,s){let r=1/0,a=1/0,c=1/0,o=-1/0,u=-1/0,f=-1/0;for(let h=e,l=e+t;h<l;h++){this.writePrimitiveBounds(h,Fs,0);const[p,g,x,d,m,v]=Fs;p<r&&(r=p),d>o&&(o=d),g<a&&(a=g),m>u&&(u=m),x<c&&(c=x),v>f&&(f=v)}return i[s+0]=r,i[s+1]=a,i[s+2]=c,i[s+3]=o,i[s+4]=u,i[s+5]=f,i}computePrimitiveBounds(e,t,i){const s=i.offset||0;for(let r=e,a=e+t;r<a;r++){this.writePrimitiveBounds(r,Fs,0);const[c,o,u,f,h,l]=Fs,p=(c+f)/2,g=(o+h)/2,x=(u+l)/2,d=(f-c)/2,m=(h-o)/2,v=(l-u)/2,_=(r-s)*6;i[_+0]=p,i[_+1]=d+(Math.abs(p)+d)*Ka,i[_+2]=g,i[_+3]=m+(Math.abs(g)+m)*Ka,i[_+4]=x,i[_+5]=v+(Math.abs(x)+v)*Ka}return i}shiftPrimitiveOffsets(e){const t=this._indirectBuffer;if(t)for(let i=0,s=t.length;i<s;i++)t[i]+=e;else{const i=this._roots;for(let s=0;s<i.length;s++){const r=i[s],a=new Uint32Array(r),c=new Uint16Array(r),o=r.byteLength/qt;for(let u=0;u<o;u++){const f=kt*u,h=2*f;Bt(h,c)&&(a[f+6]+=e)}}}}traverse(e,t=0){const i=this._roots[t],s=new Uint32Array(i),r=new Uint16Array(i);a(0);function a(c,o=0){const u=c*2,f=Bt(u,r);if(f){const h=s[c+6],l=r[u+14];e(o,f,new Float32Array(i,c*4,6),h,l)}else{const h=Qt(c),l=Kt(c,s),p=_o(c,s);e(o,f,new Float32Array(i,c*4,6),p)||(a(h,o+1),a(l,o+1))}}}refit(){const e=this._roots;for(let t=0,i=e.length;t<i;t++){const s=e[t],r=new Uint32Array(s),a=new Uint16Array(s),c=new Float32Array(s),o=s.byteLength/qt;for(let u=o-1;u>=0;u--){const f=u*kt,h=f*2;if(Bt(h,a)){const p=en(f,r),g=an(h,a);this.writePrimitiveRangeBounds(p,g,Fs,0),c.set(Fs,f)}else{const p=Qt(f),g=Kt(f,r);for(let x=0;x<3;x++){const d=c[p+x],m=c[p+x+3],v=c[g+x],_=c[g+x+3];c[f+x]=d<v?d:v,c[f+x+3]=m>_?m:_}}}}}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(i=>{Ct(0,new Float32Array(i),qf),e.union(qf)}),e}shapecast(e){let{boundsTraverseOrder:t,intersectsBounds:i,intersectsRange:s,intersectsPrimitive:r,scratchPrimitive:a,iterate:c}=e;if(s&&r){const h=s;s=(l,p,g,x,d)=>h(l,p,g,x,d)?!0:c(l,p,this,r,g,x,a)}else s||(r?s=(h,l,p,g)=>c(h,l,this,r,p,g,a):s=(h,l,p)=>p);let o=!1,u=0;const f=this._roots;for(let h=0,l=f.length;h<l;h++){const p=f[h];if(o=yA(this,h,i,s,t,u),o)break;u+=p.byteLength/qt}return o}bvhcast(e,t,i){let{intersectsRanges:s}=i;return MA(this,e,t,s)}}function TA(){return typeof SharedArrayBuffer<"u"}function Ao(n){return n.index?n.index.count:n.attributes.position.count}function yo(n){return Ao(n)/3}function Pd(n,e=ArrayBuffer){return n>65535?new Uint32Array(new e(4*n)):new Uint16Array(new e(2*n))}function bA(n,e){if(!n.index){const t=n.attributes.position.count,i=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=Pd(t,i);n.setIndex(new $e(s,1));for(let r=0;r<t;r++)s[r]=r}}function EA(n,e,t){const i=Ao(n)/t,s=e||n.drawRange,r=s.start/t,a=(s.start+s.count)/t,c=Math.max(0,r),o=Math.min(i,a)-c;return{offset:Math.floor(c),count:Math.floor(o)}}function wA(n,e){return n.groups.map(t=>({offset:t.start/e,count:t.count/e}))}function Qf(n,e,t){const i=EA(n,e,t),s=wA(n,t);if(!s.length)return[i];const r=[],a=i.offset,c=i.offset+i.count,o=Ao(n)/t,u=[];for(const l of s){const{offset:p,count:g}=l,x=p,d=isFinite(g)?g:o-p,m=p+d;x<c&&m>a&&(u.push({pos:Math.max(a,x),isStart:!0}),u.push({pos:Math.min(c,m),isStart:!1}))}u.sort((l,p)=>l.pos!==p.pos?l.pos-p.pos:l.type==="end"?-1:1);let f=0,h=null;for(const l of u){const p=l.pos;f!==0&&p!==h&&r.push({offset:h,count:p-h}),f+=l.isStart?1:-1,h=p}return r}function CA(n,e){const t=n[n.length-1],i=t.offset+t.count>2**16,s=n.reduce((u,f)=>u+f.count,0),r=i?4:2,a=e?new SharedArrayBuffer(s*r):new ArrayBuffer(s*r),c=i?new Uint32Array(a):new Uint16Array(a);let o=0;for(let u=0;u<n.length;u++){const{offset:f,count:h}=n[u];for(let l=0;l<h;l++)c[o+l]=f+l;o+=h}return c}class RA extends SA{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(e){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(e){}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(t.useSharedArrayBuffer&&!TA())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=e,this.resolvePrimitiveIndex=t.indirect?i=>this._indirectBuffer[i]:i=>i,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,t={...Cd,...t},t[Jl]||this.init(t)}init(e){const{geometry:t,primitiveStride:i}=this;if(e.indirect){const s=Qf(t,e.range,i),r=CA(s,e.useSharedArrayBuffer);this._indirectBuffer=r}else bA(t,e);super.init(e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new un))}getRootRanges(e){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:Qf(this.geometry,e,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}}class xi{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let i=1/0,s=-1/0;for(let r=0,a=e.length;r<a;r++){const o=e[r][t];i=o<i?o:i,s=o>s?o:s}this.min=i,this.max=s}setFromPoints(e,t){let i=1/0,s=-1/0;for(let r=0,a=t.length;r<a;r++){const c=t[r],o=e.dot(c);i=o<i?o:i,s=o>s?o:s}this.min=i,this.max=s}isSeparated(e){return this.min>e.max||e.min>this.max}}xi.prototype.setFromBox=function(){const n=new I;return function(t,i){const s=i.min,r=i.max;let a=1/0,c=-1/0;for(let o=0;o<=1;o++)for(let u=0;u<=1;u++)for(let f=0;f<=1;f++){n.x=s.x*o+r.x*(1-o),n.y=s.y*u+r.y*(1-u),n.z=s.z*f+r.z*(1-f);const h=t.dot(n);a=Math.min(h,a),c=Math.max(h,c)}this.min=a,this.max=c}}();const DA=function(){const n=new I,e=new I,t=new I;return function(s,r,a){const c=s.start,o=n,u=r.start,f=e;t.subVectors(c,u),n.subVectors(s.end,s.start),e.subVectors(r.end,r.start);const h=t.dot(f),l=f.dot(o),p=f.dot(f),g=t.dot(o),d=o.dot(o)*p-l*l;let m,v;d!==0?m=(h*l-g*p)/d:m=0,v=(h+m*l)/p,a.x=m,a.y=v}}(),eu=function(){const n=new Se,e=new I,t=new I;return function(s,r,a,c){DA(s,r,n);let o=n.x,u=n.y;if(o>=0&&o<=1&&u>=0&&u<=1){s.at(o,a),r.at(u,c);return}else if(o>=0&&o<=1){u<0?r.at(0,c):r.at(1,c),s.closestPointToPoint(c,!0,a);return}else if(u>=0&&u<=1){o<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,c);return}else{let f;o<0?f=s.start:f=s.end;let h;u<0?h=r.start:h=r.end;const l=e,p=t;if(s.closestPointToPoint(h,!0,e),r.closestPointToPoint(f,!0,t),l.distanceToSquared(h)<=p.distanceToSquared(f)){a.copy(l),c.copy(h);return}else{a.copy(f),c.copy(p);return}}}}(),PA=function(){const n=new I,e=new I,t=new Qn,i=new vi;return function(r,a){const{radius:c,center:o}=r,{a:u,b:f,c:h}=a;if(i.start=u,i.end=f,i.closestPointToPoint(o,!0,n).distanceTo(o)<=c||(i.start=u,i.end=h,i.closestPointToPoint(o,!0,n).distanceTo(o)<=c)||(i.start=f,i.end=h,i.closestPointToPoint(o,!0,n).distanceTo(o)<=c))return!0;const x=a.getPlane(t);if(Math.abs(x.distanceToPoint(o))<=c){const m=x.projectPoint(o,e);if(a.containsPoint(m))return!0}return!1}}(),IA=["x","y","z"],li=1e-15,Kf=li*li;function bn(n){return Math.abs(n)<li}class Gn extends Zt{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new I),this.satBounds=new Array(4).fill().map(()=>new xi),this.points=[this.a,this.b,this.c],this.plane=new Qn,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new vi,this.needsUpdate=!0}intersectsSphere(e){return PA(e,this)}update(){const e=this.a,t=this.b,i=this.c,s=this.points,r=this.satAxes,a=this.satBounds,c=r[0],o=a[0];this.getNormal(c),o.setFromPoints(c,s);const u=r[1],f=a[1];u.subVectors(e,t),f.setFromPoints(u,s);const h=r[2],l=a[2];h.subVectors(t,i),l.setFromPoints(h,s);const p=r[3],g=a[3];p.subVectors(i,e),g.setFromPoints(p,s);const x=u.length(),d=h.length(),m=p.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,x<li?d<li||m<li?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(i)):d<li?m<li?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(e)):m<li&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(i),this.degenerateSegment.end.copy(t)),this.plane.setFromNormalAndCoplanarPoint(c,e),this.needsUpdate=!1}}Gn.prototype.closestPointToSegment=function(){const n=new I,e=new I,t=new vi;return function(s,r=null,a=null){const{start:c,end:o}=s,u=this.points;let f,h=1/0;for(let l=0;l<3;l++){const p=(l+1)%3;t.start.copy(u[l]),t.end.copy(u[p]),eu(t,s,n,e),f=n.distanceToSquared(e),f<h&&(h=f,r&&r.copy(n),a&&a.copy(e))}return this.closestPointToPoint(c,n),f=c.distanceToSquared(n),f<h&&(h=f,r&&r.copy(n),a&&a.copy(c)),this.closestPointToPoint(o,n),f=o.distanceToSquared(n),f<h&&(h=f,r&&r.copy(n),a&&a.copy(o)),Math.sqrt(h)}}();Gn.prototype.intersectsTriangle=function(){const n=new Gn,e=new xi,t=new xi,i=new I,s=new I,r=new I,a=new I,c=new vi,o=new vi,u=new I,f=new Se,h=new Se;function l(_,A,M,S){const b=i;!_.isDegenerateIntoPoint&&!_.isDegenerateIntoSegment?b.copy(_.plane.normal):b.copy(A.plane.normal);const y=_.satBounds,w=_.satAxes;for(let P=1;P<4;P++){const B=y[P],U=w[P];if(e.setFromPoints(U,A.points),B.isSeparated(e)||(a.copy(b).cross(U),e.setFromPoints(a,_.points),t.setFromPoints(a,A.points),e.isSeparated(t)))return!1}const R=A.satBounds,C=A.satAxes;for(let P=1;P<4;P++){const B=R[P],U=C[P];if(e.setFromPoints(U,_.points),B.isSeparated(e)||(a.crossVectors(b,U),e.setFromPoints(a,_.points),t.setFromPoints(a,A.points),e.isSeparated(t)))return!1}return M&&(S||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),M.start.set(0,0,0),M.end.set(0,0,0)),!0}function p(_,A,M,S,b,y,w,R,C,P,B){let U=w/(w-R);P.x=S+(b-S)*U,B.start.subVectors(A,_).multiplyScalar(U).add(_),U=w/(w-C),P.y=S+(y-S)*U,B.end.subVectors(M,_).multiplyScalar(U).add(_)}function g(_,A,M,S,b,y,w,R,C,P,B){if(b>0)p(_.c,_.a,_.b,S,A,M,C,w,R,P,B);else if(y>0)p(_.b,_.a,_.c,M,A,S,R,w,C,P,B);else if(R*C>0||w!=0)p(_.a,_.b,_.c,A,M,S,w,R,C,P,B);else if(R!=0)p(_.b,_.a,_.c,M,A,S,R,w,C,P,B);else if(C!=0)p(_.c,_.a,_.b,S,A,M,C,w,R,P,B);else return!0;return!1}function x(_,A,M,S){const b=A.degenerateSegment,y=_.plane.distanceToPoint(b.start),w=_.plane.distanceToPoint(b.end);return bn(y)?bn(w)?l(_,A,M,S):(M&&(M.start.copy(b.start),M.end.copy(b.start)),_.containsPoint(b.start)):bn(w)?(M&&(M.start.copy(b.end),M.end.copy(b.end)),_.containsPoint(b.end)):_.plane.intersectLine(b,i)!=null?(M&&(M.start.copy(i),M.end.copy(i)),_.containsPoint(i)):!1}function d(_,A,M){const S=A.a;return bn(_.plane.distanceToPoint(S))&&_.containsPoint(S)?(M&&(M.start.copy(S),M.end.copy(S)),!0):!1}function m(_,A,M){const S=_.degenerateSegment,b=A.a;return S.closestPointToPoint(b,!0,i),b.distanceToSquared(i)<Kf?(M&&(M.start.copy(b),M.end.copy(b)),!0):!1}function v(_,A,M,S){if(_.isDegenerateIntoSegment)if(A.isDegenerateIntoSegment){const b=_.degenerateSegment,y=A.degenerateSegment,w=s,R=r;b.delta(w),y.delta(R);const C=i.subVectors(y.start,b.start),P=w.x*R.y-w.y*R.x;if(bn(P))return!1;const B=(C.x*R.y-C.y*R.x)/P,U=-(w.x*C.y-w.y*C.x)/P;if(B<0||B>1||U<0||U>1)return!1;const F=b.start.z+w.z*B,k=y.start.z+R.z*U;return bn(F-k)?(M&&(M.start.copy(b.start).addScaledVector(w,B),M.end.copy(b.start).addScaledVector(w,B)),!0):!1}else return A.isDegenerateIntoPoint?m(_,A,M):x(A,_,M,S);else{if(_.isDegenerateIntoPoint)return A.isDegenerateIntoPoint?A.a.distanceToSquared(_.a)<Kf?(M&&(M.start.copy(_.a),M.end.copy(_.a)),!0):!1:A.isDegenerateIntoSegment?m(A,_,M):d(A,_,M);if(A.isDegenerateIntoPoint)return d(_,A,M);if(A.isDegenerateIntoSegment)return x(_,A,M,S)}}return function(A,M=null,S=!1){this.needsUpdate&&this.update(),A.isExtendedTriangle?A.needsUpdate&&A.update():(n.copy(A),n.update(),A=n);const b=v(this,A,M,S);if(b!==void 0)return b;const y=this.plane,w=A.plane;let R=w.distanceToPoint(this.a),C=w.distanceToPoint(this.b),P=w.distanceToPoint(this.c);bn(R)&&(R=0),bn(C)&&(C=0),bn(P)&&(P=0);const B=R*C,U=R*P;if(B>0&&U>0)return!1;let F=y.distanceToPoint(A.a),k=y.distanceToPoint(A.b),L=y.distanceToPoint(A.c);bn(F)&&(F=0),bn(k)&&(k=0),bn(L)&&(L=0);const W=F*k,O=F*L;if(W>0&&O>0)return!1;s.copy(y.normal),r.copy(w.normal);const z=s.cross(r);let j=0,$=Math.abs(z.x);const de=Math.abs(z.y);de>$&&($=de,j=1),Math.abs(z.z)>$&&(j=2);const ae=IA[j],Q=this.a[ae],ne=this.b[ae],ie=this.c[ae],Ee=A.a[ae],Ie=A.b[ae],Pe=A.c[ae];if(g(this,Q,ne,ie,B,U,R,C,P,f,c))return l(this,A,M,S);if(g(A,Ee,Ie,Pe,W,O,F,k,L,h,o))return l(this,A,M,S);if(f.y<f.x){const at=f.y;f.y=f.x,f.x=at,u.copy(c.start),c.start.copy(c.end),c.end.copy(u)}if(h.y<h.x){const at=h.y;h.y=h.x,h.x=at,u.copy(o.start),o.start.copy(o.end),o.end.copy(u)}return f.y<h.x||h.y<f.x?!1:(M&&(h.x>f.x?M.start.copy(o.start):M.start.copy(c.start),h.y<f.y?M.end.copy(o.end):M.end.copy(c.end)),!0)}}();Gn.prototype.distanceToPoint=function(){const n=new I;return function(t){return this.closestPointToPoint(t,n),t.distanceTo(n)}}();Gn.prototype.distanceToTriangle=function(){const n=new I,e=new I,t=["a","b","c"],i=new vi,s=new vi;return function(a,c=null,o=null){const u=c||o?i:null;if(this.intersectsTriangle(a,u))return(c||o)&&(c&&u.getCenter(c),o&&u.getCenter(o)),0;let f=1/0;for(let h=0;h<3;h++){let l;const p=t[h],g=a[p];this.closestPointToPoint(g,n),l=g.distanceToSquared(n),l<f&&(f=l,c&&c.copy(n),o&&o.copy(g));const x=this[p];a.closestPointToPoint(x,n),l=x.distanceToSquared(n),l<f&&(f=l,c&&c.copy(x),o&&o.copy(n))}for(let h=0;h<3;h++){const l=t[h],p=t[(h+1)%3];i.set(this[l],this[p]);for(let g=0;g<3;g++){const x=t[g],d=t[(g+1)%3];s.set(a[x],a[d]),eu(i,s,n,e);const m=n.distanceToSquared(e);m<f&&(f=m,c&&c.copy(n),o&&o.copy(e))}}return Math.sqrt(f)}}();class fn{constructor(e,t,i){this.isOrientedBox=!0,this.min=new I,this.max=new I,this.matrix=new We,this.invMatrix=new We,this.points=new Array(8).fill().map(()=>new I),this.satAxes=new Array(3).fill().map(()=>new I),this.satBounds=new Array(3).fill().map(()=>new xi),this.alignedSatBounds=new Array(3).fill().map(()=>new xi),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),i&&this.matrix.copy(i)}set(e,t,i){this.min.copy(e),this.max.copy(t),this.matrix.copy(i),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}fn.prototype.update=function(){return function(){const e=this.matrix,t=this.min,i=this.max,s=this.points;for(let u=0;u<=1;u++)for(let f=0;f<=1;f++)for(let h=0;h<=1;h++){const l=1*u|2*f|4*h,p=s[l];p.x=u?i.x:t.x,p.y=f?i.y:t.y,p.z=h?i.z:t.z,p.applyMatrix4(e)}const r=this.satBounds,a=this.satAxes,c=s[0];for(let u=0;u<3;u++){const f=a[u],h=r[u],l=1<<u,p=s[l];f.subVectors(c,p),h.setFromPoints(f,s)}const o=this.alignedSatBounds;o[0].setFromPointsField(s,"x"),o[1].setFromPointsField(s,"y"),o[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();fn.prototype.intersectsBox=function(){const n=new xi;return function(t){this.needsUpdate&&this.update();const i=t.min,s=t.max,r=this.satBounds,a=this.satAxes,c=this.alignedSatBounds;if(n.min=i.x,n.max=s.x,c[0].isSeparated(n)||(n.min=i.y,n.max=s.y,c[1].isSeparated(n))||(n.min=i.z,n.max=s.z,c[2].isSeparated(n)))return!1;for(let o=0;o<3;o++){const u=a[o],f=r[o];if(n.setFromBox(u,t),f.isSeparated(n))return!1}return!0}}();fn.prototype.intersectsTriangle=function(){const n=new Gn,e=new Array(3),t=new xi,i=new xi,s=new I;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(n.copy(a),n.update(),a=n);const c=this.satBounds,o=this.satAxes;e[0]=a.a,e[1]=a.b,e[2]=a.c;for(let l=0;l<3;l++){const p=c[l],g=o[l];if(t.setFromPoints(g,e),p.isSeparated(t))return!1}const u=a.satBounds,f=a.satAxes,h=this.points;for(let l=0;l<3;l++){const p=u[l],g=f[l];if(t.setFromPoints(g,h),p.isSeparated(t))return!1}for(let l=0;l<3;l++){const p=o[l];for(let g=0;g<4;g++){const x=f[g];if(s.crossVectors(p,x),t.setFromPoints(s,e),i.setFromPoints(s,h),t.isSeparated(i))return!1}}return!0}}();fn.prototype.closestPointToPoint=function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}}();fn.prototype.distanceToPoint=function(){const n=new I;return function(t){return this.closestPointToPoint(t,n),t.distanceTo(n)}}();fn.prototype.distanceToBox=function(){const n=["x","y","z"],e=new Array(12).fill().map(()=>new vi),t=new Array(12).fill().map(()=>new vi),i=new I,s=new I;return function(a,c=0,o=null,u=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(o||u)&&(a.getCenter(s),this.closestPointToPoint(s,i),a.closestPointToPoint(i,s),o&&o.copy(i),u&&u.copy(s)),0;const f=c*c,h=a.min,l=a.max,p=this.points;let g=1/0;for(let d=0;d<8;d++){const m=p[d];s.copy(m).clamp(h,l);const v=m.distanceToSquared(s);if(v<g&&(g=v,o&&o.copy(m),u&&u.copy(s),v<f))return Math.sqrt(v)}let x=0;for(let d=0;d<3;d++)for(let m=0;m<=1;m++)for(let v=0;v<=1;v++){const _=(d+1)%3,A=(d+2)%3,M=m<<_|v<<A,S=1<<d|m<<_|v<<A,b=p[M],y=p[S];e[x].set(b,y);const R=n[d],C=n[_],P=n[A],B=t[x],U=B.start,F=B.end;U[R]=h[R],U[C]=m?h[C]:l[C],U[P]=v?h[P]:l[C],F[R]=l[R],F[C]=m?h[C]:l[C],F[P]=v?h[P]:l[C],x++}for(let d=0;d<=1;d++)for(let m=0;m<=1;m++)for(let v=0;v<=1;v++){s.x=d?l.x:h.x,s.y=m?l.y:h.y,s.z=v?l.z:h.z,this.closestPointToPoint(s,i);const _=s.distanceToSquared(i);if(_<g&&(g=_,o&&o.copy(i),u&&u.copy(s),_<f))return Math.sqrt(_)}for(let d=0;d<12;d++){const m=e[d];for(let v=0;v<12;v++){const _=t[v];eu(m,_,i,s);const A=i.distanceToSquared(s);if(A<g&&(g=A,o&&o.copy(i),u&&u.copy(s),A<f))return Math.sqrt(A)}}return Math.sqrt(g)}}();class LA extends $l{constructor(){super(()=>new Gn)}}const En=new LA,Tr=new I,gc=new I;function FA(n,e,t={},i=0,s=1/0){const r=i*i,a=s*s;let c=1/0,o=null;if(n.shapecast({boundsTraverseOrder:f=>(Tr.copy(e).clamp(f.min,f.max),Tr.distanceToSquared(e)),intersectsBounds:(f,h,l)=>l<c&&l<a,intersectsTriangle:(f,h)=>{f.closestPointToPoint(e,Tr);const l=e.distanceToSquared(Tr);return l<c&&(gc.copy(Tr),c=l,o=h),l<r}}),c===1/0)return null;const u=Math.sqrt(c);return t.point?t.point.copy(gc):t.point=gc.clone(),t.distance=u,t.faceIndex=o,t}const Sa=parseInt(_i)>=169,BA=parseInt(_i)<=161,Zi=new I,Ji=new I,$i=new I,Ta=new Se,ba=new Se,Ea=new Se,jf=new I,Zf=new I,Jf=new I,br=new I;function UA(n,e,t,i,s,r,a,c){let o;if(r===Ut?o=n.intersectTriangle(i,t,e,!0,s):o=n.intersectTriangle(e,t,i,r!==Yt,s),o===null)return null;const u=n.origin.distanceTo(s);return u<a||u>c?null:{distance:u,point:s.clone()}}function $f(n,e,t,i,s,r,a,c,o,u,f){Zi.fromBufferAttribute(e,r),Ji.fromBufferAttribute(e,a),$i.fromBufferAttribute(e,c);const h=UA(n,Zi,Ji,$i,br,o,u,f);if(h){if(i){Ta.fromBufferAttribute(i,r),ba.fromBufferAttribute(i,a),Ea.fromBufferAttribute(i,c),h.uv=new Se;const p=Zt.getInterpolation(br,Zi,Ji,$i,Ta,ba,Ea,h.uv);Sa||(h.uv=p)}if(s){Ta.fromBufferAttribute(s,r),ba.fromBufferAttribute(s,a),Ea.fromBufferAttribute(s,c),h.uv1=new Se;const p=Zt.getInterpolation(br,Zi,Ji,$i,Ta,ba,Ea,h.uv1);Sa||(h.uv1=p),BA&&(h.uv2=h.uv1)}if(t){jf.fromBufferAttribute(t,r),Zf.fromBufferAttribute(t,a),Jf.fromBufferAttribute(t,c),h.normal=new I;const p=Zt.getInterpolation(br,Zi,Ji,$i,jf,Zf,Jf,h.normal);h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1),Sa||(h.normal=p)}const l={a:r,b:a,c,normal:new I,materialIndex:0};if(Zt.getNormal(Zi,Ji,$i,l.normal),h.face=l,h.faceIndex=r,Sa){const p=new I;Zt.getBarycoord(br,Zi,Ji,$i,p),h.barycoord=p}}return h}function eh(n){return n&&n.isMaterial?n.side:n}function Mo(n,e,t,i,s,r,a){const c=i*3;let o=c+0,u=c+1,f=c+2;const{index:h,groups:l}=n;n.index&&(o=h.getX(o),u=h.getX(u),f=h.getX(f));const{position:p,normal:g,uv:x,uv1:d}=n.attributes;if(Array.isArray(e)){const m=i*3;for(let v=0,_=l.length;v<_;v++){const{start:A,count:M,materialIndex:S}=l[v];if(m>=A&&m<A+M){const b=eh(e[S]),y=$f(t,p,g,x,d,o,u,f,b,r,a);if(y)if(y.faceIndex=i,y.face.materialIndex=S,s)s.push(y);else return y}}}else{const m=eh(e),v=$f(t,p,g,x,d,o,u,f,m,r,a);if(v)if(v.faceIndex=i,v.face.materialIndex=0,s)s.push(v);else return v}return null}function Nt(n,e,t,i){const s=n.a,r=n.b,a=n.c;let c=e,o=e+1,u=e+2;t&&(c=t.getX(c),o=t.getX(o),u=t.getX(u)),s.x=i.getX(c),s.y=i.getY(c),s.z=i.getZ(c),r.x=i.getX(o),r.y=i.getY(o),r.z=i.getZ(o),a.x=i.getX(u),a.y=i.getY(u),a.z=i.getZ(u)}function NA(n,e,t,i,s,r,a,c){const{geometry:o,_indirectBuffer:u}=n;for(let f=i,h=i+s;f<h;f++)Mo(o,e,t,f,r,a,c)}function OA(n,e,t,i,s,r,a){const{geometry:c,_indirectBuffer:o}=n;let u=1/0,f=null;for(let h=i,l=i+s;h<l;h++){let p;p=Mo(c,e,t,h,null,r,a),p&&p.distance<u&&(f=p,u=p.distance)}return f}function zA(n,e,t,i,s,r,a){const{geometry:c}=t,{index:o}=c,u=c.attributes.position;for(let f=n,h=e+n;f<h;f++){let l;if(l=f,Nt(a,l*3,o,u),a.needsUpdate=!0,i(a,l,s,r))return!0}return!1}function HA(n,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=n.geometry,i=t.index?t.index.array:null,s=t.attributes.position;let r,a,c,o,u=0;const f=n._roots;for(let l=0,p=f.length;l<p;l++)r=f[l],a=new Uint32Array(r),c=new Uint16Array(r),o=new Float32Array(r),h(0,u),u+=r.byteLength;function h(l,p,g=!1){const x=l*2;if(Bt(x,c)){const d=en(l,a),m=an(x,c);let v=1/0,_=1/0,A=1/0,M=-1/0,S=-1/0,b=-1/0;for(let y=3*d,w=3*(d+m);y<w;y++){let R=i[y];const C=s.getX(R),P=s.getY(R),B=s.getZ(R);C<v&&(v=C),C>M&&(M=C),P<_&&(_=P),P>S&&(S=P),B<A&&(A=B),B>b&&(b=B)}return o[l+0]!==v||o[l+1]!==_||o[l+2]!==A||o[l+3]!==M||o[l+4]!==S||o[l+5]!==b?(o[l+0]=v,o[l+1]=_,o[l+2]=A,o[l+3]=M,o[l+4]=S,o[l+5]=b,!0):!1}else{const d=Qt(l),m=Kt(l,a);let v=g,_=!1,A=!1;if(e){if(!v){const R=d/kt+p/qt,C=m/kt+p/qt;_=e.has(R),A=e.has(C),v=!_&&!A}}else _=!0,A=!0;const M=v||_,S=v||A;let b=!1;M&&(b=h(d,p,v));let y=!1;S&&(y=h(m,p,v));const w=b||y;if(w)for(let R=0;R<3;R++){const C=d+R,P=m+R,B=o[C],U=o[C+3],F=o[P],k=o[P+3];o[l+R]=B<F?B:F,o[l+R+3]=U>k?U:k}return w}}}function Hi(n,e,t,i,s){let r,a,c,o,u,f;const h=1/t.direction.x,l=1/t.direction.y,p=1/t.direction.z,g=t.origin.x,x=t.origin.y,d=t.origin.z;let m=e[n],v=e[n+3],_=e[n+1],A=e[n+3+1],M=e[n+2],S=e[n+3+2];return h>=0?(r=(m-g)*h,a=(v-g)*h):(r=(v-g)*h,a=(m-g)*h),l>=0?(c=(_-x)*l,o=(A-x)*l):(c=(A-x)*l,o=(_-x)*l),r>o||c>a||((c>r||isNaN(r))&&(r=c),(o<a||isNaN(a))&&(a=o),p>=0?(u=(M-d)*p,f=(S-d)*p):(u=(S-d)*p,f=(M-d)*p),r>f||u>a)?!1:((u>r||r!==r)&&(r=u),(f<a||a!==a)&&(a=f),r<=s&&a>=i)}function GA(n,e,t,i,s,r,a,c){const{geometry:o,_indirectBuffer:u}=n;for(let f=i,h=i+s;f<h;f++){let l=u?u[f]:f;Mo(o,e,t,l,r,a,c)}}function kA(n,e,t,i,s,r,a){const{geometry:c,_indirectBuffer:o}=n;let u=1/0,f=null;for(let h=i,l=i+s;h<l;h++){let p;p=Mo(c,e,t,o?o[h]:h,null,r,a),p&&p.distance<u&&(f=p,u=p.distance)}return f}function VA(n,e,t,i,s,r,a){const{geometry:c}=t,{index:o}=c,u=c.attributes.position;for(let f=n,h=e+n;f<h;f++){let l;if(l=t.resolveTriangleIndex(f),Nt(a,l*3,o,u),a.needsUpdate=!0,i(a,l,s,r))return!0}return!1}function WA(n,e,t,i,s,r,a){yt.setBuffer(n._roots[e]),Cl(0,n,t,i,s,r,a),yt.clearBuffer()}function Cl(n,e,t,i,s,r,a){const{float32Array:c,uint16Array:o,uint32Array:u}=yt,f=n*2;if(Bt(f,o)){const l=en(n,u),p=an(f,o);NA(e,t,i,l,p,s,r,a)}else{const l=Qt(n);Hi(l,c,i,r,a)&&Cl(l,e,t,i,s,r,a);const p=Kt(n,u);Hi(p,c,i,r,a)&&Cl(p,e,t,i,s,r,a)}}const XA=["x","y","z"];function YA(n,e,t,i,s,r){yt.setBuffer(n._roots[e]);const a=Rl(0,n,t,i,s,r);return yt.clearBuffer(),a}function Rl(n,e,t,i,s,r){const{float32Array:a,uint16Array:c,uint32Array:o}=yt;let u=n*2;if(Bt(u,c)){const h=en(n,o),l=an(u,c);return OA(e,t,i,h,l,s,r)}else{const h=_o(n,o),l=XA[h],g=i.direction[l]>=0;let x,d;g?(x=Qt(n),d=Kt(n,o)):(x=Kt(n,o),d=Qt(n));const v=Hi(x,a,i,s,r)?Rl(x,e,t,i,s,r):null;if(v){const M=v.point[l];if(g?M<=a[d+h]:M>=a[d+h+3])return v}const A=Hi(d,a,i,s,r)?Rl(d,e,t,i,s,r):null;return v&&A?v.distance<=A.distance?v:A:v||A||null}}const wa=new un,Bs=new Gn,Us=new Gn,Er=new We,th=new fn,Ca=new fn;function qA(n,e,t,i){yt.setBuffer(n._roots[e]);const s=Dl(0,n,t,i);return yt.clearBuffer(),s}function Dl(n,e,t,i,s=null){const{float32Array:r,uint16Array:a,uint32Array:c}=yt;let o=n*2;if(s===null&&(t.boundingBox||t.computeBoundingBox(),th.set(t.boundingBox.min,t.boundingBox.max,i),s=th),Bt(o,a)){const f=e.geometry,h=f.index,l=f.attributes.position,p=t.index,g=t.attributes.position,x=en(n,c),d=an(o,a);if(Er.copy(i).invert(),t.boundsTree)return Ct(n,r,Ca),Ca.matrix.copy(Er),Ca.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:v=>Ca.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(i),v.b.applyMatrix4(i),v.c.applyMatrix4(i),v.needsUpdate=!0;for(let _=x*3,A=(d+x)*3;_<A;_+=3)if(Nt(Us,_,h,l),Us.needsUpdate=!0,v.intersectsTriangle(Us))return!0;return!1}});{const m=yo(t);for(let v=x*3,_=(d+x)*3;v<_;v+=3){Nt(Bs,v,h,l),Bs.a.applyMatrix4(Er),Bs.b.applyMatrix4(Er),Bs.c.applyMatrix4(Er),Bs.needsUpdate=!0;for(let A=0,M=m*3;A<M;A+=3)if(Nt(Us,A,p,g),Us.needsUpdate=!0,Bs.intersectsTriangle(Us))return!0}}}else{const f=Qt(n),h=Kt(n,c);return Ct(f,r,wa),!!(s.intersectsBox(wa)&&Dl(f,e,t,i,s)||(Ct(h,r,wa),s.intersectsBox(wa)&&Dl(h,e,t,i,s)))}}const Ra=new We,vc=new fn,wr=new fn,QA=new I,KA=new I,jA=new I,ZA=new I;function JA(n,e,t,i={},s={},r=0,a=1/0){e.boundingBox||e.computeBoundingBox(),vc.set(e.boundingBox.min,e.boundingBox.max,t),vc.needsUpdate=!0;const c=n.geometry,o=c.attributes.position,u=c.index,f=e.attributes.position,h=e.index,l=En.getPrimitive(),p=En.getPrimitive();let g=QA,x=KA,d=null,m=null;s&&(d=jA,m=ZA);let v=1/0,_=null,A=null;return Ra.copy(t).invert(),wr.matrix.copy(Ra),n.shapecast({boundsTraverseOrder:M=>vc.distanceToBox(M),intersectsBounds:(M,S,b)=>b<v&&b<a?(S&&(wr.min.copy(M.min),wr.max.copy(M.max),wr.needsUpdate=!0),!0):!1,intersectsRange:(M,S)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:y=>wr.distanceToBox(y),intersectsBounds:(y,w,R)=>R<v&&R<a,intersectsRange:(y,w)=>{for(let R=y,C=y+w;R<C;R++){Nt(p,3*R,h,f),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let P=M,B=M+S;P<B;P++){Nt(l,3*P,u,o),l.needsUpdate=!0;const U=l.distanceToTriangle(p,g,d);if(U<v&&(x.copy(g),m&&m.copy(d),v=U,_=P,A=R),U<r)return!0}}}});{const b=yo(e);for(let y=0,w=b;y<w;y++){Nt(p,3*y,h,f),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let R=M,C=M+S;R<C;R++){Nt(l,3*R,u,o),l.needsUpdate=!0;const P=l.distanceToTriangle(p,g,d);if(P<v&&(x.copy(g),m&&m.copy(d),v=P,_=R,A=y),P<r)return!0}}}}}),En.releasePrimitive(l),En.releasePrimitive(p),v===1/0?null:(i.point?i.point.copy(x):i.point=x.clone(),i.distance=v,i.faceIndex=_,s&&(s.point?s.point.copy(m):s.point=m.clone(),s.point.applyMatrix4(Ra),x.applyMatrix4(Ra),s.distance=x.sub(s.point).length(),s.faceIndex=A),i)}function $A(n,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=n.geometry,i=t.index?t.index.array:null,s=t.attributes.position;let r,a,c,o,u=0;const f=n._roots;for(let l=0,p=f.length;l<p;l++)r=f[l],a=new Uint32Array(r),c=new Uint16Array(r),o=new Float32Array(r),h(0,u),u+=r.byteLength;function h(l,p,g=!1){const x=l*2;if(Bt(x,c)){const d=en(l,a),m=an(x,c);let v=1/0,_=1/0,A=1/0,M=-1/0,S=-1/0,b=-1/0;for(let y=d,w=d+m;y<w;y++){const R=3*n.resolveTriangleIndex(y);for(let C=0;C<3;C++){let P=R+C;P=i?i[P]:P;const B=s.getX(P),U=s.getY(P),F=s.getZ(P);B<v&&(v=B),B>M&&(M=B),U<_&&(_=U),U>S&&(S=U),F<A&&(A=F),F>b&&(b=F)}}return o[l+0]!==v||o[l+1]!==_||o[l+2]!==A||o[l+3]!==M||o[l+4]!==S||o[l+5]!==b?(o[l+0]=v,o[l+1]=_,o[l+2]=A,o[l+3]=M,o[l+4]=S,o[l+5]=b,!0):!1}else{const d=Qt(l),m=Kt(l,a);let v=g,_=!1,A=!1;if(e){if(!v){const R=d/kt+p/qt,C=m/kt+p/qt;_=e.has(R),A=e.has(C),v=!_&&!A}}else _=!0,A=!0;const M=v||_,S=v||A;let b=!1;M&&(b=h(d,p,v));let y=!1;S&&(y=h(m,p,v));const w=b||y;if(w)for(let R=0;R<3;R++){const C=d+R,P=m+R,B=o[C],U=o[C+3],F=o[P],k=o[P+3];o[l+R]=B<F?B:F,o[l+R+3]=U>k?U:k}return w}}}function ey(n,e,t,i,s,r,a){yt.setBuffer(n._roots[e]),Pl(0,n,t,i,s,r,a),yt.clearBuffer()}function Pl(n,e,t,i,s,r,a){const{float32Array:c,uint16Array:o,uint32Array:u}=yt,f=n*2;if(Bt(f,o)){const l=en(n,u),p=an(f,o);GA(e,t,i,l,p,s,r,a)}else{const l=Qt(n);Hi(l,c,i,r,a)&&Pl(l,e,t,i,s,r,a);const p=Kt(n,u);Hi(p,c,i,r,a)&&Pl(p,e,t,i,s,r,a)}}const ty=["x","y","z"];function ny(n,e,t,i,s,r){yt.setBuffer(n._roots[e]);const a=Il(0,n,t,i,s,r);return yt.clearBuffer(),a}function Il(n,e,t,i,s,r){const{float32Array:a,uint16Array:c,uint32Array:o}=yt;let u=n*2;if(Bt(u,c)){const h=en(n,o),l=an(u,c);return kA(e,t,i,h,l,s,r)}else{const h=_o(n,o),l=ty[h],g=i.direction[l]>=0;let x,d;g?(x=Qt(n),d=Kt(n,o)):(x=Kt(n,o),d=Qt(n));const v=Hi(x,a,i,s,r)?Il(x,e,t,i,s,r):null;if(v){const M=v.point[l];if(g?M<=a[d+h]:M>=a[d+h+3])return v}const A=Hi(d,a,i,s,r)?Il(d,e,t,i,s,r):null;return v&&A?v.distance<=A.distance?v:A:v||A||null}}const Da=new un,Ns=new Gn,Os=new Gn,Cr=new We,nh=new fn,Pa=new fn;function iy(n,e,t,i){yt.setBuffer(n._roots[e]);const s=Ll(0,n,t,i);return yt.clearBuffer(),s}function Ll(n,e,t,i,s=null){const{float32Array:r,uint16Array:a,uint32Array:c}=yt;let o=n*2;if(s===null&&(t.boundingBox||t.computeBoundingBox(),nh.set(t.boundingBox.min,t.boundingBox.max,i),s=nh),Bt(o,a)){const f=e.geometry,h=f.index,l=f.attributes.position,p=t.index,g=t.attributes.position,x=en(n,c),d=an(o,a);if(Cr.copy(i).invert(),t.boundsTree)return Ct(n,r,Pa),Pa.matrix.copy(Cr),Pa.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:v=>Pa.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(i),v.b.applyMatrix4(i),v.c.applyMatrix4(i),v.needsUpdate=!0;for(let _=x,A=d+x;_<A;_++)if(Nt(Os,3*e.resolveTriangleIndex(_),h,l),Os.needsUpdate=!0,v.intersectsTriangle(Os))return!0;return!1}});{const m=yo(t);for(let v=x,_=d+x;v<_;v++){const A=e.resolveTriangleIndex(v);Nt(Ns,3*A,h,l),Ns.a.applyMatrix4(Cr),Ns.b.applyMatrix4(Cr),Ns.c.applyMatrix4(Cr),Ns.needsUpdate=!0;for(let M=0,S=m*3;M<S;M+=3)if(Nt(Os,M,p,g),Os.needsUpdate=!0,Ns.intersectsTriangle(Os))return!0}}}else{const f=Qt(n),h=Kt(n,c);return Ct(f,r,Da),!!(s.intersectsBox(Da)&&Ll(f,e,t,i,s)||(Ct(h,r,Da),s.intersectsBox(Da)&&Ll(h,e,t,i,s)))}}const Ia=new We,xc=new fn,Rr=new fn,sy=new I,ry=new I,ay=new I,oy=new I;function cy(n,e,t,i={},s={},r=0,a=1/0){e.boundingBox||e.computeBoundingBox(),xc.set(e.boundingBox.min,e.boundingBox.max,t),xc.needsUpdate=!0;const c=n.geometry,o=c.attributes.position,u=c.index,f=e.attributes.position,h=e.index,l=En.getPrimitive(),p=En.getPrimitive();let g=sy,x=ry,d=null,m=null;s&&(d=ay,m=oy);let v=1/0,_=null,A=null;return Ia.copy(t).invert(),Rr.matrix.copy(Ia),n.shapecast({boundsTraverseOrder:M=>xc.distanceToBox(M),intersectsBounds:(M,S,b)=>b<v&&b<a?(S&&(Rr.min.copy(M.min),Rr.max.copy(M.max),Rr.needsUpdate=!0),!0):!1,intersectsRange:(M,S)=>{if(e.boundsTree){const b=e.boundsTree;return b.shapecast({boundsTraverseOrder:y=>Rr.distanceToBox(y),intersectsBounds:(y,w,R)=>R<v&&R<a,intersectsRange:(y,w)=>{for(let R=y,C=y+w;R<C;R++){const P=b.resolveTriangleIndex(R);Nt(p,3*P,h,f),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let B=M,U=M+S;B<U;B++){const F=n.resolveTriangleIndex(B);Nt(l,3*F,u,o),l.needsUpdate=!0;const k=l.distanceToTriangle(p,g,d);if(k<v&&(x.copy(g),m&&m.copy(d),v=k,_=B,A=R),k<r)return!0}}}})}else{const b=yo(e);for(let y=0,w=b;y<w;y++){Nt(p,3*y,h,f),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let R=M,C=M+S;R<C;R++){const P=n.resolveTriangleIndex(R);Nt(l,3*P,u,o),l.needsUpdate=!0;const B=l.distanceToTriangle(p,g,d);if(B<v&&(x.copy(g),m&&m.copy(d),v=B,_=R,A=y),B<r)return!0}}}}}),En.releasePrimitive(l),En.releasePrimitive(p),v===1/0?null:(i.point?i.point.copy(x):i.point=x.clone(),i.distance=v,i.faceIndex=_,s&&(s.point?s.point.copy(m):s.point=m.clone(),s.point.applyMatrix4(Ia),x.applyMatrix4(Ia),s.distance=x.sub(s.point).length(),s.faceIndex=A),i)}function ih(n,e,t){return n===null?null:(n.point.applyMatrix4(e.matrixWorld),n.distance=n.point.distanceTo(t.ray.origin),n.object=e,n)}const La=new fn,Fa=new go,sh=new I,rh=new We,ah=new I,_c=["getX","getY","getZ"];class ro extends RA{static serialize(e,t={}){t={cloneBuffers:!0,...t};const i=e.geometry,s=e._roots,r=e._indirectBuffer,a=i.getIndex(),c={version:1,roots:null,index:null,indirectBuffer:null};return t.cloneBuffers?(c.roots=s.map(o=>o.slice()),c.index=a?a.array.slice():null,c.indirectBuffer=r?r.slice():null):(c.roots=s,c.index=a?a.array:null,c.indirectBuffer=r),c}static deserialize(e,t,i={}){i={setIndex:!0,indirect:!!e.indirectBuffer,...i};const{index:s,roots:r,indirectBuffer:a}=e;e.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),o(r));const c=new ro(t,{...i,[Jl]:!0});if(c._roots=r,c._indirectBuffer=a||null,i.setIndex){const u=t.getIndex();if(u===null){const f=new $e(e.index,1,!1);t.setIndex(f)}else u.array!==s&&(u.array.set(s),u.needsUpdate=!0)}return c;function o(u){for(let f=0;f<u.length;f++){const h=u[f],l=new Uint32Array(h),p=new Uint16Array(h);for(let g=0,x=h.byteLength/qt;g<x;g++){const d=kt*g,m=2*d;Bt(m,p)||(l[d+6]=l[d+6]/kt-g)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(e,t={}){t.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use maxLeafSize, instead.'),t={...t,maxLeafSize:t.maxLeafTris}),super(e,t)}shiftTriangleOffsets(e){return super.shiftPrimitiveOffsets(e)}writePrimitiveBounds(e,t,i){const s=this.geometry,r=this._indirectBuffer,a=s.attributes.position,c=s.index?s.index.array:null,u=(r?r[e]:e)*3;let f=u+0,h=u+1,l=u+2;c&&(f=c[f],h=c[h],l=c[l]);for(let p=0;p<3;p++){const g=a[_c[p]](f),x=a[_c[p]](h),d=a[_c[p]](l);let m=g;x<m&&(m=x),d<m&&(m=d);let v=g;x>v&&(v=x),d>v&&(v=d),t[i+p]=m,t[i+p+3]=v}return t}computePrimitiveBounds(e,t,i){const s=this.geometry,r=this._indirectBuffer,a=s.attributes.position,c=s.index?s.index.array:null,o=a.normalized;if(e<0||t+e-i.offset>i.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");const u=a.array,f=a.offset||0;let h=3;a.isInterleavedBufferAttribute&&(h=a.data.stride);const l=["getX","getY","getZ"],p=i.offset;for(let g=e,x=e+t;g<x;g++){const m=(r?r[g]:g)*3,v=(g-p)*6;let _=m+0,A=m+1,M=m+2;c&&(_=c[_],A=c[A],M=c[M]),o||(_=_*h+f,A=A*h+f,M=M*h+f);for(let S=0;S<3;S++){let b,y,w;o?(b=a[l[S]](_),y=a[l[S]](A),w=a[l[S]](M)):(b=u[_+S],y=u[A+S],w=u[M+S]);let R=b;y<R&&(R=y),w<R&&(R=w);let C=b;y>C&&(C=y),w>C&&(C=w);const P=(C-R)/2,B=S*2;i[v+B+0]=R+P,i[v+B+1]=P+(Math.abs(R)+P)*Ka}}return i}raycastObject3D(e,t,i=[]){const{material:s}=e;if(s===void 0)return;rh.copy(e.matrixWorld).invert(),Fa.copy(t.ray).applyMatrix4(rh),ah.setFromMatrixScale(e.matrixWorld),sh.copy(Fa.direction).multiply(ah);const r=sh.length(),a=t.near/r,c=t.far/r;if(t.firstHitOnly===!0){let o=this.raycastFirst(Fa,s,a,c);o=ih(o,e,t),o&&i.push(o)}else{const o=this.raycast(Fa,s,a,c);for(let u=0,f=o.length;u<f;u++){const h=ih(o[u],e,t);h&&i.push(h)}}return i}refit(e=null){return(this.indirect?$A:HA)(this,e)}raycast(e,t=Rn,i=0,s=1/0){const r=this._roots,a=[],c=this.indirect?ey:WA;for(let o=0,u=r.length;o<u;o++)c(this,o,t,e,a,i,s);return a}raycastFirst(e,t=Rn,i=0,s=1/0){const r=this._roots;let a=null;const c=this.indirect?ny:YA;for(let o=0,u=r.length;o<u;o++){const f=c(this,o,t,e,i,s);f!=null&&(a==null||f.distance<a.distance)&&(a=f)}return a}intersectsGeometry(e,t){let i=!1;const s=this._roots,r=this.indirect?iy:qA;for(let a=0,c=s.length;a<c&&(i=r(this,a,e,t),!i);a++);return i}shapecast(e){const t=En.getPrimitive(),i=super.shapecast({...e,intersectsPrimitive:e.intersectsTriangle,scratchPrimitive:t,iterate:this.indirect?VA:zA});return En.releasePrimitive(t),i}bvhcast(e,t,i){let{intersectsRanges:s,intersectsTriangles:r}=i;const a=En.getPrimitive(),c=this.geometry.index,o=this.geometry.attributes.position,u=this.indirect?g=>{const x=this.resolveTriangleIndex(g);Nt(a,x*3,c,o)}:g=>{Nt(a,g*3,c,o)},f=En.getPrimitive(),h=e.geometry.index,l=e.geometry.attributes.position,p=e.indirect?g=>{const x=e.resolveTriangleIndex(g);Nt(f,x*3,h,l)}:g=>{Nt(f,g*3,h,l)};if(r){if(!(e instanceof ro))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');const g=(x,d,m,v,_,A,M,S)=>{for(let b=m,y=m+v;b<y;b++){p(b),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let w=x,R=x+d;w<R;w++)if(u(w),a.needsUpdate=!0,r(a,f,w,b,_,A,M,S))return!0}return!1};if(s){const x=s;s=function(d,m,v,_,A,M,S,b){return x(d,m,v,_,A,M,S,b)?!0:g(d,m,v,_,A,M,S,b)}}else s=g}return super.bvhcast(e,t,{intersectsRanges:s})}intersectsBox(e,t){return La.set(e.min,e.max,t),La.needsUpdate=!0,this.shapecast({intersectsBounds:i=>La.intersectsBox(i),intersectsTriangle:i=>La.intersectsTriangle(i)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,i={},s={},r=0,a=1/0){return(this.indirect?cy:JA)(this,e,t,i,s,r,a)}closestPointToPoint(e,t={},i=0,s=1/0){return FA(this,e,t,i,s)}}function ly(n){switch(n){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function uy(n){switch(n){case 1:return $s;case 2:return gi;case 3:return rt;case 4:return rt}}function oh(n){switch(n){case 1:return fo;case 2:return kr;case 3:return er;case 4:return er}}class Id extends yn{constructor(){super(),this.minFilter=Ge,this.magFilter=Ge,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(e){const t=this.overrideItemSize,i=e.itemSize,s=e.count;if(t!==null){if(i*s%t!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");e.itemSize=t,e.count=s*i/t}const r=e.itemSize,a=e.count,c=e.normalized,o=e.array.constructor,u=o.BYTES_PER_ELEMENT;let f=this._forcedType,h=r;if(f===null)switch(o){case Float32Array:f=ht;break;case Uint8Array:case Uint16Array:case Uint32Array:f=ln;break;case Int8Array:case Int16Array:case Int32Array:f=Ys;break}let l,p,g,x,d=ly(r);switch(f){case ht:g=1,p=uy(r),c&&u===1?(x=o,d+="8",o===Uint8Array?l=Mt:(l=Ja,d+="_SNORM")):(x=Float32Array,d+="32F",l=ht);break;case Ys:d+=u*8+"I",g=c?Math.pow(2,o.BYTES_PER_ELEMENT*8-1):1,p=oh(r),u===1?(x=Int8Array,l=Ja):u===2?(x=Int16Array,l=Ol):(x=Int32Array,l=Ys);break;case ln:d+=u*8+"UI",g=c?Math.pow(2,o.BYTES_PER_ELEMENT*8-1):1,p=oh(r),u===1?(x=Uint8Array,l=Mt):u===2?(x=Uint16Array,l=Zs):(x=Uint32Array,l=ln);break}h===3&&(p===rt||p===er)&&(h=4);const m=Math.ceil(Math.sqrt(a))||1,v=h*m*m,_=new x(v),A=e.normalized;e.normalized=!1;for(let M=0;M<a;M++){const S=h*M;_[S]=e.getX(M)/g,r>=2&&(_[S+1]=e.getY(M)/g),r>=3&&(_[S+2]=e.getZ(M)/g,h===4&&(_[S+3]=1)),r>=4&&(_[S+3]=e.getW(M)/g)}e.normalized=A,this.internalFormat=d,this.format=p,this.type=l,this.image.width=m,this.image.height=m,this.image.data=_,this.needsUpdate=!0,this.dispose(),e.itemSize=i,e.count=s}}class Ld extends Id{constructor(){super(),this._forcedType=ln}}class Fd extends Id{constructor(){super(),this._forcedType=ht}}class fy{constructor(){this.index=new Ld,this.position=new Fd,this.bvhBounds=new yn,this.bvhContents=new yn,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(e){const{geometry:t}=e;if(dy(e,this.bvhBounds,this.bvhContents),this.position.updateFrom(t.attributes.position),e.indirect){const i=e._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==i.length)if(t.index)this._cachedIndexAttr=t.index.clone();else{const s=Pd(Ao(t));this._cachedIndexAttr=new $e(s,1,!1)}hy(t,i,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(t.index)}dispose(){const{index:e,position:t,bvhBounds:i,bvhContents:s}=this;e&&e.dispose(),t&&t.dispose(),i&&i.dispose(),s&&s.dispose()}}function hy(n,e,t){const i=t.array,s=n.index?n.index.array:null;for(let r=0,a=e.length;r<a;r++){const c=3*r,o=3*e[r];for(let u=0;u<3;u++)i[c+u]=s?s[o+u]:o+u}}function dy(n,e,t){const i=n._roots;if(i.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");const s=i[0],r=new Uint16Array(s),a=new Uint32Array(s),c=new Float32Array(s),o=s.byteLength/qt,u=2*Math.ceil(Math.sqrt(o/2)),f=new Float32Array(4*u*u),h=Math.ceil(Math.sqrt(o)),l=new Uint32Array(2*h*h);for(let p=0;p<o;p++){const g=p*qt/4,x=g*2,d=g;for(let m=0;m<3;m++)f[8*p+0+m]=c[d+0+m],f[8*p+4+m]=c[d+3+m];if(Bt(x,r)){const m=an(x,r),v=en(g,a),_=fA|m;l[p*2+0]=_,l[p*2+1]=v}else{const m=a[g+6],v=_o(g,a);l[p*2+0]=v,l[p*2+1]=m}}e.image.data=f,e.image.width=u,e.image.height=u,e.format=rt,e.type=ht,e.internalFormat="RGBA32F",e.minFilter=Ge,e.magFilter=Ge,e.generateMipmaps=!1,e.needsUpdate=!0,e.dispose(),t.image.data=l,t.image.width=h,t.image.height=h,t.format=kr,t.type=ln,t.internalFormat="RG32UI",t.minFilter=Ge,t.magFilter=Ge,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose()}const py=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`,my=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int pointer = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( pointer > - 1 && pointer < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ pointer ];
		pointer --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = currNodeIndex + boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			pointer ++;
			stack[ pointer ] = c2;

			pointer ++;
			stack[ pointer ] = c1;

		}

	}

	return found;

}
`,gy=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`;function Bd(n,e,t=0){if(n.isInterleavedBufferAttribute){const i=n.itemSize;for(let s=0,r=n.count;s<r;s++){const a=s+t;e.setX(a,n.getX(s)),i>=2&&e.setY(a,n.getY(s)),i>=3&&e.setZ(a,n.getZ(s)),i>=4&&e.setW(a,n.getW(s))}}else{const i=e.array,s=i.constructor,r=i.BYTES_PER_ELEMENT*n.itemSize*t;new s(i.buffer,r,n.array.length).set(n.array)}}function Lr(n,e=null){const t=n.array.constructor,i=n.normalized,s=n.itemSize,r=e===null?n.count:e;return new $e(new t(s*r),s,i)}function ks(n,e){if(!n&&!e)return!0;if(!!n!=!!e)return!1;const t=n.count===e.count,i=n.normalized===e.normalized,s=n.array.constructor===e.array.constructor,r=n.itemSize===e.itemSize;return!(!t||!i||!s||!r)}function vy(n){const e=n[0].index!==null,t=new Set(Object.keys(n[0].attributes));if(!n[0].getAttribute("position"))throw new Error("StaticGeometryGenerator: position attribute is required.");for(let i=0;i<n.length;++i){const s=n[i];let r=0;if(e!==(s.index!==null))throw new Error("StaticGeometryGenerator: All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");for(const a in s.attributes){if(!t.has(a))throw new Error('StaticGeometryGenerator: All geometries must have compatible attributes; make sure "'+a+'" attribute exists among all geometries, or in none of them.');r++}if(r!==t.size)throw new Error("StaticGeometryGenerator: All geometries must have the same number of attributes.")}}function xy(n){let e=0;for(let t=0,i=n.length;t<i;t++)e+=n[t].getIndex().count;return e}function _y(n){let e=0;for(let t=0,i=n.length;t<i;t++)e+=n[t].getAttribute("position").count;return e}function Ay(n,e,t){n.index&&n.index.count!==e&&n.setIndex(null);const i=n.attributes;for(const s in i)i[s].count!==t&&n.deleteAttribute(s)}function yy(n,e={},t=new Lt){const{useGroups:i=!1,forceUpdate:s=!1,skipAssigningAttributes:r=[],overwriteIndex:a=!0}=e;vy(n);const c=n[0].index!==null,o=c?xy(n):-1,u=_y(n);if(Ay(t,o,u),i){let h=0;for(let l=0,p=n.length;l<p;l++){const g=n[l];let x;c?x=g.getIndex().count:x=g.getAttribute("position").count,t.addGroup(h,x,l),h+=x}}if(c){let h=!1;if(t.index||(t.setIndex(new $e(new Uint32Array(o),1,!1)),h=!0),h||a){let l=0,p=0;const g=t.getIndex();for(let x=0,d=n.length;x<d;x++){const m=n[x],v=m.getIndex();if(!(!s&&!h&&r[x]))for(let A=0;A<v.count;++A)g.setX(l+A,v.getX(A)+p);l+=v.count,p+=m.getAttribute("position").count}}}const f=Object.keys(n[0].attributes);for(let h=0,l=f.length;h<l;h++){let p=!1;const g=f[h];if(!t.getAttribute(g)){const m=n[0].getAttribute(g);t.setAttribute(g,Lr(m,u)),p=!0}let x=0;const d=t.getAttribute(g);for(let m=0,v=n.length;m<v;m++){const _=n[m],A=!s&&!p&&r[m],M=_.getAttribute(g);if(!A)if(g==="color"&&d.itemSize!==M.itemSize)for(let S=x,b=M.count;S<b;S++)M.setXYZW(S,d.getX(S),d.getY(S),d.getZ(S),1);else Bd(M,d,x);x+=M.count}}}function My(n,e,t){const i=n.index,r=n.attributes.position.count,a=i?i.count:r;let c=n.groups;c.length===0&&(c=[{count:a,start:0,materialIndex:0}]);let o=n.getAttribute("materialIndex");if(!o||o.count!==r){let f;t.length<=255?f=new Uint8Array(r):f=new Uint16Array(r),o=new $e(f,1,!1),n.deleteAttribute("materialIndex"),n.setAttribute("materialIndex",o)}const u=o.array;for(let f=0;f<c.length;f++){const h=c[f],l=h.start,p=h.count,g=Math.min(p,a-l),x=Array.isArray(e)?e[h.materialIndex]:e,d=t.indexOf(x);for(let m=0;m<g;m++){let v=l+m;i&&(v=i.getX(v)),u[v]=d}}}function Sy(n,e){if(!n.index){const t=n.attributes.position.count,i=new Array(t);for(let s=0;s<t;s++)i[s]=s;n.setIndex(i)}if(!n.attributes.normal&&e&&e.includes("normal")&&n.computeVertexNormals(),!n.attributes.uv&&e&&e.includes("uv")){const t=n.attributes.position.count;n.setAttribute("uv",new $e(new Float32Array(t*2),2,!1))}if(!n.attributes.uv2&&e&&e.includes("uv2")){const t=n.attributes.position.count;n.setAttribute("uv2",new $e(new Float32Array(t*2),2,!1))}if(!n.attributes.tangent&&e&&e.includes("tangent"))if(n.attributes.uv&&n.attributes.normal)n.computeTangents();else{const t=n.attributes.position.count;n.setAttribute("tangent",new $e(new Float32Array(t*4),4,!1))}if(!n.attributes.color&&e&&e.includes("color")){const t=n.attributes.position.count,i=new Float32Array(t*4);i.fill(1),n.setAttribute("color",new $e(i,4))}}function tu(n){let e=0;if(n.byteLength!==0){const t=new Uint8Array(n);for(let i=0;i<n.byteLength;i++){const s=t[i];e=(e<<5)-e+s,e|=0}}return e}function ch(n){let e=n.uuid;const t=Object.values(n.attributes);n.index&&(t.push(n.index),e+=`index|${n.index.version}`);const i=Object.keys(t).sort();for(const s of i){const r=t[s];e+=`${s}_${r.version}|`}return e}function lh(n){const e=n.skeleton;return e?(e.boneTexture||e.computeBoneTexture(),`${tu(e.boneTexture.image.data.buffer)}_${e.boneTexture.uuid}`):null}class Ty{constructor(e=null){this.matrixWorld=new We,this.geometryHash=null,this.skeletonHash=null,this.primitiveCount=-1,e!==null&&this.updateFrom(e)}updateFrom(e){const t=e.geometry,i=(t.index?t.index.count:t.attributes.position.count)/3;this.matrixWorld.copy(e.matrixWorld),this.geometryHash=ch(t),this.primitiveCount=i,this.skeletonHash=lh(e)}didChange(e){const t=e.geometry,i=(t.index?t.index.count:t.attributes.position.count)/3;return!(this.matrixWorld.equals(e.matrixWorld)&&this.geometryHash===ch(t)&&this.skeletonHash===lh(e)&&this.primitiveCount===i)}}const es=new I,ts=new I,ns=new I,uh=new nt,Ba=new I,Ac=new I,fh=new nt,hh=new nt,Ua=new We,dh=new We;function ph(n,e,t){const i=n.skeleton,s=n.geometry,r=i.bones,a=i.boneInverses;fh.fromBufferAttribute(s.attributes.skinIndex,e),hh.fromBufferAttribute(s.attributes.skinWeight,e),Ua.elements.fill(0);for(let c=0;c<4;c++){const o=hh.getComponent(c);if(o!==0){const u=fh.getComponent(c);dh.multiplyMatrices(r[u].matrixWorld,a[u]),by(Ua,dh,o)}}return Ua.multiply(n.bindMatrix).premultiply(n.bindMatrixInverse),t.transformDirection(Ua),t}function yc(n,e,t,i,s){Ba.set(0,0,0);for(let r=0,a=n.length;r<a;r++){const c=e[r],o=n[r];c!==0&&(Ac.fromBufferAttribute(o,i),t?Ba.addScaledVector(Ac,c):Ba.addScaledVector(Ac.sub(s),c))}s.add(Ba)}function by(n,e,t){const i=n.elements,s=e.elements;for(let r=0,a=s.length;r<a;r++)i[r]+=s[r]*t}function Ey(n){const{index:e,attributes:t}=n;if(e)for(let i=0,s=e.count;i<s;i+=3){const r=e.getX(i),a=e.getX(i+2);e.setX(i,a),e.setX(i+2,r)}else for(const i in t){const s=t[i],r=s.itemSize;for(let a=0,c=s.count;a<c;a+=3)for(let o=0;o<r;o++){const u=s.getComponent(a,o),f=s.getComponent(a+2,o);s.setComponent(a,o,f),s.setComponent(a+2,o,u)}}return n}function wy(n,e={},t=new Lt){e={applyWorldTransforms:!0,attributes:[],...e};const i=n.geometry,s=e.applyWorldTransforms,r=e.attributes.includes("normal"),a=e.attributes.includes("tangent"),c=i.attributes,o=t.attributes;for(const v in t.attributes)(!e.attributes.includes(v)||!(v in i.attributes))&&t.deleteAttribute(v);!t.index&&i.index&&(t.index=i.index.clone()),o.position||t.setAttribute("position",Lr(c.position)),r&&!o.normal&&c.normal&&t.setAttribute("normal",Lr(c.normal)),a&&!o.tangent&&c.tangent&&t.setAttribute("tangent",Lr(c.tangent)),ks(i.index,t.index),ks(c.position,o.position),r&&ks(c.normal,o.normal),a&&ks(c.tangent,o.tangent);const u=c.position,f=r?c.normal:null,h=a?c.tangent:null,l=i.morphAttributes.position,p=i.morphAttributes.normal,g=i.morphAttributes.tangent,x=i.morphTargetsRelative,d=n.morphTargetInfluences,m=new Ue;m.getNormalMatrix(n.matrixWorld),i.index&&t.index.array.set(i.index.array);for(let v=0,_=c.position.count;v<_;v++)es.fromBufferAttribute(u,v),f&&ts.fromBufferAttribute(f,v),h&&(uh.fromBufferAttribute(h,v),ns.fromBufferAttribute(h,v)),d&&(l&&yc(l,d,x,v,es),p&&yc(p,d,x,v,ts),g&&yc(g,d,x,v,ns)),n.isSkinnedMesh&&(n.applyBoneTransform(v,es),f&&ph(n,v,ts),h&&ph(n,v,ns)),s&&es.applyMatrix4(n.matrixWorld),o.position.setXYZ(v,es.x,es.y,es.z),f&&(s&&ts.applyNormalMatrix(m),o.normal.setXYZ(v,ts.x,ts.y,ts.z)),h&&(s&&ns.transformDirection(n.matrixWorld),o.tangent.setXYZW(v,ns.x,ns.y,ns.z,uh.w));for(const v in e.attributes){const _=e.attributes[v];_==="position"||_==="tangent"||_==="normal"||!(_ in c)||(o[_]||t.setAttribute(_,Lr(c[_])),ks(c[_],o[_]),Bd(c[_],o[_]))}return n.matrixWorld.determinant()<0&&Ey(t),t}class Cy extends Lt{constructor(){super(),this.version=0,this.hash=null,this._diff=new Ty}isCompatible(e,t){const i=e.geometry;for(let s=0;s<t.length;s++){const r=t[s],a=i.attributes[r],c=this.attributes[r];if(a&&!ks(a,c))return!1}return!0}updateFrom(e,t){const i=this._diff;return i.didChange(e)?(wy(e,t,this),i.updateFrom(e),this.version++,this.hash=`${this.uuid}_${this.version}`,!0):!1}}const Fl=0,Ud=1,Nd=2;function Ry(n,e){for(let t=0,i=n.length;t<i;t++)n[t].traverseVisible(r=>{r.isMesh&&e(r)})}function Dy(n){const e=[];for(let t=0,i=n.length;t<i;t++){const s=n[t];Array.isArray(s.material)?e.push(...s.material):e.push(s.material)}return e}function Py(n,e,t){if(n.length===0){e.setIndex(null);const i=e.attributes;for(const s in i)e.deleteAttribute(s);for(const s in t.attributes)e.setAttribute(t.attributes[s],new $e(new Float32Array(0),4,!1))}else yy(n,t,e);for(const i in e.attributes)e.attributes[i].needsUpdate=!0}class Iy{constructor(e){this.objects=null,this.useGroups=!0,this.applyWorldTransforms=!0,this.generateMissingAttributes=!0,this.overwriteIndex=!0,this.attributes=["position","normal","color","tangent","uv","uv2"],this._intermediateGeometry=new Map,this._geometryMergeSets=new WeakMap,this._mergeOrder=[],this._dummyMesh=null,this.setObjects(e||[])}_getDummyMesh(){if(!this._dummyMesh){const e=new nr,t=new Lt;t.setAttribute("position",new $e(new Float32Array(9),3)),this._dummyMesh=new st(t,e)}return this._dummyMesh}_getMeshes(){const e=[];return Ry(this.objects,t=>{e.push(t)}),e.sort((t,i)=>t.uuid>i.uuid?1:t.uuid<i.uuid?-1:0),e.length===0&&e.push(this._getDummyMesh()),e}_updateIntermediateGeometries(){const{_intermediateGeometry:e}=this,t=this._getMeshes(),i=new Set(e.keys()),s={attributes:this.attributes,applyWorldTransforms:this.applyWorldTransforms};for(let r=0,a=t.length;r<a;r++){const c=t[r],o=c.uuid;i.delete(o);let u=e.get(o);(!u||!u.isCompatible(c,this.attributes))&&(u&&u.dispose(),u=new Cy,e.set(o,u)),u.updateFrom(c,s)&&this.generateMissingAttributes&&Sy(u,this.attributes)}i.forEach(r=>{e.delete(r)})}setObjects(e){Array.isArray(e)?this.objects=[...e]:this.objects=[e]}generate(e=new Lt){const{useGroups:t,overwriteIndex:i,_intermediateGeometry:s,_geometryMergeSets:r}=this,a=this._getMeshes(),c=[],o=[],u=r.get(e)||[];this._updateIntermediateGeometries();let f=!1;a.length!==u.length&&(f=!0);for(let l=0,p=a.length;l<p;l++){const g=a[l],x=s.get(g.uuid);o.push(x);const d=u[l];!d||d.uuid!==x.uuid?(c.push(!1),f=!0):d.version!==x.version?c.push(!1):c.push(!0)}Py(o,e,{useGroups:t,forceUpdate:f,skipAssigningAttributes:c,overwriteIndex:i}),f&&e.dispose(),r.set(e,o.map(l=>({version:l.version,uuid:l.uuid})));let h=Fl;return f?h=Nd:c.includes(!1)&&(h=Ud),{changeType:h,materials:Dy(a),geometry:e}}}function Ly(n){const e=new Set;for(let t=0,i=n.length;t<i;t++){const s=n[t];for(const r in s){const a=s[r];a&&a.isTexture&&e.add(a)}}return Array.from(e)}function Fy(n){const e=[],t=new Set;for(let s=0,r=n.length;s<r;s++)n[s].traverse(a=>{a.visible&&(a.isRectAreaLight||a.isSpotLight||a.isPointLight||a.isDirectionalLight)&&(e.push(a),a.iesMap&&t.add(a.iesMap))});const i=Array.from(t).sort((s,r)=>s.uuid<r.uuid?1:s.uuid>r.uuid?-1:0);return{lights:e,iesTextures:i}}class By{get initialized(){return!!this.bvh}constructor(e){this.bvhOptions={},this.attributes=["position","normal","tangent","color","uv","uv2"],this.generateBVH=!0,this.bvh=null,this.geometry=new Lt,this.staticGeometryGenerator=new Iy(e),this._bvhWorker=null,this._pendingGenerate=null,this._buildAsync=!1,this._materialUuids=null}setObjects(e){this.staticGeometryGenerator.setObjects(e)}setBVHWorker(e){this._bvhWorker=e}async generateAsync(e=null){if(!this._bvhWorker)throw new Error('PathTracingSceneGenerator: "setBVHWorker" must be called before "generateAsync" can be called.');if(this.bvh instanceof Promise)return this._pendingGenerate||(this._pendingGenerate=new Promise(async()=>(await this.bvh,this._pendingGenerate=null,this.generateAsync(e)))),this._pendingGenerate;{this._buildAsync=!0;const t=this.generate(e);return this._buildAsync=!1,t.bvh=this.bvh=await t.bvh,t}}generate(e=null){const{staticGeometryGenerator:t,geometry:i,attributes:s}=this,r=t.objects;t.attributes=s,r.forEach(l=>{l.traverse(p=>{p.isSkinnedMesh&&p.skeleton&&p.skeleton.update()})});const a=t.generate(i),c=a.materials;let o=a.changeType!==Fl||this._materialUuids===null||this._materialUuids.length!==length;if(!o){for(let l=0,p=c.length;l<p;l++)if(c[l].uuid!==this._materialUuids[l]){o=!0;break}}const u=Ly(c),{lights:f,iesTextures:h}=Fy(r);if(o&&(My(i,c,c),this._materialUuids=c.map(l=>l.uuid)),this.generateBVH){if(this.bvh instanceof Promise)throw new Error("PathTracingSceneGenerator: BVH is already building asynchronously.");if(a.changeType===Nd){const l={strategy:wd,maxLeafTris:1,indirect:!0,onProgress:e,...this.bvhOptions};this._buildAsync?this.bvh=this._bvhWorker.generate(i,l):this.bvh=new ro(i,l)}else a.changeType===Ud&&this.bvh.refit()}return{bvhChanged:a.changeType!==Fl,bvh:this.bvh,needsMaterialIndexUpdate:o,lights:f,iesTextures:h,geometry:i,materials:c,textures:u,objects:r}}}class nu extends St{set needsUpdate(e){super.needsUpdate=!0,this.dispatchEvent({type:"recompilation"})}constructor(e){super(e);for(const t in this.uniforms)Object.defineProperty(this,t,{get(){return this.uniforms[t].value},set(i){this.uniforms[t].value=i}})}setDefine(e,t=void 0){if(t==null){if(e in this.defines)return delete this.defines[e],this.needsUpdate=!0,!0}else if(this.defines[e]!==t)return this.defines[e]=t,this.needsUpdate=!0,!0;return!1}}class Uy extends nu{constructor(e){super({blending:Rt,uniforms:{target1:{value:null},target2:{value:null},opacity:{value:1}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				uniform float opacity;

				uniform sampler2D target1;
				uniform sampler2D target2;

				varying vec2 vUv;

				void main() {

					vec4 color1 = texture2D( target1, vUv );
					vec4 color2 = texture2D( target2, vUv );

					float invOpacity = 1.0 - opacity;
					float totalAlpha = color1.a * invOpacity + color2.a * opacity;

					if ( color1.a != 0.0 || color2.a != 0.0 ) {

						gl_FragColor.rgb = color1.rgb * ( invOpacity * color1.a / totalAlpha ) + color2.rgb * ( opacity * color2.a / totalAlpha );
						gl_FragColor.a = totalAlpha;

					} else {

						gl_FragColor = vec4( 0.0 );

					}

				}`}),this.setValues(e)}}function Na(n=1){let e="uint";return n>1&&(e="uvec"+n),`
		${e} sobolReverseBits( ${e} x ) {

			x = ( ( ( x & 0xaaaaaaaau ) >> 1 ) | ( ( x & 0x55555555u ) << 1 ) );
			x = ( ( ( x & 0xccccccccu ) >> 2 ) | ( ( x & 0x33333333u ) << 2 ) );
			x = ( ( ( x & 0xf0f0f0f0u ) >> 4 ) | ( ( x & 0x0f0f0f0fu ) << 4 ) );
			x = ( ( ( x & 0xff00ff00u ) >> 8 ) | ( ( x & 0x00ff00ffu ) << 8 ) );
			return ( ( x >> 16 ) | ( x << 16 ) );

		}

		${e} sobolHashCombine( uint seed, ${e} v ) {

			return seed ^ ( v + ${e}( ( seed << 6 ) + ( seed >> 2 ) ) );

		}

		${e} sobolLaineKarrasPermutation( ${e} x, ${e} seed ) {

			x += seed;
			x ^= x * 0x6c50b47cu;
			x ^= x * 0xb82f1e52u;
			x ^= x * 0xc7afe638u;
			x ^= x * 0x8d22f6e6u;
			return x;

		}

		${e} nestedUniformScrambleBase2( ${e} x, ${e} seed ) {

			x = sobolLaineKarrasPermutation( x, seed );
			x = sobolReverseBits( x );
			return x;

		}
	`}function Oa(n=1){let e="uint",t="float",i="",s=".r",r="1u";return n>1&&(e="uvec"+n,t="vec"+n,i=n+"",n===2?(s=".rg",r="uvec2( 1u, 2u )"):n===3?(s=".rgb",r="uvec3( 1u, 2u, 3u )"):(s="",r="uvec4( 1u, 2u, 3u, 4u )")),`

		${t} sobol${i}( int effect ) {

			uint seed = sobolGetSeed( sobolBounceIndex, uint( effect ) );
			uint index = sobolPathIndex;

			uint shuffle_seed = sobolHashCombine( seed, 0u );
			uint shuffled_index = nestedUniformScrambleBase2( sobolReverseBits( index ), shuffle_seed );
			${t} sobol_pt = sobolGetTexturePoint( shuffled_index )${s};
			${e} result = ${e}( sobol_pt * 16777216.0 );

			${e} seed2 = sobolHashCombine( seed, ${r} );
			result = nestedUniformScrambleBase2( result, seed2 );

			return SOBOL_FACTOR * ${t}( result >> 8 );

		}
	`}const Od=`

	// Utils
	const float SOBOL_FACTOR = 1.0 / 16777216.0;
	const uint SOBOL_MAX_POINTS = 256u * 256u;

	${Na(1)}
	${Na(2)}
	${Na(3)}
	${Na(4)}

	uint sobolHash( uint x ) {

		// finalizer from murmurhash3
		x ^= x >> 16;
		x *= 0x85ebca6bu;
		x ^= x >> 13;
		x *= 0xc2b2ae35u;
		x ^= x >> 16;
		return x;

	}

`,Ny=`

	const uint SOBOL_DIRECTIONS_1[ 32 ] = uint[ 32 ](
		0x80000000u, 0xc0000000u, 0xa0000000u, 0xf0000000u,
		0x88000000u, 0xcc000000u, 0xaa000000u, 0xff000000u,
		0x80800000u, 0xc0c00000u, 0xa0a00000u, 0xf0f00000u,
		0x88880000u, 0xcccc0000u, 0xaaaa0000u, 0xffff0000u,
		0x80008000u, 0xc000c000u, 0xa000a000u, 0xf000f000u,
		0x88008800u, 0xcc00cc00u, 0xaa00aa00u, 0xff00ff00u,
		0x80808080u, 0xc0c0c0c0u, 0xa0a0a0a0u, 0xf0f0f0f0u,
		0x88888888u, 0xccccccccu, 0xaaaaaaaau, 0xffffffffu
	);

	const uint SOBOL_DIRECTIONS_2[ 32 ] = uint[ 32 ](
		0x80000000u, 0xc0000000u, 0x60000000u, 0x90000000u,
		0xe8000000u, 0x5c000000u, 0x8e000000u, 0xc5000000u,
		0x68800000u, 0x9cc00000u, 0xee600000u, 0x55900000u,
		0x80680000u, 0xc09c0000u, 0x60ee0000u, 0x90550000u,
		0xe8808000u, 0x5cc0c000u, 0x8e606000u, 0xc5909000u,
		0x6868e800u, 0x9c9c5c00u, 0xeeee8e00u, 0x5555c500u,
		0x8000e880u, 0xc0005cc0u, 0x60008e60u, 0x9000c590u,
		0xe8006868u, 0x5c009c9cu, 0x8e00eeeeu, 0xc5005555u
	);

	const uint SOBOL_DIRECTIONS_3[ 32 ] = uint[ 32 ](
		0x80000000u, 0xc0000000u, 0x20000000u, 0x50000000u,
		0xf8000000u, 0x74000000u, 0xa2000000u, 0x93000000u,
		0xd8800000u, 0x25400000u, 0x59e00000u, 0xe6d00000u,
		0x78080000u, 0xb40c0000u, 0x82020000u, 0xc3050000u,
		0x208f8000u, 0x51474000u, 0xfbea2000u, 0x75d93000u,
		0xa0858800u, 0x914e5400u, 0xdbe79e00u, 0x25db6d00u,
		0x58800080u, 0xe54000c0u, 0x79e00020u, 0xb6d00050u,
		0x800800f8u, 0xc00c0074u, 0x200200a2u, 0x50050093u
	);

	const uint SOBOL_DIRECTIONS_4[ 32 ] = uint[ 32 ](
		0x80000000u, 0x40000000u, 0x20000000u, 0xb0000000u,
		0xf8000000u, 0xdc000000u, 0x7a000000u, 0x9d000000u,
		0x5a800000u, 0x2fc00000u, 0xa1600000u, 0xf0b00000u,
		0xda880000u, 0x6fc40000u, 0x81620000u, 0x40bb0000u,
		0x22878000u, 0xb3c9c000u, 0xfb65a000u, 0xddb2d000u,
		0x78022800u, 0x9c0b3c00u, 0x5a0fb600u, 0x2d0ddb00u,
		0xa2878080u, 0xf3c9c040u, 0xdb65a020u, 0x6db2d0b0u,
		0x800228f8u, 0x400b3cdcu, 0x200fb67au, 0xb00ddb9du
	);

	uint getMaskedSobol( uint index, uint directions[ 32 ] ) {

		uint X = 0u;
		for ( int bit = 0; bit < 32; bit ++ ) {

			uint mask = ( index >> bit ) & 1u;
			X ^= mask * directions[ bit ];

		}
		return X;

	}

	vec4 generateSobolPoint( uint index ) {

		if ( index >= SOBOL_MAX_POINTS ) {

			return vec4( 0.0 );

		}

		// NOTE: this sobol "direction" is also available but we can't write out 5 components
		// uint x = index & 0x00ffffffu;
		uint x = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_1 ) ) & 0x00ffffffu;
		uint y = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_2 ) ) & 0x00ffffffu;
		uint z = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_3 ) ) & 0x00ffffffu;
		uint w = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_4 ) ) & 0x00ffffffu;

		return vec4( x, y, z, w ) * SOBOL_FACTOR;

	}

`,Oy=`

	// Seeds
	uniform sampler2D sobolTexture;
	uint sobolPixelIndex = 0u;
	uint sobolPathIndex = 0u;
	uint sobolBounceIndex = 0u;

	uint sobolGetSeed( uint bounce, uint effect ) {

		return sobolHash(
			sobolHashCombine(
				sobolHashCombine(
					sobolHash( bounce ),
					sobolPixelIndex
				),
				effect
			)
		);

	}

	vec4 sobolGetTexturePoint( uint index ) {

		if ( index >= SOBOL_MAX_POINTS ) {

			index = index % SOBOL_MAX_POINTS;

		}

		uvec2 dim = uvec2( textureSize( sobolTexture, 0 ).xy );
		uint y = index / dim.x;
		uint x = index - y * dim.x;
		vec2 uv = vec2( x, y ) / vec2( dim );
		return texture( sobolTexture, uv );

	}

	${Oa(1)}
	${Oa(2)}
	${Oa(3)}
	${Oa(4)}

`;class zy extends nu{constructor(){super({blending:Rt,uniforms:{resolution:{value:new Se}},vertexShader:`

				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`

				${Od}
				${Ny}

				varying vec2 vUv;
				uniform vec2 resolution;
				void main() {

					uint index = uint( gl_FragCoord.y ) * uint( resolution.x ) + uint( gl_FragCoord.x );
					gl_FragColor = generateSobolPoint( index );

				}
			`})}}class Hy{generate(e,t=256){const i=new _t(t,t,{type:ht,format:rt,minFilter:Ge,magFilter:Ge,generateMipmaps:!1}),s=e.getRenderTarget();e.setRenderTarget(i);const r=new sr(new zy);return r.material.resolution.set(t,t),r.render(e),e.setRenderTarget(s),r.dispose(),i}}class Gy extends cn{set bokehSize(e){this.fStop=this.getFocalLength()/e}get bokehSize(){return this.getFocalLength()/this.fStop}constructor(...e){super(...e),this.fStop=1.4,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=25,this.anamorphicRatio=1}copy(e,t){return super.copy(e,t),this.fStop=e.fStop,this.apertureBlades=e.apertureBlades,this.apertureRotation=e.apertureRotation,this.focusDistance=e.focusDistance,this.anamorphicRatio=e.anamorphicRatio,this}}class ky{constructor(){this.bokehSize=0,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=10,this.anamorphicRatio=1}updateFrom(e){e instanceof Gy?(this.bokehSize=e.bokehSize,this.apertureBlades=e.apertureBlades,this.apertureRotation=e.apertureRotation,this.focusDistance=e.focusDistance,this.anamorphicRatio=e.anamorphicRatio):(this.bokehSize=0,this.apertureRotation=0,this.apertureBlades=0,this.focusDistance=10,this.anamorphicRatio=1)}}function Mc(n){const e=new Uint16Array(n.length);for(let t=0,i=n.length;t<i;++t)e[t]=fi.toHalfFloat(n[t]);return e}function mh(n,e,t=0,i=n.length){let s=t,r=t+i-1;for(;s<r;){const a=s+r>>1;n[a]<e?s=a+1:r=a}return s-t}function Vy(n,e,t){return .2126*n+.7152*e+.0722*t}function Wy(n,e=Gt){const t=n.clone();t.source=new ho({...t.image});const{width:i,height:s,data:r}=t.image;let a=r;if(t.type!==e){e===Gt?a=new Uint16Array(r.length):a=new Float32Array(r.length);let c;r instanceof Int8Array||r instanceof Int16Array||r instanceof Int32Array?c=2**(8*r.BYTES_PER_ELEMENT-1)-1:c=2**(8*r.BYTES_PER_ELEMENT)-1;for(let o=0,u=r.length;o<u;o++){let f=r[o];t.type===Gt&&(f=fi.fromHalfFloat(r[o])),t.type!==ht&&t.type!==Gt&&(f/=c),e===Gt&&(a[o]=fi.toHalfFloat(f))}t.image.data=a,t.type=e}if(t.flipY){const c=a;a=a.slice();for(let o=0;o<s;o++)for(let u=0;u<i;u++){const f=s-o-1,h=4*(o*i+u),l=4*(f*i+u);a[l+0]=c[h+0],a[l+1]=c[h+1],a[l+2]=c[h+2],a[l+3]=c[h+3]}t.flipY=!1,t.image.data=a}return t}class Xy{constructor(){const e=new yn(Mc(new Float32Array([0,0,0,0])),1,1);e.type=Gt,e.format=rt,e.minFilter=Je,e.magFilter=Je,e.wrapS=zn,e.wrapT=zn,e.generateMipmaps=!1,e.needsUpdate=!0;const t=new yn(Mc(new Float32Array([0,1])),1,2);t.type=Gt,t.format=$s,t.minFilter=Je,t.magFilter=Je,t.generateMipmaps=!1,t.needsUpdate=!0;const i=new yn(Mc(new Float32Array([0,0,1,1])),2,2);i.type=Gt,i.format=$s,i.minFilter=Je,i.magFilter=Je,i.generateMipmaps=!1,i.needsUpdate=!0,this.map=e,this.marginalWeights=t,this.conditionalWeights=i,this.totalSum=0}dispose(){this.marginalWeights.dispose(),this.conditionalWeights.dispose(),this.map.dispose()}updateFrom(e){const t=Wy(e);t.wrapS=zn,t.wrapT=Jt;const{width:i,height:s,data:r}=t.image,a=new Float32Array(i*s),c=new Float32Array(i*s),o=new Float32Array(s),u=new Float32Array(s);let f=0,h=0;for(let d=0;d<s;d++){let m=0;for(let v=0;v<i;v++){const _=d*i+v,A=fi.fromHalfFloat(r[4*_+0]),M=fi.fromHalfFloat(r[4*_+1]),S=fi.fromHalfFloat(r[4*_+2]),b=Vy(A,M,S);m+=b,f+=b,a[_]=b,c[_]=m}if(m!==0)for(let v=d*i,_=d*i+i;v<_;v++)a[v]/=m,c[v]/=m;h+=m,o[d]=m,u[d]=h}if(h!==0)for(let d=0,m=o.length;d<m;d++)o[d]/=h,u[d]/=h;const l=new Uint16Array(s),p=new Uint16Array(i*s);for(let d=0;d<s;d++){const m=(d+1)/s,v=mh(u,m);l[d]=fi.toHalfFloat((v+.5)/s)}for(let d=0;d<s;d++)for(let m=0;m<i;m++){const v=d*i+m,_=(m+1)/i,A=mh(c,_,d*i,i);p[v]=fi.toHalfFloat((A+.5)/i)}this.dispose();const{marginalWeights:g,conditionalWeights:x}=this;g.image={width:s,height:1,data:l},g.needsUpdate=!0,x.image={width:i,height:s,data:p},x.needsUpdate=!0,this.totalSum=f,this.map=t}}const Sc=6,Yy=0,qy=1,Qy=2,Ky=3,jy=4,Un=new I,dn=new I,gh=new We,zs=new wn,vh=new I,Hs=new I,Zy=new I(0,1,0);class Jy{constructor(){const e=new yn(new Float32Array(4),1,1);e.format=rt,e.type=ht,e.wrapS=Jt,e.wrapT=Jt,e.generateMipmaps=!1,e.minFilter=Ge,e.magFilter=Ge,this.tex=e,this.count=0}updateFrom(e,t=[]){const i=this.tex,s=Math.max(e.length*Sc,1),r=Math.ceil(Math.sqrt(s));i.image.width!==r&&(i.dispose(),i.image.data=new Float32Array(r*r*4),i.image.width=r,i.image.height=r);const a=i.image.data;for(let o=0,u=e.length;o<u;o++){const f=e[o],h=o*Sc*4;let l=0;for(let g=0;g<Sc*4;g++)a[h+g]=0;f.getWorldPosition(dn),a[h+l++]=dn.x,a[h+l++]=dn.y,a[h+l++]=dn.z;let p=Yy;if(f.isRectAreaLight&&f.isCircular?p=qy:f.isSpotLight?p=Qy:f.isDirectionalLight?p=Ky:f.isPointLight&&(p=jy),a[h+l++]=p,a[h+l++]=f.color.r,a[h+l++]=f.color.g,a[h+l++]=f.color.b,a[h+l++]=f.intensity,f.getWorldQuaternion(zs),f.isRectAreaLight)Un.set(f.width,0,0).applyQuaternion(zs),a[h+l++]=Un.x,a[h+l++]=Un.y,a[h+l++]=Un.z,l++,dn.set(0,f.height,0).applyQuaternion(zs),a[h+l++]=dn.x,a[h+l++]=dn.y,a[h+l++]=dn.z,a[h+l++]=Un.cross(dn).length()*(f.isCircular?Math.PI/4:1);else if(f.isSpotLight){const g=f.radius||0;vh.setFromMatrixPosition(f.matrixWorld),Hs.setFromMatrixPosition(f.target.matrixWorld),gh.lookAt(vh,Hs,Zy),zs.setFromRotationMatrix(gh),Un.set(1,0,0).applyQuaternion(zs),a[h+l++]=Un.x,a[h+l++]=Un.y,a[h+l++]=Un.z,l++,dn.set(0,1,0).applyQuaternion(zs),a[h+l++]=dn.x,a[h+l++]=dn.y,a[h+l++]=dn.z,a[h+l++]=Math.PI*g*g,a[h+l++]=g,a[h+l++]=f.decay,a[h+l++]=f.distance,a[h+l++]=Math.cos(f.angle),a[h+l++]=Math.cos(f.angle*(1-f.penumbra)),a[h+l++]=f.iesMap?t.indexOf(f.iesMap):-1}else if(f.isPointLight){const g=Un.setFromMatrixPosition(f.matrixWorld);a[h+l++]=g.x,a[h+l++]=g.y,a[h+l++]=g.z,l++,l+=4,l+=1,a[h+l++]=f.decay,a[h+l++]=f.distance}else if(f.isDirectionalLight){const g=Un.setFromMatrixPosition(f.matrixWorld),x=dn.setFromMatrixPosition(f.target.matrixWorld);Hs.subVectors(g,x).normalize(),a[h+l++]=Hs.x,a[h+l++]=Hs.y,a[h+l++]=Hs.z}}this.count=e.length;const c=tu(a.buffer);return this.hash!==c?(this.hash=c,i.needsUpdate=!0,!0):!1}}function xh(n,e,t,i,s){if(e>i)throw new Error;const r=n.length/e,a=n.constructor.BYTES_PER_ELEMENT*8;let c=1;switch(n.constructor){case Uint8Array:case Uint16Array:case Uint32Array:c=2**a-1;break;case Int8Array:case Int16Array:case Int32Array:c=2**(a-1)-1;break}for(let o=0;o<r;o++){const u=4*o,f=e*o;for(let h=0;h<i;h++)t[s+u+h]=e>=h+1?n[f+h]/c:0}}class $y extends po{constructor(){super(),this._textures=[],this.type=ht,this.format=rt,this.internalFormat="RGBA32F"}updateAttribute(e,t){const i=this._textures[e];i.updateFrom(t);const s=i.image,r=this.image;if(s.width!==r.width||s.height!==r.height)throw new Error("FloatAttributeTextureArray: Attribute must be the same dimensions when updating single layer.");const{width:a,height:c,data:o}=r,f=a*c*4*e;let h=t.itemSize;h===3&&(h=4),xh(i.image.data,h,o,4,f),this.dispose(),this.needsUpdate=!0}setAttributes(e){const t=e[0].count,i=e.length;for(let h=0,l=i;h<l;h++)if(e[h].count!==t)throw new Error("FloatAttributeTextureArray: All attributes must have the same item count.");const s=this._textures;for(;s.length<i;){const h=new Fd;s.push(h)}for(;s.length>i;)s.pop();for(let h=0,l=i;h<l;h++)s[h].updateFrom(e[h]);const a=s[0].image,c=this.image;(a.width!==c.width||a.height!==c.height||a.depth!==i)&&(c.width=a.width,c.height=a.height,c.depth=i,c.data=new Float32Array(c.width*c.height*c.depth*4));const{data:o,width:u,height:f}=c;for(let h=0,l=i;h<l;h++){const p=s[h],x=u*f*4*h;let d=e[h].itemSize;d===3&&(d=4),xh(p.image.data,d,o,4,x)}this.dispose(),this.needsUpdate=!0}}class eM extends $y{updateNormalAttribute(e){this.updateAttribute(0,e)}updateTangentAttribute(e){this.updateAttribute(1,e)}updateUvAttribute(e){this.updateAttribute(2,e)}updateColorAttribute(e){this.updateAttribute(3,e)}updateFrom(e,t,i,s){this.setAttributes([e,t,i,s])}}function iu(n,e){return n.uuid<e.uuid?1:n.uuid>e.uuid?-1:0}function Bl(n){return`${n.source.uuid}:${n.colorSpace}`}function tM(n){const e=new Set,t=[];for(let i=0,s=n.length;i<s;i++){const r=n[i],a=Bl(r);e.has(a)||(e.add(a),t.push(r))}return t}function nM(n){const e=n.map(i=>i.iesMap||null).filter(i=>i),t=new Set(e);return Array.from(t).sort(iu)}function iM(n){const e=new Set;for(let i=0,s=n.length;i<s;i++){const r=n[i];for(const a in r){const c=r[a];c&&c.isTexture&&e.add(c)}}const t=Array.from(e);return tM(t).sort(iu)}function sM(n){const e=[];return n.traverse(t=>{t.visible&&(t.isRectAreaLight||t.isSpotLight||t.isPointLight||t.isDirectionalLight)&&e.push(t)}),e.sort(iu)}const su=47,_h=su*4;class rM{constructor(){this._features={}}isUsed(e){return e in this._features}setUsed(e,t=!0){t===!1?delete this._features[e]:this._features[e]=!0}reset(){this._features={}}}class aM extends yn{constructor(){super(new Float32Array(4),1,1),this.format=rt,this.type=ht,this.wrapS=Jt,this.wrapT=Jt,this.minFilter=Ge,this.magFilter=Ge,this.generateMipmaps=!1,this.features=new rM}updateFrom(e,t){function i(g,x,d=-1){if(x in g&&g[x]){const m=Bl(g[x]);return h[m]}else return d}function s(g,x,d){return x in g?g[x]:d}function r(g,x,d,m){const v=g[x]&&g[x].isTexture?g[x]:null;if(v){v.matrixAutoUpdate&&v.updateMatrix();const _=v.matrix.elements;let A=0;d[m+A++]=_[0],d[m+A++]=_[3],d[m+A++]=_[6],A++,d[m+A++]=_[1],d[m+A++]=_[4],d[m+A++]=_[7],A++}return 8}let a=0;const c=e.length*su,o=Math.ceil(Math.sqrt(c))||1,{image:u,features:f}=this,h={};for(let g=0,x=t.length;g<x;g++)h[Bl(t[g])]=g;u.width!==o&&(this.dispose(),u.data=new Float32Array(o*o*4),u.width=o,u.height=o);const l=u.data;f.reset();for(let g=0,x=e.length;g<x;g++){const d=e[g];if(d.isFogVolumeMaterial){f.setUsed("FOG");for(let _=0;_<_h;_++)l[a+_]=0;l[a+0*4+0]=d.color.r,l[a+0*4+1]=d.color.g,l[a+0*4+2]=d.color.b,l[a+2*4+3]=s(d,"emissiveIntensity",0),l[a+3*4+0]=d.emissive.r,l[a+3*4+1]=d.emissive.g,l[a+3*4+2]=d.emissive.b,l[a+13*4+1]=d.density,l[a+13*4+3]=0,l[a+14*4+2]=4,a+=_h;continue}l[a++]=d.color.r,l[a++]=d.color.g,l[a++]=d.color.b,l[a++]=i(d,"map"),l[a++]=s(d,"metalness",0),l[a++]=i(d,"metalnessMap"),l[a++]=s(d,"roughness",0),l[a++]=i(d,"roughnessMap"),l[a++]=s(d,"ior",1.5),l[a++]=s(d,"transmission",0),l[a++]=i(d,"transmissionMap"),l[a++]=s(d,"emissiveIntensity",0),"emissive"in d?(l[a++]=d.emissive.r,l[a++]=d.emissive.g,l[a++]=d.emissive.b):(l[a++]=0,l[a++]=0,l[a++]=0),l[a++]=i(d,"emissiveMap"),l[a++]=i(d,"normalMap"),"normalScale"in d?(l[a++]=d.normalScale.x,l[a++]=d.normalScale.y):(l[a++]=1,l[a++]=1),l[a++]=s(d,"clearcoat",0),l[a++]=i(d,"clearcoatMap"),l[a++]=s(d,"clearcoatRoughness",0),l[a++]=i(d,"clearcoatRoughnessMap"),l[a++]=i(d,"clearcoatNormalMap"),"clearcoatNormalScale"in d?(l[a++]=d.clearcoatNormalScale.x,l[a++]=d.clearcoatNormalScale.y):(l[a++]=1,l[a++]=1),a++,l[a++]=s(d,"sheen",0),"sheenColor"in d?(l[a++]=d.sheenColor.r,l[a++]=d.sheenColor.g,l[a++]=d.sheenColor.b):(l[a++]=0,l[a++]=0,l[a++]=0),l[a++]=i(d,"sheenColorMap"),l[a++]=s(d,"sheenRoughness",0),l[a++]=i(d,"sheenRoughnessMap"),l[a++]=i(d,"iridescenceMap"),l[a++]=i(d,"iridescenceThicknessMap"),l[a++]=s(d,"iridescence",0),l[a++]=s(d,"iridescenceIOR",1.3);const m=s(d,"iridescenceThicknessRange",[100,400]);l[a++]=m[0],l[a++]=m[1],"specularColor"in d?(l[a++]=d.specularColor.r,l[a++]=d.specularColor.g,l[a++]=d.specularColor.b):(l[a++]=1,l[a++]=1,l[a++]=1),l[a++]=i(d,"specularColorMap"),l[a++]=s(d,"specularIntensity",1),l[a++]=i(d,"specularIntensityMap");const v=s(d,"thickness",0)===0&&s(d,"attenuationDistance",1/0)===1/0;if(l[a++]=Number(v),a++,"attenuationColor"in d?(l[a++]=d.attenuationColor.r,l[a++]=d.attenuationColor.g,l[a++]=d.attenuationColor.b):(l[a++]=1,l[a++]=1,l[a++]=1),l[a++]=s(d,"attenuationDistance",1/0),l[a++]=i(d,"alphaMap"),l[a++]=d.opacity,l[a++]=d.alphaTest,!v&&d.transmission>0)l[a++]=0;else switch(d.side){case Rn:l[a++]=1;break;case Ut:l[a++]=-1;break;case Yt:l[a++]=0;break}l[a++]=Number(s(d,"matte",!1)),l[a++]=Number(s(d,"castShadow",!0)),l[a++]=Number(d.vertexColors)|Number(d.flatShading)<<1,l[a++]=Number(d.transparent),a+=r(d,"map",l,a),a+=r(d,"metalnessMap",l,a),a+=r(d,"roughnessMap",l,a),a+=r(d,"transmissionMap",l,a),a+=r(d,"emissiveMap",l,a),a+=r(d,"normalMap",l,a),a+=r(d,"clearcoatMap",l,a),a+=r(d,"clearcoatNormalMap",l,a),a+=r(d,"clearcoatRoughnessMap",l,a),a+=r(d,"sheenColorMap",l,a),a+=r(d,"sheenRoughnessMap",l,a),a+=r(d,"iridescenceMap",l,a),a+=r(d,"iridescenceThicknessMap",l,a),a+=r(d,"specularColorMap",l,a),a+=r(d,"specularIntensityMap",l,a),a+=r(d,"alphaMap",l,a)}const p=tu(l.buffer);return this.hash!==p?(this.hash=p,this.needsUpdate=!0,!0):!1}}const Ah=new Te;function oM(n){return n?`${n.uuid}:${n.version}`:null}function cM(n,e){for(const t in e)t in n&&(n[t]=e[t])}class yh extends Yp{constructor(e,t,i){const s={format:rt,type:Mt,minFilter:Je,magFilter:Je,wrapS:zn,wrapT:zn,generateMipmaps:!1,...i};super(e,t,1,s),cM(this.texture,s),this.texture.setTextures=(...a)=>{this.setTextures(...a)},this.hashes=[null];const r=new sr(new lM);this.fsQuad=r}setTextures(e,t,i=this.width,s=this.height){const r=e.getRenderTarget(),a=e.toneMapping,c=e.getClearAlpha();e.getClearColor(Ah);const o=t.length||1;(i!==this.width||s!==this.height||this.depth!==o)&&(this.setSize(i,s,o),this.hashes=new Array(o).fill(null)),e.setClearColor(0,0),e.toneMapping=On;const u=this.fsQuad,f=this.hashes;let h=!1;for(let l=0,p=o;l<p;l++){const g=t[l],x=oM(g);g&&(f[l]!==x||g.isWebGLRenderTarget)&&(g.matrixAutoUpdate=!1,g.matrix.identity(),u.material.map=g,e.setRenderTarget(this,l),u.render(e),g.updateMatrix(),g.matrixAutoUpdate=!0,f[l]=x,h=!0)}return u.material.map=null,e.setClearColor(Ah,c),e.setRenderTarget(r),e.toneMapping=a,h}dispose(){super.dispose(),this.fsQuad.dispose()}}let lM=class extends St{get map(){return this.uniforms.map.value}set map(e){this.uniforms.map.value=e}constructor(){super({uniforms:{map:{value:null}},vertexShader:`
				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
				uniform sampler2D map;
				varying vec2 vUv;
				void main() {

					gl_FragColor = texture2D( map, vUv );

				}
			`})}};function uM(n,e=Math.random()){for(let t=n.length-1;t>0;t--){const i=Math.floor(e()*(t+1)),s=n[t];n[t]=n[i],n[i]=s}return n}class fM{constructor(e,t,i=Math.random){const s=e**t,r=new Uint16Array(s);let a=s;for(let c=0;c<s;c++)r[c]=c;this.samples=new Float32Array(t),this.strataCount=e,this.reset=function(){for(let c=0;c<s;c++)r[c]=c;a=0},this.reshuffle=function(){a=0},this.next=function(){const{samples:c}=this;a>=r.length&&(uM(r,i),this.reshuffle());let o=r[a++];for(let u=0;u<t;u++)c[u]=(o%e+i())/e,o=Math.floor(o/e);return c}}}class hM{constructor(e,t,i=Math.random){let s=0;for(const o of t)s+=o;const r=new Float32Array(s),a=[];let c=0;for(const o of t){const u=new fM(e,o,i);u.samples=new Float32Array(r.buffer,c,u.samples.length),c+=u.samples.length*4,a.push(u)}this.samples=r,this.strataCount=e,this.next=function(){for(const o of a)o.next();return r},this.reshuffle=function(){for(const o of a)o.reshuffle()},this.reset=function(){for(const o of a)o.reset()}}}class dM{constructor(e=0){this.m=2147483648,this.a=1103515245,this.c=12345,this.seed=e}nextInt(){return this.seed=(this.a*this.seed+this.c)%this.m,this.seed}nextFloat(){return this.nextInt()/(this.m-1)}}class pM extends yn{constructor(e=1,t=1,i=8){super(new Float32Array(1),1,1,rt,ht),this.minFilter=Ge,this.magFilter=Ge,this.strata=i,this.sampler=null,this.generator=new dM,this.stableNoise=!1,this.random=()=>this.stableNoise?this.generator.nextFloat():Math.random(),this.init(e,t,i)}init(e=this.image.height,t=this.image.width,i=this.strata){const{image:s}=this;if(s.width===t&&s.height===e&&this.sampler!==null)return;const r=new Array(e*t).fill(4),a=new hM(i,r,this.random);s.width=t,s.height=e,s.data=a.samples,this.sampler=a,this.dispose(),this.next()}next(){this.sampler.next(),this.needsUpdate=!0}reset(){this.sampler.reset(),this.generator.seed=0}}function mM(n,e=Math.random){for(let t=n.length-1;t>0;t--){const i=~~((e()-1e-6)*t),s=n[t];n[t]=n[i],n[i]=s}}function gM(n,e){n.fill(0);for(let t=0;t<e;t++)n[t]=1}class Mh{constructor(e){this.count=0,this.size=-1,this.sigma=-1,this.radius=-1,this.lookupTable=null,this.score=null,this.binaryPattern=null,this.resize(e),this.setSigma(1.5)}findVoid(){const{score:e,binaryPattern:t}=this;let i=1/0,s=-1;for(let r=0,a=t.length;r<a;r++){if(t[r]!==0)continue;const c=e[r];c<i&&(i=c,s=r)}return s}findCluster(){const{score:e,binaryPattern:t}=this;let i=-1/0,s=-1;for(let r=0,a=t.length;r<a;r++){if(t[r]!==1)continue;const c=e[r];c>i&&(i=c,s=r)}return s}setSigma(e){if(e===this.sigma)return;const t=~~(Math.sqrt(10*2*e**2)+1),i=2*t+1,s=new Float32Array(i*i),r=e*e;for(let a=-t;a<=t;a++)for(let c=-t;c<=t;c++){const o=(t+c)*i+a+t,u=a*a+c*c;s[o]=Math.E**(-u/(2*r))}this.lookupTable=s,this.sigma=e,this.radius=t}resize(e){this.size!==e&&(this.size=e,this.score=new Float32Array(e*e),this.binaryPattern=new Uint8Array(e*e))}invert(){const{binaryPattern:e,score:t,size:i}=this;t.fill(0);for(let s=0,r=e.length;s<r;s++)if(e[s]===0){const a=~~(s/i),c=s-a*i;this.updateScore(c,a,1),e[s]=1}else e[s]=0}updateScore(e,t,i){const{size:s,score:r,lookupTable:a}=this,c=this.radius,o=2*c+1;for(let u=-c;u<=c;u++)for(let f=-c;f<=c;f++){const h=(c+f)*o+u+c,l=a[h];let p=e+u;p=p<0?s+p:p%s;let g=t+f;g=g<0?s+g:g%s;const x=g*s+p;r[x]+=i*l}}addPointIndex(e){this.binaryPattern[e]=1;const t=this.size,i=~~(e/t),s=e-i*t;this.updateScore(s,i,1),this.count++}removePointIndex(e){this.binaryPattern[e]=0;const t=this.size,i=~~(e/t),s=e-i*t;this.updateScore(s,i,-1),this.count--}copy(e){this.resize(e.size),this.score.set(e.score),this.binaryPattern.set(e.binaryPattern),this.setSigma(e.sigma),this.count=e.count}}class vM{constructor(){this.random=Math.random,this.sigma=1.5,this.size=64,this.majorityPointsRatio=.1,this.samples=new Mh(1),this.savedSamples=new Mh(1)}generate(){const{samples:e,savedSamples:t,sigma:i,majorityPointsRatio:s,size:r}=this;e.resize(r),e.setSigma(i);const a=Math.floor(r*r*s),c=e.binaryPattern;gM(c,a),mM(c,this.random);for(let h=0,l=c.length;h<l;h++)c[h]===1&&e.addPointIndex(h);for(;;){const h=e.findCluster();e.removePointIndex(h);const l=e.findVoid();if(h===l){e.addPointIndex(h);break}e.addPointIndex(l)}const o=new Uint32Array(r*r);t.copy(e);let u;for(u=e.count-1;u>=0;){const h=e.findCluster();e.removePointIndex(h),o[h]=u,u--}const f=r*r;for(u=t.count;u<f/2;){const h=t.findVoid();t.addPointIndex(h),o[h]=u,u++}for(t.invert();u<f;){const h=t.findCluster();t.removePointIndex(h),o[h]=u,u++}return{data:o,maxValue:f}}}function xM(n){return n>=3?4:n}function _M(n){switch(n){case 1:return $s;case 2:return gi;default:return rt}}class AM extends yn{constructor(e=64,t=1){super(new Float32Array(4),1,1,rt,ht),this.minFilter=Ge,this.magFilter=Ge,this.size=e,this.channels=t,this.update()}update(){const e=this.channels,t=this.size,i=new vM;i.channels=e,i.size=t;const s=xM(e),r=_M(s);(this.image.width!==t||r!==this.format)&&(this.image.width=t,this.image.height=t,this.image.data=new Float32Array(t**2*s),this.format=r,this.dispose());const a=this.image.data;for(let c=0,o=e;c<o;c++){const u=i.generate(),f=u.data,h=u.maxValue;for(let l=0,p=f.length;l<p;l++){const g=f[l]/h;a[l*s+c]=g}}this.needsUpdate=!0}}const yM=`

	struct PhysicalCamera {

		float focusDistance;
		float anamorphicRatio;
		float bokehSize;
		int apertureBlades;
		float apertureRotation;

	};

`,MM=`

	struct EquirectHdrInfo {

		sampler2D marginalWeights;
		sampler2D conditionalWeights;
		sampler2D map;

		float totalSum;

	};

`,SM=`

	#define RECT_AREA_LIGHT_TYPE 0
	#define CIRC_AREA_LIGHT_TYPE 1
	#define SPOT_LIGHT_TYPE 2
	#define DIR_LIGHT_TYPE 3
	#define POINT_LIGHT_TYPE 4

	struct LightsInfo {

		sampler2D tex;
		uint count;

	};

	struct Light {

		vec3 position;
		int type;

		vec3 color;
		float intensity;

		vec3 u;
		vec3 v;
		float area;

		// spot light fields
		float radius;
		float near;
		float decay;
		float distance;
		float coneCos;
		float penumbraCos;
		int iesProfile;

	};

	Light readLightInfo( sampler2D tex, uint index ) {

		uint i = index * 6u;

		vec4 s0 = texelFetch1D( tex, i + 0u );
		vec4 s1 = texelFetch1D( tex, i + 1u );
		vec4 s2 = texelFetch1D( tex, i + 2u );
		vec4 s3 = texelFetch1D( tex, i + 3u );

		Light l;
		l.position = s0.rgb;
		l.type = int( round( s0.a ) );

		l.color = s1.rgb;
		l.intensity = s1.a;

		l.u = s2.rgb;
		l.v = s3.rgb;
		l.area = s3.a;

		if ( l.type == SPOT_LIGHT_TYPE || l.type == POINT_LIGHT_TYPE ) {

			vec4 s4 = texelFetch1D( tex, i + 4u );
			vec4 s5 = texelFetch1D( tex, i + 5u );
			l.radius = s4.r;
			l.decay = s4.g;
			l.distance = s4.b;
			l.coneCos = s4.a;

			l.penumbraCos = s5.r;
			l.iesProfile = int( round( s5.g ) );

		} else {

			l.radius = 0.0;
			l.decay = 0.0;
			l.distance = 0.0;

			l.coneCos = 0.0;
			l.penumbraCos = 0.0;
			l.iesProfile = - 1;

		}

		return l;

	}

`,TM=`

	struct Material {

		vec3 color;
		int map;

		float metalness;
		int metalnessMap;

		float roughness;
		int roughnessMap;

		float ior;
		float transmission;
		int transmissionMap;

		float emissiveIntensity;
		vec3 emissive;
		int emissiveMap;

		int normalMap;
		vec2 normalScale;

		float clearcoat;
		int clearcoatMap;
		int clearcoatNormalMap;
		vec2 clearcoatNormalScale;
		float clearcoatRoughness;
		int clearcoatRoughnessMap;

		int iridescenceMap;
		int iridescenceThicknessMap;
		float iridescence;
		float iridescenceIor;
		float iridescenceThicknessMinimum;
		float iridescenceThicknessMaximum;

		vec3 specularColor;
		int specularColorMap;

		float specularIntensity;
		int specularIntensityMap;
		bool thinFilm;

		vec3 attenuationColor;
		float attenuationDistance;

		int alphaMap;

		bool castShadow;
		float opacity;
		float alphaTest;

		float side;
		bool matte;

		float sheen;
		vec3 sheenColor;
		int sheenColorMap;
		float sheenRoughness;
		int sheenRoughnessMap;

		bool vertexColors;
		bool flatShading;
		bool transparent;
		bool fogVolume;

		mat3 mapTransform;
		mat3 metalnessMapTransform;
		mat3 roughnessMapTransform;
		mat3 transmissionMapTransform;
		mat3 emissiveMapTransform;
		mat3 normalMapTransform;
		mat3 clearcoatMapTransform;
		mat3 clearcoatNormalMapTransform;
		mat3 clearcoatRoughnessMapTransform;
		mat3 sheenColorMapTransform;
		mat3 sheenRoughnessMapTransform;
		mat3 iridescenceMapTransform;
		mat3 iridescenceThicknessMapTransform;
		mat3 specularColorMapTransform;
		mat3 specularIntensityMapTransform;
		mat3 alphaMapTransform;

	};

	mat3 readTextureTransform( sampler2D tex, uint index ) {

		mat3 textureTransform;

		vec4 row1 = texelFetch1D( tex, index );
		vec4 row2 = texelFetch1D( tex, index + 1u );

		textureTransform[0] = vec3(row1.r, row2.r, 0.0);
		textureTransform[1] = vec3(row1.g, row2.g, 0.0);
		textureTransform[2] = vec3(row1.b, row2.b, 1.0);

		return textureTransform;

	}

	Material readMaterialInfo( sampler2D tex, uint index ) {

		uint i = index * uint( MATERIAL_PIXELS );

		vec4 s0 = texelFetch1D( tex, i + 0u );
		vec4 s1 = texelFetch1D( tex, i + 1u );
		vec4 s2 = texelFetch1D( tex, i + 2u );
		vec4 s3 = texelFetch1D( tex, i + 3u );
		vec4 s4 = texelFetch1D( tex, i + 4u );
		vec4 s5 = texelFetch1D( tex, i + 5u );
		vec4 s6 = texelFetch1D( tex, i + 6u );
		vec4 s7 = texelFetch1D( tex, i + 7u );
		vec4 s8 = texelFetch1D( tex, i + 8u );
		vec4 s9 = texelFetch1D( tex, i + 9u );
		vec4 s10 = texelFetch1D( tex, i + 10u );
		vec4 s11 = texelFetch1D( tex, i + 11u );
		vec4 s12 = texelFetch1D( tex, i + 12u );
		vec4 s13 = texelFetch1D( tex, i + 13u );
		vec4 s14 = texelFetch1D( tex, i + 14u );

		Material m;
		m.color = s0.rgb;
		m.map = int( round( s0.a ) );

		m.metalness = s1.r;
		m.metalnessMap = int( round( s1.g ) );
		m.roughness = s1.b;
		m.roughnessMap = int( round( s1.a ) );

		m.ior = s2.r;
		m.transmission = s2.g;
		m.transmissionMap = int( round( s2.b ) );
		m.emissiveIntensity = s2.a;

		m.emissive = s3.rgb;
		m.emissiveMap = int( round( s3.a ) );

		m.normalMap = int( round( s4.r ) );
		m.normalScale = s4.gb;

		m.clearcoat = s4.a;
		m.clearcoatMap = int( round( s5.r ) );
		m.clearcoatRoughness = s5.g;
		m.clearcoatRoughnessMap = int( round( s5.b ) );
		m.clearcoatNormalMap = int( round( s5.a ) );
		m.clearcoatNormalScale = s6.rg;

		m.sheen = s6.a;
		m.sheenColor = s7.rgb;
		m.sheenColorMap = int( round( s7.a ) );
		m.sheenRoughness = s8.r;
		m.sheenRoughnessMap = int( round( s8.g ) );

		m.iridescenceMap = int( round( s8.b ) );
		m.iridescenceThicknessMap = int( round( s8.a ) );
		m.iridescence = s9.r;
		m.iridescenceIor = s9.g;
		m.iridescenceThicknessMinimum = s9.b;
		m.iridescenceThicknessMaximum = s9.a;

		m.specularColor = s10.rgb;
		m.specularColorMap = int( round( s10.a ) );

		m.specularIntensity = s11.r;
		m.specularIntensityMap = int( round( s11.g ) );
		m.thinFilm = bool( s11.b );

		m.attenuationColor = s12.rgb;
		m.attenuationDistance = s12.a;

		m.alphaMap = int( round( s13.r ) );

		m.opacity = s13.g;
		m.alphaTest = s13.b;
		m.side = s13.a;

		m.matte = bool( s14.r );
		m.castShadow = bool( s14.g );
		m.vertexColors = bool( int( s14.b ) & 1 );
		m.flatShading = bool( int( s14.b ) & 2 );
		m.fogVolume = bool( int( s14.b ) & 4 );
		m.transparent = bool( s14.a );

		uint firstTextureTransformIdx = i + 15u;

		// mat3( 1.0 ) is an identity matrix
		m.mapTransform = m.map == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx );
		m.metalnessMapTransform = m.metalnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 2u );
		m.roughnessMapTransform = m.roughnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 4u );
		m.transmissionMapTransform = m.transmissionMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 6u );
		m.emissiveMapTransform = m.emissiveMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 8u );
		m.normalMapTransform = m.normalMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 10u );
		m.clearcoatMapTransform = m.clearcoatMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 12u );
		m.clearcoatNormalMapTransform = m.clearcoatNormalMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 14u );
		m.clearcoatRoughnessMapTransform = m.clearcoatRoughnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 16u );
		m.sheenColorMapTransform = m.sheenColorMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 18u );
		m.sheenRoughnessMapTransform = m.sheenRoughnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 20u );
		m.iridescenceMapTransform = m.iridescenceMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 22u );
		m.iridescenceThicknessMapTransform = m.iridescenceThicknessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 24u );
		m.specularColorMapTransform = m.specularColorMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 26u );
		m.specularIntensityMapTransform = m.specularIntensityMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 28u );
		m.alphaMapTransform = m.alphaMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 30u );

		return m;

	}

`,bM=`

	struct SurfaceRecord {

		// surface type
		bool volumeParticle;

		// geometry
		vec3 faceNormal;
		bool frontFace;
		vec3 normal;
		mat3 normalBasis;
		mat3 normalInvBasis;

		// cached properties
		float eta;
		float f0;

		// material
		float roughness;
		float filteredRoughness;
		float metalness;
		vec3 color;
		vec3 emission;

		// transmission
		float ior;
		float transmission;
		bool thinFilm;
		vec3 attenuationColor;
		float attenuationDistance;

		// clearcoat
		vec3 clearcoatNormal;
		mat3 clearcoatBasis;
		mat3 clearcoatInvBasis;
		float clearcoat;
		float clearcoatRoughness;
		float filteredClearcoatRoughness;

		// sheen
		float sheen;
		vec3 sheenColor;
		float sheenRoughness;

		// iridescence
		float iridescence;
		float iridescenceIor;
		float iridescenceThickness;

		// specular
		vec3 specularColor;
		float specularIntensity;
	};

	struct ScatterRecord {
		float specularPdf;
		float pdf;
		vec3 direction;
		vec3 color;
	};

`,EM=`

	// samples the the given environment map in the given direction
	vec3 sampleEquirectColor( sampler2D envMap, vec3 direction ) {

		return texture2D( envMap, equirectDirectionToUv( direction ) ).rgb;

	}

	// gets the pdf of the given direction to sample
	float equirectDirectionPdf( vec3 direction ) {

		vec2 uv = equirectDirectionToUv( direction );
		float theta = uv.y * PI;
		float sinTheta = sin( theta );
		if ( sinTheta == 0.0 ) {

			return 0.0;

		}

		return 1.0 / ( 2.0 * PI * PI * sinTheta );

	}

	// samples the color given env map with CDF and returns the pdf of the direction
	float sampleEquirect( vec3 direction, inout vec3 color ) {

		float totalSum = envMapInfo.totalSum;
		if ( totalSum == 0.0 ) {

			color = vec3( 0.0 );
			return 1.0;

		}

		vec2 uv = equirectDirectionToUv( direction );
		color = texture2D( envMapInfo.map, uv ).rgb;

		float lum = luminance( color );
		ivec2 resolution = textureSize( envMapInfo.map, 0 );
		float pdf = lum / totalSum;

		return float( resolution.x * resolution.y ) * pdf * equirectDirectionPdf( direction );

	}

	// samples a direction of the envmap with color and retrieves pdf
	float sampleEquirectProbability( vec2 r, inout vec3 color, inout vec3 direction ) {

		// sample env map cdf
		float v = texture2D( envMapInfo.marginalWeights, vec2( r.x, 0.0 ) ).x;
		float u = texture2D( envMapInfo.conditionalWeights, vec2( r.y, v ) ).x;
		vec2 uv = vec2( u, v );

		vec3 derivedDirection = equirectUvToDirection( uv );
		direction = derivedDirection;
		color = texture2D( envMapInfo.map, uv ).rgb;

		float totalSum = envMapInfo.totalSum;
		float lum = luminance( color );
		ivec2 resolution = textureSize( envMapInfo.map, 0 );
		float pdf = lum / totalSum;

		return float( resolution.x * resolution.y ) * pdf * equirectDirectionPdf( direction );

	}
`,wM=`

	float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

		return smoothstep( coneCosine, penumbraCosine, angleCosine );

	}

	float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

		// based upon Frostbite 3 Moving to Physically-based Rendering
		// page 32, equation 26: E[window1]
		// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), EPSILON );

		if ( cutoffDistance > 0.0 ) {

			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

		}

		return distanceFalloff;

	}

	float getPhotometricAttenuation( sampler2DArray iesProfiles, int iesProfile, vec3 posToLight, vec3 lightDir, vec3 u, vec3 v ) {

		float cosTheta = dot( posToLight, lightDir );
		float angle = acos( cosTheta ) / PI;

		return texture2D( iesProfiles, vec3( angle, 0.0, iesProfile ) ).r;

	}

	struct LightRecord {

		float dist;
		vec3 direction;
		float pdf;
		vec3 emission;
		int type;

	};

	bool intersectLightAtIndex( sampler2D lights, vec3 rayOrigin, vec3 rayDirection, uint l, inout LightRecord lightRec ) {

		bool didHit = false;
		Light light = readLightInfo( lights, l );

		vec3 u = light.u;
		vec3 v = light.v;

		// check for backface
		vec3 normal = normalize( cross( u, v ) );
		if ( dot( normal, rayDirection ) > 0.0 ) {

			u *= 1.0 / dot( u, u );
			v *= 1.0 / dot( v, v );

			float dist;

			// MIS / light intersection is not supported for punctual lights.
			if(
				( light.type == RECT_AREA_LIGHT_TYPE && intersectsRectangle( light.position, normal, u, v, rayOrigin, rayDirection, dist ) ) ||
				( light.type == CIRC_AREA_LIGHT_TYPE && intersectsCircle( light.position, normal, u, v, rayOrigin, rayDirection, dist ) )
			) {

				float cosTheta = dot( rayDirection, normal );
				didHit = true;
				lightRec.dist = dist;
				lightRec.pdf = ( dist * dist ) / ( light.area * cosTheta );
				lightRec.emission = light.color * light.intensity;
				lightRec.direction = rayDirection;
				lightRec.type = light.type;

			}

		}

		return didHit;

	}

	LightRecord randomAreaLightSample( Light light, vec3 rayOrigin, vec2 ruv ) {

		vec3 randomPos;
		if( light.type == RECT_AREA_LIGHT_TYPE ) {

			// rectangular area light
			randomPos = light.position + light.u * ( ruv.x - 0.5 ) + light.v * ( ruv.y - 0.5 );

		} else if( light.type == CIRC_AREA_LIGHT_TYPE ) {

			// circular area light
			float r = 0.5 * sqrt( ruv.x );
			float theta = ruv.y * 2.0 * PI;
			float x = r * cos( theta );
			float y = r * sin( theta );

			randomPos = light.position + light.u * x + light.v * y;

		}

		vec3 toLight = randomPos - rayOrigin;
		float lightDistSq = dot( toLight, toLight );
		float dist = sqrt( lightDistSq );
		vec3 direction = toLight / dist;
		vec3 lightNormal = normalize( cross( light.u, light.v ) );

		LightRecord lightRec;
		lightRec.type = light.type;
		lightRec.emission = light.color * light.intensity;
		lightRec.dist = dist;
		lightRec.direction = direction;

		// TODO: the denominator is potentially zero
		lightRec.pdf = lightDistSq / ( light.area * dot( direction, lightNormal ) );

		return lightRec;

	}

	LightRecord randomSpotLightSample( Light light, sampler2DArray iesProfiles, vec3 rayOrigin, vec2 ruv ) {

		float radius = light.radius * sqrt( ruv.x );
		float theta = ruv.y * 2.0 * PI;
		float x = radius * cos( theta );
		float y = radius * sin( theta );

		vec3 u = light.u;
		vec3 v = light.v;
		vec3 normal = normalize( cross( u, v ) );

		float angle = acos( light.coneCos );
		float angleTan = tan( angle );
		float startDistance = light.radius / max( angleTan, EPSILON );

		vec3 randomPos = light.position - normal * startDistance + u * x + v * y;
		vec3 toLight = randomPos - rayOrigin;
		float lightDistSq = dot( toLight, toLight );
		float dist = sqrt( lightDistSq );

		vec3 direction = toLight / max( dist, EPSILON );
		float cosTheta = dot( direction, normal );

		float spotAttenuation = light.iesProfile != - 1 ?
			getPhotometricAttenuation( iesProfiles, light.iesProfile, direction, normal, u, v ) :
			getSpotAttenuation( light.coneCos, light.penumbraCos, cosTheta );

		float distanceAttenuation = getDistanceAttenuation( dist, light.distance, light.decay );
		LightRecord lightRec;
		lightRec.type = light.type;
		lightRec.dist = dist;
		lightRec.direction = direction;
		lightRec.emission = light.color * light.intensity * distanceAttenuation * spotAttenuation;
		lightRec.pdf = 1.0;

		return lightRec;

	}

	LightRecord randomLightSample( sampler2D lights, sampler2DArray iesProfiles, uint lightCount, vec3 rayOrigin, vec3 ruv ) {

		LightRecord result;

		// pick a random light
		uint l = uint( ruv.x * float( lightCount ) );
		Light light = readLightInfo( lights, l );

		if ( light.type == SPOT_LIGHT_TYPE ) {

			result = randomSpotLightSample( light, iesProfiles, rayOrigin, ruv.yz );

		} else if ( light.type == POINT_LIGHT_TYPE ) {

			vec3 lightRay = light.u - rayOrigin;
			float lightDist = length( lightRay );
			float cutoffDistance = light.distance;
			float distanceFalloff = 1.0 / max( pow( lightDist, light.decay ), 0.01 );
			if ( cutoffDistance > 0.0 ) {

				distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDist / cutoffDistance ) ) );

			}

			LightRecord rec;
			rec.direction = normalize( lightRay );
			rec.dist = length( lightRay );
			rec.pdf = 1.0;
			rec.emission = light.color * light.intensity * distanceFalloff;
			rec.type = light.type;
			result = rec;

		} else if ( light.type == DIR_LIGHT_TYPE ) {

			LightRecord rec;
			rec.dist = 1e10;
			rec.direction = light.u;
			rec.pdf = 1.0;
			rec.emission = light.color * light.intensity;
			rec.type = light.type;

			result = rec;

		} else {

			// sample the light
			result = randomAreaLightSample( light, rayOrigin, ruv.yz );

		}

		return result;

	}

`,CM=`

	vec3 sampleHemisphere( vec3 n, vec2 uv ) {

		// https://www.rorydriscoll.com/2009/01/07/better-sampling/
		// https://graphics.pixar.com/library/OrthonormalB/paper.pdf
		float sign = n.z == 0.0 ? 1.0 : sign( n.z );
		float a = - 1.0 / ( sign + n.z );
		float b = n.x * n.y * a;
		vec3 b1 = vec3( 1.0 + sign * n.x * n.x * a, sign * b, - sign * n.x );
		vec3 b2 = vec3( b, sign + n.y * n.y * a, - n.y );

		float r = sqrt( uv.x );
		float theta = 2.0 * PI * uv.y;
		float x = r * cos( theta );
		float y = r * sin( theta );
		return x * b1 + y * b2 + sqrt( 1.0 - uv.x ) * n;

	}

	vec2 sampleTriangle( vec2 a, vec2 b, vec2 c, vec2 r ) {

		// get the edges of the triangle and the diagonal across the
		// center of the parallelogram
		vec2 e1 = a - b;
		vec2 e2 = c - b;
		vec2 diag = normalize( e1 + e2 );

		// pick the point in the parallelogram
		if ( r.x + r.y > 1.0 ) {

			r = vec2( 1.0 ) - r;

		}

		return e1 * r.x + e2 * r.y;

	}

	vec2 sampleCircle( vec2 uv ) {

		float angle = 2.0 * PI * uv.x;
		float radius = sqrt( uv.y );
		return vec2( cos( angle ), sin( angle ) ) * radius;

	}

	vec3 sampleSphere( vec2 uv ) {

		float u = ( uv.x - 0.5 ) * 2.0;
		float t = uv.y * PI * 2.0;
		float f = sqrt( 1.0 - u * u );

		return vec3( f * cos( t ), f * sin( t ), u );

	}

	vec2 sampleRegularPolygon( int sides, vec3 uvw ) {

		sides = max( sides, 3 );

		vec3 r = uvw;
		float anglePerSegment = 2.0 * PI / float( sides );
		float segment = floor( float( sides ) * r.x );

		float angle1 = anglePerSegment * segment;
		float angle2 = angle1 + anglePerSegment;
		vec2 a = vec2( sin( angle1 ), cos( angle1 ) );
		vec2 b = vec2( 0.0, 0.0 );
		vec2 c = vec2( sin( angle2 ), cos( angle2 ) );

		return sampleTriangle( a, b, c, r.yz );

	}

	// samples an aperture shape with the given number of sides. 0 means circle
	vec2 sampleAperture( int blades, vec3 uvw ) {

		return blades == 0 ?
			sampleCircle( uvw.xy ) :
			sampleRegularPolygon( blades, uvw );

	}


`,RM=`

	bool totalInternalReflection( float cosTheta, float eta ) {

		float sinTheta = sqrt( 1.0 - cosTheta * cosTheta );
		return eta * sinTheta > 1.0;

	}

	// https://google.github.io/filament/Filament.md.html#materialsystem/diffusebrdf
	float schlickFresnel( float cosine, float f0 ) {

		return f0 + ( 1.0 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

	vec3 schlickFresnel( float cosine, vec3 f0 ) {

		return f0 + ( 1.0 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

	vec3 schlickFresnel( float cosine, vec3 f0, vec3 f90 ) {

		return f0 + ( f90 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

	float dielectricFresnel( float cosThetaI, float eta ) {

		// https://schuttejoe.github.io/post/disneybsdf/
		float ni = eta;
		float nt = 1.0;

		// Check for total internal reflection
		float sinThetaISq = 1.0f - cosThetaI * cosThetaI;
		float sinThetaTSq = eta * eta * sinThetaISq;
		if( sinThetaTSq >= 1.0 ) {

			return 1.0;

		}

		float sinThetaT = sqrt( sinThetaTSq );

		float cosThetaT = sqrt( max( 0.0, 1.0f - sinThetaT * sinThetaT ) );
		float rParallel = ( ( nt * cosThetaI ) - ( ni * cosThetaT ) ) / ( ( nt * cosThetaI ) + ( ni * cosThetaT ) );
		float rPerpendicular = ( ( ni * cosThetaI ) - ( nt * cosThetaT ) ) / ( ( ni * cosThetaI ) + ( nt * cosThetaT ) );
		return ( rParallel * rParallel + rPerpendicular * rPerpendicular ) / 2.0;

	}

	// https://raytracing.github.io/books/RayTracingInOneWeekend.html#dielectrics/schlickapproximation
	float iorRatioToF0( float eta ) {

		return pow( ( 1.0 - eta ) / ( 1.0 + eta ), 2.0 );

	}

	vec3 evaluateFresnel( float cosTheta, float eta, vec3 f0, vec3 f90 ) {

		if ( totalInternalReflection( cosTheta, eta ) ) {

			return f90;

		}

		return schlickFresnel( cosTheta, f0, f90 );

	}

	// TODO: disney fresnel was removed and replaced with this fresnel function to better align with
	// the glTF but is causing blown out pixels. Should be revisited
	// float evaluateFresnelWeight( float cosTheta, float eta, float f0 ) {

	// 	if ( totalInternalReflection( cosTheta, eta ) ) {

	// 		return 1.0;

	// 	}

	// 	return schlickFresnel( cosTheta, f0 );

	// }

	// https://schuttejoe.github.io/post/disneybsdf/
	float disneyFresnel( vec3 wo, vec3 wi, vec3 wh, float f0, float eta, float metalness ) {

		float dotHV = dot( wo, wh );
		if ( totalInternalReflection( dotHV, eta ) ) {

			return 1.0;

		}

		float dotHL = dot( wi, wh );
		float dielectricFresnel = dielectricFresnel( abs( dotHV ), eta );
		float metallicFresnel = schlickFresnel( dotHL, f0 );

		return mix( dielectricFresnel, metallicFresnel, metalness );

	}

`,DM=`

	// Fast arccos approximation used to remove banding artifacts caused by numerical errors in acos.
	// This is a cubic Lagrange interpolating polynomial for x = [-1, -1/2, 0, 1/2, 1].
	// For more information see: https://github.com/gkjohnson/three-gpu-pathtracer/pull/171#issuecomment-1152275248
	float acosApprox( float x ) {

		x = clamp( x, -1.0, 1.0 );
		return ( - 0.69813170079773212 * x * x - 0.87266462599716477 ) * x + 1.5707963267948966;

	}

	// An acos with input values bound to the range [-1, 1].
	float acosSafe( float x ) {

		return acos( clamp( x, -1.0, 1.0 ) );

	}

	float saturateCos( float val ) {

		return clamp( val, 0.001, 1.0 );

	}

	float square( float t ) {

		return t * t;

	}

	vec2 square( vec2 t ) {

		return t * t;

	}

	vec3 square( vec3 t ) {

		return t * t;

	}

	vec4 square( vec4 t ) {

		return t * t;

	}

	vec2 rotateVector( vec2 v, float t ) {

		float ac = cos( t );
		float as = sin( t );
		return vec2(
			v.x * ac - v.y * as,
			v.x * as + v.y * ac
		);

	}

	// forms a basis with the normal vector as Z
	mat3 getBasisFromNormal( vec3 normal ) {

		vec3 other;
		if ( abs( normal.x ) > 0.5 ) {

			other = vec3( 0.0, 1.0, 0.0 );

		} else {

			other = vec3( 1.0, 0.0, 0.0 );

		}

		vec3 ortho = normalize( cross( normal, other ) );
		vec3 ortho2 = normalize( cross( normal, ortho ) );
		return mat3( ortho2, ortho, normal );

	}

`,PM=`

	// Finds the point where the ray intersects the plane defined by u and v and checks if this point
	// falls in the bounds of the rectangle on that same plane.
	// Plane intersection: https://lousodrome.net/blog/light/2020/07/03/intersection-of-a-ray-and-a-plane/
	bool intersectsRectangle( vec3 center, vec3 normal, vec3 u, vec3 v, vec3 rayOrigin, vec3 rayDirection, inout float dist ) {

		float t = dot( center - rayOrigin, normal ) / dot( rayDirection, normal );

		if ( t > EPSILON ) {

			vec3 p = rayOrigin + rayDirection * t;
			vec3 vi = p - center;

			// check if p falls inside the rectangle
			float a1 = dot( u, vi );
			if ( abs( a1 ) <= 0.5 ) {

				float a2 = dot( v, vi );
				if ( abs( a2 ) <= 0.5 ) {

					dist = t;
					return true;

				}

			}

		}

		return false;

	}

	// Finds the point where the ray intersects the plane defined by u and v and checks if this point
	// falls in the bounds of the circle on that same plane. See above URL for a description of the plane intersection algorithm.
	bool intersectsCircle( vec3 position, vec3 normal, vec3 u, vec3 v, vec3 rayOrigin, vec3 rayDirection, inout float dist ) {

		float t = dot( position - rayOrigin, normal ) / dot( rayDirection, normal );

		if ( t > EPSILON ) {

			vec3 hit = rayOrigin + rayDirection * t;
			vec3 vi = hit - position;

			float a1 = dot( u, vi );
			float a2 = dot( v, vi );

			if( length( vec2( a1, a2 ) ) <= 0.5 ) {

				dist = t;
				return true;

			}

		}

		return false;

	}

`,IM=`

	// add texel fetch functions for texture arrays
	vec4 texelFetch1D( sampler2DArray tex, int layer, uint index ) {

		uint width = uint( textureSize( tex, 0 ).x );
		uvec2 uv;
		uv.x = index % width;
		uv.y = index / width;

		return texelFetch( tex, ivec3( uv, layer ), 0 );

	}

	vec4 textureSampleBarycoord( sampler2DArray tex, int layer, vec3 barycoord, uvec3 faceIndices ) {

		return
			barycoord.x * texelFetch1D( tex, layer, faceIndices.x ) +
			barycoord.y * texelFetch1D( tex, layer, faceIndices.y ) +
			barycoord.z * texelFetch1D( tex, layer, faceIndices.z );

	}

`,zd=`

	// TODO: possibly this should be renamed something related to material or path tracing logic

	#ifndef RAY_OFFSET
	#define RAY_OFFSET 1e-4
	#endif

	// adjust the hit point by the surface normal by a factor of some offset and the
	// maximum component-wise value of the current point to accommodate floating point
	// error as values increase.
	vec3 stepRayOrigin( vec3 rayOrigin, vec3 rayDirection, vec3 offset, float dist ) {

		vec3 point = rayOrigin + rayDirection * dist;
		vec3 absPoint = abs( point );
		float maxPoint = max( absPoint.x, max( absPoint.y, absPoint.z ) );
		return point + offset * ( maxPoint + 1.0 ) * RAY_OFFSET;

	}

	// https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_volume/README.md#attenuation
	vec3 transmissionAttenuation( float dist, vec3 attColor, float attDist ) {

		vec3 ot = - log( attColor ) / attDist;
		return exp( - ot * dist );

	}

	vec3 getHalfVector( vec3 wi, vec3 wo, float eta ) {

		// get the half vector - assuming if the light incident vector is on the other side
		// of the that it's transmissive.
		vec3 h;
		if ( wi.z > 0.0 ) {

			h = normalize( wi + wo );

		} else {

			// Scale by the ior ratio to retrieve the appropriate half vector
			// From Section 2.2 on computing the transmission half vector:
			// https://blog.selfshadow.com/publications/s2015-shading-course/burley/s2015_pbs_disney_bsdf_notes.pdf
			h = normalize( wi + wo * eta );

		}

		h *= sign( h.z );
		return h;

	}

	vec3 getHalfVector( vec3 a, vec3 b ) {

		return normalize( a + b );

	}

	// The discrepancy between interpolated surface normal and geometry normal can cause issues when a ray
	// is cast that is on the top side of the geometry normal plane but below the surface normal plane. If
	// we find a ray like that we ignore it to avoid artifacts.
	// This function returns if the direction is on the same side of both planes.
	bool isDirectionValid( vec3 direction, vec3 surfaceNormal, vec3 geometryNormal ) {

		bool aboveSurfaceNormal = dot( direction, surfaceNormal ) > 0.0;
		bool aboveGeometryNormal = dot( direction, geometryNormal ) > 0.0;
		return aboveSurfaceNormal == aboveGeometryNormal;

	}

	// ray sampling x and z are swapped to align with expected background view
	vec2 equirectDirectionToUv( vec3 direction ) {

		// from Spherical.setFromCartesianCoords
		vec2 uv = vec2( atan( direction.z, direction.x ), acos( direction.y ) );
		uv /= vec2( 2.0 * PI, PI );

		// apply adjustments to get values in range [0, 1] and y right side up
		uv.x += 0.5;
		uv.y = 1.0 - uv.y;
		return uv;

	}

	vec3 equirectUvToDirection( vec2 uv ) {

		// undo above adjustments
		uv.x -= 0.5;
		uv.y = 1.0 - uv.y;

		// from Vector3.setFromSphericalCoords
		float theta = uv.x * 2.0 * PI;
		float phi = uv.y * PI;

		float sinPhi = sin( phi );

		return vec3( sinPhi * cos( theta ), cos( phi ), sinPhi * sin( theta ) );

	}

	// power heuristic for multiple importance sampling
	float misHeuristic( float a, float b ) {

		float aa = a * a;
		float bb = b * b;
		return aa / ( aa + bb );

	}

	// tentFilter from Peter Shirley's 'Realistic Ray Tracing (2nd Edition)' book, pg. 60
	// erichlof/THREE.js-PathTracing-Renderer/
	float tentFilter( float x ) {

		return x < 0.5 ? sqrt( 2.0 * x ) - 1.0 : 1.0 - sqrt( 2.0 - ( 2.0 * x ) );

	}
`,Sh=`

	// https://www.shadertoy.com/view/wltcRS
	uvec4 WHITE_NOISE_SEED;

	void rng_initialize( vec2 p, int frame ) {

		// white noise seed
		WHITE_NOISE_SEED = uvec4( p, uint( frame ), uint( p.x ) + uint( p.y ) );

	}

	// https://www.pcg-random.org/
	void pcg4d( inout uvec4 v ) {

		v = v * 1664525u + 1013904223u;
		v.x += v.y * v.w;
		v.y += v.z * v.x;
		v.z += v.x * v.y;
		v.w += v.y * v.z;
		v = v ^ ( v >> 16u );
		v.x += v.y*v.w;
		v.y += v.z*v.x;
		v.z += v.x*v.y;
		v.w += v.y*v.z;

	}

	// returns [ 0, 1 ]
	float pcgRand() {

		pcg4d( WHITE_NOISE_SEED );
		return float( WHITE_NOISE_SEED.x ) / float( 0xffffffffu );

	}

	vec2 pcgRand2() {

		pcg4d( WHITE_NOISE_SEED );
		return vec2( WHITE_NOISE_SEED.xy ) / float(0xffffffffu);

	}

	vec3 pcgRand3() {

		pcg4d( WHITE_NOISE_SEED );
		return vec3( WHITE_NOISE_SEED.xyz ) / float( 0xffffffffu );

	}

	vec4 pcgRand4() {

		pcg4d( WHITE_NOISE_SEED );
		return vec4( WHITE_NOISE_SEED ) / float( 0xffffffffu );

	}
`,LM=`

	uniform sampler2D stratifiedTexture;
	uniform sampler2D stratifiedOffsetTexture;

	uint sobolPixelIndex = 0u;
	uint sobolPathIndex = 0u;
	uint sobolBounceIndex = 0u;
	vec4 pixelSeed = vec4( 0 );

	vec4 rand4( int v ) {

		ivec2 uv = ivec2( v, sobolBounceIndex );
		vec4 stratifiedSample = texelFetch( stratifiedTexture, uv, 0 );
		return fract( stratifiedSample + pixelSeed.r ); // blue noise + stratified samples

	}

	vec3 rand3( int v ) {

		return rand4( v ).xyz;

	}

	vec2 rand2( int v ) {

		return rand4( v ).xy;

	}

	float rand( int v ) {

		return rand4( v ).x;

	}

	void rng_initialize( vec2 screenCoord, int frame ) {

		// tile the small noise texture across the entire screen
		ivec2 noiseSize = ivec2( textureSize( stratifiedOffsetTexture, 0 ) );
		ivec2 pixel = ivec2( screenCoord.xy ) % noiseSize;
		vec2 pixelWidth = 1.0 / vec2( noiseSize );
		vec2 uv = vec2( pixel ) * pixelWidth + pixelWidth * 0.5;

		// note that using "texelFetch" here seems to break Android for some reason
		pixelSeed = texture( stratifiedOffsetTexture, uv );

	}

`,FM=`

	// diffuse
	float diffuseEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		// https://schuttejoe.github.io/post/disneybsdf/
		float fl = schlickFresnel( wi.z, 0.0 );
		float fv = schlickFresnel( wo.z, 0.0 );

		float metalFactor = ( 1.0 - surf.metalness );
		float transFactor = ( 1.0 - surf.transmission );
		float rr = 0.5 + 2.0 * surf.roughness * fl * fl;
		float retro = rr * ( fl + fv + fl * fv * ( rr - 1.0f ) );
		float lambert = ( 1.0f - 0.5f * fl ) * ( 1.0f - 0.5f * fv );

		// TODO: subsurface approx?

		// float F = evaluateFresnelWeight( dot( wo, wh ), surf.eta, surf.f0 );
		float F = disneyFresnel( wo, wi, wh, surf.f0, surf.eta, surf.metalness );
		color = ( 1.0 - F ) * transFactor * metalFactor * wi.z * surf.color * ( retro + lambert ) / PI;

		return wi.z / PI;

	}

	vec3 diffuseDirection( vec3 wo, SurfaceRecord surf ) {

		vec3 lightDirection = sampleSphere( rand2( 11 ) );
		lightDirection.z += 1.0;
		lightDirection = normalize( lightDirection );

		return lightDirection;

	}

	// specular
	float specularEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		// if roughness is set to 0 then D === NaN which results in black pixels
		float metalness = surf.metalness;
		float roughness = surf.filteredRoughness;

		float eta = surf.eta;
		float f0 = surf.f0;

		vec3 f0Color = mix( f0 * surf.specularColor * surf.specularIntensity, surf.color, surf.metalness );
		vec3 f90Color = vec3( mix( surf.specularIntensity, 1.0, surf.metalness ) );
		vec3 F = evaluateFresnel( dot( wo, wh ), eta, f0Color, f90Color );

		vec3 iridescenceF = evalIridescence( 1.0, surf.iridescenceIor, dot( wi, wh ), surf.iridescenceThickness, f0Color );
		F = mix( F, iridescenceF,  surf.iridescence );

		// PDF
		// See 14.1.1 Microfacet BxDFs in https://www.pbr-book.org/
		float incidentTheta = acos( wo.z );
		float G = ggxShadowMaskG2( wi, wo, roughness );
		float D = ggxDistribution( wh, roughness );
		float G1 = ggxShadowMaskG1( incidentTheta, roughness );
		float ggxPdf = D * G1 * max( 0.0, abs( dot( wo, wh ) ) ) / abs ( wo.z );

		color = wi.z * F * G * D / ( 4.0 * abs( wi.z * wo.z ) );
		return ggxPdf / ( 4.0 * dot( wo, wh ) );

	}

	vec3 specularDirection( vec3 wo, SurfaceRecord surf ) {

		// sample ggx vndf distribution which gives a new normal
		float roughness = surf.filteredRoughness;
		vec3 halfVector = ggxDirection(
			wo,
			vec2( roughness ),
			rand2( 12 )
		);

		// apply to new ray by reflecting off the new normal
		return - reflect( wo, halfVector );

	}


	// transmission
	/*
	float transmissionEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		// See section 4.2 in https://www.cs.cornell.edu/~srm/publications/EGSR07-btdf.pdf

		float filteredRoughness = surf.filteredRoughness;
		float eta = surf.eta;
		bool frontFace = surf.frontFace;
		bool thinFilm = surf.thinFilm;

		color = surf.transmission * surf.color;

		float denom = pow( eta * dot( wi, wh ) + dot( wo, wh ), 2.0 );
		return ggxPDF( wo, wh, filteredRoughness ) / denom;

	}

	vec3 transmissionDirection( vec3 wo, SurfaceRecord surf ) {

		float filteredRoughness = surf.filteredRoughness;
		float eta = surf.eta;
		bool frontFace = surf.frontFace;

		// sample ggx vndf distribution which gives a new normal
		vec3 halfVector = ggxDirection(
			wo,
			vec2( filteredRoughness ),
			rand2( 13 )
		);

		vec3 lightDirection = refract( normalize( - wo ), halfVector, eta );
		if ( surf.thinFilm ) {

			lightDirection = - refract( normalize( - lightDirection ), - vec3( 0.0, 0.0, 1.0 ), 1.0 / eta );

		}

		return normalize( lightDirection );

	}
	*/

	// TODO: This is just using a basic cosine-weighted specular distribution with an
	// incorrect PDF value at the moment. Update it to correctly use a GGX distribution
	float transmissionEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		color = surf.transmission * surf.color;

		// PDF
		// float F = evaluateFresnelWeight( dot( wo, wh ), surf.eta, surf.f0 );
		// float F = disneyFresnel( wo, wi, wh, surf.f0, surf.eta, surf.metalness );
		// if ( F >= 1.0 ) {

		// 	return 0.0;

		// }

		// return 1.0 / ( 1.0 - F );

		// reverted to previous to transmission. The above was causing black pixels
		float eta = surf.eta;
		float f0 = surf.f0;
		float cosTheta = min( wo.z, 1.0 );
		float sinTheta = sqrt( 1.0 - cosTheta * cosTheta );
		float reflectance = schlickFresnel( cosTheta, f0 );
		bool cannotRefract = eta * sinTheta > 1.0;
		if ( cannotRefract ) {

			return 0.0;

		}

		return 1.0 / ( 1.0 - reflectance );

	}

	vec3 transmissionDirection( vec3 wo, SurfaceRecord surf ) {

		float roughness = surf.filteredRoughness;
		float eta = surf.eta;
		vec3 halfVector = normalize( vec3( 0.0, 0.0, 1.0 ) + sampleSphere( rand2( 13 ) ) * roughness );
		vec3 lightDirection = refract( normalize( - wo ), halfVector, eta );

		if ( surf.thinFilm ) {

			lightDirection = - refract( normalize( - lightDirection ), - vec3( 0.0, 0.0, 1.0 ), 1.0 / eta );

		}
		return normalize( lightDirection );

	}

	// clearcoat
	float clearcoatEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		float ior = 1.5;
		float f0 = iorRatioToF0( ior );
		bool frontFace = surf.frontFace;
		float roughness = surf.filteredClearcoatRoughness;

		float eta = frontFace ? 1.0 / ior : ior;
		float G = ggxShadowMaskG2( wi, wo, roughness );
		float D = ggxDistribution( wh, roughness );
		float F = schlickFresnel( dot( wi, wh ), f0 );

		float fClearcoat = F * D * G / ( 4.0 * abs( wi.z * wo.z ) );
		color = color * ( 1.0 - surf.clearcoat * F ) + fClearcoat * surf.clearcoat * wi.z;

		// PDF
		// See equation (27) in http://jcgt.org/published/0003/02/03/
		return ggxPDF( wo, wh, roughness ) / ( 4.0 * dot( wi, wh ) );

	}

	vec3 clearcoatDirection( vec3 wo, SurfaceRecord surf ) {

		// sample ggx vndf distribution which gives a new normal
		float roughness = surf.filteredClearcoatRoughness;
		vec3 halfVector = ggxDirection(
			wo,
			vec2( roughness ),
			rand2( 14 )
		);

		// apply to new ray by reflecting off the new normal
		return - reflect( wo, halfVector );

	}

	// sheen
	vec3 sheenColor( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf ) {

		float cosThetaO = saturateCos( wo.z );
		float cosThetaI = saturateCos( wi.z );
		float cosThetaH = wh.z;

		float D = velvetD( cosThetaH, surf.sheenRoughness );
		float G = velvetG( cosThetaO, cosThetaI, surf.sheenRoughness );

		// See equation (1) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
		vec3 color = surf.sheenColor;
		color *= D * G / ( 4.0 * abs( cosThetaO * cosThetaI ) );
		color *= wi.z;

		return color;

	}

	// bsdf
	void getLobeWeights(
		vec3 wo, vec3 wi, vec3 wh, vec3 clearcoatWo, SurfaceRecord surf,
		inout float diffuseWeight, inout float specularWeight, inout float transmissionWeight, inout float clearcoatWeight
	) {

		float metalness = surf.metalness;
		float transmission = surf.transmission;
		// float fEstimate = evaluateFresnelWeight( dot( wo, wh ), surf.eta, surf.f0 );
		float fEstimate = disneyFresnel( wo, wi, wh, surf.f0, surf.eta, surf.metalness );

		float transSpecularProb = mix( max( 0.25, fEstimate ), 1.0, metalness );
		float diffSpecularProb = 0.5 + 0.5 * metalness;

		diffuseWeight = ( 1.0 - transmission ) * ( 1.0 - diffSpecularProb );
		specularWeight = transmission * transSpecularProb + ( 1.0 - transmission ) * diffSpecularProb;
		transmissionWeight = transmission * ( 1.0 - transSpecularProb );
		clearcoatWeight = surf.clearcoat * schlickFresnel( clearcoatWo.z, 0.04 );

		float totalWeight = diffuseWeight + specularWeight + transmissionWeight + clearcoatWeight;
		diffuseWeight /= totalWeight;
		specularWeight /= totalWeight;
		transmissionWeight /= totalWeight;
		clearcoatWeight /= totalWeight;
	}

	float bsdfEval(
		vec3 wo, vec3 clearcoatWo, vec3 wi, vec3 clearcoatWi, SurfaceRecord surf,
		float diffuseWeight, float specularWeight, float transmissionWeight, float clearcoatWeight, inout float specularPdf, inout vec3 color
	) {

		float metalness = surf.metalness;
		float transmission = surf.transmission;

		float spdf = 0.0;
		float dpdf = 0.0;
		float tpdf = 0.0;
		float cpdf = 0.0;
		color = vec3( 0.0 );

		vec3 halfVector = getHalfVector( wi, wo, surf.eta );

		// diffuse
		if ( diffuseWeight > 0.0 && wi.z > 0.0 ) {

			dpdf = diffuseEval( wo, wi, halfVector, surf, color );
			color *= 1.0 - surf.transmission;

		}

		// ggx specular
		if ( specularWeight > 0.0 && wi.z > 0.0 ) {

			vec3 outColor;
			spdf = specularEval( wo, wi, getHalfVector( wi, wo ), surf, outColor );
			color += outColor;

		}

		// transmission
		if ( transmissionWeight > 0.0 && wi.z < 0.0 ) {

			tpdf = transmissionEval( wo, wi, halfVector, surf, color );

		}

		// sheen
		color *= mix( 1.0, sheenAlbedoScaling( wo, wi, surf ), surf.sheen );
		color += sheenColor( wo, wi, halfVector, surf ) * surf.sheen;

		// clearcoat
		if ( clearcoatWi.z >= 0.0 && clearcoatWeight > 0.0 ) {

			vec3 clearcoatHalfVector = getHalfVector( clearcoatWo, clearcoatWi );
			cpdf = clearcoatEval( clearcoatWo, clearcoatWi, clearcoatHalfVector, surf, color );

		}

		float pdf =
			dpdf * diffuseWeight
			+ spdf * specularWeight
			+ tpdf * transmissionWeight
			+ cpdf * clearcoatWeight;

		// retrieve specular rays for the shadows flag
		specularPdf = spdf * specularWeight + cpdf * clearcoatWeight;

		return pdf;

	}

	float bsdfResult( vec3 worldWo, vec3 worldWi, SurfaceRecord surf, inout vec3 color ) {

		if ( surf.volumeParticle ) {

			color = surf.color / ( 4.0 * PI );
			return 1.0 / ( 4.0 * PI );

		}

		vec3 wo = normalize( surf.normalInvBasis * worldWo );
		vec3 wi = normalize( surf.normalInvBasis * worldWi );

		vec3 clearcoatWo = normalize( surf.clearcoatInvBasis * worldWo );
		vec3 clearcoatWi = normalize( surf.clearcoatInvBasis * worldWi );

		vec3 wh = getHalfVector( wo, wi, surf.eta );
		float diffuseWeight;
		float specularWeight;
		float transmissionWeight;
		float clearcoatWeight;
		getLobeWeights( wo, wi, wh, clearcoatWo, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight );

		float specularPdf;
		return bsdfEval( wo, clearcoatWo, wi, clearcoatWi, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight, specularPdf, color );

	}

	ScatterRecord bsdfSample( vec3 worldWo, SurfaceRecord surf ) {

		if ( surf.volumeParticle ) {

			ScatterRecord sampleRec;
			sampleRec.specularPdf = 0.0;
			sampleRec.pdf = 1.0 / ( 4.0 * PI );
			sampleRec.direction = sampleSphere( rand2( 16 ) );
			sampleRec.color = surf.color / ( 4.0 * PI );
			return sampleRec;

		}

		vec3 wo = normalize( surf.normalInvBasis * worldWo );
		vec3 clearcoatWo = normalize( surf.clearcoatInvBasis * worldWo );
		mat3 normalBasis = surf.normalBasis;
		mat3 invBasis = surf.normalInvBasis;
		mat3 clearcoatNormalBasis = surf.clearcoatBasis;
		mat3 clearcoatInvBasis = surf.clearcoatInvBasis;

		float diffuseWeight;
		float specularWeight;
		float transmissionWeight;
		float clearcoatWeight;
		// using normal and basically-reflected ray since we don't have proper half vector here
		getLobeWeights( wo, wo, vec3( 0, 0, 1 ), clearcoatWo, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight );

		float pdf[4];
		pdf[0] = diffuseWeight;
		pdf[1] = specularWeight;
		pdf[2] = transmissionWeight;
		pdf[3] = clearcoatWeight;

		float cdf[4];
		cdf[0] = pdf[0];
		cdf[1] = pdf[1] + cdf[0];
		cdf[2] = pdf[2] + cdf[1];
		cdf[3] = pdf[3] + cdf[2];

		if( cdf[3] != 0.0 ) {

			float invMaxCdf = 1.0 / cdf[3];
			cdf[0] *= invMaxCdf;
			cdf[1] *= invMaxCdf;
			cdf[2] *= invMaxCdf;
			cdf[3] *= invMaxCdf;

		} else {

			cdf[0] = 1.0;
			cdf[1] = 0.0;
			cdf[2] = 0.0;
			cdf[3] = 0.0;

		}

		vec3 wi;
		vec3 clearcoatWi;

		float r = rand( 15 );
		if ( r <= cdf[0] ) { // diffuse

			wi = diffuseDirection( wo, surf );
			clearcoatWi = normalize( clearcoatInvBasis * normalize( normalBasis * wi ) );

		} else if ( r <= cdf[1] ) { // specular

			wi = specularDirection( wo, surf );
			clearcoatWi = normalize( clearcoatInvBasis * normalize( normalBasis * wi ) );

		} else if ( r <= cdf[2] ) { // transmission / refraction

			wi = transmissionDirection( wo, surf );
			clearcoatWi = normalize( clearcoatInvBasis * normalize( normalBasis * wi ) );

		} else if ( r <= cdf[3] ) { // clearcoat

			clearcoatWi = clearcoatDirection( clearcoatWo, surf );
			wi = normalize( invBasis * normalize( clearcoatNormalBasis * clearcoatWi ) );

		}

		ScatterRecord result;
		result.pdf = bsdfEval( wo, clearcoatWo, wi, clearcoatWi, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight, result.specularPdf, result.color );
		result.direction = normalize( surf.normalBasis * wi );

		return result;

	}

`,BM=`

	// returns the hit distance given the material density
	float intersectFogVolume( Material material, float u ) {

		// https://raytracing.github.io/books/RayTracingTheNextWeek.html#volumes/constantdensitymediums
		return material.opacity == 0.0 ? INFINITY : ( - 1.0 / material.opacity ) * log( u );

	}

	ScatterRecord sampleFogVolume( SurfaceRecord surf, vec2 uv ) {

		ScatterRecord sampleRec;
		sampleRec.specularPdf = 0.0;
		sampleRec.pdf = 1.0 / ( 2.0 * PI );
		sampleRec.direction = sampleSphere( uv );
		sampleRec.color = surf.color;
		return sampleRec;

	}

`,UM=`

	// The GGX functions provide sampling and distribution information for normals as output so
	// in order to get probability of scatter direction the half vector must be computed and provided.
	// [0] https://www.cs.cornell.edu/~srm/publications/EGSR07-btdf.pdf
	// [1] https://hal.archives-ouvertes.fr/hal-01509746/document
	// [2] http://jcgt.org/published/0007/04/01/
	// [4] http://jcgt.org/published/0003/02/03/

	// trowbridge-reitz === GGX === GTR

	vec3 ggxDirection( vec3 incidentDir, vec2 roughness, vec2 uv ) {

		// TODO: try GGXVNDF implementation from reference [2], here. Needs to update ggxDistribution
		// function below, as well

		// Implementation from reference [1]
		// stretch view
		vec3 V = normalize( vec3( roughness * incidentDir.xy, incidentDir.z ) );

		// orthonormal basis
		vec3 T1 = ( V.z < 0.9999 ) ? normalize( cross( V, vec3( 0.0, 0.0, 1.0 ) ) ) : vec3( 1.0, 0.0, 0.0 );
		vec3 T2 = cross( T1, V );

		// sample point with polar coordinates (r, phi)
		float a = 1.0 / ( 1.0 + V.z );
		float r = sqrt( uv.x );
		float phi = ( uv.y < a ) ? uv.y / a * PI : PI + ( uv.y - a ) / ( 1.0 - a ) * PI;
		float P1 = r * cos( phi );
		float P2 = r * sin( phi ) * ( ( uv.y < a ) ? 1.0 : V.z );

		// compute normal
		vec3 N = P1 * T1 + P2 * T2 + V * sqrt( max( 0.0, 1.0 - P1 * P1 - P2 * P2 ) );

		// unstretch
		N = normalize( vec3( roughness * N.xy, max( 0.0, N.z ) ) );

		return N;

	}

	// Below are PDF and related functions for use in a Monte Carlo path tracer
	// as specified in Appendix B of the following paper
	// See equation (34) from reference [0]
	float ggxLamda( float theta, float roughness ) {

		float tanTheta = tan( theta );
		float tanTheta2 = tanTheta * tanTheta;
		float alpha2 = roughness * roughness;

		float numerator = - 1.0 + sqrt( 1.0 + alpha2 * tanTheta2 );
		return numerator / 2.0;

	}

	// See equation (34) from reference [0]
	float ggxShadowMaskG1( float theta, float roughness ) {

		return 1.0 / ( 1.0 + ggxLamda( theta, roughness ) );

	}

	// See equation (125) from reference [4]
	float ggxShadowMaskG2( vec3 wi, vec3 wo, float roughness ) {

		float incidentTheta = acos( wi.z );
		float scatterTheta = acos( wo.z );
		return 1.0 / ( 1.0 + ggxLamda( incidentTheta, roughness ) + ggxLamda( scatterTheta, roughness ) );

	}

	// See equation (33) from reference [0]
	float ggxDistribution( vec3 halfVector, float roughness ) {

		float a2 = roughness * roughness;
		a2 = max( EPSILON, a2 );
		float cosTheta = halfVector.z;
		float cosTheta4 = pow( cosTheta, 4.0 );

		if ( cosTheta == 0.0 ) return 0.0;

		float theta = acosSafe( halfVector.z );
		float tanTheta = tan( theta );
		float tanTheta2 = pow( tanTheta, 2.0 );

		float denom = PI * cosTheta4 * pow( a2 + tanTheta2, 2.0 );
		return ( a2 / denom );

	}

	// See equation (3) from reference [2]
	float ggxPDF( vec3 wi, vec3 halfVector, float roughness ) {

		float incidentTheta = acos( wi.z );
		float D = ggxDistribution( halfVector, roughness );
		float G1 = ggxShadowMaskG1( incidentTheta, roughness );

		return D * G1 * max( 0.0, dot( wi, halfVector ) ) / wi.z;

	}

`,NM=`

	// XYZ to sRGB color space
	const mat3 XYZ_TO_REC709 = mat3(
		3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);

	vec3 fresnel0ToIor( vec3 fresnel0 ) {

		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

	// Conversion FO/IOR
	vec3 iorToFresnel0( vec3 transmittedIor, float incidentIor ) {

		return square( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );

	}

	// ior is a value between 1.0 and 3.0. 1.0 is air interface
	float iorToFresnel0( float transmittedIor, float incidentIor ) {

		return square( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ) );

	}

	// Fresnel equations for dielectric/dielectric interfaces. See https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html
	vec3 evalSensitivity( float OPD, vec3 shift ) {

		float phase = 2.0 * PI * OPD * 1.0e-9;

		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );

		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - square( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * square( phase ) );
		xyz /= 1.0685e-7;

		vec3 srgb = XYZ_TO_REC709 * xyz;
		return srgb;

	}

	// See Section 4. Analytic Spectral Integration, A Practical Extension to Microfacet Theory for the Modeling of Varying Iridescence, https://hal.archives-ouvertes.fr/hal-01518344/document
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {

		vec3 I;

		// Force iridescenceIor -> outsideIOR when thinFilmThickness -> 0.0
		float iridescenceIor = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );

		// Evaluate the cosTheta on the base layer (Snell law)
		float sinTheta2Sq = square( outsideIOR / iridescenceIor ) * ( 1.0 - square( cosTheta1 ) );

		// Handle TIR:
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {

			return vec3( 1.0 );

		}

		float cosTheta2 = sqrt( cosTheta2Sq );

		// First interface
		float R0 = iorToFresnel0( iridescenceIor, outsideIOR );
		float R12 = schlickFresnel( cosTheta1, R0 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIor < outsideIOR ) {

			phi12 = PI;

		}

		float phi21 = PI - phi12;

		// Second interface
		vec3 baseIOR = fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0
		vec3 R1 = iorToFresnel0( baseIOR, iridescenceIor );
		vec3 R23 = schlickFresnel( cosTheta2, R1 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[0] < iridescenceIor ) {

			phi23[ 0 ] = PI;

		}

		if ( baseIOR[1] < iridescenceIor ) {

			phi23[ 1 ] = PI;

		}

		if ( baseIOR[2] < iridescenceIor ) {

			phi23[ 2 ] = PI;

		}

		// Phase shift
		float OPD = 2.0 * iridescenceIor * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;

		// Compound terms
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = square( T121 ) * R23 / ( vec3( 1.0 ) - R123 );

		// Reflectance term for m = 0 (DC term amplitude)
		vec3 C0 = R12 + Rs;
		I = C0;

		// Reflectance term for m > 0 (pairs of diracs)
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {

			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;

		}

		// Since out of gamut colors might be produced, negative color values are clamped to 0.
		return max( I, vec3( 0.0 ) );

	}

`,OM=`

	// See equation (2) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float velvetD( float cosThetaH, float roughness ) {

		float alpha = max( roughness, 0.07 );
		alpha = alpha * alpha;

		float invAlpha = 1.0 / alpha;

		float sqrCosThetaH = cosThetaH * cosThetaH;
		float sinThetaH = max( 1.0 - sqrCosThetaH, 0.001 );

		return ( 2.0 + invAlpha ) * pow( sinThetaH, 0.5 * invAlpha ) / ( 2.0 * PI );

	}

	float velvetParamsInterpolate( int i, float oneMinusAlphaSquared ) {

		const float p0[5] = float[5]( 25.3245, 3.32435, 0.16801, -1.27393, -4.85967 );
		const float p1[5] = float[5]( 21.5473, 3.82987, 0.19823, -1.97760, -4.32054 );

		return mix( p1[i], p0[i], oneMinusAlphaSquared );

	}

	float velvetL( float x, float alpha ) {

		float oneMinusAlpha = 1.0 - alpha;
		float oneMinusAlphaSquared = oneMinusAlpha * oneMinusAlpha;

		float a = velvetParamsInterpolate( 0, oneMinusAlphaSquared );
		float b = velvetParamsInterpolate( 1, oneMinusAlphaSquared );
		float c = velvetParamsInterpolate( 2, oneMinusAlphaSquared );
		float d = velvetParamsInterpolate( 3, oneMinusAlphaSquared );
		float e = velvetParamsInterpolate( 4, oneMinusAlphaSquared );

		return a / ( 1.0 + b * pow( abs( x ), c ) ) + d * x + e;

	}

	// See equation (3) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float velvetLambda( float cosTheta, float alpha ) {

		return abs( cosTheta ) < 0.5 ? exp( velvetL( cosTheta, alpha ) ) : exp( 2.0 * velvetL( 0.5, alpha ) - velvetL( 1.0 - cosTheta, alpha ) );

	}

	// See Section 3, Shadowing Term, in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float velvetG( float cosThetaO, float cosThetaI, float roughness ) {

		float alpha = max( roughness, 0.07 );
		alpha = alpha * alpha;

		return 1.0 / ( 1.0 + velvetLambda( cosThetaO, alpha ) + velvetLambda( cosThetaI, alpha ) );

	}

	float directionalAlbedoSheen( float cosTheta, float alpha ) {

		cosTheta = saturate( cosTheta );

		float c = 1.0 - cosTheta;
		float c3 = c * c * c;

		return 0.65584461 * c3 + 1.0 / ( 4.16526551 + exp( -7.97291361 * sqrt( alpha ) + 6.33516894 ) );

	}

	float sheenAlbedoScaling( vec3 wo, vec3 wi, SurfaceRecord surf ) {

		float alpha = max( surf.sheenRoughness, 0.07 );
		alpha = alpha * alpha;

		float maxSheenColor = max( max( surf.sheenColor.r, surf.sheenColor.g ), surf.sheenColor.b );

		float eWo = directionalAlbedoSheen( saturateCos( wo.z ), alpha );
		float eWi = directionalAlbedoSheen( saturateCos( wi.z ), alpha );

		return min( 1.0 - maxSheenColor * eWo, 1.0 - maxSheenColor * eWi );

	}

	// See Section 5, Layering, in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float sheenAlbedoScaling( vec3 wo, SurfaceRecord surf ) {

		float alpha = max( surf.sheenRoughness, 0.07 );
		alpha = alpha * alpha;

		float maxSheenColor = max( max( surf.sheenColor.r, surf.sheenColor.g ), surf.sheenColor.b );

		float eWo = directionalAlbedoSheen( saturateCos( wo.z ), alpha );

		return 1.0 - maxSheenColor * eWo;

	}

`,zM=`

#ifndef FOG_CHECK_ITERATIONS
#define FOG_CHECK_ITERATIONS 30
#endif

// returns whether the given material is a fog material or not
bool isMaterialFogVolume( sampler2D materials, uint materialIndex ) {

	uint i = materialIndex * uint( MATERIAL_PIXELS );
	vec4 s14 = texelFetch1D( materials, i + 14u );
	return bool( int( s14.b ) & 4 );

}

// returns true if we're within the first fog volume we hit
bool bvhIntersectFogVolumeHit(
	vec3 rayOrigin, vec3 rayDirection,
	usampler2D materialIndexAttribute, sampler2D materials,
	inout Material material
) {

	material.fogVolume = false;

	for ( int i = 0; i < FOG_CHECK_ITERATIONS; i ++ ) {

		// find nearest hit
		uvec4 faceIndices = uvec4( 0u );
		vec3 faceNormal = vec3( 0.0, 0.0, 1.0 );
		vec3 barycoord = vec3( 0.0 );
		float side = 1.0;
		float dist = 0.0;
		bool hit = bvhIntersectFirstHit( bvh, rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist );
		if ( hit ) {

			// if it's a fog volume return whether we hit the front or back face
			uint materialIndex = uTexelFetch1D( materialIndexAttribute, faceIndices.x ).r;
			if ( isMaterialFogVolume( materials, materialIndex ) ) {

				material = readMaterialInfo( materials, materialIndex );
				return side == - 1.0;

			} else {

				// move the ray forward
				rayOrigin = stepRayOrigin( rayOrigin, rayDirection, - faceNormal, dist );

			}

		} else {

			return false;

		}

	}

	return false;

}

`,HM=`

	// step through multiple surface hits and accumulate color attenuation based on transmissive surfaces
	// returns true if a solid surface was hit
	bool attenuateHit(
		RenderState state,
		Ray ray, float rayDist,
		out vec3 color
	) {

		// store the original bounce index so we can reset it after
		uint originalBounceIndex = sobolBounceIndex;

		int traversals = state.traversals;
		int transmissiveTraversals = state.transmissiveTraversals;
		bool isShadowRay = state.isShadowRay;
		Material fogMaterial = state.fogMaterial;

		vec3 startPoint = ray.origin;

		// hit results
		SurfaceHit surfaceHit;

		color = vec3( 1.0 );

		bool result = true;
		for ( int i = 0; i < traversals; i ++ ) {

			sobolBounceIndex ++;

			int hitType = traceScene( ray, fogMaterial, surfaceHit );

			if ( hitType == FOG_HIT ) {

				result = true;
				break;

			} else if ( hitType == SURFACE_HIT ) {

				float totalDist = distance( startPoint, ray.origin + ray.direction * surfaceHit.dist );
				if ( totalDist > rayDist ) {

					result = false;
					break;

				}

				// TODO: attenuate the contribution based on the PDF of the resulting ray including refraction values
				// Should be able to work using the material BSDF functions which will take into account specularity, etc.
				// TODO: should we account for emissive surfaces here?

				uint materialIndex = uTexelFetch1D( materialIndexAttribute, surfaceHit.faceIndices.x ).r;
				Material material = readMaterialInfo( materials, materialIndex );

				// adjust the ray to the new surface
				bool isEntering = surfaceHit.side == 1.0;
				ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );

				#if FEATURE_FOG

				if ( material.fogVolume ) {

					fogMaterial = material;
					fogMaterial.fogVolume = surfaceHit.side == 1.0;
					i -= sign( transmissiveTraversals );
					transmissiveTraversals --;
					continue;

				}

				#endif

				if ( ! material.castShadow && isShadowRay ) {

					continue;

				}

				vec2 uv = textureSampleBarycoord( attributesArray, ATTR_UV, surfaceHit.barycoord, surfaceHit.faceIndices.xyz ).xy;
				vec4 vertexColor = textureSampleBarycoord( attributesArray, ATTR_COLOR, surfaceHit.barycoord, surfaceHit.faceIndices.xyz );

				// albedo
				vec4 albedo = vec4( material.color, material.opacity );
				if ( material.map != - 1 ) {

					vec3 uvPrime = material.mapTransform * vec3( uv, 1 );
					albedo *= texture2D( textures, vec3( uvPrime.xy, material.map ) );

				}

				if ( material.vertexColors ) {

					albedo *= vertexColor;

				}

				// alphaMap
				if ( material.alphaMap != - 1 ) {

					vec3 uvPrime = material.alphaMapTransform * vec3( uv, 1 );
					albedo.a *= texture2D( textures, vec3( uvPrime.xy, material.alphaMap ) ).x;

				}

				// transmission
				float transmission = material.transmission;
				if ( material.transmissionMap != - 1 ) {

					vec3 uvPrime = material.transmissionMapTransform * vec3( uv, 1 );
					transmission *= texture2D( textures, vec3( uvPrime.xy, material.transmissionMap ) ).r;

				}

				// metalness
				float metalness = material.metalness;
				if ( material.metalnessMap != - 1 ) {

					vec3 uvPrime = material.metalnessMapTransform * vec3( uv, 1 );
					metalness *= texture2D( textures, vec3( uvPrime.xy, material.metalnessMap ) ).b;

				}

				float alphaTest = material.alphaTest;
				bool useAlphaTest = alphaTest != 0.0;
				float transmissionFactor = ( 1.0 - metalness ) * transmission;
				if (
					transmissionFactor < rand( 9 ) && ! (
						// material sidedness
						material.side != 0.0 && surfaceHit.side == material.side

						// alpha test
						|| useAlphaTest && albedo.a < alphaTest

						// opacity
						|| material.transparent && ! useAlphaTest && albedo.a < rand( 10 )
					)
				) {

					result = true;
					break;

				}

				if ( surfaceHit.side == 1.0 && isEntering ) {

					// only attenuate by surface color on the way in
					color *= mix( vec3( 1.0 ), albedo.rgb, transmissionFactor );

				} else if ( surfaceHit.side == - 1.0 ) {

					// attenuate by medium once we hit the opposite side of the model
					color *= transmissionAttenuation( surfaceHit.dist, material.attenuationColor, material.attenuationDistance );

				}

				bool isTransmissiveRay = dot( ray.direction, surfaceHit.faceNormal * surfaceHit.side ) < 0.0;
				if ( ( isTransmissiveRay || isEntering ) && transmissiveTraversals > 0 ) {

					i -= sign( transmissiveTraversals );
					transmissiveTraversals --;

				}

			} else {

				result = false;
				break;

			}

		}

		// reset the bounce index
		sobolBounceIndex = originalBounceIndex;
		return result;

	}

`,GM=`

	vec3 ndcToRayOrigin( vec2 coord ) {

		vec4 rayOrigin4 = cameraWorldMatrix * invProjectionMatrix * vec4( coord, - 1.0, 1.0 );
		return rayOrigin4.xyz / rayOrigin4.w;
	}

	Ray getCameraRay() {

		vec2 ssd = vec2( 1.0 ) / resolution;

		// Jitter the camera ray by finding a uv coordinate at a random sample
		// around this pixel's UV coordinate for AA
		vec2 ruv = rand2( 0 );
		vec2 jitteredUv = vUv + vec2( tentFilter( ruv.x ) * ssd.x, tentFilter( ruv.y ) * ssd.y );
		Ray ray;

		#if CAMERA_TYPE == 2

			// Equirectangular projection
			vec4 rayDirection4 = vec4( equirectUvToDirection( jitteredUv ), 0.0 );
			vec4 rayOrigin4 = vec4( 0.0, 0.0, 0.0, 1.0 );

			rayDirection4 = cameraWorldMatrix * rayDirection4;
			rayOrigin4 = cameraWorldMatrix * rayOrigin4;

			ray.direction = normalize( rayDirection4.xyz );
			ray.origin = rayOrigin4.xyz / rayOrigin4.w;

		#else

			// get [- 1, 1] normalized device coordinates
			vec2 ndc = 2.0 * jitteredUv - vec2( 1.0 );
			ray.origin = ndcToRayOrigin( ndc );

			#if CAMERA_TYPE == 1

				// Orthographic projection
				ray.direction = ( cameraWorldMatrix * vec4( 0.0, 0.0, - 1.0, 0.0 ) ).xyz;
				ray.direction = normalize( ray.direction );

			#else

				// Perspective projection
				ray.direction = normalize( mat3( cameraWorldMatrix ) * ( invProjectionMatrix * vec4( ndc, 0.0, 1.0 ) ).xyz );

			#endif

		#endif

		#if FEATURE_DOF
		{

			// depth of field
			vec3 focalPoint = ray.origin + normalize( ray.direction ) * physicalCamera.focusDistance;

			// get the aperture sample
			// if blades === 0 then we assume a circle
			vec3 shapeUVW= rand3( 1 );
			int blades = physicalCamera.apertureBlades;
			float anamorphicRatio = physicalCamera.anamorphicRatio;
			vec2 apertureSample = sampleAperture( blades, shapeUVW );
			apertureSample *= physicalCamera.bokehSize * 0.5 * 1e-3;

			// rotate the aperture shape
			apertureSample =
				rotateVector( apertureSample, physicalCamera.apertureRotation ) *
				saturate( vec2( anamorphicRatio, 1.0 / anamorphicRatio ) );

			// create the new ray
			ray.origin += ( cameraWorldMatrix * vec4( apertureSample, 0.0, 0.0 ) ).xyz;
			ray.direction = focalPoint - ray.origin;

		}
		#endif

		ray.direction = normalize( ray.direction );

		return ray;

	}

`,kM=`

	vec3 directLightContribution( vec3 worldWo, SurfaceRecord surf, RenderState state, vec3 rayOrigin ) {

		vec3 result = vec3( 0.0 );

		// uniformly pick a light or environment map
		if( lightsDenom != 0.0 && rand( 5 ) < float( lights.count ) / lightsDenom ) {

			// sample a light or environment
			LightRecord lightRec = randomLightSample( lights.tex, iesProfiles, lights.count, rayOrigin, rand3( 6 ) );

			bool isSampleBelowSurface = ! surf.volumeParticle && dot( surf.faceNormal, lightRec.direction ) < 0.0;
			if ( isSampleBelowSurface ) {

				lightRec.pdf = 0.0;

			}

			// check if a ray could even reach the light area
			Ray lightRay;
			lightRay.origin = rayOrigin;
			lightRay.direction = lightRec.direction;
			vec3 attenuatedColor;
			if (
				lightRec.pdf > 0.0 &&
				isDirectionValid( lightRec.direction, surf.normal, surf.faceNormal ) &&
				! attenuateHit( state, lightRay, lightRec.dist, attenuatedColor )
			) {

				// get the material pdf
				vec3 sampleColor;
				float lightMaterialPdf = bsdfResult( worldWo, lightRec.direction, surf, sampleColor );
				bool isValidSampleColor = all( greaterThanEqual( sampleColor, vec3( 0.0 ) ) );
				if ( lightMaterialPdf > 0.0 && isValidSampleColor ) {

					// weight the direct light contribution
					float lightPdf = lightRec.pdf / lightsDenom;
					float misWeight = lightRec.type == SPOT_LIGHT_TYPE || lightRec.type == DIR_LIGHT_TYPE || lightRec.type == POINT_LIGHT_TYPE ? 1.0 : misHeuristic( lightPdf, lightMaterialPdf );
					result = attenuatedColor * lightRec.emission * state.throughputColor * sampleColor * misWeight / lightPdf;

				}

			}

		} else if ( envMapInfo.totalSum != 0.0 && environmentIntensity != 0.0 ) {

			// find a sample in the environment map to include in the contribution
			vec3 envColor, envDirection;
			float envPdf = sampleEquirectProbability( rand2( 7 ), envColor, envDirection );
			envDirection = invEnvRotation3x3 * envDirection;

			// this env sampling is not set up for transmissive sampling and yields overly bright
			// results so we ignore the sample in this case.
			// TODO: this should be improved but how? The env samples could traverse a few layers?
			bool isSampleBelowSurface = ! surf.volumeParticle && dot( surf.faceNormal, envDirection ) < 0.0;
			if ( isSampleBelowSurface ) {

				envPdf = 0.0;

			}

			// check if a ray could even reach the surface
			Ray envRay;
			envRay.origin = rayOrigin;
			envRay.direction = envDirection;
			vec3 attenuatedColor;
			if (
				envPdf > 0.0 &&
				isDirectionValid( envDirection, surf.normal, surf.faceNormal ) &&
				! attenuateHit( state, envRay, INFINITY, attenuatedColor )
			) {

				// get the material pdf
				vec3 sampleColor;
				float envMaterialPdf = bsdfResult( worldWo, envDirection, surf, sampleColor );
				bool isValidSampleColor = all( greaterThanEqual( sampleColor, vec3( 0.0 ) ) );
				if ( envMaterialPdf > 0.0 && isValidSampleColor ) {

					// weight the direct light contribution
					envPdf /= lightsDenom;
					float misWeight = misHeuristic( envPdf, envMaterialPdf );
					result = attenuatedColor * environmentIntensity * envColor * state.throughputColor * sampleColor * misWeight / envPdf;

				}

			}

		}

		// Function changed to have a single return statement to potentially help with crashes on Mac OS.
		// See issue #470
		return result;

	}

`,VM=`

	#define SKIP_SURFACE 0
	#define HIT_SURFACE 1
	int getSurfaceRecord(
		Material material, SurfaceHit surfaceHit, sampler2DArray attributesArray,
		float accumulatedRoughness,
		inout SurfaceRecord surf
	) {

		if ( material.fogVolume ) {

			vec3 normal = vec3( 0, 0, 1 );

			SurfaceRecord fogSurface;
			fogSurface.volumeParticle = true;
			fogSurface.color = material.color;
			fogSurface.emission = material.emissiveIntensity * material.emissive;
			fogSurface.normal = normal;
			fogSurface.faceNormal = normal;
			fogSurface.clearcoatNormal = normal;

			surf = fogSurface;
			return HIT_SURFACE;

		}

		// uv coord for textures
		vec2 uv = textureSampleBarycoord( attributesArray, ATTR_UV, surfaceHit.barycoord, surfaceHit.faceIndices.xyz ).xy;
		vec4 vertexColor = textureSampleBarycoord( attributesArray, ATTR_COLOR, surfaceHit.barycoord, surfaceHit.faceIndices.xyz );

		// albedo
		vec4 albedo = vec4( material.color, material.opacity );
		if ( material.map != - 1 ) {

			vec3 uvPrime = material.mapTransform * vec3( uv, 1 );
			albedo *= texture2D( textures, vec3( uvPrime.xy, material.map ) );

		}

		if ( material.vertexColors ) {

			albedo *= vertexColor;

		}

		// alphaMap
		if ( material.alphaMap != - 1 ) {

			vec3 uvPrime = material.alphaMapTransform * vec3( uv, 1 );
			albedo.a *= texture2D( textures, vec3( uvPrime.xy, material.alphaMap ) ).x;

		}

		// possibly skip this sample if it's transparent, alpha test is enabled, or we hit the wrong material side
		// and it's single sided.
		// - alpha test is disabled when it === 0
		// - the material sidedness test is complicated because we want light to pass through the back side but still
		// be able to see the front side. This boolean checks if the side we hit is the front side on the first ray
		// and we're rendering the other then we skip it. Do the opposite on subsequent bounces to get incoming light.
		float alphaTest = material.alphaTest;
		bool useAlphaTest = alphaTest != 0.0;
		if (
			// material sidedness
			material.side != 0.0 && surfaceHit.side != material.side

			// alpha test
			|| useAlphaTest && albedo.a < alphaTest

			// opacity
			|| material.transparent && ! useAlphaTest && albedo.a < rand( 3 )
		) {

			return SKIP_SURFACE;

		}

		// fetch the interpolated smooth normal
		vec3 normal = normalize( textureSampleBarycoord(
			attributesArray,
			ATTR_NORMAL,
			surfaceHit.barycoord,
			surfaceHit.faceIndices.xyz
		).xyz );

		// roughness
		float roughness = material.roughness;
		if ( material.roughnessMap != - 1 ) {

			vec3 uvPrime = material.roughnessMapTransform * vec3( uv, 1 );
			roughness *= texture2D( textures, vec3( uvPrime.xy, material.roughnessMap ) ).g;

		}

		// metalness
		float metalness = material.metalness;
		if ( material.metalnessMap != - 1 ) {

			vec3 uvPrime = material.metalnessMapTransform * vec3( uv, 1 );
			metalness *= texture2D( textures, vec3( uvPrime.xy, material.metalnessMap ) ).b;

		}

		// emission
		vec3 emission = material.emissiveIntensity * material.emissive;
		if ( material.emissiveMap != - 1 ) {

			vec3 uvPrime = material.emissiveMapTransform * vec3( uv, 1 );
			emission *= texture2D( textures, vec3( uvPrime.xy, material.emissiveMap ) ).xyz;

		}

		// transmission
		float transmission = material.transmission;
		if ( material.transmissionMap != - 1 ) {

			vec3 uvPrime = material.transmissionMapTransform * vec3( uv, 1 );
			transmission *= texture2D( textures, vec3( uvPrime.xy, material.transmissionMap ) ).r;

		}

		// normal
		if ( material.flatShading ) {

			// if we're rendering a flat shaded object then use the face normals - the face normal
			// is provided based on the side the ray hits the mesh so flip it to align with the
			// interpolated vertex normals.
			normal = surfaceHit.faceNormal * surfaceHit.side;

		}

		vec3 baseNormal = normal;
		if ( material.normalMap != - 1 ) {

			vec4 tangentSample = textureSampleBarycoord(
				attributesArray,
				ATTR_TANGENT,
				surfaceHit.barycoord,
				surfaceHit.faceIndices.xyz
			);

			// some provided tangents can be malformed (0, 0, 0) causing the normal to be degenerate
			// resulting in NaNs and slow path tracing.
			if ( length( tangentSample.xyz ) > 0.0 ) {

				vec3 tangent = normalize( tangentSample.xyz );
				vec3 bitangent = normalize( cross( normal, tangent ) * tangentSample.w );
				mat3 vTBN = mat3( tangent, bitangent, normal );

				vec3 uvPrime = material.normalMapTransform * vec3( uv, 1 );
				vec3 texNormal = texture2D( textures, vec3( uvPrime.xy, material.normalMap ) ).xyz * 2.0 - 1.0;
				texNormal.xy *= material.normalScale;
				normal = vTBN * texNormal;

			}

		}

		normal *= surfaceHit.side;

		// clearcoat
		float clearcoat = material.clearcoat;
		if ( material.clearcoatMap != - 1 ) {

			vec3 uvPrime = material.clearcoatMapTransform * vec3( uv, 1 );
			clearcoat *= texture2D( textures, vec3( uvPrime.xy, material.clearcoatMap ) ).r;

		}

		// clearcoatRoughness
		float clearcoatRoughness = material.clearcoatRoughness;
		if ( material.clearcoatRoughnessMap != - 1 ) {

			vec3 uvPrime = material.clearcoatRoughnessMapTransform * vec3( uv, 1 );
			clearcoatRoughness *= texture2D( textures, vec3( uvPrime.xy, material.clearcoatRoughnessMap ) ).g;

		}

		// clearcoatNormal
		vec3 clearcoatNormal = baseNormal;
		if ( material.clearcoatNormalMap != - 1 ) {

			vec4 tangentSample = textureSampleBarycoord(
				attributesArray,
				ATTR_TANGENT,
				surfaceHit.barycoord,
				surfaceHit.faceIndices.xyz
			);

			// some provided tangents can be malformed (0, 0, 0) causing the normal to be degenerate
			// resulting in NaNs and slow path tracing.
			if ( length( tangentSample.xyz ) > 0.0 ) {

				vec3 tangent = normalize( tangentSample.xyz );
				vec3 bitangent = normalize( cross( clearcoatNormal, tangent ) * tangentSample.w );
				mat3 vTBN = mat3( tangent, bitangent, clearcoatNormal );

				vec3 uvPrime = material.clearcoatNormalMapTransform * vec3( uv, 1 );
				vec3 texNormal = texture2D( textures, vec3( uvPrime.xy, material.clearcoatNormalMap ) ).xyz * 2.0 - 1.0;
				texNormal.xy *= material.clearcoatNormalScale;
				clearcoatNormal = vTBN * texNormal;

			}

		}

		clearcoatNormal *= surfaceHit.side;

		// sheenColor
		vec3 sheenColor = material.sheenColor;
		if ( material.sheenColorMap != - 1 ) {

			vec3 uvPrime = material.sheenColorMapTransform * vec3( uv, 1 );
			sheenColor *= texture2D( textures, vec3( uvPrime.xy, material.sheenColorMap ) ).rgb;

		}

		// sheenRoughness
		float sheenRoughness = material.sheenRoughness;
		if ( material.sheenRoughnessMap != - 1 ) {

			vec3 uvPrime = material.sheenRoughnessMapTransform * vec3( uv, 1 );
			sheenRoughness *= texture2D( textures, vec3( uvPrime.xy, material.sheenRoughnessMap ) ).a;

		}

		// iridescence
		float iridescence = material.iridescence;
		if ( material.iridescenceMap != - 1 ) {

			vec3 uvPrime = material.iridescenceMapTransform * vec3( uv, 1 );
			iridescence *= texture2D( textures, vec3( uvPrime.xy, material.iridescenceMap ) ).r;

		}

		// iridescence thickness
		float iridescenceThickness = material.iridescenceThicknessMaximum;
		if ( material.iridescenceThicknessMap != - 1 ) {

			vec3 uvPrime = material.iridescenceThicknessMapTransform * vec3( uv, 1 );
			float iridescenceThicknessSampled = texture2D( textures, vec3( uvPrime.xy, material.iridescenceThicknessMap ) ).g;
			iridescenceThickness = mix( material.iridescenceThicknessMinimum, material.iridescenceThicknessMaximum, iridescenceThicknessSampled );

		}

		iridescence = iridescenceThickness == 0.0 ? 0.0 : iridescence;

		// specular color
		vec3 specularColor = material.specularColor;
		if ( material.specularColorMap != - 1 ) {

			vec3 uvPrime = material.specularColorMapTransform * vec3( uv, 1 );
			specularColor *= texture2D( textures, vec3( uvPrime.xy, material.specularColorMap ) ).rgb;

		}

		// specular intensity
		float specularIntensity = material.specularIntensity;
		if ( material.specularIntensityMap != - 1 ) {

			vec3 uvPrime = material.specularIntensityMapTransform * vec3( uv, 1 );
			specularIntensity *= texture2D( textures, vec3( uvPrime.xy, material.specularIntensityMap ) ).a;

		}

		surf.volumeParticle = false;

		surf.faceNormal = surfaceHit.faceNormal;
		surf.normal = normal;

		surf.metalness = metalness;
		surf.color = albedo.rgb;
		surf.emission = emission;

		surf.ior = material.ior;
		surf.transmission = transmission;
		surf.thinFilm = material.thinFilm;
		surf.attenuationColor = material.attenuationColor;
		surf.attenuationDistance = material.attenuationDistance;

		surf.clearcoatNormal = clearcoatNormal;
		surf.clearcoat = clearcoat;

		surf.sheen = material.sheen;
		surf.sheenColor = sheenColor;

		surf.iridescence = iridescence;
		surf.iridescenceIor = material.iridescenceIor;
		surf.iridescenceThickness = iridescenceThickness;

		surf.specularColor = specularColor;
		surf.specularIntensity = specularIntensity;

		// apply perceptual roughness factor from gltf. sheen perceptual roughness is
		// applied by its brdf function
		// https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#microfacet-surfaces
		surf.roughness = roughness * roughness;
		surf.clearcoatRoughness = clearcoatRoughness * clearcoatRoughness;
		surf.sheenRoughness = sheenRoughness;

		// frontFace is used to determine transmissive properties and PDF. If no transmission is used
		// then we can just always assume this is a front face.
		surf.frontFace = surfaceHit.side == 1.0 || transmission == 0.0;
		surf.eta = material.thinFilm || surf.frontFace ? 1.0 / material.ior : material.ior;
		surf.f0 = iorRatioToF0( surf.eta );

		// Compute the filtered roughness value to use during specular reflection computations.
		// The accumulated roughness value is scaled by a user setting and a "magic value" of 5.0.
		// If we're exiting something transmissive then scale the factor down significantly so we can retain
		// sharp internal reflections
		surf.filteredRoughness = applyFilteredGlossy( surf.roughness, accumulatedRoughness );
		surf.filteredClearcoatRoughness = applyFilteredGlossy( surf.clearcoatRoughness, accumulatedRoughness );

		// get the normal frames
		surf.normalBasis = getBasisFromNormal( surf.normal );
		surf.normalInvBasis = inverse( surf.normalBasis );

		surf.clearcoatBasis = getBasisFromNormal( surf.clearcoatNormal );
		surf.clearcoatInvBasis = inverse( surf.clearcoatBasis );

		return HIT_SURFACE;

	}
`,WM=`

	struct Ray {

		vec3 origin;
		vec3 direction;

	};

	struct SurfaceHit {

		uvec4 faceIndices;
		vec3 barycoord;
		vec3 faceNormal;
		float side;
		float dist;

	};

	struct RenderState {

		bool firstRay;
		bool transmissiveRay;
		bool isShadowRay;
		float accumulatedRoughness;
		int transmissiveTraversals;
		int traversals;
		uint depth;
		vec3 throughputColor;
		Material fogMaterial;

	};

	RenderState initRenderState() {

		RenderState result;
		result.firstRay = true;
		result.transmissiveRay = true;
		result.isShadowRay = false;
		result.accumulatedRoughness = 0.0;
		result.transmissiveTraversals = 0;
		result.traversals = 0;
		result.throughputColor = vec3( 1.0 );
		result.depth = 0u;
		result.fogMaterial.fogVolume = false;
		return result;

	}

`,XM=`

	#define NO_HIT 0
	#define SURFACE_HIT 1
	#define LIGHT_HIT 2
	#define FOG_HIT 3

	// Passing the global variable 'lights' into this function caused shader program errors.
	// So global variables like 'lights' and 'bvh' were moved out of the function parameters.
	// For more information, refer to: https://github.com/gkjohnson/three-gpu-pathtracer/pull/457
	int traceScene(
		Ray ray, Material fogMaterial, inout SurfaceHit surfaceHit
	) {

		int result = NO_HIT;
		bool hit = bvhIntersectFirstHit( bvh, ray.origin, ray.direction, surfaceHit.faceIndices, surfaceHit.faceNormal, surfaceHit.barycoord, surfaceHit.side, surfaceHit.dist );

		#if FEATURE_FOG

		if ( fogMaterial.fogVolume ) {

			// offset the distance so we don't run into issues with particles on the same surface
			// as other objects
			float particleDist = intersectFogVolume( fogMaterial, rand( 1 ) );
			if ( particleDist + RAY_OFFSET < surfaceHit.dist ) {

				surfaceHit.side = 1.0;
				surfaceHit.faceNormal = normalize( - ray.direction );
				surfaceHit.dist = particleDist;
				return FOG_HIT;

			}

		}

		#endif

		if ( hit ) {

			result = SURFACE_HIT;

		}

		return result;

	}

`;class YM extends nu{onBeforeRender(){this.setDefine("FEATURE_DOF",this.physicalCamera.bokehSize===0?0:1),this.setDefine("FEATURE_BACKGROUND_MAP",this.backgroundMap?1:0),this.setDefine("FEATURE_FOG",this.materials.features.isUsed("FOG")?1:0)}constructor(e){super({transparent:!0,depthWrite:!1,defines:{FEATURE_MIS:1,FEATURE_RUSSIAN_ROULETTE:1,FEATURE_DOF:1,FEATURE_BACKGROUND_MAP:0,FEATURE_FOG:1,RANDOM_TYPE:2,CAMERA_TYPE:0,DEBUG_MODE:0,ATTR_NORMAL:0,ATTR_TANGENT:1,ATTR_UV:2,ATTR_COLOR:3,MATERIAL_PIXELS:su},uniforms:{resolution:{value:new Se},opacity:{value:1},bounces:{value:10},transmissiveBounces:{value:10},filterGlossyFactor:{value:0},physicalCamera:{value:new ky},cameraWorldMatrix:{value:new We},invProjectionMatrix:{value:new We},bvh:{value:new fy},attributesArray:{value:new eM},materialIndexAttribute:{value:new Ld},materials:{value:new aM},textures:{value:new yh().texture},lights:{value:new Jy},iesProfiles:{value:new yh(360,180,{type:Gt,wrapS:Jt,wrapT:Jt}).texture},environmentIntensity:{value:1},environmentRotation:{value:new We},envMapInfo:{value:new Xy},backgroundBlur:{value:0},backgroundMap:{value:null},backgroundAlpha:{value:1},backgroundIntensity:{value:1},backgroundRotation:{value:new We},seed:{value:0},sobolTexture:{value:null},stratifiedTexture:{value:new pM},stratifiedOffsetTexture:{value:new AM(64,1)}},vertexShader:`

				varying vec2 vUv;
				void main() {

					vec4 mvPosition = vec4( position, 1.0 );
					mvPosition = modelViewMatrix * mvPosition;
					gl_Position = projectionMatrix * mvPosition;

					vUv = uv;

				}

			`,fragmentShader:`
				#define RAY_OFFSET 1e-4
				#define INFINITY 1e20

				precision highp isampler2D;
				precision highp usampler2D;
				precision highp sampler2DArray;
				vec4 envMapTexelToLinear( vec4 a ) { return a; }
				#include <common>

				// bvh intersection
				${py}
				${gy}
				${my}

				// uniform structs
				${yM}
				${SM}
				${MM}
				${TM}
				${bM}

				// random
				#if RANDOM_TYPE == 2 	// Stratified List

					${LM}

				#elif RANDOM_TYPE == 1 	// Sobol

					${Sh}
					${Od}
					${Oy}

					#define rand(v) sobol(v)
					#define rand2(v) sobol2(v)
					#define rand3(v) sobol3(v)
					#define rand4(v) sobol4(v)

				#else 					// PCG

				${Sh}

					// Using the sobol functions seems to break the the compiler on MacOS
					// - specifically the "sobolReverseBits" function.
					uint sobolPixelIndex = 0u;
					uint sobolPathIndex = 0u;
					uint sobolBounceIndex = 0u;

					#define rand(v) pcgRand()
					#define rand2(v) pcgRand2()
					#define rand3(v) pcgRand3()
					#define rand4(v) pcgRand4()

				#endif

				// common
				${IM}
				${RM}
				${zd}
				${DM}
				${PM}

				// environment
				uniform EquirectHdrInfo envMapInfo;
				uniform mat4 environmentRotation;
				uniform float environmentIntensity;

				// lighting
				uniform sampler2DArray iesProfiles;
				uniform LightsInfo lights;

				// background
				uniform float backgroundBlur;
				uniform float backgroundAlpha;
				#if FEATURE_BACKGROUND_MAP

				uniform sampler2D backgroundMap;
				uniform mat4 backgroundRotation;
				uniform float backgroundIntensity;

				#endif

				// camera
				uniform mat4 cameraWorldMatrix;
				uniform mat4 invProjectionMatrix;
				#if FEATURE_DOF

				uniform PhysicalCamera physicalCamera;

				#endif

				// geometry
				uniform sampler2DArray attributesArray;
				uniform usampler2D materialIndexAttribute;
				uniform sampler2D materials;
				uniform sampler2DArray textures;
				uniform BVH bvh;

				// path tracer
				uniform int bounces;
				uniform int transmissiveBounces;
				uniform float filterGlossyFactor;
				uniform int seed;

				// image
				uniform vec2 resolution;
				uniform float opacity;

				varying vec2 vUv;

				// globals
				mat3 envRotation3x3;
				mat3 invEnvRotation3x3;
				float lightsDenom;

				// sampling
				${CM}
				${EM}
				${wM}

				${zM}
				${UM}
				${OM}
				${NM}
				${BM}
				${FM}

				float applyFilteredGlossy( float roughness, float accumulatedRoughness ) {

					return clamp(
						max(
							roughness,
							accumulatedRoughness * filterGlossyFactor * 5.0 ),
						0.0,
						1.0
					);

				}

				vec3 sampleBackground( vec3 direction, vec2 uv ) {

					vec3 sampleDir = sampleHemisphere( direction, uv ) * 0.5 * backgroundBlur;

					#if FEATURE_BACKGROUND_MAP

					sampleDir = normalize( mat3( backgroundRotation ) * direction + sampleDir );
					return backgroundIntensity * sampleEquirectColor( backgroundMap, sampleDir );

					#else

					sampleDir = normalize( envRotation3x3 * direction + sampleDir );
					return environmentIntensity * sampleEquirectColor( envMapInfo.map, sampleDir );

					#endif

				}

				${WM}
				${GM}
				${XM}
				${HM}
				${kM}
				${VM}

				void main() {

					// init
					rng_initialize( gl_FragCoord.xy, seed );
					sobolPixelIndex = ( uint( gl_FragCoord.x ) << 16 ) | uint( gl_FragCoord.y );
					sobolPathIndex = uint( seed );

					// get camera ray
					Ray ray = getCameraRay();

					// inverse environment rotation
					envRotation3x3 = mat3( environmentRotation );
					invEnvRotation3x3 = inverse( envRotation3x3 );
					lightsDenom =
						( environmentIntensity == 0.0 || envMapInfo.totalSum == 0.0 ) && lights.count != 0u ?
							float( lights.count ) :
							float( lights.count + 1u );

					// final color
					gl_FragColor = vec4( 0, 0, 0, 1 );

					// surface results
					SurfaceHit surfaceHit;
					ScatterRecord scatterRec;

					// path tracing state
					RenderState state = initRenderState();
					state.transmissiveTraversals = transmissiveBounces;
					#if FEATURE_FOG

					state.fogMaterial.fogVolume = bvhIntersectFogVolumeHit(
						ray.origin, - ray.direction,
						materialIndexAttribute, materials,
						state.fogMaterial
					);

					#endif

					for ( int i = 0; i < bounces; i ++ ) {

						sobolBounceIndex ++;

						state.depth ++;
						state.traversals = bounces - i;
						state.firstRay = i == 0 && state.transmissiveTraversals == transmissiveBounces;

						int hitType = traceScene( ray, state.fogMaterial, surfaceHit );

						// check if we intersect any lights and accumulate the light contribution
						// TODO: we can add support for light surface rendering in the else condition if we
						// add the ability to toggle visibility of the the light
						if ( ! state.firstRay && ! state.transmissiveRay ) {

							LightRecord lightRec;
							float lightDist = hitType == NO_HIT ? INFINITY : surfaceHit.dist;
							for ( uint i = 0u; i < lights.count; i ++ ) {

								if (
									intersectLightAtIndex( lights.tex, ray.origin, ray.direction, i, lightRec ) &&
									lightRec.dist < lightDist
								) {

									#if FEATURE_MIS

									// weight the contribution
									// NOTE: Only area lights are supported for forward sampling and can be hit
									float misWeight = misHeuristic( scatterRec.pdf, lightRec.pdf / lightsDenom );
									gl_FragColor.rgb += lightRec.emission * state.throughputColor * misWeight;

									#else

									gl_FragColor.rgb += lightRec.emission * state.throughputColor;

									#endif

								}

							}

						}

						if ( hitType == NO_HIT ) {

							if ( state.firstRay || state.transmissiveRay ) {

								gl_FragColor.rgb += sampleBackground( ray.direction, rand2( 2 ) ) * state.throughputColor;
								gl_FragColor.a = backgroundAlpha;

							} else {

								#if FEATURE_MIS

								// get the PDF of the hit envmap point
								vec3 envColor;
								float envPdf = sampleEquirect( envRotation3x3 * ray.direction, envColor );
								envPdf /= lightsDenom;

								// and weight the contribution
								float misWeight = misHeuristic( scatterRec.pdf, envPdf );
								gl_FragColor.rgb += environmentIntensity * envColor * state.throughputColor * misWeight;

								#else

								gl_FragColor.rgb +=
									environmentIntensity *
									sampleEquirectColor( envMapInfo.map, envRotation3x3 * ray.direction ) *
									state.throughputColor;

								#endif

							}
							break;

						}

						uint materialIndex = uTexelFetch1D( materialIndexAttribute, surfaceHit.faceIndices.x ).r;
						Material material = readMaterialInfo( materials, materialIndex );

						#if FEATURE_FOG

						if ( hitType == FOG_HIT ) {

							material = state.fogMaterial;
							state.accumulatedRoughness += 0.2;

						} else if ( material.fogVolume ) {

							state.fogMaterial = material;
							state.fogMaterial.fogVolume = surfaceHit.side == 1.0;

							ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );

							i -= sign( state.transmissiveTraversals );
							state.transmissiveTraversals -= sign( state.transmissiveTraversals );
							continue;

						}

						#endif

						// early out if this is a matte material
						if ( material.matte && state.firstRay ) {

							gl_FragColor = vec4( 0.0 );
							break;

						}

						// if we've determined that this is a shadow ray and we've hit an item with no shadow casting
						// then skip it
						if ( ! material.castShadow && state.isShadowRay ) {

							ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );
							continue;

						}

						SurfaceRecord surf;
						if (
							getSurfaceRecord(
								material, surfaceHit, attributesArray, state.accumulatedRoughness,
								surf
							) == SKIP_SURFACE
						) {

							// only allow a limited number of transparency discards otherwise we could
							// crash the context with too long a loop.
							i -= sign( state.transmissiveTraversals );
							state.transmissiveTraversals -= sign( state.transmissiveTraversals );

							ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );
							continue;

						}

						scatterRec = bsdfSample( - ray.direction, surf );
						state.isShadowRay = scatterRec.specularPdf < rand( 4 );

						bool isBelowSurface = ! surf.volumeParticle && dot( scatterRec.direction, surf.faceNormal ) < 0.0;
						vec3 hitPoint = stepRayOrigin( ray.origin, ray.direction, isBelowSurface ? - surf.faceNormal : surf.faceNormal, surfaceHit.dist );

						// next event estimation
						#if FEATURE_MIS

						gl_FragColor.rgb += directLightContribution( - ray.direction, surf, state, hitPoint );

						#endif

						// accumulate a roughness value to offset diffuse, specular, diffuse rays that have high contribution
						// to a single pixel resulting in fireflies
						// TODO: handle transmissive surfaces
						if ( ! surf.volumeParticle && ! isBelowSurface ) {

							// determine if this is a rough normal or not by checking how far off straight up it is
							vec3 halfVector = normalize( - ray.direction + scatterRec.direction );
							state.accumulatedRoughness += max(
								sin( acosApprox( dot( halfVector, surf.normal ) ) ),
								sin( acosApprox( dot( halfVector, surf.clearcoatNormal ) ) )
							);

							state.transmissiveRay = false;

						}

						// accumulate emissive color
						gl_FragColor.rgb += ( surf.emission * state.throughputColor );

						// skip the sample if our PDF or ray is impossible
						if ( scatterRec.pdf <= 0.0 || ! isDirectionValid( scatterRec.direction, surf.normal, surf.faceNormal ) ) {

							break;

						}

						// if we're bouncing around the inside a transmissive material then decrement
						// perform this separate from a bounce
						bool isTransmissiveRay = ! surf.volumeParticle && dot( scatterRec.direction, surf.faceNormal * surfaceHit.side ) < 0.0;
						if ( ( isTransmissiveRay || isBelowSurface ) && state.transmissiveTraversals > 0 ) {

							state.transmissiveTraversals --;
							i --;

						}

						//

						// handle throughput color transformation
						// attenuate the throughput color by the medium color
						if ( ! surf.frontFace ) {

							state.throughputColor *= transmissionAttenuation( surfaceHit.dist, surf.attenuationColor, surf.attenuationDistance );

						}

						#if FEATURE_RUSSIAN_ROULETTE

						// russian roulette path termination
						// https://www.arnoldrenderer.com/research/physically_based_shader_design_in_arnold.pdf
						uint minBounces = 3u;
						float depthProb = float( state.depth < minBounces );

						float rrProb = luminance( state.throughputColor * scatterRec.color / scatterRec.pdf );
						rrProb /= luminance( state.throughputColor );
						rrProb = sqrt( rrProb );
						rrProb = max( rrProb, depthProb );
						rrProb = min( rrProb, 1.0 );
						if ( rand( 8 ) > rrProb ) {

							break;

						}

						// perform sample clamping here to avoid bright pixels
						state.throughputColor *= min( 1.0 / rrProb, 20.0 );

						#endif

						// adjust the throughput and discard and exit if we find discard the sample if there are any NaNs
						state.throughputColor *= scatterRec.color / scatterRec.pdf;
						if ( any( isnan( state.throughputColor ) ) || any( isinf( state.throughputColor ) ) ) {

							break;

						}

						//

						// prepare for next ray
						ray.direction = scatterRec.direction;
						ray.origin = hitPoint;

					}

					gl_FragColor.a *= opacity;

					#if DEBUG_MODE == 1

					// output the number of rays checked in the path and number of
					// transmissive rays encountered.
					gl_FragColor.rgb = vec3(
						float( state.depth ),
						transmissiveBounces - state.transmissiveTraversals,
						0.0
					);
					gl_FragColor.a = 1.0;

					#endif

				}

			`}),this.setValues(e)}}function*qM(){const{_renderer:n,_fsQuad:e,_blendQuad:t,_primaryTarget:i,_blendTargets:s,_sobolTarget:r,_subframe:a,alpha:c,material:o}=this,u=new nt,f=new nt,h=t.material;let[l,p]=s;for(;;){c?(h.opacity=this._opacityFactor/(this.samples+1),o.blending=Rt,o.opacity=1):(o.opacity=this._opacityFactor/(this.samples+1),o.blending=Ni);const[g,x,d,m]=a,v=i.width,_=i.height;o.resolution.set(v*d,_*m),o.sobolTexture=r.texture,o.stratifiedTexture.init(20,o.bounces+o.transmissiveBounces+5),o.stratifiedTexture.next(),o.seed++;const A=this.tiles.x||1,M=this.tiles.y||1,S=A*M,b=Math.ceil(v*d),y=Math.ceil(_*m),w=Math.floor(g*v),R=Math.floor(x*_),C=Math.ceil(b/A),P=Math.ceil(y/M);for(let B=0;B<M;B++)for(let U=0;U<A;U++){const F=n.getRenderTarget(),k=n.autoClear,L=n.getScissorTest();n.getScissor(u),n.getViewport(f);let W=U,O=B;if(!this.stableTiles){const j=this._currentTile%(A*M);W=j%A,O=~~(j/A),this._currentTile=j+1}const z=M-O-1;i.scissor.set(w+W*C,R+z*P,Math.min(C,b-W*C),Math.min(P,y-z*P)),i.viewport.set(w,R,b,y),n.setRenderTarget(i),n.setScissorTest(!0),n.autoClear=!1,e.render(n),n.setViewport(f),n.setScissor(u),n.setScissorTest(L),n.setRenderTarget(F),n.autoClear=k,c&&(h.target1=l.texture,h.target2=i.texture,n.setRenderTarget(p),t.render(n),n.setRenderTarget(F)),this.samples+=1/S,U===A-1&&B===M-1&&(this.samples=Math.round(this.samples)),yield}[l,p]=[p,l]}}const Th=new Te;class bh{get material(){return this._fsQuad.material}set material(e){this._fsQuad.material.removeEventListener("recompilation",this._compileFunction),e.addEventListener("recompilation",this._compileFunction),this._fsQuad.material=e}get target(){return this._alpha?this._blendTargets[1]:this._primaryTarget}set alpha(e){this._alpha!==e&&(e||(this._blendTargets[0].dispose(),this._blendTargets[1].dispose()),this._alpha=e,this.reset())}get alpha(){return this._alpha}get isCompiling(){return!!this._compilePromise}constructor(e){this.camera=null,this.tiles=new Se(3,3),this.stableNoise=!1,this.stableTiles=!0,this.samples=0,this._subframe=new nt(0,0,1,1),this._opacityFactor=1,this._renderer=e,this._alpha=!1,this._fsQuad=new sr(new YM),this._blendQuad=new sr(new Uy),this._task=null,this._currentTile=0,this._compilePromise=null,this._sobolTarget=new Hy().generate(e),this._primaryTarget=new _t(1,1,{format:rt,type:ht,magFilter:Ge,minFilter:Ge}),this._blendTargets=[new _t(1,1,{format:rt,type:ht,magFilter:Ge,minFilter:Ge}),new _t(1,1,{format:rt,type:ht,magFilter:Ge,minFilter:Ge})],this._compileFunction=()=>{const t=this.compileMaterial(this._fsQuad._mesh);t.then(()=>{this._compilePromise===t&&(this._compilePromise=null)}),this._compilePromise=t},this.material.addEventListener("recompilation",this._compileFunction)}compileMaterial(){return this._renderer.compileAsync(this._fsQuad._mesh)}setCamera(e){const{material:t}=this;t.cameraWorldMatrix.copy(e.matrixWorld),t.invProjectionMatrix.copy(e.projectionMatrixInverse),t.physicalCamera.updateFrom(e);let i=0;e.projectionMatrix.elements[15]>0&&(i=1),e.isEquirectCamera&&(i=2),t.setDefine("CAMERA_TYPE",i),this.camera=e}setSize(e,t){e=Math.ceil(e),t=Math.ceil(t),!(this._primaryTarget.width===e&&this._primaryTarget.height===t)&&(this._primaryTarget.setSize(e,t),this._blendTargets[0].setSize(e,t),this._blendTargets[1].setSize(e,t),this.reset())}getSize(e){e.x=this._primaryTarget.width,e.y=this._primaryTarget.height}dispose(){this._primaryTarget.dispose(),this._blendTargets[0].dispose(),this._blendTargets[1].dispose(),this._sobolTarget.dispose(),this._fsQuad.dispose(),this._blendQuad.dispose(),this._task=null}reset(){const{_renderer:e,_primaryTarget:t,_blendTargets:i}=this,s=e.getRenderTarget(),r=e.getClearAlpha();e.getClearColor(Th),e.setRenderTarget(t),e.setClearColor(0,0),e.clearColor(),e.setRenderTarget(i[0]),e.setClearColor(0,0),e.clearColor(),e.setRenderTarget(i[1]),e.setClearColor(0,0),e.clearColor(),e.setClearColor(Th,r),e.setRenderTarget(s),this.samples=0,this._task=null,this.material.stratifiedTexture.stableNoise=this.stableNoise,this.stableNoise&&(this.material.seed=0,this.material.stratifiedTexture.reset())}update(){this.material.onBeforeRender(),!this.isCompiling&&(this._task||(this._task=qM.call(this)),this._task.next())}}const is=new Se,Eh=new Se,za=new Rm,Ha=new Te;class QM extends yn{constructor(e=512,t=512){super(new Float32Array(e*t*4),e,t,rt,ht,Fr,zn,Jt,Je,Je),this.generationCallback=null}update(){this.dispose(),this.needsUpdate=!0;const{data:e,width:t,height:i}=this.image;for(let s=0;s<t;s++)for(let r=0;r<i;r++){Eh.set(t,i),is.set(s/t,r/i),is.x-=.5,is.y=1-is.y,za.theta=is.x*2*Math.PI,za.phi=is.y*Math.PI,za.radius=1,this.generationCallback(za,is,Eh,Ha);const c=4*(r*t+s);e[c+0]=Ha.r,e[c+1]=Ha.g,e[c+2]=Ha.b,e[c+3]=1}}copy(e){return super.copy(e),this.generationCallback=e.generationCallback,this}}const wh=new I;class KM extends QM{constructor(e=512){super(e,e),this.topColor=new Te().set(16777215),this.bottomColor=new Te().set(0),this.exponent=2,this.generationCallback=(t,i,s,r)=>{wh.setFromSpherical(t);const a=wh.y*.5+.5;r.lerpColors(this.bottomColor,this.topColor,a**this.exponent)}}copy(e){return super.copy(e),this.topColor.copy(e.topColor),this.bottomColor.copy(e.bottomColor),this}}class jM extends St{get map(){return this.uniforms.map.value}set map(e){this.uniforms.map.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}constructor(e){super({uniforms:{map:{value:null},opacity:{value:1}},vertexShader:`
				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
				uniform sampler2D map;
				uniform float opacity;
				varying vec2 vUv;

				vec4 clampedTexelFatch( sampler2D map, ivec2 px, int lod ) {

					vec4 res = texelFetch( map, ivec2( px.x, px.y ), 0 );

					#if defined( TONE_MAPPING )

					res.xyz = toneMapping( res.xyz );

					#endif

			  		return linearToOutputTexel( res );

				}

				void main() {

					vec2 size = vec2( textureSize( map, 0 ) );
					vec2 pxUv = vUv * size;
					vec2 pxCurr = floor( pxUv );
					vec2 pxFrac = fract( pxUv ) - 0.5;
					vec2 pxOffset;
					pxOffset.x = pxFrac.x > 0.0 ? 1.0 : - 1.0;
					pxOffset.y = pxFrac.y > 0.0 ? 1.0 : - 1.0;

					vec2 pxNext = clamp( pxOffset + pxCurr, vec2( 0.0 ), size - 1.0 );
					vec2 alpha = abs( pxFrac );

					vec4 p1 = mix(
						clampedTexelFatch( map, ivec2( pxCurr.x, pxCurr.y ), 0 ),
						clampedTexelFatch( map, ivec2( pxNext.x, pxCurr.y ), 0 ),
						alpha.x
					);

					vec4 p2 = mix(
						clampedTexelFatch( map, ivec2( pxCurr.x, pxNext.y ), 0 ),
						clampedTexelFatch( map, ivec2( pxNext.x, pxNext.y ), 0 ),
						alpha.x
					);

					gl_FragColor = mix( p1, p2, alpha.y );
					gl_FragColor.a *= opacity;
					#include <premultiplied_alpha_fragment>

				}
			`}),this.setValues(e)}}class ZM extends St{constructor(){super({uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:`
				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`
				#define ENVMAP_TYPE_CUBE_UV

				uniform samplerCube envMap;
				uniform float flipEnvMap;
				varying vec2 vUv;

				#include <common>
				#include <cube_uv_reflection_fragment>

				${zd}

				void main() {

					vec3 rayDirection = equirectUvToDirection( vUv );
					rayDirection.x *= flipEnvMap;
					gl_FragColor = textureCube( envMap, rayDirection );

				}`}),this.depthWrite=!1,this.depthTest=!1}}class Ch{constructor(e){this._renderer=e,this._quad=new sr(new ZM)}generate(e,t=null,i=null){if(!e.isCubeTexture)throw new Error("CubeToEquirectMaterial: Source can only be cube textures.");const s=e.images[0],r=this._renderer,a=this._quad;t===null&&(t=4*s.height),i===null&&(i=2*s.height);const c=new _t(t,i,{type:ht,colorSpace:s.colorSpace}),o=s.height,u=Math.log2(o)-2,f=1/o,h=1/(3*Math.max(Math.pow(2,u),7*16));a.material.defines.CUBEUV_MAX_MIP=`${u}.0`,a.material.defines.CUBEUV_TEXEL_WIDTH=h,a.material.defines.CUBEUV_TEXEL_HEIGHT=f,a.material.uniforms.envMap.value=e,a.material.uniforms.flipEnvMap.value=e.isRenderTargetTexture?1:-1,a.material.needsUpdate=!0;const l=r.getRenderTarget(),p=r.autoClear;r.autoClear=!0,r.setRenderTarget(c),a.render(r),r.setRenderTarget(l),r.autoClear=p;const g=new Uint16Array(t*i*4),x=new Float32Array(t*i*4);r.readRenderTargetPixels(c,0,0,t,i,x),c.dispose();for(let m=0,v=x.length;m<v;m++)g[m]=fi.toHalfFloat(x[m]);const d=new yn(g,t,i,rt,Gt);return d.minFilter=Ep,d.magFilter=Je,d.wrapS=zn,d.wrapT=zn,d.mapping=Fr,d.needsUpdate=!0,d}dispose(){this._quad.dispose()}}function JM(n){return n.extensions.get("EXT_float_blend")}const Gs=new Se;class $M{get multipleImportanceSampling(){return!!this._pathTracer.material.defines.FEATURE_MIS}set multipleImportanceSampling(e){this._pathTracer.material.setDefine("FEATURE_MIS",e?1:0)}get transmissiveBounces(){return this._pathTracer.material.transmissiveBounces}set transmissiveBounces(e){this._pathTracer.material.transmissiveBounces=e}get bounces(){return this._pathTracer.material.bounces}set bounces(e){this._pathTracer.material.bounces=e}get filterGlossyFactor(){return this._pathTracer.material.filterGlossyFactor}set filterGlossyFactor(e){this._pathTracer.material.filterGlossyFactor=e}get samples(){return this._pathTracer.samples}get target(){return this._pathTracer.target}get tiles(){return this._pathTracer.tiles}get stableNoise(){return this._pathTracer.stableNoise}set stableNoise(e){this._pathTracer.stableNoise=e}get isCompiling(){return!!this._pathTracer.isCompiling}constructor(e){this._renderer=e,this._generator=new By,this._pathTracer=new bh(e),this._queueReset=!1,this._clock=new hd,this._compilePromise=null,this._lowResPathTracer=new bh(e),this._lowResPathTracer.tiles.set(1,1),this._quad=new sr(new jM({map:null,transparent:!0,blending:Rt,premultipliedAlpha:e.getContextAttributes().premultipliedAlpha})),this._materials=null,this._previousEnvironment=null,this._previousBackground=null,this._internalBackground=null,this.renderDelay=100,this.minSamples=5,this.fadeDuration=500,this.enablePathTracing=!0,this.pausePathTracing=!1,this.dynamicLowRes=!1,this.lowResScale=.25,this.renderScale=1,this.synchronizeRenderSize=!0,this.rasterizeScene=!0,this.renderToCanvas=!0,this.textureSize=new Se(1024,1024),this.rasterizeSceneCallback=(t,i)=>{this._renderer.render(t,i)},this.renderToCanvasCallback=(t,i,s)=>{const r=i.autoClear;i.autoClear=!1,s.render(i),i.autoClear=r},this.setScene(new Or,new cn)}setBVHWorker(e){this._generator.setBVHWorker(e)}setScene(e,t,i={}){e.updateMatrixWorld(!0),t.updateMatrixWorld();const s=this._generator;if(s.setObjects(e),this._buildAsync)return s.generateAsync(i.onProgress).then(r=>this._updateFromResults(e,t,r));{const r=s.generate();return this._updateFromResults(e,t,r)}}setSceneAsync(...e){this._buildAsync=!0;const t=this.setScene(...e);return this._buildAsync=!1,t}setCamera(e){this.camera=e,this.updateCamera()}updateCamera(){const e=this.camera;e.updateMatrixWorld(),this._pathTracer.setCamera(e),this._lowResPathTracer.setCamera(e),this.reset()}updateMaterials(){const e=this._pathTracer.material,t=this._renderer,i=this._materials,s=this.textureSize,r=iM(i);e.textures.setTextures(t,r,s.x,s.y),e.materials.updateFrom(i,r),this.reset()}updateLights(){const e=this.scene,t=this._renderer,i=this._pathTracer.material,s=sM(e),r=nM(s);i.lights.updateFrom(s,r),i.iesProfiles.setTextures(t,r),this.reset()}updateEnvironment(){const e=this.scene,t=this._pathTracer.material;if(this._internalBackground&&(this._internalBackground.dispose(),this._internalBackground=null),t.backgroundBlur=e.backgroundBlurriness,t.backgroundIntensity=e.backgroundIntensity??1,t.backgroundRotation.makeRotationFromEuler(e.backgroundRotation).invert(),e.background===null)t.backgroundMap=null,t.backgroundAlpha=0;else if(e.background.isColor){this._colorBackground=this._colorBackground||new KM(16);const i=this._colorBackground;i.topColor.equals(e.background)||(i.topColor.set(e.background),i.bottomColor.set(e.background),i.update()),t.backgroundMap=i,t.backgroundAlpha=1}else if(e.background.isCubeTexture){if(e.background!==this._previousBackground){const i=new Ch(this._renderer).generate(e.background);this._internalBackground=i,t.backgroundMap=i,t.backgroundAlpha=1}}else t.backgroundMap=e.background,t.backgroundAlpha=1;if(t.environmentIntensity=e.environment!==null?e.environmentIntensity??1:0,t.environmentRotation.makeRotationFromEuler(e.environmentRotation).invert(),this._previousEnvironment!==e.environment&&e.environment!==null)if(e.environment.isCubeTexture){const i=new Ch(this._renderer).generate(e.environment);t.envMapInfo.updateFrom(i)}else t.envMapInfo.updateFrom(e.environment);this._previousEnvironment=e.environment,this._previousBackground=e.background,this.reset()}_updateFromResults(e,t,i){const{materials:s,geometry:r,bvh:a,bvhChanged:c,needsMaterialIndexUpdate:o}=i;this._materials=s;const f=this._pathTracer.material;return c&&(f.bvh.updateFrom(a),f.attributesArray.updateFrom(r.attributes.normal,r.attributes.tangent,r.attributes.uv,r.attributes.color)),o&&f.materialIndexAttribute.updateFrom(r.attributes.materialIndex),this._previousScene=e,this.scene=e,this.camera=t,this.updateCamera(),this.updateMaterials(),this.updateEnvironment(),this.updateLights(),i}renderSample(){const e=this._lowResPathTracer,t=this._pathTracer,i=this._renderer,s=this._clock,r=this._quad;this._updateScale(),this._queueReset&&(t.reset(),e.reset(),this._queueReset=!1,r.material.opacity=0,s.start());const a=s.getDelta()*1e3,c=s.getElapsedTime()*1e3;if(!this.pausePathTracing&&this.enablePathTracing&&this.renderDelay<=c&&!this.isCompiling&&t.update(),t.alpha=t.material.backgroundAlpha!==1||!JM(i),e.alpha=t.alpha,this.renderToCanvas){const o=this._renderer,u=this.minSamples;if(c>=this.renderDelay&&this.samples>=this.minSamples&&(this.fadeDuration!==0?r.material.opacity=Math.min(r.material.opacity+a/this.fadeDuration,1):r.material.opacity=1),!this.enablePathTracing||this.samples<u||r.material.opacity<1){if(this.dynamicLowRes&&!this.isCompiling){e.samples<1&&(e.material=t.material,e.update());const f=r.material.opacity;r.material.opacity=1-r.material.opacity,r.material.map=e.target.texture,r.render(o),r.material.opacity=f}(!this.dynamicLowRes&&this.rasterizeScene||this.dynamicLowRes&&this.isCompiling)&&this.rasterizeSceneCallback(this.scene,this.camera)}this.enablePathTracing&&r.material.opacity>0&&(r.material.opacity<1&&(r.material.blending=this.dynamicLowRes?Cc:Ni),r.material.map=t.target.texture,this.renderToCanvasCallback(t.target,o,r),r.material.blending=Rt)}}reset(){this._queueReset=!0,this._pathTracer.samples=0}dispose(){this._quad.dispose(),this._quad.material.dispose(),this._pathTracer.dispose()}_updateScale(){if(this.synchronizeRenderSize){this._renderer.getDrawingBufferSize(Gs);const e=Math.floor(this.renderScale*Gs.x),t=Math.floor(this.renderScale*Gs.y);if(this._pathTracer.getSize(Gs),Gs.x!==e||Gs.y!==t){const i=this.lowResScale;this._pathTracer.setSize(e,t),this._lowResPathTracer.setSize(Math.floor(e*i),Math.floor(t*i))}}}}/**
 * postprocessing v6.39.1 build Fri Apr 17 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var eS=(()=>{const n=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new Lt;return t.setAttribute("position",new $e(n,3)),t.setAttribute("uv",new $e(e,2)),t})(),Pn=class Ul{static get fullscreenGeometry(){return eS}constructor(e="Pass",t=new Or,i=new Xr){this.name=e,this.renderer=null,this.scene=t,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new st(Ul.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new Or),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=us){}render(e,t,i,s,r){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,i){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof _t||t instanceof ki||t instanceof Ot||t instanceof Ul)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},tS=class extends Pn{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(n,e,t,i,s){const r=n.state.buffers.stencil;r.setLocked(!1),r.setTest(!1)}},nS=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,Hd="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",Gd=class extends St{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new Ne(null),depthBuffer:new Ne(null),channelWeights:new Ne(null),opacity:new Ne(1)},blending:Rt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:nS,vertexShader:Hd}),this.depthFunc=Za}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(n){const e=n!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){const e=n!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(n){this.colorSpaceConversion!==n&&(n?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(n){n!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=n):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(n){this.uniforms.inputBuffer.value=n}getOpacity(n){return this.uniforms.opacity.value}setOpacity(n){this.uniforms.opacity.value=n}},iS=class extends Pn{constructor(n,e=!0){super("CopyPass"),this.fullscreenMaterial=new Gd,this.needsSwap=!1,this.renderTarget=n,n===void 0&&(this.renderTarget=new _t(1,1,{minFilter:Je,magFilter:Je,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(n){this.autoResize=n}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(n){this.autoResize=n}render(n,e,t,i,s){this.fullscreenMaterial.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){this.autoResize&&this.renderTarget.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==Mt?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":n!==null&&n.outputColorSpace===ut&&(this.renderTarget.texture.colorSpace=ut))}},Rh=new Te,ru=class extends Pn{constructor(n=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=n,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(n,e,t){this.color=n,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(n){this.overrideClearColor=n}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(n){this.overrideClearAlpha=n}render(n,e,t,i,s){const r=this.overrideClearColor,a=this.overrideClearAlpha,c=n.getClearAlpha(),o=r!==null,u=a>=0;o?(n.getClearColor(Rh),n.setClearColor(r,u?a:c)):u&&n.setClearAlpha(a),n.setRenderTarget(this.renderToScreen?null:e),n.clear(this.color,this.depth,this.stencil),o?n.setClearColor(Rh,c):u&&n.setClearAlpha(c)}},sS=class extends Pn{constructor(n,e){super("MaskPass",n,e),this.needsSwap=!1,this.clearPass=new ru(!1,!1,!0),this.inverse=!1}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get inverted(){return this.inverse}set inverted(n){this.inverse=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(n){this.inverted=n}render(n,e,t,i,s){const r=n.getContext(),a=n.state.buffers,c=this.scene,o=this.camera,u=this.clearPass,f=this.inverted?0:1,h=1-f;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.stencil.setFunc(r.ALWAYS,f,4294967295),a.stencil.setClear(h),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?u.render(n,null):(u.render(n,e),u.render(n,t))),this.renderToScreen?(n.setRenderTarget(null),n.render(c,o)):(n.setRenderTarget(e),n.render(c,o),n.setRenderTarget(t),n.render(c,o)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(r.EQUAL,1,4294967295),a.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.stencil.setLocked(!0)}},Tc=1/1e3,rS=1e3,aS=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(n){typeof document<"u"&&document.hidden!==void 0&&(n?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=n)}get delta(){return this._delta*Tc}get fixedDelta(){return this._fixedDelta*Tc}set fixedDelta(n){this._fixedDelta=n*rS}get elapsed(){return this._elapsed*Tc}update(n){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(n!==void 0?n:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(n){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},oS=class{constructor(n=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:i=0,frameBufferType:s}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,s,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new iS,this.depthTexture=null,this.depthRenderTarget=null,this.passes=[],this.timer=new aS,this.autoRenderToScreen=!0,this.setRenderer(n)}get multisampling(){return this.inputBuffer.samples}set multisampling(n){const e=this.inputBuffer,t=this.multisampling;t>0&&n>0?(this.inputBuffer.samples=n,this.outputBuffer.samples=n,this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==n&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,n),this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(n){if(this.renderer=n,n!==null){const e=n.getSize(new Se),t=n.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===Mt&&n.outputColorSpace===ut&&(this.inputBuffer.texture.colorSpace=ut,this.outputBuffer.texture.colorSpace=ut,this.inputBuffer.dispose(),this.outputBuffer.dispose()),n.autoClear=!1,this.setSize(e.width,e.height);for(const s of this.passes)s.initialize(n,t,i)}}replaceRenderer(n,e=!0){const t=this.renderer,i=t.domElement.parentNode;return this.setRenderer(n),e&&i!==null&&(i.removeChild(t.domElement),i.appendChild(n.domElement)),t}createDepthTexture(){const n=this.inputBuffer,e=new ls;this.depthTexture=e,n.stencilBuffer?(e.format=Fi,e.type=Js):e.type=ht;const t=e.clone();return t.name="EffectComposer.StableDepth",this.depthRenderTarget=new _t(n.width,n.height,{depthBuffer:!0,stencilBuffer:n.stencilBuffer,depthTexture:t}),t}blitDepthBuffer(n){const e=this.renderer,t=this.depthRenderTarget,i=e.properties,s=e.getContext();e.setRenderTarget(t);const r=i.get(n).__webglFramebuffer,a=i.get(t).__webglFramebuffer,c=n.stencilBuffer?s.DEPTH_BUFFER_BIT|s.STENCIL_BUFFER_BIT:s.DEPTH_BUFFER_BIT;s.bindFramebuffer(s.READ_FRAMEBUFFER,r),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,a),s.blitFramebuffer(0,0,n.width,n.height,0,0,t.width,t.height,c,s.NEAREST),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),e.setRenderTarget(null)}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.depthRenderTarget.dispose(),this.depthRenderTarget=null,this.inputBuffer.depthTexture=null,this.outputBuffer.depthTexture=null;for(const n of this.passes)n.setDepthTexture(null)}}createBuffer(n,e,t,i){const s=this.renderer,r=s===null?new Se:s.getDrawingBufferSize(new Se),a={minFilter:Je,magFilter:Je,stencilBuffer:e,depthBuffer:n,type:t},c=new _t(r.width,r.height,a);return i>0&&(c.samples=i),t===Mt&&s!==null&&s.outputColorSpace===ut&&(c.texture.colorSpace=ut),c.texture.name="EffectComposer.Buffer",c.texture.generateMipmaps=!1,c}setMainScene(n){for(const e of this.passes)e.mainScene=n}setMainCamera(n){for(const e of this.passes)e.mainCamera=n}addPass(n,e){const t=this.passes,i=this.renderer,s=i.getDrawingBufferSize(new Se),r=i.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(n.renderer=i,n.setSize(s.width,s.height),n.initialize(i,r,a),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),n.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,n):t.push(n),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),n.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const c=this.createDepthTexture();for(n of t)n.setDepthTexture(c)}else{const c=this.depthRenderTarget.depthTexture;n.setDepthTexture(c)}}removePass(n){const e=this.passes,t=e.indexOf(n);if(t!==-1&&e.splice(t,1).length>0){if(this.depthTexture!==null){const r=(c,o)=>c||o.needsDepthTexture;if(!e.reduce(r,!1)){const c=this.depthRenderTarget.depthTexture;n.getDepthTexture()===c&&n.setDepthTexture(null),this.deleteDepthTexture()}}this.autoRenderToScreen&&t===e.length&&(n.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const n=this.passes;this.deleteDepthTexture(),n.length>0&&(this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!1),this.passes=[])}render(n){const e=this.renderer,t=this.copyPass;let i=this.inputBuffer,s=this.outputBuffer,r,a=!1;n===void 0&&(this.timer.update(),n=this.timer.getDelta());for(const c of this.passes)if(c.enabled){if(i.depthTexture=this.depthTexture,s.depthTexture=null,c.render(e,i,s,n,a),c.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(i),c.needsSwap){if(a){t.renderToScreen=c.renderToScreen;const o=e.getContext(),u=e.state.buffers.stencil;u.setFunc(o.NOTEQUAL,1,4294967295),t.render(e,i,s,n,a),u.setFunc(o.EQUAL,1,4294967295)}r=i,i=s,s=r}c instanceof sS?a=!0:c instanceof tS&&(a=!1)}}setSize(n,e,t){const i=this.renderer,s=i.getSize(new Se);(n===void 0||e===void 0)&&(n=s.width,e=s.height),(s.width!==n||s.height!==e)&&i.setSize(n,e,t);const r=i.getDrawingBufferSize(new Se);this.inputBuffer.setSize(r.width,r.height),this.outputBuffer.setSize(r.width,r.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(r.width,r.height);for(const a of this.passes)a.setSize(r.width,r.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const n of this.passes)n.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),Pn.fullscreenGeometry.dispose()}},di={NONE:0,DEPTH:1,CONVOLUTION:2},tt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},cS=class{constructor(){this.shaderParts=new Map([[tt.FRAGMENT_HEAD,null],[tt.FRAGMENT_MAIN_UV,null],[tt.FRAGMENT_MAIN_IMAGE,null],[tt.VERTEX_HEAD,null],[tt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=di.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=tr}},bc=!1,Dh=class{constructor(n=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(n),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case Yt:t=this.materialsFlatShadedDoubleSide;break;case Ut:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case Yt:t=this.materialsDoubleSide;break;case Ut:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(n){if(!(n instanceof St))return n.clone();const e=n.uniforms,t=new Map;for(const s in e){const r=e[s].value;r.isRenderTargetTexture&&(e[s].value=null,t.set(s,r))}const i=n.clone();for(const s of t)e[s[0]].value=s[1],i.uniforms[s[0]].value=s[1];return i}setMaterial(n){if(this.disposeMaterials(),this.material=n,n!==null){const e=this.materials=[this.cloneMaterial(n),this.cloneMaterial(n),this.cloneMaterial(n)];for(const t of e)t.uniforms=Object.assign({},n.uniforms),t.side=Rn;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=Ut,i}),this.materialsDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=Yt,i}),this.materialsFlatShaded=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=Ut,i}),this.materialsFlatShadedDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=Yt,i})}}render(n,e,t){const i=n.shadowMap.enabled;if(n.shadowMap.enabled=!1,bc){const s=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),n.render(e,t);for(const r of s)r[0].material=r[1];this.meshCount!==s.size&&s.clear()}else{const s=e.overrideMaterial;e.overrideMaterial=this.material,n.render(e,t),e.overrideMaterial=s}n.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){const n=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of n)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return bc}static set workaroundEnabled(n){bc=n}},Ii=-1,Jn=class extends ti{constructor(n=null,e=Ii,t=Ii,i=1){super(),n!==null&&this.addEventListener("change",()=>n.setSize(this.baseSize.width,this.baseSize.height)),this.baseSize=new Se(1,1),this.preferredSize=new Se(e,t),this.target=this.preferredSize,this.s=i,this.effectiveSize=new Se,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const n=this.baseSize,e=this.preferredSize,t=this.effectiveSize,i=this.scale;e.width!==Ii?t.width=e.width:e.height!==Ii?t.width=Math.round(e.height*(n.width/Math.max(n.height,1))):t.width=Math.round(n.width*i),e.height!==Ii?t.height=e.height:e.width!==Ii?t.height=Math.round(e.width/Math.max(n.width/Math.max(n.height,1),1)):t.height=Math.round(n.height*i)}get width(){return this.effectiveSize.width}set width(n){this.preferredWidth=n}get height(){return this.effectiveSize.height}set height(n){this.preferredHeight=n}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(n){this.s!==n&&(this.s=n,this.preferredSize.setScalar(Ii),this.dispatchEvent({type:"change"}))}getScale(){return this.scale}setScale(n){this.scale=n}get baseWidth(){return this.baseSize.width}set baseWidth(n){this.baseSize.width!==n&&(this.baseSize.width=n,this.dispatchEvent({type:"change"}))}getBaseWidth(){return this.baseWidth}setBaseWidth(n){this.baseWidth=n}get baseHeight(){return this.baseSize.height}set baseHeight(n){this.baseSize.height!==n&&(this.baseSize.height=n,this.dispatchEvent({type:"change"}))}getBaseHeight(){return this.baseHeight}setBaseHeight(n){this.baseHeight=n}setBaseSize(n,e){(this.baseSize.width!==n||this.baseSize.height!==e)&&(this.baseSize.set(n,e),this.dispatchEvent({type:"change"}))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(n){this.preferredSize.width!==n&&(this.preferredSize.width=n,this.dispatchEvent({type:"change"}))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(n){this.preferredWidth=n}get preferredHeight(){return this.preferredSize.height}set preferredHeight(n){this.preferredSize.height!==n&&(this.preferredSize.height=n,this.dispatchEvent({type:"change"}))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(n){this.preferredHeight=n}setPreferredSize(n,e){(this.preferredSize.width!==n||this.preferredSize.height!==e)&&(this.preferredSize.set(n,e),this.dispatchEvent({type:"change"}))}copy(n){this.s=n.scale,this.baseSize.set(n.baseWidth,n.baseHeight),this.preferredSize.set(n.preferredWidth,n.preferredHeight),this.dispatchEvent({type:"change"})}static get AUTO_SIZE(){return Ii}},qe={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},lS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",uS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",fS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",hS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",dS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",pS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",mS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",gS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",vS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",xS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",_S="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",AS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",yS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",MS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",SS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",TS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",bS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ES="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",wS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",CS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",RS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",DS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",PS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",IS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",LS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",FS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",BS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",US="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",NS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",OS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",zS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",HS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",GS=new Map([[qe.ADD,lS],[qe.ALPHA,uS],[qe.AVERAGE,fS],[qe.COLOR,hS],[qe.COLOR_BURN,dS],[qe.COLOR_DODGE,pS],[qe.DARKEN,mS],[qe.DIFFERENCE,gS],[qe.DIVIDE,vS],[qe.DST,null],[qe.EXCLUSION,xS],[qe.HARD_LIGHT,_S],[qe.HARD_MIX,AS],[qe.HUE,yS],[qe.INVERT,MS],[qe.INVERT_RGB,SS],[qe.LIGHTEN,TS],[qe.LINEAR_BURN,bS],[qe.LINEAR_DODGE,ES],[qe.LINEAR_LIGHT,wS],[qe.LUMINOSITY,CS],[qe.MULTIPLY,RS],[qe.NEGATION,DS],[qe.NORMAL,PS],[qe.OVERLAY,IS],[qe.PIN_LIGHT,LS],[qe.REFLECT,FS],[qe.SATURATION,BS],[qe.SCREEN,US],[qe.SOFT_LIGHT,NS],[qe.SRC,OS],[qe.SUBTRACT,zS],[qe.VIVID_LIGHT,HS]]),kS=class extends ti{constructor(n,e=1){super(),this._blendFunction=n,this.opacity=new Ne(e)}getOpacity(){return this.opacity.value}setOpacity(n){this.opacity.value=n}get blendFunction(){return this._blendFunction}set blendFunction(n){this._blendFunction=n,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(n){this.blendFunction=n}getShaderCode(){return GS.get(this.blendFunction)}},au=class extends ti{constructor(n,e,{attributes:t=di.NONE,blendFunction:i=qe.NORMAL,defines:s=new Map,uniforms:r=new Map,extensions:a=null,vertexShader:c=null}={}){super(),this.name=n,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=c,this.defines=s,this.uniforms=r,this.extensions=a,this.blendMode=new kS(i),this.blendMode.addEventListener("change",o=>this.setChanged()),this._inputColorSpace=tr,this._outputColorSpace=jn}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(n){this._inputColorSpace=n,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n,this.setChanged()}set mainScene(n){}set mainCamera(n){}getName(){return this.name}setRenderer(n){this.renderer=n}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(n){this.attributes=n,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(n){this.fragmentShader=n,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(n){this.vertexShader=n,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(n,e=us){}update(n,e,t){}setSize(n,e){}initialize(n,e,t){}dispose(){for(const n of Object.keys(this)){const e=this[n];(e instanceof _t||e instanceof ki||e instanceof Ot||e instanceof Pn)&&this[n].dispose()}}},So={MEDIUM:2,LARGE:3},VS=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,WS="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",XS=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],YS=class extends St{constructor(n=new nt){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new Ne(null),texelSize:new Ne(new nt),scale:new Ne(1),kernel:new Ne(0)},blending:Rt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:VS,vertexShader:WS}),this.setTexelSize(n.x,n.y),this.kernelSize=So.MEDIUM}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.inputBuffer=n}get kernelSequence(){return XS[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(n){this.uniforms.scale.value=n}getScale(){return this.uniforms.scale.value}setScale(n){this.uniforms.scale.value=n}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(n){this.uniforms.kernel.value=n}setKernel(n){this.kernel=n}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e,n*.5,e*.5)}setSize(n,e){const t=1/n,i=1/e;this.uniforms.texelSize.value.set(t,i,t*.5,i*.5)}},qS=class extends Pn{constructor({kernelSize:n=So.MEDIUM,resolutionScale:e=.5,width:t=Jn.AUTO_SIZE,height:i=Jn.AUTO_SIZE,resolutionX:s=t,resolutionY:r=i}={}){super("KawaseBlurPass"),this.renderTargetA=new _t(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const a=this.resolution=new Jn(this,s,r,e);a.addEventListener("change",c=>this.setSize(a.baseWidth,a.baseHeight)),this._blurMaterial=new YS,this._blurMaterial.kernelSize=n,this.copyMaterial=new Gd}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(n){this._blurMaterial=n}get dithering(){return this.copyMaterial.dithering}set dithering(n){this.copyMaterial.dithering=n}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(n){this.blurMaterial.kernelSize=n}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get scale(){return this.blurMaterial.scale}set scale(n){this.blurMaterial.scale=n}getScale(){return this.blurMaterial.scale}setScale(n){this.blurMaterial.scale=n}getKernelSize(){return this.kernelSize}setKernelSize(n){this.kernelSize=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}render(n,e,t,i,s){const r=this.scene,a=this.camera,c=this.renderTargetA,o=this.renderTargetB,u=this.blurMaterial,f=u.kernelSequence;let h=e;this.fullscreenMaterial=u;for(let l=0,p=f.length;l<p;++l){const g=l&1?o:c;u.kernel=f[l],u.inputBuffer=h.texture,n.setRenderTarget(g),n.render(r,a),h=g}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=h.texture,n.setRenderTarget(this.renderToScreen?null:t),n.render(r,a)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e);const i=t.width,s=t.height;this.renderTargetA.setSize(i,s),this.renderTargetB.setSize(i,s),this.blurMaterial.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,t!==Mt?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):n!==null&&n.outputColorSpace===ut&&(this.renderTargetA.texture.colorSpace=ut,this.renderTargetB.texture.colorSpace=ut))}static get AUTO_SIZE(){return Jn.AUTO_SIZE}},QS=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`,KS=class extends St{constructor(n=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:_i.replace(/\D+/g,"")},uniforms:{inputBuffer:new Ne(null),threshold:new Ne(0),smoothing:new Ne(1),range:new Ne(null)},blending:Rt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:QS,vertexShader:Hd}),this.colorOutput=n,this.luminanceRange=e}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get threshold(){return this.uniforms.threshold.value}set threshold(n){this.smoothing>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=n}getThreshold(){return this.threshold}setThreshold(n){this.threshold=n}get smoothing(){return this.uniforms.smoothing.value}set smoothing(n){this.threshold>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=n}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(n){this.smoothing=n}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(n){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(n){n?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(n){return this.colorOutput}setColorOutputEnabled(n){this.colorOutput=n}get useRange(){return this.luminanceRange!==null}set useRange(n){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(n){n!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=n,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(n){this.luminanceRange=n}},jS=class extends Pn{constructor({renderTarget:n,luminanceRange:e,colorOutput:t,resolutionScale:i=1,width:s=Jn.AUTO_SIZE,height:r=Jn.AUTO_SIZE,resolutionX:a=s,resolutionY:c=r}={}){super("LuminancePass"),this.fullscreenMaterial=new KS(t,e),this.needsSwap=!1,this.renderTarget=n,this.renderTarget===void 0&&(this.renderTarget=new _t(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const o=this.resolution=new Jn(this,a,c,i);o.addEventListener("change",u=>this.setSize(o.baseWidth,o.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(n,e,t,i,s){const r=this.fullscreenMaterial;r.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height)}initialize(n,e,t){t!==void 0&&t!==Mt&&(this.renderTarget.texture.type=t,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},ZS=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,JS="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",$S=class extends St{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new Ne(null),texelSize:new Ne(new Se)},blending:Rt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:ZS,vertexShader:JS})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},eT=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,tT="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",nT=class extends St{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new Ne(null),supportBuffer:new Ne(null),texelSize:new Ne(new Se),radius:new Ne(.85)},blending:Rt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:eT,vertexShader:tT})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}set supportBuffer(n){this.uniforms.supportBuffer.value=n}get radius(){return this.uniforms.radius.value}set radius(n){this.uniforms.radius.value=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},iT=class extends Pn{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new _t(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new $S,this.upsamplingMaterial=new nT,this.resolution=new Se}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(n){if(this.levels!==n){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let t=0;t<n;++t){const i=e.clone();i.texture.name="Downsampling.Mipmap"+t,this.downsamplingMipmaps.push(i)}this.upsamplingMipmaps.push(e);for(let t=1,i=n-1;t<i;++t){const s=e.clone();s.texture.name="Upsampling.Mipmap"+t,this.upsamplingMipmaps.push(s)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(n){this.upsamplingMaterial.radius=n}render(n,e,t,i,s){const{scene:r,camera:a}=this,{downsamplingMaterial:c,upsamplingMaterial:o}=this,{downsamplingMipmaps:u,upsamplingMipmaps:f}=this;let h=e;this.fullscreenMaterial=c;for(let l=0,p=u.length;l<p;++l){const g=u[l];c.setSize(h.width,h.height),c.inputBuffer=h.texture,n.setRenderTarget(g),n.render(r,a),h=g}this.fullscreenMaterial=o;for(let l=f.length-1;l>=0;--l){const p=f[l];o.setSize(h.width,h.height),o.inputBuffer=h.texture,o.supportBuffer=u[l].texture,n.setRenderTarget(p),n.render(r,a),h=p}}setSize(n,e){const t=this.resolution;t.set(n,e);let i=t.width,s=t.height;for(let r=0,a=this.downsamplingMipmaps.length;r<a;++r)i=Math.round(i*.5),s=Math.round(s*.5),this.downsamplingMipmaps[r].setSize(i,s),r<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[r].setSize(i,s)}initialize(n,e,t){if(t!==void 0){const i=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const s of i)s.texture.type=t;if(t!==Mt)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(n!==null&&n.outputColorSpace===ut)for(const s of i)s.texture.colorSpace=ut}}dispose(){super.dispose();for(const n of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))n.dispose()}},sT=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,rT=class extends au{constructor({blendFunction:n=qe.SCREEN,luminanceThreshold:e=1,luminanceSmoothing:t=.03,mipmapBlur:i=!0,intensity:s=1,radius:r=.85,levels:a=8,kernelSize:c=So.LARGE,resolutionScale:o=.5,width:u=Jn.AUTO_SIZE,height:f=Jn.AUTO_SIZE,resolutionX:h=u,resolutionY:l=f}={}){super("BloomEffect",sT,{blendFunction:n,uniforms:new Map([["map",new Ne(null)],["intensity",new Ne(s)]])}),this.renderTarget=new _t(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new qS({kernelSize:c}),this.luminancePass=new jS({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=t,this.mipmapBlurPass=new iT,this.mipmapBlurPass.enabled=i,this.mipmapBlurPass.radius=r,this.mipmapBlurPass.levels=a,this.uniforms.get("map").value=i?this.mipmapBlurPass.texture:this.renderTarget.texture;const p=this.resolution=new Jn(this,h,l,o);p.addEventListener("change",g=>this.setSize(p.baseWidth,p.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get dithering(){return this.blurPass.dithering}set dithering(n){this.blurPass.dithering=n}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(n){this.blurPass.kernelSize=n}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(n){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(n){this.uniforms.get("intensity").value=n}getIntensity(){return this.intensity}setIntensity(n){this.intensity=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}update(n,e,t){const i=this.renderTarget,s=this.luminancePass;s.enabled?(s.render(n,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(n,s.renderTarget):this.blurPass.render(n,s.renderTarget,i)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(n,e):this.blurPass.render(n,e,i)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height),this.blurPass.resolution.copy(t),this.luminancePass.setSize(n,e),this.mipmapBlurPass.setSize(n,e)}initialize(n,e,t){this.blurPass.initialize(n,e,t),this.luminancePass.initialize(n,e,t),this.mipmapBlurPass.initialize(n,e,t),t!==void 0&&(this.renderTarget.texture.type=t,n!==null&&n.outputColorSpace===ut&&(this.renderTarget.texture.colorSpace=ut))}},Ph=class extends Pn{constructor(n,e="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=n,this.input=e}setInput(n){this.input=n}render(n,e,t,i,s){const r=this.fullscreenMaterial.uniforms;e!==null&&r!==void 0&&r[this.input]!==void 0&&(r[this.input].value=e.texture),n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}initialize(n,e,t){t!==void 0&&t!==Mt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},aT=class extends Pn{constructor(n,e,t=null){super("RenderPass",n,e),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new ru,this.overrideMaterialManager=t===null?null:new Dh(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get renderToScreen(){return super.renderToScreen}set renderToScreen(n){super.renderToScreen=n,this.clearPass.renderToScreen=n}get overrideMaterial(){const n=this.overrideMaterialManager;return n!==null?n.material:null}set overrideMaterial(n){const e=this.overrideMaterialManager;n!==null?e!==null?e.setMaterial(n):this.overrideMaterialManager=new Dh(n):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(n){this.overrideMaterial=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getSelection(){return this.selection}setSelection(n){this.selection=n}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(n){this.ignoreBackground=n}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(n){this.skipShadowMapUpdate=n}getClearPass(){return this.clearPass}render(n,e,t,i,s){const r=this.scene,a=this.camera,c=this.selection,o=a.layers.mask,u=r.background,f=n.shadowMap.autoUpdate,h=this.renderToScreen?null:e;c!==null&&a.layers.set(c.getLayer()),this.skipShadowMapUpdate&&(n.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(r.background=null),this.clearPass.enabled&&this.clearPass.render(n,e),n.setRenderTarget(h),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(n,r,a):n.render(r,a),a.layers.mask=o,r.background=u,n.shadowMap.autoUpdate=f}},kd={COLOR:2},oT={DISABLED:0},Vs={LOW:0,MEDIUM:1,HIGH:2,ULTRA:3},Dr={DEFAULT:0,ESKIL:1},cT=`varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
#if EDGE_DETECTION_MODE == 1
#include <common>
#endif
#if EDGE_DETECTION_MODE == 0 || PREDICATION_MODE == 1
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}vec3 gatherNeighbors(){float p=readDepth(vUv);float pLeft=readDepth(vUv0);float pTop=readDepth(vUv1);return vec3(p,pLeft,pTop);}
#elif PREDICATION_MODE == 2
uniform sampler2D predicationBuffer;vec3 gatherNeighbors(){float p=texture2D(predicationBuffer,vUv).r;float pLeft=texture2D(predicationBuffer,vUv0).r;float pTop=texture2D(predicationBuffer,vUv1).r;return vec3(p,pLeft,pTop);}
#endif
#if PREDICATION_MODE != 0
vec2 calculatePredicatedThreshold(){vec3 neighbours=gatherNeighbors();vec2 delta=abs(neighbours.xx-neighbours.yz);vec2 edges=step(PREDICATION_THRESHOLD,delta);return PREDICATION_SCALE*EDGE_THRESHOLD*(1.0-PREDICATION_STRENGTH*edges);}
#endif
#if EDGE_DETECTION_MODE != 0
uniform sampler2D inputBuffer;
#endif
void main(){
#if EDGE_DETECTION_MODE == 0
const vec2 threshold=vec2(DEPTH_THRESHOLD);
#elif PREDICATION_MODE != 0
vec2 threshold=calculatePredicatedThreshold();
#else
const vec2 threshold=vec2(EDGE_THRESHOLD);
#endif
#if EDGE_DETECTION_MODE == 0
vec3 neighbors=gatherNeighbors();vec2 delta=abs(neighbors.xx-vec2(neighbors.y,neighbors.z));vec2 edges=step(threshold,delta);if(dot(edges,vec2(1.0))==0.0){discard;}gl_FragColor=vec4(edges,0.0,1.0);
#elif EDGE_DETECTION_MODE == 1
float l=luminance(texture2D(inputBuffer,vUv).rgb);float lLeft=luminance(texture2D(inputBuffer,vUv0).rgb);float lTop=luminance(texture2D(inputBuffer,vUv1).rgb);vec4 delta;delta.xy=abs(l-vec2(lLeft,lTop));vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}float lRight=luminance(texture2D(inputBuffer,vUv2).rgb);float lBottom=luminance(texture2D(inputBuffer,vUv3).rgb);delta.zw=abs(l-vec2(lRight,lBottom));vec2 maxDelta=max(delta.xy,delta.zw);float lLeftLeft=luminance(texture2D(inputBuffer,vUv4).rgb);float lTopTop=luminance(texture2D(inputBuffer,vUv5).rgb);delta.zw=abs(vec2(lLeft,lTop)-vec2(lLeftLeft,lTopTop));maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges.xy*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);
#elif EDGE_DETECTION_MODE == 2
vec4 delta;vec3 c=texture2D(inputBuffer,vUv).rgb;vec3 cLeft=texture2D(inputBuffer,vUv0).rgb;vec3 t=abs(c-cLeft);delta.x=max(max(t.r,t.g),t.b);vec3 cTop=texture2D(inputBuffer,vUv1).rgb;t=abs(c-cTop);delta.y=max(max(t.r,t.g),t.b);vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}vec3 cRight=texture2D(inputBuffer,vUv2).rgb;t=abs(c-cRight);delta.z=max(max(t.r,t.g),t.b);vec3 cBottom=texture2D(inputBuffer,vUv3).rgb;t=abs(c-cBottom);delta.w=max(max(t.r,t.g),t.b);vec2 maxDelta=max(delta.xy,delta.zw);vec3 cLeftLeft=texture2D(inputBuffer,vUv4).rgb;t=abs(c-cLeftLeft);delta.z=max(max(t.r,t.g),t.b);vec3 cTopTop=texture2D(inputBuffer,vUv5).rgb;t=abs(c-cTopTop);delta.w=max(max(t.r,t.g),t.b);maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);
#endif
}`,lT=`uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,0.0);vUv1=vUv+texelSize*vec2(0.0,-1.0);
#if EDGE_DETECTION_MODE != 0
vUv2=vUv+texelSize*vec2(1.0,0.0);vUv3=vUv+texelSize*vec2(0.0,1.0);vUv4=vUv+texelSize*vec2(-2.0,0.0);vUv5=vUv+texelSize*vec2(0.0,-2.0);
#endif
gl_Position=vec4(position.xy,1.0,1.0);}`,uT=class extends St{constructor(n=new Se,e=kd.COLOR){super({name:"EdgeDetectionMaterial",defines:{THREE_REVISION:_i.replace(/\D+/g,""),LOCAL_CONTRAST_ADAPTATION_FACTOR:"2.0",EDGE_THRESHOLD:"0.1",DEPTH_THRESHOLD:"0.01",PREDICATION_MODE:"0",PREDICATION_THRESHOLD:"0.01",PREDICATION_SCALE:"2.0",PREDICATION_STRENGTH:"1.0",DEPTH_PACKING:"0"},uniforms:{inputBuffer:new Ne(null),depthBuffer:new Ne(null),predicationBuffer:new Ne(null),texelSize:new Ne(n)},blending:Rt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:cT,vertexShader:lT}),this.edgeDetectionMode=e}set depthBuffer(n){this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=us){this.depthBuffer=n,this.depthPacking=e}get edgeDetectionMode(){return Number(this.defines.EDGE_DETECTION_MODE)}set edgeDetectionMode(n){this.defines.EDGE_DETECTION_MODE=n.toFixed(0),this.needsUpdate=!0}getEdgeDetectionMode(){return this.edgeDetectionMode}setEdgeDetectionMode(n){this.edgeDetectionMode=n}get localContrastAdaptationFactor(){return Number(this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR)}set localContrastAdaptationFactor(n){this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR=n.toFixed("6"),this.needsUpdate=!0}getLocalContrastAdaptationFactor(){return this.localContrastAdaptationFactor}setLocalContrastAdaptationFactor(n){this.localContrastAdaptationFactor=n}get edgeDetectionThreshold(){return Number(this.defines.EDGE_THRESHOLD)}set edgeDetectionThreshold(n){this.defines.EDGE_THRESHOLD=n.toFixed("6"),this.defines.DEPTH_THRESHOLD=(n*.1).toFixed("6"),this.needsUpdate=!0}getEdgeDetectionThreshold(){return this.edgeDetectionThreshold}setEdgeDetectionThreshold(n){this.edgeDetectionThreshold=n}get predicationMode(){return Number(this.defines.PREDICATION_MODE)}set predicationMode(n){this.defines.PREDICATION_MODE=n.toFixed(0),this.needsUpdate=!0}getPredicationMode(){return this.predicationMode}setPredicationMode(n){this.predicationMode=n}set predicationBuffer(n){this.uniforms.predicationBuffer.value=n}setPredicationBuffer(n){this.uniforms.predicationBuffer.value=n}get predicationThreshold(){return Number(this.defines.PREDICATION_THRESHOLD)}set predicationThreshold(n){this.defines.PREDICATION_THRESHOLD=n.toFixed("6"),this.needsUpdate=!0}getPredicationThreshold(){return this.predicationThreshold}setPredicationThreshold(n){this.predicationThreshold=n}get predicationScale(){return Number(this.defines.PREDICATION_SCALE)}set predicationScale(n){this.defines.PREDICATION_SCALE=n.toFixed("6"),this.needsUpdate=!0}getPredicationScale(){return this.predicationScale}setPredicationScale(n){this.predicationScale=n}get predicationStrength(){return Number(this.defines.PREDICATION_STRENGTH)}set predicationStrength(n){this.defines.PREDICATION_STRENGTH=n.toFixed("6"),this.needsUpdate=!0}getPredicationStrength(){return this.predicationStrength}setPredicationStrength(n){this.predicationStrength=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},fT=`#define sampleLevelZeroOffset(t, coord, offset) texture2D(t, coord + offset * texelSize)
#if __VERSION__ < 300
#define round(v) floor(v + 0.5)
#endif
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform lowp sampler2D areaTexture;uniform lowp sampler2D searchTexture;uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}vec2 decodeDiagBilinearAccess(in vec2 e){e.r=e.r*abs(5.0*e.r-5.0*0.75);return round(e);}vec4 decodeDiagBilinearAccess(in vec4 e){e.rb=e.rb*abs(5.0*e.rb-5.0*0.75);return round(e);}vec2 searchDiag1(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 searchDiag2(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);coord.x+=0.25*texelSize.x;vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;e=decodeDiagBilinearAccess(e);coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 areaDiag(const in vec2 dist,const in vec2 e,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE_DIAG,AREATEX_MAX_DISTANCE_DIAG)*e+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.x+=0.5;texCoord.y+=AREATEX_SUBTEX_SIZE*offset;return texture2D(areaTexture,texCoord).rg;}vec2 calculateDiagWeights(const in vec2 texCoord,const in vec2 e,const in vec4 subsampleIndices){vec2 weights=vec2(0.0);vec4 d;vec2 end;if(e.r>0.0){d.xz=searchDiag1(texCoord,vec2(-1.0,1.0),end);d.x+=float(end.y>0.9);}else{d.xz=vec2(0.0);}d.yw=searchDiag1(texCoord,vec2(1.0,-1.0),end);if(d.x+d.y>2.0){vec4 coords=vec4(-d.x+0.25,d.x,d.y,-d.y-0.25)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.xy=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).rg;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).rg;c.yxwz=decodeDiagBilinearAccess(c.xyzw);vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.z);}d.xz=searchDiag2(texCoord,vec2(-1.0,-1.0),end);if(sampleLevelZeroOffset(inputBuffer,texCoord,vec2(1,0)).r>0.0){d.yw=searchDiag2(texCoord,vec2(1.0),end);d.y+=float(end.y>0.9);}else{d.yw=vec2(0.0);}if(d.x+d.y>2.0){vec4 coords=vec4(-d.x,-d.x,d.y,d.y)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.x=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).g;c.y=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(0,-1)).r;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).gr;vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.w).gr;}return weights;}float searchLength(const in vec2 e,const in float offset){vec2 scale=SEARCHTEX_SIZE*vec2(0.5,-1.0);vec2 bias=SEARCHTEX_SIZE*vec2(offset,1.0);scale+=vec2(-1.0,1.0);bias+=vec2(0.5,-0.5);scale*=1.0/SEARCHTEX_PACKED_SIZE;bias*=1.0/SEARCHTEX_PACKED_SIZE;return texture2D(searchTexture,scale*e+bias).r;}float searchXLeft(in vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x>end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(-2.0,0.0)*texelSize+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.0)+3.25;return texelSize.x*offset+texCoord.x;}float searchXRight(vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x<end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(2.0,0.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.5)+3.25;return-texelSize.x*offset+texCoord.x;}float searchYUp(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.y>end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=-vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.0)+3.25;return texelSize.y*offset+texCoord.y;}float searchYDown(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;i++){if(!(texCoord.y<end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.5)+3.25;return-texelSize.y*offset+texCoord.y;}vec2 area(const in vec2 dist,const in float e1,const in float e2,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE)*round(4.0*vec2(e1,e2))+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.y=AREATEX_SUBTEX_SIZE*offset+texCoord.y;return texture2D(areaTexture,texCoord).rg;}void detectHorizontalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){
#if !defined(DISABLE_CORNER_DETECTION)
vec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,1)).r;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).r;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,-2)).r;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,-2)).r;weights*=clamp(factor,0.0,1.0);
#endif
}void detectVerticalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){
#if !defined(DISABLE_CORNER_DETECTION)
vec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(1,0)).g;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).g;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(-2,0)).g;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(-2,1)).g;weights*=clamp(factor,0.0,1.0);
#endif
}void main(){vec4 weights=vec4(0.0);vec4 subsampleIndices=vec4(0.0);vec2 e=texture2D(inputBuffer,vUv).rg;if(e.g>0.0){
#if !defined(DISABLE_DIAG_DETECTION)
weights.rg=calculateDiagWeights(vUv,e,subsampleIndices);if(weights.r==-weights.g){
#endif
vec2 d;vec3 coords;coords.x=searchXLeft(vOffset[0].xy,vOffset[2].x);coords.y=vOffset[1].y;d.x=coords.x;float e1=texture2D(inputBuffer,coords.xy).r;coords.z=searchXRight(vOffset[0].zw,vOffset[2].y);d.y=coords.z;d=round(resolution.xx*d+-vPixCoord.xx);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.zy,vec2(1,0)).r;weights.rg=area(sqrtD,e1,e2,subsampleIndices.y);coords.y=vUv.y;detectHorizontalCornerPattern(weights.rg,coords.xyzy,d);
#if !defined(DISABLE_DIAG_DETECTION)
}else{e.r=0.0;}
#endif
}if(e.r>0.0){vec2 d;vec3 coords;coords.y=searchYUp(vOffset[1].xy,vOffset[2].z);coords.x=vOffset[0].x;d.x=coords.y;float e1=texture2D(inputBuffer,coords.xy).g;coords.z=searchYDown(vOffset[1].zw,vOffset[2].w);d.y=coords.z;d=round(resolution.yy*d-vPixCoord.yy);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.xz,vec2(0,1)).g;weights.ba=area(sqrtD,e1,e2,subsampleIndices.x);coords.x=vUv.x;detectVerticalCornerPattern(weights.ba,coords.xyxz,d);}gl_FragColor=weights;}`,hT="uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void main(){vUv=position.xy*0.5+0.5;vPixCoord=vUv*resolution;vOffset[0]=vUv.xyxy+texelSize.xyxy*vec4(-0.25,-0.125,1.25,-0.125);vOffset[1]=vUv.xyxy+texelSize.xyxy*vec4(-0.125,-0.25,-0.125,1.25);vOffset[2]=vec4(vOffset[0].xz,vOffset[1].yw)+vec4(-2.0,2.0,-2.0,2.0)*texelSize.xxyy*MAX_SEARCH_STEPS_FLOAT;gl_Position=vec4(position.xy,1.0,1.0);}",dT=class extends St{constructor(n=new Se,e=new Se){super({name:"SMAAWeightsMaterial",defines:{MAX_SEARCH_STEPS_INT:"16",MAX_SEARCH_STEPS_FLOAT:"16.0",MAX_SEARCH_STEPS_DIAG_INT:"8",MAX_SEARCH_STEPS_DIAG_FLOAT:"8.0",CORNER_ROUNDING:"25",CORNER_ROUNDING_NORM:"0.25",AREATEX_MAX_DISTANCE:"16.0",AREATEX_MAX_DISTANCE_DIAG:"20.0",AREATEX_PIXEL_SIZE:"(1.0 / vec2(160.0, 560.0))",AREATEX_SUBTEX_SIZE:"(1.0 / 7.0)",SEARCHTEX_SIZE:"vec2(66.0, 33.0)",SEARCHTEX_PACKED_SIZE:"vec2(64.0, 16.0)"},uniforms:{inputBuffer:new Ne(null),searchTexture:new Ne(null),areaTexture:new Ne(null),resolution:new Ne(e),texelSize:new Ne(n)},blending:Rt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:fT,vertexShader:hT})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get searchTexture(){return this.uniforms.searchTexture.value}set searchTexture(n){this.uniforms.searchTexture.value=n}get areaTexture(){return this.uniforms.areaTexture.value}set areaTexture(n){this.uniforms.areaTexture.value=n}setLookupTextures(n,e){this.searchTexture=n,this.areaTexture=e}get orthogonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_INT)}set orthogonalSearchSteps(n){const e=Math.min(Math.max(n,0),112);this.defines.MAX_SEARCH_STEPS_INT=e.toFixed("0"),this.defines.MAX_SEARCH_STEPS_FLOAT=e.toFixed("1"),this.needsUpdate=!0}setOrthogonalSearchSteps(n){this.orthogonalSearchSteps=n}get diagonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_DIAG_INT)}set diagonalSearchSteps(n){const e=Math.min(Math.max(n,0),20);this.defines.MAX_SEARCH_STEPS_DIAG_INT=e.toFixed("0"),this.defines.MAX_SEARCH_STEPS_DIAG_FLOAT=e.toFixed("1"),this.needsUpdate=!0}setDiagonalSearchSteps(n){this.diagonalSearchSteps=n}get diagonalDetection(){return this.defines.DISABLE_DIAG_DETECTION===void 0}set diagonalDetection(n){n?delete this.defines.DISABLE_DIAG_DETECTION:this.defines.DISABLE_DIAG_DETECTION="1",this.needsUpdate=!0}isDiagonalDetectionEnabled(){return this.diagonalDetection}setDiagonalDetectionEnabled(n){this.diagonalDetection=n}get cornerRounding(){return Number(this.defines.CORNER_ROUNDING)}set cornerRounding(n){const e=Math.min(Math.max(n,0),100);this.defines.CORNER_ROUNDING=e.toFixed("4"),this.defines.CORNER_ROUNDING_NORM=(e/100).toFixed("4"),this.needsUpdate=!0}setCornerRounding(n){this.cornerRounding=n}get cornerDetection(){return this.defines.DISABLE_CORNER_DETECTION===void 0}set cornerDetection(n){n?delete this.defines.DISABLE_CORNER_DETECTION:this.defines.DISABLE_CORNER_DETECTION="1",this.needsUpdate=!0}isCornerRoundingEnabled(){return this.cornerDetection}setCornerRoundingEnabled(n){this.cornerDetection=n}setSize(n,e){const t=this.uniforms;t.texelSize.value.set(1/n,1/e),t.resolution.value.set(n,e)}},Ih="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAAAeElEQVRYR+2XSwqAMAxEJ168ePEqwRSKhIIiuHjJqiU0gWE+1CQdApcVAMUAuARaMGCX1MIL/Ow13++9lW2s3mW9MWvsnWc/2fvGygwPAN4E8QzAA4CXAB6AHjG4JTHYI1ey3pcx6FHnEfhLDOIBKAmUBK6/ANUDTlROXAHd9EC1AAAAAElFTkSuQmCC",Lh="data:image/png;base64,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",pT="uniform sampler2D weightMap;varying vec2 vOffset0;varying vec2 vOffset1;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 a;a.x=texture2D(weightMap,vOffset0).a;a.y=texture2D(weightMap,vOffset1).g;a.wz=texture2D(weightMap,uv).rb;vec4 color=inputColor;if(dot(a,vec4(1.0))>=1e-5){bool h=max(a.x,a.z)>max(a.y,a.w);vec4 blendingOffset=vec4(0.0,a.y,0.0,a.w);vec2 blendingWeight=a.yw;movec(bvec4(h),blendingOffset,vec4(a.x,0.0,a.z,0.0));movec(bvec2(h),blendingWeight,a.xz);blendingWeight/=dot(blendingWeight,vec2(1.0));vec4 blendingCoord=blendingOffset*vec4(texelSize,-texelSize)+uv.xyxy;color=blendingWeight.x*texture2D(inputBuffer,blendingCoord.xy);color+=blendingWeight.y*texture2D(inputBuffer,blendingCoord.zw);}outputColor=color;}",mT="varying vec2 vOffset0;varying vec2 vOffset1;void mainSupport(const in vec2 uv){vOffset0=uv+texelSize*vec2(1.0,0.0);vOffset1=uv+texelSize*vec2(0.0,1.0);}",gT=class extends au{constructor({blendFunction:n=qe.SRC,preset:e=Vs.MEDIUM,edgeDetectionMode:t=kd.COLOR,predicationMode:i=oT.DISABLED}={}){super("SMAAEffect",pT,{vertexShader:mT,blendFunction:n,attributes:di.CONVOLUTION|di.DEPTH,uniforms:new Map([["weightMap",new Ne(null)]])});let s,r;arguments.length>1&&(s=arguments[0],r=arguments[1],arguments.length>2&&(e=arguments[2]),arguments.length>3&&(t=arguments[3])),this.renderTargetEdges=new _t(1,1,{depthBuffer:!1}),this.renderTargetEdges.texture.name="SMAA.Edges",this.renderTargetWeights=this.renderTargetEdges.clone(),this.renderTargetWeights.texture.name="SMAA.Weights",this.uniforms.get("weightMap").value=this.renderTargetWeights.texture,this.clearPass=new ru(!0,!1,!1),this.clearPass.overrideClearColor=new Te(0),this.clearPass.overrideClearAlpha=1,this.edgeDetectionPass=new Ph(new uT),this.edgeDetectionMaterial.edgeDetectionMode=t,this.edgeDetectionMaterial.predicationMode=i,this.weightsPass=new Ph(new dT);const a=new ym;a.onLoad=()=>{const c=new Ot(s);c.name="SMAA.Search",c.magFilter=Ge,c.minFilter=Ge,c.generateMipmaps=!1,c.needsUpdate=!0,c.flipY=!0,this.weightsMaterial.searchTexture=c;const o=new Ot(r);o.name="SMAA.Area",o.magFilter=Je,o.minFilter=Je,o.generateMipmaps=!1,o.needsUpdate=!0,o.flipY=!1,this.weightsMaterial.areaTexture=o,this.dispatchEvent({type:"load"})},a.itemStart("search"),a.itemStart("area"),s!==void 0&&r!==void 0?(a.itemEnd("search"),a.itemEnd("area")):typeof Image<"u"&&(s=new Image,r=new Image,s.addEventListener("load",()=>a.itemEnd("search")),r.addEventListener("load",()=>a.itemEnd("area")),s.src=Ih,r.src=Lh),this.applyPreset(e)}get edgesTexture(){return this.renderTargetEdges.texture}getEdgesTexture(){return this.edgesTexture}get weightsTexture(){return this.renderTargetWeights.texture}getWeightsTexture(){return this.weightsTexture}get edgeDetectionMaterial(){return this.edgeDetectionPass.fullscreenMaterial}get colorEdgesMaterial(){return this.edgeDetectionMaterial}getEdgeDetectionMaterial(){return this.edgeDetectionMaterial}get weightsMaterial(){return this.weightsPass.fullscreenMaterial}getWeightsMaterial(){return this.weightsMaterial}setEdgeDetectionThreshold(n){this.edgeDetectionMaterial.edgeDetectionThreshold=n}setOrthogonalSearchSteps(n){this.weightsMaterial.orthogonalSearchSteps=n}applyPreset(n){const e=this.edgeDetectionMaterial,t=this.weightsMaterial;switch(n){case Vs.LOW:e.edgeDetectionThreshold=.15,t.orthogonalSearchSteps=4,t.diagonalDetection=!1,t.cornerDetection=!1;break;case Vs.MEDIUM:e.edgeDetectionThreshold=.1,t.orthogonalSearchSteps=8,t.diagonalDetection=!1,t.cornerDetection=!1;break;case Vs.HIGH:e.edgeDetectionThreshold=.1,t.orthogonalSearchSteps=16,t.diagonalSearchSteps=8,t.cornerRounding=25,t.diagonalDetection=!0,t.cornerDetection=!0;break;case Vs.ULTRA:e.edgeDetectionThreshold=.05,t.orthogonalSearchSteps=32,t.diagonalSearchSteps=16,t.cornerRounding=25,t.diagonalDetection=!0,t.cornerDetection=!0;break}}setDepthTexture(n,e=us){this.edgeDetectionMaterial.depthBuffer=n,this.edgeDetectionMaterial.depthPacking=e}update(n,e,t){this.clearPass.render(n,this.renderTargetEdges),this.edgeDetectionPass.render(n,e,this.renderTargetEdges),this.weightsPass.render(n,this.renderTargetEdges,this.renderTargetWeights)}setSize(n,e){this.edgeDetectionMaterial.setSize(n,e),this.weightsMaterial.setSize(n,e),this.renderTargetEdges.setSize(n,e),this.renderTargetWeights.setSize(n,e)}dispose(){const{searchTexture:n,areaTexture:e}=this.weightsMaterial;n!==null&&e!==null&&(n.dispose(),e.dispose()),super.dispose()}static get searchImageDataURL(){return Ih}static get areaImageDataURL(){return Lh}},vT=`uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;
#if VIGNETTE_TECHNIQUE == 0
float d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));
#else
vec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));
#endif
outputColor=vec4(color,inputColor.a);}`,xT=class extends au{constructor({blendFunction:n,eskil:e=!1,technique:t=e?Dr.ESKIL:Dr.DEFAULT,offset:i=.5,darkness:s=.5}={}){super("VignetteEffect",vT,{blendFunction:n,defines:new Map([["VIGNETTE_TECHNIQUE",t.toFixed(0)]]),uniforms:new Map([["offset",new Ne(i)],["darkness",new Ne(s)]])})}get technique(){return Number(this.defines.get("VIGNETTE_TECHNIQUE"))}set technique(n){this.technique!==n&&(this.defines.set("VIGNETTE_TECHNIQUE",n.toFixed(0)),this.setChanged())}get eskil(){return this.technique===Dr.ESKIL}set eskil(n){this.technique=n?Dr.ESKIL:Dr.DEFAULT}getTechnique(){return this.technique}setTechnique(n){this.technique=n}get offset(){return this.uniforms.get("offset").value}set offset(n){this.uniforms.get("offset").value=n}getOffset(){return this.offset}setOffset(n){this.offset=n}get darkness(){return this.uniforms.get("darkness").value}set darkness(n){this.uniforms.get("darkness").value=n}getDarkness(){return this.darkness}setDarkness(n){this.darkness=n}},_T=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,AT="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",yT=class extends St{constructor(n,e,t,i,s=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:_i.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new Ne(null),depthBuffer:new Ne(null),resolution:new Ne(new Se),texelSize:new Ne(new Se),cameraNear:new Ne(.3),cameraFar:new Ne(1e3),aspect:new Ne(1),time:new Ne(0)},blending:Rt,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:s}),n&&this.setShaderParts(n),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(i)}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){this.uniforms.depthBuffer.value=n}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=us){this.depthBuffer=n,this.depthPacking=e}setShaderData(n){this.setShaderParts(n.shaderParts),this.setDefines(n.defines),this.setUniforms(n.uniforms),this.setExtensions(n.extensions)}setShaderParts(n){return this.fragmentShader=_T.replace(tt.FRAGMENT_HEAD,n.get(tt.FRAGMENT_HEAD)||"").replace(tt.FRAGMENT_MAIN_UV,n.get(tt.FRAGMENT_MAIN_UV)||"").replace(tt.FRAGMENT_MAIN_IMAGE,n.get(tt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=AT.replace(tt.VERTEX_HEAD,n.get(tt.VERTEX_HEAD)||"").replace(tt.VERTEX_MAIN_SUPPORT,n.get(tt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(n){for(const e of n.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(n){for(const e of n.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(n){this.extensions={};for(const e of n)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(n){this.encodeOutput!==n&&(n?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(n){return this.encodeOutput}setOutputEncodingEnabled(n){this.encodeOutput=n}get time(){return this.uniforms.time.value}set time(n){this.uniforms.time.value=n}setDeltaTime(n){this.uniforms.time.value+=n}adoptCameraSettings(n){this.copyCameraSettings(n)}copyCameraSettings(n){n&&(this.uniforms.cameraNear.value=n.near,this.uniforms.cameraFar.value=n.far,n instanceof cn?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(n,e){const t=this.uniforms;t.resolution.value.set(n,e),t.texelSize.value.set(1/n,1/e),t.aspect.value=n/e}static get Section(){return tt}};function Fh(n,e,t){for(const i of e){const s="$1"+n+i.charAt(0).toUpperCase()+i.slice(1),r=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(const a of t.entries())a[1]!==null&&t.set(a[0],a[1].replace(r,s))}}function MT(n,e,t){let i=e.getFragmentShader(),s=e.getVertexShader();const r=i!==void 0&&/mainImage/.test(i),a=i!==void 0&&/mainUv/.test(i);if(t.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&t.attributes&di.CONVOLUTION)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!r&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const c=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,o=t.shaderParts;let u=o.get(tt.FRAGMENT_HEAD)||"",f=o.get(tt.FRAGMENT_MAIN_UV)||"",h=o.get(tt.FRAGMENT_MAIN_IMAGE)||"",l=o.get(tt.VERTEX_HEAD)||"",p=o.get(tt.VERTEX_MAIN_SUPPORT)||"";const g=new Set,x=new Set;if(a&&(f+=`	${n}MainUv(UV);
`,t.uvTransformation=!0),s!==null&&/mainSupport/.test(s)){const v=/mainSupport *\([\w\s]*?uv\s*?\)/.test(s);p+=`	${n}MainSupport(`,p+=v?`vUv);
`:`);
`;for(const _ of s.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const A of _[1].split(/\s*,\s*/))t.varyings.add(A),g.add(A),x.add(A);for(const _ of s.matchAll(c))x.add(_[1])}for(const v of i.matchAll(c))x.add(v[1]);for(const v of e.defines.keys())x.add(v.replace(/\([\w\s,]*\)/g,""));for(const v of e.uniforms.keys())x.add(v);x.delete("while"),x.delete("for"),x.delete("if"),e.uniforms.forEach((v,_)=>t.uniforms.set(n+_.charAt(0).toUpperCase()+_.slice(1),v)),e.defines.forEach((v,_)=>t.defines.set(n+_.charAt(0).toUpperCase()+_.slice(1),v));const d=new Map([["fragment",i],["vertex",s]]);Fh(n,x,t.defines),Fh(n,x,d),i=d.get("fragment"),s=d.get("vertex");const m=e.blendMode;if(t.blendModes.set(m.blendFunction,m),r){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(h+=e.inputColorSpace===ut?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==jn?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);const v=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;h+=`${n}MainImage(color0, UV, `,t.attributes&di.DEPTH&&v.test(i)&&(h+="depth, ",t.readDepth=!0),h+=`color1);
	`;const _=n+"BlendOpacity";t.uniforms.set(_,m.opacity),h+=`color0 = blend${m.blendFunction}(color0, color1, ${_});

	`,u+=`uniform float ${_};

`}if(u+=i+`
`,s!==null&&(l+=s+`
`),o.set(tt.FRAGMENT_HEAD,u),o.set(tt.FRAGMENT_MAIN_UV,f),o.set(tt.FRAGMENT_MAIN_IMAGE,h),o.set(tt.VERTEX_HEAD,l),o.set(tt.VERTEX_MAIN_SUPPORT,p),e.extensions!==null)for(const v of e.extensions)t.extensions.add(v)}}var ST=class extends Pn{constructor(n,...e){super("EffectPass"),this.fullscreenMaterial=new yT(null,null,null,n),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(n){for(const e of this.effects)e.mainScene=n}set mainCamera(n){this.fullscreenMaterial.copyCameraSettings(n);for(const e of this.effects)e.mainCamera=n}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(n){this.fullscreenMaterial.encodeOutput=n}get dithering(){return this.fullscreenMaterial.dithering}set dithering(n){const e=this.fullscreenMaterial;e.dithering=n,e.needsUpdate=!0}setEffects(n){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=n.sort((e,t)=>t.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const n=new cS;let e=0;for(const a of this.effects)if(a.blendMode.blendFunction===qe.DST)n.attributes|=a.getAttributes()&di.DEPTH;else{if(n.attributes&a.getAttributes()&di.CONVOLUTION)throw new Error(`Convolution effects cannot be merged (${a.name})`);MT("e"+e++,a,n)}let t=n.shaderParts.get(tt.FRAGMENT_HEAD),i=n.shaderParts.get(tt.FRAGMENT_MAIN_IMAGE),s=n.shaderParts.get(tt.FRAGMENT_MAIN_UV);const r=/\bblend\b/g;for(const a of n.blendModes.values())t+=a.getShaderCode().replace(r,`blend${a.blendFunction}`)+`
`;n.attributes&di.DEPTH?(n.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,n.colorSpace===ut&&(i+=`color0 = sRGBToLinear(color0);
	`),n.uvTransformation?(s=`vec2 transformedUv = vUv;
`+s,n.defines.set("UV","transformedUv")):n.defines.set("UV","vUv"),n.shaderParts.set(tt.FRAGMENT_HEAD,t),n.shaderParts.set(tt.FRAGMENT_MAIN_IMAGE,i),n.shaderParts.set(tt.FRAGMENT_MAIN_UV,s);for(const[a,c]of n.shaderParts)c!==null&&n.shaderParts.set(a,c.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(n)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(n,e=us){this.fullscreenMaterial.depthBuffer=n,this.fullscreenMaterial.depthPacking=e;for(const t of this.effects)t.setDepthTexture(n,e)}render(n,e,t,i,s){for(const r of this.effects)r.update(n,e,i);if(!this.skipRendering||this.renderToScreen){const r=this.fullscreenMaterial;r.inputBuffer=e.texture,r.time+=i*this.timeScale,n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}}setSize(n,e){this.fullscreenMaterial.setSize(n,e);for(const t of this.effects)t.setSize(n,e)}initialize(n,e,t){this.renderer=n;for(const i of this.effects)i.initialize(n,e,t);this.updateMaterial(),t!==void 0&&t!==Mt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const n of this.effects)n.removeEventListener("change",this.listener),n.dispose()}handleEvent(n){switch(n.type){case"change":this.recompile();break}}};const To=document.getElementById("canvas-container"),Wi=document.getElementById("status-overlay"),ao=document.getElementById("status-title"),Vd=document.getElementById("status-subtitle"),Wd=document.getElementById("status-hint"),ou=document.getElementById("move-number"),Xd=document.getElementById("level-name"),Xi=document.getElementById("home-screen"),TT=document.getElementById("play-btn"),Ec=document.getElementById("editor-btn"),Ai=document.getElementById("level-select"),bT=document.getElementById("ls-back"),Gi=document.getElementById("game-ui"),oo=document.getElementById("split-hint"),Cn=document.getElementById("editor-ui"),pi=document.getElementById("edit-btn"),Dn=document.getElementById("cam-toggle"),Bh=document.getElementById("cam-text"),{scene:mt,renderer:zr}=C_(To,$t[0].sky),kn=R_(),{camera:ft,update:Uh}=kn;D_(mt);const cr=new lA({count:150,speed:.4,opacity:.6,color:new Te("#ffe8b0"),size:1.5,scale:[20,12,20],noise:[.5,.3,.5]});cr.setPixelRatio(zr.getPixelRatio());cr.position.set(3,3,1);mt.add(cr);const Hr=X_(mt),os=Y_(),$n=tA(mt,ft,zr),Ur=new Te,Nh=new Te;function cu(n,e,t){return Ur.set(n),Nh.set(e),Ur.lerp(Nh,t),"#"+Ur.getHexString()}function ei(n){const e=$t[n]||$t[0];Yr(e.sky),mt.fog.color.set(e.fog),cr.color=new Te(e.sparkle)}const bo=new oS(zr,{multisampling:Math.min(4,zr.capabilities.maxSamples)});bo.addPass(new aT(mt,ft));const ET=new gT({preset:Vs.HIGH}),wT=new rT({luminanceThreshold:.82,luminanceSmoothing:.2,intensity:.2,kernelSize:So.MEDIUM,mipmapBlur:!0}),CT=new xT({offset:.3,darkness:.35}),RT=new ST(ft,ET,wT,CT);bo.addPass(RT);const pn=new $M(zr);pn.bounces=4;pn.renderScale=1;pn.rasterizeScene=!0;pn.fadeDuration=600;pn.minSamples=3;pn.renderDelay=200;pn.filterGlossyFactor=.5;pn.tiles.set(2,2);pn.rasterizeSceneCallback=()=>{bo.render()};let Vn=!0;function DT(){ft.updateMatrixWorld(),pn.setScene(mt,ft),Vn=!1}window.addEventListener("resize",()=>{bo.setSize(window.innerWidth,window.innerHeight)});const te={blockApi:null,gridApi:null,moves:0,isWon:!1,isTransitioning:!1,currentLevel:0,moveHistory:[],isCustomLevel:!1,isSplit:!1,cubes:null,activeCubeIndex:0};function lu(){try{return JSON.parse(localStorage.getItem("bloxorz-progress")||"{}")}catch{return{}}}function PT(n){const e=lu();e.completed||(e.completed=[]),e.completed.includes(n)||e.completed.push(n),e.best||(e.best={});const t=e.best[n];(!t||te.moves<t)&&(e.best[n]=te.moves),localStorage.setItem("bloxorz-progress",JSON.stringify(e))}function IT(n){if(n===0)return!0;const e=lu(),t=Hn[n-1].id;return e.completed&&e.completed.includes(t)}let Oi=null,Qs=null,xt="home";function LT(){const n=$t[0];ei(0),Qs=ql(mt,{layout:[[0,1,1,1,0],[1,1,1,1,1],[1,1,1,1,1],[0,1,1,2,0]],startRow:1,startCol:2,switches:{},bridges:{}},!0,{tiles:n.tiles,goal:n.goal}),Oi=Ql(mt,2,1,n.block)}function uu(){Qs&&(mt.remove(Qs.gridGroup),Qs=null),Oi&&(mt.remove(Oi.mesh),Oi=null)}function co(){xt="home",Xi.classList.add("visible"),Ai.classList.remove("visible"),Gi.style.display="none",Wi.classList.remove("visible")}function fu(){te.gridApi&&(mt.remove(te.gridApi.gridGroup),te.gridApi=null),te.blockApi&&(mt.remove(te.blockApi.mesh),te.blockApi=null),du(),te.isWon=!1,te.isTransitioning=!1}function Gr(){fu(),uu(),LT()}function FT(n=!1){if(xt!=="transitioning")if(Ai.classList.remove("visible"),Xi.classList.remove("visible"),Gi.style.display="none",Wi.classList.remove("visible"),Dn&&(Dn.style.display="none"),n&&xt==="game"){let f=function(){const h=Math.min((performance.now()-o)/u,1),l=h<.5?4*h*h*h:1-Math.pow(-2*h+2,3)/2,p=Math.sin(h*Math.PI)*4;ft.position.lerpVectors(t,c,l),ft.position.y+=p;const g=i.clone().lerp(a,l);ft.lookAt(g);const x=s.sky.map((d,m)=>cu(d,r.sky[m],l));Yr(x),mt.fog.color.copy(new Te(s.fog)).lerp(new Te(r.fog),l),h>=1?(ei(0),co(),Vn=!0):requestAnimationFrame(f)};var e=f;xt="transitioning";const t=ft.position.clone(),i=te.blockApi?te.blockApi.mesh.position.clone():new I(0,0,0),s=$t[te.currentLevel]||$t[0],r=$t[0];Gr();const a=new I(2,.5,1.5),c=new I(2+5.5,4.5,1.5),o=performance.now(),u=1600;requestAnimationFrame(f)}else Gr(),ei(0),co()}function BT(){const n=$t.map(i=>"#"+new Te(i.block).getHexString()),e=lu(),t=Ai.querySelector(".level-grid");t.innerHTML="",Hn.forEach((i,s)=>{const r=document.createElement("button");r.className="level-btn";const a=IT(s),c=e.completed&&e.completed.includes(i.id),o=e.best&&e.best[i.id],u=n[s]||n[0];a||r.classList.add("locked"),c&&(r.classList.add("completed"),r.style.background=u,r.style.borderColor=u);const f=c&&o&&o<=i.par;r.innerHTML=`
            <span class="level-num">${i.id}</span>
            ${f?'<span class="level-star">&#9733;</span>':""}
        `,a&&r.addEventListener("click",()=>Yd(s)),t.appendChild(r)})}function UT(){xt!=="transitioning"&&(Oi||(Gr(),ei(0)),xt="levelSelect",Xi.classList.remove("visible"),Gi.style.display="none",Wi.classList.remove("visible"),Dn&&(Dn.style.display="none"),BT(),Ai.classList.add("visible"))}TT.addEventListener("click",()=>UT());bT.addEventListener("click",()=>{xt="home",Ai.classList.remove("visible"),Xi.classList.add("visible")});function Yd(n){if(xt==="transitioning")return;xt="transitioning",te.isCustomLevel=!1,pi&&(pi.style.display="none"),Ai.classList.remove("visible"),Xi.classList.remove("visible"),Gi.style.display="none",ft.clearViewOffset(),ft.aspect=window.innerWidth/window.innerHeight,ft.updateProjectionMatrix(),te.currentLevel=n;const e=ft.position.clone(),t=new I(2,.5,1.5),i=$t[0],s=$t[n]||$t[0];uu(),ei(n),hu();const r=te.blockApi.mesh.position.clone(),a=r.clone().add(kn.offset),c=performance.now(),o=1600;function u(){const f=Math.min((performance.now()-c)/o,1),h=f<.5?4*f*f*f:1-Math.pow(-2*f+2,3)/2,l=Math.sin(f*Math.PI)*4;ft.position.lerpVectors(e,a,h),ft.position.y+=l;const p=t.clone().lerp(r,h);ft.lookAt(p);const g=i.sky.map((x,d)=>cu(x,s.sky[d],h));Yr(g),mt.fog.color.copy(new Te(i.fog)).lerp(new Te(s.fog),h),f>=1?(Gi.style.display="",Dn&&(Dn.style.display="flex"),xt="game",An.levelStart(),Vn=!0):requestAnimationFrame(u)}requestAnimationFrame(u)}function hu(){te.gridApi&&mt.remove(te.gridApi.gridGroup),te.blockApi&&mt.remove(te.blockApi.mesh),du();const n=Hn[te.currentLevel],e=$t[te.currentLevel]||$t[0];ei(te.currentLevel),te.gridApi=ql(mt,n,!0,{tiles:e.tiles,goal:e.goal}),te.blockApi=Ql(mt,n.startCol,n.startRow,e.block),kn.resetHeading(),pu(),te.moves=0,te.isWon=!1,te.moveHistory=[],te.isSplit=!1,ou.textContent="0",Xd.textContent=`${n.id}. ${n.name}`,Wi.classList.remove("visible"),oo.style.display="none",Vn=!0}function du(){te.cubes&&(te.cubes.forEach(n=>mt.remove(n.mesh)),te.cubes=null),te.isSplit=!1,te.activeCubeIndex=0,oo&&(oo.style.display="none")}function NT(n){const e=performance.now(),t=300;function i(){const s=Math.min((performance.now()-e)/t,1),r=s===1?1:-Math.pow(2,-10*s)*Math.sin((s*10-.75)*(2*Math.PI/3))+1;n.scale.set(1+.1*(1-r),1-.15*(1-r),1+.1*(1-r)),s<1?requestAnimationFrame(i):n.scale.set(1,1,1)}requestAnimationFrame(i)}const wc=-16;function OT(){te.isTransitioning=!0;const n=te.currentLevel,e=n+1,t=Hn[e],i=$t[n]||$t[0],s=$t[e]||$t[0],r=te.blockApi.mesh,a=te.gridApi,c=Math.round(r.position.x),o=Math.round(r.position.z);r.position.x=c,r.position.z=o,a.fallAway();const u=ql(mt,t,!1,{tiles:s.tiles,goal:s.goal}),f={x:c-t.startCol,z:o-t.startRow};u.gridGroup.position.set(f.x,wc,f.z);const h=Object.values(u.tiles);h.forEach(b=>{b.material.transparent=!0,b.material.opacity=0}),te.gridApi=u,te.currentLevel=e,te.moves=0,te.isWon=!1,te.moveHistory=[],te.isSplit=!1,te.blockApi.state.isAnimating=!0,ou.textContent="0",Xd.textContent=`${t.id}. ${t.name}`;const l=r.position.y,p=1+wc,g=performance.now(),x=950,d=r.material.color.clone(),m=new Te(s.block),v=mt.fog.color.clone(),_=new Te(s.fog),A=new Te(i.sparkle),M=new Te(s.sparkle);function S(){const b=Math.min((performance.now()-g)/x,1),y=b*b;r.position.y=l+(p-l)*y;const w=i.sky.map((C,P)=>cu(C,s.sky[P],b));Yr(w),mt.fog.color.copy(v).lerp(_,b),r.material.color.copy(d).lerp(m,b),Ur.copy(A).lerp(M,b),cr.color=Ur.clone();const R=Math.max(0,Math.min((b-.2)/.55,1));if(h.forEach(C=>{C.material.opacity=R*R}),b>=1){r.position.y=p,ei(e),r.material.color.set(s.block),h.forEach(U=>{U.material.transparent=!1,U.material.opacity=1});const C=-f.x,P=-wc,B=-f.z;u.gridGroup.position.set(0,0,0),r.position.x+=C,r.position.y+=P,r.position.z+=B,ft.position.x+=C,ft.position.y+=P,ft.position.z+=B,mt.remove(a.gridGroup),te.blockApi.state.orientation="standing",te.blockApi.state.isAnimating=!1,te.isTransitioning=!1,NT(r),An.levelStart(),Vn=!0}else requestAnimationFrame(S)}requestAnimationFrame(S)}function zT(n){te.moves=n,ou.textContent=n}function HT(){os.trigger(.15,250),ao.textContent="FELL OFF",ao.className="fall",Vd.textContent="",Wd.textContent="Press R to restart",Wi.classList.add("visible")}function GT(n){Hr.emitDust(n),os.trigger(.02,80),te.gridApi&&te.gridApi.clearHighlight()}function kT(n){Hr.emitShatter(n,15784048),os.trigger(.08,150)}function VT(n){Hr.emitCelebration(n)}function WT(){if(xt!=="game"||te.isWon||te.isSplit)return;const n=te.blockApi;if(!n||n.state.isAnimating||n.state.isFalling)return;const e=Hn[te.currentLevel],t=te.gridApi,i=n.mesh.position,s=n.state.orientation,r=zf(t.levelLayout,e.startRow,e.startCol,e.switches||{},e.bridges||{});if(!r||r.length===0)return;let a,c;s==="standing"?(c=Math.round(i.z),a=Math.round(i.x)):s==="lying_x"?(c=Math.round(i.z),a=Math.round(i.x-.5)):(c=Math.round(i.z-.5),a=Math.round(i.x));const o=zf(t.levelLayout,c,a,e.switches||{},t.bridgeStates||{});if(!o||o.length===0)return;const u=o[0];let f=i.x,h=i.z;s==="standing"?(f+=u.dx*1.5,h+=u.dz*1.5):s==="lying_x"?u.dx!==0?f+=u.dx*1.5:h+=u.dz*1:u.dz!==0?h+=u.dz*1.5:f+=u.dx*1,t.highlightTile(Math.round(h),Math.round(f))}function XT(){te.isWon=!0;const n=Hn[te.currentLevel];if(PT(n.id),te.currentLevel<Hn.length-1)OT();else{ao.textContent="COMPLETE",ao.className="win";const t=te.moves<=n.par?" (par!)":` (par: ${n.par})`;Vd.textContent=`${te.moves} moves${t}`,Wd.textContent="All levels complete!  ·  Esc for level select",Wi.classList.add("visible")}}function YT(){te.isTransitioning||xt==="transitioning"||(te.isWon&&te.currentLevel<Hn.length-1?Yd(te.currentLevel+1):hu())}function qT(){if(xt!=="home"){if(xt==="editor"){qd();return}if(xt==="levelSelect"){xt="home",Ai.classList.remove("visible"),Xi.classList.add("visible");return}Gr(),ei(0),co()}}function QT(n){const[[e,t],[i,s]]=n,r=Nf(mt,t,e,16347926),a=Nf(mt,s,i,3900150);te.cubes=[r,a],te.isSplit=!0,te.activeCubeIndex=0,oo.style.display=""}function KT(n,e,t,i){du();let s,r,a;n===t?(s="lying_x",r=(e+i)/2,a=n):(s="lying_z",r=e,a=(n+t)/2),Hn[te.currentLevel],te.blockApi=Ql(mt,r,a),te.blockApi.state.orientation=s,te.blockApi.mesh.position.set(r,L_(s),a),te.blockApi.mesh.quaternion.copy(I_(s)),te.moveHistory=[]}function jT(){kn.resetHeading(),pu()}function ZT(){xt!=="transitioning"&&(fu(),uu(),xt="editor",Xi.classList.remove("visible"),Ai.classList.remove("visible"),Gi.style.display="none",Wi.classList.remove("visible"),Dn&&(Dn.style.display="none"),Cn==null||Cn.classList.add("visible"),$n.enter(),Vn=!0)}function qd(){$n.exit(),Cn==null||Cn.classList.remove("visible"),Gr(),ei(0),co(),Vn=!0}function JT(){const n=$n.getLevel();if(!n){const t=document.getElementById("ed-desc");if(t){const i=[];$n.hasStart()||i.push("start"),$n.hasGoal()||i.push("goal"),t.innerHTML=`<span style="color:#e74c3c">Place a ${i.join(" and ")} tile to play</span>`}return}$n.exit(),Cn==null||Cn.classList.remove("visible");const e=Hn.length;Hn.push(n),ft.clearViewOffset(),ft.aspect=window.innerWidth/window.innerHeight,ft.updateProjectionMatrix(),te.currentLevel=e,te.isCustomLevel=!0,ei(0),hu(),Gi.style.display="",pi&&(pi.style.display=""),Dn&&(Dn.style.display="flex"),xt="game",Vn=!0}function $T(){fu(),te.isCustomLevel=!1,pi&&(pi.style.display="none"),xt="editor",Xi.classList.remove("visible"),Ai.classList.remove("visible"),Gi.style.display="none",Wi.classList.remove("visible"),Cn==null||Cn.classList.add("visible"),$n.enter(!0),Vn=!0}Ec==null||Ec.addEventListener("click",()=>ZT());pi==null||pi.addEventListener("click",()=>$T());var Hh;(Hh=document.getElementById("ed-back"))==null||Hh.addEventListener("click",()=>qd());var Gh;(Gh=document.getElementById("ed-play"))==null||Gh.addEventListener("click",()=>JT());var kh;(kh=document.getElementById("ed-clear"))==null||kh.addEventListener("click",()=>$n.clear());const eb={normal:"<span>Normal</span> — standard tile, supports any block position",fragile:"<span>Fragile</span> — breaks when the block stands upright on it",goal:"<span>Goal</span> — the hole the block must fall into to win",start:"<span>Start</span> — where the block spawns at the beginning",soft_switch:"<span>Soft Switch</span> — activates when any part of the block touches it, toggles all bridges",heavy_switch:"<span>Heavy Switch</span> — only activates when standing upright, toggles all bridges",bridge:"<span>Bridge</span> — hidden tile that appears/disappears when a switch is activated",eraser:"<span>Eraser</span> — click tiles to remove them"},Oh=document.getElementById("ed-desc");document.querySelectorAll("[data-tool]").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll("[data-tool]").forEach(e=>e.classList.remove("active")),n.classList.add("active"),$n.setTool(n.dataset.tool),Oh&&(Oh.innerHTML=eb[n.dataset.tool]||"")})});function pu(){const n=kn.mode==="fpp"&&xt==="game";te.blockApi&&te.blockApi.mesh&&(te.blockApi.mesh.material.transparent=!0,te.blockApi.mesh.material.opacity=n?.25:1,te.blockApi.mesh.material.needsUpdate=!0),te.cubes&&te.cubes.forEach((e,t)=>{e.material.transparent=!0,e.material.opacity=n&&t===te.activeCubeIndex?.25:1,e.material.needsUpdate=!0})}function mu(){if(xt!=="game")return;const n=kn.mode==="tpp"?"fpp":"tpp";kn.mode=n,Bh&&(Bh.textContent=n==="tpp"?"3rd Person":"1st Person"),pu();const e=To.querySelector("canvas");e&&(n==="fpp"?(e.requestPointerLock=e.requestPointerLock||e.mozRequestPointerLock||e.webkitRequestPointerLock,e.requestPointerLock()):document.pointerLockElement===e&&document.exitPointerLock())}Dn&&Dn.addEventListener("click",mu);function gu(){const n=To.querySelector("canvas");!(document.pointerLockElement===n)&&kn.mode==="fpp"&&mu()}function tb(n){const e=To.querySelector("canvas");document.pointerLockElement===e&&kn.handleMouseMove(n)}document.addEventListener("pointerlockchange",gu);document.addEventListener("mozpointerlockchange",gu);document.addEventListener("webkitpointerlockchange",gu);document.addEventListener("mousemove",tb);F_(te,{onMoveCountChange:zT,onFall:HT,onWin:XT,onReset:YT,onEscape:qT,onSplit:QT,onMerge:KT,onCubeSwitch:jT,onLanding:GT,onFragileBreak:kT,onWinEffect:VT,onHint:WT,onCameraToggle:mu},kn);FT();const zh=new hd;function Qd(){var i,s,r;requestAnimationFrame(Qd);const n=zh.getElapsedTime(),e=zh.getDelta();if(Oi&&(xt==="home"||xt==="levelSelect")){Oi.update(n),Qs&&Qs.updateTime(n);const a=.12,c=2,o=1.5,u=5.5;ft.position.set(c+Math.cos(n*a)*u,4.5,o+Math.sin(n*a)*u),ft.lookAt(c,.5,o),Ff(Oi.mesh.position);const f=Math.round(window.innerWidth*.28);ft.setViewOffset(window.innerWidth+f,window.innerHeight,f,0,window.innerWidth,window.innerHeight)}if(xt==="game"){if(te.isSplit&&te.cubes){te.cubes.forEach((c,o)=>c.update(n,o===te.activeCubeIndex));const a=te.cubes[te.activeCubeIndex];Uh(a.mesh.position,.05,"standing",!0)}else if(te.blockApi&&(te.blockApi.update(n),!te.blockApi.state.isFalling)){const a=te.isTransitioning?.1:.05;Uh(te.blockApi.mesh.position,a,te.blockApi.state.orientation,!1)}te.blockApi&&Ff(te.blockApi.mesh.position)}if(xt==="editor"&&$n.update(n),te.gridApi&&te.gridApi.updateTime(n),cr.update(n),Hr.update(e),os.update(),os.isShaking){const a=os.getOffset();ft.position.x+=a.x,ft.position.y+=a.y,ft.position.z+=a.z}te.isTransitioning||((i=te.blockApi)==null?void 0:i.state.isAnimating)||((s=te.blockApi)==null?void 0:s.state.isFalling)||te.isSplit&&((r=te.cubes)==null?void 0:r.some(a=>a._isAnimating))||os.isShaking||Hr.isActive||!kn.isStable?(pn.pausePathTracing=!0,pn.reset(),Vn=!0):(Vn&&DT(),pn.pausePathTracing=!1),pn.renderSample()}Qd();
