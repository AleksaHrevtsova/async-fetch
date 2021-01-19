const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }
  console.log(res);
  const result = res.json();

  //   console.log(result);
  // return result;
  return res;
};

getUsers().then((data) => {
  console.log("async", data);
  return data;
});
// ================
function getS() {
  return fetch("https://jsonplaceholder.typicode.com/users");
}
console.log("fetch", getS());
// ============================
// function hello() {
//   return `hello`;
// }
// console.log(hello());

// // async преобразовывает обычную функцию в асинхронную,
// // а результат вызова оборачивает в промис
// async function hi() {
//   return `hi`;
// }
// // вызов асинхронной функции вернет промис
// console.log(hi());
// ============================

// // || .reject()
// const getUsers = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(resresult);
//   } catch (err) {
//     throw err;
//   }
// };

// getUsers()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
