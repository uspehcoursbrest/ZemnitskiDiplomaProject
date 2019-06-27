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

// window.addEventListener('DOMContentLoaded', function () {
//     var slider = document.querySelectorAll('#slaider .slide');
//     var currentSlide = 0;
//     var slideInterval = setInterval(nextSlide, 7000);
//
//     function nextSlide() {
//         slider[currentSlide].className = 'slide';
//         currentSlide = (currentSlide + 1) % slider.length;
//         slider[currentSlide].className = 'slide showing';
//     }
// });

$(document).ready(function () {
    var percent = $('.positionB3 .percent');
    percent.siblings().removeClass('select');
    percent.on('click', function () {
        if (percent.siblings().hasClass('select'))
            percent.siblings().removeClass('select');
        $(this).addClass('select');
    });

    var marker = $('.strategy .marker button');
    marker.removeClass('activ');
    marker.on('click', function () {
        if (marker.hasClass('activ')) {
            marker.removeClass('activ');
            $(this).addClass('activ');
        } else {
            $(this).addClass('activ');
        }

    });

    var DepositItem = $('.ContentDeposit .positionItems .activ');
    DepositItem.siblings().removeClass('focus');
    DepositItem.on('click', function () {
        if (DepositItem.hasClass('focus')) {
            DepositItem.removeClass('focus');
            $(this).addClass('focus');
        } else {
            $(this).addClass('focus');
        }
    });

    $('select').selectric({
        onInit: function () {
            var valRU = $('li[data-index = "0"]');
            valRU.html('<span class="icon-russia"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span>' + '<span>RU</span>');
            // labelBuilder: valRU,
        },
    });
    $('#rangeSum').ionRangeSlider({
        // grid: true,
        min: 10,
        max: 100000,
        from:25000,
        step:10,
        // grid_num: 16,
        postfix: " $",

    });
    $('.marquee').marquee({
        //duration in milliseconds of the marquee
        duration: 15000,
        gap: 20,
        startVisible: true,
        duplicated: true
    });
});