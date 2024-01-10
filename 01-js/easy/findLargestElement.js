/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let largest = numbers[0];

    //Legacy For Loop
    // for (let i = 1; i < numbers.length; i++) {
    //     if (largest < numbers[i]) largest = numbers[i];
    // }

    //Adv. For Loop
    // for (let number of numbers) {
    //     if (number > largest) largest = number;
    // }

    // Sorting the input array
    numbers.sort((a, b) => a - b);
    return numbers[numbers.length - 1];
}

module.exports = findLargestElement;