import './index.css';

const mainArr = [
  {
    description: 'description 1',
    completed: true,
    index: 1,
  },
  {
    description: 'description 2',
    completed: false,
    index: 2,
  },
  {
    description: 'description 3',
    completed: false,
    index: 3,
  },
  {
    description: 'description 4',
    completed: true,
    index: 4,
  },
];

const list = document.getElementById('list');
let index = 0;
for (let i = 0; i < mainArr.length; i += 1) {
  for (let j = 0; j < mainArr.length; j += 1) {
    if (mainArr[j].index === i + 1) {
      index = j;
      break;
    }
  }
  const div = document.createElement('div');
  div.id = 'item';
  div.className = 'item';
  div.innerHTML = `<div id="item" class="item">
  <input type="checkbox" class="checkbox" ${mainArr[index].completed ? 'checked' : ''}>
  <input type="text" class="itemText" value="${mainArr[index].description}">
  <button><i class="fa-solid fa-ellipsis-vertical"></i></button>
  </div>`;
  list.appendChild(div);
}