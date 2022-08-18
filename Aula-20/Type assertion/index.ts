//CONDICIONAL
const body = document.querySelector('body')
if(body) body.style.background ='red'

//NON-NULL ASSERTION (!)
const body1 = document.querySelector('body')!
body1.style.background ='red'

//TYPE ASSERTION
const body3 = document.querySelector('body') as HTMLBodyElement
body3.style.background = 'red'