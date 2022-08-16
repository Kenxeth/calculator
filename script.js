// to make sure if the user clicked on a symbol (to get arrayX & arrayY)
let clickedSymbol = false;
// to keep track of what sign the user clicked on
let additionSymbol = false;
let subtractSymbol = false;
let divisionSymbol = false;
let multiplicationSymbol = false;
// x + y = z
// 11
let arrayX = []
let arrayY = []

const number_0 = document.querySelector(".zero");
const number_1 = document.querySelector(".one");
const number_2 = document.querySelector(".two");
const number_3 = document.querySelector(".three");
const number_4 = document.querySelector(".four");
const number_5 = document.querySelector(".five");
const number_6 = document.querySelector(".six");
const number_7 = document.querySelector(".seven");
const number_8 = document.querySelector(".eight");
const number_9 = document.querySelector(".nine");

// so that the user can choose same number multiple times + 
// if the user inputs the number for the first time it'll use innerHTML
// if they do it more than once it'll append it
var count = 1

// numbers
number_0.onclick = () => {
    if (count == 1) {
        document.querySelector(".output").innerHTML = "0"
        count++
    } else {
        document.querySelector(".output").append("0")
    }

    if (clickedSymbol == false) {
        arrayX.push("0")
    } else {
        arrayY.push("0")
    }
}
number_1.onclick = () => {
    if (count == 1) {
        document.querySelector(".output").innerHTML = "1"
        count++
    } else {
        document.querySelector(".output").append("1")
    }

    if (clickedSymbol == false) {
        arrayX.push("1")
    } else {
        arrayY.push("1")
    }
}
number_2.onclick = () => {
    if (count == 1) {
        document.querySelector(".output").innerHTML = "2"
        count++
    } else {
        document.querySelector(".output").append("2")
    }
    if (clickedSymbol == false) {
        arrayX.push("2")
    } else {
        arrayY.push("2")
    }
}
number_3.onclick = () => {
    if (count == 1) {
        document.querySelector(".output").innerHTML = "3"
        count++
    } else {
        document.querySelector(".output").append("3")
    }

    if (clickedSymbol == false) {
        arrayX.push("3")
    } else {
        arrayY.push("3")
    }
}
number_4.onclick = () => {
    if (count == 1) {
        document.querySelector(".output").innerHTML = "4"
        count++
    } else {
        document.querySelector(".output").append("4")
    }

    if (clickedSymbol == false) {
        arrayX.push("4")
    } else {
        arrayY.push("4")
    }
}
number_5.onclick = () => {
    if (count == 1) {
        document.querySelector(".output").innerHTML = "5"
        count++
    } else {
        document.querySelector(".output").append("5")
    }

    if (clickedSymbol == false) {
        arrayX.push("5")
    } else {
        arrayY.push("5")
    }
}
number_6.onclick = () => {
    if (count == 1) {
        document.querySelector(".output").innerHTML = "6"
        count++
    } else {
        document.querySelector(".output").append("6")
    }

    if (clickedSymbol == false) {
        arrayX.push("6")
    } else {
        arrayY.push("6")
    }
}
number_7.onclick = () => {
    if (count == 1) {
        document.querySelector(".output").innerHTML = "7"
        count++
    } else {
        document.querySelector(".output").append("7")
    }

    if (clickedSymbol == false) {
        arrayX.push("7")
    } else {
        arrayY.push("7")
    }
}
number_8.onclick = () => {
    if (count == 1) {
        document.querySelector(".output").innerHTML = "8"
        count++
    } else {
        document.querySelector(".output").append("8")
    }

    if (clickedSymbol == false) {
        arrayX.push("8")
    } else {
        arrayY.push("8")
    }
}
number_9.onclick = () => {
    if (count == 1) {
        document.querySelector(".output").innerHTML = "9"
        count++
    } else {
        document.querySelector(".output").append("9")
    }

    if (clickedSymbol == false) {
        arrayX.push("9")
    } else {
        arrayY.push("9")
    }
}

// clear(resets the arrays and output)
const clear = document.querySelector(".clear");
clear.onclick = () => {
    document.querySelector(".output").innerHTML = "0"
    clickedSymbol = false;
    arrayX = []
    arrayY = []
    count = 1;
}

// symbols
const addition = document.querySelector(".plus_symbol");
const subtraction = document.querySelector(".subtract_symbol");
const multiplication = document.querySelector(".multiplication_sign");
const division = document.querySelector(".division_sign");;

const addNumber = (x, y) => x + y
const subtractNumber = (x, y) => x - y
const multiplyNumber = (x, y) => x * y
const divideNumber = (x, y) => x / y


const equal_sign = document.querySelector(".equal_sign")

equal_sign.onclick = () => {
    let newArrayX = arrayX.join('')
    let newArrayY = arrayY.join('')

    let x = parseInt(newArrayX)
    let y = parseInt(newArrayY)
 
    if(additionSymbol == true){
        const result = addNumber(x,y)
        document.querySelector(".output").innerHTML = result;
        additionSymbol = false;
    }else if(subtractSymbol == true){
        const result = subtractNumber(x,y)
        document.querySelector(".output").innerHTML = result;
        subtractSymbol = false;
    }else if(multiplicationSymbol == true){
        const result = multiplyNumber(x,y)
        document.querySelector(".output").innerHTML = result;
        multiplicationSymbol = false;
    }else if(divisionSymbol == true){
        const result = divisionSymbol(x,y)
        document.querySelector(".output").innerHTML = result;
        divisionSymbol = false;
    }
    arrayX = []
    arrayY = []
}

addition.onclick = () => {
    document.querySelector(".output").append("+");
    clickedSymbol = true;
    additionSymbol = true;
}
subtraction.onclick = () => {
    document.querySelector(".output").append("-");
    clickedSymbol = true;
    subtractSymbol = true;
}

multiplication.onclick = () => {
    document.querySelector(".output").append("x");
    clickedSymbol = true;
    multiplicationSymbol = true;
}
division.onclick = () => {
    document.querySelector(".output").append("/");
    clickedSymbol = true;
    divisionSymbol = true;
}

// some try and catch errors here down below
// add some keybinds as well cause its getting annoying
// 1) if the user clicks more than one sign at a time then throw a error
// if(){
//     alert("Please enter only one symbol at a time.")
// }

// 2) if the user clicks numbers after the result then throw an error