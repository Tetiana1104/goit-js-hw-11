import{S as m,i as y}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const h="46879645-5baa1dadd9c91ee84aac66fac",g="https://pixabay.com/api/";async function w(s){const o=`${g}?key=${h}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15`,r=await fetch(o);if(!r.ok)throw new Error("Failed to fetch images");return(await r.json()).hits.map(({webformatURL:e,largeImageURL:t,tags:n,likes:d,comments:u,views:f,downloads:p})=>({webformatURL:e,largeImageURL:t,tags:n,likes:d,comments:u,views:f,downloads:p}))}function L(s){const o=document.querySelector(".gallery");o.innerHTML=s.map(r=>`
        <div class="image-card">
            <a href="${r.largeImageURL}">
                <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
            </a>
            <div class="image-info">
                <span>💖 ${r.likes}</span>
                <span>👀 ${r.views}</span>
                <span>💬 ${r.comments}</span>
                <span>📥 ${r.downloads}</span>
            </div>
        </div>
    `).join("")}function c(s){iziToast.error({title:"Error",message:s,position:"topRight",color:"red"})}const i=document.querySelector("#search-form"),v=document.querySelector(".gallery"),l=document.getElementById("loader");let $=new m(".gallery a");i.addEventListener("submit",async s=>{var r;s.preventDefault();const o=(r=i.elements.imageSearch)==null?void 0:r.value.trim();if(!o){c("Please enter a valid search query");return}l.style.display="block";try{const a=await w(o);v.innerHTML="",a.length===0?y.show({title:"No results found",message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}):(L(a),$.refresh())}catch{c("An error occurred while fetching images. Please try again.")}finally{l.style.display="none"}i.reset()});
//# sourceMappingURL=index.js.map
