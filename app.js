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
// var num = parseInt(prompt('Enter Starting Number'));
// var range = parseInt(prompt('Enter End Range'));
// var even = [];
// var odd = [];
// for (let i = num; i <= range; i++) {  
//     if (i % 2 === 0) {  
//         even.push(i);
//     } else if (i % 2 !== 0) {  
//         odd.push(i);
//     }  
// }
// document.write(even  + 'is Even number ');
// document.write(odd + 'is Odd number');

// Q7
// let list = ['cake','applepie','cookie','chips','patties'];
// let userinput = prompt("Enter the item you want to search for:").toLowerCase();
// let flag = false;
// let index ;
// let message;
// for(let i = 0; i < list.length; i++){
//     if(list[i] === userinput){
//         flag = true ;
//         index = i;
//         message = `cookie is ${userinput} avaible at index ${index} in our bakery.`;
//     }
// }
// if(flag === false){
//     message =  `We are sorry. ${userinput} is not available in our bakery. `;
// }
// console.log(message);

// // Q8

// const A = [24, 53, 78, 60, 12];   
// let largestNumber = A[0];   
// for (let i = 1; i < A.length; i++) {  
//     if (A[i] > largestNumber) {  
//         largestNumber = A[i];  
//     }  
// }   
// console.log("The largest number in the array is:", largestNumber); 

// Q9

const A = [24, 53, 78, 60, 12];   
let largestNumber = A[0];   
for (let i = 1; i < A.length; i++) {  
    if (A[i] < largestNumber) {  
        largestNumber = A[i];  
    };  
};   
console.log("The largest number in the array is:", largestNumber); 

// Q10 
for (let number = 1; number <= 57; number++) {  
    if (number % 5 === 0) {  
        console.log(number);  
    }; 
};