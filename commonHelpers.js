import{a as q,S as v,i as y}from"./assets/vendor-64b55ca9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();let l=15;async function f(){new URLSearchParams({page:a,per_page:l});const e="42261083-50fe706ca9c2c1734499a9937",r=w.value.trim();return(await q.get(`https://pixabay.com/api/?key=${e}&q=${encodeURIComponent(r)}&image_type=photo&orientation=horizontal&safesearch=true&page=${a}&per_page=${l}`)).data}let s;function g(e){const r=e.hits.map(t=>`<li class="gallery-item"><a href="${t.webformatURL}">
              <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}"></a>
              <p><b>Likes: </b>${t.likes}</p>
              <p><b>Views: </b>${t.views}</p>
              <p><b>Comments: </b>${t.comments}</p>
              <p><b>Downloads: </b>${t.downloads}</p>
              </li>`).join("");s&&s.destroy(),b.insertAdjacentHTML("beforeend",r),s=new v(".gallery a",P),s.on("show.simplelightbox"),s.refresh()}const P={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animation:250},m=document.querySelector(".form"),b=document.querySelector(".gallery"),w=document.querySelector("input"),$=document.querySelector(".container"),p=document.querySelector(".load-more");let a=1,L;const S=()=>{const e=document.createElement("span");e.classList.add("loader"),$.append(e)},u=()=>{const e=document.querySelector(".loader");e&&e.remove()},h=()=>{p.style.display="block"},i=()=>{p.style.display="none"};function B(e,r){return e>=r}m.addEventListener("submit",async e=>{if(S(),a=1,e.preventDefault(),i(),b.innerHTML="",w.value.trim()===""){u();return}try{const t=await f();if(g(t),u(),h(),t.hits.length===0){y.error({title:"",backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!"});const{height:c}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:c*2,behavior:"smooth"})}B(l,t.totalHits)?i():(h(),L=Math.ceil(t.totalHits/l)),m.reset()}catch{i()}});p.addEventListener("click",async()=>{S();try{a+=1;const e=await f();g(e),u();const{height:r}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"}),a>=L&&(y.warning({title:"",message:"We're sorry, but you've reached the end of search results."}),i())}catch{u(),i()}});
//# sourceMappingURL=commonHelpers.js.map