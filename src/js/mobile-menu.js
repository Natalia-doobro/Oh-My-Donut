(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
    document.body.classList.toggle('menu-open');
    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.toggle('is-open');
  });

  const menuBtnClose1 = document.querySelector('[menu-close-link1]');
  menuBtnClose1.addEventListener('click', () => {
    menuBtnRef.classList.remove('is-open');
    mobileMenuRef.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  });

  const menuBtnClose2 = document.querySelector('[menu-close-link2]');
  menuBtnClose2.addEventListener('click', () => {
    menuBtnRef.classList.remove('is-open');
    mobileMenuRef.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  });

  const menuBtnClose3 = document.querySelector('[menu-close-link3]');
  menuBtnClose3.addEventListener('click', () => {
    menuBtnRef.classList.remove('is-open');
    mobileMenuRef.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  });

  const menuBtnClose4 = document.querySelector('[menu-close-link4]');
  menuBtnClose4.addEventListener('click', () => {
    menuBtnClose4.classList.remove('is-open');
    mobileMenuRef.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  });
})();
