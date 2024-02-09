/*
1) Написать ответ - почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие ?

Массивы в JS отличаются от массивов в некоторых других языках программирования тем, что они относяться к ДИНАМИЧЕСКОМУ типу (размер массива может может меняться в процессе выполнения программы),
а также являются ГЕТЕРОГЕННЫМИ (тип данных, содержащийся в одном и том же массиве может быть разный).

Массив в JS совмещают в себе несколько структур данных:

- стек
- очередь
- связный список

*/




/*
2) Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило - some value (Привязать через bind, call, apply)
*/


function logger() {
    console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

// Вариант с помощью call()
logger.call(obj)

// Вариант с помощью apply()
logger.apply(obj)

// Вариант с помощью bind()
const boundLogger = logger.bind(obj)
boundLogger()




/*
3.1 Массивы:
*/

// - Создайте массив чисел и найдите его сумму.

const arrayNumber = [1, 5, -7, 10, 0, -3, 2]
// сначала проверяем передаваемый массив на пустоту. Если не пустой - суммируем элементы массива, иначе - сумма элементов пустого массива равня 0
const getSumArrayNumber = arr => arr.length ? arr.reduce((accumulator, current_element) => accumulator + current_element, 0) : 0

getSumArrayNumber(arrayNumber)


// - Создайте массив строк и объедините их в одну строку.

const arrayString = ['Method', 'join', 'can', 'combine', 'strings', 'in', 'one', 'string']
// сначала проверяем передаваемые массив на пустоту. Если массив не пустой - применяем метод join, иначе - вернется пустая строка
const getOneString = arr => arr.length ? arr.join(' ') : ''

getOneString(arrayString)


// - Найдите максимальный и минимальный элементы в массиве чисел.

const minValue = Math.min(...arrayNumber)

const maxValue = Math.max(...arrayNumber)

// получаем массив в котором будет содержаться минимальное и максимальное значение массива
const getMinMaxArrayNumber = arr => [min, max] = arrayNumber.reduce(([prevMin, prevMax], current_element) => [ Math.min(prevMin, current_element), Math.max(prevMax, current_element) ], [Infinity, -Infinity])

getMinMaxArrayNumber(arrayNumber)


/*
3.2 Stack (стек):
*/

// - Реализуйте стек с использованием массива.

// Вариант 1
function StackFunc() {
	const list = []
	// новый элемент добавляется в конец массива и в консоль выводится сам массив
	this.addEl = function(element) {
		list.push(element)
		console.log(list)
	}
	// если массив не пустой, то из массива удаляется последний элемент и в консоль выводится удаленный элемент массива, иначе - сообщение 'Empty stack'
	// также в консоль выводится сам массив
	this.removeEl = function() {
		list.length ? console.log(`The element ${list.pop()} has been removed from the stack`) : console.log('Empty stack')
		console.log(list)
	}
	// если массив не пустой, то в консоль выводится последний элемент массива, иначе - сообщение 'Empty stack'
	this.peekEl = function() {
		list.length ? console.log(list.at(-1)) : console.log('Empty stack')
	}
	// проверка стека на пустоту
	this.isEmpty = function() {
		list.length ? console.log('Stack is not empty') : console.log('Empty stack')
	}
}

const myStack = new StackFunc()

myStack.addEl('New element of the stack')
myStack.addEl('Another element of the stack')
myStack.addEl('Some element of the stack')

myStack.peekEl()

myStack.removeEl()

myStack.peekEl()

myStack.isEmpty()



// Вариант 2
class Stack {
	constructor() {
		this.list = []
	}
	// новый элемент добавляется в конец массива и в консоль выводится сам массив
	pushElement(item) {
		this.list.push(item)
		console.log(this.list)
		return this.list.length
	}
	// если массив не пустой, то из массива удаляется последний элемент и в консоль выводится удаленный элемент массива, иначе - сообщение 'Empty stack'
	popElement() {
		this.list.length ? console.log(this.list.pop()) : console.log('Empty stack')
		return this.list.length
	}
	// если массив не пустой, то в консоль выводится последний элемент массива, иначе - сообщение 'Empty stack'
	peekElement() {
		this.list.length ? console.log(this.list.at(-1)) : console.log('Empty stack')
		return this.list.length
	}
	// проверка стека на пустоту
	isEmpty() function() {
        return this.list.length ? console.log('Stack is not empty') : console.log('Empty stack')
    }
}

const stack = new Stack()

stack.pushElement('New Element of array')
stack.pushElement('Another new element of array')
stack.pushElement('Some elememt of array')

stack.peekElement()

stack.pop()
stack.pop()


// Вариант 3
const stackList = []

const stackObj = {
	peekEl: function() {
		return this.length ? console.log(this.at(-1)) : console.log('Empty stack')
	},
    addEl: function(item) {
        this.push(item)
        return console.log(this)
    },
    removeEl: function() {
        return this.length ? console.log(this.pop()) : console.log('Empty stack')
    },
    isEmpty: function() {
        return this.length ? console.log('Stack is not empty') : console.log('Empty stack')
    }
}

stackObj.peekEl.call(stackList)
stackObj.addEl.call(stackList, 'newValue')
stackObj.addEl.call(stackList, 'anotherNewValue')
stackObj.removeEl.call(stackList)
stackObj.isEmpty.call(stackList)



/*
3.3 Queue (очередь):
*/

// - Реализуйте очередь с использованием массива.
// - Имитируйте работу очереди на примере ожидания на кассе.

// Вариант 1
function QueueFunc() {
	const list = []
	// добавляет элемент в конец массива
	this.addElement = function(element) {
		list.push(element)
		console.log(list)
	}
	// если массив не пустой, то удаляется первый элемент массива, иначе - выводится сообщение 'Empty queue'
	this.removeElement = function() {
		list.length ? console.log(list.shift()) : console.log('Empty queue')
		console.log(list)
	}
	// если массив не пустой, то в консоль выводится первый элемент массива (начало очереди), иначе - выводится сообщение 'Empty queue'
	this.showFirstElement = function() {
		list.length ? console.log(`${list.at(0)} is in the beginning of this queue`) : console.log('Empty queue')
	}
	// проверка массива на пустоту
	this.isEmpty = function() {
		list.length ? console.log('Queue is not empty') : console.log('Empty queue')
	}
}

const myQueue = new QueueFunc()
// последовательно добавляем 3 клиентов в очередь
myQueue.addElement('First customer')
myQueue.addElement('Second customer')
myQueue.addElement('Third customer')
// показываем первого клиента в очереди
myQueue.showFirstElement()
// первый клиент покинул очередь
myQueue.removeElement()
// показываем первого клиента в очереди после того, как предыдущий клиент покинул очередь
myQueue.showFirstElement()
// первый клиент покинул очередь
myQueue.removeElement()
// показываем первого клиента в очереди
myQueue.showFirstElement()
// проверяем очередь - остались еще клиенты или нет
myQueue.isEmpty()


// Вариант 2
class Queue {
	constructor {
		this.list = []
	}
	// добавляет элемент в конец массива
	addElement(item) {
		this.list.push(item)
		console.log(this.list)
		return this.list.length
	}
	// если массив не пустой, то удаляется первый элемент массива, иначе - выводится сообщение 'Empty queue'
	delElement() {
		this.list.length ? console.log(this.list.shift()) : console.log('Empty queue')
		return this.list.length
	}
	// если массив не пустой, то в консоль выводится первый элемент массива, иначе - выводится сообщение 'Empty queue'
	showFirstElement() {
		this.list.length ? console.log(this.list.at(0)) : console.log('Empty queue')
		return this.list.length
	}
	// проверка массива на пустоту
	isEmpty() function() {
        return this.length ? console.log('Stack is not empty') : console.log('Empty stack')
    }
}

const queue = new Queue()

queue.addElement('New element')
queue.addElement('Another new element')
queue.addElement('Some element')

queue.showFirstElement()

queue.delElement()
queue.delElement()





/*
Бонус задание: Реализовать полифил(собственную функцию реализующую встроенную в js) метода bind()
*/

const objToBind = {
	name: 'Anton'
}

const someFunc = function(lang, city) {
	console.log(`${this.name} ${lang} ${city}`)
}

//вариант с function declaration
Function.prototype.customBind = function(objToBind, ...argList) {
	let func = this
	return function(...anotherArgList) {
		func.apply(objToBind, [...argList, ...anotherArgList])
	}
}

// вариант с arrow function
Function.prototype.customBind2 = function(objToBind, ...argList) {
	return (...anotherArgList) => this.apply(objToBind, [...argList, ...anotherArgList])
}

let newSomeFunc = someFunc.customBind(objToBind, 'JS')
let newSomeFunc2 = someFunc.customBind2(objToBind, 'JS')

newSomeFunc('Kazan')
newSomeFunc2('Kazan')

