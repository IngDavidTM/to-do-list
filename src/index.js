import './index.css';
import addHtml from './modules/addHtml.js';
import btnAdd from './modules/buttonAdd.js';
import refreshBtn from './modules/refresh.js';
import { clearFunction } from './modules/check.js';

const buttonAdd = document.getElementById('add-button');
buttonAdd.addEventListener('click', btnAdd);
const refresh = document.getElementById('refresh');
refresh.addEventListener('click', refreshBtn);
const clear = document.getElementById('clear');
clear.addEventListener('click', clearFunction);
addHtml();