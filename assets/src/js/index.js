import $ from "jquery";
import 'bootstrap'
import 'owl.carousel2/dist/owl.carousel'
import EmojiButton from '@joeattardi/emoji-button'
import './inputPhone';
import './zoomple';
import './app';
import categories from '../json/categories'

window.$ = $;
window.jQuery = $;
jQuery = $;


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
  const toogleWrapper = document.querySelector('.product-container');
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

//COUNTER PRODUCT_PAGE

document.addEventListener('DOMContentLoaded', () => {
  const counter = document.getElementById('counterSum');
  if (counter) {
    const limitCount = Number(counter.getAttribute('max'));
    let counterValue = Number(counter.value);
    const counterInc = document.getElementById('counter-inc');
    const counterDecr = document.getElementById('counter-decr');
    counter.addEventListener("input", (input) => {
      if (input.data === '-') {
        counter.value = 1;
      }
      if (Number(counter.value) > limitCount) {
        counter.value = limitCount;
      }
      else if ( Number(counter.value) < 0 ) {
        counter.value = 1;
      }
      else {
        return counterValue = Number(counter.value);
      }
    })
    counterInc.addEventListener('click', () => {
      if (counter.value < limitCount) {
        counterValue++;
        counter.value = counterValue;
      }
    });
    counterDecr.addEventListener('click', () => {
      if (counter.value > 1) {
        counterValue--;
        counter.value = counterValue;
      }
    });
  }
});


//JQUERY Companies Filter-nav toggler

$(document).on('click', '.companies-nav-categories-item', function () {
  $('.companies-nav-categories-item > a').removeClass('active');
  $(this).find('a').addClass('active');
});

//JQUERY Companies Filter-nav toggler

$(document).on('click', '.companies-elements-type', function () {
  $('.companies-elements-type').removeClass('active');
  $(this).addClass('active');
});

//Js Btn Copy ExIm-products
$(document).ready(function () {
  $('#exim-btn-copy').click(function () {
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

// CHECK LOADED
const checkSwitcher = document.getElementById('cards-tab');
checkSwitcher ? checkSwitcher.addEventListener('click', () => {
  const check = document.getElementById('check-loaded');
  setTimeout(() => {
    check.classList.add('finish');
  }, 500)
}) : null;

const objDiv = document.getElementById("chat-conversation");
objDiv ? objDiv.scrollTop = objDiv.scrollHeight : null;

//EMOJI PICKER
window.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#emoji-button');
  if (button) {
    const picker = new EmojiButton();
    picker.on('emoji', emoji => {
      document.getElementById('immoji').value += emoji;
    });
    button.addEventListener('click', () => {
      picker.togglePicker(button);
    });
  }
});
// show chat

$(document).on('click', '.cabinet-chat-user', function () {
  $(document).find('.cabinet-chat-conversation').removeClass('hide');
});

$(document).ready(function () {
  $('.nav-menu-category').hover(function () {
    $(this).children('div').stop(true).delay(500).show(0);
  }, function () {
    $(this).children('div').stop(true).delay(200).hide(0);
  });
});
// main page search box-shadow

const mainSearch = document.getElementById('mainSearch');

if (mainSearch) {
  mainSearch.addEventListener("focusin", () => {
    mainSearch.parentElement.parentElement.classList.add('focused');
  });
  mainSearch.addEventListener("focusout", () => {
    mainSearch.parentElement.parentElement.classList.remove('focused');
  });
  mainSearch.addEventListener('input', () => {
    if (mainSearch.value.length > 0) {
      mainSearch.nextElementSibling.classList.add('show');
    } else {
      mainSearch.nextElementSibling.classList.remove('show');
    }
  })
}

const uploadProductFile = document.getElementById('uploadProductFile');
uploadProductFile ? uploadProductFile.addEventListener("change", (e) => {
  const uploadProductFileLabel = document.getElementById('uploadProductFileLabel');
  uploadProductFileLabel.innerHTML = e.target.value;
}) : null;


const menuToggle = document.getElementById('menuToggle');
menuToggle ? menuToggle.addEventListener('input', () => {
  const allCategories = document.getElementById('allCategories');
  if (menuToggle.checked) {
    allCategories.classList.add('show');
    document.body.classList.add('overflow');
    document.body.addEventListener("mouseup", (e) => {
      if (e.target === document.body) {
        menuToggle.checked = false
        allCategories.classList.remove('show');
        document.body.classList.remove('overflow')
      }
    })
  } else {
    allCategories.classList.remove('show');
    document.body.classList.remove('overflow')
  }
}) : null;

$(document).on("mouseenter", '.nav-allCategories-link', function () {
  let linkRel = $(this).attr('rel');
  $(document).find('.nav-allCategories-link').each(function () {
    if ($(this).attr('rel') === linkRel) {
      $(this).addClass('active')
    } else {
      $(this).removeClass('active')
    }
  })
  $(document).find('.nav-allCategories-content-element').each(function () {
    if ($(this).attr('rel') === linkRel) {
      $(this).css('display', 'flex')
    } else {
      $(this).css('display', 'none')
    }
  })
});

