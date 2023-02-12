// JavaScript Document
$(document).ready(function(){
    $('.callback').fancybox({
        padding:0
    });
    $('.order-btn').click(function(){
        var prod_name = $(this).parent().find('.title').text();
        var prod_color = $(this).parent().find('.selected').attr('data');
        $.fancybox({
            'href': '#order-form',
            'padding': 0,
            'onStart': function(){
                $('#order-form').find('.prod-name').text(prod_name);
                $('#order-form').find('.prod-color').text(prod_color);
                $('#order-form').find('input[name=prod-name]').val(prod_name);
                $('#order-form').find('input[name=prod-color]').val(prod_color);
                $("#order-form form").submit(function(event){
                    isFormValid = true;
                    $(this).find(".required").each(function(){
                        if ($.trim($(this).val()).length == 0){
                            $(this).addClass("highlight");
                            isFormValid = false;
                            $(this).val($(this)[0].title);
                        }
                        else {
                            $(this).parent().removeClass("highlight");
                        }
                    });

                    var mAlert = "Заполните, пожалуйста, обязательные поля";

                    isPhoneValid = true;

                    var phone = $(this).find('[name="phone"]').val();
                    if (!phone.match(/^\+?[\d()\-\s]*\d+\s*$/) && phone) {
                        if (isFormValid) {
                            mAlert = "\nВведите правильный номер телефона";
                        }
                        else {
                            mAlert += "\nВведите правильный номер телефона";
                        }

                        isPhoneValid = false;
                    }

                    if (!isFormValid || !isPhoneValid) {
                        alert(mAlert);
                        isFormValid = false;
                        return isFormValid;
                    }
                    else {
                        $(this).parent().fadeOut('slow', function(){
                            $("#order-form").find('.thx').fadeIn('slow', function(){

                            });
                        });
                        event = event || window.event;
                        var data = $(this).serialize();
                        var answer = $.post("contact.php", data).done(function(msg){});
                    }
                    return false;
                });
            }
        });
        return false;
    });

    $('.image .color a').click(function(){
        $('.image .color a').removeClass('selected');
        $(this).addClass('selected');

        if ($(this).hasClass('red')){
            $(this).parent().parent().find('img.white').fadeOut();
            $(this).parent().parent().find('img.red').fadeIn();
        }else{
            $(this).parent().parent().find('img.white').fadeIn();
            $(this).parent().parent().find('img.red').fadeOut();
        }
        return false;
    });

    $('input[type=checkbox]').styler();


    $('.go-to-catalog').click(function(){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });

    //$(".form-1 form, .form-2 form, .callback-form form").submit(function(event){
    //    isFormValid = true;
    //    $(this).find(".required").each(function(){
    //        if ($.trim($(this).val()).length == 0){
    //            $(this).addClass("highlight");
    //            isFormValid = false;
    //            $(this).val($(this)[0].title);
    //        }
    //        else {
    //            $(this).parent().fadeOut('slow', function(){
    //                $(this).parent().find('.thx1').fadeIn('slow', function(){
    //
    //                });
    //            });
    //            event = event || window.event;
    //            var data = $(this).serialize();
    //            var answer = $.post("send.php", data).done(function(msg){});
    //        }
    //        return false;
    //    });
    //
    //
    //    var mAlert = "Заполните, пожалуйста, обязательные поля";
    //
    //    isPhoneValid = true;
    //
    //    var phone = $(this).find('[name="phone"]').val();
    //    if (!phone.match(/^\+?[\d()\-\s]*\d+\s*$/) && phone) {
    //        if (isFormValid) {
    //            mAlert = "\nВведите правильный номер телефона";
    //        }
    //        else {
    //            mAlert += "\nВведите правильный номер телефона";
    //        }
    //
    //        isPhoneValid = false;
    //    }
    //
    //    if (!isFormValid || !isPhoneValid) {
    //        alert(mAlert);
    //        isFormValid = false;
    //        return isFormValid;
    //    }
    //    else {
    //        event = event || window.event;
    //        var data = $(this).serialize();
    //        var answer = $.post("contact.php", data).done(function(msg){});
    //    }
    //    return false;
    //});

    $(window).bind('scroll',function(e){
        parallaxScroll();
    });

    function parallaxScroll(){
        var scrolled = $(window).scrollTop();
        $('.par1').css('top',(50+(scrolled*.73))+'px');
        $('.par2').css('top',(450-(scrolled*.2))+'px');
        $('.par3').css('top',(200-(scrolled*.4))+'px');
        $('.par4').css('top',(600+(scrolled*.4))+'px');
        $('.par5').css('top',(375+(scrolled*.7))+'px');
        $('.par6').css('top',(800-(scrolled*.5))+'px');
        $('.par7').css('top',(-1000+(scrolled*.5))+'px');
        $('.par8').css('top',(-100+(scrolled*.2))+'px');
        $('.par9').css('top',(1300-(scrolled*.1))+'px');
        $('.par10').css('top',(3000-(scrolled*.675))+'px');
        $('.par11').css('top',(1500-(scrolled*.12))+'px');
    }

});

function pend(name) {
    $.post( 'send.php',  $('#'+name).serialize(), function(callback) {
        alert(callback);
    });
}