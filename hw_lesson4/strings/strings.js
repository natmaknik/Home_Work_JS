// Task 1

var str = 'aaa@bbb@ccc';
var regexp = /@/g;
str=str.replace(regexp,'!');
console.log(str);



// Task 2

var str = 'aaa bbb ccc';
//str = str.substr(4,3);
//str = str.substring(4,7);
str = str.slice(4,7);
console.log(str);


// Task 3

var str = '2025-12-31';
arr = str.split('-');
arr.reverse();
str = arr.join('/');
console.log(str);



//Task 4

var str ='js';
str = str.toUpperCase();
console.log(str);

// Task 5

var str = 'я учу javascript!';
console.log(str.length);

// Task 6

var string = 'eeeeeeee9eeeeeeeee';
function cutString(string,b){
    if (string.length>b){
        var result = string.substr(0,b)+'...';
        return result;
    } else {
        result = string;
        return result;
    }
}
console.log(cutString(string,10));

// Task 7

var str = 'я учу javascript!';
var arr = str.split(' ');
console.log(arr);

// Task 8

var arr = ['я', 'учу', 'javascript', '!'];
var str = arr.join('+');
console.log(str);

// Task 9

var str = "привет!";
str = str.replace(str[0],str[0].toUpperCase());
console.log(str);


// Task 10

function setToUC () {
    var string = "hi nice to meet you";
    var separateWords = string.split(" ");
    for (var i = 0; i < separateWords.length; i++) {
        separateWords[i] = separateWords[i].toUpperCase();
    }
    var newString = separateWords.join(" ");
    console.log(newString);
}
setToUC ();

// Task 11



// Task 12



// Task 13
