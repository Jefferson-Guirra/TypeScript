import { filterCharacter, FunctionType } from '../FunctionTest'

describe('filtreCharacter', () => {
  jest.clearAllMocks()
  it('filtra uma lista de personagens por um determinado nome', () => {
    const mockCharacter: FunctionType[] = [
      { name: 'bob sponja', nickname: 'calçaQuadrada',alive:true },
      {name:'bob', nickname:'bobinho',alive:true},
      { name: 'patrick', nickname: 'estrela',alive:false },
      { name: 'lula', nickname: 'molusco',alive:false }
    ]
    const mockisAlive = jest.fn((value:FunctionType)=> value.alive)
    const filtred = filterCharacter(mockCharacter,'bob',mockisAlive)
    const resultado = 2
    expect(filtred).toHaveLength(2)
    expect(filtred.length).toEqual(resultado)
    
  })
})
