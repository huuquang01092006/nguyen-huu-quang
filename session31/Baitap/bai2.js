document
  .getElementsByClassName("container")[0]
  .addEventListener("click", () => {
    document.getElementsByClassName("container")[0].classList.toggle("content");
  });
