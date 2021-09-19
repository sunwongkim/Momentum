const backgroundImage = document.createElement("img");
const body = document.querySelector("body");
body.appendChild(backgroundImage);

const images = ["image1.jpg", "image2.jpg", "image3.jpg"];

const randomNumberImages = Math.floor(Math.random() * images.length);
backgroundImage.src = "img/" + images[randomNumberImages];

console.log(backgroundImage);
