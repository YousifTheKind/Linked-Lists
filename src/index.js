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
}

class Node {
    value = null;
    nextNode = null;

    constructor(value, nextNode) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

const list = new LinkedList();
list.append("ss");
// list.append("sh");
// list.prepend("cats");
console.log(list.at(0));
