function ListNode(val) {
         this.val = val;
         this.next = null;
    }

    var hasCycle = function(head) {
        let slow = head;
        let fast = head;
        
        if(!head){
            return false;
        }
        
        while(fast.next && fast.next.next){
            slow = slow.next;
            fast = fast.next.next;
            
            if(slow === fast){
                return true;
            }
        }
        
        return false;
    };
