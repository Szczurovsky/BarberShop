const hamburger = document.createElement("div");
hamburger.classList.add("hamburger")
const nav = document.createElement("nav");
nav.classList.add("mobileNav");
let ul = document.createElement("ul");
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
  body.appendChild(nav);
  nav.appendChild(ul);
  for (let i = 0; i < 5; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");

    const navOption = navOptions[i]
    li.classList.add("class"+i)
    a.href = "www.wp.pl"
    ul.appendChild(li)
    li.appendChild(a)
    a.textContent = navOption;
  }
}
nav.style.visibility="hidden";

hamburger.addEventListener("click",showMenu)
function showMenu(){
    nav.style.visibility="visible";
}
