//Опишите что будет в результате выполнения следующих операций
//1

var t = {
    y: 9
};
var number = t.y; //9
number += 5; // number=9+5
console.log(t.y, number); // 9,14


//2

var t = {
    y: [1, 3, 5, 7]
};
var number = t.y[2]; //5
for(var i = 0, len = t.y.length; i < len; i++) {
    t.y[i]++
}; //?
console.log(number); // 5


//3

var t = 9;
var obj = {
    number: t
};
obj.number++;
console.log(obj.number, t);//10,9


//4

var object1 = {
    str: {
        name: "L"
    }
};

var obj = {
    number: 67 //68
};

object1.str.number = obj.number; //67
obj.number++; //67

var str = object1.str;

object1.str.name = "Kolya";

console.log(str, object1.str.number);// name:"Kolya", number:67


//5

var object1 = {
    obj: {
        number: 0
    }
};
var object2 = {
    str: "Kolya"
};
object2.str.number = object2.str.number; //undefined
object2.str.number++; //undefined+1=undefined
console.log(object2.str.number); //undefined