// DOM (Document Object Model)

// 1. getElementById
// const heading = document.getElementById('heading')

// 2. getElementsByClassName
// const heading =document.getElementsByClassName('heading')

// 3. getElementsByTagName
// const heading=document.getElementsByTagName('heading')

// 4. querySelector
// const heading =document.querySelector('.heading')

// 5. querySelectorAll
// const heading=document.querySelectorAll('.heading')
// console.log(heading);


// #. Traverse DOM

// 1. parentNode method
// const heading=document.querySelector(".heading")
// console.log(heading.parentNode);

// 2. childNodes method
// const parent=document.querySelector(".parent");
// console.log(parent.childNodes);

// 3. nextElementSibling method
// const heading=document.querySelector('h3')
// console.log(heading.nextElementSibling);

// 4. previousElementSibling method
// const heading=document.querySelector('h3')
// console.log(heading.previousElementSibling);

// #. Manipulation
// const heading=document.querySelector('.heading')
// heading.innerHTML="Web Development is awesome";
// heading.style.color="purple";
// heading.style.fontSize="3rem";
// heading.classList.add('title');
// heading.classList.remove("heading");


// #. Create Element
// const heading=document.createElement("h1")
// heading.innerHTML="JavaScript is Awesome"
// heading.classList.add("title")

// const parent=document.querySelector(".parent")

// const heading_h3=document.createElement("h3");
// heading_h3.innerHTML="Web Dev Awesome"

// parent.appendChild(heading)
// heading.insertAdjacentElement("afterend",heading_h3)

// #. DOM Events
const button=document.querySelector("#btn");
const heading=document.querySelector("#heading")

button.addEventListener("click",(event)=>{
    heading.style.color="red";
    heading.style.fontSize="3rem"
    console.log("Mouse is clicked",event);
})