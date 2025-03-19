document.getElementsByClassName("button1")[0].addEventListener("click", () => {
  document.getElementsByClassName("content")[0].style.display = "none";
  document.getElementsByClassName("container")[0].style.background = "white";
});
document.getElementsByClassName("button2")[0].addEventListener("click", () => {
  document.getElementsByClassName("content")[0].style.display = "flex";
  document.getElementsByClassName("container")[0].style.background = "gray";
});
