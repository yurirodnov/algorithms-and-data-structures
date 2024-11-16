const list = [12, 2, 5, 1, 0, 18, 4, 3];

const bubble = (arr) => {
  let temp = 0;

  for (let i = 0; i < arr.length; i += 1) {
    for (let t = 0; t < arr.length - i - 1; t += 1) {
      if (arr[t] > arr[t + 1]) {
        temp = arr[t];
        arr[t] = arr[t + 1];
        arr[t + 1] = temp;
      } else {
        continue;
      }
    }
  }

  return arr;
};

const result = bubble(list);
