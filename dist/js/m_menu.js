$(function () {
  var init = true;
  $(".menu_box").on("click",function (e) {
    e.preventDefault();
    if (init) {
      $(".menu_box_wrap").fadeIn();
      init = false;
    }else {
      $(".menu_box_wrap").fadeOut();
      init = true;
    }
  })
})
