
Write a function that alternates printing ping and pong every 100ms

 function pingPong(){

    let count = 0;

    let intervalId = setInterval(() => {

    if(count%2 === 0){
        console.log('ping');
    }else {
        console.log('pong');
    }
        count++;

    if(count === 10){
        clearInterval(intervalId);
    }
        
    },100)
    
}

pingPong();

ping
pong
ping
pong
ping
pong
ping
pong
ping
pong
