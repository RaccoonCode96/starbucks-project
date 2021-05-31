const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
	searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
	searchEl.classList.add('focused');
	searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
	searchEl.classList.remove('focused');
	searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener(
	'scroll',
	_.throttle(function () {
		if (window.scrollY > 500) {
			// badgeEl.style.display = 'none';
			// gsap.to(요소, 지속시간, 옵션)
			gsap.to(badgeEl, 0.6, {
				opacity: 0,
				display: 'none',
			});
			gsap.to(toTopEl, 0.2, {
				x: 0,
			});
		} else {
			// badgeEl.style.display = 'block';
			gsap.to(badgeEl, 0.6, {
				opacity: 1,
				display: 'block',
			});
			gsap.to(toTopEl, 0.2, {
				x: 100,
			});
		}
	}, 300)
);
// _.throttle(함수, 시간) : 함수를 시간 당 한번 발생

toTopEl.addEventListener('click', function () {
	gsap.to(window, 0.7, {
		scrollTo: 0,
	});
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
	gsap.to(fadeEl, 1, {
		delay: (index + 1) * 0.7,
		opacity: 1,
	});
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
	direction: 'vertical',
	autoplay: true,
	loop: true,
});

// direction: 'horizontal'  기본값이라서 적지 않음
new Swiper('.promotion .swiper-container', {
	slidesPerView: 3, // 한번에 보여주는 슬라이드 개수
	spaceBetween: 10, // 슬라이드 사이의 여백
	centeredSlides: true, // 1번 슬라이드가 가운데 보이기
	loop: true,
	// autoplay: {
	// 	delay: 5000,
	// },
	pagination: {
		el: '.promotion .swiper-pagination', // 페이지 번호 요소
		clickable: true, // 사용자의 페이지 번호 요소 제어
	},
	navigation: {
		prevEl: '.promotion .swiper-prev',
		nextEl: '.promotion .swiper-next',
	},
});

new Swiper('.awards .swiper-container', {
	slidesPerView: 5,
	autoplay: true,
	loop: true,
	spaceBetween: 30,
	navigation: {
		prevEl: '.awards .swiper-prev',
		nextEl: '.awards .swiper-next',
	},
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
	isHidePromotion = !isHidePromotion;
	if (isHidePromotion) {
		promotionEl.classList.add('hide');
	} else {
		promotionEl.classList.remove('hide');
	}
});

// 랜덤함수
function random(min, max) {
	return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
	gsap.to(selector, random(1.5, 2.5), {
		y: size,
		repeat: -1,
		yoyo: true,
		ease: Power1.easeInOut,
		delay: random(0, delay),
	});
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
	new ScrollMagic.Scene({
		triggerElement: spyEl, // 보여짐 여부를 감시할 요소 (target)
		triggerHook: 0.8, // target 센서의 화면 지점 (0 ~ 1)
	})
		.setClassToggle(spyEl, 'show')
		.addTo(new ScrollMagic.Controller()); // 내부에 컨트롤러에 실제 동작하도록 넣음
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
