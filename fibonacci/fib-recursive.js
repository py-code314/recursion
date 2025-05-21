// /* Generates fibonacci numbers using recursion */
function fibsRec(number) {
  // Base cases
  if (number === 1) {
    return [0]
  } else if (number === 2) {
    return [0, 1]
  } else {
    // Recursive step
    const fibsArray = fibsRec(number - 1)

    // Add last two numbers of array
    fibsArray.push(
      fibsArray[fibsArray.length - 1] + fibsArray[fibsArray.length - 2]
    )
    return fibsArray
  }
 
}


