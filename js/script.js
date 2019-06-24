window.onload = function () {
    function clock() {
        var date = new Date(),
            day = date.getDate(),
            daysArr = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
            month = date.getMonth(),
            monthArr = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
            year = date.getFullYear(),
            hour = date.getHours(),
            min = date.getMinutes(),
            sec = date.getSeconds();

        if (day < 10) {
            day = "0" + day;
        }
        if (hour < 10) {
            hour = "0" + hour;
        }
        if (min < 10) {
            min = "0" + min;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }

        document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec + "";
        document.getElementById("date").innerHTML = day + " " + monthArr[month] + " " + year + " " + daysArr[date.getDay()];
    }

    var timer;

    function clockStart() {
        timer = setInterval(clock, 1000);
        clock();
    }

    clockStart();

};

window.addEventListener('DOMContentLoaded', function () {
    var slider = document.querySelectorAll('#slaider .slide');
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide, 7000);

    function nextSlide() {
        slider[currentSlide].className = 'slide';
        currentSlide = (currentSlide + 1) % slider.length;
        slider[currentSlide].className = 'slide showing';
    }
});

$(document).ready(function () {
    var percent = $('.positionB3 .percent');
    percent.siblings().removeClass('select');
    if (percent.click()) {
        // percent.addClass('select');
    }
});