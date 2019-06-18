$(document).ready(function() {
    let contactSct = $('#contact').offset();

    $(".button").click(function(e) {
        e.preventDefault();
        console.log(contactSct);
        $("html, body").animate({ scrollTop: "300px" }, 2000);
    });

    let date = new Date();
    let year = date.getFullYear();

    $('footer p').append(' | '+ year);
})