
let shopLi = document.querySelector(".shopLi");
let dropdown = document.querySelector(".dropdown-content")
let search = document.querySelector(".search");
let cancel = document.querySelector(".cancel");
let hamburger = document.querySelector(".hamburger");
shopLi.addEventListener("mouseover", () => {
  dropdown.style.display = "block";
})
dropdown.addEventListener("mouseover", () => {
  dropdown.style.display = "block";
})
shopLi.addEventListener("mouseout", () => {
  dropdown.style.display = "none";
})
dropdown.addEventListener("mouseout", () => {
  dropdown.style.display = "none";
})
search.addEventListener("click", (e) => {
  e.stopPropagation();
  document.querySelector(".navlinksOuter").style.display = "none";
  document.querySelector(".headerLogo").style.display = "none";
  document.querySelector(".headerIconsWrapper").style.display = "none";
  document.querySelector(".searchInputInner").style.display = "block";
  document.body.style.overflow = "hidden";

})
cancel.addEventListener("click", (e) => {
  e.stopPropagation();
  document.querySelector(".navlinksOuter").style.display = "block";
  document.querySelector(".headerLogo").style.display = "block";
  document.querySelector(".headerIconsWrapper").style.display = "block";
  document.querySelector(".searchInputInner").style.display = "none";
  document.body.style.overflow = "visible";
})
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerSpan = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".navlinksOuter");
  let menuOpen = false;
  hamburgerSpan.addEventListener("click", () => {
    menuOpen = !menuOpen;
    if (menuOpen) {
      navMenu.style.display = "block";
      hamburgerSpan.textContent = "X";
      hamburgerSpan.classList.remove("hamburger");
      hamburgerSpan.classList.add("cancelTwo");
    } else {
      navMenu.style.display = "none";
      hamburgerSpan.textContent = "☰";
      hamburgerSpan.classList.remove("cancelTwo");
      hamburgerSpan.classList.add("hamburger");
    }
  });
});
let cart = document.querySelector(".cart");
cart.addEventListener("click", ()=>{
  document.querySelector(".drawerInner").style.visibility = "visible";
  document.querySelector(".cartDrawerOverlay").style.background = "#a4a9a9";
  document.querySelector(".cartDrawerOverlay").style.opacity = "0.7";

})
let close = document.querySelector(".close");
close.addEventListener("click", ()=>{
  document.querySelector(".drawerInner").style.visibility = "hidden";
    document.querySelector(".cartDrawerOverlay").style.background = "none";
  document.querySelector(".cartDrawerOverlay").style.opacity = "none";
})
