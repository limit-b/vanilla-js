const toDoForm = document.querySelector('.js-todo-form'),
  toDoInput = toDoForm.querySelector('.js-todo-form__input'),
  toDoUL = document.querySelector('.js-todo-ul');

const TODOS_LS = 'toDos';

let idNumbers = 1;

// const FAS = 'fas',
//   FAS_MINUS = 'fa-minus-circle';

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const btn = event.target,
    li = btn.parentNode;
  toDoUL.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.tdObjId !== parseInt(li.id);
  });
  //
  while (toDoUL.firstChild) {
    toDoUL.removeChild(toDoUL.firstChild);
  }
  idNumbers = 1;
  cleanToDos.forEach(function (toDo) {
    toDo.tdObjId = idNumbers;
    paintToDo(toDo.tdObjText);
  });
  //
  toDos = cleanToDos;
  saveToDos();
}

function paintToDo(text) {
  const toDoList = document.createElement('li'),
    delListBtn = document.createElement('button'),
    toDoSpan = document.createElement('span');
  const newId = idNumbers++;
  //   const delListBtnMinus = document.createElement('i');
  //   delListBtnMinus.classList.add(FAS);
  //   delListBtnMinus.classList.add(FAS_MINUS);
  delListBtn.textContent = '×';
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
