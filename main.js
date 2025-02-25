//tablica z obiektami
const slideList = [
  {
    img: "images/img1.jpg",
    text: "Pierwszy tekst",
  },
  {
    img: "images/img2.jpg",
    text: "Drugi tekst",
  },
  {
    img: "images/img3.jpg",
    text: "Trzeci tekst",
  },
];

//pobieramy obrazy
const image = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");
//pobieramy spamy gdzie znajdują się kropki
const dots = [...document.querySelectorAll(".dots span")];
//za pomoca rest "..." i [] zamieniamy na tablicę

//mozna sobie ustawiać
const time = 1000;
let active = 0;

//implementacje
const changeDot = () => {
  const activeDot = dots.findIndex((dot) => dot.classList.contains("active"));
  if (activeDot !== -1) {
    dots[activeDot].classList.remove("active");
  }
  dots[active].classList.add("active");
};

const changeSlide = () => {
  active++;
  if (active === slideList.length) {
    active = 0;
  }
  image.src = slideList[active].img;
  h1.textContent = slideList[active].text;
  changeDot();
};
setInterval(changeSlide, time);
