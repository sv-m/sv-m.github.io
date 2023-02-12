$(document).ready(function () {
    new WOW().init();
    callback();
    scrollToTop();

    $(document).ready(function () {
        $('.responsive-slider').lightSlider({
            item: 4,
            //loop: false,
            slideMove: 1,
            speed: 600,
            auto:true,
            loop:true,
            slideMargin: 15,
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        item: 3,
                        slideMargin: 10
                    }
                },
                {
                    breakpoint: 620,
                    settings: {
                        item: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        item: 1
                    }
                }
            ],
            onSliderLoad: function () {
                $('.responsive-slider').removeClass('cS-hidden');
            }
        });
    });
});

function callback() {
    $('.js-callback-write').click(function () {
        $('.pop').add('.pop .writeback').fadeIn(500);
    });
    $('.js-callback-call').click(function () {
        $('.pop').add('.pop .callback').fadeIn(500);
    });
    $('.pop .close').click(function () {
        $(this).parent().hide();
        $(this).parent().parent().fadeOut(500);
    });
}

function pend() {
    $.post('mail.php', $('#contactf').serialize(), function (html) {alert(html)});
}

function pend2() {
    $.post('mail.php', $('#contactp').serialize(), function (html) {alert(html)});
}


function pendTo(name) {
    $.post( 'send.php', $('#'+name).serialize(), function(callback) {
        if (callback === "Мы свяжемся с вами в ближайшее время" || callback === "Сообщение отправлено, спасибо") {
            $('.popup3, .popup2, .popup ').hide();
            $('.thnk').show().delay(2000).fadeOut();
            ga('send', 'event', 'Forma1', 'Podtverdit'); yaCounter37443630.reachGoal('Forma1'); return true;
        } else {
            $('#'+name).addClass('impor');

            setTimeout(function(){
                $('#'+name).removeClass('impor')
            }, 2000);
        }
    });
}

function scrollToTop() {
    var btn = $('.back-to-top');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 700) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });
}