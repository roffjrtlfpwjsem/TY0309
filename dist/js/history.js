var sctBoolean = false;
var oldScroll = null;
position = function () {
    var ts = $(this);
    var wraptop = $(".left_year").offset()
    var windowscoll = $(this).scrollTop()
    if(oldScroll) {
      if(windowscoll<281 && windowscoll < oldScroll && sctBoolean) {
        sctBoolean = !sctBoolean;
        $(".left_year").css({
          position:"absolute",
          "padding-top":90
        });
      } else if(!sctBoolean) {
        sctBoolean = !sctBoolean;
      }
    }
    oldScroll = windowscoll;
    if (windowscoll>281) {
      $(".left_year").css({
        "position":"fixed",
        "padding-top":30+"px",
        "margin-left":-650+"px",
        "left":50+"%"
      });
    }else {
      $(".left_year").find(".on").removeClass();
      $(".left_year li a:first").attr("class","on");
    }
}
scroll_sch = function (e) {
  e.preventDefault();
  var ts = $(this);
  var wrap = $(".left_year")
  var dt = $(".history_main dt");
  var arr = [];
  var num = 2003
  var year = ts.text();
  for (var i = 0; i < dt.length; i++) {
    arr.push(dt.eq(i).offset())
    if(year==num+i){
      $("html, body").animate({scrollTop: arr[i].top-100+"px"}, 1000);
    }
  }
  wrap.animate({"padding-top":30}).css({"position":"fixed"})
  ts.closest(".left_year").find(".on").removeClass();
  $(this).attr("class","on");
}
