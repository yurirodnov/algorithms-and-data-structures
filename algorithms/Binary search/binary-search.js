// O log n, n - array.length;

const list = [2, 5, 13, 21, 35, 48, 200];
const goal = 48;

// Loop variant
const binarySearch = (arr, goal) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (goal === arr[mid]) {
      return mid;
    } else if (goal < arr[mid]) {
      right = mid - 1;
    } else if (goal > arr[mid]) {
      left = mid + 1;
    }
  }

  return -1;
};

// recursive variant
const recursiveBinarySearch = (arr, goal, left, right) => {
  let mid = Math.floor((left + right) / 2);

  if (goal === arr[mid]) {
    return mid;
  } else if (goal < arr[mid]) {
    right = mid - 1;
    return recursiveBinarySearch(arr, goal, left, right);
  } else if (goal > arr[mid]) {
    left = mid + 1;
    return recursiveBinarySearch(arr, goal, left, right);
  }

  return -1;
};

const result1 = recursiveBinarySearch(list, goal, 0, list.length - 1);
const result2 = binarySearch(list, goal);

console.log(result1);
console.log(result2);
