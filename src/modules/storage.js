const mainArr = JSON.parse(localStorage.getItem('array')) || [];

function storage() {
  localStorage.setItem('array', JSON.stringify(mainArr));
}
export default storage;
export { mainArr };