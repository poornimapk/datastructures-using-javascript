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

    // Add an element at the head, different between add() and this method is that, add() inserts element at the tail of the doubly linked list, whereas this method adds element at the head of the linked list.
    addNodeAtHead(key, value) {
        let node = new Node(key, value);
        if(this.head) {
            this.head.previous = node;
            node.next = this.head;
            this.head = node;
        } else {
            this.head = this.tail = node;
        }
        this.size++;
    }

    // remove an element at head, if an element exists. If not, return undefined.
    removeNodeAtHead() {
        if(this.head) {
            const removeHead = this.head;
            this.head = this.head.next;
            // If there are more than one nodes in the list, set the head's previous to null, if not, set the tail to null, since you removed the last element in the list.
            if(this.head) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }
            this.size--;
            return removeHead;
        }
        return undefined
    }

    // Add key value pair at given index
    addAtIndex(key, value, index) {

    }

    // Remove an element at Index
    removeAtIndex(index) {

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
dll.addNodeAtHead(0, 0);
dll.addNodeAtHead(-1, -1);
dll.printList();
console.log(`Size: ${dll.size}`);
dll.removeNodeAtHead();
dll.printList();
console.log(`Size: ${dll.size}`);