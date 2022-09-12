import newArray from '../Ts-script/toContain'

describe('Usando o toContain', () => {
  it('espero que contenha santos', () => {
    jest.clearAllMocks()
    const createSut = () => newArray
    const expectArray = ['santos']
    const sut = createSut()
    expect(sut).toContain('santos')
    expect(sut).toEqual(expect.arrayContaining(expectArray))
  })
})
