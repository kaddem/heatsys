$(document).ready(function(){

  $('#owl-sertificate').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    navText:false,
    responsive:{
      0:{
          items:1
      },
      768:{
          items:3
      },
      1200:{
          items:5
      }
    }
  });

  $('#owl-reviews').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots:false,
    navText:false,
    responsive:{
      0:{
          items:1
      },
      768:{
          items:2
      },
      1200:{
          items:3
      }
    }
  });

    $('.menu-burger').on('click', function(e){
        e.preventDefault();
        $('.menu-back').show();
        $('.main-nav').slideDown(400);
    });
    $('.menu-back').on('click', function(e){
        e.preventDefault();
        $('.main-nav').slideUp(400);
        $('.menu-back').show();
    });
    $('.main-nav ul a').on('click', function(e){
      if ($(window).width() < 1200) {
        $('.main-nav').slideUp(400);
        $('.menu-back').show();
      };
    });

    // Плавный скролл по якорям
    function anchorScroll(boxAnchorLink){
        $(boxAnchorLink + ' a').on('click', function(e){
            e.preventDefault();
            var attr = $(this).attr('href').substring(1);
            var currentPosition = $(document).scrollTop();
            var idPosition = $('#'+attr).offset().top;
            var scrollTime = Math.abs(currentPosition - idPosition) / 3; // Math.abs - модуль числа.
            $('body,html').animate({'scrollTop':idPosition - 130},scrollTime);
        });
    };

    anchorScroll('#anchor-menu');

    // вызовы открытия форм в модальном окне по нажатию на кнопку
    $('#btn-recall').on('click', function(){
        $("#form_recall").css('display', 'inline-block');
        $("#form_recall").modal({
          fadeDuration: 200
        });
    });
    $('.promo__btn').on('click', function(){
        $("#form_calculate").css('display', 'inline-block');
        $("#form_calculate").modal({
          fadeDuration: 200
        });
    });
    $('.price__btn').on('click', function(){
        $("#form_price").css('display', 'inline-block');
        $("#form_price").modal({
          fadeDuration: 200
        });
    });
});
