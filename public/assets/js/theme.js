/* 공용 테마(다크/라이트) 토글 — 이력서·블로그 공유.
   localStorage key 'darkSwitch'='dark' 를 그대로 사용해 두 페이지가 설정을 공유한다. */
(function () {
  function setTheme(dark) {
    if (dark) {
      document.body.setAttribute("data-theme", "dark");
      localStorage.setItem("darkSwitch", "dark");
    } else {
      document.body.removeAttribute("data-theme");
      localStorage.removeItem("darkSwitch");
    }
    updateIcon(dark);
  }

  function updateIcon(dark) {
    var btn = document.getElementById("themeToggle");
    if (!btn) return;
    var icon = btn.querySelector("i");
    if (icon) icon.className = dark ? "fas fa-sun" : "fas fa-moon";
    btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  }

  function isDark() {
    return document.body.getAttribute("data-theme") === "dark";
  }

  window.addEventListener("load", function () {
    setTheme(localStorage.getItem("darkSwitch") === "dark");
    var btn = document.getElementById("themeToggle");
    if (btn) {
      btn.addEventListener("click", function () {
        setTheme(!isDark());
      });
    }
  });
})();
