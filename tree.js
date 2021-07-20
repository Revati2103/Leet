class Tree {
    constructor (){
        this.root = null;
    }

    traverseBF(fn){
        const arr = [this.root];

        while(arr.length){
            const node = arr.shift();
            while(arr.length){
            arr.push(...node.children);
            fn(node);
            }
        }
    }
    traverseBF(fn){
        const arr = [this.root];

        while(arr.length){
            const node = arr.shift();
            while(arr.length){
            arr.unshift(...node.children);
            fn(node);
            }
        }
    }
    

}

class Node {
    constructor(data) {
      this.data = data;
      this.children = [];
    }
  
    add(data) {
      this.children.push(new Node(data));
    }
  
    remove(data) {
      this.children = this.children.filter((node) => {
        return node.data !== data;
      });
    }
  }
  
  module.exports = {Tree, Node};