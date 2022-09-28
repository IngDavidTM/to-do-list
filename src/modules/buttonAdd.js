import addObj from './addObj.js';

const btnAdd = () => {
  const inputAdd = document.getElementById('add-input').value;
  addObj(inputAdd);
};

export default btnAdd;