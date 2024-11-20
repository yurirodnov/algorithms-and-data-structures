const list = [4, 2, 13, 8, 24, 27, 1, 50, 3];

const quicksort = (arr) => {
  if (arr.length <= 1) {
    return arr; // Массив длины 0 или 1 уже отсортирован.
  }

  const pivot = arr[0];
  const smaller = [];
  const bigger = [];

  // Разделяем элементы на меньшие и большие
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      smaller.push(arr[i]);
    } else {
      bigger.push(arr[i]);
    }
  }

  // Рекурсивно сортируем меньший и больший массивы
  const sortedSmaller = quicksort(smaller);
  const sortedBigger = quicksort(bigger);

  // Объединяем отсортированные части и возвращаем итог
  return sortedSmaller.concat(pivot, sortedBigger);
};

const result = quicksort(list);
console.log(result);
