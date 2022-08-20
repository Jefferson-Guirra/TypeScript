abstract class Personagem {
  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number
  ) {}
  
  perderVida(ataque:number) : void{
    this.vida -= ataque
    console.log(`${this.nome} agora tem ${this.vida} pontos de vida.`)
  }
  atacar(person:Personagem) : void{
    this.bordao()
    person.perderVida(this.ataque)
  }
  abstract bordao():void;
}

class Arqueiro extends Personagem{
  bordao(): void {
      console.log('Por Baldur derrotarei todos os Orcs, AAAAAAAAAAAA')
  }
}
class Orc extends  Personagem{
  bordao(): void {
      console.log('Um pequeno verme, matarei lentamente.....')
  }
}
const arqueiro = new Arqueiro('Arqueiro',100,1000)
const orc = new Orc('Orc', 90, 1000)

arqueiro.atacar(orc)
arqueiro.atacar(orc)
arqueiro.atacar(orc)



//Funciona como um contrato quando aplicado a uma classe a mesma so pode ser extendida, em metodos ele obriga as classes que extenderam a classe mãe tenham este metodo.