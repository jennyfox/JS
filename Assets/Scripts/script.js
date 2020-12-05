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

let numbers = [10, 25, 100];
let sum = 0;
// let sum = numbers[0];
// почему не так? после первого цикла индекс уже станет 1,
//  то есть число под индексом 0 не будет участвовать в сумме?
for (i = 0, i < numbers.length, i++) {
    sum += numbers[i];
    return sum;
}
alert ('Сумма этих чисел равна ' + sum);
// не работает, почему не понимаю

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

// Task 7

function repeat (str = '', n = 2) {
    let srt1 = '';
    for (; n > 0; n--) {
        srt1 += str;
        return srt1;
    }
}
alert (repeat ('Hello!', 5));
// не работает, но я не понимаю, почему


// Task 8

// / Создайте функцию rgb(a, b, c), которая будет принимать три числовых аргумента и возвращать строку вида «rgb(23,100,134)». 
// 	  Если аргументы не заданы, считать их равными нулю. Не проверять переменные на тип данных.
function rgb(a = 0, b = 0, c = 0) {
    return `rgb(${a}, ${b}, ${c})`;
}
rgb (23, 100, 134);

// Task 9

function avg () {
    let sum = 0;
    let result = '';
    let l = 0;
    for (i = 0; i < arguments.length; i++) {
        if (typeof avg[i] === 'number' && !isNaN (avg[i])) {
            l++;
            sum += arguments[i];
        }
        // return sum; это надо здесь делать или нет?
    }
    result = sum / l;
    return result;
}
console.log (avg (3, 7, 9));


// Task 10 
// - Напишите функцию words(n), которая в зависимости от переданного в нее целочисленного аргумента n, будет выводить слово «товар» 
// в нужно форме («12 товаров», но «22 товара»). По умолчанию аргумент n должен иметь значение 0.

function words (n = 0) {
    let ostatok1 = n % 10;
    let ostatok2 = n % 100;
    if (ostatok1 === 1 && ostatok2 !== 11) {
        alert (n + ' товар');
    } else if (ostatok1 === 2 || ostatok1 === 3 || ostatok1 === 4 && ostatok2 !== 11 ||
        ostatok2 !== 12 || ostatok2 !== 13 || ostatok2 !== 14) {
        alert (n + ' товара');
    } else {
        alert (n + ' товаров');
    }
}

// Task 12

function sum (a, b) {
    let sum = 0;
    for (let i = 0, i < arguments.length; i++) {
        sum += arguments [i];
    }
    return sum;
}
let result = sum (1, 3, 7);


// Task 13

function f() {
    return (arguments.lengh >= 1) ? 1 : 0
}

// let f = (x = 0) => (x = undefined)? return 0 : console.log (x);


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
let arr3 = newarr.splice (-4);
alert (arr2);
alert (arr3);
arr3.sort ((a, b) => a - b);
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
// 	  Добавить в этот маccив еще одного пользователя {id: 4, name: "Дима", age: 17}. 
// Инвертируйте данный массив и выведите возраст пользователя с именем "Петя".
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

// Дан массив var arr = [1, 2, 3, 4, 4, 5, 2, 9, 4]; На основании этого массива 
// создать новый массив arrUnique который будет представлять собой массив arr 
// но без дублирующихся по своим значениям элементам. Использовать методы reduce и 
// indexOf.


let arr = [1, 2, 3, 4, 4, 5, 2, 9, 4];
let arrUnique = arr.reduce((newArr, item) => {
        console.log(newArr, newArr.indexOf(item));
        if (newArr.indexOf(item) === -1) {
            newArr.push(item);
            return newArr;
        } else {
            return newArr;
        }
    }, [])

