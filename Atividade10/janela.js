quebrado = false;

function quebrar(){
    if(quebrado == false){
        document.getElementById("janela").src="janelaquebra.png";
     quebrado = true;
    }
}

function abrir(){
    if (quebrado == false)
        document.getElementById("janela").src="janelaaberta.png";
}

function fechar(){
    if (quebrado == false)
        document.getElementById("janela").src="janelafechada.png";
}
