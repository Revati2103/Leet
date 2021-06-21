//Stack using javascript Arrays 

class Stack {
    constructor(){
        this.data = [];
    }
    
    push(record){
        this.data.push(record);
    }
    
    pop(){
       return this.data.pop();
    }
    
    peek(){
        return this.data[this.data.length -1];
    }

}

let s = new Stack();
s.push(1);
console.log(s);
s.push(2);
console.log(s);
s.pop();
console.log(s);