// Дан массив пользователей. var users = [{id: 1, name: "Вася", age: 19}, 
// {id: 2, name: "Петя", age: 18}, {id: 3, name: "Маша", age: 17}, 
// {id: 4, name: "Света", age: 18}, {id: 5, name: "Наташа", age: 17}, 
// {id: 6, name: "Женя", age: 12}, {id: 7, name: "Коля", age: 30},
// {id: 8, name: "Настя", age: 16}, {id: 9, name: "Антон", age: 19},
//  {id: 10, name: "Иван", age: 20}, {id: 11, name: "Павел", age: 16},
// {id: 12, name: "Денис", age: 20}];
// На основании этого массива сформировать новый массив usersAfterYear где все 
// пользователи повзрсолели на год и являются совершенолетними (повзрослевших на год, 
// но оставшимися все еще несовершенолетних пользователей в новый массив 
// usersAfterYear не включать). Сам массив users должен остаться неизменным. 
// Использовать метод map.

let users = [
    {id: 1, name: "Вася", age: 19},
    {id: 2, name: "Петя", age: 18},
    {id: 3, name: "Маша", age: 17},
    {id: 4, name: "Света", age: 18},
    {id: 5, name: "Наташа", age: 17},
    {id: 6, name: "Женя", age: 12},
    {id: 7, name: "Коля", age: 30},
    {id: 8, name: "Настя", age: 16},
    {id: 9, name: "Антон", age: 19},
    {id: 10, name: "Иван", age: 20},
    {id: 11, name: "Павел", age: 16},
    {id: 12, name: "Денис", age: 20}
];

// 1 вариант
let adultUsers = users.filter(function (adult) {
    return users.age.some(function(adult) {
        return age > 17;
    });
});
console.log(adultUsers);
let usersAfterYear = Object.fronEntries(
    Object.entries(users).map(([key, value]) => [key, value + 1])
);
console.log(usersAfterYear);
// не подходит, т.к. users - массив, не знаю, как осуществить это с массивами

// 2 вариант
let one = users.map((item) => {
    item.age + 1;
    return item;
});
console.log(one);
let usersAfterYear = [];
for(let i=0; i < one.length && one.age > 17; i++) {
    usersAfterYear.push(one[i]);
};
console.log(usersAfterYear);
// не работает

// 3 вариант
let usersAfterYear = users.map((item) => {
    item.age + 1;
    return item;
}); 
console.log(usersAfterYear);
usersAfterYear.filter((item) => {
    item.age > 17;
    return item;
});
console.log(usersAfterYear);
// не работает


//  На основании массива usersAfterYear, полученного на основании предыдущего задания 
//  создать новый массив usersAfterYearUniqueAge, в котором нет пользователей с 
//  одинаковым возрастом. Если у вас есть два пользователя ({id: 2, name: "Петя", age: 19} 
//  и {id: 4, name: "Света", age: 19}, то вы должны оставить только Петю или Свету 
//  одного а не их двоих). (Это задание похоже на первое задания про массив arr и 
// arrUnique)

let usersAfterYearUniqueAge = usersAfterYear.reduce((a, item) => {
    console.log(a, a.indexOf(item.age));
    if (a.indexOf(item.age) === -1) {
        a.push(item);
        return a;
    } else {
        return a;
    }
}, []);

// Дан объект var users = {
// 	first_name: "pavel",
// 	second_name: "ivanov",
// 	father_name: "ivanovich",
// 	city: "minsk",
// 	car: "subaru",
// 	telephone: "samsung" 
// }
// Необходимо сделать так чтобы все значения полей объекта users начинались с 
// заглавной буквы (например не "pavel" a "Pavel"). Для решения этой задачи 
// рекомендую использовать методы Object.keys или Object.values и методы 
// строк как UpperCase. 

let users = {
	first_name: "pavel",
	second_name: "ivanov",
	father_name: "ivanovich",
	city: "minsk",
	car: "subaru",
	telephone: "samsung" 
}
let keys = Object.keys(users);
keys.forEach(key => {
    users[key] = users[key][0].toUpperCase() + users[key].slice(1);
})
// списано с консультации, понимания нет

// Посчитать первые 8 чисел Фибоначчи использую рекурсию. Например: fibonachi(n); 
// (При вызове функции положите n = 8); 

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }
//   списано, понимания ноль

