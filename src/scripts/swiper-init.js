// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle'
// register Swiper custom elements
register()

// swiper element
const swiperEl = document.querySelector('swiper-container')

// swiper parameters
const swiperParams = {
	loop: true,
	centeredSlides: true,
	pagination: {
		clickable: true,
	},
	// pagination: true,
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
		976: {
			slidesPerView: 2,
		},
		1440: {
			slidesPerView: 2.5,
		},
	},
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
