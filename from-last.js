// get the first element in the linked list starting from the end 

function fromLast(list,n){
let slow = list.getFirst();
let fast = list.getFirst();

while (n>0){
    fast = fast.next;
    n--;
}

while(fast.next){
    slow = slow.next;
    fast = fast.next;
}
return slow;
}
