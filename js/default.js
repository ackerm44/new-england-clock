$(document).ready(function() {
    // $('#contactForm').load("contactForm.html");


    let date = new Date();
    let year = date.getFullYear();

    $('footer p').append(' | '+ year);
})