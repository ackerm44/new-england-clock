$(document).ready(function() {
    let date = new Date();
    let year = date.getFullYear();

    $('footer p').append(' '+ year);
})