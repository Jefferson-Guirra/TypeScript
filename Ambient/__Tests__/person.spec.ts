import Escritor, { Ferramenta } from "../Ts-script/Person";



describe('mockando classes',()=>{
  it('should return o escritor escreveu com lapis',()=>{
    class lapis extends Ferramenta {
      escrever(): string {
        return 'caneta'
      }
    }
    const createSut = (
      className: new (name: string) => Escritor,
      name: string
    ): Escritor => {
      return new className(name)
    }
    const sut = createSut(Escritor, 'jefferson')
    const Lapis = new lapis('lapis')
    sut.Ferramenta = Lapis
    expect(sut.escrever()).toBe('O escritor escreveu com lapis')
    expect(sut.nome).toBe('jefferson')
  })

})