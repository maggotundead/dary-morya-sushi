
const teamSwiper = new Swiper('.js-team-swiper', {
    slidesPerView: 'auto',
    loop: true,
    draggable: true,
    // noSwiping: true,
    // mousewheel: {
    //     forceToAxis: true,
    // },
    // noSwiping: true,
    slideToClickedSlide: true,
    // keyboard: {
    //     enabled: true,
    //     onlyInViewport: true
    // },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
const zoneSwiper = new Swiper('.js-zones-swiper', {
    slidesPerView: 1,
    loop: true,
    draggable: true,
    // noSwiping: true,
    // mousewheel: {
    //     forceToAxis: true,
    // },
    noSwiping: true,
    // slideToClickedSlide: true,
    // keyboard: {
    //     enabled: true,
    //     onlyInViewport: true
    // },
    spaceBetween: 26,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            spaceBetween: 16,
        },
        768: {
            spaceBetween: 26,
        },
    }
});



document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('body').classList.toggle('mobile-menu-open');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.body.classList.contains('mobile-menu-open') && document.body.classList.remove('mobile-menu-open');

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// sticky header
// window.onscroll = function() {toggleHeaderBg()};
// const header = document.querySelector('header');
// window.pageYOffset && header.classList.add('sticky')
// const toggleHeaderBg = () => {
//     window.pageYOffset > 0 ? header.classList.add('sticky') : header.classList.remove('sticky');
// }


//modal
const contactModal = document.querySelector('.contact-modal');
document.querySelectorAll('[modal-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
        contactModal.classList.add('open');
    });
});

document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('open');
        });
    });
});
document.querySelectorAll('.modal-overlay').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('open');
        });
    });
});