!function(){var e="https://api.thecatapi.com/v1",n="live_slKIqxXh0kxnPRow13pYIQUyWrJB3cPIof88g8aqP4H9XqH1gd0m50Ezk8RaxKYf";function t(t){return fetch("".concat(e,"/images/search?api_key=").concat(n,"&breed_ids=").concat(t)).then((function(e){if(e.ok)return e.json();throw new Error(e.status)}))}var c=document.querySelector(".breed-select"),a=document.querySelector(".cat-info"),i=document.querySelector(".loader"),s=document.querySelector(".error");function o(){s.classList.remove("is-hidden"),c.classList.add("is-hidden")}s.classList.add("is-hidden"),fetch("".concat(e,"/breeds?api_key=").concat(n)).then((function(e){if(e.ok)return e.json();throw new Error(e.status)})).then((function(e){i.classList.replace("loader","is-hidden");var n=e.map((function(e){var n=e.name,t=e.id;return"<option value=".concat(t,">").concat(n,"</option>")}));c.insertAdjacentHTML("beforeend",n),c.classList.remove("is-hidden")})).catch(o),c.addEventListener("change",(function(e){i.classList.replace("is-hidden","loader"),a.classList.add("is-hidden"),t(e.target.value).then((function(e){var n=e[0],t=n.url,c=n.breeds[0],s=c.name,o=c.description,r=c.temperament;a.innerHTML="\n      <img src='".concat(t,"' alt='").concat(s,"' width='400'/>\n      <div class='box'>\n      <h2>").concat(s,"</h2>\n      <p>").concat(o,"</p>\n      <p>").concat(r,"</p>\n      </div>"),a.classList.remove("is-hidden"),i.classList.add("is-hidden")})).catch(o)}))}();
//# sourceMappingURL=index.e0a4e8e5.js.map
