$(document).ready(function() {



    $(".menu-item").click(function() {

        if ($(this).children(".dropdown-menu").is(":visible")) {
            $(this).children(".dropdown-menu").slideToggle(300);
        } else {
            $(".menu-item").children(".dropdown-menu").slideUp(300);
            $(this).children(".dropdown-menu").slideToggle(300);
        }


    });

});
