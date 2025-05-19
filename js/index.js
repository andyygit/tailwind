const toggleButton = document.getElementById('toggle-btn');
const sideBar = document.getElementById('sidebar');

const toggleSideBar = () => {
  sideBar.classList.toggle('close');
  toggleButton.classList.toggle('rotate');
};

/**
 *
 * @param {HTMLElement} btn
 */
const toggleSubMenu = (btn) => {
  btn.nextElementSibling.classList.toggle('show');
  btn.classList.toggle('rotate');
};
