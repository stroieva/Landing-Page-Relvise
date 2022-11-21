// бургер-меню

const burger = document.querySelector(".burger");
const headerMenu = document.querySelector(".header__menu");
const menuLink = document.querySelectorAll(".menu__link");

burger.addEventListener("click", function () {
    burger.classList.toggle("active__menu");
    if (burger.classList.contains("active__menu")) {
        headerMenu.classList.add("active__menu");
        document.body.style.overflow = "hidden";
    } else {
        headerMenu.classList.remove("active__menu");
        document.body.style.overflow = "auto";
    }
})

menuLink.forEach(link => {
    link.addEventListener("click", function() {
        headerMenu.classList.remove("active__menu");
        burger.classList.remove("active__menu");
        document.body.style.overflow = "auto";
    })
})


// Підключення анімації AOS

AOS.init();


// модальне вікно при кліку на кнопку

const modal = document.querySelector(".modal");
const button = document.querySelectorAll(".slider-block__button");
const modalClose = document.querySelector(".modal__close");
const contactButton = document.querySelector(".contact__button");

function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
}

function closeModal() {
    modal.classList.remove("show");
    modal.classList.add("hide");
}

button.forEach((item) => {
    item.addEventListener("click", openModal)
});

modalClose.addEventListener("click", closeModal);

contactButton.addEventListener("click", openModal);

// модальне вікно при скролі половини висоти сторінки

function showModalByScroll() {
    if(window.pageYOffset >= document.body.scrollHeight / 2) {
        openModal();
        window.removeEventListener("scroll", showModalByScroll)
    }
}

window.addEventListener("scroll", showModalByScroll)


// Плавний перехід по меню

const links = document.querySelectorAll('a[href*="#"]');

links.forEach(linkMenu => {
    linkMenu.addEventListener("click", function (event) {
         event.preventDefault();
         const linkId = linkMenu.getAttribute('href');
         document.querySelector(''+ linkId).scrollIntoView({
            behavior: "smooth",
            block: "start"
         })

    })
})
