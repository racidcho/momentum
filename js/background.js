const images = ["0.png","1.png","2.png,3.png"];

const todayImg = images[Math.floor(Math.random()*images.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${todayImg}`;

document.body.appendChild(bgImg);
bgImg.classList.add("bgImgIndex");