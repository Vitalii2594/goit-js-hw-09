const t=document.getElementById("startBtn"),e=document.getElementById("stopBtn"),d=document.body;let n;t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,n=setInterval((()=>{d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`}),1e3)})),e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.322c3a9d.js.map
