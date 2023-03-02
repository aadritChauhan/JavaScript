//LAB 10 - 1 FAQ PAGE
jQuery(window).on("load", function(){

    jQuery("p").hide();

    jQuery("h2").on("click", function(){
    jQuery(this).next("p").slideToggle(3000);
    });

    $("p").hover(
        function(){$(this).toggleClass("textHovered");})
});