// Посчитать с помощью рекурсии факториал числа 10. Например: factorial(n); 
// (При выозове полжите n = 10); 

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
console.log(factorial(10));  
// это списано с решебника, понимания нет

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
  }
//   что означает запись "return n ?"

// - Дан объект let user = { name: "Ivan", years: 19, car: "Subaru", 
// telePhone: "iPhone", city: "Minsk" }. Запишите поле name в переменную 
// userName, поле year в переменную userName, поле car в переменную userCar, 
// остальные поля записать в объект userOtherInfo;

let user = { 
    name: "Ivan", 
    years: 19, 
    car: "Subaru", 
    telePhone: "iPhone", 
    city: "Minsk" 
};
let {name: userName, years: userYears, car: userCar, ...userOtherInfo} = user;
console.log(userName);
console.log(userYears);
console.log(userCar);
console.log(userOtherInfo);

// - Дан массив let arr = [1, "str", 24, {name: "Ivan"}, 89, undeifined, "10"]. 
// Используя оператор расширение и соответсвие порядка следования элементов 
// запишите первые два элемента массива в переменные firstElement, secondElement, 
// число 89 (четвертый элемент массива) в переменную fifthElement. 
// Остальные элементы после 89 запишите в массив otherElements;

let arr = [1, "str", 24, {name: "Ivan"}, 89, undeifined, "10"];
let [firstElement, secondElement, , , fifthElement, ... otherElements] = arr;

// - Используя объект Date представьте текущую дату на момент выполения задания 
// в формате DD.MM.YYYYY (например 5.12.2020). Расширить задание таким образом 
// чтобы если день месяца есть число меньше 10 перед ней ставился "0" 
// (например 05.12.2020);


let now = new Date(2020, 11, 5);
console.log(now);
let year = now.getFullYear();
let month = now.getMonth();
let day = now.getDate();
let dayNew = day.toString().length === 1 ? '0' + day : day;
let finalDate = dayNew + '.' + month + '.' + year;
console.log(finalDate);

// - Дан объект let user = {
//         name: "Ivan",
//         age: 19
//        };
// Создайте копию объекта использую сериализацию и десериализацию (JSON.stringify(), 
// JSON.parse());

let user = {
    name: "Ivan",
    age: 19
};
let userPreCopy = JSON.stringify(user);
let userCopy = JSON.parse(userPreCopy);
console.log(userCopy);

// - Напишите функцию func() которая при каждом своем вызове будет возвращать 
// количество своих вызовов (сколько раз ее вызызвали до этого плюс этот вызов);

function makeCounter() {
    let currentCount = 1;
    return function() {
        return currentCount++;
    };
};
let counter = makeCounter();
alert(counter());
alert(counter());
alert(counter());
// загуглено и списано


// - Напишите функцию которая будет увеличивать переменную let i = 0, от 0 до 20, 
// причем переменная будет увеличивать свое значение на единицу каждые 2 секунды. 
// Когда переменная станет равной 20 прекратить увеличение. Попробуйте реализовать 
// через setInterval и через рекурснивный setTimeout.

f () {
    let i = 0;
    if (i < 20) {
        i++;
        alert(i);
    } 
};
let a = setInterval(f, 2000);
clearInterval(a);


let a = setTimeout(f () {
    let i = 0;
    if (i < 20) {
        a = setTimeout(f, 2000);
        i++;
        alert(i);
    }  
}, 2000);
clearTimeout(a);

// - Напишите функцию startTimer() которая будет запускать вывод через confirm
// ("Реклама исчезнет счерез 5 секунд, вы согласны ?"), при нажатии "ДА" выводите 
// alert("Реклама") через 5 секунд, если нажали "НЕТ", то повторить вопрос 
// confirm("Реклама исчезнет счерез 5 секунд, вы согласны ?") и так до тех пор, 
// пока пользовательне нажмет "ДА" и не увидит эту рекламу через alert. 

let b = startTimer() {
    if (confirm ("Реклама исчезнет счерез 5 секунд, вы согласны ?") === true) {
        let a = setTimeout(() => alert('Реклама'), 5000);
    } else {
        return b;
    }
};
    
