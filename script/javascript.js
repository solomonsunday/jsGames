// document.write("Hello, Please check out our new Promotion To be Updated !");


// var sayHello = function greet() {
//     alert("Hello from the other side!");
// }

// function greeting(yourName) {
//     var result = 'Hello ' + ' ' + yourName;
//     console.log(result);
// }


// // var name = prompt('What is your name?');
// greeting(name);

// function sumNumber(num1, nnum2) {
//     var result = num1 + nnum2;
//     console.log(result);
// }

// sumNumber(10, 2);

// //While loops

// // var num = 0;
// // while (num < 100) {
// //     num += 1;
// //     console.log(num)
// // }

// //For loop

// // for (let num = 0; num <= 100; num++) {
// //     console.log(num);
// // }

// //string in Javascript (Common Method)
// let fruit = 'Banana'
// let moreFruits = 'banana\norange'

// console.log(fruit.length);
// console.log(fruit.indexOf('nan'));
// console.log(fruit.slice(1, 6));
// console.log(fruit.replace('nan', 'tat'));
// console.log(fruit.charAt(2));
// console.log(fruit[2]);
// console.log(fruit.split(''));

// //Arrays
// let fruits = ['Banana', 'Mango', 'Watermellon', 'Apple', 'Pineapples'];
// console.log(fruits[2]);

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// //array common methods

// console.log('to string', fruits.toString());
// console.log(fruits.join('*'));
// console.log(fruits, fruits.pop(), fruits);
// console.log(fruits.push('Grape'), fruits);
// fruits.unshift('Kiwi');
// console.log(fruits);

// let vegetables = ['asparagus', 'Tomato', 'Broccoli'];
// let allGroceries = fruits.concat(vegetables);
// console.log(allGroceries);
// console.log(allGroceries.splice(1, 4));
// console.log(allGroceries.reverse);

// //Sorting an Array
// let someNumbers = [5, 6, 3, 5, 6, 7, 89, 3, 2, 23, 3, 49, 42, 44, 41, 42, 2,]
// console.log(someNumbers.sort(function (a, b) { return (a - b) }));
// console.log(someNumbers.sort(function (a, b) { return (b - a) }));


// let emptyArray = new Array();
// // let emptyArray = [];

// for (let num = 0; num <= 10; num++) {
//     emptyArray.push(num);
// }

// console.log(emptyArray);

// //Objects In Javascript 1.11.10.
// let student = {
//     firstName: 'Solomon',
//     lastName: 'Sunday',
//     age: 25,
//     height: 170,
//     studentInfo: function () {
//         return this.firstName + '\n' + this.lastName + '\n' + this.age + '\n';

//     }
// };
// console.log(student.studentInfo());

// //if else condition

// //Condition control flows(if else)
// //18 - 27 are my target spec

// // let age = prompt('please Enter your Age')

// if ((age >= 18) && (age <= 35)) {
//     status = 'Target Spec';
//     console.log(status);
// }
// else {
//     status = "Not a Spec";
//     console.log(status);

// }


// //resolving Age.
// //your age in days

// var birthYear = prompt("What year were you  born?");



//========================================================================================================
function ageInDays() {
    var birthYear = prompt('What year were you born... Good friend?');
    var ageInDayss = (2018 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
};

function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);

}


