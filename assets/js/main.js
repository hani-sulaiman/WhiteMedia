document.addEventListener(
  "DOMContentLoaded",
  function () {
    document.querySelector(".nav").classList.remove("scrolled");
    video1 = document.querySelector(".slide-video-1");
    if (window.innerWidth <= 800) {
      video1.src = "assets/files/mobile.mp4";
    } else {
      video1.src = "assets/files/camera.mp4";
    }
    if (
      navigator.userAgent.indexOf("Safari") != -1 &&
      navigator.userAgent.indexOf("Chrome") == -1
    ) {
      videos = document.querySelectorAll("video");
      videos.forEach((element) => {
        element.play();
      });
    }
    document.body.classList.remove("hide");
  },
  false
);
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  var navbar = document.querySelector(".nav");
  if (prevScrollpos >= currentScrollPos) {
    // When the user scrolls up, hide the navigation bar
    navbar.classList.remove("scrolled-down");
    navbar.classList.add("scrolled-up");
  } else {
    // When the user scrolls down, show the navigation bar
    navbar.classList.add("scrolled-down");
    navbar.classList.remove("scrolled-up");
  }
  prevScrollpos = currentScrollPos;
};

window.addEventListener("resize", function () {
  if (window.innerWidth <= 800) {
    document.querySelector(".slide-video-1").src = "assets/files/mobile.mp4";
  } else {
    document.querySelector(".slide-video-1").src = "assets/files/camera.mp4";
  }
});
var menu = document.querySelector(".menu");
var menuOpen = document.querySelector(".menu-open");
var menuClose = document.querySelector(".menu-close");
var isOpen = false;
menuOpen.addEventListener("click", () => {
  if (!isOpen) {
    menu.classList.add("show-menu");
    isOpen = !isOpen;
  }
});
menuClose.addEventListener("click", () => {
  if (isOpen) {
    menu.classList.remove("show-menu");
    isOpen = !isOpen;
  }
});
text = [
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet fuga commodi asperiores saepe labore totam perspiciatis ut sunt at vero, voluptatem quis, tenetur quibusdam excepturi dolorum, amet dicta. Voluptates, animi.",
];
var writerInterval;
let FlagChecked = true;
window.addEventListener("scroll", () => {
  let position = document
    .querySelector(".content-services")
    .getBoundingClientRect();
  if (position.top < 550 && FlagChecked) {
    writerInterval = setInterval(writer, 20, (i = 0));
    FlagChecked = false;
  }
});
function writer() {
  document.querySelector(".content-services").innerHTML += text[0][i];
  if (i == text[0].length) {
    clearInterval(writerInterval);
  }
  i++;
}

cards = document.querySelectorAll(".card");
var cards_bool = new Array(cards.length);
for (let i = 0; i < cards_bool.length; i++) {
  cards_bool[i] = false;
}

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  console.log(rect);
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

cards.forEach((card, i = 0) => {
  card.addEventListener("click", () => {
    if (cards_bool[i]) {
      card.classList.remove("selected");
      cards_bool[i] = false;
    } else {
      card.classList.add("selected");
      cards_bool[i] = true;
    }
  });
  i++;
});
document.querySelector(".show-list").addEventListener("click", () => {
  document.querySelector(".some-works").classList.add("flexing");
  document.querySelector(".gallery").classList.remove("overflow-list");
  document.querySelector(".hide-list").classList.add("show-button");
  document.querySelector(".show-list").classList.remove("show-button");
});

document.querySelector(".hide-list").addEventListener("click", () => {
  document.querySelector(".some-works").classList.remove("flexing");
  document.querySelector(".gallery").classList.add("overflow-list");
  document.querySelector(".hide-list").classList.remove("show-button");
  document.querySelector(".show-list").classList.add("show-button");
});

var services = document.querySelectorAll(".service");
var delay=0;
intervalService = setInterval(slideshowService, delay, (x = 0));
function slideshowService() {
  delay=9000;
  clickers = document.querySelectorAll(".service-button");
  if (x == services.length) {
    clearInterval(intervalService);
    intervalService = setInterval(slideshowService, delay, (x = 0));
  }
  clickers[x].click();
  x++;
}
var clickers = document.querySelectorAll(".service-button");
clickers.forEach((clicker, k) => {
  clickers[k].addEventListener("click", () => {
    for (y = 0; y < clickers.length; y++) {
      clickers[y].classList.remove("clicked");
      services[y].classList.remove("show-service");
    }
    clicker.classList.add("clicked");
    services[k].classList.add("show-service");
  });
});
