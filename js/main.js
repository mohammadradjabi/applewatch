var swiper = new Swiper(".mySwiper", {
  slidesPerView: 14,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    500: {
      slidesPerView: 5.5,
      spaceBetween: 0,
    },
    600: {
      slidesPerView: 6.5,
      spaceBetween: 0,
    },
    700: {
      slidesPerView: 8.5,
      spaceBetween: 0,
    },
    800: {
      slidesPerView: 9.5,
      spaceBetween: 0,
    },
    900: {
      slidesPerView: 10.5,
      spaceBetween: 0,
    },
    1000: {
      slidesPerView: 11.6,
      spaceBetween: 0,
    },
    1100: {
      slidesPerView: 12.5,

      spaceBetween: 0,
    },
    1200: {
      slidesPerView: 13,

      spaceBetween: 0,
    },
  },
});
///////////////////////////////////////////////////////
var swiper = new Swiper(".musicsp", {
  effect: "coverflow",
  spaceBetween: 60,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 120,
    modifier: 1,
    slideShadows: false,
  },
});

////////////////////////////////////////////////////
//display menu section
{
  $("nav.md>ul>li:nth-of-type(2)").on("mouseenter", function () {
    $("div.submenu-store").slideDown(500);
  });
  $("nav.md>ul>li:nth-of-type(2)").on("mouseleave", function () {
    $("div.submenu-store").slideUp(500);
  });
  $("nav.md>ul>li:nth-of-type(3)").on("mouseenter", function () {
    $("div.submenu-mac").slideDown(500);
  });
  $("nav.md>ul>li:nth-of-type(3)").on("mouseleave", function () {
    $("div.submenu-mac").slideUp(500);
  });
  $("nav.md>ul>li:nth-of-type(4)").on("mouseenter", function () {
    $("div.submenu-ipad").slideDown(500);
  });
  $("nav.md>ul>li:nth-of-type(4)").on("mouseleave", function () {
    $("div.submenu-ipad").slideUp(500);
  });
  $("nav.md>ul>li:nth-of-type(5)").on("mouseenter", function () {
    $("div.submenu-iPhone").slideDown(500);
  });
  $("nav.md>ul>li:nth-of-type(5)").on("mouseleave", function () {
    $("div.submenu-iPhone").slideUp(200);
  });
  $("nav.md>ul>li:nth-of-type(6)").on("mouseenter", function () {
    $("nav.md>ul>li:nth-of-type(6)>div").slideDown(500);
  });
  $("nav.md>ul>li:nth-of-type(6)").on("mouseleave", function () {
    $("nav.md>ul>li:nth-of-type(6)>div").slideUp(200);
  });
  $("nav.md>ul>li:nth-of-type(8)").on("mouseenter", function () {
    $("div.submenu-airpods").slideDown(500);
  });
  $("nav.md>ul>li:nth-of-type(8)").on("mouseleave", function () {
    $("div.submenu-airpods").slideUp(200);
  });
  $("nav.md>ul>li:nth-of-type(9)").on("mouseenter", function () {
    $("div.submenu-tv").slideDown(500);
  });
  $("nav.md>ul>li:nth-of-type(9)").on("mouseleave", function () {
    $("div.submenu-tv").slideUp(200);
  });
  $("nav.md>ul>li:nth-of-type(10)").on("mouseenter", function () {
    $("div.submenu-entertainment").slideDown(500);
  });
  $("nav.md>ul>li:nth-of-type(10)").on("mouseleave", function () {
    $("div.submenu-entertainment").slideUp(200);
  });
  $("nav.md>ul>li:nth-of-type(11)").on("mouseenter", function () {
    $("div.submenu-Accessories").slideDown(500);
  });
  $("nav.md>ul>li:nth-of-type(11)").on("mouseleave", function () {
    $("div.submenu-Accessories").slideUp(200);
  });
  $("nav.md>ul>li:nth-of-type(12)").on("mouseenter", function () {
    $("div.submenu-support").slideDown(500);
  });
  $("nav.md>ul>li:nth-of-type(12)").on("mouseleave", function () {
    $("div.submenu-support").slideUp(200);
  });

  $("nav.md>ul>li:nth-of-type(13)").on("click", function () {
    $("div.submenu-search").slideDown(500);
  });
  $("nav.md>ul>li:nth-of-type(13)").on("mouseleave", function () {
    $("div.submenu-search").slideUp(200);
  });
  $("nav.md>ul>li:nth-of-type(14)").on("click", function () {
    $("div.submenu-bag").slideDown(500);
  });
  $("nav.md>ul>li:nth-of-type(14)").on("mouseleave", function () {
    $("div.submenu-bag").slideUp(200);
  });
}
////////////////////////////////////////////////////
//display menu sm section
//search
{
  $("nav.xs>div>a.searchclick").on("click", function () {
    $("div.submenu-sm-search").slideDown(500);
    $("nav.xs").css({
      backgroundColor: "#161617",
      position: "fixed",
    });
    $("nav.xs>div>a>i").css({
      display: "none",
    });
    $("div.clickparent").css({
      display: "none",
    });
    $("submenu-sm-search>div.close-search>div:nth-of-type(1)").css({
      rotate: "-45deg",
    });
    $("submenu-sm-search>div.close-search>div:nth-of-type(2)").css({
      rotate: "45deg",
    });
  });

  $("div#close-search").on("click", function () {
    $("div.submenu-sm-search").slideUp(200);
    $("nav.xs").css({
      backgroundColor: "#333333",
      position: "relative",
    });
    $("submenu-sm-search>div#close-search").css({
      backgroundColor: "red",
    });
    $("nav.xs>div>a>i").css({
      display: "block",
    });
    $("div.clickparent").css({
      display: "block",
    });
  });
}
//bag
$("nav.xs>div>a.bagclick").on("click", function () {
  $("div.submenu-sm-bag").slideDown(500);
  $("nav.xs").css({
    backgroundColor: "#161617",
    position: "fixed",
  });
  $("nav.xs>div>a>i").css({
    display: "none",
  });
  $("div.clickparent").css({
    display: "none",
  });
});

