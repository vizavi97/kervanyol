import $ from "jquery";
import bootstrap from "bootstrap";
import 'owl.carousel2/dist/owl.carousel'

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