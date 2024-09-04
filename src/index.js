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
        let counter = 1;
        let temp = this.#head;
        while (temp.nextNode != null) {
            counter++;
            temp = temp.nextNode;
        }
        return counter;
    }

    get getHead() {
        return this.#list.head;
    }

    get tail() {
        let lastNode = this.#head;
        while (lastNode.nextNode != null) {
            lastNode = lastNode.nextNode;
        }
        return lastNode;
    }

    at(index) {
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
        let prev = null;
        let curr = this.#head;
        while (curr.nextNode != null) {
            prev = curr;
            curr = curr.nextNode;
        }
        prev.nextNode = curr.nextNode;
    }

    removeAt(index) {}

    get getList() {
        return this.#list;
    }
}

class Node {
    constructor(value, nextNode) {
        if (!value) this.value = null;
        else this.value = value;

        if (!nextNode) this.nextNode = null;
        else this.nextNode = nextNode;
    }
}

const list = new LinkedList();
list.append("ss");
list.append("sh");
list.prepend("cats");
console.log(list.tail);
list.pop();
console.log("-------------------------------");

console.log(list.getList);
