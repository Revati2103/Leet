//let Queue = require('./Queue');

//Constructor 

class Queue {
    constructor() {
      this.data = [];
    }
  
    add(record) {
      this.data.unshift(record);
    }
  
    remove() {
      return this.data.pop();
    }
  
    peek() {
      return this.data[this.data.length - 1];
    }
  }

function weave(sourceOne, sourceTwo) {
    let q = new Queue();

    while(sourceOne.peek() || sourceTwo.peek()){

        if(sourceOne.peek()){
            q.add(sourceOne.remove());
        }

        if(sourceTwo.peek()){
            q.add(sourceTwo.remove());
        }

    
    }

    return q;
}




const queueOne = new Queue();
queueOne.add(1);
queueOne.add(2);

const queueTwo = new Queue();
queueTwo.add('Hi');
queueTwo.add('There');

const q = weave(queueOne, queueTwo);
console.log(q);

