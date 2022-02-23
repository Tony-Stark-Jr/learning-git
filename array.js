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

const actors = [
    {
        name: "actor1",
        payment: 100
    },
    {
        name: "actor2",
        payment: 200
    },
    {
        name: "actor3",
        payment: 300
    }
]


// ForEach Loops
actors.forEach((actors) => {
    actors.payment=actors.payment-30;
    console.log(actors.payment);
    // console.log(actors);
})