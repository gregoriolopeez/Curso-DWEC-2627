// funcion que le pase como parametro un número en grados celsius y lo transforma a grados kelvin
//v1
function celsiusToKelvin(celsius){
  let kelvin = celsius + 273.15
  return kelvin

}

//V2
function celsiusToKelvin2(celsius){
  return celsius + 273.15

}

//V3
const celsiusToKel = (celsius) => {
  return celsius + 273.15
}

//V4
const cToK = (c) => c + 273.15




//funcion que le pase como parametro dos numeros y me los ordene
function ordenar(a,b){
if(a<b){
  return [a,b]
}else{
  return [b,a]
}
}




//funcion que pase de Celsius a Kelvin pero comprobando que Celsius es un numero, 
//que la temperatura no puede estar por debajo del cero absoluto (-273)
//y el resultado me lo das con solo 2 cifra decimal
// como truncamos un numero a 2 cifras
function celsiusToKelvin3(celsius){
  if(typeof celsius !== "number"){
    return "Error"
  }
  if(celsius < -273.15){
  return "Error"
  }
   
}

