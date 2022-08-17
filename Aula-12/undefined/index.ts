type CreatePerson = {
  firstName: string,
  lastName?:string,
}


function createPerson(firstName:string,lastName?:string):CreatePerson{
  return{
    firstName,
    lastName
  }
}

console.log(createPerson('jefferson'))