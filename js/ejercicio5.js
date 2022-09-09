//Circulo
    //Perimetro
    let perimetroC=document.getElementById("perimetroC");
    let perimetroCirculo=document.getElementById("perimetroCirculo");
    let cerrarModalC=document.querySelector(".cerrarModalC");


    perimetroC.addEventListener("click",()=>{
        perimetroCirculo.style.display="block";
    })

    cerrarModalC.addEventListener("click",()=>{
        perimetroCirculo.style.display="none"; 
    })

    window.addEventListener("click",(e)=>{
        if(e.target==perimetroC){
            perimetroC.style.display="flex"; 
        }
    })

    let cerrarModal=document.querySelector(".cerrarModal");

    //Area
    let areaC=document.getElementById("areaC");
    let areaCirculo=document.getElementById("areaCirculo");

    areaC.addEventListener("click",()=>{
        areaCirculo.style.display="block";
    })

    cerrarModal.addEventListener("click",()=>{
        areaCirculo.style.display="none"; 
    })

    window.addEventListener("click",(e)=>{
        if(e.target==areaC){
            areaC.style.display="flex"; 
        }
    })

//Triangulo
    //perimetro
    let perimetroT=document.getElementById("perimetroT");
    let perimetroTriangulo=document.getElementById("perimetroTriangulo");
    let cerrarModalT=document.querySelector(".cerrarModalT");

    perimetroT.addEventListener("click",()=>{
        perimetroTriangulo.style.display="block";
    })

    cerrarModalT.addEventListener("click",()=>{
        perimetroTriangulo.style.display="none"; 
    })

    window.addEventListener("click",(e)=>{
        if(e.target==perimetroT){
            perimetroT.style.display="flex"; 
        }
    })


    //Area
    let areaT=document.getElementById("areaT");
    let areaTriangulo=document.getElementById("areaTriangulo");
    let cerrarModalT2=document.querySelector(".cerrarModalT2");

    areaT.addEventListener("click",()=>{
        areaTriangulo.style.display="block";
    })

    cerrarModalT2.addEventListener("click",()=>{
        areaTriangulo.style.display="none"; 
    })

    window.addEventListener("click",(e)=>{
        if(e.target==areaT){
            areaT.style.display="flex"; 
        }
    })




