import { filterCharacter, FunctionType } from '../Ts-script/FunctionTest'
import * as  Logger  from '../Ts-script/Logger';


describe('filtreCharacter', () => {
  jest.clearAllMocks()
  it('filtra uma lista de personagens por um determinado nome', () => {
    const mockCharacter: FunctionType[] = [
      { name: 'bob sponja', nickname: 'calçaQuadrada', alive: true },
      { name: 'bob', nickname: 'bobinho', alive: true },
      { name: 'bob', nickname: 'bobinho', alive: true },
      { name: 'patrick', nickname: 'estrela', alive: false },
      { name: 'lula', nickname: 'molusco', alive: false }
    ]
    const mockisAlive = jest.fn((value:FunctionType)=> value.alive)
    const consoleSpy = jest.spyOn(Logger,'default')
    const filtred = filterCharacter(mockCharacter, 'bob',mockisAlive)
    const resultado = 3
    expect(filtred).toHaveLength(3)
    expect(filtred.length).toEqual(resultado)
    expect(mockisAlive).toHaveBeenCalledTimes(resultado)
    expect(consoleSpy).toHaveBeenCalledTimes(mockCharacter.length)
  })
})
