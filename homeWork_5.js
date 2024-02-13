// Порешать типовые задачи - написать порядок и вывод в консоли


// 1)
let promiseTwo = new Promise((resolve, reject) => {
   resolve("a");
}); // создание промиса, который возвращает успешны результат - строка 'a'

promiseTwo
.then((res) => {
   return res + "b";
}) // возвращается промис с результатом строки 'ab'
.then((res) => {
   return res + "с";
}) // возвращается промис с результатом строки 'abc'
.finally((res) => {
   return res + "!!!!!!!";
}) // res будет undefined, так как в метод finally передается функция-коллбэк БЕЗ параметров
.catch((res) => {
   return res + "d";
}) // так как никакой ошибки нет, то этот блок пропустится
.then((res) => {
   console.log(res);
}); // в консоли будет строка 'abc'


// 2)
function doSmth() {
   return Promise.resolve("123");
} // функция doSmth возвращает промис с успешным результатом '123'

doSmth()
.then(function (a) {
   console.log("1", a); // в консоле будет 1 123
   return a;   // вернется промис с результатом 123
}) 
.then(function (b) {
   console.log("2", b); // в консоле будет 2 123
   return Promise.reject("321"); // вернется промис с ошибкой '321'
})
.catch(function (err) {
   console.log("3", err); // в консоле будет 3 321
})
.then(function (c) {
   console.log("4", c); // в консоле будет 4 undefined
   return c; // вернется промис с результатом undefined
});


// 3) Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.
// Входные данные: [10, 12, 15, 21]

const arrNumbers = [10, 12, 15, 21]

// Вариант 1
function getNumbersWithDelay(arr, delay) {
   arr.forEach((item, index) => {
      setTimeout(() => console.log(index), (index + 1) * delay)
   })
}

getNumbersWithDelay(arrNumbers)

// Вариант 2
function getnumbersWithDelay3(arr, delay) {
    arr.map((item, index) => {
        setTimeout(() => console.log(index), (index + 1) * delay)
    })
}

getnumbersWithDelay3(arrNumbers)

// Вариант 3
function getNumbersWithDelay2(arr, delay) {
   for(let i = 0; i < arr.length; i++) {
      setTimeout(() => {
         console.log(i)
      }, (i + 1) * delay)
   }
}

getNumbersWithDelay2(arrNumbers, 3000)


// 4) Прочитать про Top Level Await (можно ли использовать await вне функции async)
/*
Top Level Await - это возможность (доступна начиная с ES13(2022)) использовать оператор await вне асинхронных функций.

Есть несколько кейсов, в которых можно использовать Top Level await:

1) ЗАГРУЗКА МОДУЛЕЙ через import (работает только с ES6 modules(esm))

const modules = await import('./modules')


2) ЗАГРУЗКА МОДУЛЕЙ через import в конструкции try...catch

let module
try {
   module = await import('./moduleA.esm')
} catch {
   module = await import('./moduleB.esm')
}


3) ИСПОЛЬЗОВАНИЕ в тэге script с типом type=module

<script type=module>
   await Promise.resolve('Resolved')
   console.log('load completed')
</script>


4) ИНИЦИАЛИЗАЦИЯ в течении загрузки

const connection = await loadMongoDB() 

*/



// БОНУС ЗАДАНИЕ 
/* Необходимо реализовать функцию fetchUrl, которая будет использоваться следующим образом.
Внутри fetchUrl можно использовать условный метод fetch, который просто возвращает
Promise с содержимым страницы или вызывает reject */
// fetchUrl('https://google/com&#39;)
// .then(...)
// .catch(...) // сatch должен сработать только после 5 неудачных попыток получить содержимое страницы внутри fetchUrl

const invalidUrl = 'https://google/com&#39'
const validUrl = 'https://jsonplaceholder.typicode.com/todos/1'

// Варинат 1 
async function fetchUrl(url, tryCounter = 4) {
   try {
      const response = await fetch(url)
      const data = await response.json()
      return response.ok ? Promise.resolve(data) : Promise.reject(data)
   } catch(error) {
      return tryCounter > 0 ? fetchUrl(url, tryCounter - 1) : Promise.reject(error)
   }
}

fetchUrl(invalidUrl)
fetchUrl(validUrl)

// Вариант 2
function fetchUrl2(url, tryCounter = 4) {
   return fetch(url)
      .then(response => response.ok ? Promise.resolve(response.json()) : Promise.reject(response))
      .catch(error => tryCounter > 0 ? fetchUrl(url, tryCounter - 1) : Promise.reject(error))
}

fetchUrl2(invalidUrl)
fetchUrl2(validUrl)


