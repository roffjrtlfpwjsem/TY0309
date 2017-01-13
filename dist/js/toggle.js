more = function (e) {
  e.preventDefault();
  $(".hide").slideToggle();
  if ($(" a",this).text() == "더보기") {
    $(" a",this).text("숨기기");
  }else {
    $(" a",this).text("더보기");
  }
}
