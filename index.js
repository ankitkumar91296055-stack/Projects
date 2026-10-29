// {
//     console.log("Square Pattern");
// }
// for(let i = 1; i <= 3; i++){
//         let row = "";
//     for(let j = 1; j <= 3; j++){
//         row += "*";
//     }
//         console.log(row);
// }
// {
//     console.log("Factorial");
// }
// let n = 5;
// let fact = 1;
// for(let i=1; i<=n; i++){
//     fact = fact*i;
// }
// console.log(fact);

// {
//     console.log("Right Angled Triangled Pattern");
// }
// for(let i = 0; i <= 5; i++){
//     let row = "";
//     for(let j = 0; j <= i; j++){
//         row += "*";
//     }
//     console.log(row);
// }
// {
//     console.log("Inverted Right Angled Triangled Pattern");
// }
// for(let i = 0; i <= 5; i++){
//     let row = "";
//     for(let j = 0; j <= 5-i; j++){
//         row += "*";
//     }
//     console.log(row);
// }
// {
//     console.log("Pyramid Pattern");
// }
// let row = 5;
// for(let i = 0; i <= row; i++){
//     let spaces = " ".repeat(row - i);
//     let star ="* ".repeat(i);
    
//     console.log(spaces + star);
// }
// {
// console.log("Inverted Pyramid Pattern");
// }
// for(let i = row; i>= 1; i--){
//     let spaces = " ".repeat(row-i);
//     let star = "* ".repeat(i);

//     console.log(spaces + star);
// }

// {
//     console.log("Solid Diamond Pattern");
// }

// for(let i = 0; i <= row; i++){
//     let spaces = " ".repeat(row-i);
//     let star = "* ".repeat(i);
//     console.log(spaces + star);
// }
// for(let i = row; i >= 0; i--){
//     let spaces = " ".repeat(row-i);
//     let star = "* ".repeat(i);
//     console.log(spaces + star);
// }
// {
//     console.log("Hollow Square Pattern");
// }
// for(let i = 1; i <= 5; i++){
//     let row = "";
//     for(let j = 1; j <= 5; j++){
//         if(i==1 || i==5 || j==1 || j==5){
//             row += "*";
//         }else{
//         row += " ";
//         }
//     }
//     console.log(row);
// }
// {
//     console.log("Half Pyramid of Number");
// }

// for(let i = 0; i <= 5; i++){
//     let row = "";
//     for(let j = 0; j <= i; j++){
//         row += "*";
//         console.log(j);
//     }

// }

// console.log("Hello World");
// console.log(5+3);

// let name = "Ankit kumar";
// console.log("Name : "+name);

// alert("Helllo, World!");

// let username = prompt("What is your name : ");
// console.log("Hello, "+username);

// let age = prompt("Enter your age :");
// console.log(typeof age);
// age = Number(age);
// console.log(age + 1);

// let name = "Ankit Kumar";
// let age = 18;

// console.log("My name is "+name + " and I am "+age + " years old.");
// console.log(`My name is ${name} and I am ${age} years old.`);

// console.log("1");
// console.log("11");
// console.log("111");
// console.log("1111");

// let message = `line 1
// line 2
// line 3`;
// console.log(message);

// let students = [
//     { name : "Ankit Kumar", age : "18"},
//     { name : "aman", age : 19}
// ];
// console.table(students[2]);
// console.warn(students);
// console.error(students);

// let n = Number(prompt("Enter first number :"));
// let m = Number(prompt("Enter second number :"));
// console.log("num1 = "+n);
// console.log("num2 = "+m);
// let operater = prompt("Enter operater (+,-,*,/,%) :");
// let result;

// switch(operater){
//     case "+":
//         result = n+m;
//         break;
//     case "-":
//         result = n-m;
//         break;
//     case "*":
//         result = n*m;
//         break;
//     case "/":
//         result = n%m;
//         break;
//     case "%":
//         result = n%m;
//         break;
//     default :
//         console.log("invalid operater!");
// }
// console.log("Result :"+result);


// let target = 50;
// let attempts = 0;
// let guess;

// while(true){
//     guess = Number(prompt("guess a number between 1 to 100 :"));
//     attempts++;
//     if(guess > target){
//         alert("Too High!");
//     }else if(guess < target){
//         alert("Too Low!");
//     }else{
//         alert("Correct!, You guess correct number.");
//             break;
//     }
// }
// console.log("Target number : "+target);
// console.log("Attempts : "+attempts);


                                 // FUNCTION IN JAVASCRIPT


// function square(num){
//     return num * num;
// }
// console.log(square(5));

// function sum(num1, num2){
//     return num1 + num2;
// }
// console.log(sum(78,45));

// function greet(name){
//     console.log(`Hello, ${name}`);
// }
// greet("Salaam Rocky Bhai.");

// const Name = function (name){
//     console.log(`Hello, ${name}!`);
// }
// Name("Ankit Kumar");


// const great = (name) => {
//     console.log(`Hello, ${name}! `);
// }
// great("Ankit Rajput");


// let n = Number(prompt("Enter first number :"));
// let m = Number(prompt("Enter second number :"));
// console.log("num1 = "+n);
// console.log("num2 = "+m);
// let operater = prompt("Enter operater (+,-,*,/,%) :");
// let result;

