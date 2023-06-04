window.onload = () => {
  document.querySelector(".logo").classList.add("zoom");
  setTimeout(() => {
    document.querySelector(".body").classList.remove("hide");
    document.querySelector(".load").classList.add("hide");
  }, 800);
};
