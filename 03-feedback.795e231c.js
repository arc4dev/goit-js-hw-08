function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=n);var a=n("kEUo3");const l=document.querySelector(".feedback-form"),u=l.querySelectorAll("input, textarea"),i={email:"",message:""},d=e=>{localStorage.setItem("feedback-form-state",JSON.stringify(e))};(()=>{const e=JSON.parse(localStorage.getItem("feedback-form-state"))||i;u.forEach((t=>{t.value=e[t.name]}))})(),l.addEventListener("input",e(a).throttle((()=>{const e=(e=>Array.from(e).reduce(((e,t)=>(e[t.name]=t.value,e)),{}))(l.querySelectorAll("input, textarea"));d(e)}),500)),l.addEventListener("submit",(e=>{e.preventDefault(),console.log(e.target.elements[0].value,e.target.elements[1].value),l.reset(),d(i)}));
//# sourceMappingURL=03-feedback.795e231c.js.map