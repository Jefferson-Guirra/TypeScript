import dividir from '../Ts-script/toThrow'

describe('Testando divisões', () => {
  afterEach(()=> jest.clearAllMocks())
  it('Espero que não seja possivel a divisao por zero', () => {
    expect(() => dividir(0, 1)).not.toThrow()
  })
})
