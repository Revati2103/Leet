/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicatesUnsorted = function(head) {

    let nodeValues = new Map();
    let curr = head;

    while(curr){
        if(nodeValues.has(curr.val)){
            nodeValues.set(curr.val, true)
        }else {
            nodeValues.set(curr.val, false)
        }
        curr = curr.next;
    }
    
    curr = head;
    
    while(curr && curr.next){
        if(nodeValues.get(curr.next.val)){
            curr.next = curr.next.next
        }else {
            curr = curr.next
        }
    }

    if(nodeValues.get(head.val)){
        head = head.next;
    }

    return head;
};
