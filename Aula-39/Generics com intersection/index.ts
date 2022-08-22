function unirObj <O1,O2>(obj1:O1,obj2:O2) : O1 & O2{
  return {...obj1,...obj2}
}

const obj1 = {
  name:'jefferson'
}

const obj2 = {
  idade:23
}

console.log(unirObj(obj1,obj2))