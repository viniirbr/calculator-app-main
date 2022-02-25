export const calculate = (num1, num2, operation) => {
    var result;
    switch (operation) {
        case '+': 
        result = num1+num2;
        return result;
        case '-': 
        result = num1-num2;
        return result;
        case 'x': 
        result = num1*num2;
        return result;
        case '/': 
        result = num1/num2;
        return result;
    }
}