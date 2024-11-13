class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  print() {
    let current = this.head;
    while (this.curent) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.print();
console.log(list);
