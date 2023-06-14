function Slider() {
  nextBTN = document.querySelector(".carousel-control-next");
  prevBTN = document.querySelector(".carousel-control-prev");
  slides = document.querySelectorAll(".carousel-item");
  currentIndex = 0;
  slidesDurations = [7000, 7000, 5000, 14400];
  videos_links = {
    0: {
      desktop: "assets/files/camera.mp4",
      mobile: "assets/files/mobile.mp4",
    }, 1: {
      desktop: "assets/files/Malabar Gold Morning.mp4",
      mobile: "assets/files/Malabar Gold Morning.mp4",
    },
    2: {
      desktop: "assets/files/A.mp4",
      mobile: "assets/files/A.mp4",
    },

  };
  NextIterval = setInterval(setSlideNext, slidesDurations[currentIndex]);
  function checkIndexActive() {
    for (let i = 0; i < slides.length; i++) {
      node = slides.item(i);
      if (node.classList.contains("active")) {
        currentIndex = i;
        break;
      }
    }
  }

  nextBTN.addEventListener("click", () => {
    checkIndexActive();
    clearInterval(NextIterval);
    activeSlide = null;
    if (currentIndex == slides.length - 1) {
      NextIterval = setInterval(setSlideNext, slidesDurations[0]);
      activeSlide = slides[0];
    } else {
      NextIterval = setInterval(setSlideNext, slidesDurations[currentIndex + 1]);
      activeSlide = slides[currentIndex + 1];
    }
    if (activeSlide.querySelector("video")) {
      activeSlide.querySelector("video").currentTime = 0;
      activeSlide.querySelector("video").play();
    }
  });

  prevBTN.addEventListener("click", () => {
    checkIndexActive();
    clearInterval(NextIterval);
    if (currentIndex == 0) {
      NextIterval = setInterval(setSlideNext, slidesDurations[slides.length - 1]);
      activeSlide = slides[slides.length - 1];
    } else {
      NextIterval = setInterval(setSlideNext, slidesDurations[currentIndex - 1]);
      activeSlide = slides[currentIndex - 1];
    }
    if (activeSlide.querySelector("video")) {
      activeSlide.querySelector("video").currentTime = 0;
      activeSlide.querySelector("video").play();
    }
  });

  function setSlideNext() {
    nextBTN.click();
  }
  function setSlidePrev() {
    prevBTN.click();
  }
  function getVideosIndexes() {
    VideosIndexes = [];
    isVideoExists = 0;
    slides.forEach((element) => {
      if (element.querySelector("video")) {
        VideosIndexes.push(isVideoExists);
      }
      isVideoExists++;
    });
    return VideosIndexes;
  }

  function checkVideoRespones() {
    VideosIndexes = getVideosIndexes();
    let i = 0;
    VideosIndexes.forEach((element) => {
      if ($(document).width() < 783) {
        slides[element].querySelector("video").src = videos_links[i].mobile;
      } else {
        slides[element].querySelector("video").src = videos_links[i].desktop;
      }
      i++;
    });
  }

  $(window).resize(function () { // no `on` here
    checkVideoRespones();
  });
  checkVideoRespones();
}