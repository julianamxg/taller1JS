const consultar = document.getElementById('consultar');

consultar.addEventListener('click', function () {
    const opcionN = document.getElementById('opcionN').value;
    const opcionA = document.getElementById('opcionA').value;
    const opcionAc = document.getElementById('opcionAc').value;
    parseInt(opcionN, opcionA, opcionAc);

    //Profe tatiana
        //Respuesta correcta
        if (opcionN == 1 && opcionA == 6 && opcionAc == 11) {
            swal("¡Respuesta correcta!", "Muy bien", "success");
        }

        //Respuesta incorrecta
        else if (opcionN != 1 && opcionA != 6 && opcionAc == 11) {
            swal("¡Respuesta incorrecta!", "Vuelve a intentar", "error");
        }

        else if (opcionN == 1 && opcionA != 6 && opcionAc != 11) {
            swal("¡Respuesta incorrecta!", "Vuelve a intentar", "error");
        }

        else if (opcionN == 1 && opcionA != 6 && opcionAc == 11) {
            swal("¡Respuesta incorrecta!", "Vuelve a intentar", "error");
        }

        else if (opcionN == 1 && opcionA == 6 && opcionAc != 11) {
            swal("¡Respuesta incorrecta!", "Vuelve a intentar", "error");
        }

        else if (opcionN == 1 && opcionA == 6 && opcionAc != 11) {
            swal("¡Respuesta incorrecta!", "Vuelve a intentar", "error");
        }

        else if (opcionN != 1 && opcionA == 6 && opcionAc == 11) {
            swal("¡Respuesta incorrecta!", "Vuelve a intentar", "error");
        }
    


    //Profe Carolina
        //Respuesta correcta
        else if (opcionN == 2 && opcionA == 7 && opcionAc == 12) {
            swal("¡Respuesta correcta!", "Muy bien", "success");
        }

        //Respuesta incorrecta
        else if (opcionN != 2 && opcionA != 7 && opcionAc == 12) {
            swal("¡Respuesta incorrecta!", "Vuelve a intentar", "error");
        }

        else if (opcionN == 2 && opcionA != 7 && opcionAc != 12) {
            swal("¡Respuesta incorrecta!", "Vuelve a intentar", "error");
        }

        else if (opcionN != 2 && opcionA == 7 && opcionAc != 12) {
            swal("¡Respuesta incorrecta!", "Vuelve a intentar", "error");
        }

        else if (opcionN == 2 && opcionA == 7 && opcionAc != 12) {
            swal("¡Respuesta incorrecta!", "Vuelve a intentar", "error");
        }

        else if (opcionN != 2 && opcionA == 7 && opcionAc == 12) {
            swal("¡Respuesta incorrecta!", "Vuelve a intentar", "error");
        }

        else if (opcionN == 2 && opcionA != 7 && opcionAc == 12) {
            swal("¡Respuesta incorrecta!", "Vuelve a intentar", "error");
        }

        
    //Profe yaneth
        //Respuesta correcta
        else if (opcionN == 3 && opcionA == 8 && opcionAc == 13) {
            swal("¡Respuesta correcta!", "Muy bien", "success");
        }

        //Respuestas incorrectas
        else if (opcionN != 3 && opcionA != 8 && opcionAc == 13) {
            swal("¡Respuesta incorrecta!", "Vuelve a intentar", "error");
        }

        else if (opcionN == 3 && opcionA != 8 && opcionAc != 13) {
            swal("¡Respuesta incorrecta!", "Vuelve a intentar", "error");
        }

        else if (opcionN !== 3 && opcionA == 8 && opcionAc != 13) {
            swal("¡Respuesta incorrecta!", "Vuelve a intentar", "error");
        }

        else if (opcionN == 3 && opcionA == 8 && opcionAc != 13) {
            swal("¡Respuesta incorrecta!", "Vuelve a intentar", "error");
        }

        else if (opcionN != 3 && opcionA == 8 && opcionAc == 13) {
            swal("¡Respuesta incorrecta!", "Vuelve a intentar", "error");
        }

        else if (opcionN == 3 && opcionA != 8 && opcionAc == 13) {
            swal("¡Respuesta incorrecta!", "Vuelve a intentar", "error");
        }

    //Profe fernando
        //Respuesta correcta
        else if (opcionN == 4 && opcionA == 9 && opcionAc == 14) {
            swal("¡Respuesta correcta!", "Muy bien", "success");
        }

        //Respuestas incorrectas
        else if (opcionN != 4 && opcionA != 9 && opcionAc == 14) {
            swal("¡Respuesta incorrecta!", "Vuelve a intentar", "error");
        }

        else if (opcionN == 4 && opcionA != 9 && opcionAc != 14) {
            swal("¡Respuesta incorrecta!", "Vuelve a intentar", "error");
        }

        else if (opcionN != 4 && opcionA == 9 && opcionAc != 14) {
            swal("¡Respuesta incorrecta!", "Vuelve a intentar", "error");
        }

        else if (opcionN == 4 && opcionA == 9 && opcionAc != 14) {
            swal("¡Respuesta incorrecta!", "Vuelve a intentar", "error");
        }

        else if (opcionN != 4 && opcionA == 9 && opcionAc == 14) {
            swal("¡Respuesta incorrecta!", "Vuelve a intentar", "error");
        }

        else if (opcionN == 4 && opcionA != 9 && opcionAc == 14) {
            swal("¡Respuesta incorrecta!", "Vuelve a intentar", "error");
        }


    //Profe Cristian  
        //Respuesta correcta
        else if (opcionN == 5 && opcionA == 10 && opcionAc == 15) {
            swal("¡Respuesta correcta!", "Muy bien", "success");
        }

        //Respuestas incorrectas
        else if (opcionN != 5 && opcionA != 10 && opcionAc == 15) {
            swal("¡Respuesta incorrecta!", "Vuelve a intentar", "error");
        }

        else if (opcionN == 5 && opcionA != 10 && opcionAc != 15) {
            swal("¡Respuesta incorrecta!", "Vuelve a intentar", "error");
        }

        else if (opcionN != 5 && opcionA == 10 && opcionAc != 15) {
            swal("¡Respuesta incorrecta!", "Vuelve a intentar", "error");
        }

        else if (opcionN == 5 && opcionA == 10 && opcionAc != 15) {
            swal("¡Respuesta incorrecta!", "Vuelve a intentar", "error");
        }

        else if (opcionN != 5 && opcionA == 10 && opcionAc == 15) {
            swal("¡Respuesta incorrecta!", "Vuelve a intentar", "error");
        }

        else if (opcionN == 5 && opcionA != 10 && opcionAc == 15) {
            swal("¡Respuesta incorrecta!", "Vuelve a intentar", "error");
        }

        



})
