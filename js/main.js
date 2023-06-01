$(function () {

  // 메뉴
  $(".hamburger").click(function () {
    $(".menu").animate({
      top: "0"
    }, 500);
    $(".hamburger").hide();
    $(".cross").show();
  });

  $(".close").click(function () {
    $(".menu").animate({
      top: "-100%"
    }, 600);
    $(".hamburger").show();
  });






  // pc 메뉴
  $(".pcmenu").stop().hide();

  $("#pcmenubox > li > a").mouseenter(function () {
    $(".pcmenu").stop().slideDown("300");
    $(".pcmenu").css("background", "#fff");
    $("#pcmainmenu li a").css("color", "#000");
    $(".pctoplogo img").attr("src", "miumiuicon/logo_bk.png");
    $(".pctopbag img").attr("src", "miumiuicon/bag_bk.png");
    $(".pctopsearch img").attr("src", "miumiuicon/search_bk.png");
  });
  $(".pcmenu").mouseleave(function () {
    $(".pcmenu").stop().slideUp(300);
    $(".pcheader").stop().show();
    $("#pcmainmenu li a").css("color", "#fff");
    $(".pctoplogo img").attr("src", "miumiuicon/logo_white.png");
    $(".pctopbag img").attr("src", "miumiuicon/bag_white.png");
    $(".pctopsearch img").attr("src", "miumiuicon/search_white.png");
  });




  //  컬렉션 메뉴 li
  $(".accordion-toggle>a").click(function () {
    $(".collectbox").animate({
      top: "0"
    }, 500);
  });

  $(".close").click(function () {
    $(".menu").animate({
      top: "-100%"
    }, 600);
    $(".hamburger").show();
  });


  // sub 메뉴 x
  $(".accordion-content img").click(function () {
    $(".collectbox").animate({
      top: "-100%"
    }, 600);
    $(".newbox").animate({
      top: "-100%"
    }, 600);
    $(".bagbox").animate({
      top: "-100%"
    }, 600);
  });


  // 신상품 메뉴 li
  $(".accordion-toggle1>a").click(function () {
    $(".newbox").animate({
      top: "0"
    }, 500);
  });

  // 가방 메뉴 li
  $(".accordion-toggle2>a").click(function () {
    $(".bagbox").animate({
      top: "0"
    }, 500);
  });




  // 로고 누르면 스크롤
  $(".toplogo").click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });
  // pc 로고 누르면 스크롤
  $(".pctoplogo").click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });



  // 검색창 화면
  $(".topsearch").click(function () {
    $(".search-model").stop().fadeIn(400);
  });
