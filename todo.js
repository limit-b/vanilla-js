const toDoForm = document.querySelector('.js-todo-form'),
  toDoInput = document.querySelector('.js-todo-form__input'),
  toDoUL = document.querySelector('.js-todo-ul');

const TODOS_LS = 'toDos';

// const FAS = 'fas',
//   FAS_MINUS = 'fa-minus-circle';

const toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
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
  toDoSpan.textContent = text;
  //   delListBtn.appendChild(delListBtnMinus);
  toDoList.appendChild(delListBtn);
  toDoList.appendChild(toDoSpan);
  toDoList.id = newId;
  toDoUL.appendChild(toDoList);
  const toDoObj = {
    tdoText: text,
    tdoId: newId,
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
      paintToDo(toDo.tdoText);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener('submit', handleSubmitToDo);
}

init();
