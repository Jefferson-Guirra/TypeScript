import mathPow from "../Ts-script/MathPow";

describe('Calculate area of square',()=>{
  const createSut = ()=> mathPow
  afterEach(()=>jest.clearAllMocks())
  it('passed the value 2, it should return 4',()=>{
    const sut = createSut()
    expect(sut(2)).toBe(4)
  })
  it('passed the value 17, return 289',()=>{
    const sut = createSut()
    expect(sut(17)).toBe(289)
  })

})