//almacenar slider en una variable
var slider = $('#slider');
//almacenar botones
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');

//mover ultima imagen al primer lugar
$('#slider .slider__section:last').insertBefore('#slider .slider__section:first');
//mostar la primera imagen con un margen de -180% hacia la izquierda
slider.css('margin-left', '-'+100+'%');

//funcion para mover las siguientes imagenes a la derecha
function moverD(){
    slider.animate({
        marginLeft:'-'+200+'%'
    } ,700, function(){
        $('#slider .slider__section:first').insertAfter('#slider .slider__section:last');
        slider.css('margin-left', '-'+100+'%');

    });
}

//funcion para mover las siguientes imagenes a la izquierda
function moverI(){
    slider.animate({
        marginLeft:0
    } ,700, function(){
        $('#slider .slider__section:last').insertBefore('#slider .slider__section:left');
        slider.css('margin-left', '-'+100+'%');

    });
}

//funcion para mover las imagenes automaticamente al cabo de 5 segundos
function autoplay(){
    interval = setInterval(function(){
        moverD();
    }, 5000);
}
//funcion para mover las imagenes a la derecha atraves de la pulsacion del boton
siguiente.on('click', function(){
    moverD();
    clearInterval(interval);
    autoplay();
});
//funcion para mover a la izquierda atraves de la pulsacion del boton
anterior.on('click', function(){
    moverI();
    clearInterval(interval);
    autoplay();
});

//ejecucuion automatica
autoplay();