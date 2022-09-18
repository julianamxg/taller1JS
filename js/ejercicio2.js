const calcular = document.getElementById('calcular');

calcular.addEventListener('click', function(){
    const temperatura = document.getElementById('temperatura').value;
    const opciones = document.getElementById('opciones').value;
    const opciones2 = document.getElementById('opciones2').value;

    parseFloat(temperatura);
    parseInt(opciones, opciones2);
   
    if(opciones == 1 && opciones2 == 5){       
        let resultado = (temperatura - 32)/1.8;
        swal(`La temperatura ${temperatura}º Fahrenheit convertida a Celsius es ${resultado.toFixed(2)}º`);
    }

    else if(opciones == 1 && opciones2 == 6){
        let resultado = 5/9*(temperatura - 32) + 273.15;
        swal(`La temperatura ${temperatura}º Fahrenheit convertida a Kelvin es ${resultado.toFixed(2)}º`);
    }

    else if(opciones == 2 && opciones2 == 4){
        let resultado = (temperatura * 1.8) + 32;
        swal(`La temperatura ${temperatura}º Celsius convertida a Fahrenheit es ${resultado.toFixed(2)}º`);
    }

    else if(opciones == 2 && opciones2 == 6){
        let resultado = parseFloat(temperatura) + 273.15;
        swal(`La temperatura ${temperatura}º Celsius convertida a Fahrenheit es ${resultado.toFixed(2)}º`);     
    }

    else if(opciones == 3 && opciones2 == 4){
        let resultado = (temperatura - 273.15) * 9/5 + 32
        swal(`La temperatura ${temperatura}º Kelvin convertida a Fahrenheit es ${resultado.toFixed(2)}`);  
    }

    else if(opciones == 3 && opciones2== 5){
        let resultado = parseFloat(temperatura) - 273.15;
        swal(`La temperatura ${temperatura}º Kelvin convertida a Celsius son: ${resultado.toFixed(2)}º`);  
    }

    // Si el usuario convierte de la misma temperatura a la misma temperatura
    else if(opciones == 1 && opciones2== 4){
        swal(`Seleccionaste la misma temperatura a convertir, la temperatura ${temperatura}º Fahrenheit convertida a Fahrenheit es: ${temperatura}º`);  
    }

    else if(opciones == 2 && opciones2== 5){
        swal(`Seleccionaste la misma temperatura a convertir, la temperatura ${temperatura}º Celsius convertida a Celsius es: ${temperatura}º`);  
    }

    else if(opciones == 3 && opciones2== 6){
        swal(`Seleccionaste la misma temperatura a convertir, la temperatura ${temperatura}º Kelvin convertida a Kelvin es: ${temperatura}º`);  
    }
})