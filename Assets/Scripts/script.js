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

function sum (a, b) {
    let sum = 0;
    for (let i = 0, i < arguments.length; i++) {
        sum += arguments [i];
    }
    return sum;
}
let result = sum (1, 3, 7);

// Task 11

function f() {
    return (arguments.lengh >= 1) ? 1 : 0
}

// let f = (x = 0) => (x = undefined)? return 0 : console.log (x);

// Task 12

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

// Task 13

let arr = [1, 2, 56, 28, 90, 5, 6];
arr.sort ( (a, b) => a - b );
console.log (arr);
console.log ( arr.indexOf(6, 0) );
