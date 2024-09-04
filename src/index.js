#!/usr/bin/env node

class LinkedList {
    #head;
    #list;
    constructor() {
        this.#head = null;
        this.#list = {};
    }
    append(value) {
        if (this.#head == null) {
            this.prepend(value);
        } else {
            this.tail.nextNode = new Node(value);
        }
    }

    prepend(value) {
        this.#head = new Node(value, this.#head);
        this.#list.head = this.#head;
    }

    get size() {
        if (this.#head == null) return "List is Empty!";

        let counter = 0;
        let temp = this.#head;
        while (temp.nextNode != null) {
            counter++;
            temp = temp.nextNode;
        }
        return counter;
    }

    get getHead() {
        if (this.#head == null) return "List is Empty!";
        return this.#list.head;
    }

    get tail() {
        if (this.#head == null) return "List is Empty!";
        let lastNode = this.#head;
        while (lastNode.nextNode != null) {
            lastNode = lastNode.nextNode;
        }
        return lastNode;
    }

    at(index) {
        if (this.#head == null) return "List is Empty!";
        let temp = this.#head;
        let counter = 0;
        while (temp != undefined) {
            if (counter == index) {
                return temp;
            } else {
                counter++;
                temp = temp.nextNode;
            }
        }
    }

    pop() {
        if (this.#head == null) return "List is Empty!";
        let prev = null;
        let curr = this.#head;
        if (curr == this.tail) {
            curr = curr.nextNode;
            return;
        }
        while (curr.nextNode != null) {
            prev = curr;
            curr = curr.nextNode;
        }
        prev.nextNode = curr.nextNode;
    }

    contains(value) {
        let temp = this.#head;
        while (temp !== null && temp.value !== value) {
            temp = temp.nextNode;
        }
        // if the value is not in the list
        if (temp == null) {
            return false;
        }

        return true;
    }

    find(value) {
        let temp = this.#head;
        let counter = 0;
        while (temp !== null && temp.value !== value) {
            counter++;
            temp = temp.nextNode;
        }
        if (temp !== null) return counter;
        return null;
    }

    toString() {
        let stringList = "";
        let temp = this.#head;

        while (temp !== null) {
            stringList = stringList + `( ${temp.value} ) -> `;
            temp = temp.nextNode;
        }

        return stringList + "null";
    }

    insertAt(value, index) {
        if (this.#head == null) return "List is Empty!";
        if (index < 0 || index > this.size) {
            return `index should be between 0 and ${this.size}`;
        }
        let prev = null;
        let curr = this.#head;
        let counter = 0;

        while (curr != null && counter !== index) {
            counter++;
            prev = curr;
            curr = curr.nextNode;
        }
        prev.nextNode = new Node(value, curr);
    }

    removeAt(index) {
        if (this.#head == null) return "List is Empty!";
        if (index < 0 || index > this.size) {
            return `index should be between 0 and ${this.size}`;
        }
        let curr = this.#head;
        let prev = null;
        let counter = 0;
        // if there is only one element
        if (curr == this.tail) {
            this.pop();
            return;
        }

        while (curr !== null && counter !== index) {
            counter++;
            prev = curr;
            curr = curr.nextNode;
        }

        prev.nextNode = curr.nextNode;
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

// testing
const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("cats");
console.log(list.size);
console.log(list.at(0));
console.log(list.getHead);
console.log(list.tail);
list.pop();
console.log(list.contains("sh"));
console.log(list.find("catss"));
console.log(list.toString());
console.log(list.insertAt("some value", 4));
console.log(list.toString());
console.log(list.removeAt(2));
console.log(list.toString());
