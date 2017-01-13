more = function (e) {
  e.preventDefault();
  $(".hide").slideToggle();
  if ($(this).text() == "더보기") {
    $(this).text("숨기기");
  }else {
    $(this).text("더보기");
  }
}
