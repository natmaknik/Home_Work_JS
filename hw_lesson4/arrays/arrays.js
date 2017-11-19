// Task1

function isPal() {
    var str = prompt("Enter text");
    var strarr = str.toLowerCase();
    var arr = strarr.split("");
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === " " || arr[i] === "," || arr[i] === ".") {
            arr.splice(i, 1);
            i = i - 1;
        }
    }
    var str1 = arr.join("");
    arr.reverse();
    var str2 = arr.join("");
    if (str2 === str1) {
        console.log("True");
    }
    else {
        console.log("False");
    }
}
isPal();


// Task2

var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер','сектор']
function anClean(arr){
    for (i=0; i<arr.length; i++){
        for (j=i+1;j<arr.length; j++){
            if(arr[i].toLowerCase().split('').sort().join('')===arr[j].toLowerCase().split('').sort().join('')){
                arr.splice(j,1);
                j--;
            }
        }
    }
    return (arr)
}
console.log(anClean(arr));


// Task3

var arr = [ 'rrrA', 'toboR', 'ekiL', 'dooG', 'esoR' ];
for (i=0; i<arr.length; i++){
    new_arr = arr[i].split('').reverse().join('');
    arr[i]=new_arr;
}
arr = arr.reverse().join(' ');
console.log(arr);


// Task4

var integersum = 0;
var evensum = 0;
for (var i = 0; i <= 100; i++) {
    integersum += i;
    if (i % 2 === 0) {
        evensum += i;
    }
}
console.log(integersum, evensum);

// Task5

function callMe(a, b, c) {
    if (isNaN(+a) && isNaN(+b) && isNaN(+c)) {
        console.error("null");
    }
    else {
        var sum = a + b + c;
        console.log (sum);
    }
}

callMe(9, 3, 2);


// Task6

function callMeAgain(arr) {
    return arr.sort().join(",");
}
console.log(callMeAgain(["5","g","abc","13"]));

// Task7

var arr = [
    {name: "L1", age: 45},
    {name: "L1", age: 20},
    {name: "L1", age: 10},
    {name: "L1", age: 78},
    {name: "L1", age: 41},
    {name: "L1", age: 10}
];

arr.sort(function (a, b) {
    return a.age - b.age;
});

console.log(arr);


// Task8


// Task9
var arr = [13, 35, 3, 443];

function count(arr, n) {
    var sum = 0;

    newArr = arr.join('').split('');

    for (var i = 0; i < newArr.length; i++) {
        if ( +newArr[i] === n ) {
            sum++;
        }
    }
    return sum;
}


console.log (count(arr, 4));


// Task10

var numArr = ['1', '2', '3', '4', '5', '6'];

function modifyArr(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length/2; i++) {
        newArr.push(arr[i] + arr[arr.length - (i + 1)]);
    }
    var string = newArr.join('-');
    console.log (string);

}

modifyArr(numArr);


// Task11

var arr1 = [5,6,0,0],
    arr2 = [1,2,3,0,13];

function  addNumArr( a, b ) {

    if (b.length > a.length) {
       var maxLength = b.length;
    } else {
        maxLength = a.length;
    }
    var newArr = [];

    for (var i = 0; i < maxLength; i++) {
        newArr.push((a[i] || 0) + (b[i] || 0))
    }

    console.log (newArr);
}

addNumArr(arr1, arr2);


// Task12

arr = [1,2,3,4,3,3];

function deleteElement( arr, text) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === text) {
            arr.splice(i, 1);
            i--;
        }
    }
    console.log (arr);
}

deleteElement(arr, 3);


//Task13



// Task14

var arr = [2, 3, 1, 4];
function createNewArr (arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        for (var m = 0; m < arr[i]; m++) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}
createNewArr (arr);

// Task15



// Task16



