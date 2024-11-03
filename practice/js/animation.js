$(function () {
    $('#fadeOut').on('click', () => {
        $('.box').css('opacity', 0)
    });

    $('#fadeIn').on('click', () => {
        $('.box').css('opacity', 1)
    })

    // $('#fadeToggle').on('click', () => {
    //     $('.box').fadeToggle();
    // })

    $('#slideUp').on('click', () => {
        // $('.box').slideUp();
        $('.box').css('height', 0)
    })

    $('#slideDown').on('click', () => {
        $('.box').css('height', 200)
    })

    // $('#slideToggle').on('click', () => {
    //     $('.box').slideToggle();
    // })
})