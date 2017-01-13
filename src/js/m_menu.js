$(function () {
  var init = true;
  var wrap = $(".menu_box_wrap");
  $(window).on("resize",function(){
    // console.log($(window).width());
    var b = $("body");
    var w = $(window).width();
    var m_menu = $(".menu_box_wrap")
    if (w >= 1024) {
      wrap.fadeOut("fast")
      init = true;
      b.attr("class","");
      b.addClass("pc");
    }else if (w >= 860) {
      b.attr("class","");
      b.addClass("tablet");
    } else {
      b.attr("class","");
      b.addClass("mobile");
    }
  });
  $(".menu_box").on("click",function (e) {
    e.preventDefault();
    if (init) {
      wrap.fadeIn()
      init = false;
    }else {
      wrap.fadeOut()
      init = true;
    }
  })
})
