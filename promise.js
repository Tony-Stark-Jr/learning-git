// Scenario

/*
 1. Register
 2. Send welcome email
 3. Login
 4. Get user data
 5. Display user data
*/

function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Register end");
            resolve();
        }, 1000)
    });
}

function sendEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Email end");
            resolve();
        }, 3000)
    })


}

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Login end");
            resolve();
        }, 1000)
    })

}

function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Get user data");
            resolve();
        }, 1000)
    })
}

function displayUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User data displayed");
            resolve();
        }, 1000)
    })
}

// callback hell 
// register(() =>
//     sendEmail(() => {
//         login(() => {
//             getUserData(() => {
//                 displayUserData();
//             })
//         })
//     })
// );


register()
    .then(sendEmail)
    .then(login)
    .then(getUserData)
    .then(displayUserData)

