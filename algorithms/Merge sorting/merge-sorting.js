let iter = 0;

const mergeSorting = (arr) => {
  // Базовый случай рекурсии: если массив содержит 1 или меньше элементов, он уже отсортирован
  if (arr.length <= 1) {
    return arr;
  }

  // Разделяем массив на две части
  const mid = Math.floor(arr.length / 2);
  const left = mergeSorting(arr.slice(0, mid));
  const right = mergeSorting(arr.slice(mid));
  iter += 1;
  console.log(`Iteration ${iter} left is ${left} and right is ${right}`);

  // Слияние двух отсортированных частей
  return merge(left, right);
};

const merge = (left, right) => {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Сравниваем элементы из обеих частей и собираем отсортированный массив
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Если элементы остались в одном из массивов, добавляем их в результат
  console.log(
    `result of merge() is ${result.concat(
      left.slice(leftIndex),
      right.slice(rightIndex)
    )}`
  );
  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
};

// Пример использования
const list = [38, 27, 43, 3, 9, 82, 10];
const result = mergeSorting(list);
console.log(result); // [3, 9, 10, 27, 38, 43, 82]
