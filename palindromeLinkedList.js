function ListNode(val,next){
    this.val = (val === undefined)? 0: val;
    this.next = (next === undefined) ? null: next;
}

function isPalindrome(head){
if(!head) return true;
let slow = head;
let fast = head;
let mainlist = head;

while(fast.next && fast.next.next){
    slow = slow.next;
    fast = fast.next.next;
}
let midlist = reverseList(slow.next);
while(midlist){
if(midlist.val !== mainlist.val) return false;
midlist = midlist.next;
mainlist = mainlist.next;
}
console.log('true');
return true;


}

function reverseList(head){
let prev = null;
let curr = head;
let next = null;

while(curr){
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
}
return prev;
}

isPalindrome([1,2,2,1])