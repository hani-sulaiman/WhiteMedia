let prevScrollpos = window.pageYOffset;
window.onscroll=function () {
  let currentScrollPos = window.pageYOffset;
  var navbar = document.querySelector(".nav");
  if (navbar) {
    if (window.pageYOffset < 100) {
      navbar.classList.remove("scrolled-up");
      navbar.classList.add("nav-transparent");
    }
    if (prevScrollpos >= currentScrollPos) {
      // When the user scrolls up, hide the navigation bar
      navbar.classList.remove("scrolled-down");
      navbar.classList.add("scrolled-up");
    } else if (prevScrollpos < currentScrollPos) {
      navbar.classList.remove("nav-transparent");
      // When the user scrolls down, show the navigation bar
      navbar.classList.add("scrolled-down");
      navbar.classList.remove("scrolled-up");
    }
  }
  prevScrollpos = currentScrollPos;
  if (document.querySelector(".nav")) {
    document.querySelector(".nav").classList.remove("scrolled");
  }
};