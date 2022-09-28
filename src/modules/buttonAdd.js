import addObj from './addObj.js';

function btnAdd() {
  const inputAdd = document.getElementById('add-input').value;
  addObj(inputAdd);
}

export default btnAdd;