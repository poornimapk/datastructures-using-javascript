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

    // Add elements to Doubly LinkedList
    add(key, value) {
        let node = new Node(key, value);

        if(this.tail) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        } else {
            this.head = this.tail = node;
        }
        
        this.size++;
    }

    // Print all items in List
    printList() {
        let curr = this.head;
        let str = "";
        while(curr) {
            str += curr.value + " ";
            curr = curr.next;
        }
        console.log(str);
    }

    // Remove element from the end
    remove() {
        if(this.tail) {
            const removedTail = this.tail;
            this.tail = this.tail.prev;
            if(this.tail) {
                this.tail.next = null;
            } else {
                this.head = null;
            }
            this.size--;
            return removedTail;
        }
        return undefined;
    }
}

const dll = new DoublyLinkedList();
dll.add(1, 1);
dll.add(2, 20);
console.log(`Size: ${dll.size}`);
dll.printList();
dll.remove();
dll.printList();
console.log(`Size: ${dll.size}`);