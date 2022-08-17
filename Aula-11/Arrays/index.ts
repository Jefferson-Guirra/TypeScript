type Person = {
  name: string
  age: number
}

const person: Person[] = []

person.push({ age: 23, name: 'jefferson' })



function multiplicaArgs(...args: number[]) {
  return arguments
}

console.log(multiplicaArgs(1, 2, 3))
