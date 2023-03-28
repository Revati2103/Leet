//constructor


class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    push(value){
        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
            this.length++;
            return this;

    }

    pop(){
        if(!this.head){
            return null;
        }

        if(this.length === 0){
            this.head = null;
            this.tail = null;
            return;
        }else{
            let temp = this.head;
            let prev = this.head;

            while(temp.next){
                prev = temp;
                temp = temp.next;
            }

           this.tail = prev;
           this.tail.next = null;
           this.length--;

        }

        return temp;
    }

    unshift(value){
        let newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift(){
        if(!this.head) return null;
        
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;

        if(this.length === 0){
            this.tail = null;
        }

        return temp;

    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        let temp = this.head;
        for(let i = 0; i< index; i++){
            temp = temp.next;
        }
        return temp;
    }

    set(index,value){
        let temp = this.get(index);
        if(temp){
            temp.value = value;
            return true;
        }
        return false;
    }

    insert(index,value){

        if(index < 0 || index > this.length) return false
        if(index === this.length) return this.push(value)
        if(index === 0) return this.unshift(value)

        const newNode = new Node(value);
        let temp = this.head;

        for(let i = 0; i<index ; i++){
            temp = temp.next;
        }

        
        newNode.next = temp.next;
        temp.next = newNode;

        this.length++;
        return true;




    }
}

let myLinkedList = new LinkedList(4)
