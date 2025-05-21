/* Generates fibonacci numbers using iteration */
function fibs(number) {
  // Initialize array
  const fibsArray = []

  for (i = 0; i < number; i++) {
    // Add 0, 1 as first two numbers
    if (fibsArray.length < 2) {
      fibsArray.push(i)
    } else {
      let arrayLength = fibsArray.length
      // Add last two numbers from the array
      let nextNumber = fibsArray[arrayLength - 1] + fibsArray[arrayLength - 2]
      fibsArray.push(nextNumber)
    }
  }

  return fibsArray
}

