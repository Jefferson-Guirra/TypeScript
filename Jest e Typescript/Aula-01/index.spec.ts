describe ('Testando alguma coisa',()=>{
  it('Should return one', () => {
    const number = 1
    expect(number).toBe(1)
  })
  
})

describe ('Testando outra coisa',()=>{
  test('Should return Jefferson',()=>{
    const nome : string = 'Jefferson'
    expect(nome).toBe('Jefferson')
  })
})
