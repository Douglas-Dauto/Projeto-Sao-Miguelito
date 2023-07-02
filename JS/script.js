const itensHeader = document.querySelectorAll('.lista__item');
const videoWhat = document.getElementsByClassName('contain9__what');
const tumbVideo = document.getElementsByClassName('imgTumbVideo');
const textoMais = document.getElementsByClassName('contain8__mais')[0];

itensHeader[0].setAttribute('class', 'lista__item--bg lista__item')

function btn(valor) {
    for(let i = 0; i < itensHeader.length; i++) {
        itensHeader[i].setAttribute('class', 'lista__item');
    }

    itensHeader[valor].setAttribute('class', 'lista__item lista__item--bg');
}

for(let i = 0; i < itensHeader.length; i++) {
    itensHeader[i].addEventListener('click', () => btn(i))
}

document.addEventListener('scroll', () => {
    setTimeout(() => {
        if(window.scrollY < 600) {
            btn(0);
        } else if(window.scrollY <= 1299) {
            btn(1);
        } else if(window.scrollY <= 4265) {
            btn(2);
        } else {
            btn(3);
        }
    }, 600);
});


for(let i = 0; i < tumbVideo.length; i++) {
    tumbVideo[i].addEventListener('click', () => {
        tumbVideo[i].setAttribute('class', 'imgTumbVideo imgTumbVideoOff');
        videoWhat[i].play();
    });
}

ativarTextoMais();
function ativarTextoMais() {
    let controle = true;

    document.addEventListener('scroll', () => {
        if(window.scrollY >= 1868 && controle === true) {
            contarTextoMais(controle);
            controle = false;
        }
    });
}

function contarTextoMais(valor) {
    if(valor) {
        for(let i = 0; i <= 15000; i++) {
            setTimeout(() => inserirTextoMais(i), 500);
        }
    }
}

function inserirTextoMais(valor) {
    textoMais.innerHTML = `Mais De ${valor}`;
}

const contain9Content = window.document.getElementsByClassName('contain9__content')[0];
const contain9ContentPrevios = window.document.getElementById('contain9-content-previos');
const contain9ContentNext = window.document.getElementById('contain9-content-next');
const contain9ImgUm = window.document.getElementById('contain9__img1');
const contain9ImgDois = window.document.getElementById('contain9__img2');
const contain9ImgTres = window.document.getElementById('contain9__img3');
let backgroundGlobal = 3;

window.document.addEventListener('click', (e) => {
    if(e.target.classList.contains('contain9-content__previos')) {
        if(backgroundGlobal > 3) {
            contain9ImgUm.setAttribute('class', `contain9__img contain9__bg${backgroundGlobal - 5}`);
            contain9ImgDois.setAttribute('class', `contain9__img contain9__bg${backgroundGlobal - 4}`);
            contain9ImgTres.setAttribute('class', `contain9__img contain9__bg${backgroundGlobal - 3}`);
            
            backgroundGlobal -= 3;
        }
    }

    if(e.target.classList.contains('contain9-content__next')) {
        if(backgroundGlobal <= 6) {
            contain9ImgUm.classList.add(`contain9__bg${backgroundGlobal + 1}`);
            contain9ImgDois.classList.add(`contain9__bg${backgroundGlobal + 2}`);
            contain9ImgTres.classList.add(`contain9__bg${backgroundGlobal + 3}`);

            backgroundGlobal += 3;
        }
    }
});