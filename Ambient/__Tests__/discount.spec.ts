import { Discount, FifityPercentDiscount, NoDiscount,TenPercentDiscount } from '../Ts-script/index'

const creatSut = (className: new()=> Discount): Discount => {
  return new className
}

describe('Should have properties name and price', () => {
  afterEach(() => jest.clearAllMocks())

  it('should have no discount', () => {
    const sut = creatSut(NoDiscount)
    expect(sut.calculate(10.99)).toBeCloseTo(10.99)
  })

    it('should apply 50% disccount on', () => {
      const sut = creatSut(FifityPercentDiscount)
      expect(sut.calculate(10)).toBeCloseTo(5)
    })

    it('should apply 10% discount',()=>{
      const sut = creatSut(TenPercentDiscount)
      expect(sut.calculate(10)).toBeCloseTo(9)
    })
})
