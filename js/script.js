// Utility function for toggling display
const toggleDisplay = (element, display) => element.style.display = display;

// Hover effects for shopLi and dropdown
document.querySelector(".shopLi").addEventListener("mouseover", () => toggleDisplay(document.querySelector(".dropdown-content"), "block"));
document.querySelector(".dropdown-content").addEventListener("mouseover", () => toggleDisplay(document.querySelector(".dropdown-content"), "block"));
document.querySelector(".shopLi").addEventListener("mouseout", () => toggleDisplay(document.querySelector(".dropdown-content"), "none"));
document.querySelector(".dropdown-content").addEventListener("mouseout", () => toggleDisplay(document.querySelector(".dropdown-content"), "none"));

// Search functionality
document.querySelector(".search").addEventListener("click", (e) => {
  e.stopPropagation();
  toggleDisplay(document.querySelector(".navlinksOuter"), "none");
  toggleDisplay(document.querySelector(".headerLogo"), "none");
  toggleDisplay(document.querySelector(".headerIconsWrapper"), "none");
  toggleDisplay(document.querySelector(".searchInputInner"), "block");
  document.body.style.overflow = "hidden";
});

// Cancel search functionality
document.querySelector(".cancel").addEventListener("click", (e) => {
  e.stopPropagation();
  toggleDisplay(document.querySelector(".navlinksOuter"), "block");
  toggleDisplay(document.querySelector(".headerLogo"), "block");
  toggleDisplay(document.querySelector(".headerIconsWrapper"), "block");
  toggleDisplay(document.querySelector(".searchInputInner"), "none");
  document.body.style.overflow = "visible";
});

// Hamburger menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerSpan = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".navlinksOuter");
  let menuOpen = false;

  hamburgerSpan.addEventListener("click", () => {
    menuOpen = !menuOpen;
    toggleDisplay(navMenu, menuOpen ? "block" : "none");
    hamburgerSpan.textContent = menuOpen ? "X" : "☰";
    hamburgerSpan.classList.toggle("hamburger", !menuOpen);
    hamburgerSpan.classList.toggle("cancelTwo", menuOpen);
  });
});

// Cart drawer toggle
document.querySelector(".cart").addEventListener("click", () => {
  document.querySelector(".drawerInner").style.visibility = "visible";
  document.querySelector(".cartDrawerOverlay").style.background = "#a4a9a9";
  document.querySelector(".cartDrawerOverlay").style.opacity = "0.7";
});

// Close cart drawer
document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".drawerInner").style.visibility = "hidden";
  document.querySelector(".cartDrawerOverlay").style.background = "none";
  document.querySelector(".cartDrawerOverlay").style.opacity = "none";
});
