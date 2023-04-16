const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //but, localStorage에는 배열이 아닌 string만 저장이 된다. 배열같이 저장을 해 둔다.
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // toDo의 id가 li의 id와 다른 걸 남기고 싶다.
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text; //텍스트를 span 내부에 넣었다.
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span); //span을 li 안에 집어넣었다.
    li.appendChild(button); //button을 li에 추가한다.
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoOBj = {
        text:newTodo,
        id:Date.now() //id값을 집어넣어서 구분이 가능하게 만들어준다.
    }
    toDos.push(newTodoOBj);
    paintToDo(newTodoOBj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello() {
    console.log("hello");
}
const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); // string값을 가지고 배열을 만들 수 있다.
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo) // ★ forEach는 parsedToDos array에 있는 각각의 요소에 대해서 paintToDo function을 실행시켜준다.;

    // 새로운 문제 발생. 새로 추가한 것만 저장이 되고 예전 것은 없어지는 문제가 발생!
    // 이전 것에 예전 것을 덮어씌워져서 문제가 발생한다.
}