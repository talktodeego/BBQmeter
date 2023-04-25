let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let result = document.getElementById("result");

function calcular(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);

    let qtdCerveja = cervejaPP(duracao) * adultos;

    let qtdBebida = bebidaPP(duracao) * adultos + (bebidaPP(duracao)/2 * criancas);


    result.innerHTML = `<p>${Math.round(qtdCarne / 1000)} Kg de carne</p>`
    result.innerHTML += `<p>${Math.round(qtdCerveja / 1000)} Litros de cerveja</p>`
    result.innerHTML += `<p>${Math.round(qtdBebida / 1000)} Litros de bebidas</p>`


}

function carnePP(duracao){
    if (duracao >= 6){
        return 650
    } else {
        return 400
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000
    } else {
        return 1600
    }
}

function bebidaPP(duracao){
    if(duracao >= 6){
        return 1500
    } else {
        return 1000
    }
}

// START FLIP
const card = document.querySelector('.card');
const flipButton = document.querySelector('#flip-button');

flipButton.addEventListener('click', function() {
  card.classList.toggle('is-flipped');
});
// END FLIP