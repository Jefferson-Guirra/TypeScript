export default function dividir(dividendo:number,divisor:number){
  if(divisor === 0){
     throw new Error('invalid dividendo')
  }
  return dividendo / divisor
}