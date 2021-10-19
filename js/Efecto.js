$(document).ready(function () {
                    $('.button_detalle_mas').click(function () {
                        $('.ver_mas').css({
                            "height": "170px"
                        });
                        $('.card').css({
                            "height": "100%"
                        });
                        $('.button_detalle_mas').hide();
                        /*
                        $('.button_detalle_mas').css({
                            "display": "hide"
                        });*/
                        $('.button_detalle_menos').css({
                            "display": "block"
                        });
                    })

                    $('.button_detalle_menos').click(function () {
                        $('.ver_mas').css({
                            "height": "70px",
                        });
                        $('.card').css({
                            "height": "100%"
                        });
                        $('.button_detalle_mas').show();
                        /*
                        $('.button_detalle_mas').css({
                            "display": "block"
                        });*/
                        $('.button_detalle_menos').css({
                            "display": "none"
                        });
                    })


                })