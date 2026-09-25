// crear una funcion que mientras sea verdad compruebe 
// todos los numeros de una rray pasado como parametro
// guarde los positivos en un array los positivos y los negativos como negativo
// y calcule la suma de cada uno de los arrays

//@autor: Gregorio López.

// Declaracion de variables
function clasificarNumeros(numeros:number[]){
  const positivos:number[] = [] 
  const negativos:number[] = [] 
  let sumPositivos:number = 0 
  let sumNegativos:number = 0

  for(const numero of numeros){
    if(numero>0){
      //añadimos el numero al array de positivos
      //con el metodo push
      positivos.push(numero)
      sumPositivos += numero

    }else{
      negativos.push(numero)
      sumNegativos +=numero
    }
  }
  //antes de salir retornamos los valores pedidos
  return {
    positivos,
    negativos,
    sumPositivos,
    sumNegativos
  }

}

//-------------------inicio de la aplicación-------------
const datos:number[] = [1, -10,25, 11, 9, 5, -6, 8,-5, 9, 12, -10]
const resultado = clasificarNumeros(datos)

console.log("El array de positivos es: ",resultado.positivos)
console.log("------ Suma del array positivos: ",resultado.sumPositivos)
console.log(`El array de negativos es: `,resultado.negativos)
console.log("------ Suma del array negativos: ", resultado.sumNegativos)
