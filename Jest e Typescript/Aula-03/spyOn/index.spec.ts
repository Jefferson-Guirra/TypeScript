import Test from './index'

describe('Persistency',()=>{
  afterEach(()=>jest.clearAllMocks())
  it('should return undefined',()=>{
    // System under test
    const sut = new Test('jefferson')
    expect(sut.saveOrder()).toBeUndefined()
  })

  it('should call console.log once',()=>{
    const sut = new Test ('Jefferson')
    const consoleSpy = jest.spyOn(console,'log')
    sut.saveOrder()
    expect(consoleSpy).toHaveBeenCalledTimes(1)
  })

  
  it('should call console.log with "Pedido salvo com sucesso...."', () => {
    const sut = new Test('Jefferson')
    const consoleSpy = jest.spyOn(console, 'log')
    sut.saveOrder()
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso....')
  })
})