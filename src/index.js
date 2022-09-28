import './index.css';
import addHtml from './modules/addHtml.js';
import btnAdd from './modules/buttonAdd.js';
import refreshBtn from './modules/refresh.js';

addHtml();
const buttonAdd = document.getElementById('add-button');
buttonAdd.addEventListener('click', btnAdd);
const refresh = document.getElementById('refresh');
refresh.addEventListener('click', refreshBtn);
