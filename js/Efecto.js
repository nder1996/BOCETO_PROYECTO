$(document).ready(function () {
    
    $('.button_detalle_mas').click(function () {
        $('.Extendido').css({"display":"inline"})
        $('.button_detalle_mas').css({"display":"none"})
    });

    $('.button_detalle_menos').click(function () {
        $('.Extendido').css({"display":"none"})
        $('.button_detalle_mas').css({"display":"inline"})
    });

})