const slides = document.querySelectorAll('.slider__item');
const slidesAsArray = Array.from(slides);
const prevButton = document.querySelector('.slider__button--prev');
const nextButton = document.querySelector('.slider__button--next');
const pagginationButtons = document.querySelectorAll('.slider__pagination-button');
const pagginationButtonsAsArray = Array.from(pagginationButtons);
const currentSlideClass = 'slider__item--current';
let currentSlideIndex;

const isFirstSlide = () => currentSlideIndex === 0;
const isLastSlide = () => currentSlideIndex === slides.length - 1;

const updateCurrentSlideIndex = () => {
  currentSlideIndex = slidesAsArray.findIndex((slide) => Array.from(slide.classList).includes(currentSlideClass));
};

const toggleButtonsDisabledStatus = () => {
  if (isFirstSlide() & isLastSlide()) {
    prevButton.setAttribute('disabled', 'disabled');
    nextButton.setAttribute('disabled', 'disabled');
    return;
  }
  if (isFirstSlide()) {
    prevButton.setAttribute('disabled', 'disabled');
    nextButton.removeAttribute('disabled');
    return;
  }
  if (isLastSlide()) {
    nextButton.setAttribute('disabled', 'disabled');
    prevButton.removeAttribute('disabled');
    return;
  }
  nextButton.removeAttribute('disabled');
  prevButton.removeAttribute('disabled');
};

const changeCurrentPagginationButton = () => {
  const currentPaginationButtonClass = 'slider__pagination-button--current';
  pagginationButtonsAsArray.forEach((button) => button.classList.remove(currentPaginationButtonClass));
  pagginationButtonsAsArray[currentSlideIndex].classList.add(currentPaginationButtonClass);
};

const changeCurrentSlide = (isNext, paginationButtonIndex) => {
  slidesAsArray[currentSlideIndex].classList.remove(currentSlideClass);


  let newCurrentSlide;
  if (paginationButtonIndex) {
    newCurrentSlide = slidesAsArray[paginationButtonIndex];
  } else {
    newCurrentSlide = isNext ? slidesAsArray[currentSlideIndex + 1] : slidesAsArray[currentSlideIndex - 1];
  }

  newCurrentSlide.classList.add(currentSlideClass);

  updateCurrentSlideIndex();
  toggleButtonsDisabledStatus();
  changeCurrentPagginationButton();
};

const addButtonsListners = () => {
  prevButton.addEventListener('click', () => changeCurrentSlide(false));
  nextButton.addEventListener('click', () => changeCurrentSlide(true));
  pagginationButtons.forEach((button, index) => button.addEventListener('click', () => changeCurrentSlide(false, index)));
};

export const initSlider = () => {
  updateCurrentSlideIndex();
  toggleButtonsDisabledStatus();
  addButtonsListners();
};
