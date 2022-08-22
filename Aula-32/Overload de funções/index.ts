type Adder = {
  (x:number):number,
  (x:number,y:number):number,
  (...args:number[]):number


}


const adder : Adder  = (x:number,y?:number,...args:number[]) =>{
  if(args.length > 0) args.reduce((acc, valor) => acc + valor, 0) + (y || 0)
  return x + (y || 0)
}

console.log(adder(1))
console.log(adder(1,2))