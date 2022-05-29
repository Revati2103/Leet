class Node{
constructor(data, next = null){
this.data = data;
this.next = next;
}
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    insertFirst(data){
      this.head = new Node(data, this.head);
    }

    size(){
        let counter = 0;
        let node = this.head;

        while(node){
            counter++;
            node = node.next;
        }

        return counter;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        let node = this.head;
       while(node){
           if(!node.next){
               return node;
           }
           node = node.next;
       }
    }

    clearList(){
        this.head = null;
    }

    removeFirst(){
        if(!head) {
            return;
        }
       else{
        this.head = this.head.next;
       }
        
       
        }

        removeLast(){
            if(!this.head) return;

            if(!this.head.next){
                this.head = null;
                return;
            }

            let prev = this.head;
            let node = this.head.next;

            while(node.next){
                prev = node;
                node = node.next;
            }

            prev.next = null;
     
    }

    insertLast(){
        const last = this.getLast();

        if(last){
        last.next = new Node(data);
        }else{
            this.head = new Node(data);
        }
    }

    getAt(index){
        let counter = 0;
        let size = this.size();
        let node = this.head;

        if(!this.head) {
            return null
        };

        if(index <0 || index > size){
            return;
        }

       
        while(node){
            if(counter === index){
                return node
            }else{
                node = node.next;
                counter++;
            }
           
        }


    }

    removeAt(index){
        let counter = 0;
        if(!this.head) return null;
        if(index === 0){
            this.head = null;
            return;
        }
        
        const prev = this.getAt(index-1);
        if(!prev) return;
        prev.next  = prev.next.next;
    }

    insertAt(index){
        
        if(!this.head) return null;
        if(index === 0){
            this.head = new Node(data);
            return;
        }
        
        const prev = this.getAt(index-1) || this.getLast();
        const node = new Node(data, prev.next);
        prev.next = node;

    }


}


    


const list = new LinkedList();
list.head = new Node(123);