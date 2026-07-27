/* 언어(한/영) 토글 + 현지 시간 — 이력서 전용.
   버튼(#langToggle)을 누르면 .ko/.en 요소를 전환한다. 버튼 라벨은 "전환 대상" 언어를 보여준다. */
window.addEventListener("load", function () {
  var ko = document.getElementsByClassName("ko");
  var en = document.getElementsByClassName("en");
  var langToggle = document.getElementById("langToggle");
  var time_span = document.getElementById("current-local-time");
  var currentKorean = false;

  function localTime() {
    if (!time_span) return;
    var curr = new Date();
    var utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;
    var KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    var kr_curr = new Date(utc + KR_TIME_DIFF);
    var diff = 9 + curr.getTimezoneOffset() / 60;
    var local_time_str = kr_curr.toLocaleTimeString(currentKorean ? "ko-KR" : "en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    var time_diff_str = (currentKorean ? " (시차: " : " (Time difference: ") + diff + ")";
    time_span.innerHTML = local_time_str + time_diff_str;
  }

  function updateLangLabel() {
    if (!langToggle) return;
    var t = langToggle.querySelector(".lang-target");
    if (t) t.textContent = currentKorean ? "EN" : "한국어";
  }

  function applyLang(korean) {
    currentKorean = korean;
    var i;
    if (korean) {
      document.querySelector("html").setAttribute("lang", "ko");
      document.querySelector("title").text = "박정섭";
      for (i = 0; i < en.length; i++) en[i].style.display = "none";
      for (i = 0; i < ko.length; i++) ko[i].style.display = "inline-block";
      localStorage.setItem("koreanSwitch", "korean");
    } else {
      document.querySelector("html").setAttribute("lang", "en");
      document.querySelector("title").text = "Jeongseop Park";
      for (i = 0; i < en.length; i++) en[i].style.display = "inline-block";
      for (i = 0; i < ko.length; i++) ko[i].style.display = "none";
      localStorage.removeItem("koreanSwitch");
    }
    updateLangLabel();
    localTime();
  }

  function initLang() {
    var userLanguage = navigator.language || navigator.userLanguage;
    var koreanSelected;
    if (localStorage.getItem("koreanSwitch") !== null) {
      koreanSelected = localStorage.getItem("koreanSwitch") === "korean";
    } else {
      koreanSelected = userLanguage.startsWith("ko");
    }
    applyLang(koreanSelected);
  }

  if (langToggle) {
    langToggle.addEventListener("click", function () {
      applyLang(!currentKorean);
    });
  }

  initLang();
  localTime();
  setInterval(localTime, 1000);
});
