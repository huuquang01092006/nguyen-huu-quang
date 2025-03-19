let hideText = document.getElementsByClassName("text1");
hideText[0].addEventListener("click", ()=>{
    document.getElementsByTagName("p")[0].style.display="none"
});
let showText = document.getElementsByClassName("text2");
showText[0].addEventListener("click", () => {
  document.getElementsByTagName("p")[0].style.display = "block";
});