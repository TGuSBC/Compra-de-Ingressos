    let btn = document.getElementById('btn');



    btn.addEventListener('click', () =>{
        let input1 = document.getElementById('numero');

        if(input1.value.trim() === ''){
            alert('o campo nao pode estar vazio');
            return
        } 

        let numero = Number(input1.value);

        if(numero % 2 === 0){
            alert('par')
        } else {
            alert('impar')
        }



    })


