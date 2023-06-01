const itensHeader = document.querySelectorAll('.lista__item');
const videoWhat = document.getElementsByClassName('contain9__what');
const tumbVideo = document.getElementsByClassName('imgTumbVideo');

itensHeader[0].setAttribute('class', 'lista__item--bg lista__item')

function btn(valor) {
    for(let i = 0; i < itensHeader.length; i++) {
        itensHeader[i].setAttribute('class', 'lista__item');
        itensHeader[valor].setAttribute('class', 'lista__item lista__item--bg');
    }
}

for(let i = 0; i < itensHeader.length; i++) {
    itensHeader[i].addEventListener('click', () => btn(i))
}

document.addEventListener('scroll', () => {
    if(window.scrollY < 600) {
        btn(0);
    } else if(window.scrollY <= 1299) {
        btn(1);
    } else if(window.scrollY <= 4265) {
        btn(2)
    } else {
        btn(3);
    }
});


for(let i = 0; i < tumbVideo.length; i++) {
    tumbVideo[i].addEventListener('click', () => {
        tumbVideo[i].setAttribute('class', 'imgTumbVideo imgTumbVideoOff');
        videoWhat[i].play();
    });
}
