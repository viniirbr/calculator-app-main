export function changeMode(elementFromClass, theme) {

    for (let i=0; i<elementFromClass.length; i++) {
        var elementClasses = elementFromClass[i].className
        var regex;
        if (theme == 1) {
            elementClasses = elementClasses.replace(/theme3/g, `theme${theme}`)
            elementFromClass[i].className = elementClasses
        } else { 
            regex = new RegExp(`theme${theme-1}`, 'g');
            elementClasses = elementClasses.replace(regex, `theme${theme}`)
            elementFromClass[i].className = elementClasses
        }

    }
}