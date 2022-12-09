import './index.css';
import addHtml from './modules/addHtml.js';
import btnAdd from './modules/buttonAdd.js';
import refreshBtn from './modules/refresh.js';
import { clearFunction } from './modules/check.js';

const buttonAdd = document.getElementById('add-button');
const inputAdd = document.getElementById('add-input');
buttonAdd.addEventListener('click', btnAdd);
inputAdd.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    btnAdd();
  }
});
const refresh = document.getElementById('refresh');
refresh.addEventListener('click', refreshBtn);
const clear = document.getElementById('clear');
clear.addEventListener('click', clearFunction);
addHtml();