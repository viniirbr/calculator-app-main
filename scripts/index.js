import { changeMode } from './ChangeMode.js'

const toogleBall = document.querySelector('[toogleBall]')
const buttons = document.querySelectorAll('.button')


var counter = 1;
toogleBall.addEventListener('click', () => {
    toogleBall.style = 'left: 0px'
    counter++
    if (counter == 4) {
        counter = 1;
    }
    switch (counter) {
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

const headerVisor = document.querySelector('.header__visor')
const operations = ['+', '-', 'x', '/']

buttons.forEach((but) => {
    but.addEventListener('click', () => {
        var buttonClicked = but.textContent
        var textDisplay = headerVisor.value; 
        console.log(textDisplay)       

        if (buttonClicked !== 'RESET' && buttonClicked !== 'DEL' && buttonClicked !== '=') {
            textDisplay = textDisplay.concat(buttonClicked)
            headerVisor.value = textDisplay
        }

        if (buttonClicked == 'DEL') {
            textDisplay = textDisplay.slice(0, (textDisplay.length) - 1)
            headerVisor.value = textDisplay
        }

        if (buttonClicked == 'RESET') {
            textDisplay = textDisplay.slice(0, 0)
            headerVisor.value = textDisplay
        }

        if (operations.includes(textDisplay.charAt(textDisplay.length-2))) {
            var firstPart = textDisplay.slice(0, textDisplay.length-2)
            var secondPart = textDisplay.slice(textDisplay.length-1, textDisplay.length)
            textDisplay = firstPart.concat(secondPart)
            headerVisor.value = textDisplay
        }
    })
})