// pc 검색창
  $(".pctopsearch").click(function () {
    $(".search-model").stop().fadeIn(400);
  });

  $(".search-close-switch").click(function () {
    $(".search-model").stop().fadeOut(400, function () {
      $("#search-input").val('');
    });
  });


  // login 화면
  $(".topbag").click(function () {
    $(".login-model").stop().fadeIn(400);
  });

  $(".botmenu li a").click(function () {
    $(".login-model").stop().fadeIn(400);
  });

  $(".login-close-switch").click(function () {
    $(".login-model").stop().fadeOut(400, function () {
      $(".login-input").val('');
    });
  });

  // join 화면
  $(".btn_b").click(function () {
    $(".join-model").stop().fadeIn(400);
  });

  $(".join-close-switch").click(function () {
    $(".join-model").stop().fadeOut(400, function () {
      $(".join-input").val('');
    });
  });

  // pcjoin 화면
  $(".pcbtn_b").click(function () {
    $(".pcjoin-model").stop().fadeIn(400);
  });

  $(".pcjoin-close-switch").click(function () {
    $(".pcjoin-model").stop().fadeOut(400, function () {
      $(".pcjoin-input").val('');
    });
  });

  // pclogin 화면
  $(".pctopbag").click(function () {
    $(".pclogin-model").stop().fadeIn(400);
  });

  $(".pclogin-close-switch").click(function () {
    $(".pclogin-model").stop().fadeOut(400, function () {
      $(".pclogin-input").val('');
    });
  });



  // 화살표 누르면 내려감
  $("a[href*=#]").click(function (e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top
    }, 500, "linear");
  });




  // 스크롤 color

  const toTop = document.querySelector(".top")
  const toTop1 = document.querySelector(".toplogo img")
  const toTop2 = document.querySelector(".topbag img")
  const toTop3 = document.querySelector(".topsearch img")
  const toTop4 = document.querySelector("#contactbtn img")
  const toTop5 = document.querySelector(".hamburger")
  // pc
  const toTop6 = document.querySelector("#pcmenubox li a")
  const toTop7 = document.querySelector(".pcheader_hea1")
  const toTop8 = document.querySelector(".pctoplogo img")
  const toTop9 = document.querySelector(".pctopbag img")
  const toTop10 = document.querySelector(".pctopsearch img")



  window.addEventListener("scroll", function () {

    if (this.window.scrollY > 100) {
      toTop.classList.add("show")
      $(".top").css("background", "#fff");
      toTop1.classList.add("show")
      $(".toplogo img").attr("src", "miumiuicon/logo_bk.png");
      toTop2.classList.add("show")
      $(".topbag img").attr("src", "miumiuicon/bag_bk.png");
      toTop3.classList.add("show")
      $(".topsearch img").attr("src", "miumiuicon/search_bk.png");
      toTop4.classList.add("show")
      $("#contactbtn img").attr("src", "miumiuicon/contact.png");
      toTop5.classList.add("show")
      $(".hamburger").css("color", "#000");
      // pc
      toTop6.classList.add("show")
      $("#pcmainmenu li a").css("color", "#000");
      toTop7.classList.add("show")
      $(".pcheader_hea1").css("background", "#fff");
      toTop8.classList.add("show")
      $(".pctoplogo img").attr("src", "miumiuicon/logo_bk.png");
      toTop9.classList.add("show")
      $(".pctopbag img").attr("src", "miumiuicon/bag_bk.png");
      toTop10.classList.add("show")
      $(".pctopsearch img").attr("src", "miumiuicon/search_bk.png");


    } else {
      toTop.classList.remove("show")
      $(".top").css("background", "none");
      toTop1.classList.remove("show")
      $(".toplogo img").attr("src", "miumiuicon/logo_white.png");
      toTop2.classList.remove("show")
      $(".topbag img").attr("src", "miumiuicon/bag_white.png");
      toTop3.classList.remove("show")
      $(".topsearch img").attr("src", "miumiuicon/search_white.png");;
      toTop4.classList.remove("show")
      $("#contactbtn img").attr("src", "miumiuicon/contact_white.png");;
      toTop5.classList.remove("show")
      $(".hamburger").css("color", "#fff");
      // pc
      toTop6.classList.remove("show")
      $("#pcmainmenu li a").css("color", "#fff");
      toTop7.classList.remove("show")
      $(".pcheader_hea1").css("background", "none");
      toTop8.classList.remove("show")
      $(".pctoplogo img").attr("src", "miumiuicon/logo_white.png");
      toTop9.classList.remove("show")
      $(".pctopbag img").attr("src", "miumiuicon/bag_white.png");
      toTop10.classList.remove("show")
      $(".pctopsearch img").attr("src", "miumiuicon/search_white.png");
    }
  });




  // aos
  AOS.init({
    duration: 1000
  });




  // 모바일 아티클
  $(".swiper-wrapper").slick();

  //테블릿 아티클
  $(".swiper-wrapper_t").slick({
    autoplay: true,
    slidesToShow: 2,
    arrows: false
  });




  // footer top li

  $(".footerlist > li").click(function () {
    if ($(this).next().is(":visible")) {
      $(this).next().stop().slideUp(500);
      $(this).removeClass("active-tab");
      $(this).find("a").removeClass("active");
    } else {
      $(".menu-submenu").stop().slideUp(500);
      $(this).next().stop().slideDown(500);
      $(".menu-list > li").removeClass("active");
      $(this).find("a").addClass("active");
    }
  });


  // 문의 창
  $("#contactbtn").click(function () {
    $(".contactbox").stop().fadeIn(400);
    $("#contactbtn").stop().fadeOut(400);
  });

  $(".ct_header a img").click(function () {
    $("#contactbtn").stop().fadeIn(400);
    $(".contactbox").stop().fadeOut(400, function () {
    });
  });


  // 회사소개 누르면 아이콘 색 바뀜
  $(".accordion-toggle1-1").click(function () {
    $(".accordion-toggle a img").attr("src", "miumiuicon/footertop_white.png")
    $(this).find("img").attr("src", "miumiuicon/footertop_bk.png")
  });
  $(".accordion-toggle1-2").click(function () {
    $(".accordion-toggle a img").attr("src", "miumiuicon/footertop_white.png")
    $(this).find("img").attr("src", "miumiuicon/footertop_bk.png")
  });
  $(".accordion-toggle1-3").click(function () {
    $(".accordion-toggle a img").attr("src", "miumiuicon/footertop_white.png")
    $(this).find("img").attr("src", "miumiuicon/footertop_bk.png")
  });
  $(".accordion-toggle1-4").click(function () {
    $(".accordion-toggle a img").attr("src", "miumiuicon/footertop_white.png")
    $(this).find("img").attr("src", "miumiuicon/footertop_bk.png")
  });
});