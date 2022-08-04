// Create a Node class to add to the LinkedList
class Node {
    // constructor
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

// Create LinkedList class 

class LinkedList {
    constructor() {
        this.head = null; // by default there will be just one node, so it's head will be null
        this.size = 0; // by default size of LinkedList is zero
    }
    
    // Add element to the last of LinkedList
    add(element) {
        let node = new Node(element);
        let current;
        if(this.head === null) {
            this.head = node;
        } else { // Iterate till last element and add value
            current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    //Remove element from index passed
    removeFrom(index) {
        // There has to be element before removal
        if(index < 0 || index >= this.size) {
            return console.log("Please enter a valid index")
        } else { // remove reference to the passed index value
            let curr=0;
            let prev=0;
            let it = 0;
            curr = this.head;
            prev = curr;
            if(index === 0) {
                this.head = curr.next;
            } else {
                while(it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                prev.next = curr.next;
            }
            this.size--;
            return curr.element;
        }
    }

    // Print all elements in LinkedList
    printList() {
        let curr = this.head;
        let str = "";
        while(curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }

    // Find middle element in a Linear fashion
    findMiddleLinear() {
        let middle = this.size / 2;
        let it = 0;
        let curr = this.head;
        while(it < middle - 1) {            
            curr = curr.next;
            ++it;
        }
        (middle % 2 === 0) ? console.log(`Middle element: ${curr.next.element}`) :
             console.log(`Middle element: ${curr.element}`);
    }

    // Find middle element using two pointers - this solution is more effective than linear fashion
    findMiddleTwoPointers() {
        let slow = this.head;
        let fast = this.head;
        if(this.head === null){
            console.log(-1);
        }  else {
            while(fast != null && fast.next != null) {
                fast = fast.next.next;
                slow = slow.next;
            }
        }
        console.log(slow.element);
    };

    // Remove nth node from the end of the linked list
    removeNthFromEnd(n) {
        let fast = this.head;
        let slow = this.head;

        while(n > 0) {
            fast = fast.next;
            n--;
        }

        if(fast === null) {
            head = head.next;
        }

        while(fast.next != null) {
            slow = slow.next;
            fast = fast.next;
        }

        slow.next = slow.next.next;
    }

    // Reverse linkedlist 
    reverseLinkedList() {
        let current = this.head;
        let prev = null;
        let next = null;
        while(current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
}

let ll = new LinkedList();
ll.add(10);
ll.printList();
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
ll.add(60);
ll.add(70);
// ll.add(80);
ll.printList();
/* ll.removeFrom(0);
ll.printList();
console.log(ll.size);
ll.printList();
ll.removeFrom(ll.size-1);
ll.printList(); */
ll.findMiddleTwoPointers();
ll.removeNthFromEnd(2);
ll.printList();
ll.reverseLinkedList();
ll.printList();