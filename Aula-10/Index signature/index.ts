type ObjetoA = {
  chaveA: String,
  chaveB:string,
  [key:string]:unknown
}

const objectA:ObjetoA={
  chaveA:'valor A',
  chaveB:'valor B',
}


objectA.chaveA = 'novo valor'
objectA.chaveB = 'outro valor'
objectA.chaveC= 'valor novo criado'
console.log(objectA)