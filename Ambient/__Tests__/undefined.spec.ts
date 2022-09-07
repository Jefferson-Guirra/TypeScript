import Undefined from "../Ts-script/toBeUndefine";

describe('testing toBe undefined',()=>{
  afterEach(()=>jest.clearAllMocks())
  it('should return undefined',()=>{
  const createSuit = (className: new()=> Undefined):Undefined =>{
    return new className
  }
  const suit = createSuit(Undefined)
  expect(suit.person).toBeUndefined()
  })
})