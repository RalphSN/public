window.onload = function () {
    const preloader = document.querySelector(".preloader");
    const allElements = document.querySelectorAll(".navbar, .footer, .main");
    const coverImg = document.querySelector(".cover .cover-image-container img");
    // **🔹 漢堡選單功能**
    const menuButton = document.querySelector(".hamburger-menu");
    const menu = document.querySelector(".navbar-auth-slide");
    const overlay = document.querySelector(".menu-overlay");
    const closeButton = document.querySelector(".close-menu");
    const navbarLinks = document.querySelectorAll(".navbar-links a"); // 取得所有選單連結
    // **🔹 計算滾軸寬度**
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
  
    // **🔹 禁用滾動位置記憶，確保重新整理回到頂部**
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  
    // **🔹 強制滾動到頂部，確保 preloader 可見**
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  
    // preloader (因網站規模小，僅用2秒模擬載入)
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`; // 避免頁面跳動
    const fixedElements = document.querySelectorAll(".navbar, .footer");
    fixedElements.forEach((el) => {
      el.style.paddingRight = `${scrollbarWidth}px`;
    });
  
    setTimeout(() => {
      preloader.classList.add("hidden");
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      allElements.forEach((el) => {
        el.classList.add("loaded")
      });
      fixedElements.forEach((el) => {
        el.style.paddingRight = "";
      });
      setTimeout(()=>{
        allElements.forEach((el) => {
          el.style.display = "flex";
        },500);
      });
      coverImg.style.display = "block";
    }, 1500);
  
    //攔截a不改變網址
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (event) {
        event.preventDefault();
  
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 0; // 取得 navbar 高度
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - navbarHeight, // 減去 navbar 高度
            behavior: "smooth",
          });
        }
      });
    });
  
    if (menuButton && menu && overlay && closeButton) {
      menuButton.addEventListener("click", function (event) {
        menu.classList.add("open");
        overlay.classList.add("open");
        event.stopPropagation(); // 防止點擊觸發關閉
      });
  
      closeButton.addEventListener("click", function () {
        menu.classList.remove("open");
        overlay.classList.remove("open");
      });
  
      overlay.addEventListener("click", function () {
        menu.classList.remove("open");
        overlay.classList.remove("open");
      });
  
      // 點擊其他區域關閉 `.navbar-auth-slide`
      document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
          menu.classList.remove("open");
          overlay.classList.remove("open");
        }
      });
  
      // **🔹 點擊選單內連結後關閉選單**
      navbarLinks.forEach((link) => {
        link.addEventListener("click", function () {
          menu.classList.remove("open");
          overlay.classList.remove("open");
        });
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
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
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
  