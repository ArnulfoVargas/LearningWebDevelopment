$(document).keypress(
    function (e) {
        $("h1").text(e.key);
    }
)
$("h1").click(function () {$("h1").slideUp().slideDown().fadeOut().fadeIn().hide().show().animate({opacity: 0.25}).animate({opacity: 1})})

$("h1").on("mouseover", function(){
    $("h1").attr("class", "yellow");
})