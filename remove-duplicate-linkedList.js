/**
 * Definition for singly-linked list. Constructor
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    let temp = head;
    
    while(temp && temp.next){
        if(temp.next.val === temp.val){
            temp.next = temp.next.next;
        }else {
            temp = temp.next;
        }
    }
    return head;
};
