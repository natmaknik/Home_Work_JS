// Task1

function getName () {
    this.name = prompt ("What is your name?");
    console.log (this.name);
}
var obj = {};
obj.name = getName;
console.log (obj['name']());// undefined
getName (); //Entered Name


// Task2

function sumTo (n) {
    n = +prompt ("Enter number");
    var sum = 0;
    for (var i=1; i<=n; i++) {
         sum += i;
    }
    console.log (sum);
}
sumTo ();



// Task3

var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort(function (a, b) {
    return a.age - b.age;
});

console.log (people);



// Task 4

// Не поняла как делать, спрошу на уроке