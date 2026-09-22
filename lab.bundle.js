(()=>{var ti={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ni={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wc=0,Xo=1,Ec=2;var Gs=1,la=2,ts=3,Rn=0,Nt=1,rn=2,Cn=0,ns=1,qo=2,Yo=3,jo=4,Tc=5;var _i=100,Ac=101,Rc=102,Cc=103,Pc=104,Ic=200,Dc=201,Lc=202,Nc=203,Zo=204,Jo=205,Uc=206,Fc=207,Oc=208,Bc=209,kc=210,zc=211,Vc=212,Hc=213,Gc=214,Lr=0,Nr=1,Ur=2,Vi=3,Fr=4,Or=5,Br=6,kr=7,ca=0,Wc=1,Xc=2,_n=0,Ko=1,$o=2,Qo=3,is=4,el=5,tl=6,nl=7;var il=300,ii=301,xi=302,ha=303,ua=304,Ws=306,Bn=1e3,wn=1001,zr=1002,At=1003,qc=1004;var Xs=1005;var Lt=1006,da=1007;var si=1008;var jt=1009,sl=1010,rl=1011,ss=1012,fa=1013,xn=1014,an=1015,yn=1016,pa=1017,ma=1018,rs=1020,al=35902,ol=35899,ll=1021,cl=1022,on=1023,En=1026,ri=1027,ga=1028,_a=1029,ai=1030,xa=1031;var ya=1033,qs=33776,Ys=33777,js=33778,Zs=33779,va=35840,ba=35841,Sa=35842,Ma=35843,wa=36196,Ea=37492,Ta=37496,Aa=37488,Ra=37489,Js=37490,Ca=37491,Pa=37808,Ia=37809,Da=37810,La=37811,Na=37812,Ua=37813,Fa=37814,Oa=37815,Ba=37816,ka=37817,za=37818,Va=37819,Ha=37820,Ga=37821,Wa=36492,Xa=36494,qa=36495,Ya=36283,ja=36284,Ks=36285,Za=36286;var Ss=2300,Vr=2301,Pr=2302,Fo=2303,Oo=2400,Bo=2401,ko=2402;var Yc=3200;var $s=0,jc=1,Ct="",It="srgb",Ms="srgb-linear",ws="linear",et="srgb";var Ir=7680;var Zc=519,Jc=512,Kc=513,$c=514,Ja=515,Qc=516,eh=517,Ka=518,th=519,nh=35044;var hl="300 es",fn=2e3,Hi=2001;function su(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ru(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Gi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ih(){let i=Gi("canvas");return i.style.display="block",i}var Kl={},Wi=null;function ul(...i){let e="THREE."+i.shift();Wi?Wi("log",e,...i):console.log(e,...i)}function sh(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ne(...i){i=sh(i);let e="THREE."+i.shift();if(Wi)Wi("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ue(...i){i=sh(i);let e="THREE."+i.shift();if(Wi)Wi("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function di(...i){let e=i.join(" ");e in Kl||(Kl[e]=!0,Ne(...i))}function rh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var ah={[Lr]:Nr,[Ur]:Br,[Fr]:kr,[Vi]:Or,[Nr]:Lr,[Br]:Ur,[kr]:Fr,[Or]:Vi},pn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$l=1234567,vs=Math.PI/180,Xi=180/Math.PI;function as(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function We(i,e,t){return Math.max(e,Math.min(t,i))}function dl(i,e){return(i%e+e)%e}function au(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function ou(i,e,t){return i!==e?(t-i)/(e-i):0}function bs(i,e,t){return(1-t)*i+t*e}function lu(i,e,t,n){return bs(i,e,1-Math.exp(-t*n))}function cu(i,e=1){return e-Math.abs(dl(i,e*2)-e)}function hu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function uu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function du(i,e){return i+Math.floor(Math.random()*(e-i+1))}function fu(i,e){return i+Math.random()*(e-i)}function pu(i){return i*(.5-Math.random())}function mu(i){i!==void 0&&($l=i);let e=$l+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gu(i){return i*vs}function _u(i){return i*Xi}function xu(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function yu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function vu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function bu(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),f=r((e-n)/2),h=a((e-n)/2),p=r((n-e)/2),x=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*f,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*f,o*c);break;case"ZXZ":i.set(l*f,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*x,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*x,o*c);break;case"ZYZ":i.set(l*x,l*p,o*u,o*c);break;default:Ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ki(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Xt={DEG2RAD:vs,RAD2DEG:Xi,generateUUID:as,clamp:We,euclideanModulo:dl,mapLinear:au,inverseLerp:ou,lerp:bs,damp:lu,pingpong:cu,smoothstep:hu,smootherstep:uu,randInt:du,randFloat:fu,randFloatSpread:pu,seededRandom:mu,degToRad:gu,radToDeg:_u,isPowerOfTwo:xu,ceilPowerOfTwo:yu,floorPowerOfTwo:vu,setQuaternionFromProperEuler:bu,normalize:Ht,denormalize:ki},_l=class _l{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_l.prototype.isVector2=!0;var Pe=_l,Wt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=r[a+0],p=r[a+1],x=r[a+2],b=r[a+3];if(f!==b||l!==h||c!==p||u!==x){let m=l*h+c*p+u*x+f*b;m<0&&(h=-h,p=-p,x=-x,b=-b,m=-m);let d=1-o;if(m<.9995){let T=Math.acos(m),P=Math.sin(T);d=Math.sin(d*T)/P,o=Math.sin(o*T)/P,l=l*d+h*o,c=c*d+p*o,u=u*d+x*o,f=f*d+b*o}else{l=l*d+h*o,c=c*d+p*o,u=u*d+x*o,f=f*d+b*o;let T=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=T,c*=T,u*=T,f*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],h=r[a+1],p=r[a+2],x=r[a+3];return e[t]=o*x+u*f+l*p-c*h,e[t+1]=l*x+u*h+c*f-o*p,e[t+2]=c*x+u*p+o*h-l*f,e[t+3]=u*x-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),h=l(n/2),p=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*p*x,this._y=c*p*f-h*u*x,this._z=c*u*x+h*p*f,this._w=c*u*f-h*p*x;break;case"YXZ":this._x=h*u*f+c*p*x,this._y=c*p*f-h*u*x,this._z=c*u*x-h*p*f,this._w=c*u*f+h*p*x;break;case"ZXY":this._x=h*u*f-c*p*x,this._y=c*p*f+h*u*x,this._z=c*u*x+h*p*f,this._w=c*u*f-h*p*x;break;case"ZYX":this._x=h*u*f-c*p*x,this._y=c*p*f+h*u*x,this._z=c*u*x-h*p*f,this._w=c*u*f+h*p*x;break;case"YZX":this._x=h*u*f+c*p*x,this._y=c*p*f+h*u*x,this._z=c*u*x-h*p*f,this._w=c*u*f-h*p*x;break;case"XZY":this._x=h*u*f-c*p*x,this._y=c*p*f-h*u*x,this._z=c*u*x+h*p*f,this._w=c*u*f+h*p*x;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>f){let p=2*Math.sqrt(1+n-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){let p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},xl=class xl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ql.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ql.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return mo.copy(this).projectOnVector(e),this.sub(mo)}reflect(e){return this.sub(mo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xl.prototype.isVector3=!0;var F=xl,mo=new F,Ql=new Wt,yl=class yl{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],x=n[8],b=s[0],m=s[3],d=s[6],T=s[1],P=s[4],v=s[7],S=s[2],w=s[5],A=s[8];return r[0]=a*b+o*T+l*S,r[3]=a*m+o*P+l*w,r[6]=a*d+o*v+l*A,r[1]=c*b+u*T+f*S,r[4]=c*m+u*P+f*w,r[7]=c*d+u*v+f*A,r[2]=h*b+p*T+x*S,r[5]=h*m+p*P+x*w,r[8]=h*d+p*v+x*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*r,p=c*r-a*l,x=t*f+n*h+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/x;return e[0]=f*b,e[1]=(s*c-u*n)*b,e[2]=(o*n-s*a)*b,e[3]=h*b,e[4]=(u*t-s*l)*b,e[5]=(s*r-o*t)*b,e[6]=p*b,e[7]=(n*l-c*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return di("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(go.makeScale(e,t)),this}rotate(e){return di("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(go.makeRotation(-e)),this}translate(e,t){return di("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(go.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};yl.prototype.isMatrix3=!0;var Fe=yl,go=new Fe,ec=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tc=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Su(){let i={enabled:!0,workingColorSpace:Ms,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===et&&(s.r=On(s.r),s.g=On(s.g),s.b=On(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ct?ws:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return di("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return di("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ms]:{primaries:e,whitePoint:n,transfer:ws,toXYZ:ec,fromXYZ:tc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:n,transfer:et,toXYZ:ec,fromXYZ:tc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),i}var je=Su();function On(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var wi,Hr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{wi===void 0&&(wi=Gi("canvas")),wi.width=e.width,wi.height=e.height;let s=wi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=wi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Gi("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=On(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(On(t[n]/255)*255):t[n]=On(t[n]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Mu=0,qi=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=as(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(_o(s[a].image)):r.push(_o(s[a]))}else r=_o(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function _o(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Hr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}var wu=0,xo=new F,kt=class i extends pn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=wn,s=wn,r=Lt,a=si,o=on,l=jt,c=i.DEFAULT_ANISOTROPY,u=Ct){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=as(),this.name="",this.source=new qi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xo).x}get height(){return this.source.getSize(xo).y}get depth(){return this.source.getSize(xo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==il)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bn:e.x=e.x-Math.floor(e.x);break;case wn:e.x=e.x<0?0:1;break;case zr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bn:e.y=e.y-Math.floor(e.y);break;case wn:e.y=e.y<0?0:1;break;case zr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=il;kt.DEFAULT_ANISOTROPY=1;var vl=class vl{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],x=l[9],b=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-b)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+b)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let P=(c+1)/2,v=(p+1)/2,S=(d+1)/2,w=(u+h)/4,A=(f+b)/4,_=(x+m)/4;return P>v&&P>S?P<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(P),s=w/n,r=A/n):v>S?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=_/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=A/r,s=_/r),this.set(n,s,r,t),this}let T=Math.sqrt((m-x)*(m-x)+(f-b)*(f-b)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-x)/T,this.y=(f-b)/T,this.z=(h-u)/T,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};vl.prototype.isVector4=!0;var ut=vl,Gr=class extends pn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new kt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Lt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new qi(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yt=class extends Gr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Es=class extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=At,this.minFilter=At,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wr=class extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=At,this.minFilter=At,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var oa=class oa{constructor(e,t,n,s,r,a,o,l,c,u,f,h,p,x,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,f,h,p,x,b,m)}set(e,t,n,s,r,a,o,l,c,u,f,h,p,x,b,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=x,d[11]=b,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oa().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ei.setFromMatrixColumn(e,0).length(),r=1/Ei.setFromMatrixColumn(e,1).length(),a=1/Ei.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let h=a*u,p=a*f,x=o*u,b=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+x*c,t[5]=h-b*c,t[9]=-o*l,t[2]=b-h*c,t[6]=x+p*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,p=l*f,x=c*u,b=c*f;t[0]=h+b*o,t[4]=x*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-x,t[6]=b+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,p=l*f,x=c*u,b=c*f;t[0]=h-b*o,t[4]=-a*f,t[8]=x+p*o,t[1]=p+x*o,t[5]=a*u,t[9]=b-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,p=a*f,x=o*u,b=o*f;t[0]=l*u,t[4]=x*c-p,t[8]=h*c+b,t[1]=l*f,t[5]=b*c+h,t[9]=p*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,p=a*c,x=o*l,b=o*c;t[0]=l*u,t[4]=b-h*f,t[8]=x*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+x,t[10]=h-b*f}else if(e.order==="XZY"){let h=a*l,p=a*c,x=o*l,b=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+b,t[5]=a*u,t[9]=p*f-x,t[2]=x*f-p,t[6]=o*u,t[10]=b*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Eu,e,Tu)}lookAt(e,t,n){let s=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),Hn.crossVectors(n,Jt),Hn.lengthSq()===0&&(Math.abs(n.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),Hn.crossVectors(n,Jt)),Hn.normalize(),hr.crossVectors(Jt,Hn),s[0]=Hn.x,s[4]=hr.x,s[8]=Jt.x,s[1]=Hn.y,s[5]=hr.y,s[9]=Jt.y,s[2]=Hn.z,s[6]=hr.z,s[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],x=n[2],b=n[6],m=n[10],d=n[14],T=n[3],P=n[7],v=n[11],S=n[15],w=s[0],A=s[4],_=s[8],M=s[12],C=s[1],I=s[5],U=s[9],O=s[13],R=s[2],k=s[6],G=s[10],W=s[14],te=s[3],j=s[7],$=s[11],Q=s[15];return r[0]=a*w+o*C+l*R+c*te,r[4]=a*A+o*I+l*k+c*j,r[8]=a*_+o*U+l*G+c*$,r[12]=a*M+o*O+l*W+c*Q,r[1]=u*w+f*C+h*R+p*te,r[5]=u*A+f*I+h*k+p*j,r[9]=u*_+f*U+h*G+p*$,r[13]=u*M+f*O+h*W+p*Q,r[2]=x*w+b*C+m*R+d*te,r[6]=x*A+b*I+m*k+d*j,r[10]=x*_+b*U+m*G+d*$,r[14]=x*M+b*O+m*W+d*Q,r[3]=T*w+P*C+v*R+S*te,r[7]=T*A+P*I+v*k+S*j,r[11]=T*_+P*U+v*G+S*$,r[15]=T*M+P*O+v*W+S*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],x=e[3],b=e[7],m=e[11],d=e[15],T=l*p-c*h,P=o*p-c*f,v=o*h-l*f,S=a*p-c*u,w=a*h-l*u,A=a*f-o*u;return t*(b*T-m*P+d*v)-n*(x*T-m*S+d*w)+s*(x*P-b*S+d*A)-r*(x*v-b*w+m*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],x=e[12],b=e[13],m=e[14],d=e[15],T=t*o-n*a,P=t*l-s*a,v=t*c-r*a,S=n*l-s*o,w=n*c-r*o,A=s*c-r*l,_=u*b-f*x,M=u*m-h*x,C=u*d-p*x,I=f*m-h*b,U=f*d-p*b,O=h*d-p*m,R=T*O-P*U+v*I+S*C-w*M+A*_;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/R;return e[0]=(o*O-l*U+c*I)*k,e[1]=(s*U-n*O-r*I)*k,e[2]=(b*A-m*w+d*S)*k,e[3]=(h*w-f*A-p*S)*k,e[4]=(l*C-a*O-c*M)*k,e[5]=(t*O-s*C+r*M)*k,e[6]=(m*v-x*A-d*P)*k,e[7]=(u*A-h*v+p*P)*k,e[8]=(a*U-o*C+c*_)*k,e[9]=(n*C-t*U-r*_)*k,e[10]=(x*w-b*v+d*T)*k,e[11]=(f*v-u*w-p*T)*k,e[12]=(o*M-a*I-l*_)*k,e[13]=(t*I-n*M+s*_)*k,e[14]=(b*P-x*S-m*T)*k,e[15]=(u*S-f*P+h*T)*k,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,h=r*c,p=r*u,x=r*f,b=a*u,m=a*f,d=o*f,T=l*c,P=l*u,v=l*f,S=n.x,w=n.y,A=n.z;return s[0]=(1-(b+d))*S,s[1]=(p+v)*S,s[2]=(x-P)*S,s[3]=0,s[4]=(p-v)*w,s[5]=(1-(h+d))*w,s[6]=(m+T)*w,s[7]=0,s[8]=(x+P)*A,s[9]=(m-T)*A,s[10]=(1-(h+b))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ei.set(s[0],s[1],s[2]).length(),o=Ei.set(s[4],s[5],s[6]).length(),l=Ei.set(s[8],s[9],s[10]).length();r<0&&(a=-a),hn.copy(this);let c=1/a,u=1/o,f=1/l;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=u,hn.elements[5]*=u,hn.elements[6]*=u,hn.elements[8]*=f,hn.elements[9]*=f,hn.elements[10]*=f,t.setFromRotationMatrix(hn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=fn,l=!1){let c=this.elements,u=2*r/(t-e),f=2*r/(n-s),h=(t+e)/(t-e),p=(n+s)/(n-s),x,b;if(l)x=r/(a-r),b=a*r/(a-r);else if(o===fn)x=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===Hi)x=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=fn,l=!1){let c=this.elements,u=2/(t-e),f=2/(n-s),h=-(t+e)/(t-e),p=-(n+s)/(n-s),x,b;if(l)x=1/(a-r),b=a/(a-r);else if(o===fn)x=-2/(a-r),b=-(a+r)/(a-r);else if(o===Hi)x=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};oa.prototype.isMatrix4=!0;var at=oa,Ei=new F,hn=new at,Eu=new F(0,0,0),Tu=new F(1,1,1),Hn=new F,hr=new F,Jt=new F,nc=new at,ic=new Wt,Tn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ic.setFromEuler(this),this.setFromQuaternion(ic,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Tn.DEFAULT_ORDER="XYZ";var Yi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Au=0,sc=new F,Ti=new Wt,Dn=new at,ur=new F,ps=new F,Ru=new F,Cu=new Wt,rc=new F(1,0,0),ac=new F(0,1,0),oc=new F(0,0,1),lc={type:"added"},Pu={type:"removed"},Ai={type:"childadded",child:null},yo={type:"childremoved",child:null},Rt=class i extends pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new Tn,n=new Wt,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new Fe}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.premultiply(Ti),this}rotateX(e){return this.rotateOnAxis(rc,e)}rotateY(e){return this.rotateOnAxis(ac,e)}rotateZ(e){return this.rotateOnAxis(oc,e)}translateOnAxis(e,t){return sc.copy(e).applyQuaternion(this.quaternion),this.position.add(sc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rc,e)}translateY(e){return this.translateOnAxis(ac,e)}translateZ(e){return this.translateOnAxis(oc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ur.copy(e):ur.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(ps,ur,this.up):Dn.lookAt(ur,ps,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),Ti.setFromRotationMatrix(Dn),this.quaternion.premultiply(Ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ue("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lc),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pu),yo.child=e,this.dispatchEvent(yo),yo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lc),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,e,Ru),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,Cu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Rt.DEFAULT_UP=new F(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yt=class extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Iu={type:"move"},ji=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let b of e.hand.values()){let m=t.getJointPose(b,n),d=this._getHandJoint(c,b);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,x=.005;c.inputState.pinching&&h>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Iu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new yt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},dr={h:0,s:0,l:0};function vo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Le=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=dl(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=vo(a,r,e+1/3),this.g=vo(a,r,e),this.b=vo(a,r,e-1/3)}return je.colorSpaceToWorking(this,s),this}setStyle(e,t=It){function n(r){r!==void 0&&parseFloat(r)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){let n=oh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=On(e.r),this.g=On(e.g),this.b=On(e.b),this}copyLinearToSRGB(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return je.workingToColorSpace(Bt.copy(this),e),Math.round(We(Bt.r*255,0,255))*65536+Math.round(We(Bt.g*255,0,255))*256+Math.round(We(Bt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Bt.copy(this),t);let n=Bt.r,s=Bt.g,r=Bt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=It){je.workingToColorSpace(Bt.copy(this),e);let t=Bt.r,n=Bt.g,s=Bt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Gn),this.setHSL(Gn.h+e,Gn.s+t,Gn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gn),e.getHSL(dr);let n=bs(Gn.h,dr.h,t),s=bs(Gn.s,dr.s,t),r=bs(Gn.l,dr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bt=new Le;Le.NAMES=oh;var fi=class extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},un=new F,Ln=new F,bo=new F,Nn=new F,Ri=new F,Ci=new F,cc=new F,So=new F,Mo=new F,wo=new F,Eo=new ut,To=new ut,Ao=new ut,Yn=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),un.subVectors(e,t),s.cross(un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){un.subVectors(s,t),Ln.subVectors(n,t),bo.subVectors(e,t);let a=un.dot(un),o=un.dot(Ln),l=un.dot(bo),c=Ln.dot(Ln),u=Ln.dot(bo),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let h=1/f,p=(c*l-o*u)*h,x=(a*u-o*l)*h;return r.set(1-p-x,x,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Nn.x),l.addScaledVector(a,Nn.y),l.addScaledVector(o,Nn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Eo.setScalar(0),To.setScalar(0),Ao.setScalar(0),Eo.fromBufferAttribute(e,t),To.fromBufferAttribute(e,n),Ao.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Eo,r.x),a.addScaledVector(To,r.y),a.addScaledVector(Ao,r.z),a}static isFrontFacing(e,t,n,s){return un.subVectors(n,t),Ln.subVectors(e,t),un.cross(Ln).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),un.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ri.subVectors(s,n),Ci.subVectors(r,n),So.subVectors(e,n);let l=Ri.dot(So),c=Ci.dot(So);if(l<=0&&c<=0)return t.copy(n);Mo.subVectors(e,s);let u=Ri.dot(Mo),f=Ci.dot(Mo);if(u>=0&&f<=u)return t.copy(s);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ri,a);wo.subVectors(e,r);let p=Ri.dot(wo),x=Ci.dot(wo);if(x>=0&&p<=x)return t.copy(r);let b=p*c-l*x;if(b<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(Ci,o);let m=u*x-p*f;if(m<=0&&f-u>=0&&p-x>=0)return cc.subVectors(r,s),o=(f-u)/(f-u+(p-x)),t.copy(s).addScaledVector(cc,o);let d=1/(m+b+h);return a=b*d,o=h*d,t.copy(n).addScaledVector(Ri,a).addScaledVector(Ci,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mn=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,dn):dn.fromBufferAttribute(r,a),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fr.copy(n.boundingBox)),fr.applyMatrix4(e.matrixWorld),this.union(fr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ms),pr.subVectors(this.max,ms),Pi.subVectors(e.a,ms),Ii.subVectors(e.b,ms),Di.subVectors(e.c,ms),Wn.subVectors(Ii,Pi),Xn.subVectors(Di,Ii),li.subVectors(Pi,Di);let t=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-li.z,li.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,li.z,0,-li.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-li.y,li.x,0];return!Ro(t,Pi,Ii,Di,pr)||(t=[1,0,0,0,1,0,0,0,1],!Ro(t,Pi,Ii,Di,pr))?!1:(mr.crossVectors(Wn,Xn),t=[mr.x,mr.y,mr.z],Ro(t,Pi,Ii,Di,pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Un=[new F,new F,new F,new F,new F,new F,new F,new F],dn=new F,fr=new mn,Pi=new F,Ii=new F,Di=new F,Wn=new F,Xn=new F,li=new F,ms=new F,pr=new F,mr=new F,ci=new F;function Ro(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ci.fromArray(i,r);let o=s.x*Math.abs(ci.x)+s.y*Math.abs(ci.y)+s.z*Math.abs(ci.z),l=e.dot(ci),c=t.dot(ci),u=n.dot(ci);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var xt=new F,gr=new Pe,Du=0,Qt=class extends pn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Du++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=nh,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix3(e),this.setXY(t,gr.x,gr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),s=Ht(s,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ts=class extends Qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var As=class extends Qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Gt=class extends Qt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Lu=new mn,gs=new F,Co=new F,jn=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Lu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gs.subVectors(e,this.center);let t=gs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(gs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Co.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gs.copy(e.center).add(Co)),this.expandByPoint(gs.copy(e.center).sub(Co))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Nu=0,sn=new at,Po=new Rt,Li=new F,Kt=new mn,_s=new mn,Tt=new F,gn=class i extends pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(su(e)?As:Ts)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return Po.lookAt(e),Po.updateMatrix(),this.applyMatrix4(Po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Gt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Kt.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];_s.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(Kt.min,_s.min),Kt.expandByPoint(Tt),Tt.addVectors(Kt.max,_s.max),Kt.expandByPoint(Tt)):(Kt.expandByPoint(_s.min),Kt.expandByPoint(_s.max))}Kt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Tt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Tt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Tt.fromBufferAttribute(o,c),l&&(Li.fromBufferAttribute(e,c),Tt.add(Li)),s=Math.max(s,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Qt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new F,l[_]=new F;let c=new F,u=new F,f=new F,h=new Pe,p=new Pe,x=new Pe,b=new F,m=new F;function d(_,M,C){c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,M),f.fromBufferAttribute(n,C),h.fromBufferAttribute(r,_),p.fromBufferAttribute(r,M),x.fromBufferAttribute(r,C),u.sub(c),f.sub(c),p.sub(h),x.sub(h);let I=1/(p.x*x.y-x.x*p.y);isFinite(I)&&(b.copy(u).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(I),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(I),o[_].add(b),o[M].add(b),o[C].add(b),l[_].add(m),l[M].add(m),l[C].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let _=0,M=T.length;_<M;++_){let C=T[_],I=C.start,U=C.count;for(let O=I,R=I+U;O<R;O+=3)d(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let P=new F,v=new F,S=new F,w=new F;function A(_){S.fromBufferAttribute(s,_),w.copy(S);let M=o[_];P.copy(M),P.sub(S.multiplyScalar(S.dot(M))).normalize(),v.crossVectors(w,M);let I=v.dot(l[_])<0?-1:1;a.setXYZW(_,P.x,P.y,P.z,I)}for(let _=0,M=T.length;_<M;++_){let C=T[_],I=C.start,U=C.count;for(let O=I,R=I+U;O<R;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,u=new F,f=new F;if(e)for(let h=0,p=e.count;h<p;h+=3){let x=e.getX(h+0),b=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u),p=0,x=0;for(let b=0,m=l.length;b<m;b++){o.isInterleavedBufferAttribute?p=l[b]*o.data.stride+o.offset:p=l[b]*u;for(let d=0;d<u;d++)h[x++]=c[p++]}return new Qt(h,u,f)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){let h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],f=r[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Io=new F,Uu=new F,Fu=new Fe,$t=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Io.subVectors(n,t).cross(Uu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Io),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Fu.getNormalMatrix(e),s=this.coplanarPoint(Io).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ou=0,An=class extends pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=as(),this.name="",this.type="Material",this.blending=ns,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zo,this.blendDst=Jo,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Le().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new $t().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Pe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Fn=new F,Do=new F,_r=new F,xr=new F,pi=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.origin).addScaledVector(this.direction,t),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Do.copy(e).add(t).multiplyScalar(.5),_r.copy(t).sub(e).normalize(),xr.copy(this.origin).sub(Do);let r=e.distanceTo(t)*.5,a=-this.direction.dot(_r),o=xr.dot(this.direction),l=-xr.dot(_r),c=xr.lengthSq(),u=Math.abs(1-a*a),f,h,p,x;if(u>0)if(f=a*l-o,h=a*o-l,x=r*u,f>=0)if(h>=-x)if(h<=x){let b=1/u;f*=b,h*=b,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-x?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=x?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Do).addScaledVector(_r,h),p}intersectSphere(e,t){if(e.radius<0)return null;Fn.subVectors(e.center,this.origin);let n=Fn.dot(this.direction),s=Fn.dot(Fn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,h=e.y-a.y,p=e.z-a.z,x=t.x-a.x,b=t.y-a.y,m=t.z-a.z,d=n.x-a.x,T=n.y-a.y,P=n.z-a.z,v=Math.abs(l),S=Math.abs(c),w=Math.abs(u),A,_,M,C,I,U,O,R,k,G,W,te;if(v>=S&&v>=w?(M=l,U=f,k=x,te=d,l>=0?(A=c,_=u,C=h,I=p,O=b,R=m,G=T,W=P):(A=u,_=c,C=p,I=h,O=m,R=b,G=P,W=T)):S>=w?(M=c,U=h,k=b,te=T,c>=0?(A=u,_=l,C=p,I=f,O=m,R=x,G=P,W=d):(A=l,_=u,C=f,I=p,O=x,R=m,G=d,W=P)):(M=u,U=p,k=m,te=P,u>=0?(A=l,_=c,C=f,I=h,O=x,R=b,G=d,W=T):(A=c,_=l,C=h,I=f,O=b,R=x,G=T,W=d)),M===0)return null;let j=A/M,$=_/M,Q=1/M,Y=C-j*U,ie=I-$*U,we=O-j*k,_e=R-$*k,Ie=G-j*te,q=W-$*te,K=Ie*_e-q*we,ve=Y*q-ie*Ie,Ce=we*ie-_e*Y;if(s){if(K<0||ve<0||Ce<0)return null}else if((K<0||ve<0||Ce<0)&&(K>0||ve>0||Ce>0))return null;let ae=K+ve+Ce;if(ae===0)return null;let ke=Q*(K*U+ve*k+Ce*te);return(ae>0?ke<0:ke>0)?null:this.at(ke/ae,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zn=class extends An{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},hc=new at,hi=new pi,yr=new jn,uc=new F,vr=new F,br=new F,Sr=new F,Lo=new F,Mr=new F,dc=new F,wr=new F,Ye=class extends Rt{constructor(e=new gn,t=new Zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Mr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],f=r[l];u!==0&&(Lo.fromBufferAttribute(f,e),a?Mr.addScaledVector(Lo,u):Mr.addScaledVector(Lo.sub(t),u))}t.add(Mr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(r),hi.copy(e.ray).recast(e.near),!(yr.containsPoint(hi.origin)===!1&&(hi.intersectSphere(yr,uc)===null||hi.origin.distanceToSquared(uc)>(e.far-e.near)**2))&&(hc.copy(r).invert(),hi.copy(e.ray).applyMatrix4(hc),!(n.boundingBox!==null&&hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,b=h.length;x<b;x++){let m=h[x],d=a[m.materialIndex],T=Math.max(m.start,p.start),P=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=T,S=P;v<S;v+=3){let w=o.getX(v),A=o.getX(v+1),_=o.getX(v+2);s=Er(this,d,e,n,c,u,f,w,A,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let m=x,d=b;m<d;m+=3){let T=o.getX(m),P=o.getX(m+1),v=o.getX(m+2);s=Er(this,a,e,n,c,u,f,T,P,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,b=h.length;x<b;x++){let m=h[x],d=a[m.materialIndex],T=Math.max(m.start,p.start),P=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=T,S=P;v<S;v+=3){let w=v,A=v+1,_=v+2;s=Er(this,d,e,n,c,u,f,w,A,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,p.start),b=Math.min(l.count,p.start+p.count);for(let m=x,d=b;m<d;m+=3){let T=m,P=m+1,v=m+2;s=Er(this,a,e,n,c,u,f,T,P,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Bu(i,e,t,n,s,r,a,o){let l;if(e.side===Nt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Rn,o),l===null)return null;wr.copy(o),wr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(wr);return c<t.near||c>t.far?null:{distance:c,point:wr.clone(),object:i}}function Er(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,vr),i.getVertexPosition(l,br),i.getVertexPosition(c,Sr);let u=Bu(i,e,t,n,vr,br,Sr,dc);if(u){let f=new F;Yn.getBarycoord(dc,vr,br,Sr,f),s&&(u.uv=Yn.getInterpolatedAttribute(s,o,l,c,f,new Pe)),r&&(u.uv1=Yn.getInterpolatedAttribute(r,o,l,c,f,new Pe)),a&&(u.normal=Yn.getInterpolatedAttribute(a,o,l,c,f,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new F,materialIndex:0};Yn.getNormal(vr,br,Sr,h.normal),u.face=h,u.barycoord=f}return u}var Rs=class extends kt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=At,u=At,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cs=class extends Qt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ni=new at,fc=new at,Tr=[],pc=new mn,ku=new at,xs=new Ye,ys=new jn,Ps=class extends Ye{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Cs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ku)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ni),pc.copy(e.boundingBox).applyMatrix4(Ni),this.boundingBox.union(pc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ni),ys.copy(e.boundingSphere).applyMatrix4(Ni),this.boundingSphere.union(ys)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(xs.geometry=this.geometry,xs.material=this.material,xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ys.copy(this.boundingSphere),ys.applyMatrix4(n),e.ray.intersectsSphere(ys)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ni),fc.multiplyMatrices(n,Ni),xs.matrixWorld=fc,xs.raycast(e,Tr);for(let a=0,o=Tr.length;a<o;a++){let l=Tr[a];l.instanceId=r,l.object=this,t.push(l)}Tr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Cs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Rs(new Float32Array(s*this.count),s,this.count,ga,an));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ui=new jn,zu=new Pe(.5,.5),Ar=new F,Zi=class{constructor(e=new $t,t=new $t,n=new $t,s=new $t,r=new $t,a=new $t){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],p=r[7],x=r[8],b=r[9],m=r[10],d=r[11],T=r[12],P=r[13],v=r[14],S=r[15];if(s[0].setComponents(c-a,p-u,d-x,S-T).normalize(),s[1].setComponents(c+a,p+u,d+x,S+T).normalize(),s[2].setComponents(c+o,p+f,d+b,S+P).normalize(),s[3].setComponents(c-o,p-f,d-b,S-P).normalize(),n)s[4].setComponents(l,h,m,v).normalize(),s[5].setComponents(c-l,p-h,d-m,S-v).normalize();else if(s[4].setComponents(c-l,p-h,d-m,S-v).normalize(),t===fn)s[5].setComponents(c+l,p+h,d+m,S+v).normalize();else if(t===Hi)s[5].setComponents(l,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(e){ui.center.set(0,0,0);let t=zu.distanceTo(e.center);return ui.radius=.7071067811865476+t,ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ar.x=s.normal.x>0?e.max.x:e.min.x,Ar.y=s.normal.y>0?e.max.y:e.min.y,Ar.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ar)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Is=class extends kt{constructor(e=[],t=ii,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},mi=class extends kt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Jn=class extends kt{constructor(e,t,n=xn,s,r,a,o=At,l=At,c,u=En,f=1){if(u!==En&&u!==ri)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:f};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Xr=class extends Jn{constructor(e,t=xn,n=ii,s,r,a=At,o=At,l,c=En){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ds=class extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},bt=class i extends gn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],f=[],h=0,p=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(f,2));function x(b,m,d,T,P,v,S,w,A,_,M){let C=v/A,I=S/_,U=v/2,O=S/2,R=w/2,k=A+1,G=_+1,W=0,te=0,j=new F;for(let $=0;$<G;$++){let Q=$*I-O;for(let Y=0;Y<k;Y++){let ie=Y*C-U;j[b]=ie*T,j[m]=Q*P,j[d]=R,c.push(j.x,j.y,j.z),j[b]=0,j[m]=0,j[d]=w>0?1:-1,u.push(j.x,j.y,j.z),f.push(Y/A),f.push(1-$/_),W+=1}}for(let $=0;$<_;$++)for(let Q=0;Q<A;Q++){let Y=h+Q+k*$,ie=h+Q+k*($+1),we=h+(Q+1)+k*($+1),_e=h+(Q+1)+k*$;l.push(Y,ie,_e),l.push(ie,we,_e),te+=6}o.addGroup(p,te,M),p+=te,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var vt=class i extends gn{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],h=[],p=[],x=0,b=[],m=n/2,d=0;T(),a===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(u),this.setAttribute("position",new Gt(f,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(p,2));function T(){let v=new F,S=new F,w=0,A=(t-e)/n;for(let _=0;_<=r;_++){let M=[],C=_/r,I=C*(t-e)+e;for(let U=0;U<=s;U++){let O=U/s,R=O*l+o,k=Math.sin(R),G=Math.cos(R);S.x=I*k,S.y=-C*n+m,S.z=I*G,f.push(S.x,S.y,S.z),v.set(k,A,G).normalize(),h.push(v.x,v.y,v.z),p.push(O,1-C),M.push(x++)}b.push(M)}for(let _=0;_<s;_++)for(let M=0;M<r;M++){let C=b[M][_],I=b[M+1][_],U=b[M+1][_+1],O=b[M][_+1];(e>0||M!==0)&&(u.push(C,I,O),w+=3),(t>0||M!==r-1)&&(u.push(I,U,O),w+=3)}c.addGroup(d,w,0),d+=w}function P(v){let S=x,w=new Pe,A=new F,_=0,M=v===!0?e:t,C=v===!0?1:-1;for(let U=1;U<=s;U++)f.push(0,m*C,0),h.push(0,C,0),p.push(.5,.5),x++;let I=x;for(let U=0;U<=s;U++){let R=U/s*l+o,k=Math.cos(R),G=Math.sin(R);A.x=M*G,A.y=m*C,A.z=M*k,f.push(A.x,A.y,A.z),h.push(0,C,0),w.x=k*.5+.5,w.y=G*.5*C+.5,p.push(w.x,w.y),x++}for(let U=0;U<s;U++){let O=S+U,R=I+U;v===!0?u.push(R,R+1,O):u.push(R+1,R,O),_+=3}c.addGroup(d,_,v===!0?1:2),d+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Kn=class i extends gn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=e/o,h=t/l,p=[],x=[],b=[],m=[];for(let d=0;d<u;d++){let T=d*h-a;for(let P=0;P<c;P++){let v=P*f-r;x.push(v,-T,0),b.push(0,0,1),m.push(P/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<o;T++){let P=T+c*d,v=T+c*(d+1),S=T+1+c*(d+1),w=T+1+c*d;p.push(P,v,w),p.push(v,S,w)}this.setIndex(p),this.setAttribute("position",new Gt(x,3)),this.setAttribute("normal",new Gt(b,3)),this.setAttribute("uv",new Gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ls=class extends An{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Le(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function yi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(mc(s))s.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(mc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function zt(i){let e={};for(let t=0;t<i.length;t++){let n=yi(i[t]);for(let s in n)e[s]=n[s]}return e}function mc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Vu(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function fl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}var lh={clone:yi,merge:zt},Hu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,en=class extends An{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hu,this.fragmentShader=Gu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yi(e.uniforms),this.uniformsGroups=Vu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Le().setHex(s.value);break;case"v2":this.uniforms[n].value=new Pe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ut().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Fe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new at().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},qr=class extends en{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},pt=class extends An{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$s,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ns=class extends pt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return We(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Us=class extends An{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$s,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=ca,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Yr=class extends An{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},jr=class extends An{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ui(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function No(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var $n=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Zr=class extends $n{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oo,endingEnd:Oo}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Bo:r=e,o=2*t-n;break;case ko:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bo:a=e,l=2*n-t;break;case ko:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,x=(n-t)/(s-t),b=x*x,m=b*x,d=-h*m+2*h*b-h*x,T=(1+h)*m+(-1.5-2*h)*b+(-.5+h)*x+1,P=(-1-p)*m+(1.5+p)*b+.5*x,v=p*m-p*b;for(let S=0;S!==o;++S)r[S]=d*a[u+S]+T*a[c+S]+P*a[l+S]+v*a[f+S];return r}},Jr=class extends $n{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),f=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*f+a[l+h]*u;return r}},Kr=class extends $n{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},$r=class extends $n{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let x=(n-t)/(s-t),b=1-x;for(let m=0;m!==o;++m)r[m]=a[c+m]*b+a[l+m]*x;return r}let h=o*2,p=e-1;for(let x=0;x!==o;++x){let b=a[c+x],m=a[l+x],d=p*h+x*2,T=f[d],P=f[d+1],v=e*h+x*2,S=u[v],w=u[v+1],A=Xu(n,t,T,S,s);r[x]=ch(A,b,P,w,m)}return r}};function ch(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Wu(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Xu(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=ch(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Wu(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var tn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ui(t,this.TimeBufferType),this.values=Ui(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ui(e.times,Array),values:Ui(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),No(e.settings)&&(n.settings={inTangents:Ui(e.settings.inTangents,Array),outTangents:Ui(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Kr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Jr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new $r(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ss:t=this.InterpolantFactoryMethodDiscrete;break;case Vr:t=this.InterpolantFactoryMethodLinear;break;case Pr:t=this.InterpolantFactoryMethodSmooth;break;case Fo:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ne("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ss;case this.InterpolantFactoryMethodLinear:return Vr;case this.InterpolantFactoryMethodSmooth:return Pr;case this.InterpolantFactoryMethodBezier:return Fo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;No(this.settings)&&(gc(this.settings.inTangents,e),gc(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ue("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ue("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ue("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ue("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&ru(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ue("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Pr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,h=f-n,p=f+n;for(let x=0;x!==n;++x){let b=t[f+x];if(b!==t[h+x]||b!==t[p+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,h=a*n;for(let p=0;p!==n;++p)t[h+p]=t[f+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,No(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function gc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}tn.prototype.ValueTypeName="";tn.prototype.TimeBufferType=Float32Array;tn.prototype.ValueBufferType=Float32Array;tn.prototype.DefaultInterpolation=Vr;var Qn=class extends tn{constructor(e,t,n){super(e,t,n)}};Qn.prototype.ValueTypeName="bool";Qn.prototype.ValueBufferType=Array;Qn.prototype.DefaultInterpolation=Ss;Qn.prototype.InterpolantFactoryMethodLinear=void 0;Qn.prototype.InterpolantFactoryMethodSmooth=void 0;var Qr=class extends tn{constructor(e,t,n,s){super(e,t,n,s)}};Qr.prototype.ValueTypeName="color";var ea=class extends tn{constructor(e,t,n,s){super(e,t,n,s)}};ea.prototype.ValueTypeName="number";var ta=class extends $n{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)Wt.slerpFlat(r,0,a,c-o,a,c,l);return r}},Fs=class extends tn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ta(this.times,this.values,this.getValueSize(),e)}};Fs.prototype.ValueTypeName="quaternion";Fs.prototype.InterpolantFactoryMethodSmooth=void 0;var ei=class extends tn{constructor(e,t,n){super(e,t,n)}};ei.prototype.ValueTypeName="string";ei.prototype.ValueBufferType=Array;ei.prototype.DefaultInterpolation=Ss;ei.prototype.InterpolantFactoryMethodLinear=void 0;ei.prototype.InterpolantFactoryMethodSmooth=void 0;var na=class extends tn{constructor(e,t,n,s){super(e,t,n,s)}};na.prototype.ValueTypeName="vector";var Dr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(_c(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!_c(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function _c(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var ia=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let p=c[f],x=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},hh=new ia,Ji=class{constructor(e){this.manager=e!==void 0?e:hh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ji.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fi=new WeakMap,sa=class extends Ji{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Dr.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let f=Fi.get(a);f===void 0&&(f=[],Fi.set(a,f)),f.push({onLoad:t,onError:s})}return a}let o=Gi("img");function l(){u(),t&&t(this);let f=Fi.get(this)||[];for(let h=0;h<f.length;h++){let p=f[h];p.onLoad&&p.onLoad(this)}Fi.delete(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),Dr.remove(`image:${e}`);let h=Fi.get(this)||[];for(let p=0;p<h.length;p++){let x=h[p];x.onError&&x.onError(f)}Fi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Dr.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Os=class extends Ji{constructor(e){super(e)}load(e,t,n,s){let r=new kt,a=new sa(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ki=class extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},$i=class extends Ki{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Uo=new at,xc=new F,yc=new F,Bs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.mapType=jt,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zi,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;xc.setFromMatrixPosition(e.matrixWorld),t.position.copy(xc),yc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Uo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Uo,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Hi||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Uo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Rr=new F,Cr=new Wt,Mn=new F,ks=class extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Rr,Cr,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rr,Cr,Mn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Rr,Cr,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rr,Cr,Mn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qn=new F,vc=new Pe,bc=new Pe,Dt=class extends ks{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Xi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xi*2*Math.atan(Math.tan(vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qn.x,qn.y).multiplyScalar(-e/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qn.x,qn.y).multiplyScalar(-e/qn.z)}getViewSize(e,t){return this.getViewBounds(e,vc,bc),t.subVectors(bc,vc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(vs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var zo=class extends Bs{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0}},zs=class extends Ki{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new zo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Qi=class extends ks{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Vo=class extends Bs{constructor(){super(new Qi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gi=class extends Ki{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new Vo}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Oi=-90,Bi=1,ra=class extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Dt(Oi,Bi,e,t);s.layers=this.layers,this.add(s);let r=new Dt(Oi,Bi,e,t);r.layers=this.layers,this.add(r);let a=new Dt(Oi,Bi,e,t);a.layers=this.layers,this.add(a);let o=new Dt(Oi,Bi,e,t);o.layers=this.layers,this.add(o);let l=new Dt(Oi,Bi,e,t);l.layers=this.layers,this.add(l);let c=new Dt(Oi,Bi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},aa=class extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var pl="\\[\\]\\.:\\/",qu=new RegExp("["+pl+"]","g"),ml="[^"+pl+"]",Yu="[^"+pl.replace("\\.","")+"]",ju=/((?:WC+[\/:])*)/.source.replace("WC",ml),Zu=/(WCOD+)?/.source.replace("WCOD",Yu),Ju=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ml),Ku=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ml),$u=new RegExp("^"+ju+Zu+Ju+Ku+"$"),Qu=["material","materials","bones","map"],Ho=class{constructor(e,t,n){let s=n||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ht=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(qu,"")}static parseTrackName(e){let t=$u.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Qu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ne("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ue("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ue("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ue("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ue("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ue("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ue("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ht.Composite=Ho;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var x0=new Float32Array(1);var Sc=new at,Vs=class{constructor(e,t,n=0,s=1/0){this.ray=new pi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Yi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ue("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Sc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sc),this}intersectObject(e,t=!0,n=[]){return Go(e,this,n,t),n.sort(Mc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Go(e[s],this,n,t);return n.sort(Mc),n}};function Mc(i,e){return i.distance-e.distance}function Go(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Go(r[a],e,t,!0)}}var es=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=We(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(We(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var bl=class bl{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};bl.prototype.isMatrix2=!0;var Wo=bl;var Hs=class extends pn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function gl(i,e,t,n){let s=ed(n);switch(t){case ll:return i*e;case ga:return i*e/s.components*s.byteLength;case _a:return i*e/s.components*s.byteLength;case ai:return i*e*2/s.components*s.byteLength;case xa:return i*e*2/s.components*s.byteLength;case cl:return i*e*3/s.components*s.byteLength;case on:return i*e*4/s.components*s.byteLength;case ya:return i*e*4/s.components*s.byteLength;case qs:case Ys:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case js:case Zs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ba:case Ma:return Math.max(i,16)*Math.max(e,8)/4;case va:case Sa:return Math.max(i,8)*Math.max(e,8)/2;case wa:case Ea:case Aa:case Ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ta:case Js:case Ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ia:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Da:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case La:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Na:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ka:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case za:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Va:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ha:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ga:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Wa:case Xa:case qa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ya:case ja:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ks:case Za:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ed(i){switch(i){case jt:case sl:return{byteLength:1,components:1};case ss:case rl:case yn:return{byteLength:2,components:1};case pa:case ma:return{byteLength:2,components:4};case xn:case fa:case an:return{byteLength:4,components:1};case al:case ol:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Dh(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function nd(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((p,x)=>p.start-x.start);let h=0;for(let p=1;p<f.length;p++){let x=f[h],b=f[p];b.start<=x.start+x.count+1?x.count=Math.max(x.count,b.start+b.count-x.start):(++h,f[h]=b)}f.length=h+1;for(let p=0,x=f.length;p<x;p++){let b=f[p];i.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var id=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sd=`#ifdef USE_ALPHAHASH
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
#endif`,rd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ad=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,od=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ld=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cd=`#ifdef USE_AOMAP
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
#endif`,hd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ud=`#ifdef USE_BATCHING
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
#endif`,dd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,md=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gd=`#ifdef USE_IRIDESCENCE
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
#endif`,_d=`#ifdef USE_BUMPMAP
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
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Md=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ed=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Td=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Ad=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rd=`vec3 transformedNormal = objectNormal;
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
#endif`,Cd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Id=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ld="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ud=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif`,Fd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Od=`#ifdef USE_ENVMAP
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
#endif`,Bd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wd=`#ifdef USE_GRADIENTMAP
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
}`,Xd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jd=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#include <lightprobes_pars_fragment>`,Zd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Jd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$d=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ef=`PhysicalMaterial material;
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,tf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
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
}`,nf=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sf=`#if defined( RE_IndirectDiffuse )
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
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,af=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,of=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,df=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ff=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pf=`#if defined( USE_POINTS_UV )
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
#endif`,mf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_f=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vf=`#ifdef USE_MORPHTARGETS
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
#endif`,bf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ef=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Af=`#ifdef USE_NORMALMAP
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
#endif`,Rf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,If=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Df=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Nf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ff=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Of=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
#endif`,Vf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Hf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Gf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,Wf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xf=`#ifdef USE_SKINNING
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
#endif`,qf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yf=`#ifdef USE_SKINNING
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
#endif`,jf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$f=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qf=`#ifdef USE_TRANSMISSION
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
#endif`,ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ip=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rp=`uniform sampler2D t2D;
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
}`,ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,op=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hp=`#include <common>
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
}`,up=`#if DEPTH_PACKING == 3200
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
}`,dp=`#define DISTANCE
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
}`,fp=`#define DISTANCE
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
void main() {
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
}`,pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gp=`uniform float scale;
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
}`,_p=`uniform vec3 diffuse;
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
}`,xp=`#include <common>
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
}`,yp=`uniform vec3 diffuse;
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
}`,vp=`#define LAMBERT
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
}`,bp=`#define LAMBERT
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
}`,Sp=`#define MATCAP
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
}`,Mp=`#define MATCAP
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
}`,wp=`#define NORMAL
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
}`,Ep=`#define NORMAL
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
}`,Tp=`#define PHONG
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
}`,Ap=`#define PHONG
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
}`,Rp=`#define STANDARD
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
}`,Cp=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,Pp=`#define TOON
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
}`,Ip=`#define TOON
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
}`,Dp=`uniform float size;
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
}`,Lp=`uniform vec3 diffuse;
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
}`,Np=`#include <common>
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
}`,Up=`uniform vec3 color;
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
}`,Fp=`uniform float rotation;
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
}`,Op=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:id,alphahash_pars_fragment:sd,alphamap_fragment:rd,alphamap_pars_fragment:ad,alphatest_fragment:od,alphatest_pars_fragment:ld,aomap_fragment:cd,aomap_pars_fragment:hd,batching_pars_vertex:ud,batching_vertex:dd,begin_vertex:fd,beginnormal_vertex:pd,bsdfs:md,iridescence_fragment:gd,bumpmap_pars_fragment:_d,clipping_planes_fragment:xd,clipping_planes_pars_fragment:yd,clipping_planes_pars_vertex:vd,clipping_planes_vertex:bd,color_fragment:Sd,color_pars_fragment:Md,color_pars_vertex:wd,color_vertex:Ed,common:Td,cube_uv_reflection_fragment:Ad,defaultnormal_vertex:Rd,displacementmap_pars_vertex:Cd,displacementmap_vertex:Pd,emissivemap_fragment:Id,emissivemap_pars_fragment:Dd,colorspace_fragment:Ld,colorspace_pars_fragment:Nd,envmap_fragment:Ud,envmap_common_pars_fragment:Fd,envmap_pars_fragment:Od,envmap_pars_vertex:Bd,envmap_physical_pars_fragment:Zd,envmap_vertex:kd,fog_vertex:zd,fog_pars_vertex:Vd,fog_fragment:Hd,fog_pars_fragment:Gd,gradientmap_pars_fragment:Wd,lightmap_pars_fragment:Xd,lights_lambert_fragment:qd,lights_lambert_pars_fragment:Yd,lights_pars_begin:jd,lights_toon_fragment:Jd,lights_toon_pars_fragment:Kd,lights_phong_fragment:$d,lights_phong_pars_fragment:Qd,lights_physical_fragment:ef,lights_physical_pars_fragment:tf,lights_fragment_begin:nf,lights_fragment_maps:sf,lights_fragment_end:rf,lightprobes_pars_fragment:af,logdepthbuf_fragment:of,logdepthbuf_pars_fragment:lf,logdepthbuf_pars_vertex:cf,logdepthbuf_vertex:hf,map_fragment:uf,map_pars_fragment:df,map_particle_fragment:ff,map_particle_pars_fragment:pf,metalnessmap_fragment:mf,metalnessmap_pars_fragment:gf,morphinstance_vertex:_f,morphcolor_vertex:xf,morphnormal_vertex:yf,morphtarget_pars_vertex:vf,morphtarget_vertex:bf,normal_fragment_begin:Sf,normal_fragment_maps:Mf,normal_pars_fragment:wf,normal_pars_vertex:Ef,normal_vertex:Tf,normalmap_pars_fragment:Af,clearcoat_normal_fragment_begin:Rf,clearcoat_normal_fragment_maps:Cf,clearcoat_pars_fragment:Pf,iridescence_pars_fragment:If,opaque_fragment:Df,packing:Lf,premultiplied_alpha_fragment:Nf,project_vertex:Uf,dithering_fragment:Ff,dithering_pars_fragment:Of,roughnessmap_fragment:Bf,roughnessmap_pars_fragment:kf,shadowmap_pars_fragment:zf,shadowmap_pars_vertex:Vf,shadowmap_vertex:Hf,shadowmask_pars_fragment:Gf,skinbase_vertex:Wf,skinning_pars_vertex:Xf,skinning_vertex:qf,skinnormal_vertex:Yf,specularmap_fragment:jf,specularmap_pars_fragment:Zf,tonemapping_fragment:Jf,tonemapping_pars_fragment:Kf,transmission_fragment:$f,transmission_pars_fragment:Qf,uv_pars_fragment:ep,uv_pars_vertex:tp,uv_vertex:np,worldpos_vertex:ip,background_vert:sp,background_frag:rp,backgroundCube_vert:ap,backgroundCube_frag:op,cube_vert:lp,cube_frag:cp,depth_vert:hp,depth_frag:up,distance_vert:dp,distance_frag:fp,equirect_vert:pp,equirect_frag:mp,linedashed_vert:gp,linedashed_frag:_p,meshbasic_vert:xp,meshbasic_frag:yp,meshlambert_vert:vp,meshlambert_frag:bp,meshmatcap_vert:Sp,meshmatcap_frag:Mp,meshnormal_vert:wp,meshnormal_frag:Ep,meshphong_vert:Tp,meshphong_frag:Ap,meshphysical_vert:Rp,meshphysical_frag:Cp,meshtoon_vert:Pp,meshtoon_frag:Ip,points_vert:Dp,points_frag:Lp,shadow_vert:Np,shadow_frag:Up,sprite_vert:Fp,sprite_frag:Op},fe={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},In={basic:{uniforms:zt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:zt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:zt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:zt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:zt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Le(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:zt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:zt([fe.points,fe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:zt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:zt([fe.common,fe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:zt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:zt([fe.sprite,fe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:zt([fe.common,fe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:zt([fe.lights,fe.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};In.physical={uniforms:zt([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var $a={r:0,b:0,g:0},Bp=new at,Lh=new Fe;Lh.set(-1,0,0,0,1,0,0,0,1);function kp(i,e,t,n,s,r){let a=new Le(0),o=s===!0?0:1,l,c,u=null,f=0,h=null;function p(T){let P=T.isScene===!0?T.background:null;if(P&&P.isTexture){let v=T.backgroundBlurriness>0;P=e.get(P,v)}return P}function x(T){let P=!1,v=p(T);v===null?m(a,o):v&&v.isColor&&(m(v,1),P=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(T,P){let v=p(P);v&&(v.isCubeTexture||v.mapping===Ws)?(c===void 0&&(c=new Ye(new bt(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:yi(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Bp.makeRotationFromEuler(P.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Lh),c.material.toneMapped=je.getTransfer(v.colorSpace)!==et,(u!==v||f!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,h=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ye(new Kn(2,2),new en({name:"BackgroundMaterial",uniforms:yi(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.toneMapped=je.getTransfer(v.colorSpace)!==et,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,h=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function m(T,P){T.getRGB($a,fl(i)),t.buffers.color.setClear($a.r,$a.g,$a.b,P,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,P=1){a.set(T),o=P,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,m(a,o)},render:x,addToRenderList:b,dispose:d}}function zp(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(I,U,O,R,k){let G=!1,W=f(I,R,O,U);r!==W&&(r=W,c(r.object)),G=p(I,R,O,k),G&&x(I,R,O,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,v(I,U,O,R),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function f(I,U,O,R){let k=R.wireframe===!0,G=n[U.id];G===void 0&&(G={},n[U.id]=G);let W=I.isInstancedMesh===!0?I.id:0,te=G[W];te===void 0&&(te={},G[W]=te);let j=te[O.id];j===void 0&&(j={},te[O.id]=j);let $=j[k];return $===void 0&&($=h(l()),j[k]=$),$}function h(I){let U=[],O=[],R=[];for(let k=0;k<t;k++)U[k]=0,O[k]=0,R[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:O,attributeDivisors:R,object:I,attributes:{},index:null}}function p(I,U,O,R){let k=r.attributes,G=U.attributes,W=0,te=O.getAttributes();for(let j in te)if(te[j].location>=0){let Q=k[j],Y=G[j];if(Y===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor)),Q===void 0||Q.attribute!==Y||Y&&Q.data!==Y.data)return!0;W++}return r.attributesNum!==W||r.index!==R}function x(I,U,O,R){let k={},G=U.attributes,W=0,te=O.getAttributes();for(let j in te)if(te[j].location>=0){let Q=G[j];Q===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor));let Y={};Y.attribute=Q,Q&&Q.data&&(Y.data=Q.data),k[j]=Y,W++}r.attributes=k,r.attributesNum=W,r.index=R}function b(){let I=r.newAttributes;for(let U=0,O=I.length;U<O;U++)I[U]=0}function m(I){d(I,0)}function d(I,U){let O=r.newAttributes,R=r.enabledAttributes,k=r.attributeDivisors;O[I]=1,R[I]===0&&(i.enableVertexAttribArray(I),R[I]=1),k[I]!==U&&(i.vertexAttribDivisor(I,U),k[I]=U)}function T(){let I=r.newAttributes,U=r.enabledAttributes;for(let O=0,R=U.length;O<R;O++)U[O]!==I[O]&&(i.disableVertexAttribArray(O),U[O]=0)}function P(I,U,O,R,k,G,W){W===!0?i.vertexAttribIPointer(I,U,O,k,G):i.vertexAttribPointer(I,U,O,R,k,G)}function v(I,U,O,R){b();let k=R.attributes,G=O.getAttributes(),W=U.defaultAttributeValues;for(let te in G){let j=G[te];if(j.location>=0){let $=k[te];if($===void 0&&(te==="instanceMatrix"&&I.instanceMatrix&&($=I.instanceMatrix),te==="instanceColor"&&I.instanceColor&&($=I.instanceColor)),$!==void 0){let Q=$.normalized,Y=$.itemSize,ie=e.get($);if(ie===void 0)continue;let we=ie.buffer,_e=ie.type,Ie=ie.bytesPerElement,q=_e===i.INT||_e===i.UNSIGNED_INT||$.gpuType===fa;if($.isInterleavedBufferAttribute){let K=$.data,ve=K.stride,Ce=$.offset;if(K.isInstancedInterleavedBuffer){for(let ae=0;ae<j.locationSize;ae++)d(j.location+ae,K.meshPerAttribute);I.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ae=0;ae<j.locationSize;ae++)m(j.location+ae);i.bindBuffer(i.ARRAY_BUFFER,we);for(let ae=0;ae<j.locationSize;ae++)P(j.location+ae,Y/j.locationSize,_e,Q,ve*Ie,(Ce+Y/j.locationSize*ae)*Ie,q)}else{if($.isInstancedBufferAttribute){for(let K=0;K<j.locationSize;K++)d(j.location+K,$.meshPerAttribute);I.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let K=0;K<j.locationSize;K++)m(j.location+K);i.bindBuffer(i.ARRAY_BUFFER,we);for(let K=0;K<j.locationSize;K++)P(j.location+K,Y/j.locationSize,_e,Q,Y*Ie,Y/j.locationSize*K*Ie,q)}}else if(W!==void 0){let Q=W[te];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(j.location,Q);break;case 3:i.vertexAttrib3fv(j.location,Q);break;case 4:i.vertexAttrib4fv(j.location,Q);break;default:i.vertexAttrib1fv(j.location,Q)}}}}T()}function S(){M();for(let I in n){let U=n[I];for(let O in U){let R=U[O];for(let k in R){let G=R[k];for(let W in G)u(G[W].object),delete G[W];delete R[k]}}delete n[I]}}function w(I){if(n[I.id]===void 0)return;let U=n[I.id];for(let O in U){let R=U[O];for(let k in R){let G=R[k];for(let W in G)u(G[W].object),delete G[W];delete R[k]}}delete n[I.id]}function A(I){for(let U in n){let O=n[U];for(let R in O){let k=O[R];if(k[I.id]===void 0)continue;let G=k[I.id];for(let W in G)u(G[W].object),delete G[W];delete k[I.id]}}}function _(I){for(let U in n){let O=n[U],R=I.isInstancedMesh===!0?I.id:0,k=O[R];if(k!==void 0){for(let G in k){let W=k[G];for(let te in W)u(W[te].object),delete W[te];delete k[G]}delete O[R],Object.keys(O).length===0&&delete n[U]}}}function M(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:M,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:b,enableAttribute:m,disableUnusedAttributes:T}}function Vp(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Hp(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==on&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let _=A===yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==jt&&A!==an&&!_&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Ne("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:T,maxVaryings:P,maxFragmentUniforms:v,maxSamples:S,samples:w}}function Gp(i){let e=this,t=null,n=0,s=!1,r=!1,a=new $t,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let p=f.length!==0||h||n!==0||s;return s=h,n=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){let x=f.clippingPlanes,b=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!s||x===null||x.length===0||r&&!m)r?u(null):c();else{let T=r?0:n,P=T*4,v=d.clippingState||null;l.value=v,v=u(x,h,P,p);for(let S=0;S!==P;++S)v[S]=t[S];d.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,p,x){let b=f!==null?f.length:0,m=null;if(b!==0){if(m=l.value,x!==!0||m===null){let d=p+b*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<d)&&(m=new Float32Array(d));for(let P=0,v=p;P!==b;++P,v+=4)a.copy(f[P]).applyMatrix4(T,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}var ls=4,Wp=6,Xp=20,qp=256,Qs=new Qi,uh=new Le,Sl=null,Ml=0,wl=0,El=!1,Yp=new F,vi=new F,bi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Yp}=r;Sl=this._renderer.getRenderTarget(),Ml=this._renderer.getActiveCubeFace(),wl=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Sl,Ml,wl),this._renderer.xr.enabled=El,e.scissorTest=!1,os(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ii||e.mapping===xi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sl=this._renderer.getRenderTarget(),Ml=this._renderer.getActiveCubeFace(),wl=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:yn,format:on,colorSpace:Ms,depthBuffer:!1},s=dh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dh(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=jp(r)),this._blurMaterial=Jp(r,e,t),this._ggxMaterial=Zp(r,e,t)}return s}_compileMaterial(e){let t=new Ye(new gn,e);this._renderer.compile(t,Qs)}_sceneToCubeUV(e,t,n,s,r){let l=new Dt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(uh),f.toneMapping=_n,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ye(new bt,new Zn({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,m=b.material,d=!1,T=e.background;T?T.isColor&&(m.color.copy(T),e.background=null,d=!0):(m.color.copy(uh),d=!0);for(let P=0;P<6;P++){let v=P%3;v===0?(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[P],r.y,r.z)):v===1?(l.up.set(0,0,c[P]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[P],r.z)):(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[P]));let S=this._cubeSize;os(s,v*S,P>2?S:0,S,S),f.setRenderTarget(s),d&&f.render(b,l),f.render(e,l)}f.toneMapping=p,f.autoClear=h,e.background=T}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ii||e.mapping===xi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;os(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Qs)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,p=f*h,{_lodMax:x}=this,b=this._sizeLods[n],m=3*b*(n>x-ls?n-x+ls:0),d=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=x-t,os(r,m,d,3*b,2*b),s.setRenderTarget(r),s.render(o,Qs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,os(e,m,d,3*b,2*b),s.setRenderTarget(e),s.render(o,Qs)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-ls?s-this._lodMax+ls:0),h=4*(this._cubeSize-u);os(t,f,h,3*u,2*u),a.setRenderTarget(t),a.render(l,Qs)}};function jp(i){let e=[],t=[],n=i,s=i-ls+1+Wp;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,p=3,x=new Float32Array(p*h*f),b=new Float32Array(p*h*f);for(let d=0;d<f;d++){let T=d%3*2/3-1,P=d>2?0:-1,v=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];x.set(v,p*h*d);for(let S=0;S<h;S++){let w=u[S*2]*2-1,A=u[S*2+1]*2-1;d===0?vi.set(1,A,w):d===1?vi.set(-w,1,-A):d===2?vi.set(-w,A,1):d===3?vi.set(-1,A,-w):d===4?vi.set(-w,-1,A):vi.set(w,A,-1),vi.toArray(b,(d*h+S)*p)}}let m=new gn;m.setAttribute("position",new Qt(x,p)),m.setAttribute("outputDirection",new Qt(b,p)),t.push(new Ye(m,null)),n>ls&&n--}return{lodMeshes:t,sizeLods:e}}function dh(i,e,t){let n=new Yt(i,e,t);return n.texture.mapping=Ws,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function os(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Zp(i,e,t){return new en({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:no(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Jp(i,e,t){return new en({name:"SphericalGaussianBlur",defines:{SAMPLES:Xp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:no(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function fh(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:no(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function ph(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:no(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function no(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var eo=class extends Yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Is(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new bt(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:Cn});r.uniforms.tEquirect.value=t;let a=new Ye(s,r),o=t.minFilter;return t.minFilter===si&&(t.minFilter=Lt),new ra(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function Kp(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===ha||p===ua)if(e.has(h)){let x=e.get(h).texture;return o(x,h.mapping)}else{let x=h.image;if(x&&x.height>0){let b=new eo(x.height);return b.fromEquirectangularTexture(i,h),e.set(h,b),h.addEventListener("dispose",c),o(b.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let p=h.mapping,x=p===ha||p===ua,b=p===ii||p===xi;if(x||b){let m=t.get(h),d=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return n===null&&(n=new bi(i)),m=x?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let T=h.image;return x&&T&&T.height>0||b&&T&&l(T)?(n===null&&(n=new bi(i)),m=x?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,p){return p===ha?h.mapping=ii:p===ua&&(h.mapping=xi),h}function l(h){let p=0,x=6;for(let b=0;b<x;b++)h[b]!==void 0&&p++;return p===x}function c(h){let p=h.target;p.removeEventListener("dispose",c);let x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function $p(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&di("WebGLRenderer: "+n+" extension not supported."),s}}}function Qp(i,e,t,n){let s={},r=new WeakMap;function a(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete s[h.id];let p=r.get(h);p&&(e.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(f){let h=f.attributes;for(let p in h)e.update(h[p],i.ARRAY_BUFFER)}function c(f){let h=[],p=f.index,x=f.attributes.position,b=0;if(x===void 0)return;if(p!==null){let T=p.array;b=p.version;for(let P=0,v=T.length;P<v;P+=3){let S=T[P+0],w=T[P+1],A=T[P+2];h.push(S,w,w,A,A,S)}}else{let T=x.array;b=x.version;for(let P=0,v=T.length/3-1;P<v;P+=3){let S=P+0,w=P+1,A=P+2;h.push(S,w,w,A,A,S)}}let m=new(x.count>=65535?As:Ts)(h,1);m.version=b;let d=r.get(f);d&&e.remove(d),r.set(f,m)}function u(f){let h=r.get(f);if(h){let p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function em(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*a),t.update(h,n,1)}function c(f,h,p){p!==0&&(i.drawElementsInstanced(n,h,r,f*a,p),t.update(h,n,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,p);let b=0;for(let m=0;m<p;m++)b+=h[m];t.update(b,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function tm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ue("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function nm(i,e,t){let n=new WeakMap,s=new ut;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==f){let M=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",M)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],P=0;p===!0&&(P=1),x===!0&&(P=2),b===!0&&(P=3);let v=o.attributes.position.count*P,S=1;v>e.maxTextureSize&&(S=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let w=new Float32Array(v*S*4*f),A=new Es(w,v,S,f);A.type=an,A.needsUpdate=!0;let _=P*4;for(let C=0;C<f;C++){let I=m[C],U=d[C],O=T[C],R=v*S*4*C;for(let k=0;k<I.count;k++){let G=k*_;p===!0&&(s.fromBufferAttribute(I,k),w[R+G+0]=s.x,w[R+G+1]=s.y,w[R+G+2]=s.z,w[R+G+3]=0),x===!0&&(s.fromBufferAttribute(U,k),w[R+G+4]=s.x,w[R+G+5]=s.y,w[R+G+6]=s.z,w[R+G+7]=0),b===!0&&(s.fromBufferAttribute(O,k),w[R+G+8]=s.x,w[R+G+9]=s.y,w[R+G+10]=s.z,w[R+G+11]=O.itemSize===4?s.w:1)}}h={count:f,texture:A,size:new Pe(v,S)},n.set(o,h),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let b=0;b<c.length;b++)p+=c[b];let x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function im(i,e,t,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var sm={[Ko]:"LINEAR_TONE_MAPPING",[$o]:"REINHARD_TONE_MAPPING",[Qo]:"CINEON_TONE_MAPPING",[is]:"ACES_FILMIC_TONE_MAPPING",[tl]:"AGX_TONE_MAPPING",[nl]:"NEUTRAL_TONE_MAPPING",[el]:"CUSTOM_TONE_MAPPING"};function rm(i,e,t,n,s,r){let a=new Yt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new gn;c.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Gt([0,2,0,0,2,0],2));let u=new qr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Ye(c,u),h=new Qi(-1,1,1,-1,0,1),p=null,x=null,b=!1,m,d=null,T=[],P=!1;this.setSize=function(v,S){a.setSize(v,S),o!==null&&o.setSize(v,S),l!==null&&l.setSize(v,S);for(let w=0;w<T.length;w++){let A=T[w];A.setSize&&A.setSize(v,S)}},this.setEffects=function(v){T=v,P=T.length>0&&T[0].isRenderPass===!0;let S=a.width,w=a.height;T.length>0&&o===null&&(o=new Yt(S,w,{type:yn,depthBuffer:!1,stencilBuffer:!1}),l=new Yt(S,w,{type:yn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<T.length;A++){let _=T[A];_.setSize&&_.setSize(S,w)}},this.begin=function(v,S){if(b||v.toneMapping===_n&&T.length===0)return!1;if(d=S,S!==null){let w=S.width,A=S.height;(a.width!==w||a.height!==A)&&this.setSize(w,A)}return P===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=_n,!0},this.hasRenderPass=function(){return P},this.end=function(v,S){v.toneMapping=m,b=!0;let w=a,A=o;for(let _=0;_<T.length;_++){let M=T[_];M.enabled!==!1&&(M.render(v,A,w,S),M.needsSwap!==!1&&(w=A,A=A===o?l:o))}if(p!==v.outputColorSpace||x!==v.toneMapping){p=v.outputColorSpace,x=v.toneMapping,u.defines={},je.getTransfer(p)===et&&(u.defines.SRGB_TRANSFER="");let _=sm[x];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(d),v.render(f,h),d=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Nh=new kt,Rl=new Jn(1,1),Uh=new Es,Fh=new Wr,Oh=new Is,mh=[],gh=[],_h=new Float32Array(16),xh=new Float32Array(9),yh=new Float32Array(4);function hs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=mh[s];if(r===void 0&&(r=new Float32Array(s),mh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function St(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function io(i,e){let t=gh[e];t===void 0&&(t=new Int32Array(e),gh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function am(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function om(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2fv(this.addr,e),Mt(t,e)}}function lm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;i.uniform3fv(this.addr,e),Mt(t,e)}}function cm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4fv(this.addr,e),Mt(t,e)}}function hm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,n))return;yh.set(n),i.uniformMatrix2fv(this.addr,!1,yh),Mt(t,n)}}function um(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,n))return;xh.set(n),i.uniformMatrix3fv(this.addr,!1,xh),Mt(t,n)}}function dm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,n))return;_h.set(n),i.uniformMatrix4fv(this.addr,!1,_h),Mt(t,n)}}function fm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function pm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2iv(this.addr,e),Mt(t,e)}}function mm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3iv(this.addr,e),Mt(t,e)}}function gm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4iv(this.addr,e),Mt(t,e)}}function _m(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function xm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2uiv(this.addr,e),Mt(t,e)}}function ym(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3uiv(this.addr,e),Mt(t,e)}}function vm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4uiv(this.addr,e),Mt(t,e)}}function bm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Rl.compareFunction=t.isReversedDepthBuffer()?Ka:Ja,r=Rl):r=Nh,t.setTexture2D(e||r,s)}function Sm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Fh,s)}function Mm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Oh,s)}function wm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Uh,s)}function Em(i){switch(i){case 5126:return am;case 35664:return om;case 35665:return lm;case 35666:return cm;case 35674:return hm;case 35675:return um;case 35676:return dm;case 5124:case 35670:return fm;case 35667:case 35671:return pm;case 35668:case 35672:return mm;case 35669:case 35673:return gm;case 5125:return _m;case 36294:return xm;case 36295:return ym;case 36296:return vm;case 35678:case 36198:case 36298:case 36306:case 35682:return bm;case 35679:case 36299:case 36307:return Sm;case 35680:case 36300:case 36308:case 36293:return Mm;case 36289:case 36303:case 36311:case 36292:return wm}}function Tm(i,e){i.uniform1fv(this.addr,e)}function Am(i,e){let t=hs(e,this.size,2);i.uniform2fv(this.addr,t)}function Rm(i,e){let t=hs(e,this.size,3);i.uniform3fv(this.addr,t)}function Cm(i,e){let t=hs(e,this.size,4);i.uniform4fv(this.addr,t)}function Pm(i,e){let t=hs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Im(i,e){let t=hs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Dm(i,e){let t=hs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Lm(i,e){i.uniform1iv(this.addr,e)}function Nm(i,e){i.uniform2iv(this.addr,e)}function Um(i,e){i.uniform3iv(this.addr,e)}function Fm(i,e){i.uniform4iv(this.addr,e)}function Om(i,e){i.uniform1uiv(this.addr,e)}function Bm(i,e){i.uniform2uiv(this.addr,e)}function km(i,e){i.uniform3uiv(this.addr,e)}function zm(i,e){i.uniform4uiv(this.addr,e)}function Vm(i,e,t){let n=this.cache,s=e.length,r=io(t,s);St(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Rl:a=Nh;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Hm(i,e,t){let n=this.cache,s=e.length,r=io(t,s);St(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Fh,r[a])}function Gm(i,e,t){let n=this.cache,s=e.length,r=io(t,s);St(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Oh,r[a])}function Wm(i,e,t){let n=this.cache,s=e.length,r=io(t,s);St(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Uh,r[a])}function Xm(i){switch(i){case 5126:return Tm;case 35664:return Am;case 35665:return Rm;case 35666:return Cm;case 35674:return Pm;case 35675:return Im;case 35676:return Dm;case 5124:case 35670:return Lm;case 35667:case 35671:return Nm;case 35668:case 35672:return Um;case 35669:case 35673:return Fm;case 5125:return Om;case 36294:return Bm;case 36295:return km;case 36296:return zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Vm;case 35679:case 36299:case 36307:return Hm;case 35680:case 36300:case 36308:case 36293:return Gm;case 36289:case 36303:case 36311:case 36292:return Wm}}var Cl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Em(t.type)}},Pl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xm(t.type)}},Il=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Tl=/(\w+)(\])?(\[|\.)?/g;function vh(i,e){i.seq.push(e),i.map[e.id]=e}function qm(i,e,t){let n=i.name,s=n.length;for(Tl.lastIndex=0;;){let r=Tl.exec(n),a=Tl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){vh(t,c===void 0?new Cl(o,i,e):new Pl(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Il(o),vh(t,f)),t=f}}}var cs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);qm(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function bh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Ym=37297,jm=0;function Zm(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Sh=new Fe;function Jm(i){je._getMatrix(Sh,je.workingColorSpace,i);let e=`mat3( ${Sh.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case ws:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Mh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Zm(i.getShaderSource(e),o)}else return r}function Km(i,e){let t=Jm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var $m={[Ko]:"Linear",[$o]:"Reinhard",[Qo]:"Cineon",[is]:"ACESFilmic",[tl]:"AgX",[nl]:"Neutral",[el]:"Custom"};function Qm(i,e){let t=$m[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Qa=new F;function eg(){je.getLuminanceCoefficients(Qa);let i=Qa.x.toFixed(4),e=Qa.y.toFixed(4),t=Qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tr).join(`
`)}function ng(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ig(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function tr(i){return i!==""}function wh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Eh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var sg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dl(i){return i.replace(sg,ag)}var rg=new Map;function ag(i,e){let t=Ve[e];if(t===void 0){let n=rg.get(e);if(n!==void 0)t=Ve[n],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Dl(t)}var og=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Th(i){return i.replace(og,lg)}function lg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ah(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var cg={[Gs]:"SHADOWMAP_TYPE_PCF",[ts]:"SHADOWMAP_TYPE_VSM"};function hg(i){return cg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ug={[ii]:"ENVMAP_TYPE_CUBE",[xi]:"ENVMAP_TYPE_CUBE",[Ws]:"ENVMAP_TYPE_CUBE_UV"};function dg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ug[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var fg={[xi]:"ENVMAP_MODE_REFRACTION"};function pg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":fg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var mg={[ca]:"ENVMAP_BLENDING_MULTIPLY",[Wc]:"ENVMAP_BLENDING_MIX",[Xc]:"ENVMAP_BLENDING_ADD"};function gg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":mg[i.combine]||"ENVMAP_BLENDING_NONE"}function _g(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function xg(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=hg(t),c=dg(t),u=pg(t),f=gg(t),h=_g(t),p=tg(t),x=ng(r),b=s.createProgram(),m,d,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(tr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(tr).join(`
`),d.length>0&&(d+=`
`)):(m=[Ah(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),d=[Ah(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_n?"#define TONE_MAPPING":"",t.toneMapping!==_n?Ve.tonemapping_pars_fragment:"",t.toneMapping!==_n?Qm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Km("linearToOutputTexel",t.outputColorSpace),eg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(tr).join(`
`)),a=Dl(a),a=wh(a,t),a=Eh(a,t),o=Dl(o),o=wh(o,t),o=Eh(o,t),a=Th(a),o=Th(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let P=T+m+a,v=T+d+o,S=bh(s,s.VERTEX_SHADER,P),w=bh(s,s.FRAGMENT_SHADER,v);s.attachShader(b,S),s.attachShader(b,w),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function A(I){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(b)||"",O=s.getShaderInfoLog(S)||"",R=s.getShaderInfoLog(w)||"",k=U.trim(),G=O.trim(),W=R.trim(),te=!0,j=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,S,w);else{let $=Mh(s,S,"vertex"),Q=Mh(s,w,"fragment");Ue("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+$+`
`+Q)}else k!==""?Ne("WebGLProgram: Program Info Log:",k):(G===""||W==="")&&(j=!1);j&&(I.diagnostics={runnable:te,programLog:k,vertexShader:{log:G,prefix:m},fragmentShader:{log:W,prefix:d}})}s.deleteShader(S),s.deleteShader(w),_=new cs(s,b),M=ig(s,b)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(b,Ym)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jm++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=S,this.fragmentShader=w,this}var yg=0,Ll=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Nl(e),t.set(e,n)),n}},Nl=class{constructor(e){this.id=yg++,this.code=e,this.usedTimes=0}};function vg(i){return i===ai||i===Js||i===Ks}function bg(i,e,t,n,s,r){let a=new Yi,o=new Ll,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function b(_,M,C,I,U,O){let R=I.fog,k=U.geometry,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,te=e.get(_.envMap||G,W),j=te&&te.mapping===Ws?te.image.height:null,$=p[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&Ne("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let Q=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Y=Q!==void 0?Q.length:0,ie=0;k.morphAttributes.position!==void 0&&(ie=1),k.morphAttributes.normal!==void 0&&(ie=2),k.morphAttributes.color!==void 0&&(ie=3);let we,_e,Ie,q;if($){let ot=In[$];we=ot.vertexShader,_e=ot.fragmentShader}else{we=_.vertexShader,_e=_.fragmentShader;let ot=o.getVertexShaderStage(_),$e=o.getFragmentShaderStage(_);o.update(_,ot,$e),Ie=ot.id,q=$e.id}let K=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),Ce=U.isInstancedMesh===!0,ae=U.isBatchedMesh===!0,ke=!!_.map,it=!!_.matcap,Xe=!!te,Oe=!!_.aoMap,He=!!_.lightMap,Ge=!!_.bumpMap&&_.wireframe===!1,Ze=!!_.normalMap,Et=!!_.displacementMap,qt=!!_.emissiveMap,dt=!!_.metalnessMap,gt=!!_.roughnessMap,N=_.anisotropy>0,Ut=_.clearcoat>0,tt=_.dispersion>0,E=_.retroreflectivity>0,g=_.iridescence>0,B=_.sheen>0,H=_.transmission>0,Z=N&&!!_.anisotropyMap,re=Ut&&!!_.clearcoatMap,oe=Ut&&!!_.clearcoatNormalMap,J=Ut&&!!_.clearcoatRoughnessMap,ne=g&&!!_.iridescenceMap,le=g&&!!_.iridescenceThicknessMap,Te=B&&!!_.sheenColorMap,de=B&&!!_.sheenRoughnessMap,ce=!!_.specularMap,Ae=!!_.specularColorMap,De=!!_.specularIntensityMap,Be=H&&!!_.transmissionMap,L=H&&!!_.thicknessMap,he=!!_.gradientMap,ee=!!_.alphaMap,ue=_.alphaTest>0,ge=!!_.alphaHash,se=!!_.extensions,Re=_n;_.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Re=i.toneMapping);let Me={shaderID:$,shaderType:_.type,shaderName:_.name,vertexShader:we,fragmentShader:_e,defines:_.defines,customVertexShaderID:Ie,customFragmentShaderID:q,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:ae,batchingColor:ae&&U._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&U.instanceColor!==null,instancingMorph:Ce&&U.morphTexture!==null,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ke,matcap:it,envMap:Xe,envMapMode:Xe&&te.mapping,envMapCubeUVHeight:j,aoMap:Oe,lightMap:He,bumpMap:Ge,normalMap:Ze,displacementMap:Et,emissiveMap:qt,normalMapObjectSpace:Ze&&_.normalMapType===jc,normalMapTangentSpace:Ze&&_.normalMapType===$s,packedNormalMap:Ze&&_.normalMapType===$s&&vg(_.normalMap.format),metalnessMap:dt,roughnessMap:gt,anisotropy:N,anisotropyMap:Z,clearcoat:Ut,clearcoatMap:re,clearcoatNormalMap:oe,clearcoatRoughnessMap:J,dispersion:tt,retroreflection:E,iridescence:g,iridescenceMap:ne,iridescenceThicknessMap:le,sheen:B,sheenColorMap:Te,sheenRoughnessMap:de,specularMap:ce,specularColorMap:Ae,specularIntensityMap:De,transmission:H,transmissionMap:Be,thicknessMap:L,gradientMap:he,opaque:_.transparent===!1&&_.blending===ns&&_.alphaToCoverage===!1,alphaMap:ee,alphaTest:ue,alphaHash:ge,combine:_.combine,mapUv:ke&&x(_.map.channel),aoMapUv:Oe&&x(_.aoMap.channel),lightMapUv:He&&x(_.lightMap.channel),bumpMapUv:Ge&&x(_.bumpMap.channel),normalMapUv:Ze&&x(_.normalMap.channel),displacementMapUv:Et&&x(_.displacementMap.channel),emissiveMapUv:qt&&x(_.emissiveMap.channel),metalnessMapUv:dt&&x(_.metalnessMap.channel),roughnessMapUv:gt&&x(_.roughnessMap.channel),anisotropyMapUv:Z&&x(_.anisotropyMap.channel),clearcoatMapUv:re&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:oe&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:le&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:de&&x(_.sheenRoughnessMap.channel),specularMapUv:ce&&x(_.specularMap.channel),specularColorMapUv:Ae&&x(_.specularColorMap.channel),specularIntensityMapUv:De&&x(_.specularIntensityMap.channel),transmissionMapUv:Be&&x(_.transmissionMap.channel),thicknessMapUv:L&&x(_.thicknessMap.channel),alphaMapUv:ee&&x(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ze||N),vertexNormals:!!k.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!k.attributes.uv&&(ke||ee),fog:!!R,useFog:_.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||k.attributes.normal===void 0&&Ze===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ve,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:ie,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Re,decodeVideoTexture:ke&&_.map.isVideoTexture===!0&&je.getTransfer(_.map.colorSpace)===et,decodeVideoTextureEmissive:qt&&_.emissiveMap.isVideoTexture===!0&&je.getTransfer(_.emissiveMap.colorSpace)===et,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===rn,flipSided:_.side===Nt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:se&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&_.extensions.multiDraw===!0||ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Me.vertexUv1s=l.has(1),Me.vertexUv2s=l.has(2),Me.vertexUv3s=l.has(3),l.clear(),Me}function m(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)M.push(C),M.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(d(M,_),T(M,_),M.push(i.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function d(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function T(_,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function P(_){let M=p[_.type],C;if(M){let I=In[M];C=lh.clone(I.uniforms)}else C=_.uniforms;return C}function v(_,M){let C=u.get(M);return C!==void 0?++C.usedTimes:(C=new xg(i,M,_,s),c.push(C),u.set(M,C)),C}function S(_){if(--_.usedTimes===0){let M=c.indexOf(_);c[M]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function A(){o.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:P,acquireProgram:v,releaseProgram:S,releaseShaderCache:w,programs:c,dispose:A}}function Sg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Mg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Rh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ch(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,x,b,m,d){let T=i[e];return T===void 0?(T={id:h.id,object:h,geometry:p,material:x,materialVariant:a(h),groupOrder:b,renderOrder:h.renderOrder,z:m,group:d},i[e]=T):(T.id=h.id,T.object=h,T.geometry=p,T.material=x,T.materialVariant=a(h),T.groupOrder=b,T.renderOrder=h.renderOrder,T.z=m,T.group=d),e++,T}function l(h,p,x,b,m,d,T){T.reversedDepth===!0&&(m=-m);let P=o(h,p,x,b,m,d);x.transmission>0?n.push(P):x.transparent===!0?s.push(P):t.push(P)}function c(h,p,x,b,m,d){let T=o(h,p,x,b,m,d);x.transmission>0?n.unshift(T):x.transparent===!0?s.unshift(T):t.unshift(T)}function u(h,p){t.length>1&&t.sort(h||Mg),n.length>1&&n.sort(p||Rh),s.length>1&&s.sort(p||Rh)}function f(){for(let h=e,p=i.length;h<p;h++){let x=i[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function wg(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Ch,i.set(n,[a])):s>=r.length?(a=new Ch,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Eg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new Le};break;case"SpotLight":t={position:new F,direction:new F,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function Tg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Ag=0;function Rg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Cg(i){let e=new Eg,t=Tg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new at,a=new at;function o(c){let u=0,f=0,h=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let p=0,x=0,b=0,m=0,d=0,T=0,P=0,v=0,S=0,w=0,A=0,_=0,M=0,C=0;c.sort(Rg);for(let U=0,O=c.length;U<O;U++){let R=c[U],k=R.color,G=R.intensity,W=R.distance,te=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===ai?te=R.shadow.map.texture:te=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=k.r*G,f+=k.g*G,h+=k.b*G;else if(R.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(R.sh.coefficients[j],G);C++}else if(R.isSunLight){let j=e.get(R);if(j.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let $=R.shadow,Q=t.get(R);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[x]=Q,n.sunShadowMap[x]=te;let Y=$.getViewportCount();for(let ie=0;ie<Y;ie++)n.sunShadowMatrix[b+ie]=$.getMatrix(ie),n.sunShadowCascade[b+ie]=$._cascadeData[ie];b+=Y,x++}n.sun[p]=j,p++}else if(R.isDirectionalLight){let j=e.get(R);if(j.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let $=R.shadow,Q=t.get(R);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,n.directionalShadow[m]=Q,n.directionalShadowMap[m]=te,n.directionalShadowMatrix[m]=R.shadow.matrix,S++}n.directional[m]=j,m++}else if(R.isSpotLight){let j=e.get(R);j.position.setFromMatrixPosition(R.matrixWorld),j.color.copy(k).multiplyScalar(G),j.distance=W,j.coneCos=Math.cos(R.angle),j.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),j.decay=R.decay,n.spot[T]=j;let $=R.shadow;if(R.map&&(n.spotLightMap[_]=R.map,_++,$.updateMatrices(R),R.castShadow&&M++),n.spotLightMatrix[T]=$.matrix,R.castShadow){let Q=t.get(R);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,n.spotShadow[T]=Q,n.spotShadowMap[T]=te,A++}T++}else if(R.isRectAreaLight){let j=e.get(R);j.color.copy(k).multiplyScalar(G),j.halfWidth.set(R.width*.5,0,0),j.halfHeight.set(0,R.height*.5,0),n.rectArea[P]=j,P++}else if(R.isPointLight){let j=e.get(R);if(j.color.copy(R.color).multiplyScalar(R.intensity),j.distance=R.distance,j.decay=R.decay,R.castShadow){let $=R.shadow,Q=t.get(R);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,Q.shadowCameraNear=$.camera.near,Q.shadowCameraFar=$.camera.far,n.pointShadow[d]=Q,n.pointShadowMap[d]=te,n.pointShadowMatrix[d]=R.shadow.matrix,w++}n.point[d]=j,d++}else if(R.isHemisphereLight){let j=e.get(R);j.skyColor.copy(R.color).multiplyScalar(G),j.groundColor.copy(R.groundColor).multiplyScalar(G),n.hemi[v]=j,v++}}P>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let I=n.hash;(I.sunLength!==p||I.directionalLength!==m||I.pointLength!==d||I.spotLength!==T||I.rectAreaLength!==P||I.hemiLength!==v||I.numSunShadows!==x||I.numDirectionalShadows!==S||I.numPointShadows!==w||I.numSpotShadows!==A||I.numSpotMaps!==_||I.numLightProbes!==C)&&(n.sun.length=p,n.directional.length=m,n.spot.length=T,n.rectArea.length=P,n.point.length=d,n.hemi.length=v,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+_-M,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=C,I.sunLength=p,I.directionalLength=m,I.pointLength=d,I.spotLength=T,I.rectAreaLength=P,I.hemiLength=v,I.numSunShadows=x,I.numDirectionalShadows=S,I.numPointShadows=w,I.numSpotShadows=A,I.numSpotMaps=_,I.numLightProbes=C,n.version=Ag++)}function l(c,u){let f=0,h=0,p=0,x=0,b=0,m=0,d=u.matrixWorldInverse;for(let T=0,P=c.length;T<P;T++){let v=c[T];if(v.isSunLight){let S=n.sun[f];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(d),f++}else if(v.isDirectionalLight){let S=n.directional[h];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),h++}else if(v.isSpotLight){let S=n.spot[x];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),x++}else if(v.isRectAreaLight){let S=n.rectArea[b];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(d),a.identity(),r.copy(v.matrixWorld),r.premultiply(d),a.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),b++}else if(v.isPointLight){let S=n.point[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(d),p++}else if(v.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(d),m++}}}return{setup:o,setupView:l,state:n}}function Ph(i){let e=new Cg(i),t=[],n=[],s=[];function r(h){f.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Pg(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Ph(i),e.set(s,[o])):r>=a.length?(o=new Ph(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ig=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dg=`uniform sampler2D shadow_pass;
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
}`,Lg=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Ng=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Ih=new at,er=new F,Al=new F;function Ug(i,e,t){let n=new Zi,s=new Pe,r=new Pe,a=new ut,o=new Yr,l=new jr,c={},u=t.maxTextureSize,f={[Rn]:Nt,[Nt]:Rn,[rn]:rn},h=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:Ig,fragmentShader:Dg}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let x=new gn;x.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Ye(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gs;let d=this.type;this.render=function(w,A,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===la&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Gs);let M=i.getRenderTarget(),C=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Cn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let O=d!==this.type;O&&A.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(k=>k.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,k=w.length;R<k;R++){let G=w[R],W=G.shadow;if(W===void 0){Ne("WebGLShadowMap:",G,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let te=W.getFrameExtents();s.multiply(te),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/te.x),s.x=r.x*te.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/te.y),s.y=r.y*te.y,W.mapSize.y=r.y));let j=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=j,W.map===null||O===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===ts){if(G.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Yt(s.x,s.y,{format:ai,type:yn,minFilter:Lt,magFilter:Lt,generateMipmaps:!1}),W.map.texture.name=G.name+".shadowMap",W.map.depthTexture=new Jn(s.x,s.y,an),W.map.depthTexture.name=G.name+".shadowMapDepth",W.map.depthTexture.format=En,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=At,W.map.depthTexture.magFilter=At}else G.isPointLight?(W.map=new eo(s.x),W.map.depthTexture=new Xr(s.x,xn)):(W.map=new Yt(s.x,s.y),W.map.depthTexture=new Jn(s.x,s.y,xn)),W.map.depthTexture.name=G.name+".shadowMap",W.map.depthTexture.format=En,this.type===Gs?(W.map.depthTexture.compareFunction=j?Ka:Ja,W.map.depthTexture.minFilter=Lt,W.map.depthTexture.magFilter=Lt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=At,W.map.depthTexture.magFilter=At);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let $=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();G.isPointLight!==!0&&W.updateMatrices(G,_);for(let Q=0;Q<$;Q++){let Y=W.getCamera(Q);if(G.isPointLight){let ie=W.camera,we=W.matrix,_e=G.distance||ie.far;_e!==ie.far&&(ie.far=_e,ie.updateProjectionMatrix()),er.setFromMatrixPosition(G.matrixWorld),ie.position.copy(er),Al.copy(ie.position),Al.add(Lg[Q]),ie.up.copy(Ng[Q]),ie.lookAt(Al),ie.updateMatrixWorld(),we.makeTranslation(-er.x,-er.y,-er.z),Ih.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Ih,ie.coordinateSystem,ie.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,Q),i.clear();else{Q===0&&(i.setRenderTarget(W.map),i.clear());let ie=W.getViewport(Q);a.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),U.viewport(a)}n=W.getFrustum(Q),v(A,_,Y,G,this.type)}W.isPointLightShadow!==!0&&this.type===ts&&T(W,_),W.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(M,C,I)};function T(w,A){let _=e.update(b);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new Yt(s.x,s.y,{format:ai,type:yn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,_,h,b,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,_,p,b,null)}function P(w,A,_,M){let C=null,I=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)C=I;else if(C=_.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let U=C.uuid,O=A.uuid,R=c[U];R===void 0&&(R={},c[U]=R);let k=R[O];k===void 0&&(k=C.clone(),R[O]=k,A.addEventListener("dispose",S)),C=k}if(C.visible=A.visible,C.wireframe=A.wireframe,M===ts?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:f[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let U=i.properties.get(C);U.light=_}return C}function v(w,A,_,M,C){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===ts)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let O=e.update(w),R=w.material;if(Array.isArray(R)){let k=O.groups;for(let G=0,W=k.length;G<W;G++){let te=k[G],j=R[te.materialIndex];if(j&&j.visible){let $=P(w,j,M,C);w.onBeforeShadow(i,w,A,_,O,$,te),i.renderBufferDirect(_,null,O,$,w,te),w.onAfterShadow(i,w,A,_,O,$,te)}}}else if(R.visible){let k=P(w,R,M,C);w.onBeforeShadow(i,w,A,_,O,k,null),i.renderBufferDirect(_,null,O,k,w,null),w.onAfterShadow(i,w,A,_,O,k,null)}}let U=w.children;for(let O=0,R=U.length;O<R;O++)v(U[O],A,_,M,C)}function S(w){w.target.removeEventListener("dispose",S);for(let _ in c){let M=c[_],C=w.target.uuid;C in M&&(M[C].dispose(),delete M[C])}}}function Fg(i,e){function t(){let L=!1,he=new ut,ee=null,ue=new ut(0,0,0,0);return{setMask:function(ge){ee!==ge&&!L&&(i.colorMask(ge,ge,ge,ge),ee=ge)},setLocked:function(ge){L=ge},setClear:function(ge,se,Re,Me,ot){ot===!0&&(ge*=Me,se*=Me,Re*=Me),he.set(ge,se,Re,Me),ue.equals(he)===!1&&(i.clearColor(ge,se,Re,Me),ue.copy(he))},reset:function(){L=!1,ee=null,ue.set(-1,0,0,0)}}}function n(){let L=!1,he=!1,ee=null,ue=null,ge=null;return{setReversed:function(se){if(he!==se){let Re=e.get("EXT_clip_control");se?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),he=se;let Me=ge;ge=null,this.setClear(Me)}},getReversed:function(){return he},setTest:function(se){se?K(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(se){ee!==se&&!L&&(i.depthMask(se),ee=se)},setFunc:function(se){if(he&&(se=ah[se]),ue!==se){switch(se){case Lr:i.depthFunc(i.NEVER);break;case Nr:i.depthFunc(i.ALWAYS);break;case Ur:i.depthFunc(i.LESS);break;case Vi:i.depthFunc(i.LEQUAL);break;case Fr:i.depthFunc(i.EQUAL);break;case Or:i.depthFunc(i.GEQUAL);break;case Br:i.depthFunc(i.GREATER);break;case kr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=se}},setLocked:function(se){L=se},setClear:function(se){ge!==se&&(ge=se,he&&(se=1-se),i.clearDepth(se))},reset:function(){L=!1,ee=null,ue=null,ge=null,he=!1}}}function s(){let L=!1,he=null,ee=null,ue=null,ge=null,se=null,Re=null,Me=null,ot=null;return{setTest:function($e){L||($e?K(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function($e){he!==$e&&!L&&(i.stencilMask($e),he=$e)},setFunc:function($e,cn,bn){(ee!==$e||ue!==cn||ge!==bn)&&(i.stencilFunc($e,cn,bn),ee=$e,ue=cn,ge=bn)},setOp:function($e,cn,bn){(se!==$e||Re!==cn||Me!==bn)&&(i.stencilOp($e,cn,bn),se=$e,Re=cn,Me=bn)},setLocked:function($e){L=$e},setClear:function($e){ot!==$e&&(i.clearStencil($e),ot=$e)},reset:function(){L=!1,he=null,ee=null,ue=null,ge=null,se=null,Re=null,Me=null,ot=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},f={},h={},p=new WeakMap,x=[],b=null,m=!1,d=null,T=null,P=null,v=null,S=null,w=null,A=null,_=new Le(0,0,0),M=0,C=!1,I=null,U=null,O=null,R=null,k=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,te=0,j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(j)[1]),W=te>=1):j.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),W=te>=2);let $=null,Q={},Y=i.getParameter(i.SCISSOR_BOX),ie=i.getParameter(i.VIEWPORT),we=new ut().fromArray(Y),_e=new ut().fromArray(ie);function Ie(L,he,ee,ue){let ge=new Uint8Array(4),se=i.createTexture();i.bindTexture(L,se),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Re=0;Re<ee;Re++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,ue,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(he+Re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return se}let q={};q[i.TEXTURE_2D]=Ie(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=Ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=Ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=Ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(i.DEPTH_TEST),a.setFunc(Vi),Ge(!1),Ze(Xo),K(i.CULL_FACE),Oe(Cn);function K(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function ve(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function Ce(L,he){return h[L]!==he?(i.bindFramebuffer(L,he),h[L]=he,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=he),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=he),!0):!1}function ae(L,he){let ee=x,ue=!1;if(L){ee=p.get(he),ee===void 0&&(ee=[],p.set(he,ee));let ge=L.textures;if(ee.length!==ge.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let se=0,Re=ge.length;se<Re;se++)ee[se]=i.COLOR_ATTACHMENT0+se;ee.length=ge.length,ue=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,ue=!0);ue&&i.drawBuffers(ee)}function ke(L){return b!==L?(i.useProgram(L),b=L,!0):!1}let it={[_i]:i.FUNC_ADD,[Ac]:i.FUNC_SUBTRACT,[Rc]:i.FUNC_REVERSE_SUBTRACT};it[Cc]=i.MIN,it[Pc]=i.MAX;let Xe={[Ic]:i.ZERO,[Dc]:i.ONE,[Lc]:i.SRC_COLOR,[Zo]:i.SRC_ALPHA,[kc]:i.SRC_ALPHA_SATURATE,[Oc]:i.DST_COLOR,[Uc]:i.DST_ALPHA,[Nc]:i.ONE_MINUS_SRC_COLOR,[Jo]:i.ONE_MINUS_SRC_ALPHA,[Bc]:i.ONE_MINUS_DST_COLOR,[Fc]:i.ONE_MINUS_DST_ALPHA,[zc]:i.CONSTANT_COLOR,[Vc]:i.ONE_MINUS_CONSTANT_COLOR,[Hc]:i.CONSTANT_ALPHA,[Gc]:i.ONE_MINUS_CONSTANT_ALPHA};function Oe(L,he,ee,ue,ge,se,Re,Me,ot,$e){if(L===Cn){m===!0&&(ve(i.BLEND),m=!1);return}if(m===!1&&(K(i.BLEND),m=!0),L!==Tc){if(L!==d||$e!==C){if((T!==_i||S!==_i)&&(i.blendEquation(i.FUNC_ADD),T=_i,S=_i),$e)switch(L){case ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qo:i.blendFunc(i.ONE,i.ONE);break;case Yo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ue("WebGLState: Invalid blending: ",L);break}else switch(L){case ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Yo:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jo:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",L);break}P=null,v=null,w=null,A=null,_.set(0,0,0),M=0,d=L,C=$e}return}ge=ge||he,se=se||ee,Re=Re||ue,(he!==T||ge!==S)&&(i.blendEquationSeparate(it[he],it[ge]),T=he,S=ge),(ee!==P||ue!==v||se!==w||Re!==A)&&(i.blendFuncSeparate(Xe[ee],Xe[ue],Xe[se],Xe[Re]),P=ee,v=ue,w=se,A=Re),(Me.equals(_)===!1||ot!==M)&&(i.blendColor(Me.r,Me.g,Me.b,ot),_.copy(Me),M=ot),d=L,C=!1}function He(L,he){L.side===rn?ve(i.CULL_FACE):K(i.CULL_FACE);let ee=L.side===Nt;he&&(ee=!ee),Ge(ee),L.blending===ns&&L.transparent===!1?Oe(Cn):Oe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let ue=L.stencilWrite;o.setTest(ue),ue&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),qt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(L){I!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),I=L)}function Ze(L){L!==wc?(K(i.CULL_FACE),L!==U&&(L===Xo?i.cullFace(i.BACK):L===Ec?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),U=L}function Et(L){L!==O&&(W&&i.lineWidth(L),O=L)}function qt(L,he,ee){L?(K(i.POLYGON_OFFSET_FILL),(R!==he||k!==ee)&&(R=he,k=ee,a.getReversed()&&(he=-he),i.polygonOffset(he,ee))):ve(i.POLYGON_OFFSET_FILL)}function dt(L){L?K(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function gt(L){L===void 0&&(L=i.TEXTURE0+G-1),$!==L&&(i.activeTexture(L),$=L)}function N(L,he,ee){ee===void 0&&($===null?ee=i.TEXTURE0+G-1:ee=$);let ue=Q[ee];ue===void 0&&(ue={type:void 0,texture:void 0},Q[ee]=ue),(ue.type!==L||ue.texture!==he)&&($!==ee&&(i.activeTexture(ee),$=ee),i.bindTexture(L,he||q[L]),ue.type=L,ue.texture=he)}function Ut(){let L=Q[$];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function tt(){try{i.compressedTexImage2D(...arguments)}catch(L){Ue("WebGLState:",L)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(L){Ue("WebGLState:",L)}}function g(){try{i.texSubImage2D(...arguments)}catch(L){Ue("WebGLState:",L)}}function B(){try{i.texSubImage3D(...arguments)}catch(L){Ue("WebGLState:",L)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Ue("WebGLState:",L)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Ue("WebGLState:",L)}}function re(){try{i.texStorage2D(...arguments)}catch(L){Ue("WebGLState:",L)}}function oe(){try{i.texStorage3D(...arguments)}catch(L){Ue("WebGLState:",L)}}function J(){try{i.texImage2D(...arguments)}catch(L){Ue("WebGLState:",L)}}function ne(){try{i.texImage3D(...arguments)}catch(L){Ue("WebGLState:",L)}}function le(L){return f[L]!==void 0?f[L]:i.getParameter(L)}function Te(L,he){f[L]!==he&&(i.pixelStorei(L,he),f[L]=he)}function de(L){we.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),we.copy(L))}function ce(L){_e.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),_e.copy(L))}function Ae(L,he){let ee=c.get(he);ee===void 0&&(ee=new WeakMap,c.set(he,ee));let ue=ee.get(L);ue===void 0&&(ue=i.getUniformBlockIndex(he,L.name),ee.set(L,ue))}function De(L,he){let ue=c.get(he).get(L);l.get(he)!==ue&&(i.uniformBlockBinding(he,ue,L.__bindingPointIndex),l.set(he,ue))}function Be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},$=null,Q={},h={},p=new WeakMap,x=[],b=null,m=!1,d=null,T=null,P=null,v=null,S=null,w=null,A=null,_=new Le(0,0,0),M=0,C=!1,I=null,U=null,O=null,R=null,k=null,we.set(0,0,i.canvas.width,i.canvas.height),_e.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:ve,bindFramebuffer:Ce,drawBuffers:ae,useProgram:ke,setBlending:Oe,setMaterial:He,setFlipSided:Ge,setCullFace:Ze,setLineWidth:Et,setPolygonOffset:qt,setScissorTest:dt,activeTexture:gt,bindTexture:N,unbindTexture:Ut,compressedTexImage2D:tt,compressedTexImage3D:E,texImage2D:J,texImage3D:ne,pixelStorei:Te,getParameter:le,updateUBOMapping:Ae,uniformBlockBinding:De,texStorage2D:re,texStorage3D:oe,texSubImage2D:g,texSubImage3D:B,compressedTexSubImage2D:H,compressedTexSubImage3D:Z,scissor:de,viewport:ce,reset:Be}}function Og(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pe,u=new WeakMap,f=new Set,h,p=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(E,g){return x?new OffscreenCanvas(E,g):Gi("canvas")}function m(E,g,B){let H=1,Z=tt(E);if((Z.width>B||Z.height>B)&&(H=B/Math.max(Z.width,Z.height)),H<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let re=Math.floor(H*Z.width),oe=Math.floor(H*Z.height);h===void 0&&(h=b(re,oe));let J=g?b(re,oe):h;return J.width=re,J.height=oe,J.getContext("2d").drawImage(E,0,0,re,oe),Ne("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+re+"x"+oe+")."),J}else return"data"in E&&Ne("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),E;return E}function d(E){return E.generateMipmaps}function T(E){i.generateMipmap(E)}function P(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(E,g,B,H,Z,re=!1){if(E!==null){if(i[E]!==void 0)return i[E];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let oe;H&&(oe=e.get("EXT_texture_norm16"),oe||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=g;if(g===i.RED&&(B===i.FLOAT&&(J=i.R32F),B===i.HALF_FLOAT&&(J=i.R16F),B===i.UNSIGNED_BYTE&&(J=i.R8),B===i.UNSIGNED_SHORT&&oe&&(J=oe.R16_EXT),B===i.SHORT&&oe&&(J=oe.R16_SNORM_EXT)),g===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.R8UI),B===i.UNSIGNED_SHORT&&(J=i.R16UI),B===i.UNSIGNED_INT&&(J=i.R32UI),B===i.BYTE&&(J=i.R8I),B===i.SHORT&&(J=i.R16I),B===i.INT&&(J=i.R32I)),g===i.RG&&(B===i.FLOAT&&(J=i.RG32F),B===i.HALF_FLOAT&&(J=i.RG16F),B===i.UNSIGNED_BYTE&&(J=i.RG8),B===i.UNSIGNED_SHORT&&oe&&(J=oe.RG16_EXT),B===i.SHORT&&oe&&(J=oe.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RG8UI),B===i.UNSIGNED_SHORT&&(J=i.RG16UI),B===i.UNSIGNED_INT&&(J=i.RG32UI),B===i.BYTE&&(J=i.RG8I),B===i.SHORT&&(J=i.RG16I),B===i.INT&&(J=i.RG32I)),g===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGB8UI),B===i.UNSIGNED_SHORT&&(J=i.RGB16UI),B===i.UNSIGNED_INT&&(J=i.RGB32UI),B===i.BYTE&&(J=i.RGB8I),B===i.SHORT&&(J=i.RGB16I),B===i.INT&&(J=i.RGB32I)),g===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),B===i.UNSIGNED_INT&&(J=i.RGBA32UI),B===i.BYTE&&(J=i.RGBA8I),B===i.SHORT&&(J=i.RGBA16I),B===i.INT&&(J=i.RGBA32I)),g===i.RGB&&(B===i.UNSIGNED_SHORT&&oe&&(J=oe.RGB16_EXT),B===i.SHORT&&oe&&(J=oe.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),g===i.RGBA){let ne=re?ws:je.getTransfer(Z);B===i.FLOAT&&(J=i.RGBA32F),B===i.HALF_FLOAT&&(J=i.RGBA16F),B===i.UNSIGNED_BYTE&&(J=ne===et?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&oe&&(J=oe.RGBA16_EXT),B===i.SHORT&&oe&&(J=oe.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function S(E,g){let B;return E?g===null||g===xn||g===rs?B=i.DEPTH24_STENCIL8:g===an?B=i.DEPTH32F_STENCIL8:g===ss&&(B=i.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===xn||g===rs?B=i.DEPTH_COMPONENT24:g===an?B=i.DEPTH_COMPONENT32F:g===ss&&(B=i.DEPTH_COMPONENT16),B}function w(E,g){return d(E)===!0||E.isFramebufferTexture&&E.minFilter!==At&&E.minFilter!==Lt?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function A(E){let g=E.target;g.removeEventListener("dispose",A),M(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&f.delete(g)}function _(E){let g=E.target;g.removeEventListener("dispose",_),I(g)}function M(E){let g=n.get(E);if(g.__webglInit===void 0)return;let B=E.source,H=p.get(B);if(H){let Z=H[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&C(E),Object.keys(H).length===0&&p.delete(B)}n.remove(E)}function C(E){let g=n.get(E);i.deleteTexture(g.__webglTexture);let B=E.source,H=p.get(B);delete H[g.__cacheKey],a.memory.textures--}function I(E){let g=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(g.__webglFramebuffer[H]))for(let Z=0;Z<g.__webglFramebuffer[H].length;Z++)i.deleteFramebuffer(g.__webglFramebuffer[H][Z]);else i.deleteFramebuffer(g.__webglFramebuffer[H]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[H])}else{if(Array.isArray(g.__webglFramebuffer))for(let H=0;H<g.__webglFramebuffer.length;H++)i.deleteFramebuffer(g.__webglFramebuffer[H]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let H=0;H<g.__webglColorRenderbuffer.length;H++)g.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[H]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let B=E.textures;for(let H=0,Z=B.length;H<Z;H++){let re=n.get(B[H]);re.__webglTexture&&(i.deleteTexture(re.__webglTexture),a.memory.textures--),n.remove(B[H])}n.remove(E)}let U=0;function O(){U=0}function R(){return U}function k(E){U=E}function G(){let E=U;return E>=s.maxTextures&&Ne("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,E}function W(E){let g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function te(E,g){let B=n.get(E);if(E.isVideoTexture&&N(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&B.__version!==E.version){let H=E.image;if(H===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(B,E,g);return}}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+g)}function j(E,g){let B=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){ve(B,E,g);return}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+g)}function $(E,g){let B=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){ve(B,E,g);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+g)}function Q(E,g){let B=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&B.__version!==E.version){Ce(B,E,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+g)}let Y={[Bn]:i.REPEAT,[wn]:i.CLAMP_TO_EDGE,[zr]:i.MIRRORED_REPEAT},ie={[At]:i.NEAREST,[qc]:i.NEAREST_MIPMAP_NEAREST,[Xs]:i.NEAREST_MIPMAP_LINEAR,[Lt]:i.LINEAR,[da]:i.LINEAR_MIPMAP_NEAREST,[si]:i.LINEAR_MIPMAP_LINEAR},we={[Jc]:i.NEVER,[th]:i.ALWAYS,[Kc]:i.LESS,[Ja]:i.LEQUAL,[$c]:i.EQUAL,[Ka]:i.GEQUAL,[Qc]:i.GREATER,[eh]:i.NOTEQUAL};function _e(E,g){if(g.type===an&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Lt||g.magFilter===da||g.magFilter===Xs||g.magFilter===si||g.minFilter===Lt||g.minFilter===da||g.minFilter===Xs||g.minFilter===si)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Y[g.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Y[g.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Y[g.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ie[g.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ie[g.minFilter]),g.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,we[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===At||g.minFilter!==Xs&&g.minFilter!==si||g.type===an&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Ie(E,g){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",A));let H=g.source,Z=p.get(H);Z===void 0&&(Z={},p.set(H,Z));let re=W(g);if(re!==E.__cacheKey){Z[re]===void 0&&(Z[re]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Z[re].usedTimes++;let oe=Z[E.__cacheKey];oe!==void 0&&(Z[E.__cacheKey].usedTimes--,oe.usedTimes===0&&C(g)),E.__cacheKey=re,E.__webglTexture=Z[re].texture}return B}function q(E,g,B){return Math.floor(Math.floor(E/B)/g)}function K(E,g,B,H){let re=E.updateRanges;if(re.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,B,H,g.data);else{re.sort((Te,de)=>Te.start-de.start);let oe=0;for(let Te=1;Te<re.length;Te++){let de=re[oe],ce=re[Te],Ae=de.start+de.count,De=q(ce.start,g.width,4),Be=q(de.start,g.width,4);ce.start<=Ae+1&&De===Be&&q(ce.start+ce.count-1,g.width,4)===De?de.count=Math.max(de.count,ce.start+ce.count-de.start):(++oe,re[oe]=ce)}re.length=oe+1;let J=t.getParameter(i.UNPACK_ROW_LENGTH),ne=t.getParameter(i.UNPACK_SKIP_PIXELS),le=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Te=0,de=re.length;Te<de;Te++){let ce=re[Te],Ae=Math.floor(ce.start/4),De=Math.ceil(ce.count/4),Be=Ae%g.width,L=Math.floor(Ae/g.width),he=De,ee=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Be),t.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,Be,L,he,ee,B,H,g.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,le)}}function ve(E,g,B){let H=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(H=i.TEXTURE_3D);let Z=Ie(E,g),re=g.source;t.bindTexture(H,E.__webglTexture,i.TEXTURE0+B);let oe=n.get(re);if(re.version!==oe.__version||Z===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let ee=je.getPrimaries(je.workingColorSpace),ue=g.colorSpace===Ct?null:je.getPrimaries(g.colorSpace),ge=g.colorSpace===Ct||ee===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let ne=m(g.image,!1,s.maxTextureSize);ne=Ut(g,ne);let le=r.convert(g.format,g.colorSpace),Te=r.convert(g.type),de=v(g.internalFormat,le,Te,g.normalized,g.colorSpace,g.isVideoTexture);_e(H,g);let ce,Ae=g.mipmaps,De=g.isVideoTexture!==!0,Be=oe.__version===void 0||Z===!0,L=re.dataReady,he=w(g,ne);if(g.isDepthTexture)de=S(g.format===ri,g.type),Be&&(De?t.texStorage2D(i.TEXTURE_2D,1,de,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,de,ne.width,ne.height,0,le,Te,null));else if(g.isDataTexture)if(Ae.length>0){De&&Be&&t.texStorage2D(i.TEXTURE_2D,he,de,Ae[0].width,Ae[0].height);for(let ee=0,ue=Ae.length;ee<ue;ee++)ce=Ae[ee],De?L&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ce.width,ce.height,le,Te,ce.data):t.texImage2D(i.TEXTURE_2D,ee,de,ce.width,ce.height,0,le,Te,ce.data);g.generateMipmaps=!1}else De?(Be&&t.texStorage2D(i.TEXTURE_2D,he,de,ne.width,ne.height),L&&K(g,ne,le,Te)):t.texImage2D(i.TEXTURE_2D,0,de,ne.width,ne.height,0,le,Te,ne.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){De&&Be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,de,Ae[0].width,Ae[0].height,ne.depth);for(let ee=0,ue=Ae.length;ee<ue;ee++)if(ce=Ae[ee],g.format!==on)if(le!==null)if(De){if(L)if(g.layerUpdates.size>0){let ge=gl(ce.width,ce.height,g.format,g.type);for(let se of g.layerUpdates){let Re=ce.data.subarray(se*ge/ce.data.BYTES_PER_ELEMENT,(se+1)*ge/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,se,ce.width,ce.height,1,le,Re)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,ne.depth,le,ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,de,ce.width,ce.height,ne.depth,0,ce.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,ne.depth,le,Te,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,de,ce.width,ce.height,ne.depth,0,le,Te,ce.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{De&&Be&&t.texStorage2D(i.TEXTURE_2D,he,de,Ae[0].width,Ae[0].height);for(let ee=0,ue=Ae.length;ee<ue;ee++)ce=Ae[ee],g.format!==on?le!==null?De?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,ce.width,ce.height,le,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,de,ce.width,ce.height,0,ce.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?L&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ce.width,ce.height,le,Te,ce.data):t.texImage2D(i.TEXTURE_2D,ee,de,ce.width,ce.height,0,le,Te,ce.data)}else if(g.isDataArrayTexture)if(De){if(Be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,de,ne.width,ne.height,ne.depth),L)if(g.layerUpdates.size>0){let ee=gl(ne.width,ne.height,g.format,g.type);for(let ue of g.layerUpdates){let ge=ne.data.subarray(ue*ee/ne.data.BYTES_PER_ELEMENT,(ue+1)*ee/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ue,ne.width,ne.height,1,le,Te,ge)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,le,Te,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,de,ne.width,ne.height,ne.depth,0,le,Te,ne.data);else if(g.isData3DTexture)De?(Be&&t.texStorage3D(i.TEXTURE_3D,he,de,ne.width,ne.height,ne.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,le,Te,ne.data)):t.texImage3D(i.TEXTURE_3D,0,de,ne.width,ne.height,ne.depth,0,le,Te,ne.data);else if(g.isFramebufferTexture){if(Be)if(De)t.texStorage2D(i.TEXTURE_2D,he,de,ne.width,ne.height);else{let ee=ne.width,ue=ne.height;for(let ge=0;ge<he;ge++)t.texImage2D(i.TEXTURE_2D,ge,de,ee,ue,0,le,Te,null),ee>>=1,ue>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let ee=i.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),ne.parentNode!==ee){ee.appendChild(ne),f.add(g),ee.onpaint=ue=>{let ge=ue.changedElements;for(let se of f)ge.includes(se.image)&&(se.needsUpdate=!0)},ee.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ne);else{let ge=i.RGBA,se=i.RGBA,Re=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ge,se,Re,ne)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(De&&Be){let ee=tt(Ae[0]);t.texStorage2D(i.TEXTURE_2D,he,de,ee.width,ee.height)}for(let ee=0,ue=Ae.length;ee<ue;ee++)ce=Ae[ee],De?L&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,le,Te,ce):t.texImage2D(i.TEXTURE_2D,ee,de,le,Te,ce);g.generateMipmaps=!1}else if(De){if(Be){let ee=tt(ne);t.texStorage2D(i.TEXTURE_2D,he,de,ee.width,ee.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,Te,ne)}else t.texImage2D(i.TEXTURE_2D,0,de,le,Te,ne);d(g)&&T(H),oe.__version=re.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function Ce(E,g,B){if(g.image.length!==6)return;let H=Ie(E,g),Z=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+B);let re=n.get(Z);if(Z.version!==re.__version||H===!0){t.activeTexture(i.TEXTURE0+B);let oe=je.getPrimaries(je.workingColorSpace),J=g.colorSpace===Ct?null:je.getPrimaries(g.colorSpace),ne=g.colorSpace===Ct||oe===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let le=g.isCompressedTexture||g.image[0].isCompressedTexture,Te=g.image[0]&&g.image[0].isDataTexture,de=[];for(let se=0;se<6;se++)!le&&!Te?de[se]=m(g.image[se],!0,s.maxCubemapSize):de[se]=Te?g.image[se].image:g.image[se],de[se]=Ut(g,de[se]);let ce=de[0],Ae=r.convert(g.format,g.colorSpace),De=r.convert(g.type),Be=v(g.internalFormat,Ae,De,g.normalized,g.colorSpace),L=g.isVideoTexture!==!0,he=re.__version===void 0||H===!0,ee=Z.dataReady,ue=w(g,ce);_e(i.TEXTURE_CUBE_MAP,g);let ge;if(le){L&&he&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Be,ce.width,ce.height);for(let se=0;se<6;se++){ge=de[se].mipmaps;for(let Re=0;Re<ge.length;Re++){let Me=ge[Re];g.format!==on?Ae!==null?L?ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re,0,0,Me.width,Me.height,Ae,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re,Be,Me.width,Me.height,0,Me.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re,0,0,Me.width,Me.height,Ae,De,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re,Be,Me.width,Me.height,0,Ae,De,Me.data)}}}else{if(ge=g.mipmaps,L&&he){ge.length>0&&ue++;let se=tt(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Be,se.width,se.height)}for(let se=0;se<6;se++)if(Te){L?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,de[se].width,de[se].height,Ae,De,de[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Be,de[se].width,de[se].height,0,Ae,De,de[se].data);for(let Re=0;Re<ge.length;Re++){let ot=ge[Re].image[se].image;L?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re+1,0,0,ot.width,ot.height,Ae,De,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re+1,Be,ot.width,ot.height,0,Ae,De,ot.data)}}else{L?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ae,De,de[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Be,Ae,De,de[se]);for(let Re=0;Re<ge.length;Re++){let Me=ge[Re];L?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re+1,0,0,Ae,De,Me.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re+1,Be,Ae,De,Me.image[se])}}}d(g)&&T(i.TEXTURE_CUBE_MAP),re.__version=Z.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function ae(E,g,B,H,Z,re){let oe=r.convert(B.format,B.colorSpace),J=r.convert(B.type),ne=v(B.internalFormat,oe,J,B.normalized,B.colorSpace),le=n.get(g),Te=n.get(B);if(Te.__renderTarget=g,!le.__hasExternalTextures){let de=Math.max(1,g.width>>re),ce=Math.max(1,g.height>>re);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,re,ne,de,ce,g.depth,0,oe,J,null):t.texImage2D(Z,re,ne,de,ce,0,oe,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),gt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,Z,Te.__webglTexture,0,dt(g)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,Z,Te.__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(E,g,B){if(i.bindRenderbuffer(i.RENDERBUFFER,E),g.depthBuffer){let H=g.depthTexture,Z=H&&H.isDepthTexture?H.type:null,re=S(g.stencilBuffer,Z),oe=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;gt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt(g),re,g.width,g.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt(g),re,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,re,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,E)}else{let H=g.textures;for(let Z=0;Z<H.length;Z++){let re=H[Z],oe=r.convert(re.format,re.colorSpace),J=r.convert(re.type),ne=v(re.internalFormat,oe,J,re.normalized,re.colorSpace);gt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt(g),ne,g.width,g.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt(g),ne,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ne,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function it(E,g,B){let H=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(g.depthTexture);if(Z.__renderTarget=g,(!Z.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),H){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,g.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),_e(i.TEXTURE_CUBE_MAP,g.depthTexture);let le=r.convert(g.depthTexture.format),Te=r.convert(g.depthTexture.type),de;g.depthTexture.format===En?de=i.DEPTH_COMPONENT24:g.depthTexture.format===ri&&(de=i.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,de,g.width,g.height,0,le,Te,null)}}else te(g.depthTexture,0);let re=Z.__webglTexture,oe=dt(g),J=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,ne=g.depthTexture.format===ri?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===En)gt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,J,re,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,ne,J,re,0);else if(g.depthTexture.format===ri)gt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,J,re,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,ne,J,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xe(E){let g=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){let H=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),H){let Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,H.removeEventListener("dispose",Z)};H.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=H}if(E.depthTexture&&!g.__autoAllocateDepthBuffer)if(B)for(let H=0;H<6;H++)it(g.__webglFramebuffer[H],E,H);else{let H=E.texture.mipmaps;H&&H.length>0?it(g.__webglFramebuffer[0],E,0):it(g.__webglFramebuffer,E,0)}else if(B){g.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[H]),g.__webglDepthbuffer[H]===void 0)g.__webglDepthbuffer[H]=i.createRenderbuffer(),ke(g.__webglDepthbuffer[H],E,!1);else{let Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=g.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,re)}}else{let H=E.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),ke(g.__webglDepthbuffer,E,!1);else{let Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,re)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(E,g,B){let H=n.get(E);g!==void 0&&ae(H.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Xe(E)}function He(E){let g=E.texture,B=n.get(E),H=n.get(g);E.addEventListener("dispose",_);let Z=E.textures,re=E.isWebGLCubeRenderTarget===!0,oe=Z.length>1;if(oe||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=g.version,a.memory.textures++),re){B.__webglFramebuffer=[];for(let J=0;J<6;J++)if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer[J]=[];for(let ne=0;ne<g.mipmaps.length;ne++)B.__webglFramebuffer[J][ne]=i.createFramebuffer()}else B.__webglFramebuffer[J]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer=[];for(let J=0;J<g.mipmaps.length;J++)B.__webglFramebuffer[J]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(oe)for(let J=0,ne=Z.length;J<ne;J++){let le=n.get(Z[J]);le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&gt(E)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){let ne=Z[J];B.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[J]);let le=r.convert(ne.format,ne.colorSpace),Te=r.convert(ne.type),de=v(ne.internalFormat,le,Te,ne.normalized,ne.colorSpace,E.isXRRenderTarget===!0),ce=dt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,de,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,B.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),ke(B.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),_e(i.TEXTURE_CUBE_MAP,g);for(let J=0;J<6;J++)if(g.mipmaps&&g.mipmaps.length>0)for(let ne=0;ne<g.mipmaps.length;ne++)ae(B.__webglFramebuffer[J][ne],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne);else ae(B.__webglFramebuffer[J],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);d(g)&&T(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let J=0,ne=Z.length;J<ne;J++){let le=Z[J],Te=n.get(le),de=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(de=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,Te.__webglTexture),_e(de,le),ae(B.__webglFramebuffer,E,le,i.COLOR_ATTACHMENT0+J,de,0),d(le)&&T(de)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(J=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,H.__webglTexture),_e(J,g),g.mipmaps&&g.mipmaps.length>0)for(let ne=0;ne<g.mipmaps.length;ne++)ae(B.__webglFramebuffer[ne],E,g,i.COLOR_ATTACHMENT0,J,ne);else ae(B.__webglFramebuffer,E,g,i.COLOR_ATTACHMENT0,J,0);d(g)&&T(J),t.unbindTexture()}E.depthBuffer&&Xe(E)}function Ge(E){let g=E.textures;for(let B=0,H=g.length;B<H;B++){let Z=g[B];if(d(Z)){let re=P(E),oe=n.get(Z).__webglTexture;t.bindTexture(re,oe),T(re),t.unbindTexture()}}}let Ze=[],Et=[];function qt(E){if(E.samples>0){if(gt(E)===!1){let g=E.textures,B=E.width,H=E.height,Z=i.COLOR_BUFFER_BIT,re=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=n.get(E),J=g.length>1;if(J)for(let le=0;le<g.length;le++)t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);let ne=E.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let le=0;le<g.length;le++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);let Te=n.get(g[le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,B,H,0,0,B,H,Z,i.NEAREST),l===!0&&(Ze.length=0,Et.length=0,Ze.push(i.COLOR_ATTACHMENT0+le),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(Ze.push(re),Et.push(re),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Et)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ze))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let le=0;le<g.length;le++){t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);let Te=n.get(g[le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,Te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let g=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function dt(E){return Math.min(s.maxSamples,E.samples)}function gt(E){let g=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function N(E){let g=a.render.frame;u.get(E)!==g&&(u.set(E,g),E.update())}function Ut(E,g){let B=E.colorSpace,H=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==Ms&&B!==Ct&&(je.getTransfer(B)===et?(H!==on||Z!==jt)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",B)),g}function tt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=O,this.getTextureUnits=R,this.setTextureUnits=k,this.setTexture2D=te,this.setTexture2DArray=j,this.setTexture3D=$,this.setTextureCube=Q,this.rebindTextures=Oe,this.setupRenderTarget=He,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Bg(i,e){function t(n,s=Ct){let r,a=je.getTransfer(s);if(n===jt)return i.UNSIGNED_BYTE;if(n===pa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ma)return i.UNSIGNED_SHORT_5_5_5_1;if(n===al)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ol)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===sl)return i.BYTE;if(n===rl)return i.SHORT;if(n===ss)return i.UNSIGNED_SHORT;if(n===fa)return i.INT;if(n===xn)return i.UNSIGNED_INT;if(n===an)return i.FLOAT;if(n===yn)return i.HALF_FLOAT;if(n===ll)return i.ALPHA;if(n===cl)return i.RGB;if(n===on)return i.RGBA;if(n===En)return i.DEPTH_COMPONENT;if(n===ri)return i.DEPTH_STENCIL;if(n===ga)return i.RED;if(n===_a)return i.RED_INTEGER;if(n===ai)return i.RG;if(n===xa)return i.RG_INTEGER;if(n===ya)return i.RGBA_INTEGER;if(n===qs||n===Ys||n===js||n===Zs)if(a===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===va||n===ba||n===Sa||n===Ma)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===va)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ma)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wa||n===Ea||n===Ta||n===Aa||n===Ra||n===Js||n===Ca)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wa||n===Ea)return a===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ta)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Aa)return r.COMPRESSED_R11_EAC;if(n===Ra)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Js)return r.COMPRESSED_RG11_EAC;if(n===Ca)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Pa||n===Ia||n===Da||n===La||n===Na||n===Ua||n===Fa||n===Oa||n===Ba||n===ka||n===za||n===Va||n===Ha||n===Ga)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Pa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ia)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Da)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===La)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Na)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ua)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ba)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ka)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===za)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Va)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ha)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ga)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wa||n===Xa||n===qa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Wa)return a===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ya||n===ja||n===Ks||n===Za)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ya)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ja)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ks)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var kg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zg=`
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

}`,Ul=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ds(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new en({vertexShader:kg,fragmentShader:zg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ye(new Kn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Fl=class extends pn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,x=null,b=typeof XRWebGLBinding<"u",m=new Ul,d={},T=t.getContextAttributes(),P=null,v=null,S=[],w=[],A=new Pe,_=null,M=null,C=new Dt;C.viewport=new ut;let I=new Dt;I.viewport=new ut;let U=[C,I],O=new aa,R=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=S[q];return K===void 0&&(K=new ji,S[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=S[q];return K===void 0&&(K=new ji,S[q]=K),K.getGripSpace()},this.getHand=function(q){let K=S[q];return K===void 0&&(K=new ji,S[q]=K),K.getHandSpace()};function G(q){let K=w.indexOf(q.inputSource);if(K===-1)return;let ve=S[K];ve!==void 0&&(ve.update(q.inputSource,q.frame,c||a),ve.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",te);for(let q=0;q<S.length;q++){let K=w[q];K!==null&&(w[q]=null,S[q].disconnect(K))}R=null,k=null,m.reset();for(let q in d)delete d[q];if(e.setRenderTarget(P),p=null,h=null,f=null,s=null,v=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(A.width,A.height,!1),M!==null){let q=M.camera;q.fov=M.fov,q.zoom=M.zoom,q.updateProjectionMatrix(),M=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(P=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",W),s.addEventListener("inputsourceschange",te),T.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(A),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ce=null,ae=null;T.depth&&(ae=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=T.stencil?ri:En,Ce=T.stencil?rs:xn);let ke={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(ke),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Yt(h.textureWidth,h.textureHeight,{format:on,type:jt,depthTexture:new Jn(h.textureWidth,h.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ve={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Yt(p.framebufferWidth,p.framebufferHeight,{format:on,type:jt,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ie.setContext(s),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(q){for(let K=0;K<q.removed.length;K++){let ve=q.removed[K],Ce=w.indexOf(ve);Ce>=0&&(w[Ce]=null,S[Ce].disconnect(ve))}for(let K=0;K<q.added.length;K++){let ve=q.added[K],Ce=w.indexOf(ve);if(Ce===-1){for(let ke=0;ke<S.length;ke++)if(ke>=w.length){w.push(ve),Ce=ke;break}else if(w[ke]===null){w[ke]=ve,Ce=ke;break}if(Ce===-1)break}let ae=S[Ce];ae&&ae.connect(ve)}}let j=new F,$=new F;function Q(q,K,ve){j.setFromMatrixPosition(K.matrixWorld),$.setFromMatrixPosition(ve.matrixWorld);let Ce=j.distanceTo($),ae=K.projectionMatrix.elements,ke=ve.projectionMatrix.elements,it=ae[14]/(ae[10]-1),Xe=ae[14]/(ae[10]+1),Oe=(ae[9]+1)/ae[5],He=(ae[9]-1)/ae[5],Ge=(ae[8]-1)/ae[0],Ze=(ke[8]+1)/ke[0],Et=it*Ge,qt=it*Ze,dt=Ce/(-Ge+Ze),gt=dt*-Ge;if(K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(gt),q.translateZ(dt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ae[10]===-1)q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let N=it+dt,Ut=Xe+dt,tt=Et-gt,E=qt+(Ce-gt),g=Oe*Xe/Ut*N,B=He*Xe/Ut*N;q.projectionMatrix.makePerspective(tt,E,g,B,N,Ut),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Y(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let K=q.near,ve=q.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),O.near=I.near=C.near=K,O.far=I.far=C.far=ve,(R!==O.near||k!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),R=O.near,k=O.far),O.layers.mask=q.layers.mask|6,C.layers.mask=O.layers.mask&-5,I.layers.mask=O.layers.mask&-3;let Ce=q.parent,ae=O.cameras;Y(O,Ce);for(let ke=0;ke<ae.length;ke++)Y(ae[ke],Ce);ae.length===2?Q(O,C,I):O.projectionMatrix.copy(C.projectionMatrix),M===null&&q.isPerspectiveCamera&&(M={camera:q,fov:q.fov,zoom:q.zoom}),ie(q,O,Ce)};function ie(q,K,ve){ve===null?q.matrix.copy(K.matrixWorld):(q.matrix.copy(ve.matrixWorld),q.matrix.invert(),q.matrix.multiply(K.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Xi*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(q){return d[q]};let we=null;function _e(q,K){if(u=K.getViewerPose(c||a),x=K,u!==null){let ve=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let Ce=!1;ve.length!==O.cameras.length&&(O.cameras.length=0,Ce=!0);for(let Xe=0;Xe<ve.length;Xe++){let Oe=ve[Xe],He=null;if(p!==null)He=p.getViewport(Oe);else{let Ze=f.getViewSubImage(h,Oe);He=Ze.viewport,Xe===0&&(e.setRenderTargetTextures(v,Ze.colorTexture,Ze.depthStencilTexture),e.setRenderTarget(v))}let Ge=U[Xe];Ge===void 0&&(Ge=new Dt,Ge.layers.enable(Xe),Ge.viewport=new ut,U[Xe]=Ge),Ge.matrix.fromArray(Oe.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Oe.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(He.x,He.y,He.width,He.height),Xe===0&&(O.matrix.copy(Ge.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ce===!0&&O.cameras.push(Ge)}let ae=s.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){f=n.getBinding();let Xe=f.getDepthInformation(ve[0]);Xe&&Xe.isValid&&Xe.texture&&m.init(Xe,s.renderState)}if(ae&&ae.includes("camera-access")&&b){e.state.unbindTexture(),f=n.getBinding();for(let Xe=0;Xe<ve.length;Xe++){let Oe=ve[Xe].camera;if(Oe){let He=d[Oe];He||(He=new Ds,d[Oe]=He);let Ge=f.getCameraImage(Oe);He.sourceTexture=Ge}}}}for(let ve=0;ve<S.length;ve++){let Ce=w[ve],ae=S[ve];Ce!==null&&ae!==void 0&&ae.update(Ce,K,c||a)}we&&we(q,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),x=null}let Ie=new Dh;Ie.setAnimationLoop(_e),this.setAnimationLoop=function(q){we=q},this.dispose=function(){}}},Vg=new at,Bh=new Fe;Bh.set(-1,0,0,0,1,0,0,0,1);function Hg(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,fl(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,T,P,v){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(r(m,d),x(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),b(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,T,P):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Nt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Nt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let T=e.get(d),P=T.envMap,v=T.envMapRotation;P&&(m.envMap.value=P,m.envMapRotation.value.setFromMatrix4(Vg.makeRotationFromEuler(v)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Bh),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,T,P){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*T,m.scale.value=P*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,T){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Nt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,d){d.matcap&&(m.matcap.value=d.matcap)}function b(m,d){let T=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Gg(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){let w=S.program;n.uniformBlockBinding(v,w)}function c(v,S){let w=s[v.id];w===void 0&&(m(v),w=u(v),s[v.id]=w,v.addEventListener("dispose",T));let A=S.program;n.updateUBOMapping(v,A);let _=e.render.frame;r[v.id]!==_&&(h(v),r[v.id]=_)}function u(v){let S=f();v.__bindingPointIndex=S;let w=i.createBuffer(),A=v.__size,_=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,w),w}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let S=s[v.id],w=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let _=0,M=w.length;_<M;_++){let C=w[_];if(Array.isArray(C))for(let I=0,U=C.length;I<U;I++)p(C[I],_,I,A);else p(C,_,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,S,w,A){if(b(v,S,w,A)===!0){let _=v.__offset,M=v.value;if(Array.isArray(M)){let C=0;for(let I=0;I<M.length;I++){let U=M[I],O=d(U);x(U,v.__data,C),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(C+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(M,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function x(v,S,w){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,w)}function b(v,S,w,A){let _=v.value,M=S+"_"+w;if(A[M]===void 0)return typeof _=="number"||typeof _=="boolean"?A[M]=_:ArrayBuffer.isView(_)?A[M]=_.slice():A[M]=_.clone(),!0;{let C=A[M];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return A[M]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function m(v){let S=v.uniforms,w=0,A=16;for(let M=0,C=S.length;M<C;M++){let I=Array.isArray(S[M])?S[M]:[S[M]];for(let U=0,O=I.length;U<O;U++){let R=I[U],k=Array.isArray(R.value)?R.value:[R.value];for(let G=0,W=k.length;G<W;G++){let te=k[G],j=d(te),$=w%A,Q=$%j.boundary,Y=$+Q;w+=Q,Y!==0&&A-Y<j.storage&&(w+=A-Y),R.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=w,w+=j.storage}}}let _=w%A;return _>0&&(w+=A-_),v.__size=w,v.__cache={},this}function d(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",v),S}function T(v){let S=v.target;S.removeEventListener("dispose",T);let w=a.indexOf(S.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function P(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:P}}var Wg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Pn=null;function Xg(){return Pn===null&&(Pn=new Rs(Wg,16,16,ai,yn),Pn.name="DFG_LUT",Pn.minFilter=Lt,Pn.magFilter=Lt,Pn.wrapS=wn,Pn.wrapT=wn,Pn.generateMipmaps=!1,Pn.needsUpdate=!0),Pn}var to=class{constructor(e={}){let{canvas:t=ih(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=jt}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let b=p,m=new Set([ya,xa,_a]),d=new Set([jt,xn,ss,rs,pa,ma]),T=new Uint32Array(4),P=new Int32Array(4),v=new F,S=null,w=null,A=[],_=[],M=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,I=!1,U=null,O=null,R=null,k=null;this._outputColorSpace=It;let G=0,W=0,te=null,j=-1,$=null,Q=new ut,Y=new ut,ie=null,we=new Le(0),_e=0,Ie=t.width,q=t.height,K=1,ve=null,Ce=null,ae=new ut(0,0,Ie,q),ke=new ut(0,0,Ie,q),it=!1,Xe=new Zi,Oe=!1,He=!1,Ge=new at,Ze=new F,Et=new ut,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},dt=!1;function gt(){return te===null?K:1}let N=n;function Ut(y,D){return t.getContext(y,D)}let tt,E,g,B,H,Z,re,oe,J,ne,le,Te,de,ce,Ae,De,Be,L,he,ee,ue,ge,se;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",ot,!1),t.addEventListener("webglcontextrestored",$e,!1),t.addEventListener("webglcontextcreationerror",cn,!1),N===null){let D="webgl2";if(N=Ut(D,y),N===null)throw Ut(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Re()}catch(y){throw t.removeEventListener("webglcontextlost",ot,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",cn,!1),Ue("WebGLRenderer: "+y.message),y}function Re(){tt=new $p(N),tt.init(),ue=new Bg(N,tt),E=new Hp(N,tt,e,ue),g=new Fg(N,tt),E.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),O=N.createFramebuffer(),R=N.createFramebuffer(),k=N.createFramebuffer(),B=new tm(N),H=new Sg,Z=new Og(N,tt,g,H,E,ue,B),re=new Kp(C),oe=new nd(N),ge=new zp(N,oe),J=new Qp(N,oe,B,ge),ne=new im(N,J,oe,ge,B),L=new nm(N,E,Z),Ae=new Gp(H),le=new bg(C,re,tt,E,ge,Ae),Te=new Hg(C,H),de=new wg,ce=new Pg(tt),Be=new kp(C,re,g,ne,x,l),De=new Ug(C,ne,E),se=new Gg(N,B,E,g),he=new Vp(N,tt,B),ee=new em(N,tt,B),B.programs=le.programs,C.capabilities=E,C.extensions=tt,C.properties=H,C.renderLists=de,C.shadowMap=De,C.state=g,C.info=B}b!==jt&&(M=new rm(b,t.width,t.height,o,s,r));let Me=new Fl(C,N);this.xr=Me,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let y=tt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=tt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(y){y!==void 0&&(K=y,this.setSize(Ie,q,!1))},this.getSize=function(y){return y.set(Ie,q)},this.setSize=function(y,D,X=!0){if(Me.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}Ie=y,q=D,t.width=Math.floor(y*K),t.height=Math.floor(D*K),X===!0&&(t.style.width=y+"px",t.style.height=D+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(Ie*K,q*K).floor()},this.setDrawingBufferSize=function(y,D,X){Ie=y,q=D,K=X,t.width=Math.floor(y*X),t.height=Math.floor(D*X),this.setViewport(0,0,y,D)},this.setEffects=function(y){if(b===jt){Ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let D=0;D<y.length;D++)if(y[D].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(Q)},this.getViewport=function(y){return y.copy(ae)},this.setViewport=function(y,D,X,z){y.isVector4?ae.set(y.x,y.y,y.z,y.w):ae.set(y,D,X,z),g.viewport(Q.copy(ae).multiplyScalar(K).round())},this.getScissor=function(y){return y.copy(ke)},this.setScissor=function(y,D,X,z){y.isVector4?ke.set(y.x,y.y,y.z,y.w):ke.set(y,D,X,z),g.scissor(Y.copy(ke).multiplyScalar(K).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(y){g.setScissorTest(it=y)},this.setOpaqueSort=function(y){ve=y},this.setTransparentSort=function(y){Ce=y},this.getClearColor=function(y){return y.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(y=!0,D=!0,X=!0){let z=0;if(y){let V=!1;if(te!==null){let me=te.texture.format;V=m.has(me)}if(V){let me=te.texture.type,ye=d.has(me),pe=Be.getClearColor(),be=Be.getClearAlpha(),Ee=pe.r,ze=pe.g,qe=pe.b;ye?(T[0]=Ee,T[1]=ze,T[2]=qe,T[3]=be,N.clearBufferuiv(N.COLOR,0,T)):(P[0]=Ee,P[1]=ze,P[2]=qe,P[3]=be,N.clearBufferiv(N.COLOR,0,P))}else z|=N.COLOR_BUFFER_BIT}D&&(z|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),U=y},this.dispose=function(){t.removeEventListener("webglcontextlost",ot,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",cn,!1),Be.dispose(),de.dispose(),ce.dispose(),H.dispose(),re.dispose(),ne.dispose(),ge.dispose(),se.dispose(),le.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",Hl),Me.removeEventListener("sessionend",Gl),oi.stop()};function ot(y){y.preventDefault(),ul("WebGLRenderer: Context Lost."),I=!0}function $e(){ul("WebGLRenderer: Context Restored."),I=!1;let y=B.autoReset,D=De.enabled,X=De.autoUpdate,z=De.needsUpdate,V=De.type;Re(),B.autoReset=y,De.enabled=D,De.autoUpdate=X,De.needsUpdate=z,De.type=V}function cn(y){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function bn(y){let D=y.target;D.removeEventListener("dispose",bn),Kh(D)}function Kh(y){$h(y),H.remove(y)}function $h(y){let D=H.get(y).programs;D!==void 0&&(D.forEach(function(X){le.releaseProgram(X)}),y.isShaderMaterial&&le.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,X,z,V,me){D===null&&(D=qt);let ye=V.isMesh&&V.matrixWorld.determinantAffine()<0,pe=tu(y,D,X,z,V);g.setMaterial(z,ye);let be=X.index,Ee=1;if(z.wireframe===!0){if(be=J.getWireframeAttribute(X),be===void 0)return;Ee=2}let ze=X.drawRange,qe=X.attributes.position,Se=ze.start*Ee,Qe=(ze.start+ze.count)*Ee;me!==null&&(Se=Math.max(Se,me.start*Ee),Qe=Math.min(Qe,(me.start+me.count)*Ee)),be!==null?(Se=Math.max(Se,0),Qe=Math.min(Qe,be.count)):qe!=null&&(Se=Math.max(Se,0),Qe=Math.min(Qe,qe.count));let _t=Qe-Se;if(_t<0||_t===1/0)return;ge.setup(V,z,pe,X,be);let ct,rt=he;if(be!==null&&(ct=oe.get(be),rt=ee,rt.setIndex(ct)),V.isMesh)z.wireframe===!0?(g.setLineWidth(z.wireframeLinewidth*gt()),rt.setMode(N.LINES)):rt.setMode(N.TRIANGLES);else if(V.isLine){let Ft=z.linewidth;Ft===void 0&&(Ft=1),g.setLineWidth(Ft*gt()),V.isLineSegments?rt.setMode(N.LINES):V.isLineLoop?rt.setMode(N.LINE_LOOP):rt.setMode(N.LINE_STRIP)}else V.isPoints?rt.setMode(N.POINTS):V.isSprite&&rt.setMode(N.TRIANGLES);if(V.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))rt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Ft=V._multiDrawStarts,xe=V._multiDrawCounts,Vt=V._multiDrawCount,Je=be?oe.get(be).bytesPerElement:1,nn=H.get(z).currentProgram.getUniforms();for(let Sn=0;Sn<Vt;Sn++)nn.setValue(N,"_gl_DrawID",Sn),rt.render(Ft[Sn]/Je,xe[Sn])}else if(V.isInstancedMesh)rt.renderInstances(Se,_t,V.count);else if(X.isInstancedBufferGeometry){let Ft=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,xe=Math.min(X.instanceCount,Ft);rt.renderInstances(Se,_t,xe)}else rt.render(Se,_t)};function Vl(y,D,X,z){U!==null&&y.isNodeMaterial&&U.setObject(z,y),Oe===!0&&Ae.setState(y,X,!1),y.transparent===!0&&y.side===rn&&y.forceSinglePass===!1?(y.side=Nt,y.needsUpdate=!0,cr(y,D,z),y.side=Rn,y.needsUpdate=!0,cr(y,D,z),y.side=rn):cr(y,D,z)}this.compile=function(y,D,X=null){X===null&&(X=y),U!==null&&U.renderStart(y,D,X),w=ce.get(X),w.init(D),_.push(w),X.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),y!==X&&y.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),w.setupLights(),U!==null&&U.updateLights(w.state.lightsArray),He=this.localClippingEnabled,Oe=Ae.init(this.clippingPlanes,He),Oe===!0&&Ae.setGlobalState(this.clippingPlanes,D),U!==null&&De.render(w.state.shadowsArray,X,D);let z=new Set;return y.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let me=V.material;if(me)if(Array.isArray(me))for(let ye=0;ye<me.length;ye++){let pe=me[ye];Vl(pe,X,D,V),z.add(pe)}else Vl(me,X,D,V),z.add(me)}),w=_.pop(),U!==null&&U.renderEnd(),z},this.compileAsync=function(y,D,X=null){let z=this.compile(y,D,X);return new Promise(V=>{function me(){if(z.forEach(function(ye){let be=H.get(ye).currentProgram;(be===void 0||be.isReady())&&z.delete(ye)}),z.size===0){V(y);return}setTimeout(me,10)}tt.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let fo=null;function Qh(y){fo&&fo(y)}function Hl(){oi.stop()}function Gl(){oi.start()}let oi=new Dh;oi.setAnimationLoop(Qh),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(y){fo=y,Me.setAnimationLoop(y),y===null?oi.stop():oi.start()},Me.addEventListener("sessionstart",Hl),Me.addEventListener("sessionend",Gl),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;U!==null&&U.renderStart(y,D);let X=Me.enabled===!0&&Me.isPresenting===!0,z=M!==null&&(te===null||X)&&M.begin(C,te);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(D),D=Me.getCamera()),y.isScene===!0&&y.onBeforeRender(C,y,D,te),w=ce.get(y,_.length),w.init(D),w.state.textureUnits=Z.getTextureUnits(),_.push(w),Ge.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Xe.setFromProjectionMatrix(Ge,fn,D.reversedDepth),He=this.localClippingEnabled,Oe=Ae.init(this.clippingPlanes,He),S=de.get(y,A.length),S.init(),A.push(S),Me.enabled===!0&&Me.isPresenting===!0){let ye=C.xr.getDepthSensingMesh();ye!==null&&po(ye,D,-1/0,C.sortObjects)}po(y,D,0,C.sortObjects),S.finish(),U!==null&&U.updateLights(w.state.lightsArray),C.sortObjects===!0&&S.sort(ve,Ce),dt=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,dt&&Be.addToRenderList(S,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Oe===!0&&Ae.beginShadows();let V=w.state.shadowsArray;if(De.render(V,y,D),Oe===!0&&Ae.endShadows(),(z&&M.hasRenderPass())===!1){let ye=S.opaque,pe=S.transmissive;if(w.setupLights(),D.isArrayCamera){let be=D.cameras;if(pe.length>0)for(let Ee=0,ze=be.length;Ee<ze;Ee++){let qe=be[Ee];Xl(ye,pe,y,qe)}dt&&Be.render(y);for(let Ee=0,ze=be.length;Ee<ze;Ee++){let qe=be[Ee];Wl(S,y,qe,qe.viewport)}}else pe.length>0&&Xl(ye,pe,y,D),dt&&Be.render(y),Wl(S,y,D)}te!==null&&W===0&&(Z.updateMultisampleRenderTarget(te),Z.updateRenderTargetMipmap(te)),z&&M.end(C),y.isScene===!0&&y.onAfterRender(C,y,D),ge.resetDefaultState(),j=-1,$=null,_.pop(),_.length>0?(w=_[_.length-1],Z.setTextureUnits(w.state.textureUnits),Oe===!0&&Ae.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,U!==null&&U.renderEnd()};function po(y,D,X,z){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLightProbeGrid)w.pushLightProbeGrid(y);else if(y.isLight)w.pushLight(y),y.castShadow&&w.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(Xe)){z&&Et.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ge);let ye=ne.update(y),pe=y.material;pe.visible&&S.push(y,ye,pe,X,Et.z,null,D)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(Xe))){let ye=ne.update(y),pe=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Et.copy(y.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Et.copy(ye.boundingSphere.center)),Et.applyMatrix4(y.matrixWorld).applyMatrix4(Ge)),Array.isArray(pe)){let be=ye.groups;for(let Ee=0,ze=be.length;Ee<ze;Ee++){let qe=be[Ee],Se=pe[qe.materialIndex];Se&&Se.visible&&S.push(y,ye,Se,X,Et.z,qe,D)}}else pe.visible&&S.push(y,ye,pe,X,Et.z,null,D)}}let me=y.children;for(let ye=0,pe=me.length;ye<pe;ye++)po(me[ye],D,X,z)}function Wl(y,D,X,z){let{opaque:V,transmissive:me,transparent:ye}=y;w.setupLightsView(X),Oe===!0&&Ae.setGlobalState(C.clippingPlanes,X),z&&g.viewport(Q.copy(z)),V.length>0&&lr(V,D,X),me.length>0&&lr(me,D,X),ye.length>0&&lr(ye,D,X),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Xl(y,D,X,z){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[z.id]===void 0){let Se=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[z.id]=new Yt(1,1,{generateMipmaps:!0,type:Se?yn:jt,minFilter:si,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:je.workingColorSpace})}let me=w.state.transmissionRenderTarget[z.id],ye=z.viewport||Q;me.setSize(ye.z*C.transmissionResolutionScale,ye.w*C.transmissionResolutionScale);let pe=C.getRenderTarget(),be=C.getActiveCubeFace(),Ee=C.getActiveMipmapLevel();C.setRenderTarget(me),C.getClearColor(we),_e=C.getClearAlpha(),_e<1&&C.setClearColor(16777215,.5),C.clear(),dt&&Be.render(X);let ze=C.toneMapping;C.toneMapping=_n;let qe=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),w.setupLightsView(z),Oe===!0&&Ae.setGlobalState(C.clippingPlanes,z),lr(y,X,z),Z.updateMultisampleRenderTarget(me),Z.updateRenderTargetMipmap(me),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let Qe=0,_t=D.length;Qe<_t;Qe++){let ct=D[Qe],{object:rt,geometry:Ft,material:xe,group:Vt}=ct;if(xe.side===rn&&rt.layers.test(z.layers)){let Je=xe.side;xe.side=Nt,xe.needsUpdate=!0,ql(rt,X,z,Ft,xe,Vt),xe.side=Je,xe.needsUpdate=!0,Se=!0}}Se===!0&&(Z.updateMultisampleRenderTarget(me),Z.updateRenderTargetMipmap(me))}C.setRenderTarget(pe,be,Ee),C.setClearColor(we,_e),qe!==void 0&&(z.viewport=qe),C.toneMapping=ze}function lr(y,D,X){let z=D.isScene===!0?D.overrideMaterial:null;for(let V=0,me=y.length;V<me;V++){let ye=y[V],{object:pe,geometry:be,group:Ee}=ye,ze=ye.material;ze.allowOverride===!0&&z!==null&&(ze=z),pe.layers.test(X.layers)&&ql(pe,D,X,be,ze,Ee)}}function ql(y,D,X,z,V,me){U!==null&&V.isNodeMaterial&&U.setObject(y,V),y.onBeforeRender(C,D,X,z,V,me),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),V.onBeforeRender(C,D,X,z,y,me),V.transparent===!0&&V.side===rn&&V.forceSinglePass===!1?(V.side=Nt,V.needsUpdate=!0,C.renderBufferDirect(X,D,z,V,y,me),V.side=Rn,V.needsUpdate=!0,C.renderBufferDirect(X,D,z,V,y,me),V.side=rn):C.renderBufferDirect(X,D,z,V,y,me),y.onAfterRender(C,D,X,z,V,me)}function cr(y,D,X){D.isScene!==!0&&(D=qt);let z=H.get(y),V=w.state.lights,me=w.state.shadowsArray,ye=V.state.version,pe=le.getParameters(y,V.state,me,D,X,w.state.lightProbeGridArray),be=le.getProgramCacheKey(pe),Ee=z.programs;z.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,z.fog=D.fog;let ze=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;z.envMap=re.get(y.envMap||z.environment,ze),z.envMapRotation=z.environment!==null&&y.envMap===null?D.environmentRotation:y.envMapRotation,Ee===void 0&&(y.addEventListener("dispose",bn),Ee=new Map,z.programs=Ee);let qe=Ee.get(be);if(qe!==void 0){if(z.currentProgram===qe&&z.lightsStateVersion===ye)return jl(y,pe),qe}else pe.uniforms=le.getUniforms(y),U!==null&&y.isNodeMaterial&&U.build(y,X,pe),y.onBeforeCompile(pe,C),qe=le.acquireProgram(pe,be),Ee.set(be,qe),z.uniforms=pe.uniforms;let Se=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Se.clippingPlanes=Ae.uniform),jl(y,pe),z.needsLights=iu(y),z.lightsStateVersion=ye,z.needsLights&&(Se.ambientLightColor.value=V.state.ambient,Se.lightProbe.value=V.state.probe,Se.sunLights.value=V.state.sun,Se.sunLightShadows.value=V.state.sunShadow,Se.directionalLights.value=V.state.directional,Se.directionalLightShadows.value=V.state.directionalShadow,Se.spotLights.value=V.state.spot,Se.spotLightShadows.value=V.state.spotShadow,Se.rectAreaLights.value=V.state.rectArea,Se.ltc_1.value=V.state.rectAreaLTC1,Se.ltc_2.value=V.state.rectAreaLTC2,Se.pointLights.value=V.state.point,Se.pointLightShadows.value=V.state.pointShadow,Se.hemisphereLights.value=V.state.hemi,Se.sunShadowMatrix.value=V.state.sunShadowMatrix,Se.sunShadowCascade.value=V.state.sunShadowCascade,Se.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Se.spotLightMatrix.value=V.state.spotLightMatrix,Se.spotLightMap.value=V.state.spotLightMap,Se.pointShadowMatrix.value=V.state.pointShadowMatrix),z.lightProbeGrid=w.state.lightProbeGridArray.length>0,z.currentProgram=qe,z.uniformsList=null,qe}function Yl(y){if(y.uniformsList===null){let D=y.currentProgram.getUniforms();y.uniformsList=cs.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function jl(y,D){let X=H.get(y);X.outputColorSpace=D.outputColorSpace,X.batching=D.batching,X.batchingColor=D.batchingColor,X.instancing=D.instancing,X.instancingColor=D.instancingColor,X.instancingMorph=D.instancingMorph,X.skinning=D.skinning,X.morphTargets=D.morphTargets,X.morphNormals=D.morphNormals,X.morphColors=D.morphColors,X.morphTargetsCount=D.morphTargetsCount,X.numClippingPlanes=D.numClippingPlanes,X.numIntersection=D.numClipIntersection,X.vertexAlphas=D.vertexAlphas,X.vertexTangents=D.vertexTangents,X.toneMapping=D.toneMapping}function eu(y,D){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;v.setFromMatrixPosition(D.matrixWorld);for(let X=0,z=y.length;X<z;X++){let V=y[X];if(V.texture!==null&&V.boundingBox.containsPoint(v))return V}return null}function tu(y,D,X,z,V){D.isScene!==!0&&(D=qt),Z.resetTextureUnits();let me=D.fog,ye=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?D.environment:null,pe=te===null?C.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:je.workingColorSpace,be=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ee=re.get(z.envMap||ye,be),ze=z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,qe=!!X.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Se=!!X.morphAttributes.position,Qe=!!X.morphAttributes.normal,_t=!!X.morphAttributes.color,ct=_n;z.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ct=C.toneMapping);let rt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ft=rt!==void 0?rt.length:0,xe=H.get(z),Vt=w.state.lights;if(Oe===!0&&(He===!0||y!==$)){let lt=y===$&&z.id===j;Ae.setState(z,y,lt)}let Je=!1;z.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==Vt.state.version||xe.outputColorSpace!==pe||V.isBatchedMesh&&xe.batching===!1||!V.isBatchedMesh&&xe.batching===!0||V.isBatchedMesh&&xe.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&xe.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&xe.instancing===!1||!V.isInstancedMesh&&xe.instancing===!0||V.isSkinnedMesh&&xe.skinning===!1||!V.isSkinnedMesh&&xe.skinning===!0||V.isInstancedMesh&&xe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&xe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&xe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&xe.instancingMorph===!1&&V.morphTexture!==null||xe.envMap!==Ee||z.fog===!0&&xe.fog!==me||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Ae.numPlanes||xe.numIntersection!==Ae.numIntersection)||xe.vertexAlphas!==ze||xe.vertexTangents!==qe||xe.morphTargets!==Se||xe.morphNormals!==Qe||xe.morphColors!==_t||xe.toneMapping!==ct||xe.morphTargetsCount!==Ft||!!xe.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Je=!0):(Je=!0,xe.__version=z.version);let nn=xe.currentProgram;Je===!0&&(nn=cr(z,D,V),U&&z.isNodeMaterial&&U.onUpdateProgram(z,nn,xe));let Sn=!1,kn=!1,Si=!1,st=nn.getUniforms(),ft=xe.uniforms;if(g.useProgram(nn.program)&&(Sn=!0,kn=!0,Si=!0),z.id!==j&&(j=z.id,kn=!0),xe.needsLights){let lt=eu(w.state.lightProbeGridArray,V);xe.lightProbeGrid!==lt&&(xe.lightProbeGrid=lt,kn=!0)}if(Sn||$!==y){g.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),st.setValue(N,"projectionMatrix",y.projectionMatrix),st.setValue(N,"viewMatrix",y.matrixWorldInverse);let Vn=st.map.cameraPosition;Vn!==void 0&&Vn.setValue(N,Ze.setFromMatrixPosition(y.matrixWorld)),E.logarithmicDepthBuffer&&st.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&st.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),$!==y&&($=y,kn=!0,Si=!0)}if(xe.needsLights&&(Vt.state.sunShadowMap.length>0&&st.setValue(N,"sunShadowMap",Vt.state.sunShadowMap,Z),Vt.state.directionalShadowMap.length>0&&st.setValue(N,"directionalShadowMap",Vt.state.directionalShadowMap,Z),Vt.state.spotShadowMap.length>0&&st.setValue(N,"spotShadowMap",Vt.state.spotShadowMap,Z),Vt.state.pointShadowMap.length>0&&st.setValue(N,"pointShadowMap",Vt.state.pointShadowMap,Z)),V.isSkinnedMesh){st.setOptional(N,V,"bindMatrix"),st.setOptional(N,V,"bindMatrixInverse");let lt=V.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),st.setValue(N,"boneTexture",lt.boneTexture,Z))}V.isBatchedMesh&&(st.setOptional(N,V,"batchingTexture"),st.setValue(N,"batchingTexture",V._matricesTexture,Z),st.setOptional(N,V,"batchingIdTexture"),st.setValue(N,"batchingIdTexture",V._indirectTexture,Z),st.setOptional(N,V,"batchingColorTexture"),V._colorsTexture!==null&&st.setValue(N,"batchingColorTexture",V._colorsTexture,Z));let zn=X.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&L.update(V,X,nn),(kn||xe.receiveShadow!==V.receiveShadow)&&(xe.receiveShadow=V.receiveShadow,st.setValue(N,"receiveShadow",V.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&D.environment!==null&&(ft.envMapIntensity.value=D.environmentIntensity),ft.dfgLUT!==void 0&&(ft.dfgLUT.value=Xg()),kn){if(st.setValue(N,"toneMappingExposure",C.toneMappingExposure),xe.needsLights&&nu(ft,Si),me&&z.fog===!0&&Te.refreshFogUniforms(ft,me),Te.refreshMaterialUniforms(ft,z,K,q,w.state.transmissionRenderTarget[y.id]),xe.needsLights&&xe.lightProbeGrid){let lt=xe.lightProbeGrid;ft.probesSH.value=lt.texture,ft.probesMin.value.copy(lt.boundingBox.min),ft.probesMax.value.copy(lt.boundingBox.max),ft.probesResolution.value.copy(lt.resolution)}cs.upload(N,Yl(xe),ft,Z)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(cs.upload(N,Yl(xe),ft,Z),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&st.setValue(N,"center",V.center),st.setValue(N,"modelViewMatrix",V.modelViewMatrix),st.setValue(N,"normalMatrix",V.normalMatrix),st.setValue(N,"modelMatrix",V.matrixWorld),z.uniformsGroups!==void 0){let lt=z.uniformsGroups;for(let Vn=0,Mi=lt.length;Vn<Mi;Vn++){let Jl=lt[Vn];se.update(Jl,nn),se.bind(Jl,nn)}}return nn}function nu(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.sunLights.needsUpdate=D,y.sunLightShadows.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function iu(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(y,D,X){let z=H.get(y);z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),H.get(y.texture).__webglTexture=D,H.get(y.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:X,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,D){let X=H.get(y);X.__webglFramebuffer=D,X.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(y,D=0,X=0){te=y,G=D,W=X;let z=null,V=!1,me=!1;if(y){let pe=H.get(y);if(pe.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(N.FRAMEBUFFER,pe.__webglFramebuffer),Q.copy(y.viewport),Y.copy(y.scissor),ie=y.scissorTest,g.viewport(Q),g.scissor(Y),g.setScissorTest(ie),j=-1;return}else if(pe.__webglFramebuffer===void 0)Z.setupRenderTarget(y);else if(pe.__hasExternalTextures)Z.rebindTextures(y,H.get(y.texture).__webglTexture,H.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let ze=y.depthTexture;if(pe.__boundDepthTexture!==ze){if(ze!==null&&H.has(ze)&&(y.width!==ze.image.width||y.height!==ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(y)}}let be=y.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(me=!0);let Ee=H.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ee[D])?z=Ee[D][X]:z=Ee[D],V=!0):y.samples>0&&Z.useMultisampledRTT(y)===!1?z=H.get(y).__webglMultisampledFramebuffer:Array.isArray(Ee)?z=Ee[X]:z=Ee,Q.copy(y.viewport),Y.copy(y.scissor),ie=y.scissorTest}else Q.copy(ae).multiplyScalar(K).floor(),Y.copy(ke).multiplyScalar(K).floor(),ie=it;if(X!==0&&(z=O),g.bindFramebuffer(N.FRAMEBUFFER,z)&&g.drawBuffers(y,z),g.viewport(Q),g.scissor(Y),g.setScissorTest(ie),V){let pe=H.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,pe.__webglTexture,X)}else if(me){let pe=D;for(let be=0;be<y.textures.length;be++){let Ee=H.get(y.textures[be]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+be,Ee.__webglTexture,X,pe)}}else if(y!==null&&X!==0){let pe=H.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,pe.__webglTexture,X)}j=-1};function Zl(y){let D=H.get(y);return(D.__readFormat!==y.format||D.__readType!==y.type)&&(D.__readFormat=y.format,D.__readType=y.type,D.__formatReadable=E.textureFormatReadable(y.format),D.__typeReadable=E.textureTypeReadable(y.type)),D}this.readRenderTargetPixels=function(y,D,X,z,V,me,ye,pe=0){if(!(y&&y.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=H.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ye!==void 0&&(be=be[ye]),be){g.bindFramebuffer(N.FRAMEBUFFER,be);try{let Ee=y.textures[pe],ze=Ee.format,qe=Ee.type;y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+pe);let Se=Zl(Ee);if(Se.__formatReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-z&&X>=0&&X<=y.height-V&&N.readPixels(D,X,z,V,ue.convert(ze),ue.convert(qe),me)}finally{let Ee=te!==null?H.get(te).__webglFramebuffer:null;g.bindFramebuffer(N.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(y,D,X,z,V,me,ye,pe=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=H.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ye!==void 0&&(be=be[ye]),be)if(D>=0&&D<=y.width-z&&X>=0&&X<=y.height-V){g.bindFramebuffer(N.FRAMEBUFFER,be);let Ee=y.textures[pe],ze=Ee.format,qe=Ee.type;y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+pe);let Se=Zl(Ee);if(Se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Qe),N.bufferData(N.PIXEL_PACK_BUFFER,me.byteLength,N.STREAM_READ),N.readPixels(D,X,z,V,ue.convert(ze),ue.convert(qe),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let _t=te!==null?H.get(te).__webglFramebuffer:null;g.bindFramebuffer(N.FRAMEBUFFER,_t);let ct=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await rh(N,ct,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Qe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,me),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(Qe),N.deleteSync(ct),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,D=null,X=0){let z=Math.pow(2,-X),V=Math.floor(y.image.width*z),me=Math.floor(y.image.height*z),ye=D!==null?D.x:0,pe=D!==null?D.y:0;Z.setTexture2D(y,0),N.copyTexSubImage2D(N.TEXTURE_2D,X,0,0,ye,pe,V,me),g.unbindTexture()},this.copyTextureToTexture=function(y,D,X=null,z=null,V=0,me=0){let ye,pe,be,Ee,ze,qe,Se,Qe,_t,ct=y.isCompressedTexture?y.mipmaps[me]:y.image;if(X!==null)ye=X.max.x-X.min.x,pe=X.max.y-X.min.y,be=X.isBox3?X.max.z-X.min.z:1,Ee=X.min.x,ze=X.min.y,qe=X.isBox3?X.min.z:0;else{let ft=Math.pow(2,-V);ye=Math.floor(ct.width*ft),pe=Math.floor(ct.height*ft),y.isDataArrayTexture?be=ct.depth:y.isData3DTexture?be=Math.floor(ct.depth*ft):be=1,Ee=0,ze=0,qe=0}z!==null?(Se=z.x,Qe=z.y,_t=z.z):(Se=0,Qe=0,_t=0);let rt=ue.convert(D.format),Ft=ue.convert(D.type),xe;D.isData3DTexture?(Z.setTexture3D(D,0),xe=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Z.setTexture2DArray(D,0),xe=N.TEXTURE_2D_ARRAY):(Z.setTexture2D(D,0),xe=N.TEXTURE_2D),g.activeTexture(N.TEXTURE0),g.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),g.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),g.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);let Vt=g.getParameter(N.UNPACK_ROW_LENGTH),Je=g.getParameter(N.UNPACK_IMAGE_HEIGHT),nn=g.getParameter(N.UNPACK_SKIP_PIXELS),Sn=g.getParameter(N.UNPACK_SKIP_ROWS),kn=g.getParameter(N.UNPACK_SKIP_IMAGES);g.pixelStorei(N.UNPACK_ROW_LENGTH,ct.width),g.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ct.height),g.pixelStorei(N.UNPACK_SKIP_PIXELS,Ee),g.pixelStorei(N.UNPACK_SKIP_ROWS,ze),g.pixelStorei(N.UNPACK_SKIP_IMAGES,qe);let Si=y.isDataArrayTexture||y.isData3DTexture,st=D.isDataArrayTexture||D.isData3DTexture;if(y.isDepthTexture){let ft=H.get(y),zn=H.get(D),lt=H.get(ft.__renderTarget),Vn=H.get(zn.__renderTarget);g.bindFramebuffer(N.READ_FRAMEBUFFER,lt.__webglFramebuffer),g.bindFramebuffer(N.DRAW_FRAMEBUFFER,Vn.__webglFramebuffer);for(let Mi=0;Mi<be;Mi++)Si&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,H.get(y).__webglTexture,V,qe+Mi),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,H.get(D).__webglTexture,me,_t+Mi)),N.blitFramebuffer(Ee,ze,ye,pe,Se,Qe,ye,pe,N.DEPTH_BUFFER_BIT,N.NEAREST);g.bindFramebuffer(N.READ_FRAMEBUFFER,null),g.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(V!==0||y.isRenderTargetTexture||H.has(y)){let ft=H.get(y),zn=H.get(D);g.bindFramebuffer(N.READ_FRAMEBUFFER,R),g.bindFramebuffer(N.DRAW_FRAMEBUFFER,k);for(let lt=0;lt<be;lt++)Si?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ft.__webglTexture,V,qe+lt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ft.__webglTexture,V),st?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,zn.__webglTexture,me,_t+lt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,zn.__webglTexture,me),V!==0?N.blitFramebuffer(Ee,ze,ye,pe,Se,Qe,ye,pe,N.COLOR_BUFFER_BIT,N.NEAREST):st?N.copyTexSubImage3D(xe,me,Se,Qe,_t+lt,Ee,ze,ye,pe):N.copyTexSubImage2D(xe,me,Se,Qe,Ee,ze,ye,pe);g.bindFramebuffer(N.READ_FRAMEBUFFER,null),g.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else st?y.isDataTexture||y.isData3DTexture?N.texSubImage3D(xe,me,Se,Qe,_t,ye,pe,be,rt,Ft,ct.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(xe,me,Se,Qe,_t,ye,pe,be,rt,ct.data):N.texSubImage3D(xe,me,Se,Qe,_t,ye,pe,be,rt,Ft,ct):y.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,me,Se,Qe,ye,pe,rt,Ft,ct.data):y.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,me,Se,Qe,ct.width,ct.height,rt,ct.data):N.texSubImage2D(N.TEXTURE_2D,me,Se,Qe,ye,pe,rt,Ft,ct);g.pixelStorei(N.UNPACK_ROW_LENGTH,Vt),g.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Je),g.pixelStorei(N.UNPACK_SKIP_PIXELS,nn),g.pixelStorei(N.UNPACK_SKIP_ROWS,Sn),g.pixelStorei(N.UNPACK_SKIP_IMAGES,kn),me===0&&D.generateMipmaps&&N.generateMipmap(xe),g.unbindTexture()},this.initRenderTarget=function(y){H.get(y).__webglFramebuffer===void 0&&Z.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Z.setTextureCube(y,0):y.isData3DTexture?Z.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Z.setTexture2DArray(y,0):Z.setTexture2D(y,0),g.unbindTexture()},this.resetState=function(){G=0,W=0,te=null,g.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}};var zh={type:"change"},Bl={type:"start"},Hh={type:"end"},so=new pi,Vh=new $t,qg=Math.cos(70*Xt.DEG2RAD),wt=new F,Zt=2*Math.PI,nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ol=1e-6,ro=class extends Hs{constructor(e,t=null){super(e,t),this.state=nt.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ti.ROTATE,MIDDLE:ti.DOLLY,RIGHT:ti.PAN},this.touches={ONE:ni.ROTATE,TWO:ni.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new Wt,this._lastTargetPosition=new F,this._quat=new Wt().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new es,this._sphericalDelta=new es,this._scale=1,this._panOffset=new F,this._rotateStart=new Pe,this._rotateEnd=new Pe,this._rotateDelta=new Pe,this._panStart=new Pe,this._panEnd=new Pe,this._panDelta=new Pe,this._dollyStart=new Pe,this._dollyEnd=new Pe,this._dollyDelta=new Pe,this._dollyDirection=new F,this._mouse=new Pe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=jg.bind(this),this._onPointerDown=Yg.bind(this),this._onPointerUp=Zg.bind(this),this._onContextMenu=n0.bind(this),this._onMouseWheel=$g.bind(this),this._onKeyDown=Qg.bind(this),this._onTouchStart=e0.bind(this),this._onTouchMove=t0.bind(this),this._onMouseDown=Jg.bind(this),this._onMouseMove=Kg.bind(this),this._interceptControlDown=i0.bind(this),this._interceptControlUp=s0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=nt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(zh),this.update(),this.state=nt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;wt.copy(t).sub(this.target),wt.applyQuaternion(this._quat),this._spherical.setFromVector3(wt),this.autoRotate&&this.state===nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Zt:n>Math.PI&&(n-=Zt),s<-Math.PI?s+=Zt:s>Math.PI&&(s-=Zt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(wt.setFromSpherical(this._spherical),wt.applyQuaternion(this._quatInverse),t.copy(this.target).add(wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=wt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(so.origin.copy(this.object.position),so.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(so.direction))<qg?this.object.lookAt(this.target):(Vh.setFromNormalAndCoplanarPoint(this.object.up,this.target),so.intersectPlane(Vh,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ol||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ol||this._lastTargetPosition.distanceToSquared(this.target)>Ol?(this.dispatchEvent(zh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Zt/60*this.autoRotateSpeed*e:Zt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){wt.setFromMatrixColumn(t,0),wt.multiplyScalar(-e),this._panOffset.add(wt)}_panUp(e,t){this.screenSpacePanning===!0?wt.setFromMatrixColumn(t,1):(wt.setFromMatrixColumn(t,0),wt.crossVectors(this.object.up,wt)),wt.multiplyScalar(e),this._panOffset.add(wt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;wt.copy(s).sub(this.target);let r=wt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Zt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Zt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Pe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Yg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function jg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Zg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Hh),this.state=nt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Jg(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ti.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=nt.DOLLY;break;case ti.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=nt.ROTATE}break;case ti.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=nt.PAN}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(Bl)}function Kg(i){switch(this.state){case nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function $g(i){this.enabled===!1||this.enableZoom===!1||this.state!==nt.NONE||(i.preventDefault(),this.dispatchEvent(Bl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Hh))}function Qg(i){this.enabled!==!1&&this._handleKeyDown(i)}function e0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ni.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=nt.TOUCH_ROTATE;break;case ni.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=nt.TOUCH_PAN;break;default:this.state=nt.NONE}break;case 2:switch(this.touches.TWO){case ni.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=nt.TOUCH_DOLLY_PAN;break;case ni.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=nt.TOUCH_DOLLY_ROTATE;break;default:this.state=nt.NONE}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(Bl)}function t0(i){switch(this._trackPointer(i),this.state){case nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=nt.NONE}}function n0(i){this.enabled!==!1&&i.preventDefault()}function i0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function s0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var nr=new F;function ln(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;nr.copy(e),nr[n]=0,nr.normalize();let c=.5*a/(a+o),u=1-nr.angleTo(i)/l;return Math.sign(nr[t])===1?u*c:o/(a+o)+c+c*(1-u)}var ao=class i extends bt{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new F,c=new F,u=new F(e,t,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,h=this.attributes.normal.array,p=this.attributes.uv.array,x=f.length/6,b=new F,m=.5/a;for(let d=0,T=0;d<f.length;d+=3,T+=2)switch(l.fromArray(f,d),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),f[d+0]=u.x*Math.sign(l.x)+c.x*r,f[d+1]=u.y*Math.sign(l.y)+c.y*r,f[d+2]=u.z*Math.sign(l.z)+c.z*r,h[d+0]=c.x,h[d+1]=c.y,h[d+2]=c.z,Math.floor(d/x)){case 0:b.set(1,0,0),p[T+0]=ln(b,c,"z","y",r,n),p[T+1]=1-ln(b,c,"y","z",r,t);break;case 1:b.set(-1,0,0),p[T+0]=1-ln(b,c,"z","y",r,n),p[T+1]=1-ln(b,c,"y","z",r,t);break;case 2:b.set(0,1,0),p[T+0]=1-ln(b,c,"x","z",r,e),p[T+1]=ln(b,c,"z","x",r,n);break;case 3:b.set(0,-1,0),p[T+0]=1-ln(b,c,"x","z",r,e),p[T+1]=1-ln(b,c,"z","x",r,n);break;case 4:b.set(0,0,1),p[T+0]=1-ln(b,c,"x","y",r,e),p[T+1]=1-ln(b,c,"y","x",r,t);break;case 5:b.set(0,0,-1),p[T+0]=ln(b,c,"x","y",r,e),p[T+1]=1-ln(b,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var oo=class extends fi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new bt;e.deleteAttribute("uv");let t=new pt({side:Nt}),n=new pt,s=new zs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ye(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Ps(e,n,6),o=new Rt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Ye(e,us(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ye(e,us(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new Ye(e,us(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let f=new Ye(e,us(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let h=new Ye(e,us(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let p=new Ye(e,us(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function us(i){return new Us({color:0,emissive:16777215,emissiveIntensity:i})}function r0(i){let e=2166136261;for(let t=0;t<i.length;t+=1)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function Ke(i,e,t){if(typeof i=="number")return i;if(i&&typeof i=="object"){let n=i;for(let s of e)if(typeof n[s]=="number")return n[s]}return t}function a0(i){let e=/^#[0-9a-f]{3}$/i.test(i)?"#"+i.slice(1).split("").map(n=>n+n).join(""):i,t=/^#[0-9a-f]{6}$/i.test(e)?Number.parseInt(e.slice(1),16):9075295;return[fs(t>>16&255),fs(t>>8&255),fs(t&255)]}function o0(i){let e=i.colorVariation?.palette;if(Array.isArray(e)&&e.length>0)return e.filter(s=>typeof s=="string");let t=i.albedo?.secondary;return[i.baseColor??i.color??i.albedo?.dominant,...Array.isArray(t)?t:[]].filter(s=>typeof s=="string"&&s.startsWith("#"))}function mt(i){return Math.max(0,Math.min(1,i))}function fs(i){return Math.max(30,Math.min(240,Math.round(i)))}function l0(i){return Math.max(.02,Math.min(1,i))}function Gh(i){return Math.max(1,Math.min(2.5,i))}function c0(i){return i>=.5?1:0}function h0(i){let e=typeof i.baseColor=="string"?i.baseColor:"#8A7A5F";return new Le().setStyle(e,It)}function Wh(i){return i*i*(3-2*i)}function lo(i,e,t,n,s){let r=(i%n+n)%n,a=(e%s+s)%s,o=Math.imul(r+t*17,374761393)^Math.imul(a+t*31,668265263);return o=Math.imul(o^o>>>13,1274126177),((o^o>>>16)>>>0)/4294967295}function u0(i,e,t,n,s){let r=i*n,a=e*s,o=Math.floor(r),l=Math.floor(a),c=Wh(r-o),u=Wh(a-l),f=lo(o,l,t,n,s),h=lo(o+1,l,t,n,s),p=lo(o,l+1,t,n,s),x=lo(o+1,l+1,t,n,s);return Xt.lerp(Xt.lerp(f,h,c),Xt.lerp(p,x,c),u)}function d0(i){let t=(Array.isArray(i.surfaceFrequencyBands)?i.surfaceFrequencyBands:[]).flatMap(n=>{if(!n||typeof n!="object")return[];let s=n,r=typeof s.frequency=="number"?s.frequency:0,a=typeof s.amplitude=="number"?s.amplitude:0;if(r<=0||a<=0)return[];let o=Array.isArray(s.stretch)?s.stretch:[1,1],l=`${String(s.pattern??"")} ${String(s.role??"")}`.toLowerCase();return[{frequency:r,amplitude:a,stretchX:typeof o[0]=="number"?Math.max(.1,o[0]):1,stretchY:typeof o[1]=="number"?Math.max(.1,o[1]):1,ridge:/(ridge|groove|grain|fiber|striated|crack)/.test(l)}]});return t.length>0?t:[{frequency:2,amplitude:.42,stretchX:1,stretchY:1,ridge:!1},{frequency:12,amplitude:.22,stretchX:1,stretchY:1,ridge:!1},{frequency:56,amplitude:.08,stretchX:1,stretchY:1,ridge:!1}]}function kl(i,e,t,n){let s=0,r=0;for(let a=0;a<t.length;a+=1){let o=t[a],l=Math.max(1,Math.round(o.frequency*o.stretchX)),c=Math.max(1,Math.round(o.frequency*o.stretchY)),u=u0(i,e,n+a*1013,l,c);o.ridge&&(u=1-Math.abs(u*2-1)),s+=u*o.amplitude,r+=o.amplitude}return r>0?mt(s/r):.5}function f0(i,e){if(i.length===1)return i[0];let t=mt(e)*(i.length-1),n=Math.min(i.length-2,Math.floor(t)),s=t-n,r=i[n],a=i[n+1];return[Math.round(Xt.lerp(r[0],a[0],s)),Math.round(Xt.lerp(r[1],a[1],s)),Math.round(Xt.lerp(r[2],a[2],s))]}function Xh(i){let e=/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/.exec(i);return e?[fs(Number(e[1])),fs(Number(e[2])),fs(Number(e[3]))]:[138,122,95]}function p0(i,e,t){let n=i.stops.length>=2?i.stops:[{offset:0,color:"rgba(138,122,95,1)"},{offset:1,color:"rgba(138,122,95,1)"}],s;if(i.type==="radial"){let[u,f]=i.axis,h=e-u,p=t-f,x=Math.max(.001,Math.hypot(Math.max(u,1-u),Math.max(f,1-f)));s=mt(Math.hypot(h,p)/x)}else{let[u,f]=i.axis,h=(e-.5)*u+(t-.5)*f,p=.5*(Math.abs(u)+Math.abs(f))||.5;s=mt(h/p+.5)}let r=s*(n.length-1),a=Math.min(n.length-2,Math.max(0,Math.floor(r))),o=r-a,l=Xh(n[a].color),c=Xh(n[a+1].color);return[Xt.lerp(l[0],c[0],o),Xt.lerp(l[1],c[1],o),Xt.lerp(l[2],c[2],o)]}function ir(i,e,t,n,s){i[e]=Math.max(0,Math.min(255,Math.round(t))),i[e+1]=Math.max(0,Math.min(255,Math.round(n))),i[e+2]=Math.max(0,Math.min(255,Math.round(s))),i[e+3]=255}function sr(i){let e=document.createElement("canvas");return e.width=i,e.height=i,e}function rr(i,e,t,n){let s=new mi(i),r=t.textureProjection&&typeof t.textureProjection=="object"?t.textureProjection:{},a=Array.isArray(r.repeat)?r.repeat:[2,2];return s.colorSpace=e,s.wrapS=Bn,s.wrapT=Bn,s.repeat.set(typeof a[0]=="number"?a[0]:2,typeof a[1]=="number"?a[1]:2),s.anisotropy=Math.max(1,Math.round(n.textureAnisotropy??r.anisotropy??8)),s.needsUpdate=!0,s}function ar(i,e){let t=i.referencePbr;if(!t||typeof t!="object"||t.usable===!1)return null;let n=typeof t.confidence=="number"?t.confidence:typeof t.estimatedFidelity=="number"?t.estimatedFidelity:0,s=typeof t.targetThreshold=="number"?t.targetThreshold:.7;if(n<s)return null;let r=t.maps;if(!r||typeof r!="object")return null;let a=r[e];if(!a||typeof a!="object")return null;let o=a,l=typeof o.url=="string"&&o.url.trim()?o.url:o.path;return typeof l=="string"&&l.trim()?l:null}function or(i,e,t,n){let s=new Os().load(i),r=t.textureProjection&&typeof t.textureProjection=="object"?t.textureProjection:{},a=Array.isArray(r.repeat)?r.repeat:[1,1];return s.colorSpace=e,s.wrapS=Bn,s.wrapT=Bn,s.repeat.set(typeof a[0]=="number"?a[0]:1,typeof a[1]=="number"?a[1]:1),s.anisotropy=Math.max(1,Math.round(n.textureAnisotropy??r.anisotropy??8)),s.needsUpdate=!0,s}function m0(i,e){let t=ar(i,"albedo"),n=ar(i,"roughness"),s=ar(i,"height"),r=ar(i,"normal"),a=ar(i,"ao");return!t||!n||!s||!r||!a?null:{albedo:or(t,It,i,e),roughness:or(n,Ct,i,e),height:or(s,Ct,i,e),normal:or(r,Ct,i,e),ao:or(a,Ct,i,e),source:"reference-pixel-extraction"}}function g0(i,e,t){if(typeof document>"u")return null;let n=(t.qualityPriority??"reference-fidelity")==="reference-fidelity",s=t.textureSize??e.textureResolution,r=typeof s=="number"&&Number.isFinite(s)?s:n?1024:512,a=Math.max(256,Math.min(2048,2**Math.round(Math.log2(r)))),o={albedo:sr(a),roughness:sr(a),height:sr(a),normal:sr(a),ao:sr(a)},l={albedo:o.albedo.getContext("2d"),roughness:o.roughness.getContext("2d"),height:o.height.getContext("2d"),normal:o.normal.getContext("2d"),ao:o.ao.getContext("2d")};if(!l.albedo||!l.roughness||!l.height||!l.normal||!l.ao)return null;let c={albedo:l.albedo.createImageData(a,a),roughness:l.roughness.createImageData(a,a),height:l.height.createImageData(a,a),normal:l.normal.createImageData(a,a),ao:l.ao.createImageData(a,a)},u=r0(i),f=d0(e),h=new Float32Array(a*a),p=new Float32Array(a*a),x=o0(e),b=typeof e.baseColor=="string"?e.baseColor:"#8A7A5F",m=(x.length>=2?x:[b,"#6E614B","#A08F70"]).map(a0),d=mt(Ke(e.roughness,["base"],.76)),T=mt(Ke(e.roughness,["variation"],.18)),P=mt(Ke(e.colorVariation,["amplitude","variation"],.18)),v=mt(Ke(e.colorVariation,["heightCorrelation"],.3)),S=e.colorGradient;for(let _=0;_<a;_+=1){let M=_/a;for(let C=0;C<a;C+=1){let I=C/a,U=_*a+C,O=kl(I,M,f,u+101),R=kl(I,M,f,u+7001),k=kl(I,M,f,u+15013);h[U]=O,p[U]=mt(d+(R-.5)*T*2);let G;if(S)G=p0(S,I,M);else{let W=mt(.5+(k-.5)*P*2+(O-.5)*v);G=f0(m,W)}ir(c.albedo.data,U*4,G[0],G[1],G[2])}}let w=Math.max(.05,Ke(e.normal,["strength","amplitude"],.35)),A=mt(Ke(e.ambientOcclusion,["cavityStrength","strength"],.35));for(let _=0;_<a;_+=1){let M=(_-1+a)%a*a,C=(_+1)%a*a;for(let I=0;I<a;I+=1){let U=(I-1+a)%a,O=(I+1)%a,R=_*a+I,k=h[R],G=(h[_*a+O]-h[_*a+U])*w*6,W=(h[C+I]-h[M+I])*w*6,te=1/Math.sqrt(G*G+W*W+1),j=-G*te,$=-W*te,Q=te,Y=(h[_*a+U]+h[_*a+O]+h[M+I]+h[C+I])*.25,ie=Math.max(0,Y-k),we=mt(1-A*(ie*12+(1-k)*.16)),_e=R*4,Ie=k*255,q=p[R]*255;ir(c.height.data,_e,Ie,Ie,Ie),ir(c.roughness.data,_e,q,q,q),ir(c.normal.data,_e,(j*.5+.5)*255,($*.5+.5)*255,(Q*.5+.5)*255),ir(c.ao.data,_e,we*255,we*255,we*255)}}return l.albedo.putImageData(c.albedo,0,0),l.roughness.putImageData(c.roughness,0,0),l.height.putImageData(c.height,0,0),l.normal.putImageData(c.normal,0,0),l.ao.putImageData(c.ao,0,0),{albedo:rr(o.albedo,It,e,t),roughness:rr(o.roughness,Ct,e,t),height:rr(o.height,Ct,e,t),normal:rr(o.normal,Ct,e,t),ao:rr(o.ao,Ct,e,t),source:"procedural"}}function ds(i,e,t,n=!1){let r=e.textureless?.declared===!0?null:m0(e,t)??g0(i,e,t),a=new Ns({color:r?16777215:h0(e),roughness:r?1:mt(Ke(e.roughness,["base"],.76)),metalness:c0(Ke(e.metalness,["base"],0)),clearcoat:mt(Ke(e.clearcoat,["base","amount"],0)),clearcoatRoughness:mt(Ke(e.clearcoatRoughness,["base"],.25)),transmission:mt(Ke(e.transmission,["base","amount"],0)),ior:Gh(Ke(e.ior,["base","value"],1.5)),thickness:Math.max(0,Ke(e.thickness,["base","amount"],0)),attenuationDistance:Math.max(.001,Ke(e.attenuationDistance,["base","value"],1/0)),attenuationColor:new Le(typeof e.attenuationColor=="string"?e.attenuationColor:"#ffffff"),sheen:mt(Ke(e.sheen,["base","amount"],0)),sheenColor:new Le(typeof e.sheenColor=="string"?e.sheenColor:"#ffffff"),sheenRoughness:mt(Ke(e.sheenRoughness,["base"],1)),iridescence:mt(Ke(e.iridescence,["base","amount"],0)),iridescenceIOR:Gh(Ke(e.iridescenceIOR,["base","value"],1.3)),anisotropy:mt(Ke(e.anisotropy,["base","amount"],0)),anisotropyRotation:Ke(e.anisotropy,["rotation"],0),specularIntensity:l0(Ke(e.specularF0??e.f0??e.specularIntensity,["base","value"],1)),specularColor:new Le(typeof e.specularColor=="string"?e.specularColor:"#ffffff"),emissive:new Le(typeof e.emissive=="string"?e.emissive:"#000000"),emissiveIntensity:Math.max(0,Ke(e.emissiveIntensity,["base"],1)),opacity:mt(Ke(e.opacity,["base"],1)),transparent:Ke(e.transmission,["base","amount"],0)>0||Ke(e.opacity,["base"],1)<1,alphaTest:Math.max(0,Ke(e.alpha,["cutoff","alphaTest"],0)),wireframe:t.wireframe??!1,side:e.doubleSided===!0?rn:Rn,flatShading:e.flatShading===!0});if(r){a.map=r.albedo,a.roughnessMap=r.roughness,a.normalMap=r.normal,a.normalScale.setScalar(Math.max(.05,Ke(e.normal,["strength","amplitude"],.35))),a.aoMap=r.ao,a.aoMap.channel=0,a.aoMapIntensity=Ke(e.ambientOcclusion,["cavityStrength","strength"],.35);let o=n||e.denseMesh===!0||e.geometryDensity==="dense"||e.topologyClass==="dense",l=Math.max(0,Ke(e.bump,["amplitude","strength"],0)),c=o?Math.max(.05,l):l;c>0&&(a.bumpMap=r.height,a.bumpScale=c);let u=Math.max(0,Ke(e.displacement,["amplitude","strength"],0)),f=o?Math.max(.005,u):u;f>0&&(a.displacementMap=r.height,a.displacementScale=f,a.displacementBias=-f*.5)}return a.envMapIntensity=Ke(e,["envMapIntensity"],.8),a.userData.sculptMaterial=e,a.userData.proceduralMapsIndependent=!0,a.userData.pbrConstraints={albedoRange:[30,240],binaryMetalness:!0,f0Range:[.02,1],iorRange:[1,2.5]},a.userData.pbrTextureSource=r?.source??"flat-fallback",a.userData.referencePbr=e.referencePbr??null,a.userData.referenceMaterialId=e.referenceMaterialId??e.materialReference?.profileId??null,a.userData.materialEvidence=e.materialEvidence??null,a.userData.validationViews=e.materialReference?.validationViews??[],a.needsUpdate=!0,a}function qh(i,e){return Array.isArray(i)&&i.length===3&&i.every(t=>typeof t=="number")?new F(i[0],i[1],i[2]):new F(e[0],e[1],e[2])}function Yh(i,e){return typeof i=="number"&&Number.isFinite(i)?i:e}function vn(i){if(!i||typeof i!="object")return null;let e=i,t=qh(e.localStart,[0,0,0]),s=qh(e.localEnd,[0,1,0]).clone().sub(t),r=s.length();if(r<=1e-4)return null;let a=s.clone().normalize(),o=new Wt().setFromUnitVectors(new F(0,1,0),a),l=Math.max(.005,Yh(e.baseRadius,.06)),c=Math.max(.003,Yh(e.endRadius,l*.55));return{start:t,midpoint:s.multiplyScalar(.5),quaternion:o,length:r,baseRadius:l,endRadius:c}}function jh(i={}){let e=new yt;e.name="Optical Inspection Instrument",e.userData.reconstructionEvidence={itemFamily:null,subtype:null,componentAdapter:null,route:null,exactnessTier:null,referenceCamera:{solved:!1,fovDegrees:40,aspect:1,orientation:{yaw:0,pitch:0,roll:0},positionHint:[0,0,3],note:"For likeness work, solve the reference camera (forge/stage1_intake/solve_camera_pose.py) so the review render aligns with the photo and the reference can be projected. Confirm by overlay review."},approximationNotes:[]},e.userData.materialPipeline={},e.userData.materialReferenceRegistry=null;let t={};t.silver=ds("silver",{id:"silver",name:"silver",type:"standard",shaderModel:"MeshStandardMaterial / PBR approximation",baseColor:"#bfc3c4",color:"#bfc3c4",albedo:{dominant:"#bfc3c4",secondary:["#B7B6B6","#2E3237","#989796","#CBCACB","#545759"],samplingNotes:"Reference extraction palette with observed regional color assignment; not a physical calibration."},colorVariation:{palette:["#bfc3c4"],pattern:"fine coating grain",amplitude:.025},textureResolution:1024,textureProjection:{mode:"uv",repeat:[2,2],anisotropy:8,texelDensityIntent:"Preserve stable world/object-scale detail; do not stretch micro detail with component scale."},surfaceFrequencyBands:[{id:"macro",frequency:2,amplitude:.42,role:"broad color and height breakup"},{id:"meso",frequency:12,amplitude:.22,role:"ridges, pores, grain, dents, or equivalent visible relief"},{id:"micro",frequency:56,amplitude:.08,role:"highlight breakup visible under grazing light"}],roughness:{base:.53,variation:.025,map:"independent-procedural-field"},metalness:{base:.35,variation:0},normal:{pattern:"derived-from-independent-height-field",strength:.045,scale:24,space:"tangent"},bump:{pattern:"none",amplitude:0,scale:1},displacement:{pattern:"none",amplitude:0,scale:1,silhouetteAffects:!1},ambientOcclusion:{cavityStrength:.25,contactShadowBias:.35,notes:"Darken creases, seams, intersections, and recessed local features."},wear:{edgeWear:0,scratches:[],chips:[]},dirt:{amount:0,cavityBias:0,color:"#2F2A22"},localOverrides:[{id:"silver-edge",region:"beveled edges",roughness:.43000000000000005,evidenceRefs:["full-object"]}],shaderNotes:["Prefer MeshPhysicalMaterial when clearcoat, sheen, transmission, or thin-surface response is observed; otherwise use MeshStandardMaterial-compatible PBR channels.","Generate albedo, roughness, height/normal, and AO independently; never alias albedo into roughness.","Use normal/bump/displacement only when they map to observed surface relief.","Use displacement geometry when the observed relief changes the close-up silhouette; texture-only relief is insufficient there."],notes:"Replace with image-derived color, roughness, noise, and edge-wear notes.",referencePbr:{usable:!0,confidence:.86,maps:{albedo:{path:"C:\\Users\\quito\\\u9879\u76EE\\\u5B9E\u4E60\u5DE5\u4F5C\\\u6750\u6599\u516C\u53F8\\materials-output\\3d-models\\inspection\\pbr\\base_albedo.png",url:"base_albedo.png",channel:"albedo",source:"reference-pixel-extraction"},roughness:{path:"C:\\Users\\quito\\\u9879\u76EE\\\u5B9E\u4E60\u5DE5\u4F5C\\\u6750\u6599\u516C\u53F8\\materials-output\\3d-models\\inspection\\pbr\\base_roughness.png",url:"base_roughness.png",channel:"roughness",source:"reference-pixel-extraction"},height:{path:"C:\\Users\\quito\\\u9879\u76EE\\\u5B9E\u4E60\u5DE5\u4F5C\\\u6750\u6599\u516C\u53F8\\materials-output\\3d-models\\inspection\\pbr\\base_height.png",url:"base_height.png",channel:"height",source:"reference-pixel-extraction"},normal:{path:"C:\\Users\\quito\\\u9879\u76EE\\\u5B9E\u4E60\u5DE5\u4F5C\\\u6750\u6599\u516C\u53F8\\materials-output\\3d-models\\inspection\\pbr\\base_normal.png",url:"base_normal.png",channel:"normal",source:"reference-pixel-extraction"},ao:{path:"C:\\Users\\quito\\\u9879\u76EE\\\u5B9E\u4E60\u5DE5\u4F5C\\\u6750\u6599\u516C\u53F8\\materials-output\\3d-models\\inspection\\pbr\\base_ao.png",url:"base_ao.png",channel:"ao",source:"reference-pixel-extraction"}},sourceImage:"C:\\Users\\quito\\\u9879\u76EE\\\u5B9E\u4E60\u5DE5\u4F5C\\\u6750\u6599\u516C\u53F8\\materials-output\\3d-reference\\inspection-unit-reference.png",limitation:"single-image PBR extraction is an estimate; 70%+ extraction confidence still needs render screenshot review"}},i),t.dark=ds("dark",{id:"dark",name:"dark",type:"standard",shaderModel:"MeshStandardMaterial / PBR approximation",baseColor:"#29333d",color:"#29333d",albedo:{dominant:"#29333d",secondary:["#B7B6B6","#2E3237","#989796","#CBCACB","#545759"],samplingNotes:"Reference extraction palette with observed regional color assignment; not a physical calibration."},colorVariation:{palette:["#29333d"],pattern:"fine coating grain",amplitude:.025},textureResolution:1024,textureProjection:{mode:"uv",repeat:[2,2],anisotropy:8,texelDensityIntent:"Preserve stable world/object-scale detail; do not stretch micro detail with component scale."},surfaceFrequencyBands:[{id:"macro",frequency:2,amplitude:.42,role:"broad color and height breakup"},{id:"meso",frequency:12,amplitude:.22,role:"ridges, pores, grain, dents, or equivalent visible relief"},{id:"micro",frequency:56,amplitude:.08,role:"highlight breakup visible under grazing light"}],roughness:{base:.6,variation:.025,map:"independent-procedural-field"},metalness:{base:.15,variation:0},normal:{pattern:"derived-from-independent-height-field",strength:.045,scale:24,space:"tangent"},bump:{pattern:"none",amplitude:0,scale:1},displacement:{pattern:"none",amplitude:0,scale:1,silhouetteAffects:!1},ambientOcclusion:{cavityStrength:.25,contactShadowBias:.35,notes:"Darken creases, seams, intersections, and recessed local features."},wear:{edgeWear:0,scratches:[],chips:[]},dirt:{amount:0,cavityBias:0,color:"#2F2A22"},localOverrides:[{id:"dark-edge",region:"beveled edges",roughness:.5,evidenceRefs:["full-object"]}],shaderNotes:["Prefer MeshPhysicalMaterial when clearcoat, sheen, transmission, or thin-surface response is observed; otherwise use MeshStandardMaterial-compatible PBR channels.","Generate albedo, roughness, height/normal, and AO independently; never alias albedo into roughness.","Use normal/bump/displacement only when they map to observed surface relief.","Use displacement geometry when the observed relief changes the close-up silhouette; texture-only relief is insufficient there."],notes:"Replace with image-derived color, roughness, noise, and edge-wear notes.",referencePbr:{usable:!0,confidence:.86,maps:{albedo:{path:"C:\\Users\\quito\\\u9879\u76EE\\\u5B9E\u4E60\u5DE5\u4F5C\\\u6750\u6599\u516C\u53F8\\materials-output\\3d-models\\inspection\\pbr\\base_albedo.png",url:"base_albedo.png",channel:"albedo",source:"reference-pixel-extraction"},roughness:{path:"C:\\Users\\quito\\\u9879\u76EE\\\u5B9E\u4E60\u5DE5\u4F5C\\\u6750\u6599\u516C\u53F8\\materials-output\\3d-models\\inspection\\pbr\\base_roughness.png",url:"base_roughness.png",channel:"roughness",source:"reference-pixel-extraction"},height:{path:"C:\\Users\\quito\\\u9879\u76EE\\\u5B9E\u4E60\u5DE5\u4F5C\\\u6750\u6599\u516C\u53F8\\materials-output\\3d-models\\inspection\\pbr\\base_height.png",url:"base_height.png",channel:"height",source:"reference-pixel-extraction"},normal:{path:"C:\\Users\\quito\\\u9879\u76EE\\\u5B9E\u4E60\u5DE5\u4F5C\\\u6750\u6599\u516C\u53F8\\materials-output\\3d-models\\inspection\\pbr\\base_normal.png",url:"base_normal.png",channel:"normal",source:"reference-pixel-extraction"},ao:{path:"C:\\Users\\quito\\\u9879\u76EE\\\u5B9E\u4E60\u5DE5\u4F5C\\\u6750\u6599\u516C\u53F8\\materials-output\\3d-models\\inspection\\pbr\\base_ao.png",url:"base_ao.png",channel:"ao",source:"reference-pixel-extraction"}},sourceImage:"C:\\Users\\quito\\\u9879\u76EE\\\u5B9E\u4E60\u5DE5\u4F5C\\\u6750\u6599\u516C\u53F8\\materials-output\\3d-reference\\inspection-unit-reference.png",limitation:"single-image PBR extraction is an estimate; 70%+ extraction confidence still needs render screenshot review"}},i),t.black=ds("black",{id:"black",name:"black",type:"standard",shaderModel:"MeshStandardMaterial / PBR approximation",baseColor:"#171c20",color:"#171c20",albedo:{dominant:"#171c20",secondary:["#B7B6B6","#2E3237","#989796","#CBCACB","#545759"],samplingNotes:"Reference extraction palette with observed regional color assignment; not a physical calibration."},colorVariation:{palette:["#171c20"],pattern:"fine coating grain",amplitude:.025},textureResolution:1024,textureProjection:{mode:"uv",repeat:[2,2],anisotropy:8,texelDensityIntent:"Preserve stable world/object-scale detail; do not stretch micro detail with component scale."},surfaceFrequencyBands:[{id:"macro",frequency:2,amplitude:.42,role:"broad color and height breakup"},{id:"meso",frequency:12,amplitude:.22,role:"ridges, pores, grain, dents, or equivalent visible relief"},{id:"micro",frequency:56,amplitude:.08,role:"highlight breakup visible under grazing light"}],roughness:{base:.45,variation:.025,map:"independent-procedural-field"},metalness:{base:.3,variation:0},normal:{pattern:"derived-from-independent-height-field",strength:.045,scale:24,space:"tangent"},bump:{pattern:"none",amplitude:0,scale:1},displacement:{pattern:"none",amplitude:0,scale:1,silhouetteAffects:!1},ambientOcclusion:{cavityStrength:.25,contactShadowBias:.35,notes:"Darken creases, seams, intersections, and recessed local features."},wear:{edgeWear:0,scratches:[],chips:[]},dirt:{amount:0,cavityBias:0,color:"#2F2A22"},localOverrides:[{id:"black-edge",region:"beveled edges",roughness:.35,evidenceRefs:["full-object"]}],shaderNotes:["Prefer MeshPhysicalMaterial when clearcoat, sheen, transmission, or thin-surface response is observed; otherwise use MeshStandardMaterial-compatible PBR channels.","Generate albedo, roughness, height/normal, and AO independently; never alias albedo into roughness.","Use normal/bump/displacement only when they map to observed surface relief.","Use displacement geometry when the observed relief changes the close-up silhouette; texture-only relief is insufficient there."],notes:"Replace with image-derived color, roughness, noise, and edge-wear notes.",referencePbr:{usable:!0,confidence:.86,maps:{albedo:{path:"C:\\Users\\quito\\\u9879\u76EE\\\u5B9E\u4E60\u5DE5\u4F5C\\\u6750\u6599\u516C\u53F8\\materials-output\\3d-models\\inspection\\pbr\\base_albedo.png",url:"base_albedo.png",channel:"albedo",source:"reference-pixel-extraction"},roughness:{path:"C:\\Users\\quito\\\u9879\u76EE\\\u5B9E\u4E60\u5DE5\u4F5C\\\u6750\u6599\u516C\u53F8\\materials-output\\3d-models\\inspection\\pbr\\base_roughness.png",url:"base_roughness.png",channel:"roughness",source:"reference-pixel-extraction"},height:{path:"C:\\Users\\quito\\\u9879\u76EE\\\u5B9E\u4E60\u5DE5\u4F5C\\\u6750\u6599\u516C\u53F8\\materials-output\\3d-models\\inspection\\pbr\\base_height.png",url:"base_height.png",channel:"height",source:"reference-pixel-extraction"},normal:{path:"C:\\Users\\quito\\\u9879\u76EE\\\u5B9E\u4E60\u5DE5\u4F5C\\\u6750\u6599\u516C\u53F8\\materials-output\\3d-models\\inspection\\pbr\\base_normal.png",url:"base_normal.png",channel:"normal",source:"reference-pixel-extraction"},ao:{path:"C:\\Users\\quito\\\u9879\u76EE\\\u5B9E\u4E60\u5DE5\u4F5C\\\u6750\u6599\u516C\u53F8\\materials-output\\3d-models\\inspection\\pbr\\base_ao.png",url:"base_ao.png",channel:"ao",source:"reference-pixel-extraction"}},sourceImage:"C:\\Users\\quito\\\u9879\u76EE\\\u5B9E\u4E60\u5DE5\u4F5C\\\u6750\u6599\u516C\u53F8\\materials-output\\3d-reference\\inspection-unit-reference.png",limitation:"single-image PBR extraction is an estimate; 70%+ extraction confidence still needs render screenshot review"}},i),t.accent=ds("accent",{id:"accent",name:"accent",type:"standard",shaderModel:"MeshStandardMaterial / PBR approximation",baseColor:"#4ca9b1",color:"#4ca9b1",albedo:{dominant:"#4ca9b1",secondary:["#B7B6B6","#2E3237","#989796","#CBCACB","#545759"],samplingNotes:"Reference extraction palette with observed regional color assignment; not a physical calibration."},colorVariation:{palette:["#4ca9b1"],pattern:"fine coating grain",amplitude:.025},textureResolution:1024,textureProjection:{mode:"uv",repeat:[2,2],anisotropy:8,texelDensityIntent:"Preserve stable world/object-scale detail; do not stretch micro detail with component scale."},surfaceFrequencyBands:[{id:"macro",frequency:2,amplitude:.42,role:"broad color and height breakup"},{id:"meso",frequency:12,amplitude:.22,role:"ridges, pores, grain, dents, or equivalent visible relief"},{id:"micro",frequency:56,amplitude:.08,role:"highlight breakup visible under grazing light"}],roughness:{base:.28,variation:.025,map:"independent-procedural-field"},metalness:{base:.5,variation:0},normal:{pattern:"derived-from-independent-height-field",strength:.045,scale:24,space:"tangent"},bump:{pattern:"none",amplitude:0,scale:1},displacement:{pattern:"none",amplitude:0,scale:1,silhouetteAffects:!1},ambientOcclusion:{cavityStrength:.25,contactShadowBias:.35,notes:"Darken creases, seams, intersections, and recessed local features."},wear:{edgeWear:0,scratches:[],chips:[]},dirt:{amount:0,cavityBias:0,color:"#2F2A22"},localOverrides:[{id:"accent-edge",region:"beveled edges",roughness:.2,evidenceRefs:["full-object"]}],shaderNotes:["Prefer MeshPhysicalMaterial when clearcoat, sheen, transmission, or thin-surface response is observed; otherwise use MeshStandardMaterial-compatible PBR channels.","Generate albedo, roughness, height/normal, and AO independently; never alias albedo into roughness.","Use normal/bump/displacement only when they map to observed surface relief.","Use displacement geometry when the observed relief changes the close-up silhouette; texture-only relief is insufficient there."],notes:"Replace with image-derived color, roughness, noise, and edge-wear notes.",referencePbr:{usable:!0,confidence:.86,maps:{albedo:{path:"C:\\Users\\quito\\\u9879\u76EE\\\u5B9E\u4E60\u5DE5\u4F5C\\\u6750\u6599\u516C\u53F8\\materials-output\\3d-models\\inspection\\pbr\\base_albedo.png",url:"base_albedo.png",channel:"albedo",source:"reference-pixel-extraction"},roughness:{path:"C:\\Users\\quito\\\u9879\u76EE\\\u5B9E\u4E60\u5DE5\u4F5C\\\u6750\u6599\u516C\u53F8\\materials-output\\3d-models\\inspection\\pbr\\base_roughness.png",url:"base_roughness.png",channel:"roughness",source:"reference-pixel-extraction"},height:{path:"C:\\Users\\quito\\\u9879\u76EE\\\u5B9E\u4E60\u5DE5\u4F5C\\\u6750\u6599\u516C\u53F8\\materials-output\\3d-models\\inspection\\pbr\\base_height.png",url:"base_height.png",channel:"height",source:"reference-pixel-extraction"},normal:{path:"C:\\Users\\quito\\\u9879\u76EE\\\u5B9E\u4E60\u5DE5\u4F5C\\\u6750\u6599\u516C\u53F8\\materials-output\\3d-models\\inspection\\pbr\\base_normal.png",url:"base_normal.png",channel:"normal",source:"reference-pixel-extraction"},ao:{path:"C:\\Users\\quito\\\u9879\u76EE\\\u5B9E\u4E60\u5DE5\u4F5C\\\u6750\u6599\u516C\u53F8\\materials-output\\3d-models\\inspection\\pbr\\base_ao.png",url:"base_ao.png",channel:"ao",source:"reference-pixel-extraction"}},sourceImage:"C:\\Users\\quito\\\u9879\u76EE\\\u5B9E\u4E60\u5DE5\u4F5C\\\u6750\u6599\u516C\u53F8\\materials-output\\3d-reference\\inspection-unit-reference.png",limitation:"single-image PBR extraction is an estimate; 70%+ extraction confidence still needs render screenshot review"}},i),t.void=ds("void",{id:"void",name:"void",type:"standard",shaderModel:"MeshStandardMaterial / PBR approximation",baseColor:"#05070a",color:"#05070a",albedo:{dominant:"#05070a",secondary:["#B7B6B6","#2E3237","#989796","#CBCACB","#545759"],samplingNotes:"Reference extraction palette with observed regional color assignment; not a physical calibration."},colorVariation:{palette:["#05070a"],pattern:"fine coating grain",amplitude:.025},textureResolution:1024,textureProjection:{mode:"uv",repeat:[2,2],anisotropy:8,texelDensityIntent:"Preserve stable world/object-scale detail; do not stretch micro detail with component scale."},surfaceFrequencyBands:[{id:"macro",frequency:2,amplitude:.42,role:"broad color and height breakup"},{id:"meso",frequency:12,amplitude:.22,role:"ridges, pores, grain, dents, or equivalent visible relief"},{id:"micro",frequency:56,amplitude:.08,role:"highlight breakup visible under grazing light"}],roughness:{base:.85,variation:.025,map:"independent-procedural-field"},metalness:{base:0,variation:0},normal:{pattern:"derived-from-independent-height-field",strength:.045,scale:24,space:"tangent"},bump:{pattern:"none",amplitude:0,scale:1},displacement:{pattern:"none",amplitude:0,scale:1,silhouetteAffects:!1},ambientOcclusion:{cavityStrength:.25,contactShadowBias:.35,notes:"Darken creases, seams, intersections, and recessed local features."},wear:{edgeWear:0,scratches:[],chips:[]},dirt:{amount:0,cavityBias:0,color:"#2F2A22"},localOverrides:[{id:"void-edge",region:"beveled edges",roughness:.75,evidenceRefs:["full-object"]}],shaderNotes:["Prefer MeshPhysicalMaterial when clearcoat, sheen, transmission, or thin-surface response is observed; otherwise use MeshStandardMaterial-compatible PBR channels.","Generate albedo, roughness, height/normal, and AO independently; never alias albedo into roughness.","Use normal/bump/displacement only when they map to observed surface relief.","Use displacement geometry when the observed relief changes the close-up silhouette; texture-only relief is insufficient there."],notes:"Replace with image-derived color, roughness, noise, and edge-wear notes.",referencePbr:{usable:!0,confidence:.86,maps:{albedo:{path:"C:\\Users\\quito\\\u9879\u76EE\\\u5B9E\u4E60\u5DE5\u4F5C\\\u6750\u6599\u516C\u53F8\\materials-output\\3d-models\\inspection\\pbr\\base_albedo.png",url:"base_albedo.png",channel:"albedo",source:"reference-pixel-extraction"},roughness:{path:"C:\\Users\\quito\\\u9879\u76EE\\\u5B9E\u4E60\u5DE5\u4F5C\\\u6750\u6599\u516C\u53F8\\materials-output\\3d-models\\inspection\\pbr\\base_roughness.png",url:"base_roughness.png",channel:"roughness",source:"reference-pixel-extraction"},height:{path:"C:\\Users\\quito\\\u9879\u76EE\\\u5B9E\u4E60\u5DE5\u4F5C\\\u6750\u6599\u516C\u53F8\\materials-output\\3d-models\\inspection\\pbr\\base_height.png",url:"base_height.png",channel:"height",source:"reference-pixel-extraction"},normal:{path:"C:\\Users\\quito\\\u9879\u76EE\\\u5B9E\u4E60\u5DE5\u4F5C\\\u6750\u6599\u516C\u53F8\\materials-output\\3d-models\\inspection\\pbr\\base_normal.png",url:"base_normal.png",channel:"normal",source:"reference-pixel-extraction"},ao:{path:"C:\\Users\\quito\\\u9879\u76EE\\\u5B9E\u4E60\u5DE5\u4F5C\\\u6750\u6599\u516C\u53F8\\materials-output\\3d-models\\inspection\\pbr\\base_ao.png",url:"base_ao.png",channel:"ao",source:"reference-pixel-extraction"}},sourceImage:"C:\\Users\\quito\\\u9879\u76EE\\\u5B9E\u4E60\u5DE5\u4F5C\\\u6750\u6599\u516C\u53F8\\materials-output\\3d-reference\\inspection-unit-reference.png",limitation:"single-image PBR extraction is an estimate; 70%+ extraction confidence still needs render screenshot review"}},i),t.hidden=ds("hidden",{id:"hidden",name:"hidden",type:"standard",shaderModel:"MeshStandardMaterial / PBR approximation",baseColor:"#ffffff",color:"#ffffff",albedo:{dominant:"#ffffff",secondary:["#B7B6B6","#2E3237","#989796","#CBCACB","#545759"],samplingNotes:"Reference extraction palette with observed regional color assignment; not a physical calibration."},colorVariation:{palette:["#ffffff"],pattern:"fine coating grain",amplitude:.025},textureResolution:1024,textureProjection:{mode:"uv",repeat:[2,2],anisotropy:8,texelDensityIntent:"Preserve stable world/object-scale detail; do not stretch micro detail with component scale."},surfaceFrequencyBands:[{id:"macro",frequency:2,amplitude:.42,role:"broad color and height breakup"},{id:"meso",frequency:12,amplitude:.22,role:"ridges, pores, grain, dents, or equivalent visible relief"},{id:"micro",frequency:56,amplitude:.08,role:"highlight breakup visible under grazing light"}],roughness:{base:1,variation:.025,map:"independent-procedural-field"},metalness:{base:0,variation:0},normal:{pattern:"derived-from-independent-height-field",strength:.045,scale:24,space:"tangent"},bump:{pattern:"none",amplitude:0,scale:1},displacement:{pattern:"none",amplitude:0,scale:1,silhouetteAffects:!1},ambientOcclusion:{cavityStrength:.25,contactShadowBias:.35,notes:"Darken creases, seams, intersections, and recessed local features."},wear:{edgeWear:0,scratches:[],chips:[]},dirt:{amount:0,cavityBias:0,color:"#2F2A22"},localOverrides:[{id:"hidden-edge",region:"beveled edges",roughness:.9,evidenceRefs:["full-object"]}],shaderNotes:["Prefer MeshPhysicalMaterial when clearcoat, sheen, transmission, or thin-surface response is observed; otherwise use MeshStandardMaterial-compatible PBR channels.","Generate albedo, roughness, height/normal, and AO independently; never alias albedo into roughness.","Use normal/bump/displacement only when they map to observed surface relief.","Use displacement geometry when the observed relief changes the close-up silhouette; texture-only relief is insufficient there."],notes:"Replace with image-derived color, roughness, noise, and edge-wear notes.",referencePbr:{usable:!0,confidence:.86,maps:{albedo:{path:"C:\\Users\\quito\\\u9879\u76EE\\\u5B9E\u4E60\u5DE5\u4F5C\\\u6750\u6599\u516C\u53F8\\materials-output\\3d-models\\inspection\\pbr\\base_albedo.png",url:"base_albedo.png",channel:"albedo",source:"reference-pixel-extraction"},roughness:{path:"C:\\Users\\quito\\\u9879\u76EE\\\u5B9E\u4E60\u5DE5\u4F5C\\\u6750\u6599\u516C\u53F8\\materials-output\\3d-models\\inspection\\pbr\\base_roughness.png",url:"base_roughness.png",channel:"roughness",source:"reference-pixel-extraction"},height:{path:"C:\\Users\\quito\\\u9879\u76EE\\\u5B9E\u4E60\u5DE5\u4F5C\\\u6750\u6599\u516C\u53F8\\materials-output\\3d-models\\inspection\\pbr\\base_height.png",url:"base_height.png",channel:"height",source:"reference-pixel-extraction"},normal:{path:"C:\\Users\\quito\\\u9879\u76EE\\\u5B9E\u4E60\u5DE5\u4F5C\\\u6750\u6599\u516C\u53F8\\materials-output\\3d-models\\inspection\\pbr\\base_normal.png",url:"base_normal.png",channel:"normal",source:"reference-pixel-extraction"},ao:{path:"C:\\Users\\quito\\\u9879\u76EE\\\u5B9E\u4E60\u5DE5\u4F5C\\\u6750\u6599\u516C\u53F8\\materials-output\\3d-models\\inspection\\pbr\\base_ao.png",url:"base_ao.png",channel:"ao",source:"reference-pixel-extraction"}},sourceImage:"C:\\Users\\quito\\\u9879\u76EE\\\u5B9E\u4E60\u5DE5\u4F5C\\\u6750\u6599\u516C\u53F8\\materials-output\\3d-reference\\inspection-unit-reference.png",limitation:"single-image PBR extraction is an estimate; 70%+ extraction confidence still needs render screenshot review"},opacity:0},i);let n={root:e},s={},r={},a={},o={},l=vn(null),c=new yt;c.name="root__pivot",c.scale.set(1,1,1),l?(c.position.copy(l.start),c.rotation.set(0,0,0)):(c.position.set(0,0,0),c.rotation.set(0,0,0)),c.userData.sculptComponent={id:"root",name:"root",level:"macro",role:"root",importance:.95,confidence:.8,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Independent closed industrial exterior part with no organic fusion requirement.",geometryDescriptor:{topologyIntent:"low-poly blockout with bevel-ready edges",edgeTreatment:{type:"bevel",bevelRadius:.035,segments:3},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:null,attachment:null,dimensions:{width:.01,height:.01,depth:.01,units:"relative",confidence:.8},transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},actionProfile:{animationRole:"root",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.5},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"root",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"hidden"}},material:"hidden",materialLayers:["hidden"],deformations:[],joints:[],seams:[],localFeatures:[],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(180, 185, 187, 1)",secondaryAlbedo:"rgba(40, 49, 57, 1)",accentColor:"rgba(76, 169, 177, 1)",materialClass:"metal",materialClassConfidence:.8,evidenceRefs:["full-object"]}},c.userData.actionProfile={animationRole:"root",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.5},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"root",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"hidden"}},(n.root??e).add(c),n.root=c;let u=l?new vt(l.endRadius,l.baseRadius,l.length,16,6):new bt(1,1,1,4,4,4);l||u.scale(1,1,1);let f=new Ye(u,t.hidden??new pt({color:8947848}));f.name="root",l&&(f.position.copy(l.midpoint),f.quaternion.copy(l.quaternion)),f.castShadow=i.castShadow??!0,f.receiveShadow=i.receiveShadow??!0,f.userData.sculptComponent={id:"root",name:"root",level:"macro",role:"root",importance:.95,confidence:.8,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Independent closed industrial exterior part with no organic fusion requirement.",geometryDescriptor:{topologyIntent:"low-poly blockout with bevel-ready edges",edgeTreatment:{type:"bevel",bevelRadius:.035,segments:3},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:null,attachment:null,dimensions:{width:.01,height:.01,depth:.01,units:"relative",confidence:.8},transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},actionProfile:{animationRole:"root",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.5},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"root",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"hidden"}},material:"hidden",materialLayers:["hidden"],deformations:[],joints:[],seams:[],localFeatures:[],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(180, 185, 187, 1)",secondaryAlbedo:"rgba(40, 49, 57, 1)",accentColor:"rgba(76, 169, 177, 1)",materialClass:"metal",materialClassConfidence:.8,evidenceRefs:["full-object"]}},c.add(f),s.root=f,a.root={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o.root??(o.root=[]),o.root.push(c);let h=vn(null),p=new yt;p.name="chassis__pivot",p.scale.set(1,1,1),h?(p.position.copy(h.start),p.rotation.set(0,0,0)):(p.position.set(0,.1,0),p.rotation.set(0,0,0)),p.userData.sculptComponent={id:"chassis",name:"chassis",level:"macro",role:"chassis",importance:.95,confidence:.8,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Independent closed industrial exterior part with no organic fusion requirement.",geometryDescriptor:{topologyIntent:"low-poly blockout with bevel-ready edges",edgeTreatment:{type:"bevel",bevelRadius:.035,segments:3},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:null,dimensions:{width:2.7,height:.2,depth:2.3,units:"relative",confidence:.8},transform:{position:[0,.1,0],rotation:[0,0,0],scale:[1,1,1]},actionProfile:{animationRole:"static-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.5},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!0,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chassis",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"dark"}},material:"dark",materialLayers:["dark"],deformations:[],joints:[],seams:[],localFeatures:[{id:"dark-skirt",type:"color-zone",description:"dark skirt",evidenceRefs:["full-object"]}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(180, 185, 187, 1)",secondaryAlbedo:"rgba(40, 49, 57, 1)",accentColor:"rgba(76, 169, 177, 1)",materialClass:"metal",materialClassConfidence:.8,evidenceRefs:["full-object"]}},p.userData.actionProfile={animationRole:"static-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.5},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!0,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chassis",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"dark"}},(n.root??e).add(p),n.chassis=p;let x=h?new vt(h.endRadius,h.baseRadius,h.length,16,6):new bt(1,1,1,4,4,4);h||x.scale(1,1,1);let b=new Ye(x,t.dark??new pt({color:8947848}));b.name="chassis",h&&(b.position.copy(h.midpoint),b.quaternion.copy(h.quaternion)),b.castShadow=i.castShadow??!0,b.receiveShadow=i.receiveShadow??!0,b.userData.sculptComponent={id:"chassis",name:"chassis",level:"macro",role:"chassis",importance:.95,confidence:.8,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Independent closed industrial exterior part with no organic fusion requirement.",geometryDescriptor:{topologyIntent:"low-poly blockout with bevel-ready edges",edgeTreatment:{type:"bevel",bevelRadius:.035,segments:3},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:null,dimensions:{width:2.7,height:.2,depth:2.3,units:"relative",confidence:.8},transform:{position:[0,.1,0],rotation:[0,0,0],scale:[1,1,1]},actionProfile:{animationRole:"static-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.5},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!0,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chassis",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"dark"}},material:"dark",materialLayers:["dark"],deformations:[],joints:[],seams:[],localFeatures:[{id:"dark-skirt",type:"color-zone",description:"dark skirt",evidenceRefs:["full-object"]}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(180, 185, 187, 1)",secondaryAlbedo:"rgba(40, 49, 57, 1)",accentColor:"rgba(76, 169, 177, 1)",materialClass:"metal",materialClassConfidence:.8,evidenceRefs:["full-object"]}},p.add(b),s.chassis=b,a.chassis={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o.chassis??(o.chassis=[]),o.chassis.push(p);let m=vn(null),d=new yt;d.name="base__pivot",d.scale.set(1,1,1),m?(d.position.copy(m.start),d.rotation.set(0,0,0)):(d.position.set(0,.435,0),d.rotation.set(0,0,0)),d.userData.sculptComponent={id:"base",name:"base",level:"macro",role:"base",importance:.95,confidence:.8,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Independent closed industrial exterior part with no organic fusion requirement.",geometryDescriptor:{topologyIntent:"low-poly blockout with bevel-ready edges",edgeTreatment:{type:"bevel",bevelRadius:.035,segments:3},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:null,dimensions:{width:2.7,height:.47,depth:2.3,units:"relative",confidence:.8},transform:{position:[0,.435,0],rotation:[0,0,0],scale:[1,1,1]},actionProfile:{animationRole:"static-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.5},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!0,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"base",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"silver"}},material:"silver",materialLayers:["silver"],deformations:[],joints:[],seams:[],localFeatures:[{id:"base-bevel",type:"bevel",description:"base bevel",evidenceRefs:["full-object"]}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(180, 185, 187, 1)",secondaryAlbedo:"rgba(40, 49, 57, 1)",accentColor:"rgba(76, 169, 177, 1)",materialClass:"metal",materialClassConfidence:.8,evidenceRefs:["full-object"]}},d.userData.actionProfile={animationRole:"static-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.5},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!0,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"base",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"silver"}},(n.root??e).add(d),n.base=d;let T=m?new vt(m.endRadius,m.baseRadius,m.length,16,6):new bt(1,1,1,4,4,4);m||T.scale(1,1,1);let P=new Ye(T,t.silver??new pt({color:8947848}));P.name="base",m&&(P.position.copy(m.midpoint),P.quaternion.copy(m.quaternion)),P.castShadow=i.castShadow??!0,P.receiveShadow=i.receiveShadow??!0,P.userData.sculptComponent={id:"base",name:"base",level:"macro",role:"base",importance:.95,confidence:.8,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Independent closed industrial exterior part with no organic fusion requirement.",geometryDescriptor:{topologyIntent:"low-poly blockout with bevel-ready edges",edgeTreatment:{type:"bevel",bevelRadius:.035,segments:3},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:null,dimensions:{width:2.7,height:.47,depth:2.3,units:"relative",confidence:.8},transform:{position:[0,.435,0],rotation:[0,0,0],scale:[1,1,1]},actionProfile:{animationRole:"static-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.5},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!0,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"base",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"silver"}},material:"silver",materialLayers:["silver"],deformations:[],joints:[],seams:[],localFeatures:[{id:"base-bevel",type:"bevel",description:"base bevel",evidenceRefs:["full-object"]}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(180, 185, 187, 1)",secondaryAlbedo:"rgba(40, 49, 57, 1)",accentColor:"rgba(76, 169, 177, 1)",materialClass:"metal",materialClassConfidence:.8,evidenceRefs:["full-object"]}},d.add(P),s.base=P,a.base={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o.base??(o.base=[]),o.base.push(d);let v=vn(null),S=new yt;S.name="column__pivot",S.scale.set(1,1,1),v?(S.position.copy(v.start),S.rotation.set(0,0,0)):(S.position.set(.12,1.84,-.85),S.rotation.set(0,0,0)),S.userData.sculptComponent={id:"column",name:"column",level:"macro",role:"column",importance:.95,confidence:.8,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Independent closed industrial exterior part with no organic fusion requirement.",geometryDescriptor:{topologyIntent:"low-poly blockout with bevel-ready edges",edgeTreatment:{type:"bevel",bevelRadius:.035,segments:3},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:null,dimensions:{width:.76,height:2.64,depth:.65,units:"relative",confidence:.8},transform:{position:[.12,1.84,-.85],rotation:[0,0,0],scale:[1,1,1]},actionProfile:{animationRole:"static-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.5},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!0,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"column",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"silver"}},material:"silver",materialLayers:["silver"],deformations:[],joints:[],seams:[],localFeatures:[],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(180, 185, 187, 1)",secondaryAlbedo:"rgba(40, 49, 57, 1)",accentColor:"rgba(76, 169, 177, 1)",materialClass:"metal",materialClassConfidence:.8,evidenceRefs:["full-object"]}},S.userData.actionProfile={animationRole:"static-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.5},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!0,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"column",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"silver"}},(n.root??e).add(S),n.column=S;let w=v?new vt(v.endRadius,v.baseRadius,v.length,16,6):new bt(1,1,1,4,4,4);v||w.scale(1,1,1);let A=new Ye(w,t.silver??new pt({color:8947848}));A.name="column",v&&(A.position.copy(v.midpoint),A.quaternion.copy(v.quaternion)),A.castShadow=i.castShadow??!0,A.receiveShadow=i.receiveShadow??!0,A.userData.sculptComponent={id:"column",name:"column",level:"macro",role:"column",importance:.95,confidence:.8,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Independent closed industrial exterior part with no organic fusion requirement.",geometryDescriptor:{topologyIntent:"low-poly blockout with bevel-ready edges",edgeTreatment:{type:"bevel",bevelRadius:.035,segments:3},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:null,dimensions:{width:.76,height:2.64,depth:.65,units:"relative",confidence:.8},transform:{position:[.12,1.84,-.85],rotation:[0,0,0],scale:[1,1,1]},actionProfile:{animationRole:"static-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.5},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!0,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"column",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"silver"}},material:"silver",materialLayers:["silver"],deformations:[],joints:[],seams:[],localFeatures:[],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(180, 185, 187, 1)",secondaryAlbedo:"rgba(40, 49, 57, 1)",accentColor:"rgba(76, 169, 177, 1)",materialClass:"metal",materialClassConfidence:.8,evidenceRefs:["full-object"]}},S.add(A),s.column=A,a.column={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o.column??(o.column=[]),o.column.push(S);let _=vn(null),M=new yt;M.name="head__pivot",M.scale.set(1,1,1),_?(M.position.copy(_.start),M.rotation.set(0,0,0)):(M.position.set(.12,2.53,.15),M.rotation.set(0,0,0)),M.userData.sculptComponent={id:"head",name:"head",level:"macro",role:"head",importance:.95,confidence:.8,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Independent closed industrial exterior part with no organic fusion requirement.",geometryDescriptor:{topologyIntent:"low-poly blockout with bevel-ready edges",edgeTreatment:{type:"bevel",bevelRadius:.035,segments:3},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:null,dimensions:{width:.7,height:.63,depth:1.45,units:"relative",confidence:.8},transform:{position:[.12,2.53,.15],rotation:[0,0,0],scale:[1,1,1]},actionProfile:{animationRole:"static-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.5},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!0,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"head",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"silver"}},material:"silver",materialLayers:["silver"],deformations:[],joints:[],seams:[],localFeatures:[],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(180, 185, 187, 1)",secondaryAlbedo:"rgba(40, 49, 57, 1)",accentColor:"rgba(76, 169, 177, 1)",materialClass:"metal",materialClassConfidence:.8,evidenceRefs:["full-object"]}},M.userData.actionProfile={animationRole:"static-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.5},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!0,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"head",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"silver"}},(n.root??e).add(M),n.head=M;let C=_?new vt(_.endRadius,_.baseRadius,_.length,16,6):new bt(1,1,1,4,4,4);_||C.scale(1,1,1);let I=new Ye(C,t.silver??new pt({color:8947848}));I.name="head",_&&(I.position.copy(_.midpoint),I.quaternion.copy(_.quaternion)),I.castShadow=i.castShadow??!0,I.receiveShadow=i.receiveShadow??!0,I.userData.sculptComponent={id:"head",name:"head",level:"macro",role:"head",importance:.95,confidence:.8,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Independent closed industrial exterior part with no organic fusion requirement.",geometryDescriptor:{topologyIntent:"low-poly blockout with bevel-ready edges",edgeTreatment:{type:"bevel",bevelRadius:.035,segments:3},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:null,dimensions:{width:.7,height:.63,depth:1.45,units:"relative",confidence:.8},transform:{position:[.12,2.53,.15],rotation:[0,0,0],scale:[1,1,1]},actionProfile:{animationRole:"static-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.5},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!0,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"head",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"silver"}},material:"silver",materialLayers:["silver"],deformations:[],joints:[],seams:[],localFeatures:[],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(180, 185, 187, 1)",secondaryAlbedo:"rgba(40, 49, 57, 1)",accentColor:"rgba(76, 169, 177, 1)",materialClass:"metal",materialClassConfidence:.8,evidenceRefs:["full-object"]}},M.add(I),s.head=I,a.head={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o.head??(o.head=[]),o.head.push(M);let O=vn({parentId:"root",parentSocket:"objective-socket",localStart:[0,-.33,0],localEnd:[0,.33,0],contactType:"overlap",embedDepth:.015,gapTolerance:.025}),R=new yt;R.name="objective__pivot",R.scale.set(1,1,1),O?(R.position.copy(O.start),R.rotation.set(0,0,0)):(R.position.set(.12,1.95,.57),R.rotation.set(0,0,0)),R.userData.sculptComponent={id:"objective",name:"objective",level:"macro",role:"objective",importance:.95,confidence:.8,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Independent closed industrial exterior part with no organic fusion requirement.",geometryDescriptor:{topologyIntent:"low-poly blockout with bevel-ready edges",edgeTreatment:{type:"bevel",bevelRadius:.035,segments:3},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"objective-socket",localStart:[0,-.33,0],localEnd:[0,.33,0],contactType:"overlap",embedDepth:.015,gapTolerance:.025},dimensions:{width:.54,height:.66,depth:.54,units:"relative",confidence:.8},transform:{position:[.12,1.95,.57],rotation:[0,0,0],scale:[1,1,1]},actionProfile:{animationRole:"static-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.5},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!0,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"objective",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"black"}},material:"black",materialLayers:["black"],deformations:[],joints:[],seams:[],localFeatures:[{id:"objective-flange",type:"ridge",description:"objective flange",evidenceRefs:["full-object"]},{id:"objective-barrel",type:"contour",description:"objective barrel",evidenceRefs:["full-object"]}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(180, 185, 187, 1)",secondaryAlbedo:"rgba(40, 49, 57, 1)",accentColor:"rgba(76, 169, 177, 1)",materialClass:"metal",materialClassConfidence:.8,evidenceRefs:["full-object"]}},R.userData.actionProfile={animationRole:"static-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.5},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!0,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"objective",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"black"}},(n.root??e).add(R),n.objective=R;let k=O?new vt(O.endRadius,O.baseRadius,O.length,16,6):new vt(.5,.5,1,24,8);O||k.scale(1,1,1);let G=new Ye(k,t.black??new pt({color:8947848}));G.name="objective",O&&(G.position.copy(O.midpoint),G.quaternion.copy(O.quaternion)),G.castShadow=i.castShadow??!0,G.receiveShadow=i.receiveShadow??!0,G.userData.sculptComponent={id:"objective",name:"objective",level:"macro",role:"objective",importance:.95,confidence:.8,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Independent closed industrial exterior part with no organic fusion requirement.",geometryDescriptor:{topologyIntent:"low-poly blockout with bevel-ready edges",edgeTreatment:{type:"bevel",bevelRadius:.035,segments:3},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"objective-socket",localStart:[0,-.33,0],localEnd:[0,.33,0],contactType:"overlap",embedDepth:.015,gapTolerance:.025},dimensions:{width:.54,height:.66,depth:.54,units:"relative",confidence:.8},transform:{position:[.12,1.95,.57],rotation:[0,0,0],scale:[1,1,1]},actionProfile:{animationRole:"static-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.5},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!0,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"objective",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"black"}},material:"black",materialLayers:["black"],deformations:[],joints:[],seams:[],localFeatures:[{id:"objective-flange",type:"ridge",description:"objective flange",evidenceRefs:["full-object"]},{id:"objective-barrel",type:"contour",description:"objective barrel",evidenceRefs:["full-object"]}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(180, 185, 187, 1)",secondaryAlbedo:"rgba(40, 49, 57, 1)",accentColor:"rgba(76, 169, 177, 1)",materialClass:"metal",materialClassConfidence:.8,evidenceRefs:["full-object"]}},R.add(G),s.objective=G,a.objective={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o.objective??(o.objective=[]),o.objective.push(R);let W=vn(null),te=new yt;te.name="stage__pivot",te.scale.set(1,1,1),W?(te.position.copy(W.start),te.rotation.set(0,0,0)):(te.position.set(0,.76,.22),te.rotation.set(0,0,0)),te.userData.sculptComponent={id:"stage",name:"stage",level:"macro",role:"stage",importance:.95,confidence:.8,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Independent closed industrial exterior part with no organic fusion requirement.",geometryDescriptor:{topologyIntent:"low-poly blockout with bevel-ready edges",edgeTreatment:{type:"bevel",bevelRadius:.035,segments:3},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:null,dimensions:{width:1.72,height:.13,depth:1.46,units:"relative",confidence:.8},transform:{position:[0,.76,.22],rotation:[0,0,0],scale:[1,1,1]},actionProfile:{animationRole:"static-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.5},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!0,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"stage",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"black"}},material:"black",materialLayers:["black"],deformations:[],joints:[],seams:[],localFeatures:[{id:"stage-bores",type:"hole",description:"stage bores",evidenceRefs:["full-object"]}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(180, 185, 187, 1)",secondaryAlbedo:"rgba(40, 49, 57, 1)",accentColor:"rgba(76, 169, 177, 1)",materialClass:"metal",materialClassConfidence:.8,evidenceRefs:["full-object"]}},te.userData.actionProfile={animationRole:"static-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.5},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!0,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"stage",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"black"}},(n.root??e).add(te),n.stage=te;let j=W?new vt(W.endRadius,W.baseRadius,W.length,16,6):new bt(1,1,1,4,4,4);W||j.scale(1,1,1);let $=new Ye(j,t.black??new pt({color:8947848}));$.name="stage",W&&($.position.copy(W.midpoint),$.quaternion.copy(W.quaternion)),$.castShadow=i.castShadow??!0,$.receiveShadow=i.receiveShadow??!0,$.userData.sculptComponent={id:"stage",name:"stage",level:"macro",role:"stage",importance:.95,confidence:.8,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Independent closed industrial exterior part with no organic fusion requirement.",geometryDescriptor:{topologyIntent:"low-poly blockout with bevel-ready edges",edgeTreatment:{type:"bevel",bevelRadius:.035,segments:3},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:null,dimensions:{width:1.72,height:.13,depth:1.46,units:"relative",confidence:.8},transform:{position:[0,.76,.22],rotation:[0,0,0],scale:[1,1,1]},actionProfile:{animationRole:"static-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.5},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!0,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"stage",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"black"}},material:"black",materialLayers:["black"],deformations:[],joints:[],seams:[],localFeatures:[{id:"stage-bores",type:"hole",description:"stage bores",evidenceRefs:["full-object"]}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(180, 185, 187, 1)",secondaryAlbedo:"rgba(40, 49, 57, 1)",accentColor:"rgba(76, 169, 177, 1)",materialClass:"metal",materialClassConfidence:.8,evidenceRefs:["full-object"]}},te.add($),s.stage=$,a.stage={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o.stage??(o.stage=[]),o.stage.push(te);let Q=vn(null),Y=new yt;Y.name="cover__pivot",Y.scale.set(1,1,1),Q?(Y.position.copy(Q.start),Y.rotation.set(0,0,0)):(Y.position.set(.12,1.84,-1.24),Y.rotation.set(0,0,0)),Y.userData.sculptComponent={id:"cover",name:"cover",level:"macro",role:"cover",importance:.75,confidence:.8,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Independent closed industrial exterior part with no organic fusion requirement.",geometryDescriptor:{topologyIntent:"low-poly blockout with bevel-ready edges",edgeTreatment:{type:"bevel",bevelRadius:.035,segments:3},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:null,dimensions:{width:.78,height:2.64,depth:.18,units:"relative",confidence:.8},transform:{position:[.12,1.84,-1.24],rotation:[0,0,0],scale:[1,1,1]},actionProfile:{animationRole:"static-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.5},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!0,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"cover",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"dark"}},material:"dark",materialLayers:["dark"],deformations:[],joints:[],seams:[],localFeatures:[{id:"column-cover",type:"seam",description:"column cover",evidenceRefs:["full-object"]}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(180, 185, 187, 1)",secondaryAlbedo:"rgba(40, 49, 57, 1)",accentColor:"rgba(76, 169, 177, 1)",materialClass:"metal",materialClassConfidence:.8,evidenceRefs:["full-object"]}},Y.userData.actionProfile={animationRole:"static-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.5},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!0,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"cover",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"dark"}},(n.root??e).add(Y),n.cover=Y;let ie=Q?new vt(Q.endRadius,Q.baseRadius,Q.length,16,6):new bt(1,1,1,4,4,4);Q||ie.scale(1,1,1);let we=new Ye(ie,t.dark??new pt({color:8947848}));we.name="cover",Q&&(we.position.copy(Q.midpoint),we.quaternion.copy(Q.quaternion)),we.castShadow=i.castShadow??!0,we.receiveShadow=i.receiveShadow??!0,we.userData.sculptComponent={id:"cover",name:"cover",level:"macro",role:"cover",importance:.75,confidence:.8,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Independent closed industrial exterior part with no organic fusion requirement.",geometryDescriptor:{topologyIntent:"low-poly blockout with bevel-ready edges",edgeTreatment:{type:"bevel",bevelRadius:.035,segments:3},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:null,dimensions:{width:.78,height:2.64,depth:.18,units:"relative",confidence:.8},transform:{position:[.12,1.84,-1.24],rotation:[0,0,0],scale:[1,1,1]},actionProfile:{animationRole:"static-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.5},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!0,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"cover",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"dark"}},material:"dark",materialLayers:["dark"],deformations:[],joints:[],seams:[],localFeatures:[{id:"column-cover",type:"seam",description:"column cover",evidenceRefs:["full-object"]}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(180, 185, 187, 1)",secondaryAlbedo:"rgba(40, 49, 57, 1)",accentColor:"rgba(76, 169, 177, 1)",materialClass:"metal",materialClassConfidence:.8,evidenceRefs:["full-object"]}},Y.add(we),s.cover=we,a.cover={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o.cover??(o.cover=[]),o.cover.push(Y);let _e=vn(null),Ie=new yt;Ie.name="cap__pivot",Ie.scale.set(1,1,1),_e?(Ie.position.copy(_e.start),Ie.rotation.set(0,0,0)):(Ie.position.set(.12,2.53,.91),Ie.rotation.set(0,0,0)),Ie.userData.sculptComponent={id:"cap",name:"cap",level:"macro",role:"cap",importance:.75,confidence:.8,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Independent closed industrial exterior part with no organic fusion requirement.",geometryDescriptor:{topologyIntent:"low-poly blockout with bevel-ready edges",edgeTreatment:{type:"bevel",bevelRadius:.035,segments:3},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:null,dimensions:{width:.71,height:.63,depth:.075,units:"relative",confidence:.8},transform:{position:[.12,2.53,.91],rotation:[0,0,0],scale:[1,1,1]},actionProfile:{animationRole:"static-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.5},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!0,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"cap",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"dark"}},material:"dark",materialLayers:["dark"],deformations:[],joints:[],seams:[],localFeatures:[{id:"head-cap",type:"seam",description:"head cap",evidenceRefs:["full-object"]}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(180, 185, 187, 1)",secondaryAlbedo:"rgba(40, 49, 57, 1)",accentColor:"rgba(76, 169, 177, 1)",materialClass:"metal",materialClassConfidence:.8,evidenceRefs:["full-object"]}},Ie.userData.actionProfile={animationRole:"static-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.5},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!0,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"cap",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"dark"}},(n.root??e).add(Ie),n.cap=Ie;let q=_e?new vt(_e.endRadius,_e.baseRadius,_e.length,16,6):new bt(1,1,1,4,4,4);_e||q.scale(1,1,1);let K=new Ye(q,t.dark??new pt({color:8947848}));K.name="cap",_e&&(K.position.copy(_e.midpoint),K.quaternion.copy(_e.quaternion)),K.castShadow=i.castShadow??!0,K.receiveShadow=i.receiveShadow??!0,K.userData.sculptComponent={id:"cap",name:"cap",level:"macro",role:"cap",importance:.75,confidence:.8,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Independent closed industrial exterior part with no organic fusion requirement.",geometryDescriptor:{topologyIntent:"low-poly blockout with bevel-ready edges",edgeTreatment:{type:"bevel",bevelRadius:.035,segments:3},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:null,dimensions:{width:.71,height:.63,depth:.075,units:"relative",confidence:.8},transform:{position:[.12,2.53,.91],rotation:[0,0,0],scale:[1,1,1]},actionProfile:{animationRole:"static-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.5},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!0,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"cap",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"dark"}},material:"dark",materialLayers:["dark"],deformations:[],joints:[],seams:[],localFeatures:[{id:"head-cap",type:"seam",description:"head cap",evidenceRefs:["full-object"]}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(180, 185, 187, 1)",secondaryAlbedo:"rgba(40, 49, 57, 1)",accentColor:"rgba(76, 169, 177, 1)",materialClass:"metal",materialClassConfidence:.8,evidenceRefs:["full-object"]}},Ie.add(K),s.cap=K,a.cap={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o.cap??(o.cap=[]),o.cap.push(Ie);let Ce=vn({parentId:"objective",parentSocket:"flange-socket",localStart:[0,-.06,0],localEnd:[0,.06,0],contactType:"overlap",embedDepth:.015,gapTolerance:.025}),ae=new yt;ae.name="flange__pivot",ae.scale.set(1,1,1),Ce?(ae.position.copy(Ce.start),ae.rotation.set(0,0,0)):(ae.position.set(0,.27,0),ae.rotation.set(0,0,0)),ae.userData.sculptComponent={id:"flange",name:"flange",level:"macro",role:"flange",importance:.75,confidence:.8,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Independent closed industrial exterior part with no organic fusion requirement.",geometryDescriptor:{topologyIntent:"low-poly blockout with bevel-ready edges",edgeTreatment:{type:"bevel",bevelRadius:.035,segments:3},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"objective",attachment:{parentId:"objective",parentSocket:"flange-socket",localStart:[0,-.06,0],localEnd:[0,.06,0],contactType:"overlap",embedDepth:.015,gapTolerance:.025},dimensions:{width:.65,height:.12,depth:.65,units:"relative",confidence:.8},transform:{position:[0,.27,0],rotation:[0,0,0],scale:[1,1,1]},actionProfile:{animationRole:"static-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.5},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!0,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"flange",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"black"}},material:"black",materialLayers:["black"],deformations:[],joints:[],seams:[],localFeatures:[],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(180, 185, 187, 1)",secondaryAlbedo:"rgba(40, 49, 57, 1)",accentColor:"rgba(76, 169, 177, 1)",materialClass:"metal",materialClassConfidence:.8,evidenceRefs:["full-object"]}},ae.userData.actionProfile={animationRole:"static-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.5},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!0,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"flange",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"black"}},(n.objective??e).add(ae),n.flange=ae;let ke=Ce?new vt(Ce.endRadius,Ce.baseRadius,Ce.length,16,6):new vt(.5,.5,1,24,8);Ce||ke.scale(1,1,1);let it=new Ye(ke,t.black??new pt({color:8947848}));it.name="flange",Ce&&(it.position.copy(Ce.midpoint),it.quaternion.copy(Ce.quaternion)),it.castShadow=i.castShadow??!0,it.receiveShadow=i.receiveShadow??!0,it.userData.sculptComponent={id:"flange",name:"flange",level:"macro",role:"flange",importance:.75,confidence:.8,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Independent closed industrial exterior part with no organic fusion requirement.",geometryDescriptor:{topologyIntent:"low-poly blockout with bevel-ready edges",edgeTreatment:{type:"bevel",bevelRadius:.035,segments:3},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"objective",attachment:{parentId:"objective",parentSocket:"flange-socket",localStart:[0,-.06,0],localEnd:[0,.06,0],contactType:"overlap",embedDepth:.015,gapTolerance:.025},dimensions:{width:.65,height:.12,depth:.65,units:"relative",confidence:.8},transform:{position:[0,.27,0],rotation:[0,0,0],scale:[1,1,1]},actionProfile:{animationRole:"static-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.5},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!0,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"flange",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"black"}},material:"black",materialLayers:["black"],deformations:[],joints:[],seams:[],localFeatures:[],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(180, 185, 187, 1)",secondaryAlbedo:"rgba(40, 49, 57, 1)",accentColor:"rgba(76, 169, 177, 1)",materialClass:"metal",materialClassConfidence:.8,evidenceRefs:["full-object"]}},ae.add(it),s.flange=it,a.flange={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o.flange??(o.flange=[]),o.flange.push(ae);let Oe=vn({parentId:"objective",parentSocket:"rim-socket",localStart:[0,-.035,0],localEnd:[0,.035,0],contactType:"overlap",embedDepth:.015,gapTolerance:.025}),He=new yt;He.name="rim__pivot",He.scale.set(1,1,1),Oe?(He.position.copy(Oe.start),He.rotation.set(0,0,0)):(He.position.set(0,-.365,0),He.rotation.set(0,0,0)),He.userData.sculptComponent={id:"rim",name:"rim",level:"macro",role:"rim",importance:.75,confidence:.8,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Independent closed industrial exterior part with no organic fusion requirement.",geometryDescriptor:{topologyIntent:"low-poly blockout with bevel-ready edges",edgeTreatment:{type:"bevel",bevelRadius:.035,segments:3},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"objective",attachment:{parentId:"objective",parentSocket:"rim-socket",localStart:[0,-.035,0],localEnd:[0,.035,0],contactType:"overlap",embedDepth:.015,gapTolerance:.025},dimensions:{width:.38,height:.07,depth:.38,units:"relative",confidence:.8},transform:{position:[0,-.365,0],rotation:[0,0,0],scale:[1,1,1]},actionProfile:{animationRole:"static-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.5},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!0,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"rim",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"black"}},material:"black",materialLayers:["black"],deformations:[],joints:[],seams:[],localFeatures:[{id:"objective-rim",type:"ridge",description:"objective rim",evidenceRefs:["full-object"]}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(180, 185, 187, 1)",secondaryAlbedo:"rgba(40, 49, 57, 1)",accentColor:"rgba(76, 169, 177, 1)",materialClass:"metal",materialClassConfidence:.8,evidenceRefs:["full-object"]}},He.userData.actionProfile={animationRole:"static-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.5},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!0,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"rim",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"black"}},(n.objective??e).add(He),n.rim=He;let Ge=Oe?new vt(Oe.endRadius,Oe.baseRadius,Oe.length,16,6):new vt(.5,.5,1,24,8);Oe||Ge.scale(1,1,1);let Ze=new Ye(Ge,t.black??new pt({color:8947848}));return Ze.name="rim",Oe&&(Ze.position.copy(Oe.midpoint),Ze.quaternion.copy(Oe.quaternion)),Ze.castShadow=i.castShadow??!0,Ze.receiveShadow=i.receiveShadow??!0,Ze.userData.sculptComponent={id:"rim",name:"rim",level:"macro",role:"rim",importance:.75,confidence:.8,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Independent closed industrial exterior part with no organic fusion requirement.",geometryDescriptor:{topologyIntent:"low-poly blockout with bevel-ready edges",edgeTreatment:{type:"bevel",bevelRadius:.035,segments:3},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"objective",attachment:{parentId:"objective",parentSocket:"rim-socket",localStart:[0,-.035,0],localEnd:[0,.035,0],contactType:"overlap",embedDepth:.015,gapTolerance:.025},dimensions:{width:.38,height:.07,depth:.38,units:"relative",confidence:.8},transform:{position:[0,-.365,0],rotation:[0,0,0],scale:[1,1,1]},actionProfile:{animationRole:"static-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.5},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!0,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"rim",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"black"}},material:"black",materialLayers:["black"],deformations:[],joints:[],seams:[],localFeatures:[{id:"objective-rim",type:"ridge",description:"objective rim",evidenceRefs:["full-object"]}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(180, 185, 187, 1)",secondaryAlbedo:"rgba(40, 49, 57, 1)",accentColor:"rgba(76, 169, 177, 1)",materialClass:"metal",materialClassConfidence:.8,evidenceRefs:["full-object"]}},He.add(Ze),s.rim=Ze,a.rim={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o.rim??(o.rim=[]),o.rim.push(He),e.userData.sculptRuntime={nodes:n,meshes:s,sockets:r,colliders:a,destructionGroups:o},e.userData.lookDevTargets={qualityPriority:"reference-fidelity",materialPass:{albedoPaletteRequired:!0,roughnessVariationRequired:!0,normalOrBumpRequired:!0,localOverridesRequired:!0,minimumTextureResolution:1024,preferredTextureResolution:2048,independentMapChannels:["albedo","roughness","height","normal","ambient-occlusion"],requiredSurfaceFrequencyBands:["macro","meso","micro"],geometryReliefRequiredWhenSilhouetteAffected:!0,referencePbrExtraction:{requiredWhenSourceImagePresent:!0,targetThreshold:.7,stopOnLowConfidence:!0,script:"forge/stage1_intake/extract_pbr_evidence.py",acceptedLimitation:"single-image extraction is reference-derived inference, not exact photogrammetry"},mustAvoid:["single flat albedo per material","uniform roughness","albedo texture reused as roughness/height/normal/AO","single-frequency random noise","plastic-looking smooth bark, stone, cloth, foliage, or aged material","local color/detail described only in prose without material masks","claiming exact PBR recovery when confidence is below the target threshold"]},lightingPass:{requiredTerms:["key light","fill light","rim or environment light","exposure","tone mapping","background","contact shadow"],mustAvoid:["ambient-only lighting","flat value range","missing contact shadow","reference lighting copied without separating material readability"],exposure:1,toneMapping:"ACESFilmic",background:"#e2e4e5",contactShadow:"plane shadow under feet"},screenshotReview:["Compare albedo palette and local color zones.","Compare roughness/normal/bump response under light.","Compare cavity dirt, edge wear, stains, moss, scratches, or other local masks.","Compare key/fill/rim structure, exposure, tone mapping, background, and contact shadows.","Capture a neutral-light render to verify material readability without reference lighting.","Capture a grazing-light close-up to expose flat normals, uniform roughness, tiling, and plastic highlights.","Capture a reference-matched render from the same camera framing as the source."]},e.userData.actionReadiness={note:"Use root.userData.sculptRuntime.nodes for transforms, sockets for attachments, colliders for physics proxies, and destructionGroups for breakable sets."},e}var zl=["zh-Hant","zh-Hans","ja","en"];var co={brand:["\u6750\u6599\u8207\u6280\u8853","\u6750\u6599\u4E0E\u6280\u672F","\u30DE\u30C6\u30EA\u30A2\u30EB\uFF06\u30C6\u30AF\u30CE\u30ED\u30B8\u30FC","Materials & Technology"],next:["\u6DF1\u5165\u4E86\u89E3","\u6DF1\u5165\u4E86\u89E3","\u8A73\u3057\u304F\u898B\u308B","Explore the field"],homeTitle:["\u5F9E\u6750\u6599\uFF0C\u8D70\u5411\u7CBE\u5EA6\u3002","\u4ECE\u6750\u6599\uFF0C\u8D70\u5411\u7CBE\u5EA6\u3002","\u7D20\u6750\u304B\u3089\u3001\u7CBE\u5EA6\u3078\u3002","From matter. To precision."],homeDesc:["\u9023\u7D50\u534A\u5C0E\u9AD4\u6750\u6599\u3001\u6AA2\u6E2C\u8A2D\u5099\u8207\u592A\u967D\u80FD\u61C9\u7528\u3002\u4EE5\u7522\u54C1\u92B7\u552E\u8207\u6280\u8853\u670D\u52D9\uFF0C\u8B93\u6BCF\u4E00\u500B\u9700\u6C42\u6709\u6E05\u695A\u7684\u4E0B\u4E00\u6B65\u3002","\u8FDE\u63A5\u534A\u5BFC\u4F53\u6750\u6599\u3001\u68C0\u6D4B\u8BBE\u5907\u4E0E\u592A\u9633\u80FD\u5E94\u7528\u3002\u4EE5\u4EA7\u54C1\u9500\u552E\u4E0E\u6280\u672F\u670D\u52A1\uFF0C\u8BA9\u6BCF\u4E00\u4E2A\u9700\u6C42\u6709\u6E05\u695A\u7684\u4E0B\u4E00\u6B65\u3002","\u534A\u5C0E\u4F53\u6750\u6599\u3001\u691C\u67FB\u88C5\u7F6E\u3001\u592A\u967D\u5149\u306E\u5FDC\u7528\u3092\u3064\u306A\u3050\u3002\u88FD\u54C1\u8CA9\u58F2\u3068\u6280\u8853\u30B5\u30FC\u30D3\u30B9\u3092\u901A\u3058\u3066\u3001\u6B21\u306E\u4E00\u6B69\u3092\u660E\u78BA\u306B\u3057\u307E\u3059\u3002","Connecting semiconductor materials, inspection equipment and solar applications through product sales and technical services."],enterLab:["\u63A2\u7D22 3D \u5BE6\u9A57\u5BA4","\u63A2\u7D22 3D \u5B9E\u9A8C\u5BA4","3D \u30E9\u30DC\u3092\u4F53\u9A13","Enter the 3D lab"],explore:["\u63A2\u7D22\u5C08\u696D\u9818\u57DF","\u63A2\u7D22\u4E13\u4E1A\u9886\u57DF","\u4E8B\u696D\u9818\u57DF\u3092\u898B\u308B","Explore our fields"],approach:["\u7406\u89E3\u6750\u6599\uFF0C\u624D\u80FD\u770B\u898B\u66F4\u591A\u3002","\u7406\u89E3\u6750\u6599\uFF0C\u624D\u80FD\u770B\u89C1\u66F4\u591A\u3002","\u7D20\u6750\u3092\u77E5\u308A\u3001\u53EF\u80FD\u6027\u3092\u5E83\u3052\u308B\u3002","Understand the material. See what is possible."],intro:["\u5F9E\u6750\u6599\u7279\u6027\u5230\u91CF\u6E2C\u65B9\u6CD5\uFF0C\u5F9E\u6A23\u54C1\u689D\u4EF6\u5230\u8A2D\u5099\u9078\u578B\u3002\u6211\u5011\u4EE5\u61C9\u7528\u9700\u6C42\u70BA\u8D77\u9EDE\uFF0C\u4E32\u9023\u7522\u54C1\u8207\u6280\u8853\u8A0E\u8AD6\u3002","\u4ECE\u6750\u6599\u7279\u6027\u5230\u91CF\u6D4B\u65B9\u6CD5\uFF0C\u4ECE\u6837\u54C1\u6761\u4EF6\u5230\u8BBE\u5907\u9009\u578B\u3002\u6211\u4EEC\u4EE5\u5E94\u7528\u9700\u6C42\u4E3A\u8D77\u70B9\uFF0C\u4E32\u8054\u4EA7\u54C1\u4E0E\u6280\u672F\u8BA8\u8BBA\u3002","\u6750\u6599\u7279\u6027\u304B\u3089\u6E2C\u5B9A\u65B9\u6CD5\u3001\u8A66\u6599\u6761\u4EF6\u304B\u3089\u88C5\u7F6E\u9078\u5B9A\u307E\u3067\u3002\u7528\u9014\u306E\u7406\u89E3\u3092\u8D77\u70B9\u306B\u3001\u88FD\u54C1\u3068\u6280\u8853\u306E\u691C\u8A0E\u3092\u9032\u3081\u307E\u3059\u3002","From material properties to measurement methods, and from sample conditions to equipment selection. Application needs guide every technical discussion."],materialsTitle:["\u6BCF\u4E00\u7A2E\u6750\u6599\uFF0C\u90FD\u6709\u95DC\u9375\u7D30\u7BC0\u3002","\u6BCF\u4E00\u79CD\u6750\u6599\uFF0C\u90FD\u6709\u5173\u952E\u7EC6\u8282\u3002","\u6750\u6599\u3054\u3068\u306B\u3001\u898B\u308B\u3079\u304D\u7D30\u90E8\u304C\u3042\u308B\u3002","Every material. Every detail matters."],materialsDesc:["\u6676\u5713\u3001\u88FD\u7A0B\u5316\u5B78\u54C1\u3001CMP \u8207\u9AD8\u7D14\u56FA\u9AD4\u6750\u6599\u3002\u5F9E\u54C1\u8CEA\u95DC\u6CE8\u9EDE\u958B\u59CB\uFF0C\u5EFA\u7ACB\u9078\u6750\u8207\u9A57\u8B49\u7684\u5171\u540C\u8A9E\u8A00\u3002","\u6676\u5706\u3001\u5236\u7A0B\u5316\u5B66\u54C1\u3001CMP \u4E0E\u9AD8\u7EAF\u56FA\u4F53\u6750\u6599\u3002\u4ECE\u54C1\u8D28\u5173\u6CE8\u70B9\u5F00\u59CB\uFF0C\u5EFA\u7ACB\u9009\u6750\u4E0E\u9A8C\u8BC1\u7684\u5171\u540C\u8BED\u8A00\u3002","\u30A6\u30A8\u30CF\u30FC\u3001\u30D7\u30ED\u30BB\u30B9\u85AC\u54C1\u3001CMP\u3001\u9AD8\u7D14\u5EA6\u56FA\u4F53\u6750\u6599\u3002\u54C1\u8CEA\u306E\u7740\u773C\u70B9\u304B\u3089\u3001\u6750\u6599\u9078\u5B9A\u3068\u691C\u8A3C\u306E\u5171\u901A\u8A8D\u8B58\u3092\u7BC9\u304D\u307E\u3059\u3002","Wafers, process chemicals, CMP and high-purity solids. Start with quality priorities to define material selection and validation."],equipmentTitle:["\u5148\u5B9A\u7FA9\u554F\u984C\uFF0C\u518D\u9078\u64C7\u8A2D\u5099\u3002","\u5148\u5B9A\u4E49\u95EE\u9898\uFF0C\u518D\u9009\u62E9\u8BBE\u5907\u3002","\u6E2C\u308B\u76EE\u7684\u304B\u3089\u3001\u88C5\u7F6E\u3092\u9078\u3076\u3002","Define the question. Then the instrument."],equipmentDesc:["\u6210\u5206\u3001\u7D14\u5EA6\u3001\u8868\u9762\u8207\u5E7E\u4F55\u5C3A\u5BF8\u3002\u5C07\u6AA2\u6E2C\u76EE\u6A19\u8F49\u70BA\u53EF\u8A0E\u8AD6\u7684\u65B9\u6CD5\u3001\u6A23\u54C1\u689D\u4EF6\u8207\u8A2D\u5099\u898F\u683C\u3002","\u6210\u5206\u3001\u7EAF\u5EA6\u3001\u8868\u9762\u4E0E\u51E0\u4F55\u5C3A\u5BF8\u3002\u5C06\u68C0\u6D4B\u76EE\u6807\u8F6C\u4E3A\u53EF\u8BA8\u8BBA\u7684\u65B9\u6CD5\u3001\u6837\u54C1\u6761\u4EF6\u4E0E\u8BBE\u5907\u89C4\u683C\u3002","\u7D44\u6210\u3001\u7D14\u5EA6\u3001\u8868\u9762\u3001\u5BF8\u6CD5\u3002\u691C\u67FB\u76EE\u7684\u3092\u3001\u6E2C\u5B9A\u65B9\u6CD5\u30FB\u8A66\u6599\u6761\u4EF6\u30FB\u88C5\u7F6E\u4ED5\u69D8\u3078\u5177\u4F53\u5316\u3057\u307E\u3059\u3002","Composition, purity, surfaces and geometry. Translate measurement goals into methods, sample requirements and equipment specifications."],solarTitle:["\u8B93\u6750\u6599\uFF0C\u9023\u7D50\u80FD\u6E90\u61C9\u7528\u3002","\u8BA9\u6750\u6599\uFF0C\u8FDE\u63A5\u80FD\u6E90\u5E94\u7528\u3002","\u7D20\u6750\u3068\u3001\u30A8\u30CD\u30EB\u30AE\u30FC\u3092\u3064\u306A\u3050\u3002","Materials meet energy."],solarDesc:["\u592A\u967D\u80FD\u76F8\u95DC\u7522\u54C1\u8207\u6280\u8853\u670D\u52D9\uFF0C\u5F9E\u6750\u6599\u8207\u8A2D\u5099\u7684\u9700\u6C42\u51FA\u767C\uFF0C\u8A0E\u8AD6\u61C9\u7528\u689D\u4EF6\u3001\u54C1\u8CEA\u8A55\u4F30\u53CA\u5F8C\u7E8C\u652F\u63F4\u3002","\u592A\u9633\u80FD\u76F8\u5173\u4EA7\u54C1\u4E0E\u6280\u672F\u670D\u52A1\uFF0C\u4ECE\u6750\u6599\u4E0E\u8BBE\u5907\u7684\u9700\u6C42\u51FA\u53D1\uFF0C\u8BA8\u8BBA\u5E94\u7528\u6761\u4EF6\u3001\u54C1\u8D28\u8BC4\u4F30\u53CA\u540E\u7EED\u652F\u6301\u3002","\u592A\u967D\u5149\u95A2\u9023\u306E\u88FD\u54C1\u3068\u6280\u8853\u30B5\u30FC\u30D3\u30B9\u3002\u6750\u6599\u30FB\u88C5\u7F6E\u306E\u8981\u4EF6\u304B\u3089\u3001\u7528\u9014\u6761\u4EF6\u3001\u54C1\u8CEA\u8A55\u4FA1\u3001\u30B5\u30DD\u30FC\u30C8\u3092\u691C\u8A0E\u3057\u307E\u3059\u3002","Solar-related products and technical services, guided by material and equipment needs, application conditions and quality evaluation."],servicesTitle:["\u628A\u6280\u8853\u9700\u6C42\uFF0C\u8B8A\u6210\u6E05\u695A\u7684\u8DEF\u5F91\u3002","\u628A\u6280\u672F\u9700\u6C42\uFF0C\u53D8\u6210\u6E05\u695A\u7684\u8DEF\u5F84\u3002","\u6280\u8853\u8981\u4EF6\u3092\u3001\u660E\u78BA\u306A\u9053\u7B4B\u3078\u3002","A clear path from requirement to evaluation."],servicesDesc:["\u9700\u6C42\u91D0\u6E05\u3001\u65B9\u6CD5\u8A0E\u8AD6\u3001\u9078\u578B\u8A55\u4F30\u8207\u9A57\u8B49\u898F\u5283\u3002\u8B93\u6750\u6599\u3001\u6AA2\u6E2C\u8207\u4F7F\u7528\u74B0\u5883\u4E4B\u9593\u7684\u689D\u4EF6\u76F8\u4E92\u5C0D\u61C9\u3002","\u9700\u6C42\u5398\u6E05\u3001\u65B9\u6CD5\u8BA8\u8BBA\u3001\u9009\u578B\u8BC4\u4F30\u4E0E\u9A8C\u8BC1\u89C4\u5212\u3002\u8BA9\u6750\u6599\u3001\u68C0\u6D4B\u4E0E\u4F7F\u7528\u73AF\u5883\u4E4B\u95F4\u7684\u6761\u4EF6\u76F8\u4E92\u5BF9\u5E94\u3002","\u8981\u4EF6\u6574\u7406\u3001\u624B\u6CD5\u306E\u691C\u8A0E\u3001\u6A5F\u7A2E\u9078\u5B9A\u3001\u691C\u8A3C\u8A08\u753B\u3002\u6750\u6599\u30FB\u691C\u67FB\u30FB\u4F7F\u7528\u74B0\u5883\u306E\u6761\u4EF6\u3092\u3059\u308A\u5408\u308F\u305B\u307E\u3059\u3002","Define requirements, discuss methods, assess equipment and plan validation. Align materials, measurements and operating conditions."],labTitle:["\u4E0D\u53EA\u89C0\u770B\u3002\u89AA\u624B\u62C6\u89E3\u3002","\u4E0D\u53EA\u89C2\u770B\u3002\u4EB2\u624B\u62C6\u89E3\u3002","\u898B\u308B\u3060\u3051\u3067\u306A\u304F\u3001\u5206\u89E3\u3057\u3066\u7406\u89E3\u3059\u308B\u3002","Go beyond the surface. Take it apart."],labDesc:["\u65CB\u8F49\u89C0\u5BDF\u3001\u9078\u53D6\u90E8\u4EF6\u3001\u5C55\u958B\u7D50\u69CB\u3002\u900F\u904E\u5149\u5B78\u6AA2\u6E2C\u8A2D\u5099\u6982\u5FF5\u6A21\u578B\uFF0C\u7406\u89E3\u91CF\u6E2C\u7CFB\u7D71\u7684\u7D44\u6210\u3002","\u65CB\u8F6C\u89C2\u5BDF\u3001\u9009\u53D6\u90E8\u4EF6\u3001\u5C55\u5F00\u7ED3\u6784\u3002\u901A\u8FC7\u5149\u5B66\u68C0\u6D4B\u8BBE\u5907\u6982\u5FF5\u6A21\u578B\uFF0C\u7406\u89E3\u91CF\u6D4B\u7CFB\u7EDF\u7684\u7EC4\u6210\u3002","\u56DE\u8EE2\u3001\u90E8\u54C1\u9078\u629E\u3001\u5206\u89E3\u8868\u793A\u3002\u5149\u5B66\u691C\u67FB\u88C5\u7F6E\u306E\u30B3\u30F3\u30BB\u30D7\u30C8\u30E2\u30C7\u30EB\u3067\u3001\u6E2C\u5B9A\u30B7\u30B9\u30C6\u30E0\u306E\u69CB\u6210\u3092\u7406\u89E3\u3057\u307E\u3059\u3002","Rotate, select and disassemble. Explore the structure of an optical inspection system through an interactive concept model."],concept:["AI \u6982\u5FF5\u5F71\u50CF","AI \u6982\u5FF5\u5F71\u50CF","AI \u30B3\u30F3\u30BB\u30D7\u30C8\u753B\u50CF","AI concept imagery"],modelNote:["\u4F9D\u6982\u5FF5\u53C3\u8003\u5716\u88FD\u4F5C\uFF1B\u80CC\u9762\u8207\u5167\u90E8\u70BA\u793A\u610F\u63A8\u5B9A\uFF0C\u4E0D\u4EE3\u8868\u5BE6\u969B\u5546\u54C1\u6216\u5DE5\u7A0B\u5C3A\u5BF8\u3002","\u4F9D\u6982\u5FF5\u53C2\u8003\u56FE\u5236\u4F5C\uFF1B\u80CC\u9762\u4E0E\u5185\u90E8\u4E3A\u793A\u610F\u63A8\u5B9A\uFF0C\u4E0D\u4EE3\u8868\u5B9E\u9645\u5546\u54C1\u6216\u5DE5\u7A0B\u5C3A\u5BF8\u3002","\u53C2\u8003\u753B\u50CF\u306B\u57FA\u3065\u304F\u6982\u5FF5\u30E2\u30C7\u30EB\u3067\u3059\u3002\u80CC\u9762\u30FB\u5185\u90E8\u306F\u63A8\u5B9A\u3067\u3042\u308A\u3001\u5B9F\u88FD\u54C1\u3084\u8A2D\u8A08\u5BF8\u6CD5\u3092\u793A\u3057\u307E\u305B\u3093\u3002","Built from a concept reference. Hidden surfaces are inferred; this is not an actual product or engineering model."],scope:["\u672C\u9801\u70BA\u61C9\u7528\u8207\u6280\u8853\u8A0E\u8AD6\u7BC4\u570D\uFF0C\u7522\u54C1\u578B\u865F\u3001\u4F9B\u61C9\u9805\u76EE\u8207\u670D\u52D9\u5167\u5BB9\u4F9D\u500B\u5225\u9700\u6C42\u78BA\u8A8D\u3002","\u672C\u9875\u4E3A\u5E94\u7528\u4E0E\u6280\u672F\u8BA8\u8BBA\u8303\u56F4\uFF0C\u4EA7\u54C1\u578B\u53F7\u3001\u4F9B\u5E94\u9879\u76EE\u4E0E\u670D\u52A1\u5185\u5BB9\u4F9D\u4E2A\u522B\u9700\u6C42\u786E\u8BA4\u3002","\u63B2\u8F09\u5185\u5BB9\u306F\u7528\u9014\u30FB\u6280\u8853\u691C\u8A0E\u306E\u7BC4\u56F2\u3067\u3059\u3002\u88FD\u54C1\u578B\u756A\u3001\u4F9B\u7D66\u7BC4\u56F2\u3001\u30B5\u30FC\u30D3\u30B9\u5185\u5BB9\u306F\u500B\u5225\u306B\u78BA\u8A8D\u3057\u307E\u3059\u3002","Application and technical discussion areas. Product models, supply scope and services are confirmed for each requirement."],materialGroups:["\u6750\u6599\u985E\u5225\u8207\u54C1\u8CEA\u95DC\u6CE8\u9EDE","\u6750\u6599\u7C7B\u522B\u4E0E\u54C1\u8D28\u5173\u6CE8\u70B9","\u6750\u6599\u3068\u54C1\u8CEA\u306E\u7740\u773C\u70B9","Materials & quality priorities"],methodGroups:["\u5F9E\u6AA2\u6E2C\u76EE\u6A19\uFF0C\u5C0D\u61C9\u5206\u6790\u65B9\u6CD5","\u4ECE\u68C0\u6D4B\u76EE\u6807\uFF0C\u5BF9\u5E94\u5206\u6790\u65B9\u6CD5","\u691C\u67FB\u76EE\u7684\u3068\u5206\u6790\u624B\u6CD5","Match the method to the question"],methodNote:["\u4E0B\u5217\u70BA\u65B9\u6CD5\u7BC4\u4F8B\uFF1B\u91CF\u6E2C\u80FD\u529B\u53D6\u6C7A\u65BC\u6A23\u54C1\u57FA\u8CEA\u3001\u524D\u8655\u7406\u8207\u65B9\u6CD5\u9A57\u8B49\u3002","\u4E0B\u5217\u4E3A\u65B9\u6CD5\u8303\u4F8B\uFF1B\u91CF\u6D4B\u80FD\u529B\u53D6\u51B3\u4E8E\u6837\u54C1\u57FA\u8D28\u3001\u524D\u5904\u7406\u4E0E\u65B9\u6CD5\u9A8C\u8BC1\u3002","\u4EE5\u4E0B\u306F\u624B\u6CD5\u4F8B\u3067\u3059\u3002\u6E2C\u5B9A\u80FD\u529B\u306F\u8A66\u6599\u30DE\u30C8\u30EA\u30C3\u30AF\u30B9\u3001\u524D\u51E6\u7406\u3001\u624B\u6CD5\u306E\u691C\u8A3C\u306B\u4F9D\u5B58\u3057\u307E\u3059\u3002","Illustrative methods. Measurement capability depends on the sample matrix, preparation and method validation."],selection:["\u9078\u578B\u524D\uFF0C\u5148\u91D0\u6E05\u56DB\u4EF6\u4E8B","\u9009\u578B\u524D\uFF0C\u5148\u5398\u6E05\u56DB\u4EF6\u4E8B","\u9078\u5B9A\u524D\u306B\u78BA\u8A8D\u3059\u308B4\u3064\u306E\u3053\u3068","Four questions before selection"],pathway:["\u5F9E\u6536\u6599\u5230\u653E\u884C\u7684\u54C1\u8CEA\u8DEF\u5F91","\u4ECE\u6536\u6599\u5230\u653E\u884C\u7684\u54C1\u8D28\u8DEF\u5F84","\u53D7\u5165\u304B\u3089\u51FA\u5EAB\u5224\u5B9A\u307E\u3067","The incoming-quality pathway"],serviceFlow:["\u628A\u6BCF\u4E00\u6B65\u7684\u689D\u4EF6\u8AAA\u6E05\u695A","\u628A\u6BCF\u4E00\u6B65\u7684\u6761\u4EF6\u8BF4\u6E05\u695A","\u5404\u6BB5\u968E\u306E\u6761\u4EF6\u3092\u660E\u78BA\u306B","Make every step explicit"],related:["\u7E7C\u7E8C\u63A2\u7D22","\u7EE7\u7EED\u63A2\u7D22","\u3055\u3089\u306B\u8A73\u3057\u304F","Continue exploring"],footer:["\u534A\u5C0E\u9AD4\u6750\u6599 / \u6AA2\u6E2C\u8A2D\u5099 / \u592A\u967D\u80FD","\u534A\u5BFC\u4F53\u6750\u6599 / \u68C0\u6D4B\u8BBE\u5907 / \u592A\u9633\u80FD","\u534A\u5C0E\u4F53\u6750\u6599 / \u691C\u67FB\u88C5\u7F6E / \u592A\u967D\u5149","Semiconductor materials / Inspection / Solar"],footerNote:["\u7522\u54C1\u92B7\u552E\u8207\u6280\u8853\u670D\u52D9\u3002\u5F71\u50CF\u8207\u6A21\u578B\u70BA\u6982\u5FF5\u5C55\u793A\u3002","\u4EA7\u54C1\u9500\u552E\u4E0E\u6280\u672F\u670D\u52A1\u3002\u5F71\u50CF\u4E0E\u6A21\u578B\u4E3A\u6982\u5FF5\u5C55\u793A\u3002","\u88FD\u54C1\u8CA9\u58F2\u3068\u6280\u8853\u30B5\u30FC\u30D3\u30B9\u3002\u753B\u50CF\u30FB\u30E2\u30C7\u30EB\u306F\u30B3\u30F3\u30BB\u30D7\u30C8\u3067\u3059\u3002","Product sales & technical services. Images and models are conceptual."],top:["\u56DE\u5230\u9802\u90E8","\u56DE\u5230\u9876\u90E8","\u30DA\u30FC\u30B8\u4E0A\u90E8\u3078","Back to top"],pause:["\u66AB\u505C\u52D5\u614B","\u6682\u505C\u52A8\u6001","\u52D5\u304D\u3092\u505C\u6B62","Pause motion"],play:["\u64AD\u653E\u52D5\u614B","\u64AD\u653E\u52A8\u6001","\u52D5\u304D\u3092\u518D\u958B","Resume motion"],menu:["\u9078\u55AE","\u83DC\u5355","\u30E1\u30CB\u30E5\u30FC","Menu"],skip:["\u8DF3\u81F3\u4E3B\u8981\u5167\u5BB9","\u8DF3\u81F3\u4E3B\u8981\u5185\u5BB9","\u672C\u6587\u3078\u79FB\u52D5","Skip to content"],briefTitle:["\u5F9E\u4E00\u4EFD\u6E05\u695A\u7684\u9700\u6C42\u958B\u59CB\u3002","\u4ECE\u4E00\u4EFD\u6E05\u695A\u7684\u9700\u6C42\u5F00\u59CB\u3002","\u660E\u78BA\u306A\u8981\u4EF6\u304B\u3089\u59CB\u3081\u308B\u3002","Start with a clear brief."],briefDesc:["\u6574\u7406\u6750\u6599\u7A2E\u985E\u3001\u6A23\u54C1\u578B\u614B\u3001\u95DC\u6CE8\u6307\u6A19\u8207\u4F7F\u7528\u689D\u4EF6\uFF0C\u8B93\u5F8C\u7E8C\u7684\u7522\u54C1\u8207\u6280\u8853\u8A0E\u8AD6\u66F4\u6709\u6548\u7387\u3002","\u6574\u7406\u6750\u6599\u79CD\u7C7B\u3001\u6837\u54C1\u5F62\u6001\u3001\u5173\u6CE8\u6307\u6807\u4E0E\u4F7F\u7528\u6761\u4EF6\uFF0C\u8BA9\u540E\u7EED\u7684\u4EA7\u54C1\u4E0E\u6280\u672F\u8BA8\u8BBA\u66F4\u6709\u6548\u7387\u3002","\u6750\u6599\u3001\u8A66\u6599\u5F62\u614B\u3001\u8A55\u4FA1\u6307\u6A19\u3001\u4F7F\u7528\u6761\u4EF6\u3092\u6574\u7406\u3057\u3001\u88FD\u54C1\u30FB\u6280\u8853\u691C\u8A0E\u3092\u52B9\u7387\u3088\u304F\u9032\u3081\u307E\u3059\u3002","Bring together the material, sample form, measurement priorities and operating conditions for a focused technical discussion."],download:["\u4E0B\u8F09\u9700\u6C42\u6E05\u55AE","\u4E0B\u8F7D\u9700\u6C42\u6E05\u5355","\u8981\u4EF6\u30C1\u30A7\u30C3\u30AF\u30EA\u30B9\u30C8","Download a requirements checklist"],ceramicTitle:["\u9676\u74F7\u8207\u77F3\u82F1\uFF1A\u5F9E\u5E7E\u4F55\u5230\u8868\u9762","\u9676\u74F7\u4E0E\u77F3\u82F1\uFF1A\u4ECE\u51E0\u4F55\u5230\u8868\u9762","\u30BB\u30E9\u30DF\u30C3\u30AF\u30B9\u30FB\u77F3\u82F1\uFF1A\u5F62\u72B6\u3068\u8868\u9762","Ceramics & quartz: geometry to surface"],ceramicDesc:["\u95DC\u6CE8\u5C3A\u5BF8\u3001\u516C\u5DEE\u3001\u8868\u9762\u6F54\u6DE8\u5EA6\u8207\u4F7F\u7528\u74B0\u5883\uFF1B\u6750\u6599\u7684\u9078\u64C7\u9700\u8981\u540C\u6642\u8003\u91CF\u61C9\u7528\u689D\u4EF6\u8207\u9A57\u8B49\u65B9\u5F0F\u3002","\u5173\u6CE8\u5C3A\u5BF8\u3001\u516C\u5DEE\u3001\u8868\u9762\u6D01\u51C0\u5EA6\u4E0E\u4F7F\u7528\u73AF\u5883\uFF1B\u6750\u6599\u7684\u9009\u62E9\u9700\u8981\u540C\u65F6\u8003\u91CF\u5E94\u7528\u6761\u4EF6\u4E0E\u9A8C\u8BC1\u65B9\u5F0F\u3002","\u5BF8\u6CD5\u3001\u516C\u5DEE\u3001\u8868\u9762\u6E05\u6D44\u5EA6\u3001\u4F7F\u7528\u74B0\u5883\u306B\u7740\u76EE\u3002\u7528\u9014\u6761\u4EF6\u3068\u691C\u8A3C\u65B9\u6CD5\u3092\u5408\u308F\u305B\u3066\u6750\u6599\u3092\u691C\u8A0E\u3057\u307E\u3059\u3002","Consider dimensions, tolerances, surface cleanliness and operating conditions together with a suitable validation method."],solarFocus:["\u805A\u7126\u61C9\u7528\u9700\u6C42","\u805A\u7126\u5E94\u7528\u9700\u6C42","\u7528\u9014\u8981\u4EF6\u306B\u7740\u76EE","Focus on the application"],reference:["\u53C3\u8003\u5F71\u50CF","\u53C2\u8003\u5F71\u50CF","\u53C2\u8003\u753B\u50CF","Reference image"],controls:["\u64CD\u4F5C\u6307\u5357","\u64CD\u4F5C\u6307\u5357","\u64CD\u4F5C\u30AC\u30A4\u30C9","Interaction guide"],drag:["\u62D6\u66F3\u65CB\u8F49 \xB7 \u6EFE\u8F2A\u7E2E\u653E \xB7 \u9EDE\u9078\u90E8\u4EF6","\u62D6\u66F3\u65CB\u8F6C \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u70B9\u9009\u90E8\u4EF6","\u30C9\u30E9\u30C3\u30B0\u3067\u56DE\u8EE2\u30FB\u30DB\u30A4\u30FC\u30EB\u3067\u62E1\u5927\u30FB\u90E8\u54C1\u3092\u9078\u629E","Drag to rotate \xB7 Scroll to zoom \xB7 Select a part"],explode:["\u62C6\u89E3\u7A0B\u5EA6","\u62C6\u89E3\u7A0B\u5EA6","\u5206\u89E3\u91CF","Exploded view"],assemble:["\u7D44\u88DD","\u7EC4\u88C5","\u7D44\u7ACB","Assembled"],separated:["\u5C55\u958B","\u5C55\u5F00","\u5206\u89E3","Exploded"],reset:["\u5168\u90E8\u5FA9\u4F4D","\u5168\u90E8\u590D\u4F4D","\u30EA\u30BB\u30C3\u30C8","Reset all"],isolate:["\u53EA\u770B\u6240\u9078","\u53EA\u770B\u6240\u9009","\u9078\u629E\u90E8\u54C1\u306E\u307F","Isolate part"],showAll:["\u986F\u793A\u5168\u90E8","\u663E\u793A\u5168\u90E8","\u3059\u3079\u3066\u8868\u793A","Show all"],front:["\u6B63\u9762","\u6B63\u9762","\u6B63\u9762","Front"],side:["\u5074\u9762","\u4FA7\u9762","\u5074\u9762","Side"],rear:["\u80CC\u9762","\u80CC\u9762","\u80CC\u9762","Rear"],perspective:["\u900F\u8996","\u900F\u89C6","\u659C\u3081","Perspective"],parts:["\u90E8\u4EF6\u76EE\u9304","\u90E8\u4EF6\u76EE\u5F55","\u90E8\u54C1\u4E00\u89A7","Component index"],selectPart:["\u9078\u53D6\u4E00\u500B\u90E8\u4EF6\uFF0C\u67E5\u770B\u5176\u4F5C\u7528\u3002","\u9009\u53D6\u4E00\u4E2A\u90E8\u4EF6\uFF0C\u67E5\u770B\u5176\u4F5C\u7528\u3002","\u90E8\u54C1\u3092\u9078\u3093\u3067\u5F79\u5272\u3092\u78BA\u8A8D\u3002","Select a component to explore its role."],fallback:["\u76EE\u524D\u7121\u6CD5\u8F09\u5165 3D\uFF0C\u8ACB\u67E5\u770B\u53C3\u8003\u5F71\u50CF\u6216\u4F7F\u7528\u652F\u63F4 WebGL \u7684\u700F\u89BD\u5668\u3002","\u76EE\u524D\u65E0\u6CD5\u8F7D\u5165 3D\uFF0C\u8BF7\u67E5\u770B\u53C2\u8003\u5F71\u50CF\u6216\u4F7F\u7528\u652F\u6301 WebGL \u7684\u6D4F\u89C8\u5668\u3002","3D \u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3002\u53C2\u8003\u753B\u50CF\u3092\u3054\u89A7\u3044\u305F\u3060\u304F\u304B\u3001WebGL \u5BFE\u5FDC\u30D6\u30E9\u30A6\u30B6\u30FC\u3092\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002","3D could not load. View the reference image or try a WebGL-compatible browser."],loading:["\u6B63\u5728\u6E96\u5099 3D \u6A21\u578B\u2026","\u6B63\u5728\u51C6\u5907 3D \u6A21\u578B\u2026","3D \u30E2\u30C7\u30EB\u3092\u6E96\u5099\u4E2D\u2026","Preparing the 3D model\u2026"]};var ho={chassis:[["\u5E95\u90E8\u6A5F\u5EA7","\u5E95\u90E8\u673A\u5EA7","\u30D9\u30FC\u30B9\u30B7\u30E3\u30FC\u30B7","Lower chassis"],["\u627F\u6258\u6574\u6A5F\u7684\u5E95\u90E8\u7D50\u69CB\uFF0C\u63D0\u4F9B\u5404\u6A21\u7D44\u7684\u5B89\u88DD\u57FA\u790E\u3002","\u627F\u6258\u6574\u673A\u7684\u5E95\u90E8\u7ED3\u6784\uFF0C\u63D0\u4F9B\u5404\u6A21\u5757\u7684\u5B89\u88C5\u57FA\u7840\u3002","\u88C5\u7F6E\u3092\u652F\u3048\u3001\u5404\u30E2\u30B8\u30E5\u30FC\u30EB\u306E\u53D6\u4ED8\u57FA\u6E96\u3068\u306A\u308B\u69CB\u9020\u3002","The structural foundation supporting the instrument and its modules."]],base:[["\u5E73\u53F0\u57FA\u5EA7","\u5E73\u53F0\u57FA\u5EA7","\u30D9\u30FC\u30B9\u30D7\u30EC\u30FC\u30C8","Base platform"],["\u9023\u7D50\u7ACB\u67F1\u8207\u8F09\u53F0\u3002\u7A69\u5B9A\u6027\u8207\u5B89\u88DD\u689D\u4EF6\u662F\u91CF\u6E2C\u7CFB\u7D71\u7684\u91CD\u8981\u8003\u91CF\u3002","\u8FDE\u63A5\u7ACB\u67F1\u4E0E\u8F7D\u53F0\u3002\u7A33\u5B9A\u6027\u4E0E\u5B89\u88C5\u6761\u4EF6\u662F\u91CF\u6D4B\u7CFB\u7EDF\u7684\u91CD\u8981\u8003\u91CF\u3002","\u652F\u67F1\u3068\u30B9\u30C6\u30FC\u30B8\u3092\u63A5\u7D9A\u3002\u5B89\u5B9A\u6027\u3068\u8A2D\u7F6E\u6761\u4EF6\u304C\u6E2C\u5B9A\u7CFB\u306B\u95A2\u308F\u308A\u307E\u3059\u3002","Connects the column and stage; stability and mounting conditions matter to the measurement system."]],stage:[["\u6A23\u54C1\u8F09\u53F0","\u6837\u54C1\u8F7D\u53F0","\u8A66\u6599\u30B9\u30C6\u30FC\u30B8","Specimen stage"],["\u653E\u7F6E\u8207\u56FA\u5B9A\u5F85\u6E2C\u6A23\u54C1\u3002\u6A21\u578B\u4E0A\u7684\u5B54\u4F4D\u70BA\u6982\u5FF5\u793A\u610F\u3002","\u653E\u7F6E\u4E0E\u56FA\u5B9A\u5F85\u6D4B\u6837\u54C1\u3002\u6A21\u578B\u4E0A\u7684\u5B54\u4F4D\u4E3A\u6982\u5FF5\u793A\u610F\u3002","\u8A66\u6599\u3092\u914D\u7F6E\u30FB\u56FA\u5B9A\u3057\u307E\u3059\u3002\u7A74\u914D\u7F6E\u306F\u6982\u5FF5\u8868\u73FE\u3067\u3059\u3002","Holds the specimen. The hole pattern shown is conceptual."]],column:[["\u652F\u6490\u7ACB\u67F1","\u652F\u6491\u7ACB\u67F1","\u652F\u67F1","Support column"],["\u652F\u6490\u5149\u5B78\u982D\uFF0C\u5EFA\u7ACB\u89C0\u6E2C\u65B9\u5411\u8207\u6A23\u54C1\u4E4B\u9593\u7684\u7A7A\u9593\u95DC\u4FC2\u3002","\u652F\u6491\u5149\u5B66\u5934\uFF0C\u5EFA\u7ACB\u89C2\u6D4B\u65B9\u5411\u4E0E\u6837\u54C1\u4E4B\u95F4\u7684\u7A7A\u95F4\u5173\u7CFB\u3002","\u5149\u5B66\u30D8\u30C3\u30C9\u3092\u652F\u6301\u3057\u3001\u8A66\u6599\u3068\u306E\u4F4D\u7F6E\u95A2\u4FC2\u3092\u4FDD\u3061\u307E\u3059\u3002","Supports the optical head and establishes its spatial relationship to the specimen."]],cover:[["\u7ACB\u67F1\u5074\u84CB","\u7ACB\u67F1\u4FA7\u76D6","\u652F\u67F1\u30AB\u30D0\u30FC","Column cover"],["\u5916\u90E8\u9632\u8B77\u8207\u5916\u89C0\u7D50\u69CB\uFF1B\u5167\u90E8\u6A5F\u69CB\u672A\u7531\u55AE\u5F35\u5F71\u50CF\u63A8\u5B9A\u91CD\u5EFA\u3002","\u5916\u90E8\u9632\u62A4\u4E0E\u5916\u89C2\u7ED3\u6784\uFF1B\u5185\u90E8\u673A\u6784\u672A\u7531\u5355\u5F20\u5F71\u50CF\u63A8\u5B9A\u91CD\u5EFA\u3002","\u5916\u88C5\u30AB\u30D0\u30FC\u3067\u3059\u3002\u5358\u4E00\u753B\u50CF\u304B\u3089\u5185\u90E8\u6A5F\u69CB\u306F\u518D\u73FE\u3057\u3066\u3044\u307E\u305B\u3093\u3002","An exterior cover. Internal mechanisms are not reconstructed from the single reference."]],head:[["\u5149\u5B78\u982D\u5916\u6BBC","\u5149\u5B66\u5934\u5916\u58F3","\u5149\u5B66\u30D8\u30C3\u30C9\u7B50\u4F53","Optical head"],["\u627F\u8F09\u5149\u5B78\u89C0\u6E2C\u6A21\u7D44\u7684\u5916\u90E8\u7D50\u69CB\uFF0C\u8207\u7269\u93E1\u5F62\u6210\u89C0\u6E2C\u7D44\u4EF6\u3002","\u627F\u8F7D\u5149\u5B66\u89C2\u6D4B\u6A21\u5757\u7684\u5916\u90E8\u7ED3\u6784\uFF0C\u4E0E\u7269\u955C\u5F62\u6210\u89C2\u6D4B\u7EC4\u4EF6\u3002","\u5149\u5B66\u89B3\u5BDF\u30E2\u30B8\u30E5\u30FC\u30EB\u306E\u5916\u88C5\u3067\u3001\u5BFE\u7269\u30EC\u30F3\u30BA\u3068\u89B3\u5BDF\u90E8\u3092\u69CB\u6210\u3057\u307E\u3059\u3002","The housing for the optical observation module, paired with the objective."]],cap:[["\u5149\u5B78\u982D\u7AEF\u84CB","\u5149\u5B66\u5934\u7AEF\u76D6","\u30D8\u30C3\u30C9\u30A8\u30F3\u30C9\u30AB\u30D0\u30FC","Head end cap"],["\u53EF\u7368\u7ACB\u9078\u53D6\u7684\u5916\u6BBC\u7AEF\u90E8\uFF0C\u793A\u7BC4\u7D44\u4EF6\u7684\u62C6\u88DD\u95DC\u4FC2\u3002","\u53EF\u72EC\u7ACB\u9009\u53D6\u7684\u5916\u58F3\u7AEF\u90E8\uFF0C\u793A\u8303\u7EC4\u4EF6\u7684\u62C6\u88C5\u5173\u7CFB\u3002","\u72EC\u7ACB\u3057\u3066\u9078\u629E\u3067\u304D\u308B\u7AEF\u90E8\u30AB\u30D0\u30FC\u3002\u7D44\u4ED8\u3051\u95A2\u4FC2\u3092\u793A\u3057\u307E\u3059\u3002","A separately selectable end cover illustrating the assembly relationship."]],objective:[["\u7269\u93E1\u7D44\u4EF6","\u7269\u955C\u7EC4\u4EF6","\u5BFE\u7269\u30EC\u30F3\u30BA\u90E8","Objective assembly"],["\u671D\u5411\u6A23\u54C1\u7684\u89C0\u6E2C\u7D44\u4EF6\u3002\u500D\u7387\u3001\u89E3\u6790\u5EA6\u8207\u5DE5\u4F5C\u8DDD\u96E2\u9700\u4F9D\u5BE6\u969B\u9700\u6C42\u9078\u578B\u3002","\u671D\u5411\u6837\u54C1\u7684\u89C2\u6D4B\u7EC4\u4EF6\u3002\u500D\u7387\u3001\u5206\u8FA8\u7387\u4E0E\u5DE5\u4F5C\u8DDD\u79BB\u9700\u4F9D\u5B9E\u9645\u9700\u6C42\u9009\u578B\u3002","\u8A66\u6599\u3092\u89B3\u5BDF\u3059\u308B\u90E8\u5206\u3002\u500D\u7387\u3001\u5206\u89E3\u80FD\u3001\u4F5C\u52D5\u8DDD\u96E2\u306F\u7528\u9014\u306B\u5FDC\u3058\u3066\u9078\u5B9A\u3057\u307E\u3059\u3002","Faces the specimen. Magnification, resolution and working distance require application-specific selection."]]};var Pt=document.getElementById("viewer"),Zh=()=>Math.max(0,zl.indexOf(document.documentElement.lang)),Jh=i=>co[i][Zh()],uo=i=>`<span class="i18n">${i.map((e,t)=>`<span class="locale" lang="${zl[t]}" aria-hidden="${t!==Zh()}">${e}</span>`).join("")}</span>`;try{_0()}catch(i){Pt.classList.add("error"),document.getElementById("viewer-status").textContent=Jh("fallback"),console.error("3D initialization failed",i),document.querySelectorAll(".viewer-toolbar input,.viewer-toolbar button,.part-buttons button,.view-buttons button").forEach(e=>e.disabled=!0)}function _0(){let i=["127.0.0.1","localhost"].includes(location.hostname)&&new URLSearchParams(location.search).has("review");i&&(document.body.classList.add("model-review"),Pt.style.cssText="position:fixed;inset:0;width:100vw;height:100vh;z-index:99");let e=new to({antialias:!0,alpha:!i,preserveDrawingBuffer:i});e.setPixelRatio(Math.min(devicePixelRatio,1.7)),e.setSize(Pt.clientWidth,Pt.clientHeight),e.shadowMap.enabled=!0,e.shadowMap.type=la,e.toneMapping=is,e.toneMappingExposure=1.2,Pt.prepend(e.domElement),e.domElement.setAttribute("aria-label","Optical inspection instrument");let t=new fi;i&&(t.background=new Le("#e0e0e1"));let n=new Dt(34,Pt.clientWidth/Pt.clientHeight,.05,100);n.position.set(5,4.1,6.3);let s=new ro(n,e.domElement);s.target.set(0,1.5,0),s.enableDamping=!0,s.dampingFactor=.09,s.minDistance=3.6,s.maxDistance=12,s.maxPolarAngle=Math.PI*.88,s.enablePan=!1;let r=new bi(e),a=new oo;t.environment=r.fromScene(a,.04).texture,a.dispose(),r.dispose();let o=new $i("#e4f4ff","#18232c",1.4);t.add(o);let l=new gi("#ffffff",3);l.position.set(-3,6,4),l.castShadow=!0,l.shadow.mapSize.set(1024,1024),Object.assign(l.shadow.camera,{left:-4,right:4,top:5,bottom:-4,near:.1,far:18}),l.shadow.bias=-5e-4,t.add(l);let c=new gi("#9bc5e3",2);c.position.set(4,4,-3),t.add(c),i&&(e.toneMappingExposure=.65,l.position.set(-3,10,4),l.shadow.radius=5,l.shadow.camera.far=30,l.shadow.camera.updateProjectionMatrix(),n.position.set(5.7,3.62,4.7),s.target.set(0,1.22,0),s.update());let u=jh({textureSize:64});t.add(u);let f=u.userData.sculptRuntime,h=f.nodes,p=f.meshes,x={silver:["#bfc3c4",.53,.35],dark:["#29333d",.6,.15],black:["#171c20",.45,.3],accent:["#4ca9b1",.28,.5],void:["#05070a",.85,0],hidden:["#ffffff",1,0]};for(let[Y,ie]of Object.entries(p)){let we=ie.userData.sculptComponent,_e=we.dimensions;h[Y].position.set(...we.transform.position),h[Y].name=Y,ie.position.set(0,0,0),ie.quaternion.identity(),ie.scale.set(1,1,1),ie.geometry.dispose(),ie.geometry=we.primitive==="cylinder"?new vt(_e.width/2,_e.width/2,_e.height,48):new ao(_e.width,_e.height,_e.depth,3,Math.min(we.geometryDescriptor.edgeTreatment.bevelRadius,Math.min(_e.width,_e.height,_e.depth)/3));let Ie=ie.material.userData.referenceMaterialId||{chassis:"dark",base:"silver",column:"silver",head:"silver",objective:"black",stage:"black",root:"hidden"}[Y],q=x[Ie]||x.silver,K=i?new Zn({color:"#75838c"}):new pt({color:q[0],roughness:q[1],metalness:q[2]});if(K.userData.referenceMaterialId=Ie,K.userData.referenceEvidence="img2threejs source-pixel PBR report; regional color assignment",ie.material.dispose(),ie.material=K,Y==="root"){ie.visible=!1;continue}ie.userData.part=Y,ie.castShadow=!0,ie.receiveShadow=!0}let b=new Ye(new Kn(200,200),new Ls({opacity:i?.16:.2}));if(b.rotation.x=-Math.PI/2,b.position.y=-.09,b.receiveShadow=!0,t.add(b),i){b.visible=!0;let Y=document.createElement("canvas");Y.width=Y.height=128;let ie=Y.getContext("2d"),we=ie.createRadialGradient(64,64,20,64,64,64);we.addColorStop(0,"rgba(0,0,0,.28)"),we.addColorStop(.65,"rgba(0,0,0,.30)"),we.addColorStop(1,"rgba(0,0,0,0)"),ie.fillStyle=we,ie.fillRect(0,0,128,128);let _e=new Ye(new Kn(4.1,3.7),new Zn({map:new mi(Y),transparent:!0,depthWrite:!1}));_e.rotation.x=-Math.PI/2,_e.position.set(0,-.08,0),t.add(_e)}let m=Object.keys(ho).filter(Y=>h[Y]),d={chassis:[0,-.28,0],base:[0,.1,0],stage:[0,.6,.6],column:[0,.35,-.6],cover:[.8,.35,-1],head:[0,1,.2],cap:[0,1,1.2],objective:[0,.35,1.3]},T=new Map(Object.entries(h).map(([Y,ie])=>[Y,ie.position.clone()])),P=null,v=!1,S=0,w=0,A=null,_=document.getElementById("explode"),M=document.getElementById("explode-value"),C=document.getElementById("isolate-model"),I=document.getElementById("part-details"),U=Y=>{let ie=Y;for(;ie&&ie!==u;){if(m.includes(ie.name))return ie.name;if(ie.userData.part&&m.includes(ie.userData.part))return ie.userData.part;ie=ie.parent}return null};function O(Y){P=Y,v=!1,C.disabled=!Y,document.querySelectorAll("[data-part]").forEach(ie=>ie.setAttribute("aria-pressed",String(ie.dataset.part===Y))),R()}function R(){for(let[Y,ie]of Object.entries(p)){let we=U(ie);ie.visible=Y!=="root"&&(!v||we===P),ie.material.emissive?.set(we===P?"#24595b":"#000000"),ie.material.emissiveIntensity=we===P?.35:0}C.innerHTML=uo(co[v?"showAll":"isolate"]),I.innerHTML=P?`<h3>${uo(ho[P][0])}</h3><p>${uo(ho[P][1])}</p>`:`<p>${uo(co.selectPart)}</p>`}function k(Y){S=Number(Y)/100,M.value=`${Y}%`}_.addEventListener("input",()=>k(_.value)),document.querySelectorAll("[data-part]").forEach(Y=>{Y.disabled=!m.includes(Y.dataset.part),Y.addEventListener("click",()=>O(Y.dataset.part))}),C.addEventListener("click",()=>{v=!v,R()});function G(Y){let ie={perspective:i?[5.7,3.62,4.7]:[5,4.1,6.3],front:[0,2.1,8],side:[8,2.5,0],rear:[0,2.2,-8],left:[-8,2.5,0]};n.position.set(...ie[Y]),s.target.set(0,i?1.22:1.5,0),s.update(),document.querySelectorAll("[data-view]").forEach(we=>we.setAttribute("aria-pressed",String(we.dataset.view===Y)))}document.querySelectorAll("[data-view]").forEach(Y=>Y.addEventListener("click",()=>G(Y.dataset.view))),document.getElementById("reset-model").addEventListener("click",()=>{_.value="0",k(0),O(null),G("perspective")});let W=new Vs,te=new Pe;e.domElement.addEventListener("pointerdown",Y=>A=[Y.clientX,Y.clientY]),e.domElement.addEventListener("pointerup",Y=>{if(!A||Math.hypot(Y.clientX-A[0],Y.clientY-A[1])>6)return;let ie=e.domElement.getBoundingClientRect();te.set((Y.clientX-ie.left)/ie.width*2-1,-(Y.clientY-ie.top)/ie.height*2+1),W.setFromCamera(te,n);let we=W.intersectObject(u,!0).find(_e=>_e.object.visible&&U(_e.object));we&&O(U(we.object))}),Pt.addEventListener("keydown",Y=>{if(Y.target===Pt){if(["ArrowLeft","ArrowRight"].includes(Y.key)){Y.preventDefault();let ie=n.position.clone().sub(s.target).applyAxisAngle(new F(0,1,0),Y.key==="ArrowLeft"?-.15:.15);n.position.copy(s.target).add(ie)}["+","-"].includes(Y.key)&&(Y.preventDefault(),n.position.sub(s.target).multiplyScalar(Y.key==="+"?.9:1.1).add(s.target))}}),new ResizeObserver(()=>{let Y=Pt.clientWidth,ie=Pt.clientHeight;Y&&ie&&(n.aspect=Y/ie,n.updateProjectionMatrix(),e.setSize(Y,ie))}).observe(Pt);let $=matchMedia("(prefers-reduced-motion: reduce)"),Q=!0;if(new IntersectionObserver(([Y])=>Q=Y.isIntersecting,{rootMargin:"150px"}).observe(Pt),e.setAnimationLoop(()=>{if(!(document.hidden||!Q)){w=$.matches?S:Xt.lerp(w,S,.1);for(let Y of m){let ie=d[Y];h[Y].position.copy(T.get(Y)).addScaledVector(new F(...ie),w)}s.update(),e.render(t,n)}}),document.addEventListener("site-language",R),Pt.classList.add("ready"),Pt.dataset.parts=m.length,R(),i){Pt.dataset.review="true";let Y=new URLSearchParams(location.search).get("view");Y&&G(Y),window.MODEL_REVIEW={model:u,scene:t,camera:n,renderer:e,nodes:h,meshes:p,view:G}}e.domElement.addEventListener("webglcontextlost",Y=>{Y.preventDefault(),Pt.classList.remove("ready"),Pt.classList.add("error"),document.getElementById("viewer-status").textContent=Jh("fallback")})}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
