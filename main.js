function playSonido(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
const listaIdSonidos = document.querySelectorAll('#sonido_tecla_');
let contador = 0;

while( contador < listaDeTeclas.length ){ 
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    console.log(instrumento);

    const idAudio = `#sonido_${instrumento}`  

    tecla.onclick = function(){
        playSonido(idAudio);
    };
    contador++;
    console.log('Vuelta = ' + contador);  
}



