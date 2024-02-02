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

Существует 2 вида копирования объекта - повержностное (shallow) и глубокое (deep). 
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
