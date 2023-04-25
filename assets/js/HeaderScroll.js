import $ from "jquery";

export const HeaderScroll = function() {

  let headerHight = 40;

  const href = $(this).attr("href");
  const target = $(href == "#" || href == "" ? "html" : href);
  const position = target.offset().top - headerHight;

  $("html, body").animate({ scrollTop: position }, 200, "swing");
  return false;
}