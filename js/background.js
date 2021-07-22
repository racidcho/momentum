const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg"];

const bgImg = document.createElement("img");

function randomImg() {
  const div = document.createElement("div");
  const todayImg = images[Math.floor(Math.random()*images.length)];
  bgImg.src = `img/${todayImg}`;
  document.body.appendChild(bgImg);
  document.body.appendChild(div);
  
  bgImg.classList.add("bgImg");
  div.classList.add("mobileBg");

}
randomImg();
setInterval(randomImg, 60000);