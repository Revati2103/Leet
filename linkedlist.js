class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }
// Insert data into the linked list
    insertFirst(data){
        this.head= new Node (data, this.head);
        this.head = node;
    }

// Find size of the Linked List(count the no of nodes)

    size(){
        let counter = 0;
        let node = this.head;

        while(node){
            counter ++;
            node = node.next;
        }

        return counter;
    }

// Returns the first node of Linked list
    getFirst(){
   return this.head;
    }


//Returns the last node of Linked list

 getLast(){
    if(!this.head){
        return null;
    }

    let node = this.head;
    while(node){
        if(!node.next){
            return node;
        }
        node = node.next;
    }
 }
    //Clears list

     clearList(){
        this.head = null;
    }
//Remove first element from the linked list

    removeFirst(){
if(!this.head){
    return;
}
this.head = this.head.next;
    }

 //Remove last element from the linked list
 removeLast(){
     if(!this.head){
         return;
     }

     if(!this.head.next){
         this.head = null;
         return;
     }

    let previous = this.head;
    let node = this.head.next;

    while(node.next){
        previous = node;
        node = node.next;
    }
    previous.next = null;
 }
//Insert a node at the end of Linked List
 insertLast(data){
     
let newNode = new Node(data);

if(!this.head){
    this.head = newNode;
}
const lastNode = this.getLast();

lastNode.next = newNode;
newNode.next = null;
 }

 //Get a node at a given index

 getAt(index){
   
     let node = this.head;
     let counter = 0;

     while(node){
        if(counter === index){
            return node;
        }
        node = node.next;
        counter ++;
     }
     return null;
 }

 removeAt(index){
     if(!this.head){
         return ;
     }

     if(index === 0){
         this.head = this.head.next;
         return;
     }

     const previous = this.getAt(index-1);
     if(!previous || !previous.next){
         return;
     }
     previous.next = previous.next.next;
     
 }

 insertAt(data,index){

     if(!this.head){
         this.head = new Node (data);
         return;
     }

     if(index === 0){
        this.head = new Node(data, this.head);
        return;
    }

     const previous = this.getAt(index-1)|| this.getLast();
     const node = new Node(data, previous.next);
     previous.next = Node;

 }

 }

module.exports = {Node,LinkedList}

 






// const nodeOne = new Node(5);
// const list = new LinkedList();
// list.head = nodeOne;
// list.insertFirst(80);
// console.log(list);
// console.log(list.size());
