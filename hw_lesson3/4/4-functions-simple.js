// Task 1
/*Create function "getName" that ask user his name with promt window and alerts his name to him
in format: "Hello, <his_name>".*/

function getName(name) {
    name = prompt ("Please enter your name");
    alert ("Hello, " + name)
}
getName();



// Task 2
//Create function double(x) that returns the number passed to it as an argument, multiply with 2

function double(x) {
x = prompt ("Enter number please")*2;
console.log(x);
}
double ();


// Task 3
// Create function range(x, y) that returns a sum of digits in the range of numbers [x, y];

function range(x, y) {
    var sum=0;
    for (i=x; i<=y; i++) {
    sum += i;
}
console.log (sum);
}
range(1,3);


//Task 4
// Напишите функцию которая будет находить сумму простых чисел меньших переданному в нее значению. Пример работы:
// function getPrimesSumBelow(x) {
// getPrimesSumBelow(10); // 2 + 3 + 5 + 7 = 17

// все равно не получается пока сделать, подумаю над решением, и пришлю его отдельно позже


// Task 5
// Create a function that returns true if number is odd, and false if even;

function checkNumber (a) {
    a = prompt ("Enter number");
    if (a%2!==0) {
console.log ("true")
    } else{
        console.log ("false")
    }
}
checkNumber();



// Task 6
//Create a function that returns all odd numbers in range, use the previous function inside this one;

function checkNumber1 (n,m) {
    n = +prompt("Enter number n");
    m = +prompt("Enter number m");
    for (n; n <= m; n++) {
        if (n % 2 !== 0) {
            console.log(n);
        }
    }
}
checkNumber1();



// Task 7
// Create a function that will call prompt window that will ask for a number to user, until he enters 9;

function checkNumber2 (b) {
    do {
        b = +prompt("Enter number b");
    } while (b !== 9);
}
checkNumber2 ();