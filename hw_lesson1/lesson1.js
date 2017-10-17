//task 1
var str = "Have a good day!";
console.log (str);

//task 2
var age = 25;
console.log (age);
var age = undefined;

//task3
var info = {
    name: "Nata",
    age: 26
};
console.log (info.name);
console.log (info.age);
var name = info.name;
console.log (name);
delete info.name;
console.log (name);

//task 4
var customArray = [1,2,3];
console.log (customArray);
customArray = 0;
console.log (customArray);

//task 5
var student = "Nataliya";
console.log (student);
student = "Maksymenko";
console.log (student);

//task 6
var complex = [];
complex [0] = "My name is Nata";
complex [1] = 7;
complex [2] = null;
complex [3] = info;
console.log (complex [2]);

//task 7
var complexObj = {};
complexObj.name = "Natali";
complexObj.age = 26;
complexObj.friends = ["Olya", "Sasha", "Inna"];
complexObj.soc_links = {
        facebook: "https://www.facebook.com",
        google: "https://plus.google.com"
    };
var result = `My name is ${complexObj.name}. I am ${complexObj.age}. I have a lot of friends, but the best one is ${complexObj.friends[0]}. 
You can find me on facebook: ${complexObj.soc_links.facebook} or on google groups: ${complexObj.soc_links.google}`;
console.log(result);

// console.log (`My name is ${complexObj.name}`);
// console.log (`I am ${complexObj.age}`);
// console.log (`I have a lot of friends, but the best one is ${complexObj.friends[0]}`);
// console.log (`You can find me on facebook: ${complexObj.facebook} or on google groups: ${complexObj.google}`);