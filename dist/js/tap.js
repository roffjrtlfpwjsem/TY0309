tap_2 = function (e) {
  e.preventDefault();
  $(this).attr("class","on")
  $(".tap2, .end, .tip2_wrap").show()
  $(".tap1, .event_box, .tip1_wrap").hide()
  $(".sub_tit li a:first").attr("class","")
}
tap_1 = function (e) {
  e.preventDefault();
  $(this).attr("class","on")
  $(".tap2, .end, .tip2_wrap").hide()
  $(".tap1, .event_box, .tip1_wrap").show()
  $(".sub_tit li a:last").attr("class","")
}
