class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }
}
const list = new LinkedList();
list.head = new ListNode();

var reverseBetween = function(head, left, right){
    let curr = head, start = head, position = 1;
    
    while(position < left) {
        start = curr
        curr = curr.next;
        position ++;
    }
    
    let reversedList = null,  tail = curr;
    
    while(position >= left && position <= right) {
        let next = curr.next;
        curr.next = reversedList;
        reversedList = current;
        curr = next;
        position ++
    }
    start.next = reversedList;
    tail.next = curr;
    
    return left > 1 ? head : reversedList
}
reverseBetween([1,2,3,4,5], 2, 4)