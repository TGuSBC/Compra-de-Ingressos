let btn = document.getElementById('btn');

btn.addEventListener('click', () =>{
    let input1 = document.getElementById('temperatura').value;

    if(input1.trim() === ''){
        alert('um numero precisa ser informado');
        return
    }

    let temperatura = Number(input1);

    if(isNaN(temperatura)){
        alert('invalido');
        return
    }

    let input2 = document.getElementById('escala').value;

    if(input2.trim() === ''){
        alert('escolha entre C e F');
        return
    }

    let escala = input2.toUpperCase();

    if ( escala != 'C' && escala != 'F' ){
        alert('escolha entre C e F');
        return;
    }

    // let toF = (temperatura * 1.8) + 32;

    // let toC = (temperatura - 32) / 1.8;

    function calculo (){
        if(escala === 'C'){
            let toF = (temperatura * 1.8) + 32;
            return toF
        } else {
            let toC = (temperatura - 32) / 1.8;
            return toC
        }
    }

    if(escala === 'C'){
    document.getElementById('resultado').textContent = calculo().toFixed(1) + 'F';
    } else {
        document.getElementById('resultado').textContent = calculo().toFixed(1) + 'C';
    }
})