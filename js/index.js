const btn = document.querySelector(".banner-button");
const img = document.querySelector(".banner-img");

const menu = document.getElementById("group-2");
const burguer = document.getElementById("burguer");
const close = document.getElementById("close");

const header = document.getElementById("header");
const banner = document.getElementById("banner");

const bannerMenu = document.getElementById("bannerMenu");
const aboutMenu = document.getElementById("aboutMenu");
const servicesMenu = document.getElementById("servicesMenu");
const packageMenu = document.getElementById("packageMenu");
const contactMenu = document.getElementById("contactMenu");

btn.addEventListener("mouseenter", () => (img.style.filter = "blur(4px)"));
btn.addEventListener("mouseleave", () => (img.style.filter = "blur(0px)"));

const services = document.querySelectorAll(".service");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, i * 150);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

services.forEach((s) => observer.observe(s));

burguer.addEventListener("click", () => {
  console.log("Burguer");
  menu.classList.add("active");
});

function Close() {
  console.log("Cancel");
  menu.classList.remove("active");
}

close.addEventListener("click", Close);

bannerMenu.addEventListener("click", Close);
aboutMenu.addEventListener("click", Close);
servicesMenu.addEventListener("click", Close);
packageMenu.addEventListener("click", Close);
contactMenu.addEventListener("click", Close);

function createObserver(element, alcance = 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    },
    {
      root: null,
      threshold: alcance,
    },
  );
  return observer;
}

const observerHeader = createObserver(header, 0.5);
observerHeader.observe(banner);
