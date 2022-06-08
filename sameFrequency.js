function sameFrequency(num1, num2){
    num1 = num1.toString().split('');
    num2 = num2.toString().split('');
    let freq1 = {};
    let freq2 = {};
    
    if(num1.length !== num2.length) return false;
    
    for(let nums of num1){
        freq1[nums] = (freq1[nums] || 0) + 1;
    }
    for(let nums of num2){
        freq2[nums] = (freq2[nums] || 0) + 1;
    }
    
    for(let nums in freq1){
        if(!(nums in freq2)){
            return false
        }
        if(freq1[nums] !== freq2[nums]){
            return false;
        }
    }
    return true;
  }

  sameFrequency(182,281);
  //sameFrequency(34,14) => false