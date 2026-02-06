let btnC = document.getElementById('calcular');

function soma(num1, num2){
    return num1 + num2
}
function subtracao(num1, num2){
    return num1 - num2
}
function multiplicacao(num1, num2){
    return num1 * num2
}
function divisao(num1, num2){
    return num1 / num2
}

function botaocalc(){
    btnC.addEventListener('click', () => {

        let input1 = document.getElementById('num1');
        let input2 = document.getElementById('num2');

        if (input1.value.trim() === '' || input2.value.trim() === '') {
            alert('um dos campos está vazio');
            return;
            }

        let num1 = Number(input1.value);
        let num2 = Number(input2.value);


        // dessa forma abaixo nao estava dando para bloquear campos vazios por causa do Number
        // let num1 = Number(document.getElementById('num1').value);
        // let num2 = Number(document.getElementById('num2').value);

        // if(isNaN(num1) || isNaN(num2)){
        //     alert('um dos campos esta vazio');
        //     return
        // }
        let select = document.getElementById('operacao');
        let resultado = 0;

        // para evitar que seja divido por 0
        if (select.value === 'divisao' && num2 === 0) {
        alert('não é possível dividir por zero');
        return;
        }


        if(select.value === 'soma'){
            resultado = soma(num1, num2);
        } else if(select.value === 'subtracao'){
            resultado = subtracao(num1, num2);
        } else if(select.value === 'multiplicacao'){
            resultado = multiplicacao(num1, num2);
        } else if(select.value === 'divisao'){
            resultado = divisao(num1, num2);
        }

        document.getElementById('resultado').textContent = resultado;
    })
}

botaocalc();


