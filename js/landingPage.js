$(document).ready(function(){
    // Menu
    $("#logo").click(function(){
        $("nav").slideToggle({
            start: function () {
                $(this).css({
                    display: "flex"
                })
            },
        }, "slow");
    });

    // Se connecter
    $("#connect").click(function(){
        window.location.href = "registerLoginPage.html";
    });

    // Slides Offres
    $("#offre01").click(function(){
        $("#slide01").slideToggle("slow");        
    });

    $("#offre02").click(function(){
        $("#slide02").slideToggle("slow");
    });

})