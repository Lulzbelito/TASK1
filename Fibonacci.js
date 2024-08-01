var numberProvided

var startNumber = [0, 1]
var saved

do {
    numberProvided = Number(prompt("Provide number"))
    console.log(isNaN(numberProvided))
    console.log(numberProvided.length)
} while (isNaN(numberProvided));


function fibonacciF(startNumber, saved) {
    for (let index = 0; index < numberProvided; index++) {
        console.log(startNumber[0])
        saved = startNumber[1]
        startNumber[1] = startNumber[0] + startNumber[1]
        startNumber[0] = saved

    }
}

fibonacciF(startNumber)


