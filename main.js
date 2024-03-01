function responsiveMenu(){
    const nav=document.querySelector('.navegador');

    if(nav.className === 'navegador'){
        nav.classList.add("responsive");
    }else{
        nav.classList.remove("responsive");
    }
}


function seleccionado(link){
    const seleccion = document.querySelectorAll("#menu-nav li a");
    seleccion[0].classList.remove("seleccionado");
    seleccion[1].classList.remove("seleccionado");
    seleccion[2].classList.remove("seleccionado");
    seleccion[3].classList.remove("seleccionado");
    seleccion[4].classList.remove("seleccionado");

    link.classList.add('seleccionado');

    const nav = document.querySelector(".navegador");
    nav.classList.remove("responsive");
}