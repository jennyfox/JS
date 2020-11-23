// use strict
// let age = prompt ("How old are you?", 
// '')
//     if (age >= 14 && age <= 90) {
//     alert ("Your age is acceptable")
// }   else {
//     alert ("Sorry, you can't get access")
// }

// let age = prompt ("How old are you?", 
// '')
//     if (!(age >= 14 && age <= 90)) {
//     alert ("Your age is acceptable")
// }   else {
//     alert ("Sorry, you can't get access")
// }

// let login = prompt ("Введите логин", '');
//     if (login = "Админ") {
//         let pass = prompt ("Введите пароль", '');
//             if (pass = "Я главный") {
//                 alert ("Здравствуйте")
//             } 
//             else {
//                 if (pass = '' || pass = null) {
//                 alert ("Отменено")
//                 } 
//                 else {
//                 alert ("Неверный пароль")
//                 }
//             }       
//     else {
//         if (login = '' || login = null) {
//             alert ("Отменено")
//         } 
//        else {
//             alert ("Я вас не знаю")
//        }
//     }

// Task 1

// let n = 'number';
// let s = 'symbol';
// let str = 'string';
// let b = 'boolean';
// let bi = 'bigint';
// let o = 'object';
// let nu = 'null';
// let u = 'undefined';
// alert (s);
// alert (str);
// alert (b);
// alert (bi);
// alert (o);
// alert (nu);
// alert (u);
// console.log (n, s, str, b, bi, o, nu, u);

// Task 2

// let age = prompt ('Сколько вам лет?');
// alert ('Поздравляем, вам ' + age + ' полных лет!');
// if (age >= 18) {
//   alert ('Совершеннолетний пользователь');
// } else {
//   alert ('Несовершеннолетний пользователь');
// }

// // Task 3

// let numbers = [10, 25, 100];
// let a = numbers [0];
// let b = numbers [1];
// let c = numbers [2];
// alert ('Давайте сложим числа ' + a + ', ' + b + ', ' + c);
// function sum (a, b, c) {
//   return a + b + c;
// }
// let result = sum (a, b, c);
// alert ('Сумма этих чисел равна ' + result);

// Task 4 

function hello1 () {
    return ('Привет, JavaScript!');
}
hello1 ();

// Task 5 

function hello2 (name = 'гость') {
    alert ('Привет' + ', ' + name);
}
hello2 ('Василий');
hello2 ();

// Task 6

function mul (n,m) {
    return n * m;
}
mul (3, 6);

// Task 7

function repeat (str = '', n = 2) {
    return (str * 2);
}
repeat ('Повтори меня');

// Task 8

// Создайте функцию rgb(a, b, c), которая будет принимать три числовых аргумента и возвращать строку вида «rgb(23,100,134)». 
// 	  Если аргументы не заданы, считать их равными нулю. Не проверять переменные на тип данных.
function rgb(a = 0, b = 0, c = 0) {
    return `rgb(${a}, ${b}, ${c})`;
}
rgb (23, 100, 134);

// Task 9

function avg (a, b, c) {
    return ((a + b + c) / 3);
}
avg (4, 9, 15);

// Task 10 
// - Напишите функцию words(n), которая в зависимости от переданного в нее целочисленного аргумента n, будет выводить слово «товар» 
// в нужно форме («12 товаров», но «22 товара»). По умолчанию аргумент n должен иметь значение 0.

function words (n = 0) {
    let ostatok1 = n % 10;
    let ostatok2 = n % 100;
    if (ostatok1 === 1 && ostatok2 !== 11) {
        alert (n + ' товар');
    } else if (ostatok1 === 2 || ostatok1 === 3 || ostatok1 === 4 && ostatok2 !== 12 || ostatok2 !== 13 || ostatok2 !== 14) {
        alert (n + ' товара');
    } else {
        alert (n + ' товаров');
    }
}

// Task 11

function sum (a, b) {
    let sum = 0;
    for (let i = 0, i < arguments.length; i++) {
        sum += arguments [i];
    }
    return sum;
}
let result = sum (1, 3, 7);


// Task 12

function f() {
    return (arguments.lengh >= 1) ? 1 : 0
}

// let f = (x = 0) => (x = undefined)? return 0 : console.log (x);

// Task 13

function sum (a, b) {
    let summa = 0;
    for (x in sum) {
        summa += x;
    }
    return summa;
}

let sum = (a, b) => {
    let summa = 0;
    for (x in sum) {
        summa += x;
    }
    return summa;
}

// Task 14

