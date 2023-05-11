//Breadth First Search (BFS)

//Start from the root , then traverse each row left to right and store nodes in this sequence.

BFS() {
	    
	    let currentNode = this.root;
	    let queue = [];
	    let result = [];
	    
	    queue.push(currentNode); // Push the whole node(value, left,right)
	    
	    while(queue.length){
	        currentNode = queue.shift();
	        result.push(currentNode.value); // Just the value , not left & right
	        if(currentNode.left) queue.push(currentNode.left);
	        if(currentNode.right) queue.push(currentNode.right);
	    }
	    
	    return result;
	    
	}

// Depth First Search (DFS)

// There are 3 possible ways of ordering the node : 

// Pre-Order : Root => Left => Right 
// Post-Order : Left => Right => Root
// In-Order : Left => Root => Right



DFSPreOrder(){
	    let result = [];
	    
	    function traverse(currentNode){
	        result.push(currentNode.value);
	        if(currentNode.left) traverse(currentNode.left);
	        if(currentNode.right) traverse(currentNode.right);
	    }
	    traverse(this.root);
	    return result;
	}
	DFSPostOrder(){
	    let result = [];
	    function traverse(currentNode){
	        if(currentNode.left) traverse(currentNode.left);
	        if(currentNode.right) traverse(currentNode.right);
	        result.push(currentNode.value);
	    }
	    traverse(this.root);
	    return result;
	}


DFSInOrder(){
        let result = [];
        function traverse(currentNode){
            if(currentNode.left) traverse(currentNode.left);
            result.push(currentNode.value);
            if(currentNode.right) traverse(currentNode.right);
            
        }
        traverse(this.root);
        return result;
    }






