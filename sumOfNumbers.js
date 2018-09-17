
const givenNums = [2, 4, 6, 8];

function sumFor(sumList) {
  let sum = 0;
  for (let i = 0; i < sumList.length; i++) {
    sum += sumList[i];
  }
  return sum;
}

function sumWhile(sumList) {
  let sum = 0;
  let j = 0;
  while (j < sumList.length) {
    sum += sumList[j];
    j++;
  }
  return sum;
}

function sumRecursion(sumList) {
  if (sumList.length === 0) {
    return 0;
  }
  return sumList[0] + sumRecursion(sumList.slice(1, sumList.length));
}

function sumTheSimpleWay(sumList) {
  const retNum = _.reduce(sumList, function (memo, num) { return memo + num; }, 0);
  return retNum;
}

console.log(sumFor(givenNums));
console.log(sumWhile(givenNums));
console.log(sumRecursion(givenNums));
console.log(sumTheSimpleWay(givenNums));
