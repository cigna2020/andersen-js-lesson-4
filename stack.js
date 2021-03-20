class Stack {

  constructor(maxStackLength = 10) {
    this.maxStackLength = maxStackLength;
    this.newStack = {};
    this.currentStackLength = 0;
    if (this.maxStackLength < 0 || typeof (this.maxStackLength) !== 'number' || Object.is(this.maxStackLength, NaN)) throw new Error('The argument should be a number > 0!')
  }

  push(elem) {
    if (this.maxStackLength <= this.currentStackLength) {
      throw new Error('The stack is full!')
    } else {
      this.currentStackLength++
      this.newStack[this.currentStackLength] = elem;
    }
  }

  pop() {
    if (this.currentStackLength <= 0) {
      throw new Error('The stack is empty!')
    } else {
      const deletedElem = this.newStack[this.currentStackLength];
      delete this.newStack[this.currentStackLength];
      this.currentStackLength--;
      return deletedElem;
    }
  }

  peek() {
    let peekElem = null;
    if (this.currentStackLength === 0) {
      return peekElem;
    } else {
      peekElem = this.newStack[this.currentStackLength];
      return peekElem;
    }
  }

  isEmpty() {
    return this.currentStackLength === 0;
  }

  toArray() {
    let newArray = [];
    if (this.currentStackLength === 0) {
      return newArray;
    } else {
      for (let i = 1; i < this.currentStackLength + 1; i++) {
        newArray.push(this.newStack[i]);
      }
      return newArray;
    }
  }

  static fromIterable(iterable) {
    if (typeof (iterable[Symbol.iterator]) === 'function') {

      this.maxStackLength = iterable.length;
      let newStackCopy = {};
      let currentStackLengthCopy = 0;

      for (let i = 0; i < iterable.length; i++) {
        currentStackLengthCopy++
        newStackCopy[currentStackLengthCopy] = iterable[i];
      }
      this.newStack = newStackCopy;
      this.currentStackLength = currentStackLengthCopy;
    } else {
      throw new Error('An object is not iterable!')
    }
  }

};