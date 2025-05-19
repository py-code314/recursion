/* Generates fibonacci numbers using iteration */
function fib(number) {
  // Initialize array
  const fibArray = []

  for (i = 0; i < number; i++) {
    // Add 0, 1 as first two numbers
    if (fibArray.length < 2) {
      fibArray.push(i)
    } else {
      let arrayLength = fibArray.length
      // Add last two numbers from the array
      let nextNumber = fibArray[arrayLength - 1] + fibArray[arrayLength - 2]
      fibArray.push(nextNumber)
    }
  }

  return fibArray
}

