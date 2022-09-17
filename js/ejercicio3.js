const calcular = document.getElementById('calcular');

calcular.addEventListener('click', function(){
    const primerLado = document.getElementById('primerLado').value;
    const segundoLado = document.getElementById('segundoLado').value;
    const tercerLado = document.getElementById('tercerLado').value;

    parseInt(primerLado, segundoLado, tercerLado);
   
    if(primerLado == segundoLado && primerLado == tercerLado && segundoLado == tercerLado){       
        swal(`El triangulo es equilatero`);
    }

    else if(primerLado == segundoLado || primerLado == tercerLado ||segundoLado == tercerLado){       
        swal(`El triangulo es isosceles`);
    }

    else if(primerLado != segundoLado && primerLado != tercerLado ||segundoLado != tercerLado){       
        swal(`El triangulo es escaleno`);
    }
})