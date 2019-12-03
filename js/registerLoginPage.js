$(document).ready(function(){
    // Affichage des différents formulaires
    $("#loginFormLink").click(function(){
        $("#registerForm").css("display", "none");
        $("#registerFormLink").css({
            borderBottom: "6px solid white",
            padding: "0 0 6px 0",
        });
        $("#loginForm").css("display", "flex");
        $("#loginFormLink").css({
            borderBottom: "none",
            padding: "0 0 12px 0",
        });
    });

    $("#registerFormLink").click(function(){
        $("#loginForm").css("display", "none");
        $("#loginFormLink").css({
            borderBottom: "6px solid white",
            padding: "0 0 6px 0",
        });
        $("#registerForm").css("display", "flex");
        $("#registerFormLink").css({
            borderBottom: "none",
            padding: "0 0 12px 0",
        });
    });

})