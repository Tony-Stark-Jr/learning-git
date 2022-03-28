
// const button = document.querySelector("#btn");
// const bulb = document.getElementById("image");

// console.log(bulb);
// button.addEventListener('click', () => {
//     console.log(blub.src);
//     if (bulb.src.match("off")) {
//         blub.src = "./blub-on.giff";
//     }
//     else {
//         blub.src = './blub-off.gif'
//     }
// })


// const bulbSwitch = document.querySelector('#bulbSwitch');
// const bulb = document.querySelector('#bulb');

// bulbSwitch.addEventListener('click', function () {
//     console.log(bulb.src);
//     if (bulb.src.match('off')) {
//         bulb.src = './bulb-on.gif';
//         bulbSwitch.innerHTML = 'Turn OFF';
//     } else {
//         bulb.src = './bulb-off.gif';
//         // bulbSwitch.innerHTML = 'Turn ON';
//     }
// });

// function changeImage() {
//     var image = document.getElementById('myImage');
//     if (image.src.match("bulboff")) {
//       image.src = "bulb-off.gif";
//     } else {
//       image.src = "bulb-on.gif";
//     }
//   }




const root = document.querySelector("#root");
const button = document.querySelector("button");

function createItem(item) {
  // Card
  const card = document.createElement('div');
  card.classList.add('card')

  // Photo  
  const photo = document.createElement("img");
  photo.src = item.thumbnailUrl;
  
  // Title
  const title = document.createElement('h4');
  title.innerHTML = item.title
  card.appendChild(photo);
  card.appendChild(title);
  root.appendChild(card);
}

function displayImages(items) {
  items.forEach(function (item) {
    createItem(item)
  })
}


button.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then((res) => res.json())
    .then((items) => {
      displayImages(items);
    })
})