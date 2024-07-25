const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

const sponsorsSlide = new Swiper(".sponsors-slide", {
    centeredSlides: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false
    },
    slidesPerView: 'auto',  // Automatically adjust based on slide widths
    loop: true,
    spaceBetween: 5,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 - progress);
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
    }
});