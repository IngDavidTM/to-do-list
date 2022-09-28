import storage from './storage.js';
import mainArr from './const.js';
import addHtml from './addHtml.js';

const refreshBtn = () => {
  mainArr.splice(0, mainArr.length);
  storage();
  addHtml();
};

export default refreshBtn;