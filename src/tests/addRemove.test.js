import addObj from '../modules/addObj.js';
import mainArr from '../modules/const.js';

document.body.innerHTML = `<form><input type="text" id="add-input" placeholder="Add to your list...">
<button type="button" id="add-button"><i class="fa-solid fa-paper-plane"></i></button></form>
<div id="list" class="list"></div>`;

describe('add method', () => {
  test('should add a item to the list', () => {
    addObj('hello world');
    addObj('hello Microverse');
    const list = document.querySelectorAll('.itemText');
    expect(list.length).toEqual(2);
  });
  test('should change the value of mainArr', () => {
    expect(mainArr).toEqual([{
      description: 'hello world',
      completed: false,
      index: 1,
    }, {
      description: 'hello Microverse',
      completed: false,
      index: 2,
    }]);
  });
});
describe('remove method', () => {
  test('should remove a item from the list', () => {
    const removeBtn = document.querySelectorAll('.button-remove');
    removeBtn[0].click();
    const list = document.querySelectorAll('.itemText');
    expect(list.length).toEqual(1);
  });
  test('should change the value of mainArr', () => {
    expect(mainArr).toEqual([{
      description: 'hello Microverse',
      completed: false,
      index: 1,
    }]);
  });
});