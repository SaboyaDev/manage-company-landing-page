// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle'
// register Swiper custom elements
register()

// swiper element
const swiperEl = document.querySelector('swiper-container')

// swiper parameters
const swiperParams = {
	allowTouchMove: true,
	loop: true,
	centeredSlides: true,
	pagination: {
		clickable: true,
	},
	slidesPerView: 1,
	spaceBetween: 50,
	breakpoints: {
		640: {
			slidesPerView: 1.5,
			slidesOffsetBefore: 0,
		},
		768: {
			slidesPerView: 2,
		},
		1440: {
			slidesPerView: 4,
			centeredSlides: false,
		},
	},
	injectStyles: [
		`
    .swiper-pagination-bullet {
      background: none;
      border: 1px solid #f25f3a;
      opacity: 1;
    }
    .swiper-pagination-bullet-active {
      background-color:  #f25f3a;
    }
  `,
	],
	on: {
		init() {
			// ...
		},
	},
}

// now we need to assign all parameters to Swiper element
Object.assign(swiperEl, swiperParams)

// and now initialize it
swiperEl.initialize()
