import{i as a,S as p}from"./assets/vendor-BrddEoy-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d=void 0,f="https://pixabay.com/api/";function m(i){const r=`${f}?key=${d}&q=${i}&per_page=12&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function y(i){return i.map(({webformatURL:r,largeImageURL:o,tags:s,likes:e,views:t,comments:n,downloads:u})=>`<li class="gallery-card">
        <a href="${o}">
          <img class="gallery-img" width="360" height="152" src="${r}" alt="${s}" />
        </a>
        <ul class="card-stats">
            <li class="card-stats-item">
              <p>Likes</p>
              <p>${e}</p>
            </li>
            <li class="card-stats-item">
              <p>Views</p>
              <p>${t}</p>
            </li>
            <li class="card-stats-item">
              <p>Comments</p>
              <p>${n}</p>
            </li>
            <li class="card-stats-item">
              <p>Downloads</p>
              <p>${u}</p>
            </li>
        </ul>
    </li>`).join("")}const h=document.querySelector(".form"),l=document.querySelector(".js-gallery"),c=document.querySelector(".loader");h.addEventListener("submit",g);async function g(i){i.preventDefault();const r=i.currentTarget,o=r.elements.user_query.value.trim();if(o==""){a.show({title:"Error",message:"Input cant be empty!",position:"center",color:"red"});return}l.innerHTML="";try{c.style.display="flex  ";const s=await m(o);if(s.total===0){a.show({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",position:"center",color:"yellow"});return}l.innerHTML=y(s.hits),new p(".js-gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}catch(s){console.error("Error fetching photos:",s)}finally{c.style.display="none",r.reset()}}
//# sourceMappingURL=index.js.map
