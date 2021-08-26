class Node {
  constructor(data, ref) {
    this.data = data
    this.ref = ref
  }
}

class MyLinkedList {
  constructor() {
    this.head = new Node(0, null)
    this.tail = this.head
  }
  prepend(data) {
    let newNode = new Node(data, null)
    newNode.ref = this.head.ref
    this.head.ref = newNode
  }
  traverse() {
    let cur = this.head
    while(cur !== null) {
      console.log(cur.data)
      cur = cur.ref
    }
  }
  reverse() {
    let tempPrev = null
    let tempNext = null
    let cur = this.head
    while(cur !== null) {
      // reassign pointers
      // if tempPrev is null then cur.next will be first node
      // if cur.next is null then its last node. Make head point to it.
      tempNext = cur.ref
      if(cur.ref === null) {
        this.head = cur
      }
      cur.ref = tempPrev
      tempPrev = cur
      cur = tempNext
    }
  }
}

let list = new MyLinkedList();
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.traverse()
list.reverse()
list.traverse()