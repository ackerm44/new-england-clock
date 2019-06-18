$(document).ready(function() {
    let contactSct = $('#contact').offset();

    $(".button").click(function(e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: contactSct}, 2000);
    });

    let date = new Date();
    let year = date.getFullYear();

    $('footer p').append(' | '+ year);
})