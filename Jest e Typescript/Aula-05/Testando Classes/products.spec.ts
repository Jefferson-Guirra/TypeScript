import {Product} from '../index'

const creatSut = (name : string, price : number) : Product => {
  return new Product(name, price)
}

describe('should have propetries name and price', () => {
  afterEach(() => jest.clearAllMocks())

  it('should return undefined', () => {
    const newArray = [1,2,3]
    const sut = creatSut('bolacha',1.48)
    expect(sut).toHaveProperty('name','bolacha')
    expect(sut.price).toBeCloseTo(1.48)
    expect(sut.name).toBe('bolacha')
    expect(sut.name).toBeTruthy()

    expect(newArray).toHaveLength(3)

    expect(sut.price).toBeGreaterThanOrEqual(1.30)
    expect(sut.price).toBeLessThanOrEqual(1.70)
    
  })

  
})
