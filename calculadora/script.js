function calcular(operacion) {
    const num1Input = document.getElementById('num1').value;
    const num2Input = document.getElementById('num2').value;
    const pantallaResultado = document.getElementById('resultado');

    if (num1Input === '' || num2Input === '') {
        pantallaResultado.value = 'Ingresa ambos números';
        return;
    }

    const n1 = parseFloat(num1Input);
    const n2 = parseFloat(num2Input);
    let resultado = 0;

    switch (operacion) {
        case '+':
            resultado = n1 + n2;
            break;
        case '-':
            resultado = n1 - n2;
            break;
        case '*':
            resultado = n1 * n2;
            break;
        case '/':
            if (n2 === 0) {
                pantallaResultado.value = 'Error: División por 0';
                return;
            }
            resultado = n1 / n2;
            break;
    }

    pantallaResultado.value = resultado;
}