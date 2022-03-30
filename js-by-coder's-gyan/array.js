// Arrays and Loops 
// const languages = ['javascript', 'python', 'c']
// length
// console.log(languages.length);
// console.log(languages.push('dart'));
// console.log(languages.unshift('java'));
// console.log(languages.pop());
// console.log(languages.shift());
// console.log(languages);

// Loops
// const actors = [
//     {
//         name: "actor1",
//         payment: 100
//     },
//     {
//         name: "actor2",
//         payment: 200
//     },
//     {
//         name: "actor3",
//         payment: 300
//     }
// ]

// Confusing code for me

// for (let i = 0; i < actors.length; i++) {
//     actors[i].payment = actors[i].payment - 20;
// }

// console.log(actors);

// ]const actors = [
//     {
//         name: "actor1",
//         payment: 100
//     },
//     {
//         name: "actor2",
//         payment: 200
//     },
//     {
//         name: "actor3",
//         payment: 300
//     }
// ]


// ForEach Loops
// actors.forEach((actors) => {
//     actors.payment=actors.payment-30;
//     console.log(actors.payment);
//     // console.log(actors);
// })

// For let of Loops


// Filter 
// const students = [
//     {
//         name: 'Student 1',
//         marks: 45
//     },
//     {
//         name: 'Student 2',
//         marks: 60
//     },
//     {
//         name: 'Student 3',
//         marks: 35
//     }
// ]

// const failed = students.filter((students => {
//     return students.marks < 45 
// }))

// console.log(failed);



// Map            
// const users = [{
//     fname: 'Tony',
//     lname: 'Stark'
// },
// {
//     fname: 'Santosh',
//     lname: 'Marar'
// }
// ]

// const maps = users.map((user) => {
//     console.log(` Full Name : ${user.fname} ${user.lname}`);
// })


// Reduce
// const movies = [
//     {
//         name: 'Insterstellar',
//         budget: 100
//     },
//     {
//         name: 'Social',
//         budget: 150

//     },
//     {
//         name: 'Matrix',
//         budget: 300
//     }
// ]

// let total = 0;

// movies.forEach((movie) => {
//     total += movie.budget;

// })


// const total = movies.reduce((acc, movie) => {
//     acc += movie.budget
//     return acc
// }, 0)

// console.log(total)


// indexOf
// admins = [2, 5, 4]

// const user = {
//     name: 'xyz',
//     id: 5
// }

// const isAdmin = admins.indexOf(user.id) > -1;
// console.log(isAdmin);


// includes
// console.log(admins.includes(user.id));


// find
// const peoples = [
//     {
//         id: 1,
//         name: "Santosh Marar",
//         class: 11,
//         fav_subject: ["computer", "math", "physics", "chemistry", "economic", "history"]
//     },
//     {
//         id: 2,
//         name: "Tony Stark",
//         class: "unknown",
//         fav_things: ['flying', 'cars']
//     },
// ]

// const fai = peoples.find((people) => {
//     if (people.name === "Santosh Marar") {
//         console.log(people.id,people.fav_subject);
//     }
// })



// sort
// const people = ["Santosh", "Suman", "Ram", "David", "Aklesh", "Aashish", "Suraj", "Saket", "Dipak", "Tony", "Stark"]
// const peoples = people.sort()
// console.log(peoples);


// slice
// const people = ["Santosh", "Suman", "Suraj", "Saket", "Dipak", "Tony", "Stark"]
// const peoples=people.slice(1)
// console.log(peoples);