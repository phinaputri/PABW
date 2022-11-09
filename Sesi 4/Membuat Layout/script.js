const slider = document.querySelector(".slider");;
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;

//image slider next button
nextBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber++;

  if(slideNumber > (numberOfSlides - 1)){
    slideNumber = 0;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

//image slider previous button
prevBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber--;

  if(slideNumber < 0){
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

//image slider autoplay
var playSlider;

var repeater = () => {
  playSlider = setInterval(function(){
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
      slideIcon.classList.remove("active");
    });

    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
      slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
  }, 4000);
}
repeater();

//stop the image slider autoplay on mouseover
slider.addEventListener("mouseover", () => {
  clearInterval(playSlider);
});

//start the image slider autoplay again on mouseout
slider.addEventListener("mouseout", () => {
  repeater();
});

const sliderTab = document.querySelector(".slider-tab");
const nextBtnTab = document.querySelector(".next-btn-tab");
const prevBtnTab = document.querySelector(".prev-btn-tab");
const slidesTab = document.querySelectorAll(".slide-tab");
const slideIconsTab = document.querySelectorAll(".tab-name");
const numberOfSlidesTab = slides.length;
var slideNumberTab = 0;

//image slider next button
  nextBtnTab.addEventListener("click", () => {
    slidesTab.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIconsTab.forEach((tabs) => {
      tabs.classList.remove("active");
    });
  
    slideNumberTab++;
  
    if(slideNumberTab > (numberOfSlides - 1)){
      slideNumberTab = 0;
    }
  
    slidesTab[slideNumberTab].classList.add("active");
    slideIconsTab[slideNumberTab].classList.add("active");
  });
  
  //image slider previous button
  prevBtnTab.addEventListener("click", () => {
    slidesTab.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIconsTab.forEach((tabs) => {
      tabs.classList.remove("active");
    });
  
    slideNumberTab--;
  
    if(slideNumberTab < 0){
        slideNumberTab = numberOfSlides - 1;
    }
  
    slidesTab[slideNumberTab].classList.add("active");
    slideIconsTab[slideNumberTab].classList.add("active");
  });
