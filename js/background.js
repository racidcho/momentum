const images = ["0.jpg","1.jpg","2.jpg","3.jpg"];

const todayImg = images[Math.floor(Math.random()*images.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${todayImg}`;

document.body.appendChild(bgImg);
bgImg.classList.add("bgImg");