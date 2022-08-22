type FilterCallback <U> = (
  value: U,
  array?: U[],
  index?: number
) => boolean

function meuFilter<T>(array: T[], callBackfn: FilterCallback<T>):T[] {
  const novoArray = []
  for (let i = 0; i < array.length; i++) {
    if (callBackfn(array[i])) {
      novoArray.push(array[i])
    }
  }

  return novoArray
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arrayFiltrado = meuFilter(array, value => value < 5)
