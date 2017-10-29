// Task1
// Выведите столбец чисел от 1 до 50.
var i = 1;
while (i<51) {
    console.log (i);
    i++;
}


// Task2
// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
var arr = [1, 2, 3, 4, 5];
for (var i = arr [0]; i<= arr[4]; i++) {
    console.log (i);
}


// Task3
// Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение элементов этого массива.
var arr = [2, 3, 4, 5];
var b = 1;
for (i=0;i<arr.length;i++) {
    b *= arr [i];
}
console.log (b);

// Task4
/*Дан объект obj с ключами 'Минск', 'Москва', 'Киев' и значениями соответственно: 'Беларусь', 'Россия', 'Украина'.
С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'.*/
var obj = {
    'Минск': 'Беларусь',
    'Москва': 'Россия',
    'Киев': 'Украина'
};
for (var key in obj){
    console.log (key + " - это " + obj[key]);
};

// Task5
/*Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится?
Посчитайте количество итераций, необходимых для этого (итерации - это количество проходов цикла),
и запишите его в переменную num.*/
var n = 1000;
var num = 0;
while (n/2>=50) {
    n /= 2;
    num++
};
console.log(n);
console.log(num);


// Task6
/*Дан массив с элементами 2, 5, 9, 15, 0, 4.
С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.*/
var arr = [2, 5, 9, 15, 0, 4];
for (i = 0; i < arr.length; i++) {
    if (arr[i] > 3 && arr[i] < 10) {
        console.log(arr [i])
    };
}


// Task7
/*Составьте массив месяцев. С помощью цикла for выведите все месяцы, а текущий месяц выведите жирным.
Текущий месяц должен храниться в переменной month.*/
var arr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var month = "Oct";
for (var i = 0; i < 12; i++) {
    if (arr[i] === month) {
        document.write(" " + arr[i].bold() + " ");
    } else {
        document.write(" " + arr[i] + " ");
          }
};