import Messaging from './index'

  const creatSut= (value:string)=>{
    return new Messaging(value)
  }

describe('Messaging',()=>{
  afterEach(()=>jest.clearAllMocks())

  it('should return undefined',()=>{
    const sut = creatSut('jefferson')
    expect(sut.sendMessage('ola')).toBeUndefined()
  })

  it('should call console.log once',()=>{
    const sut = creatSut('oi')
    const consoleSpy = jest.spyOn(console,'log')
    sut.sendMessage('thanks')
    expect(consoleSpy).toHaveBeenCalledTimes(1)
  })

  it('should call console.log once', () => {
    const sut = creatSut('oi')
    const consoleSpy = jest.spyOn(console, 'log')
    sut.sendMessage('thanks')
    expect(consoleSpy).toHaveBeenCalledTimes(1)
  })

  it('should call console.log with "mensagem enviada" and msg',()=>{
    const sut = creatSut('oi')
    const consoleSpy = jest.spyOn(console,'log')
    sut.sendMessage('thanks')
    expect(consoleSpy).toHaveBeenCalledWith('mensagem enviada', 'thanks')
  })
  

})