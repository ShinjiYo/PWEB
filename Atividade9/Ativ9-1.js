function Retangulo(x, y){
    this.base = x;
    this.altura= y;
};

var Retangulo = {
    calcularArea: function (x, y) {
        alert(x * y);        
    }
};

base = prompt('Digite a base');
altura = prompt('Digite a altura');

Retangulo.calcularArea(base,altura);