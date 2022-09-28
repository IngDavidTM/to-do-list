import storage from './storage.js';
import mainArr from './const.js';
import checkFunction from './check.js';

const addHtml = () => {
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
    div.appendChild(form);
    const checkbox = document.createElement('input');
    checkbox.className = 'checkbox';
    checkbox.type = 'checkbox';
    checkbox.checked = arrMain[index].completed ? 'checked' : '';
    form.appendChild(checkbox);
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
    checkbox.addEventListener('click', () => {
      checkFunction(i);
      addHtml();
    });
  }
  document.getElementById('add-input').value = '';
};

export default addHtml;