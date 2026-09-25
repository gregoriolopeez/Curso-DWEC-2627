//crear una funcion que se le pase como parametro un texto y lo encripte.
//
//Añadir una funcion inversa que una cadena de texto la encripte y la desencripte
//Nota: buscar alguna libreria que permita generar cadenas encriptadas de forma segura
//@autor: Gregorio López
//Investigacion: cryptojs,  
//

import CryptoJS from "crypto-js" 
const clave = "Guay soy y que buenos los alumnos"


/**
    *Recibe: string
    *Devuelve: texto_cifrado
    */


function encriptar(texto:string):string{
  textoEncriptado: string = CryptoJS.AES.encrypt(texto,clave).toString()
  return textoEncriptado
}
function descriptar(texto:string):string{ 
  const textoCasiDesencriptado : string = CryptoJS.AES.decrypt(texto:clave)
  const textoOriginal : string = textoCasiDesencriptado .toString(CryptoJS.enc.Utf8)
  return textoOriginal
  
}

export function ejecutarEjercicio2():void{
  const mensaje:string = "hola mundo"
  //encriptemos
  const mensajeEncriptado: string = encriptar(mensaje)
  console.log("El mensaje encriptado es: ",mensajeEncriptado)
  console.log(`El mensaje ${mensaje} encriptado se convierte en ${mensajeEncriptado}, y al desencriptar se convierte en ${desencriptar(mensajeEncriptado)}`)
}
