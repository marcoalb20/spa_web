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

// Botones para acción de whatsapp
const bannerButton = document.getElementById("banner-button")
const bLink = 'Hol Hellen, quisiera reservar una cita en el salón'

const laceadoButton = document.getElementById("ss-laceado")
const lLink = 'Hola Hellen, quisiera solicitar el servicio de Laceado Japonés Definitivo'

const alisadoButton = document.getElementById("ss-alisado")
const aLink = 'Hola Hellen, quisiera solicitar el servicio de Alisado Reductor'

const botoxButton = document.getElementById("ss-botox")
const bxLink = 'Hola Hellen, quisiera solicitar el servicio de Botox Capilar'

const mechasButton = document.getElementById("ss-mechas")
const mLink = 'Hola Hellen, quisiera solicitar el servicio de Diseño de Mechas'

const siluetaButton = document.getElementById("pc-silueta")
const sLink = 'Hola Hellen, me interesan los detalles del paquete de Moldeamiento de Silueta'

const carboButton = document.getElementById("pc-carbo")
const cLink = 'Hola Hellen, me interesan los detalles del paquete de Carboxiterapia'

const contactButton = document.getElementById("contact-button")
const ctLink = 'Hola Hellen, quisiera reservar una cita en el salón'

const WSP_NUMBER = "51960908272";

function openWsp(message) {
  const url = `https://wa.me/${WSP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

bannerButton.onclick = () => openWsp(bLink)
laceadoButton.onclick = () => openWsp(lLink)
alisadoButton.onclick = () => openWsp(aLink)
botoxButton.onclick = () => openWsp(bxLink)
mechasButton.onclick = () => openWsp(mLink)
siluetaButton.onclick = () => openWsp(sLink)
carboButton.onclick = () => openWsp(cLink)
contactButton.onclick = () => openWsp(ctLink)

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
