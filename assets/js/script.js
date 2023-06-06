window.onload = () => {
  document.querySelector(".logo").classList.add("zoom");
  setTimeout(() => {
    document.querySelector(".body").classList.remove("hide");
    document.querySelector(".load").classList.add("hide");
    Main();
    Slider();
  }, 800);
};
function Main() {

  var menu = document.querySelector(".menu");
  var menuOpen = document.querySelector(".menu-open");
  var menuClose = document.querySelector(".menu-close");
  var isOpen = false;
  if (menuOpen) {
    menuOpen.addEventListener("click", () => {
      if (!isOpen) {
        menu.classList.add("show-menu");
        isOpen = !isOpen;
      }
    });
  }
  if (menuClose) {
    menuClose.addEventListener("click", () => {
      if (isOpen) {
        menu.classList.add("close-menu-animation");
        setTimeout(() => {
          menu.classList.remove("show-menu");
          menu.classList.remove("close-menu-animation");
        }, 500);
        isOpen = !isOpen;
      }
    });
  }

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
 

  cards = document.querySelectorAll(".card");
  var cards_bool = new Array(cards.length);
  for (let i = 0; i < cards_bool.length; i++) {
    cards_bool[i] = false;
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
  if (document.querySelector(".show-list")) {
    document.querySelector(".show-list").addEventListener("click", () => {
      document.querySelector(".some-works").classList.add("flexing");
      document.querySelector(".gallery").classList.remove("overflow-list");
      document.querySelector(".hide-list").classList.add("show-button");
      document.querySelector(".show-list").classList.remove("show-button");
    });
  }
  if (document.querySelector(".hide-list")) {
    document.querySelector(".hide-list").addEventListener("click", () => {
      document.querySelector(".some-works").classList.remove("flexing");
      document.querySelector(".gallery").classList.add("overflow-list");
      document.querySelector(".hide-list").classList.remove("show-button");
      document.querySelector(".show-list").classList.add("show-button");
    });
  }
  var comments = {
    0: {
      name: "HILARY LEIGH",
      comment:
        "Crucially Mohammad takes the time during the design brief stage to listen carefully to our requirements and on each occasion has returned with a design that has closely met our vision for the finished product. I personally like The Agency’s approach and style of design very much and have no problem in recommending them.",
      imgPath: "assets/icons/person1.webp",
    },
    1: {
      name: "HALL READ",
      comment:
        "Mohammad and his team at WHite Media are great listeners,they understood exactly what I was trying to achieve and I can’t praise their attention to detail highly enough. Nothing was too much trouble and I was delighted with the wonderful outcome of my advertising campaign",
      imgPath: "assets/icons/person1.webp",
    },
    2: {
      name: "QUINTIN ANGUS",
      comment:
        "Crucially Mohammad takes the time during the design brief stage to listen carefully to our requirements and on each occasion has returned with a design that has closely met our vision for the finished product. I personally like The Agency’s approach and style of design very much and have no problem in recommending them.",
      imgPath: "assets/icons/person1.webp",
    },
  };
  var delayComments = 0;
  commentInterval = setInterval(commenter, delayComments, (Counter_comment = 0));
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
    if (document.querySelector(".pop")) {
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
    }
    if (document.querySelector(".pop")) {
      document.querySelector(".pop").classList.remove("popup");
    }
  }
  if (document.querySelector(".gallery")) {
    lightGallery(document.querySelector(".gallery"));
  }
  document.addEventListener("DOMContentLoaded", function() {
    console.log('s1s');
  })
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    console.log('s1');
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
}
function writer() {
  document.querySelector(".content-services").innerHTML += text[0][i];
  if (i == text[0].length) {
    clearInterval(writerInterval);
  }
  i++;
}