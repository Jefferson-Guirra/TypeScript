describe('Primitive values',()=>{
  it('should test jest assertions',()=>{
    const number = 10
    expect(number).toBe(10)
    expect(number).toEqual(10)

    const obj1 = {
      a:5
    }

    const obj2 = {
      a:5
    }

    expect(number).not.toBeNull()
    expect(obj1).toEqual(obj2)

    expect(number).not.toBeFalsy()
    expect(number).toBeTruthy()

    expect(number).toBeGreaterThan(8)
    expect(number).toBeGreaterThanOrEqual(10)
    expect(number).toBeLessThanOrEqual(11)
    expect(number).toBeLessThan(11)

    expect(number).toBeCloseTo(10.0001)
    expect(number).toBeCloseTo(9.999)

    expect(number).not.toBeNull()
    expect(number).toHaveProperty('toString')
  })
})

describe ('Objects',()=>{
  it('should test jest assertions com object',()=>{
      const person = { name: 'Jefferson', age: 30 }
      const anotherPerson = { ...person }

      expect(person).toEqual(anotherPerson)
      expect(person).not.toHaveProperty('lastName')
      expect(person).toHaveProperty('age',30)
      expect(person.name).toBe('Jefferson')
  })


})