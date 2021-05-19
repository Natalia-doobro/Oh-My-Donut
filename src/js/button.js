(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-button-open]'),
    closeModalBtn: document.querySelector('[data-button-close]'),
    modal: document.querySelector('[data-button]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.openModalBtn.classList.toggle('is-hidden');
  }
})();
