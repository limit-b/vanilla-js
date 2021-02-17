const toDoForm = document.querySelector('.js-todo-form'),
  toDoInput = document.querySelector('.js-todo-form__input'),
  toDoUL = document.querySelector('.js-todo-ul');

const TODOS_LS = 'toDos';

// const FAS = 'fas',
//   FAS_MINUS = 'fa-minus-circle';

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoUL.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.tdObjId !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function paintToDo(text) {
  const toDoList = document.createElement('li');
  const delListBtn = document.createElement('button');
  const toDoSpan = document.createElement('span');
  const newId = toDos.length + 1;
  //   const delListBtnMinus = document.createElement('i');
  //   delListBtnMinus.classList.add(FAS);
  //   delListBtnMinus.classList.add(FAS_MINUS);
  delListBtn.textContent = 'X';
  delListBtn.addEventListener('click', deleteToDo);
  toDoSpan.textContent = text;
  //   delListBtn.appendChild(delListBtnMinus);
  toDoList.appendChild(delListBtn);
  toDoList.appendChild(toDoSpan);
  toDoList.id = newId;
  toDoUL.appendChild(toDoList);
  const toDoObj = {
    tdObjText: text,
    tdObjId: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmitToDo(event) {
  event.preventDefault();
  const currentToDoValue = toDoInput.value;
  paintToDo(currentToDoValue);
  toDoInput.value = '';
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.tdObjText);
    });
  }
}

function init() {
  toDoForm.addEventListener('submit', handleSubmitToDo);
  loadToDos();
}

init();
