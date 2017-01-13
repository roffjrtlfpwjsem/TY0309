tap_1 = function (e) {
  e.preventDefault();
  $(this).attr("class","on")
  $(".tap2, .end, .tip2_wrap").hide()
  $(".tap1, .event_box, .tip1_wrap").show()
  $(".sub_tit li a:last").attr("class","")
  if ($(".more a").text() == "숨기기더보기" || $(".more a").text() == "더보기더보기") {
    $(".more a").text("더보기");
  }else {
    $(".more a").text("숨기기");
  }
}
tap_2 = function (e) {
  e.preventDefault();
  $(this).attr("class","on")
  $(".tap2, .end, .tip2_wrap").show()
  $(".tap1, .event_box, .tip1_wrap").hide()
  $(".sub_tit li a:first").attr("class","")
  if ($(".more a").text() == "더보기더보기") {
    $(".more a").text("더보기");
  }else {
    $(".more a").text("숨기기");
  }
}
