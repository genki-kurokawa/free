$(function () {
  // ハンバーガーメニュー開閉
  $(".hamburger").on("click", function () {
    toggleHamburger();
  });

  // ナビ内リンククリック時：メニューを閉じる
  $("#navi a").on("click", function () {
    toggleHamburger(false);
  });

  // inview発火（スクロールアニメーション）
  $(".inview-slide-left").on("inview", function (event, isInView) {
    if (isInView) $(this).addClass("slide-left");
  });
  $(".inview-slide-right").on("inview", function (event, isInView) {
    if (isInView) $(this).addClass("slide-right");
  });
  $(".inview-balloon").on("inview", function (event, isInView) {
    if (isInView) $(this).addClass("balloon");
  });
});

//-------------------------------------------
// 共通ハンバーガー処理
//-------------------------------------------
function toggleHamburger(forceClose) {
  const $btn = $(".hamburger");
  const $navi = $("#navi");

  // クラス付与
  if (forceClose === false) {
    $btn.removeClass("active");
    $navi.removeClass("active");
    $("body").css("overflow", "");
    $btn.attr("aria-expanded", "false");
    return;
  }

  $btn.toggleClass("active");
  const open = $btn.hasClass("active");
  $navi.toggleClass("active", open);
  $btn.attr("aria-expanded", open);
  $("body").css("overflow", open ? "hidden" : ""); // 背景スクロール防止
}