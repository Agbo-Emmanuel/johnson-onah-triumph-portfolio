window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) { // Change 50 to the scroll position where you want the effect to trigger
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});



document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carouselImages = document.querySelector('.carousel-images');
    const images = carouselImages.querySelectorAll('img');
    const imageCount = images.length;
    let index = 0;

    let startX;

    function updateCarousel() {
        const offset = -index * 100;
        carouselImages.style.transform = `translateX(${offset}%)`;
    }

    function handleSwipe(direction) {
        if (direction === 'left') {
            index = (index < imageCount - 1) ? index + 1 : 0;
        } else if (direction === 'right') {
            index = (index > 0) ? index - 1 : imageCount - 1;
        }
        updateCarousel();
    }

    prevButton.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : imageCount - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        index = (index < imageCount - 1) ? index + 1 : 0;
        updateCarousel();
    });

    carouselImages.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    carouselImages.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        const deltaX = startX - endX;

        if (Math.abs(deltaX) > 30) { // Threshold for swipe distance
            if (deltaX > 0) {
                handleSwipe('left');
            } else {
                handleSwipe('right');
            }
        }
    });
});



const openMenu = document.getElementById('open');
const closeMenu = document.getElementById('close');
const menu = document.getElementById('menu');
const homeLink = document.getElementById('home_link');
const aboutLink = document.getElementById('about_link');
const serviceLink = document.getElementById('service_link');
const bookMeLink = document.getElementById('book_me_link');



openMenu.addEventListener('click', () => {
    openMenu.style.display = "none";
    closeMenu.style.display = "flex";
    menu.classList.add('visible');
});

closeMenu.addEventListener('click', () => {
    closeMenu.style.display = "none";
    openMenu.style.display = "flex";
    menu.classList.remove('visible');
});

homeLink.addEventListener('click', () => {
    closeMenu.style.display = "none";
    openMenu.style.display = "flex";
    menu.classList.remove('visible');
});
aboutLink.addEventListener('click', () => {
    closeMenu.style.display = "none";
    openMenu.style.display = "flex";
    menu.classList.remove('visible');
});
serviceLink.addEventListener('click', () => {
    closeMenu.style.display = "none";
    openMenu.style.display = "flex";
    menu.classList.remove('visible');
});
bookMeLink.addEventListener('click', () => {
    closeMenu.style.display = "none";
    openMenu.style.display = "flex";
    menu.classList.remove('visible');
});





document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once the animation has been triggered
            }
        });
    });

    // Select the element to be observed
    const fadeInElement = document.querySelector('.fade_in_left');
    observer.observe(fadeInElement);
});

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once the animation has been triggered
            }
        });
    });

    // Select the element to be observed
    const fadeInElement = document.querySelector('.fade_in_right');
    observer.observe(fadeInElement);
});

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once the animation has been triggered
            }
        });
    });

    // Select all elements to be observed
    const fadeInElements = document.querySelectorAll('.fade_in_up');
    
    // Observe each element individually
    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});
