(()=>{"use strict";function e(){const e=document.createElement("div");e.classList.add("hero-box");const t=document.createElement("div");t.classList.add("title"),t.textContent="Ferrari's";const n=document.createElement("div");return n.classList.add("subtitle"),n.textContent="Where food and comfort meet",e.appendChild(t),e.appendChild(n),e}let t=[{heading:"Appetizers",items:[{name:"Garlic Bread",cost:"$7.99"},{name:"Bruschetta",cost:"$8.99"},{name:"Calamari",cost:"$10.99"},{name:"Quesadillas",cost:"$12.99"}]},{heading:"Drinks",items:[{name:"Merlot",cost:"$7.99"},{name:"Long Island Iced Tea",cost:"$9.99"},{name:"Sangria",cost:"$7.99"},{name:"White Russian",cost:"$10.99"}]},{heading:"Entrees",items:[{name:"Sirloin Steak",cost:"$20.99"},{name:"Lobster",cost:"$24.99"},{name:"Chicken Parmasan",cost:"$18.99"},{name:"Pizza",cost:"$17.99"}]},{heading:"Desserts",items:[{name:"Carrot Cake",cost:"$12.99"},{name:"Chocolate Lava Cake",cost:"$11.99"},{name:"Pumpkin Pie",cost:"$9.99"},{name:"Apple Crumble",cost:"$8.99"}]}],n=[{title:"Home",element:e},{title:"Menu",element:function(){const e=document.createElement("div");e.classList.add("menu-box");const n=document.createElement("div");n.classList.add("menu-vertical");const a=document.createElement("div");a.classList.add("menu-horizontal"),e.appendChild(a),e.appendChild(n);const c=document.createElement("div");c.classList.add("menu-title"),c.textContent="Menu",e.appendChild(c);const d=document.createElement("hr");d.classList.add("menu-hr"),e.appendChild(d);const s=document.createElement("div");return s.classList.add("menu-items-container"),t.forEach((e=>{const t=document.createElement("div");t.classList.add("menu-section");const n=document.createElement("div");n.classList.add("menu-section-title"),n.textContent=e.heading,t.appendChild(n),e.items.forEach((e=>{t.appendChild(function(e){const t=document.createElement("div");t.classList.add("menu-item");const n=document.createElement("div");n.textContent=e.name;const a=document.createElement("hr"),c=document.createElement("div");return c.textContent=e.cost,t.appendChild(n),t.appendChild(a),t.appendChild(c),t}(e))})),s.appendChild(t)})),e.appendChild(s),e}},{title:"Contact",element:function(){const e=document.createElement("div");return e.textContent="Contact",e}}];const a=document.querySelector("body"),c=document.querySelector("#content");!function(){const e=document.createElement("div");e.id="nav-container",n.forEach((t=>{let n=document.createElement("button");n.classList.add("button"),n.textContent=t.title,n.addEventListener("click",(()=>{c.innerHTML="",c.appendChild(t.element())})),e.appendChild(n)})),a.appendChild(e)}(),c.appendChild(e())})();