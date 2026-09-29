const lecturas = ['21.5', '19', '', '23.5', 'error', '20']

function analizarLecturas(lecturas: string[]): {
  validas: number
  descartadas: number
  media: string
}{
  let validas = 0
  let descartadas = 0
  let suma = 0

  for (const lectura of lecturas){
    const valor = Number(lectura)
    if(lectura.trim() === '' || !Number.isFinite(valor)){
      descartadas ++
      continue
    }
      validas ++
      suma += valor
      console.log(valor >=22 ? 'Caluroso' : 'Fresco')
    }
    const media = validas===0 ? 'Sin datos' : (suma / validas).toFixed(1)
    return {validas, descartadas, media }

}
export function ejercicio01():void{
console.log(analizarLecturas(lecturas))
}
