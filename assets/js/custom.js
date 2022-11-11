window.addEventListener("load", (function() {
    var ko = document.getElementsByClassName("ko");
    var en = document.getElementsByClassName("en");
    var koreanSwitch = document.getElementById("koreanSwitch");

    var time_span = document.getElementById("current-local-time");
    function localTime() {
        // 1. 현재 시간(Locale)
        const curr = new Date();

        // 2. UTC 시간 계산
        const utc = curr.getTime() + (curr.getTimezoneOffset() * 60 * 1000);

        // 3. UTC to KST (UTC + 9시간)
        const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
        const kr_curr = new Date(utc + (KR_TIME_DIFF));
        var diff = 9 + curr.getTimezoneOffset() / 60;
        var local_time_str = kr_curr.toLocaleTimeString(koreanSwitch.checked? 'ko-KR':'en-US', {hour: '2-digit', minute:'2-digit'});
        var time_diff_str = (koreanSwitch.checked ? ' (시차: ':' (Time difference: ') + diff + ')'

        time_span.innerHTML = local_time_str + time_diff_str;
    }
    localTime();
    setInterval(localTime, 1000);


    if (koreanSwitch) {
        initLang();
        koreanSwitch.addEventListener("change", (function() {
            resetLang()
        }))
    }

    function initLang() {
        var koreanSelected = localStorage.getItem("koreanSwitch") !== null && localStorage.getItem("koreanSwitch") === "korean";
        koreanSwitch.checked = koreanSelected;
        resetLang()
    }

    function resetLang() {
        localTime();
        if (koreanSwitch.checked) {
            document.querySelector("html").setAttribute('lang', 'ko');
            document.querySelector("title").text = "박정섭";
            for (var i = 0; i < en.length; i++) {
                en[i].style.display = "none";
            }
            for (var i = 0; i < ko.length; i++) {
                ko[i].style.display = "inline-block";
            }
            localStorage.setItem("koreanSwitch", "korean")
        } else {
            document.querySelector("html").setAttribute('lang', 'en');
            document.querySelector("title").text = "Jeongseop Park";
            for (var i = 0; i < en.length; i++) {
                en[i].style.display = "inline-block"; 
            }
            for (var i = 0; i < ko.length; i++) {
                ko[i].style.display = "none"; 
            }
            localStorage.removeItem("koreanSwitch")
        }
    }
    
}));