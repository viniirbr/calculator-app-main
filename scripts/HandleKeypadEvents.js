import { calculate } from './Calculate.js'

export function handleKeypadEvents() {
    const headerVisor = document.querySelector('.header__visor')
    var textDisplay = ''
    const operations = ['+', '-', 'x', '/']
    const buttons = document.querySelectorAll('.button')

    buttons.forEach((but) => {
        but.addEventListener('click', () => {
            var buttonClicked = but.textContent

            if (textDisplay.length <= 15) { //limit the number of digits
                //Dealing with number keys and operation keys
                if (buttonClicked !== 'RESET' && buttonClicked !== 'DEL' && buttonClicked !== '=') {
                    textDisplay = textDisplay.concat(buttonClicked)
                    headerVisor.value = textDisplay
                }

                //DELETE functionality
                if (buttonClicked == 'DEL') {
                    textDisplay = textDisplay.slice(0, (textDisplay.length) - 1)
                    headerVisor.value = textDisplay
                }

                //RESET functionality
                if (buttonClicked == 'RESET') {
                    textDisplay = textDisplay.slice(0, 0)
                    headerVisor.value = textDisplay
                }

                //user cannot type two operations in sequence and can only do a calculation at once 
                if (operations.includes(buttonClicked)) {
                    for (op of operations) {
                        if (textDisplay.indexOf(op) != -1) {
                            if (textDisplay.indexOf(op) == textDisplay.length - 2) {
                                var firstPart = textDisplay.slice(0, textDisplay.length - 2)
                                var secondPart = textDisplay.slice(textDisplay.length - 1, textDisplay.length)
                                textDisplay = firstPart.concat(secondPart)
                                headerVisor.value = textDisplay
                            } else if (textDisplay.indexOf(op) != textDisplay.length - 1) {
                                textDisplay = textDisplay.slice(0, textDisplay.length - 1)
                                headerVisor.value = textDisplay
                            }
                        }
                    }
                }

                if (buttonClicked == '=') {
                    for (var op of operations) {
                        //textDisplay.indexOf(op)
                        if (textDisplay.indexOf(op) != -1) {
                            var numberToCalc = textDisplay.split(op)
                            textDisplay = (calculate(Number(numberToCalc[0]), Number(numberToCalc[1]), op)).toString()
                            headerVisor.value = textDisplay
                            break
                        }
                    }
                }
            }
        })
    })
}