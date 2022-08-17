interface Person {
  name:string,
  age:number
}

interface Person {
  sex  ?: 'female' | 'male'
}

const person : Person ={
  age:22,
  name:'Jefferson',
}

interface Animal{
  sex ?:'female' | 'male'
  hungry: boolean
}

interface Human extends Animal{
  name:string,
  age:number
}

const getStatus :Human = {
age:22,
name:'jefferson',
hungry:false,
}

/*É Recomendavel usar somente uma interface*/