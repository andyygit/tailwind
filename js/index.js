const toggleButton = document.getElementById('toggle-btn');
const sideBar = document.getElementById('sidebar');

const toggleSideBar = () => {
  sideBar.classList.toggle('close');
  toggleButton.classList.toggle('rotate');

  Array.from(sideBar.getElementsByClassName('show')).forEach((ul) => {
    ul.classList.remove('show');
    ul.previousElementSibling.classList.remove('rotate');
  });
};

/**
 *
 * @param {HTMLElement} btn
 */
const toggleSubMenu = (btn) => {
  btn.nextElementSibling.classList.toggle('show');
  btn.classList.toggle('rotate');

  if (sideBar.classList.contains('close')) {
    sideBar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');
  }
};
