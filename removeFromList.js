/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    if(!head){
        return head;
    }
    
   while (head && head.val === val) {
    head = head.next
}
    let curr = head;
    
    while(curr && curr.next){
        if(curr.next.val === val){
            curr.next = curr.next.next;
        }else {
            curr = curr.next;
        }
    }
    
    return head;
};

let head = [1,2,3,4,5,6];
let val = 6;
removeElements(head,val);