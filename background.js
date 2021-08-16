const images = ["image1.png", "image2.jpg", "image3.jpeg"];
const backgroundImage = document.createElement("img");
const body = document.querySelector("body");
body.appendChild(backgroundImage);

const randomNumberImages = Math.floor(String(Math.random() * images.length));
backgroundImage.src = "img/" + images[randomNumberImages];

console.log(backgroundImage);
