$(document).ready(function() {
    // Filter images by category
    $('.filters button').click(function() {
        const filter = $(this).data('filter');

        if (filter === 'all') {
            $('.gallery .image').fadeIn();
        } else {
            $('.gallery .image').each(function() {
                if ($(this).data('category') === filter) {
                    $(this).fadeIn();
                } else {
                    $(this).fadeOut();
                }
            });
        }
    });

    // Lightbox functionality
    $('.gallery .image').click(function() {
        const imgSrc = $(this).find('img').attr('src');
        $('.lightbox-img').attr('src', imgSrc);
        $('.lightbox').fadeIn();
    });

    $('.lightbox .close').click(function() {
        $('.lightbox').fadeOut();
    });

    // Close lightbox when clicking outside the image
    $('.lightbox').click(function(event) {
        if ($(event.target).hasClass('lightbox')) {
            $('.lightbox').fadeOut();
        }
    });
});
