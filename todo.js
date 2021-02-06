const toDoForm = document.querySelector('.js-todo-form'),
  toDoInput = document.querySelector('.js-todo-form__input'),
  toDoUL = document.querySelector('.js-todo-ul');

const TODOS_LS = 'toDos';

// const FAS = 'fas',
//   FAS_MINUS = 'fa-minus-circle';

function paintToDo(text) {
  const toDoList = document.createElement('li');
  const delListBtn = document.createElement('button');
  //   const delListBtnMinus = document.createElement('i');
  //   delListBtnMinus.classList.add(FAS);
  //   delListBtnMinus.classList.add(FAS_MINUS);
  delListBtn.textContent = 'X';
  const toDoSpan = document.createElement('span');
  toDoSpan.textContent = text;
  //   delListBtn.appendChild(delListBtnMinus);
  toDoList.appendChild(delListBtn);
  toDoList.appendChild(toDoSpan);
  toDoUL.appendChild(toDoList);
}

function handleSubmitToDo(event) {
  event.preventDefault();
  const currentToDoValue = toDoInput.value;
  paintToDo(currentToDoValue);
  toDoInput.value = '';
}

function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener('submit', handleSubmitToDo);
}

init();
