type Veiculo={
  marca: string;
  ano:number;
}
type car ={
  brand: Veiculo['marca'],
  ano: Veiculo['ano']
}

const carro : car ={
  ano:1998,
  brand:'Ferrari'
}

console.log(carro)