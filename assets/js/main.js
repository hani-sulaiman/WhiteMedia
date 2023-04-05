var SlidesTime = [];
var videos=document.querySelectorAll('video');
var slides=document.querySelectorAll('.slide');

function getVideosDurations(){
  document.querySelectorAll(".slide").forEach((element) => {
    if (element.querySelector("video")) {
      SlidesTime.push(element.querySelector("video").duration * 1000);
    } else {
      SlidesTime.push(7000);
    }
  });
}
function Main() {
  getVideosDurations();
  video1 = document.querySelector("#video-slide-1");
  video2 = document.querySelector("#video-slide-2");
  if (window.innerWidth <= 800) {
    video2.classList.remove('hide');
    video1.classList.add('hide');
  } else {
    video2.classList.add('hide');
    video1.classList.remove('hide');
  }

  console.log(SlidesTime);
  document.querySelector(".nav").classList.remove("scrolled");

  if (
    navigator.userAgent.indexOf("Safari") != -1 &&
    navigator.userAgent.indexOf("Chrome") == -1
  ) {
    videos = document.querySelectorAll("video");
    videos.forEach((element) => {
      element.play();
    });
  }
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    var navbar = document.querySelector(".nav");
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
    prevScrollpos = currentScrollPos;
  };

  window.addEventListener("resize", function () {
    if (window.innerWidth <= 800) {
      document.querySelector(".slide-video-1").src = "assets/files/mobile.mp4";
    } else {
      document.querySelector(".slide-video-1").src = "assets/files/camera.mp4";
    }
    getVideosDurations();
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
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
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


  var comments = {
    0: {
      name: "person1",
      comment:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus reiciendis voluptate distinctio, unde animi officia, possimus accusamus corrupti consectetur repellendus sequi atque molestias! Tenetur sapiente aut veritatis obcaecati. Repellendus, corrupti!",
      imgPath: "assets/icons/person1.webp",
    },
    1: {
      name: "person2",
      comment:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus reiciendis voluptate distinctio, unde animi officia, possimus accusamus corrupti consectetur repellendus sequi atque molestias! Tenetur sapiente aut veritatis obcaecati. Repellendus, corrupti!",
      imgPath: "assets/icons/person1.webp",
    },
    2: {
      name: "person3",
      comment:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus reiciendis voluptate distinctio, unde animi officia, possimus accusamus corrupti consectetur repellendus sequi atque molestias! Tenetur sapiente aut veritatis obcaecati. Repellendus, corrupti!",
      imgPath: "assets/icons/person1.webp",
    },
  };
  var delayComments = 0;
  commentInterval = setInterval(
    commenter,
    delayComments,
    (Counter_comment = 0)
  );
  function commenter() {
    if (delayComments == 0) {
      delayComments = 12000;
      clearInterval(commentInterval);
      commentInterval = setInterval(
        commenter,
        delayComments,
        (Counter_comment = 0)
      );
    }
    if (Counter_comment == Object.keys(comments).length) {
      clearInterval(commentInterval);
      commentInterval = setInterval(
        commenter,
        delayComments,
        (Counter_comment = 0)
      );
    }
    setTimeout(() => {
      document.querySelector(".pop").classList.add("popup");
      document.getElementById("img-person").src =
        comments[Counter_comment].imgPath;
      document.querySelector(".commenter p").innerHTML =
        comments[Counter_comment].name;
      document.querySelector(".box-comment").innerHTML =
        comments[Counter_comment].comment;
      Counter_comment++;
    }, 1000);
    document.querySelector(".pop").classList.remove("popup");
  }
}
