let slideIndex = 0;
let slideTimer;

const slides = document.querySelectorAll(".mySlides");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach(slide => {
    slide.style.display = "none";
    slide.classList.remove("fade");
  });

  dots.forEach(dot => {
    dot.classList.remove("active");
  });

  slides[index].style.display = "block";
  slides[index].classList.add("fade");
  dots[index].classList.add("active");
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function startSlideShow() {
  showSlide(slideIndex);
  slideTimer = setInterval(nextSlide, 6000);
}

function currentSlide(index) {
  clearInterval(slideTimer);
  slideIndex = index;
  showSlide(slideIndex);
  slideTimer = setInterval(nextSlide, 6000);
}

startSlideShow();