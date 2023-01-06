document.getElementById('burger-btn').onclick = function () {
	document.getElementById('header__inner').classList.toggle('burger--active')
}
document.getElementById('btn-catalog').onclick = function () {
	document.getElementById('menu__catalog').classList.toggle('menu__item--active')
}
document.getElementById('menu__item-services').onclick = function () {
	document.getElementById('menu__services').classList.toggle('menu__item-services--active')
}
document.querySelector('.wallpaper__show-more').onclick = function () {
	document.getElementById('get-started').classList.toggle('slider-2__on')
}



const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsItems = document.querySelectorAll('.tabs-item__swiper')

tabsBtn.forEach(function (item) {
	item.addEventListener('click', function () {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute("data-tab");
		let currentTab = document.querySelector(tabId);

		if (!currentBtn.classList.contains('active')) {
			tabsBtn.forEach(function (item) {
				item.classList.remove('active');
			})

			tabsItems.forEach(function (item) {
				item.classList.remove('active');
			})


			currentBtn.classList.add('active');
			currentTab.classList.add('active');
		}

	})
})


const slider9 = new Swiper('.blog__swiper', {
	loop: true,
	autoplay: {
		delay: 3000
	},
	slidesPerView: 1,
	spaceBetween: 20,
	speed: 500,
	breakpoints: {
		576: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	scrollbar: {
		el: '.swiper-scrollbar',
	},
})



const slider7 = new Swiper('.application__swiper', {
	loop: true,
	autoplay: {
		delay: 3000
	},
	slidesPerView: 1,
	spaceBetween: 20,
	speed: 500,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	scrollbar: {
		el: '.swiper-scrollbar',
	},
	pagination: {
		el: '.swiper-pagination',
	},
})


const slider6 = new Swiper('.tabs-item__swiper', {
	loop: true,
	autoplay: {
		delay: 3000
	},
	slidesPerView: 1,
	spaceBetween: 20,
	speed: 500,
	breakpoints: {
		576: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
		1200: {
			slidesPerView: 4,
		},
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	scrollbar: {
		el: '.swiper-scrollbar',
	},
})



const slider4 = new Swiper('.goods__swiper-tab', {
	slidesPerView: 2,
	spaceBetween: 30,
	speed: 500,
	breakpoints: {
		576: {
			slidesPerView: 3,
		},
	}
})

const slider3 = new Swiper('.services__swiper', {
	loop: true,
	autoplay: {
		delay: 3000
	},
	slidesPerView: 1,
	spaceBetween: 20,
	speed: 500,
	breakpoints: {
		576: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
		1200: {
			slidesPerView: 4,
		},
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	scrollbar: {
		el: '.swiper-scrollbar',
	},
})

const slider = new Swiper('.get-started__swiper', {
	loop: true,

	pagination: {
		el: '.swiper-pagination',
	},
	speed: 500,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	autoplay: {
		delay: 3000
	},
})

const slider2 = new Swiper('.get-started__swiper-2', {
	loop: true,
	autoplay: {
		delay: 3000
	},
	speed: 500,
	breakpoints: {
		992: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	scrollbar: {
		el: '.swiper-scrollbar',
	},
})
