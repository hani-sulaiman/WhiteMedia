
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
