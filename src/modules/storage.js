const mainArr = JSON.parse(localStorage.getItem('array')) || [];

const storage = () => {
  localStorage.setItem('array', JSON.stringify(mainArr));
};
export default storage;
export { mainArr };