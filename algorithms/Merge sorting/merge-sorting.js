const merge = (leftSubArr, rightSubArr) => {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftSubArr.length && rightIndex < rightSubArr.length) {
    if (leftSubArr[leftIndex] < rightSubArr[rightIndex]) {
      result.push(leftSubArr[leftIndex]);
      leftIndex += 1;
    } else {
      result.push(rightSubArr[rightIndex]);
      rightIndex += 1;
    }
  }

  return result.concat(
    leftSubArr.slice(leftIndex),
    rightSubArr.slice(rightIndex)
  );
};

const mergeSorting = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSorting(arr.slice(0, mid));
  const right = mergeSorting(arr.slice(mid));

  return merge(left, right);
};

const list = [3, 1, 5, 56, 32, -6];

const result = mergeSorting(list);
console.log(result);
