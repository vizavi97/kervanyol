import $ from "jquery";
import 'bootstrap'
import 'owl.carousel2/dist/owl.carousel'
import Drift from "drift-zoom/src/js/Drift";
import Swiper from "swiper";
import './inputPhone';
import './app';
import categories from '../json/categories'

const bgSwitcher = document.getElementById('bg-switcher');

if (bgSwitcher) {
  bgSwitcher.addEventListener("click", () => {
    document.body.classList.toggle('layout')
  })
}

$('.top-slider').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
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
  loop: true,
  margin: 10,
  nav: true,
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
  loop: true,
  margin: 10,
  nav: true,
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
$('.exim-call-content-left').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: false,
  navText: [" ", " "],
  autoplayTimeout: 10000,
  responsive: {
    0: {
      items: 1,
    }
  }
});
const popularProductsWrapper = document.getElementById('popularProductsWrapper');
if (popularProductsWrapper) {
  const popularProductsDots = popularProductsWrapper.querySelector('.owl-dots');
  document.addEventListener('DOMContentLoaded', () => {
    popularProductsDots.innerHTML = categories.map((elem, index) =>
      `<div class="owl-dot${index == 0 ? ' active' : ''}">${elem.name}</div>`
    ).join('')
  })
}
// CATALOG-TOGGLER
document.addEventListener('DOMContentLoaded', () => {
  const cubeToggler = document.querySelector('.catalog-container-toggler-cube');
  const lineToggler = document.querySelector('.catalog-container-toggler-line');
  const toogleWrapper = document.querySelector('.catalog-container-items');
  if (cubeToggler) {
    cubeToggler.addEventListener('click', () => {
      cubeToggler.classList.add('active');
      lineToggler.classList.remove('active');
      toogleWrapper.classList.add('cube');
      toogleWrapper.classList.remove('line');
    });
  }
  if (lineToggler) {
    lineToggler.addEventListener('click', () => {
      lineToggler.classList.add('active');
      cubeToggler.classList.remove('active');
      toogleWrapper.classList.add('line');
      toogleWrapper.classList.remove('cube');
    })
  }
});


const demoWrapper = document.getElementsByClassName('product-slider');

if (demoWrapper.length > 0) {
  let demoTrigger = document.querySelector('.swiper-slide-active').querySelector('img');
  let demoCollection = document.querySelector('.product-slider-thumbs-slide-img');
  let paneContainer = document.querySelector('.product-slider-container');
  new Drift(demoTrigger, {
    paneContainer: paneContainer,
    inlinePane: true,
    zoomFactor: 2,
  });
  new Drift(demoCollection, {
    paneContainer: paneContainer,
    inlinePane: false,
  });

  var productSliderThumbs = new Swiper('.product-slider-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var productSliderTop = new Swiper('.product-slider-top', {
    spaceBetween: 10,
    thumbs: {
      swiper: productSliderThumbs
    }
  });

}
//COUNTER PRODUCT_PAGE

document.addEventListener('DOMContentLoaded', () => {
  let counter = document.getElementById('counterSum');
  if (counter) {
    let counterValue = Number(counter.value);
    const counterInc = document.getElementById('counter-inc');
    const counterDecr = document.getElementById('counter-decr');
    counterInc.addEventListener('click', () => {
      counterValue++;
      counter.value = counterValue;
    });
    counterDecr.addEventListener('click', () => {
      counterValue--;
      counter.value = counterValue;
    });
  }
});



//JQUERY Companies Filter-nav toggler

$(document).on('click','.companies-nav-categories-item',function(){
    $('.companies-nav-categories-item > a').removeClass('active');
    $(this).find('a').addClass('active');
});

//JQUERY Companies Filter-nav toggler

$(document).on('click','.companies-elements-type',function(){
  $('.companies-elements-type').removeClass('active');
  $(this).addClass('active');
});

//Js Btn Copy ExIm-products
$(document).ready(function () {
    $('#exim-btn-copy').click(function() {
	    let $temp = $("<input>");
	    $("body").append($temp);
	    $temp.val($('#text').text()).select();
	    document.execCommand("copy");
	    $temp.remove();
	});
});


//FORM inputs MASK
$("[name='client-phone']").mask("+998 (zz) zzz-zz-zz");
$("[name='client-fax']").mask("+998 (zz) zzz-zz-zz");



