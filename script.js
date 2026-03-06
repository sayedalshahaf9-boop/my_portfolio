// Change navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "rgba(15, 23, 42, 1)";
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.3)";
  } else {
    navbar.style.backgroundColor = "rgba(15, 23, 42, 0.9)";
    navbar.style.boxShadow = "none";
  }
});
