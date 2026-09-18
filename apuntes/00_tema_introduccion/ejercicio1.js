/*

// Ejercicio 1 de JavaScript
console.log("Hola mundo");

//tipos de datos en JavaScript
// String
// "" '' `` comillas francesas
// var let const
let nombre = "Grego"
let apellidos = "Lopez"
let aniosTrabajo = 20

console.log(`Hola, me llamo ${nombre} ${apellidos} y llevo trabajando ${aniosTrabajo}`)
//console.log(typeOff(String(aniosTrabajo)))
//console.log(typeOff(Number(apellidos)))

//Validaciones
// == <-- significa si el valor de la izquierda es igual el de la derecha
// === signifca si el vakor y tipo de la izquierda es igual al de la derecha

'5' === 5 //<-- false
'5' == 5  //<-- true


// ternarias evaluacion_expresion ? verdadero : false
//
const edad = "23"

edad >18 ? console.log("Eres mayor de edad") : console.log("Eres menor de edad")

*/

// dada la edad, los minutos y los segundos. 
// Comprobar previamente si la edad es un numero positivo y mayor que 18 y 
// si la hora y los minutos son valores validos dentro de nuestro sistema de numeracion
const edad = "10"
const minutos = 30
const segundos = 9

edad >0 console.log("Es correcto") : console.log("No es correcto")
edad >18 ? console.log("Es correcto") : console.log("No es correcto")

minutos<60 || minutos>0 ? console.log("Es correcto") : console.log("No es correcto")
segundos<60 || segundos>0 ? console.log("Es correcto") : console.log("No es correcto")
