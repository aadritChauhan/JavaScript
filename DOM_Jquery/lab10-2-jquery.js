//LAB 10 - 2 INVENTORY PAGE
$(window).on("load", function(){

    $(".desc").hide()

    $("tr").hover(
        function(){$(this).css("background", "red")},
        function(){$(this).css("background", "white")}
    );
    $("tr").on("click", function(){
        $(".desc").hide()
        $(this).find(".desc").slideToggle();

    })

})
