// Task 1
// Если переменная a равна нулю, то выведите 'Верно!', иначе выведите 'Неверно!'.

var a = +prompt("Введите число");
if (a === 0) {
    console.log ("Верно!")
} else {
    console.log ("Неверно!")
};

// Task 2
// Если переменная a равна 'test', то выведите 'Верно!', иначе выведите 'Неверно!'.

var a = prompt("Введите текст");
if (a === "test") {
    console.log ("Верно!")
} else {
    console.log ("Неверно!")
};

// Task 3
/* Если переменная test равна true, то выведите 'Верно!', иначе выведите 'Неверно!'.
Напишите два варианта скрипта - с короткой записью и с длинной. */

//Variant 1
var test = +prompt ("Какой сейчас год?");
if (test === 2017) {
    console.log ("Верно!")
} else {
    console.log ("Неверно!")
};

//Variant 2
var test = +prompt ("Какой сейчас год?");
test === 2017 ? console.log ("Верно!") : console.log ("Неверно!");


// Task 4
/* Создайте переменные a и b. Просуммируйте их, а результат запишите в переменную result.
Если result больше 5, то присвойте переменной result значение 5. Если же она меньше 5-ти - то умножьте ее на 10.
Выведите на экран значение переменной result.*/

var a = +prompt("Введите число");
var b = +prompt("Введите число");
var result = a+b;
if (result>5) {
    result=5;
} else {
    result *= 10;
}
console.log (result);


// Task 5
// Если переменная a равна нулю или равна двум, то поделите ее на 10, иначе прибавьте к ней 7 и выведите ее на экран.

var a = +prompt ("Введите число");
if (a == 0 || a == 2) {
    a /=10;
} else{
    a += 7;
}
console.log(a);

// Task 6
/*Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных,
иначе выведите 'Неверно!'.*/

var a = +prompt ("Введите 1e число");
var b = +prompt ("Введите 2e число");
if (a <= 1 && b >= 3) {
    console.log(a + b);
} else {
    console.log ("Неверно!");
}

// Task 7
/* Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-х и меньше 14-ти,
то увеличьте a на 2, иначе прибавьте к a число 5. Выведите новое значение переменной на экран. */

var a = +prompt ("Введите значение для а");  //5,11,1
var b = +prompt ("Введите значение для b");  //20,10,5
if ((a >2 && a <11) || (b >= 6 && b< 14)) {
    a += 2;
} else {
    a += 5;
}
console.log(a);

//Task 8
/*Переменная num может принимать 4 значения: 1, 2, 3 или 4.
Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'лето' и так далее.*/

var num = +prompt ("Введите номер текущего сезона");
var result;

switch (num) {
    case 1:
        result = "Зима";
        break;
    case 2:
        result = "Весна";
        break;
    case 3:
        result = "Лето";
        break;
    case 4:
        result = "Осень";
        break;
    default:
        result = "Сезонов всего 4";
}
console.log(result);


// Task 9
/* Переменная lang может принимать три значения: 'ru', 'en', 'de'.
Если она имеет значение 'ru', то в переменную arr запишем массив дней недели на русском языке,
если имеет значение 'en' – то на английском, если 'de' – на немецком.
Решите задачу через 3 if, через switch-case и через многомерный массив.*/

//Using IF
var lang = prompt ("Введите код языка");
var arr = [];
if (lang == "ru") {
    arr = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
} else if (lang == "en") {
    arr = ["Mon", "Tue", "Wed", "Thu", "Sat", "Sun"];
} else if (lang == "de") {
    arr = ["Mon", "Die", "Mit", "Don", "Fre", "Sam", "Son"];
} else {
    console.log ("Этот язык не доступен");
};
console.log (arr);

//Using switch-case
var lang = prompt ("Введите код языка");
var arr = [];
switch (lang) {
    case "ru":
        arr = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
        break;
    case "en":
        arr = ["Mon", "Tue", "Wed", "Thu", "Sat", "Sun"];
        break;
    case "de":
        arr = ["Mon", "Die", "Mit", "Don", "Fre", "Sam", "Son"];
        break;
    default:
        console.log ("Этот язык не доступен");
};
console.log(arr);

//Using multidimensional massive
var lang = prompt ("Введите код языка");
var arr = [];
arr[0] = [
    ["пн", "вт", "ср", "чт", "пт", "сб", "вс"],
    ["Mon", "Tue", "Wed", "Thu", "Sat", "Sun"],
    ["Mon", "Die", "Mit", "Don", "Fre", "Sam", "Son"]
];
switch (lang) {
    case "ru":
        console.log(arr[0][0]);
        break;
    case "en":
        console.log(arr[0][1]);
        break;
    case "de":
        console.log(arr[0][2]);
        break;
    default:
        console.log("Этот язык не доступен");
};
