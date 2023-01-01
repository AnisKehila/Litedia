let header = document.querySelector('header');
window.addEventListener("scroll",() => {
    if(document.documentElement.scrollTop > 10 && !header.classList.contains('scrolled')) {
        header.classList.add('scrolled');
    } else if(document.documentElement.scrollTop <= 10 && header.classList.contains('scrolled')) {
        header.classList.remove('scrolled');
    }
});