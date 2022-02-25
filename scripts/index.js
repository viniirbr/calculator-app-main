import { changeMode } from './changeMode.js'
import { handleKeypadEvents } from './handleKeypadEvents.js'

const toogleBall = document.querySelector('[toogleBall]')


var theme = 1;
toogleBall.addEventListener('click', () => {
    toogleBall.style = 'left: 0px'
    theme++
    if (theme == 4) {
        theme = 1;
    }
    switch (theme) {
        case 1: toogleBall.style = 'left: -19px'; break;
        case 2: toogleBall.style = 'left: 0px'; break;
        case 3: toogleBall.style = 'left: 19px'; break;
    }

    const buttons = document.querySelectorAll('.button')
    changeMode(buttons, theme)

    const body = document.getElementsByTagName('body')
    changeMode(body, theme)

    const keypad = document.querySelectorAll('.keypad')
    changeMode(keypad, theme)

    const headerVisor = document.querySelectorAll('.header__visor')
    changeMode(headerVisor, theme)

    const upperHeaderThemeTitle = document.querySelectorAll('.upperHeader__themeTitle')
    changeMode(upperHeaderThemeTitle, theme)

    const upperHeaderTitle = document.querySelectorAll('.upperHeader__title')
    changeMode(upperHeaderTitle, theme)

    const toogle = document.querySelectorAll('.upperHeader__toogle')
    changeMode(toogle, theme)

    const toogleBallMod = document.querySelectorAll('.upperHeader__toogle-ball')
    changeMode(toogleBallMod, theme)

    const toogleOptions = document.querySelectorAll('.upperHeader__toogle-options')
    changeMode(toogleOptions, theme)

})

handleKeypadEvents()



