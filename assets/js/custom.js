window.addEventListener("load", (function() {
    const ko = document.getElementsByClassName("ko");
    const en = document.getElementsByClassName("en");
    const koreanSwitch = document.getElementById("koreanSwitch");
    const militaryRate = document.getElementById("military_rate");
    const time_span = document.getElementById("current-local-time");

    // const rank_span_ko = document.getElementById("rank-ko");
    // const rank_span_en = document.getElementById("rank-en");
    // const next_rank_span_ko = document.getElementById("next-rank-ko");
    // const next_rank_span_en = document.getElementById("next-rank-en");
    // const enlist_span = document.getElementById("enlist");
    // const discharge_span = document.getElementById("discharge");
    // const promotion_span = document.getElementById("promotion");
    // const enlist_date_span_ko = document.getElementById("enlist-date-ko");
    // const enlist_date_span_en = document.getElementById("enlist-date-en");
    // const discharge_date_span_ko = document.getElementById("discharge-date-ko");
    // const discharge_date_span_en = document.getElementById("discharge-date-en");
    // const promotion_date_span_ko = document.getElementById("promotion-date-ko");
    // const promotion_date_span_en = document.getElementById("promotion-date-en");
    // const promotion_div = document.getElementById("promotion-div");

    // const c = 1000 * 60 * 60 * 24;
    
    // const enlistDate = new Date(2022, 2, 28);
    // const dischargeDate = new Date(2023, 10, 27);
    // const promotions = [new Date(2022, 2, 28), new Date(2022, 5, 1), new Date(2022, 11, 1), new Date(2023, 5, 1), new Date(2023, 10, 27)];
    // const rank_ko = ['이병', '일병', '상병', '병장', '전역'];
    // const rank_en = ['Seaman Apprentice', 'Seaman', 'Petty Officer 3rd Class', 'Petty Officer 2nd Class', 'Discharge'];

    // /**
    //  * 양수값 +기호 표시
    //  * @param {number} num - 입력 수
    //  * @returns {string} 결과 문자열
    //  */
    // function display_plus(num) {
    //     return num >= 0 ? '+' + num : String(num);
    // }


    // /**
    //  * 군 복무일 계산 함수
    //  */
    // function militaryService() {
    //     var rate = ((new Date() - enlistDate)/(dischargeDate-enlistDate)*100).toFixed(7);
    //     rate = rate > 100 ? 100 : rate;

    //     militaryRate.innerHTML = `${rate}%`;
    //     militaryRate.style.width = `${rate}%`;
    //     militaryRate.setAttribute('aria-valuenow', rate);

    //     for (let i=0; i < promotions.length; i++) {
    //         if(new Date() <= promotions[i] || i == promotions.length-1) {
    //             rank_span_ko.innerHTML = rank_ko[i-1];
    //             rank_span_en.innerHTML = rank_en[i-1];
    //             next_rank_span_ko.innerHTML = rank_ko[i];
    //             next_rank_span_en.innerHTML = rank_en[i];
    //             enlist_span.innerHTML = display_plus(Math.ceil((new Date() - enlistDate)/c));
    //             discharge_span.innerHTML = display_plus(Math.floor((new Date() - dischargeDate)/c));
    //             promotion_span.innerHTML = display_plus(Math.floor((new Date() - promotions[i])/c));
    
    //             enlist_date_span_ko.innerHTML = enlistDate.toLocaleDateString('ko-KR', {year: 'numeric', month: 'long', day: 'numeric',});
    //             enlist_date_span_en.innerHTML = enlistDate.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric',});
    //             discharge_date_span_ko.innerHTML = dischargeDate.toLocaleDateString('ko-KR', {year: 'numeric', month: 'long', day: 'numeric',});
    //             discharge_date_span_en.innerHTML = dischargeDate.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric',});

    //             if(i < 4) {
    //                 promotion_date_span_ko.innerHTML = promotions[i].toLocaleDateString('ko-KR', {year: 'numeric', month: 'long', day: 'numeric',});
    //                 promotion_date_span_en.innerHTML = promotions[i].toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric',});
    //             } else {
    //                 promotion_div.style.display = 'none';
    //             }

    //             break;
    //         }
    //     }
    // }

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
    // militaryService();
    // setInterval(militaryService, 100);


    
    if (koreanSwitch) {
        initLang();
        koreanSwitch.addEventListener("change", (function() {
            resetLang()
        }))
    }

    function initLang() {
        // 기존에 선택한 언어가 있으면 선택된 언어로 초기화, 없으면 브라우저 언어로 초기화
        var userLanguage = navigator.language || navigator.userLanguage;
        
        if (localStorage.getItem("koreanSwitch") !== null) {
            var koreanSelected = localStorage.getItem("koreanSwitch") === "korean";
        } else {
            var koreanSelected = userLanguage.startsWith("ko");
        }
        
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