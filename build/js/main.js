$('body').on('click', '.question', (e) => {
    $(e.currentTarget).toggleClass('active').next().slideToggle();
});

$('body').on('click', 'a[data-scroll]', (e) => {
    console.log($(e.currentTarget).attr('data-scroll'))
    $("html, body").stop().animate({scrollTop: $(`section.${$(e.currentTarget).attr('data-scroll')}`).offset().top}, 500, 'swing', function() { 
        // alert("Finished animating");
     });
});

$('.main').addClass('show');

setTimeout(() => {
    $('.main .btn').addClass('anime');
}, 1000)

var phoneMask = IMask(
    document.getElementById('phone-mask'), {
        mask: '+{7}(000)000-00-00'
});

var phoneMask2 = IMask(
    document.getElementById('phone-mask2'), {
        mask: '+{7}(000)000-00-00'
});

let mobileMenu = () => {
    if ($(window).width() <= 767) {
        $('.header').after($('.header__menu'));
        $('.header .container').append('<div class="hamburger"><span></span></div>');
        $('.header__menu').addClass('mobile');
    } else if ($(window).width() >= 768 && $('.header__menu').hasClass('mobile')) {
        $('.header__logo').after($('.header__menu'));
        $('.header__menu').removeClass('mobile');
        $('.hamburger').remove();
    }
}

mobileMenu();

$(window).on('resize', mobileMenu);

$('body').on('click', '.hamburger', (e) => {
    $(e.currentTarget).toggleClass('active');
    $('.header__menu').toggleClass('active').slideToggle();
});

// show modal
$('body').on('click', '[data-modal]:not(.modal)', (e) => {
    if (!$('.backdrop').hasClass('active')) $('.backdrop').addClass('active');
    $('.modal.active').removeClass('active');
    $(`.modal[data-modal="${$(e.currentTarget).attr('data-modal')}"]`).addClass('active');

    if ($(e.currentTarget).attr('data-modal') === 'thanks') {
        setTimeout(() => {
            $('.modal.active').find('svg').addClass('animate');
        }, 100);
    }
});

// close modal events
let closeModal = () => {
    $('.backdrop').removeClass('active');
    $('.modal').removeClass('active');
    $('.modal').find('svg').removeClass('animate');
}

$('body').on('click', '.modal__close, .modal .close', closeModal);

$('body').on('click', '.backdrop', (e) => {
    if ($(e.target)[0].className === 'backdrop active') closeModal();
});

// close modal on press ESC
$(document).keyup((e) => {
    if (e.keyCode === 27 && $('.backdrop').hasClass('active')) closeModal();
});

$('form').on('submit', (e) => {
    e.preventDefault();
});