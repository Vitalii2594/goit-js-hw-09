function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var i=o("7Y9D8");function l(e,t){return new Promise(((r,n)=>{const o=Math.random()>.3;setTimeout((()=>{o?r({position:e,delay:t}):n({position:e,delay:t})}),t)}))}({form:document.querySelector(".form")}).form.addEventListener("submit",(t=>{t.preventDefault();let r=Number(t.currentTarget.elements.delay.value);const n=Number(t.currentTarget.elements.step.value),o=Number(t.currentTarget.elements.amount.value);if(n<0||r<0||o<=0)e(i).Notify.failure("Invalid input values");else for(let t=1;t<=o;t+=1)l(t,r).then((({position:t,delay:r})=>e(i).Notify.success(`Fullfilled promise ${t} in ${r}ms`))).catch((({position:t,delay:r})=>e(i).Notify.failure(`Rejected promise ${t} in ${r}ms`))),r+=n}));
//# sourceMappingURL=03-promises.399f62fc.js.map
