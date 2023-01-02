let header = document.querySelector('header');
window.addEventListener("scroll",() => {
    if(document.documentElement.scrollTop > 10 && !header.classList.contains('scrolled')) {
        header.classList.add('scrolled');
    } else if(document.documentElement.scrollTop <= 10 && header.classList.contains('scrolled')) {
        header.classList.remove('scrolled');
    }
});

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
        });
        }
    } else if (init) {
        swiper.destroy();
        init = false;
    }
}
swiperCard();
window.addEventListener("resize", swiperCard);