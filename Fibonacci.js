function fibonacciF() {
    var numberProvided
    var startNumber = [0, 1]
    var saved
    var results = []
    do {
        numberProvided = Number(prompt("Provide number of results / Esc to exit"))
    } while (isNaN(numberProvided));

    for (let index = 0; index < numberProvided; index++) {
        results.push(startNumber[0])
        saved = startNumber[1]
        startNumber[1] = startNumber[0] + startNumber[1]
        startNumber[0] = saved
    }
    console.log(results)
    document.getElementById("results").innerHTML = results
}

fibonacciF()

document.getElementById("run").onclick = fibonacciF