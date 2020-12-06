const array = require('./Arrays&strings/arrays');
const linkedList = require('./Linked list/linkedlist');

// const arr = new array();
// console.log(arr.isUnique("I love my mom")); // false
// console.log(arr.isUnique("I love him")); // true

const list = new linkedList();
list.add(10);
list.add(9);
list.add(8);
list.add(7);
list.add(6);
list.add(5);
list.add(4);
list.add(3);
list.add(2);
list.add(1);
// list.deleteValue(92);
// list.removeDuplicates();
// list.reverseList();
list.deleteNNodesAfterMNodes(1,1);
//console.log(list.head);
console.log(list.printList());