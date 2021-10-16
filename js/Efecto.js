

$(document).ready(function () {
    var clic = 0;

    $('.button_detalle_mas').click(function(){
        $('.ver_mas').css({
            "height": "250px"
        });
        $('.button_detalle_mas').css({
            "display": "none"
        });
        $('.button_detalle_menos').css({
            "display": "block"
        });
    })

    $('.button_detalle_menos').click(function(){
        $('.ver_mas').css({
            "height": "120px"
        });
        $('.button_detalle_mas').css({
            "display": "block"
        });
        $('.button_detalle_menos').css({
            "display": "none"
        });
    })

})




