// Create a Node class to add to the DoublyLinkedList
class Node {
    // constructor
    constructor(key, value, next = null, prev = null) {
        this.key = key;
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(key, value) {
        let node = new Node(key, value);

        if(this.tail) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        } else {
            this.head = this.tail = node;
        }        
    }

    printList() {
        let curr = this.head;
        let str = "";
        while(curr) {
            str += curr.value + " ";
            curr = curr.next;
        }
        console.log(str);
    }
}

const dll = new DoublyLinkedList();
dll.add(1, 1);
dll.add(2, 20);
dll.printList();