(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-bt-open]'),
    closeModalBtn: document.querySelector('[data-bt-close]'),
    modal: document.querySelector('[data-bt]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.openModalBtn.classList.toggle('is-hidden');
  }
})();
