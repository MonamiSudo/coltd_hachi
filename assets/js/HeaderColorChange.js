import $ from "jquery";

export const HeaderColorChange = function() {
  const header = $(".p-header"); // ヘッダー
  const headerNav = $(".p-header__nav-link"); // ヘッダーのリンク
  const hamLine = $(".p-header__ham-line"); // ハンバーガーメニューのライン

  const sc = $(window).scrollTop(); // スクロール量
  const trigger = $("#js-cosme").offset().top; // 色を変更するポイントのy座標 
  const margin = 50; // スクロール量に加算する数値px

  if( sc + margin > trigger ) { // スクロール量がポイントを超えたらactiveクラスを付与
    header.addClass("active");
    headerNav.addClass("active");
    hamLine.addClass("change-black");
  } else {
    headerNav.removeClass("active");
    header.removeClass("active");
    hamLine.removeClass("change-black");
  }

}