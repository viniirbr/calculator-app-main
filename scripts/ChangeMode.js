export function changeMode(elementFromClass, counter) {

    for (let i=0; i<elementFromClass.length; i++) {
        var elementClasses = elementFromClass[i].className
        var regex;
        if (counter == 1) {
            elementClasses = elementClasses.replace(/theme3/g, `theme${counter}`)
            elementFromClass[i].className = elementClasses
        } else { 
            regex = new RegExp(`theme${counter-1}`, 'g');
            elementClasses = elementClasses.replace(regex, `theme${counter}`)
            elementFromClass[i].className = elementClasses
        }

    }
}