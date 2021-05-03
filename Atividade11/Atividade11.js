function marcaDesmarca(caller) {
    var checks = document.querySelectorAll('input[type="checkbox"]');    
    checks.forEach(c => c.checked = (c == caller) );
  }


function atualizarTexto(){
    input = document.getElementById('txt');
    if(maiusculo.checked == true){
        input.value = input.value.toUpperCase();
        document.querySelector("[name='txt']").value = input.value;
    }

    if(minusculo.checked == true){
        input.value = input.value.toLowerCase();
        document.querySelector("[name='txt']").value = input.value;
    }

}