$("div#close-bag").on("click", function () {
  $("div.submenu-sm-bag").slideUp(200);
  $("nav.xs").css({
    backgroundColor: "#333333",
    position: "relative",
  });

  $("nav.xs>div>a>i").css({
    display: "block",
  });
  $("div.clickparent").css({
    display: "block",
  });
});
//clickparent

$("div.burger").on("click", function () {
  $("div.submenu-click").slideDown(500);
  $("nav.xs").css({
    backgroundColor: "#161617",
    position: "fixed",
  });
  $("nav.xs>div>a>i").css({
    display: "none",
  });
  $("div.burger").css({
    display: "none",
  });
});
let b = document.querySelector("div#close-submenu");
b.addEventListener("click", function () {
  $("div.submenu-click").slideUp(200);
  $("nav.xs").css({
    backgroundColor: "#333333",
    position: "relative",
  });
  $("nav.xs>div>a>i").css({
    display: "block",
  });
  $("div.burger").css({
    display: "flex",
  });
});

////////////////////////////////////////////////////
//footer section click
{
  let flagFooter = true;
  $("div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(1)").on(
    "click",
    function () {
      if (flagFooter == true) {
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(1)>div>div:nth-of-type(2)>div:nth-of-type(1)"
        ).css({
          transform: "rotate(-45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(1)>div>div:nth-of-type(2)>div:nth-of-type(2)"
        ).css({
          transform: "rotate(45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(1)>div:nth-of-type(2)"
        ).slideDown(500);
        flagFooter = false;
      } else {
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(1)>div>div:nth-of-type(2)>div:nth-of-type(1)"
        ).css({
          transform: "rotate(45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(1)>div>div:nth-of-type(2)>div:nth-of-type(2)"
        ).css({
          transform: "rotate(-45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(1)>div:nth-of-type(2)"
        ).slideUp(200);
        flagFooter = true;
      }
    }
  );
}
{
  let flagFooter = true;
  $("div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(2)").on(
    "click",
    function () {
      if (flagFooter == true) {
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)"
        ).css({
          transform: "rotate(-45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)"
        ).css({
          transform: "rotate(45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(2)>div:nth-of-type(2)"
        ).slideDown(500);
        flagFooter = false;
      } else {
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)"
        ).css({
          transform: "rotate(45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)"
        ).css({
          transform: "rotate(-45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(2)>div:nth-of-type(2)"
        ).slideUp(200);
        flagFooter = true;
      }
    }
  );
}
{
  let flagFooter = true;
  $("div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(3)").on(
    "click",
    function () {
      if (flagFooter == true) {
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(3)>div>div:nth-of-type(2)>div:nth-of-type(1)"
        ).css({
          transform: "rotate(-45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(3)>div>div:nth-of-type(2)>div:nth-of-type(2)"
        ).css({
          transform: "rotate(45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(3)>div:nth-of-type(2)"
        ).slideDown(500);
        flagFooter = false;
      } else {
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(3)>div>div:nth-of-type(2)>div:nth-of-type(1)"
        ).css({
          transform: "rotate(45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(3)>div>div:nth-of-type(2)>div:nth-of-type(2)"
        ).css({
          transform: "rotate(-45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(3)>div:nth-of-type(2)"
        ).slideUp(200);
        flagFooter = true;
      }
    }
  );
}
{
  let flagFooter = true;
  $("div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(4)").on(
    "click",
    function () {
      if (flagFooter == true) {
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(4)>div>div:nth-of-type(2)>div:nth-of-type(1)"
        ).css({
          transform: "rotate(-45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(4)>div>div:nth-of-type(2)>div:nth-of-type(2)"
        ).css({
          transform: "rotate(45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(4)>div:nth-of-type(2)"
        ).slideDown(500);
        flagFooter = false;
      } else {
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(4)>div>div:nth-of-type(2)>div:nth-of-type(1)"
        ).css({
          transform: "rotate(45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(4)>div>div:nth-of-type(2)>div:nth-of-type(2)"
        ).css({
          transform: "rotate(-45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(4)>div:nth-of-type(2)"
        ).slideUp(200);
        flagFooter = true;
      }
    }
  );
}
{
  let flagFooter = true;
  $("div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(5)").on(
    "click",
    function () {
      if (flagFooter == true) {
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(5)>div>div:nth-of-type(2)>div:nth-of-type(1)"
        ).css({
          transform: "rotate(-45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(5)>div>div:nth-of-type(2)>div:nth-of-type(2)"
        ).css({
          transform: "rotate(45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(5)>div:nth-of-type(2)"
        ).slideDown(500);
        flagFooter = false;
      } else {
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(5)>div>div:nth-of-type(2)>div:nth-of-type(1)"
        ).css({
          transform: "rotate(45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(5)>div>div:nth-of-type(2)>div:nth-of-type(2)"
        ).css({
          transform: "rotate(-45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(5)>div:nth-of-type(2)"
        ).slideUp(200);
        flagFooter = true;
      }
    }
  );
}
{
  let flagFooter = true;
  $("div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(6)").on(
    "click",
    function () {
      if (flagFooter == true) {
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(6)>div>div:nth-of-type(2)>div:nth-of-type(1)"
        ).css({
          transform: "rotate(-45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(6)>div>div:nth-of-type(2)>div:nth-of-type(2)"
        ).css({
          transform: "rotate(45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(6)>div:nth-of-type(2)"
        ).slideDown(500);
        flagFooter = false;
      } else {
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(6)>div>div:nth-of-type(2)>div:nth-of-type(1)"
        ).css({
          transform: "rotate(45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(6)>div>div:nth-of-type(2)>div:nth-of-type(2)"
        ).css({
          transform: "rotate(-45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(6)>div:nth-of-type(2)"
        ).slideUp(200);
        flagFooter = true;
      }
    }
  );
}
{
  let flagFooter = true;
  $("div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(7)").on(
    "click",
    function () {
      if (flagFooter == true) {
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(7)>div>div:nth-of-type(2)>div:nth-of-type(1)"
        ).css({
          transform: "rotate(-45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(7)>div>div:nth-of-type(2)>div:nth-of-type(2)"
        ).css({
          transform: "rotate(45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(7)>div:nth-of-type(2)"
        ).slideDown(500);
        flagFooter = false;
      } else {
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(7)>div>div:nth-of-type(2)>div:nth-of-type(1)"
        ).css({
          transform: "rotate(45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(7)>div>div:nth-of-type(2)>div:nth-of-type(2)"
        ).css({
          transform: "rotate(-45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(7)>div:nth-of-type(2)"
        ).slideUp(200);
        flagFooter = true;
      }
    }
  );
}
{
  let flagFooter = true;
  $("div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(8)").on(
    "click",
    function () {
      if (flagFooter == true) {
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(8)>div>div:nth-of-type(2)>div:nth-of-type(1)"
        ).css({
          transform: "rotate(-45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(8)>div>div:nth-of-type(2)>div:nth-of-type(2)"
        ).css({
          transform: "rotate(45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(8)>div:nth-of-type(2)"
        ).slideDown(500);
        flagFooter = false;
      } else {
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(8)>div>div:nth-of-type(2)>div:nth-of-type(1)"
        ).css({
          transform: "rotate(45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(8)>div>div:nth-of-type(2)>div:nth-of-type(2)"
        ).css({
          transform: "rotate(-45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(8)>div:nth-of-type(2)"
        ).slideUp(200);
        flagFooter = true;
      }
    }
  );
}
{
  let flagFooter = true;
  $("div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(9)").on(
    "click",
    function () {
      if (flagFooter == true) {
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(9)>div>div:nth-of-type(2)>div:nth-of-type(1)"
        ).css({
          transform: "rotate(-45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(9)>div>div:nth-of-type(2)>div:nth-of-type(2)"
        ).css({
          transform: "rotate(45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(9)>div:nth-of-type(2)"
        ).slideDown(500);
        flagFooter = false;
      } else {
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(9)>div>div:nth-of-type(2)>div:nth-of-type(1)"
        ).css({
          transform: "rotate(45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(9)>div>div:nth-of-type(2)>div:nth-of-type(2)"
        ).css({
          transform: "rotate(-45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(9)>div:nth-of-type(2)"
        ).slideUp(200);
        flagFooter = true;
      }
    }
  );
}
{
  let flagFooter = true;
  $("div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(10)").on(
    "click",
    function () {
      if (flagFooter == true) {
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(10)>div>div:nth-of-type(2)>div:nth-of-type(1)"
        ).css({
          transform: "rotate(-45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(10)>div>div:nth-of-type(2)>div:nth-of-type(2)"
        ).css({
          transform: "rotate(45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(10)>div:nth-of-type(2)"
        ).slideDown(500);
        flagFooter = false;
      } else {
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(10)>div>div:nth-of-type(2)>div:nth-of-type(1)"
        ).css({
          transform: "rotate(45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(10)>div>div:nth-of-type(2)>div:nth-of-type(2)"
        ).css({
          transform: "rotate(-45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(10)>div:nth-of-type(2)"
        ).slideUp(200);
        flagFooter = true;
      }
    }
  );
}
{
  let flagFooter = true;
  $("div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(11)").on(
    "click",
    function () {
      if (flagFooter == true) {
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(11)>div>div:nth-of-type(2)>div:nth-of-type(1)"
        ).css({
          transform: "rotate(-45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(11)>div>div:nth-of-type(2)>div:nth-of-type(2)"
        ).css({
          transform: "rotate(45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(11)>div:nth-of-type(2)"
        ).slideDown(500);
        flagFooter = false;
      } else {
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(11)>div>div:nth-of-type(2)>div:nth-of-type(1)"
        ).css({
          transform: "rotate(45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(11)>div>div:nth-of-type(2)>div:nth-of-type(2)"
        ).css({
          transform: "rotate(-45deg)",
          transition: "700ms",
        });
        $(
          "div.footer-sm>div:nth-of-type(2)>ul>li:nth-of-type(11)>div:nth-of-type(2)"
        ).slideUp(200);
        flagFooter = true;
      }
    }
  );
}
////////////////////////////////////////////////////////
//scroll sensitive
$(document).on("scroll", function () {
  let st = $(this).scrollTop();
  console.log(st);
  if ((st >= 9000) & (st <= 9200)) {
    $("div.studio-xl>div:nth-of-type(2)").css({
      backgroundPosition: "center",
    });
  }
   else if ((st >= 8700) & (st <= 9000)) {
    $("div.studio-lg>div:nth-of-type(2)").css({
      backgroundPosition: "center",
    });
  } else if ((st >= 7200) & (st <= 7500)) {
    $("div.studio-md>div:nth-of-type(2)").css({
      backgroundPosition: "center",
    });
  } else if ((st >= 10000) & (st <= 10200)) {
    $("div.studio-sm>div:nth-of-type(2)").css({
      backgroundPosition: "center",
    });
  } 
  else if ((st >= 13000) & (st <= 13500)) {
    $("div.studio-xs>div:nth-of-type(2)").css({
      backgroundPosition: "center",
    });
  }
});
/////////////////////////////////////////////////
// when page is ready
$(document).ready(function(){
  $("div.off3m").css({
    backgroundColor:"#333333",
    transition:"all 700ms ease-in-out 500ms"
  })
})
