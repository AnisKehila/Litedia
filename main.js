let header = document.querySelector('header');
window.addEventListener("scroll",() => {
    if(document.documentElement.scrollTop > 10 && !header.classList.contains('scrolled')) {
        header.classList.add('scrolled');
    } else if(document.documentElement.scrollTop <= 10 && header.classList.contains('scrolled')) {
        header.classList.remove('scrolled');
    }
});
// boxe swiper in phone && Tablets 
let init = false;
function swiperCard() {
    if (window.innerWidth <= 910) {
        if (!init) {
            init = true;
            swiper = new Swiper(".mySwiper", {
                direction: "horizontal",
                slidesPerView: "auto",
                centeredSlides: true,
                spaceBetween: 56,
                loop: true
            });
        }
    } else if (init) {
        swiper.destroy();
        init = false;
    }
}
swiperCard();
window.addEventListener("resize", swiperCard);

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
                spaceBetween: 32,
                loop: true
            });
        }
    } else if (isInit) {
        swiper.destroy();
        isInit = false;
    }
}
swiperOffers();
window.addEventListener("resize", swiperOffers);
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