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

window.onscroll = ()=>{
    efectoHabilidades();
};

function efectoHabilidades(){
    const habilidad = document.querySelector("#habilidades");
    console.log(habilidad.getBoundingClientRect().top);
    const distancia = window.innerHeight - habilidad.getBoundingClientRect().top;

    if(distancia>=300){
        document.querySelector("#html").classList.add("progreso1");
        document.querySelector("#bootstrap").classList.add("progreso2");
        document.querySelector("#js").classList.add("progreso3");
        document.querySelector("#php").classList.add("progreso4");
        document.querySelector("#git").classList.add("progreso5");
        document.querySelector("#java").classList.add("progreso6");
        document.querySelector("#c").classList.add("progreso7");
    } else{
        document.querySelector("#html").classList.remove("progreso1");
        document.querySelector("#bootstrap").classList.remove("progreso2");
        document.querySelector("#js").classList.remove("progreso3");
        document.querySelector("#php").classList.remove("progreso4");
        document.querySelector("#git").classList.remove("progreso5");
        document.querySelector("#java").classList.remove("progreso6");
        document.querySelector("#c").classList.remove("progreso7");
    }

}