import storage, { mainArr } from './storage.js';

const checkFunction = (index) => {
  if (mainArr[index].completed === false) {
    mainArr[index].completed = true;
  } else if (mainArr[index].completed === true) {
    mainArr[index].completed = false;
  }
  storage();
};

const clearFunction = () => {
  const arrMain = mainArr.filter((obj) => obj.completed === false);
  localStorage.setItem('array', JSON.stringify(arrMain));
  window.location.reload();
};

export default checkFunction;
export { clearFunction };