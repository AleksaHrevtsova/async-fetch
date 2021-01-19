import css from "./css/styles.css";
import axios from "axios"; // ES6
// const axios = require("axios"); //ES5
console.dir(axios);
// CRUD
// create read update delete
// get    post patch || put delete
let page = 1;
let query = "nature";
let key = `563492ad6f91700001000001390f9fee0a794c1182a72e49e0e0eae2`;
let options = {
  method: "GET",
  headers: {
    Authorization: key,
  },
};

let baseURL = `https://api.pexels.com/v1/search?query=${query}&per_page=${page}&api_key=${key}`;
// fetch
// fetch(baseURL).then((response) => console.log(response));
axios
  .get(baseURL, options)
  .then((res) => {
    console.log(res);
    return res.data;
  })
  .then((data) => {
    console.log(data.photos);
    return data.photos;
  });

// import "./js/pixa.js";
// import "./js/async.js";
// import "./js/pexels.js";

// // GET (get)
// querySelector(".class");
// querySelector("[alt='']");
// querySelector("#id");
// getElementById("id");

// querySelectorAll(".class");
// querySelectorAll("tag");

// getElementsByClassName(".class");

// //SET (post)
// createElement("tag");
// const div = `<div></div>`;
// div.style = "";

// // UPDATE (put, patch)
// textContext;
// value;

// style;

// classList.add().remove().toggle();

// addEventListener("event", () => {});

// addEventListener("event", func);
// removeEventListener("event", func);

// setTimeout(() => {}, 0);
// let id = setInterval(() => {}, 0);

// clearInterval(id);

const form = document.querySelector(".form");

form.addEventListener("change", (event) => {
  event.preventDefault();
  console.log(event);
  // console.log(event.target.elements.query.value);
  let data = event.currentTarget.elements.query.value;
  console.log(data);
});

// input debounce(()=>{},400)
// blur => onBlur()
// change => onChange()
// click => onCLick()
// submit => onSubmit()

form.onsubmit = () => {
  console.log(`submit`);
};
// class => className

localStorage.getItem("key");
let val = JSON.stringify({ name: "Sandra" });
localStorage.setItem("name", val);
localStorage.removeItem("key");
