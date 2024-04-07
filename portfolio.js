//Side Navigation JS Code
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let navBar = document.querySelector(".navbar");
let body = document.querySelector("body");

menuBtn.onclick = function () {
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  navBar.classList.add("active");
};
cancelBtn.onclick = function () {
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  navBar.classList.remove("active");
  body.style.overflow = "auto";
};

let navlinks = document.querySelectorAll(".menu li");
for (var i = 0; i < navlinks.length; i++) {
  navlinks[i].addEventListener("click", () => {
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    navBar.classList.remove("active");
    body.style.overflow = "auto";
  });
}

//sticky Navigation Menu JS Code
let val;
let nav = document.querySelector("nav");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};
