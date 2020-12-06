
const node = require('./node');

class linkedList {
  constructor(head = null) {
    this.head = head;
  }

  add(value) {
    const newNode = new node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  deleteNodeGivenNode(node) {
    if(node.next === null) {
      node = null;
    }
    else {
      node.data = node.next.data;
      node.next = node.next.next;
    }
  }

  deleteValue(value) {
    let current = this.head.next;
    let previous = this.head;

    if(this.head.data === value) {
      this.head = this.head.next;
    }
    
    while(current !== null) {
        if (current.data === value) {
          previous.next = current.next;
          current = null;
          return;
        }
        else {
          previous = previous.next;
          current = current.next;
        }
    }
  }

  removeDuplicates() {
    let pointer = this.head;
    let valuesAppearance = {};

    while(pointer !== null) {
      if(`${pointer.data}` in valuesAppearance ) {
        valuesAppearance[pointer.data] += 1;
      }
      else {
        valuesAppearance[pointer.data] = 1;
      }
      pointer = pointer.next;
    }

    pointer = this.head;
    
    while(pointer !== null) {
      if(valuesAppearance[pointer.data] > 1) {
        valuesAppearance[pointer.data] -= 1;
        this.deleteNodeGivenNode(pointer);
      }
      pointer = pointer.next;
    }
  }

  reverseList() {
    let current = this.head; 
    let previous =  null;
    
    while(current !== null) {
        let next = current.next;
        current.next = previous; 
        previous = current;      
        current = next;    
    }
    
    this.head = previous;    

  };

deleteNNodesAfterMNodes(n, m){
  let counter = 0;
  let current = this.head;

  if(m < n) {
    return;
  }

  while(current !== null) {
    counter++;

    if(counter === m && current !== null) {
      let startDelete = current;
      for(let i = 0; i < n; i++) {
        startDelete = startDelete.next;
      }
      current.next = startDelete.next;
      counter = 0;
    }

    current = current.next;
  }
}

printList() {
  let pointer = this.head;
  let string = '';

  while(pointer !== null){
    string += `${pointer.data} -> `;
    pointer = pointer.next;
  }
  string += 'null';
  return string;
}
}

module.exports = linkedList;