function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=n);var a=n("kEUo3");const l=document.querySelector(".feedback-form"),i=l.querySelectorAll("input, textarea"),d={email:"",message:""},u=e=>{localStorage.setItem("feedback-form-state",JSON.stringify(e))};(()=>{const e=JSON.parse(localStorage.getItem("feedback-form-state"))||d;i.forEach((t=>{t.value=e[t.name]}))})(),l.addEventListener("input",e(a).throttle((()=>{const e=(e=>Array.from(e).reduce(((e,t)=>(e[t.name]=t.value,e)),{}))(l.querySelectorAll("input, textarea"));u(e)}),500)),l.addEventListener("submit",(()=>{u(d)}));
//# sourceMappingURL=03-feedback.4e6cbeb4.js.map
