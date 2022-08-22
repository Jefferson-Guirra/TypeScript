//Record cria uma chave para o tipo
const objeto1 : Record<string,string | number> ={
  name:'jefferson',
  sobrenome:'guirra',
  idade:23
}
//Required torna propriedades obrigatorias
type PessoaProtocol = {
  nome?:string,
  sobrenome?:string,
  idade?:number
}

type PessoaRequired = Required<PessoaProtocol>


const obj2 : PessoaRequired= {
  idade:23,
  nome:'jefferson',
  sobrenome:'idade'
}

//Partial torna atributos obrigatorios em opcionais
type PessoaPartial = Partial<PessoaRequired>

const obj3 : PessoaPartial ={

}

//ReadOnly
type PessoaReadOnly = Readonly<PessoaRequired>

//Pick
type PessoaPick = Pick<PessoaRequired,'nome' | 'idade'> 

//Extract e Exclude 
type ABC = 'A' | 'B' | 'C'
type CDE = 'C' | 'D' | 'E'
type TipoExclude = Exclude<ABC,CDE>
type TipoExtract = Extract<ABC,CDE>



//Exemplos
type AccountMongo = {
  _id:string,
  name:string,
  age:number
}

type AccountApi ={
  id:string,
  name:string,
  age:number
}
//ou
type tipoApi = Pick< AccountMongo,Exclude<keyof AccountMongo,'_id'>> & {
  id:string
}
const accountMongo:AccountMongo ={
  _id:'ldkcjlkpfçlel',
  age:23,
  name:'jefferson'
}

function mapAccount (AccountMongo:AccountMongo) : tipoApi{
  const {_id,...AccountData} = AccountMongo
  return {...AccountData, id:_id}
}

console.log(mapAccount(accountMongo))