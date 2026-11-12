let pontuacao = 0;
let protonPrecoInterno = 10;
let neutronPrecoInterno = 25;
let eletronPrecoInterno = 50;
let cliquePower = 1;
let pps = 0;
let proton = 1
let neutron = 0
let eletron = 0
let atomoAtual = document.querySelector('#atomoAtual')
let atomo = 'H-1'
let radiação = false;
const excessao = [5, 8, 11]
const atomoImg = document.querySelector('.atomo');
const pontos = document.querySelector('#pontos');
const maisProton = document.querySelector('#proton')
const maisNeutron = document.querySelector('#neutrons')
const maisEletron = document.querySelector('#eletrons')
const protonPreco = document.querySelector('.js-preco-proton')
const neutronPreco = document.querySelector('.js-preco-neutron')
const eletronPreco = document.querySelector('.js-preco-eletron')
const prestigioPreco = document.querySelector('.js-preco-prestigio')
const atomoPreco = document.querySelector('.js-preco-atomo')
let massa = proton + neutron
function atualizarAtomo() {
    if (proton === 1) {
        atomo = `H-${massa}`
        if (massa > 2 ) {
            radiação = true;
        }
    }
    if (proton === 2) {
        atomo = `He-${massa}`
        if (massa > 4 || massa < 3) {
            radiação = true;
        }
    }
    if (proton === 3) {
        atomo = `Li-${massa}`
        if (massa > 7 || massa < 6) {
            radiação = true;
        }
    }
    if (proton === 4) {
        atomo = `Be-${massa}`
        if (massa != 9) {
            radiação = true;
        }
    }
    if (proton === 5) {
        atomo = `B-${massa}`
        if (massa > 10 || massa < 9) {
            radiação = true;
        }
    }
    if (proton === 6) {
        atomo = `C-${massa}`
        if (massa > 13 || massa < 12) {
            radiação = true;
        }
    }
    if (proton === 7) {
        atomo = `N-${massa}`
        if (massa > 15 || massa < 14) {
            radiação = true;
        }
    }
    if (proton === 8) {
        atomo = `O-${massa}`
        if (massa > 18 || massa < 16) {
            radiação = true;
        }
    }
    if (proton === 9) {
        atomo = `F-${massa}`
        if (massa != 19) {
            radiação = true;
        }
    }
};
function criarAtomo(nome, protons, neutrons, estavel) {
    return {nome, protons, neutrons, estavel}
}
function arredondar(numero) {
    return Math.round(numero)
}
function clique() {
    
    pontuacao += cliquePower;
    pontos.innerText = `pontos: ${pontuacao}`;
    console.log(protonPrecoInterno);
    atualizar()
}
function atualizar() {
    pontos.innerText = `pontos: ${Number(pontuacao.toFixed())}`;
    neutronPreco.innerText = `${neutronPrecoInterno} energia`
    protonPreco.innerText = `${protonPrecoInterno} energia`
    eletronPreco.innerText = `${eletronPrecoInterno} energia`
    massa = proton + neutron
    atomosEstavel()
    atualizarAtomo()
    atomoAtual.innerText = `atomo:${atomo}`
}
function cliqueProton() {
    if (pontuacao >= protonPrecoInterno) {
        pontuacao -= protonPrecoInterno
        protonPrecoInterno = Math.round(protonPrecoInterno * 1.5)
        atualizar()
        cliquePower++
        ++proton
    }
}

function cliqueNeutron() {
    if (pontuacao >= neutronPrecoInterno) {
        pontuacao -= neutronPrecoInterno
        neutronPrecoInterno = Math.round(neutronPrecoInterno * 2.25)
        ++neutron
        atualizar()
        pps++
    }
}
function cliqueEletron() {
    if (pontuacao >= eletronPrecoInterno) {
        pontuacao -= eletronPrecoInterno
        eletronPrecoInterno = Math.round(eletronPrecoInterno * 3.5)
        atualizar()
        pps *= 1.5;
        cliquePower *= 1.5;
    }
}
function atomosEstavel() {
    if (radiação) {
        if (excessao.includes(massa)) {

        } else {
            atomoImg.src = `./imagens/explosão.jpg`
            clearInterval()
        }
    }
}
atomoImg.addEventListener('click', clique)
maisProton.addEventListener('click', cliqueProton)
maisNeutron.addEventListener('click', cliqueNeutron)
maisEletron.addEventListener('click', cliqueEletron)
setInterval(() => {
    pontuacao += pps / 10;
    atualizar()
    if (radiação) {
        clearInterval()
    }
}, 100)