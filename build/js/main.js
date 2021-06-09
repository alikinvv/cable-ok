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

var phoneMask = IMask(
    document.getElementById('phone-mask'), {
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
