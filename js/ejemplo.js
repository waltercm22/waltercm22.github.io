document.getElementById("calcular").addEventListener("click", function(){
    let num1 = parseFloat(document.getElementById("numero1").value);//numero al azar elegido
    let num2 = parseFloat(document.getElementById("numero2").value);//numero al azar elegido
    let operacion = document.getElementById("operacion").value;//suma, resta, multiplica, divide
    let resultado = document.getElementById("resultado");
//Validacion que no me esta enviando vacios
    if(isNaN(num1)||isNaN(num2)){
        resultado.textContent = "Ingrese números Validos";
        return;
    }
function calcular(a,b, op){
    switch (op) {
        case "suma":
            return a+b;
        case "resta":
            return a-b;
        case "multiplicacion":
            return a*b;
        case "division":
            return a/b;
        
        default:
            return "Operación Inválida"
    }
}
let resultadoFinal = calcular(num1,num2,operacion);
resultado.textContent="El Resultado es: "+resultadoFinal;
})

//Calculo de descuento a compras mayores a 1000 soles
function calcularDescuento() {
    let monto = parseFloat(document.getElementById("montoCompra").value);
    let resultado = document.getElementById("resultadoDescuento");

    if (isNaN(monto) || monto <= 0) {
        resultado.textContent = "Por favor, ingrese un monto valido mayoor a cero.";
        return;
    }

    let descuento = 0;
    if (monto > 1000) {
        descuento = monto * 0.10;
    }

    let totalPagar = monto - descuento;

    resultado.textContent =
        "Total sin descuento: S/. " + monto.toFixed(2) +
        " -- Descuento aplicado: S/. " + descuento.toFixed(2) +
        " -- Total a pagar: S/. " + totalPagar.toFixed(2);
}
