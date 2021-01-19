npm i axios npm i json-server

add db.json

"devDependencies": { "json-server": "^0.16.3" }, "server": "json-server -w
db.json -d 250 -p 6001"

npm run server npm start

<!-- /===\ -->

npm install --save-dev @babel/plugin-transform-runtime

.babelrc { "presets": ["@babel/preset-env"], "plugins":
["@babel/plugin-proposal-class-properties", "@babel/plugin-transform-runtime"]

}

<!-- /===\ -->

Типы узлов Доступ к дом-элементам

Навигация parentNode previousSibling nextSibling childNodes[] firstChild
lastChild

Доступ querySelector() getElementById()

querySelectorAll() getElementsByClassName()

Свойства .textContent .style .classList

.getAttribute() .setAttribute()

Создание 1 .createElement() => object 2 `<div></div>` .innerHTML

Встраивание 1 appendChild(element) & append(...elements) prepend(...elements)
after(...elements) before(...elements) replaceWith(...elements)
insertBefore(elem, nextElem) 2 insertAdjacentElement(pos, elem)

2 insertAdjacentHTML(pos, ``)

Удаление main.removeChild(elem) elem.remove()

Клонирование elem.cloneNode(true) elem.cloneNode(false)

События click focus blur keydown submit input change

Объект события event target currentTarget

addEventListener('e', func) removeEventListener('e', func)

JSON parse() stringify()

new Promise((res, rej)=>{res(); rej()}) then() catch() finally()

Promise.all() ждет выполнения всех промисов, вернет массив их результатов, если
хоть в одном произойдет ошибка, то общим результатом тоже будет ошибка

Promise.race() вернет первый исполнившийся промис

REST API - бэк representation state transfer стиль бэка по принципам определения
сетевых запросов

AJAX - метод запроса с отрисовкой результата

new XMLHttpRequest() .open('GET', url) .send()

.onload = fucntion() .onprogress= fucntion() .onerror= fucntion()

.abort() - отмена запроса

Fetch API

input.value = ''