// function Call(n,m){
// switch(operater){
//     case "+":
//         result = n+m;
//         break;
//     case "-":
//         result = n-m;
//         break;
//     case "*":
//         result = n*m;
//         break;
//     case "/":
//         result = n%m;
//         break;
//     case "%":
//         result = n%m;
//         break;
//     default :
//         return operater;
// }
// return result;
// }
// console.log(Call(n,m));

// function value(a){
//     if(a > 0){
//         return "positive";
//     }else if(a < 0){
//         return "negative";
//     }else{
//         return 0;
//     }
// }
// console.log(value(0));

// let num = Number(prompt("Enter number : "));
// function checkEven(num){
//     if(num % 2 == 0){
//         return "Even";
//     }else{
//         return "Odd";
//     }
// }
// console.log(checkEven(num));


// let c = Number(prompt("Enter number :"));
// function celsiusToFahrenheit(c){
//   let F = (c * (9/5)) + 32;
//     console.log(F);
// }
// celsiusToFahrenheit(c);

// let num = Number(prompt("Enter number :"));
// function convertToPositive(num){
//     if(num < 0){
//         num = (num * (-1));
//         console.log(num);
//     }else{
//         console.log(num);
//     }
// }
// convertToPositive(num);

// for(var i = 0; i < 3; i++){
//     setTimeout(() => console.log(i), 0);
// }
// for(let i = 0; i < 3; i++){
//     setTimeout(() => console.log(i), 0);
// }


// var oldStyle = "I am var";
// let newStyle = "I am let";
// console.log(window.oldStyle);
// console.log(window.newStyle);

// var Sr = "I am the Best!";
// window.Sr = "I am the Best";
// console.log(window.Sr);

// const user = "Global user";

// function show(){
//     console.log(user);
// }
// function run(){
//     const user = "Local user";
//     show();
// }
// run();
// console.log(run());

// const level1 = "Global";

// function outer(){
//     const level2 = "Outer";

//     function middle(){
//         const level3 = "Middle";

//         function inner(){
//             const level4 = "Inner";

//             console.log(level4);
//             console.log(level3);
//             console.log(level2);
//             console.log(level1);
//         }
//         inner();
//     }
//     middle();
// }
// outer();

// let name = "red";

// function paint(){
//     let name = "blue";
//     console.log(color);
// }

// paint();
// console.log(name);

// let score = 50;

// if(true){
//     let score = 100;
//     console.log(score);
// }
// console.log(score);


// //Question 1.
// let color = "red";
// function paint(){
//     let color = "blue";
//     function brush(){
//         console.log(color);
//     }
//     brush();
// }
// function draw(){
//     let color = "green";
//     paint();
// }
// draw();
// console.log(color);

// //Question 2.
// let x = 10;
// function outer(){
//     let x = 20;
//     function inner(){
//         console.log(x);
//     }
//     x = 30;
//     inner();
// }
// outer();
// console.log(x);

// //Question 3.
// let name = "Global";
// function first(){
//     let name = "first";
//     function second(){
//         console.log(name);
//     }
//     return second;
// }
// let result = first();
// function third(){
//     let name = "third";
//     result();
// }
// third();

// //Question 4.
// let value = 5;
// function parent(){
//     let value = 10;
//     function child(){
//         console.log(value);
//     }
//     value = 20;
//     child();
// }
// parent();
// console.log(value);

// //Question 5.
// let message = "Global";
// function outer(){
//     let message = "Outer";

//     function middle(){
//         let message = "Middle";
        
//         function inner(){
//             console.log(message);
//         }
//         inner();
//     }
//     return middle();
// }
// let result1 = outer();
// function test(){
//     let message = "Test";
//     result1();
// }

// const multiply =(a,b,c) => {
//     return a * b * c;
// }
// console.log(multiply(7,9,10));

// const user = (nmae, age, id) => {
//     return nmae;
//     return age;
//     return id;
// }
// console.log(user("Ankit"));
// console.log(user(18));
// console.log(user("bcs2025392"));

// const makeuser = (name,age) => ({name: name, age: age});
// console.log(makeuser("ankit kumar", 18));

// const user = {
//     name : "ankit kumar",
//     greet : () => {
//         console.log(`Hi, I'm ${this.name}`);
//     },
// };
// user.greet();


// function Person(name){
//     this.name = name;
// }
// const P = new Person("ankit");
// console.log(P.name);

// const numbers = [1,2,3,4,5];

// const doubledOld = numbers.map(function(n){
// return n*2;
// });

// const doubled = numbers.map((n) => n*2);
// console.log(doubled);

// const evens = numbers.filter((n) => n%2 === 0);
// console.log(evens);

// const total = numbers.reduce((sum,n) => sum+n, 0);
// console.log(total);

// setTimeout(() => {
//     console.log("This is runs after 2 seconds.");
// },5000);

function processOrder(order){
    if(!order) return "No order provided";
    if(order.items.length === 0) return "No items in order";
    if(!order.paid) return "Order not paid";

    return "Processing order!";
}

function divide(a, b){
    if(b === 0) return "Cannot divide by zero";
    return a / b;
}
console.log(divide(10, 0));
console.log(divide(10, 2));
