import addObj from '../modules/addObj.js';
import mainArr from '../modules/const.js';

document.body.innerHTML = `<form><input type="text" id="add-input" placeholder="Add to your list...">
<button type="button" id="add-button"><i class="fa-solid fa-paper-plane"></i></button></form>
<div id="list" class="list"></div>`;

describe('edit method', () => {
  test('should edit the List', () => {
    addObj('hello planet');
    const input = document.querySelector('.itemText');
    input.value = 'hello Benjamin';
    input.dispatchEvent(new Event('input'));
    expect(document.querySelector('.itemText').value).toBe('hello Benjamin');
  });
  test('should update the mainArr', () => {
    const input = document.querySelector('.itemText');
    input.value = 'hello David';
    input.dispatchEvent(new Event('input'));
    expect(mainArr).toEqual([{
      description: 'hello David',
      completed: false,
      index: 1,
    }]);
  });
});
describe('update status', () => {
  test('should edit the mainArr', () => {
    addObj('cheers');
    const checkbox = document.querySelectorAll('.checkbox');
    checkbox[0].click();
    checkbox[1].click();
    expect(mainArr).toEqual([{
      description: 'hello David',
      completed: true,
      index: 1,
    }, {
      description: 'cheers',
      completed: true,
      index: 2,
    }]);
  });
  test('should update the status', () => {
    const checkbox = document.querySelectorAll('.checkbox');
    expect(checkbox[0].checked).toEqual(true);
  });
});
describe('clear selected', () => {
  test('should clear the selected on localStorage', () => {
    delete window.location;
    window.location = { reload: jest.fn() };
    clearFunction();
    expect(JSON.parse(localStorage.getItem('array'))).toEqual([]);
  });
});