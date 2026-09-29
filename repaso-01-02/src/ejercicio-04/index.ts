type Producto = {
  id: number
  nombre: string
  precio: number
  rebajado: boolean
}

const productos: Producto[] = [
  { id:1,nombre:'Teclado',precio:25, rebajado:false},
  { id:2,nombre:'Ratón',precio:15, rebajado:true},
  { id:3,nombre:'Monitor',precio:180, rebajado:false},
  { id:4,nombre:'Altavoces',precio:45, rebajado:true},
  { id:5,nombre:'Webcam',precio:26, rebajado:false}
]
function buscarProducto(catalogo: Producto[], id:number): Producto | null{
const encontrado = catalogo.find((producto) => producto.id === id)
return encontrado ?? null
}
export function ejercicio04(): void {
for(const id of [3,99]){
const producto = buscarProducto(productos, id)
console.log(
producto !== null
? `${producto.nombre} ${producto.precio}€ `:`Producto ${id} no encontrado`
)
}
console.log(buscarProducto([],1))
}
