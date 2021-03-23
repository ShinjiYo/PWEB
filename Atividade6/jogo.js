window.jogada =  function() {
    
   
    var opcao = getOp('jogada');
    
    rng = Math.random() ;
    if(rng < 0.34){
        jogadaPC = "Tesoura";

    }
    else if(rng <= 0.67){
        jogadaPC = "Papel";
    }
    else{
        jogadaPC = "Pedra";
    }
    

    alert("Jogada do computador:" + jogadaPC);

   if (opcao == jogadaPC) {
      alert("Empate!");
   } 
   else if(opcao == 'Pedra'){
       if (jogadaPC == 'Tesoura'){
           alert("Ganhou, pedra quebra a tesoura!");
       }
       else{
           alert("Perdeu, papel embrulha a pedra!");
       }
   }
   else if (opcao == 'Tesoura'){
       if(jogadaPC == 'Papel'){
           alert("Ganhou, tesoura corta papel!");
       }
       else{
           alert("Perdeu, pedra quebra tesoura!");
       }   
   }
   else if (opcao == 'Papel'){
       if(jogadaPC == 'Pedra'){
           alert("Ganhou, papel embrulha pedra!");
       }
       else{
           alert("Perdeu, tesoura corta papel!");
       }
   }
   }

function getOp(nome) {
    var radioButtons = document.getElementsByName(nome);
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) return radioButtons[i].value;
    }
    return '';
}