const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".mobileNav");
nav.classList.add("mobileNav");
let ul = document.createElement("ul");
const hider = document.querySelector(".hider");
const navOptions = [
  "Strona główna",
  "galeria",
  "sklad",
  "uslugi",
  "rezerwacja",
];
const body = document.querySelector("body");
const propertyNav = document.querySelector("nav");
if (window.innerWidth <= 768) {
  body.appendChild(hamburger);
}
nav.style.visibility = "hidden";
hamburger.addEventListener("touchend", showMenu);
function showMenu() {
  nav.style.visibility = "visible";
}
function hideMenu() {
  if (nav.style.visibility === "visible") {
    nav.style.visibility = "hidden";
    // console.log("sssss")
  }
}
hider.addEventListener("touchend", hideMenu);
document.addEventListener("touchmove",()=>{
const logo = document.querySelector(".logo");
logo.style.visibility="hidden";
})
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});