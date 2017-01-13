$(function () {
  $(".menu li a:has(img)").on("mouseover focus",function () {
    var ts = $(this);
    var gnb = ts.next();
    var visgnb = ts.closest(".menu").find("li ul:visible");
    if(!gnb.is(":animated")) {
      visgnb.slideUp(500);
      gnb.stop().slideDown(500);
    }
  })
  $(".gnb1, .gnb2").on("mouseleave blur",function () {
    $(this).slideUp(500);
  })
})
