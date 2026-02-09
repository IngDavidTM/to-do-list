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

    // Drag and Drop Logic
    div.draggable = true;
    div.addEventListener('dragstart', () => {
      div.classList.add('dragging');
    });

    div.addEventListener('dragend', () => {
      div.classList.remove('dragging');
    });

    div.addEventListener('dragover', (e) => {
      e.preventDefault();
      const afterElement = getDragAfterElement(list, e.clientY);
      const dragging = document.querySelector('.dragging');
      if (afterElement == null) {
        list.appendChild(dragging);
      } else {
        list.insertBefore(dragging, afterElement);
      }
    });

    div.addEventListener('drop', () => {
      // Reordering logic
      const newOrder = [...list.querySelectorAll('.item')];
      const newMainArr = [];
      newOrder.forEach((item, index) => {
        const form = item.querySelector('.formList');
        const input = form.querySelector('.itemText');
        const checkbox = form.querySelector('.checkbox');

        // Find the original object in mainArr or recreate it based on DOM
        // Better to find based on content if possible, or just rebuild since we have all data in DOM
        const obj = {
          description: input.value,
          completed: checkbox.checked,
          index: index + 1
        };
        newMainArr.push(obj);
      });

      // Update mainArr
      mainArr.splice(0, mainArr.length, ...newMainArr);
      storage();
      // We don't call addHtml() here to avoid breaking the drag end animation, 
      // but the data is saved. Next refresh will show correct order.
      // Actually, calling addHtml() might be jarring. 
    });

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
    input.style.textDecoration = arrMain[index].completed ? 'line-through' : '';
    input.style.color = arrMain[index].completed ? 'gray' : '';
    form.appendChild(input);
    const button = document.createElement('button');
    button.className = 'button-remove';
    button.innerHTML = '<i class="fa-solid fa-trash"></i>';
    div.appendChild(button);
    button.addEventListener('click', () => {
      mainArr.splice(i, 1);
      storage();
      addHtml();
    });
    input.addEventListener('input', () => {
      mainArr[i].description = input.value;
      storage();
    });
    input.addEventListener('focus', () => {
      button.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
    });
    input.addEventListener('focusout', () => {
      button.innerHTML = '<i class="fa-solid fa-trash"></i>';
    });
    checkbox.addEventListener('click', () => {
      checkFunction(i);
      addHtml();
    });
  }
  document.getElementById('add-input').value = '';
};

export default addHtml;
const getDragAfterElement = (container, y) => {
  const draggableElements = [...container.querySelectorAll('.item:not(.dragging)')];

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child };
    } else {
      return closest;
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element;
};
