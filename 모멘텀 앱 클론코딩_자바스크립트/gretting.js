const form = document.querySelector(".js-form");
 input = form.querySelector("input");
 greeting = document.querySelector(".js-greetings");
const USER_LS = "currentUser",
 SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
} // 로컬 저장소에 입력받은 텍스트 값을 저장.
function handleSubmit(event){
   event.preventDefault();
   const currentValue = input.value;
   paintGreeting(currentValue);
   console.log(currentValue);
   saveName(currentValue);
} //즉, 폼에 이름을 적고 엔터를 누르면 
  // 입력한 이름이 콘솔 로그에 저장되고 paintGreeting을 활용하여 입력한 문구를 표시함.

function askForName(){
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
} //내 이름을 입력받는 함수.

function paintGreeting(text){
   form.classList.remove(SHOWING_CN);
   greeting.classList.add(SHOWING_CN);
   greeting.innerText = `Hello ${text}`;
}

function loadName(){
 const currentUser = localStorage.getItem(USER_LS);
 if(currentUser === null){
   askForName(); //내 이름을 요청해야함.
    // there is no user
 } else {
// there is user
 paintGreeting(currentUser);
 }
}

function init(){
 loadName();
}
init();