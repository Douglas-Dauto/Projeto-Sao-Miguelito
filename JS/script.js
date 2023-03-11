var itensHeader = document.querySelectorAll('.lista__item')

itensHeader[0].setAttribute('class', 'lista__item--bg lista__item')

function btn0() {
    itensHeader[0].setAttribute('class', 'lista__item--bg lista__item')
    itensHeader[1].removeAttribute('class', 'lista__item--bg')
    itensHeader[2].removeAttribute('class', 'lista__item--bg')
    itensHeader[3].removeAttribute('class', 'lista__item--bg')
    itensHeader[1].setAttribute('class', 'lista__item')
    itensHeader[2].setAttribute('class', 'lista__item')
    itensHeader[3].setAttribute('class', 'lista__item')
}

function btn1() {
    btn0()
    itensHeader[0].removeAttribute('class', 'lista__item--bg')
    itensHeader[0].setAttribute('class', 'lista__item')
    itensHeader[1].setAttribute('class', 'lista__item lista__item--bg')
}

function btn2() {
    btn1()
    itensHeader[1].removeAttribute('class', 'lista__item--bg')
    itensHeader[1].setAttribute('class', 'lista__item')
    itensHeader[2].setAttribute('class', 'lista__item lista__item--bg')
}

function btn3() {
    btn2()
    itensHeader[3].setAttribute('class', 'lista__item lista__item--bg')
    itensHeader[2].removeAttribute('class', 'lista__item--bg')
    itensHeader[2].setAttribute('class', 'lista__item')
}

itensHeader[0].addEventListener('click', btn0)
itensHeader[1].addEventListener('click', btn1)
itensHeader[2].addEventListener('click', btn2)
itensHeader[3].addEventListener('click', btn3)