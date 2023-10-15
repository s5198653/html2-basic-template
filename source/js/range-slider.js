const DEFAULT__VALUES = {
  minPrice: 0,
  maxPrice: 1000,
  start: 0,
  end: 900,
  step: 1
};
const sliderElement = document.querySelector('.range__slider');
const minInput = document.querySelector('.range__input--min');
const maxInput = document.querySelector('.range__input--max');

const initRange = () => {
  noUiSlider.create(sliderElement, {
    start: [DEFAULT__VALUES.start, DEFAULT__VALUES.end],
    connect: true,
    range: {
      min: DEFAULT__VALUES.minPrice,
      max: DEFAULT__VALUES.maxPrice
    },
    step: DEFAULT__VALUES.step
  });
};

const sliderUpdate = () => {
  const value = sliderElement.noUiSlider.get();
  minInput.value = Math.floor(value[0]);
  maxInput.value = Math.floor(value[1]);
};

const updateSlider = () => {
  sliderElement.noUiSlider.on('update', sliderUpdate);
};

export {initRange, updateSlider};
