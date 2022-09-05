const imagesSize = 24;

const choseImage = Math.floor(Math.random() * imagesSize);

const image = document.createElement("img");
image.src = `img/${choseImage}.jpg`;
image.classList.add("bgd-img");

document.body.appendChild(image);