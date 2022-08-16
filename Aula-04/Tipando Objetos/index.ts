type Person ={
  name:string,
  age:number,
  contacts: string[],
  years: number[],
  cpf: number | string,
  isAlive?:boolean
}


 
const person : Person = {
  name:'jefferson',
  age:23,
  contacts:['elaine','jeniffer','mirela'],
  years:[1998,2002],
  cpf:'07644444505'

}
console.log(person)