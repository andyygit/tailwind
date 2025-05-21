const toggleButton = document.getElementById('toggle-btn');
const sideBar = document.getElementById('sidebar');

const toggleSideBar = () => {
  sideBar.classList.toggle('close');
  toggleButton.classList.toggle('rotate');
  closeAllSubMenus();
};

/**
 *
 * @param {HTMLElement} btn
 */
const toggleSubMenu = (btn) => {
  closeAllSubMenus();

  btn.nextElementSibling.classList.toggle('show');
  btn.classList.toggle('rotate');

  if (sideBar.classList.contains('close')) {
    sideBar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');
  }
};

const closeAllSubMenus = () => {
  Array.from(sideBar.getElementsByClassName('show')).forEach((ul) => {
    ul.classList.remove('show');
    ul.previousElementSibling.classList.remove('rotate');
  });
};
