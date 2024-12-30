const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  getUnderlyingList() {
    return this.front;
  }

  enqueue(value) {
    const queueNode = new ListNode(value);
    if (!this.size) {
      this.front = queueNode;
      this.rear = queueNode;
    } else {
      this.rear.next = queueNode;
      this.rear = queueNode;
    }
    this.size += 1;
    return queueNode.value;
  }

  dequeue() {
    if (this.size) {
      const tempValue = this.front.value;
      this.front = this.front.next;
      this.size -= 1;
      return tempValue;
    }
    return null;
  }
}

module.exports = {
  Queue
};
