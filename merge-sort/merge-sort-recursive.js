function mergeSort(arr) {
  // Base case
  if (arr.length < 2) return arr

  // Divide the array in half and separate them into two sub-arrays
  const middle = Math.floor(arr.length / 2)
  const leftHalf = arr.slice(0, middle)
  const rightHalf = arr.slice(middle)

  // Recursion step
  return merge(mergeSort(leftHalf), mergeSort(rightHalf))
}

function merge(leftHalf, rightHalf) {
  sortedArray = []

  while (leftHalf.length && rightHalf.length) {
    if (leftHalf[0] <= rightHalf[0]) {
      // Remove and add the number
      sortedArray.push(leftHalf.shift())
    } else {
      sortedArray.push(rightHalf.shift())
    }
  }
  return [...sortedArray, ...leftHalf, ...rightHalf]
}


