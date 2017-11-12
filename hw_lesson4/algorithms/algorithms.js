// Task 1

function getPrimeNumbers(x,y) {

    for (x; x <= y; x++) {
        for (var j=2; j <= x; j++){
            if(x > j && x % j ===0){
                break;
            } else if(x===j){
                console.log(x);
            }
        }
    }
}
getPrimeNumbers(2,15);


// Task 2

var obj = {
    className: 'open menu'
}
function addClass(obj, cls) {
   var arr = obj.className.split(' ');
    if (arr.indexOf(cls) === -1) {
        arr.push(cls);
    }
    obj.className = arr.join(' ');
}
addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');
console.log ( obj.className );


// Task 3

var obj = {
    className: 'my menu menu'
}

function removeClass(obj, cls) {
    arr = obj.className.split(' ');
    while (arr.indexOf(cls) > -1) {
        arr.splice(arr.indexOf(cls), 1);
    }
    obj.className = arr.join(' ');
}

removeClass(obj, 'menu');
console.log ( obj.className );

// Task 4

var arr = [];
var sum = 0;
do {
var a = prompt("Enter number");
if (!isNaN(a) && a !== "" && a !== null) {
  arr.push(a);
  console.log(arr)
    }
} while (!isNaN(a) && a !== "" && a !== null);

 for (var i = 0; i < arr.length; i++) {
     sum += arr[i];
 }
 console.log(sum);


// Task 5

function fibf(n) {

    var fibArr = [1,1];

    for (var i = 2; i <= n; i++) {
        fibArr.push(fibArr[i-1] + fibArr[i-2]);
    }
    console.log (fibArr);
    console.log (fibArr[n-1]);
}

fibf(5);

// Task 6

var string = prompt ('Enter some text');

function trunsform (string, num) {
    var result = '';
    if (string.length > num ) {
        result = string.slice(0, num) + '...'
    } else {
        result = string;
    }
    console.log (result);
}

trunsform (string, 15);


// Task 7

var tasksCompleted = {
    'Anna': 99,
    'Serg': 35,
    'Elena': 1,
    'Anton': 9
};
function returnName (obj) {
    var maxTasks = 0;
    var name;
    for (i in obj) {
        if (obj[i]> maxTasks) {
            maxTasks = obj[i];
            name = i;
        }
    }
    console.log (name);

}
returnName (tasksCompleted);
