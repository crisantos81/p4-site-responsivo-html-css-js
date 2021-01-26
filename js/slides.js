$(function(){

    $('.mosaico .mosaico-wrapper').slick({
        centerMode: false,
        slidesToShow: 6,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    slidesToShow: 3   
                }
            },
            {
                breakpoint: 580,
                settings: {
                    centerMode: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 380,
                settings: {
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.tratamentos .container').slick({
        centerMode: false,
        arrows: false,
        slidesToShow: 3,
        infinite: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 580,
                settings: {
                    dots: true,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.depoimentos .container').slick({
        centerMode: false,
        arrows: false,
        slidesToShow: 1,
        dots: true,
        infinite: false
    });
});