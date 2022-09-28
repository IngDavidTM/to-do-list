import storage, { mainArr } from './storage.js';

const checkFunction = (index) => {
  if (mainArr[index].completed === false) {
    mainArr[index].completed = true;
  } else if (mainArr[index].completed === true) {
    mainArr[index].completed = false;
  }
  storage();
};

export default checkFunction;