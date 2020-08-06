const userValueInput = prompt('Enter the first value to be calculated!');
const userOperatorInput = prompt('Enter an operation symbol such as +, -, /, *, or %');
const userValueInput2 = prompt('Enter the second value to be calculated!');

const userValueNumberfied = parseInt(userValueInput)
const userValueNumberfied2 = parseInt(userValueInput2)

switch(userOperatorInput) {
    case '+': 
    document.write(userValueNumberfied + userValueNumberfied2)
    break;
    case '-': 
    document.write(userValueNumberfied - userValueNumberfied2)
    break;
    case '/':
    document.write(userValueNumberfied / userValueNumberfied2)
    break;
    case '*':
    document.write(userValueNumberfied * userValueNumberfied2)
    break;
    case '%':
    document.write(userValueNumberfied % userValueNumberfied2)
    break;
    default:
    document.write('Value doesn\'t match any of the operation symbols, please refresh and use one of the working operation symbols')
}