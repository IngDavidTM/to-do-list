import storage from './storage.js';
import mainArr from './const.js';
import addHtml from './addHtml.js';

const addObj = (value) => {
  let object = {};
  object = {
    description: value,
    completed: false,
    index: 0,
  };
  mainArr.push(object);
  storage();
  addHtml();
};

export default addObj;