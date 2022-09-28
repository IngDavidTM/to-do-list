import mainArr from './const.js';

const storage = () => {
  localStorage.setItem('array', JSON.stringify(mainArr));
};
export default storage;