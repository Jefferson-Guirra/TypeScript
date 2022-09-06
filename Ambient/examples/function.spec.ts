import { soma } from "../function";
type Function = (a:number,b:number)=>number
describe('Testando Funções',()=>{
afterEach(() => jest.clearAllMocks())
const createSut = (functionType:Function)=>functionType

it('Espero que soma de 1 + 2 = 3',()=>{
  const sut= createSut(soma)
  const consoleSpy = jest.spyOn(console,'log')
  expect(sut(1,2)).toBe(3)
  expect(consoleSpy).toBeCalledTimes(1)
})
})