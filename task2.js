class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}
class CyclicLinkedList {
    add(value) {
        let node = new Node(value);
        let current = this.root;
        if (current == null) {
            this.root = node;
        } else {
            while (current.next != null && current.next.data != this.root.data) {
                current = current.next;
            }
            node.next = this.root;
            current.next = node;
        }
    }
}
class LinkedList {
    add(value) {
        const node = new Node(value);
        let current = this.root;
        if (current == null) {
            this.root = node;
        } else {
            while (current.next != null) {
                current = current.next;
            }
            current = current.next;
        }
    }
}
function isCyclic(list) {
    let current = list.root
    while (current != null && current.next != null) {
        if (current.next.data === list.root.data) {
            return true;
        }
        current = current.next;
    }
    return false;
}
const cylicList = new CyclicLinkedList();
cylicList.add(1);
cylicList.add(2);
cylicList.add(3);
const list = new LinkedList();
cylicList.add(1);
cylicList.add(2);
cylicList.add(3);
console.log("isCyclic", isCyclic(cylicList)); 
console.log("isCyclic", isCyclic(list)); 
