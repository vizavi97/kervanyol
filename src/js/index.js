import $ from "jquery";
import bootstrap from "bootstrap";
import 'owl.carousel2/dist/owl.carousel';

import categories from '../json/categories'

const bgSwitcher = document.getElementById('bg-switcher');

if (bgSwitcher) {
  bgSwitcher.addEventListener("click", () => {
    document.body.classList.toggle('layout')
  })
}

$('.top-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: true,
    dotsEach: 4,
    center: true,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 10000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    }
});
$('.recent-products-items').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay: true,
  navText: [" ", " "],
  autoplayTimeout: 10000,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 5,
    }
  }
});
$('.popular-products-categories').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots: true,
  autoplay: false,
  navText: [" ", " "],
  autoplayTimeout: 10000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    }
  }
});
const popularProductsWrapper = document.getElementById('popularProductsWrapper');
if (popularProductsWrapper) {
  const popularProductsDots = popularProductsWrapper.querySelector('.owl-dots');
  document.addEventListener('DOMContentLoaded', () => {
    popularProductsDots.innerHTML = categories.map((elem,index) =>
      `<div class="owl-dot${index == 0 ? ' active' : ''}">${elem.name}</div>`
    ).join('')
  })
}

