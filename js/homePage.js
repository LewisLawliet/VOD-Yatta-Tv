$(document).ready(function(){
    // Coverflow
    $(".coverflow").coverflow({
        easing:	'swing',
        duration: 2000,
        index: 2,
        width: 320,
        height: 240,
        visible: 'density',
        selectedCss: { opacity: 1 },
        outerCss: { opacity: .1 },
    });

    // Faire un effet hover sur la cover courante, avec titre + phrase d'accroche de l'anime concerné

    // Sliders
    $(".slider").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: "<img src='./Logo_Icônes/arrow-point-to-right.png' class='custom'>",
        prevArrow: "<img src='./Logo_Icônes/arrow-point-to-left.png' class='custom'>",
    });

    $(".slider-reverse").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 2,
        nextArrow: "<img src='./Logo_Icônes/arrow-point-to-right.png' class='custom'>",
        prevArrow: "<img src='./Logo_Icônes/arrow-point-to-left.png' class='custom'>",
    });

    // Faire un effet hover sur n'importe quel slide
})