
const list = require('./linkedlist');

function midpoint(list){
 
    
    let slow = list.getFirst();
    let fast = list.getFirst();

    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }
   
    return slow;
    
}

const l = new list();
l.insertLast('a');
l.insertLast('b');
l.insertLast('c');
console.log(midpoint(l));