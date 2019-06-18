$(document).ready(function() {
    let contactSct = $('#contact').scrollTop();

    $(".button").click(function(e) {
        e.preventDefault();
        $('body').animate({
            scrollTop: contactSct
        }, 2000);
    });

    let date = new Date();
    let year = date.getFullYear();

    $('footer p').append(' | '+ year);
})