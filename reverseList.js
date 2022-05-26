

 
  function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

var reverseList = function(head){
    let curr = head;
    let prev = null;
    let next = null;

    while(curr!= null){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    
    return prev;

}
reverseList([1,2,3,4,5])