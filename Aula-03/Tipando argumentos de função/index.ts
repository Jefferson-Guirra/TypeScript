function greet (name:string,age?:number){
  console.log(`Ola me chamo ${name}`)
}

greet('jefferson',32)


type GreethMethod = (name:string)=> string