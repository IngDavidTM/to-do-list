import storage, { mainArr } from './storage.js';
import addHtml from './addHtml.js';

function addObj(value) {
  let object = {};
  object = {
    description: value,
    completed: false,
    index: 0,
  };
  mainArr.push(object);
  storage();
  addHtml();
}

export default addObj;