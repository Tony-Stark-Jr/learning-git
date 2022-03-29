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
