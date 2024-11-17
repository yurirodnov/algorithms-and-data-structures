class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue(item) {
    this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  top() {
    return !this.isEmpty() ? this.items[0] : console.log("Queue is empty!");
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(34);
queue.enqueue(5);

console.log(queue);
console.log(queue.top());
