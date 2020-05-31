$(document).ready(function(){
    $('.customer-logos').slick({
        // slidesToShow: 4,
        // slidesToScroll: 4,
        // prevArrow: $('.prev'),
        autoplay: true,
        autoplaySpeed: 7000,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

