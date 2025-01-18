import{i as n,S as d}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="48310758-fb94caf5d2a9d2c066442dfac",m="https://pixabay.com/api/";function y(s){const o=`${m}?key=${f}&q=${encodeURIComponent(s)}&lang=en&per_page=12&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(r=>{if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return r.json()})}function h(s){return s.map(({webformatURL:o,largeImageURL:r,tags:i,likes:e,views:t,comments:a,downloads:p})=>`<li class="gallery-card">
        <a href="${r}">
          <img class="gallery-img" width="360" height="152" src="${o}" alt="${i}" />
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
              <p>${a}</p>
            </li>
            <li class="card-stats-item">
              <p>Downloads</p>
              <p>${p}</p>
            </li>
        </ul>
    </li>`).join("")}const u=document.querySelector(".form"),l=document.querySelector(".js-gallery"),c=document.querySelector(".loader");u.addEventListener("submit",g);async function g(s){s.preventDefault();const o=s.currentTarget.elements.user_query.value.trim();if(!o){n.show({title:"Error",message:"Input cannot be empty!",position:"center",color:"red"});return}l.innerHTML="";try{c.style.display="flex";const r=await y(o);if(r.totalHits===0){n.show({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",position:"center",color:"yellow"});return}l.innerHTML=h(r.hits),new d(".js-gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}catch(r){console.error("Error fetching photos:",r)}finally{c.style.display="none",u.reset()}}
//# sourceMappingURL=index.js.map
