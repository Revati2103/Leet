// Reverse a LinkedList between a left and a right node.

function reverseBetween(m,n) {

if(!this.head) return null;
let dummy = new Node(0);
dummy.next = head;

let leftprev = dummy ;

// Step 1: Reach the node at the left position

for(let i = 0; i<m ; i++){
leftprev = leftprev.next;
}

leftprev.next = curr; // curr should point to the left node always

//Step 2:  reverse the list between m and n

let prev = null;

for(let i = 0; i<n-m+1 ; i++){
let temp = curr.next;
curr.next = prev;
prev = curr;
curr = curr.next;
}

//Step 3:  reset the pointers to complete the solution

leftprev.next.next = curr;
leftprev.next = prev;
return dummy.next;





}
