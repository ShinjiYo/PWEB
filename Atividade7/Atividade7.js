n1 = prompt("Digite o numero 1");
n2 = prompt("Digite o numero 2");
n3= prompt("Digite o numero 3");
n1 = parseFloat(n1);
n2= parseFloat(n2);
n3 = parseFloat(n3);

function maior(n1,n2,n3){
    if (n1>n2 && n1 > n3){
        return("Número 1 ("+ n1 +") é o maior número ");
    }
    if(n2 > n1 && n2 > n3){
        return("Número 2 ("+ n2 +") é o maior número");
    }
    if(n3 > n1 && n3 > n2){
        return("Número 3 ("+ n3 +") é o maior número");
    }
}
alert(maior(n1,n2,n3));