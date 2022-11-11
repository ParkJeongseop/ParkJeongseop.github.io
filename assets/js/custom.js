window.addEventListener("load", (function() {
    var ko = document.getElementsByClassName("ko");
    var en = document.getElementsByClassName("en");
    var koreanSwitch = document.getElementById("koreanSwitch");

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