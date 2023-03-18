const {LinkedList,Node} = require('./linkedlist');

// Check if list is a circular linked list. 

function circular(list){

    const list = new LinkedList();
    let slow = list.getFirst();
    let fast = list.getFirst();

    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast){
            return true;
        }
    }
   
return false;
    
}

const l = new list();
const a = new Node('a');
const b = new Node ('b');
const c = new Node('c');

l.head = a;
a.next = b;
b.next = c;
c.next = b;
circular(l);
