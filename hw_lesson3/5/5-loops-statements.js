// Task 1
/*Write a JavaScript for loop that will iterate from 0 to 15.
For each iteration, it will check if the current number is odd or even, and display a message to the screen.*/

var x=0;
var y=15;
for (x; x<=y; x++) {
    if (x%2==0) {
        console.log (x + " is even")
    } else {
        console.log (x + " is odd")
    }
}



// Task 2
/*Write a JavaScript program which iterates the integers from 1 to 100.
But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
For numbers which are multiples of both three and five print "FizzBuzz".*/

x=1;
y=100;
for (x; x<=y; x++) {
    if (x%3==0 && x%5==0) {
        console.log ("FizzBuzz");
    } else if (x%3==0) {
        console.log ("Fizz");
    } else if (x%5==0) {
        console.log ("Buzz")
    } else {
        console.log (x);
    }
}



// Task 3
// Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers

//Variant 1.Complex

function computeGCD (a,b) {
    var a = +prompt ("Enter number a");
    var b = +prompt ("Enter number b");
    var arr1 = [];
    var arr2 = [];
    var maxEl = 0;
    for (var i=1; i<=a; i++) {
        if (a%i==0) {
            arr1.push (i);
        }
    }
    for (var e=1; e<=b; e++) {
        if (b%e==0) {
            arr2.push (e);
        }
    }
    for (var u=0; u<=arr1.length; u++) {
        for (var w=0; w<arr2.length; w++) {
            if (arr1[u] === arr2[w]) {
                maxEl = arr1[u];
            }
        }
    }
    console.log (arr1);
    console.log(arr2);
    console.log(maxEl);
}
computeGCD ();


//Variant2.Simple

var a = prompt("Pick a number.");
var b = prompt("Pick one more.");
for (i=a; i>=1; i--) {
    if (b%i===0) {
        if (a%i===0) {
console.log("The GCD is " +i+".");
break;
       }
    }
}

// Task 4
// Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
var sum = 0;
for (var i = 1000; i>=1; i--) {
    if (i%3==0 && i%5==0) {
        sum +=i;
    }
}
console.log (sum);



// Task 5
// Console log all numbers from range 10-90 that divide to 5 and 3.

for (var i =90; i>=10; i--) {
    if (i % 5 == 0 && i % 3 == 0) {
        console.log(i);
    }
}


// Task 6
// Console log only odd numbers from range 11-70 in reverse order starting with 70.

for (var i =70; i>=11; i--) {
    if (i%2!==0) {
        console.log (i);
    }
}



// Task 7
// Console log only even numbers that divide to 2 and 3 from range 13-78 in reverse order.

for (var i = 78; i>=13; i--) {
    if (i%2==0 && i%3==0) {
        console.log (i);
    }
}
