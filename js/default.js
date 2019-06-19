$(document).ready(function() {
    $("nav a").click(function(e) {
        e.preventDefault();
        let sectionTop = $($(this).attr('href')).offset().top;
        $("html, body").animate({ scrollTop: sectionTop}, 1000);
    });

    // let contactSct = $('#contact').offset().top;
    // $(".button").click(function(e) {
    //     e.preventDefault();
    //     $("html, body").animate({ scrollTop: contactSct}, 1000);
    // });

    let date = new Date();
    let year = date.getFullYear();
    $('footer p').append(' | '+ year);
})