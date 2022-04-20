/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */

document.querySelector("#view-mobile-menu").addEventListener("click",mobileMenu);
document.querySelector("#close-mobile-menu").addEventListener("click",mobileMenu);
var m_menu_wrapper = document.querySelector("#mobile-menu-wrapper");

function mobileMenu() {
  if (m_menu_wrapper.classList.contains('mobileMenuHide')) {
    m_menu_wrapper.classList.remove('mobileMenuHide');
  } else {
    m_menu_wrapper.classList.add('mobileMenuHide');
  }
}