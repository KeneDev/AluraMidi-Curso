function playSonidoPom(){
    document.querySelector('#sonido_tecla_pom').play();
}


function playSonidoClap(){
    document.querySelector('#sonido_tecla_clap').play();
}

document.querySelector('.tecla_pom').onclick = playSonidoPom;

