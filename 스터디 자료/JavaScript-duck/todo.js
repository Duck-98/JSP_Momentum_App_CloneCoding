const toDoForm = document.querySelector(".js-toDoForm"),
 toDoInput = toDoForm.querySelector("input");
 toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event){
     const btn = event.target;
     const li = btn.parentNode;
     toDoList.removeChild(li); //버튼을 클릭하면 li가 삭제됨
     const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
     });
     toDos = cleanToDos;
     saveToDos();
}  
function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
function paintToDo(text){
    console.log(text);
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click",deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDos();
} //할 일을 입력하면 toDos배열에 추가됨.
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        console.log(parsedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        }); //배열에 담겨져있는 것들을 각각 한번씩 함수를 실행시켜줌.
    }
}


function init(){
    
 loadToDos();
 toDoForm.addEventListener("submit", handleSubmit);
}
init();