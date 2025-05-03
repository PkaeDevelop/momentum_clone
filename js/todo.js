const toDoFrom = document.getElementById("todo-form");
const toDoInput = toDoFrom.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos =[];
const TODOS_KEY ="toDos"

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//to-do 삭제
function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

//to-do 생성
function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText=newTodo;
    //삭제버튼
    const button =document.createElement("button");
    button.innerText="X";
    button.addEventListener("click",deleteToDo);
    //엘리멘트 추가
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

}

//to do 입력후 text 삭제
function handleToDoSubmit(event){
    event.preventDefault(); //브라우저 기본동작 막기;
    const newTodo = toDoInput.value;
    toDoInput.value="";
    //To-do 리스트 추가
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

function sayHello(item){
    console.log("this is item", item)
}

//main
toDoFrom.addEventListener("submit", handleToDoSubmit)
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    console.log(saveToDos);
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(sayHello);
}
