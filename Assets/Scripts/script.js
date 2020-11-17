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

let n = 'number';
let s = 'symbol';
let str = 'string';
let b = 'boolean';
let bi = 'bigint';
let o = 'object';
let nu = 'null';
let u = 'undefined';
alert (s);
alert (str);
alert (b);
alert (bi);
alert (o);
alert (nu);
alert (u);
console.log (n, s, str, b, bi, o, nu, u);

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

Task 4 

function hello1 () {
    return ('Привет, JavaScript!');
}
hello1 ();

Task 5 

function hello2 (name = 'гость') {
    alert ('Привет' + ', ' + name);

}
hello2 ('Василий');
hello2 ();

Task 6

function mul (n,m) {
    return n * m;
}
mul (3, 6);

Task 7

function repeat (str = '', n = 2) {
    return (str * 2);
}
repeat ('Повтори меня');

Task 8

function rgb(a = 0, b = 0, c = 0) {
    return (a + ', ' + b + ', ' + c);
}
rgb (23, 100, 134);

Task 9

function avg (a, b, c) {
    return ((a + b + c) / 3);
}
avg (4, 9, 15);

Task 10 
    (Я ограничила число до 25, я не знаю, как выразить формулой 
    "все числа, заканчивающиеся на 2, 3 и 4" и пр.)

function words (n = 0) {
    if (n = 1 || n = 21) {
        alert (n + ' товар');
    }
    if (n >= 2 && n <= 4 || n >= 22 && n <= 24) {
        alert (n + ' товара');
    }
    if (n >= 5 && n <= 20 || n = 25) {
        alert (n + ' товаров');
    }
}
alert (words (1));
alert (words (5));
alert (words (23));