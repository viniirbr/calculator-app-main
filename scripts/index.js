import { changeMode } from './ChangeMode.js'

const toogleBall = document.querySelector('[toogleBall]')

var counter = 1;
toogleBall.addEventListener('click', () => {
    toogleBall.style = 'left: 0px'
    counter++
    if (counter==4) {
        counter = 1;
    }
    switch(counter) {
        case 1: toogleBall.style = 'left: -19px'; break;
        case 2: toogleBall.style = 'left: 0px'; break;
        case 3: toogleBall.style = 'left: 19px'; break;
    }

    const buttons = document.querySelectorAll('.button')
    changeMode(buttons, counter)

    const body = document.getElementsByTagName('body')
    changeMode(body, counter)

    const keypad = document.querySelectorAll('.keypad')
    changeMode(keypad, counter)

    const headerVisor = document.querySelectorAll('.header__visor')
    changeMode(headerVisor, counter)

    const upperHeaderThemeTitle = document.querySelectorAll('.upperHeader__themeTitle')
    changeMode(upperHeaderThemeTitle, counter)

    const upperHeaderTitle = document.querySelectorAll('.upperHeader__title')
    changeMode(upperHeaderTitle, counter)
    
    const toogle = document.querySelectorAll('.upperHeader__toogle')
    changeMode(toogle, counter)

    const toogleBallMod = document.querySelectorAll('.upperHeader__toogle-ball')
    changeMode(toogleBallMod, counter)

    const toogleOptions = document.querySelectorAll('.upperHeader__toogle-options')
    changeMode(toogleOptions, counter)

})


