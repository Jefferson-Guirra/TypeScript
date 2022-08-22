type Documento = {
  titulo:string,
  texto:string
  data ?: Date

}

const documento:Documento ={
 titulo:'titulo do texto',
 texto: 'o texto',
}

console.log(documento.data?.toDateString() ?? 'Ixi, não existe data')



//Operador de coalescência nula so vai checar dados do tipo null ou undefined