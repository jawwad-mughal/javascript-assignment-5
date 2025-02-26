// ARRAYS AND LOOP (start)
// Q1
// var multiArray = [];  
// console.log('Multidimensional array: ' + multiArray);

// Q2
// let userinput = +prompt('Enter Number');
// let range = +prompt('Number range');
// for(let i = userinput; i <= range; i++){
//     document.write(i, '<br>');
// }

// Q3
// let Table = +prompt("Enter the number for which you want the multiplication table:");
// let tableRange = +prompt("Enter the length of the multiplication table:");
// for(let i = 1; i <= tableRange; i++){
//     document.write(Table, 'X' , i , '=',(Table*i),'<br>');
// }

// Q4
// let fruits = ['apple','banana','mango','orange','strawberry'];
// for(let i = 0; i < fruits.length; i++){
//     document.write(fruits[i], '<br>');
// };

// Q5
// A)
var number = [];
for(let i = 0; i <= 15; i++){
    number.push(i);
}
console.log(number);

// B)
var number = [];
for(let i = 10; i >= 1; i--){
    number.push(i);
}
console.log(number);

// C)
// var num = prompt('Enter Number');
// var range = prompt('Enter Number range');
// var number = [];
// for(let i = num; i <= range; i++){
//     number.push(i % 2==0);
// }
// console.log(number);

// D)
var num = parseInt(prompt('Enter Starting Number')); // Starting number  
var range = parseInt(prompt('Enter End Range')); // Ending number 

var even = []
var odd =[]

// Loop from the starting number to the ending number  
for (let i = num; i <= range; i++) {  
    if (i % 2 === 0) {  
        even.push(i); // If the number is even  
    } else if (i % 2 !== 0) {  
        odd.push(i);
        // console.log(i + " is Odd"); // If the number is odd  
    }  
}
document.write(even  + 'is Even number ');
document.write(odd + 'is Odd number');