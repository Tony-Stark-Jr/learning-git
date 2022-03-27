// Scenario

/*
 1. Register
 2. Send welcome email
 3. Login
 4. Get user data
 5. Display user data
*/

function register(callback) {
    setTimeout(() => {
        console.log("Register end");
        callback();
    }, 100)
}

function sendEmail(callback) {
    setTimeout(() => {
        console.log("Email end");
        callback();
    }, 1000)

}

function login(callback) {
    setTimeout(() => {
        console.log("Login end");
        callback();
    }, 5000)
}

function getUserData(callback) {
    setTimeout(() => {
        console.log("Got user data");
        callback();
    }, 3000)


}

function displayUserData() {
    setTimeout(() => {
        console.log("User data displayed");
    }, 4000)

}

// callback hell 
register(()=>
    sendEmail(() => {
        login(() => {
            getUserData(() => {
                displayUserData();
            })
        })
    })
);

console.log("Other applicaation work!");
