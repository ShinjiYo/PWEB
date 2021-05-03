function validar() {
    if (document.forms.formulario1.elements["idNome"].value == "" || document.forms.formulario1.elements.idNome.value.length < 10) {
        alert("Preencha campo NOME corretamente!");
        document.forms.formulario1.elements.idNome.focus();
        return false;
    };
    if (document.forms.formulario1.elements["idEmail"].value == "" || document.forms.formulario1.elements["idEmail"].value.indexOf('@') == -1 || document.forms.formulario1.elements["idEmail"].value.indexOf('.') == -1) {
        alert("Preencha campo E-MAIL corretamente!");
        document.forms.formulario1.elements.idEmail.focus();
       return false;
    }
    if (document.forms.formulario1.elements.idComentario.value == "" || document.forms.formulario1.elements.idComentario.value.length < 20) {
        alert("Por favor, escreva um comentário mais longo!!");
        document.getElementById("idComentario").focus();
        return false;
    }

    var radio = document.getElementsByName("pesquisa");

        if(radio[0].checked){
            alert("Volte sempre!!");
        }
        else if(radio[1].checked){
            alert("Que bom que voltou!!");
        }
        else{
            alert("Por Favor, responda a pesquisa!");
            return false;
        }
    return true;
}