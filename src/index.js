import './index.css';

let mainArr = JSON.parse(localStorage.getItem('array')) || [];

function storage() {
  localStorage.setItem('array', JSON.stringify(mainArr));
}

function addHtml() {
  const list = document.getElementById('list');
  let index = 0;
  list.innerHTML = '';
  for (let i = 0; i < mainArr.length; i += 1) {
    mainArr[i].index = i + 1;
    storage();
  }
  const arrMain = JSON.parse(localStorage.getItem('array'));
  for (let i = 0; i < arrMain.length; i += 1) {
    for (let j = 0; j < arrMain.length; j += 1) {
      if (arrMain[j].index === i + 1) {
        index = j;
        break;
      }
    }
    const div = document.createElement('div');
    div.id = 'item';
    div.className = 'item';
    list.appendChild(div);
    const form = document.createElement('form');
    form.className = 'formList';
    form.innerHTML = `<input type="checkbox" class="checkbox" ${arrMain[index].completed ? 'checked' : ''}>`;
    div.appendChild(form);
    const input = document.createElement('input');
    input.className = 'itemText';
    input.value = `${arrMain[index].description}`;
    input.type = 'text';
    input.id = 'itemText';
    form.appendChild(input);
    const button = document.createElement('button');
    button.className = 'button-remove';
    button.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
    div.appendChild(button);
    button.addEventListener('click', () => {
      button.innerHTML = '<i class="fa-solid fa-trash"></i>';
      setTimeout(() => {
        mainArr.splice(i, 1);
        storage();
        addHtml();
      }, 150);
    });
    form.addEventListener('input', () => {
      mainArr[i].description = input.value;
      storage();
    });
  }
  document.getElementById('add-input').value = '';
}

function addObj(value) {
  let object = {};
  object = {
    description: value,
    completed: false,
    index: 0,
  };
  mainArr.push(object);
  storage();
  addHtml();
}

const buttonAdd = document.getElementById('add-button');
buttonAdd.addEventListener('click', () => {
  const inputAdd = document.getElementById('add-input').value;
  addObj(inputAdd);
});

addHtml();

const refresh = document.getElementById('refresh');
refresh.addEventListener('click', () => {
  mainArr = [];
  storage();
  addHtml();
});
