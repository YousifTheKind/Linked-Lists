#!/usr/bin/env node

class LinkedList {
    head = null;
    append(value) {
        if (this.head == null) {
            this.head = new Node(value, this.head);
        } else {
            let temp = this.head;
            while (temp.nextNode != null) {
                temp = temp.nextNode;
            }
            temp.nextNode = new Node(value);
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
list.append("sh");
list.append("cats");
console.log(list.head);
