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
var swapPairs = function(head) {
    let dummy = new ListNode(0, head)
    let prev = dummy ;
    let curr = head;

    while(curr && curr.next){
        //save references

        let nextPair = curr.next.next;
        let second = curr.next;

        //swap

        second.next = curr;
        curr.next = nextPair;
        prev.next = second;

        //advance pointers

        prev = curr;
        curr = nextPair;

    }

    return dummy.next;
};
