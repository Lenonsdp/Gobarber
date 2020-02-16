// yarn add bee-queue
import Bee from 'bee-queue';

class Queue {
  constructor() {
    this.queues = {};

    this.init();
  }
}

export default new Queue();
