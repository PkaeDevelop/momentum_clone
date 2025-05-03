const toDoFrom = document.getElementById("todo-form");
const toDoInput = toDoFrom.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos =[];
const TODOS_KEY ="toDos"

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//to-do 삭제
function deleteToDo(event){
    const li = event.target.parentElement;

    //삭제한 값 DB 업데이트
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); //배열에서 값 삭제
    li.remove(); //html에서 삭제
    localStorage.removeItem(TODOS_KEY); //로컬스토리지 값 삭제
    if(toDos.length > 0){ //배열에서 값 삭제후 값이 남아있으면 로컬스토리지에 저장
        localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    }

}

//to-do 생성
function paintToDo(newTodoObj){
    const li = document.createElement("li");
    li.id=newTodoObj.id;
    const span = document.createElement("span");
    span.innerText=newTodoObj.text;
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
    const newTodoObj={
        text:newTodo,
        id:Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

function sayHello(item){
    console.log("this is item", item)
}

//main
toDoFrom.addEventListener("submit", handleToDoSubmit)
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
