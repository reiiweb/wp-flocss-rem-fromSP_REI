// ローディング判定
jQuery(function ($) {
  jQuery(window).on("load", function () {
    jQuery("body").attr("data-loading", "true");
  });

  jQuery(function () {
    // ハンバーガーメニュー
    $("#js-hamburger").click(function () {
      $("body").toggleClass("is-drawerActive");
      if ($(this).attr("aria-expanded") == "false") {
        $(this).attr("aria-expanded", "true");
        $("#js-sp-nav").attr("aria-hidden", "false");
      } else {
        $(this).attr("aria-expanded", "false");
        $("#js-sp-nav").attr("aria-hidden", "true");
      }
    });

    // デフォルト/////////////////////////////////////////

    // スクロール判定
    jQuery(window).on("scroll", function () {
      if (100 < jQuery(this).scrollTop()) {
        jQuery("body").attr("data-scroll", "true");
      } else {
        jQuery("body").attr("data-scroll", "false");
      }
    });

    /* ドロワー */
    jQuery(".js-drawer").on("click", function (e) {
      e.preventDefault();
      let targetClass = jQuery(this).attr("data-target");
      jQuery("." + targetClass).toggleClass("is-checked");
      return false;
    });

    /* スムーススクロール */
    jQuery('a[href^="#"]').click(function () {
      let header = jQuery(".js-header").height();
      let speed = 300;
      let id = jQuery(this).attr("href");
      let target = jQuery("#" == id ? "html" : id);
      let position = jQuery(target).offset().top - header;
      if ("fixed" !== jQuery("#header").css("position")) {
        position = jQuery(target).offset().top;
      }
      if (0 > position) {
        position = 0;
      }
      jQuery("html, body").animate(
        {
          scrollTop: position,
        },
        speed
      );
      return false;
    });

    /* 電話リンク */
    let ua = navigator.userAgent;
    if (ua.indexOf("iPhone") < 0 && ua.indexOf("Android") < 0) {
      jQuery('a[href^="tel:"]')
        .css("cursor", "default")
        .on("click", function (e) {
          e.preventDefault();
        });
    }
  });
});
