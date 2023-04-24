import $ from "jquery";

export const HamToggle = function() {
  const line = $('.p-header__ham-line');
  const menu = $('.p-header__nav');
  line.toggleClass("active");
  menu.toggleClass("active");
} 