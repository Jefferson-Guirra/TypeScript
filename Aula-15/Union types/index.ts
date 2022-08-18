function addOrConcat(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') {
    console.log(a + b)
    return a + b
  }
  return `${a}${b}`
}

addOrConcat(10, 20)
addOrConcat('30', '200')
