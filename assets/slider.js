function updateSlider(slider, direction) {
  const sliderWrapper = slider.querySelector('.slider-wrapper');
  const listItems = slider.querySelectorAll('.slider__item');

  const slideWidth = listItems[0].offsetWidth;

  if (direction === 'next') {
    const firstItem = listItems[0];
    sliderWrapper.style.transition = 'transform 0.5s ease';
    sliderWrapper.style.transform = `translateX(-${slideWidth}px)`;
    setTimeout(() => {
      sliderWrapper.style.transition = 'none';
      sliderWrapper.style.transform = 'translateX(0)';
      sliderWrapper.appendChild(firstItem);
    }, 500);
  } else if (direction === 'prev') {
    const lastItem = listItems[listItems.length - 1];
    sliderWrapper.style.transition = 'none';
    sliderWrapper.style.transform = `translateX(-${slideWidth}px)`;
    sliderWrapper.insertBefore(lastItem, listItems[0]);
    setTimeout(() => {
      sliderWrapper.style.transition = 'transform 0.5s ease';
      sliderWrapper.style.transform = 'translateX(0)';
    }, 0);
  }
}

function initializeSlider(sliderSelector) {
  console.log('Initializing slider:', sliderSelector);
  const slider = document.querySelector(`${sliderSelector}`);

  if (!slider) {
    console.error(`Slider container not found: ${sliderSelector}`);
    return;
  }

  const prevBtn = document.querySelector(`${sliderSelector} .js__prev-btn`);
  const nextBtn = document.querySelector(`${sliderSelector} .js__next-btn`);

  if (nextBtn) {
    nextBtn.addEventListener('click', () => updateSlider(slider, 'next'));
  }
  if (prevBtn) {
    prevBtn.addEventListener('click', () => updateSlider(slider, 'prev'));
  }
}