let arr = [1, 2, 56, 28, 90, 5, 6];
arr.sort ( (a, b) => a - b );
console.log (arr);
console.log ( arr.indexOf(6, 0) );

// Создать массив объектов для юзеров [{name: ‘Ivan’, age: 18}, {name: ‘Petr’, age: 12}, {name: ‘Sidor’, age: 25}, {name: ‘Pavel’, age: 24}, {name: ‘Sasha’, age: 29}]
// 	  Написать скрипт, который будет на выходе отдавать два массива. Первый с совершеннолетними пользователями, второй с несовершеннолетними.
// 	  !Использовать метод filter. Полученные на выходе два массива отсортировать (каждый из них в отдельности) 
//            по старшинству членов (от самого старшего к самому младшему). Расширить предыдущее задание так чтобы из исходного массива удалялись все несовершенолетние пользователи.

let users = [
    {name: ‘Ivan’, age: 18}, 
    {name: ‘Petr’, age: 12}, 
    {name: ‘Sidor’, age: 25}, 
    {name: ‘Pavel’, age: 24}, 
    {name: ‘Sasha’, age: 29}
];
let teens = users.filter (item => item.age < 18);
let adults = users.filter (item => item.age >= 18);
alert (teens);
alert (adults);
let SortedAdults = adults.reverse ((a, b) => a - b);
alert (SortedAdults);
// let teenInd = users.findIndex (item => item.age < 18);
// users.splice (teenInd);
users.pop (...teens);
alert (users);
// мб так?

// - Дан массив var arr = [1, 10, 25, 67, 87, 56]. Добавить в конец массива число 4. Вывести полученный массив и в переменную leng сохранить его новую длину.
//       Из полученного массива извлечь последний элемент. Извлеченный элемент добавить вначало массива. 
      
let arr = [1, 10, 25, 67, 87, 56];
let a = arr.push (4);
alert (arr);
let leng = arr1.length; 
// это же то же самое, что let leng = arr1 ?
let last = arr.pop ();
alert (last);
let b = arr.unshift (last);
alert (arr);

// - Дан массив var arr1 = [2, 5, 90, 4]. Обьеденить данный массив с массивом из предыдущего задания (с учетом тех изменений, которые вы с ним уже произвели в том задании ) 
//           и записать результат в переменную arr2. Сами массивы arr и arr1 должны остаться неизмененными. 

let arr = [4, 1, 10, 25, 67, 87, 56];
let arr1 = [2, 5, 90, 4];
let arr2 = arr.concat (arr1);
alert (arr2);

// - В образовавшемся массиве arr2 определить положение числа 90 (ее индекс) и удалить ее из массива. Вместо 90 добавить в массив числа 19, 2, 91.

let i = arr2.indexOf (90);
arr2.splice (i, 1, 19, 2, 91);
alert (arr2);

// - В измененном массиве arr2 извлечь последние 4 элемента с конца и записать их в массив arr3. Сам массив arr2 не должен 
//       измениться (извлеченные из него эелементы должны в нем остаться). Массив arr3 осортировать по возрастанию.
      
let newarr = arr2.slice ();
alert (newarr);
let arr3 = newarr.splice (-1, 4);
alert (arr2);
alert (arr3);
// почему вместо массива с удаленными элементами он вернул его длину?
arr3.sort ((a, b) => a - b);
// соответственно, сортировка не удалась
alert (arr3);

// - Отсортировать массив arr2 по убыванию. Посчитать сумму его эелементов. (Попробуйте использовать метод reduce в статье про методы есть его описание).

arr2.reverse ((a, b) => a - b);
alert (arr2);
let result = arr2.reduce ((sum, item) => sum + item, 0);
alert (result);

	  
// - Дан массив пользователей. var users = [
//  						  {id: 1, name: "Вася", age: 20},
//   						  {id: 2, name: "Петя", age: 19},
//   						  {id: 3, name: "Маша", age: 18}
// 						];
// 	  Добавить в этот маccив еще одного пользователя {id: 4, name: "Дима", age: 17}. Инвертируйте данный массив и выведите возраст пользователя с именем "Петя".
	   
//     - В массиве users посчитайте общий суммарный возраст всех пользователей.
    
let users = [
    {id: 1, name: "Вася", age: 20},
    {id: 2, name: "Петя", age: 19},
    {id: 3, name: "Маша", age: 18}
];
users.push ({id: 4, name: "Дима", age: 17});
users.reverse ();
alert (users);
let user = users.find (item => item.name == "Петя");
alert (user.age);
let result = users.reduce ((sum, item) => sum + item.age, 0);
alert (result);

