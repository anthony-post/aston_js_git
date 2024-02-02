/*Задание 1 – Создать объект counter всеми возможными способами;

1. Cоздание объекта с помощью литерала

let counter = {}

2. Cоздание объекта с помощью конструктора new

let counter = new Object({
	id: 1,
	title: 'Some title',
	description: 'Some description'
})

3. Cоздание объекта с помощью функции-коснтруктора

function Counter() {
	this.id = 1,
	this.title = 'Some title'
}

const counter = new Counter()

4. Cоздание объекта с помощью функции-коснтруктора, где используется оператор return

function Counter() {
	return {
		this.id = 1,
		this.title = 'Some title'
	}
}

const counter = new Counter()

5. Cоздание объекта через class

class Counter {
	constructor(id, title) {
		this.id = id,
		this.title = title
	}
}

let counter = new Counter(1, 'title')

6. Создание объекта с помощью Object.create()

let counter = Object.create(null) //создается пустой объект
let counter = Object.create({}) //создается пустой объект
//создается объект со свойствами id и title, у которых можно указывать дескрипторы
let counter = Object.create({}, {
	id: {
		enumerable: true,
		value: 1
	},
	title: {
		value: 'Some title'
	}
})


7. Создание объекта с помощью Object.assign()

let someObj = {
	id: 1,
	title: 'Some title'
}

let counter = Object.assign({}, someObj)

let counter = Object.assign({}, {
	id: 1,
	title: 'another some title'
})
*/



/*
Задание 2 – Скопировать объект counter всеми возможными способами;

const counter = {
	id: 1,
	title: 'some title',
	value: {
		name: 'counter name'
	}
}

Существует 2 вида копирования объекта - поверхностное (shallow) и глубокое (deep). 
Поверхностное копирование подразумевает, что вложенные объекты не будут склонированы, а вместо этого просто создаются ссылки на их оригинал.
Глубокое копирование объекта создает его копию со всеми вложенными объектами, то есть при последующем изменении вложенного объекта у копии
этот же вложенный объект у объекта-оригинала не будет изменен и наоборот.

1. Поверхностное копирование с помощью spread оператора

const copyCounter = { ...counter } 

2. Поверхностное копирование с помощью Object.assign()

const copyCounter = Object.assign({}, counter)

В первых двух случаях, если в последствии изменять какие-то данные в copyCounter, то эти изменения будут также видны в исходном объекте counter

3. Глубокое копирование с помощью функции structuredClone()

const copyCounter = structuredClone(counter)

4. Глубокое копирвание с помощью библиотеки lodash

import cloneDeep from 'lodash.clonedeep'
const copyCounter = cloneDeep(counter)

5. Глубокое копирование с помощью методов JSON.stringify/JSON.parse
* у этого метода есть ограничение - копируемые данные должны быть сериализуемы. Пример НЕсериализуемых данных - undefined, функция, Symbol

const copyCounter = JSON.parse(JSON.stringify(counter))

6. Копирование объекта с помощью цикла for in

const copyCounter = {}

for (let key in counter) {
	copyCounter[key] = counter[key]
}

*/


/*
Задание 3 – Создать функцию makeCounter всеми описанными и возможными способами;

1. Function Declaration

function makeCounter() {
	//тело функции
}

function makeCounter(a,b) {
	//тело функции в котором используются аргументы функции - a, b
}

function makeCounter(a,b) {
	//тело функции в котором используются аргументы функции - a, b и функция возвращает результат 
	return a + b
}


2. Function Expression

const makeCounter = function() {
	//тело функции
}

const makeCounter = function(a,b) {
	//тело функции в котором используются аргументы функции - a, b
}

const makeCounter = function(a,b) {
	//тело функции в котором используются аргументы функции - a, b и функция возвращает результат
	return a + b
}


3. Arrow function

const makeCounter = () => {
	//тело функции
}

const makeCounter = (a,b) => {
	//тело функции в котором используются аргументы функции - a, b
}

const makeCounter = (a,b) => {
	//тело функции в котором используются аргументы функции - a, b и функция возвращает результат
	return a + b
}


4. Named Function Expressions

const makeCounter = function makeCounterInnerRef() {
	//тело функции
}

const makeCounter = function makeCounterInnerRef(a,b) {
	//тело функции в котором используются аргументы функции - a, b
}

const makeCounter = function makeCounterInnerRef(a,b) {
	//тело функции в котором используются аргументы функции - a, b и функция возвращает результат
	return a + b
}


5. Constructor function

function MakeCounter(a,b) {
	//тело функции-конструктора
	this.a = a
	this.b = b
}

const counter = new MakeCounter(a,b)


6. new Function

const makeCounter = new Function('console.log('это функция создания счетчика')')

const makeCounter = new Function('a', 'b', 'return a + b')

*/



