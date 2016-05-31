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
        $("#form_consult").css('display', 'inline-block');
        $("#form_consult").modal({
          fadeDuration: 200
        });
    });
    $('.price__btn').on('click', function(){
        $("#form_price").css('display', 'inline-block');
        $("#form_price").modal({
          fadeDuration: 200
        });
        var square = $('.price__nav .active').text();
        var typePump = $(this).parents(".price__item").find('.price__name').text();
        // var typePump = $(this).parents(".price__item");
        var des = 'площадь: ' + square + 'м.кв. Вариант системы: ' + typePump;
        $('.form-des').val(des);
    });


    // типа табы на стоимости
    $('.price__twozerro').hide(0);
    $('.price__threezerro').hide(0);

    $('.nav__onezerro').on('click', function(e){
      e.preventDefault();
      $('.price').find('.table-row').hide(0);
      $('.price__onezerro').show(0);
      $('.price__nav-item a').removeClass('active');
      $(this).addClass('active');
    });
    $('.nav__twozerro').on('click', function(e){
      e.preventDefault();
      $('.price').find('.table-row').hide(0);
      $('.price__twozerro').show(0);
      $('.price__nav-item a').removeClass('active');
      $(this).addClass('active');
    });
    $('.nav__threezerro').on('click', function(e){
      e.preventDefault();
      $('.price').find('.table-row').hide(0);
      $('.price__threezerro').show(0);
      $('.price__nav-item a').removeClass('active');
      $(this).addClass('active');
    });

    //Типа табы на наших работах

    $('.services__description').hide(0);
    $('#heatsys').show(0);
    $('.gallery__block').hide(0);
    $('#img-heatsys').show(0);

    $('#link-boiler').on('click', function(e){
      e.preventDefault();
      $('.services__description').hide(0);
      $('#boiler').show(0);
      $('.gallery__block').hide(0);
      $('#img-boiler').show(0);
      $('.services__nav-item a').removeClass('active');
      $(this).addClass('active');
      var des = $(this).text();
      $('#form-services .form-des').val(des);
    });
    $('#link-heatsys').on('click', function(e){
      e.preventDefault();
      $('.services__description').hide(0);
      $('#heatsys').show(0);
      $('.gallery__block').hide(0);
      $('#img-heatsys').show(0);
      $('.services__nav-item a').removeClass('active');
      $(this).addClass('active');
      var des = $(this).text();
      $('#form-services .form-des').val(des);
    });
    $('#link-boilerbox').on('click', function(e){
      e.preventDefault();
      $('.services__description').hide(0);
      $('#boilerbox').show(0);
      $('.gallery__block').hide(0);
      $('#img-boilerbox').show(0);
      $('.services__nav-item a').removeClass('active');
      $(this).addClass('active');
      var des = $(this).text();
      $('#form-services .form-des').val(des);
    });
    $('#link-water').on('click', function(e){
      e.preventDefault();
      $('.services__description').hide(0);
      $('#water').show(0);
      $('.gallery__block').hide(0);
      $('#img-water').show(0);
      $('.services__nav-item a').removeClass('active');
      $(this).addClass('active');
      var des = $(this).text();
      $('#form-services .form-des').val(des);
    });
    $('#link-stock').on('click', function(e){
      e.preventDefault();
      $('.services__description').hide(0);
      $('#stock').show(0);
      $('.gallery__block').hide(0);
      $('#img-stock').show(0);
      $('.services__nav-item a').removeClass('active');
      $(this).addClass('active');
      var des = $(this).text();
      $('#form-services .form-des').val(des);
    });
    $('#link-autogaz').on('click', function(e){
      e.preventDefault();
      $('.services__description').hide(0);
      $('#autogaz').show(0);
      $('.gallery__block').hide(0);
      $('#img-autogaz').show(0);
      $('.services__nav-item a').removeClass('active');
      $(this).addClass('active');
      var des = $(this).text();
      $('#form-services .form-des').val(des);
    });
    $('#link-heatpump').on('click', function(e){
      e.preventDefault();
      $('.services__description').hide(0);
      $('#heatpump').show(0);
      $('.gallery__block').hide(0);
      $('#img-heatpump').show(0);
      $('.services__nav-item a').removeClass('active');
      $(this).addClass('active');
      var des = $(this).text();
      $('#form-services .form-des').val(des);
    });


    // Валидация и отправка форм
    $.validator.addMethod("minlenghtphone", function (value, element) {
            return value.replace(/\D+/g, '').length > 10;
        },
        "Введите 10 цифр");
    $.validator.addMethod("requiredphone", function (value, element) {
            return value.replace(/\D+/g, '').length > 1;
        },
        "Пожалуйста, заполните поле.");

    $(".form-phone").mask("+7 (999) 999-9999");

    $('#form_recall').validate({
        rules : {
            name : {
                required : true
            },
            date : {
                required : true,
            },
            phone : {
                required : true,
                requiredphone: true,
                minlenghtphone: true
            }
        },
        messages : {
            name : {
                required : "Пожалуйста, заполните поле."
            },
            date : {
                required : "Пожалуйста, заполните поле.",
            },
            phone : {
                required : "Пожалуйста, заполните поле."
            }
        },
        submitHandler: function (form, event) {
            event.preventDefault();
            var test = form;
            console.log(test);
            var title = $("#form_recall input.title").val();
            var name = $("#form_recall input.form-name").val();
            var date = $("#form_recall input.form-date").val();
            var phone = $("#form_recall input.form-phone").val();
            console.log(title, name, phone, date);
            $.ajax({
                url : 'sendmail.php',
                type : 'POST',
                data : {
                    form_title: title,
                    form_name: name,
                    form_date: date,
                    form_phone: phone
                },
                success: function() {
                    // yaCounter36809450.reachGoal('recall', function(){
                    //     console.log('recall в метрику отправлен');
                    // });
                    $.modal.close();
                    $('#thank-you').html('<h3><span class="modal-thank-you__head">Спасибо за вашу заявку!</span><br>'+name+', наш менеджер свяжется в вами в ближайшее время.</h3>');
                    $('#thank-you').modal();
                    setTimeout(function() {
                        $.modal.close();
                    }, 5000);
                    // clear all fields
                    $('#form_recall').trigger("reset");
                },
                error: function() {
                    $.modal.close();
                    $('#thank-you').html('<h3><span class="modal-thank-you__head alert">Похоже на сервере проблеммы</span><br>'+name+', пожалуйста отправьте заявку чуть позже или позвоните нам.</h3>');
                    $('#thank-you').modal();
                    setTimeout(function() {
                        $.modal.close();
                    }, 5000);
                    $('#form_recall').trigger("reset");
                }
            });
        }
    });

    $('#form_consult').validate({
        rules : {
            name : {
                required : true
            },
            email : {
                required : true,
                email : true
            },
            phone : {
                required : true,
                requiredphone: true,
                minlenghtphone: true
            }
        },
        messages : {
            name : {
                required : "Пожалуйста, заполните поле."
            },
            email : {
                required : "Пожалуйста, заполните поле.",
                email : "Укажите корректный email"
            },
            phone : {
                required : "Пожалуйста, заполните поле."
            }
        },
        submitHandler: function (form, event) {
            event.preventDefault();
            var test = form;
            console.log(test);
            var title = $("#form_consult input.title").val();
            var name = $("#form_consult input.form-name").val();
            var email = $("#form_consult input.form-email").val();
            var phone = $("#form_consult input.form-phone").val();
            console.log(title, name, phone, email);
            $.ajax({
                url : 'sendmail.php',
                type : 'POST',
                data : {
                    form_title: title,
                    form_name: name,
                    form_email: email,
                    form_phone: phone
                },
                success: function() {
                    // yaCounter36809450.reachGoal('recall', function(){
                    //     console.log('recall в метрику отправлен');
                    // });
                    $.modal.close();
                    $('#thank-you').html('<h3><span class="modal-thank-you__head">Спасибо за вашу заявку!</span><br>'+name+', наш менеджер свяжется в вами в ближайшее время.</h3>');
                    $('#thank-you').modal();
                    setTimeout(function() {
                        $.modal.close();
                    }, 5000);
                    // clear all fields
                    $('#form_consult').trigger("reset");
                },
                error: function() {
                    $.modal.close();
                    $('#thank-you').html('<h3><span class="modal-thank-you__head alert">Похоже на сервере проблеммы</span><br>'+name+', пожалуйста отправьте заявку чуть позже или позвоните нам.</h3>');
                    $('#thank-you').modal();
                    setTimeout(function() {
                        $.modal.close();
                    }, 5000);
                    $('#form_consult').trigger("reset");
                }
            });
        }
    });

    $('#form_price').validate({
        rules : {
            name : {
                required : true
            },
            email : {
                required : true,
                email : true
            },
            phone : {
                required : true,
                requiredphone: true,
                minlenghtphone: true
            }
        },
        messages : {
            name : {
                required : "Пожалуйста, заполните поле."
            },
            email : {
                required : "Пожалуйста, заполните поле.",
                email : "Укажите корректный email"
            },
            phone : {
                required : "Пожалуйста, заполните поле."
            }
        },
        submitHandler: function (form, event) {
            event.preventDefault();
            var test = form;
            console.log(test);
            var title = $("#form_price input.title").val();
            var name = $("#form_price input.form-name").val();
            var email = $("#form_price input.form-email").val();
            var phone = $("#form_price input.form-phone").val();
            var text = $("#form_price input.form-des").val();
            console.log(title, name, phone, email, text);
            $.ajax({
                url : 'sendmail.php',
                type : 'POST',
                data : {
                    form_title: title,
                    form_name: name,
                    form_email: email,
                    form_phone: phone,
                    form_text: text
                },
                success: function() {
                    // yaCounter36809450.reachGoal('recall', function(){
                    //     console.log('recall в метрику отправлен');
                    // });
                    $.modal.close();
                    $('#thank-you').html('<h3><span class="modal-thank-you__head">Спасибо за вашу заявку!</span><br>'+name+', наш менеджер свяжется в вами в ближайшее время.</h3>');
                    $('#thank-you').modal();
                    setTimeout(function() {
                        $.modal.close();
                    }, 5000);
                    // clear all fields
                    $('#form_price').trigger("reset");
                },
                error: function() {
                    $.modal.close();
                    $('#thank-you').html('<h3><span class="modal-thank-you__head alert">Похоже на сервере проблеммы</span><br>'+name+', пожалуйста отправьте заявку чуть позже или позвоните нам.</h3>');
                    $('#thank-you').modal();
                    setTimeout(function() {
                        $.modal.close();
                    }, 5000);
                    $('#form_price').trigger("reset");
                }
            });
        }
    });

    $('#form-services').validate({
        rules : {
            name : {
                required : true
            },
            email : {
                required : true,
                email : true
            },
            phone : {
                required : true,
                requiredphone: true,
                minlenghtphone: true
            }
        },
        messages : {
            name : {
                required : "Пожалуйста, заполните поле."
            },
            email : {
                required : "Пожалуйста, заполните поле.",
                email : "Укажите корректный email"
            },
            phone : {
                required : "Пожалуйста, заполните поле."
            }
        },
        submitHandler: function (form, event) {
            event.preventDefault();
            var test = form;
            console.log(test);
            var title = $("#form-services input.title").val();
            var name = $("#form-services input.form-name").val();
            var email = $("#form-services input.form-email").val();
            var phone = $("#form-services input.form-phone").val();
            var text = $("#form-services input.form-des").val();
            console.log(title, name, phone, email, text);
            $.ajax({
                url : 'sendmail.php',
                type : 'POST',
                data : {
                    form_title: title,
                    form_name: name,
                    form_email: email,
                    form_phone: phone,
                    form_text: text
                },
                success: function() {
                    // yaCounter36809450.reachGoal('recall', function(){
                    //     console.log('recall в метрику отправлен');
                    // });
                    $.modal.close();
                    $('#thank-you').html('<h3><span class="modal-thank-you__head">Спасибо за вашу заявку!</span><br>'+name+', наш менеджер свяжется в вами в ближайшее время.</h3>');
                    $('#thank-you').modal();
                    setTimeout(function() {
                        $.modal.close();
                    }, 5000);
                    // clear all fields
                    $('#form-services').trigger("reset");
                },
                error: function() {
                    $.modal.close();
                    $('#thank-you').html('<h3><span class="modal-thank-you__head alert">Похоже на сервере проблеммы</span><br>'+name+', пожалуйста отправьте заявку чуть позже или позвоните нам.</h3>');
                    $('#thank-you').modal();
                    setTimeout(function() {
                        $.modal.close();
                    }, 5000);
                    $('#form-services').trigger("reset");
                }
            });
        }
    });

    $('#form-question').validate({
        rules : {
            email : {
                required : true,
                email : true
            },
            text : {
                required : true,
            }
        },
        messages : {
            email : {
                required : "Пожалуйста, заполните поле.",
                email : "Укажите корректный email"
            },
            text : {
                required : "Пожалуйста, заполните поле."
            }
        },
        submitHandler: function (form, event) {
            event.preventDefault();
            var test = form;
            console.log(test);
            var title = $("#form-question input.title").val();
            var email = $("#form-question input.form-email").val();
            var text = $("#form-question textarea.form-text").val();
            console.log(title, email, text);
            $.ajax({
                url : 'sendmail.php',
                type : 'POST',
                data : {
                    form_title: title,
                    form_email: email,
                    form_text: text
                },
                success: function() {
                    // yaCounter36809450.reachGoal('question', function(){
                    //     console.log('question в метрику отправлен');
                    // });
                    $.modal.close();
                    $('#thank-you').html('<h3><span class="modal-thank-you__head">Спасибо за вашу заявку!</span> Наш менеджер свяжется в вами в ближайшее время.</h3>');
                    $('#thank-you').modal();
                    setTimeout(function() {
                        $.modal.close();
                    }, 5000);
                    // clear all fields
                    $('#form-question').trigger("reset");
                },
                error: function() {
                    $.modal.close();
                    $('#thank-you').html('<h3><span class="modal-thank-you__head alert">Похоже на сервере проблеммы</span>, пожалуйста отправьте заявку чуть позже или позвоните нам.</h3>');
                    $('#thank-you').modal();
                    setTimeout(function() {
                        $.modal.close();
                    }, 5000);
                    $('#form-question').trigger("reset");
                }
            });
        }
    });

});
