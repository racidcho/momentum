const quotes = [ 
  { //1
      quote: "실력 없는 자존심만큼 비참한 것도 없다.",
      author: "",
  },
  { //2
      quote:"영감이 찾아오길 기다려선 안 된다. 몽둥이를 들고 그걸 쫓아가야 한다.",
      author: "-잭 런던-",
  },
  { //3
      quote: "시나리오는 문학이라기보다는 건축이다.",
      author: "-엘리아 카잔-",
  },
  { //4
      quote: "글이 형편없고 어찌할 수 없을 정도로 엉망일 때도 그냥 계속해서 써나가야 하네. 소설을 다루는 방법은 오로지 한 가지뿐일세. 빌어먹을 이야기를 끝까지 밀어 붙이는 거지.",
      author: "-어니스트 헤밍웨이-",
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const quoteId = document.getElementById("quote");
const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
const width = window.innerWidth || document.body.clientWidth;

function quoteR() {
  const todayQuote2 = quotes[Math.floor(Math.random()*quotes.length)];
  quote.innerText = todayQuote2.quote;
  author.innerText = todayQuote2.author;
}
const todoInput2 = document.querySelector("#todo-form input");

if(width <1300) {

quoteId.id = "hiddenOff";
const hiddenOff = quotes;
const quote = document.querySelector("#hiddenOff span:first-child");
const author = document.querySelector("#hiddenOff span:last-child");
const quoteBtn = document.querySelector("#ToggleBtn");
quoteBtn.addEventListener("click", quoteR);

}