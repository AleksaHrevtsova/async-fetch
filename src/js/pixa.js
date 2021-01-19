import template from "../templates/items.hbs";
const list = document.querySelector(".gallery");
const form = document.querySelector(".form");
const moreBtn = document.querySelector(".more");

const baseUrl = `https://pixabay.com/api/`;
let apiKey = `17634856-dc2baf9a621a1f19c64e21778`;
let query = "moon";
// let params = `?key=17634856-dc2baf9a621a1f19c64e21778`;
// let params = `?key=${apiKey}&q=${query}`;

let page = 1;
let perPage = 5;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let queryValue = e.target.elements.query.value;
  // getFetch(queryValue);
  getAsyncFetch(queryValue);
});

moreBtn.addEventListener("click", () => {
  page = +1;
});

// function getFetch(q) {
//   let params = `?key=${apiKey}&q=${q}&page=${page}&per_page=${perPage}`;
//   let url = baseUrl + params;
//   return fetch(url)
//     .then((r) => r.json())
//     .then((d) => {
//       console.log(d.hits);
//       return d.hits;
//     })
//     .then((array) => {
//       return array.map((el) => {
//         el.tags = el.tags.split(", ");
//         return el;
//       });
//     })
//     .then((data) => {
//       let items = template(data);
//       return items;
//     })
//     .then((result) => {
//       list.insertAdjacentHTML("afterbegin", result);
//       if (list.children) {
//         moreBtn.classList.remove("isHidden");
//       } else {
//         moreBtn.classList.add("isHidden");
//       }
//       return list;
//     });
// }

async function getAsyncFetch(q) {
  let params = `?key=${apiKey}&q=${q}&page=${page}&per_page=${perPage}`;
  let url = baseUrl + params;
  let res = await fetch(url);
  let resJson = await res.json();
  const myData = resJson.hits;
  myData.map((el) => {
    el.tags = el.tags.split(", ");
    return el;
  });
  let items = template(myData);
  list.insertAdjacentHTML("afterbegin", items);
  return list;
}
