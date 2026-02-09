import storage from './storage.js';
import mainArr from './const.js';
import addHtml from './addHtml.js';

const refreshBtn = () => {
  const modal = document.getElementById('confirmation-modal');
  const confirmBtn = document.getElementById('confirm-clear');
  const cancelBtn = document.getElementById('cancel-clear');

  // Show the modal
  modal.classList.remove('hidden');

  // Function to handle the actual clearing
  const performClear = () => {
    mainArr.splice(0, mainArr.length);
    storage();
    addHtml();
    closeModal();
  };

  // Function to close the modal and cleanup listeners
  const closeModal = () => {
    modal.classList.add('hidden');
    cleanup();
  };

  const backdropClickHandler = (e) => {
    if (e.target === modal) {
      closeModal();
    }
  };

  const cleanup = () => {
    confirmBtn.removeEventListener('click', performClear);
    cancelBtn.removeEventListener('click', closeModal);
    modal.removeEventListener('click', backdropClickHandler);
  }

  // Attach listeners
  confirmBtn.addEventListener('click', performClear);
  cancelBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', backdropClickHandler);
};

export default refreshBtn;