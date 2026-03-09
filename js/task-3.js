const filterArray = function (numbers, value) {
  const newArray = [];
  ////////    1 solution
  // for (const arg of arguments[0]) {
  //   if (arg > value) {
  //     newArray.push(arg);
  //   }
  // }
  ////////    2 solution
  // for (let i = 0; i < numbers.length; i += 1) {
  //   if (numbers[i] > value) {
  //     newArray.push(numbers[i]);
  //   }
  // }
  ////////    3 solution
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > value) {
      newArray[newArray.length] = numbers[i];
    }
  }

  return newArray;
};
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
