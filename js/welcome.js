const loginform = document.querySelector("#login-form input");
const login = document.querySelector("#login-form");
const name1 = document.querySelector("h1");
const clearBtn = document.querySelector("#clearBtn");

function onLoginBtnClick(event) {
    event.preventDefault();
    const username = loginform.value;

    const HIDDEN_CLASSNAME = "hidden";
    localStorage.setItem("user", username);
    login.classList.add(HIDDEN_CLASSNAME);
    name1.innerText = `${username}님 환영합니다!`;
    name1.classList.add("color");
    name1.classList.remove(HIDDEN_CLASSNAME);
    clearBtn.classList.remove("hidden");
    loginform.value = "";
}

const savedUsername = localStorage.getItem("user");

if (savedUsername === null) {
    login.classList.remove("hidden");
    login.addEventListener("submit" , onLoginBtnClick);
} else {    
    login.classList.add("hidden");
    name1.classList.remove("hidden");
    
    name1.innerText = `${savedUsername}님 환영합니다!`;
    name1.classList.add("color");
    clearBtn.classList.remove("hidden");
}

clearBtn.addEventListener("click" , clearBtnClick);

function clearBtnClick() {
    event.preventDefault();
    localStorage.clear();
    login.classList.remove("hidden");
    name1.classList.add("hidden");
    clearBtn.classList.add("hidden");
    login.addEventListener("submit" , onLoginBtnClick);
    loginform.innerText = "";
}