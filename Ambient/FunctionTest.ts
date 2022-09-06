export type FunctionType={name:string,nickname:string,alive:boolean}
type isAlive= (value:FunctionType)=> boolean


export const filterCharacter = (characters:FunctionType[],name:string,isAlive:isAlive): FunctionType[]=>{
  return characters.filter(char => char && char.name.includes(name) && isAlive(char))
}