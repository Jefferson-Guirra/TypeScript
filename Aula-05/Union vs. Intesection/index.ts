
type Cpf = number | string
function findPerson (cpf:Cpf){
  if(typeof cpf === 'string'){
    console.log(cpf.toLowerCase())
  }
  else{
    console.log(cpf.toFixed())
  }
}

findPerson(1.3)

type Animal = {sex:'male' | 'female'}
type Human = {hungry:boolean}
type Person = Animal & Human

function getPersonStatus(person:Person){
  if(person.hungry){
    console.log('Está com fome')
  }

  else{
    console.log('não esta com fome')
  }
}


const person:Person ={
  sex:'male',
  hungry:false
}

getPersonStatus(person)