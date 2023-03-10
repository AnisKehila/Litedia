// header handler
const burger = document.querySelector('#burger-menu');
const links = document.querySelectorAll('menu a');
const HOME = document.querySelector('#Home');
const SERVICES = document.querySelector('#Services');
const CONTACT = document.querySelector('#Contact');
const TESTI = document.querySelector('#Testimonials');
const PLANS = document.querySelector('#plan');
const homeLink = document.querySelector('#nav-home');
const servicesLink = document.querySelector('#nav-services');
const contactLink = document.querySelector('#nav-contact');
const testiLink = document.querySelector('#nav-testi');
const plansLink = document.querySelector('#nav-plans');
let menu = document.querySelector('menu');
let header = document.querySelector('header');

window.addEventListener("scroll",() => {
    if(document.documentElement.scrollTop > 10 && !header.classList.contains('scrolled')) {
        header.classList.add('scrolled');
    } else if(document.documentElement.scrollTop <= 10 && header.classList.contains('scrolled')) {
        header.classList.remove('scrolled');
    }
});

window.addEventListener('scroll' , () => {
    const p = window.pageYOffset;
    if(p >= HOME.offsetTop-112 && p < SERVICES.offsetTop-112) {
        links.forEach(link => {
            link.classList.remove('active');
        });
        homeLink.classList.add('active');
    } else if(p >= SERVICES.offsetTop-112 && p < PLANS.offsetTop-112) {
        links.forEach(link => {
            link.classList.remove('active');
        });
        servicesLink.classList.add('active');
    } else if(p >= PLANS.offsetTop-112 && p < TESTI.offsetTop-112) {
        links.forEach(link => {
            link.classList.remove('active');
        });
        plansLink.classList.add('active');
    } else if(p >= TESTI.offsetTop-112 && p < CONTACT.offsetTop-112) {
        links.forEach(link => {
            link.classList.remove('active');
        });
        testiLink.classList.add('active');
    } else if(p >= CONTACT.offsetTop-112) {
        links.forEach(link => {
            link.classList.remove('active');
        });
        contactLink.classList.add('active');
    }
});
// boxe swiper in phone && Tablets 
let init = false;
function swiperCard() {
    if (window.innerWidth <= 998) {
        if (!init) {
            init = true;
            swiper = new Swiper(".mySwiper", {
                direction: "horizontal",
                slidesPerView: "auto",
                centeredSlides: true,
                spaceBetween: 0,
                loop: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                }
            });
        } 
    } else if (init) {
        swiper.destroy();
        init = false;
        const activeBox = document.querySelectorAll('.box-container .box');
        activeBox[0].classList.add('swiper-slide-active'); 
    }
}
window.addEventListener("resize", swiperCard);
swiperCard();   

// offers swiper in phone 
let isInit = false;
function swiperOffers() {
    if (window.innerWidth <= 768) {
        if (!isInit) {
            isInit = true;
            swiper = new Swiper(".mySecSwiper", {
                direction: "horizontal",
                slidesPerView: "auto",
                centeredSlides: true,
                spaceBetween: 0,
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                }
            });
        }
    } else if (isInit) {
        swiper.destroy();
        isInit = false;
    }
}
swiperOffers();
window.addEventListener("resize", swiperOffers);

function swiperVertical() {
    swiper = new Swiper(".myVerSwiper", {
        direction: "vertical",
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true,
        spaceBetween: 0,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: "#btn-down",
            prevEl: "#btn-up",
        },
    });
}
swiperVertical();
// Click for change content in offers
let offerBtns = document.querySelectorAll('.offers .swiper-slide');
let content = document.querySelectorAll('.content');

function offerBtnsHandler() {
    offerBtns.forEach((btn) => btn.addEventListener('click' , () => {
        offerBtns.forEach(rmvClass => rmvClass.classList.remove('swiper-slide-active'));
        btn.classList.toggle('swiper-slide-active');
    })
    );
}
if (window.innerWidth >= 768) {
    offerBtnsHandler();
}
content.forEach((contEle) => {
    offerBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            if(contEle.getAttribute('data-content') === btn.getAttribute('data-content') && btn.classList.contains('swiper-slide-active')) {
                content.forEach((removeEle) => removeEle.classList.remove('active'));
                contEle.classList.add('active');
            }
        })
    })
});
// make menu in phone size


burger.addEventListener('click', () => {
    menu.classList.toggle('active');
});
links.forEach(LINK => {
    LINK.addEventListener('click', () => {
        menu.classList.contains('active') ? menu.classList.remove('active') : 1;
    })
})
document.onclick = function(e) {
    if(menu.classList.contains('active')){
        if(e.target != menu && e.target != burger) {
            menu.classList.remove('active');
        }
    }
}
