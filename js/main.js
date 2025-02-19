window.onload = function () {
    // **🔹 漢堡選單功能**
    const menuButton = document.querySelector(".hamburger-menu");
    const menu = document.querySelector(".navbar-auth-slide");
    const overlay = document.querySelector(".menu-overlay");
    const closeButton = document.querySelector(".close-menu");

    if (menuButton && menu && overlay && closeButton) {
        menuButton.addEventListener("click", function () {
            menu.classList.add("open");
            overlay.classList.add("open");
        });

        closeButton.addEventListener("click", function () {
            menu.classList.remove("open");
            overlay.classList.remove("open");
        });

        overlay.addEventListener("click", function () {
            menu.classList.remove("open");
            overlay.classList.remove("open");
        });
    }

    // **🔹 語言切換**
    document.querySelectorAll(".dropdown-menu li").forEach((item) => {
        item.addEventListener("click", function () {
            const lang = item.getAttribute("data-lang");
            if (lang) {
                localStorage.setItem("language", lang);
                location.reload();
            }
        });
    });

    // **🔹 Swiper.js 輪播功能**
    const worksSlider = document.querySelector(".works-slider");
    if (worksSlider) {
        new Swiper(".works-slider", {
            loop: true,
            spaceBetween: 20,
            slidesPerView: 1,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            }
        });
        console.log("Swiper initialized!");  // 用於除錯
    } else {
        console.error("Swiper container not found!");
    }

    // **🔹 Go Top 按鈕功能**
    const goTopButton = document.getElementById("goTopButton");

    if (goTopButton) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                goTopButton.classList.add("show");
            } else {
                goTopButton.classList.remove("show");
            }
        });

        goTopButton.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
};

