// indicator
const indicators = document.querySelectorAll(".testimonial-indicator-btn");
// cards
const sliderCards = document.querySelectorAll(".testimonial-slider-card");
// arrows
const arrows = document.querySelectorAll(".testimonial-slide-btn");

arrows.forEach((el,i)=> {
    el.addEventListener('click',(side)=> {
      let sym = side.target.classList.contains('right') ? true : false;
        for (let i = 0; i < sliderCards.length; i++) {
          if(sliderCards[i].classList.contains('active')){
            let sum = sym ? i+1 : i-1   
              if(sum == -1) sum = 2
              if(sum == 3) sum = 0
              removeOtherActiveClasses(sum)
              madeActive(indicators[sum],sum)
            break;
          }
        }
    })
})

indicators.forEach((el, index) => {
  el.addEventListener("click", () => {
    if (el.classList.contains("active")) {
      return;
    }
    removeOtherActiveClasses(index);
    madeActive(el,index);
  });
});

const madeActive = (el,i = 0) => {
  indicators[i].classList.add("active");
  sliderCards[i].classList.add("active");
  for (let index = 0; index < sliderCards.length; index++) {
    let val = index > i;
    if (i !== index) {
      if (val) {
        sliderCards[index].style.left = "690px";
      } else {
        sliderCards[index].style.left = "-690px";
      }
    } else {
      sliderCards[i].style.left = 0;
    }
  }
};
const removeOtherActiveClasses = (index) => {
  for (let i = 0; i < indicators.length; i++) {
    if (index !== i) {
      indicators[i].classList.remove("active");
      sliderCards[i].classList.remove("active");
    }
  }
};

madeActive(indicators[0]);
