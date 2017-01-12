step3next = function (e) {
  function regMessage(m1,m2) {
    alert(m1);
    m2.focus();
  }
  e.preventDefault();

  var user_name = $("#user_name");
  var user_phone = $("#user_phone");
  var user_id = $("#user_id");
  var user_pw = $("#user_pw");
  var user_pw_r = $("#user_pw_r");

  var reg_name = /^[가-힣]{2,5}$/g;
  var reg_phone = /\d{3,4}\d{4}$/g;
  var reg_id = /^[a-z]{1}\w{4,11}$/g;
  var reg_pw = /^\w{7,11}$/g;

  var result_name = reg_name.exec(user_name.val());
  var result_phone = reg_phone.exec(user_phone.val());
  var result_id = reg_id.exec(user_id.val());
  var result_pw = reg_pw.exec(user_pw.val());

  if (result_name == null) {
    regMessage("이름이 형식에맞지 않습니다.",user_name);
    return false;
  }
  if (result_phone == null) {
    regMessage("핸드폰 번호가 형식에 맞지 않습니다.",user_phone);
    return false;
  }
  if (result_id == null) {
    regMessage("아이디가 형식에 맞지 않습니다.(5~12자)",user_id);
    return false;
  }
  if (result_pw == null) {
    regMessage("비밀번호가 형식에 맞지 않습니다.",user_pw);
    return false;
  }
  if (user_pw_r.val() != user_pw.val()) {
    regMessage("비밀번호가 일치하지않습니다",user_pw_r);
    return false;
  }
  // $(this).closest(".join").submit();
  var on = $(".join_ing li.on");
  $(".step3").hide()
  on.next().attr("class","on");
  on.removeClass("on")
  $(".step4").show()
}

step2next = function (e) {
  e.preventDefault();
  var ckbox = $("#join_ck_1:checked");
  var focus = $(".sub_ck_box");
  if (ckbox.length == 0) {
    alert('서비스 이용약관동의 체크는 필수입니다.');
    $("#join_ck_1+label").focus();
    return false;
  }
  var on = $(".join_ing li.on");
  $(".step2").hide()
  on.next().attr("class","on");
  on.removeClass("on")
  $(".step3").show()
}

step1next = function (e) {
  e.preventDefault();
  alert("인증완료");
  var on = $(".join_ing li.on");
  $(".step1").hide()
  on.next().attr("class","on");
  on.removeClass("on")
  $(".step2").show()
}

allck = function () {
  var m = $(".sub_ck_box").find(":checkbox");
  if($(this).prop("checked")){
      m.prop("checked",true);
  }else {
      m.prop("checked",false);
  }
}
