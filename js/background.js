const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const choseImage = images[Math.floor(Math.random() * images.length)];

const image = document.createElement("img");
image.src = `img/${choseImage}`;
image.classList.add("bgd-img");
document.body.appendChild(image);