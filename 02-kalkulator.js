const prompt = require('prompt-sync')()
   

function kalkulator(p1, p2, p3) {
    var kimenet = null
    console.log("Az első szám:", p1)
    console.log("A második szám:", p2)
    console.log("A művelet:", p3)
    if (isNaN(p1) || isNaN(p2)) { 
        console.log("Legalább az egyik bemenő szám formátuma nem megfelelő")
        return null
    }
    p1 = parseFloat(p1)
    p2 = parseFloat(p2)
    switch (p3) {
        case "+":
            return p1 + p2
            break
        case "-":
            return p1 - p2
            break
        case "*":
            return p1 * p2
            break
        case "/":
            return p1 / p2
            break
        case "^":
            return Math.pow(p1, p2)
            break
        case "v":
            return Math.pow(p1, 1 / p2)
            break
        default:
            console.log("Ismeretlen művelet:", p3)
            return null
    }
    return kimenet
}


var a = prompt("Vidd be az első számot: ")
while (isNaN(a) || a == "") {
    console.log("Nem megfelelő formátum!")
    a = prompt("Vidd be az első számot: ")
}
var b = prompt("Vidd be a második számot: ")
while (isNaN(b) || b == "") {
    console.log("Nem megfelelő formátum!")
    b = prompt("Vidd be az második számot: ")
}
var c = prompt("Vidd be a matematikai műveletet: ")
while ((c != "+" && c != "-" && c != "*" && c != "/" && c != "^" && c != "v") || c == "") {
    console.log("Nem megfelelő művelet!")
    c = prompt("Vidd be a matematikai műveletet: ")
}

console.log(kalkulator(a, b, c))