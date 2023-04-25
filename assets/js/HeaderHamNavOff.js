import $ from "jquery";

export const HeaderHamNavOff = function() {
  const headerNav = $("#js-header-nav");
  const hamLine = $(".p-header__ham-line");

  headerNav.removeClass("active");
  hamLine.removeClass("active");
}