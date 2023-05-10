
const resultadosHtml = document.getElementById('resultados');
operadores_validos = ["+", "-", "/", "*"]

const calcularPrompt = () => {
    const variable1 = parseInt(prompt("ingrese un numero"));
    const variable2 = parseInt(prompt("ingrese un segundo numero"));
    let verificacion = true
    while (verificacion) {
        let operador = prompt("que desea hacer *(multiplicar),+(sumar),-(resta),/(division)").toString()
        console.log(operador);
        for (operador_valido in operadores_validos) {
            if (operador_valido == operador) {
                const resultado = operacion(operador)
                resultadosHtml.innerHTML += `
                    <li>${variable1} ${operador} ${variable2} es igual a ${resultado}  </li>
                `
                verificacion = false;
                return
            }
        }
        alert("debes seleccionas un operador valido")
    };
    const operacion = (operador) => {
        let resultado = 0
        switch (operador) {
            case '+':
                resultado = variable1 + variable2
                break;
            case '-':
                resultado = variable1 - variable2
                break;
            case '/':
                resultado = variable1 / variable2
                break;
            case '*':
                resultado = variable1 * variable2
                break;
        }
        return resultado
    }
}