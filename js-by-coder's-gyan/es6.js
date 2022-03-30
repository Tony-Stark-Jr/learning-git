// ES6 aka EcmaScript 2015

// #. let and const

// function register() {
//     var username = 'Santosh Marar';
//     var password = "Secret"
//     console.log(username);
// }

// register();

// let age = 18

// if (age >= 18) {
//     console.log("You can drive");
// }
// else {
//     console.log("You can't drive");
// }


// let product = "laptop";
// product = "Mobile";

// const item="pen"
// item='pencil'

// console.log(product,item);

// #. Arrow Function
// const greet = () => {
//     console.log("Good Morning");
// }

// greet()

// const myButton = document.querySelector("#myButton");

// const ship = {
//     price: 100,
//     buy: function () {
//         myButton.addEventListener('click', () => {
//             console.log(`I spent ${this.price}`);
//         })
//     }
// }

// ship.buy();


// #. Template literals AKA backticks


// #. Enhanced objeect literals
// 1. Computed property keys
// const keyName = 'name'
//2. Method defination shorthand

// const product = {
//     [keyName]: "Mobile",
//     price: 100,

//     //2. Method defination shorthand
//     buy() {
//         console.log("Method defination shorthand");
//     }


// };

// console.log(product);
// product.buy()

// 3. Property shorthand 
// const accessToken = "dakdiske"
// const refershToken = "dkeondik"

// const user = {
//     accessToken,
//    refershToken,
// }

// console.log(user);

// #. Destructuring

//  In Ojbect
// const user={
//     name:"Santosh Marar",
//     age:17,
//     profession:'Web Developer and Designer'
// }

// const {name,age,profession}=user;
// console.log(profession)

// In Array
// const user = ['Santosh Marar', 17, 'Software Engineer']
// const [name,age,profession]=user;
// console.log(age);

// #. Default Parameters
// const data=(name,password,image='stark.png')=>{
// console.log(name,password,image);
// }

// data('Santosh',98475859)

// #. Spread Operators
// In Array
// const Array=['ram','seeta','bheem'];

// const array=[...Array,'suman']
// console.log(array);

// In object
// const data={
//     name:'Santosh Marar',
//     age:17,
//     profession:'Engineer'
// }

// const data2={...data,profession:'Full-Stack Developer'}

// console.log(data2);

// #. Rest ...
// It is use in function
// const sum=(...num)=>{
// console.log(num);
// }

// sum(2,5,6)

// #. For of loop
// Array, String, Object, Set , Map

// In Array
// const user=['Santosh',17,'Patna','Nepal','S Industries'];
// for(data of user){
//     console.log(user);
// }

// In String
// const name='JavaScript';
// for (const char of name) {
//     console.log(char);
// }

// In Object
// const user={
//     name:'Santosh Marar',
//     age:17,
//     profession:'Engineer'
// }

// for(const [key,value] of Object.entries(user)){
//     console.log(key,value);
// }

// #. Promise

// function login() {
//     return new Promise((resolve, reject) => {
//         setInterval(() => {
//             console.log("login..");
//             reject("There is a problem");
//         }, 0)
//     })
// }

// login().then(()=>{
//     console.log("Redirecting");
// }).catch((data)=>{
// console.log(data);
// })

// #. find method (Array method)
// const users = [{ name: "Stark" },{name: "Suman"}]

// const user = users.find((user) => {
//     return user.name === "Stark";
// })

// console.log(user);

// #. findIndex
// const users = [{ name: "Suman" }, { name: "Stark" }]

// const user = users.findIndex((user) => {
//     return user.name === "Suman";
// })

// console.log(user);

// Set
// const uniqueNumbers = new Set();
// uniqueNumbers.add(5),
// uniqueNumbers.add(4),
// uniqueNumbers.add(4),
// uniqueNumbers.add(7)

// console.log(uniqueNumbers.has(5));

// const array = [1, 2, 3, 4, 5, 6, 1, 10, 4, 3];
// const uniqueNumbers = new Set(array);
// console.log(Array.from(uniqueNumbers));


// map(hashtables)
// const urls = new Map();
// urls.set("development", "exe.com")
// urls.set("production", "exes.com")
// console.log(urls);

// for ([key, value] of urls) {
//     console.log(key, value);
// }


// #.Classes
// class Person {

//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         console.log("Good Morning");
//     }
// }

// class GreatPerson extends Person {
//     attitude = "cool"

//     greet(name) {
//         console.log(`${name} Good Evening`);
//     }
// }

// const jhon = new GreatPerson('Jhon Doe')
// console.log(jhon);

