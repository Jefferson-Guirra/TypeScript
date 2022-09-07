import personName from "../Ts-script/instaceOf";
class Test {
  constructor(private age:number){}
}


describe('testing instanceOf',()=>{
  it('should class is instance of PersonName',()=>{
    const createSut = (className:new(name:string)=>personName,personName:string):personName =>{
      return new className(personName)
    }

    const sut = createSut(personName,'jefferson')
    const sut2 = new Test(22)
    expect(sut).toBeInstanceOf(personName)
    /*expect(sut2).toBeInstanceOf(personName)* testing error*/

  })
})