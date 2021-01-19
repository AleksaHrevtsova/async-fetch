import { createClient } from "pexels";
let key = `563492ad6f91700001000001390f9fee0a794c1182a72e49e0e0eae2`;

const client = createClient(key);
console.log(client);
let page = 1;
let query = "nature";
let baseURL = `https://api.pexels.com/v1/search?query=${query}&per_page=${page}`;

fetch(baseURL)
  .then((r) => r.json())
  .then((d) => console.log(d));
  
// client.photos.search({ query, per_page: 1 });
