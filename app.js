document.getElementById("btn-comprar").addEventListener("click", function () {
  let tipoIngresso = document.getElementById("tipo-ingresso").value;
  let qtdIngresso = parseInt(document.getElementById('quantidade').value, 10);
  let ingressoPista = parseInt(document.getElementById('qtd-pista').innerText, 10);
  let ingressoSuperior = parseInt(document.getElementById('qtd-superior').innerText, 10);
  let ingressoInferior = parseInt(document.getElementById('qtd-inferior').innerText, 10);

  //Desafio 1
  if(qtdIngresso <= 0){
    alert('Quantidade invalida');
    return
  }


  let ingressoComprado;

  let spanEstoque;


if (tipoIngresso === 'pista') {
  ingressoComprado = ingressoPista;
  spanEstoque = document.getElementById('qtd-pista');
} else if (tipoIngresso === 'superior') {
  ingressoComprado = ingressoSuperior;
  spanEstoque = document.getElementById('qtd-superior');

} else {
  ingressoComprado = ingressoInferior;
  spanEstoque = document.getElementById('qtd-inferior');
}

  let resultado =  ingressoComprado - qtdIngresso;

  if(resultado < 0){
    alert('Ingressos indisponiveis ou insuficientes');
    return
  } else {
    alert(`compra realizada com sucesso`);
  }

  spanEstoque.innerText = resultado;



});