/*
Задание 4 - прочитать и описать работу глобальной функции structuredClone()

Функция structuredClone() появилась относительно недавно в современном Javascript и поддерживается всеми современными браузерами. Она является нативной глобальной функцией и может быть использована
для 'глубокого' копирования объектов в JS - это значит, что данная функция умеет копировать объекты, даже если они в себе содержат другие вложенные объекты или массивы.

У данной функции есть 2 параметра - value и options. Value - это объект, который необходимо склонировать. Options - это объект со свойством transfer,
который в себе может содержать массив так называемых переносимых объектов (transferable objects).

Функция возвращает склонированный объект.

Функция structuredClone() умеет клонировать следующее:

- бесконечно вложенный объекты и массивы
- объекты Date(), Set(), Map(), Error(), RegExp(), ArrayBuffer(), Blob(), File(), ImageData() и некоторые другие
- циклические ссылки
- передавать любые transferable objects (передаваемые объекты)

Функция structuredClone() НЕ умеет клонировать:

- функции
- узлы DOM
- дескрипторы свойств
- сеттеры и геттеры
- прототипы объектов
- примитив Symbol

*/


// Бонус - Задание 1 - Написать функцию глубокого сравнения двух объектов:

const obj1 = { 
	here: { 
		is:"on", 
		other: "3" 
	}, 
	object: "Y" 
};

const obj2 = { 
	here: { 
		is:"on", 
		other: "2" 
	}, 
	object: "Y" 
};

const deepEqual = (obj1, obj2) => {
	// проверка объектов на их длину
	if (Object.keys(obj1).length !== Object.keys(obj2).length) {
		return false
	}
	// итерируем первый объект
	for (item in obj1) {
		// проверяем есть ли один и тотже ключ у обоих объектов
		if (obj1.hasOwnProperty(item) && obj2.hasOwnProperty(item)) {
			// если значение ключа объекта является вложенным объектом
			if (typeof obj1[item] === 'object') {
				// запускаем рекурсивно функцию deepEqual
				// если результат рекурсивного вызова функции равен false, то инвертируем его в true, чтобы выполнилось условие if и возвратился результат false
				// если результат рекурсивного вызова функции равен true (то есть вложенные объекты равны), то инвертируем его в false, чтобы условие if НЕ выполнилось и ничего не возвращаем
				if (!deepEqual(obj1[item], obj2[item])) {
					return false
				}
			} else {
				// если значения ключей обоих объектов не равны
				if (obj1[item] !== obj2[item]) {
					return false
				}
			}
		} else false
	}
	// в случае если цикл for in прошел полностью, то значит объекты идентичны
	return true
};

deepEqual(obj1, obj2)


// Бонус Задание 2 – Развернуть строку в обратном направлении при помощи методов массивов:

function reverseStr(str) {
	// строку str разделяем на массив с помощью split(''), где '' - означает, что каждый символ строки будет являться элементом массива 
	// далее массив инвертируем с помощью reverse()
	// после чего из массива получаем строку с помощью join(''), где '' - означает, что каждый элемент массива добавляется в строку
 	return str.split('').reverse().join('')
}

reverseStr('qwerty')

