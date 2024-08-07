function playSonido(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
console.log(listaDeTeclas);

for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#sonido_${instrumento}`  
    console.log(idAudio);

    tecla.onclick = function(){
        playSonido(idAudio);
    };

    tecla.onkeydown = (evento) => {
    
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('activa');
        }
    }
    tecla.onkeyup = () => {
        tecla.classList.remove('activa');
    }
}




