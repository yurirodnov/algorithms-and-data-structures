const arr = [1, 2, 3, 4, 5];
const textArr = ["a", "b", "c", "d"];

// spred-operator
// const n = [...arr];
// console.log(n) // [ 1, 2, 3, 4, 5 ]

// Clear array
// arr.length = 0;

// Stack example
// arr.push(10);
// arr.pop();

// Queue example
// arr.push(10)
// arr.shift()

// Массив – это особый тип объекта, предназначенный для работы с упорядоченным набором элементов.

// Объявление:
// // квадратные скобки (обычно)
// let arr = [item1, item2...];

// // new Array (очень редко)
// let arr = new Array(item1, item2...);

// Вызов new Array(number) создаёт массив с заданной длиной, но без элементов.
// Свойство length отражает длину массива или, если точнее, его последний цифровой индекс плюс один. Длина корректируется автоматически методами массива.
// Если мы уменьшаем length вручную, массив укорачивается.

// Получение элементов:
// Мы можем получить элемент по его индексу, например arr[0].
// Также мы можем использовать метод at(i) для получения элементов с отрицательным индексом, для отрицательных значений i, он отступает от конца массива. В остальном он работает так же, как arr[i], если i >= 0.

// Мы можем использовать массив как двустороннюю очередь, используя следующие операции:
// push(...items)добавляет items в конец массива.
// pop() удаляет элемент в конце массива и возвращает его.
// shift() удаляет элемент в начале массива и возвращает его.
// unshift(...items) добавляет items в начало массива.

// Чтобы пройтись по элементам массива:
// for (let i=0; i<arr.length; i++) – работает быстрее всего, совместим со старыми браузерами.
// for (let item of arr) – современный синтаксис только для значений элементов (к индексам нет доступа).
// for (let i in arr) – никогда не используйте для массивов!

// Методы pop/push, shift/unshift

// Очередь – один из самых распространённых вариантов применения массива. В области компьютерных наук так называется упорядоченная коллекция элементов, поддерживающая два вида операций:

// push добавляет элемент в конец.
// shift удаляет элемент в начале, сдвигая очередь, так что второй элемент становится первым.

// Массивы поддерживают обе операции.

// На практике необходимость в этом возникает очень часто. Например, очередь сообщений, которые надо показать на экране.

// Существует и другой вариант применения для массивов – структура данных, называемая стек.

// Она поддерживает два вида операций:

// push добавляет элемент в конец.
// pop удаляет последний элемент.

// Таким образом, новые элементы всегда добавляются или удаляются из «конца».

// Примером стека обычно служит колода карт: новые карты кладутся наверх и берутся тоже сверху:

// Массивы в JavaScript могут работать и как очередь, и как стек. Мы можем добавлять/удалять элементы как в начало, так и в конец массива.

// В компьютерных науках структура данных, делающая это возможным, называется двусторонняя очередь.

// Методы, работающие с концом массива:

// pop

// Удаляет последний элемент из массива и возвращает его:

// let fruits = ["Яблоко", "Апельсин", "Груша"];

// alert( fruits.pop() ); // удаляем "Груша" и выводим его

// alert( fruits ); // Яблоко, Апельсин

// И fruits.pop() и fruits.at(-1) возвращают последний элемент массива, но fruits.pop() также изменяет массив, удаляя его.
// push

// Добавляет элемент в конец массива:

// let fruits = ["Яблоко", "Апельсин"];

// fruits.push("Груша");

// alert( fruits ); // Яблоко, Апельсин, Груша

// Вызов fruits.push(...) равнозначен fruits[fruits.length] = ....

// Методы, работающие с началом массива:

// shift

// Удаляет из массива первый элемент и возвращает его:

// let fruits = ["Яблоко", "Апельсин", "Груша"];

// alert( fruits.shift() ); // удаляем Яблоко и выводим его

// alert( fruits ); // Апельсин, Груша

// unshift

// Добавляет элемент в начало массива:

// let fruits = ["Апельсин", "Груша"];

// fruits.unshift('Яблоко');

// alert( fruits ); // Яблоко, Апельсин, Груша

// Методы push и unshift могут добавлять сразу несколько элементов:

// let fruits = ["Яблоко"];

// fruits.push("Апельсин", "Груша");
// fruits.unshift("Ананас", "Лимон");

// // ["Ананас", "Лимон", "Яблоко", "Апельсин", "Груша"]
// alert( fruits );

// Мы вернёмся к массивам и изучим другие методы добавления, удаления, выделения элементов и сортировки массивов в главе: Методы массивов.
