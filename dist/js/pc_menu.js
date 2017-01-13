$(function () {
  $(".menu li a").on("mouseover focus",function (e) {
    e.preventDefault();
    var ts = $(this);
    var gnb = ts.next();
    gnb.slideDown();
    $(gnb).on("mouseleave blur",function () {
      gnb.slideUp();
    })
  })  
})
