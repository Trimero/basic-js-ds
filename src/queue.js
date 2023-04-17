const { ListNode } = require('../extensions/list-node.js');

// const { ListNode } = require('../extensions/list-node.js');

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
    this.headQueue = null;
    this.endQueue = null;
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (this.headQueue === null) {
      this.headQueue = newNode;
      this.endQueue = newNode;
    } else { this.endQueue.next = newNode;
      this.endQueue = newNode;
    } 
  }

  dequeue() {
    if (this.headQueue === null) {
      return null;
    }

    const value = this.headQueue.value;
    this.headQueue = this.headQueue.next;

    if (this.headQueue === null) {
      this.endQueue = null;
    }

    return value;
  }

  getUnderlyingList() {
    return this.headQueue;
  }
}

module.exports = {
  Queue
};
