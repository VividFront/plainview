import Splide from '@splidejs/splide';
import '@splidejs/splide/css/core';

document.addEventListener('DOMContentLoaded', function () {
  window.Splide = Splide;

  if (document.querySelector('[data-vf-trending-slider]')) {
    const trending = new Splide('[data-vf-trending-slider]', {
      gap: 32,
      type: 'slide',
      pagination: false,
      arrows: true,
      perPage: 4,
      perMove: 1,
      breakpoints: {
        575: {
          perPage: 2,
          gap: 16,
        },
        992: {
          perPage: 3,
        },
      },
    });

    trending.mount();

    const { Slides } = trending.Components;
    let leopardIsRemoved = false;
    if (window.matchMedia('(max-width: 991px)').matches) {
      Slides.remove('.js-leopard-slide');
      leopardIsRemoved = true;
    }

    if (!leopardIsRemoved) {
      trending.on('resize', () => {
        if (leopardIsRemoved) return;

        if (window.matchMedia('(max-width: 991px)').matches) {
          Slides.remove('.js-leopard-slide');
          leopardIsRemoved = true;
        }
      });
    }
  }

  if (document.querySelector('[data-vf-category-slider-products]')) {
    const categoryProducts = new Splide('[data-vf-category-slider-products]', {
      type: 'fade',
      pagination: false,
      arrows: false,
      perPage: 1,
      perMove: 1,
      breakpoints: {
        992: {
          dragMinThreshold: {
            touch: 8,
          },
        },
      },
    });

    const categoryList = new Splide('[data-vf-category-slider-list]', {
      rewind: false,
      pagination: false,
      isNavigation: true,
      arrows: false,
      perPage: 8,
      direction: 'ttb',
      height: '100%',
      fixedHeight: 50,
      breakpoints: {
        992: {
          perPage: 3,
          direction: 'ltr',
          height: 50,
          focus: 'center',
          fixedHeight: false,
          trimSpace: false,
        },
      },
    });

    categoryList.mount();
    categoryProducts.sync(categoryList);
    categoryProducts.mount();

    const pinkBar = document.querySelector('[data-vf-category-bar]'),
      pinkPill = document.querySelector('[data-vf-category-pill]'),
      firstSlide = document.querySelector('[data-category-list-index="0"]'),
      slidersContainer = document.querySelector('[data-vf-product-tabs]');

    const pinkBarSparkle = document.querySelector(
      '[data-vf-category-bar] [data-sparkle-group]',
    );

    const leftPadding = 24,
      rightPadding = 60,
      gap = 32;
    const extraWidth = leftPadding + rightPadding + gap;

    pinkBar.style.top = firstSlide.offsetTop + 'px';
    pinkBar.style.left = firstSlide.offsetLeft - leftPadding + 'px';

    pinkBar.style.width = getBarWidth(
      slidersContainer.offsetWidth,
      firstSlide.offsetWidth,
      extraWidth,
    );

    let currentSlide = firstSlide;
    categoryList.on('move', (newIndex) => {
      const nextSlide = document.querySelector(
        '[data-category-list-index="' + newIndex + '"]',
      );
      if (pinkBar) {
        pinkBar.style.top = nextSlide.offsetTop + 'px';
        pinkBar.style.left =
          nextSlide.offsetLeft - leftPadding - leftPadding + 'px';
        pinkBar.style.width = getBarWidth(
          slidersContainer.offsetWidth,
          nextSlide.offsetWidth,
          extraWidth,
        );

        if (pinkBarSparkle) {
          if (newIndex % 2) {
            pinkBarSparkle.classList.add('rotate-90', '!translate-y-[50%]');
          } else {
            pinkBarSparkle.classList.remove('rotate-90', '!translate-y-[50%]');
          }
        }

        currentSlide = nextSlide;
      }

      if (pinkPill) {
        const slideText = nextSlide.querySelector('p');
        pinkPill.style.width = slideText.offsetWidth + leftPadding * 2 + 'px';
      }
    });

    categoryList.on('resize', () => {
      pinkBar.style.top = currentSlide.offsetTop + 'px';
      pinkBar.style.left =
        currentSlide.offsetLeft - leftPadding - leftPadding + 'px';
      pinkBar.style.width = getBarWidth(
        slidersContainer.offsetWidth,
        currentSlide.offsetWidth,
        extraWidth,
      );
    });
  }

  if (document.querySelector('[data-vf-recenlty-viewed-slider]')) {
    const recentlyViewed = new Splide('[data-vf-recenlty-viewed-slider]', {
      gap: 32,
      type: 'slide',
      pagination: false,
      arrows: false,
      perPage: 4,
      perMove: 1,
      destroy: true,
      breakpoints: {
        575: {
          perPage: 2,
          destroy: false,
        },
        767: {
          perPage: 3,
          gap: 16,
          destroy: false,
        },
      },
    });

    // recentlyViewed.mount();
    // save in window to mount after recently viewed script runs
    window.RecentlyViewedSlider = recentlyViewed;
  }
});

// pink bar width = sliders container * (8/12) + list item width + x padding + gap
function getBarWidth(containerWidth, listItemWidth, extra) {
  return containerWidth * 0.667 + listItemWidth + extra + 'px';
}
