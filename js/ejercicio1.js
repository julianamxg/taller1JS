//1
let longitud = document.getElementById('longitud');
longitud.addEventListener('click', function(){
    const texto = document.getElementById('texto').value;
    window.alert(`La longitud de la palabra "${texto}" es: ` + texto.length);
});

//2
let may = document.getElementById('may');
may.addEventListener('click', function(){
    const texto = document.getElementById('texto').value;
    window.alert(`La palabra convertida "${texto}" a mayúsculas es ` + texto.toUpperCase());
});

//3
let min= document.getElementById('min');
min.addEventListener('click', function(){
    const texto = document.getElementById('texto').value;
    window.alert(`La palabra covertida "${texto}" a minúsculas es ` + texto.toLowerCase());
});

//4
let pCaracter = document.getElementById('pCaracter');
pCaracter.addEventListener('click',function(){
    const texto = document.getElementById('texto').value;
    window.alert(`El primer caracter de la palabra "${texto}" es ` + texto.charAt());
});