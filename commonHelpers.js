import{a as q,S as h,i as g}from"./assets/vendor-64b55ca9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function e(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=e(o);fetch(o.href,n)}})();let l=15;async function f(){new URLSearchParams({page:c,per_page:l});const t="42261083-50fe706ca9c2c1734499a9937",r=w.value.trim();return(await q.get(`https://pixabay.com/api/?key=${t}&q=${encodeURIComponent(r)}&image_type=photo&orientation=horizontal&safesearch=true&page=${c}&per_page=${l}`)).data}let a=new h(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function v(t){const r=t.hits.map(e=>`<li class="gallery-item"><a href="${e.largeImageURL}">
        <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}"></a>
        <div class="modat-text">
          <div class="modal-element"><p>Likes</p><span>${e.likes}</span></div>
          <div class="modal-element"><p>Views</p><span>${e.views}</span></div>
          <div class="modal-element"><p>Comments</p><span>${e.comments}</span></div>
          <div class="modal-element"><p>Downloads</p><span>${e.downloads}</span></div>
        </div>
      </li>`).join("");a&&a.destroy(),L.insertAdjacentHTML("beforeend",r),a=new h(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),a.on("show.simplelightbox",function(e){const{alt:s}=e.target.querySelector("img");e.caption.innerHTML=s}),a.refresh()}const m=document.querySelector(".form"),L=document.querySelector(".gallery"),w=document.querySelector("input"),P=document.querySelector(".container"),p=document.querySelector(".load-more");let c=1,b;const S=()=>{const t=document.createElement("span");t.classList.add("loader"),P.append(t)},d=()=>{const t=document.querySelector(".loader");t&&t.remove()},y=()=>{p.style.display="block"},i=()=>{p.style.display="none"};function $(t,r){return t>=r}m.addEventListener("submit",async t=>{if(S(),c=1,t.preventDefault(),i(),L.innerHTML="",w.value.trim()===""){d();return}try{const e=await f();if(v(e),d(),y(),e.hits.length===0){g.error({title:"",backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!"});const{height:s}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}$(l,e.totalHits)?i():(y(),b=Math.ceil(e.totalHits/l)),m.reset()}catch{i()}});p.addEventListener("click",async()=>{S();try{c+=1;const t=await f();v(t),d();const{height:r}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"}),c>=b&&(g.warning({title:"",message:"We're sorry, but you've reached the end of search results."}),i())}catch{d(),i()}});
//# sourceMappingURL=commonHelpers.js.map
