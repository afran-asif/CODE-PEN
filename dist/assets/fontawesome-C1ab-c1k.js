function pr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var je={exports:{}},fe={};var bt;function hr(){if(bt)return fe;bt=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function a(r,n,i){var o=null;if(i!==void 0&&(o=""+i),n.key!==void 0&&(o=""+n.key),"key"in n){i={};for(var l in n)l!=="key"&&(i[l]=n[l])}else i=n;return n=i.ref,{$$typeof:e,type:r,key:o,ref:n!==void 0?n:null,props:i}}return fe.Fragment=t,fe.jsx=a,fe.jsxs=a,fe}var xt;function gr(){return xt||(xt=1,je.exports=hr()),je.exports}var as=gr(),Le={exports:{}},g={};var At;function yr(){if(At)return g;At=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),n=Symbol.for("react.profiler"),i=Symbol.for("react.consumer"),o=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),A=Symbol.iterator;function h(s){return s===null||typeof s!="object"?null:(s=A&&s[A]||s["@@iterator"],typeof s=="function"?s:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,C={};function P(s,c,b){this.props=s,this.context=c,this.refs=C,this.updater=b||k}P.prototype.isReactComponent={},P.prototype.setState=function(s,c){if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,s,c,"setState")},P.prototype.forceUpdate=function(s){this.updater.enqueueForceUpdate(this,s,"forceUpdate")};function F(){}F.prototype=P.prototype;function R(s,c,b){this.props=s,this.context=c,this.refs=C,this.updater=b||k}var L=R.prototype=new F;L.constructor=R,w(L,P.prototype),L.isPureReactComponent=!0;var S=Array.isArray;function X(){}var I={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function le(s,c,b){var y=b.ref;return{$$typeof:e,type:s,key:c,ref:y!==void 0?y:null,props:b}}function fr(s,c){return le(s.type,c,s.props)}function Re(s){return typeof s=="object"&&s!==null&&s.$$typeof===e}function ur(s){var c={"=":"=0",":":"=2"};return"$"+s.replace(/[=:]/g,function(b){return c[b]})}var gt=/\/+/g;function Ne(s,c){return typeof s=="object"&&s!==null&&s.key!=null?ur(""+s.key):c.toString(36)}function cr(s){switch(s.status){case"fulfilled":return s.value;case"rejected":throw s.reason;default:switch(typeof s.status=="string"?s.then(X,X):(s.status="pending",s.then(function(c){s.status==="pending"&&(s.status="fulfilled",s.value=c)},function(c){s.status==="pending"&&(s.status="rejected",s.reason=c)})),s.status){case"fulfilled":return s.value;case"rejected":throw s.reason}}throw s}function te(s,c,b,y,E){var _=typeof s;(_==="undefined"||_==="boolean")&&(s=null);var T=!1;if(s===null)T=!0;else switch(_){case"bigint":case"string":case"number":T=!0;break;case"object":switch(s.$$typeof){case e:case t:T=!0;break;case m:return T=s._init,te(T(s._payload),c,b,y,E)}}if(T)return E=E(s),T=y===""?"."+Ne(s,0):y,S(E)?(b="",T!=null&&(b=T.replace(gt,"$&/")+"/"),te(E,c,b,"",function(vr){return vr})):E!=null&&(Re(E)&&(E=fr(E,b+(E.key==null||s&&s.key===E.key?"":(""+E.key).replace(gt,"$&/")+"/")+T)),c.push(E)),1;T=0;var z=y===""?".":y+":";if(S(s))for(var j=0;j<s.length;j++)y=s[j],_=z+Ne(y,j),T+=te(y,c,b,_,E);else if(j=h(s),typeof j=="function")for(s=j.call(s),j=0;!(y=s.next()).done;)y=y.value,_=z+Ne(y,j++),T+=te(y,c,b,_,E);else if(_==="object"){if(typeof s.then=="function")return te(cr(s),c,b,y,E);throw c=String(s),Error("Objects are not valid as a React child (found: "+(c==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":c)+"). If you meant to render a collection of children, use an array instead.")}return T}function be(s,c,b){if(s==null)return s;var y=[],E=0;return te(s,y,"","",function(_){return c.call(b,_,E++)}),y}function dr(s){if(s._status===-1){var c=s._result;c=c(),c.then(function(b){(s._status===0||s._status===-1)&&(s._status=1,s._result=b)},function(b){(s._status===0||s._status===-1)&&(s._status=2,s._result=b)}),s._status===-1&&(s._status=0,s._result=c)}if(s._status===1)return s._result.default;throw s._result}var yt=typeof reportError=="function"?reportError:function(s){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var c=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof s=="object"&&s!==null&&typeof s.message=="string"?String(s.message):String(s),error:s});if(!window.dispatchEvent(c))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",s);return}console.error(s)},mr={map:be,forEach:function(s,c,b){be(s,function(){c.apply(this,arguments)},b)},count:function(s){var c=0;return be(s,function(){c++}),c},toArray:function(s){return be(s,function(c){return c})||[]},only:function(s){if(!Re(s))throw Error("React.Children.only expected to receive a single React element child.");return s}};return g.Activity=v,g.Children=mr,g.Component=P,g.Fragment=a,g.Profiler=n,g.PureComponent=R,g.StrictMode=r,g.Suspense=f,g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,g.__COMPILER_RUNTIME={__proto__:null,c:function(s){return I.H.useMemoCache(s)}},g.cache=function(s){return function(){return s.apply(null,arguments)}},g.cacheSignal=function(){return null},g.cloneElement=function(s,c,b){if(s==null)throw Error("The argument must be a React element, but you passed "+s+".");var y=w({},s.props),E=s.key;if(c!=null)for(_ in c.key!==void 0&&(E=""+c.key),c)!ee.call(c,_)||_==="key"||_==="__self"||_==="__source"||_==="ref"&&c.ref===void 0||(y[_]=c[_]);var _=arguments.length-2;if(_===1)y.children=b;else if(1<_){for(var T=Array(_),z=0;z<_;z++)T[z]=arguments[z+2];y.children=T}return le(s.type,E,y)},g.createContext=function(s){return s={$$typeof:o,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null},s.Provider=s,s.Consumer={$$typeof:i,_context:s},s},g.createElement=function(s,c,b){var y,E={},_=null;if(c!=null)for(y in c.key!==void 0&&(_=""+c.key),c)ee.call(c,y)&&y!=="key"&&y!=="__self"&&y!=="__source"&&(E[y]=c[y]);var T=arguments.length-2;if(T===1)E.children=b;else if(1<T){for(var z=Array(T),j=0;j<T;j++)z[j]=arguments[j+2];E.children=z}if(s&&s.defaultProps)for(y in T=s.defaultProps,T)E[y]===void 0&&(E[y]=T[y]);return le(s,_,E)},g.createRef=function(){return{current:null}},g.forwardRef=function(s){return{$$typeof:l,render:s}},g.isValidElement=Re,g.lazy=function(s){return{$$typeof:m,_payload:{_status:-1,_result:s},_init:dr}},g.memo=function(s,c){return{$$typeof:d,type:s,compare:c===void 0?null:c}},g.startTransition=function(s){var c=I.T,b={};I.T=b;try{var y=s(),E=I.S;E!==null&&E(b,y),typeof y=="object"&&y!==null&&typeof y.then=="function"&&y.then(X,yt)}catch(_){yt(_)}finally{c!==null&&b.types!==null&&(c.types=b.types),I.T=c}},g.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},g.use=function(s){return I.H.use(s)},g.useActionState=function(s,c,b){return I.H.useActionState(s,c,b)},g.useCallback=function(s,c){return I.H.useCallback(s,c)},g.useContext=function(s){return I.H.useContext(s)},g.useDebugValue=function(){},g.useDeferredValue=function(s,c){return I.H.useDeferredValue(s,c)},g.useEffect=function(s,c){return I.H.useEffect(s,c)},g.useEffectEvent=function(s){return I.H.useEffectEvent(s)},g.useId=function(){return I.H.useId()},g.useImperativeHandle=function(s,c,b){return I.H.useImperativeHandle(s,c,b)},g.useInsertionEffect=function(s,c){return I.H.useInsertionEffect(s,c)},g.useLayoutEffect=function(s,c){return I.H.useLayoutEffect(s,c)},g.useMemo=function(s,c){return I.H.useMemo(s,c)},g.useOptimistic=function(s,c){return I.H.useOptimistic(s,c)},g.useReducer=function(s,c,b){return I.H.useReducer(s,c,b)},g.useRef=function(s){return I.H.useRef(s)},g.useState=function(s){return I.H.useState(s)},g.useSyncExternalStore=function(s,c,b){return I.H.useSyncExternalStore(s,c,b)},g.useTransition=function(){return I.H.useTransition()},g.version="19.2.3",g}var St;function br(){return St||(St=1,Le.exports=yr()),Le.exports}var aa=br();const ra=pr(aa);function He(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}function xr(e){if(Array.isArray(e))return e}function Ar(e){if(Array.isArray(e))return He(e)}function Sr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function wr(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,na(r.key),r)}}function Er(e,t,a){return t&&wr(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Se(e,t){var a=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=it(e))||t){a&&(e=a);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(f){throw f},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,l=!1;return{s:function(){a=a.call(e)},n:function(){var f=a.next();return o=f.done,f},e:function(f){l=!0,i=f},f:function(){try{o||a.return==null||a.return()}finally{if(l)throw i}}}}function x(e,t,a){return(t=na(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function kr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Pr(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var r,n,i,o,l=[],f=!0,d=!1;try{if(i=(a=a.call(e)).next,t===0){if(Object(a)!==a)return;f=!1}else for(;!(f=(r=i.call(a)).done)&&(l.push(r.value),l.length!==t);f=!0);}catch(m){d=!0,n=m}finally{try{if(!f&&a.return!=null&&(o=a.return(),Object(o)!==o))return}finally{if(d)throw n}}return l}}function _r(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ir(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?wt(Object(a),!0).forEach(function(r){x(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):wt(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function Ie(e,t){return xr(e)||Pr(e,t)||it(e,t)||_r()}function D(e){return Ar(e)||kr(e)||it(e)||Ir()}function Cr(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function na(e){var t=Cr(e,"string");return typeof t=="symbol"?t:t+""}function ke(e){"@babel/helpers - typeof";return ke=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ke(e)}function it(e,t){if(e){if(typeof e=="string")return He(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?He(e,t):void 0}}var Et=function(){},ot={},ia={},oa=null,sa={mark:Et,measure:Et};try{typeof window<"u"&&(ot=window),typeof document<"u"&&(ia=document),typeof MutationObserver<"u"&&(oa=MutationObserver),typeof performance<"u"&&(sa=performance)}catch{}var Tr=ot.navigator||{},kt=Tr.userAgent,Pt=kt===void 0?"":kt,q=ot,O=ia,_t=oa,xe=sa;q.document;var B=!!O.documentElement&&!!O.head&&typeof O.addEventListener=="function"&&typeof O.createElement=="function",la=~Pt.indexOf("MSIE")||~Pt.indexOf("Trident/"),Me,Or=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Fr=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,fa={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},Rr={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},ua=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],N="classic",he="duotone",ca="sharp",da="sharp-duotone",ma="chisel",va="etch",pa="jelly",ha="jelly-duo",ga="jelly-fill",ya="notdog",ba="notdog-duo",xa="slab",Aa="slab-press",Sa="thumbprint",wa="utility",Ea="utility-duo",ka="utility-fill",Pa="whiteboard",Nr="Classic",jr="Duotone",Lr="Sharp",Mr="Sharp Duotone",$r="Chisel",Dr="Etch",zr="Jelly",Ur="Jelly Duo",Wr="Jelly Fill",Yr="Notdog",Hr="Notdog Duo",Gr="Slab",Br="Slab Press",Xr="Thumbprint",qr="Utility",Jr="Utility Duo",Vr="Utility Fill",Kr="Whiteboard",_a=[N,he,ca,da,ma,va,pa,ha,ga,ya,ba,xa,Aa,Sa,wa,Ea,ka,Pa];Me={},x(x(x(x(x(x(x(x(x(x(Me,N,Nr),he,jr),ca,Lr),da,Mr),ma,$r),va,Dr),pa,zr),ha,Ur),ga,Wr),ya,Yr),x(x(x(x(x(x(x(x(Me,ba,Hr),xa,Gr),Aa,Br),Sa,Xr),wa,qr),Ea,Jr),ka,Vr),Pa,Kr);var Qr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},Zr={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},en=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),tn={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},Ia=["fak","fa-kit","fakd","fa-kit-duotone"],It={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},an=["kit"],rn="kit",nn="kit-duotone",on="Kit",sn="Kit Duotone";x(x({},rn,on),nn,sn);var ln={kit:{"fa-kit":"fak"}},fn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},un={kit:{fak:"fa-kit"}},Ct={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},$e,Ae={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},cn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],dn="classic",mn="duotone",vn="sharp",pn="sharp-duotone",hn="chisel",gn="etch",yn="jelly",bn="jelly-duo",xn="jelly-fill",An="notdog",Sn="notdog-duo",wn="slab",En="slab-press",kn="thumbprint",Pn="utility",_n="utility-duo",In="utility-fill",Cn="whiteboard",Tn="Classic",On="Duotone",Fn="Sharp",Rn="Sharp Duotone",Nn="Chisel",jn="Etch",Ln="Jelly",Mn="Jelly Duo",$n="Jelly Fill",Dn="Notdog",zn="Notdog Duo",Un="Slab",Wn="Slab Press",Yn="Thumbprint",Hn="Utility",Gn="Utility Duo",Bn="Utility Fill",Xn="Whiteboard";$e={},x(x(x(x(x(x(x(x(x(x($e,dn,Tn),mn,On),vn,Fn),pn,Rn),hn,Nn),gn,jn),yn,Ln),bn,Mn),xn,$n),An,Dn),x(x(x(x(x(x(x(x($e,Sn,zn),wn,Un),En,Wn),kn,Yn),Pn,Hn),_n,Gn),In,Bn),Cn,Xn);var qn="kit",Jn="kit-duotone",Vn="Kit",Kn="Kit Duotone";x(x({},qn,Vn),Jn,Kn);var Qn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},Zn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Ge={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},ei=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],Ca=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(cn,ei),ti=["solid","regular","light","thin","duotone","brands","semibold"],Ta=[1,2,3,4,5,6,7,8,9,10],ai=Ta.concat([11,12,13,14,15,16,17,18,19,20]),ri=["aw","fw","pull-left","pull-right"],ni=[].concat(D(Object.keys(Zn)),ti,ri,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Ae.GROUP,Ae.SWAP_OPACITY,Ae.PRIMARY,Ae.SECONDARY]).concat(Ta.map(function(e){return"".concat(e,"x")})).concat(ai.map(function(e){return"w-".concat(e)})),ii={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},H="___FONT_AWESOME___",Be=16,Oa="fa",Fa="svg-inline--fa",Q="data-fa-i2svg",Xe="data-fa-pseudo-element",oi="data-fa-pseudo-element-pending",st="data-prefix",lt="data-icon",Tt="fontawesome-i2svg",si="async",li=["HTML","HEAD","STYLE","SCRIPT"],Ra=["::before","::after",":before",":after"],Na=(function(){try{return!0}catch{return!1}})();function ge(e){return new Proxy(e,{get:function(a,r){return r in a?a[r]:a[N]}})}var ja=u({},fa);ja[N]=u(u(u(u({},{"fa-duotone":"duotone"}),fa[N]),It.kit),It["kit-duotone"]);var fi=ge(ja),qe=u({},tn);qe[N]=u(u(u(u({},{duotone:"fad"}),qe[N]),Ct.kit),Ct["kit-duotone"]);var Ot=ge(qe),Je=u({},Ge);Je[N]=u(u({},Je[N]),un.kit);var ft=ge(Je),Ve=u({},Qn);Ve[N]=u(u({},Ve[N]),ln.kit);ge(Ve);var ui=Or,La="fa-layers-text",ci=Fr,di=u({},Qr);ge(di);var mi=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],De=Rr,vi=[].concat(D(an),D(ni)),ce=q.FontAwesomeConfig||{};function pi(e){var t=O.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function hi(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(O&&typeof O.querySelector=="function"){var gi=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];gi.forEach(function(e){var t=Ie(e,2),a=t[0],r=t[1],n=hi(pi(a));n!=null&&(ce[r]=n)})}var Ma={styleDefault:"solid",familyDefault:N,cssPrefix:Oa,replacementClass:Fa,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ce.familyPrefix&&(ce.cssPrefix=ce.familyPrefix);var oe=u(u({},Ma),ce);oe.autoReplaceSvg||(oe.observeMutations=!1);var p={};Object.keys(Ma).forEach(function(e){Object.defineProperty(p,e,{enumerable:!0,set:function(a){oe[e]=a,de.forEach(function(r){return r(p)})},get:function(){return oe[e]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(t){oe.cssPrefix=t,de.forEach(function(a){return a(p)})},get:function(){return oe.cssPrefix}});q.FontAwesomeConfig=p;var de=[];function yi(e){return de.push(e),function(){de.splice(de.indexOf(e),1)}}var ae=Be,U={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function bi(e){if(!(!e||!B)){var t=O.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=O.head.childNodes,r=null,n=a.length-1;n>-1;n--){var i=a[n],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return O.head.insertBefore(t,r),e}}var xi="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ft(){for(var e=12,t="";e-- >0;)t+=xi[Math.random()*62|0];return t}function se(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function ut(e){return e.classList?se(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function $a(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ai(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat($a(e[a]),'" ')},"").trim()}function Ce(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function ct(e){return e.size!==U.size||e.x!==U.x||e.y!==U.y||e.rotate!==U.rotate||e.flipX||e.flipY}function Si(e){var t=e.transform,a=e.containerWidth,r=e.iconWidth,n={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(l)},d={transform:"translate(".concat(r/2*-1," -256)")};return{outer:n,inner:f,path:d}}function wi(e){var t=e.transform,a=e.width,r=a===void 0?Be:a,n=e.height,i=n===void 0?Be:n,o="";return la?o+="translate(".concat(t.x/ae-r/2,"em, ").concat(t.y/ae-i/2,"em) "):o+="translate(calc(-50% + ".concat(t.x/ae,"em), calc(-50% + ").concat(t.y/ae,"em)) "),o+="scale(".concat(t.size/ae*(t.flipX?-1:1),", ").concat(t.size/ae*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var Ei=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";
  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";
  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Da(){var e=Oa,t=Fa,a=p.cssPrefix,r=p.replacementClass,n=Ei;if(a!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");n=n.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(l,".".concat(r))}return n}var Rt=!1;function ze(){p.autoAddCss&&!Rt&&(bi(Da()),Rt=!0)}var ki={mixout:function(){return{dom:{css:Da,insertCss:ze}}},hooks:function(){return{beforeDOMElementCreation:function(){ze()},beforeI2svg:function(){ze()}}}},G=q||{};G[H]||(G[H]={});G[H].styles||(G[H].styles={});G[H].hooks||(G[H].hooks={});G[H].shims||(G[H].shims=[]);var $=G[H],za=[],Ua=function(){O.removeEventListener("DOMContentLoaded",Ua),Pe=1,za.map(function(t){return t()})},Pe=!1;B&&(Pe=(O.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(O.readyState),Pe||O.addEventListener("DOMContentLoaded",Ua));function Pi(e){B&&(Pe?setTimeout(e,0):za.push(e))}function ye(e){var t=e.tag,a=e.attributes,r=a===void 0?{}:a,n=e.children,i=n===void 0?[]:n;return typeof e=="string"?$a(e):"<".concat(t," ").concat(Ai(r),">").concat(i.map(ye).join(""),"</").concat(t,">")}function Nt(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var Ue=function(t,a,r,n){var i=Object.keys(t),o=i.length,l=a,f,d,m;for(r===void 0?(f=1,m=t[i[0]]):(f=0,m=r);f<o;f++)d=i[f],m=l(m,t[d],d,t);return m};function Wa(e){return D(e).length!==1?null:e.codePointAt(0).toString(16)}function jt(e){return Object.keys(e).reduce(function(t,a){var r=e[a],n=!!r.icon;return n?t[r.iconName]=r.icon:t[a]=r,t},{})}function Ke(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=a.skipHooks,n=r===void 0?!1:r,i=jt(t);typeof $.hooks.addPack=="function"&&!n?$.hooks.addPack(e,jt(t)):$.styles[e]=u(u({},$.styles[e]||{}),i),e==="fas"&&Ke("fa",t)}var ve=$.styles,_i=$.shims,Ya=Object.keys(ft),Ii=Ya.reduce(function(e,t){return e[t]=Object.keys(ft[t]),e},{}),dt=null,Ha={},Ga={},Ba={},Xa={},qa={};function Ci(e){return~vi.indexOf(e)}function Ti(e,t){var a=t.split("-"),r=a[0],n=a.slice(1).join("-");return r===e&&n!==""&&!Ci(n)?n:null}var Ja=function(){var t=function(i){return Ue(ve,function(o,l,f){return o[f]=Ue(l,i,{}),o},{})};Ha=t(function(n,i,o){if(i[3]&&(n[i[3]]=o),i[2]){var l=i[2].filter(function(f){return typeof f=="number"});l.forEach(function(f){n[f.toString(16)]=o})}return n}),Ga=t(function(n,i,o){if(n[o]=o,i[2]){var l=i[2].filter(function(f){return typeof f=="string"});l.forEach(function(f){n[f]=o})}return n}),qa=t(function(n,i,o){var l=i[2];return n[o]=o,l.forEach(function(f){n[f]=o}),n});var a="far"in ve||p.autoFetchSvg,r=Ue(_i,function(n,i){var o=i[0],l=i[1],f=i[2];return l==="far"&&!a&&(l="fas"),typeof o=="string"&&(n.names[o]={prefix:l,iconName:f}),typeof o=="number"&&(n.unicodes[o.toString(16)]={prefix:l,iconName:f}),n},{names:{},unicodes:{}});Ba=r.names,Xa=r.unicodes,dt=Te(p.styleDefault,{family:p.familyDefault})};yi(function(e){dt=Te(e.styleDefault,{family:p.familyDefault})});Ja();function mt(e,t){return(Ha[e]||{})[t]}function Oi(e,t){return(Ga[e]||{})[t]}function K(e,t){return(qa[e]||{})[t]}function Va(e){return Ba[e]||{prefix:null,iconName:null}}function Fi(e){var t=Xa[e],a=mt("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function J(){return dt}var Ka=function(){return{prefix:null,iconName:null,rest:[]}};function Ri(e){var t=N,a=Ya.reduce(function(r,n){return r[n]="".concat(p.cssPrefix,"-").concat(n),r},{});return _a.forEach(function(r){(e.includes(a[r])||e.some(function(n){return Ii[r].includes(n)}))&&(t=r)}),t}function Te(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,r=a===void 0?N:a,n=fi[r][e];if(r===he&&!e)return"fad";var i=Ot[r][e]||Ot[r][n],o=e in $.styles?e:null,l=i||o||null;return l}function Ni(e){var t=[],a=null;return e.forEach(function(r){var n=Ti(p.cssPrefix,r);n?a=n:r&&t.push(r)}),{iconName:a,rest:t}}function Lt(e){return e.sort().filter(function(t,a,r){return r.indexOf(t)===a})}var Mt=Ca.concat(Ia);function Oe(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,r=a===void 0?!1:a,n=null,i=Lt(e.filter(function(h){return Mt.includes(h)})),o=Lt(e.filter(function(h){return!Mt.includes(h)})),l=i.filter(function(h){return n=h,!ua.includes(h)}),f=Ie(l,1),d=f[0],m=d===void 0?null:d,v=Ri(i),A=u(u({},Ni(o)),{},{prefix:Te(m,{family:v})});return u(u(u({},A),$i({values:e,family:v,styles:ve,config:p,canonical:A,givenPrefix:n})),ji(r,n,A))}function ji(e,t,a){var r=a.prefix,n=a.iconName;if(e||!r||!n)return{prefix:r,iconName:n};var i=t==="fa"?Va(n):{},o=K(r,n);return n=i.iconName||o||n,r=i.prefix||r,r==="far"&&!ve.far&&ve.fas&&!p.autoFetchSvg&&(r="fas"),{prefix:r,iconName:n}}var Li=_a.filter(function(e){return e!==N||e!==he}),Mi=Object.keys(Ge).filter(function(e){return e!==N}).map(function(e){return Object.keys(Ge[e])}).flat();function $i(e){var t=e.values,a=e.family,r=e.canonical,n=e.givenPrefix,i=n===void 0?"":n,o=e.styles,l=o===void 0?{}:o,f=e.config,d=f===void 0?{}:f,m=a===he,v=t.includes("fa-duotone")||t.includes("fad"),A=d.familyDefault==="duotone",h=r.prefix==="fad"||r.prefix==="fa-duotone";if(!m&&(v||A||h)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&Li.includes(a)){var k=Object.keys(l).find(function(C){return Mi.includes(C)});if(k||d.autoFetchSvg){var w=en.get(a).defaultShortPrefixId;r.prefix=w,r.iconName=K(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||i==="fa")&&(r.prefix=J()||"fas"),r}var Di=(function(){function e(){Sr(this,e),this.definitions={}}return Er(e,[{key:"add",value:function(){for(var a=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];var o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){a.definitions[l]=u(u({},a.definitions[l]||{}),o[l]),Ke(l,o[l]);var f=ft[N][l];f&&Ke(f,o[l]),Ja()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,r){var n=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(n).map(function(i){var o=n[i],l=o.prefix,f=o.iconName,d=o.icon,m=d[2];a[l]||(a[l]={}),m.length>0&&m.forEach(function(v){typeof v=="string"&&(a[l][v]=d)}),a[l][f]=d}),a}}])})(),$t=[],ne={},ie={},zi=Object.keys(ie);function Ui(e,t){var a=t.mixoutsTo;return $t=e,ne={},Object.keys(ie).forEach(function(r){zi.indexOf(r)===-1&&delete ie[r]}),$t.forEach(function(r){var n=r.mixout?r.mixout():{};if(Object.keys(n).forEach(function(o){typeof n[o]=="function"&&(a[o]=n[o]),ke(n[o])==="object"&&Object.keys(n[o]).forEach(function(l){a[o]||(a[o]={}),a[o][l]=n[o][l]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){ne[o]||(ne[o]=[]),ne[o].push(i[o])})}r.provides&&r.provides(ie)}),a}function Qe(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];var i=ne[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Z(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];var n=ne[e]||[];n.forEach(function(i){i.apply(null,a)})}function V(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ie[e]?ie[e].apply(null,t):void 0}function Ze(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||J();if(t)return t=K(a,t)||t,Nt(Qa.definitions,a,t)||Nt($.styles,a,t)}var Qa=new Di,Wi=function(){p.autoReplaceSvg=!1,p.observeMutations=!1,Z("noAuto")},Yi={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return B?(Z("beforeI2svg",t),V("pseudoElements2svg",t),V("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,Pi(function(){Gi({autoReplaceSvgRoot:a}),Z("watch",t)})}},Hi={icon:function(t){if(t===null)return null;if(ke(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:K(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Te(t[0]);return{prefix:r,iconName:K(r,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(p.cssPrefix,"-"))>-1||t.match(ui))){var n=Oe(t.split(" "),{skipLookups:!0});return{prefix:n.prefix||J(),iconName:K(n.prefix,n.iconName)||n.iconName}}if(typeof t=="string"){var i=J();return{prefix:i,iconName:K(i,t)||t}}}},M={noAuto:Wi,config:p,dom:Yi,parse:Hi,library:Qa,findIconDefinition:Ze,toHtml:ye},Gi=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,r=a===void 0?O:a;(Object.keys($.styles).length>0||p.autoFetchSvg)&&B&&p.autoReplaceSvg&&M.dom.i2svg({node:r})};function Fe(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ye(r)})}}),Object.defineProperty(e,"node",{get:function(){if(B){var r=O.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Bi(e){var t=e.children,a=e.main,r=e.mask,n=e.attributes,i=e.styles,o=e.transform;if(ct(o)&&a.found&&!r.found){var l=a.width,f=a.height,d={x:l/f/2,y:.5};n.style=Ce(u(u({},i),{},{"transform-origin":"".concat(d.x+o.x/16,"em ").concat(d.y+o.y/16,"em")}))}return[{tag:"svg",attributes:n,children:t}]}function Xi(e){var t=e.prefix,a=e.iconName,r=e.children,n=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(p.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},n),{},{id:o}),children:r}]}]}function qi(e){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(a){return a in e})}function vt(e){var t=e.icons,a=t.main,r=t.mask,n=e.prefix,i=e.iconName,o=e.transform,l=e.symbol,f=e.maskId,d=e.extra,m=e.watchable,v=m===void 0?!1:m,A=r.found?r:a,h=A.width,k=A.height,w=[p.replacementClass,i?"".concat(p.cssPrefix,"-").concat(i):""].filter(function(S){return d.classes.indexOf(S)===-1}).filter(function(S){return S!==""||!!S}).concat(d.classes).join(" "),C={children:[],attributes:u(u({},d.attributes),{},{"data-prefix":n,"data-icon":i,class:w,role:d.attributes.role||"img",viewBox:"0 0 ".concat(h," ").concat(k)})};!qi(d.attributes)&&!d.attributes["aria-hidden"]&&(C.attributes["aria-hidden"]="true"),v&&(C.attributes[Q]="");var P=u(u({},C),{},{prefix:n,iconName:i,main:a,mask:r,maskId:f,transform:o,symbol:l,styles:u({},d.styles)}),F=r.found&&a.found?V("generateAbstractMask",P)||{children:[],attributes:{}}:V("generateAbstractIcon",P)||{children:[],attributes:{}},R=F.children,L=F.attributes;return P.children=R,P.attributes=L,l?Xi(P):Bi(P)}function Dt(e){var t=e.content,a=e.width,r=e.height,n=e.transform,i=e.extra,o=e.watchable,l=o===void 0?!1:o,f=u(u({},i.attributes),{},{class:i.classes.join(" ")});l&&(f[Q]="");var d=u({},i.styles);ct(n)&&(d.transform=wi({transform:n,width:a,height:r}),d["-webkit-transform"]=d.transform);var m=Ce(d);m.length>0&&(f.style=m);var v=[];return v.push({tag:"span",attributes:f,children:[t]}),v}function Ji(e){var t=e.content,a=e.extra,r=u(u({},a.attributes),{},{class:a.classes.join(" ")}),n=Ce(a.styles);n.length>0&&(r.style=n);var i=[];return i.push({tag:"span",attributes:r,children:[t]}),i}var We=$.styles;function et(e){var t=e[0],a=e[1],r=e.slice(4),n=Ie(r,1),i=n[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(De.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(De.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(De.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:a,icon:o}}var Vi={found:!1,width:512,height:512};function Ki(e,t){!Na&&!p.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function tt(e,t){var a=t;return t==="fa"&&p.styleDefault!==null&&(t=J()),new Promise(function(r,n){if(a==="fa"){var i=Va(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&We[t]&&We[t][e]){var o=We[t][e];return r(et(o))}Ki(e,t),r(u(u({},Vi),{},{icon:p.showMissingIcons&&e?V("missingIconAbstract")||{}:{}}))})}var zt=function(){},at=p.measurePerformance&&xe&&xe.mark&&xe.measure?xe:{mark:zt,measure:zt},ue='FA "7.1.0"',Qi=function(t){return at.mark("".concat(ue," ").concat(t," begins")),function(){return Za(t)}},Za=function(t){at.mark("".concat(ue," ").concat(t," ends")),at.measure("".concat(ue," ").concat(t),"".concat(ue," ").concat(t," begins"),"".concat(ue," ").concat(t," ends"))},pt={begin:Qi,end:Za},we=function(){};function Ut(e){var t=e.getAttribute?e.getAttribute(Q):null;return typeof t=="string"}function Zi(e){var t=e.getAttribute?e.getAttribute(st):null,a=e.getAttribute?e.getAttribute(lt):null;return t&&a}function eo(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(p.replacementClass)}function to(){if(p.autoReplaceSvg===!0)return Ee.replace;var e=Ee[p.autoReplaceSvg];return e||Ee.replace}function ao(e){return O.createElementNS("http://www.w3.org/2000/svg",e)}function ro(e){return O.createElement(e)}function er(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,r=a===void 0?e.tag==="svg"?ao:ro:a;if(typeof e=="string")return O.createTextNode(e);var n=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){n.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){n.appendChild(er(o,{ceFn:r}))}),n}function no(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Ee={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(n){a.parentNode.insertBefore(er(n),a)}),a.getAttribute(Q)===null&&p.keepOriginalSource){var r=O.createComment(no(a));a.parentNode.replaceChild(r,a)}else a.remove()},nest:function(t){var a=t[0],r=t[1];if(~ut(a).indexOf(p.replacementClass))return Ee.replace(t);var n=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(l,f){return f===p.replacementClass||f.match(n)?l.toSvg.push(f):l.toNode.push(f),l},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(l){return ye(l)}).join(`
`);a.setAttribute(Q,""),a.innerHTML=o}};function Wt(e){e()}function tr(e,t){var a=typeof t=="function"?t:we;if(e.length===0)a();else{var r=Wt;p.mutateApproach===si&&(r=q.requestAnimationFrame||Wt),r(function(){var n=to(),i=pt.begin("mutate");e.map(n),i(),a()})}}var ht=!1;function ar(){ht=!0}function rt(){ht=!1}var _e=null;function Yt(e){if(_t&&p.observeMutations){var t=e.treeCallback,a=t===void 0?we:t,r=e.nodeCallback,n=r===void 0?we:r,i=e.pseudoElementsCallback,o=i===void 0?we:i,l=e.observeMutationsRoot,f=l===void 0?O:l;_e=new _t(function(d){if(!ht){var m=J();se(d).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!Ut(v.addedNodes[0])&&(p.searchPseudoElements&&o(v.target),a(v.target)),v.type==="attributes"&&v.target.parentNode&&p.searchPseudoElements&&o([v.target],!0),v.type==="attributes"&&Ut(v.target)&&~mi.indexOf(v.attributeName))if(v.attributeName==="class"&&Zi(v.target)){var A=Oe(ut(v.target)),h=A.prefix,k=A.iconName;v.target.setAttribute(st,h||m),k&&v.target.setAttribute(lt,k)}else eo(v.target)&&n(v.target)})}}),B&&_e.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function io(){_e&&_e.disconnect()}function oo(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(r,n){var i=n.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),a}function so(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",n=Oe(ut(e));return n.prefix||(n.prefix=J()),t&&a&&(n.prefix=t,n.iconName=a),n.iconName&&n.prefix||(n.prefix&&r.length>0&&(n.iconName=Oi(n.prefix,e.innerText)||mt(n.prefix,Wa(e.innerText))),!n.iconName&&p.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=e.firstChild.data)),n}function lo(e){var t=se(e.attributes).reduce(function(a,r){return a.name!=="class"&&a.name!=="style"&&(a[r.name]=r.value),a},{});return t}function fo(){return{iconName:null,prefix:null,transform:U,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ht(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=so(e),r=a.iconName,n=a.prefix,i=a.rest,o=lo(e),l=Qe("parseNodeAttributes",{},e),f=t.styleParser?oo(e):[];return u({iconName:r,prefix:n,transform:U,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},l)}var uo=$.styles;function rr(e){var t=p.autoReplaceSvg==="nest"?Ht(e,{styleParser:!1}):Ht(e);return~t.extra.classes.indexOf(La)?V("generateLayersText",e,t):V("generateSvgReplacementMutation",e,t)}function co(){return[].concat(D(Ia),D(Ca))}function Gt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!B)return Promise.resolve();var a=O.documentElement.classList,r=function(v){return a.add("".concat(Tt,"-").concat(v))},n=function(v){return a.remove("".concat(Tt,"-").concat(v))},i=p.autoFetchSvg?co():ua.concat(Object.keys(uo));i.includes("fa")||i.push("fa");var o=[".".concat(La,":not([").concat(Q,"])")].concat(i.map(function(m){return".".concat(m,":not([").concat(Q,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=se(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),n("complete");else return Promise.resolve();var f=pt.begin("onTree"),d=l.reduce(function(m,v){try{var A=rr(v);A&&m.push(A)}catch(h){Na||h.name==="MissingIcon"&&console.error(h)}return m},[]);return new Promise(function(m,v){Promise.all(d).then(function(A){tr(A,function(){r("active"),r("complete"),n("pending"),typeof t=="function"&&t(),f(),m()})}).catch(function(A){f(),v(A)})})}function mo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;rr(e).then(function(a){a&&tr([a],t)})}function vo(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Ze(t||{}),n=a.mask;return n&&(n=(n||{}).icon?n:Ze(n||{})),e(r,u(u({},a),{},{mask:n}))}}var po=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,n=r===void 0?U:r,i=a.symbol,o=i===void 0?!1:i,l=a.mask,f=l===void 0?null:l,d=a.maskId,m=d===void 0?null:d,v=a.classes,A=v===void 0?[]:v,h=a.attributes,k=h===void 0?{}:h,w=a.styles,C=w===void 0?{}:w;if(t){var P=t.prefix,F=t.iconName,R=t.icon;return Fe(u({type:"icon"},t),function(){return Z("beforeDOMElementCreation",{iconDefinition:t,params:a}),vt({icons:{main:et(R),mask:f?et(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:F,transform:u(u({},U),n),symbol:o,maskId:m,extra:{attributes:k,styles:C,classes:A}})})}},ho={mixout:function(){return{icon:vo(po)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Gt,a.nodeCallback=mo,a}}},provides:function(t){t.i2svg=function(a){var r=a.node,n=r===void 0?O:r,i=a.callback,o=i===void 0?function(){}:i;return Gt(n,o)},t.generateSvgReplacementMutation=function(a,r){var n=r.iconName,i=r.prefix,o=r.transform,l=r.symbol,f=r.mask,d=r.maskId,m=r.extra;return new Promise(function(v,A){Promise.all([tt(n,i),f.iconName?tt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(h){var k=Ie(h,2),w=k[0],C=k[1];v([a,vt({icons:{main:w,mask:C},prefix:i,iconName:n,transform:o,symbol:l,maskId:d,extra:m,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(a){var r=a.children,n=a.attributes,i=a.main,o=a.transform,l=a.styles,f=Ce(l);f.length>0&&(n.style=f);var d;return ct(o)&&(d=V("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(d||i.icon),{children:r,attributes:n}}}},go={mixout:function(){return{layer:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.classes,i=n===void 0?[]:n;return Fe({type:"layer"},function(){Z("beforeDOMElementCreation",{assembler:a,params:r});var o=[];return a(function(l){Array.isArray(l)?l.map(function(f){o=o.concat(f.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers")].concat(D(i)).join(" ")},children:o}]})}}}},yo={mixout:function(){return{counter:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var n=r.classes,i=n===void 0?[]:n,o=r.attributes,l=o===void 0?{}:o,f=r.styles,d=f===void 0?{}:f;return Fe({type:"counter",content:a},function(){return Z("beforeDOMElementCreation",{content:a,params:r}),Ji({content:a.toString(),extra:{attributes:l,styles:d,classes:["".concat(p.cssPrefix,"-layers-counter")].concat(D(i))}})})}}}},bo={mixout:function(){return{text:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,i=n===void 0?U:n,o=r.classes,l=o===void 0?[]:o,f=r.attributes,d=f===void 0?{}:f,m=r.styles,v=m===void 0?{}:m;return Fe({type:"text",content:a},function(){return Z("beforeDOMElementCreation",{content:a,params:r}),Dt({content:a,transform:u(u({},U),i),extra:{attributes:d,styles:v,classes:["".concat(p.cssPrefix,"-layers-text")].concat(D(l))}})})}}},provides:function(t){t.generateLayersText=function(a,r){var n=r.transform,i=r.extra,o=null,l=null;if(la){var f=parseInt(getComputedStyle(a).fontSize,10),d=a.getBoundingClientRect();o=d.width/f,l=d.height/f}return Promise.resolve([a,Dt({content:a.innerHTML,width:o,height:l,transform:n,extra:i,watchable:!0})])}}},nr=new RegExp('"',"ug"),Bt=[1105920,1112319],Xt=u(u(u(u({},{FontAwesome:{normal:"fas",400:"fas"}}),Zr),ii),fn),nt=Object.keys(Xt).reduce(function(e,t){return e[t.toLowerCase()]=Xt[t],e},{}),xo=Object.keys(nt).reduce(function(e,t){var a=nt[t];return e[t]=a[900]||D(Object.entries(a))[0][1],e},{});function Ao(e){var t=e.replace(nr,"");return Wa(D(t)[0]||"")}function So(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),a=e.getPropertyValue("content"),r=a.replace(nr,""),n=r.codePointAt(0),i=n>=Bt[0]&&n<=Bt[1],o=r.length===2?r[0]===r[1]:!1;return i||o||t}function wo(e,t){var a=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),n=isNaN(r)?"normal":r;return(nt[a]||{})[n]||xo[a]}function qt(e,t){var a="".concat(oi).concat(t.replace(":","-"));return new Promise(function(r,n){if(e.getAttribute(a)!==null)return r();var i=se(e.children),o=i.filter(function(X){return X.getAttribute(Xe)===t})[0],l=q.getComputedStyle(e,t),f=l.getPropertyValue("font-family"),d=f.match(ci),m=l.getPropertyValue("font-weight"),v=l.getPropertyValue("content");if(o&&!d)return e.removeChild(o),r();if(d&&v!=="none"&&v!==""){var A=l.getPropertyValue("content"),h=wo(f,m),k=Ao(A),w=d[0].startsWith("FontAwesome"),C=So(l),P=mt(h,k),F=P;if(w){var R=Fi(k);R.iconName&&R.prefix&&(P=R.iconName,h=R.prefix)}if(P&&!C&&(!o||o.getAttribute(st)!==h||o.getAttribute(lt)!==F)){e.setAttribute(a,F),o&&e.removeChild(o);var L=fo(),S=L.extra;S.attributes[Xe]=t,tt(P,h).then(function(X){var I=vt(u(u({},L),{},{icons:{main:X,mask:Ka()},prefix:h,iconName:F,extra:S,watchable:!0})),ee=O.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ee,e.firstChild):e.appendChild(ee),ee.outerHTML=I.map(function(le){return ye(le)}).join(`
`),e.removeAttribute(a),r()}).catch(n)}else r()}else r()})}function Eo(e){return Promise.all([qt(e,"::before"),qt(e,"::after")])}function ko(e){return e.parentNode!==document.head&&!~li.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Xe)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var Po=function(t){return!!t&&Ra.some(function(a){return t.includes(a)})},_o=function(t){if(!t)return[];var a=new Set,r=t.split(/,(?![^()]*\))/).map(function(f){return f.trim()});r=r.flatMap(function(f){return f.includes("(")?f:f.split(",").map(function(d){return d.trim()})});var n=Se(r),i;try{for(n.s();!(i=n.n()).done;){var o=i.value;if(Po(o)){var l=Ra.reduce(function(f,d){return f.replace(d,"")},o);l!==""&&l!=="*"&&a.add(l)}}}catch(f){n.e(f)}finally{n.f()}return a};function Jt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(B){var a;if(t)a=e;else if(p.searchPseudoElementsFullScan)a=e.querySelectorAll("*");else{var r=new Set,n=Se(document.styleSheets),i;try{for(n.s();!(i=n.n()).done;){var o=i.value;try{var l=Se(o.cssRules),f;try{for(l.s();!(f=l.n()).done;){var d=f.value,m=_o(d.selectorText),v=Se(m),A;try{for(v.s();!(A=v.n()).done;){var h=A.value;r.add(h)}}catch(w){v.e(w)}finally{v.f()}}}catch(w){l.e(w)}finally{l.f()}}catch(w){p.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(w.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(w){n.e(w)}finally{n.f()}if(!r.size)return;var k=Array.from(r).join(", ");try{a=e.querySelectorAll(k)}catch{}}return new Promise(function(w,C){var P=se(a).filter(ko).map(Eo),F=pt.begin("searchPseudoElements");ar(),Promise.all(P).then(function(){F(),rt(),w()}).catch(function(){F(),rt(),C()})})}}var Io={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=Jt,a}}},provides:function(t){t.pseudoElements2svg=function(a){var r=a.node,n=r===void 0?O:r;p.searchPseudoElements&&Jt(n)}}},Vt=!1,Co={mixout:function(){return{dom:{unwatch:function(){ar(),Vt=!0}}}},hooks:function(){return{bootstrap:function(){Yt(Qe("mutationObserverCallbacks",{}))},noAuto:function(){io()},watch:function(a){var r=a.observeMutationsRoot;Vt?rt():Yt(Qe("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Kt=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,n){var i=n.toLowerCase().split("-"),o=i[0],l=i.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},a)},To={mixout:function(){return{parse:{transform:function(a){return Kt(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-transform");return n&&(a.transform=Kt(n)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var r=a.main,n=a.transform,i=a.containerWidth,o=a.iconWidth,l={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(n.x*32,", ").concat(n.y*32,") "),d="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),m="rotate(".concat(n.rotate," 0 0)"),v={transform:"".concat(f," ").concat(d," ").concat(m)},A={transform:"translate(".concat(o/2*-1," -256)")},h={outer:l,inner:v,path:A};return{tag:"g",attributes:u({},h.outer),children:[{tag:"g",attributes:u({},h.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:u(u({},r.icon.attributes),h.path)}]}]}}}},Ye={x:0,y:0,width:"100%",height:"100%"};function Qt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Oo(e){return e.tag==="g"?e.children:[e]}var Fo={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-mask"),i=n?Oe(n.split(" ").map(function(o){return o.trim()})):Ka();return i.prefix||(i.prefix=J()),a.mask=i,a.maskId=r.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var r=a.children,n=a.attributes,i=a.main,o=a.mask,l=a.maskId,f=a.transform,d=i.width,m=i.icon,v=o.width,A=o.icon,h=Si({transform:f,containerWidth:v,iconWidth:d}),k={tag:"rect",attributes:u(u({},Ye),{},{fill:"white"})},w=m.children?{children:m.children.map(Qt)}:{},C={tag:"g",attributes:u({},h.inner),children:[Qt(u({tag:m.tag,attributes:u(u({},m.attributes),h.path)},w))]},P={tag:"g",attributes:u({},h.outer),children:[C]},F="mask-".concat(l||Ft()),R="clip-".concat(l||Ft()),L={tag:"mask",attributes:u(u({},Ye),{},{id:F,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,P]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:R},children:Oo(A)},L]};return r.push(S,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(R,")"),mask:"url(#".concat(F,")")},Ye)}),{children:r,attributes:n}}}},Ro={provides:function(t){var a=!1;q.matchMedia&&(a=q.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],n={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:u(u({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:u(u({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||l.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:u(u({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||r.push({tag:"path",attributes:u(u({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},No={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return a.symbol=i,a}}}},jo=[ki,ho,go,yo,bo,Io,Co,To,Fo,Ro,No];Ui(jo,{mixoutsTo:M});M.noAuto;var pe=M.config;M.library;M.dom;var ir=M.parse;M.findIconDefinition;M.toHtml;var Lo=M.icon;M.layer;M.text;M.counter;function Mo(e){return e=e-0,e===e}function or(e){return Mo(e)?e:(e=e.replace(/[_-]+(.)?/g,(t,a)=>a?a.toUpperCase():""),e.charAt(0).toLowerCase()+e.slice(1))}function $o(e){return e.charAt(0).toUpperCase()+e.slice(1)}var re=new Map,Do=1e3;function zo(e){if(re.has(e))return re.get(e);const t={};let a=0;const r=e.length;for(;a<r;){const n=e.indexOf(";",a),i=n===-1?r:n,o=e.slice(a,i).trim();if(o){const l=o.indexOf(":");if(l>0){const f=o.slice(0,l).trim(),d=o.slice(l+1).trim();if(f&&d){const m=or(f);t[m.startsWith("webkit")?$o(m):m]=d}}}a=i+1}if(re.size===Do){const n=re.keys().next().value;n&&re.delete(n)}return re.set(e,t),t}function sr(e,t,a={}){if(typeof t=="string")return t;const r=(t.children||[]).map(m=>sr(e,m)),n=t.attributes||{},i={};for(const[m,v]of Object.entries(n))switch(!0){case m==="class":{i.className=v;break}case m==="style":{i.style=zo(String(v));break}case m.startsWith("aria-"):case m.startsWith("data-"):{i[m.toLowerCase()]=v;break}default:i[or(m)]=v}const{style:o,role:l,"aria-label":f,...d}=a;return o&&(i.style=i.style?{...i.style,...o}:o),l&&(i.role=l),f&&(i["aria-label"]=f,i["aria-hidden"]="false"),e(t.tag,{...d,...i},...r)}var Uo=sr.bind(null,ra.createElement),Zt=(e,t)=>{const a=aa.useId();return e||(t?a:void 0)},Wo=class{constructor(e="react-fontawesome"){this.enabled=!1;let t=!1;try{t=typeof process<"u"&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}},Yo="searchPseudoElementsFullScan"in pe?"7.0.0":"6.0.0",Ho=Number.parseInt(Yo)>=7,me="fa",W={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},Go={left:"fa-pull-left",right:"fa-pull-right"},Bo={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},Xo={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},Y={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function qo(e){const t=pe.cssPrefix||pe.familyPrefix||me;return t===me?e:e.replace(new RegExp(String.raw`(?<=^|\s)${me}-`,"g"),`${t}-`)}function Jo(e){const{beat:t,fade:a,beatFade:r,bounce:n,shake:i,spin:o,spinPulse:l,spinReverse:f,pulse:d,fixedWidth:m,inverse:v,border:A,flip:h,size:k,rotation:w,pull:C,swapOpacity:P,rotateBy:F,widthAuto:R,className:L}=e,S=[];return L&&S.push(...L.split(" ")),t&&S.push(W.beat),a&&S.push(W.fade),r&&S.push(W.beatFade),n&&S.push(W.bounce),i&&S.push(W.shake),o&&S.push(W.spin),f&&S.push(W.spinReverse),l&&S.push(W.spinPulse),d&&S.push(W.pulse),m&&S.push(Y.fixedWidth),v&&S.push(Y.inverse),A&&S.push(Y.border),h===!0&&S.push(Y.flip),(h==="horizontal"||h==="both")&&S.push(Y.flipHorizontal),(h==="vertical"||h==="both")&&S.push(Y.flipVertical),k!=null&&S.push(Xo[k]),w!=null&&w!==0&&S.push(Bo[w]),C!=null&&S.push(Go[C]),P&&S.push(Y.swapOpacity),Ho?(F&&S.push(Y.rotateBy),R&&S.push(Y.widthAuto),(pe.cssPrefix||pe.familyPrefix||me)===me?S:S.map(qo)):S}var Vo=e=>typeof e=="object"&&"icon"in e&&!!e.icon;function ea(e){if(e)return Vo(e)?e:ir.icon(e)}function Ko(e){return Object.keys(e)}var ta=new Wo("FontAwesomeIcon"),lr={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},Qo=new Set(Object.keys(lr)),Zo=ra.forwardRef((e,t)=>{const a={...lr,...e},{icon:r,mask:n,symbol:i,title:o,titleId:l,maskId:f,transform:d}=a,m=Zt(f,!!n),v=Zt(l,!!o),A=ea(r);if(!A)return ta.error("Icon lookup is undefined",r),null;const h=Jo(a),k=typeof d=="string"?ir.transform(d):d,w=ea(n),C=Lo(A,{...h.length>0&&{classes:h},...k&&{transform:k},...w&&{mask:w},symbol:i,title:o,titleId:v,maskId:m});if(!C)return ta.error("Could not find icon",A),null;const{abstract:P}=C,F={ref:t};for(const R of Ko(a))Qo.has(R)||(F[R]=a[R]);return Uo(P[0],F)});Zo.displayName="FontAwesomeIcon";var es={prefix:"fas",iconName:"up-right-and-down-left-from-center",icon:[512,512,["expand-alt"],"f424","M344 0L488 0c13.3 0 24 10.7 24 24l0 144c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87-39-39c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM168 512L24 512c-13.3 0-24-10.7-24-24L0 344c0-9.7 5.8-18.5 14.8-22.2S34.1 320.2 41 327l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2S177.7 512 168 512z"]},rs=es,ts={prefix:"fas",iconName:"down-left-and-up-right-to-center",icon:[512,512,["compress-alt"],"f422","M439.5 7c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2S450.2 240 440.5 240l-144 0c-13.3 0-24-10.7-24-24l0-144c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87zM72.5 272l144 0c13.3 0 24 10.7 24 24l0 144c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87-39-39c-6.9-6.9-8.9-17.2-5.2-26.2S62.8 272 72.5 272z"]},ns=ts;export{Zo as F,aa as a,rs as b,ns as f,as as j,br as r};
