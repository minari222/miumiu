$(function () {

  // 메뉴
  $(".hamburger").click(function () {
    // $("#contactbtn").attr("src", "miumiuicon/contact.png")
    $(".menu").animate({
      top: "0"
    }, 500);
    $(".hamburger").hide();
    $(".cross").show();
  });

  $(".close").click(function () {
    // $("#contactbtn").attr("src", "miumiuicon/contact_white.png")
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







  // 검색창 화면
  $(".topsearch").click(function () {
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

  $(".login-close-switch").click(function () {
    $(".login-model").stop().fadeOut(400, function () {
      $("#login-input").val('');
    });
  });

  // tablet login 화면
  $(".t_topbag").click(function () {
    $(".login-model").stop().fadeIn(400);
  });

  $(".login-close-switch").click(function () {
    $(".login-model").stop().fadeOut(400, function () {
      $("#login-input").val('');
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
  


  // 화살표 누르면 내려감
  $("a[href*=#]").click(function (e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top
    }, 500, "linear");
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