var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    responsive: {
        1: {
            items: 1
        },
        400: {
            items: 1
        },
        900: {
            items: 2
        },
        1600: {
            items: 3
        }
    }
});

